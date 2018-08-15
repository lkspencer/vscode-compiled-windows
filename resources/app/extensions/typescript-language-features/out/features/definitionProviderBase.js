"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const typeConverters = require("../utils/typeConverters");
class TypeScriptDefinitionProviderBase {
    constructor(client) {
        this.client = client;
    }
    async getSymbolLocations(definitionType, document, position, token) {
        const filepath = this.client.toPath(document.uri);
        if (!filepath) {
            return undefined;
        }
        const args = typeConverters.Position.toFileLocationRequestArgs(filepath, position);
        try {
            const response = await this.client.execute(definitionType, args, token);
            const locations = (response && response.body) || [];
            return locations.map(location => typeConverters.Location.fromTextSpan(this.client.toResource(location.file), location));
        }
        catch (_a) {
            return undefined;
        }
    }
}
exports.default = TypeScriptDefinitionProviderBase;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/4e9361845dc28659923a300945f84731393e210d/extensions\typescript-language-features\out/features\definitionProviderBase.js.map
