/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/node/extensionHostProcess.nls", {
	"vs/base/common/json": [
		"Invalid symbol",
		"Invalid number format",
		"Property name expected",
		"Value expected",
		"Colon expected",
		"Comma expected",
		"Closing brace expected",
		"Closing bracket expected",
		"End of file expected"
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
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
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
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
		"Array of badges to display in the sidebar of the Marketplace's extension page.",
		"Badge image URL.",
		"Badge link.",
		"Badge description.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"The path to a 128x128 pixel icon."
	],
	"vs/platform/markers/common/problemMatcher": [
		"The loop property is only supported on the last line matcher.",
		"The problem pattern is missing a regular expression.",
		"The problem pattern is invalid. It must have at least a file, message and line or location match group.",
		"Error: The string {0} is not a valid regular expression.\n",
		"The regular expression to find an error, warning or info in the output.",
		"The match group index of the filename. If omitted 1 is used.",
		"The match group index of the problem's location. Valid location patterns are: (line), (line,column) and (startLine,startColumn,endLine,endColumn). If omitted (line,column) is assumed.",
		"The match group index of the problem's line. Defaults to 2",
		"The match group index of the problem's line character. Defaults to 3",
		"The match group index of the problem's end line. Defaults to undefined",
		"The match group index of the problem's end line character. Defaults to undefined",
		"The match group index of the problem's severity. Defaults to undefined",
		"The match group index of the problem's code. Defaults to undefined",
		"The match group index of the message. If omitted it defaults to 4 if location is specified. Otherwise it defaults to 5.",
		"In a multi line matcher loop indicated whether this pattern is executed in a loop as long as it matches. Can only specified on a last pattern in a multi line pattern.",
		"The name of the problem pattern.",
		"The name of the problem multi line problem pattern.",
		"The actual patterns.",
		"Contributes problem patterns",
		"Invalid problem pattern. The pattern will be ignored.",
		"Invalid problem pattern. The pattern will be ignored.",
		"Error: the description can't be converted into a problem matcher:\n{0}\n",
		"Error: the description doesn't define a valid problem pattern:\n{0}\n",
		"Error: the description doesn't define an owner:\n{0}\n",
		"Error: the description doesn't define a file location:\n{0}\n",
		"Info: unknown severity {0}. Valid values are error, warning and info.\n",
		"Error: the pattern with the identifier {0} doesn't exist.",
		"Error: the pattern property refers to an empty identifier.",
		"Error: the pattern property {0} is not a valid pattern variable name.",
		"A problem matcher must define both a begin pattern and an end pattern for watching.",
		"Error: The string {0} is not a valid regular expression.\n",
		"The regular expression to detect the begin or end of a watching task.",
		"The match group index of the filename. Can be omitted.",
		"The name of a contributed or predefined pattern",
		"A problem pattern or the name of a contributed or predefined problem pattern. Can be omitted if base is specified.",
		"The name of a base problem matcher to use.",
		"The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.",
		"The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.",
		"Controls if a problem reported on a text document is applied only to open, closed or all documents.",
		"Defines how file names reported in a problem pattern should be interpreted.",
		"If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a watching task is signaled.",
		"If matched in the output the end of a watching task is signaled.",
		"Patterns to track the begin and end of a watching pattern.",
		"This property is deprecated. Use the watching property instead.",
		"A regular expression signaling that a watched tasks begins executing triggered through file watching.",
		"This property is deprecated. Use the watching property instead.",
		"A regular expression signaling that a watched tasks ends executing.",
		"The name of the problem matcher.",
		"Contributes problem matchers"
	],
	"vs/workbench/api/node/extHostDiagnostics": [
		"Not showing {0} further errors and warnings."
	],
	"vs/workbench/api/node/extHostTreeView": [
		"No TreeExplorerNodeProvider with id '{0}' registered.",
		"TreeExplorerNodeProvider '{0}' failed to provide root node.",
		"No TreeExplorerNodeProvider with id '{0}' registered."
	],
	"vs/workbench/node/extensionHostMain": [
		"Path {0} does not point to a valid extension test runner."
	]
});