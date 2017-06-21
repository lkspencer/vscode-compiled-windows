"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const html_matcher_1 = require("@emmetio/html-matcher");
function updateTag(tagName) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    let rootNode = html_matcher_1.default(editor.document.getText());
    let rangesToUpdate = [];
    editor.selections.reverse().forEach(selection => {
        rangesToUpdate = rangesToUpdate.concat(getRangesToUpdate(editor, selection, rootNode));
    });
    editor.edit(editBuilder => {
        rangesToUpdate.forEach(range => {
            editBuilder.replace(range, tagName);
        });
    });
}
exports.updateTag = updateTag;
function getRangesToUpdate(editor, selection, rootNode) {
    let offset = editor.document.offsetAt(selection.start);
    let nodeToUpdate = util_1.getNode(rootNode, offset);
    let openStart = editor.document.positionAt(nodeToUpdate.open.start + 1);
    let openEnd = openStart.translate(0, nodeToUpdate.name.length);
    let ranges = [new vscode.Range(openStart, openEnd)];
    if (nodeToUpdate.close) {
        let closeStart = editor.document.positionAt(nodeToUpdate.close.start + 2);
        let closeEnd = editor.document.positionAt(nodeToUpdate.close.end - 1);
        ranges.push(new vscode.Range(closeStart, closeEnd));
    }
    return ranges;
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\emmet\out/updateTag.js.map
