# PR draft — not submitted

Target: `yukikuri/koubrowser:master`  
Head: `jungsan765-lang:codex/korean-localization`  
Contributor: `jungsan765-lang`

## Proposed title

日本語を既定とした多言語表示基盤と韓国語表示を追加

## Proposed description

韓国語の利用者向けに表示言語の選択と保存を追加します。既存の日本語表示を既定として維持し、設定の「一般」末尾で「한국어」を選ぶと次回起動から韓国語表示になります。

既存のレイアウト、スタイル、フォント、画像、アイコン、ウィンドウ寸法は維持しています。ゲーム通信、サーバから受け取るデータ、艦船・装備ID、記録形式、戦闘計算、任務判定は変更しません。表示時のみ翻訳し、未知・未確認の名称は日本語にフォールバックします。日本語名・韓国語名の両方で艦船と装備を検索できます。

一般UIのメッセージ辞書、KC3の韓国語表記を利用した用語辞書、翻訳パラメータ検査、未確認用語一覧を追加しています。韓国語貢献者は `jungsan765-lang` です。既存ライセンスを維持し、利用したKC3翻訳データのMIT通知を同梱しています。

現時点では専門用語のレビューが残っています。翻訳完了を主張するPRではありません。提出前に `KOREAN_REVIEW.md` の扱いと用語を確認します。

検証: lint / TypeScript / 通常ビルド成功、Node 22で単体テスト342件成功。変更した41件のVueテンプレートとインラインスタイルは、追加の言語設定を除き日本語で元の構造と一致します。Electron上で設定4カテゴリの日本語・韓国語表示を確認し、横方向のはみ出しとコントロールの切れはありませんでした。実ゲームとWindowsインストーラーの検証は未実施です。

See `docs/localization/VALIDATION.md`, `KOREAN_GLOSSARY.md` and `KOREAN_REVIEW.md`.
