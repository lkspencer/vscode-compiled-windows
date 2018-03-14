"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
const convert_1 = require("../utils/convert");
class TypeScriptDefinitionProviderBase {
    constructor(client) {
        this.client = client;
    }
    async getSymbolLocations(definitionType, document, position, token) {
        const filepath = this.client.normalizePath(document.uri);
        if (!filepath) {
            return undefined;
        }
        const args = convert_1.vsPositionToTsFileLocation(filepath, position);
        try {
            const response = await this.client.execute(definitionType, args, token);
            const locations = (response && response.body) || [];
            if (!locations || locations.length === 0) {
                return [];
            }
            return locations.map(location => {
                const resource = this.client.asUrl(location.file);
                return resource
                    ? new vscode_1.Location(resource, convert_1.tsTextSpanToVsRange(location))
                    : undefined;
            }).filter(x => x);
        }
        catch (_a) {
            return [];
        }
    }
}
exports.default = TypeScriptDefinitionProviderBase;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cc11eb00ba83ee0b6d29851f1a599cf3d9469932/extensions\typescript\out/features\definitionProviderBase.js.map
