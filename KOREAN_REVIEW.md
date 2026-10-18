# 한국어 사용자 검수 목록

617개 항목은 아직 미확정이며 일본어 원문을 유지합니다. **전체 한국어화 완료 상태는 아닙니다.** KC3 한국어 파일과 정확히 대응한 항목은 자동 적용했으며, 문맥이 다르거나 여러 표기가 있는 항목은 여기에 남겼습니다.

소스에서 찾은 해역·원정명·전투 약어·임무 진행 문구와 서식 조각도 포함한 보수적인 목록입니다. 모든 항목을 새 용어로 볼 필요는 없으며 같은 화면의 항목끼리 묶어 검수하면 됩니다. 용어별 출처표는 사용자의 요청에 따라 생략합니다.

## 확정 적용

`src/common/i18n/terminology.json`의 해당 항목에 `korean`을 입력하고 `status: "confirmed"`, `approvedBy: "jungsan765-lang"`을 기록한 후 `npm run i18n:report && npm run i18n:check`를 실행하면 용어집과 실제 표시가 함께 갱신됩니다. 후보는 `candidates`에 기록하며 미확정 상태로는 표시되지 않습니다.

| 일본어 원문 | 후보 | 기능·화면 | 검수가 필요한 이유 |
| --- | --- | --- | --- |
|   決戦支援 | 원문 유지 | `src/renderer/src/components/TitleBar.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|   前衛支援 | 원문 유지 | `src/renderer/src/components/TitleBar.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・1-6.鎮守府近海航路 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・2-2.バシー海峡 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・3-1.モーレイ海 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・3-2.キス島沖 Aマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・5-6.ラバウル方面海域 Hマス  | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  ・7-2.タウイタウイ泊地沖 Jマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  戦果任務:  | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
|  飛行隊 | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| ・1-6.鎮守府近海航路 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ・2-2.バシー海峡 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ・3-1.モーレイ海 Bマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ・3-2.キス島沖 Aマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ・5-6.ラバウル方面海域 Hマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ・7-2.タウイタウイ泊地沖 Jマス | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| (第1) | 원문 유지 | `src/common/kcquest_formatter.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| (第2) | 원문 유지 | `src/common/kcquest_formatter.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| (第3) | 원문 유지 | `src/common/kcquest_formatter.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 「艦戦」隊の再編成 | 「함상전투기」 부대의 재편성 (이와이 소대) / 「함상전투기」 부대의 재편성 (이와모토 소대) | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 「潜水艦隊」出撃せよ！ | "잠수함대" 출격하라! (1회용) / 「잠수함대」 출격하라! (월간) | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 「特注家具」の調達 | 「특주가구」의 조달 1 / 「특주가구」의 조달 2 / 「특주가구」의 조달 3 | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| &lt;span class="range nowrap-text"&gt;射程 &lt;span class="{0}"&gt;{1}&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp tag is-link"&gt;{0}種 対空CI&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="small tag is-dark {0}" title="{1}"&gt;夜偵&lt;/span&gt;&lt;span class="sp-rate"&gt;{2}%&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="small tag is-primary"&gt;噴弾&lt;/span&gt;&lt;span class="sp-rate"&gt;{0}%&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="tag is-dark"&gt;夜偵&lt;/span&gt;&lt;span class="sp-rate"&gt;{0}%&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="tag is-info"&gt;{0}種 対空CI&lt;/span&gt;&lt;span class="sp-rate"&gt;{1}&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/Deck.vue`, `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="tag is-info"&gt;先制雷撃&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="tag is-info"&gt;先制雷撃&lt;/span&gt;&lt;span class="sp-rate"&gt;&amp;nbsp;&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;span class="sp"&gt;&lt;span class="tag is-primary"&gt;噴弾&lt;/span&gt;&lt;span class="sp-rate"&gt;{0}%&lt;/span&gt;&lt;/span&gt; | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;tr&gt; ↵           &lt;td style="padding-right:6px;"&gt;・{0}&lt;/td&gt; ↵           &lt;td style="text-align:right;"&gt;+{1}&lt;/td&gt; ↵         &lt;/tr&gt; | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;tr&gt; ↵         &lt;td style="padding-right:6px;"&gt;・{0}&lt;/td&gt; ↵         &lt;td style="text-align:right;"&gt;+{1}&lt;/td&gt; ↵       &lt;/tr&gt; | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| &lt;tr&gt;&lt;td colspan="2" style="color:#fae54b;font-size:12.5px;padding-bottom:4px;"&gt;EO攻略報酬&lt;/td&gt;&lt;/tr&gt; | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 1-5 鎮守府近海 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 1-6 ゴール： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 1-6 鎮守府近海航路 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 1: 鎮守府海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 12.7高角砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 12.7連装高角砲: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 13号対電： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 13号電探： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2-5 沖ノ島沖 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2-X B勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2: 南西諸島海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2020年秋・冬イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2020年梅雨・夏イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2021年夏イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2021年秋イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2021年春イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2022年夏・初秋イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2022年春・梅雨イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2022年冬イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2023年夏イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2023年早春・春イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2024年夏イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2024年早春イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2025年秋イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2025年春イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 2026年夏イベント | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 21型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 3-3 3-4 3-5 B勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 3-5 北方AL海域 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 3-5 北方AL海域 K(Boss) | 원문 유지 | `src/renderer/src/components/DropByShip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 3: 北方海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 32型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 4-4 B勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 4-5 カレー洋リランカ島沖 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 4-X B勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 4: 西方海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 46砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 5-5 サーモン海域北方 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 5-6 ラバウル方面海域 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 5: 南方海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 6-5 KW環礁沖海域 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 6: 中部海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 7-2S(第1) | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 7-2S(第2) | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 7-4ゲージ破壊:  | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 7-5 ジャワ島沖 | 원문 유지 | `src/renderer/src/common/battle-score.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 7: 南西海域 | 원문 유지 | `src/renderer/src/components/DropWorld.vue`, `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 8cm高角： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 94式高射： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| airbase有: | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| airbase有:  | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| Boss勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| Boss到達： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| KW環礁沖海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| MO作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| MS諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| SSホロ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| SSホロ+ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| Sホロ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| S勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| アイアンボトムサウンド | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| アラビア海/アデン湾/紅海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| アルフォンシーノ方面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| アレクサンドリア沖/クレタ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| インド洋/アラビア海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| オホーツク海千島列島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| カサブランカ沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| カスガダマ島 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| カムラン湾沖/昭南方面航路/南シナ海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| カレー洋リランカ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| カレー洋海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| キス島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| グアノ環礁沖海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ケルト海/イギリス海峡 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| コモン | 원문 유지 | `src/common/locale.ts`, `src/renderer/src/components/DropHistoryCell.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| サーモン海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| サーモン海域北方 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| サイパン沖/マーシャル諸島沖正面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| サブ島沖海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ジブラルタル/アルボラン海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ジブラルタル沖/地中海/マルタ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ジブラルタル沖/北アフリカ沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ジャム島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ジャワ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ショートランド沖/レカタ沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| スエズ湾/地中海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ソロモン諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ソロモン諸島沖 サンタ・クルーズ諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ソロモン方面/レンネル島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| タウイタウイ泊地沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| タサファロング泊地沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| タンカー護衛任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ド水魚 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ド水魚(1.3) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ナルヴィク沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ニューブリテン島ラバウル沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ニューブリテン島沖/ソロモン諸島西部沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ノルウェー沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ノルウェー沖/ナルヴィク沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ノルウェー北岬沖/北極海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ノルマンディー沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| バシー海峡 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| パラオ沖/ウルシー泊地沖/中部太平洋 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| バルジ | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| バルジ： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| バレンツ海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ビスマルク海/ダンピール海峡沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ブルネイ泊地沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ブルネイ泊地沖哨戒 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ブレスト沖/大西洋/イギリス本土沖/バルト海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ペナン島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ボーキサイト船団護衛 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ボーキサイト輸送任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ポートランド島沖/ライム湾 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ホロ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| マリアナ諸島/ウルシー環礁沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ミンドロ島沖/キャビテ沖/サンホセ沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ミ船団護衛(一号船団) | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ミ船団護衛(二号船団) | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| モーレイ海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ユニーク | 원문 유지 | `src/common/locale.ts`, `src/renderer/src/components/DropHistoryCell.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ラバウル沖/ビスマルク諸島沖/ソロモン諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ラバウル沖/珊瑚海方面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ラバウル方面海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ラバウル方面艦隊進出 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| リランカ島 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| ルソン島沖/オルモック沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| レア | 원문 유지 | `src/common/locale.ts`, `src/renderer/src/components/DropHistoryCell.vue`, `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| レア度 | 원문 유지 | `src/renderer/src/components/DropHistoryCell.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 綾波型への吹雪型駆逐艦5隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 引継ぎ戦果 | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 運:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 演習A勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 演習A勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 演習B勝利以上： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 演習S勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 演習勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠05： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠09： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠18： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠36： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠39： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠40： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠41： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠45： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠46： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠5： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠A1： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠A3： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠E2： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征A1： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征A2： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征A3： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征A5： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征A6： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征B1： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征B5： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征D1： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征D3： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征出発： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠征成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠洋潜水艦作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠洋潜水艦作戦(遠征30)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 遠洋練習航海 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 横須賀鎮守府/呉鎮守府沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 欧州方面友軍との接触 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 沖ノ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 沖ノ島海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 加賀改二護旗艦 破棄 TBF： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 加重 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 加重対空:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 家具箱(小) | 원문 유지 | `src/renderer/src/util.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 家具箱(大) | 원문 유지 | `src/renderer/src/util.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 家具箱(中) | 원문 유지 | `src/renderer/src/util.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 火力:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 解体： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 回避:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 回避率  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 改修： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 改装 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海外艦との接触 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海外艦との接触(遠征31)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海峡警備行動 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海空 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海上護衛！本土近海航路の防衛 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海上護衛任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海上護衛任務(遠征05)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海防:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 海防艦への駆逐艦5隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 開発： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦攻： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦戦： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦隊演習 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦隊決戦援護作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦隊決戦支援任務 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦隊防空:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 艦偵： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 艦防:  | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 観艦式 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 観艦式(遠征08)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 観艦式予行 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 観艦式予行(遠征07)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 観測射撃 | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 関東/太平洋沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 旗艦鳳翔 九六式艦戦 改修・熟練度MAX装備 | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 機種転換 | 기종전환 (토모나가대) / 기종전환 (에구사대) / 기종전환 (601 항공대) / 기종전환 (무라타대) / 기종전환 (영식 함상전투기 21형 (숙련)) / 기종전환 (영식 함전 21형 (숙련), 월간) / 기종전환 (이와모토 소대) | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 機種転換＆部隊再編 | 기종전환 &amp; 부대 재편 (이와이 소대) / 기종전환 &amp; 부대 재편 (이와모토 소대) | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 機動 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 逆転！ナルヴィク攻防戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.5) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.57) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.68) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.76) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電(1.84) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電強 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電強+ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚見電弱 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚水魚 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚水魚(1.5) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 魚雷/甲標的/潜水艦魚雷 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 強行鼠輸送作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 強行偵察任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 近代化改修実施： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 近代化改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九九式艦爆 | 99식 함상폭격기 / 99식 함폭 | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 九九式艦爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九四式爆雷： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九州沖/四国沖/八丈島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九州沖/南西諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九州沖/南西諸島方面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九州南方沖/マリアナ諸島方面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 九六艦戦： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐イ級後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ナ級後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ナ級後期型II | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ニ級改後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ニ級後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ハ級後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐ロ級後期型 | 원문 유지 | `src/common/enemy_etc.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐艦への駆逐艦3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐艦への軽巡3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 駆逐艦へ睦月型4隻使用改修成功1回： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 空:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 空母系撃沈： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 警戒 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 警備任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 軽:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 軽空母 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 軽巡への軽巡3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 軽巡への重巡3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 激闘！R方面作戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 激突！ルンガ沖夜戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 建造ドック | 원문 유지 | `src/renderer/src/components/KDockList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 護衛せよ！船団輸送作戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 護衛空母 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 交 | 원문 유지 | `src/renderer/src/components/MissionCheck.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 攻: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 攻爆 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 攻爆(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 攻彗 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 攻彗(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 航空機輸送作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 航空戦艦運用演習 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 航空戦艦運用演習(遠征23)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 航空装備輸送任務 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 航空隊 | 기지방공 | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 高雄警備府～比島北部沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 最上型への軽巡級3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 最上型への重巡級4隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 最速 | 초고속 / 최속 | `src/common/locale.ts` | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 索敵:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 三ソ： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 三式ソ： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 三式ソナー： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 三式弾 | 3식탄 / 삼식탄 | 게임에서 수신한 명칭·설명 표시 | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 三陸沖/北海道根室半島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 三連機銃： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 珊瑚諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 四国沖/九州西方五島列島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 試製烈風(後期型)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 資源輸送任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 自動対潜 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 射程:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 主魚 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚(1.3) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(1.3) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(1.6) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(1.7) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(1.8) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(1.9) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電(2.0) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電強 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電強+ | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主魚電弱 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主主 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主主(2.0) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主徹 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主電 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主副 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 主副(1.75) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 修復 | 원문 유지 | `src/renderer/src/components/NDockList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 秋刀魚所持数： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 重:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 重巡への軽巡4隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 出 | 원문 유지 | `src/renderer/src/components/TitleBar.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 小笠原沖哨戒線 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 小笠原沖戦闘哨戒 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 小笠原諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 小笠原諸島航路/父島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 小口径主砲(高角砲) | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 昭南～マニラ航路 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 昭南方面～本土航路 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 昭南本土航路 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 侵攻阻止！島嶼防衛強化作戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 吹雪型への川内型3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水上 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水上機基地建設 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水上機前線輸送 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水偵 | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水偵： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 水爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 瑞立 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 制空:  | 원문 유지 | `src/renderer/src/components/AirBase.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 正規空母 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 正規空母への軽空母5隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 精鋭水雷戦隊夜襲 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 製油所地帯沿岸 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 西方海域偵察作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 西方海域封鎖作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 西方潜水艦作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 絶対防衛線！「小笠原兵団」救援 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦:{0} 空:{1} 重:{2} 軽:{3} 駆:{4} 海防:{5} 潜:{6} 補:{7} | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦攻 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦攻(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦戦攻 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦戦攻(1.25) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦他他 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦他他(1.18) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦闘： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦闘勝利： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦爆 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦爆(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦力 | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦彗 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 戦彗(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜魚 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜魚(1.6) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜魚電 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜魚電(1.75) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦撃沈： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦哨戒任務 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦通商破壊作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦派遣演習 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦派遣作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水艦派遣作戦(遠征30)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水空母 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 潜水母艦 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 船団護衛！輸送航路防衛戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 前衛支援任務 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 鼠輸送作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 装甲:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 装甲空母 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 増援輸送作戦！地中海の戦い | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 速力:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 他 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 太平洋南部/ダバオ沖/ビアク島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 対空:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 対空CI合計:  | 원문 유지 | `src/renderer/src/components/Deck.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 対潜:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 対潜警戒任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 対命 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 耐久:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 台湾/南沙諸島/比島方面沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大規模反攻上陸！トーチ作戦！ | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大型建造 | 원문 유지 | 게임에서 수신한 명칭·설명 표시 | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 大型建造:  | 원문 유지 | `src/renderer/src/components/KDockList.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 大口： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大口径： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大西洋/イギリス海峡沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大西洋/ジブラルタル沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大発： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 大湊警備府/津軽海峡/北海道東部 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 第一対潜警戒 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 第三輪形陣 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 第四戦闘隊形 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 第二前方警戒 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 達成済 EO:  | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 単 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 単横 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 単縦 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 弾着 | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 弾薬:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 地中海/マルタ島沖/ティレニア海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 地中海マルタ島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 地中海南仏沖/アルジェリア沖/イタリア半島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中口： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中口径: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中口径： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中口径主砲(高角砲) | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中部海域哨戒線 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 中部北海域ピーコック島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 銚子沖/北海道沖/三陸沖太平洋 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 長距離練習航海 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 長時間対潜警戒 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 直近戦闘  | 원문 유지 | `src/renderer/src/components/Timeline.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 鎮守府近海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 鎮守府近海航路 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 鎮守府正面海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 津軽海峡/北海道釧路沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 追撃 | 원문 유지 | `src/renderer/src/components/AirBase.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 通商破壊作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 偵察 | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 偵察機： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 梯形 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 敵地偵察作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 敵泊地強襲反撃作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 敵母港空襲作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 搭載:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 東シナ海～北九州沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 東急系成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 東京急行 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 東京急行(弐) | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 東部オリョール海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 特殊砲撃 | 원문 유지 | `src/renderer/src/components/Deck.vue`, `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南沙諸島沖/オルモック沖/サンベルナルジノ海峡沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南沙諸島沖/カムラン湾沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南沙諸島沖/仏印沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西海域戦闘哨戒 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島沖/台湾沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島近海 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島捜索撃滅戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島防衛線 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島離島哨戒作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西諸島離島防衛作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西方面航空偵察作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南西方面連絡線哨戒 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 南方海域前面 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 日本語 | 원문 유지 | `src/renderer/src/option/components/OptionApp.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 日本本土近海哨戒圏 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 日本列島沖/呉Q基地 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 入渠： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 入渠ドック | 원문 유지 | `src/renderer/src/components/NDockList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 燃料:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 破棄 10cm連装高角： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 12.7cm連装高角： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 12.7cm連装高角砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 12.7cm連装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 12cm単装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 13号対空電探改： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 14cm単装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 15.2cm単装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 21号対電： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 25mm機銃： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 25mm単装機銃： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 35.6cm連装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 41cm連装砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 52型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 61cm三連装(酸素)魚雷： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 61cm三連装魚雷: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 7.7mm機銃： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 8cm高角砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 91式高射装置： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 Swordfish： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 ドラム缶： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 艦戦： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 艦戦52型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 艦爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 機銃： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九九式艦爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九三式ソ： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九三式ソナー： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九四式爆雷投射機： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九七式艦攻： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九七式艦攻(九三一空)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九七式艦攻[熟練度max]： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九六型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九六式艦戦： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 九六式艦戦[熟練度max]： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 彩雲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 三式水中探信儀： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 三式弾： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 三爆： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 紫電一一型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 紫電改二： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 試製烈風 後期型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 小口： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 小口径: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 小口径： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 水偵： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 瑞雲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 戦: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 大口径： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 中： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 中口径: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 中口径： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 天山： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 電探： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 副砲: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 陸上攻撃機： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 流星改： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零式艦戦21型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零式艦戦52型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零式水上偵察機： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零戦21型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零戦52型： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零戦52型丙(六〇一空)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 零戦62型(爆戦)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄 彗星： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 破棄： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 爆: | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 爆彗 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 爆彗(1.2) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 八戸港沖/三陸沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 八丈島沖/房総半島東方沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 発煙装置/防空気球 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 発動！竜巻作戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 発令！「捷三号作戦警戒」 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 反撃！ | 원문 유지 | `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 反撃！ ↵  | 원문 유지 | `src/renderer/src/components/World.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 反撃！第三十一戦隊の戦い | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 飛燕： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 飛行隊 | 원문 유지 | `src/renderer/src/components/Area.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 父島沖/硫黄島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 副砲(高角砲) | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 複縦 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 噴進砲： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 兵站強化任務 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 兵站強化任務(遠征A1)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 補:{0}  | 원문 유지 | `src/renderer/src/components/ShipList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 補/入 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 補給艦 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 補給艦撃沈： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 母港 | 원문 유지 | 게임에서 수신한 명칭·설명 표시 | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 包囲陸戦隊撤収作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 豊後水道/佐世保沖/坊ノ岬沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 坊ノ岬沖/台湾沖/南西諸島海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 防空射撃演習 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 防空射撃演習(遠征06)： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北海道防衛作戦 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北海道北東沖/宗谷海峡沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北海道北東沖/留萌沖正面/樺太南部沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北号作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北大西洋/フリータウン/ダカール | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北方AL海域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北方海域全域 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北方航路海上護衛 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 北方鼠輸送作戦 | 원문 유지 | `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 未 | 원문 유지 | `src/common/kcquest_formatter.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 未達成 EO:  | 원문 유지 | `src/renderer/src/components/BattleScore.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 命中率  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 夜 | 원문 유지 | `src/renderer/src/components/BattleHistoryArea.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜攻 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜襲 | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞(1.24) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞2 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞2(1.32) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞2電 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞2電(1.36) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞電 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜瑞電(1.28) | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜戦突撃 | 원문 유지 | `src/renderer/src/components/Deck.vue`, `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 夜連撃 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 輸送 | 보급함 | `src/common/locale.ts`, `src/renderer/src/components/Area.vue`, `src/renderer/src/components/DeckPort.vue` | KC3의 표기가 복수이거나 이 화면과 문맥이 달라 검수 필요. |
| 夕雲型への重巡級3隻使用改修成功： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 揚陸艦 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 雷回 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 雷装:  | 원문 유지 | `src/renderer/src/components/ShipTooltip.vue` | KC3에 정확히 대응하는 한국어 표기를 확인하지 못했거나 문맥 검수가 필요함. |
| 雷命 | 원문 유지 | `src/renderer/src/components/SlotitemList.vue` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 硫黄島沖 | 원문 유지 | `src/common/area_name.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 輪形 | 원문 유지 | `src/common/locale.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 零式水偵[熟練max]： | 원문 유지 | `src/common/kcquest.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 練習航海 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 練習巡洋艦 | 원문 유지 | `src/common/kcs.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
| 囮機動部隊支援作戦 | 원문 유지 | `src/common/kcquest.ts`, `src/common/mission.ts` | KC3에 정확히 대응하는 표기가 없거나 이 화면의 문맥 검수가 필요함. |
