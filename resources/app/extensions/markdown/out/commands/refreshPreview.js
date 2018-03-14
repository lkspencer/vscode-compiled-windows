"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
class RefreshPreviewCommand {
    constructor(webviewManager) {
        this.webviewManager = webviewManager;
        this.id = 'markdown.preview.refresh';
    }
    execute() {
        this.webviewManager.refresh();
    }
}
exports.RefreshPreviewCommand = RefreshPreviewCommand;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/9a199d77c82fcb82f39c68bb33c614af01c111ba/extensions\markdown\out/commands\refreshPreview.js.map
