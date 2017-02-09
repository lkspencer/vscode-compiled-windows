/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode_1 = require("vscode");
var MAX_DECORATORS = 500;
var decorationType = {
    before: {
        contentText: ' ',
        border: 'solid 0.1em #000',
        margin: '0.1em 0.2em 0 0.2em',
        width: '0.8em',
        height: '0.8em'
    },
    dark: {
        before: {
            border: 'solid 0.1em #eee'
        }
    }
};
function activateColorDecorations(decoratorProvider, supportedLanguages) {
    var disposables = [];
    var colorsDecorationType = vscode_1.window.createTextEditorDecorationType(decorationType);
    disposables.push(colorsDecorationType);
    var pendingUpdateRequests = {};
    vscode_1.window.onDidChangeVisibleTextEditors(function (editors) {
        for (var _i = 0, editors_1 = editors; _i < editors_1.length; _i++) {
            var editor = editors_1[_i];
            triggerUpdateDecorations(editor.document);
        }
    }, null, disposables);
    vscode_1.workspace.onDidChangeTextDocument(function (event) { return triggerUpdateDecorations(event.document); }, null, disposables);
    // we care about all visible editors
    vscode_1.window.visibleTextEditors.forEach(function (editor) {
        if (editor.document) {
            triggerUpdateDecorations(editor.document);
        }
    });
    function triggerUpdateDecorations(document) {
        var triggerUpdate = supportedLanguages[document.languageId];
        var documentUri = document.uri;
        var documentUriStr = documentUri.toString();
        var timeout = pendingUpdateRequests[documentUriStr];
        if (typeof timeout !== 'undefined') {
            clearTimeout(timeout);
            triggerUpdate = true; // force update, even if languageId is not supported (anymore)
        }
        if (triggerUpdate) {
            pendingUpdateRequests[documentUriStr] = setTimeout(function () {
                // check if the document is in use by an active editor
                for (var _i = 0, _a = vscode_1.window.visibleTextEditors; _i < _a.length; _i++) {
                    var editor = _a[_i];
                    if (editor.document && documentUriStr === editor.document.uri.toString()) {
                        updateDecorationForEditor(documentUriStr, editor.document.version);
                        break;
                    }
                }
                delete pendingUpdateRequests[documentUriStr];
            }, 500);
        }
    }
    function updateDecorationForEditor(contentUri, documentVersion) {
        decoratorProvider(contentUri).then(function (ranges) {
            var _loop_1 = function (editor) {
                var document = editor.document;
                if (document && document.version === documentVersion && contentUri === document.uri.toString()) {
                    var decorations = ranges.slice(0, MAX_DECORATORS).map(function (range) {
                        var color = document.getText(range);
                        return {
                            range: range,
                            renderOptions: {
                                before: {
                                    backgroundColor: color
                                }
                            }
                        };
                    });
                    editor.setDecorations(colorsDecorationType, decorations);
                }
            };
            for (var _i = 0, _a = vscode_1.window.visibleTextEditors; _i < _a.length; _i++) {
                var editor = _a[_i];
                _loop_1(editor);
            }
        });
    }
    return vscode_1.Disposable.from.apply(vscode_1.Disposable, disposables);
}
exports.activateColorDecorations = activateColorDecorations;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\css\client\out/colorDecorators.js.map
