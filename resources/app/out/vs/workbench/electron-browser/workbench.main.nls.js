/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/workbench/electron-browser/workbench.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"input"
	],
	"vs/base/browser/ui/findinput/findInputCheckboxes": [
		"Match Case",
		"Match Whole Word",
		"Use Regular Expression"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
	],
	"vs/base/browser/ui/resourceviewer/resourceViewer": [
		"{0}x{1} {2}",
		"The file will not be displayed in the editor because it is either binary, very large or uses an unsupported text encoding.",
		"{0}B",
		"{0}KB",
		"{0}MB",
		"{0}GB",
		"{0}TB"
	],
	"vs/base/browser/ui/toolbar/toolbar": [
		"More"
	],
	"vs/base/common/errorMessage": [
		"{0}. Error code: {1}",
		"Permission Denied (HTTP {0})",
		"Permission Denied",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"Unknown Connection Error ({0})",
		"An unknown connection error occurred. Either you are no longer connected to the internet or the server you are connected to is offline.",
		"{0}: {1}",
		"An unknown error occurred. Please consult the log for more details.",
		"A system error occured ({0})",
		"An unknown error occurred. Please consult the log for more details.",
		"{0} ({1} errors in total)",
		"An unknown error occurred. Please consult the log for more details."
	],
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
	"vs/base/common/keybinding": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows"
	],
	"vs/base/common/processes": [
		"Error: executable info must define a command of type string.",
		"Warning: isShellCommand must be of type boolean. Ignoring value {0}.",
		"Warning: args must be of type string[]. Ignoring value {0}.",
		"Warning: options.cwd must be of type string. Ignoring value {0}."
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/node/processes": [
		"Can't execute a shell command on an UNC drive."
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font weight.",
		"Controls the font size in pixels.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls the display of line numbers. Possible values are 'on', 'off', and 'relative'. 'relative' shows the line count from the current cursor position.",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping (word wrapping). Setting this to -1 forces the editor to never wrap.",
		"Controls if lines should wrap. The lines will wrap at min(editor.wrappingColumn, viewportWidthInColumns).",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Controls if quick suggestions should show up or not while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables parameter hints",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if the editor should automatically format the pasted content. A formatter must be available and the formatter should be able to format a range in a document.",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted on 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions.",
		"Controls if suggestions should be accepted on commit characters. For instance in JavaScript the semi-colon (';') can be a commit character that accepts a suggestion and types that character.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Controls whether copying without a selection copies the current line.",
		"Enable word based suggestions.",
		"Font size for the suggest widget",
		"Line height for the suggest widget",
		"Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'line' and 'underline'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls how the editor should render whitespace characters, possibilities are 'none', 'boundary', and 'all'. The 'boundary' option does not render single spaces between words.",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls how the editor should render the current line highlight, possibilities are 'none', 'gutter', 'line', and 'all'.",
		"Controls if the editor shows code lenses",
		"Controls whether the editor has code folding enabled",
		"Controls whether the editor should render the vertical glyph margin. Glyph margin is mostly used for debugging.",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the diff editor shows +/- indicators for added/removed changes",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}, {1}"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}"
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}]\n{1}",
		"[{0}] {1}"
	],
	"vs/editor/contrib/accessibility/browser/accessibility": [
		"Thank you for trying out VS Code's accessibility options.",
		"Status:",
		"Pressing Tab in the current editor will move focus to the next focusable element. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will move focus to the next focusable element. The command {0} is currently not triggerable by a keybinding.",
		"Pressing Tab in the current editor will insert the tab character. Toggle this behavior by pressing {0}.",
		"Pressing Tab in the current editor will insert the tab character. The command {0} is currently not triggerable by a keybinding.",
		"You can dismiss this tooltip and return to the editor by pressing Escape.",
		"Show Accessibility Help"
	],
	"vs/editor/contrib/bracketMatching/common/bracketMatching": [
		"Go to Bracket"
	],
	"vs/editor/contrib/caretOperations/common/caretOperations": [
		"Move Caret Left",
		"Move Caret Right"
	],
	"vs/editor/contrib/caretOperations/common/transpose": [
		"Transpose Letters"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/defineKeybinding/browser/defineKeybinding": [
		"Define Keybinding",
		"Press desired key combination and ENTER",
		"For your current keyboard layout press ",
		"You won't be able to produce this key combination under your current keyboard layout.",
		"Define Keybinding"
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No Results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Select All Occurrences of Find Match",
		"Change All Occurrences"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level {0}"
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Format Document",
		"Format Selection"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} definitions",
		"Go to Definition",
		"Open Definition to the Side",
		"Peek Definition",
		"Go to Implementation",
		"Peek Implementation",
		"Click to show {0} definitions."
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning"
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Indent Using Tabs",
		"Indent Using Spaces",
		"Detect Indentation from Content",
		"Reindent Lines"
	],
	"vs/editor/contrib/inspectTMScopes/electron-browser/inspectTMScopes": [
		"Developer: Inspect TM Scopes",
		"Loading..."
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copy Line Up",
		"Copy Line Down",
		"Move Line Up",
		"Move Line Down",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Delete Line",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below",
		"Delete All Left",
		"Delete All Right",
		"Join Lines",
		"Transpose characters around the cursor",
		"Transform to Uppercase",
		"Transform to Lowercase"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Sorry, failed to open this link because it is not well-formed: {0}",
		"Sorry, failed to open this link because its target is missing.",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Create Multiple Cursors from Selected Lines"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Show Fixes ({0})",
		"Show Fixes",
		"Quick Fix"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References"
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/rename/common/rename": [
		"No result."
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Go back",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Tab Key Moves Focus"
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/editor/electron-browser/textMate/TMSyntax": [
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.scopeName`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Invalid value in `contributes.{0}.injectTo`. Must be an array of language scope names. Provided value: {1}",
		"Invalid value in `contributes.{0}.embeddedLanguages`. Must be an object map from scope name to language. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/editor/node/languageConfigurationExtensionPoint": [
		"Errors parsing {0}: {1}",
		"The opening bracket character or string sequence.",
		"The closing bracket character or string sequence.",
		"Defines the comment symbols",
		"Defines how block comments are marked.",
		"The character sequence that starts a block comment.",
		"The character sequence that ends a block comment.",
		"The character sequence that starts a line comment.",
		"Defines the bracket symbols that increase or decrease the indentation.",
		"Defines the bracket pairs. When a opening bracket is entered, the closing bracket is inserted automatically.",
		"Defines a list of scopes where the auto pairs are disabled.",
		"Defines the bracket pairs that can be used to surround a selected string."
	],
	"vs/editor/node/textMate/TMGrammars": [
		"Contributes textmate tokenizers.",
		"Language identifier for which this syntax is contributed to.",
		"Textmate scope name used by the tmLanguage file.",
		"Path of the tmLanguage file. The path is relative to the extension folder and typically starts with './syntaxes/'.",
		"A map of scope name to language id if this grammar contains embedded languages.",
		"List of language scope names to which this grammar is injected to."
	],
	"vs/editor/node/textMate/TMSnippets": [
		"Contributes snippets.",
		"Language identifier for which this snippet is contributed to.",
		"Path of the snippets file. The path is relative to the extension folder and typically starts with './snippets/'.",
		"Unknown language in `contributes.{0}.language`. Provided value: {1}",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable."
	],
	"vs/platform/actions/browser/menuItemActionItem": [
		"{0} ({1})"
	],
	"vs/platform/actions/browser/menusExtensionPoint": [
		"menu items must be an arry",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to execute. The command must be declared in the 'commands'-section",
		"Identifier of an alternative command to execute. The command must be declared in the 'commands'-section",
		"Condition which must be true to show this item",
		"Group into which this command belongs",
		"Contributes menu items to the editor",
		"The editor title menu",
		"The editor context menu",
		"The editor tabs context menu",
		"The file explorer context menu",
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `icon` can be omitted or must be either a string or a literal like `{dark, light}`",
		"Identifier of the command to execute",
		"Title by which the command is represented in the UI",
		"(Optional) Category string by the command is grouped in the UI",
		"(Optional) Icon which is used to represent the command in the UI. Either a file path or a themable configuration",
		"Icon path when a light theme is used",
		"Icon path when a dark theme is used",
		"Contributes commands to the command palette.",
		"Command `{0}` appears multiple times in the `commands` section.",
		"`{0}` is not a valid menu identifier",
		"Menu item references a command `{0}` which is not defined in the 'commands' section.",
		"Menu item references an alt-command `{0}` which is not defined in the 'commands' section.",
		"Menu item references the same command as default and alt-command",
		"Sorry, but currently only the 'navigation' group of the 'editor/title' menu supports alt-commands"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Configure settings to be overridden for a set of language identifiers.",
		"Override Settings",
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensionManagement/common/extensionEnablementService": [
		"No workspace."
	],
	"vs/platform/extensionManagement/common/extensionManagement": [
		"Extensions",
		"Preferences"
	],
	"vs/platform/extensionManagement/node/extensionGalleryService": [
		"Extension not found",
		"Couldn't find a compatible version of {0} with this version of Code."
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
	"vs/platform/integrity/node/integrityServiceImpl": [
		"OK",
		"Don't show again",
		"More information",
		"Your {0} installation appears to be corrupt. Please reinstall."
	],
	"vs/platform/jsonschemas/common/jsonValidationExtensionPoint": [
		"Contributes json schema configuration.",
		"The file pattern to match, for example \"package.json\" or \"*.launch\".",
		"A schema URL ('http:', 'https:') or relative path to the extension folder ('./').",
		"'configuration.jsonValidation' must be a array",
		"'configuration.jsonValidation.fileMatch' must be defined",
		"'configuration.jsonValidation.url' must be a URL or relative path",
		"'configuration.jsonValidation.url' is an invalid relative URL: {0}",
		"'configuration.jsonValidation.url' must start with 'http:', 'https:' or './' to reference schemas located in the extension"
	],
	"vs/platform/keybinding/common/abstractKeybindingService": [
		"Here are other available commands: ",
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/markers/common/problemMatcher": [
		"Error: Invalid problemMatcher description. A matcher must at least define a pattern, owner and a file location. The problematic matcher is:\n{0}\n",
		"Info: unknown severity {0}. Valid values are error, warning and info.\n",
		"The loop property is only supported on the last line matcher.",
		"The loop property is only supported on multi line matchers.",
		"The problem pattern is missing a regular expression.",
		"The problem pattern is invalid. It must have at least a file, message and line or location match group.",
		"A problem matcher must define both a begin pattern and an end pattern for watching.",
		"Error: The string {0} is not a valid regular expression.\n"
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
	],
	"vs/workbench/api/node/mainThreadExtensionService": [
		"Overwriting extension {0} with {1}.",
		"Loading development extension at {0}",
		"Overwriting extension {0} with {1}."
	],
	"vs/workbench/api/node/mainThreadMessageService": [
		"Close"
	],
	"vs/workbench/browser/actions/configureLocale": [
		"Configure Language",
		"Defines VSCode's display language.",
		"See {0} for a list of supported languages.",
		"Changing the value requires to restart VSCode.",
		"Unable to create '{0}' ({1}).",
		"The UI Language to use."
	],
	"vs/workbench/browser/actions/fileActions": [
		"Open Folder...",
		"Open..."
	],
	"vs/workbench/browser/actions/toggleActivityBarVisibility": [
		"Toggle Activity Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleEditorLayout": [
		"Toggle Editor Group Vertical/Horizontal Layout",
		"Horizontal Editor Group Layout",
		"Vertical Editor Group Layout",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarPosition": [
		"Toggle Side Bar Location",
		"View"
	],
	"vs/workbench/browser/actions/toggleSidebarVisibility": [
		"Toggle Side Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleStatusbarVisibility": [
		"Toggle Status Bar Visibility",
		"View"
	],
	"vs/workbench/browser/actions/toggleZenMode": [
		"Toggle Zen Mode",
		"View"
	],
	"vs/workbench/browser/parts/activitybar/activitybarActions": [
		"Remove from Activity Bar",
		"Keep in Activity Bar",
		"{0} ({1})",
		"Additional Views",
		"{0} ({1})",
		"Manage Extension",
		"Toggle View Pinned"
	],
	"vs/workbench/browser/parts/activitybar/activitybarPart": [
		"Hide Activity Bar",
		"Active View Switcher"
	],
	"vs/workbench/browser/parts/compositePart": [
		"{0} actions",
		"{0} ({1})"
	],
	"vs/workbench/browser/parts/editor/binaryDiffEditor": [
		"Binary Diff Viewer",
		"Comparing binary files to non binary files is currently not supported",
		"{0} ↔ {1}"
	],
	"vs/workbench/browser/parts/editor/binaryEditor": [
		"Binary Viewer"
	],
	"vs/workbench/browser/parts/editor/editor.contribution": [
		"Text Editor",
		"Text Diff Editor",
		"Binary Diff Editor",
		"Side by Side Editor",
		"Show Editors in First Group",
		"Show Editors in Second Group",
		"Show Editors in Third Group",
		"Show All Opened Editors",
		"View"
	],
	"vs/workbench/browser/parts/editor/editorActions": [
		"Split Editor",
		"Navigate Between Editor Groups",
		"Focus Active Editor Group",
		"Focus First Editor Group",
		"Focus Second Editor Group",
		"Focus Third Editor Group",
		"Focus Previous Group",
		"Focus Next Group",
		"Open to the Side",
		"Close Editor",
		"Close Editors to the Left",
		"Close Editors to the Right",
		"Close All Editors",
		"Close Editors in Other Groups",
		"Close Other Editors",
		"Close All Editors in Group",
		"Move Editor Group Left",
		"Move Editor Group Right",
		"Minimize Other Editor Groups",
		"Even Editor Group Widths",
		"Maximize Editor Group and Hide Sidebar",
		"Keep Editor",
		"Open Next Editor",
		"Open Previous Editor",
		"Open Next Editor in Group",
		"Open Previous Editor in Group",
		"Go Forward",
		"Go Back",
		"Reopen Closed Editor",
		"Show Editors in First Group",
		"Show Editors in Second Group",
		"Show Editors in Third Group",
		"Show Editors in Group",
		"Show All Editors",
		"Open Previous Recently Used Editor in Group",
		"Open Next Recently Used Editor in Group",
		"Open Previous Editor from History",
		"Clear Editor History",
		"Open Last Editor in Group",
		"Move Editor Left",
		"Move Editor Right",
		"Move Editor into Previous Group",
		"Move Editor into Next Group"
	],
	"vs/workbench/browser/parts/editor/editorCommands": [
		"Move the active editor by tabs or groups",
		"Active editor move argument",
		"Argument Properties:\n\t\t\t\t\t\t* 'to': String value providing where to move.\n\t\t\t\t\t\t* 'by': String value providing the unit for move. By tab or by group.\n\t\t\t\t\t\t* 'value': Number value providing how many positions or an absolute position to move.\n\t\t\t\t\t",
		"Command **{0}** has been removed. You can use **{1}** instead",
		"Configure Keyboard Shortcuts"
	],
	"vs/workbench/browser/parts/editor/editorPart": [
		"Left",
		"Center",
		"Right",
		"Top",
		"Center",
		"Bottom",
		"Unable to open '{0}': {1}."
	],
	"vs/workbench/browser/parts/editor/editorPicker": [
		"{0}, editor group picker",
		"Group: {0}",
		"No matching opened editor found in group",
		"List of opened editors is currently empty in group",
		"No matching opened editor found",
		"List of opened editors is currently empty"
	],
	"vs/workbench/browser/parts/editor/editorStatus": [
		"Ln {0}, Col {1} ({2} selected)",
		"Ln {0}, Col {1}",
		"{0} selections ({1} characters selected)",
		"{0} selections",
		"LF",
		"CRLF",
		"Tab moves focus",
		"Disable Accessibility Mode",
		"Go to Line",
		"Indentation",
		"Select Encoding",
		"Select End of Line Sequence",
		"Select Language Mode",
		"File Information",
		"Spaces: {0}",
		"Tab Size: {0}",
		"Search Marketplace Extensions for '{0}'...",
		"Change Language Mode",
		"No text editor active at this time",
		"({0}) - Configured Language",
		"({0})",
		"languages (identifier)",
		"Configure '{0}' language based settings...",
		"Configure File Association for '{0}'...",
		"Auto Detect",
		"Select Language Mode",
		"Current Association",
		"Select Language Mode to Associate with '{0}'",
		"Change Indentation",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"change view",
		"convert file",
		"Select Action",
		"Change End of Line Sequence",
		"No text editor active at this time",
		"The active code editor is read-only.",
		"Select End of Line Sequence",
		"Change File Encoding",
		"No text editor active at this time",
		"No file active at this time",
		"Save with Encoding",
		"Reopen with Encoding",
		"Save with Encoding",
		"Reopen with Encoding",
		"Select Action",
		"Select File Encoding to Reopen File",
		"Select File Encoding to Save with"
	],
	"vs/workbench/browser/parts/editor/tabsTitleControl": [
		"Tab actions"
	],
	"vs/workbench/browser/parts/editor/textDiffEditor": [
		"Text Diff Editor",
		"{0}. Readonly text compare editor.",
		"Readonly text compare editor.",
		"{0}. Text file compare editor.",
		"Text file compare editor.",
		"Switch to Inline View",
		"Switch to Side by Side View",
		"Next Change",
		"Previous Change"
	],
	"vs/workbench/browser/parts/editor/textEditor": [
		"{0} Group {1}."
	],
	"vs/workbench/browser/parts/editor/textResourceEditor": [
		"Text Editor",
		"{0}. Readonly text editor.",
		"Readonly text editor.",
		"{0}. Untitled file text editor.",
		"Untitled file text editor."
	],
	"vs/workbench/browser/parts/editor/titleControl": [
		"Close",
		"Close Others",
		"Close to the Right",
		"Close All",
		"Keep Open",
		"Show Opened Editors",
		"Editor actions"
	],
	"vs/workbench/browser/parts/panel/panelActions": [
		"{0} ({1})",
		"Close Panel",
		"Toggle Panel",
		"Focus into Panel",
		"Toggle Maximized Panel",
		"View",
		"View",
		"View",
		"View"
	],
	"vs/workbench/browser/parts/panel/panelPart": [
		"Active Panel Switcher"
	],
	"vs/workbench/browser/parts/quickopen/quickOpenController": [
		"{0} (Press 'Enter' to confirm or 'Escape' to cancel)",
		"Press 'Enter' to confirm your input or 'Escape' to cancel",
		"There are no entries to pick from",
		"Type '?' to get help on the actions you can take from here",
		"recently opened",
		"recently opened",
		"No results found",
		"This quick open handler can not be used in the current context",
		"{0}, recently opened",
		"Remove From History",
		"Select an editor entry to remove from history"
	],
	"vs/workbench/browser/parts/quickopen/quickopen.contribution": [
		"Go to File...",
		"Navigate Next in Quick Open",
		"Navigate Previous in Quick Open",
		"Select Next in Quick Open",
		"Select Previous in Quick Open"
	],
	"vs/workbench/browser/parts/sidebar/sidebarPart": [
		"Focus into Side Bar",
		"View"
	],
	"vs/workbench/browser/parts/statusbar/statusbarPart": [
		"Command '{0}' is currently not enabled and can not be run.",
		"Manage Extension"
	],
	"vs/workbench/browser/quickopen": [
		"No results matching",
		"No results found",
		"{0}, command",
		"No commands matching"
	],
	"vs/workbench/browser/viewlet": [
		"Collapse All",
		"{0} actions",
		"{0} actions"
	],
	"vs/workbench/electron-browser/actions": [
		"Close Editor",
		"Close Window",
		"Switch Window",
		"Select a window",
		"Current Window",
		"Close Folder",
		"There is currently no folder opened in this instance to close.",
		"New Window",
		"Toggle Full Screen",
		"Toggle Menu Bar",
		"Toggle Developer Tools",
		"Zoom In",
		"Zoom Out",
		"Reset Zoom",
		"Startup Performance",
		"Reload Window",
		"Open Recent",
		"folders",
		"files",
		"Select a path (hold Cmd-key to open in new window)",
		"Select a path to open (hold Ctrl-key to open in new window)",
		"Close Notification Messages",
		"Report Issues",
		"Report Performance Issue",
		"Keyboard Shortcuts Reference",
		"Documentation",
		"Introductory Videos",
		"{0} ⟷ {1}"
	],
	"vs/workbench/electron-browser/crashReporter": [
		"Telemetry",
		"Enable crash reports to be sent to Microsoft.\nThis option requires restart to take effect."
	],
	"vs/workbench/electron-browser/extensionHost": [
		"Extension host did not start in 10 seconds, it might be stopped on the first line and needs a debugger to continue.",
		"Extension host did not start in 10 seconds, that might be a problem.",
		"Error from the extension host: {0}",
		"Extension host terminated unexpectedly. Please reload the window to recover."
	],
	"vs/workbench/electron-browser/main": [
		"Failed to load a required file. Either you are no longer connected to the internet or the server you are connected to is offline. Please refresh the browser to try again.",
		"Failed to load a required file. Please restart the application to try again. Details: {0}"
	],
	"vs/workbench/electron-browser/main.contribution": [
		"View",
		"Help",
		"File",
		"Workbench",
		"Controls if opened editors should show in tabs or not.",
		"Controls the position of the editor's tabs close buttons or disables them when set to 'off'.",
		"Controls if opened editors should show with an icon or not. This requires an icon theme to be enabled as well.",
		"Controls if opened editors show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls if opened editors from Quick Open show as preview. Preview editors are reused until they are kept (e.g. via double click or editing).",
		"Controls where editors open. Select 'left' or 'right' to open editors to the left or right of the current active one. Select 'first' or 'last' to open editors independently from the currently active one.",
		"Controls if Quick Open should close automatically once it loses focus.",
		"Controls if opening settings also opens an editor showing all default settings.",
		"Controls the location of the sidebar. It can either show on the left or right of the workbench.",
		"Controls the visibility of the status bar at the bottom of the workbench.",
		"Controls the visibility of the activity bar in the workbench.",
		"Controls if files should open in a new window or the last active window.\n- default: files will open in the last active window unless opened via the dock or from finder (macOS only)\n- on: files will open in a new window\n- off: files will open in the last active window\nNote that there can still be cases where this setting is ignored (e.g. when using the -new-window or -reuse-window command line option).",
		"Controls if folders should open in a new window or replace the last active window.\n- default: folders will open in a new window unless a folder is picked from within the application (e.g. via the File menu)\n- on: folders will open in a new window\n- off: folders will replace the last active window\nNote that there can still be cases where this setting is ignored (e.g. when using the -new-window or -reuse-window command line option).",
		"Controls how folders are being reopened after a restart. Select 'none' to never reopen a folder, 'one' to reopen the last folder you worked on or 'all' to reopen all folders of your last session.",
		"Controls if a window should restore to full screen mode if it was exited in full screen mode.",
		"Adjust the zoom level of the window. The original size is 0 and each increment above (e.g. 1) or below (e.g. -1) represents zooming 20% larger or smaller. You can also enter decimals to adjust the zoom level with a finer granularity.",
		"If enabled, will show the full path of opened files in the window title.",
		"Controls the dimensions of opening a new window. By default, a new window will open in the center of the screen with small dimensions. When set to  'inherit', the window will get the same dimensions as the last active one. When set to 'maximized', the window will open maximized and fullscreen if configured to 'fullscreen'.",
		"Control the visibility of the menu bar. A setting of 'toggle' means that the menu bar is hidden and a single press of the Alt key will show it. By default, the menu bar will be visible, unless the window is full screen.",
		"If enabled, will automatically change to high contrast theme if Windows is using a high contrast theme, and to dark theme when switching away from a Windows high contrast theme.",
		"Adjust the appearance of the window title bar. Changes require a full restart to apply.",
		"Window",
		"Zen Mode",
		"Controls if turning on Zen Mode also puts the workbench into full screen mode.",
		"Controls if turning on Zen Mode also hides workbench tabs.",
		"Controls if turning on Zen Mode also hides the status bar at the bottom of the workbench."
	],
	"vs/workbench/electron-browser/shell": [
		"It is recommended not to run Code as 'root'.",
		"The shared process terminated unexpectedly. Please reload the window to recover."
	],
	"vs/workbench/electron-browser/window": [
		"Undo",
		"Redo",
		"Cut",
		"Copy",
		"Paste",
		"Select All",
		"Are you sure you want to open '{0}' folders?",
		"&&Open",
		"Developer",
		"File"
	],
	"vs/workbench/node/extensionPoints": [
		"Failed to parse {0}: {1}.",
		"Cannot read file {0}: {1}.",
		"Failed to parse {0}: {1}.",
		"Cannot read file {0}: {1}.",
		"Couldn't find message for key {0}."
	],
	"vs/workbench/parts/cli/electron-browser/cli.contribution": [
		"Install '{0}' command in PATH",
		"This command is not available",
		"Please remove the alias referencing '{0}' in '{1}' (line {2}) and retry this action.",
		"Edit '{0}'",
		"Please remove the '{0}' alias from '{1}' before continuing.",
		"Continue",
		"Cancel",
		"Shell command '{0}' successfully installed in PATH.",
		"Code will now prompt with 'osascript' for Administrator privileges to install the shell command.",
		"OK",
		"Unable to create '/usr/local/bin'.",
		"Cancel",
		"Aborted",
		"Uninstall '{0}' command from PATH",
		"This command is not available",
		"Shell command '{0}' successfully uninstalled from PATH.",
		"Code needs to change the '{0}' shell command. Would you like to do this now?",
		"Change Now",
		"Later",
		"Remember you can always run the '{0}' action from the Command Palette.",
		"Shell Command"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleRenderControlCharacter": [
		"Toggle Control Characters"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleRenderWhitespace": [
		"Toggle Render Whitespace"
	],
	"vs/workbench/parts/codeEditor/electron-browser/toggleWordWrap": [
		"View: Toggle Word Wrap"
	],
	"vs/workbench/parts/debug/browser/breakpointWidget": [
		"Break when expression evaluates to true. 'Enter' to accept, 'esc' to cancel.",
		"The program will only stop here if this condition is true. Press Enter to accept or Escape to cancel.",
		"Break when hit count condition is met. 'Enter' to accept, 'esc' to cancel.",
		"The program will only stop here if the hit count is met. Press Enter to accept or Escape to cancel.",
		"Expression",
		"Hit Count"
	],
	"vs/workbench/parts/debug/browser/debugActionItems": [
		"Add Configuration...",
		"No Configurations"
	],
	"vs/workbench/parts/debug/browser/debugActions": [
		"Open {0}",
		"Configure or Fix 'launch.json'",
		"Start Debugging",
		"Start Without Debugging",
		"Restart",
		"Reconnect",
		"Step Over",
		"Step Into",
		"Step Out",
		"Stop",
		"Disconnect",
		"Continue",
		"Pause",
		"Restart Frame",
		"Remove Breakpoint",
		"Remove All Breakpoints",
		"Enable Breakpoint",
		"Disable Breakpoint",
		"Enable All Breakpoints",
		"Disable All Breakpoints",
		"Activate Breakpoints",
		"Deactivate Breakpoints",
		"Reapply All Breakpoints",
		"Add Function Breakpoint",
		"Rename Function Breakpoint",
		"Add Conditional Breakpoint...",
		"Edit Breakpoint...",
		"Set Value",
		"Add Expression",
		"Add to Watch",
		"Remove Expression",
		"Remove All Expressions",
		"Clear Console",
		"Debug Console",
		"New Output in Debug Console",
		"Focus Debug Console",
		"Focus Process",
		"Step Back",
		"Reverse"
	],
	"vs/workbench/parts/debug/browser/debugEditorActions": [
		"Debug: Toggle Breakpoint",
		"Debug: Add Conditional Breakpoint...",
		"Debug: Run to Cursor",
		"Debug: Evaluate",
		"Debug: Add to Watch",
		"Debug: Show Hover"
	],
	"vs/workbench/parts/debug/browser/debugEditorModelManager": [
		"Breakpoint",
		"Disabled Breakpoint",
		"Unverified Breakpoint",
		"Unverified breakpoint. File is modified, please restart debug session.",
		"Conditional breakpoints not supported by this debug type"
	],
	"vs/workbench/parts/debug/common/debugModel": [
		"Unknown Source",
		"not available",
		"Please start a debug session to evaluate",
		"Unknown stack location"
	],
	"vs/workbench/parts/debug/electron-browser/debug.contribution": [
		"Show Debug",
		"Debug Console",
		"Debug",
		"Debug Console",
		"View",
		"View",
		"Debug",
		"Debug",
		"Allows setting breakpoint in any file",
		"Automatically open explorer view on the end of a debug session",
		"Show variable values inline in editor while debugging"
	],
	"vs/workbench/parts/debug/electron-browser/debugConfigurationManager": [
		"Contributes debug adapters.",
		"Unique identifier for this debug adapter.",
		"Display name for this debug adapter.",
		"Path to the debug adapter program. Path is either absolute or relative to the extension folder.",
		"Optional arguments to pass to the adapter.",
		"Optional runtime in case the program attribute is not an executable but requires a runtime.",
		"Optional runtime arguments.",
		"Mapping from interactive variables (e.g ${action.pickProcess}) in `launch.json` to a command.",
		"Configurations for generating the initial 'launch.json'.",
		"List of languages for which the debug extension could be considered the \"default debugger\".",
		"If specified VS Code will call this command to determine the executable path of the debug adapter and the arguments to pass.",
		"If specified VS Code will call this command for the \"debug\" or \"run\" actions targeted for this extension.",
		"Snippets for adding new configurations in 'launch.json'.",
		"JSON schema configurations for validating 'launch.json'.",
		"Windows specific settings.",
		"Runtime used for Windows.",
		"OS X specific settings.",
		"Runtime used for OSX.",
		"Linux specific settings.",
		"Runtime used for Linux.",
		"Contributes breakpoints.",
		"Allow breakpoints for this language.",
		"Launch",
		"Version of this file format.",
		"List of configurations. Add new configurations or edit existing ones by using IntelliSense.",
		"List of compounds. Each compound references multiple configurations which will get launched together.",
		"Name of compound. Appears in the launch configuration drop down menu.",
		"Names of configurations that will be started as part of this compound.",
		"Debug adapter 'type' can not be omitted and must be of type 'string'.",
		"Unable to create 'launch.json' file inside the '.vscode' folder ({0}).",
		"Select Environment"
	],
	"vs/workbench/parts/debug/electron-browser/debugEditorContribution": [
		"Add Breakpoint",
		"Add Configuration..."
	],
	"vs/workbench/parts/debug/electron-browser/debugHover": [
		"Debug Hover"
	],
	"vs/workbench/parts/debug/electron-browser/debugService": [
		"Only primitive values are shown for this object.",
		"Debugging started.",
		"Debugging paused, reason {0}, {1} {2}",
		"Debugging stopped.",
		"Added breakpoint, line {0}, file {1}",
		"Removed breakpoint, line {0}, file {1}",
		"Compound must have \"configurations\" attribute set in order to start multiple configurations.",
		"Configured debug type '{0}' is not supported.",
		"Missing property 'type' for the chosen launch configuration.",
		"Build errors have been detected during preLaunchTask '{0}'.",
		"Build error has been detected during preLaunchTask '{0}'.",
		"The preLaunchTask '{0}' terminated with exit code {1}.",
		"Debug Anyway",
		"The active file can not be debugged. Make sure it is saved on disk and that you have a debug extension installed for that file type.",
		"Please set up the launch configuration file for your application. {0}",
		"Could not find the preLaunchTask '{0}'.",
		"There is a task {0} running. Can not run pre launch task {1}."
	],
	"vs/workbench/parts/debug/electron-browser/debugViewer": [
		"Process",
		"Paused",
		"Running",
		"Thread",
		"Paused on {0}",
		"Running",
		"Load More Stack Frames",
		"Thread {0}, callstack, debug",
		"Stack Frame {0} line {1} {2}, callstack, debug",
		"Type new variable value",
		"Scope {0}, variables, debug",
		"{0} value {1}, variables, debug",
		"Expression to watch",
		"Type watch expression",
		"{0} value {1}, watch, debug",
		"{0} value {1}, watch, debug",
		"Function to break on",
		"Type function breakpoint",
		"Function breakpoints are not supported by this debug type",
		"Breakpoint line {0} {1}, breakpoints, debug",
		"Function breakpoint {0}, breakpoints, debug",
		"Exception breakpoint {0}, breakpoints, debug"
	],
	"vs/workbench/parts/debug/electron-browser/debugViews": [
		"Variables Section",
		"Variables",
		"Debug Variables",
		"Expressions Section",
		"Watch",
		"Debug Watch Expressions",
		"Call Stack Section",
		"Paused on {0}",
		"Call Stack",
		"Debug Call Stack",
		"Breakpoints Section",
		"Breakpoints",
		"Debug Breakpoints"
	],
	"vs/workbench/parts/debug/electron-browser/electronDebugActions": [
		"Copy Value",
		"Copy",
		"Copy Stack Trace"
	],
	"vs/workbench/parts/debug/electron-browser/rawDebugSession": [
		"More Info",
		"Unable to launch debug adapter from '{0}'.",
		"{0}. Stopping the debug adapter.",
		"Debug adapter process has terminated unexpectedly"
	],
	"vs/workbench/parts/debug/electron-browser/repl": [
		"Read Eval Print Loop Panel",
		"History Previous",
		"History Next",
		"REPL Accept Input"
	],
	"vs/workbench/parts/debug/electron-browser/replViewer": [
		"Object state is captured from first evaluation",
		"Click to follow (Cmd + click opens to the side)",
		"Click to follow (Ctrl + click opens to the side)",
		"Variable {0} has value {1}, read eval print loop, debug",
		"Expression {0} has value {1}, read eval print loop, debug",
		"{0}, read eval print loop, debug",
		"Output variable {0} has value {1}, read eval print loop, debug"
	],
	"vs/workbench/parts/debug/electron-browser/terminalSupport": [
		"debuggee",
		"Integrated terminal not available"
	],
	"vs/workbench/parts/debug/node/debugAdapter": [
		"Debug adapter executable '{0}' does not exist.",
		"Cannot determine executable for debug adapter '{0}'.",
		"Type of configuration.",
		"Name of configuration; appears in the launch configuration drop down menu.",
		"Request type of configuration. Can be \"launch\" or \"attach\".",
		"For debug extension development only: if a port is specified VS Code tries to connect to a debug adapter running in server mode",
		"Task to run before debug session starts.",
		"Controls behavior of the internal debug console.",
		"Windows specific launch configuration attributes.",
		"OS X specific launch configuration attributes.",
		"Linux specific launch configuration attributes."
	],
	"vs/workbench/parts/emmet/browser/actions/showEmmetCommands": [
		"Show Emmet Commands"
	],
	"vs/workbench/parts/emmet/node/actions/balance": [
		"Emmet: Balance (inward)",
		"Emmet: Balance (outward)"
	],
	"vs/workbench/parts/emmet/node/actions/editPoints": [
		"Emmet: Previous Edit Point",
		"Emmet: Next Edit Point"
	],
	"vs/workbench/parts/emmet/node/actions/evaluateMath": [
		"Emmet: Evaluate Math Expression"
	],
	"vs/workbench/parts/emmet/node/actions/expandAbbreviation": [
		"Emmet: Expand Abbreviation"
	],
	"vs/workbench/parts/emmet/node/actions/incrementDecrement": [
		"Emmet: Increment by 0.1",
		"Emmet: Increment by 1",
		"Emmet: Increment by 10",
		"Emmet: Decrement by 0.1",
		"Emmet: Decrement by 1",
		"Emmet: Decrement by 10"
	],
	"vs/workbench/parts/emmet/node/actions/matchingPair": [
		"Emmet: Go to Matching Pair"
	],
	"vs/workbench/parts/emmet/node/actions/mergeLines": [
		"Emmet: Merge Lines"
	],
	"vs/workbench/parts/emmet/node/actions/reflectCssValue": [
		"Emmet: Reflect CSS Value"
	],
	"vs/workbench/parts/emmet/node/actions/removeTag": [
		"Emmet: Remove Tag"
	],
	"vs/workbench/parts/emmet/node/actions/selectItem": [
		"Emmet: Select Previous Item",
		"Emmet: Select Next Item"
	],
	"vs/workbench/parts/emmet/node/actions/splitJoinTag": [
		"Emmet: Split/Join Tag"
	],
	"vs/workbench/parts/emmet/node/actions/toggleComment": [
		"Emmet: Toggle Comment"
	],
	"vs/workbench/parts/emmet/node/actions/updateImageSize": [
		"Emmet: Update Image Size"
	],
	"vs/workbench/parts/emmet/node/actions/updateTag": [
		"Emmet: Update Tag",
		"Enter Tag",
		"Tag"
	],
	"vs/workbench/parts/emmet/node/actions/wrapWithAbbreviation": [
		"Emmet: Wrap with Abbreviation",
		"Enter Abbreviation",
		"Abbreviation"
	],
	"vs/workbench/parts/emmet/node/emmet.contribution": [
		"Emmet",
		"When enabled, emmet abbreviations are expanded when pressing TAB.",
		"Preferences used to modify behavior of some actions and resolvers of Emmet.",
		"Define profile for specified syntax or use your own profile with specific rules.",
		"An array of languages where emmet abbreviations should not be expanded.",
		"Path to a folder containing emmet profiles, snippets and preferences"
	],
	"vs/workbench/parts/execution/electron-browser/terminal.contribution": [
		"External Terminal",
		"Customizes which terminal to run on Windows.",
		"Customizes which terminal application to run on OS X.",
		"Customizes which terminal to run on Linux.",
		"Open New Command Prompt",
		"Open New Terminal",
		"Open in Command Prompt",
		"Open in Terminal"
	],
	"vs/workbench/parts/execution/electron-browser/terminalService": [
		"VS Code Console",
		"Script '{0}' failed with exit code {1}",
		"'{0}' not supported",
		"Press any key to continue...",
		"'{0}' failed with exit code {1}"
	],
	"vs/workbench/parts/explorers/browser/treeExplorer.contribution": [
		"Contributes custom tree explorer viewlet to the sidebar",
		"Unique id used to identify provider registered through vscode.workspace.registerTreeExplorerNodeProvider",
		"Human readable string used to render the custom tree explorer",
		"Path to the viewlet icon on the activity bar",
		"Show {0}",
		"View"
	],
	"vs/workbench/parts/explorers/browser/treeExplorerActions": [
		"Refresh"
	],
	"vs/workbench/parts/explorers/browser/treeExplorerService": [
		"No TreeExplorerNodeProvider with id {providerId} registered."
	],
	"vs/workbench/parts/explorers/browser/views/treeExplorerView": [
		"Tree Explorer Section"
	],
	"vs/workbench/parts/extensions/browser/dependenciesViewer": [
		"Error",
		"Unknown Dependency:"
	],
	"vs/workbench/parts/extensions/browser/extensionEditor": [
		"Extension name",
		"Extension identifier",
		"Publisher name",
		"Install count",
		"Rating",
		"License",
		"Details",
		"Contributions",
		"Changelog",
		"Dependencies",
		"No README available.",
		"No Changelog available.",
		"No Contributions",
		"No Dependencies",
		"Settings ({0})",
		"Name",
		"Description",
		"Default",
		"Debuggers ({0})",
		"Name",
		"Themes ({0})",
		"JSON Validation ({0})",
		"Commands ({0})",
		"Name",
		"Description",
		"Keyboard Shortcuts",
		"Menu Contexts",
		"Languages ({0})",
		"ID",
		"Name",
		"File Extensions",
		"Grammar",
		"Snippets"
	],
	"vs/workbench/parts/extensions/browser/extensionsActions": [
		"Install",
		"Installing",
		"Uninstall",
		"Uninstalling",
		"Update",
		"Update to {0}",
		"Enable (Workspace)",
		"Enable (Always)",
		"Disable (Workspace)",
		"Disable (Always)",
		"Uninstalling",
		"Workspace",
		"Always",
		"Enable",
		"Workspace",
		"Always",
		"Disable",
		"Check for Updates",
		"Update All Extensions",
		"Reload",
		"Reload to update",
		"Reload this window to activate the updated extension '{0}'?",
		"Reload to activate",
		"Reload this window to activate the extension '{0}'?",
		"Reload to deactivate",
		"Reload this window to deactivate the extension '{0}'?",
		"Reload to deactivate",
		"Reload this window to deactivate the uninstalled extension '{0}'?",
		"&&Reload Window",
		"Show Extensions",
		"Install Extensions",
		"Show Installed Extensions",
		"Show Disabled Extensions",
		"Clear Extensions Input",
		"Show Outdated Extensions",
		"Show Popular Extensions",
		"Show Recommended Extensions",
		"Show Workspace Recommended Extensions",
		"Show Recommended Keymaps",
		"Keymaps",
		"Configure Recommended Extensions (Workspace)",
		"Recommendations are only available on a workspace folder.",
		"Unable to create 'extensions.json' file inside the '.vscode' folder ({0}).",
		"Built-in",
		"Disable All Installed Extensions",
		"Disable All Installed Extensions for this Workspace",
		"Enable All Installed Extensions",
		"Enable All Installed Extensions for this Workspace"
	],
	"vs/workbench/parts/extensions/browser/extensionsQuickOpen": [
		"Press Enter to manage your extensions.",
		"Press Enter to search for '{0}' in the Marketplace.",
		"Type an extension name"
	],
	"vs/workbench/parts/extensions/common/extensionsFileTemplate": [
		"Extensions",
		"List of extensions recommendations. The identifier of an extension is always '${publisher}.${name}'. For example: 'vscode.csharp'.",
		"Expected format '${publisher}.${name}'. Example: 'vscode.csharp'."
	],
	"vs/workbench/parts/extensions/common/extensionsInput": [
		"Extension: {0}"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionTipsService": [
		"It is recommended to install the '{0}' extension.",
		"Show Recommendations",
		"Don't show again",
		"Close",
		"This workspace has extension recommendations.",
		"Show Recommendations",
		"Don't show again",
		"Close"
	],
	"vs/workbench/parts/extensions/electron-browser/extensions.contribution": [
		"Manage Extensions",
		"Install Gallery Extensions",
		"Extension",
		"Extensions",
		"View",
		"Extensions",
		"Automatically update extensions"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsActions": [
		"Open Extensions Folder",
		"Install from VSIX...",
		"Successfully installed the extension. Restart to enable it.",
		"Reload Now"
	],
	"vs/workbench/parts/extensions/electron-browser/extensionsViewlet": [
		"Search Extensions in Marketplace",
		"Extensions",
		"Sort By: Install Count",
		"Sort By: Rating",
		"Sort Order: ↑",
		"Sort Order: ↓",
		"No extensions found.",
		"Marketplace returned 'ECONNREFUSED'. Please check the 'http.proxy' setting.",
		"Extensions",
		"{0} Outdated Extensions"
	],
	"vs/workbench/parts/extensions/node/extensionsWorkbenchService": [
		"Enabling '{0}' also enable its dependencies. Would you like to continue?",
		"Yes",
		"No",
		"Would you like to disable '{0}' only or its dependencies also?",
		"Only",
		"All",
		"Cancel",
		"Cannot disable extension '{0}'. Extension '{1}' depends on this.",
		"Cannot disable extension '{0}'. Extensions '{1}' and '{2}' depend on this.",
		"Cannot disable extension '{0}'. Extensions '{1}', '{2}' and others depend on this.",
		"Disable other keymaps to avoid conflicts between keybindings?",
		"Yes",
		"No"
	],
	"vs/workbench/parts/feedback/electron-browser/feedback": [
		"Tweet Feedback",
		"Tweet us your feedback.",
		"Your installation is corrupt.",
		"Please specify this if you submit a bug.",
		"How was your experience?",
		"Happy",
		"Sad",
		"Other ways to contact us",
		"Submit a bug",
		"Request a missing feature",
		"Tell us why?",
		"Comments",
		"Tweet",
		"character left",
		"characters left",
		"Sending",
		"Thanks",
		"Try again"
	],
	"vs/workbench/parts/files/browser/editors/binaryFileEditor": [
		"Binary File Viewer"
	],
	"vs/workbench/parts/files/browser/editors/textFileEditor": [
		"Text File Editor",
		"Create File",
		"{0}. Text file editor.",
		"Text file editor."
	],
	"vs/workbench/parts/files/browser/fileActions": [
		"Retry",
		"Rename",
		"Rename",
		"New File",
		"New Folder",
		"Open a folder first to create files or folders within.",
		"New Untitled File",
		"New File",
		"New Folder",
		"New File",
		"New Folder",
		"&&Move to Recycle Bin",
		"&&Move to Trash",
		"&&Delete",
		"You are deleting a folder with unsaved changes in 1 file. Do you want to continue?",
		"You are deleting a folder with unsaved changes in {0} files. Do you want to continue?",
		"You are deleting a file with unsaved changes. Do you want to continue?",
		"Your changes will be lost if you don't save them.",
		"Are you sure you want to delete '{0}' and its contents?",
		"Are you sure you want to delete '{0}'?",
		"You can restore from the recycle bin.",
		"You can restore from the trash.",
		"Are you sure you want to permanently delete '{0}' and its contents?",
		"Are you sure you want to permanently delete '{0}'?",
		"This action is irreversible!",
		"Delete Permanently",
		"Delete",
		"Import Files",
		"A file or folder with the same name already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace",
		"Copy",
		"Paste",
		"Duplicate",
		"Open to the Side",
		"Select for Compare",
		"Compare Active File With...",
		"Select a previously opened file to compare with",
		"The selected file can not be compared with '{0}'.",
		"Open a file first to compare it with another file.",
		"Compare with '{0}'",
		"Compare Files",
		"Refresh",
		"Save",
		"Save As...",
		"Save All",
		"Save All in Group",
		"Save Dirty Files",
		"Revert File",
		"Focus on Open Editors View",
		"Focus on Files Explorer",
		"Show Active File in Explorer",
		"Open a file first to show it in the explorer",
		"Collapse Folders in Explorer",
		"Refresh Explorer",
		"A file or folder name must be provided.",
		"A file or folder **{0}** already exists at this location. Please choose a different name.",
		"The name **{0}** is not valid as a file or folder name. Please choose a different name.",
		"The name **{0}** results in a path that is too long. Please choose a shorter name."
	],
	"vs/workbench/parts/files/browser/fileActions.contribution": [
		"Files"
	],
	"vs/workbench/parts/files/browser/files.contribution": [
		"Show Explorer",
		"Explorer",
		"View",
		"Text File Editor",
		"Binary File Editor",
		"Files",
		"Configure glob patterns for excluding files and folders.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Configure file associations to languages (e.g. \"*.extension\": \"html\"). These have precedence over the default associations of the languages installed.",
		"The default character set encoding to use when reading and writing files.",
		"The default end of line character.",
		"When enabled, will trim trailing whitespace when saving a file.",
		"When enabled, insert a final new line at the end of the file when saving it.",
		"Controls auto save of dirty files. Accepted values:  \"{0}\", \"{1}\", \"{2}\" (editor loses focus), \"{3}\" (window loses focus). If set to \"{4}\", you can configure the delay in \"files.autoSaveDelay\".",
		"Controls the delay in ms after which a dirty file is saved automatically. Only applies when \"files.autoSave\" is set to \"{0}\"",
		"Configure glob patterns of file paths to exclude from file watching. Changing this setting requires a restart. When you experience Code consuming lots of cpu time on startup, you can exclude large folders to reduce the initial load.",
		"Disable hot exit.",
		"Hot exit will be triggered when the application is closed, that is when the last window is closed on Windows/Linux or when the workbench.action.quit command is triggered (command pallete, keybinding, menu). All windows with backups will be restored upon next launch.",
		"Hot exit will be triggered when the application is closed, that is when the last window is closed on Windows/Linux or when the workbench.action.quit command is triggered (command pallete, keybinding, menu), and also for any window with a folder opened regardless of whether it's the last window. All windows without folders opened will be restored upon next launch. To restore folder windows as they were before shutdown set \"window.reopenFolders\" to \"all\".",
		"Controls whether unsaved files are remembered between sessions, allowing the save prompt when exiting the editor to be skipped.",
		"Editor",
		"Format a file on save. A formatter must be available, the file must not be auto-saved, and editor must not be shutting down.",
		"File Explorer",
		"Number of editors shown in the Open Editors pane. Set it to 0 to hide the pane.",
		"Controls if the height of the open editors section should adapt dynamically to the number of elements or not.",
		"Controls if the explorer should automatically reveal and select files when opening them.",
		"Controls if the explorer should allow to move files and folders via drag and drop."
	],
	"vs/workbench/parts/files/browser/saveErrorHandler": [
		"Discard",
		"Overwrite",
		"Retry",
		"Failed to save '{0}': File is write protected. Select 'Overwrite' to remove protection.",
		"Failed to save '{0}': {1}",
		"Failed to save '{0}': The content on disk is newer. Click on **Compare** to compare your version with the one on disk.",
		"Compare",
		"{0} (on disk) ↔ {1} (in {2}) - Resolve save conflict",
		"Use the actions in the editor tool bar to either **undo** your changes or **overwrite** the content on disk with your changes",
		"Use local changes and overwrite disk contents",
		"Discard local changes and revert to content on disk"
	],
	"vs/workbench/parts/files/browser/views/emptyView": [
		"Files Explorer Section",
		"No Folder Opened",
		"You have not yet opened a folder.",
		"Open Folder"
	],
	"vs/workbench/parts/files/browser/views/explorerView": [
		"Files Explorer Section",
		"Files Explorer"
	],
	"vs/workbench/parts/files/browser/views/explorerViewer": [
		"Type file name. Press Enter to confirm or Escape to cancel.",
		"{0}, Files Explorer",
		"'{0}' already exists in the destination folder. Do you want to replace it?",
		"This action is irreversible!",
		"&&Replace"
	],
	"vs/workbench/parts/files/browser/views/openEditorsView": [
		"Open Editors Section",
		"Open Editors",
		"Open Editors: List of Active Files",
		"{0} unsaved"
	],
	"vs/workbench/parts/files/browser/views/openEditorsViewer": [
		"{0}, Editor Group",
		"{0}, Open Editor",
		"Save All",
		"Close All",
		"Close",
		"Close Others",
		"Close All"
	],
	"vs/workbench/parts/files/electron-browser/dirtyFilesTracker": [
		"{0} unsaved files"
	],
	"vs/workbench/parts/files/electron-browser/electronFileActions": [
		"Reveal in Explorer",
		"Reveal in Finder",
		"Open Containing Folder",
		"Reveal Active File in Windows Explorer",
		"Reveal Active File in Finder",
		"Open Containing Folder of Active File",
		"Open a file first to reveal",
		"Copy Path",
		"Copy Path of Active File",
		"Open a file first to copy its path",
		"Open File...",
		"Open Active File in New Window",
		"Open a file first to open in new window"
	],
	"vs/workbench/parts/files/electron-browser/files.electron.contribution": [
		"Files",
		"Show in Side Bar",
		"Show in Explorer"
	],
	"vs/workbench/parts/git/browser/gitActions": [
		"Open Change",
		"Open File",
		"Init",
		"Refresh",
		"Stage",
		"Stage All",
		"Are you sure you want to clean all changes?",
		"There are unstaged changes in {0} file.\n\nThis action is irreversible!",
		"There are unstaged changes in {0} files.\n\nThis action is irreversible!",
		"&&Clean Changes",
		"Are you sure you want to clean changes in '{0}'?",
		"This action is irreversible!",
		"&&Clean Changes",
		"Clean",
		"Clean All",
		"Unstage",
		"Unstage All",
		"Can't checkout. Please commit or stash your work first.",
		"Commit Staged",
		"Commit Staged (Signed Off)",
		"Commit",
		"Commit Message",
		"Commit All",
		"Commit All (Signed Off)",
		"Commit All",
		"Commit Staged",
		"Can't pull. Please commit or stash your work first.",
		"Authentication failed on the git remote.",
		"Authentication failed on the git remote.",
		"Push to...",
		"Pick a remote to push the branch '{0}' to:",
		"Authentication failed on the git remote.",
		"Publish",
		"Are you sure you want to publish '{0}' to '{1}'?",
		"&&Publish",
		"Pick a remote to publish the branch '{0}' to:",
		"Authentication failed on the git remote.",
		"This action will push and pull commits to and from '{0}'.",
		"OK",
		"Cancel",
		"OK, Never Show Again",
		"Authentication failed on the git remote.",
		"Undo Last Commit"
	],
	"vs/workbench/parts/git/browser/gitActions.contribution": [
		"Switch to Changes View",
		"Switch to Editor View",
		"Stage",
		"Unstage",
		"Stage Selected Lines",
		"Unstage Selected Lines",
		"Open Change",
		"Open File",
		"Git"
	],
	"vs/workbench/parts/git/browser/gitQuickOpen": [
		"{0}, git",
		"Branch at {0}",
		"Remote branch at {0}",
		"Tag at {0}",
		"Branch {0} is already the current branch",
		"{0}, git branch",
		"Create branch {0}",
		"No other branches",
		"Please provide a valid branch name"
	],
	"vs/workbench/parts/git/browser/gitServices": [
		"Can't open this git resource.",
		"{0} (index) ↔ {1}",
		"{0} - Changes on index",
		"{0} ← {1}",
		"{0} - Renamed - Changes on index",
		"{0} (HEAD) ↔ {1}",
		"{0} - Changes on working tree",
		"{0} (merge) ↔ {1}",
		"{0} - Merge changes",
		"You seem to have git {0} installed. Code works best with git >=2.0.0.",
		"Download",
		"Don't show again",
		"Please configure your git user name and e-mail.",
		"Git {0}",
		"You should first resolve the unmerged changes before committing your changes.",
		"Show Output",
		"Cancel",
		"There was an issue running a git operation. Please review the output or use a console to check the state of your repository.",
		"{0} (index)",
		"{0} - Changes on index",
		"{0} ({1})",
		"{0} - Changes on {1}",
		"Can't open this git resource."
	],
	"vs/workbench/parts/git/browser/gitWidgets": [
		"Publish Branch",
		"Synchronize Changes",
		"Git is not enabled in this workspace."
	],
	"vs/workbench/parts/git/browser/gitWorkbenchContributions": [
		"Running git status",
		"{0} pending changes",
		"Show Git",
		"Git",
		"Git",
		"View",
		"Git Commands",
		"Git",
		"Is git enabled",
		"Path to the git executable",
		"Whether auto refreshing is enabled",
		"Whether auto fetching is enabled.",
		"Whether long commit messages should be warned about.",
		"Always allow large repositories to be managed by Code.",
		"Confirm before synchronizing git repositories.",
		"Controls the git badge counter.",
		"Controls what type of branches are listed."
	],
	"vs/workbench/parts/git/browser/views/changes/changesView": [
		"Please provide a commit message. You can always press **{0}** to commit changes. If there are any staged changes, only those will be committed; otherwise, all changes will.",
		"Once there are some changes to commit, type in the commit message and either press **{0}** to commit changes. If there are any staged changes, only those will be committed; otherwise, all changes will.",
		"It is recommended to keep the commit's first line under 50 characters. Feel free to use more lines for extra information.",
		"Message (press {0} to commit)",
		"Git: Type commit message and press {0} to commit",
		"Git Changes View",
		"Show Git Output"
	],
	"vs/workbench/parts/git/browser/views/changes/changesViewer": [
		"Staged Changes",
		"Changes",
		"Merge Changes",
		"This file is located outside the current workspace.",
		"M",
		"M",
		"A",
		"D",
		"D",
		"R",
		"C",
		"U",
		"!",
		"D",
		"A",
		"D",
		"A",
		"D",
		"A",
		"M",
		"Modified in index",
		"Modified",
		"Added to index",
		"Deleted in index",
		"Deleted",
		"Renamed in index",
		"Copied in index",
		"Untracked",
		"Ignored",
		"Conflict: both deleted",
		"Conflict: added by us",
		"Conflict: deleted by them",
		"Conflict: added by them",
		"Conflict: deleted by us",
		"Conflict: both added",
		"Conflict: both modified",
		"File {0} in folder {1} has status: {2}, Git",
		"Staged Changes, Git",
		"Changes, Git",
		"Merge, Git"
	],
	"vs/workbench/parts/git/browser/views/disabled/disabledView": [
		"Git is disabled in the settings."
	],
	"vs/workbench/parts/git/browser/views/empty/emptyView": [
		"This workspace isn't yet under git source control.",
		"Initialize Git Repository"
	],
	"vs/workbench/parts/git/browser/views/gitless/gitlessView": [
		"You can either install it with {0}, download it from {1} or install the {2} command line developer tools, by simply typing {3} on a Terminal prompt.",
		"You can either install it with {0} or download it from {1}.",
		"You can download it from {0}.",
		"You can download it from {0}.",
		"It looks like git is not installed on your system.",
		"Once git is installed, please restart VSCode."
	],
	"vs/workbench/parts/git/browser/views/huge/hugeView": [
		"Your repository appears to have many active changes.\nThis can cause Code to become very slow.",
		"You can permanently disable this warning with the following setting:",
		"Allow large repositories"
	],
	"vs/workbench/parts/git/browser/views/notroot/notrootView": [
		"This directory seems to be contained in a git repository.",
		"Open the repository's root directory in order to access Git features."
	],
	"vs/workbench/parts/git/browser/views/noworkspace/noworkspaceView": [
		"You have not yet opened a folder.",
		"Open a folder with a Git repository in order to access Git features.",
		"Open Folder"
	],
	"vs/workbench/parts/git/electron-browser/git.contribution": [
		"Show SCM",
		"Git"
	],
	"vs/workbench/parts/git/electron-browser/gitActions": [
		"Provide a valid git repository URL",
		"Repository URL",
		"Provide a valid git repository URL",
		"Destination clone directory",
		"Cloning repository '{0}'...",
		"Destination repository already exists, please pick another directory to clone to."
	],
	"vs/workbench/parts/git/node/git.lib": [
		"Can't open file from git",
		"File seems to be binary and cannot be opened as text"
	],
	"vs/workbench/parts/html/browser/html.contribution": [
		"Html Preview"
	],
	"vs/workbench/parts/html/browser/htmlPreviewPart": [
		"Invalid editor input."
	],
	"vs/workbench/parts/html/browser/webview": [
		"Developer: Webview Tools"
	],
	"vs/workbench/parts/markers/common/messages": [
		"View",
		"Show Problems",
		"Problems View",
		"Controls if Problems view should automatically reveal files when opening them",
		"Problems",
		"Problems grouped by files",
		"No problems have been detected in the workspace so far.",
		"No results found with provided filter criteria",
		"Filter Problems",
		"Filter by type or text",
		"errors",
		"warnings",
		"infos",
		"1 Error",
		"{0} Errors",
		"1 Warning",
		"{0} Warnings",
		"1 Info",
		"{0} Infos",
		"1 Unknown",
		"{0} Unknowns",
		"({0}, {1})",
		"{0} with {1} problems",
		"Error generated by {0}: {1} at line {2} and character {3}",
		"Error: {0} at line {1} and character {2}",
		"Warning generated by {0}: {1} at line {2} and character {3}",
		"Warning: {0} at line {1} and character {2}",
		"Info generated by {0}: {1} at line {2} and character {3}",
		"Info: {0} at line {1} and character {2}",
		"Problem generated by {0}: {1} at line {2} and character {3}",
		"Problem: {0} at line {1} and character {2}",
		"Show Errors and Warnings"
	],
	"vs/workbench/parts/markers/electron-browser/markersElectronContributions": [
		"Copy"
	],
	"vs/workbench/parts/nps/electron-browser/nps.contribution": [
		"Do you mind taking a quick feedback survey?",
		"Take Survey",
		"Remind Me later",
		"Don't Show Again"
	],
	"vs/workbench/parts/output/browser/output.contribution": [
		"Output",
		"View",
		"View",
		"Clear Output"
	],
	"vs/workbench/parts/output/browser/outputActions": [
		"Toggle Output",
		"Clear Output",
		"Toggle Output Scroll Lock",
		"Switch to Output"
	],
	"vs/workbench/parts/output/browser/outputPanel": [
		"{0}, Output panel",
		"Output panel"
	],
	"vs/workbench/parts/output/common/output": [
		"Output",
		"for '{0}'"
	],
	"vs/workbench/parts/preferences/browser/preferences.contribution": [
		"Default Preferences Editor",
		"Preferences",
		"Collapse All"
	],
	"vs/workbench/parts/preferences/browser/preferencesActions": [
		"Open User Settings",
		"Open Keyboard Shortcuts",
		"Open Workspace Settings",
		"Configure language specific settings...",
		"({0})",
		"Select Language"
	],
	"vs/workbench/parts/preferences/browser/preferencesEditor": [
		"Default Settings",
		"Total {0} Settings",
		"No Results",
		"1 Setting matched",
		"{0} Settings matched",
		"Default preferences. Readonly text editor.",
		"Edit",
		"Replace in Settings",
		"Copy to Settings",
		"This setting must be a User Setting. To configure TypeScript for the workspace, open a TypeScript file and click on the TypeScript version in the status bar.",
		"This setting must be a User Setting. To configure PHP for the workspace, open a PHP file and click on 'PHP Path' in the status bar.",
		"This setting must be a User Setting."
	],
	"vs/workbench/parts/preferences/browser/preferencesService": [
		"Open a folder first to create workspace settings",
		"Place your key bindings in this file to overwrite the defaults",
		"Default Keybindings",
		"Place your settings in this file to overwrite the default settings",
		"Place your settings in this file to overwrite default and user settings.",
		"Unable to create '{0}' ({1})."
	],
	"vs/workbench/parts/preferences/browser/preferencesWidgets": [
		"Settings Switcher",
		"User Settings",
		"Workspace Settings",
		"Search settings",
		"Search Settings"
	],
	"vs/workbench/parts/preferences/common/preferencesModels": [
		"Commonly Used",
		"Overwrite key bindings by placing them into your key bindings file."
	],
	"vs/workbench/parts/quickopen/browser/commandsHandler": [
		"Show All Commands",
		"{0}, {1}, commands",
		"{0}, commands",
		"Command '{0}' can not be run from here.",
		"Command '{0}' is not enabled in the current context.",
		"Command '{0}' is not enabled in the current context.",
		"{0}: {1}",
		"{0}: {1}",
		"No commands matching"
	],
	"vs/workbench/parts/quickopen/browser/gotoLineHandler": [
		"Go to Line...",
		"Type a line number between 1 and {0} to navigate to",
		"Type a line number to navigate to",
		"Go to line {0} and character {1}",
		"Go to line {0}",
		"Type a line number to navigate to.",
		"Open a text file first to go to a line"
	],
	"vs/workbench/parts/quickopen/browser/gotoSymbolHandler": [
		"Go to Symbol in File...",
		"symbols ({0})",
		"methods ({0})",
		"functions ({0})",
		"constructors ({0})",
		"variables ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"namespaces ({0})",
		"packages ({0})",
		"modules ({0})",
		"properties ({0})",
		"enumerations ({0})",
		"strings ({0})",
		"rules ({0})",
		"files ({0})",
		"arrays ({0})",
		"numbers ({0})",
		"booleans ({0})",
		"objects ({0})",
		"keys ({0})",
		"{0}, symbols",
		"No symbols matching",
		"No symbols found",
		"Type to narrow down symbols of the currently active editor.",
		"No symbol information for the file",
		"Open a text file first to go to a symbol"
	],
	"vs/workbench/parts/quickopen/browser/helpHandler": [
		"{0}, picker help",
		"global commands",
		"editor commands"
	],
	"vs/workbench/parts/quickopen/browser/quickopen.contribution": [
		"Show and Run Commands",
		"Go to Line",
		"Go to Line",
		"Go to Symbol in File",
		"Go to Symbol in File by Category",
		"Show Help",
		"Open View"
	],
	"vs/workbench/parts/quickopen/browser/viewPickerHandler": [
		"{0}, view picker",
		"Views",
		"Panels",
		"Terminal",
		"{0}: {1}",
		"Output",
		"Open View",
		"Quick Open View"
	],
	"vs/workbench/parts/scm/browser/scm.contribution": [
		"Show Git",
		"SCM",
		"Show SCM",
		"View"
	],
	"vs/workbench/parts/scm/browser/scmActivity": [
		"{0} pending changes"
	],
	"vs/workbench/parts/scm/browser/scmViewlet": [
		"Commit",
		"Message (press {0} to submit)",
		"Changes: Type message and press {0} to accept the changes"
	],
	"vs/workbench/parts/search/browser/openAnythingHandler": [
		"file and symbol results",
		"file results"
	],
	"vs/workbench/parts/search/browser/openFileHandler": [
		"{0}, file picker",
		"search results"
	],
	"vs/workbench/parts/search/browser/openSymbolHandler": [
		"{0}, symbols picker",
		"symbol results",
		"No symbols matching",
		"Type to search for symbols"
	],
	"vs/workbench/parts/search/browser/patternInputWidget": [
		"input",
		"Use Glob Patterns",
		"The pattern to match. e.g. **\\*\\*/*.js** to match all JavaScript files or **myFolder/\\*\\*** to match that folder with all children.\n\n**Reference**:\n**\\*** matches 0 or more characters\n**?** matches 1 character\n**\\*\\*** matches zero or more directories\n**[a-z]** matches a range of characters\n**{a,b}** matches any of the patterns)"
	],
	"vs/workbench/parts/search/browser/replaceService": [
		"{0} ↔ {1} (Replace Preview)"
	],
	"vs/workbench/parts/search/browser/search.contribution": [
		"Find in Folder",
		"Go to Symbol in Workspace...",
		"Search",
		"Show Search",
		"View",
		"Find in Files",
		"Go to File",
		"Go to Symbol in Workspace",
		"Search",
		"Configure glob patterns for excluding files and folders in searches. Inherits all glob patterns from the files.exclude setting.",
		"The glob pattern to match file paths against. Set to true or false to enable or disable the pattern.",
		"Additional check on the siblings of a matching file. Use $(basename) as variable for the matching file name.",
		"Configure to include results from a global symbol search in the file results for Quick Open."
	],
	"vs/workbench/parts/search/browser/searchActions": [
		"Show next search term",
		"Show previous search term",
		"Focus next input box",
		"Focus previous input box",
		"Replace in Files",
		"Find in Folder",
		"Refresh",
		"Clear Search Results",
		"Focus next search result",
		"Focus previous search result",
		"Remove",
		"Replace All",
		"Replace",
		"Open Settings"
	],
	"vs/workbench/parts/search/browser/searchResultsView": [
		"{0} matches found",
		"{0} match found",
		"{0} matches in file {1} of folder {2}, Search result",
		"Replace preview result, {0}",
		"{0}, Search result"
	],
	"vs/workbench/parts/search/browser/searchViewlet": [
		"Toggle Search Details",
		"files to include",
		"Search Include Patterns",
		"files to exclude",
		"Search Exclude Patterns",
		"files excluded through settings",
		"Configured Search Exclude Patterns",
		"Replaced {0} occurrences across {1} files with {2}.",
		"Removed {0} occurrences across {1} files.",
		"Replace All",
		"Replace {0} occurrences across {1} files with '{2}'?",
		"Remove {0} occurrences across {1} files?",
		"Replace",
		"Search Results",
		"{0} when {1}",
		"The result set only contains a subset of all matches. Please be more specific in your search to narrow down the results.",
		"Search was canceled before any results could be found - ",
		"No results found in '{0}' excluding '{1}' - ",
		"No results found in '{0}' - ",
		"No results found excluding '{0}' - ",
		"No results found. Review your settings for configured exclusions - ",
		"Search again",
		"Search again in all files",
		"Open Settings",
		"Search returned {0} results in {1} files",
		"You have not yet opened a folder. Only open files are currently searched - ",
		"Open Folder"
	],
	"vs/workbench/parts/search/browser/searchWidget": [
		"Replace All (Submit Search to Enable)",
		"Replace All",
		"Toggle Replace",
		"Search: Type Search Term and press Enter to search or Escape to cancel",
		"Search",
		"Replace: Type replace term and press Enter to preview or Escape to cancel",
		"Replace",
		"Expression matches everything"
	],
	"vs/workbench/parts/snippets/common/snippetCompletion": [
		"Insert Snippet"
	],
	"vs/workbench/parts/snippets/electron-browser/snippets.contribution": [
		"Open User Snippets",
		"Select Language for Snippet",
		"Unable to create {0}",
		"Preferences",
		"Empty snippet",
		"User snippet configuration",
		"The prefix to used when selecting the snippet in intellisense",
		"The snippet content. Use '${id}', '${id:label}', '${1:label}' for variables and '$0', '$1' for the cursor positions",
		"The snippet description."
	],
	"vs/workbench/parts/snippets/electron-browser/snippetsTracker": [
		"User Snippet"
	],
	"vs/workbench/parts/tasks/browser/taskQuickOpen": [
		"{0}, tasks",
		"Type the name of a task to run",
		"No tasks matching",
		"No tasks found"
	],
	"vs/workbench/parts/tasks/common/taskTemplates": [
		"Compiles a TypeScript project",
		"Compiles a TypeScript project in watch mode",
		"Executes .NET Core build command",
		"Executes the build target",
		"Example to run an arbitrary external command",
		"Executes common maven commands"
	],
	"vs/workbench/parts/tasks/electron-browser/task.contribution": [
		"Tasks are only available on a workspace folder.",
		"Run Build Task",
		"Run Test Task",
		"Run Rebuild Task",
		"Run Clean Task",
		"Tasks are only available on a workspace folder.",
		"Select a Task Runner",
		"Auto detecting tasks for {0}",
		"Auto detecting the task system failed. Using default template. Consult the task output for details.",
		"Unable to create the 'tasks.json' file inside the '.vscode' folder. Consult the task output for details.",
		"Configure Task Runner",
		"Configure Build Task",
		"Close",
		"View Terminal",
		"Terminate Running Task",
		"The tasks are executed in the integrated terminal. Use the terminal to manage the tasks.",
		"The launched process doesn't exist anymore. If the task spawned background tasks exiting VS Code might result in orphaned processes.",
		"Failed to terminate running task",
		"Show Task Log",
		"Run Task",
		"Problems",
		"99+",
		"Tasks",
		"Changing the task execution engine requires to restart VS Code. The change is ignored.",
		"Error: The content of the tasks.json file has syntax errors. Please correct them before executing a task.\n",
		"No task runner configured.",
		"The provided task configuration has validation errors. See tasks output log for details.",
		"No valid task runner configured. Supported task runners are 'service' and 'program'.",
		"Error: The content of the tasks.json file has syntax errors. Please correct them before executing a task.\n",
		"Error: the provided task configuration has validation errors and can't not be used. Please correct the errors first.",
		"The task is already active and in watch mode. To terminate the task use `F1 > terminate task`",
		"There is an active running task right now. Terminate it first before executing another task.",
		"There is a task running. Do you want to terminate it?",
		"&&Terminate Task",
		"The launched task doesn't exist anymore. If the task spawned background processes exiting VS Code might result in orphaned processes. To avoid this start the last background process with a wait flag.",
		"&&Exit Anyways",
		"An error has occurred while running a task. See task log for details.",
		"Tasks",
		"Run Task",
		"Additional command options",
		"The current working directory of the executed program or script. If omitted Code's current workspace root is used.",
		"The environment of the executed program or shell. If omitted the parent process' environment is used.",
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
		"The regular expression to detect the begin or end of a watching task.",
		"The match group index of the filename. Can be omitted.",
		"The name of a base problem matcher to use.",
		"The owner of the problem inside Code. Can be omitted if base is specified. Defaults to 'external' if omitted and base is not specified.",
		"The default severity for captures problems. Is used if the pattern doesn't define a match group for severity.",
		"Controls if a problem reported on a text document is applied only to open, closed or all documents.",
		"A problem pattern or the name of a predefined problem pattern. Can be omitted if base is specified.",
		"Defines how file names reported in a problem pattern should be interpreted.",
		"If set to true the watcher is in active mode when the task starts. This is equals of issuing a line that matches the beginPattern",
		"If matched in the output the start of a watching task is signaled.",
		"If matched in the output the end of a watching task is signaled.",
		"A regular expression signaling that a watched tasks begins executing triggered through file watching.",
		"A regular expression signaling that a watched tasks ends executing.",
		"The command to be executed. Can be an external program or a shell command.",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"Additional arguments passed to the command.",
		"Controls whether the output of the running task is shown or not. If omitted 'always' is used.",
		"Deprecated. Use isBackground instead.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the executed task is kept alive and is running in the background.",
		"Whether the user is prompted when VS Code closes with a running background task.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Controls whether the task name is added as an argument to the command. Default is false.",
		"Prefix to indicate that an argument is task.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The task configurations. Usually these are enrichments of task already defined in the external task runner.",
		"The shell to be used.",
		"The shell arguments.",
		"The command to be executed. Can be an external program or a shell command.",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"Arguments passed to the command when this task is invoked.",
		"The task's name",
		"The command to be executed. Can be an external program or a shell command.",
		"Specifies whether the command is a shell command or an external program. Defaults to false if omitted.",
		"Arguments passed to the command when this task is invoked.",
		"Windows specific command configuration",
		"Mac specific command configuration",
		"Linux specific command configuration",
		"Controls whether the task name is added as an argument to the command. If omitted the globally defined value is used.",
		"Controls whether the output of the running task is shown or not. If omitted the globally defined value is used.",
		"Controls whether the executed command is echoed to the output. Default is false.",
		"Deprecated. Use isBackground instead.",
		"Whether the executed task is kept alive and is watching the file system.",
		"Whether the executed task is kept alive and is running in the background.",
		"Whether the user is prompted when VS Code closes with a running task.",
		"Maps this task to Code's default build command.",
		"Maps this task to Code's default test command.",
		"The problem matcher(s) to use. Can either be a string or a problem matcher definition or an array of strings and problem matchers.",
		"The config's version number",
		"Windows specific command configuration",
		"Mac specific command configuration",
		"Linux specific command configuration"
	],
	"vs/workbench/parts/tasks/electron-browser/terminalTaskSystem": [
		"No build task defined in tasks.json",
		"No test task defined in tasks.json",
		"Task '{0}' not found",
		"A unknown error has occurred while executing a task. See task output log for details.",
		"Task - {0}",
		"Can't execute a shell command on an UNC drive."
	],
	"vs/workbench/parts/tasks/node/processRunnerConfiguration": [
		"Warning: options.cwd must be of type string. Ignoring value {0}\n",
		"Warning: shell configuration is only supported when executing tasks in the terminal.",
		"Error: command arguments must be an array of strings. Provided value is:\n{0}",
		"Error: Problem Matcher in declare scope must have a name:\n{0}\n",
		"Warning: the defined problem matcher is unknown. Supported types are string | ProblemMatcher | (string | ProblemMatcher)[].\n{0}\n",
		"Error: Invalid problemMatcher reference: {0}\n",
		"Error: tasks must provide a taskName property. The task will be ignored.\n{0}\n",
		"The task {0} is a shell command and specifies arguments. To ensure correct command line quoting please merge args into the command."
	],
	"vs/workbench/parts/tasks/node/processRunnerDetector": [
		"Running gulp --tasks-simple didn't list any tasks. Did you run npm install?",
		"Running jake --tasks didn't list any tasks. Did you run npm install?",
		"Gulp is not installed on your system. Run npm install -g gulp to install it.",
		"Jake is not installed on your system. Run npm install -g jake to install it.",
		"Grunt is not installed on your system. Run npm install -g grunt to install it.",
		"Program {0} was not found. Message is {1}",
		"Build task named '{0}' detected.",
		"Test task named '{0}' detected."
	],
	"vs/workbench/parts/tasks/node/processRunnerSystem": [
		"No task is marked as a build task in the tasks.json. Mark a task with 'isBuildCommand'.",
		"No test task configured.",
		"No task to execute found.",
		"A unknown error has occurred while executing a task. See task output log for details.",
		"\nWatching build tasks has finished.",
		"Failed to launch external program {0} {1}.",
		"\nThe task '{0}' was terminated per user request."
	],
	"vs/workbench/parts/terminal/electron-browser/terminal.contribution": [
		"Integrated Terminal",
		"The path of the shell that the terminal uses on Linux.",
		"The command line arguments to use when on the Linux terminal.",
		"The path of the shell that the terminal uses on OS X.",
		"The command line arguments to use when on the OS X terminal.",
		"The path of the shell that the terminal uses on Windows. When using shells shipped with Windows (cmd, PowerShell or Bash on Ubuntu), prefer C:\\Windows\\sysnative over C:\\Windows\\System32 to use the 64-bit versions.",
		"The command line arguments to use when on the Windows terminal.",
		"When set, this will prevent the context menu from appearing when right clicking within the terminal, instead it will copy when there is a selection and paste when there is no selection.",
		"Controls the font family of the terminal, this defaults to editor.fontFamily's value.",
		"Controls whether font ligatures are enabled in the terminal.",
		"Controls the font size in pixels of the terminal.",
		"Controls the line height of the terminal, this number is multipled by the terminal font size to get the actual line-height in pixels.",
		"Controls whether the terminal cursor blinks.",
		"Controls the style of terminal cursor.",
		"Controls the maximum amount of lines the terminal keeps in its buffer.",
		"Controls the whether the terminal emulator will use flow control in order to catch up with the shell process, the main effect of this is that ^C and other signals should be much more responsive when commands give lots of output. You should this disabled if you have custom ^S or ^Q keybindings that override the XOFF and XON signals used.",
		"Controls whether locale variables are set at startup of the terminal, this defaults to true on OS X, false on other platforms.",
		"An explicit start path where the terminal will be launched, this is used as the current working directory (cwd) for the shell process. This may be particularly useful in workspace settings if the root directory is not a convenient cwd.",
		"A set of command IDs whose keybindings will not be sent to the shell and instead always be handled by Code. This allows the use of keybindings that would normally be consumed by the shell to act the same as when the terminal is not focused, for example ctrl+p to launch Quick Open.",
		"Terminal",
		"Terminal",
		"View"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalActions": [
		"Toggle Integrated Terminal",
		"Kill the Active Terminal Instance",
		"Kill Terminal",
		"Copy Selection",
		"Create New Integrated Terminal",
		"New Terminal",
		"Focus Terminal",
		"Focus Next Terminal",
		"Focus Previous Terminal",
		"Paste into Active Terminal",
		"Run Selected Text In Active Terminal",
		"Switch Terminal Instance",
		"Scroll Down (Line)",
		"Scroll Down (Page)",
		"Scroll to Bottom",
		"Scroll Up (Line)",
		"Scroll Up (Page)",
		"Scroll to Top",
		"Clear"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalInstance": [
		"Cannot copy terminal selection when terminal does not have focus",
		"The terminal process terminated with exit code: {0}",
		"Press any key to close the terminal",
		"The terminal process command `{0}{1}` failed to launch (exit code: {2})"
	],
	"vs/workbench/parts/terminal/electron-browser/terminalPanel": [
		"New Terminal",
		"Copy",
		"Paste",
		"Clear"
	],
	"vs/workbench/parts/themes/electron-browser/themes.contribution": [
		"Color Theme",
		"Problem loading theme: {0}",
		"Select Color Theme",
		"File Icon Theme",
		"None",
		"Disable file icons",
		"Problem loading icon theme: {0}",
		"Select File Icon Theme",
		"Find more in the Marketplace...",
		"Preferences"
	],
	"vs/workbench/parts/trust/electron-browser/trust.contribution": [
		"This Workspace contains settings that can only be set in User Settings. ({0})",
		"Open Workspace Settings",
		"Learn More",
		"Ignore"
	],
	"vs/workbench/parts/update/electron-browser/releaseNotesInput": [
		"Release Notes: {0}"
	],
	"vs/workbench/parts/update/electron-browser/update": [
		"Update Now",
		"Later",
		"unassigned",
		"Release Notes",
		"Release Notes",
		"Show Release Notes",
		"Download Now",
		"Welcome to {0} v{1}! Would you like to read the Release Notes?",
		"Our license terms have changed, please go through them.",
		"Read License",
		"{0} will be updated after it restarts.",
		"There is an available update.",
		"There are no updates currently available."
	],
	"vs/workbench/parts/update/electron-browser/update.contribution": [
		"Release notes",
		"Update",
		"Configure whether you receive automatic updates from an update channel. Requires a restart after change."
	],
	"vs/workbench/parts/walkThrough/electron-browser/editor/editorWalkThrough": [
		"Interactive Playground",
		"Interactive Playground"
	],
	"vs/workbench/parts/walkThrough/electron-browser/walkThrough.contribution": [
		"Interactive Playground",
		"Help",
		"Interactive Playground",
		"Interactive Playground",
		"Interactive Playground",
		"Interactive Playground"
	],
	"vs/workbench/parts/walkThrough/electron-browser/walkThroughActions": [
		"Scroll Up (Line)",
		"Scroll Down (Line)",
		"Scroll Up (Page)",
		"Scroll Down (Page)"
	],
	"vs/workbench/parts/walkThrough/electron-browser/walkThroughPart": [
		"unbound"
	],
	"vs/workbench/parts/watermark/electron-browser/watermark": [
		"Show All Commands",
		"Go to File",
		"Open File",
		"Open Folder",
		"Open File or Folder",
		"Open Recent",
		"New Untitled File",
		"Toggle Terminal",
		"Find in Files",
		"Start Debugging",
		"Change Theme",
		"Change Keymap",
		"Keyboard Reference",
		"Keyboard Shortcuts",
		"unbound"
	],
	"vs/workbench/parts/welcomeOverlay/browser/welcomeOverlay": [
		"File explorer",
		"Search across files",
		"Source code management",
		"Launch and debug",
		"Manage extensions",
		"View errors and warnings",
		"Find and run all commands",
		"User Interface Overview",
		"Hide Interface Overview",
		"Help",
		"Help"
	],
	"vs/workbench/parts/welcomePage/electron-browser/welcomePage": [
		"Welcome",
		"Welcome"
	],
	"vs/workbench/parts/welcomePage/electron-browser/welcomePage.contribution": [
		"Workbench",
		"When enabled, will show the Welcome experience on startup.",
		"Help"
	],
	"vs/workbench/services/configuration/node/configurationEditingService": [
		"Unable to write to the configuration file (Unknown Key)",
		"Unable to write to the configuration file (Invalid Target)",
		"Unable to write settings because no folder is opened. Please open a folder first and try again.",
		"Unable to write settings. Please open **User Settings** to correct errors/warnings in the file and try again.",
		"Unable to write settings. Please open **Workspace Settings** to correct errors/warnings in the file and try again.",
		"Unable to write settings because the file is dirty. Please save the **User Settings** file and try again.",
		"Unable to write settings because the file is dirty. Please save the **Workspace Settings** file and try again."
	],
	"vs/workbench/services/editor/browser/editorService": [
		"{0} ↔ {1}"
	],
	"vs/workbench/services/files/electron-browser/fileService": [
		"The Microsoft .NET Framework 4.5 is required. Please follow the link to install it.",
		"Download .NET Framework 4.5",
		"Don't Show Again",
		"Failed to move '{0}' to the trash"
	],
	"vs/workbench/services/files/node/fileService": [
		"Invalid file resource ({0})",
		"File seems to be binary and cannot be opened as text",
		"File not found ({0})",
		"File is directory ({0})",
		"Unable to move/copy. File would replace folder it is contained in.",
		"Folders cannot be copied into the workspace. Please select individual files to copy them.",
		"File is Read Only"
	],
	"vs/workbench/services/history/browser/history": [
		"[Unsupported]",
		"[Extension Development Host] - {0}",
		"● {0}",
		"{0} - {1}",
		"{0} - {1} - {2}",
		"{0} - {1}",
		"{0} - {1}"
	],
	"vs/workbench/services/keybinding/electron-browser/keybindingService": [
		"expected non-empty value.",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"property `{0}` can be omitted or must be of type `string`",
		"Identifier of the command to run when keybinding is triggered.",
		"Key or key sequence (separate keys with plus-sign and sequences with space, e.g Ctrl+O and Ctrl+L L for a chord",
		"Mac specific key or key sequence.",
		"Linux specific key or key sequence.",
		"Windows specific key or key sequence.",
		"Condition when the key is active.",
		"Contributes keybindings.",
		"Invalid `contributes.{0}`: {1}",
		"Keybindings configuration",
		"Key or key sequence (separated by space)",
		"Name of the command to execute",
		"Condition when the key is active.",
		"Arguments to pass to the command to execute."
	],
	"vs/workbench/services/message/browser/messageList": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}",
		"Error",
		"Warn",
		"Info",
		"Close"
	],
	"vs/workbench/services/message/electron-browser/messageService": [
		"&&Yes",
		"Cancel"
	],
	"vs/workbench/services/mode/common/workbenchModeService": [
		"Invalid `contributes.{0}`. Expected an array.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`"
	],
	"vs/workbench/services/textfile/common/textFileEditorModel": [
		"The file is dirty. Please save it first before reopening it with another encoding.",
		"Failed to save '{0}': {1}"
	],
	"vs/workbench/services/textfile/common/textFileService": [
		"Files could not be backed up (Error: {0}), try saving your files to exit."
	],
	"vs/workbench/services/textfile/electron-browser/textFileService": [
		"Do you want to save the changes you made to {0}?",
		"Do you want to save the changes to the following {0} files?",
		"...1 additional file not shown",
		"...{0} additional files not shown",
		"&&Save All",
		"&&Save",
		"Do&&n't Save",
		"Cancel",
		"Your changes will be lost if you don't save them.",
		"Hot Exit is now enabled by default",
		"Hot Exit remembers any unsaved files between sessions, so you don't have to save your files before you exit. You can disable this feature with the 'files.hotExit' setting.",
		"OK",
		"All Files",
		"No Extension"
	],
	"vs/workbench/services/themes/electron-browser/themeService": [
		"Contributes textmate color themes.",
		"Label of the color theme as shown in the UI.",
		"Base theme defining the colors around the editor: 'vs' is the light color theme, 'vs-dark' is the dark color theme. 'hc-black' is the dark high contrast theme.",
		"Path of the tmTheme file. The path is relative to the extension folder and is typically './themes/themeFile.tmTheme'.",
		"Contributes file icon themes.",
		"Id of the icon theme as used in the user settings.",
		"Label of the icon theme as shown in the UI.",
		"Path of the icon theme definition file. The path is relative to the extension folder and is typically './icons/awesome-icon-theme.json'.",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Extension point `{0}` must be an array.",
		"Expected string in `contributes.{0}.path`. Provided value: {1}",
		"Expected string in `contributes.{0}.id`. Provided value: {1}",
		"Expected `contributes.{0}.path` ({1}) to be included inside extension's folder ({2}). This might make the extension non-portable.",
		"Unable to load {0}",
		"Problems parsing file icons file: {0}",
		"Unable to load {0}",
		"Problems parsing JSON theme file: {0}",
		"Problem parsing JSON theme file: {0}. 'settings' is not array.",
		"Problem parsing theme file: {0}. 'settings' is not array.",
		"Problems parsing theme file: {0}",
		"The folder icon for expanded folders. The expanded folder icon is optional. If not set, the icon defined for folder will be shown.",
		"The folder icon for collapsed folders, and if folderExpanded is not set, also for expanded folders.",
		"The default file icon, shown for all files that don't match any extension, filename or language id.",
		"Associates folder names to icons. The object key is is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates folder names to icons for expanded folders. The object key is is the folder name, not including any path segments. No patterns or wildcards are allowed. Folder name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates file extensions to icons. The object key is is the file extension name. The extension name is the last segment of a file name after the last dot (not including the dot). Extensions are compared case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates file names to icons. The object key is is the full file name, but not including any path segments. File name can include dots and a possible file extension. No patterns or wildcards are allowed. File name matching is case insensitive.",
		"The ID of the icon definition for the association.",
		"Associates languages to icons. The object key is the language id as defined in the language contribution point.",
		"The ID of the icon definition for the association.",
		"Fonts that are used in the icon definitions.",
		"The ID of the font.",
		"The locations of the font.",
		"The font path, relative to the current icon theme file.",
		"The format of the font.",
		"The weight of the font.",
		"The style of the font.",
		"The default size of the font.",
		"Description of all icons that can be used when associating files to icons.",
		"An icon definition. The object key is the ID of the definition.",
		"When using a SVG or PNG: The path to the image. The path is relative to the icon set file.",
		"When using a glyph font: The character in the font to use.",
		"When using a glyph font: The color to use.",
		"When using a font: The font size in percentage to the text font. If not set, defaults to the size in the font definition.",
		"When using a font: The id of the font. If not set, defaults to the first font definition.",
		"Optional associations for file icons in light color themes.",
		"Optional associations for file icons in high contrast color themes."
	]
});