/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var completionItemProvider_1 = require("./features/completionItemProvider");
var hoverProvider_1 = require("./features/hoverProvider");
var signatureHelpProvider_1 = require("./features/signatureHelpProvider");
var validationProvider_1 = require("./features/validationProvider");
var vscode = require("vscode");
var nls = require("vscode-nls");
nls.config({ locale: vscode.env.language });
function activate(context) {
    var validator = new validationProvider_1.default(context.workspaceState);
    validator.activate(context.subscriptions);
    // add providers
    context.subscriptions.push(vscode.languages.registerCompletionItemProvider('php', new completionItemProvider_1.default(), '.', '$'));
    context.subscriptions.push(vscode.languages.registerHoverProvider('php', new hoverProvider_1.default()));
    context.subscriptions.push(vscode.languages.registerSignatureHelpProvider('php', new signatureHelpProvider_1.default(), '(', ','));
    // need to set in the extension host as well as the completion provider uses it.
    vscode.languages.setLanguageConfiguration('php', {
        wordPattern: /(-?\d*\.\d\w*)|([^\-\`\~\!\@\#\%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g
    });
}
exports.activate = activate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d9484d12b38879b7f4cdd1150efeb2fd2c1fbf39/extensions\php\out/phpMain.js.map
