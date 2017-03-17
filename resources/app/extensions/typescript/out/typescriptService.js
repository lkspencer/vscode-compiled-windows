/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
const semver = require("semver");
class API {
    constructor(_versionString) {
        this._versionString = _versionString;
        this._version = semver.valid(_versionString);
        if (!this._version) {
            this._version = '1.0.0';
        }
        else {
            // Cut of any prerelease tag since we sometimes consume those
            // on purpose.
            let index = _versionString.indexOf('-');
            if (index >= 0) {
                this._version = this._version.substr(0, index);
            }
        }
    }
    get versionString() {
        return this._versionString;
    }
    has203Features() {
        return semver.gte(this._version, '2.0.3');
    }
    has206Features() {
        return semver.gte(this._version, '2.0.6');
    }
    has208Features() {
        return semver.gte(this._version, '2.0.8');
    }
    has213Features() {
        return semver.gte(this._version, '2.1.3');
    }
    has220Features() {
        return semver.gte(this._version, '2.2.0');
    }
}
exports.API = API;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\typescript\out/typescriptService.js.map
