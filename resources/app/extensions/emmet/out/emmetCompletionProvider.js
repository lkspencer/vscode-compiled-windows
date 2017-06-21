"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const expand_abbreviation_1 = require("@emmetio/expand-abbreviation");
const util_1 = require("./util");
const field = (index, placeholder) => `\${${index}${placeholder ? ':' + placeholder : ''}}`;
const snippetCompletionsCache = new Map();
class EmmetCompletionItemProvider {
    provideCompletionItems(document, position, token) {
        if (!vscode.workspace.getConfiguration('emmet')['useNewEmmet']) {
            return Promise.resolve(null);
        }
        let currentWord = getCurrentWord(document, position);
        let expandedAbbr = getExpandedAbbreviation(document, position);
        let abbreviationSuggestions = getAbbreviationSuggestions(util_1.getSyntax(document), currentWord, (expandedAbbr && currentWord === expandedAbbr.label));
        let completionItems = expandedAbbr ? [expandedAbbr, ...abbreviationSuggestions] : abbreviationSuggestions;
        return Promise.resolve(new vscode.CompletionList(completionItems, true));
    }
}
exports.EmmetCompletionItemProvider = EmmetCompletionItemProvider;
function getExpandedAbbreviation(document, position) {
    if (!vscode.workspace.getConfiguration('emmet')['showExpandedAbbreviation']) {
        return;
    }
    let [rangeToReplace, wordToExpand] = util_1.extractAbbreviation(position);
    if (!rangeToReplace || !wordToExpand) {
        return;
    }
    let syntax = util_1.getSyntax(document);
    let expandedWord = expand_abbreviation_1.expand(wordToExpand, {
        field: field,
        syntax: syntax,
        profile: util_1.getProfile(syntax),
        addons: syntax === 'jsx' ? { 'jsx': true } : null
    });
    let completionitem = new vscode.CompletionItem(wordToExpand);
    completionitem.insertText = new vscode.SnippetString(expandedWord);
    completionitem.documentation = removeTabStops(expandedWord);
    completionitem.range = rangeToReplace;
    completionitem.detail = 'Expand Emmet Abbreviation';
    // In non stylesheet like syntax, this extension returns expanded abbr plus posssible abbr completions
    // To differentiate between the 2, the former is given CompletionItemKind.Value so that it gets a different icon
    if (!util_1.isStyleSheet(syntax)) {
        completionitem.kind = vscode.CompletionItemKind.Value;
    }
    return completionitem;
}
function getCurrentWord(document, position) {
    let wordAtPosition = document.getWordRangeAtPosition(position);
    let currentWord = '';
    if (wordAtPosition && wordAtPosition.start.character < position.character) {
        let word = document.getText(wordAtPosition);
        currentWord = word.substr(0, position.character - wordAtPosition.start.character);
    }
    return currentWord;
}
function removeTabStops(expandedWord) {
    return expandedWord.replace(/\$\{\d+\}/g, '').replace(/\$\{\d+:([^\}]+)\}/g, '$1');
}
function getAbbreviationSuggestions(syntax, prefix, skipExactMatch) {
    if (!vscode.workspace.getConfiguration('emmet')['showAbbreviationSuggestions'] || !prefix || util_1.isStyleSheet(syntax)) {
        return [];
    }
    if (!snippetCompletionsCache.has(syntax)) {
        let registry = expand_abbreviation_1.createSnippetsRegistry(syntax);
        let completions = registry.all({ type: 'string' }).map(snippet => {
            let expandedWord = expand_abbreviation_1.expand(snippet.value, {
                field: field,
                syntax: syntax
            });
            let item = new vscode.CompletionItem(snippet.key);
            item.documentation = removeTabStops(expandedWord);
            item.detail = 'Complete Emmet Abbreviation';
            item.insertText = snippet.key;
            return item;
        });
        snippetCompletionsCache.set(syntax, completions);
    }
    let snippetCompletions = snippetCompletionsCache.get(syntax);
    snippetCompletions = snippetCompletions.filter(x => x.label.startsWith(prefix) && (!skipExactMatch || x.label !== prefix));
    return snippetCompletions;
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\emmet\out/emmetCompletionProvider.js.map
