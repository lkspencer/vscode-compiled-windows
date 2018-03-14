"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const file_1 = require("../util/file");
class ShowPreviewSecuritySelectorCommand {
    constructor(previewSecuritySelector, previewManager) {
        this.previewSecuritySelector = previewSecuritySelector;
        this.previewManager = previewManager;
        this.id = 'markdown.showPreviewSecuritySelector';
    }
    execute(resource) {
        if (resource) {
            const source = vscode.Uri.parse(resource).query;
            this.previewSecuritySelector.showSecutitySelectorForResource(vscode.Uri.parse(source));
        }
        else if (vscode.window.activeTextEditor && file_1.isMarkdownFile(vscode.window.activeTextEditor.document)) {
            this.previewSecuritySelector.showSecutitySelectorForResource(vscode.window.activeTextEditor.document.uri);
        }
        else if (this.previewManager.activePreviewResource) {
            this.previewSecuritySelector.showSecutitySelectorForResource(this.previewManager.activePreviewResource);
        }
    }
}
exports.ShowPreviewSecuritySelectorCommand = ShowPreviewSecuritySelectorCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\markdown\out/commands\showPreviewSecuritySelector.js.map
