/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const vscode_1 = require("vscode");
const path = require("path");
class GitContentProvider {
    constructor(git, rootPath, onGitChange) {
        this.git = git;
        this.rootPath = rootPath;
        this.disposables = [];
        this.onDidChangeEmitter = new vscode_1.EventEmitter();
        this.uris = new Set();
        this.disposables.push(onGitChange(this.fireChangeEvents, this), vscode_1.workspace.registerTextDocumentContentProvider('git', this));
    }
    get onDidChange() { return this.onDidChangeEmitter.event; }
    fireChangeEvents() {
        for (let uri of this.uris) {
            this.onDidChangeEmitter.fire(uri);
        }
    }
    provideTextDocumentContent(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const treeish = uri.query;
            const relativePath = path.relative(this.rootPath, uri.fsPath).replace(/\\/g, '/');
            try {
                const result = yield this.git.exec(this.rootPath, ['show', `${treeish}:${relativePath}`]);
                if (result.exitCode !== 0) {
                    this.uris.delete(uri);
                    return '';
                }
                this.uris.add(uri);
                return result.stdout;
            }
            catch (err) {
                this.uris.delete(uri);
                return '';
            }
        });
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
exports.GitContentProvider = GitContentProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\git\out/contentProvider.js.map
