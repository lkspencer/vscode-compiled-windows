/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/code/electron-browser/sharedProcessMain.nls", {
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/node/zip": [
		"{0} not found inside zip."
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Default Configuration Overrides",
		"Configure editor settings to be overridden for {0} language.",
		"Configure editor settings to be overridden for a language.",
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.",
		"Cannot register '{0}'. This property is already registered.",
		"'configuration.properties' must be an object",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"Contributes default editor configuration settings by language."
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
		"Preferences"
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Extension not found",
		"Couldn't find a compatible version of {0} with this version of Code."
	],
	"vs/platform/extensionManagement/node/extensionManagementService": [
		"Extension invalid: package.json is not a JSON file.",
		"Please restart Code before reinstalling {0}.",
		"Please restart Code before reinstalling {0}.",
		"Installing '{0}' also installs its dependencies. Would you like to continue?",
		"Yes",
		"No",
		"Please restart Code before reinstalling {0}.",
		"Would you like to uninstall '{0}' only or its dependencies also?",
		"Only",
		"All",
		"Cancel",
		"Are you sure you want to uninstall '{0}'?",
		"OK",
		"Cancel",
		"Cannot uninstall extension '{0}'. Extension '{1}' depends on this.",
		"Cannot uninstall extension '{0}'. Extensions '{1}' and '{2}' depend on this.",
		"Cannot uninstall extension '{0}'. Extensions '{1}', '{2}' and others depend on this.",
		"Could not find extension"
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"For VS Code extensions, specifies the VS Code version that the extension is compatible with. Cannot be *. For example: ^0.10.5 indicates compatibility with a minimum VS Code version of 0.10.5.",
		"The publisher of the VS Code extension.",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"All contributions of the VS Code extension represented by this package.",
		"Sets the extension to be flagged as a Preview in the Marketplace.",
		"Activation events for the VS Code extension.",
		"An activation event emitted whenever a file that resolves to the specified language gets opened.",
		"An activation event emitted whenever the specified command gets invoked.",
		"An activation event emitted whenever a debug session of the specified type is started.",
		"An activation event emitted whenever a folder is opened that contains at least a file matching the specified glob pattern.",
		"An activation event emitted whenever the specified view is expanded.",
		"An activation event emitted on VS Code startup. To ensure a great end user experience, please use this activation event in your extension only when no other activation events combination works in your use-case.",
		"Array of badges to display in the sidebar of the Marketplace's extension page.",
		"Badge image URL.",
		"Badge link.",
		"Badge description.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"The path to a 128x128 pixel icon."
	],
	"vs/platform/extensions/node/extensionValidator": [
		"Could not parse `engines.vscode` value {0}. Please use, for example: ^0.10.0, ^1.2.3, ^0.11.0, ^0.10.x, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions before 1.0.0, please define at a minimum the major and minor desired version. E.g. ^0.10.0, 0.10.x, 0.11.0, etc.",
		"Version specified in `engines.vscode` ({0}) is not specific enough. For vscode versions after 1.0.0, please define at a minimum the major desired version. E.g. ^1.10.0, 1.10.x, 1.x.x, 2.x.x, etc.",
		"Extension is not compatible with Code {0}. Extension requires: {1}.",
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"Extension version is not semver compatible."
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	],
	"vs/platform/request/node/request": [
		"HTTP",
		"The proxy setting to use. If not set will be taken from the http_proxy and https_proxy environment variables",
		"Whether the proxy server certificate should be verified against the list of supplied CAs.",
		"The value to send as the 'Proxy-Authorization' header for every network request."
	],
	"vs/platform/telemetry/common/telemetryService": [
		"Telemetry",
		"Enable usage data and errors to be sent to Microsoft."
	]
});