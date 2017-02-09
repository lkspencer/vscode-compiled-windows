/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
class TypeScriptReferenceSupport {
    constructor(client) {
        this.tokens = [];
        this.client = client;
    }
    provideReferences(document, position, options, token) {
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return Promise.resolve([]);
        }
        let args = {
            file: filepath,
            line: position.line + 1,
            offset: position.character + 1
        };
        if (!args.file) {
            return Promise.resolve([]);
        }
        const apiVersion = this.client.apiVersion;
        return this.client.execute('references', args, token).then((msg) => {
            let result = [];
            if (!msg.body) {
                return result;
            }
            let refs = msg.body.refs;
            for (let i = 0; i < refs.length; i++) {
                let ref = refs[i];
                if (!options.includeDeclaration && apiVersion.has203Features() && ref.isDefinition) {
                    continue;
                }
                let url = this.client.asUrl(ref.file);
                let location = new vscode_1.Location(url, new vscode_1.Range(ref.start.line - 1, ref.start.offset - 1, ref.end.line - 1, ref.end.offset - 1));
                result.push(location);
            }
            return result;
        }, (err) => {
            this.client.error(`'references' request failed with error.`, err);
            return [];
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptReferenceSupport;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\referenceProvider.js.map
