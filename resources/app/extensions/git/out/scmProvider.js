/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
const model_1 = require("./model");
const util_1 = require("./util");
class GitSCMProvider {
    constructor(model, commandCenter) {
        this.model = model;
        this.commandCenter = commandCenter;
        this.disposables = [];
        vscode_1.scm.registerSCMProvider('git', this);
    }
    get resources() { return this.model.resources; }
    get onDidChange() {
        return util_1.mapEvent(this.model.onDidChange, () => this.model.resources);
    }
    get label() { return 'Git'; }
    get state() {
        switch (this.model.state) {
            case model_1.State.Uninitialized: return 'uninitialized';
            case model_1.State.Idle: return 'idle';
            case model_1.State.NotAGitRepository: return 'norepo';
            default: return '';
        }
    }
    get count() {
        const countBadge = vscode_1.workspace.getConfiguration('git').get('countBadge');
        switch (countBadge) {
            case 'off': return 0;
            case 'tracked': return this.model.indexGroup.resources.length;
            default: return this.model.resources.reduce((r, g) => r + g.resources.length, 0);
        }
    }
    open(resource) {
        return this.commandCenter.open(resource);
    }
    acceptChanges() {
        return this.commandCenter.commitWithInput();
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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\git\out/scmProvider.js.map
