/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_languageserver_1 = require("vscode-languageserver");
function formatError(message, err) {
    if (err instanceof Error) {
        var error = err;
        return message + ": " + error.message + "\n" + error.stack;
    }
    else if (typeof err === 'string') {
        return message + ": " + err;
    }
    else if (err) {
        return message + ": " + err.toString();
    }
    return message;
}
exports.formatError = formatError;
function runSafeAsync(func, errorVal, errorMessage) {
    var t = func();
    return t.then(void 0, function (e) {
        console.error(formatError(errorMessage, e));
        return errorVal;
    });
}
exports.runSafeAsync = runSafeAsync;
function runSafe(func, errorVal, errorMessage, token) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (token.isCancellationRequested) {
                resolve(cancelValue());
            }
            else {
                try {
                    var result = func();
                    if (token.isCancellationRequested) {
                        resolve(cancelValue());
                        return;
                    }
                    else {
                        resolve(result);
                    }
                }
                catch (e) {
                    console.error(formatError(errorMessage, e));
                    resolve(errorVal);
                }
            }
        }, 100);
    });
}
exports.runSafe = runSafe;
function cancelValue() {
    console.log('cancelled');
    return new vscode_languageserver_1.ResponseError(vscode_languageserver_1.ErrorCodes.RequestCancelled, 'Request cancelled');
}
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\json\server\out/utils\errors.js.map
