"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const vscode_emmet_helper_1 = require("vscode-emmet-helper");
const startCommentStylesheet = '/*';
const endCommentStylesheet = '*/';
const startCommentHTML = '<!--';
const endCommentHTML = '-->';
function toggleComment() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    let toggleCommentInternal;
    let startComment;
    let endComment;
    if (vscode_emmet_helper_1.isStyleSheet(editor.document.languageId)) {
        toggleCommentInternal = toggleCommentStylesheet;
        startComment = startCommentStylesheet;
        endComment = endCommentStylesheet;
    }
    else {
        toggleCommentInternal = toggleCommentHTML;
        startComment = startCommentHTML;
        endComment = endCommentHTML;
    }
    let rootNode = util_1.parse(editor.document);
    if (!rootNode) {
        return;
    }
    editor.edit(editBuilder => {
        editor.selections.reverse().forEach(selection => {
            let [rangesToUnComment, rangeToComment] = toggleCommentInternal(editor.document, selection, rootNode);
            rangesToUnComment.forEach((rangeToUnComment) => {
                editBuilder.delete(new vscode.Range(rangeToUnComment.start, rangeToUnComment.start.translate(0, startComment.length)));
                editBuilder.delete(new vscode.Range(rangeToUnComment.end.translate(0, -endComment.length), rangeToUnComment.end));
            });
            if (rangeToComment) {
                editBuilder.insert(rangeToComment.start, startComment);
                editBuilder.insert(rangeToComment.end, endComment);
            }
        });
    });
}
exports.toggleComment = toggleComment;
function toggleCommentHTML(document, selection, rootNode) {
    const selectionStart = selection.isReversed ? selection.active : selection.anchor;
    const selectionEnd = selection.isReversed ? selection.anchor : selection.active;
    let startNode = util_1.getNode(rootNode, selectionStart, true);
    let endNode = util_1.getNode(rootNode, selectionEnd, true);
    if (!startNode || !endNode) {
        return [[], null];
    }
    let allNodes = util_1.getNodesInBetween(startNode, endNode);
    let rangesToUnComment = [];
    allNodes.forEach(node => {
        rangesToUnComment = rangesToUnComment.concat(getRangesToUnCommentHTML(node, document));
    });
    if (startNode.type === 'comment') {
        return [rangesToUnComment, null];
    }
    let rangeToComment = new vscode.Range(allNodes[0].start, allNodes[allNodes.length - 1].end);
    return [rangesToUnComment, rangeToComment];
}
function getRangesToUnCommentHTML(node, document) {
    let rangesToUnComment = [];
    // If current node is commented, then uncomment and return
    if (node.type === 'comment') {
        rangesToUnComment.push(new vscode.Range(node.start, node.end));
        return rangesToUnComment;
    }
    // All children of current node should be uncommented
    node.children.forEach(childNode => {
        rangesToUnComment = rangesToUnComment.concat(getRangesToUnCommentHTML(childNode, document));
    });
    return rangesToUnComment;
}
function toggleCommentStylesheet(document, selection, rootNode) {
    const selectionStart = selection.isReversed ? selection.active : selection.anchor;
    const selectionEnd = selection.isReversed ? selection.anchor : selection.active;
    let startNode = util_1.getNode(rootNode, selectionStart, true);
    let endNode = util_1.getNode(rootNode, selectionEnd, true);
    let rangesToUnComment = [];
    let isFirstNodeCommented = false;
    // Uncomment the comments that intersect with the selection.
    rootNode.comments.forEach(comment => {
        if (!isFirstNodeCommented) {
            isFirstNodeCommented = (selectionStart.isAfterOrEqual(comment.start) && selectionEnd.isBefore(comment.end));
        }
        if (selection.contains(comment.start)
            || selection.contains(comment.end)
            || (selectionStart.isAfterOrEqual(comment.start) && selectionEnd.isBefore(comment.end))) {
            rangesToUnComment.push(new vscode.Range(comment.start, comment.end));
        }
    });
    let rangeToComment = isFirstNodeCommented ? null : new vscode.Range(startNode ? startNode.start : selectionStart, endNode ? endNode.end : selectionEnd);
    return [rangesToUnComment, rangeToComment];
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cb82febafda0c8c199b9201ad274e25d9a76874e/extensions\emmet\out/toggleComment.js.map
