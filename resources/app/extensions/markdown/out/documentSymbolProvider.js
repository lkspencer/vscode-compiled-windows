/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require("vscode");
var MDDocumentSymbolProvider = (function () {
    function MDDocumentSymbolProvider(engine) {
        this.engine = engine;
    }
    MDDocumentSymbolProvider.prototype.provideDocumentSymbols = function (document) {
        var tokens = this.engine.parse(document.getText());
        var headings = tokens.filter(function (token) { return token.type === 'heading_open'; });
        return headings.map(function (heading) {
            var lineNumber = heading.map[0];
            var line = document.lineAt(lineNumber);
            var location = new vscode.Location(document.uri, line.range);
            // # Header        => 'Header'
            // ## Header ##    => 'Header'
            // ## Header ####  => 'Header'
            // Header ##       => 'Header ##'
            // =========
            var text = line.text.replace(/^\s*(#)+\s*(.*?)\s*\1*$/, '$2');
            return new vscode.SymbolInformation(text, vscode.SymbolKind.Module, '', location);
        });
    };
    return MDDocumentSymbolProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MDDocumentSymbolProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\markdown\out/documentSymbolProvider.js.map
