"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class ShowSourceCommand {
    constructor() {
        this.id = 'markdown.showSource';
    }
    execute(mdUri) {
        if (!mdUri) {
            return vscode.commands.executeCommand('workbench.action.navigateBack');
        }
        const docUri = vscode.Uri.parse(mdUri.query);
        for (const editor of vscode.window.visibleTextEditors) {
            if (editor.document.uri.scheme === docUri.scheme && editor.document.uri.toString() === docUri.toString()) {
                return vscode.window.showTextDocument(editor.document, editor.viewColumn);
            }
        }
        return vscode.workspace.openTextDocument(docUri)
            .then(vscode.window.showTextDocument);
    }
}
exports.ShowSourceCommand = ShowSourceCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/extensions\markdown\out/commands\showSource.js.map
