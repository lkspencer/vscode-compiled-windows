/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/node/cliProcessMain.nls.zh-tw", {
	"vs/base/common/severity": [
		"錯誤",
		"警告",
		"資訊",
	],
	"vs/base/node/zip": [
		"在 ZIP 中找不到 {0}。",
	],
	"vs/code/node/cliProcessMain": [
		"找不到擴充功能 \'{0}\'。",
		"未安裝擴充功能 \'{0}\'。",
		"請確定您使用完整擴充功能識別碼 (包括發行者)，例如: {0}",
		"已成功安裝延伸模組 \'{0}\'!",
		"已安裝過擴充功能 \'{0}\'。",
		"在市集中找到 \'{0}\'。",
		"正在安裝...",
		"已成功安裝擴充功能 \'{0}\' v{1}!",
		"正在將 {0} 解除安裝...",
		"已成功將擴充功能 \'{0}\' 解除安裝!",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"預設組態覆寫",
		"設定要針對 {0} 語言覆寫的編輯器設定。",
		"設定要針對語言覆寫的編輯器設定。",
		"提供組態設定。",
		"設定的摘要。此標籤將會在設定檔中作為分隔註解使用。",
		"組態屬性的描述。",
		"無法註冊 \'{0}\'。這符合用於描述語言專用編輯器設定的屬性模式 \'\\\\[.*\\\\]$\'。請使用 \'configurationDefaults\' 貢獻。",
		"無法註冊 \'{0}\'。此屬性已經註冊。",
		"\'configuration.properties\' 必須是物件",
		"如果已設定，\'configuration.type\' 必須設定為物件",
		"\'configuration.title\' 必須是字串",
		"依語言貢獻預設編輯器組態設定。",
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"延伸模組",
		"喜好設定",
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"找不到擴充功能",
		"找不到與此 Code 版本相容的 {0} 版本。",
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"擴充功能無效: package.json 不是 JSON 檔案。",
		"請先重新啟動 Code，再重新安裝 {0}。",
		"請先重新啟動 Code，再重新安裝 {0}。",
		"安裝 \'{0}\' 也會安裝其相依性。要繼續嗎?",
		"是",
		"否",
		"請先重新啟動 Code，再重新安裝 {0}。",
		"只要將 \'{0}\' 解除安裝，或要包含其相依性?",
		"只有",
		"全部",
		"取消",
		"確定要將 \'{0}\' 解除安裝嗎?",
		"確定",
		"取消",
		"無法將延伸模組 \'{0}\' 解除安裝。其為延伸模組 \'{1}\' 的相依對象。",
		"無法將延伸模組 \'{0}\' 解除安裝。其為延伸模組 \'{1}\' 及 \'{2}\' 的相依對象。",
		"無法將延伸模組 \'{0}\' 解除安裝。其為 \'{1}\'、\'{2}\' 及其他延伸模組的相依對象。",
		"找不到擴充功能",
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
		"當指定語言檔案開啟時激發該事件",
		"當指定的命令被調用時激發該事件",
		"當指定的工作偵錯階段開始時激發該事件",
		"當開啟指定的文件夾包含glob模式匹配的文件時激發該事件",
		"當指定的檢視被擴展時激發該事件",
		"當VS Code啟動時激發該事件,為了確保最好的使用者體驗,當您的擴充功能沒有其他組合作業時,請激活此事件.",
		"要顯示於 Marketplace 擴充頁面資訊看板的徽章陣列。",
		"徽章映像 URL。",
		"徽章連結。",
		"徽章描述。",
		"其它擴充功能的相依性。擴充功能的識別碼一律為 ${publisher}.${name}。例如: vscode.csharp。",
		"在封裝作為 VS Code 擴充功能發行前所執行的指令碼。",
		"128 x 128 像素圖示的路徑。",
	],
	"vs/platform/extensions/node/extensionValidator": [
		"無法剖析 \'engines.vscode` 值 {0}。例如，請使用：^0.10.0、^1.2.3、^0.11.0、^0.10.x 等。",
		"在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之前的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^0.10.0、0.10.x、0.11.0 等。",
		"在 `engines.vscode` ({0}) 中指定的版本不夠具體。對於 1.0.0 之後的 vscode 版本，請至少定義所需的主要和次要版本。 例如 ^1.10.0、1.10.x、1.x.x、2.x.x 等。",
		"擴充功能與 Code {0} 不相容。擴充功能需要: {1}。",
		"得到空白擴充功能描述",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `object` 類型",
		"屬性 \'{0}\' 為強制項目且必須屬於 `string` 類型",
		"屬性 `{0}` 可以省略或必須屬於 `string[]` 類型",
		"屬性 `{0}` 可以省略或必須屬於 `string[]` 類型",
		"屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略",
		"屬性 `{0}` 可以省略或必須屬於 `string` 類型",
		"`main` ({0}) 必須包含在擴充功能的資料夾 ({1}) 中。這可能會使擴充功能無法移植。",
		"屬性 `{0}` 和 `{1}` 必須同時指定或同時忽略",
		"擴充功能版本與 semver 不相容。",
	],
	"vs/platform/message/common/message": [
		"關閉",
		"稍後",
		"取消",
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"要使用的 Proxy 設定。如果未設定，會從 http_proxy 與 https_proxy 環境變數取得設定。",
		"是否應該針對提供的 CA 清單驗證 Proxy 伺服器憑證。",
		"要傳送作為每個網路要求 \'Proxy-Authorization\' 標頭的值。",
	],
	"vs/platform/telemetry/common/telemetryService": [
		"遙測",
		"允許將使用狀況資料和錯誤傳送給 Microsoft。",
	]
});