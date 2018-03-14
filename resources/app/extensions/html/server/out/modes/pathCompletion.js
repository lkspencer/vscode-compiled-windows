/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_languageserver_types_1 = require("vscode-languageserver-types");
var path = require("path");
var fs = require("fs");
var vscode_uri_1 = require("vscode-uri");
var strings_1 = require("../utils/strings");
var arrays_1 = require("../utils/arrays");
function getPathCompletionParticipant(document, workspaceFolders, result) {
    return {
        onHtmlAttributeValue: function (_a) {
            var tag = _a.tag, attribute = _a.attribute, value = _a.value, range = _a.range;
            if (shouldDoPathCompletion(tag, attribute, value)) {
                if (!workspaceFolders || workspaceFolders.length === 0) {
                    return;
                }
                var workspaceRoot = resolveWorkspaceRoot(document, workspaceFolders);
                var suggestions = providePathSuggestions(value, range, vscode_uri_1.default.parse(document.uri).fsPath, workspaceRoot);
                result.items = suggestions.concat(result.items);
            }
        }
    };
}
exports.getPathCompletionParticipant = getPathCompletionParticipant;
function shouldDoPathCompletion(tag, attr, value) {
    if (strings_1.startsWith(value, 'http') || strings_1.startsWith(value, 'https') || strings_1.startsWith(value, '//')) {
        return false;
    }
    if (PATH_TAG_AND_ATTR[tag]) {
        if (typeof PATH_TAG_AND_ATTR[tag] === 'string') {
            return PATH_TAG_AND_ATTR[tag] === attr;
        }
        else {
            return arrays_1.contains(PATH_TAG_AND_ATTR[tag], attr);
        }
    }
    return false;
}
function providePathSuggestions(value, range, activeDocFsPath, root) {
    if (strings_1.startsWith(value, '/') && !root) {
        return [];
    }
    var replaceRange;
    var lastIndexOfSlash = value.lastIndexOf('/');
    if (lastIndexOfSlash === -1) {
        replaceRange = getFullReplaceRange(range);
    }
    else {
        var valueAfterLastSlash = value.slice(lastIndexOfSlash + 1);
        replaceRange = getReplaceRange(range, valueAfterLastSlash);
    }
    var parentDir;
    if (lastIndexOfSlash === -1) {
        parentDir = path.resolve(root);
    }
    else {
        var valueBeforeLastSlash = value.slice(0, lastIndexOfSlash + 1);
        parentDir = strings_1.startsWith(value, '/')
            ? path.resolve(root, '.' + valueBeforeLastSlash)
            : path.resolve(activeDocFsPath, '..', valueBeforeLastSlash);
    }
    try {
        return fs.readdirSync(parentDir).map(function (f) {
            if (isDir(path.resolve(parentDir, f))) {
                return {
                    label: f + '/',
                    kind: vscode_languageserver_types_1.CompletionItemKind.Folder,
                    textEdit: vscode_languageserver_types_1.TextEdit.replace(replaceRange, f + '/'),
                    command: {
                        title: 'Suggest',
                        command: 'editor.action.triggerSuggest'
                    }
                };
            }
            else {
                return {
                    label: f,
                    kind: vscode_languageserver_types_1.CompletionItemKind.File,
                    textEdit: vscode_languageserver_types_1.TextEdit.replace(replaceRange, f)
                };
            }
        });
    }
    catch (e) {
        return [];
    }
}
exports.providePathSuggestions = providePathSuggestions;
var isDir = function (p) {
    return fs.statSync(p).isDirectory();
};
function resolveWorkspaceRoot(activeDoc, workspaceFolders) {
    for (var i = 0; i < workspaceFolders.length; i++) {
        if (strings_1.startsWith(activeDoc.uri, workspaceFolders[i].uri)) {
            return path.resolve(vscode_uri_1.default.parse(workspaceFolders[i].uri).fsPath);
        }
    }
}
function getFullReplaceRange(valueRange) {
    var start = vscode_languageserver_types_1.Position.create(valueRange.end.line, valueRange.start.character + 1);
    var end = vscode_languageserver_types_1.Position.create(valueRange.end.line, valueRange.end.character - 1);
    return vscode_languageserver_types_1.Range.create(start, end);
}
function getReplaceRange(valueRange, valueAfterLastSlash) {
    var start = vscode_languageserver_types_1.Position.create(valueRange.end.line, valueRange.end.character - 1 - valueAfterLastSlash.length);
    var end = vscode_languageserver_types_1.Position.create(valueRange.end.line, valueRange.end.character - 1);
    return vscode_languageserver_types_1.Range.create(start, end);
}
// Selected from https://stackoverflow.com/a/2725168/1780148
var PATH_TAG_AND_ATTR = {
    // HTML 4
    a: 'href',
    body: 'background',
    del: 'cite',
    form: 'action',
    frame: ['src', 'longdesc'],
    img: ['src', 'longdesc'],
    ins: 'cite',
    link: 'href',
    object: 'data',
    q: 'cite',
    script: 'src',
    // HTML 5
    audio: 'src',
    button: 'formaction',
    command: 'icon',
    embed: 'src',
    html: 'manifest',
    input: 'formaction',
    source: 'src',
    track: 'src',
    video: ['src', 'poster']
};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\html\server\out/modes\pathCompletion.js.map
