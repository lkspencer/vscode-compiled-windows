"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class ShowPreviewSecuritySelectorCommand {
    constructor(previewSecuritySelector) {
        this.previewSecuritySelector = previewSecuritySelector;
        this.id = 'markdown.showPreviewSecuritySelector';
    }
    execute(resource) {
        if (resource) {
            const source = vscode.Uri.parse(resource).query;
            this.previewSecuritySelector.showSecutitySelectorForResource(vscode.Uri.parse(source));
        }
        else {
            if (vscode.window.activeTextEditor && vscode.window.activeTextEditor.document.languageId === 'markdown') {
                this.previewSecuritySelector.showSecutitySelectorForResource(vscode.window.activeTextEditor.document.uri);
            }
        }
    }
}
exports.ShowPreviewSecuritySelectorCommand = ShowPreviewSecuritySelectorCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/extensions\markdown\out/commands\showPreviewSecuritySelector.js.map
