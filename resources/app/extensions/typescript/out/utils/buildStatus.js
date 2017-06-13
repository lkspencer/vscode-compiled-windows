"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const statusItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, Number.MIN_VALUE);
function update(info) {
    if (info.queueLength === 0) {
        statusItem.hide();
        return;
    }
    statusItem.text = info.queueLength.toString();
    statusItem.show();
}
exports.update = update;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\typescript\out/utils\buildStatus.js.map
