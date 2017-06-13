"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const html_matcher_1 = require("@emmetio/html-matcher");
const extract = require("@emmetio/extract-abbreviation");
function validate(allowStylesheet = true) {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return false;
    }
    if (!allowStylesheet && isStyleSheet(editor.document.languageId)) {
        return false;
    }
    return true;
}
exports.validate = validate;
function getSyntax(document) {
    if (document.languageId === 'jade') {
        return 'pug';
    }
    if (document.languageId === 'javascriptreact' || document.languageId === 'typescriptreact') {
        return 'jsx';
    }
    return document.languageId;
}
exports.getSyntax = getSyntax;
function isStyleSheet(syntax) {
    let stylesheetSyntaxes = ['css', 'scss', 'sass', 'less', 'stylus'];
    return (stylesheetSyntaxes.indexOf(syntax) > -1);
}
exports.isStyleSheet = isStyleSheet;
function getProfile(syntax) {
    let config = vscode.workspace.getConfiguration('emmet')['syntaxProfiles'] || {};
    let options = config[syntax];
    if (!options || typeof options === 'string') {
        return {};
    }
    let newOptions = {};
    for (let key in options) {
        switch (key) {
            case 'tag_case':
                newOptions['tagCase'] = (options[key] === 'lower' || options[key] === 'upper') ? options[key] : '';
                break;
            case 'attr_case':
                newOptions['attributeCase'] = (options[key] === 'lower' || options[key] === 'upper') ? options[key] : '';
                break;
            case 'attr_quotes':
                newOptions['attributeQuotes'] = options[key];
                break;
            case 'tag_nl':
                newOptions['format'] = (options[key] === 'true' || options[key] === 'false') ? options[key] : 'true';
                break;
            case 'indent':
                newOptions['attrCase'] = (options[key] === 'true' || options[key] === 'false') ? '\t' : options[key];
                break;
            case 'inline_break':
                newOptions['inlineBreak'] = options[key];
                break;
            case 'self_closing_tag':
                if (options[key] === true) {
                    newOptions['selfClosingStyle'] = 'xml';
                    break;
                }
                if (options[key] === false) {
                    newOptions['selfClosingStyle'] = 'html';
                    break;
                }
                newOptions['selfClosingStyle'] = options[key];
                break;
            default:
                newOptions[key] = options[key];
                break;
        }
    }
    return newOptions;
}
exports.getProfile = getProfile;
function getOpenCloseRange(document, offset) {
    let rootNode = html_matcher_1.default(document.getText());
    let nodeToUpdate = getNode(rootNode, offset);
    let openRange = new vscode.Range(document.positionAt(nodeToUpdate.open.start), document.positionAt(nodeToUpdate.open.end));
    let closeRange = null;
    if (nodeToUpdate.close) {
        closeRange = new vscode.Range(document.positionAt(nodeToUpdate.close.start), document.positionAt(nodeToUpdate.close.end));
    }
    return [openRange, closeRange];
}
exports.getOpenCloseRange = getOpenCloseRange;
function getNode(root, offset, includeNodeBoundary = false) {
    let currentNode = root.firstChild;
    let foundNode = null;
    while (currentNode) {
        if ((currentNode.start < offset && currentNode.end > offset)
            || (includeNodeBoundary && (currentNode.start <= offset && currentNode.end >= offset))) {
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
function getNodeOuterSelection(document, node) {
    return new vscode.Selection(document.positionAt(node.start), document.positionAt(node.end));
}
exports.getNodeOuterSelection = getNodeOuterSelection;
function getNodeInnerSelection(document, node) {
    return new vscode.Selection(document.positionAt(node.open.end), document.positionAt(node.close.start));
}
exports.getNodeInnerSelection = getNodeInnerSelection;
function extractAbbreviation(position) {
    let editor = vscode.window.activeTextEditor;
    let currentLine = editor.document.lineAt(position.line).text;
    let result = extract(currentLine, position.character, true);
    if (!result) {
        return [null, ''];
    }
    let rangeToReplace = new vscode.Range(position.line, result.location, position.line, result.location + result.abbreviation.length);
    return [rangeToReplace, result.abbreviation];
}
exports.extractAbbreviation = extractAbbreviation;
function getDeepestNode(node) {
    if (!node || !node.children || node.children.length === 0) {
        return node;
    }
    return getDeepestNode(node.children[node.children.length - 1]);
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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/util.js.map
