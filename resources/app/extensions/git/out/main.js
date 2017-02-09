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
const git_1 = require("./git");
const model_1 = require("./model");
const scmProvider_1 = require("./scmProvider");
const commands_1 = require("./commands");
const statusbar_1 = require("./statusbar");
const util_1 = require("./util");
const contentProvider_1 = require("./contentProvider");
const autofetch_1 = require("./autofetch");
const merge_1 = require("./merge");
const nls = require("vscode-nls");
const localize = nls.config()(__filename);
function init(disposables) {
    return __awaiter(this, void 0, void 0, function* () {
        const rootPath = vscode_1.workspace.rootPath;
        if (!rootPath) {
            return;
        }
        const fsWatcher = vscode_1.workspace.createFileSystemWatcher('**');
        const onWorkspaceChange = util_1.anyEvent(fsWatcher.onDidChange, fsWatcher.onDidCreate, fsWatcher.onDidDelete);
        const onGitChange = util_1.filterEvent(onWorkspaceChange, uri => /^\.git\//.test(vscode_1.workspace.asRelativePath(uri)));
        const pathHint = vscode_1.workspace.getConfiguration('git').get('path');
        const info = yield git_1.findGit(pathHint);
        const git = new git_1.Git({ gitPath: info.path, version: info.version });
        const repository = git.open(rootPath);
        const repositoryRoot = yield repository.getRoot();
        const model = new model_1.Model(repositoryRoot, repository, onWorkspaceChange);
        const outputChannel = vscode_1.window.createOutputChannel('Git');
        outputChannel.appendLine(localize(0, null, info.version, info.path));
        git.onOutput(str => outputChannel.append(str), null, disposables);
        const commandCenter = new commands_1.CommandCenter(model, outputChannel);
        const provider = new scmProvider_1.GitSCMProvider(model, commandCenter);
        const contentProvider = new contentProvider_1.GitContentProvider(git, rootPath, onGitChange);
        const checkoutStatusBar = new statusbar_1.CheckoutStatusBar(model);
        const syncStatusBar = new statusbar_1.SyncStatusBar(model);
        const autoFetcher = new autofetch_1.AutoFetcher(model);
        const mergeDecorator = new merge_1.MergeDecorator(model);
        disposables.push(commandCenter, provider, contentProvider, outputChannel, fsWatcher, checkoutStatusBar, syncStatusBar, autoFetcher, mergeDecorator);
    });
}
function activate(context) {
    if (!vscode_1.workspace.rootPath) {
        return;
    }
    const disposables = [];
    context.subscriptions.push(new vscode_1.Disposable(() => vscode_1.Disposable.from(...disposables).dispose()));
    init(disposables)
        .catch(err => console.error(err));
}
exports.activate = activate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\git\out/main.js.map
