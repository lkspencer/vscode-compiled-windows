"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
var vscode_languageserver_protocol_1 = require("vscode-languageserver-protocol");
var FoldingRangeType;
(function (FoldingRangeType) {
    /**
     * Folding range for a comment
     */
    FoldingRangeType["Comment"] = "comment";
    /**
     * Folding range for a imports or includes
     */
    FoldingRangeType["Imports"] = "imports";
    /**
     * Folding range for a region (e.g. `#region`)
     */
    FoldingRangeType["Region"] = "region";
})(FoldingRangeType = exports.FoldingRangeType || (exports.FoldingRangeType = {}));
var FoldingRangesRequest;
(function (FoldingRangesRequest) {
    FoldingRangesRequest.type = new vscode_languageserver_protocol_1.RequestType('textDocument/foldingRanges');
})(FoldingRangesRequest = exports.FoldingRangesRequest || (exports.FoldingRangesRequest = {}));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\html\server\out/protocol\foldingProvider.proposed.js.map
