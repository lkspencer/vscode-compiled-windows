/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const tableOfContentsProvider_1 = require("../tableOfContentsProvider");
class MDDocumentSymbolProvider {
    constructor(engine) {
        this.engine = engine;
    }
    async provideDocumentSymbols(document) {
        const toc = await new tableOfContentsProvider_1.TableOfContentsProvider(this.engine, document).getToc();
        return toc.map(entry => {
            return new vscode.SymbolInformation('#'.repeat(entry.level) + ' ' + entry.text, vscode.SymbolKind.Namespace, '', entry.location);
        });
    }
}
exports.default = MDDocumentSymbolProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/816be6780ca8bd0ab80314e11478c48c70d09383/extensions\markdown\out/features\documentSymbolProvider.js.map
