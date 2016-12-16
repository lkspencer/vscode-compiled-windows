/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var toString = Object.prototype.toString;
function defined(value) {
    return typeof value !== 'undefined';
}
exports.defined = defined;
function boolean(value) {
    return value === true || value === false;
}
exports.boolean = boolean;
function string(value) {
    return toString.call(value) === '[object String]';
}
exports.string = string;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/38746938a4ab94f2f57d9e1309c51fd6fb37553d/extensions\typescript\out/utils\is.js.map
