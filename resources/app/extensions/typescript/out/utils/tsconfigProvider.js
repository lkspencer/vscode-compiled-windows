"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const vscode = require("vscode");
class TsConfigProvider {
    async getConfigsForWorkspace() {
        if (!vscode.workspace.workspaceFolders) {
            return [];
        }
        const configs = new Map();
        for (const config of await vscode.workspace.findFiles('**/tsconfig*.json', '**/node_modules/**')) {
            const root = vscode.workspace.getWorkspaceFolder(config);
            if (root) {
                configs.set(config.fsPath, {
                    path: config.fsPath,
                    workspaceFolder: root
                });
            }
        }
        return configs.values();
    }
}
exports.default = TsConfigProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/extensions\typescript\out/utils\tsconfigProvider.js.map
