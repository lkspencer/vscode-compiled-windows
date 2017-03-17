/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
function textToMarkedString(text) {
    return text.replace(/[\\`*_{}[\]()#+\-.!]/g, '\\$&'); // escape markdown syntax tokens: http://daringfireball.net/projects/markdown/syntax#backslash
}
exports.textToMarkedString = textToMarkedString;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\php\out/features\utils\markedTextUtil.js.map
