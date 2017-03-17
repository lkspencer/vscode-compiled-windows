/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode = require("vscode");
const versionBarEntry = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, Number.MIN_VALUE);
function showHideStatus() {
    if (!versionBarEntry) {
        return;
    }
    if (!vscode.window.activeTextEditor) {
        versionBarEntry.hide();
        return;
    }
    let doc = vscode.window.activeTextEditor.document;
    if (vscode.languages.match('javascript', doc) || vscode.languages.match('javascriptreact', doc)
        || vscode.languages.match('typescript', doc) || vscode.languages.match('typescriptreact', doc)) {
        versionBarEntry.show();
        return;
    }
    versionBarEntry.hide();
}
exports.showHideStatus = showHideStatus;
function disposeStatus() {
    if (versionBarEntry) {
        versionBarEntry.dispose();
    }
}
exports.disposeStatus = disposeStatus;
function setInfo(message, tooltip) {
    versionBarEntry.text = message;
    versionBarEntry.tooltip = tooltip;
    versionBarEntry.color = 'white';
    versionBarEntry.command = 'typescript.selectTypeScriptVersion';
}
exports.setInfo = setInfo;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\typescript\out/utils\versionStatus.js.map
