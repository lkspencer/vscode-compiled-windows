/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const definitionProviderBase_1 = require("./definitionProviderBase");
class TypeScriptDefinitionProvider extends definitionProviderBase_1.default {
    constructor(client) {
        super(client);
    }
    provideDefinition(document, position, token) {
        return this.getSymbolLocations('definition', document, position, token);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TypeScriptDefinitionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\typescript\out/features\definitionProvider.js.map
