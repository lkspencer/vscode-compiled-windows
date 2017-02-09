/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
class TypeScriptCodeActionProvider {
    constructor(client, modeId) {
        this.client = client;
        this.commandId = `typescript.codeActions.${modeId}`;
        this.supportedCodeActions = client.execute('getSupportedCodeFixes', null, undefined)
            .then(response => response.body || [])
            .then(codes => {
            return codes.map(code => +code).filter(code => !isNaN(code));
        })
            .then(codes => codes.reduce((obj, code) => {
            obj[code] = true;
            return obj;
        }, Object.create(null)));
        vscode_1.commands.registerCommand(this.commandId, this.onCodeAction, this);
    }
    provideCodeActions(document, range, context, token) {
        const file = this.client.normalizePath(document.uri);
        if (!file) {
            return Promise.resolve([]);
        }
        let editor = vscode_1.window.activeTextEditor && vscode_1.window.activeTextEditor.document === document ? vscode_1.window.activeTextEditor : undefined;
        const source = {
            uri: document.uri,
            version: document.version,
            range: range,
            formattingOptions: editor
                ? { tabSize: editor.options.tabSize, insertSpaces: editor.options.insertSpaces } : undefined
        };
        return this.getSupportedCodeActions(context)
            .then(supportedActions => {
            return this.client.execute('getCodeFixes', {
                file: file,
                startLine: range.start.line + 1,
                endLine: range.end.line + 1,
                startOffset: range.start.character + 1,
                endOffset: range.end.character + 1,
                errorCodes: supportedActions
            }, token);
        })
            .then(response => response.body || [])
            .then(codeActions => codeActions.map(action => this.actionToEdit(source, action)));
    }
    getSupportedCodeActions(context) {
        return this.supportedCodeActions
            .then(supportedActions => {
            return context.diagnostics
                .map(diagnostic => +diagnostic.code)
                .filter(code => supportedActions[code]);
        });
    }
    actionToEdit(source, action) {
        const workspaceEdit = new vscode_1.WorkspaceEdit();
        action.changes.forEach(change => {
            change.textChanges.forEach(textChange => {
                workspaceEdit.replace(this.client.asUrl(change.fileName), new vscode_1.Range(textChange.start.line - 1, textChange.start.offset - 1, textChange.end.line - 1, textChange.end.offset - 1), textChange.newText);
            });
        });
        return {
            title: action.description,
            command: this.commandId,
            arguments: [source, workspaceEdit]
        };
    }
    onCodeAction(source, workspaceEdit) {
        vscode_1.workspace.applyEdit(workspaceEdit).then(success => {
            if (!success) {
                return Promise.reject(false);
            }
            let firstEdit = null;
            for (const [uri, edits] of workspaceEdit.entries()) {
                if (uri.fsPath === source.uri.fsPath) {
                    firstEdit = edits[0];
                    break;
                }
            }
            if (!firstEdit) {
                return true;
            }
            const newLines = firstEdit.newText.match(/\n/g);
            const editedRange = new vscode_1.Range(new vscode_1.Position(firstEdit.range.start.line, 0), new vscode_1.Position(firstEdit.range.end.line + 1 + (newLines ? newLines.length : 0), 0));
            // TODO: Workaround for https://github.com/Microsoft/TypeScript/issues/12249
            // apply formatting to the source range until TS returns formatted results
            return vscode_1.commands.executeCommand('vscode.executeFormatRangeProvider', source.uri, editedRange, source.formattingOptions || {}).then((edits) => {
                if (!edits || !edits.length) {
                    return false;
                }
                const workspaceEdit = new vscode_1.WorkspaceEdit();
                workspaceEdit.set(source.uri, edits);
                return vscode_1.workspace.applyEdit(workspaceEdit);
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptCodeActionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\codeActionProvider.js.map
