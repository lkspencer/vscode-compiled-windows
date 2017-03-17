/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require("vscode");
var tableOfContentsProvider_1 = require("./tableOfContentsProvider");
var MDDocumentSymbolProvider = (function () {
    function MDDocumentSymbolProvider(engine) {
        this.engine = engine;
    }
    MDDocumentSymbolProvider.prototype.provideDocumentSymbols = function (document) {
        var toc = new tableOfContentsProvider_1.TableOfContentsProvider(this.engine, document);
        return toc.getToc().map(function (entry) {
            return new vscode.SymbolInformation(entry.text, vscode.SymbolKind.Module, '', entry.location);
        });
    };
    return MDDocumentSymbolProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MDDocumentSymbolProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\markdown\out/documentSymbolProvider.js.map
