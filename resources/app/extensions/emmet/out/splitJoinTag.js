"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const html_matcher_1 = require("@emmetio/html-matcher");
function splitJoinTag() {
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
exports.splitJoinTag = splitJoinTag;
function getRangesToReplace(document, selection, rootNode) {
    let offset = document.offsetAt(selection.start);
    let nodeToUpdate = util_1.getNode(rootNode, offset);
    let rangeToReplace;
    let textToReplaceWith;
    if (!nodeToUpdate.close) {
        // Split Tag
        let nodeText = document.getText(new vscode.Range(document.positionAt(nodeToUpdate.start), document.positionAt(nodeToUpdate.end)));
        let m = nodeText.match(/(\s*\/)?>$/);
        let end = nodeToUpdate.open.end;
        let start = m ? end - m[0].length : end;
        rangeToReplace = new vscode.Range(document.positionAt(start), document.positionAt(end));
        textToReplaceWith = `></${nodeToUpdate.name}>`;
    }
    else {
        // Join Tag
        rangeToReplace = new vscode.Range(document.positionAt(nodeToUpdate.open.end - 1), document.positionAt(nodeToUpdate.close.end));
        textToReplaceWith = '/>';
    }
    return [rangeToReplace, textToReplaceWith];
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/splitJoinTag.js.map
