// Usage: node scripts/i18n-import-kc3.cjs path/to/kc3-translations
// Imports actual Korean spellings, never transliterating an unknown name.
const fs = require('node:fs')
const path = require('node:path')
const sourceRoot = process.argv[2]
if (!sourceRoot) throw new Error('Provide a local KC3 translation checkout.')
const read = (language, file) => JSON.parse(fs.readFileSync(path.join(sourceRoot, 'data', language, file), 'utf8').replace(/^\uFEFF/, ''))
const glossaryPath = 'src/common/i18n/terminology.json'
const glossary = new Map(JSON.parse(fs.readFileSync(glossaryPath, 'utf8')).map((term) => [term.source, term]))
const inventory = JSON.parse(fs.readFileSync('docs/localization/ja-inventory.json', 'utf8'))
const wanted = new Set(glossary.keys())
const candidates = new Map()
const korean = /[가-힣]/
function add(source, translation) {
  if (!source || typeof source !== 'string' || typeof translation !== 'string' || !korean.test(translation)) return
  if (!candidates.has(source)) candidates.set(source, new Set())
  candidates.get(source).add(translation)
}
function pair(japanese, translated) {
  if (typeof japanese === 'string') { if (wanted.has(japanese)) add(japanese, translated) }
  else if (Array.isArray(japanese) && Array.isArray(translated)) japanese.forEach((value, index) => pair(value, translated[index]))
  else if (japanese && translated && typeof japanese === 'object' && typeof translated === 'object') {
    for (const key of Object.keys(japanese)) if (Object.hasOwn(translated, key)) pair(japanese[key], translated[key])
  }
}
const ships = read('kr', 'ships.json')
for (const file of ['ships.json', 'items.json']) {
  for (const [japanese, translated] of Object.entries(read('kr', file))) add(japanese, translated)
}
const jpQuests = read('jp', 'quests.json')
for (const [id, quest] of Object.entries(read('kr', 'quests.json'))) {
  if (!jpQuests[id]) continue
  for (const field of ['name', 'desc']) {
    add(jpQuests[id][field], quest[field])
    if (field === 'desc' && typeof jpQuests[id][field] === 'string' && typeof quest[field] === 'string') {
      add(jpQuests[id][field].replace(/<br\s*\/?>/gi, ''), quest[field].replace(/<br\s*\/?>/gi, ''))
    }
  }
}
for (const file of ['terms.json', 'terms_extend.json', 'battle.json', 'equiptype.json', 'stype.json', 'useitems.json', 'ranks.json']) pair(read('jp', file), read('kr', file))
// These full class/role names are visible together in the matching Korean quest text.
for (const [source, spelling] of [
  ['軽巡洋艦', '경순양함'], ['重巡洋艦', '중순양함'], ['航空母艦', '항공모함'],
  ['海防艦', '해방함'], ['水上機母艦', '수상기모함'], ['航空戦艦', '항공전함'],
  ['旗艦', '기함'], ['編成', '편성']
]) {
  const krQuests = read('kr', 'quests.json')
  const matched = Object.entries(jpQuests).some(([id, quest]) => quest.desc?.includes(source) && krQuests[id]?.desc?.includes(spelling))
  if (!matched) throw new Error(`KC3 class wording changed: ${source}`)
  candidates.set(source, new Set([spelling]))
}
const jpAffix = read('jp', 'ship_affix.json')
const krAffix = read('kr', 'ship_affix.json')
for (const [id, japanese] of Object.entries(jpAffix.byId)) add(japanese, krAffix.byId[id])
// These identical spellings have different meanings in KC3's ship-type tables.
// Keep them pending rather than using the only available but inapplicable label.
const differentContext = new Set(['輸送', '補給', '夜戦', '入渠', '航空隊'])
// Explicitly matching interface contexts, rather than voting between different KC3 labels.
const contextKeys = {
  '遠征': ['terms.json', 'Expedition'],
  '戦果': ['terms_extend.json', 'ProfileRankingPoints'],
  '演習': ['terms.json', 'QuestFilterPvP'],
  '速力': ['terms.json', 'ShipSpeed'],
  '射程': ['terms.json', 'ShipLength'],
  '装甲': ['terms.json', 'ShipArmor'],
  '制空': ['terms.json', 'ShipAirPower'],
  'マンスリー': ['terms_extend.json', 'QuestFlowchartResetMonthlies']
}
for (const [source, [file, key]] of Object.entries(contextKeys)) {
  if (read('jp', file)[key] !== source) throw new Error(`KC3 context changed: ${key}`)
  candidates.set(source, new Set([read('kr', file)[key]]))
}
// Equipment categories are different from the broader menu group labels.
for (const [source, ids] of [['水上戦闘機', [2, 45]], ['陸上戦闘機', [3, 44]]]) {
  const [group, id] = ids
  if (read('jp', 'equiptype.json')[group][id] === source) candidates.set(source, new Set([read('kr', 'equiptype.json')[group][id]]))
}
// Term fragments are taken from the Korean wording of the same KC3 feature.
const termFragments = {
  '大破進撃': ['terms.json', 'SettingsNextBlocker', '대파진격'],
  'ドロップ': ['terms.json', 'SettingsDropFaces', '드랍'],
  '轟沈': ['terms.json', 'SettingsCheckNewShipFromDexTip', '굉침'],
  '進撃': ['terms.json', 'NextButtonBlockOverlay', '진격'],
  '補給': ['terms.json', 'SettingsRequestVerifierSortieShipUnsupplied', '보급'],
  '夜戦': ['terms.json', 'BattleKindNightStart', '야간전'],
  'ドラム缶': ['terms.json', 'ExpedCanister', '드럼통'],
  'ダメコン': ['terms.json', 'SettingsDisableHasDamecon', '다메콘'],
  'カットイン': ['terms.json', 'BattleAntiAirCutIn', '컷인'],
  'ギミック': ['terms.json', 'BossDebuffedTitle', '기믹'],
  'クオータリー': ['terms.json', 'SettingsBackupFrequencyQuarterly', '분기'],
  '航空偵察': ['terms.json', 'PanelAirReconnScore', '항공정찰'],
  '艦隊防空': ['terms.json', 'PanelFleetAATip', '함대 방공']
}
for (const [source, [file, key, spelling]] of Object.entries(termFragments)) {
  if (!read('kr', file)[key]?.includes(spelling)) throw new Error(`KC3 terminology changed: ${key}`)
  candidates.set(source, new Set([spelling]))
  differentContext.delete(source)
}
// Shared battle identifiers identify the same engagement state despite a different Japanese label.
const jpBattle = read('jp', 'battle.json'), krBattle = read('kr', 'battle.json')
for (const [source, group, id, column] of [
  ['制空均衡', 'airbattle', 0, 2],
  ['均衡', 'airbattle', 0, 0],
  ['T字有利', 'engagement', 3, 2],
  ['T字不利', 'engagement', 4, 2]
]) {
  if (!jpBattle[group][id] || !krBattle[group][id]) throw new Error('KC3 battle table changed')
  candidates.set(source, new Set([krBattle[group][id][column]]))
}
if (jpBattle.cutinDay[2].startsWith('連撃') && krBattle.cutinDay[2].startsWith('연격')) candidates.set('連撃', new Set(['연격']))
const allPairs = JSON.parse(fs.readFileSync(path.join(sourceRoot, 'data', 'jp', 'terms_extend.json'), 'utf8'))
const allKorean = read('kr', 'terms_extend.json')
for (const [key, japanese] of Object.entries(allPairs)) if (['艦隊', '戦艦', '重巡', '軽巡'].includes(japanese)) add(japanese, allKorean[key])
let confirmed = 0
for (const [source, translations] of candidates) {
  const old = glossary.get(source)
  if (old?.status === 'confirmed' && (old.approvedBy || old.verifiedBy !== 'KC3')) continue
  const values = [...translations]
  const valid = values.length === 1 && !differentContext.has(source)
  glossary.set(source, {
    source, korean: valid ? values[0] : null, candidates: valid ? [] : values,
    uses: old?.uses ?? [], status: valid ? 'confirmed' : 'review',
    reason: valid ? 'KC3 한국어 파일에서 동일 명칭 또는 동일 항목으로 확인.' : 'KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요.',
    verifiedBy: valid ? 'KC3' : undefined
  })
  if (valid) confirmed++
}
// Register only fully recognized ship suffix combinations for names already in the source inventory.
const suffixes = Object.fromEntries(Object.entries(krAffix.suffixes).filter(([, value]) => !/[{}?]/.test(value)))
const bases = Object.keys(ships).sort((a, b) => b.length - a.length)
const suffixKeys = Object.keys(suffixes).sort((a, b) => b.length - a.length)
function shipName(source) {
  if (Object.hasOwn(ships, source)) return ships[source]
  const base = bases.find((name) => source.startsWith(name))
  if (!base) return null
  let rest = source.slice(base.length), result = ships[base]
  while (rest) {
    const suffix = suffixKeys.find((value) => rest.startsWith(value))
    if (!suffix) return null
    result += suffixes[suffix]
    rest = rest.slice(suffix.length)
  }
  return korean.test(result) ? result : null
}
for (const entry of inventory) {
  if (glossary.get(entry.source)?.status === 'confirmed') continue
  const translated = shipName(entry.source)
  if (translated) glossary.set(entry.source, { source: entry.source, korean: translated, candidates: [], uses: entry.uses, status: 'confirmed', verifiedBy: 'KC3', reason: 'KC3 함명과 명시된 접미사만으로 전체 원문이 대응됨.' })
}
fs.writeFileSync(glossaryPath, JSON.stringify([...glossary.values()].sort((a, b) => a.source.localeCompare(b.source, 'ja')), null, 2) + '\n')
fs.writeFileSync('src/common/i18n/ship-names.json', JSON.stringify(ships, null, 2) + '\n')
fs.writeFileSync('src/common/i18n/ship-suffixes.json', JSON.stringify(suffixes, null, 2) + '\n')
fs.mkdirSync('LICENSES', { recursive: true })
fs.copyFileSync(path.join(sourceRoot, 'LICENSE'), 'LICENSES/KC3-TRANSLATIONS.txt')
console.log(`Imported ${confirmed} exact Korean spellings. Ambiguous or context-mismatched entries remain under review.`)
