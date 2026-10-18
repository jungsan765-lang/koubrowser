# Localization maintenance

Japanese remains the source and default language. The interface has no new production dependency and retains the upstream styles, fonts, icons, dimensions, and layout. The only added control is a language selector at the bottom of General settings, using existing form classes. Changes apply on restart, so existing computed labels/charts remain consistent for the lifetime of each window.

## Boundaries

- `OptionSetting.language` is persisted through the existing option JSON store. Old settings default to Japanese; unsupported values normalize to Japanese.
- Main takes a normalized language snapshot at startup. The existing local `RequiredMessage` carries it to the main and assist renderers before Vue mounts; options load it from their existing settings API.
- `src/common/i18n/index.ts` provides pure exact-key translation. Japanese source is the fallback. Numbered parameters preserve the original values and support reordering. Optional context separates identical words used differently.
- `src/renderer/src/i18n.ts` supplies UI translation and a separate exact-match `gameText` for game-provided names. It never rewrites received objects, IDs, search keys, stored records, or player-defined fleet names.
- `src/renderer/src/locale.ts` adapts shared display tables in the renderer only. Shared constants, calculations, quest matching, network requests/responses, game preload and interception hooks stay unchanged.
- `ko.json` contains ordinary UI messages. `{term:原文}` refers to the glossary, retaining the Japanese word until confirmed. Values are inserted after terminology resolution so server/user strings cannot be reinterpreted as translation keys.
- `terminology.json` is the evidence/review source of truth. `terms.json` is generated from **confirmed** rows only; detailed glossary metadata is not bundled into the application.

## Updating translations

1. Keep the exact Japanese source text. Use `t('Japanese source')` at display sites and `t('Japanese {0}', [value])` for parameterized messages. For a distinct context, use `t('クリア', [], 'input')` with the `input::クリア` Korean key.
2. Use `gameText(rawName)` for exact game-name matches and `shipText(rawShipName)` for ship names, which also permits only KC3-listed suffix combinations. Preserve raw names for lookup, filtering, IDs, and recording. Do not translate the game's webview DOM.
3. Run `npm run i18n:extract` to refresh the Japanese inventory. It scans TS literal/template nodes, Vue text/attributes/expressions and bundled JSON. It also includes internal diagnostic literals; an inventory row is not by itself a claim of UI coverage.
4. Use Korean NamuWiki originals first when available. The user additionally authorized KC3 Korean terminology and waived per-term source tables. Keep `status: "review"` when inaccessible, ambiguous or unverified. A candidate alone must not be activated.
5. After actual verification or user approval, set `korean`, `status: "confirmed"`, and `reason`. The KC3 importer sets `verifiedBy: "KC3"` for actual matching terms. For explicit user approval, record `approvedBy: "jungsan765-lang"`.
6. Run `npm run i18n:report` to regenerate the runtime term map and both Markdown review documents. Then run `npm run i18n:check`, lint, typecheck, tests, and build.

The source inventory cannot enumerate names supplied only at runtime by the game server. Those names use exact registered KC3 mappings; unknown names remain Japanese. Composite quest progress fragments and old event names are included conservatively in the review queue; individual wording needs review before activation.

## Verification

The existing NeDB version uses `util.isDate`, which is absent in Node 24. Use Node 22 (matching the Electron generation's runtime) to run the full existing test suite, or record the environment failure explicitly. No NeDB or game-data change is necessary for localization.

See [VALIDATION.md](VALIDATION.md) for the actual commands/results and remaining manual verification work.

## KC3 terminology import

Use `node scripts/i18n-import-kc3.cjs path/to/kc3-translations` to update the Korean data, followed by extraction/report/check. The implementation reads actual `kr` and `jp` files and matches names or stable shared keys. Different meanings and conflicting spellings stay pending; context-specific labels are explicitly selected. Only listed ship-name suffixes are composed, and an unknown suffix keeps the entire original name. Quest descriptions also register an exact alias without `<br>` to match the existing tooltip display path.

The imported KC3 translation data retains its MIT notice in `LICENSES/KC3-TRANSLATIONS.txt`. No per-term URL table is maintained.

## Upstream UI preservation

`npm run i18n:templates` compares the Vue template and inline-style structure with upstream revision `fe80aa3`, resolving translations back to their Japanese source. It checks all changed Vue components and excludes only the two added language-setting rows. Existing stylesheets, fonts, assets, icons and dimensions are not changed. Test screenshots use the same local font environment for both revisions; they do not introduce an app font dependency.
