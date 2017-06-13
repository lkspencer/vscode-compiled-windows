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
function wrapWithAbbreviation() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    let rangeToReplace = editor.selection;
    if (rangeToReplace.isEmpty) {
        rangeToReplace = new vscode.Range(rangeToReplace.start.line, 0, rangeToReplace.start.line, editor.document.lineAt(rangeToReplace.start.line).text.length);
    }
    let textToReplace = editor.document.getText(rangeToReplace);
    let syntax = util_1.getSyntax(editor.document);
    let options = {
        field: field,
        syntax: syntax,
        profile: util_1.getProfile(util_1.getSyntax(editor.document)),
        text: textToReplace,
        addons: syntax === 'jsx' ? { 'jsx': syntax === 'jsx' } : null
    };
    vscode.window.showInputBox({ prompt: 'Enter Abbreviation' }).then(abbr => {
        if (!abbr || !abbr.trim()) {
            return;
        }
        let expandedText = expand_abbreviation_1.expand(abbr, options);
        editor.insertSnippet(new vscode.SnippetString(expandedText), rangeToReplace);
    });
}
exports.wrapWithAbbreviation = wrapWithAbbreviation;
function expandAbbreviation() {
    let editor = vscode.window.activeTextEditor;
    if (!editor) {
        vscode.window.showInformationMessage('No editor is active');
        return;
    }
    let rangeToReplace = editor.selection;
    let abbr = editor.document.getText(rangeToReplace);
    if (rangeToReplace.isEmpty) {
        [rangeToReplace, abbr] = util_1.extractAbbreviation(rangeToReplace.start);
    }
    let syntax = util_1.getSyntax(editor.document);
    let options = {
        field: field,
        syntax: syntax,
        profile: util_1.getProfile(util_1.getSyntax(editor.document)),
        addons: syntax === 'jsx' ? { 'jsx': true } : null
    };
    let expandedText = expand_abbreviation_1.expand(abbr, options);
    editor.insertSnippet(new vscode.SnippetString(expandedText), rangeToReplace);
}
exports.expandAbbreviation = expandAbbreviation;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/abbreviationActions.js.map
