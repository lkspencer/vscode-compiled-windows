/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/* --------------------------------------------------------------------------------------------
 * Includes code from typescript-sublime-plugin project, obtained from
 * https://github.com/Microsoft/TypeScript-Sublime-Plugin/blob/master/TypeScript%20Indent.tmPreferences
 * ------------------------------------------------------------------------------------------ */
'use strict';
const vscode_1 = require("vscode");
// This must be the first statement otherwise modules might got loaded with
// the wrong locale.
const nls = require("vscode-nls");
nls.config({ locale: vscode_1.env.language });
const path = require("path");
const typescriptServiceClient_1 = require("./typescriptServiceClient");
const hoverProvider_1 = require("./features/hoverProvider");
const definitionProvider_1 = require("./features/definitionProvider");
const ImplementationProvider_1 = require("./features/ImplementationProvider");
const documentHighlightProvider_1 = require("./features/documentHighlightProvider");
const referenceProvider_1 = require("./features/referenceProvider");
const documentSymbolProvider_1 = require("./features/documentSymbolProvider");
const signatureHelpProvider_1 = require("./features/signatureHelpProvider");
const renameProvider_1 = require("./features/renameProvider");
const formattingProvider_1 = require("./features/formattingProvider");
const bufferSyncSupport_1 = require("./features/bufferSyncSupport");
const completionItemProvider_1 = require("./features/completionItemProvider");
const workspaceSymbolProvider_1 = require("./features/workspaceSymbolProvider");
const codeActionProvider_1 = require("./features/codeActionProvider");
const referencesCodeLensProvider_1 = require("./features/referencesCodeLensProvider");
const BuildStatus = require("./utils/buildStatus");
const ProjectStatus = require("./utils/projectStatus");
const typingsStatus_1 = require("./utils/typingsStatus");
const VersionStatus = require("./utils/versionStatus");
function activate(context) {
    let MODE_ID_TS = 'typescript';
    let MODE_ID_TSX = 'typescriptreact';
    let MODE_ID_JS = 'javascript';
    let MODE_ID_JSX = 'javascriptreact';
    let clientHost = new TypeScriptServiceClientHost([
        {
            id: 'typescript',
            diagnosticSource: 'ts',
            modeIds: [MODE_ID_TS, MODE_ID_TSX],
            extensions: ['.ts', '.tsx'],
            configFile: 'tsconfig.json'
        },
        {
            id: 'javascript',
            diagnosticSource: 'js',
            modeIds: [MODE_ID_JS, MODE_ID_JSX],
            extensions: ['.js', '.jsx'],
            configFile: 'jsconfig.json'
        }
    ], context.storagePath, context.globalState, context.workspaceState);
    let client = clientHost.serviceClient;
    context.subscriptions.push(vscode_1.commands.registerCommand('typescript.reloadProjects', () => {
        clientHost.reloadProjects();
    }));
    context.subscriptions.push(vscode_1.commands.registerCommand('javascript.reloadProjects', () => {
        clientHost.reloadProjects();
    }));
    context.subscriptions.push(vscode_1.commands.registerCommand('_typescript.onVersionStatusClicked', () => {
        client.onVersionStatusClicked();
    }));
    vscode_1.window.onDidChangeActiveTextEditor(VersionStatus.showHideStatus, null, context.subscriptions);
    client.onReady().then(() => {
        context.subscriptions.push(ProjectStatus.create(client, path => new Promise(resolve => setTimeout(() => resolve(clientHost.handles(path)), 750)), context.workspaceState));
    }, () => {
        // Nothing to do here. The client did show a message;
    });
    BuildStatus.update({ queueLength: 0 });
}
exports.activate = activate;
const validateSetting = 'validate.enable';
class LanguageProvider {
    constructor(client, description) {
        this.client = client;
        this.description = description;
        this.extensions = Object.create(null);
        description.extensions.forEach(extension => this.extensions[extension] = true);
        this._validate = true;
        this.bufferSyncSupport = new bufferSyncSupport_1.default(client, description.modeIds, {
            delete: (file) => {
                this.currentDiagnostics.delete(client.asUrl(file));
            }
        }, this.extensions);
        this.syntaxDiagnostics = Object.create(null);
        this.currentDiagnostics = vscode_1.languages.createDiagnosticCollection(description.id);
        this.typingsStatus = new typingsStatus_1.default(client);
        new typingsStatus_1.AtaProgressReporter(client);
        vscode_1.workspace.onDidChangeConfiguration(this.configurationChanged, this);
        this.configurationChanged();
        client.onReady().then(() => {
            this.registerProviders(client);
            this.bufferSyncSupport.listen();
        }, () => {
            // Nothing to do here. The client did show a message;
        });
    }
    registerProviders(client) {
        let config = vscode_1.workspace.getConfiguration(this.id);
        this.completionItemProvider = new completionItemProvider_1.default(client, this.typingsStatus);
        this.completionItemProvider.updateConfiguration(config);
        let hoverProvider = new hoverProvider_1.default(client);
        let definitionProvider = new definitionProvider_1.default(client);
        let implementationProvider = new ImplementationProvider_1.default(client);
        let documentHighlightProvider = new documentHighlightProvider_1.default(client);
        let referenceProvider = new referenceProvider_1.default(client);
        let documentSymbolProvider = new documentSymbolProvider_1.default(client);
        let signatureHelpProvider = new signatureHelpProvider_1.default(client);
        let renameProvider = new renameProvider_1.default(client);
        this.formattingProvider = new formattingProvider_1.default(client);
        this.formattingProvider.updateConfiguration(config);
        if (this.formattingProvider.isEnabled()) {
            this.formattingProviderRegistration = vscode_1.languages.registerDocumentRangeFormattingEditProvider(this.description.modeIds, this.formattingProvider);
        }
        this.referenceCodeLensProvider = new referencesCodeLensProvider_1.default(client);
        this.referenceCodeLensProvider.updateConfiguration(config);
        if (client.apiVersion.has206Features()) {
            vscode_1.languages.registerCodeLensProvider(this.description.modeIds, this.referenceCodeLensProvider);
        }
        this.description.modeIds.forEach(modeId => {
            let selector = modeId;
            vscode_1.languages.registerCompletionItemProvider(selector, this.completionItemProvider, '.');
            vscode_1.languages.registerHoverProvider(selector, hoverProvider);
            vscode_1.languages.registerDefinitionProvider(selector, definitionProvider);
            if (client.apiVersion.has220Features()) {
                // TODO: TS 2.1.5 returns incorrect results for implementation locations.
                vscode_1.languages.registerImplementationProvider(selector, implementationProvider);
            }
            vscode_1.languages.registerDocumentHighlightProvider(selector, documentHighlightProvider);
            vscode_1.languages.registerReferenceProvider(selector, referenceProvider);
            vscode_1.languages.registerDocumentSymbolProvider(selector, documentSymbolProvider);
            vscode_1.languages.registerSignatureHelpProvider(selector, signatureHelpProvider, '(', ',');
            vscode_1.languages.registerRenameProvider(selector, renameProvider);
            vscode_1.languages.registerOnTypeFormattingEditProvider(selector, this.formattingProvider, ';', '}', '\n');
            vscode_1.languages.registerWorkspaceSymbolProvider(new workspaceSymbolProvider_1.default(client, modeId));
            if (client.apiVersion.has213Features()) {
                vscode_1.languages.registerCodeActionsProvider(selector, new codeActionProvider_1.default(client, modeId));
            }
            vscode_1.languages.setLanguageConfiguration(modeId, {
                indentationRules: {
                    // ^(.*\*/)?\s*\}.*$
                    decreaseIndentPattern: /^(.*\*\/)?\s*\}.*$/,
                    // ^.*\{[^}"']*$
                    increaseIndentPattern: /^.*\{[^}"']*$/
                },
                wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
                onEnterRules: [
                    {
                        // e.g. /** | */
                        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                        afterText: /^\s*\*\/$/,
                        action: { indentAction: vscode_1.IndentAction.IndentOutdent, appendText: ' * ' }
                    },
                    {
                        // e.g. /** ...|
                        beforeText: /^\s*\/\*\*(?!\/)([^\*]|\*(?!\/))*$/,
                        action: { indentAction: vscode_1.IndentAction.None, appendText: ' * ' }
                    },
                    {
                        // e.g.  * ...|
                        beforeText: /^(\t|(\ \ ))*\ \*(\ ([^\*]|\*(?!\/))*)?$/,
                        action: { indentAction: vscode_1.IndentAction.None, appendText: '* ' }
                    },
                    {
                        // e.g.  */|
                        beforeText: /^(\t|(\ \ ))*\ \*\/\s*$/,
                        action: { indentAction: vscode_1.IndentAction.None, removeText: 1 }
                    },
                    {
                        // e.g.  *-----*/|
                        beforeText: /^(\t|(\ \ ))*\ \*[^/]*\*\/\s*$/,
                        action: { indentAction: vscode_1.IndentAction.None, removeText: 1 }
                    }
                ]
            });
            const EMPTY_ELEMENTS = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];
            vscode_1.languages.setLanguageConfiguration('jsx-tags', {
                wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
                onEnterRules: [
                    {
                        beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join('|')}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, 'i'),
                        afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
                        action: { indentAction: vscode_1.IndentAction.IndentOutdent }
                    },
                    {
                        beforeText: new RegExp(`<(?!(?:${EMPTY_ELEMENTS.join('|')}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, 'i'),
                        action: { indentAction: vscode_1.IndentAction.Indent }
                    }
                ],
            });
        });
    }
    configurationChanged() {
        let config = vscode_1.workspace.getConfiguration(this.id);
        this.updateValidate(config.get(validateSetting, true));
        if (this.completionItemProvider) {
            this.completionItemProvider.updateConfiguration(config);
        }
        if (this.referenceCodeLensProvider) {
            this.referenceCodeLensProvider.updateConfiguration(config);
        }
        if (this.formattingProvider) {
            this.formattingProvider.updateConfiguration(config);
            if (!this.formattingProvider.isEnabled() && this.formattingProviderRegistration) {
                this.formattingProviderRegistration.dispose();
                this.formattingProviderRegistration = null;
            }
            else if (this.formattingProvider.isEnabled() && !this.formattingProviderRegistration) {
                this.formattingProviderRegistration = vscode_1.languages.registerDocumentRangeFormattingEditProvider(this.description.modeIds, this.formattingProvider);
            }
        }
    }
    handles(file) {
        let extension = path.extname(file);
        if ((extension && this.extensions[extension]) || this.bufferSyncSupport.handles(file)) {
            return true;
        }
        let basename = path.basename(file);
        return !!basename && basename === this.description.configFile;
    }
    get id() {
        return this.description.id;
    }
    get diagnosticSource() {
        return this.description.diagnosticSource;
    }
    updateValidate(value) {
        if (this._validate === value) {
            return;
        }
        this._validate = value;
        this.bufferSyncSupport.validate = value;
        if (value) {
            this.triggerAllDiagnostics();
        }
        else {
            this.syntaxDiagnostics = Object.create(null);
            this.currentDiagnostics.clear();
        }
    }
    reInitialize() {
        this.currentDiagnostics.clear();
        this.syntaxDiagnostics = Object.create(null);
        this.bufferSyncSupport.reOpenDocuments();
        this.bufferSyncSupport.requestAllDiagnostics();
    }
    triggerAllDiagnostics() {
        this.bufferSyncSupport.requestAllDiagnostics();
    }
    syntaxDiagnosticsReceived(file, diagnostics) {
        this.syntaxDiagnostics[file] = diagnostics;
    }
    semanticDiagnosticsReceived(file, diagnostics) {
        let syntaxMarkers = this.syntaxDiagnostics[file];
        if (syntaxMarkers) {
            delete this.syntaxDiagnostics[file];
            diagnostics = syntaxMarkers.concat(diagnostics);
        }
        this.currentDiagnostics.set(this.client.asUrl(file), diagnostics);
    }
    configFileDiagnosticsReceived(file, diagnostics) {
        this.currentDiagnostics.set(this.client.asUrl(file), diagnostics);
    }
}
class TypeScriptServiceClientHost {
    constructor(descriptions, storagePath, globalState, workspaceState) {
        let handleProjectCreateOrDelete = () => {
            this.client.execute('reloadProjects', null, false);
            this.triggerAllDiagnostics();
        };
        let handleProjectChange = () => {
            setTimeout(() => {
                this.triggerAllDiagnostics();
            }, 1500);
        };
        let watcher = vscode_1.workspace.createFileSystemWatcher('**/[tj]sconfig.json');
        watcher.onDidCreate(handleProjectCreateOrDelete);
        watcher.onDidDelete(handleProjectCreateOrDelete);
        watcher.onDidChange(handleProjectChange);
        this.client = new typescriptServiceClient_1.default(this, storagePath, globalState, workspaceState);
        this.languages = [];
        this.languagePerId = Object.create(null);
        descriptions.forEach(description => {
            let manager = new LanguageProvider(this.client, description);
            this.languages.push(manager);
            this.languagePerId[description.id] = manager;
        });
    }
    get serviceClient() {
        return this.client;
    }
    reloadProjects() {
        this.client.execute('reloadProjects', null, false);
        this.triggerAllDiagnostics();
    }
    handles(file) {
        return !!this.findLanguage(file);
    }
    findLanguage(file) {
        for (let i = 0; i < this.languages.length; i++) {
            let language = this.languages[i];
            if (language.handles(file)) {
                return language;
            }
        }
        return null;
    }
    triggerAllDiagnostics() {
        Object.keys(this.languagePerId).forEach(key => this.languagePerId[key].triggerAllDiagnostics());
    }
    /* internal */ populateService() {
        // See https://github.com/Microsoft/TypeScript/issues/5530
        vscode_1.workspace.saveAll(false).then((value) => {
            Object.keys(this.languagePerId).forEach(key => this.languagePerId[key].reInitialize());
        });
    }
    /* internal */ syntaxDiagnosticsReceived(event) {
        let body = event.body;
        if (body && body.diagnostics) {
            let language = this.findLanguage(body.file);
            if (language) {
                language.syntaxDiagnosticsReceived(body.file, this.createMarkerDatas(body.diagnostics, language.diagnosticSource));
            }
        }
    }
    /* internal */ semanticDiagnosticsReceived(event) {
        let body = event.body;
        if (body && body.diagnostics) {
            let language = this.findLanguage(body.file);
            if (language) {
                language.semanticDiagnosticsReceived(body.file, this.createMarkerDatas(body.diagnostics, language.diagnosticSource));
            }
        }
        /*
        if (Is.defined(body.queueLength)) {
            BuildStatus.update({ queueLength: body.queueLength });
        }
        */
    }
    /* internal */ configFileDiagnosticsReceived(event) {
        // See https://github.com/Microsoft/TypeScript/issues/10384
        /* https://github.com/Microsoft/TypeScript/issues/10473
        const body = event.body;
        if (body.diagnostics) {
            const language = body.triggerFile ? this.findLanguage(body.triggerFile) : this.findLanguage(body.configFile);
            if (language) {
                if (body.diagnostics.length === 0) {
                    language.configFileDiagnosticsReceived(body.configFile, []);
                } else if (body.diagnostics.length >= 1) {
                    workspace.openTextDocument(Uri.file(body.configFile)).then((document) => {
                        let curly: [number, number, number] = undefined;
                        let nonCurly: [number, number, number] = undefined;
                        let diagnostic: Diagnostic;
                        for (let index = 0; index < document.lineCount; index++) {
                            let line = document.lineAt(index);
                            let text = line.text;
                            let firstNonWhitespaceCharacterIndex = line.firstNonWhitespaceCharacterIndex;
                            if (firstNonWhitespaceCharacterIndex < text.length) {
                                if (text.charAt(firstNonWhitespaceCharacterIndex) === '{') {
                                    curly = [index, firstNonWhitespaceCharacterIndex, firstNonWhitespaceCharacterIndex + 1];
                                    break;
                                } else {
                                    let matches = /\s*([^\s]*)(?:\s*|$)/.exec(text.substr(firstNonWhitespaceCharacterIndex));
                                    if (matches.length >= 1) {
                                        nonCurly = [index, firstNonWhitespaceCharacterIndex, firstNonWhitespaceCharacterIndex + matches[1].length];
                                    }
                                }
                            }
                        }
                        let match = curly || nonCurly;
                        if (match) {
                            diagnostic = new Diagnostic(new Range(match[0], match[1], match[0], match[2]), body.diagnostics[0].text);
                        } else {
                            diagnostic = new Diagnostic(new Range(0,0,0,0), body.diagnostics[0].text);
                        }
                        if (diagnostic) {
                            diagnostic.source = language.diagnosticSource;
                            language.configFileDiagnosticsReceived(body.configFile, [diagnostic]);
                        }
                    }, (error) => {
                        language.configFileDiagnosticsReceived(body.configFile, [new Diagnostic(new Range(0,0,0,0), body.diagnostics[0].text)]);
                    });
                }
            }
        }
        */
    }
    createMarkerDatas(diagnostics, source) {
        let result = [];
        for (let diagnostic of diagnostics) {
            let { start, end, text } = diagnostic;
            let range = new vscode_1.Range(start.line - 1, start.offset - 1, end.line - 1, end.offset - 1);
            let converted = new vscode_1.Diagnostic(range, text);
            converted.source = source;
            converted.code = '' + diagnostic.code;
            result.push(converted);
        }
        return result;
    }
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/typescriptMain.js.map
