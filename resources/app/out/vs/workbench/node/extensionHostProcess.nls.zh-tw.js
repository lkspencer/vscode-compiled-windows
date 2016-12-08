/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.zh-tw", {
	"vs/base/common/processes": [
		"錯誤: 可執行檔資訊必須定義字串類型的命令。",
		"警告: isShellCommand 必須屬於布林值類型。即將忽略值 {0}。",
		"警告: args 必須屬於 string[] 類型。即將忽略值 {0}。",
		"警告: options.cwd 必須屬於字串類型。即將忽略值 {0}。",
	],
	"vs/base/common/severity": [
		"錯誤",
		"警告",
		"資訊",
	],
	"vs/base/node/processes": [
		"無法在 UNC 磁碟機上執行殼層命令。",
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
	"vs/workbench/node/extensionHostMain": [
		"路徑 {0} 並未指向有效的擴充功能測試執行器。",
	]
});