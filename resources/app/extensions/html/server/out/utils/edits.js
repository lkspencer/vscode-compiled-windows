/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var arrays_1 = require("./arrays");
function applyEdits(document, edits) {
    var text = document.getText();
    var sortedEdits = arrays_1.mergeSort(edits, function (a, b) {
        var diff = a.range.start.line - b.range.start.line;
        if (diff === 0) {
            return a.range.start.character - b.range.start.character;
        }
        return 0;
    });
    var lastModifiedOffset = text.length;
    for (var i = sortedEdits.length - 1; i >= 0; i--) {
        var e = sortedEdits[i];
        var startOffset = document.offsetAt(e.range.start);
        var endOffset = document.offsetAt(e.range.end);
        if (endOffset <= lastModifiedOffset) {
            text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
        }
        else {
            throw new Error('Ovelapping edit');
        }
        lastModifiedOffset = startOffset;
    }
    return text;
}
exports.applyEdits = applyEdits;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\html\server\out/utils\edits.js.map
