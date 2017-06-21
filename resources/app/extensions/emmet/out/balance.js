"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const html_matcher_1 = require("@emmetio/html-matcher");
function balanceOut() {
    balance(true);
}
exports.balanceOut = balanceOut;
function balanceIn() {
    balance(false);
}
exports.balanceIn = balanceIn;
function balance(out) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    if (util_1.isStyleSheet(editor.document.languageId)) {
        return;
    }
    let getRangeFunction = out ? getRangeToBalanceOut : getRangeToBalanceIn;
    let rootNode = html_matcher_1.default(editor.document.getText());
    let newSelections = [];
    editor.selections.forEach(selection => {
        let range = getRangeFunction(editor.document, selection, rootNode);
        if (range) {
            newSelections.push(range);
        }
    });
    editor.selection = newSelections[0];
    editor.selections = newSelections;
}
function getRangeToBalanceOut(document, selection, rootNode) {
    let offset = document.offsetAt(selection.start);
    let nodeToBalance = util_1.getNode(rootNode, offset);
    let innerSelection = util_1.getNodeInnerSelection(document, nodeToBalance);
    let outerSelection = util_1.getNodeOuterSelection(document, nodeToBalance);
    if (innerSelection.contains(selection) && !innerSelection.isEqual(selection)) {
        return innerSelection;
    }
    if (outerSelection.contains(selection) && !outerSelection.isEqual(selection)) {
        return outerSelection;
    }
    return;
}
function getRangeToBalanceIn(document, selection, rootNode) {
    let offset = document.offsetAt(selection.start);
    let nodeToBalance = util_1.getNode(rootNode, offset);
    if (!nodeToBalance.firstChild) {
        return selection;
    }
    if (nodeToBalance.firstChild.start === offset && nodeToBalance.firstChild.end === document.offsetAt(selection.end)) {
        return util_1.getNodeInnerSelection(document, nodeToBalance.firstChild);
    }
    return new vscode.Selection(document.positionAt(nodeToBalance.firstChild.start), document.positionAt(nodeToBalance.firstChild.end));
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\emmet\out/balance.js.map
