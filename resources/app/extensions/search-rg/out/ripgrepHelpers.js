/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function fixDriveC(_path) {
    var root = path.parse(_path).root;
    return root.toLowerCase() === 'c:/' ?
        _path.replace(/^c:[/\\]/i, '/') :
        _path;
}
exports.fixDriveC = fixDriveC;
function anchorGlob(glob) {
    return glob.startsWith('**') || glob.startsWith('/') ? glob : "/" + glob;
}
exports.anchorGlob = anchorGlob;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/0f080e5267e829de46638128001aeb7ca2d6d50e/extensions\search-rg\out/ripgrepHelpers.js.map
