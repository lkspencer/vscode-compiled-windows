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
const staging = require("./staging");
const path = require("path");
const os = require("os");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
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
const Commands = [];
function command(commandId) {
    return (target, key, descriptor) => {
        if (!(typeof descriptor.value === 'function')) {
            throw new Error('not supported');
        }
        Commands.push({ commandId, method: descriptor.value });
    };
}
class CommandCenter {
    constructor(model, outputChannel, telemetryReporter) {
        this.outputChannel = outputChannel;
        this.telemetryReporter = telemetryReporter;
        if (model) {
            this.model = model;
        }
        this.disposables = Commands
            .map(({ commandId, method }) => vscode_1.commands.registerCommand(commandId, this.createCommand(commandId, method)));
    }
    refresh() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.status();
        });
    }
    open(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const left = this.getLeftResource(resource);
            const right = this.getRightResource(resource);
            const title = this.getTitle(resource);
            if (!right) {
                // TODO
                console.error('oh no');
                return;
            }
            if (!left) {
                return yield vscode_1.commands.executeCommand('vscode.open', right);
            }
            return yield vscode_1.commands.executeCommand('vscode.diff', left, right, title);
        });
    }
    getLeftResource(resource) {
        switch (resource.type) {
            case model_1.Status.INDEX_MODIFIED:
            case model_1.Status.INDEX_RENAMED:
                return resource.original.with({ scheme: 'git', query: 'HEAD' });
            case model_1.Status.MODIFIED:
                return resource.uri.with({ scheme: 'git', query: '~' });
        }
    }
    getRightResource(resource) {
        switch (resource.type) {
            case model_1.Status.INDEX_MODIFIED:
            case model_1.Status.INDEX_ADDED:
            case model_1.Status.INDEX_COPIED:
                return resource.uri.with({ scheme: 'git' });
            case model_1.Status.INDEX_RENAMED:
                return resource.uri.with({ scheme: 'git' });
            case model_1.Status.INDEX_DELETED:
            case model_1.Status.DELETED:
                return resource.uri.with({ scheme: 'git', query: 'HEAD' });
            case model_1.Status.MODIFIED:
            case model_1.Status.UNTRACKED:
            case model_1.Status.IGNORED:
                const uriString = resource.uri.toString();
                const [indexStatus] = this.model.indexGroup.resources.filter(r => r.uri.toString() === uriString);
                if (indexStatus && indexStatus.rename) {
                    return indexStatus.rename;
                }
                return resource.uri;
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
    clone() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield vscode_1.window.showInputBox({
                prompt: localize(2, null),
                ignoreFocusOut: true
            });
            if (!url) {
                return;
            }
            const parentPath = yield vscode_1.window.showInputBox({
                prompt: localize(3, null),
                value: os.homedir(),
                ignoreFocusOut: true
            });
            if (!parentPath) {
                return;
            }
            const clonePromise = this.model.git.clone(url, parentPath);
            vscode_1.window.setStatusBarMessage(localize(4, null), clonePromise);
            const repositoryPath = yield clonePromise;
            const open = localize(5, null);
            const result = yield vscode_1.window.showInformationMessage(localize(6, null), open);
            if (result === open) {
                vscode_1.commands.executeCommand('vscode.openFolder', vscode_1.Uri.file(repositoryPath));
            }
        });
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.model.init();
        });
    }
    openFile(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = this.resolveSCMResource(uri);
            if (!resource) {
                return;
            }
            return yield vscode_1.commands.executeCommand('vscode.open', resource.uri);
        });
    }
    openChange(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = this.resolveSCMResource(uri);
            if (!resource) {
                return;
            }
            return yield this.open(resource);
        });
    }
    stage(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = this.resolveSCMResource(uri);
            if (!resource) {
                return;
            }
            return yield this.model.add(resource);
        });
    }
    stageAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.add();
        });
    }
    stageSelectedRanges() {
        return __awaiter(this, void 0, void 0, function* () {
            const textEditor = vscode_1.window.activeTextEditor;
            if (!textEditor) {
                return;
            }
            const modifiedDocument = textEditor.document;
            const modifiedUri = modifiedDocument.uri;
            if (modifiedUri.scheme !== 'file') {
                return;
            }
            const originalUri = modifiedUri.with({ scheme: 'git', query: '~' });
            const originalDocument = yield vscode_1.workspace.openTextDocument(originalUri);
            const diffs = yield vscode_1.computeDiff(originalDocument, modifiedDocument);
            const selections = textEditor.selections;
            const selectedDiffs = diffs.filter(diff => {
                const modifiedRange = diff.modifiedEndLineNumber === 0
                    ? new vscode_1.Range(modifiedDocument.lineAt(diff.modifiedStartLineNumber - 1).range.end, modifiedDocument.lineAt(diff.modifiedStartLineNumber).range.start)
                    : new vscode_1.Range(modifiedDocument.lineAt(diff.modifiedStartLineNumber - 1).range.start, modifiedDocument.lineAt(diff.modifiedEndLineNumber - 1).range.end);
                return selections.some(selection => !!selection.intersection(modifiedRange));
            });
            if (!selectedDiffs.length) {
                return;
            }
            const result = staging.applyChanges(originalDocument, modifiedDocument, selectedDiffs);
            yield this.model.stage(modifiedUri, result);
        });
    }
    revertSelectedRanges() {
        return __awaiter(this, void 0, void 0, function* () {
            const textEditor = vscode_1.window.activeTextEditor;
            if (!textEditor) {
                return;
            }
            const modifiedDocument = textEditor.document;
            const modifiedUri = modifiedDocument.uri;
            if (modifiedUri.scheme !== 'file') {
                return;
            }
            const originalUri = modifiedUri.with({ scheme: 'git', query: '~' });
            const originalDocument = yield vscode_1.workspace.openTextDocument(originalUri);
            const diffs = yield vscode_1.computeDiff(originalDocument, modifiedDocument);
            const selections = textEditor.selections;
            const selectedDiffs = diffs.filter(diff => {
                const modifiedRange = diff.modifiedEndLineNumber === 0
                    ? new vscode_1.Range(modifiedDocument.lineAt(diff.modifiedStartLineNumber - 1).range.end, modifiedDocument.lineAt(diff.modifiedStartLineNumber).range.start)
                    : new vscode_1.Range(modifiedDocument.lineAt(diff.modifiedStartLineNumber - 1).range.start, modifiedDocument.lineAt(diff.modifiedEndLineNumber - 1).range.end);
                return selections.every(selection => !selection.intersection(modifiedRange));
            });
            if (selectedDiffs.length === diffs.length) {
                return;
            }
            const basename = path.basename(modifiedUri.fsPath);
            const message = localize(7, null, basename);
            const yes = localize(8, null);
            const pick = yield vscode_1.window.showWarningMessage(message, { modal: true }, yes);
            if (pick !== yes) {
                return;
            }
            const result = staging.applyChanges(originalDocument, modifiedDocument, selectedDiffs);
            const edit = new vscode_1.WorkspaceEdit();
            edit.replace(modifiedUri, new vscode_1.Range(new vscode_1.Position(0, 0), modifiedDocument.lineAt(modifiedDocument.lineCount - 1).range.end), result);
            vscode_1.workspace.applyEdit(edit);
        });
    }
    unstage(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = this.resolveSCMResource(uri);
            if (!resource) {
                return;
            }
            return yield this.model.revertFiles(resource);
        });
    }
    unstageAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.revertFiles();
        });
    }
    unstageSelectedRanges() {
        return __awaiter(this, void 0, void 0, function* () {
            const textEditor = vscode_1.window.activeTextEditor;
            if (!textEditor) {
                return;
            }
            const modifiedDocument = textEditor.document;
            const modifiedUri = modifiedDocument.uri;
            if (modifiedUri.scheme !== 'git' || modifiedUri.query !== '') {
                return;
            }
            const originalUri = modifiedUri.with({ scheme: 'git', query: 'HEAD' });
            const originalDocument = yield vscode_1.workspace.openTextDocument(originalUri);
            const diffs = yield vscode_1.computeDiff(originalDocument, modifiedDocument);
            const selections = textEditor.selections;
            const selectedDiffs = diffs.filter(diff => {
                const modifiedRange = diff.modifiedEndLineNumber === 0
                    ? new vscode_1.Range(diff.modifiedStartLineNumber - 1, 0, diff.modifiedStartLineNumber - 1, 0)
                    : new vscode_1.Range(modifiedDocument.lineAt(diff.modifiedStartLineNumber - 1).range.start, modifiedDocument.lineAt(diff.modifiedEndLineNumber - 1).range.end);
                return selections.some(selection => !!selection.intersection(modifiedRange));
            });
            if (!selectedDiffs.length) {
                return;
            }
            const invertedDiffs = selectedDiffs.map(c => ({
                modifiedStartLineNumber: c.originalStartLineNumber,
                modifiedEndLineNumber: c.originalEndLineNumber,
                originalStartLineNumber: c.modifiedStartLineNumber,
                originalEndLineNumber: c.modifiedEndLineNumber
            }));
            const result = staging.applyChanges(modifiedDocument, originalDocument, invertedDiffs);
            yield this.model.stage(modifiedUri, result);
        });
    }
    clean(uri) {
        return __awaiter(this, void 0, void 0, function* () {
            const resource = this.resolveSCMResource(uri);
            if (!resource) {
                return;
            }
            const basename = path.basename(resource.uri.fsPath);
            const message = localize(9, null, basename);
            const yes = localize(10, null);
            const pick = yield vscode_1.window.showWarningMessage(message, { modal: true }, yes);
            if (pick !== yes) {
                return;
            }
            yield this.model.clean(resource);
        });
    }
    cleanAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const message = localize(11, null);
            const yes = localize(12, null);
            const pick = yield vscode_1.window.showWarningMessage(message, { modal: true }, yes);
            if (pick !== yes) {
                return;
            }
            yield this.model.clean(...this.model.workingTreeGroup.resources);
        });
    }
    smartCommit(getCommitMessage, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!opts) {
                opts = { all: this.model.indexGroup.resources.length === 0 };
            }
            if (
            // no changes
            (this.model.indexGroup.resources.length === 0 && this.model.workingTreeGroup.resources.length === 0)
                || (!opts.all && this.model.indexGroup.resources.length === 0)) {
                vscode_1.window.showInformationMessage(localize(13, null));
                return false;
            }
            const message = yield getCommitMessage();
            if (!message) {
                // TODO@joao: show modal dialog to confirm empty message commit
                return false;
            }
            yield this.model.commit(message, opts);
            return true;
        });
    }
    commitWithAnyInput(opts) {
        return __awaiter(this, void 0, void 0, function* () {
            const message = vscode_1.scm.inputBox.value;
            const getCommitMessage = () => __awaiter(this, void 0, void 0, function* () {
                if (message) {
                    return message;
                }
                return yield vscode_1.window.showInputBox({
                    placeHolder: localize(14, null),
                    prompt: localize(15, null),
                    ignoreFocusOut: true
                });
            });
            const didCommit = yield this.smartCommit(getCommitMessage, opts);
            if (message && didCommit) {
                vscode_1.scm.inputBox.value = yield this.model.getCommitTemplate();
            }
        });
    }
    commit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commitWithAnyInput();
        });
    }
    commitWithInput() {
        return __awaiter(this, void 0, void 0, function* () {
            const didCommit = yield this.smartCommit(() => __awaiter(this, void 0, void 0, function* () { return vscode_1.scm.inputBox.value; }));
            if (didCommit) {
                vscode_1.scm.inputBox.value = yield this.model.getCommitTemplate();
            }
        });
    }
    commitStaged() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commitWithAnyInput({ all: false });
        });
    }
    commitStagedSigned() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commitWithAnyInput({ all: false, signoff: true });
        });
    }
    commitAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commitWithAnyInput({ all: true });
        });
    }
    commitAllSigned() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.commitWithAnyInput({ all: true, signoff: true });
        });
    }
    undoCommit() {
        return __awaiter(this, void 0, void 0, function* () {
            const HEAD = this.model.HEAD;
            if (!HEAD || !HEAD.commit) {
                return;
            }
            const commit = yield this.model.getCommit('HEAD');
            yield this.model.reset('HEAD~');
            vscode_1.scm.inputBox.value = commit.message;
        });
    }
    checkout() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = vscode_1.workspace.getConfiguration('git');
            const checkoutType = config.get('checkoutType') || 'all';
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
                placeHolder: localize(16, null),
                prompt: localize(17, null),
                ignoreFocusOut: true
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
            const remotes = this.model.remotes;
            if (remotes.length === 0) {
                vscode_1.window.showWarningMessage(localize(18, null));
                return;
            }
            yield this.model.pull();
        });
    }
    pullRebase() {
        return __awaiter(this, void 0, void 0, function* () {
            const remotes = this.model.remotes;
            if (remotes.length === 0) {
                vscode_1.window.showWarningMessage(localize(19, null));
                return;
            }
            yield this.model.pull(true);
        });
    }
    push() {
        return __awaiter(this, void 0, void 0, function* () {
            const remotes = this.model.remotes;
            if (remotes.length === 0) {
                vscode_1.window.showWarningMessage(localize(20, null));
                return;
            }
            yield this.model.push();
        });
    }
    pushTo() {
        return __awaiter(this, void 0, void 0, function* () {
            const remotes = this.model.remotes;
            if (remotes.length === 0) {
                vscode_1.window.showWarningMessage(localize(21, null));
                return;
            }
            if (!this.model.HEAD || !this.model.HEAD.name) {
                vscode_1.window.showWarningMessage(localize(22, null));
                return;
            }
            const branchName = this.model.HEAD.name;
            const picks = remotes.map(r => ({ label: r.name, description: r.url }));
            const placeHolder = localize(23, null, branchName);
            const pick = yield vscode_1.window.showQuickPick(picks, { placeHolder });
            if (!pick) {
                return;
            }
            this.model.push(pick.label, branchName);
        });
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            const HEAD = this.model.HEAD;
            if (!HEAD || !HEAD.upstream) {
                return;
            }
            const config = vscode_1.workspace.getConfiguration('git');
            const shouldPrompt = config.get('confirmSync') === true;
            if (shouldPrompt) {
                const message = localize(24, null, HEAD.upstream);
                const yes = localize(25, null);
                const neverAgain = localize(26, null);
                const pick = yield vscode_1.window.showWarningMessage(message, { modal: true }, yes, neverAgain);
                if (pick === neverAgain) {
                    yield config.update('confirmSync', false, true);
                }
                else if (pick !== yes) {
                    return;
                }
            }
            yield this.model.sync();
        });
    }
    publish() {
        return __awaiter(this, void 0, void 0, function* () {
            const remotes = this.model.remotes;
            if (remotes.length === 0) {
                vscode_1.window.showWarningMessage(localize(27, null));
                return;
            }
            const branchName = this.model.HEAD && this.model.HEAD.name || '';
            const picks = this.model.remotes.map(r => r.name);
            const placeHolder = localize(28, null, branchName);
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
    createCommand(id, method) {
        return (...args) => {
            if (!this.model) {
                vscode_1.window.showInformationMessage(localize(29, null));
                return;
            }
            this.telemetryReporter.sendTelemetryEvent('git.command', { command: id });
            const result = Promise.resolve(method.apply(this, args));
            return result.catch((err) => __awaiter(this, void 0, void 0, function* () {
                let message;
                switch (err.gitErrorCode) {
                    case 'DirtyWorkTree':
                        message = localize(30, null);
                        break;
                    default:
                        const lines = (err.stderr || err.message || String(err))
                            .replace(/^error: /, '')
                            .split(/[\r\n]/)
                            .filter(line => !!line);
                        message = lines[0] || 'Git error';
                        break;
                }
                if (!message) {
                    console.error(err);
                    return;
                }
                const outputChannel = this.outputChannel;
                const openOutputChannelChoice = localize(31, null);
                const choice = yield vscode_1.window.showErrorMessage(message, openOutputChannelChoice);
                if (choice === openOutputChannelChoice) {
                    outputChannel.show();
                }
            }));
        };
    }
    resolveSCMResource(uri) {
        uri = uri || vscode_1.window.activeTextEditor && vscode_1.window.activeTextEditor.document.uri;
        if (!uri) {
            return;
        }
        if (uri.scheme === 'scm' && uri.authority === 'git') {
            const resource = vscode_1.scm.getResourceFromURI(uri);
            return resource instanceof model_1.Resource ? resource : undefined;
        }
        if (uri.scheme === 'git') {
            uri = uri.with({ scheme: 'file' });
        }
        if (uri.scheme === 'file') {
            const uriString = uri.toString();
            return this.model.workingTreeGroup.resources.filter(r => r.uri.toString() === uriString)[0]
                || this.model.indexGroup.resources.filter(r => r.uri.toString() === uriString)[0];
        }
    }
    dispose() {
        this.disposables.forEach(d => d.dispose());
    }
}
__decorate([
    command('git.refresh')
], CommandCenter.prototype, "refresh", null);
__decorate([
    command('git.clone')
], CommandCenter.prototype, "clone", null);
__decorate([
    command('git.init')
], CommandCenter.prototype, "init", null);
__decorate([
    command('git.openFile')
], CommandCenter.prototype, "openFile", null);
__decorate([
    command('git.openChange')
], CommandCenter.prototype, "openChange", null);
__decorate([
    command('git.stage')
], CommandCenter.prototype, "stage", null);
__decorate([
    command('git.stageAll')
], CommandCenter.prototype, "stageAll", null);
__decorate([
    command('git.stageSelectedRanges')
], CommandCenter.prototype, "stageSelectedRanges", null);
__decorate([
    command('git.revertSelectedRanges')
], CommandCenter.prototype, "revertSelectedRanges", null);
__decorate([
    command('git.unstage')
], CommandCenter.prototype, "unstage", null);
__decorate([
    command('git.unstageAll')
], CommandCenter.prototype, "unstageAll", null);
__decorate([
    command('git.unstageSelectedRanges')
], CommandCenter.prototype, "unstageSelectedRanges", null);
__decorate([
    command('git.clean')
], CommandCenter.prototype, "clean", null);
__decorate([
    command('git.cleanAll')
], CommandCenter.prototype, "cleanAll", null);
__decorate([
    command('git.commit')
], CommandCenter.prototype, "commit", null);
__decorate([
    command('git.commitWithInput')
], CommandCenter.prototype, "commitWithInput", null);
__decorate([
    command('git.commitStaged')
], CommandCenter.prototype, "commitStaged", null);
__decorate([
    command('git.commitStagedSigned')
], CommandCenter.prototype, "commitStagedSigned", null);
__decorate([
    command('git.commitAll')
], CommandCenter.prototype, "commitAll", null);
__decorate([
    command('git.commitAllSigned')
], CommandCenter.prototype, "commitAllSigned", null);
__decorate([
    command('git.undoCommit')
], CommandCenter.prototype, "undoCommit", null);
__decorate([
    command('git.checkout')
], CommandCenter.prototype, "checkout", null);
__decorate([
    command('git.branch')
], CommandCenter.prototype, "branch", null);
__decorate([
    command('git.pull')
], CommandCenter.prototype, "pull", null);
__decorate([
    command('git.pullRebase')
], CommandCenter.prototype, "pullRebase", null);
__decorate([
    command('git.push')
], CommandCenter.prototype, "push", null);
__decorate([
    command('git.pushTo')
], CommandCenter.prototype, "pushTo", null);
__decorate([
    command('git.sync')
], CommandCenter.prototype, "sync", null);
__decorate([
    command('git.publish')
], CommandCenter.prototype, "publish", null);
__decorate([
    command('git.showOutput')
], CommandCenter.prototype, "showOutput", null);
exports.CommandCenter = CommandCenter;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\git\out/commands.js.map
