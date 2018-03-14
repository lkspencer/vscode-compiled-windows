"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const definitionProviderBase_1 = require("./definitionProviderBase");
class TypeScriptTypeDefinitionProvider extends definitionProviderBase_1.default {
    provideTypeDefinition(document, position, token) {
        return this.getSymbolLocations('typeDefinition', document, position, token);
    }
}
exports.default = TypeScriptTypeDefinitionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/9a199d77c82fcb82f39c68bb33c614af01c111ba/extensions\typescript\out/features\typeDefinitionProvider.js.map
