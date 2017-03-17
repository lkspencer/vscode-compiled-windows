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
const contentProvider_1 = require("./contentProvider");
const autofetch_1 = require("./autofetch");
const merge_1 = require("./merge");
const askpass_1 = require("./askpass");
const vscode_extension_telemetry_1 = require("vscode-extension-telemetry");
const nls = require("vscode-nls");
const localize = nls.config()(__filename);
function init(context, disposables) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, version, aiKey } = require(context.asAbsolutePath('./package.json'));
        const telemetryReporter = new vscode_extension_telemetry_1.default(name, version, aiKey);
        disposables.push(telemetryReporter);
        const outputChannel = vscode_1.window.createOutputChannel('Git');
        disposables.push(outputChannel);
        const config = vscode_1.workspace.getConfiguration('git');
        const enabled = config.get('enabled') === true;
        const workspaceRootPath = vscode_1.workspace.rootPath;
        if (!workspaceRootPath || !enabled) {
            const commandCenter = new commands_1.CommandCenter(undefined, outputChannel, telemetryReporter);
            disposables.push(commandCenter);
            return;
        }
        const pathHint = vscode_1.workspace.getConfiguration('git').get('path');
        const info = yield git_1.findGit(pathHint);
        const git = new git_1.Git({ gitPath: info.path, version: info.version });
        const askpass = new askpass_1.Askpass();
        const model = new model_1.Model(git, workspaceRootPath, askpass);
        outputChannel.appendLine(localize(0, null, info.version, info.path));
        git.onOutput(str => outputChannel.append(str), null, disposables);
        const commandCenter = new commands_1.CommandCenter(model, outputChannel, telemetryReporter);
        const provider = new scmProvider_1.GitSCMProvider(model, commandCenter);
        const contentProvider = new contentProvider_1.GitContentProvider(model);
        const checkoutStatusBar = new statusbar_1.CheckoutStatusBar(model);
        const syncStatusBar = new statusbar_1.SyncStatusBar(model);
        const autoFetcher = new autofetch_1.AutoFetcher(model);
        const mergeDecorator = new merge_1.MergeDecorator(model);
        disposables.push(commandCenter, provider, contentProvider, checkoutStatusBar, syncStatusBar, autoFetcher, mergeDecorator, model);
        if (/^[01]/.test(info.version)) {
            const update = localize(1, null);
            const choice = yield vscode_1.window.showWarningMessage(localize(2, null, info.version), update);
            if (choice === update) {
                vscode_1.commands.executeCommand('vscode.open', vscode_1.Uri.parse('https://git-scm.com/'));
            }
        }
        vscode_1.scm.inputBox.value = yield model.getCommitTemplate();
    });
}
function activate(context) {
    if (!vscode_1.workspace.rootPath) {
        return;
    }
    const disposables = [];
    context.subscriptions.push(new vscode_1.Disposable(() => vscode_1.Disposable.from(...disposables).dispose()));
    init(context, disposables)
        .catch(err => console.error(err));
}
exports.activate = activate;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\git\out/main.js.map
