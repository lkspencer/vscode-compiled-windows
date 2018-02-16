/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var jsonContributions_1 = require("./features/jsonContributions");
var httpRequest = require("request-light");
var vscode_1 = require("vscode");
function activate(context) {
    configureHttpRequest();
    vscode_1.workspace.onDidChangeConfiguration(function () { return configureHttpRequest(); });
    context.subscriptions.push(jsonContributions_1.addJSONProviders(httpRequest.xhr));
}
exports.activate = activate;
function configureHttpRequest() {
    var httpSettings = vscode_1.workspace.getConfiguration('http');
    httpRequest.configure(httpSettings.get('proxy', ''), httpSettings.get('proxyStrictSSL', true));
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/extensions\javascript\out/javascriptMain.js.map
