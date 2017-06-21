"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const emmetCompletionProvider_1 = require("./emmetCompletionProvider");
const abbreviationActions_1 = require("./abbreviationActions");
const removeTag_1 = require("./removeTag");
const updateTag_1 = require("./updateTag");
const matchTag_1 = require("./matchTag");
const balance_1 = require("./balance");
const splitJoinTag_1 = require("./splitJoinTag");
const mergeLines_1 = require("./mergeLines");
const toggleComment_1 = require("./toggleComment");
const editPoint_1 = require("./editPoint");
const selectItem_1 = require("./selectItem");
const SUPPORTED_LANGUAGE_MODES = [
    { id: 'html', triggerCharacters: ['!', '.', '}'] },
    { id: 'jade', triggerCharacters: ['!', '.', '}'] },
    { id: 'slim', triggerCharacters: ['!', '.', '}'] },
    { id: 'haml', triggerCharacters: ['!', '.', '}'] },
    { id: 'xml', triggerCharacters: ['.', '}'] },
    { id: 'xsl', triggerCharacters: ['.', '}'] },
    { id: 'css', triggerCharacters: [':'] },
    { id: 'scss', triggerCharacters: [':'] },
    { id: 'sass', triggerCharacters: [':'] },
    { id: 'less', triggerCharacters: [':'] },
    { id: 'stylus', triggerCharacters: [':'] },
    { id: 'javascriptreact', triggerCharacters: ['.'] },
    { id: 'typescriptreact', triggerCharacters: ['.'] }
];
function activate(context) {
    let completionProvider = new emmetCompletionProvider_1.EmmetCompletionItemProvider();
    for (let language of SUPPORTED_LANGUAGE_MODES) {
        const selector = { language: language.id };
        const provider = vscode.languages.registerCompletionItemProvider(selector, completionProvider, ...language.triggerCharacters);
        context.subscriptions.push(provider);
    }
    context.subscriptions.push(vscode.commands.registerCommand('emmet.wrapWithAbbreviation', () => {
        abbreviationActions_1.wrapWithAbbreviation();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.expandAbbreviation', () => {
        abbreviationActions_1.expandAbbreviation();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.removeTag', () => {
        removeTag_1.removeTag();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.updateTag', () => {
        vscode.window.showInputBox({ prompt: 'Enter Tag' }).then(tagName => {
            updateTag_1.updateTag(tagName);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.matchTag', () => {
        matchTag_1.matchTag();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.balanceOut', () => {
        balance_1.balanceOut();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.balanceIn', () => {
        balance_1.balanceIn();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.splitJoinTag', () => {
        splitJoinTag_1.splitJoinTag();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.mergeLines', () => {
        mergeLines_1.mergeLines();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.toggleComment', () => {
        toggleComment_1.toggleComment();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.nextEditPoint', () => {
        editPoint_1.fetchEditPoint('next');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.prevEditPoint', () => {
        editPoint_1.fetchEditPoint('prev');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.selectNextItem', () => {
        selectItem_1.fetchSelectItem('next');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('emmet.selectPrevItem', () => {
        selectItem_1.fetchSelectItem('prev');
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\emmet\out/extension.js.map
