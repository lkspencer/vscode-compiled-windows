/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.zh-tw", {
	"vs/base/common/json": [
		"符號無效",
		"數字格式無效",
		"必須有屬性名稱",
		"必須有值",
		"必須為冒號",
		"必須為逗號",
		"必須為右大括號",
		"必須為右中括號",
		"必須為檔案結尾",
	],
	"vs/base/common/severity": [
		"錯誤",
		"警告",
		"資訊",
	],
	"vs/editor/common/config/defaultConfig": [
		"編輯器內容",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"預設組態覆寫",
		"設定要針對 {0} 語言覆寫的編輯器設定。",
		"設定要針對語言覆寫的編輯器設定。",
		"提供組態設定。",
		"設定的摘要。此標籤將會在設定檔中作為分隔註解使用。",
		"組態屬性的描述。",
		"無法註冊 \'{0}\'。這符合用於描述語言專用編輯器設定的屬性模式 \'\\[.*\\]$\'。請使用 \'configurationDefaults\' 貢獻。",
		"無法註冊 \'{0}\'。此屬性已經註冊。",
		"\'configuration.properties\' 必須是物件",
		"如果已設定，\'configuration.type\' 必須設定為物件",
		"\'configuration.title\' 必須是字串",
		"依語言貢獻預設編輯器組態設定。",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"擴充功能 `{1}` 無法啟動。原因: 未知的相依性 `{0}`。",
		"擴充功能 `{1}` 無法啟動。原因: 相依性 `{0}` 無法啟動。",
		"擴充功能 `{0}` 無法啟動。原因: 相依性超過 10 個層級 (很可能是相依性迴圈)。",
		"啟動擴充功能 `{0}` 失敗: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"若是 VS Code 延伸模組，則指定與延伸模組相容的 VS Code 版本。不得為 *。例如: ^0.10.5 表示與最低 VS Code 版本 0.10.5 相容。",
		"VS Code 擴充功能的發行者。",
		"VS Code 資源庫中使用的擴充功能顯示名稱。",
		"VS Code 資源庫用來將擴充功能歸類的分類。",
		"用於 VS Code Marketplace 的橫幅。",
		"VS Code Marketplace 頁首的橫幅色彩。",
		"橫幅中使用的字型色彩佈景主題。",
		"此封裝所代表的所有 VS Code 擴充功能比重。",
		"將延伸模組設為在 Marketplace 中標幟為 [預覽]。",
		"VS Code 擴充功能的啟動事件。",
		"要顯示於 Marketplace 擴充頁面資訊看板的徽章陣列。",
		"徽章映像 URL。",
		"徽章連結。",
		"徽章描述。",
		"其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。",
		"在封裝作為 VS Code 擴充功能發行前所執行的指令碼。",
		"128 x 128 像素圖示的路徑。",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"未顯示另外 {0} 個錯誤與警告。",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"未註冊識別碼為 \'{0}\' 的 TreeExplorerNodeProvider。",
		"TreeExplorerNodeProvider \'{0}\' 無法提供根節點。",
		"未註冊識別碼為 \'{0}\' 的 TreeExplorerNodeProvider。",
		"TreeExplorerNodeProvider \'{0}\' 無法 resolveChildren。",
	],
	"vs/workbench/node/extensionHostMain": [
		"路徑 {0} 並未指向有效的擴充功能測試執行器。",
	]
});