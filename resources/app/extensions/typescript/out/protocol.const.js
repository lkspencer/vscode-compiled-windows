/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
var Kind = (function () {
    function Kind() {
    }
    Kind.unknown = '';
    Kind.keyword = 'keyword';
    Kind.script = 'script';
    Kind.module = 'module';
    Kind.class = 'class';
    Kind.interface = 'interface';
    Kind.type = 'type';
    Kind.enum = 'enum';
    Kind.variable = 'var';
    Kind.localVariable = 'local var';
    Kind.function = 'function';
    Kind.localFunction = 'local function';
    Kind.memberFunction = 'method';
    Kind.memberGetAccessor = 'getter';
    Kind.memberSetAccessor = 'setter';
    Kind.memberVariable = 'property';
    Kind.constructorImplementation = 'constructor';
    Kind.callSignature = 'call';
    Kind.indexSignature = 'index';
    Kind.constructSignature = 'construct';
    Kind.parameter = 'parameter';
    Kind.typeParameter = 'type parameter';
    Kind.primitiveType = 'primitive type';
    Kind.label = 'label';
    Kind.alias = 'alias';
    Kind.const = 'const';
    Kind.let = 'let';
    Kind.warning = 'warning';
    Kind.directory = 'directory';
    Kind.file = 'file';
    return Kind;
}());
exports.Kind = Kind;
var KindModifier = (function () {
    function KindModifier() {
    }
    KindModifier.none = '';
    KindModifier.staticMember = 'public static';
    KindModifier.privateMember = 'private';
    KindModifier.protectedMember = 'protected';
    KindModifier.exported = 'export';
    KindModifier.ambient = 'declare';
    KindModifier.static = 'static';
    return KindModifier;
}());
exports.KindModifier = KindModifier;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/38746938a4ab94f2f57d9e1309c51fd6fb37553d/extensions\typescript\out/protocol.const.js.map
