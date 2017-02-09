/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const vscode_1 = require("vscode");
const git_1 = require("./git");
const model_1 = require("./model");
const path = require("path");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
function resolveGitURI(uri) {
    if (uri.authority !== 'git') {
        return;
    }
    return vscode_1.scm.getResourceFromURI(uri);
}
function resolveGitResource(uri) {
    const resource = resolveGitURI(uri);
    if (!(resource instanceof model_1.Resource)) {
        return;
    }
    return resource;
}
class CheckoutItem {
    constructor(ref) {
        this.ref = ref;
    }
    get shortCommit() { return (this.ref.commit || '').substr(0, 8); }
    get treeish() { return this.ref.name; }
    get label() { return this.ref.name || this.shortCommit; }
    get description() { return this.shortCommit; }
    run(model) {
        return __awaiter(this, void 0, void 0, function* () {
            const ref = this.treeish;
            if (!ref) {
                return;
            }
            yield model.checkout(ref);
        });
    }
}
class CheckoutTagItem extends CheckoutItem {
    get description() {
        return localize(0, null, this.shortCommit);
    }
}
class CheckoutRemoteHeadItem extends CheckoutItem {
    get description() {
        return localize(1, null, this.shortCommit);
    }
    get treeish() {
        if (!this.ref.name) {
            return;
        }
        const match = /^[^/]+\/(.*)$/.exec(this.ref.name);
        return match ? match[1] : this.ref.name;
    }
}
class CommandCenter {
    constructor(model, outputChannel) {
        this.model = model;
        this.outputChannel = outputChannel;
        this.disposables = CommandCenter.Commands
            .map(({ commandId, method }) => vscode_1.commands.registerCommand(commandId, method, this));
    }
    static Command(commandId) {
        return (target, key, descriptor) => {
            if (!(typeof descriptor.value === 'function')) {
                throw new Error('not supported');
            }
            CommandCenter.Commands.push({ commandId, method: descriptor.value });
        };
    }
    static CatchErrors(target, key, descriptor) {
        if (!(typeof descriptor.value === 'function')) {
            throw new Error('not supported');
        }
        const fn = descriptor.value;
        descriptor.value = function (...args) {
            fn.apply(this, args).catch((err) => __awaiter(this, void 0, void 0, function* () {
                let message;
                switch (err.gitErrorCode) {
                    case 'DirtyWorkTree':
                        message = localize(2, null);
                        break;
                    default:
                        message = (err.stderr || err.message || String(err)).replace(/^error: /, '');
                        break;
                }
                if (!message) {
                    console.error(err);
                    return;
                }
                const outputChannel = this.outputChannel;
                const openOutputChannelChoice = localize(3, null);
                const choice = yield vscode_1.window.showErrorMessage(message, openOutputChannelChoice);
                if (choice === openOutputChannelChoice) {
                    outputChannel.show();
                }
            }));
        };
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.status();
        });
    }
    openChange(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = resolveGitResource(uri);
            if (!resource) {
                return;
            }
            return this.open(resource);
        });
    }
    open(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = this.getLeftResource(resource);
            const right = this.getRightResource(resource);
            const title = this.getTitle(resource);
            if (!left) {
                if (!right) {
                    // TODO
                    console.error('oh no');
                    return;
                }
                return vscode_1.commands.executeCommand('vscode.open', right);
            }
            return vscode_1.commands.executeCommand('vscode.diff', left, right, title);
        });
    }
    getLeftResource(resource) {
        switch (resource.type) {
            case model_1.Status.INDEX_MODIFIED:
            case model_1.Status.INDEX_RENAMED:
                return resource.uri.with({ scheme: 'git', query: 'HEAD' });
            case model_1.Status.MODIFIED:
                const uriString = resource.uri.toString();
                const [indexStatus] = this.model.indexGroup.resources.filter(r => r.uri.toString() === uriString);
                if (indexStatus) {
                    return resource.uri.with({ scheme: 'git' });
                }
                return resource.uri.with({ scheme: 'git', query: 'HEAD' });
        }
    }
    getRightResource(resource) {
        switch (resource.type) {
            case model_1.Status.INDEX_MODIFIED:
            case model_1.Status.INDEX_ADDED:
            case model_1.Status.INDEX_COPIED:
            case model_1.Status.INDEX_RENAMED:
                return resource.uri.with({ scheme: 'git' });
            case model_1.Status.INDEX_DELETED:
            case model_1.Status.DELETED:
                return resource.uri.with({ scheme: 'git', query: 'HEAD' });
            case model_1.Status.MODIFIED:
            case model_1.Status.UNTRACKED:
            case model_1.Status.IGNORED:
            case model_1.Status.BOTH_MODIFIED:
                return resource.uri;
        }
    }
    getTitle(resource) {
        const basename = path.basename(resource.uri.fsPath);
        switch (resource.type) {
            case model_1.Status.INDEX_MODIFIED:
            case model_1.Status.INDEX_RENAMED:
                return `${basename} (Index)`;
            case model_1.Status.MODIFIED:
                return `${basename} (Working Tree)`;
        }
        return '';
    }
    openFile(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = resolveGitResource(uri);
            if (!resource) {
                return;
            }
            return vscode_1.commands.executeCommand('vscode.open', resource.uri);
        });
    }
    stage(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = resolveGitResource(uri);
            if (!resource) {
                return;
            }
            return yield this.model.stage(resource);
        });
    }
    stageAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.stage();
        });
    }
    unstage(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = resolveGitResource(uri);
            if (!resource) {
                return;
            }
            return yield this.model.unstage(resource);
        });
    }
    unstageAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.unstage();
        });
    }
    clean(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = resolveGitResource(uri);
            if (!resource) {
                return;
            }
            const basename = path.basename(resource.uri.fsPath);
            const message = localize(4, null, basename);
            const yes = localize(5, null);
            const no = localize(6, null);
            const pick = yield vscode_1.window.showQuickPick([yes, no], { placeHolder: message });
            if (pick !== yes) {
                return;
            }
            return yield this.model.clean(resource);
        });
    }
    cleanAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const message = localize(7, null);
            const yes = localize(8, null);
            const no = localize(9, null);
            const pick = yield vscode_1.window.showQuickPick([yes, no], { placeHolder: message });
            if (pick !== yes) {
                return;
            }
            return yield this.model.clean(...this.model.workingTreeGroup.resources);
        });
    }
    commit(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const all = this.model.indexGroup.resources.length === 0;
            return this.model.commit(message, { all });
        });
    }
    commitStaged() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    commitStagedSigned() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    commitAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    commitAllSigned() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    undoCommit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    checkout() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = vscode_1.workspace.getConfiguration('git');
            const checkoutType = config.get('checkoutType');
            const includeTags = checkoutType === 'all' || checkoutType === 'tags';
            const includeRemotes = checkoutType === 'all' || checkoutType === 'remote';
            const heads = this.model.refs.filter(ref => ref.type === git_1.RefType.Head)
                .map(ref => new CheckoutItem(ref));
            const tags = (includeTags ? this.model.refs.filter(ref => ref.type === git_1.RefType.Tag) : [])
                .map(ref => new CheckoutTagItem(ref));
            const remoteHeads = (includeRemotes ? this.model.refs.filter(ref => ref.type === git_1.RefType.RemoteHead) : [])
                .map(ref => new CheckoutRemoteHeadItem(ref));
            const picks = [...heads, ...tags, ...remoteHeads];
            const placeHolder = 'Select a ref to checkout';
            const choice = yield vscode_1.window.showQuickPick(picks, { placeHolder });
            if (!choice) {
                return;
            }
            yield choice.run(this.model);
        });
    }
    branch() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield vscode_1.window.showInputBox({
                placeHolder: localize(10, null),
                prompt: localize(11, null)
            });
            if (!result) {
                return;
            }
            const name = result.replace(/^\.|\/\.|\.\.|~|\^|:|\/$|\.lock$|\.lock\/|\\|\*|\s|^\s*$|\.$/g, '-');
            yield this.model.branch(name);
        });
    }
    pull() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    pullRebase() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    push() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    pushTo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield Promise.reject('not implemented');
        });
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.sync();
        });
    }
    publish() {
        return __awaiter(this, void 0, void 0, function* () {
            const branchName = this.model.HEAD && this.model.HEAD.name || '';
            const picks = this.model.remotes.map(r => r.name);
            const placeHolder = localize(12, null, branchName);
            const choice = yield vscode_1.window.showQuickPick(picks, { placeHolder });
            if (!choice) {
                return;
            }
            yield this.model.push(choice, branchName, { setUpstream: true });
        });
    }
    showOutput() {
        this.outputChannel.show();
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
CommandCenter.Commands = [];
__decorate([
    CommandCenter.Command('git.refresh'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "refresh", null);
__decorate([
    CommandCenter.Command('git.openChange'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "openChange", null);
__decorate([
    CommandCenter.Command('git.openFile'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "openFile", null);
__decorate([
    CommandCenter.Command('git.stage'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "stage", null);
__decorate([
    CommandCenter.Command('git.stageAll'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "stageAll", null);
__decorate([
    CommandCenter.Command('git.unstage'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "unstage", null);
__decorate([
    CommandCenter.Command('git.unstageAll'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "unstageAll", null);
__decorate([
    CommandCenter.Command('git.clean'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "clean", null);
__decorate([
    CommandCenter.Command('git.cleanAll'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "cleanAll", null);
__decorate([
    CommandCenter.CatchErrors
], CommandCenter.prototype, "commit", null);
__decorate([
    CommandCenter.Command('git.commitStaged'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "commitStaged", null);
__decorate([
    CommandCenter.Command('git.commitStagedSigned'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "commitStagedSigned", null);
__decorate([
    CommandCenter.Command('git.commitAll'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "commitAll", null);
__decorate([
    CommandCenter.Command('git.commitAllSigned'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "commitAllSigned", null);
__decorate([
    CommandCenter.Command('git.undoCommit'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "undoCommit", null);
__decorate([
    CommandCenter.Command('git.checkout'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "checkout", null);
__decorate([
    CommandCenter.Command('git.branch'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "branch", null);
__decorate([
    CommandCenter.Command('git.pull'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "pull", null);
__decorate([
    CommandCenter.Command('git.pullRebase'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "pullRebase", null);
__decorate([
    CommandCenter.Command('git.push'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "push", null);
__decorate([
    CommandCenter.Command('git.pushTo'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "pushTo", null);
__decorate([
    CommandCenter.Command('git.sync'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "sync", null);
__decorate([
    CommandCenter.Command('git.publish'),
    CommandCenter.CatchErrors
], CommandCenter.prototype, "publish", null);
__decorate([
    CommandCenter.Command('git.showOutput')
], CommandCenter.prototype, "showOutput", null);
exports.CommandCenter = CommandCenter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\git\out/commands.js.map
