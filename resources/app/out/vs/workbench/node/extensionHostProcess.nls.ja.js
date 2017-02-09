/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.ja", {
	"vs/base/common/json": [
		"シンボルが無効です",
		"数値表示形式が無効です",
		"プロパティ名が必要です",
		"値が必要です",
		"コロンが必要です",
		"コンマが必要です",
		"右中かっこが必要です",
		"右角かっこが必要です",
		"ファイルの終わりが必要です",
	],
	"vs/base/common/severity": [
		"エラー",
		"警告",
		"情報",
	],
	"vs/editor/common/config/defaultConfig": [
		"エディターのコンテンツ",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"上書きされる言語識別子セットの設定を構成します。",
		"上書き設定",
		"構成の設定を提供します。",
		"設定の概要です。このラベルは、設定ファイルでコメントの区切り文字として使用します。",
		"構成のプロパティの説明です。",
		"設定すると、\'configuration.type\' は \'オブジェクトに設定されなければなりません",
		"\'configuration.title\' は、文字列である必要があります",
		"\'configuration.properties\' は、オブジェクトである必要があります",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` が不明です。",
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` のアクティブ化に失敗しました。",
		"拡張機能 `{0}` のアクティブ化に失敗しました。理由: 依存関係のレベルが 10 を超えています (依存関係のループの可能性があります)。",
		"拡張機能 `{0}` のアクティブ化に失敗しました: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"VS Code 拡張機能の場合、拡張機能と互換性のある VS Code バージョンを指定します。* を指定することはできません。たとえば、^0.10.5 は最小の VS Code バージョン 0.10.5 との互換性を示します。",
		"VS Code 拡張機能の公開元。",
		"VS Code ギャラリーで使用される拡張機能の表示名。",
		"VS Code ギャラリーで拡張機能の分類に使用されるカテゴリ。",
		"VS Code マーケットプレースで使用されるバナー。",
		"VS Code マーケットプレース ページ ヘッダー上のバナーの色。",
		"バナーで使用されるフォントの配色テーマ。",
		"このパッケージで表される VS Code 拡張機能のすべてのコントリビューション。",
		"Marketplace で Preview としてフラグが付けられるように拡張機能を設定します。",
		"VS Code 拡張機能のアクティブ化イベント。",
		"Marketplace の拡張機能ページのサイドバーに表示されるバッジの配列。",
		"バッジのイメージ URL。",
		"バッジのリンク。",
		"バッジの説明。",
		"他の拡張機能に対する依存関係。拡張機能の識別子は常に ${publisher}.${name} です。例: vscode.csharp。",
		"パッケージが VS Code 拡張機能として公開される前に実行されるスクリプト。",
		"128x128 ピクセルのアイコンへのパス。",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"{0} 個の追加のエラーと警告が表示されていません。",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"ID \'{0}\' の TreeExplorerNodeProvider は登録されていません。",
		"TreeExplorerNodeProvider \'{0}\' がルート ノードの指定に失敗しました。",
		"ID \'{0}\' の TreeExplorerNodeProvider は登録されていません。",
		"TreeExplorerNodeProvider \'{0}\' が子の解決に失敗しました。",
	],
	"vs/workbench/node/extensionHostMain": [
		"パス {0} は有効な拡張機能テスト ランナーを指していません。",
	]
});