/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls.zh-cn", {
	"vs/base/common/json": [
		"符号无效",
		"数字格式无效",
		"需要属性名",
		"需要值",
		"需要冒号",
		"需要逗号",
		"需要右大括号",
		"需要右括号",
		"预期的文件结尾",
	],
	"vs/base/common/severity": [
		"错误",
		"警告",
		"信息",
	],
	"vs/editor/common/config/defaultConfig": [
		"编辑器内容",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"为一组语言标识符配置要被替代的设置。",
		"替代设置",
		"用于配置字符串。",
		"设置摘要。此标签将在设置文件中用作分隔注释。",
		"配置属性的描述。",
		"如果进行设置，\"configuration.type\" 必须设置为对象",
		"configuration.title 必须是字符串",
		"configuration.properties 必须是对象",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"无法激活扩展”{1}“。原因: 未知依赖关系“{0}”。",
		"无法激活扩展”{1}“。原因: 无法激活依赖关系”{0}“。",
		"无法激活扩展”{0}“。原因: 依赖关系多于 10 级(最可能是依赖关系循环)。",
		"激活扩展“{0}”失败: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"对于 VS Code 扩展程序，指定该扩展程序与之兼容的 VS Code 版本。不能为 *. 例如: ^0.10.5 表示最低兼容 VS Code 版本 0.10.5。",
		"VS Code 扩展的发布服务器。",
		"VS Code 库中使用的扩展的显示名称。",
		"VS Code 库用于对扩展进行分类的类别。",
		"VS Code 商城使用的横幅。",
		"VS Code 商城页标题上的横幅颜色。",
		"横幅中使用的字体颜色主题。",
		"由此包表示的 VS Code 扩展的所有贡献。",
		"在 Marketplace 中设置扩展，将其标记为“预览”。",
		"VS Code 扩展的激活事件。",
		"在 Marketplace 的扩展页边栏中显示的徽章数组。",
		"徽章图像 URL。",
		"徽章链接。",
		"徽章说明。",
		"其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。",
		"包作为 VS Code 扩展发布前执行的脚本。",
		"128 x 128 像素图标的路径。",
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"未显示 {0} 个进一步的错误和警告。",
	],
	"vs/workbench/api/node/extHostTreeExplorers": [
		"没有注册 ID 为“{0}”的 TreeExplorerNodeProvider。",
		"TreeExplorerNodeProvider“{0}”无法提供根节点。",
		"没有注册 ID 为“{0}”的 TreeExplorerNodeProvider。",
		"TreeExplorerNodeProvider“{0}”无法解析 Children。",
	],
	"vs/workbench/node/extensionHostMain": [
		"路径 {0} 未指向有效的扩展测试运行程序。",
	]
});