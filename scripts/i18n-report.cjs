const fs = require('node:fs')
const path = require('node:path')
const root = path.resolve(__dirname, '..')
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'))
const write = (file, value) => fs.writeFileSync(path.join(root, file), value)
const inventory = read('docs/localization/ja-inventory.json')
const messages = read('src/common/i18n/ko.json')
const previous = read('src/common/i18n/terminology.json')
const bySource = new Map(previous.map((entry) => [entry.source, entry]))
const domainFile = /src\/common\/(locale|kcs|kcsetc|enemy_etc|area_name|mission|kcquest|kcquest_formatter)\.ts|^resources\//
const sources = new Set(inventory.filter((entry) =>
  !Object.hasOwn(messages, entry.source) && entry.uses.some((use) => domainFile.test(use.file) || use.file.startsWith('src/renderer/'))
).map((entry) => entry.source))
for (const message of Object.values(messages)) {
  for (const match of message.matchAll(/\{term:([^{}]+)\}/g)) sources.add(match[1])
}
for (const entry of previous) if (entry.status === 'confirmed' || !Object.hasOwn(messages, entry.source)) sources.add(entry.source)
const glossary = [...sources].sort((a, b) => a.localeCompare(b, 'ja')).map((source) => ({
  source, korean: null, candidates: [], uses: [], status: 'review',
  reason: 'KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함.',
  ...bySource.get(source),
  ...(inventory.some((entry) => entry.source === source) ? { uses: inventory.find((entry) => entry.source === source).uses } : {})
}))
write('src/common/i18n/terminology.json', JSON.stringify(glossary, null, 2) + '\n')
const confirmed = glossary.filter((entry) => entry.status === 'confirmed')
const pending = glossary.filter((entry) => entry.status !== 'confirmed')
write('src/common/i18n/terms.json', JSON.stringify(Object.fromEntries(confirmed.filter((entry) => entry.korean).map((entry) => [entry.source, entry.korean])), null, 2) + '\n')
const esc = (text) => String(text).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('|', '\\|').replace(/\r?\n/g, ' ↵ ')
const locations = (entry) => [...new Set(entry.uses.map((use) => `\`${use.file}\``))].join(', ') || '게임에서 수신한 명칭·설명 표시'
write('KOREAN_GLOSSARY.md', `# 한국어 용어집\n\n확정 ${confirmed.length}개 / 사용자 검수 필요 ${pending.length}개.\n\n사용자 지시에 따라 KC3 한국어 표기를 보조 기준으로 적용했습니다. 용어별 출처표는 생략합니다. 일반 UI 문장은 \`src/common/i18n/ko.json\`, 용어와 검수 상태는 \`src/common/i18n/terminology.json\`에서 관리합니다. 미확정 항목은 원문을 유지합니다.\n\n| 일본어 원문 | 한국어 또는 후보 | 기능·화면 | 상태 | 비고 |\n| --- | --- | --- | --- | --- |\n` + glossary.map((entry) => `| ${esc(entry.source)} | ${esc(entry.korean ?? (entry.candidates.join(' / ') || '원문 유지'))} | ${locations(entry)} | ${entry.status === 'confirmed' ? '확정' : '사용자 검수 필요'} | ${esc(entry.reason)} |`).join('\n') + '\n')
write('KOREAN_REVIEW.md', `# 한국어 사용자 검수 목록\n\n${pending.length}개 항목은 아직 미확정이며 일본어 원문을 유지합니다. **전체 한국어화 완료 상태는 아닙니다.** KC3 한국어 파일과 정확히 대응한 항목은 자동 적용했으며, 문맥이 다르거나 여러 표기가 있는 항목은 여기에 남겼습니다.\n\n소스에서 찾은 해역·원정명·전투 약어·임무 진행 문구와 서식 조각도 포함한 보수적인 목록입니다. 모든 항목을 새 용어로 볼 필요는 없으며 같은 화면의 항목끼리 묶어 검수하면 됩니다. 용어별 출처표는 사용자의 요청에 따라 생략합니다.\n\n## 확정 적용\n\n\`src/common/i18n/terminology.json\`의 해당 항목에 \`korean\`을 입력하고 \`status: "confirmed"\`, \`approvedBy: "jungsan765-lang"\`을 기록한 후 \`npm run i18n:report && npm run i18n:check\`를 실행하면 용어집과 실제 표시가 함께 갱신됩니다. 후보는 \`candidates\`에 기록하며 미확정 상태로는 표시되지 않습니다.\n\n| 일본어 원문 | 후보 | 기능·화면 | 검수가 필요한 이유 |\n| --- | --- | --- | --- |\n` + pending.map((entry) => `| ${esc(entry.source)} | ${esc(entry.candidates.join(' / ') || '원문 유지')} | ${locations(entry)} | ${esc(entry.reason)} |`).join('\n') + '\n')
console.log(`Glossary: ${confirmed.length} confirmed, ${pending.length} awaiting review; ${Object.keys(messages).length} UI messages.`)
