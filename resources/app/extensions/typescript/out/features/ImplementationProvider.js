"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const definitionProviderBase_1 = require("./definitionProviderBase");
class TypeScriptImplementationProvider extends definitionProviderBase_1.default {
    constructor(client) {
        super(client);
    }
    provideImplementation(document, position, token) {
        return this.getSymbolLocations('implementation', document, position, token);
    }
}
exports.default = TypeScriptImplementationProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/376c52b955428d205459bea6619fc161fc8faacf/extensions\typescript\out/features\implementationProvider.js.map
