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
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const vscode = require("vscode");
let taskProvider;
function activate(_context) {
    let workspaceRoot = vscode.workspace.rootPath;
    if (!workspaceRoot) {
        return;
    }
    function onConfigurationChanged() {
        let autoDetect = vscode.workspace.getConfiguration('npm').get('autoDetect');
        if (taskProvider && autoDetect === 'off') {
            taskProvider.dispose();
            taskProvider = undefined;
        }
        else if (!taskProvider && autoDetect === 'on') {
            taskProvider = vscode.workspace.registerTaskProvider({
                provideTasks: () => {
                    return getNpmScriptsAsTasks();
                }
            });
        }
    }
    vscode.workspace.onDidChangeConfiguration(onConfigurationChanged);
    onConfigurationChanged();
}
exports.activate = activate;
function deactivate() {
    if (taskProvider) {
        taskProvider.dispose();
    }
}
exports.deactivate = deactivate;
function exists(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, _reject) => {
            fs.exists(file, (value) => {
                resolve(value);
            });
        });
    });
}
function readFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            fs.readFile(file, (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data.toString());
            });
        });
    });
}
function getNpmScriptsAsTasks() {
    return __awaiter(this, void 0, void 0, function* () {
        let workspaceRoot = vscode.workspace.rootPath;
        let emptyTasks = [];
        if (!workspaceRoot) {
            return emptyTasks;
        }
        let packageJson = path.join(workspaceRoot, 'package.json');
        if (!(yield exists(packageJson))) {
            return emptyTasks;
        }
        try {
            var contents = yield readFile(packageJson);
            var json = JSON.parse(contents);
            if (!json.scripts) {
                return Promise.resolve(emptyTasks);
            }
            const result = [];
            Object.keys(json.scripts).forEach(each => {
                const task = new vscode.ShellTask(`run ${each}`, `npm run ${each}`);
                const lowerCaseTaskName = each.toLowerCase();
                if (lowerCaseTaskName === 'build') {
                    task.group = vscode.TaskGroup.Build;
                }
                else if (lowerCaseTaskName === 'test') {
                    task.group = vscode.TaskGroup.Test;
                }
                result.push(task);
            });
            // add some 'well known' npm tasks
            result.push(new vscode.ShellTask(`install`, `npm install`));
            return Promise.resolve(result);
        }
        catch (e) {
            return Promise.resolve(emptyTasks);
        }
    });
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/extensions\npm\out/main.js.map
