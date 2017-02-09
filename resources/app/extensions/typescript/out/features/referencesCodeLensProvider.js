/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
const PConst = require("../protocol.const");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
class ReferencesCodeLens extends vscode_1.CodeLens {
    constructor(document, file, range) {
        super(range);
        this.document = document;
        this.file = file;
    }
}
class TypeScriptReferencesCodeLensProvider {
    constructor(client) {
        this.client = client;
        this.enabled = false;
        this.onDidChangeCodeLensesEmitter = new vscode_1.EventEmitter();
    }
    get onDidChangeCodeLenses() {
        return this.onDidChangeCodeLensesEmitter.event;
    }
    updateConfiguration(config) {
        const typeScriptConfig = vscode_1.workspace.getConfiguration('typescript');
        const wasEnabled = this.enabled;
        this.enabled = typeScriptConfig.get('referencesCodeLens.enabled', false);
        if (wasEnabled !== this.enabled) {
            this.onDidChangeCodeLensesEmitter.fire();
        }
    }
    provideCodeLenses(document, token) {
        if (!this.enabled) {
            return Promise.resolve([]);
        }
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return Promise.resolve([]);
        }
        return this.client.execute('navtree', { file: filepath }, token).then(response => {
            if (!response) {
                return [];
            }
            const tree = response.body;
            const referenceableSpans = [];
            if (tree && tree.childItems) {
                tree.childItems.forEach(item => this.extractReferenceableSymbols(document, item, referenceableSpans));
            }
            return referenceableSpans.map(span => new ReferencesCodeLens(document.uri, filepath, span));
        });
    }
    resolveCodeLens(inputCodeLens, token) {
        const codeLens = inputCodeLens;
        if (!codeLens.document) {
            return Promise.reject(codeLens);
        }
        const args = {
            file: codeLens.file,
            line: codeLens.range.start.line + 1,
            offset: codeLens.range.start.character + 1
        };
        return this.client.execute('references', args, token).then(response => {
            if (response && response.body) {
                // Exclude original definition from references
                const locations = response.body.refs
                    .filter(reference => !(reference.start.line === codeLens.range.start.line + 1
                    && reference.start.offset === codeLens.range.start.character + 1))
                    .map(reference => new vscode_1.Location(this.client.asUrl(reference.file), new vscode_1.Range(new vscode_1.Position(reference.start.line - 1, reference.start.offset - 1), new vscode_1.Position(reference.end.line - 1, reference.end.offset - 1))));
                codeLens.command = {
                    title: locations.length + ' ' + (locations.length === 1 ? localize(0, null) : localize(1, null)),
                    command: 'editor.action.showReferences',
                    arguments: [codeLens.document, codeLens.range.start, locations]
                };
                return Promise.resolve(codeLens);
            }
            return Promise.reject(codeLens);
        }).catch(() => {
            codeLens.command = {
                title: localize(2, null),
                command: ''
            };
            return Promise.resolve(codeLens);
        });
    }
    extractReferenceableSymbols(document, item, results) {
        if (!item) {
            return;
        }
        const span = item.spans && item.spans[0];
        if (span) {
            const range = new vscode_1.Range(new vscode_1.Position(span.start.line - 1, span.start.offset - 1), new vscode_1.Position(span.end.line - 1, span.end.offset - 1));
            // TODO: TS currently requires the position for 'references 'to be inside of the identifer
            // Massage the range to make sure this is the case
            const text = document.getText(range);
            switch (item.kind) {
                case PConst.Kind.const:
                case PConst.Kind.let:
                case PConst.Kind.variable:
                case PConst.Kind.function:
                    // Only show references for exported variables
                    if (!item.kindModifiers.match(/\bexport\b/)) {
                        break;
                    }
                // fallthrough
                case PConst.Kind.class:
                    if (item.text === '<class>') {
                        break;
                    }
                // fallthrough
                case PConst.Kind.memberFunction:
                case PConst.Kind.memberVariable:
                case PConst.Kind.memberGetAccessor:
                case PConst.Kind.memberSetAccessor:
                case PConst.Kind.constructorImplementation:
                case PConst.Kind.interface:
                case PConst.Kind.type:
                case PConst.Kind.enum:
                    const identifierMatch = new RegExp(`^(.*?(\\b|\\W))${item.text}\\b`, 'gm');
                    const match = identifierMatch.exec(text);
                    const prefixLength = match ? match.index + match[1].length : 0;
                    const startOffset = document.offsetAt(new vscode_1.Position(range.start.line, range.start.character)) + prefixLength;
                    results.push(new vscode_1.Range(document.positionAt(startOffset), document.positionAt(startOffset + item.text.length)));
                    break;
            }
        }
        (item.childItems || []).forEach(item => this.extractReferenceableSymbols(document, item, results));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptReferencesCodeLensProvider;
;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\referencesCodeLensProvider.js.map
