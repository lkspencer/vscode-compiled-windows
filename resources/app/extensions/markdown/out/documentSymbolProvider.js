/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
var tableOfContentsProvider_1 = require("./tableOfContentsProvider");
var MDDocumentSymbolProvider = (function () {
    function MDDocumentSymbolProvider(engine) {
        this.engine = engine;
    }
    MDDocumentSymbolProvider.prototype.provideDocumentSymbols = function (document) {
        var toc = new tableOfContentsProvider_1.TableOfContentsProvider(this.engine, document);
        return toc.getToc().map(function (entry) {
            return new vscode.SymbolInformation(entry.text, vscode.SymbolKind.Namespace, '', entry.location);
        });
    };
    return MDDocumentSymbolProvider;
}());
exports.default = MDDocumentSymbolProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c887dd955170aebce0f6bb160b146f2e6e10a199/extensions\markdown\out/documentSymbolProvider.js.map
