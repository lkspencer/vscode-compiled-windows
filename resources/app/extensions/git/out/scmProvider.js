/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
class GitSCMProvider {
    constructor(model, commandCenter) {
        this.model = model;
        this.commandCenter = commandCenter;
        this.disposables = [];
        vscode_1.scm.registerSCMProvider('git', this);
    }
    get resources() { return this.model.resources; }
    get onDidChange() { return this.model.onDidChange; }
    get label() { return 'Git'; }
    commit(message) {
        return this.commandCenter.commit(message);
    }
    open(resource) {
        return this.commandCenter.open(resource);
    }
    drag(resource, resourceGroup) {
        console.log('drag', resource, resourceGroup);
    }
    getOriginalResource(uri) {
        if (uri.scheme !== 'file') {
            return;
        }
        return uri.with({ scheme: 'git' });
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
        this.disposables = [];
    }
}
exports.GitSCMProvider = GitSCMProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\git\out/scmProvider.js.map
