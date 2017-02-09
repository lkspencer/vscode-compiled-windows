/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const vscode_1 = require("vscode");
var Configuration;
(function (Configuration) {
    Configuration.insertSpaceAfterCommaDelimiter = 'insertSpaceAfterCommaDelimiter';
    Configuration.insertSpaceAfterSemicolonInForStatements = 'insertSpaceAfterSemicolonInForStatements';
    Configuration.insertSpaceBeforeAndAfterBinaryOperators = 'insertSpaceBeforeAndAfterBinaryOperators';
    Configuration.insertSpaceAfterKeywordsInControlFlowStatements = 'insertSpaceAfterKeywordsInControlFlowStatements';
    Configuration.insertSpaceAfterFunctionKeywordForAnonymousFunctions = 'insertSpaceAfterFunctionKeywordForAnonymousFunctions';
    Configuration.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis = 'insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis';
    Configuration.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets = 'insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets';
    Configuration.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces = 'insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces';
    Configuration.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces = 'insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces';
    Configuration.placeOpenBraceOnNewLineForFunctions = 'placeOpenBraceOnNewLineForFunctions';
    Configuration.placeOpenBraceOnNewLineForControlBlocks = 'placeOpenBraceOnNewLineForControlBlocks';
    function equals(a, b) {
        let keys = Object.keys(a);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            if (a[key] !== b[key]) {
                return false;
            }
        }
        return true;
    }
    Configuration.equals = equals;
    function def() {
        let result = Object.create(null);
        result.enable = true;
        result.insertSpaceAfterCommaDelimiter = true;
        result.insertSpaceAfterSemicolonInForStatements = true;
        result.insertSpaceBeforeAndAfterBinaryOperators = true;
        result.insertSpaceAfterKeywordsInControlFlowStatements = true;
        result.insertSpaceAfterFunctionKeywordForAnonymousFunctions = false;
        result.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis = false;
        result.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets = false;
        result.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces = false;
        result.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces = false;
        result.placeOpenBraceOnNewLineForFunctions = false;
        result.placeOpenBraceOnNewLineForControlBlocks = false;
        return result;
    }
    Configuration.def = def;
})(Configuration || (Configuration = {}));
class TypeScriptFormattingProvider {
    constructor(client) {
        this.client = client;
        this.config = Configuration.def();
        this.formatOptions = Object.create(null);
        vscode_1.workspace.onDidCloseTextDocument((textDocument) => {
            let key = textDocument.uri.toString();
            // When a document gets closed delete the cached formatting options.
            // This is necessary sine the tsserver now closed a project when its
            // last file in it closes which drops the stored formatting options
            // as well.
            delete this.formatOptions[key];
        });
    }
    updateConfiguration(config) {
        let newConfig = config.get('format', Configuration.def());
        if (!Configuration.equals(this.config, newConfig)) {
            this.config = newConfig;
            this.formatOptions = Object.create(null);
        }
    }
    isEnabled() {
        return this.config.enable;
    }
    ensureFormatOptions(document, options, token) {
        let key = document.uri.toString();
        let currentOptions = this.formatOptions[key];
        if (currentOptions && currentOptions.tabSize === options.tabSize && currentOptions.indentSize === options.tabSize && currentOptions.convertTabsToSpaces === options.insertSpaces) {
            return Promise.resolve(currentOptions);
        }
        else {
            const absPath = this.client.normalizePath(document.uri);
            if (!absPath) {
                return Promise.resolve(Object.create(null));
            }
            let args = {
                file: absPath,
                formatOptions: this.getFormatOptions(options)
            };
            return this.client.execute('configure', args, token).then((response) => {
                this.formatOptions[key] = args.formatOptions;
                return args.formatOptions;
            });
        }
    }
    doFormat(document, options, args, token) {
        return this.ensureFormatOptions(document, options, token).then(() => {
            return this.client.execute('format', args, token).then((response) => {
                if (response.body) {
                    return response.body.map(this.codeEdit2SingleEditOperation);
                }
                else {
                    return [];
                }
            }, (err) => {
                this.client.error(`'format' request failed with error.`, err);
                return [];
            });
        });
    }
    provideDocumentRangeFormattingEdits(document, range, options, token) {
        const absPath = this.client.normalizePath(document.uri);
        if (!absPath) {
            return Promise.resolve([]);
        }
        let args = {
            file: absPath,
            line: range.start.line + 1,
            offset: range.start.character + 1,
            endLine: range.end.line + 1,
            endOffset: range.end.character + 1
        };
        return this.doFormat(document, options, args, token);
    }
    provideOnTypeFormattingEdits(document, position, ch, options, token) {
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return Promise.resolve([]);
        }
        let args = {
            file: filepath,
            line: position.line + 1,
            offset: position.character + 1,
            key: ch
        };
        return this.ensureFormatOptions(document, options, token).then(() => {
            return this.client.execute('formatonkey', args, token).then((response) => {
                let edits = response.body;
                let result = [];
                if (!edits) {
                    return result;
                }
                for (let edit of edits) {
                    let textEdit = this.codeEdit2SingleEditOperation(edit);
                    let range = textEdit.range;
                    // Work around for https://github.com/Microsoft/TypeScript/issues/6700.
                    // Check if we have an edit at the beginning of the line which only removes white spaces and leaves
                    // an empty line. Drop those edits
                    if (range.start.character === 0 && range.start.line === range.end.line && textEdit.newText === '') {
                        let lText = document.lineAt(range.start.line).text;
                        // If the edit leaves something on the line keep the edit (note that the end character is exclusive).
                        // Keep it also if it removes something else than whitespace
                        if (lText.trim().length > 0 || lText.length > range.end.character) {
                            result.push(textEdit);
                        }
                    }
                    else {
                        result.push(textEdit);
                    }
                }
                return result;
            }, (err) => {
                this.client.error(`'formatonkey' request failed with error.`, err);
                return [];
            });
        });
    }
    codeEdit2SingleEditOperation(edit) {
        return new vscode_1.TextEdit(new vscode_1.Range(edit.start.line - 1, edit.start.offset - 1, edit.end.line - 1, edit.end.offset - 1), edit.newText);
    }
    getFormatOptions(options) {
        return {
            tabSize: options.tabSize,
            indentSize: options.tabSize,
            convertTabsToSpaces: options.insertSpaces,
            // We can use \n here since the editor normalizes later on to its line endings.
            newLineCharacter: '\n',
            insertSpaceAfterCommaDelimiter: this.config.insertSpaceAfterCommaDelimiter,
            insertSpaceAfterSemicolonInForStatements: this.config.insertSpaceAfterSemicolonInForStatements,
            insertSpaceBeforeAndAfterBinaryOperators: this.config.insertSpaceBeforeAndAfterBinaryOperators,
            insertSpaceAfterKeywordsInControlFlowStatements: this.config.insertSpaceAfterKeywordsInControlFlowStatements,
            insertSpaceAfterFunctionKeywordForAnonymousFunctions: this.config.insertSpaceAfterFunctionKeywordForAnonymousFunctions,
            insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: this.config.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis,
            insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: this.config.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets,
            insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: this.config.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces,
            insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces: this.config.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces,
            placeOpenBraceOnNewLineForFunctions: this.config.placeOpenBraceOnNewLineForFunctions,
            placeOpenBraceOnNewLineForControlBlocks: this.config.placeOpenBraceOnNewLineForControlBlocks
        };
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptFormattingProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/f9d0c687ff2ea7aabd85fb9a43129117c0ecf519/extensions\typescript\out/features\formattingProvider.js.map
