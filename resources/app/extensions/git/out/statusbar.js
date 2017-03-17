/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const vscode_1 = require("vscode");
const git_1 = require("./git");
const model_1 = require("./model");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
class CheckoutStatusBar {
    constructor(model) {
        this.model = model;
        this.disposables = [];
        this.raw = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, Number.MAX_VALUE - 1);
        this.raw.show();
        this.disposables.push(this.raw);
        model.onDidChange(this.update, this, this.disposables);
        this.update();
    }
    update() {
        const HEAD = this.model.HEAD;
        if (!HEAD) {
            this.raw.hide();
            return;
        }
        const tag = this.model.refs.filter(iref => iref.type === git_1.RefType.Tag && iref.commit === HEAD.commit)[0];
        const tagName = tag && tag.name;
        const head = HEAD.name || tagName || (HEAD.commit || '').substr(0, 8);
        this.raw.command = 'git.checkout';
        this.raw.color = 'rgb(255, 255, 255)';
        this.raw.tooltip = localize(0, null);
        this.raw.text = '$(git-branch) ' +
            head +
            (this.model.workingTreeGroup.resources.length > 0 ? '*' : '') +
            (this.model.indexGroup.resources.length > 0 ? '+' : '') +
            (this.model.mergeGroup.resources.length > 0 ? '!' : '');
        this.raw.show();
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
exports.CheckoutStatusBar = CheckoutStatusBar;
class SyncStatusBar {
    constructor(model) {
        this.model = model;
        this.disposables = [];
        this._state = SyncStatusBar.StartState;
        this.raw = vscode_1.window.createStatusBarItem(vscode_1.StatusBarAlignment.Left, Number.MAX_VALUE);
        this.disposables.push(this.raw);
        model.onDidChange(this.onModelChange, this, this.disposables);
        model.onDidChangeOperations(this.onOperationsChange, this, this.disposables);
        this.render();
    }
    get state() { return this._state; }
    set state(state) {
        this._state = state;
        this.render();
    }
    onOperationsChange() {
        this.state = __assign({}, this.state, { isSyncRunning: this.model.operations.isRunning(model_1.Operation.Sync) });
    }
    onModelChange() {
        this.state = __assign({}, this.state, { hasRemotes: this.model.remotes.length > 0, HEAD: this.model.HEAD });
    }
    render() {
        if (!this.state.hasRemotes) {
            this.raw.hide();
            return;
        }
        const HEAD = this.state.HEAD;
        let icon = '$(sync)';
        let text = '';
        let command = '';
        let tooltip = '';
        if (HEAD && HEAD.name && HEAD.commit) {
            if (HEAD.upstream) {
                if (HEAD.ahead || HEAD.behind) {
                    text += `${HEAD.behind}↓ ${HEAD.ahead}↑`;
                }
                command = 'git.sync';
                tooltip = localize(1, null);
            }
            else {
                icon = '$(cloud-upload)';
                command = 'git.publish';
                tooltip = localize(2, null);
            }
        }
        else {
            command = '';
            tooltip = '';
        }
        if (this.state.isSyncRunning) {
            text = '';
            command = '';
            tooltip = localize(3, null);
        }
        this.raw.text = [icon, text].join(' ').trim();
        this.raw.command = command;
        this.raw.tooltip = tooltip;
        if (command) {
            this.raw.color = '';
        }
        else {
            this.raw.color = 'rgba(255,255,255,0.7)';
        }
        this.raw.show();
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
SyncStatusBar.StartState = {
    isSyncRunning: false,
    hasRemotes: false,
    HEAD: undefined
};
exports.SyncStatusBar = SyncStatusBar;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\git\out/statusbar.js.map
