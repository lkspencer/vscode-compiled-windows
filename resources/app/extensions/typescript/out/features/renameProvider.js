/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
class TypeScriptRenameProvider {
    constructor(client) {
        this.tokens = [];
        this.client = client;
    }
    provideRenameEdits(document, position, newName, token) {
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return Promise.resolve(null);
        }
        let args = {
            file: filepath,
            line: position.line + 1,
            offset: position.character + 1,
            findInStrings: false,
            findInComments: false
        };
        if (!args.file) {
            return Promise.resolve(null);
        }
        return this.client.execute('rename', args, token).then((response) => {
            let renameResponse = response.body;
            if (!renameResponse) {
                return Promise.resolve(null);
            }
            let renameInfo = renameResponse.info;
            let result = new vscode_1.WorkspaceEdit();
            if (!renameInfo.canRename) {
                return Promise.reject(renameInfo.localizedErrorMessage);
            }
            renameResponse.locs.forEach((spanGroup) => {
                let resource = this.client.asUrl(spanGroup.file);
                if (!resource) {
                    return;
                }
                spanGroup.locs.forEach((textSpan) => {
                    result.replace(resource, new vscode_1.Range(textSpan.start.line - 1, textSpan.start.offset - 1, textSpan.end.line - 1, textSpan.end.offset - 1), newName);
                });
            });
            return result;
        }, (err) => {
            this.client.error(`'rename' request failed with error.`, err);
            return null;
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptRenameProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\renameProvider.js.map
