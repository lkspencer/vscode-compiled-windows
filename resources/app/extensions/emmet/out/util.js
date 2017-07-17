"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const html_matcher_1 = require("@emmetio/html-matcher");
const css_parser_1 = require("@emmetio/css-parser");
const bufferStream_1 = require("./bufferStream");
const vscode_emmet_helper_1 = require("vscode-emmet-helper");
exports.LANGUAGE_MODES = {
    'html': ['!', '.', '}', ':', '*', '$'],
    'jade': ['!', '.', '}', ':', '*', '$'],
    'slim': ['!', '.', '}', ':', '*', '$'],
    'haml': ['!', '.', '}', ':', '*', '$'],
    'xml': ['.', '}', '*', '$'],
    'xsl': ['.', '}', '*', '$'],
    'css': [':'],
    'scss': [':'],
    'sass': [':'],
    'less': [':'],
    'stylus': [':'],
    'javascriptreact': ['.', '}', '*', '$'],
    'typescriptreact': ['.', '}', '*', '$']
};
// Explicitly map languages that have built-in grammar in VS Code to their parent language
// to get emmet completion support
// For other languages, users will have to use `emmet.includeLanguages` or
// language specific extensions can provide emmet completion support
exports.MAPPED_MODES = {
    'handlebars': 'html',
    'php': 'html'
};
function validate(allowStylesheet = true) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return false;
    }
    if (!allowStylesheet && vscode_emmet_helper_1.isStyleSheet(editor.document.languageId)) {
        return false;
    }
    return true;
}
exports.validate = validate;
function getMappingForIncludedLanguages() {
    let finalMappedModes = {};
    let includeLanguagesConfig = vscode.workspace.getConfiguration('emmet')['includeLanguages'];
    let includeLanguages = Object.assign({}, exports.MAPPED_MODES, includeLanguagesConfig ? includeLanguagesConfig : {});
    Object.keys(includeLanguages).forEach(syntax => {
        if (typeof includeLanguages[syntax] === 'string' && exports.LANGUAGE_MODES[includeLanguages[syntax]]) {
            finalMappedModes[syntax] = includeLanguages[syntax];
        }
    });
    return finalMappedModes;
}
exports.getMappingForIncludedLanguages = getMappingForIncludedLanguages;
/**
 * Parses the given document using emmet parsing modules
 * @param document
 */
function parse(document, showError = true) {
    let parseContent = vscode_emmet_helper_1.isStyleSheet(document.languageId) ? css_parser_1.default : html_matcher_1.default;
    let rootNode;
    try {
        rootNode = parseContent(new bufferStream_1.DocumentStreamReader(document));
    }
    catch (e) {
        if (showError) {
            vscode.window.showErrorMessage('Emmet: Failed to parse the file');
        }
    }
    return rootNode;
}
exports.parse = parse;
/**
 * Returns node corresponding to given position in the given root node
 * @param root
 * @param position
 * @param includeNodeBoundary
 */
function getNode(root, position, includeNodeBoundary = false) {
    let currentNode = root.firstChild;
    let foundNode = null;
    while (currentNode) {
        const nodeStart = currentNode.start;
        const nodeEnd = currentNode.end;
        if ((nodeStart.isBefore(position) && nodeEnd.isAfter(position))
            || (includeNodeBoundary && (nodeStart.isBeforeOrEqual(position) && nodeEnd.isAfterOrEqual(position)))) {
            foundNode = currentNode;
            // Dig deeper
            currentNode = currentNode.firstChild;
        }
        else {
            currentNode = currentNode.nextSibling;
        }
    }
    return foundNode;
}
exports.getNode = getNode;
/**
 * Returns inner range of an html node.
 * @param currentNode
 */
function getInnerRange(currentNode) {
    if (!currentNode.close) {
        return;
    }
    return new vscode.Range(currentNode.open.end, currentNode.close.start);
}
exports.getInnerRange = getInnerRange;
function getDeepestNode(node) {
    if (!node || !node.children || node.children.length === 0 || !node.children.find(x => x.type !== 'comment')) {
        return node;
    }
    for (let i = node.children.length - 1; i >= 0; i--) {
        if (node.children[i].type !== 'comment') {
            return getDeepestNode(node.children[i]);
        }
    }
}
exports.getDeepestNode = getDeepestNode;
function findNextWord(propertyValue, pos) {
    let foundSpace = pos === -1;
    let foundStart = false;
    let foundEnd = false;
    let newSelectionStart;
    let newSelectionEnd;
    while (pos < propertyValue.length - 1) {
        pos++;
        if (!foundSpace) {
            if (propertyValue[pos] === ' ') {
                foundSpace = true;
            }
            continue;
        }
        if (foundSpace && !foundStart && propertyValue[pos] === ' ') {
            continue;
        }
        if (!foundStart) {
            newSelectionStart = pos;
            foundStart = true;
            continue;
        }
        if (propertyValue[pos] === ' ') {
            newSelectionEnd = pos;
            foundEnd = true;
            break;
        }
    }
    if (foundStart && !foundEnd) {
        newSelectionEnd = propertyValue.length;
    }
    return [newSelectionStart, newSelectionEnd];
}
exports.findNextWord = findNextWord;
function findPrevWord(propertyValue, pos) {
    let foundSpace = pos === propertyValue.length;
    let foundStart = false;
    let foundEnd = false;
    let newSelectionStart;
    let newSelectionEnd;
    while (pos > -1) {
        pos--;
        if (!foundSpace) {
            if (propertyValue[pos] === ' ') {
                foundSpace = true;
            }
            continue;
        }
        if (foundSpace && !foundEnd && propertyValue[pos] === ' ') {
            continue;
        }
        if (!foundEnd) {
            newSelectionEnd = pos + 1;
            foundEnd = true;
            continue;
        }
        if (propertyValue[pos] === ' ') {
            newSelectionStart = pos + 1;
            foundStart = true;
            break;
        }
    }
    if (foundEnd && !foundStart) {
        newSelectionStart = 0;
    }
    return [newSelectionStart, newSelectionEnd];
}
exports.findPrevWord = findPrevWord;
function getNodesInBetween(node1, node2) {
    // Same node
    if (sameNodes(node1, node2)) {
        return [node1];
    }
    // Same parent
    if (sameNodes(node1.parent, node2.parent)) {
        return getNextSiblingsTillPosition(node1, node2.end);
    }
    // node2 is ancestor of node1
    if (node2.start.isBefore(node1.start)) {
        return [node2];
    }
    // node1 is ancestor of node2
    if (node2.start.isBefore(node1.end)) {
        return [node1];
    }
    // Get the highest ancestor of node1 that should be commented
    while (node1.parent && node1.parent.end.isBefore(node2.start)) {
        node1 = node1.parent;
    }
    // Get the highest ancestor of node2 that should be commented
    while (node2.parent && node2.parent.start.isAfter(node1.start)) {
        node2 = node2.parent;
    }
    return getNextSiblingsTillPosition(node1, node2.end);
}
exports.getNodesInBetween = getNodesInBetween;
function getNextSiblingsTillPosition(node, position) {
    let siblings = [];
    let currentNode = node;
    while (currentNode && position.isAfter(currentNode.start)) {
        siblings.push(currentNode);
        currentNode = currentNode.nextSibling;
    }
    return siblings;
}
function sameNodes(node1, node2) {
    if (!node1 || !node2) {
        return false;
    }
    return node1.start.isEqual(node2.start) && node1.end.isEqual(node2.end);
}
exports.sameNodes = sameNodes;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/2648980a697a4c8fb5777dcfb2ab110cec8a2f58/extensions\emmet\out/util.js.map
