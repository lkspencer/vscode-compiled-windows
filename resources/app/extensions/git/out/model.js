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
const util_1 = require("./util");
const decorators_1 = require("./decorators");
const watch_1 = require("./watch");
const path = require("path");
const nls = require("vscode-nls");
const localize = nls.loadMessageBundle(__filename);
const iconsRootPath = path.join(path.dirname(__dirname), 'resources', 'icons');
function getIconUri(iconName, theme) {
    return vscode_1.Uri.file(path.join(iconsRootPath, theme, `${iconName}.svg`));
}
var Status;
(function (Status) {
    Status[Status["INDEX_MODIFIED"] = 0] = "INDEX_MODIFIED";
    Status[Status["INDEX_ADDED"] = 1] = "INDEX_ADDED";
    Status[Status["INDEX_DELETED"] = 2] = "INDEX_DELETED";
    Status[Status["INDEX_RENAMED"] = 3] = "INDEX_RENAMED";
    Status[Status["INDEX_COPIED"] = 4] = "INDEX_COPIED";
    Status[Status["MODIFIED"] = 5] = "MODIFIED";
    Status[Status["DELETED"] = 6] = "DELETED";
    Status[Status["UNTRACKED"] = 7] = "UNTRACKED";
    Status[Status["IGNORED"] = 8] = "IGNORED";
    Status[Status["ADDED_BY_US"] = 9] = "ADDED_BY_US";
    Status[Status["ADDED_BY_THEM"] = 10] = "ADDED_BY_THEM";
    Status[Status["DELETED_BY_US"] = 11] = "DELETED_BY_US";
    Status[Status["DELETED_BY_THEM"] = 12] = "DELETED_BY_THEM";
    Status[Status["BOTH_ADDED"] = 13] = "BOTH_ADDED";
    Status[Status["BOTH_DELETED"] = 14] = "BOTH_DELETED";
    Status[Status["BOTH_MODIFIED"] = 15] = "BOTH_MODIFIED";
})(Status = exports.Status || (exports.Status = {}));
class Resource {
    constructor(_uri, _type) {
        this._uri = _uri;
        this._type = _type;
    }
    get uri() { return this._uri; }
    get type() { return this._type; }
    getIconPath(theme) {
        switch (this.type) {
            case Status.INDEX_MODIFIED: return Resource.Icons[theme].Modified;
            case Status.MODIFIED: return Resource.Icons[theme].Modified;
            case Status.INDEX_ADDED: return Resource.Icons[theme].Added;
            case Status.INDEX_DELETED: return Resource.Icons[theme].Deleted;
            case Status.DELETED: return Resource.Icons[theme].Deleted;
            case Status.INDEX_RENAMED: return Resource.Icons[theme].Renamed;
            case Status.INDEX_COPIED: return Resource.Icons[theme].Copied;
            case Status.UNTRACKED: return Resource.Icons[theme].Untracked;
            case Status.IGNORED: return Resource.Icons[theme].Ignored;
            case Status.BOTH_DELETED: return Resource.Icons[theme].Conflict;
            case Status.ADDED_BY_US: return Resource.Icons[theme].Conflict;
            case Status.DELETED_BY_THEM: return Resource.Icons[theme].Conflict;
            case Status.ADDED_BY_THEM: return Resource.Icons[theme].Conflict;
            case Status.DELETED_BY_US: return Resource.Icons[theme].Conflict;
            case Status.BOTH_ADDED: return Resource.Icons[theme].Conflict;
            case Status.BOTH_MODIFIED: return Resource.Icons[theme].Conflict;
            default: return void 0;
        }
    }
    get strikeThrough() {
        switch (this.type) {
            case Status.DELETED:
            case Status.BOTH_DELETED:
            case Status.DELETED_BY_THEM:
            case Status.DELETED_BY_US:
                return true;
            default:
                return false;
        }
    }
    get decorations() {
        const light = { iconPath: this.getIconPath('light') };
        const dark = { iconPath: this.getIconPath('dark') };
        return { strikeThrough: this.strikeThrough, light, dark };
    }
}
Resource.Icons = {
    light: {
        Modified: getIconUri('status-modified', 'light'),
        Added: getIconUri('status-added', 'light'),
        Deleted: getIconUri('status-deleted', 'light'),
        Renamed: getIconUri('status-renamed', 'light'),
        Copied: getIconUri('status-copied', 'light'),
        Untracked: getIconUri('status-untracked', 'light'),
        Ignored: getIconUri('status-ignored', 'light'),
        Conflict: getIconUri('status-conflict', 'light'),
    },
    dark: {
        Modified: getIconUri('status-modified', 'dark'),
        Added: getIconUri('status-added', 'dark'),
        Deleted: getIconUri('status-deleted', 'dark'),
        Renamed: getIconUri('status-renamed', 'dark'),
        Copied: getIconUri('status-copied', 'dark'),
        Untracked: getIconUri('status-untracked', 'dark'),
        Ignored: getIconUri('status-ignored', 'dark'),
        Conflict: getIconUri('status-conflict', 'dark')
    }
};
exports.Resource = Resource;
class ResourceGroup {
    constructor(_id, _label, _resources) {
        this._id = _id;
        this._label = _label;
        this._resources = _resources;
    }
    get id() { return this._id; }
    get label() { return this._label; }
    get resources() { return this._resources; }
}
exports.ResourceGroup = ResourceGroup;
class MergeGroup extends ResourceGroup {
    constructor(resources) {
        super(MergeGroup.ID, localize(0, null), resources);
    }
}
MergeGroup.ID = 'merge';
exports.MergeGroup = MergeGroup;
class IndexGroup extends ResourceGroup {
    constructor(resources) {
        super(IndexGroup.ID, localize(1, null), resources);
    }
}
IndexGroup.ID = 'index';
exports.IndexGroup = IndexGroup;
class WorkingTreeGroup extends ResourceGroup {
    constructor(resources) {
        super(WorkingTreeGroup.ID, localize(2, null), resources);
    }
}
WorkingTreeGroup.ID = 'workingTree';
exports.WorkingTreeGroup = WorkingTreeGroup;
var Operation;
(function (Operation) {
    Operation[Operation["Status"] = 1] = "Status";
    Operation[Operation["Stage"] = 2] = "Stage";
    Operation[Operation["Unstage"] = 4] = "Unstage";
    Operation[Operation["Commit"] = 8] = "Commit";
    Operation[Operation["Clean"] = 16] = "Clean";
    Operation[Operation["Branch"] = 32] = "Branch";
    Operation[Operation["Checkout"] = 64] = "Checkout";
    Operation[Operation["Fetch"] = 128] = "Fetch";
    Operation[Operation["Sync"] = 256] = "Sync";
    Operation[Operation["Push"] = 512] = "Push";
})(Operation = exports.Operation || (exports.Operation = {}));
class OperationsImpl {
    constructor(operations = 0) {
        this.operations = operations;
        // noop
    }
    start(operation) {
        return new OperationsImpl(this.operations | operation);
    }
    end(operation) {
        return new OperationsImpl(this.operations & ~operation);
    }
    isRunning(operation) {
        return (this.operations & operation) !== 0;
    }
    isIdle() {
        return this.operations === 0;
    }
}
class Model {
    constructor(_repositoryRoot, repository, onWorkspaceChange) {
        this._repositoryRoot = _repositoryRoot;
        this.repository = repository;
        this._onDidChange = new vscode_1.EventEmitter();
        this.onDidChange = this._onDidChange.event;
        this._onRunOperation = new vscode_1.EventEmitter();
        this.onRunOperation = this._onRunOperation.event;
        this._onDidRunOperation = new vscode_1.EventEmitter();
        this.onDidRunOperation = this._onDidRunOperation.event;
        this._mergeGroup = new MergeGroup([]);
        this._indexGroup = new IndexGroup([]);
        this._workingTreeGroup = new WorkingTreeGroup([]);
        this._operations = new OperationsImpl();
        this.disposables = [];
        this._refs = [];
        this._remotes = [];
        /* We use the native Node `watch` for faster, non debounced events.
         * That way we hopefully get the events during the operations we're
         * performing, thus sparing useless `git status` calls to refresh
         * the model's state.
         */
        const gitPath = path.join(_repositoryRoot, '.git');
        const { event, disposable } = watch_1.watch(gitPath);
        const onGitChange = util_1.mapEvent(event, ({ filename }) => vscode_1.Uri.file(path.join(gitPath, filename)));
        const onRelevantGitChange = util_1.filterEvent(onGitChange, uri => !/\/\.git\/index\.lock$/.test(uri.fsPath));
        onRelevantGitChange(this.onFSChange, this, this.disposables);
        this.disposables.push(disposable);
        const onNonGitChange = util_1.filterEvent(onWorkspaceChange, uri => !/\/\.git\//.test(uri.fsPath));
        onNonGitChange(this.onFSChange, this, this.disposables);
        this.status();
    }
    get onDidChangeOperations() {
        return util_1.anyEvent(this.onRunOperation, this.onDidRunOperation);
    }
    get mergeGroup() { return this._mergeGroup; }
    get indexGroup() { return this._indexGroup; }
    get workingTreeGroup() { return this._workingTreeGroup; }
    get resources() {
        const result = [];
        if (this._mergeGroup.resources.length > 0) {
            result.push(this._mergeGroup);
        }
        if (this._indexGroup.resources.length > 0) {
            result.push(this._indexGroup);
        }
        result.push(this._workingTreeGroup);
        return result;
    }
    get operations() { return this._operations; }
    get repositoryRoot() {
        return this._repositoryRoot;
    }
    get HEAD() {
        return this._HEAD;
    }
    get refs() {
        return this._refs;
    }
    get remotes() {
        return this._remotes;
    }
    status() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Status);
        });
    }
    stage(...resources) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Stage, () => this.repository.add(resources.map(r => r.uri.fsPath)));
        });
    }
    unstage(...resources) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Unstage, () => this.repository.revertFiles('HEAD', resources.map(r => r.uri.fsPath)));
        });
    }
    commit(message, opts = Object.create(null)) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Commit, () => __awaiter(this, void 0, void 0, function* () {
                if (opts.all) {
                    yield this.repository.add([]);
                }
                yield this.repository.commit(message, opts);
            }));
        });
    }
    clean(...resources) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Clean, () => __awaiter(this, void 0, void 0, function* () {
                const toClean = [];
                const toCheckout = [];
                resources.forEach(r => {
                    switch (r.type) {
                        case Status.UNTRACKED:
                        case Status.IGNORED:
                            toClean.push(r.uri.fsPath);
                            break;
                        default:
                            toCheckout.push(r.uri.fsPath);
                            break;
                    }
                });
                const promises = [];
                if (toClean.length > 0) {
                    promises.push(this.repository.clean(toClean));
                }
                if (toCheckout.length > 0) {
                    promises.push(this.repository.checkout('', toCheckout));
                }
                yield Promise.all(promises);
            }));
        });
    }
    branch(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Branch, () => this.repository.branch(name, true));
        });
    }
    checkout(treeish) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Checkout, () => this.repository.checkout(treeish, []));
        });
    }
    fetch() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Fetch, () => this.repository.fetch());
        });
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Sync, () => this.repository.sync());
        });
    }
    push(remote, name, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.run(Operation.Push, () => this.repository.push(remote, name, options));
        });
    }
    run(operation, fn = () => Promise.resolve()) {
        return __awaiter(this, void 0, void 0, function* () {
            return vscode_1.window.withScmProgress(() => __awaiter(this, void 0, void 0, function* () {
                this._operations = this._operations.start(operation);
                this._onRunOperation.fire(operation);
                try {
                    yield fn();
                    yield this.update();
                }
                finally {
                    this._operations = this._operations.end(operation);
                    this._onDidRunOperation.fire(operation);
                }
            }));
        });
    }
    update() {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield this.repository.getStatus();
            let HEAD;
            try {
                HEAD = yield this.repository.getHEAD();
                if (HEAD.name) {
                    try {
                        HEAD = yield this.repository.getBranch(HEAD.name);
                    }
                    catch (err) {
                    }
                }
            }
            catch (err) {
            }
            const [refs, remotes] = yield Promise.all([this.repository.getRefs(), this.repository.getRemotes()]);
            this._HEAD = HEAD;
            this._refs = refs;
            this._remotes = remotes;
            const index = [];
            const workingTree = [];
            const merge = [];
            status.forEach(raw => {
                const uri = vscode_1.Uri.file(path.join(this.repositoryRoot, raw.path));
                switch (raw.x + raw.y) {
                    case '??': return workingTree.push(new Resource(uri, Status.UNTRACKED));
                    case '!!': return workingTree.push(new Resource(uri, Status.IGNORED));
                    case 'DD': return merge.push(new Resource(uri, Status.BOTH_DELETED));
                    case 'AU': return merge.push(new Resource(uri, Status.ADDED_BY_US));
                    case 'UD': return merge.push(new Resource(uri, Status.DELETED_BY_THEM));
                    case 'UA': return merge.push(new Resource(uri, Status.ADDED_BY_THEM));
                    case 'DU': return merge.push(new Resource(uri, Status.DELETED_BY_US));
                    case 'AA': return merge.push(new Resource(uri, Status.BOTH_ADDED));
                    case 'UU': return merge.push(new Resource(uri, Status.BOTH_MODIFIED));
                }
                let isModifiedInIndex = false;
                switch (raw.x) {
                    case 'M':
                        index.push(new Resource(uri, Status.INDEX_MODIFIED));
                        isModifiedInIndex = true;
                        break;
                    case 'A':
                        index.push(new Resource(uri, Status.INDEX_ADDED));
                        break;
                    case 'D':
                        index.push(new Resource(uri, Status.INDEX_DELETED));
                        break;
                    case 'R':
                        index.push(new Resource(uri, Status.INDEX_RENAMED /*, raw.rename*/));
                        break;
                    case 'C':
                        index.push(new Resource(uri, Status.INDEX_COPIED));
                        break;
                }
                switch (raw.y) {
                    case 'M':
                        workingTree.push(new Resource(uri, Status.MODIFIED /*, raw.rename*/));
                        break;
                    case 'D':
                        workingTree.push(new Resource(uri, Status.DELETED /*, raw.rename*/));
                        break;
                }
            });
            this._mergeGroup = new MergeGroup(merge);
            this._indexGroup = new IndexGroup(index);
            this._workingTreeGroup = new WorkingTreeGroup(workingTree);
            this._onDidChange.fire(this.resources);
        });
    }
    onFSChange(uri) {
        if (!this.operations.isIdle()) {
            return;
        }
        this.eventuallyUpdateWhenIdleAndWait();
    }
    eventuallyUpdateWhenIdleAndWait() {
        this.updateWhenIdleAndWait();
    }
    updateWhenIdleAndWait() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.whenIdle();
            yield this.status();
            yield new Promise(c => setTimeout(c, 5000));
        });
    }
    whenIdle() {
        return __awaiter(this, void 0, void 0, function* () {
            while (!this.operations.isIdle()) {
                yield util_1.eventToPromise(this.onDidRunOperation);
            }
        });
    }
}
__decorate([
    decorators_1.memoize
], Model.prototype, "onDidChangeOperations", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "status", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "stage", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "unstage", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "commit", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "clean", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "branch", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "checkout", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "fetch", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "sync", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "push", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "update", null);
__decorate([
    decorators_1.debounce(1000)
], Model.prototype, "eventuallyUpdateWhenIdleAndWait", null);
__decorate([
    decorators_1.throttle
], Model.prototype, "updateWhenIdleAndWait", null);
exports.Model = Model;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\git\out/model.js.map
