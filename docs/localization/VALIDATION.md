# Validation results

Date: 2026-10-18. Upstream/fork base: `fe80aa3`. Work branch: `codex/korean-localization`.

## Executed checks

| Check | Actual command / method | Result |
| --- | --- | --- |
| Dependencies | `npm ci --no-audit --no-fund` | Passed; existing lockfile retained |
| Lint | `npm run lint` | Passed |
| TypeScript | `npm run typecheck` (also included in the build) | Passed: main, main renderer, option renderer |
| Unit tests | `npm exec --yes --package=node@22 -- node node_modules/vitest/vitest.mjs run --maxWorkers=4` | **342 passed, 33 files** |
| Application build | `npm run build` | Passed: Electron main, workers, preload, both renderer entrypoints |
| Translation consistency | `npm run i18n:check` | Passed: parameters, review status, exact terminology, missing-message tracking |
| Original Japanese structure | `npm run i18n:templates` | **41 Vue templates and inline styles match upstream**, excluding only the new language-setting rows |
| Rendered settings | Actual Electron offscreen rendering, 1040 × 800; Japanese baseline + Japanese modified + Korean modified × four categories | 12 screen checks; 0 runtime errors, 0 horizontal overflow, 0 clipped controls |
| Existing Japanese geometry | DOM element positions, dimensions, font family and font size compared with the original build | All existing controls match across General / Quest / Network / Extension; one selector added in General |
| Language persistence | Option save integration + existing JSON-setting merge tests | Japanese default, Korean selection, saved JSON restore, restart application and preserved existing settings verified |

The first full test attempt under the host's Node 24 failed in the existing NeDB dependency because `util.isDate` was removed. Node **22.23.3** completed the full suite. No NeDB or game logic changes were introduced. The generated, local-only `src/main/debug-data.ts` is excluded from lint, matching the repository's existing generated-file policy; its source under `scripts/` was already excluded.

## UI evidence

- [Original Japanese General](screenshots/baseline-general.png)
- [Modified Japanese General](screenshots/ja-general.png)
- [Korean General](screenshots/ko-general.png)
- [Korean Quest settings](screenshots/ko-quest.png)
- [Korean Network settings](screenshots/ko-network.png)
- [Measured results](ui-validation.json)

The existing stylesheets, fonts, assets, icons, app version, window dimensions, and release/update configuration are unchanged. A local CJK font was installed in the Linux test environment to render the screenshots; no font was added to the app. Screenshot painting can include tiny offscreen raster differences; the comparison does not claim pixel identity for Korean text or Windows rendering.

The offline renderer harness is `scripts/localization-qa/main.cjs`, with a synthetic preload API in the adjacent file. It loads already-built original and modified option renderers. `KOUBROWSER_BASELINE` can point to a detached original checkout; `KOUBROWSER_QA_OUTPUT` sets the screenshot directory. For this Linux environment it was launched using Electron with `--no-sandbox --headless --ozone-platform=headless`. The harness blocks no real game request because it never opens the game or a game account.

## Not executed / remaining

- A Windows installer or signed release build was not run; this task is source localization, not release packaging.
- Live login, actual game sessions, every data-dependent tooltip/chart, and all Windows DPI/font combinations were not tested. Settings screenshots use synthetic data and must not be represented as full live-game QA.
- Unconfirmed terms, old map/expedition names and combat abbreviations remain Japanese. They are tracked in `KOREAN_REVIEW.md`. Therefore this branch is **not a claim of completed full Korean localization**.
- No upstream PR has been submitted. `UPSTREAM_PR_DRAFT.md` is a preparation document, pending the user's approval and the remaining terminology review.
