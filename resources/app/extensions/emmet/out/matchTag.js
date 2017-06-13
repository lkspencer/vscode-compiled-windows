"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const html_matcher_1 = require("@emmetio/html-matcher");
function matchTag() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    let rootNode = html_matcher_1.default(editor.document.getText());
    let updatedSelections = [];
    editor.selections.forEach(selection => {
        let updatedSelection = getUpdatedSelections(editor, editor.document.offsetAt(selection.start), rootNode);
        if (updatedSelection) {
            updatedSelections.push(updatedSelection);
        }
    });
    if (updatedSelections.length > 0) {
        editor.selections = updatedSelections;
        editor.revealRange(editor.selections[updatedSelections.length - 1]);
    }
}
exports.matchTag = matchTag;
function getUpdatedSelections(editor, offset, rootNode) {
    let currentNode = util_1.getNode(rootNode, offset, true);
    // If no closing tag or cursor is between open and close tag, then no-op
    if (!currentNode.close || (currentNode.open.end < offset && currentNode.close.start > offset)) {
        return;
    }
    if (offset <= currentNode.open.end) {
        let matchingPosition = editor.document.positionAt(currentNode.close.start);
        return new vscode.Selection(matchingPosition, matchingPosition);
    }
    else {
        let matchingPosition = editor.document.positionAt(currentNode.open.start);
        return new vscode.Selection(matchingPosition, matchingPosition);
    }
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/matchTag.js.map
