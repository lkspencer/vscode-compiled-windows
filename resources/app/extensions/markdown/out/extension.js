/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var vscode = require("vscode");
var path = require("path");
var vscode_extension_telemetry_1 = require("vscode-extension-telemetry");
var markdownEngine_1 = require("./markdownEngine");
var documentLinkProvider_1 = require("./documentLinkProvider");
var documentSymbolProvider_1 = require("./documentSymbolProvider");
var telemetryReporter;
function activate(context) {
    var packageInfo = getPackageInfo();
    telemetryReporter = packageInfo && new vscode_extension_telemetry_1.default(packageInfo.name, packageInfo.version, packageInfo.aiKey);
    var engine = new markdownEngine_1.MarkdownEngine();
    var contentProvider = new MDDocumentContentProvider(engine, context);
    var contentProviderRegistration = vscode.workspace.registerTextDocumentContentProvider('markdown', contentProvider);
    var symbolsProvider = new documentSymbolProvider_1.default(engine);
    var symbolsProviderRegistration = vscode.languages.registerDocumentSymbolProvider({ language: 'markdown' }, symbolsProvider);
    context.subscriptions.push(contentProviderRegistration, symbolsProviderRegistration);
    context.subscriptions.push(vscode.languages.registerDocumentLinkProvider('markdown', new documentLinkProvider_1.default()));
    context.subscriptions.push(vscode.commands.registerCommand('markdown.showPreview', showPreview));
    context.subscriptions.push(vscode.commands.registerCommand('markdown.showPreviewToSide', function (uri) { return showPreview(uri, true); }));
    context.subscriptions.push(vscode.commands.registerCommand('markdown.showSource', showSource));
    context.subscriptions.push(vscode.commands.registerCommand('_markdown.revealLine', function (uri, line) {
        var sourceUri = vscode.Uri.parse(decodeURIComponent(uri));
        vscode.window.visibleTextEditors
            .filter(function (editor) { return isMarkdownFile(editor.document) && editor.document.uri.fsPath === sourceUri.fsPath; })
            .forEach(function (editor) {
            var sourceLine = Math.floor(line);
            var text = editor.document.getText(new vscode.Range(sourceLine, 0, sourceLine + 1, 0));
            var fraction = line - Math.floor(line);
            var start = Math.floor(fraction * text.length);
            editor.revealRange(new vscode.Range(sourceLine, start, sourceLine + 1, 0), vscode.TextEditorRevealType.AtTop);
        });
    }));
    context.subscriptions.push(vscode.commands.registerCommand('_markdown.didClick', function (uri, line) {
        var sourceUri = vscode.Uri.parse(decodeURIComponent(uri));
        return vscode.workspace.openTextDocument(sourceUri)
            .then(function (document) { return vscode.window.showTextDocument(document); })
            .then(function (editor) { return vscode.commands.executeCommand('revealLine', { lineNumber: Math.floor(line), at: 'center' }).then(function () { return editor; }); })
            .then(function (editor) {
            if (editor) {
                editor.selection = new vscode.Selection(new vscode.Position(Math.floor(line), 0), new vscode.Position(Math.floor(line), 0));
            }
        });
    }));
    context.subscriptions.push(vscode.workspace.onDidSaveTextDocument(function (document) {
        if (isMarkdownFile(document)) {
            var uri = getMarkdownUri(document.uri);
            contentProvider.update(uri);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument(function (event) {
        if (isMarkdownFile(event.document)) {
            var uri = getMarkdownUri(event.document.uri);
            contentProvider.update(uri);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeConfiguration(function () {
        vscode.workspace.textDocuments.forEach(function (document) {
            if (document.uri.scheme === 'markdown') {
                // update all generated md documents
                contentProvider.update(document.uri);
            }
        });
    }));
    context.subscriptions.push(vscode.window.onDidChangeTextEditorSelection(function (event) {
        if (isMarkdownFile(event.textEditor.document)) {
            vscode.commands.executeCommand('_workbench.htmlPreview.postMessage', getMarkdownUri(event.textEditor.document.uri), {
                line: event.selections[0].active.line
            });
        }
    }));
}
exports.activate = activate;
function isMarkdownFile(document) {
    return document.languageId === 'markdown'
        && document.uri.scheme !== 'markdown'; // prevent processing of own documents
}
function getMarkdownUri(uri) {
    return uri.with({ scheme: 'markdown', path: uri.path + '.rendered', query: uri.toString() });
}
function showPreview(uri, sideBySide) {
    if (sideBySide === void 0) { sideBySide = false; }
    var resource = uri;
    if (!(resource instanceof vscode.Uri)) {
        if (vscode.window.activeTextEditor) {
            // we are relaxed and don't check for markdown files
            resource = vscode.window.activeTextEditor.document.uri;
        }
    }
    if (!(resource instanceof vscode.Uri)) {
        if (!vscode.window.activeTextEditor) {
            // this is most likely toggling the preview
            return vscode.commands.executeCommand('markdown.showSource');
        }
        // nothing found that could be shown or toggled
        return;
    }
    var thenable = vscode.commands.executeCommand('vscode.previewHtml', getMarkdownUri(resource), getViewColumn(sideBySide), "Preview '" + path.basename(resource.fsPath) + "'");
    if (telemetryReporter) {
        telemetryReporter.sendTelemetryEvent('openPreview', {
            where: sideBySide ? 'sideBySide' : 'inPlace',
            how: (uri instanceof vscode.Uri) ? 'action' : 'pallete'
        });
    }
    return thenable;
}
function getViewColumn(sideBySide) {
    var active = vscode.window.activeTextEditor;
    if (!active) {
        return vscode.ViewColumn.One;
    }
    if (!sideBySide) {
        return active.viewColumn;
    }
    switch (active.viewColumn) {
        case vscode.ViewColumn.One:
            return vscode.ViewColumn.Two;
        case vscode.ViewColumn.Two:
            return vscode.ViewColumn.Three;
    }
    return active.viewColumn;
}
function showSource(mdUri) {
    if (!mdUri) {
        return vscode.commands.executeCommand('workbench.action.navigateBack');
    }
    var docUri = vscode.Uri.parse(mdUri.query);
    for (var _i = 0, _a = vscode.window.visibleTextEditors; _i < _a.length; _i++) {
        var editor = _a[_i];
        if (editor.document.uri.toString() === docUri.toString()) {
            return vscode.window.showTextDocument(editor.document, editor.viewColumn);
        }
    }
    return vscode.workspace.openTextDocument(docUri).then(function (doc) {
        return vscode.window.showTextDocument(doc);
    });
}
function getPackageInfo() {
    var extention = vscode.extensions.getExtension('Microsoft.vscode-markdown');
    if (extention && extention.packageJSON) {
        return {
            name: extention.packageJSON.name,
            version: extention.packageJSON.version,
            aiKey: extention.packageJSON.aiKey
        };
    }
    return null;
}
var MDDocumentContentProvider = (function () {
    function MDDocumentContentProvider(engine, context) {
        this.engine = engine;
        this.context = context;
        this._onDidChange = new vscode.EventEmitter();
        this._waiting = false;
    }
    MDDocumentContentProvider.prototype.getMediaPath = function (mediaFile) {
        return this.context.asAbsolutePath(path.join('media', mediaFile));
    };
    MDDocumentContentProvider.prototype.isAbsolute = function (p) {
        return path.normalize(p + '/') === path.normalize(path.resolve(p) + '/');
    };
    MDDocumentContentProvider.prototype.fixHref = function (resource, href) {
        if (href) {
            // Use href if it is already an URL
            if (vscode.Uri.parse(href).scheme) {
                return href;
            }
            // Use href as file URI if it is absolute
            if (this.isAbsolute(href)) {
                return vscode.Uri.file(href).toString();
            }
            // use a workspace relative path if there is a workspace
            var rootPath = vscode.workspace.rootPath;
            if (rootPath) {
                return vscode.Uri.file(path.join(rootPath, href)).toString();
            }
            // otherwise look relative to the markdown file
            return vscode.Uri.file(path.join(path.dirname(resource.fsPath), href)).toString();
        }
        return href;
    };
    MDDocumentContentProvider.prototype.computeCustomStyleSheetIncludes = function (uri) {
        var _this = this;
        var styles = vscode.workspace.getConfiguration('markdown')['styles'];
        if (styles && Array.isArray(styles) && styles.length > 0) {
            return styles.map(function (style) {
                return "<link rel=\"stylesheet\" href=\"" + _this.fixHref(uri, style) + "\" type=\"text/css\" media=\"screen\">";
            }).join('\n');
        }
        return '';
    };
    MDDocumentContentProvider.prototype.getSettingsOverrideStyles = function () {
        var previewSettings = vscode.workspace.getConfiguration('markdown')['preview'];
        if (!previewSettings) {
            return '';
        }
        var fontFamily = previewSettings.fontFamily, fontSize = previewSettings.fontSize, lineHeight = previewSettings.lineHeight;
        return "<style>\n\t\t\tbody {\n\t\t\t\t" + (fontFamily ? "font-family: " + fontFamily + ";" : '') + "\n\t\t\t\t" + (+fontSize > 0 ? "font-size: " + fontSize + "px;" : '') + "\n\t\t\t\t" + (+lineHeight > 0 ? "line-height: " + lineHeight + ";" : '') + "\n\t\t\t}\n\t\t</style>";
    };
    MDDocumentContentProvider.prototype.provideTextDocumentContent = function (uri) {
        var _this = this;
        var sourceUri = vscode.Uri.parse(uri.query);
        return vscode.workspace.openTextDocument(sourceUri).then(function (document) {
            var scrollBeyondLastLine = vscode.workspace.getConfiguration('editor')['scrollBeyondLastLine'];
            var wordWrap = vscode.workspace.getConfiguration('editor')['wordWrap'];
            var markdownConfig = vscode.workspace.getConfiguration('markdown');
            var previewFrontMatter = markdownConfig.get('previewFrontMatter', 'hide');
            var initialLine = 0;
            var editor = vscode.window.activeTextEditor;
            if (editor && editor.document.uri.path === sourceUri.path) {
                initialLine = editor.selection.active.line;
            }
            var body = _this.engine.render(sourceUri, previewFrontMatter === 'hide', document.getText());
            return "<!DOCTYPE html>\n\t\t\t\t<html>\n\t\t\t\t<head>\n\t\t\t\t\t<meta http-equiv=\"Content-type\" content=\"text/html;charset=UTF-8\">\n\t\t\t\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + _this.getMediaPath('markdown.css') + "\">\n\t\t\t\t\t<link rel=\"stylesheet\" type=\"text/css\" href=\"" + _this.getMediaPath('tomorrow.css') + "\">\n\t\t\t\t\t" + _this.getSettingsOverrideStyles() + "\n\t\t\t\t\t" + _this.computeCustomStyleSheetIncludes(uri) + "\n\t\t\t\t\t<base href=\"" + document.uri.toString(true) + "\">\n\t\t\t\t</head>\n\t\t\t\t<body class=\"" + (scrollBeyondLastLine ? 'scrollBeyondLastLine' : '') + " " + (wordWrap ? 'wordWrap' : '') + " " + (!!markdownConfig.get('preview.markEditorSelection') ? 'showEditorSelection' : '') + "\">\n\t\t\t\t\t" + body + "\n\t\t\t\t\t<script>\n\t\t\t\t\t\twindow.initialData = {\n\t\t\t\t\t\t\tsource: \"" + encodeURIComponent(sourceUri.toString(true)) + "\",\n\t\t\t\t\t\t\tline: " + initialLine + ",\n\t\t\t\t\t\t\tscrollPreviewWithEditorSelection: " + !!markdownConfig.get('preview.scrollPreviewWithEditorSelection', true) + ",\n\t\t\t\t\t\t\tscrollEditorWithPreview: " + !!markdownConfig.get('preview.scrollEditorWithPreview', true) + ",\n\t\t\t\t\t\t\tdoubleClickToSwitchToEditor: " + !!markdownConfig.get('preview.doubleClickToSwitchToEditor', true) + ",\n\t\t\t\t\t\t};\n\t\t\t\t\t</script>\n\t\t\t\t\t<script src=\"" + _this.getMediaPath('main.js') + "\"></script>\n\t\t\t\t</body>\n\t\t\t\t</html>";
        });
    };
    Object.defineProperty(MDDocumentContentProvider.prototype, "onDidChange", {
        get: function () {
            return this._onDidChange.event;
        },
        enumerable: true,
        configurable: true
    });
    MDDocumentContentProvider.prototype.update = function (uri) {
        var _this = this;
        if (!this._waiting) {
            this._waiting = true;
            setTimeout(function () {
                _this._waiting = false;
                _this._onDidChange.fire(uri);
            }, 300);
        }
    };
    return MDDocumentContentProvider;
}());
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\markdown\out/extension.js.map
