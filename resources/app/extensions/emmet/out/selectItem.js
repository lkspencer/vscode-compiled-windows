"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const util_1 = require("./util");
const selectItemHTML_1 = require("./selectItemHTML");
const selectItemStylesheet_1 = require("./selectItemStylesheet");
const css_parser_1 = require("@emmetio/css-parser");
const html_matcher_1 = require("@emmetio/html-matcher");
function fetchSelectItem(direction) {
    let editor = vscode.window.activeTextEditor;
    if (!util_1.validate()) {
        return;
    }
    let nextItem;
    let prevItem;
    let parseContent;
    if (util_1.isStyleSheet(editor.document.languageId)) {
        nextItem = selectItemStylesheet_1.nextItemStylesheet;
        prevItem = selectItemStylesheet_1.prevItemStylesheet;
        parseContent = css_parser_1.default;
    }
    else {
        nextItem = selectItemHTML_1.nextItemHTML;
        prevItem = selectItemHTML_1.prevItemHTML;
        parseContent = html_matcher_1.default;
    }
    let rootNode = parseContent(editor.document.getText());
    let newSelections = [];
    editor.selections.forEach(selection => {
        let updatedSelection = direction === 'next' ? nextItem(selection, editor, rootNode) : prevItem(selection, editor, rootNode);
        newSelections.push(updatedSelection ? updatedSelection : selection);
    });
    editor.selections = newSelections;
    editor.revealRange(editor.selections[editor.selections.length - 1]);
}
exports.fetchSelectItem = fetchSelectItem;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\emmet\out/selectItem.js.map
