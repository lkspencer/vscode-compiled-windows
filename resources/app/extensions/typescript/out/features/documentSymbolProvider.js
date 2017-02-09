/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
const PConst = require("../protocol.const");
let outlineTypeTable = Object.create(null);
outlineTypeTable[PConst.Kind.module] = vscode_1.SymbolKind.Module;
outlineTypeTable[PConst.Kind.class] = vscode_1.SymbolKind.Class;
outlineTypeTable[PConst.Kind.enum] = vscode_1.SymbolKind.Enum;
outlineTypeTable[PConst.Kind.interface] = vscode_1.SymbolKind.Interface;
outlineTypeTable[PConst.Kind.memberFunction] = vscode_1.SymbolKind.Method;
outlineTypeTable[PConst.Kind.memberVariable] = vscode_1.SymbolKind.Property;
outlineTypeTable[PConst.Kind.memberGetAccessor] = vscode_1.SymbolKind.Property;
outlineTypeTable[PConst.Kind.memberSetAccessor] = vscode_1.SymbolKind.Property;
outlineTypeTable[PConst.Kind.variable] = vscode_1.SymbolKind.Variable;
outlineTypeTable[PConst.Kind.const] = vscode_1.SymbolKind.Variable;
outlineTypeTable[PConst.Kind.localVariable] = vscode_1.SymbolKind.Variable;
outlineTypeTable[PConst.Kind.variable] = vscode_1.SymbolKind.Variable;
outlineTypeTable[PConst.Kind.function] = vscode_1.SymbolKind.Function;
outlineTypeTable[PConst.Kind.localFunction] = vscode_1.SymbolKind.Function;
function textSpan2Range(value) {
    return new vscode_1.Range(value.start.line - 1, value.start.offset - 1, value.end.line - 1, value.end.offset - 1);
}
class TypeScriptDocumentSymbolProvider {
    constructor(client) {
        this.client = client;
    }
    provideDocumentSymbols(resource, token) {
        const filepath = this.client.normalizePath(resource.uri);
        if (!filepath) {
            return Promise.resolve([]);
        }
        let args = {
            file: filepath
        };
        if (!args.file) {
            return Promise.resolve([]);
        }
        function convertNavBar(indent, foldingMap, bucket, item, containerLabel) {
            let realIndent = indent + item.indent;
            let key = `${realIndent}|${item.text}`;
            if (realIndent !== 0 && !foldingMap[key]) {
                let result = new vscode_1.SymbolInformation(item.text, outlineTypeTable[item.kind] || vscode_1.SymbolKind.Variable, containerLabel ? containerLabel : '', new vscode_1.Location(resource.uri, textSpan2Range(item.spans[0])));
                foldingMap[key] = result;
                bucket.push(result);
            }
            if (item.childItems && item.childItems.length > 0) {
                for (let child of item.childItems) {
                    convertNavBar(realIndent + 1, foldingMap, bucket, child, item.text);
                }
            }
        }
        function convertNavTree(bucket, item, containerLabel) {
            let result = new vscode_1.SymbolInformation(item.text, outlineTypeTable[item.kind] || vscode_1.SymbolKind.Variable, containerLabel ? containerLabel : '', new vscode_1.Location(resource.uri, textSpan2Range(item.spans[0])));
            if (item.childItems && item.childItems.length > 0) {
                for (let child of item.childItems) {
                    convertNavTree(bucket, child, result.name);
                }
            }
            bucket.push(result);
        }
        if (this.client.apiVersion.has206Features()) {
            return this.client.execute('navtree', args, token).then((response) => {
                let result = [];
                if (response.body) {
                    // The root represents the file. Ignore this when showing in the UI
                    let tree = response.body;
                    if (tree.childItems) {
                        tree.childItems.forEach(item => convertNavTree(result, item));
                    }
                }
                return result;
            }, (err) => {
                this.client.error(`'navtree' request failed with error.`, err);
                return [];
            });
        }
        else {
            return this.client.execute('navbar', args, token).then((response) => {
                let result = [];
                if (response.body) {
                    let foldingMap = Object.create(null);
                    response.body.forEach(item => convertNavBar(0, foldingMap, result, item));
                }
                return result;
            }, (err) => {
                this.client.error(`'navbar' request failed with error.`, err);
                return [];
            });
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptDocumentSymbolProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\documentSymbolProvider.js.map
