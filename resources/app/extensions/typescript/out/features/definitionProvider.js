"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const definitionProviderBase_1 = require("./definitionProviderBase");
class TypeScriptDefinitionProvider extends definitionProviderBase_1.default {
    constructor(client) {
        super(client);
    }
    provideDefinition(document, position, token) {
        return this.getSymbolLocations('definition', document, position, token);
    }
}
exports.default = TypeScriptDefinitionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c887dd955170aebce0f6bb160b146f2e6e10a199/extensions\typescript\out/features\definitionProvider.js.map
