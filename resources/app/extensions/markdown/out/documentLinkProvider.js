/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require("vscode");
var path = require("path");
var MarkdownDocumentLinkProvider = (function () {
    function MarkdownDocumentLinkProvider() {
        this._linkPattern = /(\[[^\]]*\]\(\s*?)(\S+?)(\s+[^\)]*)?\)/g;
    }
    MarkdownDocumentLinkProvider.prototype.provideDocumentLinks = function (document, token) {
        var results = [];
        var base = path.dirname(document.uri.fsPath);
        var text = document.getText();
        this._linkPattern.lastIndex = 0;
        var match;
        while ((match = this._linkPattern.exec(text))) {
            var pre = match[1];
            var link = match[2];
            var offset = match.index + pre.length;
            var linkStart = document.positionAt(offset);
            var linkEnd = document.positionAt(offset + link.length);
            try {
                var uri = vscode.Uri.parse(link);
                if (!uri.scheme) {
                    // assume it must be a file
                    var file = void 0;
                    if (uri.path[0] === '/') {
                        file = path.join(vscode.workspace.rootPath, uri.path);
                    }
                    else {
                        file = path.join(base, uri.path);
                    }
                    uri = vscode.Uri.file(file);
                }
                results.push(new vscode.DocumentLink(new vscode.Range(linkStart, linkEnd), uri));
            }
            catch (e) {
            }
        }
        return results;
    };
    return MarkdownDocumentLinkProvider;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MarkdownDocumentLinkProvider;
;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\markdown\out/documentLinkProvider.js.map
