"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const html_matcher_1 = require("@emmetio/html-matcher");
function mergeLines() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    if (util_1.isStyleSheet(editor.document.languageId)) {
        return;
    }
    let rootNode = html_matcher_1.default(editor.document.getText());
    editor.edit(editBuilder => {
        editor.selections.reverse().forEach(selection => {
            let [rangeToReplace, textToReplaceWith] = getRangesToReplace(editor.document, selection, rootNode);
            editBuilder.replace(rangeToReplace, textToReplaceWith);
        });
    });
}
exports.mergeLines = mergeLines;
function getRangesToReplace(document, selection, rootNode) {
    let startNodeToUpdate;
    let endNodeToUpdate;
    if (selection.isEmpty) {
        startNodeToUpdate = endNodeToUpdate = util_1.getNode(rootNode, document.offsetAt(selection.start));
    }
    else {
        startNodeToUpdate = util_1.getNode(rootNode, document.offsetAt(selection.start), true);
        endNodeToUpdate = util_1.getNode(rootNode, document.offsetAt(selection.end), true);
    }
    let rangeToReplace = new vscode.Range(document.positionAt(startNodeToUpdate.start), document.positionAt(endNodeToUpdate.end));
    let textToReplaceWith = document.getText(rangeToReplace).replace(/\r\n|\n/g, '').replace(/>\s*</g, '><');
    return [rangeToReplace, textToReplaceWith];
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/mergeLines.js.map
