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
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d9484d12b38879b7f4cdd1150efeb2fd2c1fbf39/extensions\typescript\out/features\definitionProvider.js.map
