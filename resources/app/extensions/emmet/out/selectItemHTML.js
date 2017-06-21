"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
function nextItemHTML(selection, editor, rootNode) {
    let offset = editor.document.offsetAt(selection.active);
    let currentNode = util_1.getNode(rootNode, offset);
    // Cursor is in the open tag, look for attributes
    if (offset < currentNode.open.end) {
        let attrSelection = getNextAttribute(selection, editor.document, currentNode);
        if (attrSelection) {
            return attrSelection;
        }
    }
    // Get the first child of current node which is right after the cursor
    let nextNode = currentNode.firstChild;
    while (nextNode && nextNode.start < offset) {
        nextNode = nextNode.nextSibling;
    }
    // Get next sibling of current node or the parent
    while (!nextNode && currentNode) {
        nextNode = currentNode.nextSibling;
        currentNode = currentNode.parent;
    }
    return getSelectionFromNode(nextNode, editor.document);
}
exports.nextItemHTML = nextItemHTML;
function prevItemHTML(selection, editor, rootNode) {
    let offset = editor.document.offsetAt(selection.active);
    let currentNode = util_1.getNode(rootNode, offset);
    let prevNode;
    // Cursor is in the open tag after the tag name
    if (offset > currentNode.open.start + currentNode.name.length + 1 && offset <= currentNode.open.end) {
        prevNode = currentNode;
    }
    // Cursor is inside the tag
    if (!prevNode && offset > currentNode.open.end) {
        if (!currentNode.firstChild) {
            // No children, so current node should be selected
            prevNode = currentNode;
        }
        else {
            // Select the child that appears just before the cursor
            prevNode = currentNode.firstChild;
            while (prevNode.nextSibling && prevNode.nextSibling.end < offset) {
                prevNode = prevNode.nextSibling;
            }
            if (prevNode) {
                prevNode = util_1.getDeepestNode(prevNode);
            }
        }
    }
    if (!prevNode && currentNode.previousSibling) {
        prevNode = util_1.getDeepestNode(currentNode.previousSibling);
    }
    if (!prevNode && currentNode.parent) {
        prevNode = currentNode.parent;
    }
    let attrSelection = getPrevAttribute(selection, editor.document, prevNode);
    return attrSelection ? attrSelection : getSelectionFromNode(prevNode, editor.document);
}
exports.prevItemHTML = prevItemHTML;
function getSelectionFromNode(node, document) {
    if (node && node.open) {
        let selectionStart = document.positionAt(node.open.start + 1);
        let selectionEnd = node.type === 'comment' ? document.positionAt(node.open.end - 1) : selectionStart.translate(0, node.name.length);
        return new vscode.Selection(selectionStart, selectionEnd);
    }
}
function getNextAttribute(selection, document, node) {
    if (!node.attributes || node.attributes.length === 0 || node.type === 'comment') {
        return;
    }
    let selectionStart = document.offsetAt(selection.anchor);
    let selectionEnd = document.offsetAt(selection.active);
    for (let i = 0; i < node.attributes.length; i++) {
        let attr = node.attributes[i];
        if (selectionEnd < attr.start) {
            // select full attr
            return new vscode.Selection(document.positionAt(attr.start), document.positionAt(attr.end));
        }
        if (attr.value.start === attr.value.end) {
            // No attr value to select
            continue;
        }
        if ((selectionStart === attr.start && selectionEnd === attr.end) || selectionEnd < attr.value.start) {
            // cursor is in attr name,  so select full attr value
            return new vscode.Selection(document.positionAt(attr.value.start), document.positionAt(attr.value.end));
        }
        // Fetch the next word in the attr value
        if (attr.value.toString().indexOf(' ') === -1) {
            // attr value does not have space, so no next word to find
            continue;
        }
        let pos = undefined;
        if (selectionStart === attr.value.start && selectionEnd === attr.value.end) {
            pos = -1;
        }
        if (pos === undefined && selectionEnd < attr.end) {
            pos = selectionEnd - attr.value.start - 1;
        }
        if (pos !== undefined) {
            let [newSelectionStart, newSelectionEnd] = util_1.findNextWord(attr.value.toString(), pos);
            if (newSelectionStart >= 0 && newSelectionEnd >= 0) {
                newSelectionStart += attr.value.start;
                newSelectionEnd += attr.value.start;
                return new vscode.Selection(document.positionAt(newSelectionStart), document.positionAt(newSelectionEnd));
            }
        }
    }
}
function getPrevAttribute(selection, document, node) {
    if (!node.attributes || node.attributes.length === 0 || node.type === 'comment') {
        return;
    }
    let selectionStart = document.offsetAt(selection.anchor);
    let selectionEnd = document.offsetAt(selection.active);
    for (let i = node.attributes.length - 1; i >= 0; i--) {
        let attr = node.attributes[i];
        if (selectionStart <= attr.start) {
            continue;
        }
        if (attr.value.start === attr.value.end || selectionStart < attr.value.start) {
            // select full attr
            return new vscode.Selection(document.positionAt(attr.start), document.positionAt(attr.end));
        }
        if (selectionStart === attr.value.start) {
            if (selectionEnd >= attr.value.end) {
                // select full attr
                return new vscode.Selection(document.positionAt(attr.start), document.positionAt(attr.end));
            }
            // select attr value
            return new vscode.Selection(document.positionAt(attr.value.start), document.positionAt(attr.value.end));
        }
        // Fetch the prev word in the attr value
        let pos = selectionStart > attr.value.end ? attr.value.toString().length : selectionStart - attr.value.start;
        let [newSelectionStart, newSelectionEnd] = util_1.findPrevWord(attr.value.toString(), pos);
        if (newSelectionStart >= 0 && newSelectionEnd >= 0) {
            newSelectionStart += attr.value.start;
            newSelectionEnd += attr.value.start;
            return new vscode.Selection(document.positionAt(newSelectionStart), document.positionAt(newSelectionEnd));
        }
    }
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\emmet\out/selectItemHTML.js.map
