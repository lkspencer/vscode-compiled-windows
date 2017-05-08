/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function() {
var __m = ["exports","require","vs/base/common/winjs.base","vs/platform/instantiation/common/instantiation","vs/base/common/event","vs/base/common/platform","vs/base/common/types","path","vs/base/common/objects","vs/base/common/lifecycle","electron","vs/base/common/strings","vs/platform/configuration/common/configuration","vs/platform/environment/common/environment","vs/nls!vs/code/electron-main/main","vs/nls","vs/platform/node/product","vs/base/common/errors","vs/base/common/paths","vs/base/common/uri","vs/base/common/arrays","vs/base/parts/ipc/common/ipc","vs/platform/platform","vs/platform/files/common/files","vs/code/common/windows","vs/code/electron-main/log","os","vs/code/electron-main/storage","fs","vs/base/node/event","vs/base/common/uuid","vs/code/electron-main/lifecycle","vs/platform/url/common/url","vs/platform/configuration/common/configurationRegistry","vs/base/common/async","vs/code/electron-main/windows","vs/platform/telemetry/common/telemetry","vs/platform/update/common/update","original-fs","vs/platform/request/node/request","vs/base/node/request","vs/base/node/extfs","vs/platform/backup/common/backup","vs/base/common/decorators","vs/platform/instantiation/common/serviceCollection","vs/platform/node/package","vs/platform/windows/common/windows","vs/base/common/functional","vs/base/common/map","crypto","vs/platform/instantiation/common/descriptors","vs/base/node/pfs","vs/platform/environment/node/argv","vs/platform/jsonschemas/common/jsonContributionRegistry","vs/base/parts/ipc/node/ipc.net","vs/code/electron-main/paths","vs/code/electron-main/window","vs/base/node/config","vs/platform/storage/common/storage","vs/base/common/assert","vs/code/electron-main/launch","vs/platform/workspace/common/workspace","vs/platform/telemetry/common/telemetryUtils","vs/base/common/json","vs/nls!vs/code/electron-main/menus","vs/nls!vs/code/electron-main/window","vs/nls!vs/code/electron-main/windows","vs/nls!vs/platform/configuration/common/configurationRegistry","vs/nls!vs/platform/environment/node/argv","vs/nls!vs/platform/extensions/common/extensionsRegistry","vs/nls!vs/platform/request/node/request","vs/nls!vs/platform/telemetry/common/telemetryService","vs/nls!vs/workbench/parts/git/electron-main/askpassService","vs/platform/backup/common/backupIpc","vs/base/common/callbackList","vs/platform/request/electron-main/requestService","vs/base/node/id","vs/platform/update/electron-main/updateService","vs/base/common/events","vs/base/node/paths","vs/code/electron-main/app","vs/base/node/profiler","vs/base/node/proxy","url","vs/base/common/labels","vs/platform/backup/electron-main/backupMainService","vs/platform/update/electron-main/auto-updater.win32","vs/platform/instantiation/common/instantiationService","vs/platform/keybinding/common/keybinding","vs/platform/lifecycle/common/lifecycle","events","vs/platform/environment/node/http","vs/base/common/cancellation","vs/base/parts/ipc/common/ipc.electron","vs/base/parts/ipc/electron-main/ipc.electron-main","vs/platform/environment/node/environmentService","vs/base/common/glob","vs/base/common/mime","vs/platform/extensions/common/extensionsRegistry","vs/platform/update/electron-main/auto-updater.linux","vs/platform/configuration/common/model","vs/platform/configuration/node/configurationService","vs/base/node/crypto","vs/base/common/eventEmitter","vs/code/electron-main/sharedProcess","vs/platform/telemetry/common/telemetryIpc","vs/platform/telemetry/node/commonProperties","vs/code/electron-main/shellEnv","vs/platform/update/common/updateIpc","child_process","vs/platform/url/electron-main/urlService","vs/nls!vs/base/common/json","vs/base/common/graph","vs/code/node/windowsUtils","vs/base/common/collections","vs/platform/request/node/requestService","vs/base/node/flow","vs/code/electron-main/menus","vs/platform/url/common/urlIpc","vs/platform/windows/common/windowsIpc","vs/platform/windows/electron-main/windowsService","assert","vs/platform/storage/common/storageService","vs/nls!vs/base/common/severity","vs/platform/telemetry/common/telemetryService","vs/workbench/parts/git/common/git","vs/workbench/parts/git/common/gitIpc","vs/workbench/parts/git/electron-main/askpassService","vs/base/common/severity","net","https","zlib","native-keymap","minimist","http","https-proxy-agent","http-proxy-agent","getmac","vs/base/common/winjs.base.raw","vs/code/electron-main/main"];
var __M = function(deps) {
  var result = [];
  for (var i = 0, len = deps.length; i < len; i++) {
    result[i] = __m[deps[i]];
  }
  return result;
};
define(__m[20/*vs/base/common/arrays*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Returns the last element of an array.
     * @param array The array.
     * @param n Which element from the end (default is zero).
     */
    function tail(array, n) {
        if (n === void 0) { n = 0; }
        return array[array.length - (1 + n)];
    }
    exports.tail = tail;
    function equals(one, other, itemEquals) {
        if (itemEquals === void 0) { itemEquals = function (a, b) { return a === b; }; }
        if (one.length !== other.length) {
            return false;
        }
        for (var i = 0, len = one.length; i < len; i++) {
            if (!itemEquals(one[i], other[i])) {
                return false;
            }
        }
        return true;
    }
    exports.equals = equals;
    function binarySearch(array, key, comparator) {
        var low = 0, high = array.length - 1;
        while (low <= high) {
            var mid = ((low + high) / 2) | 0;
            var comp = comparator(array[mid], key);
            if (comp < 0) {
                low = mid + 1;
            }
            else if (comp > 0) {
                high = mid - 1;
            }
            else {
                return mid;
            }
        }
        return -(low + 1);
    }
    exports.binarySearch = binarySearch;
    /**
     * Takes a sorted array and a function p. The array is sorted in such a way that all elements where p(x) is false
     * are located before all elements where p(x) is true.
     * @returns the least x for which p(x) is true or array.length if no element fullfills the given function.
     */
    function findFirst(array, p) {
        var low = 0, high = array.length;
        if (high === 0) {
            return 0; // no children
        }
        while (low < high) {
            var mid = Math.floor((low + high) / 2);
            if (p(array[mid])) {
                high = mid;
            }
            else {
                low = mid + 1;
            }
        }
        return low;
    }
    exports.findFirst = findFirst;
    /**
     * Takes two *sorted* arrays and computes their delta (removed, added elements).
     * Finishes in `Math.min(before.length, after.length)` steps.
     * @param before
     * @param after
     * @param compare
     */
    function delta(before, after, compare) {
        var removed = [];
        var added = [];
        var beforeIdx = 0;
        var afterIdx = 0;
        while (true) {
            if (beforeIdx === before.length) {
                added.push.apply(added, after.slice(afterIdx));
                break;
            }
            if (afterIdx === after.length) {
                removed.push.apply(removed, before.slice(beforeIdx));
                break;
            }
            var beforeElement = before[beforeIdx];
            var afterElement = after[afterIdx];
            var n = compare(beforeElement, afterElement);
            if (n === 0) {
                // equal
                beforeIdx += 1;
                afterIdx += 1;
            }
            else if (n < 0) {
                // beforeElement is smaller -> before element removed
                removed.push(beforeElement);
                beforeIdx += 1;
            }
            else if (n > 0) {
                // beforeElement is greater -> after element added
                added.push(afterElement);
                afterIdx += 1;
            }
        }
        return { removed: removed, added: added };
    }
    exports.delta = delta;
    /**
     * Returns the top N elements from the array.
     *
     * Faster than sorting the entire array when the array is a lot larger than N.
     *
     * @param array The unsorted array.
     * @param compare A sort function for the elements.
     * @param n The number of elements to return.
     * @return The first n elemnts from array when sorted with compare.
     */
    function top(array, compare, n) {
        if (n === 0) {
            return [];
        }
        var result = array.slice(0, n).sort(compare);
        var _loop_1 = function (i, m) {
            var element = array[i];
            if (compare(element, result[n - 1]) < 0) {
                result.pop();
                var j = findFirst(result, function (e) { return compare(element, e) < 0; });
                result.splice(j, 0, element);
            }
        };
        for (var i = n, m = array.length; i < m; i++) {
            _loop_1(i, m);
        }
        return result;
    }
    exports.top = top;
    /**
     * @returns a new array with all undefined or null values removed. The original array is not modified at all.
     */
    function coalesce(array) {
        if (!array) {
            return array;
        }
        return array.filter(function (e) { return !!e; });
    }
    exports.coalesce = coalesce;
    /**
     * Moves the element in the array for the provided positions.
     */
    function move(array, from, to) {
        array.splice(to, 0, array.splice(from, 1)[0]);
    }
    exports.move = move;
    /**
     * @returns {{false}} if the provided object is an array
     * 	and not empty.
     */
    function isFalsyOrEmpty(obj) {
        return !Array.isArray(obj) || obj.length === 0;
    }
    exports.isFalsyOrEmpty = isFalsyOrEmpty;
    /**
     * Removes duplicates from the given array. The optional keyFn allows to specify
     * how elements are checked for equalness by returning a unique string for each.
     */
    function distinct(array, keyFn) {
        if (!keyFn) {
            return array.filter(function (element, position) {
                return array.indexOf(element) === position;
            });
        }
        var seen = Object.create(null);
        return array.filter(function (elem) {
            var key = keyFn(elem);
            if (seen[key]) {
                return false;
            }
            seen[key] = true;
            return true;
        });
    }
    exports.distinct = distinct;
    function uniqueFilter(keyFn) {
        var seen = Object.create(null);
        return function (element) {
            var key = keyFn(element);
            if (seen[key]) {
                return false;
            }
            seen[key] = true;
            return true;
        };
    }
    exports.uniqueFilter = uniqueFilter;
    function firstIndex(array, fn) {
        for (var i = 0; i < array.length; i++) {
            var element = array[i];
            if (fn(element)) {
                return i;
            }
        }
        return -1;
    }
    exports.firstIndex = firstIndex;
    function first(array, fn, notFoundValue) {
        if (notFoundValue === void 0) { notFoundValue = null; }
        var index = firstIndex(array, fn);
        return index < 0 ? notFoundValue : array[index];
    }
    exports.first = first;
    function commonPrefixLength(one, other, equals) {
        if (equals === void 0) { equals = function (a, b) { return a === b; }; }
        var result = 0;
        for (var i = 0, len = Math.min(one.length, other.length); i < len && equals(one[i], other[i]); i++) {
            result++;
        }
        return result;
    }
    exports.commonPrefixLength = commonPrefixLength;
    function flatten(arr) {
        return arr.reduce(function (r, v) { return r.concat(v); }, []);
    }
    exports.flatten = flatten;
    function range(to, from) {
        if (from === void 0) { from = 0; }
        var result = [];
        for (var i = from; i < to; i++) {
            result.push(i);
        }
        return result;
    }
    exports.range = range;
    function fill(num, valueFn, arr) {
        if (arr === void 0) { arr = []; }
        for (var i = 0; i < num; i++) {
            arr[i] = valueFn();
        }
        return arr;
    }
    exports.fill = fill;
    function index(array, indexer, merger) {
        if (merger === void 0) { merger = function (t) { return t; }; }
        return array.reduce(function (r, t) {
            var key = indexer(t);
            r[key] = merger(t, r[key]);
            return r;
        }, Object.create(null));
    }
    exports.index = index;
    /**
     * Inserts an element into an array. Returns a function which, when
     * called, will remove that element from the array.
     */
    function insert(array, element) {
        array.push(element);
        return function () {
            var index = array.indexOf(element);
            if (index > -1) {
                array.splice(index, 1);
            }
        };
    }
    exports.insert = insert;
});

define(__m[59/*vs/base/common/assert*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Throws an error with the provided message if the provided value does not evaluate to a true Javascript value.
     */
    function ok(value, message) {
        if (!value || value === null) {
            throw new Error(message ? 'Assertion failed (' + message + ')' : 'Assertion Failed');
        }
    }
    exports.ok = ok;
});

define(__m[114/*vs/base/common/collections*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function values(from) {
        var result = [];
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                result.push(from[key]);
            }
        }
        return result;
    }
    exports.values = values;
    function size(from) {
        var count = 0;
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                count += 1;
            }
        }
        return count;
    }
    exports.size = size;
    function forEach(from, callback) {
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                var result = callback({ key: key, value: from[key] }, function () {
                    delete from[key];
                });
                if (result === false) {
                    return;
                }
            }
        }
    }
    exports.forEach = forEach;
    function remove(from, key) {
        if (!hasOwnProperty.call(from, key)) {
            return false;
        }
        delete from[key];
        return true;
    }
    exports.remove = remove;
    /**
     * Groups the collection into a dictionary based on the provided
     * group function.
     */
    function groupBy(data, groupFn) {
        var result = Object.create(null);
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var element = data_1[_i];
            var key = groupFn(element);
            var target = result[key];
            if (!target) {
                target = result[key] = [];
            }
            target.push(element);
        }
        return result;
    }
    exports.groupBy = groupBy;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[43/*vs/base/common/decorators*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function memoize(target, key, descriptor) {
        var fnKey = null;
        var fn = null;
        if (typeof descriptor.value === 'function') {
            fnKey = 'value';
            fn = descriptor.value;
        }
        else if (typeof descriptor.get === 'function') {
            fnKey = 'get';
            fn = descriptor.get;
        }
        if (!fn) {
            throw new Error('not supported');
        }
        var memoizeKey = "$memoize$" + key;
        descriptor[fnKey] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this.hasOwnProperty(memoizeKey)) {
                Object.defineProperty(this, memoizeKey, {
                    configurable: false,
                    enumerable: false,
                    writable: false,
                    value: fn.apply(this, args)
                });
            }
            return this[memoizeKey];
        };
    }
    exports.memoize = memoize;
});

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(__m[78/*vs/base/common/events*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event = (function () {
        function Event(originalEvent) {
            this.time = (new Date()).getTime();
            this.originalEvent = originalEvent;
            this.source = null;
        }
        return Event;
    }());
    exports.Event = Event;
    var PropertyChangeEvent = (function (_super) {
        __extends(PropertyChangeEvent, _super);
        function PropertyChangeEvent(key, oldValue, newValue, originalEvent) {
            var _this = _super.call(this, originalEvent) || this;
            _this.key = key;
            _this.oldValue = oldValue;
            _this.newValue = newValue;
            return _this;
        }
        return PropertyChangeEvent;
    }(Event));
    exports.PropertyChangeEvent = PropertyChangeEvent;
    var ViewerEvent = (function (_super) {
        __extends(ViewerEvent, _super);
        function ViewerEvent(element, originalEvent) {
            var _this = _super.call(this, originalEvent) || this;
            _this.element = element;
            return _this;
        }
        return ViewerEvent;
    }(Event));
    exports.ViewerEvent = ViewerEvent;
    exports.EventType = {
        PROPERTY_CHANGED: 'propertyChanged',
        SELECTION: 'selection',
        FOCUS: 'focus',
        BLUR: 'blur',
        HIGHLIGHT: 'highlight',
        EXPAND: 'expand',
        COLLAPSE: 'collapse',
        TOGGLE: 'toggle',
        BEFORE_RUN: 'beforeRun',
        RUN: 'run',
        EDIT: 'edit',
        SAVE: 'save',
        CANCEL: 'cancel',
        CHANGE: 'change',
        DISPOSE: 'dispose',
    };
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[47/*vs/base/common/functional*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function not(fn) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return !fn.apply(void 0, args);
        };
    }
    exports.not = not;
    function once(fn) {
        var _this = this;
        var didCall = false;
        var result;
        return function () {
            if (didCall) {
                return result;
            }
            didCall = true;
            result = fn.apply(_this, arguments);
            return result;
        };
    }
    exports.once = once;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










define(__m[9/*vs/base/common/lifecycle*/], __M([1/*require*/,0/*exports*/,47/*vs/base/common/functional*/]), function (require, exports, functional_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.empty = Object.freeze({
        dispose: function () { }
    });
    function dispose(first) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        if (Array.isArray(first)) {
            first.forEach(function (d) { return d && d.dispose(); });
            return [];
        }
        else if (rest.length === 0) {
            if (first) {
                first.dispose();
                return first;
            }
            return undefined;
        }
        else {
            dispose(first);
            dispose(rest);
            return [];
        }
    }
    exports.dispose = dispose;
    function combinedDisposable(disposables) {
        return { dispose: function () { return dispose(disposables); } };
    }
    exports.combinedDisposable = combinedDisposable;
    function toDisposable() {
        var fns = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            fns[_i] = arguments[_i];
        }
        return combinedDisposable(fns.map(function (fn) { return ({ dispose: fn }); }));
    }
    exports.toDisposable = toDisposable;
    var Disposable = (function () {
        function Disposable() {
            this._toDispose = [];
        }
        Disposable.prototype.dispose = function () {
            this._toDispose = dispose(this._toDispose);
        };
        Disposable.prototype._register = function (t) {
            this._toDispose.push(t);
            return t;
        };
        return Disposable;
    }());
    exports.Disposable = Disposable;
    var Disposables = (function (_super) {
        __extends(Disposables, _super);
        function Disposables() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Disposables.prototype.add = function (arg) {
            if (!Array.isArray(arg)) {
                return this._register(arg);
            }
            else {
                for (var _i = 0, arg_1 = arg; _i < arg_1.length; _i++) {
                    var element = arg_1[_i];
                    return this._register(element);
                }
                return undefined;
            }
        };
        return Disposables;
    }(Disposable));
    exports.Disposables = Disposables;
    var OneDisposable = (function () {
        function OneDisposable() {
        }
        Object.defineProperty(OneDisposable.prototype, "value", {
            set: function (value) {
                if (this._value) {
                    this._value.dispose();
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        OneDisposable.prototype.dispose = function () {
            this.value = null;
        };
        return OneDisposable;
    }());
    exports.OneDisposable = OneDisposable;
    var ReferenceCollection = (function () {
        function ReferenceCollection() {
            this.references = Object.create(null);
        }
        ReferenceCollection.prototype.acquire = function (key) {
            var _this = this;
            var reference = this.references[key];
            if (!reference) {
                reference = this.references[key] = { counter: 0, object: this.createReferencedObject(key) };
            }
            var object = reference.object;
            var dispose = functional_1.once(function () {
                if (--reference.counter === 0) {
                    _this.destroyReferencedObject(reference.object);
                    delete _this.references[key];
                }
            });
            reference.counter++;
            return { object: object, dispose: dispose };
        };
        return ReferenceCollection;
    }());
    exports.ReferenceCollection = ReferenceCollection;
    var ImmortalReference = (function () {
        function ImmortalReference(object) {
            this.object = object;
        }
        ImmortalReference.prototype.dispose = function () { };
        return ImmortalReference;
    }());
    exports.ImmortalReference = ImmortalReference;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










define(__m[48/*vs/base/common/map*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A simple map to store value by a key object. Key can be any object that has toString() function to get
     * string value of the key.
     */
    var LinkedMap = (function () {
        function LinkedMap() {
            this.map = Object.create(null);
            this._size = 0;
        }
        Object.defineProperty(LinkedMap.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        LinkedMap.prototype.get = function (k) {
            var value = this.peek(k);
            return value ? value : null;
        };
        LinkedMap.prototype.getOrSet = function (k, t) {
            var res = this.get(k);
            if (res) {
                return res;
            }
            this.set(k, t);
            return t;
        };
        LinkedMap.prototype.keys = function () {
            var keys = [];
            for (var key in this.map) {
                keys.push(this.map[key].key);
            }
            return keys;
        };
        LinkedMap.prototype.values = function () {
            var values = [];
            for (var key in this.map) {
                values.push(this.map[key].value);
            }
            return values;
        };
        LinkedMap.prototype.entries = function () {
            var entries = [];
            for (var key in this.map) {
                entries.push(this.map[key]);
            }
            return entries;
        };
        LinkedMap.prototype.set = function (k, t) {
            if (this.get(k)) {
                return false; // already present!
            }
            this.push(k, t);
            return true;
        };
        LinkedMap.prototype.delete = function (k) {
            var value = this.get(k);
            if (value) {
                this.pop(k);
                return value;
            }
            return null;
        };
        LinkedMap.prototype.has = function (k) {
            return !!this.get(k);
        };
        LinkedMap.prototype.clear = function () {
            this.map = Object.create(null);
            this._size = 0;
        };
        LinkedMap.prototype.push = function (key, value) {
            var entry = { key: key, value: value };
            this.map[key.toString()] = entry;
            this._size++;
        };
        LinkedMap.prototype.pop = function (k) {
            delete this.map[k.toString()];
            this._size--;
        };
        LinkedMap.prototype.peek = function (k) {
            var entry = this.map[k.toString()];
            return entry ? entry.value : null;
        };
        return LinkedMap;
    }());
    exports.LinkedMap = LinkedMap;
    /**
     * A simple Map<T> that optionally allows to set a limit of entries to store. Once the limit is hit,
     * the cache will remove the entry that was last recently added. Or, if a ratio is provided below 1,
     * all elements will be removed until the ratio is full filled (e.g. 0.75 to remove 25% of old elements).
     */
    var BoundedLinkedMap = (function () {
        function BoundedLinkedMap(limit, ratio) {
            if (limit === void 0) { limit = Number.MAX_VALUE; }
            if (ratio === void 0) { ratio = 1; }
            this.limit = limit;
            this.map = Object.create(null);
            this._size = 0;
            this.ratio = limit * ratio;
        }
        Object.defineProperty(BoundedLinkedMap.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        BoundedLinkedMap.prototype.set = function (key, value) {
            if (this.map[key]) {
                return false; // already present!
            }
            var entry = { key: key, value: value };
            this.push(entry);
            if (this._size > this.limit) {
                this.trim();
            }
            return true;
        };
        BoundedLinkedMap.prototype.get = function (key) {
            var entry = this.map[key];
            return entry ? entry.value : null;
        };
        BoundedLinkedMap.prototype.getOrSet = function (k, t) {
            var res = this.get(k);
            if (res) {
                return res;
            }
            this.set(k, t);
            return t;
        };
        BoundedLinkedMap.prototype.delete = function (key) {
            var entry = this.map[key];
            if (entry) {
                this.map[key] = void 0;
                this._size--;
                if (entry.next) {
                    entry.next.prev = entry.prev; // [A]<-[x]<-[C] = [A]<-[C]
                }
                else {
                    this.head = entry.prev; // [A]-[x] = [A]
                }
                if (entry.prev) {
                    entry.prev.next = entry.next; // [A]->[x]->[C] = [A]->[C]
                }
                else {
                    this.tail = entry.next; // [x]-[A] = [A]
                }
                return entry.value;
            }
            return null;
        };
        BoundedLinkedMap.prototype.has = function (key) {
            return !!this.map[key];
        };
        BoundedLinkedMap.prototype.clear = function () {
            this.map = Object.create(null);
            this._size = 0;
            this.head = null;
            this.tail = null;
        };
        BoundedLinkedMap.prototype.push = function (entry) {
            if (this.head) {
                // [A]-[B] = [A]-[B]->[X]
                entry.prev = this.head;
                this.head.next = entry;
            }
            if (!this.tail) {
                this.tail = entry;
            }
            this.head = entry;
            this.map[entry.key] = entry;
            this._size++;
        };
        BoundedLinkedMap.prototype.trim = function () {
            if (this.tail) {
                // Remove all elements until ratio is reached
                if (this.ratio < this.limit) {
                    var index = 0;
                    var current = this.tail;
                    while (current.next) {
                        // Remove the entry
                        this.map[current.key] = void 0;
                        this._size--;
                        // if we reached the element that overflows our ratio condition
                        // make its next element the new tail of the Map and adjust the size
                        if (index === this.ratio) {
                            this.tail = current.next;
                            this.tail.prev = null;
                            break;
                        }
                        // Move on
                        current = current.next;
                        index++;
                    }
                }
                else {
                    this.map[this.tail.key] = void 0;
                    this._size--;
                    // [x]-[B] = [B]
                    this.tail = this.tail.next;
                    this.tail.prev = null;
                }
            }
        };
        return BoundedLinkedMap;
    }());
    exports.BoundedLinkedMap = BoundedLinkedMap;
    /**
     * A subclass of Map<T> that makes an entry the MRU entry as soon
     * as it is being accessed. In combination with the limit for the
     * maximum number of elements in the cache, it helps to remove those
     * entries from the cache that are LRU.
     */
    var LRUCache = (function (_super) {
        __extends(LRUCache, _super);
        function LRUCache(limit) {
            return _super.call(this, limit) || this;
        }
        LRUCache.prototype.get = function (key) {
            // Upon access of an entry, make it the head of
            // the linked map so that it is the MRU element
            var entry = this.map[key];
            if (entry) {
                this.delete(key);
                this.push(entry);
                return entry.value;
            }
            return null;
        };
        return LRUCache;
    }(BoundedLinkedMap));
    exports.LRUCache = LRUCache;
    // --- trie'ish datastructure
    var Node = (function () {
        function Node() {
            this.children = new Map();
        }
        return Node;
    }());
    /**
     * A trie map that allows for fast look up when keys are substrings
     * to the actual search keys (dir/subdir-problem).
     */
    var TrieMap = (function () {
        function TrieMap(splitter) {
            this._root = new Node();
            this._splitter = splitter;
        }
        TrieMap.prototype.insert = function (path, element) {
            var parts = this._splitter(path);
            var i = 0;
            // find insertion node
            var node = this._root;
            for (; i < parts.length; i++) {
                var child = node.children.get(parts[i]);
                if (child) {
                    node = child;
                    continue;
                }
                break;
            }
            // create new nodes
            var newNode;
            for (; i < parts.length; i++) {
                newNode = new Node();
                node.children.set(parts[i], newNode);
                node = newNode;
            }
            node.element = element;
        };
        TrieMap.prototype.lookUp = function (path) {
            var parts = this._splitter(path);
            var children = this._root.children;
            var node;
            for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                var part = parts_1[_i];
                node = children.get(part);
                if (!node) {
                    return undefined;
                }
                children = node.children;
            }
            return node.element;
        };
        TrieMap.prototype.findSubstr = function (path) {
            var parts = this._splitter(path);
            var lastNode;
            var children = this._root.children;
            for (var _i = 0, parts_2 = parts; _i < parts_2.length; _i++) {
                var part = parts_2[_i];
                var node = children.get(part);
                if (!node) {
                    break;
                }
                if (node.element) {
                    lastNode = node;
                }
                children = node.children;
            }
            // return the last matching node
            // that had an element
            if (lastNode) {
                return lastNode.element;
            }
            return undefined;
        };
        TrieMap.prototype.findSuperstr = function (path) {
            var parts = this._splitter(path);
            var children = this._root.children;
            var node;
            for (var _i = 0, parts_3 = parts; _i < parts_3.length; _i++) {
                var part = parts_3[_i];
                node = children.get(part);
                if (!node) {
                    return undefined;
                }
                children = node.children;
            }
            var result = new TrieMap(this._splitter);
            result._root = node;
            return result;
        };
        return TrieMap;
    }());
    TrieMap.PathSplitter = function (s) { return s.split(/[\\/]/).filter(function (s) { return !!s; }); };
    exports.TrieMap = TrieMap;
    var ResourceMap = (function () {
        function ResourceMap(ignoreCase) {
            this.ignoreCase = ignoreCase;
            this.map = new Map();
        }
        ResourceMap.prototype.set = function (resource, value) {
            this.map.set(this.toKey(resource), value);
        };
        ResourceMap.prototype.get = function (resource) {
            return this.map.get(this.toKey(resource));
        };
        ResourceMap.prototype.has = function (resource) {
            return this.map.has(this.toKey(resource));
        };
        Object.defineProperty(ResourceMap.prototype, "size", {
            get: function () {
                return this.map.size;
            },
            enumerable: true,
            configurable: true
        });
        ResourceMap.prototype.clear = function () {
            this.map.clear();
        };
        ResourceMap.prototype.delete = function (resource) {
            return this.map.delete(this.toKey(resource));
        };
        ResourceMap.prototype.forEach = function (clb) {
            this.map.forEach(clb);
        };
        ResourceMap.prototype.values = function () {
            var values = [];
            this.map.forEach(function (value) { return values.push(value); });
            return values;
        };
        ResourceMap.prototype.toKey = function (resource) {
            var key = resource.toString();
            if (this.ignoreCase) {
                key = key.toLowerCase();
            }
            return key;
        };
        return ResourceMap;
    }());
    exports.ResourceMap = ResourceMap;
});

define(__m[5/*vs/base/common/platform*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    // --- THIS FILE IS TEMPORARY UNTIL ENV.TS IS CLEANED UP. IT CAN SAFELY BE USED IN ALL TARGET EXECUTION ENVIRONMENTS (node & dom) ---
    var _isWindows = false;
    var _isMacintosh = false;
    var _isLinux = false;
    var _isRootUser = false;
    var _isNative = false;
    var _isWeb = false;
    var _isQunit = false;
    var _locale = undefined;
    var _language = undefined;
    exports.LANGUAGE_DEFAULT = 'en';
    // OS detection
    if (typeof process === 'object') {
        _isWindows = (process.platform === 'win32');
        _isMacintosh = (process.platform === 'darwin');
        _isLinux = (process.platform === 'linux');
        _isRootUser = !_isWindows && (process.getuid() === 0);
        var rawNlsConfig = process.env['VSCODE_NLS_CONFIG'];
        if (rawNlsConfig) {
            try {
                var nlsConfig = JSON.parse(rawNlsConfig);
                var resolved = nlsConfig.availableLanguages['*'];
                _locale = nlsConfig.locale;
                // VSCode's default language is 'en'
                _language = resolved ? resolved : exports.LANGUAGE_DEFAULT;
            }
            catch (e) {
            }
        }
        _isNative = true;
    }
    else if (typeof navigator === 'object') {
        var userAgent = navigator.userAgent;
        _isWindows = userAgent.indexOf('Windows') >= 0;
        _isMacintosh = userAgent.indexOf('Macintosh') >= 0;
        _isLinux = userAgent.indexOf('Linux') >= 0;
        _isWeb = true;
        _locale = navigator.language;
        _language = _locale;
        _isQunit = !!self.QUnit;
    }
    var Platform;
    (function (Platform) {
        Platform[Platform["Web"] = 0] = "Web";
        Platform[Platform["Mac"] = 1] = "Mac";
        Platform[Platform["Linux"] = 2] = "Linux";
        Platform[Platform["Windows"] = 3] = "Windows";
    })(Platform = exports.Platform || (exports.Platform = {}));
    exports._platform = Platform.Web;
    if (_isNative) {
        if (_isMacintosh) {
            exports._platform = Platform.Mac;
        }
        else if (_isWindows) {
            exports._platform = Platform.Windows;
        }
        else if (_isLinux) {
            exports._platform = Platform.Linux;
        }
    }
    exports.isWindows = _isWindows;
    exports.isMacintosh = _isMacintosh;
    exports.isLinux = _isLinux;
    exports.isRootUser = _isRootUser;
    exports.isNative = _isNative;
    exports.isWeb = _isWeb;
    exports.isQunit = _isQunit;
    exports.platform = exports._platform;
    /**
     * The language used for the user interface. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese)
     */
    exports.language = _language;
    /**
     * The OS locale or the locale specified by --locale. The format of
     * the string is all lower case (e.g. zh-tw for Traditional
     * Chinese). The UI is not necessarily shown in the provided locale.
     */
    exports.locale = _locale;
    var _globals = (typeof self === 'object' ? self : global);
    exports.globals = _globals;
    function hasWebWorkerSupport() {
        return typeof _globals.Worker !== 'undefined';
    }
    exports.hasWebWorkerSupport = hasWebWorkerSupport;
    exports.setTimeout = _globals.setTimeout.bind(_globals);
    exports.clearTimeout = _globals.clearTimeout.bind(_globals);
    exports.setInterval = _globals.setInterval.bind(_globals);
    exports.clearInterval = _globals.clearInterval.bind(_globals);
    var OperatingSystem;
    (function (OperatingSystem) {
        OperatingSystem[OperatingSystem["Windows"] = 1] = "Windows";
        OperatingSystem[OperatingSystem["Macintosh"] = 2] = "Macintosh";
        OperatingSystem[OperatingSystem["Linux"] = 3] = "Linux";
    })(OperatingSystem = exports.OperatingSystem || (exports.OperatingSystem = {}));
    exports.OS = (_isMacintosh ? 2 /* Macintosh */ : (_isWindows ? 1 /* Windows */ : 3 /* Linux */));
});

define(__m[11/*vs/base/common/strings*/], __M([1/*require*/,0/*exports*/,48/*vs/base/common/map*/]), function (require, exports, map_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The empty string.
     */
    exports.empty = '';
    function isFalsyOrWhitespace(str) {
        if (!str || typeof str !== 'string') {
            return true;
        }
        return str.trim().length === 0;
    }
    exports.isFalsyOrWhitespace = isFalsyOrWhitespace;
    /**
     * @returns the provided number with the given number of preceding zeros.
     */
    function pad(n, l, char) {
        if (char === void 0) { char = '0'; }
        var str = '' + n;
        var r = [str];
        for (var i = str.length; i < l; i++) {
            r.push(char);
        }
        return r.reverse().join('');
    }
    exports.pad = pad;
    var _formatRegexp = /{(\d+)}/g;
    /**
     * Helper to produce a string with a variable number of arguments. Insert variable segments
     * into the string using the {n} notation where N is the index of the argument following the string.
     * @param value string to which formatting is applied
     * @param args replacements for {n}-entries
     */
    function format(value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (args.length === 0) {
            return value;
        }
        return value.replace(_formatRegexp, function (match, group) {
            var idx = parseInt(group, 10);
            return isNaN(idx) || idx < 0 || idx >= args.length ?
                match :
                args[idx];
        });
    }
    exports.format = format;
    /**
     * Converts HTML characters inside the string to use entities instead. Makes the string safe from
     * being used e.g. in HTMLElement.innerHTML.
     */
    function escape(html) {
        return html.replace(/[<|>|&]/g, function (match) {
            switch (match) {
                case '<': return '&lt;';
                case '>': return '&gt;';
                case '&': return '&amp;';
                default: return match;
            }
        });
    }
    exports.escape = escape;
    /**
     * Escapes regular expression characters in a given string
     */
    function escapeRegExpCharacters(value) {
        return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\[\]\(\)\#]/g, '\\$&');
    }
    exports.escapeRegExpCharacters = escapeRegExpCharacters;
    /**
     * Removes all occurrences of needle from the beginning and end of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim (default is a blank)
     */
    function trim(haystack, needle) {
        if (needle === void 0) { needle = ' '; }
        var trimmed = ltrim(haystack, needle);
        return rtrim(trimmed, needle);
    }
    exports.trim = trim;
    /**
     * Removes all occurrences of needle from the beginning of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim
     */
    function ltrim(haystack, needle) {
        if (!haystack || !needle) {
            return haystack;
        }
        var needleLen = needle.length;
        if (needleLen === 0 || haystack.length === 0) {
            return haystack;
        }
        var offset = 0, idx = -1;
        while ((idx = haystack.indexOf(needle, offset)) === offset) {
            offset = offset + needleLen;
        }
        return haystack.substring(offset);
    }
    exports.ltrim = ltrim;
    /**
     * Removes all occurrences of needle from the end of haystack.
     * @param haystack string to trim
     * @param needle the thing to trim
     */
    function rtrim(haystack, needle) {
        if (!haystack || !needle) {
            return haystack;
        }
        var needleLen = needle.length, haystackLen = haystack.length;
        if (needleLen === 0 || haystackLen === 0) {
            return haystack;
        }
        var offset = haystackLen, idx = -1;
        while (true) {
            idx = haystack.lastIndexOf(needle, offset - 1);
            if (idx === -1 || idx + needleLen !== offset) {
                break;
            }
            if (idx === 0) {
                return '';
            }
            offset = idx;
        }
        return haystack.substring(0, offset);
    }
    exports.rtrim = rtrim;
    function convertSimple2RegExpPattern(pattern) {
        return pattern.replace(/[\-\\\{\}\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, '\\$&').replace(/[\*]/g, '.*');
    }
    exports.convertSimple2RegExpPattern = convertSimple2RegExpPattern;
    function stripWildcards(pattern) {
        return pattern.replace(/\*/g, '');
    }
    exports.stripWildcards = stripWildcards;
    /**
     * Determines if haystack starts with needle.
     */
    function startsWith(haystack, needle) {
        if (haystack.length < needle.length) {
            return false;
        }
        for (var i = 0; i < needle.length; i++) {
            if (haystack[i] !== needle[i]) {
                return false;
            }
        }
        return true;
    }
    exports.startsWith = startsWith;
    /**
     * Determines if haystack ends with needle.
     */
    function endsWith(haystack, needle) {
        var diff = haystack.length - needle.length;
        if (diff > 0) {
            return haystack.indexOf(needle, diff) === diff;
        }
        else if (diff === 0) {
            return haystack === needle;
        }
        else {
            return false;
        }
    }
    exports.endsWith = endsWith;
    function indexOfIgnoreCase(haystack, needle, position) {
        if (position === void 0) { position = 0; }
        var index = haystack.indexOf(needle, position);
        if (index < 0) {
            if (position > 0) {
                haystack = haystack.substr(position);
            }
            needle = escapeRegExpCharacters(needle);
            index = haystack.search(new RegExp(needle, 'i'));
        }
        return index;
    }
    exports.indexOfIgnoreCase = indexOfIgnoreCase;
    function createRegExp(searchString, isRegex, options) {
        if (options === void 0) { options = {}; }
        if (searchString === '') {
            throw new Error('Cannot create regex from empty string');
        }
        if (!isRegex) {
            searchString = escapeRegExpCharacters(searchString);
        }
        if (options.wholeWord) {
            if (!/\B/.test(searchString.charAt(0))) {
                searchString = '\\b' + searchString;
            }
            if (!/\B/.test(searchString.charAt(searchString.length - 1))) {
                searchString = searchString + '\\b';
            }
        }
        var modifiers = '';
        if (options.global) {
            modifiers += 'g';
        }
        if (!options.matchCase) {
            modifiers += 'i';
        }
        if (options.multiline) {
            modifiers += 'm';
        }
        return new RegExp(searchString, modifiers);
    }
    exports.createRegExp = createRegExp;
    function regExpLeadsToEndlessLoop(regexp) {
        // Exit early if it's one of these special cases which are meant to match
        // against an empty string
        if (regexp.source === '^' || regexp.source === '^$' || regexp.source === '$') {
            return false;
        }
        // We check against an empty string. If the regular expression doesn't advance
        // (e.g. ends in an endless loop) it will match an empty string.
        var match = regexp.exec('');
        return (match && regexp.lastIndex === 0);
    }
    exports.regExpLeadsToEndlessLoop = regExpLeadsToEndlessLoop;
    /**
     * The normalize() method returns the Unicode Normalization Form of a given string. The form will be
     * the Normalization Form Canonical Composition.
     *
     * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize}
     */
    exports.canNormalize = typeof (''.normalize) === 'function';
    var nonAsciiCharactersPattern = /[^\u0000-\u0080]/;
    var normalizedCache = new map_1.BoundedLinkedMap(10000); // bounded to 10000 elements
    function normalizeNFC(str) {
        if (!exports.canNormalize || !str) {
            return str;
        }
        var cached = normalizedCache.get(str);
        if (cached) {
            return cached;
        }
        var res;
        if (nonAsciiCharactersPattern.test(str)) {
            res = str.normalize('NFC');
        }
        else {
            res = str;
        }
        // Use the cache for fast lookup
        normalizedCache.set(str, res);
        return res;
    }
    exports.normalizeNFC = normalizeNFC;
    /**
     * Returns first index of the string that is not whitespace.
     * If string is empty or contains only whitespaces, returns -1
     */
    function firstNonWhitespaceIndex(str) {
        for (var i = 0, len = str.length; i < len; i++) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
        }
        return -1;
    }
    exports.firstNonWhitespaceIndex = firstNonWhitespaceIndex;
    /**
     * Returns the leading whitespace of the string.
     * If the string contains only whitespaces, returns entire string
     */
    function getLeadingWhitespace(str) {
        for (var i = 0, len = str.length; i < len; i++) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return str.substring(0, i);
            }
        }
        return str;
    }
    exports.getLeadingWhitespace = getLeadingWhitespace;
    /**
     * Returns last index of the string that is not whitespace.
     * If string is empty or contains only whitespaces, returns -1
     */
    function lastNonWhitespaceIndex(str, startIndex) {
        if (startIndex === void 0) { startIndex = str.length - 1; }
        for (var i = startIndex; i >= 0; i--) {
            var chCode = str.charCodeAt(i);
            if (chCode !== 32 /* Space */ && chCode !== 9 /* Tab */) {
                return i;
            }
        }
        return -1;
    }
    exports.lastNonWhitespaceIndex = lastNonWhitespaceIndex;
    function compare(a, b) {
        if (a < b) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else {
            return 0;
        }
    }
    exports.compare = compare;
    function compareIgnoreCase(a, b) {
        var len = Math.min(a.length, b.length);
        for (var i = 0; i < len; i++) {
            var codeA = a.charCodeAt(i);
            var codeB = b.charCodeAt(i);
            if (codeA === codeB) {
                // equal
                continue;
            }
            if (isUpperAsciiLetter(codeA)) {
                codeA -= 32;
            }
            if (isUpperAsciiLetter(codeB)) {
                codeB -= 32;
            }
            var diff = codeA - codeB;
            if (diff === 0) {
                // equal -> ignoreCase
                continue;
            }
            else if (isLowerAsciiLetter(codeA) && isLowerAsciiLetter(codeB)) {
                //
                return diff;
            }
            else {
                return compare(a.toLowerCase(), b.toLowerCase());
            }
        }
        if (a.length < b.length) {
            return -1;
        }
        else if (a.length > b.length) {
            return 1;
        }
        else {
            return 0;
        }
    }
    exports.compareIgnoreCase = compareIgnoreCase;
    function isLowerAsciiLetter(code) {
        return code >= 97 /* a */ && code <= 122 /* z */;
    }
    function isUpperAsciiLetter(code) {
        return code >= 65 /* A */ && code <= 90 /* Z */;
    }
    function isAsciiLetter(code) {
        return isLowerAsciiLetter(code) || isUpperAsciiLetter(code);
    }
    function equalsIgnoreCase(a, b) {
        var len1 = a.length, len2 = b.length;
        if (len1 !== len2) {
            return false;
        }
        return doEqualsIgnoreCase(a, b);
    }
    exports.equalsIgnoreCase = equalsIgnoreCase;
    function doEqualsIgnoreCase(a, b, stopAt) {
        if (stopAt === void 0) { stopAt = a.length; }
        for (var i = 0; i < stopAt; i++) {
            var codeA = a.charCodeAt(i);
            var codeB = b.charCodeAt(i);
            if (codeA === codeB) {
                continue;
            }
            // a-z A-Z
            if (isAsciiLetter(codeA) && isAsciiLetter(codeB)) {
                var diff = Math.abs(codeA - codeB);
                if (diff !== 0 && diff !== 32) {
                    return false;
                }
            }
            else {
                if (String.fromCharCode(codeA).toLowerCase() !== String.fromCharCode(codeB).toLowerCase()) {
                    return false;
                }
            }
        }
        return true;
    }
    exports.doEqualsIgnoreCase = doEqualsIgnoreCase;
    function beginsWithIgnoreCase(str, candidate) {
        var candidateLength = candidate.length;
        if (candidate.length > str.length) {
            return false;
        }
        return doEqualsIgnoreCase(str, candidate, candidateLength);
    }
    exports.beginsWithIgnoreCase = beginsWithIgnoreCase;
    /**
     * @returns the length of the common prefix of the two strings.
     */
    function commonPrefixLength(a, b) {
        var i, len = Math.min(a.length, b.length);
        for (i = 0; i < len; i++) {
            if (a.charCodeAt(i) !== b.charCodeAt(i)) {
                return i;
            }
        }
        return len;
    }
    exports.commonPrefixLength = commonPrefixLength;
    /**
     * @returns the length of the common suffix of the two strings.
     */
    function commonSuffixLength(a, b) {
        var i, len = Math.min(a.length, b.length);
        var aLastIndex = a.length - 1;
        var bLastIndex = b.length - 1;
        for (i = 0; i < len; i++) {
            if (a.charCodeAt(aLastIndex - i) !== b.charCodeAt(bLastIndex - i)) {
                return i;
            }
        }
        return len;
    }
    exports.commonSuffixLength = commonSuffixLength;
    // --- unicode
    // http://en.wikipedia.org/wiki/Surrogate_pair
    // Returns the code point starting at a specified index in a string
    // Code points U+0000 to U+D7FF and U+E000 to U+FFFF are represented on a single character
    // Code points U+10000 to U+10FFFF are represented on two consecutive characters
    //export function getUnicodePoint(str:string, index:number, len:number):number {
    //	let chrCode = str.charCodeAt(index);
    //	if (0xD800 <= chrCode && chrCode <= 0xDBFF && index + 1 < len) {
    //		let nextChrCode = str.charCodeAt(index + 1);
    //		if (0xDC00 <= nextChrCode && nextChrCode <= 0xDFFF) {
    //			return (chrCode - 0xD800) << 10 + (nextChrCode - 0xDC00) + 0x10000;
    //		}
    //	}
    //	return chrCode;
    //}
    function isHighSurrogate(charCode) {
        return (0xD800 <= charCode && charCode <= 0xDBFF);
    }
    exports.isHighSurrogate = isHighSurrogate;
    function isLowSurrogate(charCode) {
        return (0xDC00 <= charCode && charCode <= 0xDFFF);
    }
    exports.isLowSurrogate = isLowSurrogate;
    /**
     * Generated using https://github.com/alexandrudima/unicode-utils/blob/master/generate-rtl-test.js
     */
    var CONTAINS_RTL = /(?:[\u05BE\u05C0\u05C3\u05C6\u05D0-\u05F4\u0608\u060B\u060D\u061B-\u064A\u066D-\u066F\u0671-\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u0710\u0712-\u072F\u074D-\u07A5\u07B1-\u07EA\u07F4\u07F5\u07FA-\u0815\u081A\u0824\u0828\u0830-\u0858\u085E-\u08BD\u200F\uFB1D\uFB1F-\uFB28\uFB2A-\uFD3D\uFD50-\uFDFC\uFE70-\uFEFC]|\uD802[\uDC00-\uDD1B\uDD20-\uDE00\uDE10-\uDE33\uDE40-\uDEE4\uDEEB-\uDF35\uDF40-\uDFFF]|\uD803[\uDC00-\uDCFF]|\uD83A[\uDC00-\uDCCF\uDD00-\uDD43\uDD50-\uDFFF]|\uD83B[\uDC00-\uDEBB])/;
    /**
     * Returns true if `str` contains any Unicode character that is classified as "R" or "AL".
     */
    function containsRTL(str) {
        return CONTAINS_RTL.test(str);
    }
    exports.containsRTL = containsRTL;
    var IS_BASIC_ASCII = /^[\t\n\r\x20-\x7E]*$/;
    /**
     * Returns true if `str` contains only basic ASCII characters in the range 32 - 126 (including 32 and 126) or \n, \r, \t
     */
    function isBasicASCII(str) {
        return IS_BASIC_ASCII.test(str);
    }
    exports.isBasicASCII = isBasicASCII;
    function isFullWidthCharacter(charCode) {
        // Do a cheap trick to better support wrapping of wide characters, treat them as 2 columns
        // http://jrgraphix.net/research/unicode_blocks.php
        //          2E80 — 2EFF   CJK Radicals Supplement
        //          2F00 — 2FDF   Kangxi Radicals
        //          2FF0 — 2FFF   Ideographic Description Characters
        //          3000 — 303F   CJK Symbols and Punctuation
        //          3040 — 309F   Hiragana
        //          30A0 — 30FF   Katakana
        //          3100 — 312F   Bopomofo
        //          3130 — 318F   Hangul Compatibility Jamo
        //          3190 — 319F   Kanbun
        //          31A0 — 31BF   Bopomofo Extended
        //          31F0 — 31FF   Katakana Phonetic Extensions
        //          3200 — 32FF   Enclosed CJK Letters and Months
        //          3300 — 33FF   CJK Compatibility
        //          3400 — 4DBF   CJK Unified Ideographs Extension A
        //          4DC0 — 4DFF   Yijing Hexagram Symbols
        //          4E00 — 9FFF   CJK Unified Ideographs
        //          A000 — A48F   Yi Syllables
        //          A490 — A4CF   Yi Radicals
        //          AC00 — D7AF   Hangul Syllables
        // [IGNORE] D800 — DB7F   High Surrogates
        // [IGNORE] DB80 — DBFF   High Private Use Surrogates
        // [IGNORE] DC00 — DFFF   Low Surrogates
        // [IGNORE] E000 — F8FF   Private Use Area
        //          F900 — FAFF   CJK Compatibility Ideographs
        // [IGNORE] FB00 — FB4F   Alphabetic Presentation Forms
        // [IGNORE] FB50 — FDFF   Arabic Presentation Forms-A
        // [IGNORE] FE00 — FE0F   Variation Selectors
        // [IGNORE] FE20 — FE2F   Combining Half Marks
        // [IGNORE] FE30 — FE4F   CJK Compatibility Forms
        // [IGNORE] FE50 — FE6F   Small Form Variants
        // [IGNORE] FE70 — FEFF   Arabic Presentation Forms-B
        //          FF00 — FFEF   Halfwidth and Fullwidth Forms
        //               [https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms]
        //               of which FF01 - FF5E fullwidth ASCII of 21 to 7E
        // [IGNORE]    and FF65 - FFDC halfwidth of Katakana and Hangul
        // [IGNORE] FFF0 — FFFF   Specials
        charCode = +charCode; // @perf
        return ((charCode >= 0x2E80 && charCode <= 0xD7AF)
            || (charCode >= 0xF900 && charCode <= 0xFAFF)
            || (charCode >= 0xFF01 && charCode <= 0xFF5E));
    }
    exports.isFullWidthCharacter = isFullWidthCharacter;
    /**
     * Computes the difference score for two strings. More similar strings have a higher score.
     * We use largest common subsequence dynamic programming approach but penalize in the end for length differences.
     * Strings that have a large length difference will get a bad default score 0.
     * Complexity - both time and space O(first.length * second.length)
     * Dynamic programming LCS computation http://en.wikipedia.org/wiki/Longest_common_subsequence_problem
     *
     * @param first a string
     * @param second a string
     */
    function difference(first, second, maxLenDelta) {
        if (maxLenDelta === void 0) { maxLenDelta = 4; }
        var lengthDifference = Math.abs(first.length - second.length);
        // We only compute score if length of the currentWord and length of entry.name are similar.
        if (lengthDifference > maxLenDelta) {
            return 0;
        }
        // Initialize LCS (largest common subsequence) matrix.
        var LCS = [];
        var zeroArray = [];
        var i, j;
        for (i = 0; i < second.length + 1; ++i) {
            zeroArray.push(0);
        }
        for (i = 0; i < first.length + 1; ++i) {
            LCS.push(zeroArray);
        }
        for (i = 1; i < first.length + 1; ++i) {
            for (j = 1; j < second.length + 1; ++j) {
                if (first[i - 1] === second[j - 1]) {
                    LCS[i][j] = LCS[i - 1][j - 1] + 1;
                }
                else {
                    LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
                }
            }
        }
        return LCS[first.length][second.length] - Math.sqrt(lengthDifference);
    }
    exports.difference = difference;
    /**
     * Returns an array in which every entry is the offset of a
     * line. There is always one entry which is zero.
     */
    function computeLineStarts(text) {
        var regexp = /\r\n|\r|\n/g, ret = [0], match;
        while ((match = regexp.exec(text))) {
            ret.push(regexp.lastIndex);
        }
        return ret;
    }
    exports.computeLineStarts = computeLineStarts;
    /**
     * Given a string and a max length returns a shorted version. Shorting
     * happens at favorable positions - such as whitespace or punctuation characters.
     */
    function lcut(text, n) {
        if (text.length < n) {
            return text;
        }
        var segments = text.split(/\b/), count = 0;
        for (var i = segments.length - 1; i >= 0; i--) {
            count += segments[i].length;
            if (count > n) {
                segments.splice(0, i);
                break;
            }
        }
        return segments.join(exports.empty).replace(/^\s/, exports.empty);
    }
    exports.lcut = lcut;
    // Escape codes
    // http://en.wikipedia.org/wiki/ANSI_escape_code
    var EL = /\x1B\x5B[12]?K/g; // Erase in line
    var COLOR_START = /\x1b\[\d+m/g; // Color
    var COLOR_END = /\x1b\[0?m/g; // Color
    function removeAnsiEscapeCodes(str) {
        if (str) {
            str = str.replace(EL, '');
            str = str.replace(COLOR_START, '');
            str = str.replace(COLOR_END, '');
        }
        return str;
    }
    exports.removeAnsiEscapeCodes = removeAnsiEscapeCodes;
    // -- UTF-8 BOM
    exports.UTF8_BOM_CHARACTER = String.fromCharCode(65279 /* UTF8_BOM */);
    function startsWithUTF8BOM(str) {
        return (str && str.length > 0 && str.charCodeAt(0) === 65279 /* UTF8_BOM */);
    }
    exports.startsWithUTF8BOM = startsWithUTF8BOM;
    /**
     * Appends two strings. If the appended result is longer than maxLength,
     * trims the start of the result and replaces it with '...'.
     */
    function appendWithLimit(first, second, maxLength) {
        var newLength = first.length + second.length;
        if (newLength > maxLength) {
            first = '...' + first.substr(newLength - maxLength);
        }
        if (second.length > maxLength) {
            first += second.substr(second.length - maxLength);
        }
        else {
            first += second;
        }
        return first;
    }
    exports.appendWithLimit = appendWithLimit;
    function safeBtoa(str) {
        return btoa(encodeURIComponent(str)); // we use encodeURIComponent because btoa fails for non Latin 1 values
    }
    exports.safeBtoa = safeBtoa;
    function repeat(s, count) {
        var result = '';
        for (var i = 0; i < count; i++) {
            result += s;
        }
        return result;
    }
    exports.repeat = repeat;
});

define(__m[18/*vs/base/common/paths*/], __M([1/*require*/,0/*exports*/,5/*vs/base/common/platform*/,20/*vs/base/common/arrays*/,11/*vs/base/common/strings*/]), function (require, exports, platform_1, arrays_1, strings_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * The forward slash path separator.
     */
    exports.sep = '/';
    /**
     * The native path separator depending on the OS.
     */
    exports.nativeSep = platform_1.isWindows ? '\\' : '/';
    function relative(from, to) {
        // ignore trailing slashes
        var originalNormalizedFrom = strings_1.rtrim(normalize(from), exports.sep);
        var originalNormalizedTo = strings_1.rtrim(normalize(to), exports.sep);
        // we're assuming here that any non=linux OS is case insensitive
        // so we must compare each part in its lowercase form
        var normalizedFrom = platform_1.isLinux ? originalNormalizedFrom : originalNormalizedFrom.toLowerCase();
        var normalizedTo = platform_1.isLinux ? originalNormalizedTo : originalNormalizedTo.toLowerCase();
        var fromParts = normalizedFrom.split(exports.sep);
        var toParts = normalizedTo.split(exports.sep);
        var i = 0, max = Math.min(fromParts.length, toParts.length);
        for (; i < max; i++) {
            if (fromParts[i] !== toParts[i]) {
                break;
            }
        }
        var result = arrays_1.fill(fromParts.length - i, function () { return '..'; }).concat(originalNormalizedTo.split(exports.sep).slice(i));
        return result.join(exports.sep);
    }
    exports.relative = relative;
    /**
     * @returns the directory name of a path.
     */
    function dirname(path) {
        var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
        if (idx === 0) {
            return '.';
        }
        else if (~idx === 0) {
            return path[0];
        }
        else {
            var res = path.substring(0, ~idx);
            if (platform_1.isWindows && res[res.length - 1] === ':') {
                res += exports.nativeSep; // make sure drive letters end with backslash
            }
            return res;
        }
    }
    exports.dirname = dirname;
    /**
     * @returns the base name of a path.
     */
    function basename(path) {
        var idx = ~path.lastIndexOf('/') || ~path.lastIndexOf('\\');
        if (idx === 0) {
            return path;
        }
        else if (~idx === path.length - 1) {
            return basename(path.substring(0, path.length - 1));
        }
        else {
            return path.substr(~idx + 1);
        }
    }
    exports.basename = basename;
    /**
     * @returns {{.far}} from boo.far or the empty string.
     */
    function extname(path) {
        path = basename(path);
        var idx = ~path.lastIndexOf('.');
        return idx ? path.substring(~idx) : '';
    }
    exports.extname = extname;
    var _posixBadPath = /(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/;
    var _winBadPath = /(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;
    function _isNormal(path, win) {
        return win
            ? !_winBadPath.test(path)
            : !_posixBadPath.test(path);
    }
    function normalize(path, toOSPath) {
        if (path === null || path === void 0) {
            return path;
        }
        var len = path.length;
        if (len === 0) {
            return '.';
        }
        var wantsBackslash = platform_1.isWindows && toOSPath;
        if (_isNormal(path, wantsBackslash)) {
            return path;
        }
        var sep = wantsBackslash ? '\\' : '/';
        var root = getRoot(path, sep);
        // skip the root-portion of the path
        var start = root.length;
        var skip = false;
        var res = '';
        for (var end = root.length; end <= len; end++) {
            // either at the end or at a path-separator character
            if (end === len || path.charCodeAt(end) === 47 /* Slash */ || path.charCodeAt(end) === 92 /* Backslash */) {
                if (streql(path, start, end, '..')) {
                    // skip current and remove parent (if there is already something)
                    var prev_start = res.lastIndexOf(sep);
                    var prev_part = res.slice(prev_start + 1);
                    if ((root || prev_part.length > 0) && prev_part !== '..') {
                        res = prev_start === -1 ? '' : res.slice(0, prev_start);
                        skip = true;
                    }
                }
                else if (streql(path, start, end, '.') && (root || res || end < len - 1)) {
                    // skip current (if there is already something or if there is more to come)
                    skip = true;
                }
                if (!skip) {
                    var part = path.slice(start, end);
                    if (res !== '' && res[res.length - 1] !== sep) {
                        res += sep;
                    }
                    res += part;
                }
                start = end + 1;
                skip = false;
            }
        }
        return root + res;
    }
    exports.normalize = normalize;
    function streql(value, start, end, other) {
        return start + other.length === end && value.indexOf(other, start) === start;
    }
    /**
     * Computes the _root_ this path, like `getRoot('c:\files') === c:\`,
     * `getRoot('files:///files/path') === files:///`,
     * or `getRoot('\\server\shares\path') === \\server\shares\`
     */
    function getRoot(path, sep) {
        if (sep === void 0) { sep = '/'; }
        if (!path) {
            return '';
        }
        var len = path.length;
        var code = path.charCodeAt(0);
        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
            code = path.charCodeAt(1);
            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                // UNC candidate \\localhost\shares\ddd
                //               ^^^^^^^^^^^^^^^^^^^
                code = path.charCodeAt(2);
                if (code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                    var pos_1 = 3;
                    var start = pos_1;
                    for (; pos_1 < len; pos_1++) {
                        code = path.charCodeAt(pos_1);
                        if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                            break;
                        }
                    }
                    code = path.charCodeAt(pos_1 + 1);
                    if (start !== pos_1 && code !== 47 /* Slash */ && code !== 92 /* Backslash */) {
                        pos_1 += 1;
                        for (; pos_1 < len; pos_1++) {
                            code = path.charCodeAt(pos_1);
                            if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                                return path.slice(0, pos_1 + 1) // consume this separator
                                    .replace(/[\\/]/g, sep);
                            }
                        }
                    }
                }
            }
            // /user/far
            // ^
            return sep;
        }
        else if ((code >= 65 /* A */ && code <= 90 /* Z */) || (code >= 97 /* a */ && code <= 122 /* z */)) {
            // check for windows drive letter c:\ or c:
            if (path.charCodeAt(1) === 58 /* Colon */) {
                code = path.charCodeAt(2);
                if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                    // C:\fff
                    // ^^^
                    return path.slice(0, 2) + sep;
                }
                else {
                    // C:
                    // ^^
                    return path.slice(0, 2);
                }
            }
        }
        // check for URI
        // scheme://authority/path
        // ^^^^^^^^^^^^^^^^^^^
        var pos = path.indexOf('://');
        if (pos !== -1) {
            pos += 3; // 3 -> "://".length
            for (; pos < len; pos++) {
                code = path.charCodeAt(pos);
                if (code === 47 /* Slash */ || code === 92 /* Backslash */) {
                    return path.slice(0, pos + 1); // consume this separator
                }
            }
        }
        return '';
    }
    exports.getRoot = getRoot;
    exports.join = function () {
        // Not using a function with var-args because of how TS compiles
        // them to JS - it would result in 2*n runtime cost instead
        // of 1*n, where n is parts.length.
        var value = '';
        for (var i = 0; i < arguments.length; i++) {
            var part = arguments[i];
            if (i > 0) {
                // add the separater between two parts unless
                // there already is one
                var last = value.charCodeAt(value.length - 1);
                if (last !== 47 /* Slash */ && last !== 92 /* Backslash */) {
                    var next = part.charCodeAt(0);
                    if (next !== 47 /* Slash */ && next !== 92 /* Backslash */) {
                        value += exports.sep;
                    }
                }
            }
            value += part;
        }
        return normalize(value);
    };
    /**
     * Check if the path follows this pattern: `\\hostname\sharename`.
     *
     * @see https://msdn.microsoft.com/en-us/library/gg465305.aspx
     * @return A boolean indication if the path is a UNC path, on none-windows
     * always false.
     */
    function isUNC(path) {
        if (!platform_1.isWindows) {
            // UNC is a windows concept
            return false;
        }
        if (!path || path.length < 5) {
            // at least \\a\b
            return false;
        }
        var code = path.charCodeAt(0);
        if (code !== 92 /* Backslash */) {
            return false;
        }
        code = path.charCodeAt(1);
        if (code !== 92 /* Backslash */) {
            return false;
        }
        var pos = 2;
        var start = pos;
        for (; pos < path.length; pos++) {
            code = path.charCodeAt(pos);
            if (code === 92 /* Backslash */) {
                break;
            }
        }
        if (start === pos) {
            return false;
        }
        code = path.charCodeAt(pos + 1);
        if (isNaN(code) || code === 92 /* Backslash */) {
            return false;
        }
        return true;
    }
    exports.isUNC = isUNC;
    // Reference: https://en.wikipedia.org/wiki/Filename
    var INVALID_FILE_CHARS = platform_1.isWindows ? /[\\/:\*\?"<>\|]/g : /[\\/]/g;
    var WINDOWS_FORBIDDEN_NAMES = /^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;
    function isValidBasename(name) {
        if (!name || name.length === 0 || /^\s+$/.test(name)) {
            return false; // require a name that is not just whitespace
        }
        INVALID_FILE_CHARS.lastIndex = 0; // the holy grail of software development
        if (INVALID_FILE_CHARS.test(name)) {
            return false; // check for certain invalid file characters
        }
        if (platform_1.isWindows && WINDOWS_FORBIDDEN_NAMES.test(name)) {
            return false; // check for certain invalid file names
        }
        if (name === '.' || name === '..') {
            return false; // check for reserved values
        }
        if (platform_1.isWindows && name[name.length - 1] === '.') {
            return false; // Windows: file cannot end with a "."
        }
        if (platform_1.isWindows && name.length !== name.trim().length) {
            return false; // Windows: file cannot end with a whitespace
        }
        return true;
    }
    exports.isValidBasename = isValidBasename;
});

define(__m[6/*vs/base/common/types*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var _typeof = {
        number: 'number',
        string: 'string',
        undefined: 'undefined',
        object: 'object',
        function: 'function'
    };
    /**
     * @returns whether the provided parameter is a JavaScript Array or not.
     */
    function isArray(array) {
        if (Array.isArray) {
            return Array.isArray(array);
        }
        if (array && typeof (array.length) === _typeof.number && array.constructor === Array) {
            return true;
        }
        return false;
    }
    exports.isArray = isArray;
    /**
     * @returns whether the provided parameter is a JavaScript String or not.
     */
    function isString(str) {
        if (typeof (str) === _typeof.string || str instanceof String) {
            return true;
        }
        return false;
    }
    exports.isString = isString;
    /**
     * @returns whether the provided parameter is a JavaScript Array and each element in the array is a string.
     */
    function isStringArray(value) {
        return isArray(value) && value.every(function (elem) { return isString(elem); });
    }
    exports.isStringArray = isStringArray;
    /**
     *
     * @returns whether the provided parameter is of type `object` but **not**
     *	`null`, an `array`, a `regexp`, nor a `date`.
     */
    function isObject(obj) {
        // The method can't do a type cast since there are type (like strings) which
        // are subclasses of any put not positvely matched by the function. Hence type
        // narrowing results in wrong results.
        return typeof obj === _typeof.object
            && obj !== null
            && !Array.isArray(obj)
            && !(obj instanceof RegExp)
            && !(obj instanceof Date);
    }
    exports.isObject = isObject;
    /**
     * In **contrast** to just checking `typeof` this will return `false` for `NaN`.
     * @returns whether the provided parameter is a JavaScript Number or not.
     */
    function isNumber(obj) {
        if ((typeof (obj) === _typeof.number || obj instanceof Number) && !isNaN(obj)) {
            return true;
        }
        return false;
    }
    exports.isNumber = isNumber;
    /**
     * @returns whether the provided parameter is a JavaScript Boolean or not.
     */
    function isBoolean(obj) {
        return obj === true || obj === false;
    }
    exports.isBoolean = isBoolean;
    /**
     * @returns whether the provided parameter is undefined.
     */
    function isUndefined(obj) {
        return typeof (obj) === _typeof.undefined;
    }
    exports.isUndefined = isUndefined;
    /**
     * @returns whether the provided parameter is undefined or null.
     */
    function isUndefinedOrNull(obj) {
        return isUndefined(obj) || obj === null;
    }
    exports.isUndefinedOrNull = isUndefinedOrNull;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    /**
     * @returns whether the provided parameter is an empty JavaScript Object or not.
     */
    function isEmptyObject(obj) {
        if (!isObject(obj)) {
            return false;
        }
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }
    exports.isEmptyObject = isEmptyObject;
    /**
     * @returns whether the provided parameter is a JavaScript Function or not.
     */
    function isFunction(obj) {
        return typeof obj === _typeof.function;
    }
    exports.isFunction = isFunction;
    /**
     * @returns whether the provided parameters is are JavaScript Function or not.
     */
    function areFunctions() {
        var objects = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            objects[_i] = arguments[_i];
        }
        return objects && objects.length > 0 && objects.every(isFunction);
    }
    exports.areFunctions = areFunctions;
    function validateConstraints(args, constraints) {
        var len = Math.min(args.length, constraints.length);
        for (var i = 0; i < len; i++) {
            validateConstraint(args[i], constraints[i]);
        }
    }
    exports.validateConstraints = validateConstraints;
    function validateConstraint(arg, constraint) {
        if (isString(constraint)) {
            if (typeof arg !== constraint) {
                throw new Error("argument does not match constraint: typeof " + constraint);
            }
        }
        else if (isFunction(constraint)) {
            if (arg instanceof constraint) {
                return;
            }
            if (arg && arg.constructor === constraint) {
                return;
            }
            if (constraint.length === 1 && constraint.call(undefined, arg) === true) {
                return;
            }
            throw new Error("argument does not match one of these constraints: arg instanceof constraint, arg.constructor === constraint, nor constraint(arg) === true");
        }
    }
    exports.validateConstraint = validateConstraint;
    /**
     * Creates a new object of the provided class and will call the constructor with
     * any additional argument supplied.
     */
    function create(ctor) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var obj = Object.create(ctor.prototype);
        ctor.apply(obj, args);
        return obj;
    }
    exports.create = create;
});

define(__m[17/*vs/base/common/errors*/], __M([1/*require*/,0/*exports*/,5/*vs/base/common/platform*/,6/*vs/base/common/types*/]), function (require, exports, platform, types) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    // Avoid circular dependency on EventEmitter by implementing a subset of the interface.
    var ErrorHandler = (function () {
        function ErrorHandler() {
            this.listeners = [];
            this.unexpectedErrorHandler = function (e) {
                platform.setTimeout(function () {
                    if (e.stack) {
                        throw new Error(e.message + '\n\n' + e.stack);
                    }
                    throw e;
                }, 0);
            };
        }
        ErrorHandler.prototype.addListener = function (listener) {
            var _this = this;
            this.listeners.push(listener);
            return function () {
                _this._removeListener(listener);
            };
        };
        ErrorHandler.prototype.emit = function (e) {
            this.listeners.forEach(function (listener) {
                listener(e);
            });
        };
        ErrorHandler.prototype._removeListener = function (listener) {
            this.listeners.splice(this.listeners.indexOf(listener), 1);
        };
        ErrorHandler.prototype.setUnexpectedErrorHandler = function (newUnexpectedErrorHandler) {
            this.unexpectedErrorHandler = newUnexpectedErrorHandler;
        };
        ErrorHandler.prototype.getUnexpectedErrorHandler = function () {
            return this.unexpectedErrorHandler;
        };
        ErrorHandler.prototype.onUnexpectedError = function (e) {
            this.unexpectedErrorHandler(e);
            this.emit(e);
        };
        // For external errors, we don't want the listeners to be called
        ErrorHandler.prototype.onUnexpectedExternalError = function (e) {
            this.unexpectedErrorHandler(e);
        };
        return ErrorHandler;
    }());
    exports.ErrorHandler = ErrorHandler;
    exports.errorHandler = new ErrorHandler();
    function setUnexpectedErrorHandler(newUnexpectedErrorHandler) {
        exports.errorHandler.setUnexpectedErrorHandler(newUnexpectedErrorHandler);
    }
    exports.setUnexpectedErrorHandler = setUnexpectedErrorHandler;
    function onUnexpectedError(e) {
        // ignore errors from cancelled promises
        if (!isPromiseCanceledError(e)) {
            exports.errorHandler.onUnexpectedError(e);
        }
    }
    exports.onUnexpectedError = onUnexpectedError;
    function onUnexpectedExternalError(e) {
        // ignore errors from cancelled promises
        if (!isPromiseCanceledError(e)) {
            exports.errorHandler.onUnexpectedExternalError(e);
        }
    }
    exports.onUnexpectedExternalError = onUnexpectedExternalError;
    function onUnexpectedPromiseError(promise) {
        return promise.then(null, onUnexpectedError);
    }
    exports.onUnexpectedPromiseError = onUnexpectedPromiseError;
    function transformErrorForSerialization(error) {
        if (error instanceof Error) {
            var name_1 = error.name, message = error.message;
            var stack = error.stacktrace || error.stack;
            return {
                $isError: true,
                name: name_1,
                message: message,
                stack: stack
            };
        }
        // return as is
        return error;
    }
    exports.transformErrorForSerialization = transformErrorForSerialization;
    var canceledName = 'Canceled';
    /**
     * Checks if the given error is a promise in canceled state
     */
    function isPromiseCanceledError(error) {
        return error instanceof Error && error.name === canceledName && error.message === canceledName;
    }
    exports.isPromiseCanceledError = isPromiseCanceledError;
    /**
     * Returns an error that signals cancellation.
     */
    function canceled() {
        var error = new Error(canceledName);
        error.name = error.message;
        return error;
    }
    exports.canceled = canceled;
    /**
     * Returns an error that signals something is not implemented.
     */
    function notImplemented() {
        return new Error('Not Implemented');
    }
    exports.notImplemented = notImplemented;
    function illegalArgument(name) {
        if (name) {
            return new Error("Illegal argument: " + name);
        }
        else {
            return new Error('Illegal argument');
        }
    }
    exports.illegalArgument = illegalArgument;
    function illegalState(name) {
        if (name) {
            return new Error("Illegal state: " + name);
        }
        else {
            return new Error('Illegal state');
        }
    }
    exports.illegalState = illegalState;
    function readonly(name) {
        return name
            ? new Error("readonly property '" + name + " cannot be changed'")
            : new Error('readonly property cannot be changed');
    }
    exports.readonly = readonly;
    function create(message, options) {
        if (options === void 0) { options = {}; }
        var result = new Error(message);
        if (types.isNumber(options.severity)) {
            result.severity = options.severity;
        }
        if (options.actions) {
            result.actions = options.actions;
        }
        return result;
    }
    exports.create = create;
    function getErrorMessage(err) {
        if (!err) {
            return 'Error';
        }
        if (err.message) {
            return err.message;
        }
        if (err.stack) {
            return err.stack.split('\n')[0];
        }
        return String(err);
    }
    exports.getErrorMessage = getErrorMessage;
});

define(__m[74/*vs/base/common/callbackList*/], __M([1/*require*/,0/*exports*/,17/*vs/base/common/errors*/]), function (require, exports, errors_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var CallbackList = (function () {
        function CallbackList() {
        }
        CallbackList.prototype.add = function (callback, context, bucket) {
            var _this = this;
            if (context === void 0) { context = null; }
            if (!this._callbacks) {
                this._callbacks = [];
                this._contexts = [];
            }
            this._callbacks.push(callback);
            this._contexts.push(context);
            if (Array.isArray(bucket)) {
                bucket.push({ dispose: function () { return _this.remove(callback, context); } });
            }
        };
        CallbackList.prototype.remove = function (callback, context) {
            if (context === void 0) { context = null; }
            if (!this._callbacks) {
                return;
            }
            var foundCallbackWithDifferentContext = false;
            for (var i = 0, len = this._callbacks.length; i < len; i++) {
                if (this._callbacks[i] === callback) {
                    if (this._contexts[i] === context) {
                        // callback & context match => remove it
                        this._callbacks.splice(i, 1);
                        this._contexts.splice(i, 1);
                        return;
                    }
                    else {
                        foundCallbackWithDifferentContext = true;
                    }
                }
            }
            if (foundCallbackWithDifferentContext) {
                throw new Error('When adding a listener with a context, you should remove it with the same context');
            }
        };
        CallbackList.prototype.invoke = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!this._callbacks) {
                return undefined;
            }
            var ret = [], callbacks = this._callbacks.slice(0), contexts = this._contexts.slice(0);
            for (var i = 0, len = callbacks.length; i < len; i++) {
                try {
                    ret.push(callbacks[i].apply(contexts[i], args));
                }
                catch (e) {
                    errors_1.onUnexpectedError(e);
                }
            }
            return ret;
        };
        CallbackList.prototype.isEmpty = function () {
            return !this._callbacks || this._callbacks.length === 0;
        };
        CallbackList.prototype.entries = function () {
            var _this = this;
            if (!this._callbacks) {
                return [];
            }
            return this._callbacks.map(function (fn, index) { return [fn, _this._contexts[index]]; });
        };
        CallbackList.prototype.dispose = function () {
            this._callbacks = undefined;
            this._contexts = undefined;
        };
        return CallbackList;
    }());
    exports.default = CallbackList;
});

define(__m[4/*vs/base/common/event*/], __M([1/*require*/,0/*exports*/,9/*vs/base/common/lifecycle*/,74/*vs/base/common/callbackList*/,47/*vs/base/common/functional*/]), function (require, exports, lifecycle_1, callbackList_1, functional_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var Event;
    (function (Event) {
        var _disposable = { dispose: function () { } };
        Event.None = function () { return _disposable; };
    })(Event || (Event = {}));
    exports.default = Event;
    /**
     * The Emitter can be used to expose an Event to the public
     * to fire it from the insides.
     * Sample:
        class Document {
    
            private _onDidChange = new Emitter<(value:string)=>any>();
    
            public onDidChange = this._onDidChange.event;
    
            // getter-style
            // get onDidChange(): Event<(value:string)=>any> {
            // 	return this._onDidChange.event;
            // }
    
            private _doIt() {
                //...
                this._onDidChange.fire(value);
            }
        }
     */
    var Emitter = (function () {
        function Emitter(_options) {
            this._options = _options;
        }
        Object.defineProperty(Emitter.prototype, "event", {
            /**
             * For the public to allow to subscribe
             * to events from this Emitter
             */
            get: function () {
                var _this = this;
                if (!this._event) {
                    this._event = function (listener, thisArgs, disposables) {
                        if (!_this._callbacks) {
                            _this._callbacks = new callbackList_1.default();
                        }
                        var firstListener = _this._callbacks.isEmpty();
                        if (firstListener && _this._options && _this._options.onFirstListenerAdd) {
                            _this._options.onFirstListenerAdd(_this);
                        }
                        _this._callbacks.add(listener, thisArgs);
                        if (firstListener && _this._options && _this._options.onFirstListenerDidAdd) {
                            _this._options.onFirstListenerDidAdd(_this);
                        }
                        if (_this._options && _this._options.onListenerDidAdd) {
                            _this._options.onListenerDidAdd(_this, listener, thisArgs);
                        }
                        var result;
                        result = {
                            dispose: function () {
                                result.dispose = Emitter._noop;
                                if (!_this._disposed) {
                                    _this._callbacks.remove(listener, thisArgs);
                                    if (_this._options && _this._options.onLastListenerRemove && _this._callbacks.isEmpty()) {
                                        _this._options.onLastListenerRemove(_this);
                                    }
                                }
                            }
                        };
                        if (Array.isArray(disposables)) {
                            disposables.push(result);
                        }
                        return result;
                    };
                }
                return this._event;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * To be kept private to fire an event to
         * subscribers
         */
        Emitter.prototype.fire = function (event) {
            if (this._callbacks) {
                this._callbacks.invoke.call(this._callbacks, event);
            }
        };
        Emitter.prototype.dispose = function () {
            if (this._callbacks) {
                this._callbacks.dispose();
                this._callbacks = undefined;
                this._disposed = true;
            }
        };
        return Emitter;
    }());
    Emitter._noop = function () { };
    exports.Emitter = Emitter;
    var EventMultiplexer = (function () {
        function EventMultiplexer() {
            var _this = this;
            this.hasListeners = false;
            this.events = [];
            this.emitter = new Emitter({
                onFirstListenerAdd: function () { return _this.onFirstListenerAdd(); },
                onLastListenerRemove: function () { return _this.onLastListenerRemove(); }
            });
        }
        Object.defineProperty(EventMultiplexer.prototype, "event", {
            get: function () {
                return this.emitter.event;
            },
            enumerable: true,
            configurable: true
        });
        EventMultiplexer.prototype.add = function (event) {
            var _this = this;
            var e = { event: event, listener: null };
            this.events.push(e);
            if (this.hasListeners) {
                this.hook(e);
            }
            var dispose = function () {
                if (_this.hasListeners) {
                    _this.unhook(e);
                }
                var idx = _this.events.indexOf(e);
                _this.events.splice(idx, 1);
            };
            return lifecycle_1.toDisposable(functional_1.once(dispose));
        };
        EventMultiplexer.prototype.onFirstListenerAdd = function () {
            var _this = this;
            this.hasListeners = true;
            this.events.forEach(function (e) { return _this.hook(e); });
        };
        EventMultiplexer.prototype.onLastListenerRemove = function () {
            var _this = this;
            this.hasListeners = false;
            this.events.forEach(function (e) { return _this.unhook(e); });
        };
        EventMultiplexer.prototype.hook = function (e) {
            var _this = this;
            e.listener = e.event(function (r) { return _this.emitter.fire(r); });
        };
        EventMultiplexer.prototype.unhook = function (e) {
            e.listener.dispose();
            e.listener = null;
        };
        EventMultiplexer.prototype.dispose = function () {
            this.emitter.dispose();
        };
        return EventMultiplexer;
    }());
    exports.EventMultiplexer = EventMultiplexer;
    /**
     * Creates an Event which is backed-up by the event emitter. This allows
     * to use the existing eventing pattern and is likely using less memory.
     * Sample:
     *
     * 	class Document {
     *
     *		private _eventbus = new EventEmitter();
     *
     *		public onDidChange = fromEventEmitter(this._eventbus, 'changed');
     *
     *		// getter-style
     *		// get onDidChange(): Event<(value:string)=>any> {
     *		// 	cache fromEventEmitter result and return
     *		// }
     *
     *		private _doIt() {
     *			// ...
     *			this._eventbus.emit('changed', value)
     *		}
     *	}
     */
    function fromEventEmitter(emitter, eventType) {
        return function (listener, thisArgs, disposables) {
            var result = emitter.addListener(eventType, function () {
                listener.apply(thisArgs, arguments);
            });
            if (Array.isArray(disposables)) {
                disposables.push(result);
            }
            return result;
        };
    }
    exports.fromEventEmitter = fromEventEmitter;
    function fromCallback(fn) {
        var listener;
        var emitter = new Emitter({
            onFirstListenerAdd: function () { return listener = fn(function (e) { return emitter.fire(e); }); },
            onLastListenerRemove: function () { return listener.dispose(); }
        });
        return emitter.event;
    }
    exports.fromCallback = fromCallback;
    function fromPromise(promise) {
        var emitter = new Emitter();
        var shouldEmit = false;
        promise
            .then(null, function () { return null; })
            .then(function () {
            if (!shouldEmit) {
                setTimeout(function () { return emitter.fire(); }, 0);
            }
            else {
                emitter.fire();
            }
        });
        shouldEmit = true;
        return emitter.event;
    }
    exports.fromPromise = fromPromise;
    function delayed(promise) {
        var toCancel = null;
        var listener = null;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                toCancel = promise.then(function (event) { return listener = event(function (e) { return emitter.fire(e); }); }, function () { return null; });
            },
            onLastListenerRemove: function () {
                if (toCancel) {
                    toCancel.cancel();
                    toCancel = null;
                }
                if (listener) {
                    listener.dispose();
                    listener = null;
                }
            }
        });
        return emitter.event;
    }
    exports.delayed = delayed;
    function once(event) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            var result = event(function (e) {
                result.dispose();
                return listener.call(thisArgs, e);
            }, null, disposables);
            return result;
        };
    }
    exports.once = once;
    function any() {
        var events = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            events[_i] = arguments[_i];
        }
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return lifecycle_1.combinedDisposable(events.map(function (event) { return event(function (e) { return listener.call(thisArgs, e); }, null, disposables); }));
        };
    }
    exports.any = any;
    function debounceEvent(event, merger, delay, leading) {
        if (delay === void 0) { delay = 100; }
        if (leading === void 0) { leading = false; }
        var subscription;
        var output;
        var handle;
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                subscription = event(function (cur) {
                    output = merger(output, cur);
                    if (!handle && leading) {
                        emitter.fire(output);
                    }
                    clearTimeout(handle);
                    handle = setTimeout(function () {
                        var _output = output;
                        output = undefined;
                        emitter.fire(_output);
                        handle = null;
                    }, delay);
                });
            },
            onLastListenerRemove: function () {
                subscription.dispose();
            }
        });
        return emitter.event;
    }
    exports.debounceEvent = debounceEvent;
    /**
     * The EventDelayer is useful in situations in which you want
     * to delay firing your events during some code.
     * You can wrap that code and be sure that the event will not
     * be fired during that wrap.
     *
     * ```
     * const emitter: Emitter;
     * const delayer = new EventDelayer();
     * const delayedEvent = delayer.wrapEvent(emitter.event);
     *
     * delayedEvent(console.log);
     *
     * delayer.bufferEvents(() => {
     *   emitter.fire(); // event will not be fired yet
     * });
     *
     * // event will only be fired at this point
     * ```
     */
    var EventBufferer = (function () {
        function EventBufferer() {
            this.buffers = [];
        }
        EventBufferer.prototype.wrapEvent = function (event) {
            var _this = this;
            return function (listener, thisArgs, disposables) {
                return event(function (i) {
                    var buffer = _this.buffers[_this.buffers.length - 1];
                    if (buffer) {
                        buffer.push(function () { return listener.call(thisArgs, i); });
                    }
                    else {
                        listener.call(thisArgs, i);
                    }
                }, void 0, disposables);
            };
        };
        EventBufferer.prototype.bufferEvents = function (fn) {
            var buffer = [];
            this.buffers.push(buffer);
            fn();
            this.buffers.pop();
            buffer.forEach(function (flush) { return flush(); });
        };
        return EventBufferer;
    }());
    exports.EventBufferer = EventBufferer;
    function mapEvent(event, map) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (i) { return listener.call(thisArgs, map(i)); }, null, disposables);
        };
    }
    exports.mapEvent = mapEvent;
    function filterEvent(event, filter) {
        return function (listener, thisArgs, disposables) {
            if (thisArgs === void 0) { thisArgs = null; }
            return event(function (e) { return filter(e) && listener.call(thisArgs, e); }, null, disposables);
        };
    }
    exports.filterEvent = filterEvent;
    var ChainableEvent = (function () {
        function ChainableEvent(_event) {
            this._event = _event;
        }
        Object.defineProperty(ChainableEvent.prototype, "event", {
            get: function () { return this._event; },
            enumerable: true,
            configurable: true
        });
        ChainableEvent.prototype.map = function (fn) {
            return new ChainableEvent(mapEvent(this._event, fn));
        };
        ChainableEvent.prototype.filter = function (fn) {
            return new ChainableEvent(filterEvent(this._event, fn));
        };
        ChainableEvent.prototype.on = function (listener, thisArgs, disposables) {
            return this._event(listener, thisArgs, disposables);
        };
        return ChainableEvent;
    }());
    function chain(event) {
        return new ChainableEvent(event);
    }
    exports.chain = chain;
    function stopwatch(event) {
        var start = new Date().getTime();
        return mapEvent(once(event), function (_) { return new Date().getTime() - start; });
    }
    exports.stopwatch = stopwatch;
    /**
     * Buffers the provided event until a first listener comes
     * along, at which point fire all the events at once and
     * pipe the event from then on.
     *
     * ```typescript
     * const emitter = new Emitter<number>();
     * const event = emitter.event;
     * const bufferedEvent = buffer(event);
     *
     * emitter.fire(1);
     * emitter.fire(2);
     * emitter.fire(3);
     * // nothing...
     *
     * const listener = bufferedEvent(num => console.log(num));
     * // 1, 2, 3
     *
     * emitter.fire(4);
     * // 4
     * ```
     */
    function buffer(event, nextTick, buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (buffer === void 0) { buffer = []; }
        buffer = buffer.slice();
        var listener = event(function (e) {
            if (buffer) {
                buffer.push(e);
            }
            else {
                emitter.fire(e);
            }
        });
        var flush = function () {
            buffer.forEach(function (e) { return emitter.fire(e); });
            buffer = null;
        };
        var emitter = new Emitter({
            onFirstListenerAdd: function () {
                if (!listener) {
                    listener = event(function (e) { return emitter.fire(e); });
                }
            },
            onFirstListenerDidAdd: function () {
                if (buffer) {
                    if (nextTick) {
                        setTimeout(flush);
                    }
                    else {
                        flush();
                    }
                }
            },
            onLastListenerRemove: function () {
                listener.dispose();
                listener = null;
            }
        });
        return emitter.event;
    }
    exports.buffer = buffer;
    /**
     * Similar to `buffer` but it buffers indefinitely and repeats
     * the buffered events to every new listener.
     */
    function echo(event, nextTick, buffer) {
        if (nextTick === void 0) { nextTick = false; }
        if (buffer === void 0) { buffer = []; }
        buffer = buffer.slice();
        event(function (e) {
            buffer.push(e);
            emitter.fire(e);
        });
        var flush = function (listener, thisArgs) { return buffer.forEach(function (e) { return listener.call(thisArgs, e); }); };
        var emitter = new Emitter({
            onListenerDidAdd: function (emitter, listener, thisArgs) {
                if (nextTick) {
                    setTimeout(function () { return flush(listener, thisArgs); });
                }
                else {
                    flush(listener, thisArgs);
                }
            }
        });
        return emitter.event;
    }
    exports.echo = echo;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[92/*vs/base/common/cancellation*/], __M([1/*require*/,0/*exports*/,4/*vs/base/common/event*/]), function (require, exports, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var shortcutEvent = Object.freeze(function (callback, context) {
        var handle = setTimeout(callback.bind(context), 0);
        return { dispose: function () { clearTimeout(handle); } };
    });
    var CancellationToken;
    (function (CancellationToken) {
        CancellationToken.None = Object.freeze({
            isCancellationRequested: false,
            onCancellationRequested: event_1.default.None
        });
        CancellationToken.Cancelled = Object.freeze({
            isCancellationRequested: true,
            onCancellationRequested: shortcutEvent
        });
    })(CancellationToken = exports.CancellationToken || (exports.CancellationToken = {}));
    var MutableToken = (function () {
        function MutableToken() {
            this._isCancelled = false;
        }
        MutableToken.prototype.cancel = function () {
            if (!this._isCancelled) {
                this._isCancelled = true;
                if (this._emitter) {
                    this._emitter.fire(undefined);
                    this._emitter = undefined;
                }
            }
        };
        Object.defineProperty(MutableToken.prototype, "isCancellationRequested", {
            get: function () {
                return this._isCancelled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MutableToken.prototype, "onCancellationRequested", {
            get: function () {
                if (this._isCancelled) {
                    return shortcutEvent;
                }
                if (!this._emitter) {
                    this._emitter = new event_1.Emitter();
                }
                return this._emitter.event;
            },
            enumerable: true,
            configurable: true
        });
        return MutableToken;
    }());
    var CancellationTokenSource = (function () {
        function CancellationTokenSource() {
        }
        Object.defineProperty(CancellationTokenSource.prototype, "token", {
            get: function () {
                if (!this._token) {
                    // be lazy and create the token only when
                    // actually needed
                    this._token = new MutableToken();
                }
                return this._token;
            },
            enumerable: true,
            configurable: true
        });
        CancellationTokenSource.prototype.cancel = function () {
            if (!this._token) {
                // save an object by returning the default
                // cancelled token when cancellation happens
                // before someone asks for the token
                this._token = CancellationToken.Cancelled;
            }
            else {
                this._token.cancel();
            }
        };
        CancellationTokenSource.prototype.dispose = function () {
            this.cancel();
        };
        return CancellationTokenSource;
    }());
    exports.CancellationTokenSource = CancellationTokenSource;
});











define(__m[103/*vs/base/common/eventEmitter*/], __M([1/*require*/,0/*exports*/,17/*vs/base/common/errors*/]), function (require, exports, Errors) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var EmitterEvent = (function () {
        function EmitterEvent(eventType, data) {
            if (eventType === void 0) { eventType = null; }
            if (data === void 0) { data = null; }
            this.type = eventType;
            this.data = data;
        }
        return EmitterEvent;
    }());
    exports.EmitterEvent = EmitterEvent;
    var EventEmitter = (function () {
        function EventEmitter(allowedEventTypes) {
            if (allowedEventTypes === void 0) { allowedEventTypes = null; }
            this._listeners = {};
            this._bulkListeners = [];
            this._collectedEvents = [];
            this._deferredCnt = 0;
            if (allowedEventTypes) {
                this._allowedEventTypes = {};
                for (var i = 0; i < allowedEventTypes.length; i++) {
                    this._allowedEventTypes[allowedEventTypes[i]] = true;
                }
            }
            else {
                this._allowedEventTypes = null;
            }
        }
        EventEmitter.prototype.dispose = function () {
            this._listeners = {};
            this._bulkListeners = [];
            this._collectedEvents = [];
            this._deferredCnt = 0;
            this._allowedEventTypes = null;
        };
        EventEmitter.prototype.addListener = function (eventType, listener) {
            if (eventType === '*') {
                throw new Error('Use addBulkListener(listener) to register your listener!');
            }
            if (this._allowedEventTypes && !this._allowedEventTypes.hasOwnProperty(eventType)) {
                throw new Error('This object will never emit this event type!');
            }
            if (this._listeners.hasOwnProperty(eventType)) {
                this._listeners[eventType].push(listener);
            }
            else {
                this._listeners[eventType] = [listener];
            }
            var bound = this;
            return {
                dispose: function () {
                    if (!bound) {
                        // Already called
                        return;
                    }
                    bound._removeListener(eventType, listener);
                    // Prevent leakers from holding on to the event emitter
                    bound = null;
                    listener = null;
                }
            };
        };
        EventEmitter.prototype.addOneTimeListener = function (eventType, listener) {
            var disposable = this.addListener(eventType, function (value) {
                disposable.dispose();
                listener(value);
            });
            return disposable;
        };
        EventEmitter.prototype.addBulkListener = function (listener) {
            var _this = this;
            this._bulkListeners.push(listener);
            return {
                dispose: function () {
                    _this._removeBulkListener(listener);
                }
            };
        };
        EventEmitter.prototype.addEmitter = function (eventEmitter) {
            var _this = this;
            return eventEmitter.addBulkListener(function (events) {
                if (_this._deferredCnt === 0) {
                    _this._emitEvents(events);
                }
                else {
                    // Collect for later
                    _this._collectedEvents.push.apply(_this._collectedEvents, events);
                }
            });
        };
        EventEmitter.prototype._removeListener = function (eventType, listener) {
            if (this._listeners.hasOwnProperty(eventType)) {
                var listeners = this._listeners[eventType];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i] === listener) {
                        listeners.splice(i, 1);
                        break;
                    }
                }
            }
        };
        EventEmitter.prototype._removeBulkListener = function (listener) {
            for (var i = 0, len = this._bulkListeners.length; i < len; i++) {
                if (this._bulkListeners[i] === listener) {
                    this._bulkListeners.splice(i, 1);
                    break;
                }
            }
        };
        EventEmitter.prototype._emitToSpecificTypeListeners = function (eventType, data) {
            if (this._listeners.hasOwnProperty(eventType)) {
                var listeners = this._listeners[eventType].slice(0);
                for (var i = 0, len = listeners.length; i < len; i++) {
                    safeInvoke1Arg(listeners[i], data);
                }
            }
        };
        EventEmitter.prototype._emitToBulkListeners = function (events) {
            var bulkListeners = this._bulkListeners.slice(0);
            for (var i = 0, len = bulkListeners.length; i < len; i++) {
                safeInvoke1Arg(bulkListeners[i], events);
            }
        };
        EventEmitter.prototype._emitEvents = function (events) {
            if (this._bulkListeners.length > 0) {
                this._emitToBulkListeners(events);
            }
            for (var i = 0, len = events.length; i < len; i++) {
                var e = events[i];
                this._emitToSpecificTypeListeners(e.type, e.data);
            }
        };
        EventEmitter.prototype.emit = function (eventType, data) {
            if (data === void 0) { data = {}; }
            if (this._allowedEventTypes && !this._allowedEventTypes.hasOwnProperty(eventType)) {
                throw new Error('Cannot emit this event type because it wasn\'t listed!');
            }
            // Early return if no listeners would get this
            if (!this._listeners.hasOwnProperty(eventType) && this._bulkListeners.length === 0) {
                return;
            }
            var emitterEvent = new EmitterEvent(eventType, data);
            if (this._deferredCnt === 0) {
                this._emitEvents([emitterEvent]);
            }
            else {
                // Collect for later
                this._collectedEvents.push(emitterEvent);
            }
        };
        EventEmitter.prototype.beginDeferredEmit = function () {
            this._deferredCnt = this._deferredCnt + 1;
        };
        EventEmitter.prototype.endDeferredEmit = function () {
            this._deferredCnt = this._deferredCnt - 1;
            if (this._deferredCnt === 0) {
                this._emitCollected();
            }
        };
        EventEmitter.prototype.deferredEmit = function (callback) {
            this.beginDeferredEmit();
            var result = safeInvokeNoArg(callback);
            this.endDeferredEmit();
            return result;
        };
        EventEmitter.prototype._emitCollected = function () {
            if (this._collectedEvents.length === 0) {
                return;
            }
            // Flush collected events
            var events = this._collectedEvents;
            this._collectedEvents = [];
            this._emitEvents(events);
        };
        return EventEmitter;
    }());
    exports.EventEmitter = EventEmitter;
    var EmitQueueElement = (function () {
        function EmitQueueElement(target, arg) {
            this.target = target;
            this.arg = arg;
        }
        return EmitQueueElement;
    }());
    /**
     * Same as EventEmitter, but guarantees events are delivered in order to each listener
     */
    var OrderGuaranteeEventEmitter = (function (_super) {
        __extends(OrderGuaranteeEventEmitter, _super);
        function OrderGuaranteeEventEmitter() {
            var _this = _super.call(this, null) || this;
            _this._emitQueue = [];
            return _this;
        }
        OrderGuaranteeEventEmitter.prototype._emitToSpecificTypeListeners = function (eventType, data) {
            if (this._listeners.hasOwnProperty(eventType)) {
                var listeners = this._listeners[eventType];
                for (var i = 0, len = listeners.length; i < len; i++) {
                    this._emitQueue.push(new EmitQueueElement(listeners[i], data));
                }
            }
        };
        OrderGuaranteeEventEmitter.prototype._emitToBulkListeners = function (events) {
            var bulkListeners = this._bulkListeners;
            for (var i = 0, len = bulkListeners.length; i < len; i++) {
                this._emitQueue.push(new EmitQueueElement(bulkListeners[i], events));
            }
        };
        OrderGuaranteeEventEmitter.prototype._emitEvents = function (events) {
            _super.prototype._emitEvents.call(this, events);
            while (this._emitQueue.length > 0) {
                var queueElement = this._emitQueue.shift();
                safeInvoke1Arg(queueElement.target, queueElement.arg);
            }
        };
        return OrderGuaranteeEventEmitter;
    }(EventEmitter));
    exports.OrderGuaranteeEventEmitter = OrderGuaranteeEventEmitter;
    function safeInvokeNoArg(func) {
        try {
            return func();
        }
        catch (e) {
            Errors.onUnexpectedError(e);
        }
        return undefined;
    }
    function safeInvoke1Arg(func, arg1) {
        try {
            return func(arg1);
        }
        catch (e) {
            Errors.onUnexpectedError(e);
        }
    }
});

define(__m[112/*vs/base/common/graph*/], __M([1/*require*/,0/*exports*/,6/*vs/base/common/types*/,114/*vs/base/common/collections*/]), function (require, exports, types_1, collections_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function newNode(data) {
        return {
            data: data,
            incoming: Object.create(null),
            outgoing: Object.create(null)
        };
    }
    var Graph = (function () {
        function Graph(_hashFn) {
            this._hashFn = _hashFn;
            this._nodes = Object.create(null);
            // empty
        }
        Graph.prototype.roots = function () {
            var ret = [];
            collections_1.forEach(this._nodes, function (entry) {
                if (types_1.isEmptyObject(entry.value.outgoing)) {
                    ret.push(entry.value);
                }
            });
            return ret;
        };
        Graph.prototype.traverse = function (start, inwards, callback) {
            var startNode = this.lookup(start);
            if (!startNode) {
                return;
            }
            this._traverse(startNode, inwards, Object.create(null), callback);
        };
        Graph.prototype._traverse = function (node, inwards, seen, callback) {
            var _this = this;
            var key = this._hashFn(node.data);
            if (seen[key]) {
                return;
            }
            seen[key] = true;
            callback(node.data);
            var nodes = inwards ? node.outgoing : node.incoming;
            collections_1.forEach(nodes, function (entry) { return _this._traverse(entry.value, inwards, seen, callback); });
        };
        Graph.prototype.insertEdge = function (from, to) {
            var fromNode = this.lookupOrInsertNode(from), toNode = this.lookupOrInsertNode(to);
            fromNode.outgoing[this._hashFn(to)] = toNode;
            toNode.incoming[this._hashFn(from)] = fromNode;
        };
        Graph.prototype.removeNode = function (data) {
            var key = this._hashFn(data);
            delete this._nodes[key];
            collections_1.forEach(this._nodes, function (entry) {
                delete entry.value.outgoing[key];
                delete entry.value.incoming[key];
            });
        };
        Graph.prototype.lookupOrInsertNode = function (data) {
            var key = this._hashFn(data);
            var node = this._nodes[key];
            if (!node) {
                node = newNode(data);
                this._nodes[key] = node;
            }
            return node;
        };
        Graph.prototype.lookup = function (data) {
            return this._nodes[this._hashFn(data)];
        };
        Object.defineProperty(Graph.prototype, "length", {
            get: function () {
                return Object.keys(this._nodes).length;
            },
            enumerable: true,
            configurable: true
        });
        Graph.prototype.toString = function () {
            var data = [];
            collections_1.forEach(this._nodes, function (entry) {
                data.push(entry.key + ", (incoming)[" + Object.keys(entry.value.incoming).join(', ') + "], (outgoing)[" + Object.keys(entry.value.outgoing).join(',') + "]");
            });
            return data.join('\n');
        };
        return Graph;
    }());
    exports.Graph = Graph;
});

define(__m[8/*vs/base/common/objects*/], __M([1/*require*/,0/*exports*/,6/*vs/base/common/types*/]), function (require, exports, Types) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function clone(obj) {
        if (!obj || typeof obj !== 'object') {
            return obj;
        }
        if (obj instanceof RegExp) {
            // See https://github.com/Microsoft/TypeScript/issues/10990
            return obj;
        }
        var result = (Array.isArray(obj)) ? [] : {};
        Object.keys(obj).forEach(function (key) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = clone(obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        });
        return result;
    }
    exports.clone = clone;
    function deepClone(obj) {
        if (!obj || typeof obj !== 'object') {
            return obj;
        }
        var result = (Array.isArray(obj)) ? [] : {};
        Object.getOwnPropertyNames(obj).forEach(function (key) {
            if (obj[key] && typeof obj[key] === 'object') {
                result[key] = deepClone(obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        });
        return result;
    }
    exports.deepClone = deepClone;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function cloneAndChange(obj, changer) {
        return _cloneAndChange(obj, changer, []);
    }
    exports.cloneAndChange = cloneAndChange;
    function _cloneAndChange(obj, changer, encounteredObjects) {
        if (Types.isUndefinedOrNull(obj)) {
            return obj;
        }
        var changed = changer(obj);
        if (typeof changed !== 'undefined') {
            return changed;
        }
        if (Types.isArray(obj)) {
            var r1 = [];
            for (var i1 = 0; i1 < obj.length; i1++) {
                r1.push(_cloneAndChange(obj[i1], changer, encounteredObjects));
            }
            return r1;
        }
        if (Types.isObject(obj)) {
            if (encounteredObjects.indexOf(obj) >= 0) {
                throw new Error('Cannot clone recursive data-structure');
            }
            encounteredObjects.push(obj);
            var r2 = {};
            for (var i2 in obj) {
                if (hasOwnProperty.call(obj, i2)) {
                    r2[i2] = _cloneAndChange(obj[i2], changer, encounteredObjects);
                }
            }
            encounteredObjects.pop();
            return r2;
        }
        return obj;
    }
    // DON'T USE THESE FUNCTION UNLESS YOU KNOW HOW CHROME
    // WORKS... WE HAVE SEEN VERY WEIRD BEHAVIOUR WITH CHROME >= 37
    ///**
    // * Recursively call Object.freeze on object and any properties that are objects.
    // */
    //export function deepFreeze(obj:any):void {
    //	Object.freeze(obj);
    //	Object.keys(obj).forEach((key) => {
    //		if(!(typeof obj[key] === 'object') || Object.isFrozen(obj[key])) {
    //			return;
    //		}
    //
    //		deepFreeze(obj[key]);
    //	});
    //	if(!Object.isFrozen(obj)) {
    //		console.log('too warm');
    //	}
    //}
    //
    //export function deepSeal(obj:any):void {
    //	Object.seal(obj);
    //	Object.keys(obj).forEach((key) => {
    //		if(!(typeof obj[key] === 'object') || Object.isSealed(obj[key])) {
    //			return;
    //		}
    //
    //		deepSeal(obj[key]);
    //	});
    //	if(!Object.isSealed(obj)) {
    //		console.log('NOT sealed');
    //	}
    //}
    /**
     * Copies all properties of source into destination. The optional parameter "overwrite" allows to control
     * if existing properties on the destination should be overwritten or not. Defaults to true (overwrite).
     */
    function mixin(destination, source, overwrite) {
        if (overwrite === void 0) { overwrite = true; }
        if (!Types.isObject(destination)) {
            return source;
        }
        if (Types.isObject(source)) {
            Object.keys(source).forEach(function (key) {
                if (key in destination) {
                    if (overwrite) {
                        if (Types.isObject(destination[key]) && Types.isObject(source[key])) {
                            mixin(destination[key], source[key], overwrite);
                        }
                        else {
                            destination[key] = source[key];
                        }
                    }
                }
                else {
                    destination[key] = source[key];
                }
            });
        }
        return destination;
    }
    exports.mixin = mixin;
    function assign(destination) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources.forEach(function (source) { return Object.keys(source).forEach(function (key) { return destination[key] = source[key]; }); });
        return destination;
    }
    exports.assign = assign;
    function toObject(arr, keyMap) {
        return arr.reduce(function (o, d) {
            return assign(o, (_a = {}, _a[keyMap(d)] = d, _a));
            var _a;
        }, Object.create(null));
    }
    exports.toObject = toObject;
    function equals(one, other) {
        if (one === other) {
            return true;
        }
        if (one === null || one === undefined || other === null || other === undefined) {
            return false;
        }
        if (typeof one !== typeof other) {
            return false;
        }
        if (typeof one !== 'object') {
            return false;
        }
        if ((Array.isArray(one)) !== (Array.isArray(other))) {
            return false;
        }
        var i, key;
        if (Array.isArray(one)) {
            if (one.length !== other.length) {
                return false;
            }
            for (i = 0; i < one.length; i++) {
                if (!equals(one[i], other[i])) {
                    return false;
                }
            }
        }
        else {
            var oneKeys = [];
            for (key in one) {
                oneKeys.push(key);
            }
            oneKeys.sort();
            var otherKeys = [];
            for (key in other) {
                otherKeys.push(key);
            }
            otherKeys.sort();
            if (!equals(oneKeys, otherKeys)) {
                return false;
            }
            for (i = 0; i < oneKeys.length; i++) {
                if (!equals(one[oneKeys[i]], other[oneKeys[i]])) {
                    return false;
                }
            }
        }
        return true;
    }
    exports.equals = equals;
    function ensureProperty(obj, property, defaultValue) {
        if (typeof obj[property] === 'undefined') {
            obj[property] = defaultValue;
        }
    }
    exports.ensureProperty = ensureProperty;
    function arrayToHash(array) {
        var result = {};
        for (var i = 0; i < array.length; ++i) {
            result[array[i]] = true;
        }
        return result;
    }
    exports.arrayToHash = arrayToHash;
    /**
     * Given an array of strings, returns a function which, given a string
     * returns true or false whether the string is in that array.
     */
    function createKeywordMatcher(arr, caseInsensitive) {
        if (caseInsensitive === void 0) { caseInsensitive = false; }
        if (caseInsensitive) {
            arr = arr.map(function (x) { return x.toLowerCase(); });
        }
        var hash = arrayToHash(arr);
        if (caseInsensitive) {
            return function (word) {
                return hash[word.toLowerCase()] !== undefined && hash.hasOwnProperty(word.toLowerCase());
            };
        }
        else {
            return function (word) {
                return hash[word] !== undefined && hash.hasOwnProperty(word);
            };
        }
    }
    exports.createKeywordMatcher = createKeywordMatcher;
    /**
     * Started from TypeScript's __extends function to make a type a subclass of a specific class.
     * Modified to work with properties already defined on the derivedClass, since we can't get TS
     * to call this method before the constructor definition.
     */
    function derive(baseClass, derivedClass) {
        for (var prop in baseClass) {
            if (baseClass.hasOwnProperty(prop)) {
                derivedClass[prop] = baseClass[prop];
            }
        }
        derivedClass = derivedClass || function () { };
        var basePrototype = baseClass.prototype;
        var derivedPrototype = derivedClass.prototype;
        derivedClass.prototype = Object.create(basePrototype);
        for (var prop in derivedPrototype) {
            if (derivedPrototype.hasOwnProperty(prop)) {
                // handle getters and setters properly
                Object.defineProperty(derivedClass.prototype, prop, Object.getOwnPropertyDescriptor(derivedPrototype, prop));
            }
        }
        // Cast to any due to Bug 16188:PropertyDescriptor set and get function should be optional.
        Object.defineProperty(derivedClass.prototype, 'constructor', { value: derivedClass, writable: true, configurable: true, enumerable: true });
    }
    exports.derive = derive;
    /**
     * Calls JSON.Stringify with a replacer to break apart any circular references.
     * This prevents JSON.stringify from throwing the exception
     *  "Uncaught TypeError: Converting circular structure to JSON"
     */
    function safeStringify(obj) {
        var seen = [];
        return JSON.stringify(obj, function (key, value) {
            if (Types.isObject(value) || Array.isArray(value)) {
                if (seen.indexOf(value) !== -1) {
                    return '[Circular]';
                }
                else {
                    seen.push(value);
                }
            }
            return value;
        });
    }
    exports.safeStringify = safeStringify;
    function getOrDefault(obj, fn, defaultValue) {
        if (defaultValue === void 0) { defaultValue = null; }
        var result = fn(obj);
        return typeof result === 'undefined' ? defaultValue : result;
    }
    exports.getOrDefault = getOrDefault;
    function distinct(base, target) {
        var result = Object.create(null);
        if (!base || !target) {
            return result;
        }
        var targetKeys = Object.keys(target);
        targetKeys.forEach(function (k) {
            var baseValue = base[k];
            var targetValue = target[k];
            if (!equals(baseValue, targetValue)) {
                result[k] = targetValue;
            }
        });
        return result;
    }
    exports.distinct = distinct;
});

define(__m[19/*vs/base/common/uri*/], __M([1/*require*/,0/*exports*/,5/*vs/base/common/platform*/]), function (require, exports, platform) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function _encode(ch) {
        return '%' + ch.charCodeAt(0).toString(16).toUpperCase();
    }
    // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
    function encodeURIComponent2(str) {
        return encodeURIComponent(str).replace(/[!'()*]/g, _encode);
    }
    function encodeNoop(str) {
        return str.replace(/[#?]/, _encode);
    }
    /**
     * Uniform Resource Identifier (URI) http://tools.ietf.org/html/rfc3986.
     * This class is a simple parser which creates the basic component paths
     * (http://tools.ietf.org/html/rfc3986#section-3) with minimal validation
     * and encoding.
     *
     *       foo://example.com:8042/over/there?name=ferret#nose
     *       \_/   \______________/\_________/ \_________/ \__/
     *        |           |            |            |        |
     *     scheme     authority       path        query   fragment
     *        |   _____________________|__
     *       / \ /                        \
     *       urn:example:animal:ferret:nose
     *
     *
     */
    var URI = (function () {
        function URI() {
            this._scheme = URI._empty;
            this._authority = URI._empty;
            this._path = URI._empty;
            this._query = URI._empty;
            this._fragment = URI._empty;
            this._formatted = null;
            this._fsPath = null;
        }
        URI.isUri = function (thing) {
            if (thing instanceof URI) {
                return true;
            }
            if (!thing) {
                return false;
            }
            return typeof thing.authority === 'string'
                && typeof thing.fragment === 'string'
                && typeof thing.path === 'string'
                && typeof thing.query === 'string'
                && typeof thing.scheme === 'string';
        };
        Object.defineProperty(URI.prototype, "scheme", {
            /**
             * scheme is the 'http' part of 'http://www.msft.com/some/path?query#fragment'.
             * The part before the first colon.
             */
            get: function () {
                return this._scheme;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URI.prototype, "authority", {
            /**
             * authority is the 'www.msft.com' part of 'http://www.msft.com/some/path?query#fragment'.
             * The part between the first double slashes and the next slash.
             */
            get: function () {
                return this._authority;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URI.prototype, "path", {
            /**
             * path is the '/some/path' part of 'http://www.msft.com/some/path?query#fragment'.
             */
            get: function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URI.prototype, "query", {
            /**
             * query is the 'query' part of 'http://www.msft.com/some/path?query#fragment'.
             */
            get: function () {
                return this._query;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URI.prototype, "fragment", {
            /**
             * fragment is the 'fragment' part of 'http://www.msft.com/some/path?query#fragment'.
             */
            get: function () {
                return this._fragment;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(URI.prototype, "fsPath", {
            // ---- filesystem path -----------------------
            /**
             * Returns a string representing the corresponding file system path of this URI.
             * Will handle UNC paths and normalize windows drive letters to lower-case. Also
             * uses the platform specific path separator. Will *not* validate the path for
             * invalid characters and semantics. Will *not* look at the scheme of this URI.
             */
            get: function () {
                if (!this._fsPath) {
                    var value;
                    if (this._authority && this._path && this.scheme === 'file') {
                        // unc path: file://shares/c$/far/boo
                        value = "//" + this._authority + this._path;
                    }
                    else if (URI._driveLetterPath.test(this._path)) {
                        // windows drive letter: file:///c:/far/boo
                        value = this._path[1].toLowerCase() + this._path.substr(2);
                    }
                    else {
                        // other path
                        value = this._path;
                    }
                    if (platform.isWindows) {
                        value = value.replace(/\//g, '\\');
                    }
                    this._fsPath = value;
                }
                return this._fsPath;
            },
            enumerable: true,
            configurable: true
        });
        // ---- modify to new -------------------------
        URI.prototype.with = function (change) {
            if (!change) {
                return this;
            }
            var scheme = change.scheme, authority = change.authority, path = change.path, query = change.query, fragment = change.fragment;
            if (scheme === void 0) {
                scheme = this.scheme;
            }
            else if (scheme === null) {
                scheme = '';
            }
            if (authority === void 0) {
                authority = this.authority;
            }
            else if (authority === null) {
                authority = '';
            }
            if (path === void 0) {
                path = this.path;
            }
            else if (path === null) {
                path = '';
            }
            if (query === void 0) {
                query = this.query;
            }
            else if (query === null) {
                query = '';
            }
            if (fragment === void 0) {
                fragment = this.fragment;
            }
            else if (fragment === null) {
                fragment = '';
            }
            if (scheme === this.scheme
                && authority === this.authority
                && path === this.path
                && query === this.query
                && fragment === this.fragment) {
                return this;
            }
            var ret = new URI();
            ret._scheme = scheme;
            ret._authority = authority;
            ret._path = path;
            ret._query = query;
            ret._fragment = fragment;
            URI._validate(ret);
            return ret;
        };
        // ---- parse & validate ------------------------
        URI.parse = function (value) {
            var ret = new URI();
            var data = URI._parseComponents(value);
            ret._scheme = data.scheme;
            ret._authority = decodeURIComponent(data.authority);
            ret._path = decodeURIComponent(data.path);
            ret._query = decodeURIComponent(data.query);
            ret._fragment = decodeURIComponent(data.fragment);
            URI._validate(ret);
            return ret;
        };
        URI.file = function (path) {
            var ret = new URI();
            ret._scheme = 'file';
            // normalize to fwd-slashes on windows,
            // on other systems bwd-slaches are valid
            // filename character, eg /f\oo/ba\r.txt
            if (platform.isWindows) {
                path = path.replace(/\\/g, URI._slash);
            }
            // check for authority as used in UNC shares
            // or use the path as given
            if (path[0] === URI._slash && path[0] === path[1]) {
                var idx = path.indexOf(URI._slash, 2);
                if (idx === -1) {
                    ret._authority = path.substring(2);
                }
                else {
                    ret._authority = path.substring(2, idx);
                    ret._path = path.substring(idx);
                }
            }
            else {
                ret._path = path;
            }
            // Ensure that path starts with a slash
            // or that it is at least a slash
            if (ret._path[0] !== URI._slash) {
                ret._path = URI._slash + ret._path;
            }
            URI._validate(ret);
            return ret;
        };
        URI._parseComponents = function (value) {
            var ret = {
                scheme: URI._empty,
                authority: URI._empty,
                path: URI._empty,
                query: URI._empty,
                fragment: URI._empty,
            };
            var match = URI._regexp.exec(value);
            if (match) {
                ret.scheme = match[2] || ret.scheme;
                ret.authority = match[4] || ret.authority;
                ret.path = match[5] || ret.path;
                ret.query = match[7] || ret.query;
                ret.fragment = match[9] || ret.fragment;
            }
            return ret;
        };
        URI.from = function (components) {
            return new URI().with(components);
        };
        URI._validate = function (ret) {
            // scheme, https://tools.ietf.org/html/rfc3986#section-3.1
            // ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
            if (ret.scheme && !URI._schemePattern.test(ret.scheme)) {
                throw new Error('[UriError]: Scheme contains illegal characters.');
            }
            // path, http://tools.ietf.org/html/rfc3986#section-3.3
            // If a URI contains an authority component, then the path component
            // must either be empty or begin with a slash ("/") character.  If a URI
            // does not contain an authority component, then the path cannot begin
            // with two slash characters ("//").
            if (ret.path) {
                if (ret.authority) {
                    if (!URI._singleSlashStart.test(ret.path)) {
                        throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character');
                    }
                }
                else {
                    if (URI._doubleSlashStart.test(ret.path)) {
                        throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")');
                    }
                }
            }
        };
        // ---- printing/externalize ---------------------------
        /**
         *
         * @param skipEncoding Do not encode the result, default is `false`
         */
        URI.prototype.toString = function (skipEncoding) {
            if (skipEncoding === void 0) { skipEncoding = false; }
            if (!skipEncoding) {
                if (!this._formatted) {
                    this._formatted = URI._asFormatted(this, false);
                }
                return this._formatted;
            }
            else {
                // we don't cache that
                return URI._asFormatted(this, true);
            }
        };
        URI._asFormatted = function (uri, skipEncoding) {
            var encoder = !skipEncoding
                ? encodeURIComponent2
                : encodeNoop;
            var parts = [];
            var scheme = uri.scheme, authority = uri.authority, path = uri.path, query = uri.query, fragment = uri.fragment;
            if (scheme) {
                parts.push(scheme, ':');
            }
            if (authority || scheme === 'file') {
                parts.push('//');
            }
            if (authority) {
                authority = authority.toLowerCase();
                var idx = authority.indexOf(':');
                if (idx === -1) {
                    parts.push(encoder(authority));
                }
                else {
                    parts.push(encoder(authority.substr(0, idx)), authority.substr(idx));
                }
            }
            if (path) {
                // lower-case windows drive letters in /C:/fff or C:/fff
                var m = URI._upperCaseDrive.exec(path);
                if (m) {
                    if (m[1]) {
                        path = '/' + m[2].toLowerCase() + path.substr(3); // "/c:".length === 3
                    }
                    else {
                        path = m[2].toLowerCase() + path.substr(2); // // "c:".length === 2
                    }
                }
                // encode every segement but not slashes
                // make sure that # and ? are always encoded
                // when occurring in paths - otherwise the result
                // cannot be parsed back again
                var lastIdx = 0;
                while (true) {
                    var idx = path.indexOf(URI._slash, lastIdx);
                    if (idx === -1) {
                        parts.push(encoder(path.substring(lastIdx)));
                        break;
                    }
                    parts.push(encoder(path.substring(lastIdx, idx)), URI._slash);
                    lastIdx = idx + 1;
                }
                ;
            }
            if (query) {
                parts.push('?', encoder(query));
            }
            if (fragment) {
                parts.push('#', encoder(fragment));
            }
            return parts.join(URI._empty);
        };
        URI.prototype.toJSON = function () {
            var res = {
                fsPath: this.fsPath,
                external: this.toString(),
                $mid: 1
            };
            if (this.path) {
                res.path = this.path;
            }
            if (this.scheme) {
                res.scheme = this.scheme;
            }
            if (this.authority) {
                res.authority = this.authority;
            }
            if (this.query) {
                res.query = this.query;
            }
            if (this.fragment) {
                res.fragment = this.fragment;
            }
            return res;
        };
        URI.revive = function (data) {
            var result = new URI();
            result._scheme = data.scheme || URI._empty;
            result._authority = data.authority || URI._empty;
            result._path = data.path || URI._empty;
            result._query = data.query || URI._empty;
            result._fragment = data.fragment || URI._empty;
            result._fsPath = data.fsPath;
            result._formatted = data.external;
            URI._validate(result);
            return result;
        };
        return URI;
    }());
    URI._empty = '';
    URI._slash = '/';
    URI._regexp = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;
    URI._driveLetterPath = /^\/[a-zA-z]:/;
    URI._upperCaseDrive = /^(\/)?([A-Z]:)/;
    URI._schemePattern = /^\w[\w\d+.-]*$/;
    URI._singleSlashStart = /^\//;
    URI._doubleSlashStart = /^\/\//;
    exports.default = URI;
});











define(__m[30/*vs/base/common/uuid*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValueUUID = (function () {
        function ValueUUID(_value) {
            this._value = _value;
            // empty
        }
        ValueUUID.prototype.asHex = function () {
            return this._value;
        };
        ValueUUID.prototype.equals = function (other) {
            return this.asHex() === other.asHex();
        };
        return ValueUUID;
    }());
    var V4UUID = (function (_super) {
        __extends(V4UUID, _super);
        function V4UUID() {
            return _super.call(this, [
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                '-',
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                '-',
                '4',
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                '-',
                V4UUID._oneOf(V4UUID._timeHighBits),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                '-',
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
                V4UUID._randomHex(),
            ].join('')) || this;
        }
        V4UUID._oneOf = function (array) {
            return array[Math.floor(array.length * Math.random())];
        };
        V4UUID._randomHex = function () {
            return V4UUID._oneOf(V4UUID._chars);
        };
        return V4UUID;
    }(ValueUUID));
    V4UUID._chars = ['0', '1', '2', '3', '4', '5', '6', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    V4UUID._timeHighBits = ['8', '9', 'a', 'b'];
    function v4() {
        return new V4UUID();
    }
    exports.v4 = v4;
    var _UUIDPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function isUUID(value) {
        return _UUIDPattern.test(value);
    }
    exports.isUUID = isUUID;
    /**
     * Parses a UUID that is of the format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx.
     * @param value A uuid string.
     */
    function parse(value) {
        if (!isUUID(value)) {
            throw new Error('invalid uuid');
        }
        return new ValueUUID(value);
    }
    exports.parse = parse;
    function generateUuid() {
        return v4().asHex();
    }
    exports.generateUuid = generateUuid;
});

/**
 * Extracted from https://github.com/winjs/winjs
 * Version: 4.4.0(ec3258a9f3a36805a187848984e3bb938044178d)
 * Copyright (c) Microsoft Corporation.
 * All Rights Reserved.
 * Licensed under the MIT License.
 */
(function() {

var _modules = {};
_modules["WinJS/Core/_WinJS"] = {};

var _winjs = function(moduleId, deps, factory) {
    var exports = {};
    var exportsPassedIn = false;

    var depsValues = deps.map(function(dep) {
        if (dep === 'exports') {
            exportsPassedIn = true;
            return exports;
        }
        return _modules[dep];
    });

    var result = factory.apply({}, depsValues);

    _modules[moduleId] = exportsPassedIn ? exports : result;
};


_winjs("WinJS/Core/_Global", [], function () {
    "use strict";

    // Appease jshint
    /* global window, self, global */

    var globalObject =
        typeof window !== 'undefined' ? window :
        typeof self !== 'undefined' ? self :
        typeof global !== 'undefined' ? global :
        {};
    return globalObject;
});

_winjs("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function baseCoreUtilsInit(_Global) {
    "use strict";

    var hasWinRT = !!_Global.Windows;

    function markSupportedForProcessing(func) {
        /// <signature helpKeyword="WinJS.Utilities.markSupportedForProcessing">
        /// <summary locid="WinJS.Utilities.markSupportedForProcessing">
        /// Marks a function as being compatible with declarative processing, such as WinJS.UI.processAll
        /// or WinJS.Binding.processAll.
        /// </summary>
        /// <param name="func" type="Function" locid="WinJS.Utilities.markSupportedForProcessing_p:func">
        /// The function to be marked as compatible with declarative processing.
        /// </param>
        /// <returns type="Function" locid="WinJS.Utilities.markSupportedForProcessing_returnValue">
        /// The input function.
        /// </returns>
        /// </signature>
        func.supportedForProcessing = true;
        return func;
    }

    return {
        hasWinRT: hasWinRT,
        markSupportedForProcessing: markSupportedForProcessing,
        _setImmediate: _Global.setImmediate ? _Global.setImmediate.bind(_Global) : function (handler) {
            _Global.setTimeout(handler, 0);
        }
    };
});
_winjs("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function profilerInit(_Global) {
    "use strict";

    return _Global.msWriteProfilerMark || function () { };
});
_winjs("WinJS/Core/_Base", ["WinJS/Core/_WinJS","WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_WriteProfilerMark"], function baseInit(_WinJS, _Global, _BaseCoreUtils, _WriteProfilerMark) {
    "use strict";

    function initializeProperties(target, members, prefix) {
        var keys = Object.keys(members);
        var isArray = Array.isArray(target);
        var properties;
        var i, len;
        for (i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var enumerable = key.charCodeAt(0) !== /*_*/95;
            var member = members[key];
            if (member && typeof member === 'object') {
                if (member.value !== undefined || typeof member.get === 'function' || typeof member.set === 'function') {
                    if (member.enumerable === undefined) {
                        member.enumerable = enumerable;
                    }
                    if (prefix && member.setName && typeof member.setName === 'function') {
                        member.setName(prefix + "." + key);
                    }
                    properties = properties || {};
                    properties[key] = member;
                    continue;
                }
            }
            if (!enumerable) {
                properties = properties || {};
                properties[key] = { value: member, enumerable: enumerable, configurable: true, writable: true };
                continue;
            }
            if (isArray) {
                target.forEach(function (target) {
                    target[key] = member;
                });
            } else {
                target[key] = member;
            }
        }
        if (properties) {
            if (isArray) {
                target.forEach(function (target) {
                    Object.defineProperties(target, properties);
                });
            } else {
                Object.defineProperties(target, properties);
            }
        }
    }

    (function () {

        var _rootNamespace = _WinJS;
        if (!_rootNamespace.Namespace) {
            _rootNamespace.Namespace = Object.create(Object.prototype);
        }

        function createNamespace(parentNamespace, name) {
            var currentNamespace = parentNamespace || {};
            if (name) {
                var namespaceFragments = name.split(".");
                if (currentNamespace === _Global && namespaceFragments[0] === "WinJS") {
                    currentNamespace = _WinJS;
                    namespaceFragments.splice(0, 1);
                }
                for (var i = 0, len = namespaceFragments.length; i < len; i++) {
                    var namespaceName = namespaceFragments[i];
                    if (!currentNamespace[namespaceName]) {
                        Object.defineProperty(currentNamespace, namespaceName,
                            { value: {}, writable: false, enumerable: true, configurable: true }
                        );
                    }
                    currentNamespace = currentNamespace[namespaceName];
                }
            }
            return currentNamespace;
        }

        function defineWithParent(parentNamespace, name, members) {
            /// <signature helpKeyword="WinJS.Namespace.defineWithParent">
            /// <summary locid="WinJS.Namespace.defineWithParent">
            /// Defines a new namespace with the specified name under the specified parent namespace.
            /// </summary>
            /// <param name="parentNamespace" type="Object" locid="WinJS.Namespace.defineWithParent_p:parentNamespace">
            /// The parent namespace.
            /// </param>
            /// <param name="name" type="String" locid="WinJS.Namespace.defineWithParent_p:name">
            /// The name of the new namespace.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.defineWithParent_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.defineWithParent_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            var currentNamespace = createNamespace(parentNamespace, name);

            if (members) {
                initializeProperties(currentNamespace, members, name || "<ANONYMOUS>");
            }

            return currentNamespace;
        }

        function define(name, members) {
            /// <signature helpKeyword="WinJS.Namespace.define">
            /// <summary locid="WinJS.Namespace.define">
            /// Defines a new namespace with the specified name.
            /// </summary>
            /// <param name="name" type="String" locid="WinJS.Namespace.define_p:name">
            /// The name of the namespace. This could be a dot-separated name for nested namespaces.
            /// </param>
            /// <param name="members" type="Object" locid="WinJS.Namespace.define_p:members">
            /// The members of the new namespace.
            /// </param>
            /// <returns type="Object" locid="WinJS.Namespace.define_returnValue">
            /// The newly-defined namespace.
            /// </returns>
            /// </signature>
            return defineWithParent(_Global, name, members);
        }

        var LazyStates = {
            uninitialized: 1,
            working: 2,
            initialized: 3,
        };

        function lazy(f) {
            var name;
            var state = LazyStates.uninitialized;
            var result;
            return {
                setName: function (value) {
                    name = value;
                },
                get: function () {
                    switch (state) {
                        case LazyStates.initialized:
                            return result;

                        case LazyStates.uninitialized:
                            state = LazyStates.working;
                            try {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StartTM");
                                result = f();
                            } finally {
                                _WriteProfilerMark("WinJS.Namespace._lazy:" + name + ",StopTM");
                                state = LazyStates.uninitialized;
                            }
                            f = null;
                            state = LazyStates.initialized;
                            return result;

                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            throw "Illegal";
                    }
                },
                set: function (value) {
                    switch (state) {
                        case LazyStates.working:
                            throw "Illegal: reentrancy on initialization";

                        default:
                            state = LazyStates.initialized;
                            result = value;
                            break;
                    }
                },
                enumerable: true,
                configurable: true,
            };
        }

        // helper for defining AMD module members
        function moduleDefine(exports, name, members) {
            var target = [exports];
            var publicNS = null;
            if (name) {
                publicNS = createNamespace(_Global, name);
                target.push(publicNS);
            }
            initializeProperties(target, members, name || "<ANONYMOUS>");
            return publicNS;
        }

        // Establish members of the "WinJS.Namespace" namespace
        Object.defineProperties(_rootNamespace.Namespace, {

            defineWithParent: { value: defineWithParent, writable: true, enumerable: true, configurable: true },

            define: { value: define, writable: true, enumerable: true, configurable: true },

            _lazy: { value: lazy, writable: true, enumerable: true, configurable: true },

            _moduleDefine: { value: moduleDefine, writable: true, enumerable: true, configurable: true }

        });

    })();

    (function () {

        function define(constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.define">
            /// <summary locid="WinJS.Class.define">
            /// Defines a class using the given constructor and the specified instance members.
            /// </summary>
            /// <param name="constructor" type="Function" locid="WinJS.Class.define_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.define_p:instanceMembers">
            /// The set of instance fields, properties, and methods made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.define_p:staticMembers">
            /// The set of static fields, properties, and methods made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.define_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            _BaseCoreUtils.markSupportedForProcessing(constructor);
            if (instanceMembers) {
                initializeProperties(constructor.prototype, instanceMembers);
            }
            if (staticMembers) {
                initializeProperties(constructor, staticMembers);
            }
            return constructor;
        }

        function derive(baseClass, constructor, instanceMembers, staticMembers) {
            /// <signature helpKeyword="WinJS.Class.derive">
            /// <summary locid="WinJS.Class.derive">
            /// Creates a sub-class based on the supplied baseClass parameter, using prototypal inheritance.
            /// </summary>
            /// <param name="baseClass" type="Function" locid="WinJS.Class.derive_p:baseClass">
            /// The class to inherit from.
            /// </param>
            /// <param name="constructor" type="Function" locid="WinJS.Class.derive_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <param name="instanceMembers" type="Object" locid="WinJS.Class.derive_p:instanceMembers">
            /// The set of instance fields, properties, and methods to be made available on the class.
            /// </param>
            /// <param name="staticMembers" type="Object" locid="WinJS.Class.derive_p:staticMembers">
            /// The set of static fields, properties, and methods to be made available on the class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.derive_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            if (baseClass) {
                constructor = constructor || function () { };
                var basePrototype = baseClass.prototype;
                constructor.prototype = Object.create(basePrototype);
                _BaseCoreUtils.markSupportedForProcessing(constructor);
                Object.defineProperty(constructor.prototype, "constructor", { value: constructor, writable: true, configurable: true, enumerable: true });
                if (instanceMembers) {
                    initializeProperties(constructor.prototype, instanceMembers);
                }
                if (staticMembers) {
                    initializeProperties(constructor, staticMembers);
                }
                return constructor;
            } else {
                return define(constructor, instanceMembers, staticMembers);
            }
        }

        function mix(constructor) {
            /// <signature helpKeyword="WinJS.Class.mix">
            /// <summary locid="WinJS.Class.mix">
            /// Defines a class using the given constructor and the union of the set of instance members
            /// specified by all the mixin objects. The mixin parameter list is of variable length.
            /// </summary>
            /// <param name="constructor" locid="WinJS.Class.mix_p:constructor">
            /// A constructor function that is used to instantiate this class.
            /// </param>
            /// <returns type="Function" locid="WinJS.Class.mix_returnValue">
            /// The newly-defined class.
            /// </returns>
            /// </signature>
            constructor = constructor || function () { };
            var i, len;
            for (i = 1, len = arguments.length; i < len; i++) {
                initializeProperties(constructor.prototype, arguments[i]);
            }
            return constructor;
        }

        // Establish members of "WinJS.Class" namespace
        _WinJS.Namespace.define("WinJS.Class", {
            define: define,
            derive: derive,
            mix: mix
        });

    })();

    return {
        Namespace: _WinJS.Namespace,
        Class: _WinJS.Class
    };

});
_winjs("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function errorsInit(_Base) {
    "use strict";

    var ErrorFromName = _Base.Class.derive(Error, function (name, message) {
        /// <signature helpKeyword="WinJS.ErrorFromName">
        /// <summary locid="WinJS.ErrorFromName">
        /// Creates an Error object with the specified name and message properties.
        /// </summary>
        /// <param name="name" type="String" locid="WinJS.ErrorFromName_p:name">The name of this error. The name is meant to be consumed programmatically and should not be localized.</param>
        /// <param name="message" type="String" optional="true" locid="WinJS.ErrorFromName_p:message">The message for this error. The message is meant to be consumed by humans and should be localized.</param>
        /// <returns type="Error" locid="WinJS.ErrorFromName_returnValue">Error instance with .name and .message properties populated</returns>
        /// </signature>
        this.name = name;
        this.message = message || name;
    }, {
        /* empty */
    }, {
        supportedForProcessing: false,
    });

    _Base.Namespace.define("WinJS", {
        // ErrorFromName establishes a simple pattern for returning error codes.
        //
        ErrorFromName: ErrorFromName
    });

    return ErrorFromName;

});


_winjs("WinJS/Core/_Events", ["exports","WinJS/Core/_Base"], function eventsInit(exports, _Base) {
    "use strict";


    function createEventProperty(name) {
        var eventPropStateName = "_on" + name + "state";

        return {
            get: function () {
                var state = this[eventPropStateName];
                return state && state.userHandler;
            },
            set: function (handler) {
                var state = this[eventPropStateName];
                if (handler) {
                    if (!state) {
                        state = { wrapper: function (evt) { return state.userHandler(evt); }, userHandler: handler };
                        Object.defineProperty(this, eventPropStateName, { value: state, enumerable: false, writable:true, configurable: true });
                        this.addEventListener(name, state.wrapper, false);
                    }
                    state.userHandler = handler;
                } else if (state) {
                    this.removeEventListener(name, state.wrapper, false);
                    this[eventPropStateName] = null;
                }
            },
            enumerable: true
        };
    }

    function createEventProperties() {
        /// <signature helpKeyword="WinJS.Utilities.createEventProperties">
        /// <summary locid="WinJS.Utilities.createEventProperties">
        /// Creates an object that has one property for each name passed to the function.
        /// </summary>
        /// <param name="events" locid="WinJS.Utilities.createEventProperties_p:events">
        /// A variable list of property names.
        /// </param>
        /// <returns type="Object" locid="WinJS.Utilities.createEventProperties_returnValue">
        /// The object with the specified properties. The names of the properties are prefixed with 'on'.
        /// </returns>
        /// </signature>
        var props = {};
        for (var i = 0, len = arguments.length; i < len; i++) {
            var name = arguments[i];
            props["on" + name] = createEventProperty(name);
        }
        return props;
    }

    var EventMixinEvent = _Base.Class.define(
        function EventMixinEvent_ctor(type, detail, target) {
            this.detail = detail;
            this.target = target;
            this.timeStamp = Date.now();
            this.type = type;
        },
        {
            bubbles: { value: false, writable: false },
            cancelable: { value: false, writable: false },
            currentTarget: {
                get: function () { return this.target; }
            },
            defaultPrevented: {
                get: function () { return this._preventDefaultCalled; }
            },
            trusted: { value: false, writable: false },
            eventPhase: { value: 0, writable: false },
            target: null,
            timeStamp: null,
            type: null,

            preventDefault: function () {
                this._preventDefaultCalled = true;
            },
            stopImmediatePropagation: function () {
                this._stopImmediatePropagationCalled = true;
            },
            stopPropagation: function () {
            }
        }, {
            supportedForProcessing: false,
        }
    );

    var eventMixin = {
        _listeners: null,

        addEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.addEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.addEventListener">
            /// Adds an event listener to the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.addEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.addEventListener_p:listener">
            /// The listener to invoke when the event is raised.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.addEventListener_p:useCapture">
            /// if true initiates capture, otherwise false.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            this._listeners = this._listeners || {};
            var eventListeners = (this._listeners[type] = this._listeners[type] || []);
            for (var i = 0, len = eventListeners.length; i < len; i++) {
                var l = eventListeners[i];
                if (l.useCapture === useCapture && l.listener === listener) {
                    return;
                }
            }
            eventListeners.push({ listener: listener, useCapture: useCapture });
        },
        dispatchEvent: function (type, details) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.dispatchEvent">
            /// <summary locid="WinJS.Utilities.eventMixin.dispatchEvent">
            /// Raises an event of the specified type and with the specified additional properties.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="details" locid="WinJS.Utilities.eventMixin.dispatchEvent_p:details">
            /// The set of additional properties to be attached to the event object when the event is raised.
            /// </param>
            /// <returns type="Boolean" locid="WinJS.Utilities.eventMixin.dispatchEvent_returnValue">
            /// true if preventDefault was called on the event.
            /// </returns>
            /// </signature>
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                var eventValue = new EventMixinEvent(type, details, this);
                // Need to copy the array to protect against people unregistering while we are dispatching
                listeners = listeners.slice(0, listeners.length);
                for (var i = 0, len = listeners.length; i < len && !eventValue._stopImmediatePropagationCalled; i++) {
                    listeners[i].listener(eventValue);
                }
                return eventValue.defaultPrevented || false;
            }
            return false;
        },
        removeEventListener: function (type, listener, useCapture) {
            /// <signature helpKeyword="WinJS.Utilities.eventMixin.removeEventListener">
            /// <summary locid="WinJS.Utilities.eventMixin.removeEventListener">
            /// Removes an event listener from the control.
            /// </summary>
            /// <param name="type" locid="WinJS.Utilities.eventMixin.removeEventListener_p:type">
            /// The type (name) of the event.
            /// </param>
            /// <param name="listener" locid="WinJS.Utilities.eventMixin.removeEventListener_p:listener">
            /// The listener to remove.
            /// </param>
            /// <param name="useCapture" locid="WinJS.Utilities.eventMixin.removeEventListener_p:useCapture">
            /// Specifies whether to initiate capture.
            /// </param>
            /// </signature>
            useCapture = useCapture || false;
            var listeners = this._listeners && this._listeners[type];
            if (listeners) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    var l = listeners[i];
                    if (l.listener === listener && l.useCapture === useCapture) {
                        listeners.splice(i, 1);
                        if (listeners.length === 0) {
                            delete this._listeners[type];
                        }
                        // Only want to remove one element for each call to removeEventListener
                        break;
                    }
                }
            }
        }
    };

    _Base.Namespace._moduleDefine(exports, "WinJS.Utilities", {
        _createEventProperty: createEventProperty,
        createEventProperties: createEventProperties,
        eventMixin: eventMixin
    });

});


_winjs("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function traceInit(_Global) {
    "use strict";

    function nop(v) {
        return v;
    }

    return {
        _traceAsyncOperationStarting: (_Global.Debug && _Global.Debug.msTraceAsyncOperationStarting && _Global.Debug.msTraceAsyncOperationStarting.bind(_Global.Debug)) || nop,
        _traceAsyncOperationCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncOperationCompleted && _Global.Debug.msTraceAsyncOperationCompleted.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackStarting: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackStarting && _Global.Debug.msTraceAsyncCallbackStarting.bind(_Global.Debug)) || nop,
        _traceAsyncCallbackCompleted: (_Global.Debug && _Global.Debug.msTraceAsyncCallbackCompleted && _Global.Debug.msTraceAsyncCallbackCompleted.bind(_Global.Debug)) || nop
    };
});
_winjs("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global","WinJS/Core/_BaseCoreUtils","WinJS/Core/_Base","WinJS/Core/_ErrorFromName","WinJS/Core/_Events","WinJS/Core/_Trace"], function promiseStateMachineInit(_Global, _BaseCoreUtils, _Base, _ErrorFromName, _Events, _Trace) {
    "use strict";

    _Global.Debug && (_Global.Debug.setNonUserCodeExceptions = true);

    var ListenerType = _Base.Class.mix(_Base.Class.define(null, { /*empty*/ }, { supportedForProcessing: false }), _Events.eventMixin);
    var promiseEventListeners = new ListenerType();
    // make sure there is a listeners collection so that we can do a more trivial check below
    promiseEventListeners._listeners = {};
    var errorET = "error";
    var canceledName = "Canceled";
    var tagWithStack = false;
    var tag = {
        promise: 0x01,
        thenPromise: 0x02,
        errorPromise: 0x04,
        exceptionPromise: 0x08,
        completePromise: 0x10,
    };
    tag.all = tag.promise | tag.thenPromise | tag.errorPromise | tag.exceptionPromise | tag.completePromise;

    //
    // Global error counter, for each error which enters the system we increment this once and then
    // the error number travels with the error as it traverses the tree of potential handlers.
    //
    // When someone has registered to be told about errors (WinJS.Promise.callonerror) promises
    // which are in error will get tagged with a ._errorId field. This tagged field is the
    // contract by which nested promises with errors will be identified as chaining for the
    // purposes of the callonerror semantics. If a nested promise in error is encountered without
    // a ._errorId it will be assumed to be foreign and treated as an interop boundary and
    // a new error id will be minted.
    //
    var error_number = 1;

    //
    // The state machine has a interesting hiccup in it with regards to notification, in order
    // to flatten out notification and avoid recursion for synchronous completion we have an
    // explicit set of *_notify states which are responsible for notifying their entire tree
    // of children. They can do this because they know that immediate children are always
    // ThenPromise instances and we can therefore reach into their state to access the
    // _listeners collection.
    //
    // So, what happens is that a Promise will be fulfilled through the _completed or _error
    // messages at which point it will enter a *_notify state and be responsible for to move
    // its children into an (as appropriate) success or error state and also notify that child's
    // listeners of the state transition, until leaf notes are reached.
    //

    var state_created,              // -> working
        state_working,              // -> error | error_notify | success | success_notify | canceled | waiting
        state_waiting,              // -> error | error_notify | success | success_notify | waiting_canceled
        state_waiting_canceled,     // -> error | error_notify | success | success_notify | canceling
        state_canceled,             // -> error | error_notify | success | success_notify | canceling
        state_canceling,            // -> error_notify
        state_success_notify,       // -> success
        state_success,              // -> .
        state_error_notify,         // -> error
        state_error;                // -> .

    // Noop function, used in the various states to indicate that they don't support a given
    // message. Named with the somewhat cute name '_' because it reads really well in the states.

    function _() { }

    // Initial state
    //
    state_created = {
        name: "created",
        enter: function (promise) {
            promise._setState(state_working);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Ready state, waiting for a message (completed/error/progress), able to be canceled
    //
    state_working = {
        name: "working",
        enter: _,
        cancel: function (promise) {
            promise._setState(state_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting state, if a promise is completed with a value which is itself a promise
    // (has a then() method) it signs up to be informed when that child promise is
    // fulfilled at which point it will be fulfilled with that value.
    //
    state_waiting = {
        name: "waiting",
        enter: function (promise) {
            var waitedUpon = promise._value;
            // We can special case our own intermediate promises which are not in a
            //  terminal state by just pushing this promise as a listener without
            //  having to create new indirection functions
            if (waitedUpon instanceof ThenPromise &&
                waitedUpon._state !== state_error &&
                waitedUpon._state !== state_success) {
                pushListener(waitedUpon, { promise: promise });
            } else {
                var error = function (value) {
                    if (waitedUpon._errorId) {
                        promise._chainedError(value, waitedUpon);
                    } else {
                        // Because this is an interop boundary we want to indicate that this
                        //  error has been handled by the promise infrastructure before we
                        //  begin a new handling chain.
                        //
                        callonerror(promise, value, detailsForHandledError, waitedUpon, error);
                        promise._error(value);
                    }
                };
                error.handlesOnError = true;
                waitedUpon.then(
                    promise._completed.bind(promise),
                    error,
                    promise._progress.bind(promise)
                );
            }
        },
        cancel: function (promise) {
            promise._setState(state_waiting_canceled);
        },
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Waiting canceled state, when a promise has been in a waiting state and receives a
    // request to cancel its pending work it will forward that request to the child promise
    // and then waits to be informed of the result. This promise moves itself into the
    // canceling state but understands that the child promise may instead push it to a
    // different state.
    //
    state_waiting_canceled = {
        name: "waiting_canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. Triggering a cancel on the promise
            // that we are waiting upon may result in a different state transition
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            var waitedUpon = promise._value;
            if (waitedUpon.cancel) {
                waitedUpon.cancel();
            }
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceled state, moves to the canceling state and then tells the promise to do
    // whatever it might need to do on cancelation.
    //
    state_canceled = {
        name: "canceled",
        enter: function (promise) {
            // Initiate a transition to canceling. The _cancelAction may change the state
            // before the state machine pump runs again.
            promise._setState(state_canceling);
            promise._cancelAction();
        },
        cancel: _,
        done: done,
        then: then,
        _completed: completed,
        _error: error,
        _notify: _,
        _progress: progress,
        _setCompleteValue: setCompleteValue,
        _setErrorValue: setErrorValue
    };

    // Canceling state, commits to the promise moving to an error state with an error
    // object whose 'name' and 'message' properties contain the string "Canceled"
    //
    state_canceling = {
        name: "canceling",
        enter: function (promise) {
            var error = new Error(canceledName);
            error.name = error.message;
            promise._value = error;
            promise._setState(state_error_notify);
        },
        cancel: _,
        done: _,
        then: _,
        _completed: _,
        _error: _,
        _notify: _,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success notify state, moves a promise to the success state and notifies all children
    //
    state_success_notify = {
        name: "complete_notify",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_success);
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Success state, moves a promise to the success state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_success = {
        name: "success",
        enter: function (promise) {
            promise.done = CompletePromise.prototype.done;
            promise.then = CompletePromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here */
        then: null, /*error to get here */
        _completed: _,
        _error: _,
        _notify: notifySuccess,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error notify state, moves a promise to the error state and notifies all children
    //
    state_error_notify = {
        name: "error_notify",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            if (promise._listeners) {
                var queue = [promise];
                var p;
                while (queue.length) {
                    p = queue.shift();
                    p._state._notify(p, queue);
                }
            }
            promise._setState(state_error);
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    // Error state, moves a promise to the error state and does NOT notify any children.
    // Some upstream promise is owning the notification pass.
    //
    state_error = {
        name: "error",
        enter: function (promise) {
            promise.done = ErrorPromise.prototype.done;
            promise.then = ErrorPromise.prototype.then;
            promise._cleanupAction();
        },
        cancel: _,
        done: null, /*error to get here*/
        then: null, /*error to get here*/
        _completed: _,
        _error: _,
        _notify: notifyError,
        _progress: _,
        _setCompleteValue: _,
        _setErrorValue: _
    };

    //
    // The statemachine implementation follows a very particular pattern, the states are specified
    // as static stateless bags of functions which are then indirected through the state machine
    // instance (a Promise). As such all of the functions on each state have the promise instance
    // passed to them explicitly as a parameter and the Promise instance members do a little
    // dance where they indirect through the state and insert themselves in the argument list.
    //
    // We could instead call directly through the promise states however then every caller
    // would have to remember to do things like pumping the state machine to catch state transitions.
    //

    var PromiseStateMachine = _Base.Class.define(null, {
        _listeners: null,
        _nextState: null,
        _state: null,
        _value: null,

        cancel: function () {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
            /// <summary locid="WinJS.PromiseStateMachine.cancel">
            /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
            /// already been fulfilled and cancellation is supported, the promise enters
            /// the error state with a value of Error("Canceled").
            /// </summary>
            /// </signature>
            this._state.cancel(this);
            this._run();
        },
        done: function Promise_done(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
            /// <summary locid="WinJS.PromiseStateMachine.done">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            ///
            /// After the handlers have finished executing, this function throws any error that would have been returned
            /// from then() as a promise in the error state.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The fulfilled value is passed as the single argument. If the value is null,
            /// the fulfilled value is returned. The value returned
            /// from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while executing the function, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function is the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
            /// the function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// </signature>
            this._state.done(this, onComplete, onError, onProgress);
        },
        then: function Promise_then(onComplete, onError, onProgress) {
            /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
            /// <summary locid="WinJS.PromiseStateMachine.then">
            /// Allows you to specify the work to be done on the fulfillment of the promised value,
            /// the error handling to be performed if the promise fails to fulfill
            /// a value, and the handling of progress notifications along the way.
            /// </summary>
            /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
            /// The function to be called if the promise is fulfilled successfully with a value.
            /// The value is passed as the single argument. If the value is null, the value is returned.
            /// The value returned from the function becomes the fulfilled value of the promise returned by
            /// then(). If an exception is thrown while this function is being executed, the promise returned
            /// by then() moves into the error state.
            /// </param>
            /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
            /// The function to be called if the promise is fulfilled with an error. The error
            /// is passed as the single argument. If it is null, the error is forwarded.
            /// The value returned from the function becomes the fulfilled value of the promise returned by then().
            /// </param>
            /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
            /// The function to be called if the promise reports progress. Data about the progress
            /// is passed as the single argument. Promises are not required to support
            /// progress.
            /// </param>
            /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
            /// The promise whose value is the result of executing the complete or
            /// error function.
            /// </returns>
            /// </signature>
            return this._state.then(this, onComplete, onError, onProgress);
        },

        _chainedError: function (value, context) {
            var result = this._state._error(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _completed: function (value) {
            var result = this._state._completed(this, value);
            this._run();
            return result;
        },
        _error: function (value) {
            var result = this._state._error(this, value, detailsForError);
            this._run();
            return result;
        },
        _progress: function (value) {
            this._state._progress(this, value);
        },
        _setState: function (state) {
            this._nextState = state;
        },
        _setCompleteValue: function (value) {
            this._state._setCompleteValue(this, value);
            this._run();
        },
        _setChainedErrorValue: function (value, context) {
            var result = this._state._setErrorValue(this, value, detailsForChainedError, context);
            this._run();
            return result;
        },
        _setExceptionValue: function (value) {
            var result = this._state._setErrorValue(this, value, detailsForException);
            this._run();
            return result;
        },
        _run: function () {
            while (this._nextState) {
                this._state = this._nextState;
                this._nextState = null;
                this._state.enter(this);
            }
        }
    }, {
        supportedForProcessing: false
    });

    //
    // Implementations of shared state machine code.
    //

    function completed(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success_notify;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function createErrorDetails(exception, error, promise, id, parent, handler) {
        return {
            exception: exception,
            error: error,
            promise: promise,
            handler: handler,
            id: id,
            parent: parent
        };
    }
    function detailsForHandledError(promise, errorValue, context, handler) {
        var exception = context._isException;
        var errorId = context._errorId;
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context,
            handler
        );
    }
    function detailsForChainedError(promise, errorValue, context) {
        var exception = context._isException;
        var errorId = context._errorId;
        setErrorInfo(promise, errorId, exception);
        return createErrorDetails(
            exception ? errorValue : null,
            exception ? null : errorValue,
            promise,
            errorId,
            context
        );
    }
    function detailsForError(promise, errorValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId);
        return createErrorDetails(
            null,
            errorValue,
            promise,
            errorId
        );
    }
    function detailsForException(promise, exceptionValue) {
        var errorId = ++error_number;
        setErrorInfo(promise, errorId, true);
        return createErrorDetails(
            exceptionValue,
            null,
            promise,
            errorId
        );
    }
    function done(promise, onComplete, onError, onProgress) {
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.done");
        pushListener(promise, { c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
    }
    function error(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error_notify);
    }
    function notifySuccess(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onComplete = listener.c;
            var target = listener.promise;

            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, _Global.Debug && _Global.Debug.MS_ASYNC_OP_STATUS_SUCCESS);

            if (target) {
                _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                try {
                    target._setCompleteValue(onComplete ? onComplete(value) : value);
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    _Trace._traceAsyncCallbackCompleted();
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                CompletePromise.prototype.done.call(promise, onComplete);
            }
        }
    }
    function notifyError(promise, queue) {
        var value = promise._value;
        var listeners = promise._listeners;
        if (!listeners) {
            return;
        }
        promise._listeners = null;
        var i, len;
        for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
            var listener = len === 1 ? listeners : listeners[i];
            var onError = listener.e;
            var target = listener.promise;

            var errorID = _Global.Debug && (value && value.name === canceledName ? _Global.Debug.MS_ASYNC_OP_STATUS_CANCELED : _Global.Debug.MS_ASYNC_OP_STATUS_ERROR);
            _Trace._traceAsyncOperationCompleted(listener.asyncOpID, errorID);

            if (target) {
                var asyncCallbackStarted = false;
                try {
                    if (onError) {
                        _Trace._traceAsyncCallbackStarting(listener.asyncOpID);
                        asyncCallbackStarted = true;
                        if (!onError.handlesOnError) {
                            callonerror(target, value, detailsForHandledError, promise, onError);
                        }
                        target._setCompleteValue(onError(value));
                    } else {
                        target._setChainedErrorValue(value, promise);
                    }
                } catch (ex) {
                    target._setExceptionValue(ex);
                } finally {
                    if (asyncCallbackStarted) {
                        _Trace._traceAsyncCallbackCompleted();
                    }
                }
                if (target._state !== state_waiting && target._listeners) {
                    queue.push(target);
                }
            } else {
                ErrorPromise.prototype.done.call(promise, null, onError);
            }
        }
    }
    function callonerror(promise, value, onerrorDetailsGenerator, context, handler) {
        if (promiseEventListeners._listeners[errorET]) {
            if (value instanceof Error && value.message === canceledName) {
                return;
            }
            promiseEventListeners.dispatchEvent(errorET, onerrorDetailsGenerator(promise, value, context, handler));
        }
    }
    function progress(promise, value) {
        var listeners = promise._listeners;
        if (listeners) {
            var i, len;
            for (i = 0, len = Array.isArray(listeners) ? listeners.length : 1; i < len; i++) {
                var listener = len === 1 ? listeners : listeners[i];
                var onProgress = listener.p;
                if (onProgress) {
                    try { onProgress(value); } catch (ex) { }
                }
                if (!(listener.c || listener.e) && listener.promise) {
                    listener.promise._progress(value);
                }
            }
        }
    }
    function pushListener(promise, listener) {
        var listeners = promise._listeners;
        if (listeners) {
            // We may have either a single listener (which will never be wrapped in an array)
            // or 2+ listeners (which will be wrapped). Since we are now adding one more listener
            // we may have to wrap the single listener before adding the second.
            listeners = Array.isArray(listeners) ? listeners : [listeners];
            listeners.push(listener);
        } else {
            listeners = listener;
        }
        promise._listeners = listeners;
    }
    // The difference beween setCompleteValue()/setErrorValue() and complete()/error() is that setXXXValue() moves
    // a promise directly to the success/error state without starting another notification pass (because one
    // is already ongoing).
    function setErrorInfo(promise, errorId, isException) {
        promise._isException = isException || false;
        promise._errorId = errorId;
    }
    function setErrorValue(promise, value, onerrorDetails, context) {
        promise._value = value;
        callonerror(promise, value, onerrorDetails, context);
        promise._setState(state_error);
    }
    function setCompleteValue(promise, value) {
        var targetState;
        if (value && typeof value === "object" && typeof value.then === "function") {
            targetState = state_waiting;
        } else {
            targetState = state_success;
        }
        promise._value = value;
        promise._setState(targetState);
    }
    function then(promise, onComplete, onError, onProgress) {
        var result = new ThenPromise(promise);
        var asyncOpID = _Trace._traceAsyncOperationStarting("WinJS.Promise.then");
        pushListener(promise, { promise: result, c: onComplete, e: onError, p: onProgress, asyncOpID: asyncOpID });
        return result;
    }

    //
    // Internal implementation detail promise, ThenPromise is created when a promise needs
    // to be returned from a then() method.
    //
    var ThenPromise = _Base.Class.derive(PromiseStateMachine,
        function (creator) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.thenPromise))) {
                this._stack = Promise._getStack();
            }

            this._creator = creator;
            this._setState(state_created);
            this._run();
        }, {
            _creator: null,

            _cancelAction: function () { if (this._creator) { this._creator.cancel(); } },
            _cleanupAction: function () { this._creator = null; }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Slim promise implementations for already completed promises, these are created
    // under the hood on synchronous completion paths as well as by WinJS.Promise.wrap
    // and WinJS.Promise.wrapError.
    //

    var ErrorPromise = _Base.Class.define(
        function ErrorPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.errorPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForError);
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function ErrorPromise_done(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                var value = this._value;
                if (onError) {
                    try {
                        if (!onError.handlesOnError) {
                            callonerror(null, value, detailsForHandledError, this, onError);
                        }
                        var result = onError(value);
                        if (result && typeof result === "object" && typeof result.done === "function") {
                            // If a promise is returned we need to wait on it.
                            result.done();
                        }
                        return;
                    } catch (ex) {
                        value = ex;
                    }
                }
                if (value instanceof Error && value.message === canceledName) {
                    // suppress cancel
                    return;
                }
                // force the exception to be thrown asyncronously to avoid any try/catch blocks
                //
                Promise._doneHandler(value);
            },
            then: function ErrorPromise_then(unused, onError) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>

                // If the promise is already in a error state and no error handler is provided
                // we optimize by simply returning the promise instead of creating a new one.
                //
                if (!onError) { return this; }
                var result;
                var value = this._value;
                try {
                    if (!onError.handlesOnError) {
                        callonerror(null, value, detailsForHandledError, this, onError);
                    }
                    result = new CompletePromise(onError(value));
                } catch (ex) {
                    // If the value throw from the error handler is the same as the value
                    // provided to the error handler then there is no need for a new promise.
                    //
                    if (ex === value) {
                        result = this;
                    } else {
                        result = new ExceptionPromise(ex);
                    }
                }
                return result;
            }
        }, {
            supportedForProcessing: false
        }
    );

    var ExceptionPromise = _Base.Class.derive(ErrorPromise,
        function ExceptionPromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.exceptionPromise))) {
                this._stack = Promise._getStack();
            }

            this._value = value;
            callonerror(this, value, detailsForException);
        }, {
            /* empty */
        }, {
            supportedForProcessing: false
        }
    );

    var CompletePromise = _Base.Class.define(
        function CompletePromise_ctor(value) {

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.completePromise))) {
                this._stack = Promise._getStack();
            }

            if (value && typeof value === "object" && typeof value.then === "function") {
                var result = new ThenPromise(null);
                result._setCompleteValue(value);
                return result;
            }
            this._value = value;
        }, {
            cancel: function () {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.cancel">
                /// <summary locid="WinJS.PromiseStateMachine.cancel">
                /// Attempts to cancel the fulfillment of a promised value. If the promise hasn't
                /// already been fulfilled and cancellation is supported, the promise enters
                /// the error state with a value of Error("Canceled").
                /// </summary>
                /// </signature>
            },
            done: function CompletePromise_done(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.done">
                /// <summary locid="WinJS.PromiseStateMachine.done">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                ///
                /// After the handlers have finished executing, this function throws any error that would have been returned
                /// from then() as a promise in the error state.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.done_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The fulfilled value is passed as the single argument. If the value is null,
                /// the fulfilled value is returned. The value returned
                /// from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while executing the function, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function is the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.done_p:onProgress">
                /// the function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// </signature>
                if (!onComplete) { return; }
                try {
                    var result = onComplete(this._value);
                    if (result && typeof result === "object" && typeof result.done === "function") {
                        result.done();
                    }
                } catch (ex) {
                    // force the exception to be thrown asynchronously to avoid any try/catch blocks
                    Promise._doneHandler(ex);
                }
            },
            then: function CompletePromise_then(onComplete) {
                /// <signature helpKeyword="WinJS.PromiseStateMachine.then">
                /// <summary locid="WinJS.PromiseStateMachine.then">
                /// Allows you to specify the work to be done on the fulfillment of the promised value,
                /// the error handling to be performed if the promise fails to fulfill
                /// a value, and the handling of progress notifications along the way.
                /// </summary>
                /// <param name='onComplete' type='Function' locid="WinJS.PromiseStateMachine.then_p:onComplete">
                /// The function to be called if the promise is fulfilled successfully with a value.
                /// The value is passed as the single argument. If the value is null, the value is returned.
                /// The value returned from the function becomes the fulfilled value of the promise returned by
                /// then(). If an exception is thrown while this function is being executed, the promise returned
                /// by then() moves into the error state.
                /// </param>
                /// <param name='onError' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onError">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument. If it is null, the error is forwarded.
                /// The value returned from the function becomes the fulfilled value of the promise returned by then().
                /// </param>
                /// <param name='onProgress' type='Function' optional='true' locid="WinJS.PromiseStateMachine.then_p:onProgress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.PromiseStateMachine.then_returnValue">
                /// The promise whose value is the result of executing the complete or
                /// error function.
                /// </returns>
                /// </signature>
                try {
                    // If the value returned from the completion handler is the same as the value
                    // provided to the completion handler then there is no need for a new promise.
                    //
                    var newValue = onComplete ? onComplete(this._value) : this._value;
                    return newValue === this._value ? this : new CompletePromise(newValue);
                } catch (ex) {
                    return new ExceptionPromise(ex);
                }
            }
        }, {
            supportedForProcessing: false
        }
    );

    //
    // Promise is the user-creatable WinJS.Promise object.
    //

    function timeout(timeoutMS) {
        var id;
        return new Promise(
            function (c) {
                if (timeoutMS) {
                    id = _Global.setTimeout(c, timeoutMS);
                } else {
                    _BaseCoreUtils._setImmediate(c);
                }
            },
            function () {
                if (id) {
                    _Global.clearTimeout(id);
                }
            }
        );
    }

    function timeoutWithPromise(timeout, promise) {
        var cancelPromise = function () { promise.cancel(); };
        var cancelTimeout = function () { timeout.cancel(); };
        timeout.then(cancelPromise);
        promise.then(cancelTimeout, cancelTimeout);
        return promise;
    }

    var staticCanceledPromise;

    var Promise = _Base.Class.derive(PromiseStateMachine,
        function Promise_ctor(init, oncancel) {
            /// <signature helpKeyword="WinJS.Promise">
            /// <summary locid="WinJS.Promise">
            /// A promise provides a mechanism to schedule work to be done on a value that
            /// has not yet been computed. It is a convenient abstraction for managing
            /// interactions with asynchronous APIs.
            /// </summary>
            /// <param name="init" type="Function" locid="WinJS.Promise_p:init">
            /// The function that is called during construction of the  promise. The function
            /// is given three arguments (complete, error, progress). Inside this function
            /// you should add event listeners for the notifications supported by this value.
            /// </param>
            /// <param name="oncancel" optional="true" locid="WinJS.Promise_p:oncancel">
            /// The function to call if a consumer of this promise wants
            /// to cancel its undone work. Promises are not required to
            /// support cancellation.
            /// </param>
            /// </signature>

            if (tagWithStack && (tagWithStack === true || (tagWithStack & tag.promise))) {
                this._stack = Promise._getStack();
            }

            this._oncancel = oncancel;
            this._setState(state_created);
            this._run();

            try {
                var complete = this._completed.bind(this);
                var error = this._error.bind(this);
                var progress = this._progress.bind(this);
                init(complete, error, progress);
            } catch (ex) {
                this._setExceptionValue(ex);
            }
        }, {
            _oncancel: null,

            _cancelAction: function () {
                // BEGIN monaco change
                try {
                    if (this._oncancel) {
                        this._oncancel();
                    } else {
                        throw new Error('Promise did not implement oncancel');
                    }
                } catch (ex) {
                    // Access fields to get them created
                    var msg = ex.message;
                    var stack = ex.stack;
                    promiseEventListeners.dispatchEvent('error', ex);
                }
                // END monaco change
            },
            _cleanupAction: function () { this._oncancel = null; }
        }, {

            addEventListener: function Promise_addEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.addEventListener">
                /// <summary locid="WinJS.Promise.addEventListener">
                /// Adds an event listener to the control.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.addEventListener_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="listener" locid="WinJS.Promise.addEventListener_p:listener">
                /// The listener to invoke when the event is raised.
                /// </param>
                /// <param name="capture" locid="WinJS.Promise.addEventListener_p:capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.addEventListener(eventType, listener, capture);
            },
            any: function Promise_any(values) {
                /// <signature helpKeyword="WinJS.Promise.any">
                /// <summary locid="WinJS.Promise.any">
                /// Returns a promise that is fulfilled when one of the input promises
                /// has been fulfilled.
                /// </summary>
                /// <param name="values" type="Array" locid="WinJS.Promise.any_p:values">
                /// An array that contains promise objects or objects whose property
                /// values include promise objects.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.any_returnValue">
                /// A promise that on fulfillment yields the value of the input (complete or error).
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error) {
                        var keys = Object.keys(values);
                        if (keys.length === 0) {
                            complete();
                        }
                        var canceled = 0;
                        keys.forEach(function (key) {
                            Promise.as(values[key]).then(
                                function () { complete({ key: key, value: values[key] }); },
                                function (e) {
                                    if (e instanceof Error && e.name === canceledName) {
                                        if ((++canceled) === keys.length) {
                                            complete(Promise.cancel);
                                        }
                                        return;
                                    }
                                    error({ key: key, value: values[key] });
                                }
                            );
                        });
                    },
                    function () {
                        var keys = Object.keys(values);
                        keys.forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            as: function Promise_as(value) {
                /// <signature helpKeyword="WinJS.Promise.as">
                /// <summary locid="WinJS.Promise.as">
                /// Returns a promise. If the object is already a promise it is returned;
                /// otherwise the object is wrapped in a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.as_p:value">
                /// The value to be treated as a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.as_returnValue">
                /// A promise.
                /// </returns>
                /// </signature>
                if (value && typeof value === "object" && typeof value.then === "function") {
                    return value;
                }
                return new CompletePromise(value);
            },
            /// <field type="WinJS.Promise" helpKeyword="WinJS.Promise.cancel" locid="WinJS.Promise.cancel">
            /// Canceled promise value, can be returned from a promise completion handler
            /// to indicate cancelation of the promise chain.
            /// </field>
            cancel: {
                get: function () {
                    return (staticCanceledPromise = staticCanceledPromise || new ErrorPromise(new _ErrorFromName(canceledName)));
                }
            },
            dispatchEvent: function Promise_dispatchEvent(eventType, details) {
                /// <signature helpKeyword="WinJS.Promise.dispatchEvent">
                /// <summary locid="WinJS.Promise.dispatchEvent">
                /// Raises an event of the specified type and properties.
                /// </summary>
                /// <param name="eventType" locid="WinJS.Promise.dispatchEvent_p:eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name="details" locid="WinJS.Promise.dispatchEvent_p:details">
                /// The set of additional properties to be attached to the event object.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.dispatchEvent_returnValue">
                /// Specifies whether preventDefault was called on the event.
                /// </returns>
                /// </signature>
                return promiseEventListeners.dispatchEvent(eventType, details);
            },
            is: function Promise_is(value) {
                /// <signature helpKeyword="WinJS.Promise.is">
                /// <summary locid="WinJS.Promise.is">
                /// Determines whether a value fulfills the promise contract.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.is_p:value">
                /// A value that may be a promise.
                /// </param>
                /// <returns type="Boolean" locid="WinJS.Promise.is_returnValue">
                /// true if the specified value is a promise, otherwise false.
                /// </returns>
                /// </signature>
                return value && typeof value === "object" && typeof value.then === "function";
            },
            join: function Promise_join(values) {
                /// <signature helpKeyword="WinJS.Promise.join">
                /// <summary locid="WinJS.Promise.join">
                /// Creates a promise that is fulfilled when all the values are fulfilled.
                /// </summary>
                /// <param name="values" type="Object" locid="WinJS.Promise.join_p:values">
                /// An object whose fields contain values, some of which may be promises.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.join_returnValue">
                /// A promise whose value is an object with the same field names as those of the object in the values parameter, where
                /// each field value is the fulfilled value of a promise.
                /// </returns>
                /// </signature>
                return new Promise(
                    function (complete, error, progress) {
                        var keys = Object.keys(values);
                        var errors = Array.isArray(values) ? [] : {};
                        var results = Array.isArray(values) ? [] : {};
                        var undefineds = 0;
                        var pending = keys.length;
                        var argDone = function (key) {
                            if ((--pending) === 0) {
                                var errorCount = Object.keys(errors).length;
                                if (errorCount === 0) {
                                    complete(results);
                                } else {
                                    var canceledCount = 0;
                                    keys.forEach(function (key) {
                                        var e = errors[key];
                                        if (e instanceof Error && e.name === canceledName) {
                                            canceledCount++;
                                        }
                                    });
                                    if (canceledCount === errorCount) {
                                        complete(Promise.cancel);
                                    } else {
                                        error(errors);
                                    }
                                }
                            } else {
                                progress({ Key: key, Done: true });
                            }
                        };
                        keys.forEach(function (key) {
                            var value = values[key];
                            if (value === undefined) {
                                undefineds++;
                            } else {
                                Promise.then(value,
                                    function (value) { results[key] = value; argDone(key); },
                                    function (value) { errors[key] = value; argDone(key); }
                                );
                            }
                        });
                        pending -= undefineds;
                        if (pending === 0) {
                            complete(results);
                            return;
                        }
                    },
                    function () {
                        Object.keys(values).forEach(function (key) {
                            var promise = Promise.as(values[key]);
                            if (typeof promise.cancel === "function") {
                                promise.cancel();
                            }
                        });
                    }
                );
            },
            removeEventListener: function Promise_removeEventListener(eventType, listener, capture) {
                /// <signature helpKeyword="WinJS.Promise.removeEventListener">
                /// <summary locid="WinJS.Promise.removeEventListener">
                /// Removes an event listener from the control.
                /// </summary>
                /// <param name='eventType' locid="WinJS.Promise.removeEventListener_eventType">
                /// The type (name) of the event.
                /// </param>
                /// <param name='listener' locid="WinJS.Promise.removeEventListener_listener">
                /// The listener to remove.
                /// </param>
                /// <param name='capture' locid="WinJS.Promise.removeEventListener_capture">
                /// Specifies whether or not to initiate capture.
                /// </param>
                /// </signature>
                promiseEventListeners.removeEventListener(eventType, listener, capture);
            },
            supportedForProcessing: false,
            then: function Promise_then(value, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.then">
                /// <summary locid="WinJS.Promise.then">
                /// A static version of the promise instance method then().
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.then_p:value">
                /// the value to be treated as a promise.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.then_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If it is null, the promise simply
                /// returns the value. The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.then_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.then_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.then_returnValue">
                /// A promise whose value is the result of executing the provided complete function.
                /// </returns>
                /// </signature>
                return Promise.as(value).then(onComplete, onError, onProgress);
            },
            thenEach: function Promise_thenEach(values, onComplete, onError, onProgress) {
                /// <signature helpKeyword="WinJS.Promise.thenEach">
                /// <summary locid="WinJS.Promise.thenEach">
                /// Performs an operation on all the input promises and returns a promise
                /// that has the shape of the input and contains the result of the operation
                /// that has been performed on each input.
                /// </summary>
                /// <param name="values" locid="WinJS.Promise.thenEach_p:values">
                /// A set of values (which could be either an array or an object) of which some or all are promises.
                /// </param>
                /// <param name="onComplete" type="Function" locid="WinJS.Promise.thenEach_p:complete">
                /// The function to be called if the promise is fulfilled with a value.
                /// If the value is null, the promise returns the value.
                /// The value is passed as the single argument.
                /// </param>
                /// <param name="onError" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:error">
                /// The function to be called if the promise is fulfilled with an error. The error
                /// is passed as the single argument.
                /// </param>
                /// <param name="onProgress" type="Function" optional="true" locid="WinJS.Promise.thenEach_p:progress">
                /// The function to be called if the promise reports progress. Data about the progress
                /// is passed as the single argument. Promises are not required to support
                /// progress.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.thenEach_returnValue">
                /// A promise that is the result of calling Promise.join on the values parameter.
                /// </returns>
                /// </signature>
                var result = Array.isArray(values) ? [] : {};
                Object.keys(values).forEach(function (key) {
                    result[key] = Promise.as(values[key]).then(onComplete, onError, onProgress);
                });
                return Promise.join(result);
            },
            timeout: function Promise_timeout(time, promise) {
                /// <signature helpKeyword="WinJS.Promise.timeout">
                /// <summary locid="WinJS.Promise.timeout">
                /// Creates a promise that is fulfilled after a timeout.
                /// </summary>
                /// <param name="timeout" type="Number" optional="true" locid="WinJS.Promise.timeout_p:timeout">
                /// The timeout period in milliseconds. If this value is zero or not specified
                /// setImmediate is called, otherwise setTimeout is called.
                /// </param>
                /// <param name="promise" type="Promise" optional="true" locid="WinJS.Promise.timeout_p:promise">
                /// A promise that will be canceled if it doesn't complete before the
                /// timeout has expired.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.timeout_returnValue">
                /// A promise that is completed asynchronously after the specified timeout.
                /// </returns>
                /// </signature>
                var to = timeout(time);
                return promise ? timeoutWithPromise(to, promise) : to;
            },
            wrap: function Promise_wrap(value) {
                /// <signature helpKeyword="WinJS.Promise.wrap">
                /// <summary locid="WinJS.Promise.wrap">
                /// Wraps a non-promise value in a promise. You can use this function if you need
                /// to pass a value to a function that requires a promise.
                /// </summary>
                /// <param name="value" locid="WinJS.Promise.wrap_p:value">
                /// Some non-promise value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrap_returnValue">
                /// A promise that is successfully fulfilled with the specified value
                /// </returns>
                /// </signature>
                return new CompletePromise(value);
            },
            wrapError: function Promise_wrapError(error) {
                /// <signature helpKeyword="WinJS.Promise.wrapError">
                /// <summary locid="WinJS.Promise.wrapError">
                /// Wraps a non-promise error value in a promise. You can use this function if you need
                /// to pass an error to a function that requires a promise.
                /// </summary>
                /// <param name="error" locid="WinJS.Promise.wrapError_p:error">
                /// A non-promise error value to be wrapped in a promise.
                /// </param>
                /// <returns type="WinJS.Promise" locid="WinJS.Promise.wrapError_returnValue">
                /// A promise that is in an error state with the specified value.
                /// </returns>
                /// </signature>
                return new ErrorPromise(error);
            },

            _veryExpensiveTagWithStack: {
                get: function () { return tagWithStack; },
                set: function (value) { tagWithStack = value; }
            },
            _veryExpensiveTagWithStack_tag: tag,
            _getStack: function () {
                if (_Global.Debug && _Global.Debug.debuggerEnabled) {
                    try { throw new Error(); } catch (e) { return e.stack; }
                }
            },

            _cancelBlocker: function Promise__cancelBlocker(input, oncancel) {
                //
                // Returns a promise which on cancelation will still result in downstream cancelation while
                //  protecting the promise 'input' from being  canceled which has the effect of allowing
                //  'input' to be shared amoung various consumers.
                //
                if (!Promise.is(input)) {
                    return Promise.wrap(input);
                }
                var complete;
                var error;
                var output = new Promise(
                    function (c, e) {
                        complete = c;
                        error = e;
                    },
                    function () {
                        complete = null;
                        error = null;
                        oncancel && oncancel();
                    }
                );
                input.then(
                    function (v) { complete && complete(v); },
                    function (e) { error && error(e); }
                );
                return output;
            },

        }
    );
    Object.defineProperties(Promise, _Events.createEventProperties(errorET));

    Promise._doneHandler = function (value) {
        _BaseCoreUtils._setImmediate(function Promise_done_rethrow() {
            throw value;
        });
    };

    return {
        PromiseStateMachine: PromiseStateMachine,
        Promise: Promise,
        state_created: state_created
    };
});

_winjs("WinJS/Promise", ["WinJS/Core/_Base","WinJS/Promise/_StateMachine"], function promiseInit( _Base, _StateMachine) {
    "use strict";

    _Base.Namespace.define("WinJS", {
        Promise: _StateMachine.Promise
    });

    return _StateMachine.Promise;
});

var exported = _modules["WinJS/Core/_WinJS"];

if (typeof exports === 'undefined' && typeof define === 'function' && define.amd) {
    define("vs/base/common/winjs.base.raw", exported);
} else {
    module.exports = exported;
}

if (typeof process !== 'undefined' && typeof process.nextTick === 'function') {
    _modules["WinJS/Core/_BaseCoreUtils"]._setImmediate = function(handler) {
        return process.nextTick(handler);
    };
}

})();
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

define(__m[2/*vs/base/common/winjs.base*/], __M([138/*vs/base/common/winjs.base.raw*/,17/*vs/base/common/errors*/]), function (winjs, __Errors__) {
	'use strict';

	var outstandingPromiseErrors = {};
	function promiseErrorHandler(e) {

		//
		// e.detail looks like: { exception, error, promise, handler, id, parent }
		//
		var details = e.detail;
		var id = details.id;

		// If the error has a parent promise then this is not the origination of the
		//  error so we check if it has a handler, and if so we mark that the error
		//  was handled by removing it from outstandingPromiseErrors
		//
		if (details.parent) {
			if (details.handler && outstandingPromiseErrors) {
				delete outstandingPromiseErrors[id];
			}
			return;
		}

		// Indicate that this error was originated and needs to be handled
		outstandingPromiseErrors[id] = details;

		// The first time the queue fills up this iteration, schedule a timeout to
		// check if any errors are still unhandled.
		if (Object.keys(outstandingPromiseErrors).length === 1) {
			setTimeout(function () {
				var errors = outstandingPromiseErrors;
				outstandingPromiseErrors = {};
				Object.keys(errors).forEach(function (errorId) {
					var error = errors[errorId];
					if(error.exception) {
						__Errors__.onUnexpectedError(error.exception);
					} else if(error.error) {
						__Errors__.onUnexpectedError(error.error);
					}
					console.log("WARNING: Promise with no error callback:" + error.id);
					console.log(error);
					if(error.exception) {
						console.log(error.exception.stack);
					}
				});
			}, 0);
		}
	}

	winjs.Promise.addEventListener("error", promiseErrorHandler);

	return {
		Promise: winjs.Promise,
		TPromise: winjs.Promise,
		PPromise: winjs.Promise
	};
});
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










define(__m[34/*vs/base/common/async*/], __M([1/*require*/,0/*exports*/,17/*vs/base/common/errors*/,5/*vs/base/common/platform*/,2/*vs/base/common/winjs.base*/,92/*vs/base/common/cancellation*/,9/*vs/base/common/lifecycle*/,4/*vs/base/common/event*/]), function (require, exports, errors, platform, winjs_base_1, cancellation_1, lifecycle_1, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function isThenable(obj) {
        return obj && typeof obj.then === 'function';
    }
    function toThenable(arg) {
        if (isThenable(arg)) {
            return arg;
        }
        else {
            return winjs_base_1.TPromise.as(arg);
        }
    }
    exports.toThenable = toThenable;
    function asWinJsPromise(callback) {
        var source = new cancellation_1.CancellationTokenSource();
        return new winjs_base_1.TPromise(function (resolve, reject, progress) {
            var item = callback(source.token);
            if (item instanceof winjs_base_1.TPromise) {
                item.then(resolve, reject, progress);
            }
            else if (isThenable(item)) {
                item.then(resolve, reject);
            }
            else {
                resolve(item);
            }
        }, function () {
            source.cancel();
        });
    }
    exports.asWinJsPromise = asWinJsPromise;
    /**
     * Hook a cancellation token to a WinJS Promise
     */
    function wireCancellationToken(token, promise, resolveAsUndefinedWhenCancelled) {
        var subscription = token.onCancellationRequested(function () { return promise.cancel(); });
        if (resolveAsUndefinedWhenCancelled) {
            promise = promise.then(undefined, function (err) {
                if (!errors.isPromiseCanceledError(err)) {
                    return winjs_base_1.TPromise.wrapError(err);
                }
                return undefined;
            });
        }
        return always(promise, function () { return subscription.dispose(); });
    }
    exports.wireCancellationToken = wireCancellationToken;
    /**
     * A helper to prevent accumulation of sequential async tasks.
     *
     * Imagine a mail man with the sole task of delivering letters. As soon as
     * a letter submitted for delivery, he drives to the destination, delivers it
     * and returns to his base. Imagine that during the trip, N more letters were submitted.
     * When the mail man returns, he picks those N letters and delivers them all in a
     * single trip. Even though N+1 submissions occurred, only 2 deliveries were made.
     *
     * The throttler implements this via the queue() method, by providing it a task
     * factory. Following the example:
     *
     * 		const throttler = new Throttler();
     * 		const letters = [];
     *
     * 		function deliver() {
     * 			const lettersToDeliver = letters;
     * 			letters = [];
     * 			return makeTheTrip(lettersToDeliver);
     * 		}
     *
     * 		function onLetterReceived(l) {
     * 			letters.push(l);
     * 			throttler.queue(deliver);
     * 		}
     */
    var Throttler = (function () {
        function Throttler() {
            this.activePromise = null;
            this.queuedPromise = null;
            this.queuedPromiseFactory = null;
        }
        Throttler.prototype.queue = function (promiseFactory) {
            var _this = this;
            if (this.activePromise) {
                this.queuedPromiseFactory = promiseFactory;
                if (!this.queuedPromise) {
                    var onComplete_1 = function () {
                        _this.queuedPromise = null;
                        var result = _this.queue(_this.queuedPromiseFactory);
                        _this.queuedPromiseFactory = null;
                        return result;
                    };
                    this.queuedPromise = new winjs_base_1.Promise(function (c, e, p) {
                        _this.activePromise.then(onComplete_1, onComplete_1, p).done(c);
                    }, function () {
                        _this.activePromise.cancel();
                    });
                }
                return new winjs_base_1.Promise(function (c, e, p) {
                    _this.queuedPromise.then(c, e, p);
                }, function () {
                    // no-op
                });
            }
            this.activePromise = promiseFactory();
            return new winjs_base_1.Promise(function (c, e, p) {
                _this.activePromise.done(function (result) {
                    _this.activePromise = null;
                    c(result);
                }, function (err) {
                    _this.activePromise = null;
                    e(err);
                }, p);
            }, function () {
                _this.activePromise.cancel();
            });
        };
        return Throttler;
    }());
    exports.Throttler = Throttler;
    // TODO@Joao: can the previous throttler be replaced with this?
    var SimpleThrottler = (function () {
        function SimpleThrottler() {
            this.current = winjs_base_1.TPromise.as(null);
        }
        SimpleThrottler.prototype.queue = function (promiseTask) {
            return this.current = this.current.then(function () { return promiseTask(); });
        };
        return SimpleThrottler;
    }());
    exports.SimpleThrottler = SimpleThrottler;
    /**
     * A helper to delay execution of a task that is being requested often.
     *
     * Following the throttler, now imagine the mail man wants to optimize the number of
     * trips proactively. The trip itself can be long, so the he decides not to make the trip
     * as soon as a letter is submitted. Instead he waits a while, in case more
     * letters are submitted. After said waiting period, if no letters were submitted, he
     * decides to make the trip. Imagine that N more letters were submitted after the first
     * one, all within a short period of time between each other. Even though N+1
     * submissions occurred, only 1 delivery was made.
     *
     * The delayer offers this behavior via the trigger() method, into which both the task
     * to be executed and the waiting period (delay) must be passed in as arguments. Following
     * the example:
     *
     * 		const delayer = new Delayer(WAITING_PERIOD);
     * 		const letters = [];
     *
     * 		function letterReceived(l) {
     * 			letters.push(l);
     * 			delayer.trigger(() => { return makeTheTrip(); });
     * 		}
     */
    var Delayer = (function () {
        function Delayer(defaultDelay) {
            this.defaultDelay = defaultDelay;
            this.timeout = null;
            this.completionPromise = null;
            this.onSuccess = null;
            this.task = null;
        }
        Delayer.prototype.trigger = function (task, delay) {
            var _this = this;
            if (delay === void 0) { delay = this.defaultDelay; }
            this.task = task;
            this.cancelTimeout();
            if (!this.completionPromise) {
                this.completionPromise = new winjs_base_1.Promise(function (c) {
                    _this.onSuccess = c;
                }, function () {
                    // no-op
                }).then(function () {
                    _this.completionPromise = null;
                    _this.onSuccess = null;
                    var task = _this.task;
                    _this.task = null;
                    return task();
                });
            }
            this.timeout = setTimeout(function () {
                _this.timeout = null;
                _this.onSuccess(null);
            }, delay);
            return this.completionPromise;
        };
        Delayer.prototype.isTriggered = function () {
            return this.timeout !== null;
        };
        Delayer.prototype.cancel = function () {
            this.cancelTimeout();
            if (this.completionPromise) {
                this.completionPromise.cancel();
                this.completionPromise = null;
            }
        };
        Delayer.prototype.cancelTimeout = function () {
            if (this.timeout !== null) {
                clearTimeout(this.timeout);
                this.timeout = null;
            }
        };
        return Delayer;
    }());
    exports.Delayer = Delayer;
    /**
     * A helper to delay execution of a task that is being requested often, while
     * preventing accumulation of consecutive executions, while the task runs.
     *
     * Simply combine the two mail man strategies from the Throttler and Delayer
     * helpers, for an analogy.
     */
    var ThrottledDelayer = (function (_super) {
        __extends(ThrottledDelayer, _super);
        function ThrottledDelayer(defaultDelay) {
            var _this = _super.call(this, defaultDelay) || this;
            _this.throttler = new Throttler();
            return _this;
        }
        ThrottledDelayer.prototype.trigger = function (promiseFactory, delay) {
            var _this = this;
            return _super.prototype.trigger.call(this, function () { return _this.throttler.queue(promiseFactory); }, delay);
        };
        return ThrottledDelayer;
    }(Delayer));
    exports.ThrottledDelayer = ThrottledDelayer;
    /**
     * Similar to the ThrottledDelayer, except it also guarantees that the promise
     * factory doesn't get called more often than every `minimumPeriod` milliseconds.
     */
    var PeriodThrottledDelayer = (function (_super) {
        __extends(PeriodThrottledDelayer, _super);
        function PeriodThrottledDelayer(defaultDelay, minimumPeriod) {
            if (minimumPeriod === void 0) { minimumPeriod = 0; }
            var _this = _super.call(this, defaultDelay) || this;
            _this.minimumPeriod = minimumPeriod;
            _this.periodThrottler = new Throttler();
            return _this;
        }
        PeriodThrottledDelayer.prototype.trigger = function (promiseFactory, delay) {
            var _this = this;
            return _super.prototype.trigger.call(this, function () {
                return _this.periodThrottler.queue(function () {
                    return winjs_base_1.Promise.join([
                        winjs_base_1.TPromise.timeout(_this.minimumPeriod),
                        promiseFactory()
                    ]).then(function (r) { return r[1]; });
                });
            }, delay);
        };
        return PeriodThrottledDelayer;
    }(ThrottledDelayer));
    exports.PeriodThrottledDelayer = PeriodThrottledDelayer;
    var PromiseSource = (function () {
        function PromiseSource() {
            var _this = this;
            this._value = new winjs_base_1.TPromise(function (c, e) {
                _this._completeCallback = c;
                _this._errorCallback = e;
            });
        }
        Object.defineProperty(PromiseSource.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        PromiseSource.prototype.complete = function (value) {
            this._completeCallback(value);
        };
        PromiseSource.prototype.error = function (err) {
            this._errorCallback(err);
        };
        return PromiseSource;
    }());
    exports.PromiseSource = PromiseSource;
    var ShallowCancelThenPromise = (function (_super) {
        __extends(ShallowCancelThenPromise, _super);
        function ShallowCancelThenPromise(outer) {
            var _this = this;
            var completeCallback, errorCallback, progressCallback;
            _this = _super.call(this, function (c, e, p) {
                completeCallback = c;
                errorCallback = e;
                progressCallback = p;
            }, function () {
                // cancel this promise but not the
                // outer promise
                errorCallback(errors.canceled());
            }) || this;
            outer.then(completeCallback, errorCallback, progressCallback);
            return _this;
        }
        return ShallowCancelThenPromise;
    }(winjs_base_1.TPromise));
    exports.ShallowCancelThenPromise = ShallowCancelThenPromise;
    /**
     * Returns a new promise that joins the provided promise. Upon completion of
     * the provided promise the provided function will always be called. This
     * method is comparable to a try-finally code block.
     * @param promise a promise
     * @param f a function that will be call in the success and error case.
     */
    function always(promise, f) {
        return new winjs_base_1.TPromise(function (c, e, p) {
            promise.done(function (result) {
                try {
                    f(result);
                }
                catch (e1) {
                    errors.onUnexpectedError(e1);
                }
                c(result);
            }, function (err) {
                try {
                    f(err);
                }
                catch (e1) {
                    errors.onUnexpectedError(e1);
                }
                e(err);
            }, function (progress) {
                p(progress);
            });
        }, function () {
            promise.cancel();
        });
    }
    exports.always = always;
    /**
     * Runs the provided list of promise factories in sequential order. The returned
     * promise will complete to an array of results from each promise.
     */
    function sequence(promiseFactories) {
        var results = [];
        // reverse since we start with last element using pop()
        promiseFactories = promiseFactories.reverse();
        function next() {
            if (promiseFactories.length) {
                return promiseFactories.pop()();
            }
            return null;
        }
        function thenHandler(result) {
            if (result !== undefined && result !== null) {
                results.push(result);
            }
            var n = next();
            if (n) {
                return n.then(thenHandler);
            }
            return winjs_base_1.TPromise.as(results);
        }
        return winjs_base_1.TPromise.as(null).then(thenHandler);
    }
    exports.sequence = sequence;
    function first(promiseFactories, shouldStop) {
        if (shouldStop === void 0) { shouldStop = function (t) { return !!t; }; }
        promiseFactories = promiseFactories.reverse().slice();
        var loop = function () {
            if (promiseFactories.length === 0) {
                return winjs_base_1.TPromise.as(null);
            }
            var factory = promiseFactories.pop();
            var promise = factory();
            return promise.then(function (result) {
                if (shouldStop(result)) {
                    return winjs_base_1.TPromise.as(result);
                }
                return loop();
            });
        };
        return loop();
    }
    exports.first = first;
    /**
     * A helper to queue N promises and run them all with a max degree of parallelism. The helper
     * ensures that at any time no more than M promises are running at the same time.
     */
    var Limiter = (function () {
        function Limiter(maxDegreeOfParalellism) {
            this.maxDegreeOfParalellism = maxDegreeOfParalellism;
            this.outstandingPromises = [];
            this.runningPromises = 0;
            this._onFinished = new event_1.Emitter();
        }
        Object.defineProperty(Limiter.prototype, "onFinished", {
            get: function () {
                return this._onFinished.event;
            },
            enumerable: true,
            configurable: true
        });
        Limiter.prototype.queue = function (promiseFactory) {
            var _this = this;
            return new winjs_base_1.TPromise(function (c, e, p) {
                _this.outstandingPromises.push({
                    factory: promiseFactory,
                    c: c,
                    e: e,
                    p: p
                });
                _this.consume();
            });
        };
        Limiter.prototype.consume = function () {
            var _this = this;
            while (this.outstandingPromises.length && this.runningPromises < this.maxDegreeOfParalellism) {
                var iLimitedTask = this.outstandingPromises.shift();
                this.runningPromises++;
                var promise = iLimitedTask.factory();
                promise.done(iLimitedTask.c, iLimitedTask.e, iLimitedTask.p);
                promise.done(function () { return _this.consumed(); }, function () { return _this.consumed(); });
            }
        };
        Limiter.prototype.consumed = function () {
            this.runningPromises--;
            if (this.outstandingPromises.length > 0) {
                this.consume();
            }
            else {
                this._onFinished.fire();
            }
        };
        Limiter.prototype.dispose = function () {
            this._onFinished.dispose();
        };
        return Limiter;
    }());
    exports.Limiter = Limiter;
    /**
     * A queue is handles one promise at a time and guarantees that at any time only one promise is executing.
     */
    var Queue = (function (_super) {
        __extends(Queue, _super);
        function Queue() {
            return _super.call(this, 1) || this;
        }
        return Queue;
    }(Limiter));
    exports.Queue = Queue;
    function setDisposableTimeout(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var handle = setTimeout.apply(void 0, [handler, timeout].concat(args));
        return { dispose: function () { clearTimeout(handle); } };
    }
    exports.setDisposableTimeout = setDisposableTimeout;
    var TimeoutTimer = (function (_super) {
        __extends(TimeoutTimer, _super);
        function TimeoutTimer() {
            var _this = _super.call(this) || this;
            _this._token = -1;
            return _this;
        }
        TimeoutTimer.prototype.dispose = function () {
            this.cancel();
            _super.prototype.dispose.call(this);
        };
        TimeoutTimer.prototype.cancel = function () {
            if (this._token !== -1) {
                platform.clearTimeout(this._token);
                this._token = -1;
            }
        };
        TimeoutTimer.prototype.cancelAndSet = function (runner, timeout) {
            var _this = this;
            this.cancel();
            this._token = platform.setTimeout(function () {
                _this._token = -1;
                runner();
            }, timeout);
        };
        TimeoutTimer.prototype.setIfNotSet = function (runner, timeout) {
            var _this = this;
            if (this._token !== -1) {
                // timer is already set
                return;
            }
            this._token = platform.setTimeout(function () {
                _this._token = -1;
                runner();
            }, timeout);
        };
        return TimeoutTimer;
    }(lifecycle_1.Disposable));
    exports.TimeoutTimer = TimeoutTimer;
    var IntervalTimer = (function (_super) {
        __extends(IntervalTimer, _super);
        function IntervalTimer() {
            var _this = _super.call(this) || this;
            _this._token = -1;
            return _this;
        }
        IntervalTimer.prototype.dispose = function () {
            this.cancel();
            _super.prototype.dispose.call(this);
        };
        IntervalTimer.prototype.cancel = function () {
            if (this._token !== -1) {
                platform.clearInterval(this._token);
                this._token = -1;
            }
        };
        IntervalTimer.prototype.cancelAndSet = function (runner, interval) {
            this.cancel();
            this._token = platform.setInterval(function () {
                runner();
            }, interval);
        };
        return IntervalTimer;
    }(lifecycle_1.Disposable));
    exports.IntervalTimer = IntervalTimer;
    var RunOnceScheduler = (function () {
        function RunOnceScheduler(runner, timeout) {
            this.timeoutToken = -1;
            this.runner = runner;
            this.timeout = timeout;
            this.timeoutHandler = this.onTimeout.bind(this);
        }
        /**
         * Dispose RunOnceScheduler
         */
        RunOnceScheduler.prototype.dispose = function () {
            this.cancel();
            this.runner = null;
        };
        /**
         * Cancel current scheduled runner (if any).
         */
        RunOnceScheduler.prototype.cancel = function () {
            if (this.isScheduled()) {
                platform.clearTimeout(this.timeoutToken);
                this.timeoutToken = -1;
            }
        };
        /**
         * Replace runner. If there is a runner already scheduled, the new runner will be called.
         */
        RunOnceScheduler.prototype.setRunner = function (runner) {
            this.runner = runner;
        };
        /**
         * Cancel previous runner (if any) & schedule a new runner.
         */
        RunOnceScheduler.prototype.schedule = function (delay) {
            if (delay === void 0) { delay = this.timeout; }
            this.cancel();
            this.timeoutToken = platform.setTimeout(this.timeoutHandler, delay);
        };
        /**
         * Returns true if scheduled.
         */
        RunOnceScheduler.prototype.isScheduled = function () {
            return this.timeoutToken !== -1;
        };
        RunOnceScheduler.prototype.onTimeout = function () {
            this.timeoutToken = -1;
            if (this.runner) {
                this.runner();
            }
        };
        return RunOnceScheduler;
    }());
    exports.RunOnceScheduler = RunOnceScheduler;
    function nfcall(fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return new winjs_base_1.Promise(function (c, e) { return fn.apply(void 0, args.concat([function (err, result) { return err ? e(err) : c(result); }])); });
    }
    exports.nfcall = nfcall;
    function ninvoke(thisArg, fn) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return new winjs_base_1.Promise(function (c, e) { return fn.call.apply(fn, [thisArg].concat(args, [function (err, result) { return err ? e(err) : c(result); }])); });
    }
    exports.ninvoke = ninvoke;
});

define(__m[96/*vs/base/common/glob*/], __M([1/*require*/,0/*exports*/,20/*vs/base/common/arrays*/,11/*vs/base/common/strings*/,18/*vs/base/common/paths*/,48/*vs/base/common/map*/,2/*vs/base/common/winjs.base*/]), function (require, exports, arrays, strings, paths, map_1, winjs_base_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var PATH_REGEX = '[/\\\\]'; // any slash or backslash
    var NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash
    var ALL_FORWARD_SLASHES = /\//g;
    function starsToRegExp(starCount) {
        switch (starCount) {
            case 0:
                return '';
            case 1:
                return NO_PATH_REGEX + "*?"; // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
            default:
                // Matches:  (Path Sep OR Path Val followed by Path Sep OR Path Sep followed by Path Val) 0-many times
                // Group is non capturing because we don't need to capture at all (?:...)
                // Overall we use non-greedy matching because it could be that we match too much
                return "(?:" + PATH_REGEX + "|" + NO_PATH_REGEX + "+" + PATH_REGEX + "|" + PATH_REGEX + NO_PATH_REGEX + "+)*?";
        }
    }
    function splitGlobAware(pattern, splitChar) {
        if (!pattern) {
            return [];
        }
        var segments = [];
        var inBraces = false;
        var inBrackets = false;
        var char;
        var curVal = '';
        for (var i = 0; i < pattern.length; i++) {
            char = pattern[i];
            switch (char) {
                case splitChar:
                    if (!inBraces && !inBrackets) {
                        segments.push(curVal);
                        curVal = '';
                        continue;
                    }
                    break;
                case '{':
                    inBraces = true;
                    break;
                case '}':
                    inBraces = false;
                    break;
                case '[':
                    inBrackets = true;
                    break;
                case ']':
                    inBrackets = false;
                    break;
            }
            curVal += char;
        }
        // Tail
        if (curVal) {
            segments.push(curVal);
        }
        return segments;
    }
    exports.splitGlobAware = splitGlobAware;
    function parseRegExp(pattern) {
        if (!pattern) {
            return '';
        }
        var regEx = '';
        // Split up into segments for each slash found
        var segments = splitGlobAware(pattern, '/');
        // Special case where we only have globstars
        if (segments.every(function (s) { return s === '**'; })) {
            regEx = '.*';
        }
        else {
            var previousSegmentWasGlobStar_1 = false;
            segments.forEach(function (segment, index) {
                // Globstar is special
                if (segment === '**') {
                    // if we have more than one globstar after another, just ignore it
                    if (!previousSegmentWasGlobStar_1) {
                        regEx += starsToRegExp(2);
                        previousSegmentWasGlobStar_1 = true;
                    }
                    return;
                }
                // States
                var inBraces = false;
                var braceVal = '';
                var inBrackets = false;
                var bracketVal = '';
                var char;
                for (var i = 0; i < segment.length; i++) {
                    char = segment[i];
                    // Support brace expansion
                    if (char !== '}' && inBraces) {
                        braceVal += char;
                        continue;
                    }
                    // Support brackets
                    if (char !== ']' && inBrackets) {
                        var res = void 0;
                        switch (char) {
                            case '-':
                                res = char;
                                break;
                            case '^':
                                res = char;
                                break;
                            default:
                                res = strings.escapeRegExpCharacters(char);
                        }
                        bracketVal += res;
                        continue;
                    }
                    switch (char) {
                        case '{':
                            inBraces = true;
                            continue;
                        case '[':
                            inBrackets = true;
                            continue;
                        case '}':
                            var choices = splitGlobAware(braceVal, ',');
                            // Converts {foo,bar} => [foo|bar]
                            var braceRegExp = "(?:" + choices.map(function (c) { return parseRegExp(c); }).join('|') + ")";
                            regEx += braceRegExp;
                            inBraces = false;
                            braceVal = '';
                            break;
                        case ']':
                            regEx += ('[' + bracketVal + ']');
                            inBrackets = false;
                            bracketVal = '';
                            break;
                        case '?':
                            regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)
                            continue;
                        case '*':
                            regEx += starsToRegExp(1);
                            continue;
                        default:
                            regEx += strings.escapeRegExpCharacters(char);
                    }
                }
                // Tail: Add the slash we had split on if there is more to come and the next one is not a globstar
                if (index < segments.length - 1 && segments[index + 1] !== '**') {
                    regEx += PATH_REGEX;
                }
                // reset state
                previousSegmentWasGlobStar_1 = false;
            });
        }
        return regEx;
    }
    // regexes to check for trival glob patterns that just check for String#endsWith
    var T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something
    var T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something
    var T3 = /^{\*\*\/[\*\.]?[\w\.-]+\/?(,\*\*\/[\*\.]?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}
    var T3_2 = /^{\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?(,\*\*\/[\*\.]?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**
    var T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else
    var T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else
    var CACHE = new map_1.BoundedLinkedMap(10000); // bounded to 10000 elements
    var FALSE = function () {
        return false;
    };
    var NULL = function () {
        return null;
    };
    function parsePattern(pattern, options) {
        if (!pattern) {
            return NULL;
        }
        // Whitespace trimming
        pattern = pattern.trim();
        // Check cache
        var patternKey = pattern + "_" + !!options.trimForExclusions;
        var parsedPattern = CACHE.get(patternKey);
        if (parsedPattern) {
            return parsedPattern;
        }
        // Check for Trivias
        var match;
        if (T1.test(pattern)) {
            var base_1 = pattern.substr(4); // '**/*'.length === 4
            parsedPattern = function (path, basename) {
                return path && strings.endsWith(path, base_1) ? pattern : null;
            };
        }
        else if (match = T2.exec(trimForExclusions(pattern, options))) {
            parsedPattern = trivia2(match[1], pattern);
        }
        else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) {
            parsedPattern = trivia3(pattern, options);
        }
        else if (match = T4.exec(trimForExclusions(pattern, options))) {
            parsedPattern = trivia4and5(match[1].substr(1), pattern, true);
        }
        else if (match = T5.exec(trimForExclusions(pattern, options))) {
            parsedPattern = trivia4and5(match[1], pattern, false);
        }
        else {
            parsedPattern = toRegExp(pattern);
        }
        // Cache
        CACHE.set(patternKey, parsedPattern);
        return parsedPattern;
    }
    function trimForExclusions(pattern, options) {
        return options.trimForExclusions && strings.endsWith(pattern, '/**') ? pattern.substr(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
    }
    // common pattern: **/some.txt just need basename check
    function trivia2(base, originalPattern) {
        var slashBase = "/" + base;
        var backslashBase = "\\" + base;
        var parsedPattern = function (path, basename) {
            if (!path) {
                return null;
            }
            if (basename) {
                return basename === base ? originalPattern : null;
            }
            return path === base || strings.endsWith(path, slashBase) || strings.endsWith(path, backslashBase) ? originalPattern : null;
        };
        var basenames = [base];
        parsedPattern.basenames = basenames;
        parsedPattern.patterns = [originalPattern];
        parsedPattern.allBasenames = basenames;
        return parsedPattern;
    }
    // repetition of common patterns (see above) {**/*.txt,**/*.png}
    function trivia3(pattern, options) {
        var parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1).split(',')
            .map(function (pattern) { return parsePattern(pattern, options); })
            .filter(function (pattern) { return pattern !== NULL; }), pattern);
        var n = parsedPatterns.length;
        if (!n) {
            return NULL;
        }
        if (n === 1) {
            return parsedPatterns[0];
        }
        var parsedPattern = function (path, basename) {
            for (var i = 0, n_1 = parsedPatterns.length; i < n_1; i++) {
                if (parsedPatterns[i](path, basename)) {
                    return pattern;
                }
            }
            return null;
        };
        var withBasenames = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
        if (withBasenames) {
            parsedPattern.allBasenames = withBasenames.allBasenames;
        }
        var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
        if (allPaths.length) {
            parsedPattern.allPaths = allPaths;
        }
        return parsedPattern;
    }
    // common patterns: **/something/else just need endsWith check, something/else just needs and equals check
    function trivia4and5(path, pattern, matchPathEnds) {
        var nativePath = paths.nativeSep !== paths.sep ? path.replace(ALL_FORWARD_SLASHES, paths.nativeSep) : path;
        var nativePathEnd = paths.nativeSep + nativePath;
        var parsedPattern = matchPathEnds ? function (path, basename) {
            return path && (path === nativePath || strings.endsWith(path, nativePathEnd)) ? pattern : null;
        } : function (path, basename) {
            return path && path === nativePath ? pattern : null;
        };
        parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + path];
        return parsedPattern;
    }
    function toRegExp(pattern) {
        try {
            var regExp_1 = new RegExp("^" + parseRegExp(pattern) + "$");
            return function (path, basename) {
                regExp_1.lastIndex = 0; // reset RegExp to its initial state to reuse it!
                return path && regExp_1.test(path) ? pattern : null;
            };
        }
        catch (error) {
            return NULL;
        }
    }
    function match(arg1, path, siblingsFn) {
        if (!arg1 || !path) {
            return false;
        }
        return parse(arg1)(path, undefined, siblingsFn);
    }
    exports.match = match;
    function parse(arg1, options) {
        if (options === void 0) { options = {}; }
        if (!arg1) {
            return FALSE;
        }
        // Glob with String
        if (typeof arg1 === 'string') {
            var parsedPattern_1 = parsePattern(arg1, options);
            if (parsedPattern_1 === NULL) {
                return FALSE;
            }
            var resultPattern = function (path, basename) {
                return !!parsedPattern_1(path, basename);
            };
            if (parsedPattern_1.allBasenames) {
                resultPattern.allBasenames = parsedPattern_1.allBasenames;
            }
            if (parsedPattern_1.allPaths) {
                resultPattern.allPaths = parsedPattern_1.allPaths;
            }
            return resultPattern;
        }
        // Glob with Expression
        return parsedExpression(arg1, options);
    }
    exports.parse = parse;
    /**
     * Same as `parse`, but the ParsedExpression is guaranteed to return a Promise
     */
    function parseToAsync(expression, options) {
        var parsedExpression = parse(expression, options);
        return function (path, basename, siblingsFn) {
            return winjs_base_1.TPromise.as(parsedExpression(path, basename, siblingsFn));
        };
    }
    exports.parseToAsync = parseToAsync;
    function getBasenameTerms(patternOrExpression) {
        return patternOrExpression.allBasenames || [];
    }
    exports.getBasenameTerms = getBasenameTerms;
    function getPathTerms(patternOrExpression) {
        return patternOrExpression.allPaths || [];
    }
    exports.getPathTerms = getPathTerms;
    function parsedExpression(expression, options) {
        var parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression)
            .map(function (pattern) { return parseExpressionPattern(pattern, expression[pattern], options); })
            .filter(function (pattern) { return pattern !== NULL; }));
        var n = parsedPatterns.length;
        if (!n) {
            return NULL;
        }
        if (!parsedPatterns.some(function (parsedPattern) { return parsedPattern.requiresSiblings; })) {
            if (n === 1) {
                return parsedPatterns[0];
            }
            var resultExpression_1 = function (path, basename, siblingsFn) {
                for (var i = 0, n_2 = parsedPatterns.length; i < n_2; i++) {
                    // Pattern matches path
                    var result = parsedPatterns[i](path, basename);
                    if (result) {
                        return result;
                    }
                }
                return null;
            };
            var withBasenames_1 = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
            if (withBasenames_1) {
                resultExpression_1.allBasenames = withBasenames_1.allBasenames;
            }
            var allPaths_1 = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
            if (allPaths_1.length) {
                resultExpression_1.allPaths = allPaths_1;
            }
            return resultExpression_1;
        }
        var resultExpression = function (path, basename, siblingsFn) {
            var siblingsPattern;
            var siblingsResolved = !siblingsFn;
            function siblingsToSiblingsPattern(siblings) {
                if (siblings && siblings.length) {
                    if (!basename) {
                        basename = paths.basename(path);
                    }
                    var name_1 = basename.substr(0, basename.length - paths.extname(path).length);
                    return { siblings: siblings, name: name_1 };
                }
                return undefined;
            }
            function siblingsPatternFn() {
                // Resolve siblings only once
                if (!siblingsResolved) {
                    siblingsResolved = true;
                    var siblings = siblingsFn();
                    siblingsPattern = winjs_base_1.TPromise.is(siblings) ?
                        siblings.then(siblingsToSiblingsPattern) :
                        siblingsToSiblingsPattern(siblings);
                }
                return siblingsPattern;
            }
            for (var i = 0, n_3 = parsedPatterns.length; i < n_3; i++) {
                // Pattern matches path
                var result = parsedPatterns[i](path, basename, siblingsPatternFn);
                if (result) {
                    return result;
                }
            }
            return null;
        };
        var withBasenames = arrays.first(parsedPatterns, function (pattern) { return !!pattern.allBasenames; });
        if (withBasenames) {
            resultExpression.allBasenames = withBasenames.allBasenames;
        }
        var allPaths = parsedPatterns.reduce(function (all, current) { return current.allPaths ? all.concat(current.allPaths) : all; }, []);
        if (allPaths.length) {
            resultExpression.allPaths = allPaths;
        }
        return resultExpression;
    }
    function parseExpressionPattern(pattern, value, options) {
        if (value === false) {
            return NULL; // pattern is disabled
        }
        var parsedPattern = parsePattern(pattern, options);
        if (parsedPattern === NULL) {
            return NULL;
        }
        // Expression Pattern is <boolean>
        if (typeof value === 'boolean') {
            return parsedPattern;
        }
        // Expression Pattern is <SiblingClause>
        if (value) {
            var when_1 = value.when;
            if (typeof when_1 === 'string') {
                var siblingsPatternToMatchingPattern_1 = function (siblingsPattern) {
                    var clausePattern = when_1.replace('$(basename)', siblingsPattern.name);
                    if (siblingsPattern.siblings.indexOf(clausePattern) !== -1) {
                        return pattern;
                    }
                    else {
                        return null; // pattern does not match in the end because the when clause is not satisfied
                    }
                };
                var result = function (path, basename, siblingsPatternFn) {
                    if (!parsedPattern(path, basename)) {
                        return null;
                    }
                    var siblingsPattern = siblingsPatternFn();
                    if (!siblingsPattern) {
                        return null; // pattern is malformed or we don't have siblings
                    }
                    return winjs_base_1.TPromise.is(siblingsPattern) ?
                        siblingsPattern.then(siblingsPatternToMatchingPattern_1) :
                        siblingsPatternToMatchingPattern_1(siblingsPattern);
                };
                result.requiresSiblings = true;
                return result;
            }
        }
        // Expression is Anything
        return parsedPattern;
    }
    function aggregateBasenameMatches(parsedPatterns, result) {
        var basenamePatterns = parsedPatterns.filter(function (parsedPattern) { return !!parsedPattern.basenames; });
        if (basenamePatterns.length < 2) {
            return parsedPatterns;
        }
        var basenames = basenamePatterns.reduce(function (all, current) { return all.concat(current.basenames); }, []);
        var patterns;
        if (result) {
            patterns = [];
            for (var i = 0, n = basenames.length; i < n; i++) {
                patterns.push(result);
            }
        }
        else {
            patterns = basenamePatterns.reduce(function (all, current) { return all.concat(current.patterns); }, []);
        }
        var aggregate = function (path, basename) {
            if (!path) {
                return null;
            }
            if (!basename) {
                var i = void 0;
                for (i = path.length; i > 0; i--) {
                    var ch = path.charCodeAt(i - 1);
                    if (ch === 47 /* Slash */ || ch === 92 /* Backslash */) {
                        break;
                    }
                }
                basename = path.substr(i);
            }
            var index = basenames.indexOf(basename);
            return index !== -1 ? patterns[index] : null;
        };
        aggregate.basenames = basenames;
        aggregate.patterns = patterns;
        aggregate.allBasenames = basenames;
        var aggregatedPatterns = parsedPatterns.filter(function (parsedPattern) { return !parsedPattern.basenames; });
        aggregatedPatterns.push(aggregate);
        return aggregatedPatterns;
    }
});

define(__m[97/*vs/base/common/mime*/], __M([1/*require*/,0/*exports*/,18/*vs/base/common/paths*/,6/*vs/base/common/types*/,11/*vs/base/common/strings*/,96/*vs/base/common/glob*/]), function (require, exports, paths, types, strings, glob_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MIME_TEXT = 'text/plain';
    exports.MIME_BINARY = 'application/octet-stream';
    exports.MIME_UNKNOWN = 'application/unknown';
    var registeredAssociations = [];
    var nonUserRegisteredAssociations = [];
    var userRegisteredAssociations = [];
    /**
     * Associate a text mime to the registry.
     */
    function registerTextMime(association) {
        // Register
        var associationItem = toTextMimeAssociationItem(association);
        registeredAssociations.push(associationItem);
        if (!associationItem.userConfigured) {
            nonUserRegisteredAssociations.push(associationItem);
        }
        else {
            userRegisteredAssociations.push(associationItem);
        }
        // Check for conflicts unless this is a user configured association
        if (!associationItem.userConfigured) {
            registeredAssociations.forEach(function (a) {
                if (a.mime === associationItem.mime || a.userConfigured) {
                    return; // same mime or userConfigured is ok
                }
                if (associationItem.extension && a.extension === associationItem.extension) {
                    console.warn("Overwriting extension <<" + associationItem.extension + ">> to now point to mime <<" + associationItem.mime + ">>");
                }
                if (associationItem.filename && a.filename === associationItem.filename) {
                    console.warn("Overwriting filename <<" + associationItem.filename + ">> to now point to mime <<" + associationItem.mime + ">>");
                }
                if (associationItem.filepattern && a.filepattern === associationItem.filepattern) {
                    console.warn("Overwriting filepattern <<" + associationItem.filepattern + ">> to now point to mime <<" + associationItem.mime + ">>");
                }
                if (associationItem.firstline && a.firstline === associationItem.firstline) {
                    console.warn("Overwriting firstline <<" + associationItem.firstline + ">> to now point to mime <<" + associationItem.mime + ">>");
                }
            });
        }
    }
    exports.registerTextMime = registerTextMime;
    function toTextMimeAssociationItem(association) {
        return {
            id: association.id,
            mime: association.mime,
            filename: association.filename,
            extension: association.extension,
            filepattern: association.filepattern,
            firstline: association.firstline,
            userConfigured: association.userConfigured,
            filenameLowercase: association.filename ? association.filename.toLowerCase() : void 0,
            extensionLowercase: association.extension ? association.extension.toLowerCase() : void 0,
            filepatternLowercase: association.filepattern ? association.filepattern.toLowerCase() : void 0,
            filepatternOnPath: association.filepattern ? association.filepattern.indexOf(paths.sep) >= 0 : false
        };
    }
    /**
     * Clear text mimes from the registry.
     */
    function clearTextMimes(onlyUserConfigured) {
        if (!onlyUserConfigured) {
            registeredAssociations = [];
            nonUserRegisteredAssociations = [];
            userRegisteredAssociations = [];
        }
        else {
            registeredAssociations = registeredAssociations.filter(function (a) { return !a.userConfigured; });
            userRegisteredAssociations = [];
        }
    }
    exports.clearTextMimes = clearTextMimes;
    /**
     * Given a file, return the best matching mime type for it
     */
    function guessMimeTypes(path, firstLine) {
        if (!path) {
            return [exports.MIME_UNKNOWN];
        }
        path = path.toLowerCase();
        var filename = paths.basename(path);
        // 1.) User configured mappings have highest priority
        var configuredMime = guessMimeTypeByPath(path, filename, userRegisteredAssociations);
        if (configuredMime) {
            return [configuredMime, exports.MIME_TEXT];
        }
        // 2.) Registered mappings have middle priority
        var registeredMime = guessMimeTypeByPath(path, filename, nonUserRegisteredAssociations);
        if (registeredMime) {
            return [registeredMime, exports.MIME_TEXT];
        }
        // 3.) Firstline has lowest priority
        if (firstLine) {
            var firstlineMime = guessMimeTypeByFirstline(firstLine);
            if (firstlineMime) {
                return [firstlineMime, exports.MIME_TEXT];
            }
        }
        return [exports.MIME_UNKNOWN];
    }
    exports.guessMimeTypes = guessMimeTypes;
    function guessMimeTypeByPath(path, filename, associations) {
        var filenameMatch;
        var patternMatch;
        var extensionMatch;
        // We want to prioritize associations based on the order they are registered so that the last registered
        // association wins over all other. This is for https://github.com/Microsoft/vscode/issues/20074
        for (var i = associations.length - 1; i >= 0; i--) {
            var association = associations[i];
            // First exact name match
            if (filename === association.filenameLowercase) {
                filenameMatch = association;
                break; // take it!
            }
            // Longest pattern match
            if (association.filepattern) {
                if (!patternMatch || association.filepattern.length > patternMatch.filepattern.length) {
                    var target = association.filepatternOnPath ? path : filename; // match on full path if pattern contains path separator
                    if (glob_1.match(association.filepatternLowercase, target)) {
                        patternMatch = association;
                    }
                }
            }
            // Longest extension match
            if (association.extension) {
                if (!extensionMatch || association.extension.length > extensionMatch.extension.length) {
                    if (strings.endsWith(filename, association.extensionLowercase)) {
                        extensionMatch = association;
                    }
                }
            }
        }
        // 1.) Exact name match has second highest prio
        if (filenameMatch) {
            return filenameMatch.mime;
        }
        // 2.) Match on pattern
        if (patternMatch) {
            return patternMatch.mime;
        }
        // 3.) Match on extension comes next
        if (extensionMatch) {
            return extensionMatch.mime;
        }
        return null;
    }
    function guessMimeTypeByFirstline(firstLine) {
        if (strings.startsWithUTF8BOM(firstLine)) {
            firstLine = firstLine.substr(1);
        }
        if (firstLine.length > 0) {
            for (var i = 0; i < registeredAssociations.length; ++i) {
                var association = registeredAssociations[i];
                if (!association.firstline) {
                    continue;
                }
                var matches = firstLine.match(association.firstline);
                if (matches && matches.length > 0) {
                    return association.mime;
                }
            }
        }
        return null;
    }
    function isBinaryMime(mimes) {
        if (!mimes) {
            return false;
        }
        var mimeVals;
        if (types.isArray(mimes)) {
            mimeVals = mimes;
        }
        else {
            mimeVals = mimes.split(',').map(function (mime) { return mime.trim(); });
        }
        return mimeVals.indexOf(exports.MIME_BINARY) >= 0;
    }
    exports.isBinaryMime = isBinaryMime;
    function isUnspecific(mime) {
        if (!mime) {
            return true;
        }
        if (typeof mime === 'string') {
            return mime === exports.MIME_BINARY || mime === exports.MIME_TEXT || mime === exports.MIME_UNKNOWN;
        }
        return mime.length === 1 && isUnspecific(mime[0]);
    }
    exports.isUnspecific = isUnspecific;
    function suggestFilename(langId, prefix) {
        for (var i = 0; i < registeredAssociations.length; i++) {
            var association = registeredAssociations[i];
            if (association.userConfigured) {
                continue; // only support registered ones
            }
            if (association.id === langId && association.extension) {
                return prefix + association.extension;
            }
        }
        return prefix; // without any known extension, just return the prefix
    }
    exports.suggestFilename = suggestFilename;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[102/*vs/base/node/crypto*/], __M([1/*require*/,0/*exports*/,28/*fs*/,49/*crypto*/,2/*vs/base/common/winjs.base*/,47/*vs/base/common/functional*/]), function (require, exports, fs, crypto, winjs_base_1, functional_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function checksum(path, sha1hash) {
        var promise = new winjs_base_1.TPromise(function (c, e) {
            var input = fs.createReadStream(path);
            var hash = crypto.createHash('sha1');
            var hashStream = hash;
            input.pipe(hashStream);
            var done = functional_1.once(function (err, result) {
                input.removeAllListeners();
                hashStream.removeAllListeners();
                if (err) {
                    e(err);
                }
                else {
                    c(result);
                }
            });
            input.once('error', done);
            input.once('end', done);
            hashStream.once('error', done);
            hashStream.once('data', function (data) { return done(null, data.toString('hex')); });
        });
        return promise.then(function (hash) {
            if (hash !== sha1hash) {
                return winjs_base_1.TPromise.wrapError(new Error('Hash mismatch'));
            }
            return winjs_base_1.TPromise.as(null);
        });
    }
    exports.checksum = checksum;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[29/*vs/base/node/event*/], __M([1/*require*/,0/*exports*/,4/*vs/base/common/event*/]), function (require, exports, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function fromEventEmitter(emitter, eventName, map) {
        if (map === void 0) { map = function (id) { return id; }; }
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return result.fire(map.apply(void 0, args));
        };
        var onFirstListenerAdd = function () { return emitter.on(eventName, fn); };
        var onLastListenerRemove = function () { return emitter.removeListener(eventName, fn); };
        var result = new event_1.Emitter({ onFirstListenerAdd: onFirstListenerAdd, onLastListenerRemove: onLastListenerRemove });
        return result.event;
    }
    exports.fromEventEmitter = fromEventEmitter;
    ;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[116/*vs/base/node/flow*/], __M([1/*require*/,0/*exports*/,121/*assert*/]), function (require, exports, assert) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Executes the given function (fn) over the given array of items (list) in parallel and returns the resulting errors and results as
     * array to the callback (callback). The resulting errors and results are evaluated by calling the provided callback function.
     */
    function parallel(list, fn, callback) {
        var results = new Array(list.length);
        var errors = new Array(list.length);
        var didErrorOccur = false;
        var doneCount = 0;
        if (list.length === 0) {
            return callback(null, []);
        }
        list.forEach(function (item, index) {
            fn(item, function (error, result) {
                if (error) {
                    didErrorOccur = true;
                    results[index] = null;
                    errors[index] = error;
                }
                else {
                    results[index] = result;
                    errors[index] = null;
                }
                if (++doneCount === list.length) {
                    return callback(didErrorOccur ? errors : null, results);
                }
            });
        });
    }
    exports.parallel = parallel;
    function loop(param, fn, callback) {
        // Assert
        assert.ok(param, 'Missing first parameter');
        assert.ok(typeof (fn) === 'function', 'Second parameter must be a function that is called for each element');
        assert.ok(typeof (callback) === 'function', 'Third parameter must be a function that is called on error and success');
        // Param is function, execute to retrieve array
        if (typeof (param) === 'function') {
            try {
                param(function (error, result) {
                    if (error) {
                        callback(error, null);
                    }
                    else {
                        loop(result, fn, callback);
                    }
                });
            }
            catch (error) {
                callback(error, null);
            }
        }
        else {
            var results_1 = [];
            var looper_1 = function (i) {
                // Still work to do
                if (i < param.length) {
                    // Execute function on array element
                    try {
                        fn(param[i], function (error, result) {
                            // A method might only send a boolean value as return value (e.g. fs.exists), support this case gracefully
                            if (error === true || error === false) {
                                result = error;
                                error = null;
                            }
                            // Quit looping on error
                            if (error) {
                                callback(error, null);
                            }
                            else {
                                if (result) {
                                    results_1.push(result);
                                }
                                process.nextTick(function () {
                                    looper_1(i + 1);
                                });
                            }
                        }, i, param.length);
                    }
                    catch (error) {
                        callback(error, null);
                    }
                }
                else {
                    callback(null, results_1);
                }
            };
            // Start looping with first element in array
            looper_1(0);
        }
    }
    exports.loop = loop;
    function Sequence(sequences) {
        // Assert
        assert.ok(sequences.length > 1, 'Need at least one error handler and one function to process sequence');
        sequences.forEach(function (sequence) {
            assert.ok(typeof (sequence) === 'function');
        });
        // Execute in Loop
        var errorHandler = sequences.splice(0, 1)[0]; //Remove error handler
        var sequenceResult = null;
        loop(sequences, function (sequence, clb) {
            var sequenceFunction = function (error, result) {
                // A method might only send a boolean value as return value (e.g. fs.exists), support this case gracefully
                if (error === true || error === false) {
                    result = error;
                    error = null;
                }
                // Handle Error and Result
                if (error) {
                    clb(error, null);
                }
                else {
                    sequenceResult = result; //Remember result of sequence
                    clb(null, null); //Don't pass on result to Looper as we are not aggregating it
                }
            };
            // We call the sequence function setting "this" to be the callback we define here
            // and we pass in the "sequenceResult" as first argument. Doing all this avoids having
            // to pass in a callback to the sequence because the callback is already "this".
            try {
                sequence.call(sequenceFunction, sequenceResult);
            }
            catch (error) {
                clb(error, null);
            }
        }, function (error, result) {
            if (error) {
                errorHandler(error);
            }
        });
    }
    function sequence(sequences) {
        Sequence((Array.isArray(sequences)) ? sequences : Array.prototype.slice.call(arguments));
    }
    exports.sequence = sequence;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[41/*vs/base/node/extfs*/], __M([1/*require*/,0/*exports*/,30/*vs/base/common/uuid*/,11/*vs/base/common/strings*/,5/*vs/base/common/platform*/,116/*vs/base/node/flow*/,28/*fs*/,7/*path*/]), function (require, exports, uuid, strings, platform, flow, fs, paths) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var loop = flow.loop;
    function readdirSync(path) {
        // Mac: uses NFD unicode form on disk, but we want NFC
        // See also https://github.com/nodejs/node/issues/2165
        if (platform.isMacintosh) {
            return fs.readdirSync(path).map(function (c) { return strings.normalizeNFC(c); });
        }
        return fs.readdirSync(path);
    }
    exports.readdirSync = readdirSync;
    function readdir(path, callback) {
        // Mac: uses NFD unicode form on disk, but we want NFC
        // See also https://github.com/nodejs/node/issues/2165
        if (platform.isMacintosh) {
            return fs.readdir(path, function (error, children) {
                if (error) {
                    return callback(error, null);
                }
                return callback(null, children.map(function (c) { return strings.normalizeNFC(c); }));
            });
        }
        return fs.readdir(path, callback);
    }
    exports.readdir = readdir;
    function mkdirp(path, mode, callback) {
        fs.exists(path, function (exists) {
            if (exists) {
                return isDirectory(path, function (err, itIs) {
                    if (err) {
                        return callback(err);
                    }
                    if (!itIs) {
                        return callback(new Error('"' + path + '" is not a directory.'));
                    }
                    callback(null);
                });
            }
            mkdirp(paths.dirname(path), mode, function (err) {
                if (err) {
                    callback(err);
                    return;
                }
                if (mode) {
                    fs.mkdir(path, mode, function (error) {
                        if (error) {
                            return callback(error);
                        }
                        fs.chmod(path, mode, callback); // we need to explicitly chmod because of https://github.com/nodejs/node/issues/1104
                    });
                }
                else {
                    fs.mkdir(path, null, callback);
                }
            });
        });
    }
    exports.mkdirp = mkdirp;
    function isDirectory(path, callback) {
        fs.stat(path, function (error, stat) {
            if (error) {
                return callback(error);
            }
            callback(null, stat.isDirectory());
        });
    }
    function copy(source, target, callback, copiedSources) {
        if (!copiedSources) {
            copiedSources = Object.create(null);
        }
        fs.stat(source, function (error, stat) {
            if (error) {
                return callback(error);
            }
            if (!stat.isDirectory()) {
                return pipeFs(source, target, stat.mode & 511, callback);
            }
            if (copiedSources[source]) {
                return callback(null); // escape when there are cycles (can happen with symlinks)
            }
            else {
                copiedSources[source] = true; // remember as copied
            }
            mkdirp(target, stat.mode & 511, function (err) {
                readdir(source, function (err, files) {
                    loop(files, function (file, clb) {
                        copy(paths.join(source, file), paths.join(target, file), function (error) { return clb(error, undefined); }, copiedSources);
                    }, callback);
                });
            });
        });
    }
    exports.copy = copy;
    function pipeFs(source, target, mode, callback) {
        var callbackHandled = false;
        var readStream = fs.createReadStream(source);
        var writeStream = fs.createWriteStream(target, { mode: mode });
        var onError = function (error) {
            if (!callbackHandled) {
                callbackHandled = true;
                callback(error);
            }
        };
        readStream.on('error', onError);
        writeStream.on('error', onError);
        readStream.on('end', function () {
            writeStream.end(function () {
                if (!callbackHandled) {
                    callbackHandled = true;
                    fs.chmod(target, mode, callback); // we need to explicitly chmod because of https://github.com/nodejs/node/issues/1104
                }
            });
        });
        // In node 0.8 there is no easy way to find out when the pipe operation has finished. As such, we use the end property = false
        // so that we are in charge of calling end() on the write stream and we will be notified when the write stream is really done.
        // We can do this because file streams have an end() method that allows to pass in a callback.
        // In node 0.10 there is an event 'finish' emitted from the write stream that can be used. See
        // https://groups.google.com/forum/?fromgroups=#!topic/nodejs/YWQ1sRoXOdI
        readStream.pipe(writeStream, { end: false });
    }
    // Deletes the given path by first moving it out of the workspace. This has two benefits. For one, the operation can return fast because
    // after the rename, the contents are out of the workspace although not yet deleted. The greater benefit however is that this operation
    // will fail in case any file is used by another process. fs.unlink() in node will not bail if a file unlinked is used by another process.
    // However, the consequences are bad as outlined in all the related bugs from https://github.com/joyent/node/issues/7164
    function del(path, tmpFolder, callback, done) {
        fs.exists(path, function (exists) {
            if (!exists) {
                return callback(null);
            }
            fs.stat(path, function (err, stat) {
                if (err || !stat) {
                    return callback(err);
                }
                // Special windows workaround: A file or folder that ends with a "." cannot be moved to another place
                // because it is not a valid file name. In this case, we really have to do the deletion without prior move.
                if (path[path.length - 1] === '.' || strings.endsWith(path, './') || strings.endsWith(path, '.\\')) {
                    return rmRecursive(path, callback);
                }
                var pathInTemp = paths.join(tmpFolder, uuid.generateUuid());
                fs.rename(path, pathInTemp, function (error) {
                    if (error) {
                        return rmRecursive(path, callback); // if rename fails, delete without tmp dir
                    }
                    // Return early since the move succeeded
                    callback(null);
                    // do the heavy deletion outside the callers callback
                    rmRecursive(pathInTemp, function (error) {
                        if (error) {
                            console.error(error);
                        }
                        if (done) {
                            done(error);
                        }
                    });
                });
            });
        });
    }
    exports.del = del;
    function rmRecursive(path, callback) {
        if (path === '\\' || path === '/') {
            return callback(new Error('Will not delete root!'));
        }
        fs.exists(path, function (exists) {
            if (!exists) {
                callback(null);
            }
            else {
                fs.lstat(path, function (err, stat) {
                    if (err || !stat) {
                        callback(err);
                    }
                    else if (!stat.isDirectory() || stat.isSymbolicLink() /* !!! never recurse into links when deleting !!! */) {
                        var mode = stat.mode;
                        if (!(mode & 128)) {
                            fs.chmod(path, mode | 128, function (err) {
                                if (err) {
                                    callback(err);
                                }
                                else {
                                    fs.unlink(path, callback);
                                }
                            });
                        }
                        else {
                            fs.unlink(path, callback);
                        }
                    }
                    else {
                        readdir(path, function (err, children) {
                            if (err || !children) {
                                callback(err);
                            }
                            else if (children.length === 0) {
                                fs.rmdir(path, callback);
                            }
                            else {
                                var firstError_1 = null;
                                var childrenLeft_1 = children.length;
                                children.forEach(function (child) {
                                    rmRecursive(paths.join(path, child), function (err) {
                                        childrenLeft_1--;
                                        if (err) {
                                            firstError_1 = firstError_1 || err;
                                        }
                                        if (childrenLeft_1 === 0) {
                                            if (firstError_1) {
                                                callback(firstError_1);
                                            }
                                            else {
                                                fs.rmdir(path, callback);
                                            }
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    function delSync(path) {
        try {
            var stat = fs.lstatSync(path);
            if (stat.isDirectory() && !stat.isSymbolicLink()) {
                readdirSync(path).forEach(function (child) { return delSync(paths.join(path, child)); });
                fs.rmdirSync(path);
            }
            else {
                fs.unlinkSync(path);
            }
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return; // not found
            }
            throw err;
        }
    }
    exports.delSync = delSync;
    function mv(source, target, callback) {
        if (source === target) {
            return callback(null);
        }
        function updateMtime(err) {
            if (err) {
                return callback(err);
            }
            fs.stat(target, function (error, stat) {
                if (error) {
                    return callback(error);
                }
                if (stat.isDirectory()) {
                    return callback(null);
                }
                fs.open(target, 'a', null, function (err, fd) {
                    if (err) {
                        return callback(err);
                    }
                    fs.futimes(fd, stat.atime, new Date(), function (err) {
                        if (err) {
                            return callback(err);
                        }
                        fs.close(fd, callback);
                    });
                });
            });
        }
        // Try native rename()
        fs.rename(source, target, function (err) {
            if (!err) {
                return updateMtime(null);
            }
            // In two cases we fallback to classic copy and delete:
            //
            // 1.) The EXDEV error indicates that source and target are on different devices
            // In this case, fallback to using a copy() operation as there is no way to
            // rename() between different devices.
            //
            // 2.) The user tries to rename a file/folder that ends with a dot. This is not
            // really possible to move then, at least on UNC devices.
            if (err && source.toLowerCase() !== target.toLowerCase() && (err.code === 'EXDEV') || strings.endsWith(source, '.')) {
                return copy(source, target, function (err) {
                    if (err) {
                        return callback(err);
                    }
                    rmRecursive(source, updateMtime);
                });
            }
            return callback(err);
        });
    }
    exports.mv = mv;
    // Calls fs.writeFile() followed by a fs.sync() call to flush the changes to disk
    // We do this in cases where we want to make sure the data is really on disk and
    // not in some cache.
    //
    // See https://github.com/nodejs/node/blob/v5.10.0/lib/fs.js#L1194
    var canFlush = true;
    function writeFileAndFlush(path, data, options, callback) {
        if (!canFlush) {
            return fs.writeFile(path, data, options, callback);
        }
        if (!options) {
            options = { encoding: 'utf8', mode: 438, flag: 'w' };
        }
        else if (typeof options === 'string') {
            options = { encoding: options, mode: 438, flag: 'w' };
        }
        // Open the file with same flags and mode as fs.writeFile()
        fs.open(path, options.flag, options.mode, function (openError, fd) {
            if (openError) {
                return callback(openError);
            }
            // It is valid to pass a fd handle to fs.writeFile() and this will keep the handle open!
            fs.writeFile(fd, data, options.encoding, function (writeError) {
                if (writeError) {
                    return fs.close(fd, function () { return callback(writeError); }); // still need to close the handle on error!
                }
                // Flush contents (not metadata) of the file to disk
                fs.fdatasync(fd, function (syncError) {
                    // In some exotic setups it is well possible that node fails to sync
                    // In that case we disable flushing and warn to the console
                    if (syncError) {
                        console.warn('[node.js fs] fdatasync is now disabled for this session because it failed: ', syncError);
                        canFlush = false;
                    }
                    return fs.close(fd, function (closeError) { return callback(closeError); });
                });
            });
        });
    }
    exports.writeFileAndFlush = writeFileAndFlush;
    /**
     * Copied from: https://github.com/Microsoft/vscode-node-debug/blob/master/src/node/pathUtilities.ts#L83
     *
     * Given an absolute, normalized, and existing file path 'realpath' returns the exact path that the file has on disk.
     * On a case insensitive file system, the returned path might differ from the original path by character casing.
     * On a case sensitive file system, the returned path will always be identical to the original path.
     * In case of errors, null is returned. But you cannot use this function to verify that a path exists.
     * realpathSync does not handle '..' or '.' path segments and it does not take the locale into account.
     */
    function realpathSync(path) {
        var dir = paths.dirname(path);
        if (path === dir) {
            return path;
        }
        var name = paths.basename(path).toLowerCase();
        try {
            var entries = readdirSync(dir);
            var found = entries.filter(function (e) { return e.toLowerCase() === name; }); // use a case insensitive search
            if (found.length === 1) {
                // on a case sensitive filesystem we cannot determine here, whether the file exists or not, hence we need the 'file exists' precondition
                var prefix = realpathSync(dir); // recurse
                if (prefix) {
                    return paths.join(prefix, found[0]);
                }
            }
            else if (found.length > 1) {
                // must be a case sensitive $filesystem
                var ix = found.indexOf(name);
                if (ix >= 0) {
                    var prefix = realpathSync(dir); // recurse
                    if (prefix) {
                        return paths.join(prefix, found[ix]);
                    }
                }
            }
        }
        catch (error) {
            // silently ignore error
        }
        return null;
    }
    exports.realpathSync = realpathSync;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[76/*vs/base/node/id*/], __M([1/*require*/,0/*exports*/,137/*getmac*/,49/*crypto*/,2/*vs/base/common/winjs.base*/,17/*vs/base/common/errors*/,30/*vs/base/common/uuid*/,26/*os*/,48/*vs/base/common/map*/]), function (require, exports, getmac, crypto, winjs_base_1, errors, uuid, os_1, map_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // http://www.techrepublic.com/blog/data-center/mac-address-scorecard-for-common-virtual-machine-platforms/
    // VMware ESX 3, Server, Workstation, Player	00-50-56, 00-0C-29, 00-05-69
    // Microsoft Hyper-V, Virtual Server, Virtual PC	00-03-FF
    // Parallells Desktop, Workstation, Server, Virtuozzo	00-1C-42
    // Virtual Iron 4	00-0F-4B
    // Red Hat Xen	00-16-3E
    // Oracle VM	00-16-3E
    // XenSource	00-16-3E
    // Novell Xen	00-16-3E
    // Sun xVM VirtualBox	08-00-27
    exports.virtualMachineHint = new (function () {
        function class_1() {
        }
        class_1.prototype._isVirtualMachineMacAdress = function (mac) {
            if (!this._virtualMachineOUIs) {
                this._virtualMachineOUIs = new map_1.TrieMap(function (s) { return s.split(/[-:]/); });
                // this._virtualMachineOUIs.insert('00-00-00', true);
                this._virtualMachineOUIs.insert('00-50-56', true);
                this._virtualMachineOUIs.insert('00-0C-29', true);
                this._virtualMachineOUIs.insert('00-05-69', true);
                this._virtualMachineOUIs.insert('00-03-FF', true);
                this._virtualMachineOUIs.insert('00-1C-42', true);
            }
            return this._virtualMachineOUIs.findSubstr(mac);
        };
        class_1.prototype.value = function () {
            if (this._value === undefined) {
                var vmOui = 0;
                var interfaceCount = 0;
                var interfaces = os_1.networkInterfaces();
                for (var name_1 in interfaces) {
                    if (Object.prototype.hasOwnProperty.call(interfaces, name_1)) {
                        for (var _i = 0, _a = interfaces[name_1]; _i < _a.length; _i++) {
                            var _b = _a[_i], mac = _b.mac, internal = _b.internal;
                            if (!internal) {
                                interfaceCount += 1;
                                if (this._isVirtualMachineMacAdress(mac.toUpperCase())) {
                                    vmOui += 1;
                                }
                            }
                        }
                    }
                }
                this._value = interfaceCount > 0
                    ? vmOui / interfaceCount
                    : 0;
            }
            return this._value;
        };
        return class_1;
    }());
    var machineId;
    function getMachineId() {
        return machineId || (machineId = getMacMachineId()
            .then(function (id) { return id || uuid.generateUuid(); })); // fallback, generate a UUID
    }
    exports.getMachineId = getMachineId;
    function getMacMachineId() {
        return new winjs_base_1.TPromise(function (resolve) {
            try {
                getmac.getMac(function (error, macAddress) {
                    if (!error) {
                        resolve(crypto.createHash('sha256').update(macAddress, 'utf8').digest('hex'));
                    }
                    else {
                        resolve(undefined);
                    }
                });
            }
            catch (err) {
                errors.onUnexpectedError(err);
                resolve(undefined);
            }
        });
    }
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[79/*vs/base/node/paths*/], __M([1/*require*/,0/*exports*/,19/*vs/base/common/uri*/]), function (require, exports, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var pathsPath = uri_1.default.parse(require.toUrl('paths')).fsPath;
    var paths = require.__$__nodeRequire(pathsPath);
    exports.getAppDataPath = paths.getAppDataPath;
    exports.getDefaultUserDataPath = paths.getDefaultUserDataPath;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[51/*vs/base/node/pfs*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,41/*vs/base/node/extfs*/,7/*path*/,34/*vs/base/common/async*/,28/*fs*/,26/*os*/,5/*vs/base/common/platform*/,4/*vs/base/common/event*/]), function (require, exports, winjs_base_1, extfs, path_1, async_1, fs, os, platform, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function readdir(path) {
        return async_1.nfcall(extfs.readdir, path);
    }
    exports.readdir = readdir;
    function exists(path) {
        return new winjs_base_1.Promise(function (c) { return fs.exists(path, c); });
    }
    exports.exists = exists;
    function chmod(path, mode) {
        return async_1.nfcall(fs.chmod, path, mode);
    }
    exports.chmod = chmod;
    function mkdirp(path, mode) {
        var mkdir = function () { return async_1.nfcall(fs.mkdir, path, mode)
            .then(null, function (err) {
            if (err.code === 'EEXIST') {
                return async_1.nfcall(fs.stat, path)
                    .then(function (stat) { return stat.isDirectory
                    ? null
                    : winjs_base_1.Promise.wrapError(new Error("'" + path + "' exists and is not a directory.")); });
            }
            return winjs_base_1.TPromise.wrapError(err);
        }); };
        // is root?
        if (path === path_1.dirname(path)) {
            return winjs_base_1.TPromise.as(true);
        }
        return mkdir().then(null, function (err) {
            if (err.code === 'ENOENT') {
                return mkdirp(path_1.dirname(path), mode).then(mkdir);
            }
            return winjs_base_1.TPromise.wrapError(err);
        });
    }
    exports.mkdirp = mkdirp;
    function rimraf(path) {
        return lstat(path).then(function (stat) {
            if (stat.isDirectory() && !stat.isSymbolicLink()) {
                return readdir(path)
                    .then(function (children) { return winjs_base_1.TPromise.join(children.map(function (child) { return rimraf(path_1.join(path, child)); })); })
                    .then(function () { return rmdir(path); });
            }
            else {
                return unlink(path);
            }
        }, function (err) {
            if (err.code === 'ENOENT') {
                return void 0;
            }
            return winjs_base_1.TPromise.wrapError(err);
        });
    }
    exports.rimraf = rimraf;
    function realpath(path) {
        return async_1.nfcall(fs.realpath, path, null);
    }
    exports.realpath = realpath;
    function stat(path) {
        return async_1.nfcall(fs.stat, path);
    }
    exports.stat = stat;
    function lstat(path) {
        return async_1.nfcall(fs.lstat, path);
    }
    exports.lstat = lstat;
    function rename(oldPath, newPath) {
        return async_1.nfcall(fs.rename, oldPath, newPath);
    }
    exports.rename = rename;
    function rmdir(path) {
        return async_1.nfcall(fs.rmdir, path);
    }
    exports.rmdir = rmdir;
    function unlink(path) {
        return async_1.nfcall(fs.unlink, path);
    }
    exports.unlink = unlink;
    function symlink(target, path, type) {
        return async_1.nfcall(fs.symlink, target, path, type);
    }
    exports.symlink = symlink;
    function readlink(path) {
        return async_1.nfcall(fs.readlink, path);
    }
    exports.readlink = readlink;
    function touch(path) {
        var now = Date.now() / 1000; // the value should be a Unix timestamp in seconds
        return async_1.nfcall(fs.utimes, path, now, now);
    }
    exports.touch = touch;
    function readFile(path, encoding) {
        return async_1.nfcall(fs.readFile, path, encoding);
    }
    exports.readFile = readFile;
    // According to node.js docs (https://nodejs.org/docs/v6.5.0/api/fs.html#fs_fs_writefile_file_data_options_callback)
    // it is not safe to call writeFile() on the same path multiple times without waiting for the callback to return.
    // Therefor we use a Queue on the path that is given to us to sequentialize calls to the same path properly.
    var writeFilePathQueue = Object.create(null);
    function writeFile(path, data, encoding) {
        if (encoding === void 0) { encoding = 'utf8'; }
        var queueKey = toQueueKey(path);
        return ensureWriteFileQueue(queueKey).queue(function () { return async_1.nfcall(extfs.writeFileAndFlush, path, data, encoding); });
    }
    exports.writeFile = writeFile;
    function toQueueKey(path) {
        var queueKey = path;
        if (platform.isWindows || platform.isMacintosh) {
            queueKey = queueKey.toLowerCase(); // accomodate for case insensitive file systems
        }
        return queueKey;
    }
    function ensureWriteFileQueue(queueKey) {
        var writeFileQueue = writeFilePathQueue[queueKey];
        if (!writeFileQueue) {
            writeFileQueue = new async_1.Queue();
            writeFilePathQueue[queueKey] = writeFileQueue;
            var onFinish = event_1.once(writeFileQueue.onFinished);
            onFinish(function () {
                delete writeFilePathQueue[queueKey];
                writeFileQueue.dispose();
            });
        }
        return writeFileQueue;
    }
    /**
    * Read a dir and return only subfolders
    */
    function readDirsInDir(dirPath) {
        return readdir(dirPath).then(function (children) {
            return winjs_base_1.TPromise.join(children.map(function (c) { return dirExists(path_1.join(dirPath, c)); })).then(function (exists) {
                return children.filter(function (_, i) { return exists[i]; });
            });
        });
    }
    exports.readDirsInDir = readDirsInDir;
    /**
    * `path` exists and is a directory
    */
    function dirExists(path) {
        return stat(path).then(function (stat) { return stat.isDirectory(); }, function () { return false; });
    }
    exports.dirExists = dirExists;
    /**
    * `path` exists and is a file.
    */
    function fileExists(path) {
        return stat(path).then(function (stat) { return stat.isFile(); }, function () { return false; });
    }
    exports.fileExists = fileExists;
    /**
     * Deletes a path from disk.
     */
    var tmpDir = os.tmpdir();
    function del(path, tmp) {
        if (tmp === void 0) { tmp = tmpDir; }
        return async_1.nfcall(extfs.del, path, tmp);
    }
    exports.del = del;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[81/*vs/base/node/profiler*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,7/*path*/,51/*vs/base/node/pfs*/]), function (require, exports, winjs_base_1, path_1, pfs_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function startProfiling(name) {
        return lazyV8Profiler.value.then(function (profiler) {
            profiler.startProfiling(name);
            return true;
        });
    }
    exports.startProfiling = startProfiling;
    var _isRunningOutOfDev = process.env['VSCODE_DEV'];
    function stopProfiling(dir, prefix) {
        return lazyV8Profiler.value.then(function (profiler) {
            return profiler.stopProfiling();
        }).then(function (profile) {
            return new winjs_base_1.TPromise(function (resolve, reject) {
                // remove pii paths
                if (!_isRunningOutOfDev) {
                    removePiiPaths(profile); // remove pii from our users
                }
                profile.export(function (error, result) {
                    profile.delete();
                    if (error) {
                        reject(error);
                        return;
                    }
                    var filepath = path_1.join(dir, prefix + "_" + profile.title + ".cpuprofile");
                    if (!_isRunningOutOfDev) {
                        filepath += '.txt'; // github issues must be: txt, zip, png, gif
                    }
                    pfs_1.writeFile(filepath, result).then(function () { return resolve(filepath); }, reject);
                });
            });
        });
    }
    exports.stopProfiling = stopProfiling;
    function removePiiPaths(profile) {
        var stack = [profile.head];
        while (stack.length > 0) {
            var element = stack.pop();
            if (element.url) {
                var shortUrl = path_1.basename(element.url);
                if (element.url !== shortUrl) {
                    element.url = "pii_removed/" + shortUrl;
                }
            }
            if (element.children) {
                stack.push.apply(stack, element.children);
            }
        }
    }
    var lazyV8Profiler = new (function () {
        function class_1() {
        }
        Object.defineProperty(class_1.prototype, "value", {
            get: function () {
                if (!this._value) {
                    this._value = new winjs_base_1.TPromise(function (resolve, reject) {
                        require(['v8-profiler'], resolve, reject);
                    });
                }
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }());
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[82/*vs/base/node/proxy*/], __M([1/*require*/,0/*exports*/,83/*url*/,6/*vs/base/common/types*/,136/*http-proxy-agent*/,135/*https-proxy-agent*/]), function (require, exports, url_1, types_1, HttpProxyAgent, HttpsProxyAgent) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function getSystemProxyURI(requestURL) {
        if (requestURL.protocol === 'http:') {
            return process.env.HTTP_PROXY || process.env.http_proxy || null;
        }
        else if (requestURL.protocol === 'https:') {
            return process.env.HTTPS_PROXY || process.env.https_proxy || process.env.HTTP_PROXY || process.env.http_proxy || null;
        }
        return null;
    }
    function getProxyAgent(rawRequestURL, options) {
        if (options === void 0) { options = {}; }
        var requestURL = url_1.parse(rawRequestURL);
        var proxyURL = options.proxyUrl || getSystemProxyURI(requestURL);
        if (!proxyURL) {
            return null;
        }
        var proxyEndpoint = url_1.parse(proxyURL);
        if (!/^https?:$/.test(proxyEndpoint.protocol)) {
            return null;
        }
        var opts = {
            host: proxyEndpoint.hostname,
            port: Number(proxyEndpoint.port),
            auth: proxyEndpoint.auth,
            rejectUnauthorized: types_1.isBoolean(options.strictSSL) ? options.strictSSL : true
        };
        return requestURL.protocol === 'http:' ? new HttpProxyAgent(opts) : new HttpsProxyAgent(opts);
    }
    exports.getProxyAgent = getProxyAgent;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[21/*vs/base/parts/ipc/common/ipc*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,9/*vs/base/common/lifecycle*/,4/*vs/base/common/event*/]), function (require, exports, winjs_base_1, lifecycle_1, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var MessageType;
    (function (MessageType) {
        MessageType[MessageType["RequestCommon"] = 0] = "RequestCommon";
        MessageType[MessageType["RequestCancel"] = 1] = "RequestCancel";
        MessageType[MessageType["ResponseInitialize"] = 2] = "ResponseInitialize";
        MessageType[MessageType["ResponseSuccess"] = 3] = "ResponseSuccess";
        MessageType[MessageType["ResponseProgress"] = 4] = "ResponseProgress";
        MessageType[MessageType["ResponseError"] = 5] = "ResponseError";
        MessageType[MessageType["ResponseErrorObj"] = 6] = "ResponseErrorObj";
    })(MessageType || (MessageType = {}));
    function isResponse(messageType) {
        return messageType >= MessageType.ResponseInitialize;
    }
    var State;
    (function (State) {
        State[State["Uninitialized"] = 0] = "Uninitialized";
        State[State["Idle"] = 1] = "Idle";
    })(State || (State = {}));
    var ChannelServer = (function () {
        function ChannelServer(protocol) {
            var _this = this;
            this.protocol = protocol;
            this.channels = Object.create(null);
            this.activeRequests = Object.create(null);
            this.protocolListener = this.protocol.onMessage(function (r) { return _this.onMessage(r); });
            this.protocol.send({ type: MessageType.ResponseInitialize });
        }
        ChannelServer.prototype.registerChannel = function (channelName, channel) {
            this.channels[channelName] = channel;
        };
        ChannelServer.prototype.onMessage = function (request) {
            switch (request.type) {
                case MessageType.RequestCommon:
                    this.onCommonRequest(request);
                    break;
                case MessageType.RequestCancel:
                    this.onCancelRequest(request);
                    break;
            }
        };
        ChannelServer.prototype.onCommonRequest = function (request) {
            var _this = this;
            var channel = this.channels[request.channelName];
            var promise;
            try {
                promise = channel.call(request.name, request.arg);
            }
            catch (err) {
                promise = winjs_base_1.Promise.wrapError(err);
            }
            var id = request.id;
            var requestPromise = promise.then(function (data) {
                _this.protocol.send({ id: id, data: data, type: MessageType.ResponseSuccess });
                delete _this.activeRequests[request.id];
            }, function (data) {
                if (data instanceof Error) {
                    _this.protocol.send({
                        id: id, data: {
                            message: data.message,
                            name: data.name,
                            stack: data.stack ? data.stack.split('\n') : void 0
                        }, type: MessageType.ResponseError
                    });
                }
                else {
                    _this.protocol.send({ id: id, data: data, type: MessageType.ResponseErrorObj });
                }
                delete _this.activeRequests[request.id];
            }, function (data) {
                _this.protocol.send({ id: id, data: data, type: MessageType.ResponseProgress });
            });
            this.activeRequests[request.id] = lifecycle_1.toDisposable(function () { return requestPromise.cancel(); });
        };
        ChannelServer.prototype.onCancelRequest = function (request) {
            var disposable = this.activeRequests[request.id];
            if (disposable) {
                disposable.dispose();
                delete this.activeRequests[request.id];
            }
        };
        ChannelServer.prototype.dispose = function () {
            var _this = this;
            this.protocolListener.dispose();
            this.protocolListener = null;
            Object.keys(this.activeRequests).forEach(function (id) {
                _this.activeRequests[id].dispose();
            });
            this.activeRequests = null;
        };
        return ChannelServer;
    }());
    exports.ChannelServer = ChannelServer;
    var ChannelClient = (function () {
        function ChannelClient(protocol) {
            var _this = this;
            this.protocol = protocol;
            this.state = State.Uninitialized;
            this.activeRequests = [];
            this.bufferedRequests = [];
            this.handlers = Object.create(null);
            this.lastRequestId = 0;
            this.protocolListener = this.protocol.onMessage(function (r) { return _this.onMessage(r); });
        }
        ChannelClient.prototype.getChannel = function (channelName) {
            var _this = this;
            var call = function (command, arg) { return _this.request(channelName, command, arg); };
            return { call: call };
        };
        ChannelClient.prototype.request = function (channelName, name, arg) {
            var _this = this;
            var request = {
                raw: {
                    id: this.lastRequestId++,
                    type: MessageType.RequestCommon,
                    channelName: channelName,
                    name: name,
                    arg: arg
                }
            };
            var activeRequest = this.state === State.Uninitialized
                ? this.bufferRequest(request)
                : this.doRequest(request);
            this.activeRequests.push(activeRequest);
            activeRequest
                .then(null, function (_) { return null; })
                .done(function () { return _this.activeRequests = _this.activeRequests.filter(function (i) { return i !== activeRequest; }); });
            return activeRequest;
        };
        ChannelClient.prototype.doRequest = function (request) {
            var _this = this;
            var id = request.raw.id;
            return new winjs_base_1.Promise(function (c, e, p) {
                _this.handlers[id] = function (response) {
                    switch (response.type) {
                        case MessageType.ResponseSuccess:
                            delete _this.handlers[id];
                            c(response.data);
                            break;
                        case MessageType.ResponseError:
                            delete _this.handlers[id];
                            var error = new Error(response.data.message);
                            error.stack = response.data.stack;
                            error.name = response.data.name;
                            e(error);
                            break;
                        case MessageType.ResponseErrorObj:
                            delete _this.handlers[id];
                            e(response.data);
                            break;
                        case MessageType.ResponseProgress:
                            p(response.data);
                            break;
                    }
                };
                _this.send(request.raw);
            }, function () { return _this.send({ id: id, type: MessageType.RequestCancel }); });
        };
        ChannelClient.prototype.bufferRequest = function (request) {
            var _this = this;
            var flushedRequest = null;
            return new winjs_base_1.Promise(function (c, e, p) {
                _this.bufferedRequests.push(request);
                request.flush = function () {
                    request.flush = null;
                    flushedRequest = _this.doRequest(request).then(c, e, p);
                };
            }, function () {
                request.flush = null;
                if (_this.state !== State.Uninitialized) {
                    if (flushedRequest) {
                        flushedRequest.cancel();
                        flushedRequest = null;
                    }
                    return;
                }
                var idx = _this.bufferedRequests.indexOf(request);
                if (idx === -1) {
                    return;
                }
                _this.bufferedRequests.splice(idx, 1);
            });
        };
        ChannelClient.prototype.onMessage = function (response) {
            if (!isResponse(response.type)) {
                return;
            }
            if (this.state === State.Uninitialized && response.type === MessageType.ResponseInitialize) {
                this.state = State.Idle;
                this.bufferedRequests.forEach(function (r) { return r.flush && r.flush(); });
                this.bufferedRequests = null;
                return;
            }
            var handler = this.handlers[response.id];
            if (handler) {
                handler(response);
            }
        };
        ChannelClient.prototype.send = function (raw) {
            try {
                this.protocol.send(raw);
            }
            catch (err) {
                // noop
            }
        };
        ChannelClient.prototype.dispose = function () {
            this.protocolListener.dispose();
            this.protocolListener = null;
            this.activeRequests.forEach(function (r) { return r.cancel(); });
            this.activeRequests = [];
        };
        return ChannelClient;
    }());
    exports.ChannelClient = ChannelClient;
    /**
     * An `IPCServer` is both a channel server and a routing channel
     * client.
     *
     * As the owner of a protocol, you should extend both this
     * and the `IPCClient` classes to get IPC implementations
     * for your protocol.
     */
    var IPCServer = (function () {
        function IPCServer(onDidClientConnect) {
            var _this = this;
            this.channels = Object.create(null);
            this.channelClients = Object.create(null);
            this.onClientAdded = new event_1.Emitter();
            onDidClientConnect(function (_a) {
                var protocol = _a.protocol, onDidClientDisconnect = _a.onDidClientDisconnect;
                var onFirstMessage = event_1.once(protocol.onMessage);
                onFirstMessage(function (id) {
                    var channelServer = new ChannelServer(protocol);
                    var channelClient = new ChannelClient(protocol);
                    Object.keys(_this.channels)
                        .forEach(function (name) { return channelServer.registerChannel(name, _this.channels[name]); });
                    _this.channelClients[id] = channelClient;
                    _this.onClientAdded.fire(id);
                    onDidClientDisconnect(function () {
                        channelServer.dispose();
                        channelClient.dispose();
                        delete _this.channelClients[id];
                    });
                });
            });
        }
        IPCServer.prototype.getChannel = function (channelName, router) {
            var _this = this;
            var call = function (command, arg) {
                var id = router.route(command, arg);
                if (!id) {
                    return winjs_base_1.TPromise.wrapError('Client id should be provided');
                }
                return _this.getClient(id).then(function (client) { return client.getChannel(channelName).call(command, arg); });
            };
            return { call: call };
        };
        IPCServer.prototype.registerChannel = function (channelName, channel) {
            this.channels[channelName] = channel;
        };
        IPCServer.prototype.getClient = function (clientId) {
            var _this = this;
            var client = this.channelClients[clientId];
            if (client) {
                return winjs_base_1.TPromise.as(client);
            }
            return new winjs_base_1.TPromise(function (c) {
                var onClient = event_1.once(event_1.filterEvent(_this.onClientAdded.event, function (id) { return id === clientId; }));
                onClient(function () { return c(_this.channelClients[clientId]); });
            });
        };
        IPCServer.prototype.dispose = function () {
            this.channels = null;
            this.channelClients = null;
            this.onClientAdded.dispose();
        };
        return IPCServer;
    }());
    exports.IPCServer = IPCServer;
    /**
     * An `IPCClient` is both a channel client and a channel server.
     *
     * As the owner of a protocol, you should extend both this
     * and the `IPCClient` classes to get IPC implementations
     * for your protocol.
     */
    var IPCClient = (function () {
        function IPCClient(protocol, id) {
            protocol.send(id);
            this.channelClient = new ChannelClient(protocol);
            this.channelServer = new ChannelServer(protocol);
        }
        IPCClient.prototype.getChannel = function (channelName) {
            return this.channelClient.getChannel(channelName);
        };
        IPCClient.prototype.registerChannel = function (channelName, channel) {
            this.channelServer.registerChannel(channelName, channel);
        };
        IPCClient.prototype.dispose = function () {
            this.channelClient.dispose();
            this.channelClient = null;
            this.channelServer.dispose();
            this.channelServer = null;
        };
        return IPCClient;
    }());
    exports.IPCClient = IPCClient;
    function getDelayedChannel(promise) {
        var call = function (command, arg) { return promise.then(function (c) { return c.call(command, arg); }); };
        return { call: call };
    }
    exports.getDelayedChannel = getDelayedChannel;
    function getNextTickChannel(channel) {
        var didTick = false;
        var call = function (command, arg) {
            if (didTick) {
                return channel.call(command, arg);
            }
            return winjs_base_1.TPromise.timeout(0)
                .then(function () { return didTick = true; })
                .then(function () { return channel.call(command, arg); });
        };
        return { call: call };
    }
    exports.getNextTickChannel = getNextTickChannel;
    function eventToCall(event, serializer) {
        if (serializer === void 0) { serializer = function (t) { return t; }; }
        var disposable;
        return new winjs_base_1.Promise(function (c, e, p) { return disposable = event(function (t) { return p(serializer(t)); }); }, function () { return disposable.dispose(); });
    }
    exports.eventToCall = eventToCall;
    function eventFromCall(channel, name, arg, deserializer) {
        if (arg === void 0) { arg = null; }
        if (deserializer === void 0) { deserializer = function (t) { return t; }; }
        var promise;
        var emitter = new event_1.Emitter({
            onFirstListenerAdd: function () {
                promise = channel.call(name, arg)
                    .then(null, function (err) { return null; }, function (e) { return emitter.fire(deserializer(e)); });
            },
            onLastListenerRemove: function () {
                promise.cancel();
                promise = null;
            }
        });
        return emitter.event;
    }
    exports.eventFromCall = eventFromCall;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[93/*vs/base/parts/ipc/common/ipc.electron*/], __M([1/*require*/,0/*exports*/,9/*vs/base/common/lifecycle*/,4/*vs/base/common/event*/]), function (require, exports, lifecycle_1, event_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Protocol = (function () {
        function Protocol(sender, onMessageEvent) {
            this.sender = sender;
            this.onMessageEvent = onMessageEvent;
            var emitter = new event_1.Emitter();
            onMessageEvent(function (msg) { return emitter.fire(msg); });
            this._onMessage = emitter.event;
        }
        Object.defineProperty(Protocol.prototype, "onMessage", {
            get: function () { return this._onMessage; },
            enumerable: true,
            configurable: true
        });
        Protocol.prototype.send = function (message) {
            try {
                this.sender.send('ipc:message', message);
            }
            catch (e) {
                // systems are going down
            }
        };
        Protocol.prototype.dispose = function () {
            this.listener = lifecycle_1.dispose(this.listener);
        };
        return Protocol;
    }());
    exports.Protocol = Protocol;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










define(__m[94/*vs/base/parts/ipc/electron-main/ipc.electron-main*/], __M([1/*require*/,0/*exports*/,4/*vs/base/common/event*/,29/*vs/base/node/event*/,21/*vs/base/parts/ipc/common/ipc*/,93/*vs/base/parts/ipc/common/ipc.electron*/,10/*electron*/]), function (require, exports, event_1, event_2, ipc_1, ipc_electron_1, electron_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createScopedOnMessageEvent(senderId) {
        var onMessage = event_2.fromEventEmitter(electron_1.ipcMain, 'ipc:message', function (event, message) { return ({ event: event, message: message }); });
        var onMessageFromSender = event_1.filterEvent(onMessage, function (_a) {
            var event = _a.event;
            return event.sender.getId() === senderId;
        });
        return event_1.mapEvent(onMessageFromSender, function (_a) {
            var message = _a.message;
            return message;
        });
    }
    var Server = (function (_super) {
        __extends(Server, _super);
        function Server() {
            return _super.call(this, Server.getOnDidClientConnect()) || this;
        }
        Server.getOnDidClientConnect = function () {
            var onHello = event_2.fromEventEmitter(electron_1.ipcMain, 'ipc:hello', function (_a) {
                var sender = _a.sender;
                return sender;
            });
            return event_1.mapEvent(onHello, function (webContents) {
                var onMessage = createScopedOnMessageEvent(webContents.getId());
                var protocol = new ipc_electron_1.Protocol(webContents, onMessage);
                var onDidClientDisconnect = event_2.fromEventEmitter(webContents, 'destroyed');
                return { protocol: protocol, onDidClientDisconnect: onDidClientDisconnect };
            });
        };
        return Server;
    }(ipc_1.IPCServer));
    exports.Server = Server;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/










define(__m[54/*vs/base/parts/ipc/node/ipc.net*/], __M([1/*require*/,0/*exports*/,129/*net*/,2/*vs/base/common/winjs.base*/,4/*vs/base/common/event*/,29/*vs/base/node/event*/,21/*vs/base/parts/ipc/common/ipc*/,7/*path*/,26/*os*/,30/*vs/base/common/uuid*/]), function (require, exports, net_1, winjs_base_1, event_1, event_2, ipc_1, path_1, os_1, uuid_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function generateRandomPipeName() {
        var randomSuffix = uuid_1.generateUuid();
        if (process.platform === 'win32') {
            return "\\\\.\\pipe\\vscode-" + randomSuffix + "-sock";
        }
        else {
            // Mac/Unix: use socket file
            return path_1.join(os_1.tmpdir(), "vscode-" + randomSuffix + ".sock");
        }
    }
    exports.generateRandomPipeName = generateRandomPipeName;
    var Protocol = (function () {
        function Protocol(_socket) {
            var _this = this;
            this._socket = _socket;
            this._onMessage = new event_1.Emitter();
            this.onMessage = this._onMessage.event;
            this._writeBuffer = new (function () {
                function class_1() {
                    this._data = [];
                    this._totalLength = 0;
                }
                class_1.prototype.add = function (head, body) {
                    var wasEmpty = this._totalLength === 0;
                    this._data.push(head, body);
                    this._totalLength += head.length + body.length;
                    return wasEmpty;
                };
                class_1.prototype.take = function () {
                    var ret = Buffer.concat(this._data, this._totalLength);
                    this._data.length = 0;
                    this._totalLength = 0;
                    return ret;
                };
                return class_1;
            }());
            var chunks = [];
            var totalLength = 0;
            var state = {
                readHead: true,
                bodyIsJson: false,
                bodyLen: -1,
            };
            _socket.on('data', function (data) {
                chunks.push(data);
                totalLength += data.length;
                while (totalLength > 0) {
                    if (state.readHead) {
                        // expecting header -> read 17bytes for header
                        // information: `bodyIsJson` and `bodyLen`
                        if (totalLength >= Protocol._headerLen) {
                            var all = Buffer.concat(chunks);
                            state.bodyIsJson = all.readInt8(0) === 1;
                            state.bodyLen = all.readInt32BE(1);
                            state.readHead = false;
                            var rest = all.slice(Protocol._headerLen);
                            totalLength = rest.length;
                            chunks = [rest];
                        }
                        else {
                            break;
                        }
                    }
                    if (!state.readHead) {
                        // expecting body -> read bodyLen-bytes for
                        // the actual message or wait for more data
                        if (totalLength >= state.bodyLen) {
                            var all = Buffer.concat(chunks);
                            var message = all.toString('utf8', 0, state.bodyLen);
                            if (state.bodyIsJson) {
                                message = JSON.parse(message);
                            }
                            _this._onMessage.fire(message);
                            var rest = all.slice(state.bodyLen);
                            totalLength = rest.length;
                            chunks = [rest];
                            state.bodyIsJson = false;
                            state.bodyLen = -1;
                            state.readHead = true;
                        }
                        else {
                            break;
                        }
                    }
                }
            });
        }
        Protocol.prototype.send = function (message) {
            // [bodyIsJson|bodyLen|message]
            // |^header^^^^^^^^^^^|^data^^]
            var header = Buffer.alloc(Protocol._headerLen);
            // ensure string
            if (typeof message !== 'string') {
                message = JSON.stringify(message);
                header.writeInt8(1, 0);
            }
            var data = Buffer.from(message);
            header.writeInt32BE(data.length, 1);
            this._writeSoon(header, data);
        };
        Protocol.prototype._writeSoon = function (header, data) {
            var _this = this;
            if (this._writeBuffer.add(header, data)) {
                setImmediate(function () {
                    // return early if socket has been destroyed in the meantime
                    if (_this._socket.destroyed) {
                        return;
                    }
                    // we ignore the returned value from `write` because we would have to cached the data
                    // anyways and nodejs is already doing that for us:
                    // > https://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback
                    // > However, the false return value is only advisory and the writable stream will unconditionally
                    // > accept and buffer chunk even if it has not not been allowed to drain.
                    _this._socket.write(_this._writeBuffer.take());
                });
            }
        };
        return Protocol;
    }());
    Protocol._headerLen = 17;
    exports.Protocol = Protocol;
    var Server = (function (_super) {
        __extends(Server, _super);
        function Server(server) {
            var _this = _super.call(this, Server.toClientConnectionEvent(server)) || this;
            _this.server = server;
            return _this;
        }
        Server.toClientConnectionEvent = function (server) {
            var onConnection = event_2.fromEventEmitter(server, 'connection');
            return event_1.mapEvent(onConnection, function (socket) { return ({
                protocol: new Protocol(socket),
                onDidClientDisconnect: event_1.once(event_2.fromEventEmitter(socket, 'close'))
            }); });
        };
        Server.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.server.close();
            this.server = null;
        };
        return Server;
    }(ipc_1.IPCServer));
    exports.Server = Server;
    var Client = (function (_super) {
        __extends(Client, _super);
        function Client(socket, id) {
            var _this = _super.call(this, new Protocol(socket), id) || this;
            _this.socket = socket;
            _this._onClose = new event_1.Emitter();
            socket.once('close', function () { return _this._onClose.fire(); });
            return _this;
        }
        Object.defineProperty(Client.prototype, "onClose", {
            get: function () { return this._onClose.event; },
            enumerable: true,
            configurable: true
        });
        Client.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.socket.end();
            this.socket = null;
        };
        return Client;
    }(ipc_1.IPCClient));
    exports.Client = Client;
    function serve(hook) {
        return new winjs_base_1.TPromise(function (c, e) {
            var server = net_1.createServer();
            server.on('error', e);
            server.listen(hook, function () {
                server.removeListener('error', e);
                c(new Server(server));
            });
        });
    }
    exports.serve = serve;
    function connect(hook, clientId) {
        return new winjs_base_1.TPromise(function (c, e) {
            var socket = net_1.createConnection(hook, function () {
                socket.removeListener('error', e);
                c(new Client(socket, clientId));
            });
            socket.once('error', e);
        });
    }
    exports.connect = connect;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[55/*vs/code/electron-main/paths*/], __M([1/*require*/,0/*exports*/,38/*original-fs*/,7/*path*/,20/*vs/base/common/arrays*/,11/*vs/base/common/strings*/,18/*vs/base/common/paths*/,5/*vs/base/common/platform*/,6/*vs/base/common/types*/]), function (require, exports, fs, path, arrays, strings, paths, platform, types) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function validatePaths(args) {
        // Realpath/normalize paths and watch out for goto line mode
        var paths = doValidatePaths(args._, args.goto);
        // Update environment
        args._ = paths;
        args.diff = args.diff && paths.length === 2;
        return args;
    }
    exports.validatePaths = validatePaths;
    function doValidatePaths(args, gotoLineMode) {
        var cwd = process.env['VSCODE_CWD'] || process.cwd();
        var result = args.map(function (arg) {
            var pathCandidate = String(arg);
            var parsedPath;
            if (gotoLineMode) {
                parsedPath = parseLineAndColumnAware(pathCandidate);
                pathCandidate = parsedPath.path;
            }
            if (pathCandidate) {
                pathCandidate = preparePath(cwd, pathCandidate);
            }
            var realPath;
            try {
                realPath = fs.realpathSync(pathCandidate);
            }
            catch (error) {
                // in case of an error, assume the user wants to create this file
                // if the path is relative, we join it to the cwd
                realPath = path.normalize(path.isAbsolute(pathCandidate) ? pathCandidate : path.join(cwd, pathCandidate));
            }
            var basename = path.basename(realPath);
            if (basename /* can be empty if code is opened on root */ && !paths.isValidBasename(basename)) {
                return null; // do not allow invalid file names
            }
            if (gotoLineMode) {
                parsedPath.path = realPath;
                return toPath(parsedPath);
            }
            return realPath;
        });
        var caseInsensitive = platform.isWindows || platform.isMacintosh;
        var distinct = arrays.distinct(result, function (e) { return e && caseInsensitive ? e.toLowerCase() : e; });
        return arrays.coalesce(distinct);
    }
    function preparePath(cwd, p) {
        // Trim trailing quotes
        if (platform.isWindows) {
            p = strings.rtrim(p, '"'); // https://github.com/Microsoft/vscode/issues/1498
        }
        // Trim whitespaces
        p = strings.trim(strings.trim(p, ' '), '\t');
        if (platform.isWindows) {
            // Resolve the path against cwd if it is relative
            p = path.resolve(cwd, p);
            // Trim trailing '.' chars on Windows to prevent invalid file names
            p = strings.rtrim(p, '.');
        }
        return p;
    }
    function parseLineAndColumnAware(rawPath) {
        var segments = rawPath.split(':'); // C:\file.txt:<line>:<column>
        var path;
        var line = null;
        var column = null;
        segments.forEach(function (segment) {
            var segmentAsNumber = Number(segment);
            if (!types.isNumber(segmentAsNumber)) {
                path = !!path ? [path, segment].join(':') : segment; // a colon can well be part of a path (e.g. C:\...)
            }
            else if (line === null) {
                line = segmentAsNumber;
            }
            else if (column === null) {
                column = segmentAsNumber;
            }
        });
        if (!path) {
            throw new Error('Format for `--goto` should be: `FILE:LINE(:COLUMN)`');
        }
        return {
            path: path,
            line: line !== null ? line : void 0,
            column: column !== null ? column : line !== null ? 1 : void 0 // if we have a line, make sure column is also set
        };
    }
    exports.parseLineAndColumnAware = parseLineAndColumnAware;
    function toPath(p) {
        var segments = [p.path];
        if (types.isNumber(p.line)) {
            segments.push(String(p.line));
        }
        if (types.isNumber(p.column)) {
            segments.push(String(p.column));
        }
        return segments.join(':');
    }
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(__m[104/*vs/code/electron-main/sharedProcess*/], __M([1/*require*/,0/*exports*/,8/*vs/base/common/objects*/,43/*vs/base/common/decorators*/,9/*vs/base/common/lifecycle*/,2/*vs/base/common/winjs.base*/,10/*electron*/,34/*vs/base/common/async*/]), function (require, exports, objects_1, decorators_1, lifecycle_1, winjs_base_1, electron_1, async_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SharedProcess = (function () {
        function SharedProcess(environmentService, userEnv) {
            this.environmentService = environmentService;
            this.userEnv = userEnv;
            this.disposables = [];
            this.spawnPromiseSource = new async_1.PromiseSource();
        }
        Object.defineProperty(SharedProcess.prototype, "_whenReady", {
            get: function () {
                var _this = this;
                this.window = new electron_1.BrowserWindow({ show: false });
                var config = objects_1.assign({
                    appRoot: this.environmentService.appRoot,
                    nodeCachedDataDir: this.environmentService.nodeCachedDataDir,
                    userEnv: this.userEnv
                });
                var url = require.toUrl('vs/code/electron-browser/sharedProcess.html') + "?config=" + encodeURIComponent(JSON.stringify(config));
                this.window.loadURL(url);
                // Prevent the window from dying
                var onClose = function (e) {
                    if (_this.window.isVisible()) {
                        e.preventDefault();
                        _this.window.hide();
                    }
                };
                this.window.on('close', onClose);
                this.disposables.push(lifecycle_1.toDisposable(function () { return _this.window.removeListener('close', onClose); }));
                this.disposables.push(lifecycle_1.toDisposable(function () {
                    // Electron seems to crash on Windows without this setTimeout :|
                    setTimeout(function () {
                        try {
                            _this.window.close();
                        }
                        catch (err) {
                            // ignore, as electron is already shutting down
                        }
                        _this.window = null;
                    }, 0);
                }));
                return new winjs_base_1.TPromise(function (c, e) {
                    electron_1.ipcMain.once('handshake:hello', function (_a) {
                        var sender = _a.sender;
                        sender.send('handshake:hey there', {
                            sharedIPCHandle: _this.environmentService.sharedIPCHandle,
                            args: _this.environmentService.args
                        });
                        electron_1.ipcMain.once('handshake:im ready', function () { return c(null); });
                    });
                });
            },
            enumerable: true,
            configurable: true
        });
        SharedProcess.prototype.spawn = function () {
            this.spawnPromiseSource.complete();
        };
        SharedProcess.prototype.whenReady = function () {
            var _this = this;
            return this.spawnPromiseSource.value.then(function () { return _this._whenReady; });
        };
        SharedProcess.prototype.toggle = function () {
            if (this.window.isVisible()) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        SharedProcess.prototype.show = function () {
            this.window.show();
            this.window.webContents.openDevTools();
        };
        SharedProcess.prototype.hide = function () {
            this.window.webContents.closeDevTools();
            this.window.hide();
        };
        SharedProcess.prototype.dispose = function () {
            this.disposables = lifecycle_1.dispose(this.disposables);
        };
        return SharedProcess;
    }());
    __decorate([
        decorators_1.memoize
    ], SharedProcess.prototype, "_whenReady", null);
    exports.SharedProcess = SharedProcess;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[107/*vs/code/electron-main/shellEnv*/], __M([1/*require*/,0/*exports*/,109/*child_process*/,8/*vs/base/common/objects*/,30/*vs/base/common/uuid*/,2/*vs/base/common/winjs.base*/,5/*vs/base/common/platform*/]), function (require, exports, cp, objects_1, uuid_1, winjs_base_1, platform_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function getUnixShellEnvironment() {
        var promise = new winjs_base_1.TPromise(function (c, e) {
            var runAsNode = process.env['ELECTRON_RUN_AS_NODE'];
            var noAttach = process.env['ELECTRON_NO_ATTACH_CONSOLE'];
            var mark = uuid_1.generateUuid().replace(/-/g, '').substr(0, 12);
            var regex = new RegExp(mark + '(.*)' + mark);
            var env = objects_1.assign({}, process.env, {
                ELECTRON_RUN_AS_NODE: '1',
                ELECTRON_NO_ATTACH_CONSOLE: '1'
            });
            var command = "'" + process.execPath + "' -p '\"" + mark + "\" + JSON.stringify(process.env) + \"" + mark + "\"'";
            var child = cp.spawn(process.env.SHELL, ['-ilc', command], {
                detached: true,
                stdio: ['ignore', 'pipe', process.stderr],
                env: env
            });
            var buffers = [];
            child.on('error', function () { return c({}); });
            child.stdout.on('data', function (b) { return buffers.push(b); });
            child.on('close', function (code, signal) {
                if (code !== 0) {
                    return e(new Error('Failed to get environment'));
                }
                var raw = Buffer.concat(buffers).toString('utf8');
                var match = regex.exec(raw);
                var rawStripped = match ? match[1] : '{}';
                try {
                    var env_1 = JSON.parse(rawStripped);
                    if (runAsNode) {
                        env_1['ELECTRON_RUN_AS_NODE'] = runAsNode;
                    }
                    else {
                        delete env_1['ELECTRON_RUN_AS_NODE'];
                    }
                    if (noAttach) {
                        env_1['ELECTRON_NO_ATTACH_CONSOLE'] = noAttach;
                    }
                    else {
                        delete env_1['ELECTRON_NO_ATTACH_CONSOLE'];
                    }
                    c(env_1);
                }
                catch (err) {
                    e(err);
                }
            });
        });
        // swallow errors
        return promise.then(null, function () { return ({}); });
    }
    var _shellEnv;
    /**
     * We need to get the environment from a user's shell.
     * This should only be done when Code itself is not launched
     * from within a shell.
     */
    function getShellEnvironment() {
        if (_shellEnv === undefined) {
            if (platform_1.isWindows) {
                _shellEnv = winjs_base_1.TPromise.as({});
            }
            else if (process.env['VSCODE_CLI'] === '1') {
                _shellEnv = winjs_base_1.TPromise.as({});
            }
            else {
                _shellEnv = getUnixShellEnvironment();
            }
        }
        return _shellEnv;
    }
    exports.getShellEnvironment = getShellEnvironment;
});

define(__m[111/*vs/nls!vs/base/common/json*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/base/common/json", data); });
define(__m[63/*vs/base/common/json*/], __M([1/*require*/,0/*exports*/,111/*vs/nls!vs/base/common/json*/]), function (require, exports, nls_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var ScanError;
    (function (ScanError) {
        ScanError[ScanError["None"] = 0] = "None";
        ScanError[ScanError["UnexpectedEndOfComment"] = 1] = "UnexpectedEndOfComment";
        ScanError[ScanError["UnexpectedEndOfString"] = 2] = "UnexpectedEndOfString";
        ScanError[ScanError["UnexpectedEndOfNumber"] = 3] = "UnexpectedEndOfNumber";
        ScanError[ScanError["InvalidUnicode"] = 4] = "InvalidUnicode";
        ScanError[ScanError["InvalidEscapeCharacter"] = 5] = "InvalidEscapeCharacter";
        ScanError[ScanError["InvalidCharacter"] = 6] = "InvalidCharacter";
    })(ScanError = exports.ScanError || (exports.ScanError = {}));
    var SyntaxKind;
    (function (SyntaxKind) {
        SyntaxKind[SyntaxKind["Unknown"] = 0] = "Unknown";
        SyntaxKind[SyntaxKind["OpenBraceToken"] = 1] = "OpenBraceToken";
        SyntaxKind[SyntaxKind["CloseBraceToken"] = 2] = "CloseBraceToken";
        SyntaxKind[SyntaxKind["OpenBracketToken"] = 3] = "OpenBracketToken";
        SyntaxKind[SyntaxKind["CloseBracketToken"] = 4] = "CloseBracketToken";
        SyntaxKind[SyntaxKind["CommaToken"] = 5] = "CommaToken";
        SyntaxKind[SyntaxKind["ColonToken"] = 6] = "ColonToken";
        SyntaxKind[SyntaxKind["NullKeyword"] = 7] = "NullKeyword";
        SyntaxKind[SyntaxKind["TrueKeyword"] = 8] = "TrueKeyword";
        SyntaxKind[SyntaxKind["FalseKeyword"] = 9] = "FalseKeyword";
        SyntaxKind[SyntaxKind["StringLiteral"] = 10] = "StringLiteral";
        SyntaxKind[SyntaxKind["NumericLiteral"] = 11] = "NumericLiteral";
        SyntaxKind[SyntaxKind["LineCommentTrivia"] = 12] = "LineCommentTrivia";
        SyntaxKind[SyntaxKind["BlockCommentTrivia"] = 13] = "BlockCommentTrivia";
        SyntaxKind[SyntaxKind["LineBreakTrivia"] = 14] = "LineBreakTrivia";
        SyntaxKind[SyntaxKind["Trivia"] = 15] = "Trivia";
        SyntaxKind[SyntaxKind["EOF"] = 16] = "EOF";
    })(SyntaxKind = exports.SyntaxKind || (exports.SyntaxKind = {}));
    /**
     * Creates a JSON scanner on the given text.
     * If ignoreTrivia is set, whitespaces or comments are ignored.
     */
    function createScanner(text, ignoreTrivia) {
        if (ignoreTrivia === void 0) { ignoreTrivia = false; }
        var pos = 0, len = text.length, value = '', tokenOffset = 0, token = SyntaxKind.Unknown, scanError = ScanError.None;
        function scanHexDigits(count, exact) {
            var digits = 0;
            var value = 0;
            while (digits < count || !exact) {
                var ch = text.charCodeAt(pos);
                if (ch >= 48 /* _0 */ && ch <= 57 /* _9 */) {
                    value = value * 16 + ch - 48 /* _0 */;
                }
                else if (ch >= 65 /* A */ && ch <= 70 /* F */) {
                    value = value * 16 + ch - 65 /* A */ + 10;
                }
                else if (ch >= 97 /* a */ && ch <= 102 /* f */) {
                    value = value * 16 + ch - 97 /* a */ + 10;
                }
                else {
                    break;
                }
                pos++;
                digits++;
            }
            if (digits < count) {
                value = -1;
            }
            return value;
        }
        function setPosition(newPosition) {
            pos = newPosition;
            value = '';
            tokenOffset = 0;
            token = SyntaxKind.Unknown;
            scanError = ScanError.None;
        }
        function scanNumber() {
            var start = pos;
            if (text.charCodeAt(pos) === 48 /* _0 */) {
                pos++;
            }
            else {
                pos++;
                while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                }
            }
            if (pos < text.length && text.charCodeAt(pos) === 46 /* dot */) {
                pos++;
                if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                    while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                        pos++;
                    }
                }
                else {
                    scanError = ScanError.UnexpectedEndOfNumber;
                    return text.substring(start, pos);
                }
            }
            var end = pos;
            if (pos < text.length && (text.charCodeAt(pos) === 69 /* E */ || text.charCodeAt(pos) === 101 /* e */)) {
                pos++;
                if (pos < text.length && text.charCodeAt(pos) === 43 /* plus */ || text.charCodeAt(pos) === 45 /* minus */) {
                    pos++;
                }
                if (pos < text.length && isDigit(text.charCodeAt(pos))) {
                    pos++;
                    while (pos < text.length && isDigit(text.charCodeAt(pos))) {
                        pos++;
                    }
                    end = pos;
                }
                else {
                    scanError = ScanError.UnexpectedEndOfNumber;
                }
            }
            return text.substring(start, end);
        }
        function scanString() {
            var result = '', start = pos;
            while (true) {
                if (pos >= len) {
                    result += text.substring(start, pos);
                    scanError = ScanError.UnexpectedEndOfString;
                    break;
                }
                var ch = text.charCodeAt(pos);
                if (ch === 34 /* doubleQuote */) {
                    result += text.substring(start, pos);
                    pos++;
                    break;
                }
                if (ch === 92 /* backslash */) {
                    result += text.substring(start, pos);
                    pos++;
                    if (pos >= len) {
                        scanError = ScanError.UnexpectedEndOfString;
                        break;
                    }
                    ch = text.charCodeAt(pos++);
                    switch (ch) {
                        case 34 /* doubleQuote */:
                            result += '\"';
                            break;
                        case 92 /* backslash */:
                            result += '\\';
                            break;
                        case 47 /* slash */:
                            result += '/';
                            break;
                        case 98 /* b */:
                            result += '\b';
                            break;
                        case 102 /* f */:
                            result += '\f';
                            break;
                        case 110 /* n */:
                            result += '\n';
                            break;
                        case 114 /* r */:
                            result += '\r';
                            break;
                        case 116 /* t */:
                            result += '\t';
                            break;
                        case 117 /* u */:
                            var ch_1 = scanHexDigits(4, true);
                            if (ch_1 >= 0) {
                                result += String.fromCharCode(ch_1);
                            }
                            else {
                                scanError = ScanError.InvalidUnicode;
                            }
                            break;
                        default:
                            scanError = ScanError.InvalidEscapeCharacter;
                    }
                    start = pos;
                    continue;
                }
                if (ch >= 0 && ch <= 0x1f) {
                    if (isLineBreak(ch)) {
                        result += text.substring(start, pos);
                        scanError = ScanError.UnexpectedEndOfString;
                        break;
                    }
                    else {
                        scanError = ScanError.InvalidCharacter;
                        break;
                    }
                }
                pos++;
            }
            return result;
        }
        function scanNext() {
            value = '';
            scanError = ScanError.None;
            tokenOffset = pos;
            if (pos >= len) {
                // at the end
                tokenOffset = len;
                return token = SyntaxKind.EOF;
            }
            var code = text.charCodeAt(pos);
            // trivia: whitespace
            if (isWhiteSpace(code)) {
                do {
                    pos++;
                    value += String.fromCharCode(code);
                    code = text.charCodeAt(pos);
                } while (isWhiteSpace(code));
                return token = SyntaxKind.Trivia;
            }
            // trivia: newlines
            if (isLineBreak(code)) {
                pos++;
                value += String.fromCharCode(code);
                if (code === 13 /* carriageReturn */ && text.charCodeAt(pos) === 10 /* lineFeed */) {
                    pos++;
                    value += '\n';
                }
                return token = SyntaxKind.LineBreakTrivia;
            }
            switch (code) {
                // tokens: []{}:,
                case 123 /* openBrace */:
                    pos++;
                    return token = SyntaxKind.OpenBraceToken;
                case 125 /* closeBrace */:
                    pos++;
                    return token = SyntaxKind.CloseBraceToken;
                case 91 /* openBracket */:
                    pos++;
                    return token = SyntaxKind.OpenBracketToken;
                case 93 /* closeBracket */:
                    pos++;
                    return token = SyntaxKind.CloseBracketToken;
                case 58 /* colon */:
                    pos++;
                    return token = SyntaxKind.ColonToken;
                case 44 /* comma */:
                    pos++;
                    return token = SyntaxKind.CommaToken;
                // strings
                case 34 /* doubleQuote */:
                    pos++;
                    value = scanString();
                    return token = SyntaxKind.StringLiteral;
                // comments
                case 47 /* slash */:
                    var start = pos - 1;
                    // Single-line comment
                    if (text.charCodeAt(pos + 1) === 47 /* slash */) {
                        pos += 2;
                        while (pos < len) {
                            if (isLineBreak(text.charCodeAt(pos))) {
                                break;
                            }
                            pos++;
                        }
                        value = text.substring(start, pos);
                        return token = SyntaxKind.LineCommentTrivia;
                    }
                    // Multi-line comment
                    if (text.charCodeAt(pos + 1) === 42 /* asterisk */) {
                        pos += 2;
                        var safeLength = len - 1; // For lookahead.
                        var commentClosed = false;
                        while (pos < safeLength) {
                            var ch = text.charCodeAt(pos);
                            if (ch === 42 /* asterisk */ && text.charCodeAt(pos + 1) === 47 /* slash */) {
                                pos += 2;
                                commentClosed = true;
                                break;
                            }
                            pos++;
                        }
                        if (!commentClosed) {
                            pos++;
                            scanError = ScanError.UnexpectedEndOfComment;
                        }
                        value = text.substring(start, pos);
                        return token = SyntaxKind.BlockCommentTrivia;
                    }
                    // just a single slash
                    value += String.fromCharCode(code);
                    pos++;
                    return token = SyntaxKind.Unknown;
                // numbers
                case 45 /* minus */:
                    value += String.fromCharCode(code);
                    pos++;
                    if (pos === len || !isDigit(text.charCodeAt(pos))) {
                        return token = SyntaxKind.Unknown;
                    }
                // found a minus, followed by a number so
                // we fall through to proceed with scanning
                // numbers
                case 48 /* _0 */:
                case 49 /* _1 */:
                case 50 /* _2 */:
                case 51 /* _3 */:
                case 52 /* _4 */:
                case 53 /* _5 */:
                case 54 /* _6 */:
                case 55 /* _7 */:
                case 56 /* _8 */:
                case 57 /* _9 */:
                    value += scanNumber();
                    return token = SyntaxKind.NumericLiteral;
                // literals and unknown symbols
                default:
                    // is a literal? Read the full word.
                    while (pos < len && isUnknownContentCharacter(code)) {
                        pos++;
                        code = text.charCodeAt(pos);
                    }
                    if (tokenOffset !== pos) {
                        value = text.substring(tokenOffset, pos);
                        // keywords: true, false, null
                        switch (value) {
                            case 'true': return token = SyntaxKind.TrueKeyword;
                            case 'false': return token = SyntaxKind.FalseKeyword;
                            case 'null': return token = SyntaxKind.NullKeyword;
                        }
                        return token = SyntaxKind.Unknown;
                    }
                    // some
                    value += String.fromCharCode(code);
                    pos++;
                    return token = SyntaxKind.Unknown;
            }
        }
        function isUnknownContentCharacter(code) {
            if (isWhiteSpace(code) || isLineBreak(code)) {
                return false;
            }
            switch (code) {
                case 125 /* closeBrace */:
                case 93 /* closeBracket */:
                case 123 /* openBrace */:
                case 91 /* openBracket */:
                case 34 /* doubleQuote */:
                case 58 /* colon */:
                case 44 /* comma */:
                    return false;
            }
            return true;
        }
        function scanNextNonTrivia() {
            var result;
            do {
                result = scanNext();
            } while (result >= SyntaxKind.LineCommentTrivia && result <= SyntaxKind.Trivia);
            return result;
        }
        return {
            setPosition: setPosition,
            getPosition: function () { return pos; },
            scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
            getToken: function () { return token; },
            getTokenValue: function () { return value; },
            getTokenOffset: function () { return tokenOffset; },
            getTokenLength: function () { return pos - tokenOffset; },
            getTokenError: function () { return scanError; }
        };
    }
    exports.createScanner = createScanner;
    function isWhiteSpace(ch) {
        return ch === 32 /* space */ || ch === 9 /* tab */ || ch === 11 /* verticalTab */ || ch === 12 /* formFeed */ ||
            ch === 160 /* nonBreakingSpace */ || ch === 5760 /* ogham */ || ch >= 8192 /* enQuad */ && ch <= 8203 /* zeroWidthSpace */ ||
            ch === 8239 /* narrowNoBreakSpace */ || ch === 8287 /* mathematicalSpace */ || ch === 12288 /* ideographicSpace */ || ch === 65279 /* byteOrderMark */;
    }
    function isLineBreak(ch) {
        return ch === 10 /* lineFeed */ || ch === 13 /* carriageReturn */ || ch === 8232 /* lineSeparator */ || ch === 8233 /* paragraphSeparator */;
    }
    function isDigit(ch) {
        return ch >= 48 /* _0 */ && ch <= 57 /* _9 */;
    }
    var CharacterCodes;
    (function (CharacterCodes) {
        CharacterCodes[CharacterCodes["nullCharacter"] = 0] = "nullCharacter";
        CharacterCodes[CharacterCodes["maxAsciiCharacter"] = 127] = "maxAsciiCharacter";
        CharacterCodes[CharacterCodes["lineFeed"] = 10] = "lineFeed";
        CharacterCodes[CharacterCodes["carriageReturn"] = 13] = "carriageReturn";
        CharacterCodes[CharacterCodes["lineSeparator"] = 8232] = "lineSeparator";
        CharacterCodes[CharacterCodes["paragraphSeparator"] = 8233] = "paragraphSeparator";
        // REVIEW: do we need to support this?  The scanner doesn't, but our IText does.  This seems
        // like an odd disparity?  (Or maybe it's completely fine for them to be different).
        CharacterCodes[CharacterCodes["nextLine"] = 133] = "nextLine";
        // Unicode 3.0 space characters
        CharacterCodes[CharacterCodes["space"] = 32] = "space";
        CharacterCodes[CharacterCodes["nonBreakingSpace"] = 160] = "nonBreakingSpace";
        CharacterCodes[CharacterCodes["enQuad"] = 8192] = "enQuad";
        CharacterCodes[CharacterCodes["emQuad"] = 8193] = "emQuad";
        CharacterCodes[CharacterCodes["enSpace"] = 8194] = "enSpace";
        CharacterCodes[CharacterCodes["emSpace"] = 8195] = "emSpace";
        CharacterCodes[CharacterCodes["threePerEmSpace"] = 8196] = "threePerEmSpace";
        CharacterCodes[CharacterCodes["fourPerEmSpace"] = 8197] = "fourPerEmSpace";
        CharacterCodes[CharacterCodes["sixPerEmSpace"] = 8198] = "sixPerEmSpace";
        CharacterCodes[CharacterCodes["figureSpace"] = 8199] = "figureSpace";
        CharacterCodes[CharacterCodes["punctuationSpace"] = 8200] = "punctuationSpace";
        CharacterCodes[CharacterCodes["thinSpace"] = 8201] = "thinSpace";
        CharacterCodes[CharacterCodes["hairSpace"] = 8202] = "hairSpace";
        CharacterCodes[CharacterCodes["zeroWidthSpace"] = 8203] = "zeroWidthSpace";
        CharacterCodes[CharacterCodes["narrowNoBreakSpace"] = 8239] = "narrowNoBreakSpace";
        CharacterCodes[CharacterCodes["ideographicSpace"] = 12288] = "ideographicSpace";
        CharacterCodes[CharacterCodes["mathematicalSpace"] = 8287] = "mathematicalSpace";
        CharacterCodes[CharacterCodes["ogham"] = 5760] = "ogham";
        CharacterCodes[CharacterCodes["_"] = 95] = "_";
        CharacterCodes[CharacterCodes["$"] = 36] = "$";
        CharacterCodes[CharacterCodes["_0"] = 48] = "_0";
        CharacterCodes[CharacterCodes["_1"] = 49] = "_1";
        CharacterCodes[CharacterCodes["_2"] = 50] = "_2";
        CharacterCodes[CharacterCodes["_3"] = 51] = "_3";
        CharacterCodes[CharacterCodes["_4"] = 52] = "_4";
        CharacterCodes[CharacterCodes["_5"] = 53] = "_5";
        CharacterCodes[CharacterCodes["_6"] = 54] = "_6";
        CharacterCodes[CharacterCodes["_7"] = 55] = "_7";
        CharacterCodes[CharacterCodes["_8"] = 56] = "_8";
        CharacterCodes[CharacterCodes["_9"] = 57] = "_9";
        CharacterCodes[CharacterCodes["a"] = 97] = "a";
        CharacterCodes[CharacterCodes["b"] = 98] = "b";
        CharacterCodes[CharacterCodes["c"] = 99] = "c";
        CharacterCodes[CharacterCodes["d"] = 100] = "d";
        CharacterCodes[CharacterCodes["e"] = 101] = "e";
        CharacterCodes[CharacterCodes["f"] = 102] = "f";
        CharacterCodes[CharacterCodes["g"] = 103] = "g";
        CharacterCodes[CharacterCodes["h"] = 104] = "h";
        CharacterCodes[CharacterCodes["i"] = 105] = "i";
        CharacterCodes[CharacterCodes["j"] = 106] = "j";
        CharacterCodes[CharacterCodes["k"] = 107] = "k";
        CharacterCodes[CharacterCodes["l"] = 108] = "l";
        CharacterCodes[CharacterCodes["m"] = 109] = "m";
        CharacterCodes[CharacterCodes["n"] = 110] = "n";
        CharacterCodes[CharacterCodes["o"] = 111] = "o";
        CharacterCodes[CharacterCodes["p"] = 112] = "p";
        CharacterCodes[CharacterCodes["q"] = 113] = "q";
        CharacterCodes[CharacterCodes["r"] = 114] = "r";
        CharacterCodes[CharacterCodes["s"] = 115] = "s";
        CharacterCodes[CharacterCodes["t"] = 116] = "t";
        CharacterCodes[CharacterCodes["u"] = 117] = "u";
        CharacterCodes[CharacterCodes["v"] = 118] = "v";
        CharacterCodes[CharacterCodes["w"] = 119] = "w";
        CharacterCodes[CharacterCodes["x"] = 120] = "x";
        CharacterCodes[CharacterCodes["y"] = 121] = "y";
        CharacterCodes[CharacterCodes["z"] = 122] = "z";
        CharacterCodes[CharacterCodes["A"] = 65] = "A";
        CharacterCodes[CharacterCodes["B"] = 66] = "B";
        CharacterCodes[CharacterCodes["C"] = 67] = "C";
        CharacterCodes[CharacterCodes["D"] = 68] = "D";
        CharacterCodes[CharacterCodes["E"] = 69] = "E";
        CharacterCodes[CharacterCodes["F"] = 70] = "F";
        CharacterCodes[CharacterCodes["G"] = 71] = "G";
        CharacterCodes[CharacterCodes["H"] = 72] = "H";
        CharacterCodes[CharacterCodes["I"] = 73] = "I";
        CharacterCodes[CharacterCodes["J"] = 74] = "J";
        CharacterCodes[CharacterCodes["K"] = 75] = "K";
        CharacterCodes[CharacterCodes["L"] = 76] = "L";
        CharacterCodes[CharacterCodes["M"] = 77] = "M";
        CharacterCodes[CharacterCodes["N"] = 78] = "N";
        CharacterCodes[CharacterCodes["O"] = 79] = "O";
        CharacterCodes[CharacterCodes["P"] = 80] = "P";
        CharacterCodes[CharacterCodes["Q"] = 81] = "Q";
        CharacterCodes[CharacterCodes["R"] = 82] = "R";
        CharacterCodes[CharacterCodes["S"] = 83] = "S";
        CharacterCodes[CharacterCodes["T"] = 84] = "T";
        CharacterCodes[CharacterCodes["U"] = 85] = "U";
        CharacterCodes[CharacterCodes["V"] = 86] = "V";
        CharacterCodes[CharacterCodes["W"] = 87] = "W";
        CharacterCodes[CharacterCodes["X"] = 88] = "X";
        CharacterCodes[CharacterCodes["Y"] = 89] = "Y";
        CharacterCodes[CharacterCodes["Z"] = 90] = "Z";
        CharacterCodes[CharacterCodes["ampersand"] = 38] = "ampersand";
        CharacterCodes[CharacterCodes["asterisk"] = 42] = "asterisk";
        CharacterCodes[CharacterCodes["at"] = 64] = "at";
        CharacterCodes[CharacterCodes["backslash"] = 92] = "backslash";
        CharacterCodes[CharacterCodes["bar"] = 124] = "bar";
        CharacterCodes[CharacterCodes["caret"] = 94] = "caret";
        CharacterCodes[CharacterCodes["closeBrace"] = 125] = "closeBrace";
        CharacterCodes[CharacterCodes["closeBracket"] = 93] = "closeBracket";
        CharacterCodes[CharacterCodes["closeParen"] = 41] = "closeParen";
        CharacterCodes[CharacterCodes["colon"] = 58] = "colon";
        CharacterCodes[CharacterCodes["comma"] = 44] = "comma";
        CharacterCodes[CharacterCodes["dot"] = 46] = "dot";
        CharacterCodes[CharacterCodes["doubleQuote"] = 34] = "doubleQuote";
        CharacterCodes[CharacterCodes["equals"] = 61] = "equals";
        CharacterCodes[CharacterCodes["exclamation"] = 33] = "exclamation";
        CharacterCodes[CharacterCodes["greaterThan"] = 62] = "greaterThan";
        CharacterCodes[CharacterCodes["lessThan"] = 60] = "lessThan";
        CharacterCodes[CharacterCodes["minus"] = 45] = "minus";
        CharacterCodes[CharacterCodes["openBrace"] = 123] = "openBrace";
        CharacterCodes[CharacterCodes["openBracket"] = 91] = "openBracket";
        CharacterCodes[CharacterCodes["openParen"] = 40] = "openParen";
        CharacterCodes[CharacterCodes["percent"] = 37] = "percent";
        CharacterCodes[CharacterCodes["plus"] = 43] = "plus";
        CharacterCodes[CharacterCodes["question"] = 63] = "question";
        CharacterCodes[CharacterCodes["semicolon"] = 59] = "semicolon";
        CharacterCodes[CharacterCodes["singleQuote"] = 39] = "singleQuote";
        CharacterCodes[CharacterCodes["slash"] = 47] = "slash";
        CharacterCodes[CharacterCodes["tilde"] = 126] = "tilde";
        CharacterCodes[CharacterCodes["backspace"] = 8] = "backspace";
        CharacterCodes[CharacterCodes["formFeed"] = 12] = "formFeed";
        CharacterCodes[CharacterCodes["byteOrderMark"] = 65279] = "byteOrderMark";
        CharacterCodes[CharacterCodes["tab"] = 9] = "tab";
        CharacterCodes[CharacterCodes["verticalTab"] = 11] = "verticalTab";
    })(CharacterCodes || (CharacterCodes = {}));
    /**
     * Takes JSON with JavaScript-style comments and remove
     * them. Optionally replaces every none-newline character
     * of comments with a replaceCharacter
     */
    function stripComments(text, replaceCh) {
        var _scanner = createScanner(text), parts = [], kind, offset = 0, pos;
        do {
            pos = _scanner.getPosition();
            kind = _scanner.scan();
            switch (kind) {
                case SyntaxKind.LineCommentTrivia:
                case SyntaxKind.BlockCommentTrivia:
                case SyntaxKind.EOF:
                    if (offset !== pos) {
                        parts.push(text.substring(offset, pos));
                    }
                    if (replaceCh !== void 0) {
                        parts.push(_scanner.getTokenValue().replace(/[^\r\n]/g, replaceCh));
                    }
                    offset = _scanner.getPosition();
                    break;
            }
        } while (kind !== SyntaxKind.EOF);
        return parts.join('');
    }
    exports.stripComments = stripComments;
    var ParseErrorCode;
    (function (ParseErrorCode) {
        ParseErrorCode[ParseErrorCode["InvalidSymbol"] = 0] = "InvalidSymbol";
        ParseErrorCode[ParseErrorCode["InvalidNumberFormat"] = 1] = "InvalidNumberFormat";
        ParseErrorCode[ParseErrorCode["PropertyNameExpected"] = 2] = "PropertyNameExpected";
        ParseErrorCode[ParseErrorCode["ValueExpected"] = 3] = "ValueExpected";
        ParseErrorCode[ParseErrorCode["ColonExpected"] = 4] = "ColonExpected";
        ParseErrorCode[ParseErrorCode["CommaExpected"] = 5] = "CommaExpected";
        ParseErrorCode[ParseErrorCode["CloseBraceExpected"] = 6] = "CloseBraceExpected";
        ParseErrorCode[ParseErrorCode["CloseBracketExpected"] = 7] = "CloseBracketExpected";
        ParseErrorCode[ParseErrorCode["EndOfFileExpected"] = 8] = "EndOfFileExpected";
    })(ParseErrorCode = exports.ParseErrorCode || (exports.ParseErrorCode = {}));
    function getParseErrorMessage(errorCode) {
        switch (errorCode) {
            case ParseErrorCode.InvalidSymbol: return nls_1.localize(0, null);
            case ParseErrorCode.InvalidNumberFormat: return nls_1.localize(1, null);
            case ParseErrorCode.PropertyNameExpected: return nls_1.localize(2, null);
            case ParseErrorCode.ValueExpected: return nls_1.localize(3, null);
            case ParseErrorCode.ColonExpected: return nls_1.localize(4, null);
            case ParseErrorCode.CommaExpected: return nls_1.localize(5, null);
            case ParseErrorCode.CloseBraceExpected: return nls_1.localize(6, null);
            case ParseErrorCode.CloseBracketExpected: return nls_1.localize(7, null);
            case ParseErrorCode.EndOfFileExpected: return nls_1.localize(8, null);
            default:
                return '';
        }
    }
    exports.getParseErrorMessage = getParseErrorMessage;
    function getLiteralNodeType(value) {
        switch (typeof value) {
            case 'boolean': return 'boolean';
            case 'number': return 'number';
            case 'string': return 'string';
            default: return 'null';
        }
    }
    /**
     * For a given offset, evaluate the location in the JSON document. Each segment in the location path is either a property name or an array index.
     */
    function getLocation(text, position) {
        var segments = []; // strings or numbers
        var earlyReturnException = new Object();
        var previousNode = void 0;
        var previousNodeInst = {
            value: void 0,
            offset: void 0,
            length: void 0,
            type: void 0
        };
        var isAtPropertyKey = false;
        function setPreviousNode(value, offset, length, type) {
            previousNodeInst.value = value;
            previousNodeInst.offset = offset;
            previousNodeInst.length = length;
            previousNodeInst.type = type;
            previousNodeInst.columnOffset = void 0;
            previousNode = previousNodeInst;
        }
        try {
            visit(text, {
                onObjectBegin: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = void 0;
                    isAtPropertyKey = position > offset;
                    segments.push(''); // push a placeholder (will be replaced)
                },
                onObjectProperty: function (name, offset, length) {
                    if (position < offset) {
                        throw earlyReturnException;
                    }
                    setPreviousNode(name, offset, length, 'property');
                    segments[segments.length - 1] = name;
                    if (position <= offset + length) {
                        throw earlyReturnException;
                    }
                },
                onObjectEnd: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = void 0;
                    segments.pop();
                },
                onArrayBegin: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = void 0;
                    segments.push(0);
                },
                onArrayEnd: function (offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    previousNode = void 0;
                    segments.pop();
                },
                onLiteralValue: function (value, offset, length) {
                    if (position < offset) {
                        throw earlyReturnException;
                    }
                    setPreviousNode(value, offset, length, getLiteralNodeType(value));
                    if (position <= offset + length) {
                        throw earlyReturnException;
                    }
                },
                onSeparator: function (sep, offset, length) {
                    if (position <= offset) {
                        throw earlyReturnException;
                    }
                    if (sep === ':' && previousNode.type === 'property') {
                        previousNode.columnOffset = offset;
                        isAtPropertyKey = false;
                        previousNode = void 0;
                    }
                    else if (sep === ',') {
                        var last = segments[segments.length - 1];
                        if (typeof last === 'number') {
                            segments[segments.length - 1] = last + 1;
                        }
                        else {
                            isAtPropertyKey = true;
                            segments[segments.length - 1] = '';
                        }
                        previousNode = void 0;
                    }
                }
            });
        }
        catch (e) {
            if (e !== earlyReturnException) {
                throw e;
            }
        }
        return {
            path: segments,
            previousNode: previousNode,
            isAtPropertyKey: isAtPropertyKey,
            matches: function (pattern) {
                var k = 0;
                for (var i = 0; k < pattern.length && i < segments.length; i++) {
                    if (pattern[k] === segments[i] || pattern[k] === '*') {
                        k++;
                    }
                    else if (pattern[k] !== '**') {
                        return false;
                    }
                }
                return k === pattern.length;
            }
        };
    }
    exports.getLocation = getLocation;
    /**
     * Parses the given text and returns the object the JSON content represents. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     * Therefore always check the errors list to find out if the input was valid.
     */
    function parse(text, errors, options) {
        if (errors === void 0) { errors = []; }
        var currentProperty = null;
        var currentParent = [];
        var previousParents = [];
        function onValue(value) {
            if (Array.isArray(currentParent)) {
                currentParent.push(value);
            }
            else if (currentProperty) {
                currentParent[currentProperty] = value;
            }
        }
        var visitor = {
            onObjectBegin: function () {
                var object = {};
                onValue(object);
                previousParents.push(currentParent);
                currentParent = object;
                currentProperty = null;
            },
            onObjectProperty: function (name) {
                currentProperty = name;
            },
            onObjectEnd: function () {
                currentParent = previousParents.pop();
            },
            onArrayBegin: function () {
                var array = [];
                onValue(array);
                previousParents.push(currentParent);
                currentParent = array;
                currentProperty = null;
            },
            onArrayEnd: function () {
                currentParent = previousParents.pop();
            },
            onLiteralValue: onValue,
            onError: function (error) {
                errors.push({ error: error });
            }
        };
        visit(text, visitor, options);
        return currentParent[0];
    }
    exports.parse = parse;
    /**
     * Parses the given text and returns a tree representation the JSON content. On invalid input, the parser tries to be as fault tolerant as possible, but still return a result.
     */
    function parseTree(text, errors, options) {
        if (errors === void 0) { errors = []; }
        var currentParent = { type: 'array', offset: -1, length: -1, children: [] }; // artificial root
        function ensurePropertyComplete(endOffset) {
            if (currentParent.type === 'property') {
                currentParent.length = endOffset - currentParent.offset;
                currentParent = currentParent.parent;
            }
        }
        function onValue(valueNode) {
            currentParent.children.push(valueNode);
            return valueNode;
        }
        var visitor = {
            onObjectBegin: function (offset) {
                currentParent = onValue({ type: 'object', offset: offset, length: -1, parent: currentParent, children: [] });
            },
            onObjectProperty: function (name, offset, length) {
                currentParent = onValue({ type: 'property', offset: offset, length: -1, parent: currentParent, children: [] });
                currentParent.children.push({ type: 'string', value: name, offset: offset, length: length, parent: currentParent });
            },
            onObjectEnd: function (offset, length) {
                currentParent.length = offset + length - currentParent.offset;
                currentParent = currentParent.parent;
                ensurePropertyComplete(offset + length);
            },
            onArrayBegin: function (offset, length) {
                currentParent = onValue({ type: 'array', offset: offset, length: -1, parent: currentParent, children: [] });
            },
            onArrayEnd: function (offset, length) {
                currentParent.length = offset + length - currentParent.offset;
                currentParent = currentParent.parent;
                ensurePropertyComplete(offset + length);
            },
            onLiteralValue: function (value, offset, length) {
                onValue({ type: getLiteralNodeType(value), offset: offset, length: length, parent: currentParent, value: value });
                ensurePropertyComplete(offset + length);
            },
            onSeparator: function (sep, offset, length) {
                if (currentParent.type === 'property') {
                    if (sep === ':') {
                        currentParent.columnOffset = offset;
                    }
                    else if (sep === ',') {
                        ensurePropertyComplete(offset);
                    }
                }
            },
            onError: function (error) {
                errors.push({ error: error });
            }
        };
        visit(text, visitor, options);
        var result = currentParent.children[0];
        if (result) {
            delete result.parent;
        }
        return result;
    }
    exports.parseTree = parseTree;
    function findNodeAtLocation(root, path) {
        if (!root) {
            return void 0;
        }
        var node = root;
        for (var _i = 0, path_1 = path; _i < path_1.length; _i++) {
            var segment = path_1[_i];
            if (typeof segment === 'string') {
                if (node.type !== 'object') {
                    return void 0;
                }
                var found = false;
                for (var _a = 0, _b = node.children; _a < _b.length; _a++) {
                    var propertyNode = _b[_a];
                    if (propertyNode.children[0].value === segment) {
                        node = propertyNode.children[1];
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    return void 0;
                }
            }
            else {
                var index = segment;
                if (node.type !== 'array' || index < 0 || index >= node.children.length) {
                    return void 0;
                }
                node = node.children[index];
            }
        }
        return node;
    }
    exports.findNodeAtLocation = findNodeAtLocation;
    function getNodeValue(node) {
        if (node.type === 'array') {
            return node.children.map(getNodeValue);
        }
        else if (node.type === 'object') {
            var obj = {};
            for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
                var prop = _a[_i];
                obj[prop.children[0].value] = getNodeValue(prop.children[1]);
            }
            return obj;
        }
        return node.value;
    }
    exports.getNodeValue = getNodeValue;
    /**
     * Parses the given text and invokes the visitor functions for each object, array and literal reached.
     */
    function visit(text, visitor, options) {
        var _scanner = createScanner(text, false);
        function toNoArgVisit(visitFunction) {
            return visitFunction ? function () { return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength()); } : function () { return true; };
        }
        function toOneArgVisit(visitFunction) {
            return visitFunction ? function (arg) { return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength()); } : function () { return true; };
        }
        var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onError = toOneArgVisit(visitor.onError);
        var disallowComments = options && options.disallowComments;
        var allowTrailingComma = options && options.allowTrailingComma;
        function scanNext() {
            while (true) {
                var token = _scanner.scan();
                switch (token) {
                    case SyntaxKind.LineCommentTrivia:
                    case SyntaxKind.BlockCommentTrivia:
                        if (disallowComments) {
                            handleError(ParseErrorCode.InvalidSymbol);
                        }
                        break;
                    case SyntaxKind.Unknown:
                        handleError(ParseErrorCode.InvalidSymbol);
                        break;
                    case SyntaxKind.Trivia:
                    case SyntaxKind.LineBreakTrivia:
                        break;
                    default:
                        return token;
                }
            }
        }
        function handleError(error, skipUntilAfter, skipUntil) {
            if (skipUntilAfter === void 0) { skipUntilAfter = []; }
            if (skipUntil === void 0) { skipUntil = []; }
            onError(error);
            if (skipUntilAfter.length + skipUntil.length > 0) {
                var token = _scanner.getToken();
                while (token !== SyntaxKind.EOF) {
                    if (skipUntilAfter.indexOf(token) !== -1) {
                        scanNext();
                        break;
                    }
                    else if (skipUntil.indexOf(token) !== -1) {
                        break;
                    }
                    token = scanNext();
                }
            }
        }
        function parseString(isValue) {
            var value = _scanner.getTokenValue();
            if (isValue) {
                onLiteralValue(value);
            }
            else {
                onObjectProperty(value);
            }
            scanNext();
            return true;
        }
        function parseLiteral() {
            switch (_scanner.getToken()) {
                case SyntaxKind.NumericLiteral:
                    var value = 0;
                    try {
                        value = JSON.parse(_scanner.getTokenValue());
                        if (typeof value !== 'number') {
                            handleError(ParseErrorCode.InvalidNumberFormat);
                            value = 0;
                        }
                    }
                    catch (e) {
                        handleError(ParseErrorCode.InvalidNumberFormat);
                    }
                    onLiteralValue(value);
                    break;
                case SyntaxKind.NullKeyword:
                    onLiteralValue(null);
                    break;
                case SyntaxKind.TrueKeyword:
                    onLiteralValue(true);
                    break;
                case SyntaxKind.FalseKeyword:
                    onLiteralValue(false);
                    break;
                default:
                    return false;
            }
            scanNext();
            return true;
        }
        function parseProperty() {
            if (_scanner.getToken() !== SyntaxKind.StringLiteral) {
                handleError(ParseErrorCode.PropertyNameExpected, [], [SyntaxKind.CloseBraceToken, SyntaxKind.CommaToken]);
                return false;
            }
            parseString(false);
            if (_scanner.getToken() === SyntaxKind.ColonToken) {
                onSeparator(':');
                scanNext(); // consume colon
                if (!parseValue()) {
                    handleError(ParseErrorCode.ValueExpected, [], [SyntaxKind.CloseBraceToken, SyntaxKind.CommaToken]);
                }
            }
            else {
                handleError(ParseErrorCode.ColonExpected, [], [SyntaxKind.CloseBraceToken, SyntaxKind.CommaToken]);
            }
            return true;
        }
        function parseObject() {
            onObjectBegin();
            scanNext(); // consume open brace
            var needsComma = false;
            while (_scanner.getToken() !== SyntaxKind.CloseBraceToken && _scanner.getToken() !== SyntaxKind.EOF) {
                if (_scanner.getToken() === SyntaxKind.CommaToken) {
                    if (!needsComma) {
                        handleError(ParseErrorCode.ValueExpected, [], []);
                    }
                    onSeparator(',');
                    scanNext(); // consume comma
                    if (_scanner.getToken() === SyntaxKind.CloseBraceToken && allowTrailingComma) {
                        break;
                    }
                }
                else if (needsComma) {
                    handleError(ParseErrorCode.CommaExpected, [], []);
                }
                if (!parseProperty()) {
                    handleError(ParseErrorCode.ValueExpected, [], [SyntaxKind.CloseBraceToken, SyntaxKind.CommaToken]);
                }
                needsComma = true;
            }
            onObjectEnd();
            if (_scanner.getToken() !== SyntaxKind.CloseBraceToken) {
                handleError(ParseErrorCode.CloseBraceExpected, [SyntaxKind.CloseBraceToken], []);
            }
            else {
                scanNext(); // consume close brace
            }
            return true;
        }
        function parseArray() {
            onArrayBegin();
            scanNext(); // consume open bracket
            var needsComma = false;
            while (_scanner.getToken() !== SyntaxKind.CloseBracketToken && _scanner.getToken() !== SyntaxKind.EOF) {
                if (_scanner.getToken() === SyntaxKind.CommaToken) {
                    if (!needsComma) {
                        handleError(ParseErrorCode.ValueExpected, [], []);
                    }
                    onSeparator(',');
                    scanNext(); // consume comma
                }
                else if (needsComma) {
                    handleError(ParseErrorCode.CommaExpected, [], []);
                }
                if (!parseValue()) {
                    handleError(ParseErrorCode.ValueExpected, [], [SyntaxKind.CloseBracketToken, SyntaxKind.CommaToken]);
                }
                needsComma = true;
            }
            onArrayEnd();
            if (_scanner.getToken() !== SyntaxKind.CloseBracketToken) {
                handleError(ParseErrorCode.CloseBracketExpected, [SyntaxKind.CloseBracketToken], []);
            }
            else {
                scanNext(); // consume close bracket
            }
            return true;
        }
        function parseValue() {
            switch (_scanner.getToken()) {
                case SyntaxKind.OpenBracketToken:
                    return parseArray();
                case SyntaxKind.OpenBraceToken:
                    return parseObject();
                case SyntaxKind.StringLiteral:
                    return parseString(true);
                default:
                    return parseLiteral();
            }
        }
        scanNext();
        if (_scanner.getToken() === SyntaxKind.EOF) {
            return true;
        }
        if (!parseValue()) {
            handleError(ParseErrorCode.ValueExpected, [], []);
            return false;
        }
        if (_scanner.getToken() !== SyntaxKind.EOF) {
            handleError(ParseErrorCode.EndOfFileExpected, [], []);
        }
        return true;
    }
    exports.visit = visit;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[57/*vs/base/node/config*/], __M([1/*require*/,0/*exports*/,28/*fs*/,7/*path*/,8/*vs/base/common/objects*/,9/*vs/base/common/lifecycle*/,4/*vs/base/common/event*/,63/*vs/base/common/json*/]), function (require, exports, fs, path, objects, lifecycle_1, event_1, json) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * A simple helper to watch a configured file for changes and process its contents as JSON object.
     * Supports:
     * - comments in JSON files and errors
     * - symlinks for the config file itself
     * - delayed processing of changes to accomodate for lots of changes
     * - configurable defaults
     */
    var ConfigWatcher = (function () {
        function ConfigWatcher(_path, options) {
            if (options === void 0) { options = { changeBufferDelay: 0, defaultConfig: Object.create(null) }; }
            this._path = _path;
            this.options = options;
            this.disposables = [];
            this._onDidUpdateConfiguration = new event_1.Emitter();
            this.disposables.push(this._onDidUpdateConfiguration);
            this.registerWatcher();
            this.initAsync();
        }
        Object.defineProperty(ConfigWatcher.prototype, "path", {
            get: function () {
                return this._path;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigWatcher.prototype, "hasParseErrors", {
            get: function () {
                return this.parseErrors && this.parseErrors.length > 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigWatcher.prototype, "onDidUpdateConfiguration", {
            get: function () {
                return this._onDidUpdateConfiguration.event;
            },
            enumerable: true,
            configurable: true
        });
        ConfigWatcher.prototype.initAsync = function () {
            var _this = this;
            this.loadAsync(function (config) {
                if (!_this.loaded) {
                    _this.updateCache(config); // prevent race condition if config was loaded sync already
                }
            });
        };
        ConfigWatcher.prototype.updateCache = function (value) {
            this.cache = value;
            this.loaded = true;
        };
        ConfigWatcher.prototype.loadSync = function () {
            try {
                return this.parse(fs.readFileSync(this._path).toString());
            }
            catch (error) {
                return this.options.defaultConfig;
            }
        };
        ConfigWatcher.prototype.loadAsync = function (callback) {
            var _this = this;
            fs.readFile(this._path, function (error, raw) {
                if (error) {
                    return callback(_this.options.defaultConfig);
                }
                return callback(_this.parse(raw.toString()));
            });
        };
        ConfigWatcher.prototype.parse = function (raw) {
            var res;
            try {
                this.parseErrors = [];
                res = this.options.parse ? this.options.parse(raw, this.parseErrors) : json.parse(raw, this.parseErrors);
            }
            catch (error) {
                // Ignore parsing errors
            }
            return res || this.options.defaultConfig;
        };
        ConfigWatcher.prototype.registerWatcher = function () {
            var _this = this;
            // Watch the parent of the path so that we detect ADD and DELETES
            var parentFolder = path.dirname(this._path);
            this.watch(parentFolder);
            // Check if the path is a symlink and watch its target if so
            fs.lstat(this._path, function (err, stat) {
                if (err || stat.isDirectory()) {
                    return; // path is not a valid file
                }
                // We found a symlink
                if (stat.isSymbolicLink()) {
                    fs.readlink(_this._path, function (err, realPath) {
                        if (err) {
                            return; // path is not a valid symlink
                        }
                        _this.watch(realPath);
                    });
                }
            });
        };
        ConfigWatcher.prototype.watch = function (path) {
            var _this = this;
            if (this.disposed) {
                return; // avoid watchers that will never get disposed by checking for being disposed
            }
            try {
                var watcher_1 = fs.watch(path);
                watcher_1.on('change', function () { return _this.onConfigFileChange(); });
                this.disposables.push(lifecycle_1.toDisposable(function () {
                    watcher_1.removeAllListeners();
                    watcher_1.close();
                }));
            }
            catch (error) {
                fs.exists(path, function (exists) {
                    if (exists) {
                        console.warn("Failed to watch " + path + " for configuration changes (" + error.toString() + ")");
                    }
                });
            }
        };
        ConfigWatcher.prototype.onConfigFileChange = function () {
            var _this = this;
            if (this.timeoutHandle) {
                global.clearTimeout(this.timeoutHandle);
                this.timeoutHandle = null;
            }
            // we can get multiple change events for one change, so we buffer through a timeout
            this.timeoutHandle = global.setTimeout(function () { return _this.reload(); }, this.options.changeBufferDelay);
        };
        ConfigWatcher.prototype.reload = function (callback) {
            var _this = this;
            this.loadAsync(function (currentConfig) {
                if (!objects.equals(currentConfig, _this.cache)) {
                    _this.updateCache(currentConfig);
                    _this._onDidUpdateConfiguration.fire({ config: _this.cache });
                }
                if (callback) {
                    return callback(currentConfig);
                }
            });
        };
        ConfigWatcher.prototype.getConfig = function () {
            this.ensureLoaded();
            return this.cache;
        };
        ConfigWatcher.prototype.getValue = function (key, fallback) {
            this.ensureLoaded();
            if (!key) {
                return fallback;
            }
            var value = this.cache ? this.cache[key] : void 0;
            return typeof value !== 'undefined' ? value : fallback;
        };
        ConfigWatcher.prototype.ensureLoaded = function () {
            if (!this.loaded) {
                this.updateCache(this.loadSync());
            }
        };
        ConfigWatcher.prototype.dispose = function () {
            this.disposed = true;
            this.disposables = lifecycle_1.dispose(this.disposables);
        };
        return ConfigWatcher;
    }());
    exports.ConfigWatcher = ConfigWatcher;
});

define(__m[123/*vs/nls!vs/base/common/severity*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/base/common/severity", data); });
define(__m[128/*vs/base/common/severity*/], __M([1/*require*/,0/*exports*/,123/*vs/nls!vs/base/common/severity*/,11/*vs/base/common/strings*/]), function (require, exports, nls, strings) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var Severity;
    (function (Severity) {
        Severity[Severity["Ignore"] = 0] = "Ignore";
        Severity[Severity["Info"] = 1] = "Info";
        Severity[Severity["Warning"] = 2] = "Warning";
        Severity[Severity["Error"] = 3] = "Error";
    })(Severity || (Severity = {}));
    (function (Severity) {
        var _error = 'error', _warning = 'warning', _warn = 'warn', _info = 'info';
        var _displayStrings = Object.create(null);
        _displayStrings[Severity.Error] = nls.localize(0, null);
        _displayStrings[Severity.Warning] = nls.localize(1, null);
        _displayStrings[Severity.Info] = nls.localize(2, null);
        /**
         * Parses 'error', 'warning', 'warn', 'info' in call casings
         * and falls back to ignore.
         */
        function fromValue(value) {
            if (!value) {
                return Severity.Ignore;
            }
            if (strings.equalsIgnoreCase(_error, value)) {
                return Severity.Error;
            }
            if (strings.equalsIgnoreCase(_warning, value) || strings.equalsIgnoreCase(_warn, value)) {
                return Severity.Warning;
            }
            if (strings.equalsIgnoreCase(_info, value)) {
                return Severity.Info;
            }
            return Severity.Ignore;
        }
        Severity.fromValue = fromValue;
        function toString(value) {
            return _displayStrings[value] || strings.empty;
        }
        Severity.toString = toString;
        function compare(a, b) {
            return b - a;
        }
        Severity.compare = compare;
    })(Severity || (Severity = {}));
    exports.default = Severity;
});

define(__m[64/*vs/nls!vs/code/electron-main/menus*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/code/electron-main/menus", data); });
define(__m[65/*vs/nls!vs/code/electron-main/window*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/code/electron-main/window", data); });
define(__m[66/*vs/nls!vs/code/electron-main/windows*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/code/electron-main/windows", data); });
define(__m[67/*vs/nls!vs/platform/configuration/common/configurationRegistry*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/platform/configuration/common/configurationRegistry", data); });
define(__m[68/*vs/nls!vs/platform/environment/node/argv*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/platform/environment/node/argv", data); });
define(__m[69/*vs/nls!vs/platform/extensions/common/extensionsRegistry*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/platform/extensions/common/extensionsRegistry", data); });
define(__m[70/*vs/nls!vs/platform/request/node/request*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/platform/request/node/request", data); });
define(__m[71/*vs/nls!vs/platform/telemetry/common/telemetryService*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/platform/telemetry/common/telemetryService", data); });
define(__m[72/*vs/nls!vs/workbench/parts/git/electron-main/askpassService*/], __M([15/*vs/nls*/,14/*vs/nls!vs/code/electron-main/main*/]), function(nls, data) { return nls.create("vs/workbench/parts/git/electron-main/askpassService", data); });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[73/*vs/platform/backup/common/backupIpc*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackupChannel = (function () {
        function BackupChannel(service) {
            this.service = service;
        }
        BackupChannel.prototype.call = function (command, arg) {
            switch (command) {
                case 'getBackupPath': return this.service.getBackupPath(arg);
            }
            return undefined;
        };
        return BackupChannel;
    }());
    exports.BackupChannel = BackupChannel;
    var BackupChannelClient = (function () {
        function BackupChannelClient(channel) {
            this.channel = channel;
        }
        BackupChannelClient.prototype.getBackupPath = function (windowId) {
            return this.channel.call('getBackupPath', windowId);
        };
        return BackupChannelClient;
    }());
    exports.BackupChannelClient = BackupChannelClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[52/*vs/platform/environment/node/argv*/], __M([1/*require*/,0/*exports*/,26/*os*/,133/*minimist*/,121/*assert*/,20/*vs/base/common/arrays*/,68/*vs/nls!vs/platform/environment/node/argv*/]), function (require, exports, os, minimist, assert, arrays_1, nls_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var options = {
        string: [
            'locale',
            'user-data-dir',
            'extensions-dir',
            'extensionDevelopmentPath',
            'extensionTestsPath',
            'install-extension',
            'uninstall-extension',
            'debugBrkPluginHost',
            'debugPluginHost',
            'open-url',
            'prof-startup-timers',
            'enable-proposed-api'
        ],
        boolean: [
            'help',
            'version',
            'wait',
            'diff',
            'goto',
            'new-window',
            'unity-launch',
            'reuse-window',
            'performance',
            'prof-startup',
            'verbose',
            'logExtensionHostCommunication',
            'disable-extensions',
            'list-extensions',
            'show-versions',
            'nolazy'
        ],
        alias: {
            help: 'h',
            version: 'v',
            wait: 'w',
            diff: 'd',
            goto: 'g',
            'new-window': 'n',
            'reuse-window': 'r',
            performance: 'p',
            'disable-extensions': 'disableExtensions',
            'extensions-dir': 'extensionHomePath'
        }
    };
    function validate(args) {
        if (args.goto) {
            args._.forEach(function (arg) { return assert(/^(\w:)?[^:]+(:\d*){0,2}$/.test(arg), nls_1.localize(0, null)); });
        }
        return args;
    }
    function stripAppPath(argv) {
        var index = arrays_1.firstIndex(argv, function (a) { return !/^-/.test(a); });
        if (index > -1) {
            return argv.slice(0, index).concat(argv.slice(index + 1));
        }
        return undefined;
    }
    /**
     * Use this to parse raw code process.argv such as: `Electron . --verbose --wait`
     */
    function parseMainProcessArgv(processArgv) {
        var args = processArgv.slice(1);
        // If dev, remove the first non-option argument: it's the app location
        if (process.env['VSCODE_DEV']) {
            args = stripAppPath(args);
        }
        return validate(parseArgs(args));
    }
    exports.parseMainProcessArgv = parseMainProcessArgv;
    /**
     * Use this to parse raw code CLI process.argv such as: `Electron cli.js . --verbose --wait`
     */
    function parseCLIProcessArgv(processArgv) {
        var args = processArgv.slice(2);
        if (process.env['VSCODE_DEV']) {
            args = stripAppPath(args);
        }
        return validate(parseArgs(args));
    }
    exports.parseCLIProcessArgv = parseCLIProcessArgv;
    /**
     * Use this to parse code arguments such as `--verbose --wait`
     */
    function parseArgs(args) {
        return minimist(args, options);
    }
    exports.parseArgs = parseArgs;
    exports.optionsHelp = {
        '-d, --diff': nls_1.localize(1, null),
        '-g, --goto': nls_1.localize(2, null),
        '--locale <locale>': nls_1.localize(3, null),
        '-n, --new-window': nls_1.localize(4, null),
        '-p, --performance': nls_1.localize(5, null),
        '--prof-startup': nls_1.localize(6, null),
        '-r, --reuse-window': nls_1.localize(7, null),
        '--user-data-dir <dir>': nls_1.localize(8, null),
        '--verbose': nls_1.localize(9, null),
        '-w, --wait': nls_1.localize(10, null),
        '--extensions-dir <dir>': nls_1.localize(11, null),
        '--list-extensions': nls_1.localize(12, null),
        '--show-versions': nls_1.localize(13, null),
        '--install-extension <ext>': nls_1.localize(14, null),
        '--uninstall-extension <ext>': nls_1.localize(15, null),
        '--enable-proposed-api <ext>': nls_1.localize(16, null),
        '--disable-extensions': nls_1.localize(17, null),
        '--disable-gpu': nls_1.localize(18, null),
        '-v, --version': nls_1.localize(19, null),
        '-h, --help': nls_1.localize(20, null)
    };
    function formatOptions(options, columns) {
        var keys = Object.keys(options);
        var argLength = Math.max.apply(null, keys.map(function (k) { return k.length; })) + 2 /*left padding*/ + 1 /*right padding*/;
        if (columns - argLength < 25) {
            // Use a condensed version on narrow terminals
            return keys.reduce(function (r, key) { return r.concat(["  " + key, "      " + options[key]]); }, []).join('\n');
        }
        var descriptionColumns = columns - argLength - 1;
        var result = '';
        keys.forEach(function (k) {
            var wrappedDescription = wrapText(options[k], descriptionColumns);
            var keyPadding = ' '.repeat(argLength - k.length - 2 /*left padding*/);
            if (result.length > 0) {
                result += '\n';
            }
            result += '  ' + k + keyPadding + wrappedDescription[0];
            for (var i = 1; i < wrappedDescription.length; i++) {
                result += '\n' + ' '.repeat(argLength) + wrappedDescription[i];
            }
        });
        return result;
    }
    exports.formatOptions = formatOptions;
    function wrapText(text, columns) {
        var lines = [];
        while (text.length) {
            var index = text.length < columns ? text.length : text.lastIndexOf(' ', columns);
            var line = text.slice(0, index).trim();
            text = text.slice(index);
            lines.push(line);
        }
        return lines;
    }
    function buildHelpMessage(fullName, name, version) {
        var columns = process.stdout.isTTY ? process.stdout.columns : 80;
        var executable = "" + name + (os.platform() === 'win32' ? '.exe' : '');
        return fullName + " " + version + "\n\n" + nls_1.localize(21, null) + ": " + executable + " [" + nls_1.localize(22, null) + "] [" + nls_1.localize(23, null) + "...]\n\n" + nls_1.localize(24, null) + ":\n" + formatOptions(exports.optionsHelp, columns);
    }
    exports.buildHelpMessage = buildHelpMessage;
});











define(__m[50/*vs/platform/instantiation/common/descriptors*/], __M([1/*require*/,0/*exports*/,17/*vs/base/common/errors*/]), function (require, exports, errors_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var AbstractDescriptor = (function () {
        function AbstractDescriptor(_staticArguments) {
            this._staticArguments = _staticArguments;
            // empty
        }
        AbstractDescriptor.prototype.appendStaticArguments = function (more) {
            this._staticArguments.push.apply(this._staticArguments, more);
        };
        AbstractDescriptor.prototype.staticArguments = function (nth) {
            if (isNaN(nth)) {
                return this._staticArguments.slice(0);
            }
            else {
                return this._staticArguments[nth];
            }
        };
        AbstractDescriptor.prototype._validate = function (type) {
            if (!type) {
                throw errors_1.illegalArgument('can not be falsy');
            }
        };
        return AbstractDescriptor;
    }());
    exports.AbstractDescriptor = AbstractDescriptor;
    var SyncDescriptor = (function (_super) {
        __extends(SyncDescriptor, _super);
        function SyncDescriptor(_ctor) {
            var staticArguments = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                staticArguments[_i - 1] = arguments[_i];
            }
            var _this = _super.call(this, staticArguments) || this;
            _this._ctor = _ctor;
            return _this;
        }
        Object.defineProperty(SyncDescriptor.prototype, "ctor", {
            get: function () {
                return this._ctor;
            },
            enumerable: true,
            configurable: true
        });
        SyncDescriptor.prototype.bind = function () {
            var moreStaticArguments = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                moreStaticArguments[_i] = arguments[_i];
            }
            var allArgs = [];
            allArgs = allArgs.concat(this.staticArguments());
            allArgs = allArgs.concat(moreStaticArguments);
            return new (SyncDescriptor.bind.apply(SyncDescriptor, [void 0, this._ctor].concat(allArgs)))();
        };
        return SyncDescriptor;
    }(AbstractDescriptor));
    exports.SyncDescriptor = SyncDescriptor;
    exports.createSyncDescriptor = function (ctor) {
        var staticArguments = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            staticArguments[_i - 1] = arguments[_i];
        }
        return new (SyncDescriptor.bind.apply(SyncDescriptor, [void 0, ctor].concat(staticArguments)))();
    };
    var AsyncDescriptor = (function (_super) {
        __extends(AsyncDescriptor, _super);
        function AsyncDescriptor(_moduleName, _ctorName) {
            var staticArguments = [];
            for (var _i = 2; _i < arguments.length; _i++) {
                staticArguments[_i - 2] = arguments[_i];
            }
            var _this = _super.call(this, staticArguments) || this;
            _this._moduleName = _moduleName;
            _this._ctorName = _ctorName;
            if (typeof _moduleName !== 'string') {
                throw new Error('Invalid AsyncDescriptor arguments, expected `moduleName` to be a string!');
            }
            return _this;
        }
        AsyncDescriptor.create = function (moduleName, ctorName) {
            return new AsyncDescriptor(moduleName, ctorName);
        };
        Object.defineProperty(AsyncDescriptor.prototype, "moduleName", {
            get: function () {
                return this._moduleName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AsyncDescriptor.prototype, "ctorName", {
            get: function () {
                return this._ctorName;
            },
            enumerable: true,
            configurable: true
        });
        AsyncDescriptor.prototype.bind = function () {
            var moreStaticArguments = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                moreStaticArguments[_i] = arguments[_i];
            }
            var allArgs = [];
            allArgs = allArgs.concat(this.staticArguments());
            allArgs = allArgs.concat(moreStaticArguments);
            return new (AsyncDescriptor.bind.apply(AsyncDescriptor, [void 0, this.moduleName, this.ctorName].concat(allArgs)))();
        };
        return AsyncDescriptor;
    }(AbstractDescriptor));
    exports.AsyncDescriptor = AsyncDescriptor;
});

define(__m[3/*vs/platform/instantiation/common/instantiation*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    // ------ internal util
    var _util;
    (function (_util) {
        _util.serviceIds = new Map();
        _util.DI_TARGET = '$di$target';
        _util.DI_DEPENDENCIES = '$di$dependencies';
        function getServiceDependencies(ctor) {
            return ctor[_util.DI_DEPENDENCIES] || [];
        }
        _util.getServiceDependencies = getServiceDependencies;
    })(_util = exports._util || (exports._util = {}));
    exports.IInstantiationService = createDecorator('instantiationService');
    function storeServiceDependency(id, target, index, optional) {
        if (target[_util.DI_TARGET] === target) {
            target[_util.DI_DEPENDENCIES].push({ id: id, index: index, optional: optional });
        }
        else {
            target[_util.DI_DEPENDENCIES] = [{ id: id, index: index, optional: optional }];
            target[_util.DI_TARGET] = target;
        }
    }
    /**
     * A *only* valid way to create a {{ServiceIdentifier}}.
     */
    function createDecorator(serviceId) {
        if (_util.serviceIds.has(serviceId)) {
            return _util.serviceIds.get(serviceId);
        }
        var id = function (target, key, index) {
            if (arguments.length !== 3) {
                throw new Error('@IServiceName-decorator can only be used to decorate a parameter');
            }
            storeServiceDependency(id, target, index, false);
        };
        id.toString = function () { return serviceId; };
        _util.serviceIds.set(serviceId, id);
        return id;
    }
    exports.createDecorator = createDecorator;
    /**
     * Mark a service dependency as optional.
     */
    function optional(serviceIdentifier) {
        return function (target, key, index) {
            if (arguments.length !== 3) {
                throw new Error('@optional-decorator can only be used to decorate a parameter');
            }
            storeServiceDependency(serviceIdentifier, target, index, true);
        };
    }
    exports.optional = optional;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[42/*vs/platform/backup/common/backup*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IBackupMainService = instantiation_1.createDecorator('backupMainService');
    exports.IBackupService = instantiation_1.createDecorator('backupService');
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[12/*vs/platform/configuration/common/configuration*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IConfigurationService = instantiation_1.createDecorator('configurationService');
    var ConfigurationSource;
    (function (ConfigurationSource) {
        ConfigurationSource[ConfigurationSource["Default"] = 1] = "Default";
        ConfigurationSource[ConfigurationSource["User"] = 2] = "User";
        ConfigurationSource[ConfigurationSource["Workspace"] = 3] = "Workspace";
    })(ConfigurationSource = exports.ConfigurationSource || (exports.ConfigurationSource = {}));
    /**
     * A helper function to get the configuration value with a specific settings path (e.g. config.some.setting)
     */
    function getConfigurationValue(config, settingPath, defaultValue) {
        function accessSetting(config, path) {
            var current = config;
            for (var i = 0; i < path.length; i++) {
                if (typeof current !== 'object' || current === null) {
                    return undefined;
                }
                current = current[path[i]];
            }
            return current;
        }
        var path = settingPath.split('.');
        var result = accessSetting(config, path);
        return typeof result === 'undefined' ? defaultValue : result;
    }
    exports.getConfigurationValue = getConfigurationValue;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[13/*vs/platform/environment/common/environment*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IEnvironmentService = instantiation_1.createDecorator('environmentService');
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(__m[25/*vs/code/electron-main/log*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/,13/*vs/platform/environment/common/environment*/]), function (require, exports, instantiation_1, environment_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ILogService = instantiation_1.createDecorator('logService');
    var MainLogService = (function () {
        function MainLogService(environmentService) {
            this.environmentService = environmentService;
        }
        MainLogService.prototype.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (this.environmentService.verbose) {
                console.log.apply(console, ["\u001B[93m[main " + new Date().toLocaleTimeString() + "]\u001B[0m"].concat(args));
            }
        };
        return MainLogService;
    }());
    MainLogService = __decorate([
        __param(0, environment_1.IEnvironmentService)
    ], MainLogService);
    exports.MainLogService = MainLogService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[27/*vs/code/electron-main/storage*/], __M([1/*require*/,0/*exports*/,7/*path*/,38/*original-fs*/,13/*vs/platform/environment/common/environment*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, path, fs, environment_1, instantiation_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IStorageService = instantiation_1.createDecorator('storageService');
    var StorageService = (function () {
        function StorageService(environmentService) {
            this.environmentService = environmentService;
            this.database = null;
            this.dbPath = path.join(environmentService.userDataPath, 'storage.json');
        }
        StorageService.prototype.getItem = function (key, defaultValue) {
            if (!this.database) {
                this.database = this.load();
            }
            var res = this.database[key];
            if (typeof res === 'undefined') {
                return defaultValue;
            }
            return this.database[key];
        };
        StorageService.prototype.setItem = function (key, data) {
            if (!this.database) {
                this.database = this.load();
            }
            // Shortcut for primitives that did not change
            if (typeof data === 'string' || typeof data === 'number' || typeof data === 'boolean') {
                if (this.database[key] === data) {
                    return;
                }
            }
            this.database[key] = data;
            this.save();
        };
        StorageService.prototype.removeItem = function (key) {
            if (!this.database) {
                this.database = this.load();
            }
            if (this.database[key]) {
                delete this.database[key];
                this.save();
            }
        };
        StorageService.prototype.load = function () {
            try {
                return JSON.parse(fs.readFileSync(this.dbPath).toString()); // invalid JSON or permission issue can happen here
            }
            catch (error) {
                if (this.environmentService.verbose) {
                    console.error(error);
                }
                return {};
            }
        };
        StorageService.prototype.save = function () {
            try {
                fs.writeFileSync(this.dbPath, JSON.stringify(this.database, null, 4)); // permission issue can happen here
            }
            catch (error) {
                if (this.environmentService.verbose) {
                    console.error(error);
                }
            }
        };
        return StorageService;
    }());
    StorageService = __decorate([
        __param(0, environment_1.IEnvironmentService)
    ], StorageService);
    exports.StorageService = StorageService;
});











define(__m[23/*vs/platform/files/common/files*/], __M([1/*require*/,0/*exports*/,18/*vs/base/common/paths*/,78/*vs/base/common/events*/,5/*vs/base/common/platform*/,3/*vs/platform/instantiation/common/instantiation*/,11/*vs/base/common/strings*/]), function (require, exports, paths, events, platform_1, instantiation_1, strings_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IFileService = instantiation_1.createDecorator('fileService');
    var FileOperation;
    (function (FileOperation) {
        FileOperation[FileOperation["CREATE"] = 0] = "CREATE";
        FileOperation[FileOperation["DELETE"] = 1] = "DELETE";
        FileOperation[FileOperation["MOVE"] = 2] = "MOVE";
        FileOperation[FileOperation["COPY"] = 3] = "COPY";
        FileOperation[FileOperation["IMPORT"] = 4] = "IMPORT";
    })(FileOperation = exports.FileOperation || (exports.FileOperation = {}));
    var FileOperationEvent = (function () {
        function FileOperationEvent(_resource, _operation, _target) {
            this._resource = _resource;
            this._operation = _operation;
            this._target = _target;
        }
        Object.defineProperty(FileOperationEvent.prototype, "resource", {
            get: function () {
                return this._resource;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileOperationEvent.prototype, "target", {
            get: function () {
                return this._target;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileOperationEvent.prototype, "operation", {
            get: function () {
                return this._operation;
            },
            enumerable: true,
            configurable: true
        });
        return FileOperationEvent;
    }());
    exports.FileOperationEvent = FileOperationEvent;
    /**
     * Possible changes that can occur to a file.
     */
    var FileChangeType;
    (function (FileChangeType) {
        FileChangeType[FileChangeType["UPDATED"] = 0] = "UPDATED";
        FileChangeType[FileChangeType["ADDED"] = 1] = "ADDED";
        FileChangeType[FileChangeType["DELETED"] = 2] = "DELETED";
    })(FileChangeType = exports.FileChangeType || (exports.FileChangeType = {}));
    var FileChangesEvent = (function (_super) {
        __extends(FileChangesEvent, _super);
        function FileChangesEvent(changes) {
            var _this = _super.call(this) || this;
            _this._changes = changes;
            return _this;
        }
        Object.defineProperty(FileChangesEvent.prototype, "changes", {
            get: function () {
                return this._changes;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * Returns true if this change event contains the provided file with the given change type. In case of
         * type DELETED, this method will also return true if a folder got deleted that is the parent of the
         * provided file path.
         */
        FileChangesEvent.prototype.contains = function (resource, type) {
            if (!resource) {
                return false;
            }
            return this._changes.some(function (change) {
                if (change.type !== type) {
                    return false;
                }
                // For deleted also return true when deleted folder is parent of target path
                if (type === FileChangeType.DELETED) {
                    return isEqualOrParent(resource.fsPath, change.resource.fsPath, !platform_1.isLinux /* ignorecase */);
                }
                return isEqual(resource.fsPath, change.resource.fsPath, !platform_1.isLinux /* ignorecase */);
            });
        };
        /**
         * Returns the changes that describe added files.
         */
        FileChangesEvent.prototype.getAdded = function () {
            return this.getOfType(FileChangeType.ADDED);
        };
        /**
         * Returns if this event contains added files.
         */
        FileChangesEvent.prototype.gotAdded = function () {
            return this.hasType(FileChangeType.ADDED);
        };
        /**
         * Returns the changes that describe deleted files.
         */
        FileChangesEvent.prototype.getDeleted = function () {
            return this.getOfType(FileChangeType.DELETED);
        };
        /**
         * Returns if this event contains deleted files.
         */
        FileChangesEvent.prototype.gotDeleted = function () {
            return this.hasType(FileChangeType.DELETED);
        };
        /**
         * Returns the changes that describe updated files.
         */
        FileChangesEvent.prototype.getUpdated = function () {
            return this.getOfType(FileChangeType.UPDATED);
        };
        /**
         * Returns if this event contains updated files.
         */
        FileChangesEvent.prototype.gotUpdated = function () {
            return this.hasType(FileChangeType.UPDATED);
        };
        FileChangesEvent.prototype.getOfType = function (type) {
            return this._changes.filter(function (change) { return change.type === type; });
        };
        FileChangesEvent.prototype.hasType = function (type) {
            return this._changes.some(function (change) {
                return change.type === type;
            });
        };
        return FileChangesEvent;
    }(events.Event));
    exports.FileChangesEvent = FileChangesEvent;
    function isEqual(pathA, pathB, ignoreCase) {
        var identityEquals = (pathA === pathB);
        if (!ignoreCase || identityEquals) {
            return identityEquals;
        }
        if (!pathA || !pathB) {
            return false;
        }
        return strings_1.equalsIgnoreCase(pathA, pathB);
    }
    exports.isEqual = isEqual;
    function isParent(path, candidate, ignoreCase) {
        if (!path || !candidate || path === candidate) {
            return false;
        }
        if (candidate.length > path.length) {
            return false;
        }
        if (candidate.charAt(candidate.length - 1) !== paths.nativeSep) {
            candidate += paths.nativeSep;
        }
        if (ignoreCase) {
            return strings_1.beginsWithIgnoreCase(path, candidate);
        }
        return path.indexOf(candidate) === 0;
    }
    exports.isParent = isParent;
    function isEqualOrParent(path, candidate, ignoreCase) {
        if (path === candidate) {
            return true;
        }
        if (!path || !candidate) {
            return false;
        }
        if (candidate.length > path.length) {
            return false;
        }
        if (ignoreCase) {
            var beginsWith = strings_1.beginsWithIgnoreCase(path, candidate);
            if (!beginsWith) {
                return false;
            }
            if (candidate.length === path.length) {
                return true; // same path, different casing
            }
            var sepOffset = candidate.length;
            if (candidate.charAt(candidate.length - 1) === paths.nativeSep) {
                sepOffset--; // adjust the expected sep offset in case our candidate already ends in separator character
            }
            return path.charAt(sepOffset) === paths.nativeSep;
        }
        if (candidate.charAt(candidate.length - 1) !== paths.nativeSep) {
            candidate += paths.nativeSep;
        }
        return path.indexOf(candidate) === 0;
    }
    exports.isEqualOrParent = isEqualOrParent;
    function indexOf(path, candidate, ignoreCase) {
        if (candidate.length > path.length) {
            return -1;
        }
        if (path === candidate) {
            return 0;
        }
        if (ignoreCase) {
            path = path.toLowerCase();
            candidate = candidate.toLowerCase();
        }
        return path.indexOf(candidate);
    }
    exports.indexOf = indexOf;
    var FileOperationResult;
    (function (FileOperationResult) {
        FileOperationResult[FileOperationResult["FILE_IS_BINARY"] = 0] = "FILE_IS_BINARY";
        FileOperationResult[FileOperationResult["FILE_IS_DIRECTORY"] = 1] = "FILE_IS_DIRECTORY";
        FileOperationResult[FileOperationResult["FILE_NOT_FOUND"] = 2] = "FILE_NOT_FOUND";
        FileOperationResult[FileOperationResult["FILE_NOT_MODIFIED_SINCE"] = 3] = "FILE_NOT_MODIFIED_SINCE";
        FileOperationResult[FileOperationResult["FILE_MODIFIED_SINCE"] = 4] = "FILE_MODIFIED_SINCE";
        FileOperationResult[FileOperationResult["FILE_MOVE_CONFLICT"] = 5] = "FILE_MOVE_CONFLICT";
        FileOperationResult[FileOperationResult["FILE_READ_ONLY"] = 6] = "FILE_READ_ONLY";
        FileOperationResult[FileOperationResult["FILE_TOO_LARGE"] = 7] = "FILE_TOO_LARGE";
        FileOperationResult[FileOperationResult["FILE_INVALID_PATH"] = 8] = "FILE_INVALID_PATH";
    })(FileOperationResult = exports.FileOperationResult || (exports.FileOperationResult = {}));
    exports.MAX_FILE_SIZE = 50 * 1024 * 1024;
    exports.AutoSaveConfiguration = {
        OFF: 'off',
        AFTER_DELAY: 'afterDelay',
        ON_FOCUS_CHANGE: 'onFocusChange',
        ON_WINDOW_CHANGE: 'onWindowChange'
    };
    exports.HotExitConfiguration = {
        OFF: 'off',
        ON_EXIT: 'onExit',
        ON_EXIT_AND_WINDOW_CLOSE: 'onExitAndWindowClose'
    };
    exports.CONTENT_CHANGE_EVENT_BUFFER_DELAY = 1000;
    exports.SUPPORTED_ENCODINGS = {
        utf8: {
            labelLong: 'UTF-8',
            labelShort: 'UTF-8',
            order: 1,
            alias: 'utf8bom'
        },
        utf8bom: {
            labelLong: 'UTF-8 with BOM',
            labelShort: 'UTF-8 with BOM',
            encodeOnly: true,
            order: 2,
            alias: 'utf8'
        },
        utf16le: {
            labelLong: 'UTF-16 LE',
            labelShort: 'UTF-16 LE',
            order: 3
        },
        utf16be: {
            labelLong: 'UTF-16 BE',
            labelShort: 'UTF-16 BE',
            order: 4
        },
        windows1252: {
            labelLong: 'Western (Windows 1252)',
            labelShort: 'Windows 1252',
            order: 5
        },
        iso88591: {
            labelLong: 'Western (ISO 8859-1)',
            labelShort: 'ISO 8859-1',
            order: 6
        },
        iso88593: {
            labelLong: 'Western (ISO 8859-3)',
            labelShort: 'ISO 8859-3',
            order: 7
        },
        iso885915: {
            labelLong: 'Western (ISO 8859-15)',
            labelShort: 'ISO 8859-15',
            order: 8
        },
        macroman: {
            labelLong: 'Western (Mac Roman)',
            labelShort: 'Mac Roman',
            order: 9
        },
        cp437: {
            labelLong: 'DOS (CP 437)',
            labelShort: 'CP437',
            order: 10
        },
        windows1256: {
            labelLong: 'Arabic (Windows 1256)',
            labelShort: 'Windows 1256',
            order: 11
        },
        iso88596: {
            labelLong: 'Arabic (ISO 8859-6)',
            labelShort: 'ISO 8859-6',
            order: 12
        },
        windows1257: {
            labelLong: 'Baltic (Windows 1257)',
            labelShort: 'Windows 1257',
            order: 13
        },
        iso88594: {
            labelLong: 'Baltic (ISO 8859-4)',
            labelShort: 'ISO 8859-4',
            order: 14
        },
        iso885914: {
            labelLong: 'Celtic (ISO 8859-14)',
            labelShort: 'ISO 8859-14',
            order: 15
        },
        windows1250: {
            labelLong: 'Central European (Windows 1250)',
            labelShort: 'Windows 1250',
            order: 16
        },
        iso88592: {
            labelLong: 'Central European (ISO 8859-2)',
            labelShort: 'ISO 8859-2',
            order: 17
        },
        cp852: {
            labelLong: 'Central European (CP 852)',
            labelShort: 'CP 852',
            order: 18
        },
        windows1251: {
            labelLong: 'Cyrillic (Windows 1251)',
            labelShort: 'Windows 1251',
            order: 19
        },
        cp866: {
            labelLong: 'Cyrillic (CP 866)',
            labelShort: 'CP 866',
            order: 20
        },
        iso88595: {
            labelLong: 'Cyrillic (ISO 8859-5)',
            labelShort: 'ISO 8859-5',
            order: 21
        },
        koi8r: {
            labelLong: 'Cyrillic (KOI8-R)',
            labelShort: 'KOI8-R',
            order: 22
        },
        koi8u: {
            labelLong: 'Cyrillic (KOI8-U)',
            labelShort: 'KOI8-U',
            order: 23
        },
        iso885913: {
            labelLong: 'Estonian (ISO 8859-13)',
            labelShort: 'ISO 8859-13',
            order: 24
        },
        windows1253: {
            labelLong: 'Greek (Windows 1253)',
            labelShort: 'Windows 1253',
            order: 25
        },
        iso88597: {
            labelLong: 'Greek (ISO 8859-7)',
            labelShort: 'ISO 8859-7',
            order: 26
        },
        windows1255: {
            labelLong: 'Hebrew (Windows 1255)',
            labelShort: 'Windows 1255',
            order: 27
        },
        iso88598: {
            labelLong: 'Hebrew (ISO 8859-8)',
            labelShort: 'ISO 8859-8',
            order: 28
        },
        iso885910: {
            labelLong: 'Nordic (ISO 8859-10)',
            labelShort: 'ISO 8859-10',
            order: 29
        },
        iso885916: {
            labelLong: 'Romanian (ISO 8859-16)',
            labelShort: 'ISO 8859-16',
            order: 30
        },
        windows1254: {
            labelLong: 'Turkish (Windows 1254)',
            labelShort: 'Windows 1254',
            order: 31
        },
        iso88599: {
            labelLong: 'Turkish (ISO 8859-9)',
            labelShort: 'ISO 8859-9',
            order: 32
        },
        windows1258: {
            labelLong: 'Vietnamese (Windows 1258)',
            labelShort: 'Windows 1258',
            order: 33
        },
        gbk: {
            labelLong: 'Chinese (GBK)',
            labelShort: 'GBK',
            order: 34
        },
        gb18030: {
            labelLong: 'Chinese (GB18030)',
            labelShort: 'GB18030',
            order: 35
        },
        cp950: {
            labelLong: 'Traditional Chinese (Big5)',
            labelShort: 'Big5',
            order: 36
        },
        big5hkscs: {
            labelLong: 'Traditional Chinese (Big5-HKSCS)',
            labelShort: 'Big5-HKSCS',
            order: 37
        },
        shiftjis: {
            labelLong: 'Japanese (Shift JIS)',
            labelShort: 'Shift JIS',
            order: 38
        },
        eucjp: {
            labelLong: 'Japanese (EUC-JP)',
            labelShort: 'EUC-JP',
            order: 39
        },
        euckr: {
            labelLong: 'Korean (EUC-KR)',
            labelShort: 'EUC-KR',
            order: 40
        },
        windows874: {
            labelLong: 'Thai (Windows 874)',
            labelShort: 'Windows 874',
            order: 41
        },
        iso885911: {
            labelLong: 'Latin/Thai (ISO 8859-11)',
            labelShort: 'ISO 8859-11',
            order: 42
        },
        koi8ru: {
            labelLong: 'Cyrillic (KOI8-RU)',
            labelShort: 'KOI8-RU',
            order: 43
        },
        koi8t: {
            labelLong: 'Tajik (KOI8-T)',
            labelShort: 'KOI8-T',
            order: 44
        },
        gb2312: {
            labelLong: 'Simplified Chinese (GB 2312)',
            labelShort: 'GB 2312',
            order: 45
        }
    };
});

define(__m[84/*vs/base/common/labels*/], __M([1/*require*/,0/*exports*/,5/*vs/base/common/platform*/,6/*vs/base/common/types*/,18/*vs/base/common/paths*/,11/*vs/base/common/strings*/,23/*vs/platform/files/common/files*/]), function (require, exports, platform, types, paths_1, strings_1, files_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var PathLabelProvider = (function () {
        function PathLabelProvider(arg1) {
            this.root = arg1 && getPath(arg1);
        }
        PathLabelProvider.prototype.getLabel = function (arg1) {
            return getPathLabel(getPath(arg1), this.root);
        };
        return PathLabelProvider;
    }());
    exports.PathLabelProvider = PathLabelProvider;
    function getPathLabel(resource, basePathProvider, userHomeProvider) {
        var absolutePath = getPath(resource);
        if (!absolutePath) {
            return null;
        }
        var basepath = basePathProvider && getPath(basePathProvider);
        if (basepath && files_1.isEqualOrParent(absolutePath, basepath, !platform.isLinux /* ignorecase */)) {
            if (files_1.isEqual(basepath, absolutePath, !platform.isLinux /* ignorecase */)) {
                return ''; // no label if pathes are identical
            }
            return paths_1.normalize(strings_1.ltrim(absolutePath.substr(basepath.length), paths_1.nativeSep), true);
        }
        if (platform.isWindows && absolutePath && absolutePath[1] === ':') {
            return paths_1.normalize(absolutePath.charAt(0).toUpperCase() + absolutePath.slice(1), true); // convert c:\something => C:\something
        }
        var res = paths_1.normalize(absolutePath, true);
        if (!platform.isWindows && userHomeProvider) {
            res = tildify(res, userHomeProvider.userHome);
        }
        return res;
    }
    exports.getPathLabel = getPathLabel;
    function getPath(arg1) {
        if (!arg1) {
            return null;
        }
        if (typeof arg1 === 'string') {
            return arg1;
        }
        if (types.isFunction(arg1.getWorkspace)) {
            var ws = arg1.getWorkspace();
            return ws ? ws.resource.fsPath : void 0;
        }
        return arg1.fsPath;
    }
    function tildify(path, userHome) {
        if (path && (platform.isMacintosh || platform.isLinux) && files_1.isEqualOrParent(path, userHome, !platform.isLinux /* ignorecase */)) {
            path = "~" + path.substr(userHome.length);
        }
        return path;
    }
    exports.tildify = tildify;
    /**
     * Shortens the paths but keeps them easy to distinguish.
     * Replaces not important parts with ellipsis.
     * Every shorten path matches only one original path and vice versa.
     *
     * Algorithm for shortening paths is as follows:
     * 1. For every path in list, find unique substring of that path.
     * 2. Unique substring along with ellipsis is shortened path of that path.
     * 3. To find unique substring of path, consider every segment of length from 1 to path.length of path from end of string
     *    and if present segment is not substring to any other paths then present segment is unique path,
     *    else check if it is not present as suffix of any other path and present segment is suffix of path itself,
     *    if it is true take present segment as unique path.
     * 4. Apply ellipsis to unique segment according to whether segment is present at start/in-between/end of path.
     *
     * Example 1
     * 1. consider 2 paths i.e. ['a\\b\\c\\d', 'a\\f\\b\\c\\d']
     * 2. find unique path of first path,
     * 	a. 'd' is present in path2 and is suffix of path2, hence not unique of present path.
     * 	b. 'c' is present in path2 and 'c' is not suffix of present path, similarly for 'b' and 'a' also.
     * 	c. 'd\\c' is suffix of path2.
     *  d. 'b\\c' is not suffix of present path.
     *  e. 'a\\b' is not present in path2, hence unique path is 'a\\b...'.
     * 3. for path2, 'f' is not present in path1 hence unique is '...\\f\\...'.
     *
     * Example 2
     * 1. consider 2 paths i.e. ['a\\b', 'a\\b\\c'].
     * 	a. Even if 'b' is present in path2, as 'b' is suffix of path1 and is not suffix of path2, unique path will be '...\\b'.
     * 2. for path2, 'c' is not present in path1 hence unique path is '..\\c'.
     */
    var ellipsis = '\u2026';
    var unc = '\\\\';
    function shorten(paths) {
        var shortenedPaths = new Array(paths.length);
        // for every path
        var match = false;
        for (var pathIndex = 0; pathIndex < paths.length; pathIndex++) {
            var path = paths[pathIndex];
            if (path === '') {
                shortenedPaths[pathIndex] = '.';
                continue;
            }
            if (!path) {
                shortenedPaths[pathIndex] = path;
                continue;
            }
            match = true;
            // trim for now and concatenate unc path (e.g. \\network) or root path (/etc) later
            var prefix = '';
            if (path.indexOf(unc) === 0) {
                prefix = path.substr(0, path.indexOf(unc) + unc.length);
                path = path.substr(path.indexOf(unc) + unc.length);
            }
            else if (path.indexOf(paths_1.nativeSep) === 0) {
                prefix = path.substr(0, path.indexOf(paths_1.nativeSep) + paths_1.nativeSep.length);
                path = path.substr(path.indexOf(paths_1.nativeSep) + paths_1.nativeSep.length);
            }
            // pick the first shortest subpath found
            var segments = path.split(paths_1.nativeSep);
            for (var subpathLength = 1; match && subpathLength <= segments.length; subpathLength++) {
                for (var start = segments.length - subpathLength; match && start >= 0; start--) {
                    match = false;
                    var subpath = segments.slice(start, start + subpathLength).join(paths_1.nativeSep);
                    // that is unique to any other path
                    for (var otherPathIndex = 0; !match && otherPathIndex < paths.length; otherPathIndex++) {
                        // suffix subpath treated specially as we consider no match 'x' and 'x/...'
                        if (otherPathIndex !== pathIndex && paths[otherPathIndex] && paths[otherPathIndex].indexOf(subpath) > -1) {
                            var isSubpathEnding = (start + subpathLength === segments.length);
                            // Adding separator as prefix for subpath, such that 'endsWith(src, trgt)' considers subpath as directory name instead of plain string.
                            // prefix is not added when either subpath is root directory or path[otherPathIndex] does not have multiple directories.
                            var subpathWithSep = (start > 0 && paths[otherPathIndex].indexOf(paths_1.nativeSep) > -1) ? paths_1.nativeSep + subpath : subpath;
                            var isOtherPathEnding = strings_1.endsWith(paths[otherPathIndex], subpathWithSep);
                            match = !isSubpathEnding || isOtherPathEnding;
                        }
                    }
                    // found unique subpath
                    if (!match) {
                        var result = '';
                        // preserve disk drive or root prefix
                        if (strings_1.endsWith(segments[0], ':') || prefix !== '') {
                            if (start === 1) {
                                // extend subpath to include disk drive prefix
                                start = 0;
                                subpathLength++;
                                subpath = segments[0] + paths_1.nativeSep + subpath;
                            }
                            if (start > 0) {
                                result = segments[0] + paths_1.nativeSep;
                            }
                            result = prefix + result;
                        }
                        // add ellipsis at the beginning if neeeded
                        if (start > 0) {
                            result = result + ellipsis + paths_1.nativeSep;
                        }
                        result = result + subpath;
                        // add ellipsis at the end if needed
                        if (start + subpathLength < segments.length) {
                            result = result + paths_1.nativeSep + ellipsis;
                        }
                        shortenedPaths[pathIndex] = result;
                    }
                }
            }
            if (match) {
                shortenedPaths[pathIndex] = path; // use full path if no unique subpaths found
            }
        }
        return shortenedPaths;
    }
    exports.shorten = shorten;
    var Type;
    (function (Type) {
        Type[Type["TEXT"] = 0] = "TEXT";
        Type[Type["VARIABLE"] = 1] = "VARIABLE";
        Type[Type["SEPARATOR"] = 2] = "SEPARATOR";
    })(Type || (Type = {}));
    /**
     * Helper to insert values for specific template variables into the string. E.g. "this $(is) a $(template)" can be
     * passed to this function together with an object that maps "is" and "template" to strings to have them replaced.
     * @param value string to which templating is applied
     * @param values the values of the templates to use
     */
    function template(template, values) {
        if (values === void 0) { values = Object.create(null); }
        var segments = [];
        var inVariable = false;
        var char;
        var curVal = '';
        for (var i = 0; i < template.length; i++) {
            char = template[i];
            // Beginning of variable
            if (char === '$' || (inVariable && char === '{')) {
                if (curVal) {
                    segments.push({ value: curVal, type: Type.TEXT });
                }
                curVal = '';
                inVariable = true;
            }
            else if (char === '}' && inVariable) {
                var resolved = values[curVal];
                // Variable
                if (typeof resolved === 'string') {
                    if (resolved.length) {
                        segments.push({ value: resolved, type: Type.VARIABLE });
                    }
                }
                else if (resolved) {
                    var prevSegment = segments[segments.length - 1];
                    if (!prevSegment || prevSegment.type !== Type.SEPARATOR) {
                        segments.push({ value: resolved.label, type: Type.SEPARATOR }); // prevent duplicate separators
                    }
                }
                curVal = '';
                inVariable = false;
            }
            else {
                curVal += char;
            }
        }
        // Tail
        if (curVal && !inVariable) {
            segments.push({ value: curVal, type: Type.TEXT });
        }
        return segments.filter(function (segment, index) {
            // Only keep separator if we have values to the left and right
            if (segment.type === Type.SEPARATOR) {
                var left = segments[index - 1];
                var right = segments[index + 1];
                return [left, right].every(function (segment) { return segment && segment.type === Type.VARIABLE && segment.value.length > 0; });
            }
            // accept any TEXT and VARIABLE
            return true;
        }).map(function (segment) { return segment.value; }).join('');
    }
    exports.template = template;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[85/*vs/platform/backup/electron-main/backupMainService*/], __M([1/*require*/,0/*exports*/,20/*vs/base/common/arrays*/,28/*fs*/,7/*path*/,49/*crypto*/,5/*vs/base/common/platform*/,41/*vs/base/node/extfs*/,13/*vs/platform/environment/common/environment*/,12/*vs/platform/configuration/common/configuration*/,23/*vs/platform/files/common/files*/,2/*vs/base/common/winjs.base*/]), function (require, exports, arrays, fs, path, crypto, platform, extfs, environment_1, configuration_1, files_1, winjs_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BackupMainService = (function () {
        function BackupMainService(environmentService, configurationService) {
            this.configurationService = configurationService;
            this.backupHome = environmentService.backupHome;
            this.workspacesJsonPath = environmentService.backupWorkspacesPath;
            this.mapWindowToBackupFolder = Object.create(null);
            this.loadSync();
        }
        BackupMainService.prototype.getWorkspaceBackupPaths = function () {
            var config = this.configurationService.getConfiguration();
            if (config && config.files && config.files.hotExit === files_1.HotExitConfiguration.ON_EXIT_AND_WINDOW_CLOSE) {
                // Only non-folder windows are restored on main process launch when
                // hot exit is configured as onExitAndWindowClose.
                return [];
            }
            return this.backups.folderWorkspaces.slice(0); // return a copy
        };
        BackupMainService.prototype.getEmptyWorkspaceBackupPaths = function () {
            return this.backups.emptyWorkspaces.slice(0); // return a copy
        };
        BackupMainService.prototype.getBackupPath = function (windowId) {
            if (!this.mapWindowToBackupFolder[windowId]) {
                throw new Error("Unknown backup workspace for window " + windowId);
            }
            return winjs_base_1.TPromise.as(path.join(this.backupHome, this.mapWindowToBackupFolder[windowId]));
        };
        BackupMainService.prototype.registerWindowForBackupsSync = function (windowId, isEmptyWorkspace, backupFolder, workspacePath) {
            // Generate a new folder if this is a new empty workspace
            if (isEmptyWorkspace && !backupFolder) {
                backupFolder = this.getRandomEmptyWorkspaceId();
            }
            this.mapWindowToBackupFolder[windowId] = isEmptyWorkspace ? backupFolder : this.getWorkspaceHash(workspacePath);
            this.pushBackupPathsSync(isEmptyWorkspace ? backupFolder : workspacePath, isEmptyWorkspace);
        };
        BackupMainService.prototype.pushBackupPathsSync = function (workspaceIdentifier, isEmptyWorkspace) {
            var array = isEmptyWorkspace ? this.backups.emptyWorkspaces : this.backups.folderWorkspaces;
            if (this.indexOf(workspaceIdentifier, isEmptyWorkspace) === -1) {
                array.push(workspaceIdentifier);
                this.saveSync();
            }
            return workspaceIdentifier;
        };
        BackupMainService.prototype.removeBackupPathSync = function (workspaceIdentifier, isEmptyWorkspace) {
            var array = isEmptyWorkspace ? this.backups.emptyWorkspaces : this.backups.folderWorkspaces;
            if (!array) {
                return;
            }
            var index = this.indexOf(workspaceIdentifier, isEmptyWorkspace);
            if (index === -1) {
                return;
            }
            array.splice(index, 1);
            this.saveSync();
        };
        BackupMainService.prototype.indexOf = function (workspaceIdentifier, isEmptyWorkspace) {
            var _this = this;
            var array = isEmptyWorkspace ? this.backups.emptyWorkspaces : this.backups.folderWorkspaces;
            if (!array) {
                return -1;
            }
            if (isEmptyWorkspace) {
                return array.indexOf(workspaceIdentifier);
            }
            // for backup workspaces, sanitize the workspace identifier to accomodate for case insensitive file systems
            var sanitizedWorkspaceIdentifier = this.sanitizePath(workspaceIdentifier);
            return arrays.firstIndex(array, function (id) { return _this.sanitizePath(id) === sanitizedWorkspaceIdentifier; });
        };
        BackupMainService.prototype.loadSync = function () {
            var backups;
            try {
                backups = JSON.parse(fs.readFileSync(this.workspacesJsonPath, 'utf8').toString()); // invalid JSON or permission issue can happen here
            }
            catch (error) {
                backups = Object.create(null);
            }
            // Ensure folderWorkspaces is a string[]
            if (backups.folderWorkspaces) {
                var fws = backups.folderWorkspaces;
                if (!Array.isArray(fws) || fws.some(function (f) { return typeof f !== 'string'; })) {
                    backups.folderWorkspaces = [];
                }
            }
            else {
                backups.folderWorkspaces = [];
            }
            // Ensure emptyWorkspaces is a string[]
            if (backups.emptyWorkspaces) {
                var fws = backups.emptyWorkspaces;
                if (!Array.isArray(fws) || fws.some(function (f) { return typeof f !== 'string'; })) {
                    backups.emptyWorkspaces = [];
                }
            }
            else {
                backups.emptyWorkspaces = [];
            }
            this.backups = this.dedupeFolderWorkspaces(backups);
            // Validate backup workspaces
            this.validateBackupWorkspaces(backups);
        };
        BackupMainService.prototype.dedupeFolderWorkspaces = function (backups) {
            var _this = this;
            // De-duplicate folder workspaces, don't worry about cleaning them up any duplicates as
            // they will be removed when there are no backups.
            backups.folderWorkspaces = arrays.distinct(backups.folderWorkspaces, function (ws) { return _this.sanitizePath(ws); });
            return backups;
        };
        BackupMainService.prototype.validateBackupWorkspaces = function (backups) {
            var _this = this;
            var staleBackupWorkspaces = [];
            // Validate Folder Workspaces
            backups.folderWorkspaces.forEach(function (workspacePath) {
                var backupPath = path.join(_this.backupHome, _this.getWorkspaceHash(workspacePath));
                var hasBackups = _this.hasBackupsSync(backupPath);
                var missingWorkspace = hasBackups && !fs.existsSync(workspacePath);
                // If the folder has no backups, make sure to delete it
                // If the folder has backups, but the target workspace is missing, convert backups to empty ones
                if (!hasBackups || missingWorkspace) {
                    staleBackupWorkspaces.push({ workspaceIdentifier: workspacePath, backupPath: backupPath, isEmptyWorkspace: false });
                    if (missingWorkspace) {
                        var identifier = _this.pushBackupPathsSync(_this.getRandomEmptyWorkspaceId(), true /* is empty workspace */);
                        var newEmptyWorkspaceBackupPath = path.join(path.dirname(backupPath), identifier);
                        try {
                            fs.renameSync(backupPath, newEmptyWorkspaceBackupPath);
                        }
                        catch (ex) {
                            console.error("Backup: Could not rename backup folder for missing workspace: " + ex.toString());
                            _this.removeBackupPathSync(identifier, true);
                        }
                    }
                }
            });
            // Validate Empty Workspaces
            backups.emptyWorkspaces.forEach(function (backupFolder) {
                var backupPath = path.join(_this.backupHome, backupFolder);
                if (!_this.hasBackupsSync(backupPath)) {
                    staleBackupWorkspaces.push({ workspaceIdentifier: backupFolder, backupPath: backupPath, isEmptyWorkspace: true });
                }
            });
            // Clean up stale backups
            staleBackupWorkspaces.forEach(function (staleBackupWorkspace) {
                var backupPath = staleBackupWorkspace.backupPath, workspaceIdentifier = staleBackupWorkspace.workspaceIdentifier, isEmptyWorkspace = staleBackupWorkspace.isEmptyWorkspace;
                try {
                    extfs.delSync(backupPath);
                }
                catch (ex) {
                    console.error("Backup: Could not delete stale backup: " + ex.toString());
                }
                _this.removeBackupPathSync(workspaceIdentifier, isEmptyWorkspace);
            });
        };
        BackupMainService.prototype.hasBackupsSync = function (backupPath) {
            try {
                var backupSchemas = extfs.readdirSync(backupPath);
                if (backupSchemas.length === 0) {
                    return false; // empty backups
                }
                return backupSchemas.some(function (backupSchema) {
                    try {
                        return extfs.readdirSync(path.join(backupPath, backupSchema)).length > 0;
                    }
                    catch (error) {
                        return false; // invalid folder
                    }
                });
            }
            catch (error) {
                return false; // backup path does not exist
            }
        };
        BackupMainService.prototype.saveSync = function () {
            try {
                // The user data directory must exist so only the Backup directory needs to be checked.
                if (!fs.existsSync(this.backupHome)) {
                    fs.mkdirSync(this.backupHome);
                }
                fs.writeFileSync(this.workspacesJsonPath, JSON.stringify(this.backups));
            }
            catch (ex) {
                console.error("Backup: Could not save workspaces.json: " + ex.toString());
            }
        };
        BackupMainService.prototype.getRandomEmptyWorkspaceId = function () {
            return (Date.now() + Math.round(Math.random() * 1000)).toString();
        };
        BackupMainService.prototype.sanitizePath = function (p) {
            return platform.isLinux ? p : p.toLowerCase();
        };
        BackupMainService.prototype.getWorkspaceHash = function (workspacePath) {
            return crypto.createHash('md5').update(this.sanitizePath(workspacePath)).digest('hex');
        };
        return BackupMainService;
    }());
    BackupMainService = __decorate([
        __param(0, environment_1.IEnvironmentService),
        __param(1, configuration_1.IConfigurationService)
    ], BackupMainService);
    exports.BackupMainService = BackupMainService;
});

define(__m[44/*vs/platform/instantiation/common/serviceCollection*/], __M([1/*require*/,0/*exports*/]), function (require, exports) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var ServiceCollection = (function () {
        function ServiceCollection() {
            var entries = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                entries[_i] = arguments[_i];
            }
            this._entries = new Map();
            for (var _a = 0, entries_1 = entries; _a < entries_1.length; _a++) {
                var _b = entries_1[_a], id = _b[0], service = _b[1];
                this.set(id, service);
            }
        }
        ServiceCollection.prototype.set = function (id, instanceOrDescriptor) {
            var result = this._entries.get(id);
            this._entries.set(id, instanceOrDescriptor);
            return result;
        };
        ServiceCollection.prototype.forEach = function (callback) {
            this._entries.forEach(function (value, key) { return callback(key, value); });
        };
        ServiceCollection.prototype.has = function (id) {
            return this._entries.has(id);
        };
        ServiceCollection.prototype.get = function (id) {
            return this._entries.get(id);
        };
        return ServiceCollection;
    }());
    exports.ServiceCollection = ServiceCollection;
});

define(__m[87/*vs/platform/instantiation/common/instantiationService*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,17/*vs/base/common/errors*/,6/*vs/base/common/types*/,59/*vs/base/common/assert*/,112/*vs/base/common/graph*/,50/*vs/platform/instantiation/common/descriptors*/,3/*vs/platform/instantiation/common/instantiation*/,44/*vs/platform/instantiation/common/serviceCollection*/]), function (require, exports, winjs_base_1, errors_1, types_1, assert, graph_1, descriptors_1, instantiation_1, serviceCollection_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var InstantiationService = (function () {
        function InstantiationService(services, strict) {
            if (services === void 0) { services = new serviceCollection_1.ServiceCollection(); }
            if (strict === void 0) { strict = false; }
            this._services = services;
            this._strict = strict;
            this._services.set(instantiation_1.IInstantiationService, this);
        }
        InstantiationService.prototype.createChild = function (services) {
            var _this = this;
            this._services.forEach(function (id, thing) {
                if (services.has(id)) {
                    return;
                }
                // If we copy descriptors we might end up with
                // multiple instances of the same service
                if (thing instanceof descriptors_1.SyncDescriptor) {
                    thing = _this._createAndCacheServiceInstance(id, thing);
                }
                services.set(id, thing);
            });
            return new InstantiationService(services, this._strict);
        };
        InstantiationService.prototype.invokeFunction = function (signature) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var accessor;
            try {
                accessor = {
                    get: function (id, isOptional) {
                        var result = _this._getOrCreateServiceInstance(id);
                        if (!result && isOptional !== instantiation_1.optional) {
                            throw new Error("[invokeFunction] unkown service '" + id + "'");
                        }
                        return result;
                    }
                };
                return signature.apply(undefined, [accessor].concat(args));
            }
            finally {
                accessor.get = function () {
                    throw errors_1.illegalState('service accessor is only valid during the invocation of its target method');
                };
            }
        };
        InstantiationService.prototype.createInstance = function (param) {
            var rest = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                rest[_i - 1] = arguments[_i];
            }
            if (param instanceof descriptors_1.AsyncDescriptor) {
                // async
                return this._createInstanceAsync(param, rest);
            }
            else if (param instanceof descriptors_1.SyncDescriptor) {
                // sync
                return this._createInstance(param, rest);
            }
            else {
                // sync, just ctor
                return this._createInstance(new descriptors_1.SyncDescriptor(param), rest);
            }
        };
        InstantiationService.prototype._createInstanceAsync = function (descriptor, args) {
            var _this = this;
            var canceledError;
            return new winjs_base_1.TPromise(function (c, e, p) {
                require([descriptor.moduleName], function (_module) {
                    if (canceledError) {
                        e(canceledError);
                    }
                    if (!_module) {
                        return e(errors_1.illegalArgument('module not found: ' + descriptor.moduleName));
                    }
                    var ctor;
                    if (!descriptor.ctorName) {
                        ctor = _module;
                    }
                    else {
                        ctor = _module[descriptor.ctorName];
                    }
                    if (typeof ctor !== 'function') {
                        return e(errors_1.illegalArgument('not a function: ' + descriptor.ctorName || descriptor.moduleName));
                    }
                    try {
                        args.unshift.apply(args, descriptor.staticArguments()); // instead of spread in ctor call
                        c(_this._createInstance(new descriptors_1.SyncDescriptor(ctor), args));
                    }
                    catch (error) {
                        return e(error);
                    }
                }, e);
            }, function () {
                canceledError = errors_1.canceled();
            });
        };
        InstantiationService.prototype._createInstance = function (desc, args) {
            // arguments given by createInstance-call and/or the descriptor
            var staticArgs = desc.staticArguments().concat(args);
            // arguments defined by service decorators
            var serviceDependencies = instantiation_1._util.getServiceDependencies(desc.ctor).sort(function (a, b) { return a.index - b.index; });
            var serviceArgs = [];
            for (var _i = 0, serviceDependencies_1 = serviceDependencies; _i < serviceDependencies_1.length; _i++) {
                var dependency = serviceDependencies_1[_i];
                var service = this._getOrCreateServiceInstance(dependency.id);
                if (!service && this._strict && !dependency.optional) {
                    throw new Error("[createInstance] " + desc.ctor.name + " depends on UNKNOWN service " + dependency.id + ".");
                }
                serviceArgs.push(service);
            }
            var firstServiceArgPos = serviceDependencies.length > 0 ? serviceDependencies[0].index : staticArgs.length;
            // check for argument mismatches, adjust static args if needed
            if (staticArgs.length !== firstServiceArgPos) {
                console.warn("[createInstance] First service dependency of " + desc.ctor.name + " at position " + (firstServiceArgPos + 1) + " conflicts with " + staticArgs.length + " static arguments");
                var delta = firstServiceArgPos - staticArgs.length;
                if (delta > 0) {
                    staticArgs = staticArgs.concat(new Array(delta));
                }
                else {
                    staticArgs = staticArgs.slice(0, firstServiceArgPos);
                }
            }
            // // check for missing args
            // for (let i = 0; i < serviceArgs.length; i++) {
            // 	if (!serviceArgs[i]) {
            // 		console.warn(`${desc.ctor.name} MISSES service dependency ${serviceDependencies[i].id}`, new Error().stack);
            // 	}
            // }
            // now create the instance
            var argArray = [desc.ctor];
            argArray.push.apply(argArray, staticArgs);
            argArray.push.apply(argArray, serviceArgs);
            var instance = types_1.create.apply(null, argArray);
            desc._validate(instance);
            return instance;
        };
        InstantiationService.prototype._getOrCreateServiceInstance = function (id) {
            var thing = this._services.get(id);
            if (thing instanceof descriptors_1.SyncDescriptor) {
                return this._createAndCacheServiceInstance(id, thing);
            }
            else {
                return thing;
            }
        };
        InstantiationService.prototype._createAndCacheServiceInstance = function (id, desc) {
            assert.ok(this._services.get(id) instanceof descriptors_1.SyncDescriptor);
            var graph = new graph_1.Graph(function (data) { return data.id.toString(); });
            function throwCycleError() {
                var err = new Error('[createInstance] cyclic dependency between services');
                err.message = graph.toString();
                throw err;
            }
            var count = 0;
            var stack = [{ id: id, desc: desc }];
            while (stack.length) {
                var item = stack.pop();
                graph.lookupOrInsertNode(item);
                // TODO@joh use the graph to find a cycle
                // a weak heuristic for cycle checks
                if (count++ > 100) {
                    throwCycleError();
                }
                // check all dependencies for existence and if the need to be created first
                var dependencies = instantiation_1._util.getServiceDependencies(item.desc.ctor);
                for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
                    var dependency = dependencies_1[_i];
                    var instanceOrDesc = this._services.get(dependency.id);
                    if (!instanceOrDesc) {
                        console.warn("[createInstance] " + id + " depends on " + dependency.id + " which is NOT registered.");
                    }
                    if (instanceOrDesc instanceof descriptors_1.SyncDescriptor) {
                        var d = { id: dependency.id, desc: instanceOrDesc };
                        graph.insertEdge(item, d);
                        stack.push(d);
                    }
                }
            }
            while (true) {
                var roots = graph.roots();
                // if there is no more roots but still
                // nodes in the graph we have a cycle
                if (roots.length === 0) {
                    if (graph.length !== 0) {
                        throwCycleError();
                    }
                    break;
                }
                for (var _a = 0, roots_1 = roots; _a < roots_1.length; _a++) {
                    var root = roots_1[_a];
                    // create instance and overwrite the service collections
                    var instance = this._createInstance(root.data.desc, []);
                    this._services.set(root.data.id, instance);
                    graph.removeNode(root.data);
                }
            }
            return this._services.get(id);
        };
        return InstantiationService;
    }());
    exports.InstantiationService = InstantiationService;
});

define(__m[88/*vs/platform/keybinding/common/keybinding*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeybindingSource;
    (function (KeybindingSource) {
        KeybindingSource[KeybindingSource["Default"] = 1] = "Default";
        KeybindingSource[KeybindingSource["User"] = 2] = "User";
    })(KeybindingSource = exports.KeybindingSource || (exports.KeybindingSource = {}));
    exports.IKeybindingService = instantiation_1.createDecorator('keybindingService');
});

define(__m[89/*vs/platform/lifecycle/common/lifecycle*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ILifecycleService = instantiation_1.createDecorator('lifecycleService');
    var ShutdownReason;
    (function (ShutdownReason) {
        /** Window is closed */
        ShutdownReason[ShutdownReason["CLOSE"] = 0] = "CLOSE";
        /** Application is quit */
        ShutdownReason[ShutdownReason["QUIT"] = 1] = "QUIT";
        /** Window is reloaded */
        ShutdownReason[ShutdownReason["RELOAD"] = 2] = "RELOAD";
        /** Other configuration loaded into window */
        ShutdownReason[ShutdownReason["LOAD"] = 3] = "LOAD";
    })(ShutdownReason = exports.ShutdownReason || (exports.ShutdownReason = {}));
    exports.NullLifecycleService = {
        _serviceBrand: null,
        willShutdown: false,
        onWillShutdown: function () { return ({ dispose: function () { } }); },
        onShutdown: function (reason) { return ({ dispose: function () { } }); }
    };
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[45/*vs/platform/node/package*/], __M([1/*require*/,0/*exports*/,7/*path*/,19/*vs/base/common/uri*/]), function (require, exports, path, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rootPath = path.dirname(uri_1.default.parse(require.toUrl('')).fsPath);
    var packageJsonPath = path.join(rootPath, 'package.json');
    exports.default = require.__$__nodeRequire(packageJsonPath);
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[91/*vs/platform/environment/node/http*/], __M([1/*require*/,0/*exports*/,76/*vs/base/node/id*/,45/*vs/platform/node/package*/]), function (require, exports, id_1, package_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getCommonHTTPHeaders() {
        return id_1.getMachineId().then(function (machineId) { return ({
            'X-Market-Client-Id': "VSCode " + package_1.default.version,
            'User-Agent': "VSCode " + package_1.default.version,
            'X-Market-User-Id': machineId
        }); });
    }
    exports.getCommonHTTPHeaders = getCommonHTTPHeaders;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[16/*vs/platform/node/product*/], __M([1/*require*/,0/*exports*/,7/*path*/,19/*vs/base/common/uri*/]), function (require, exports, path, uri_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var rootPath = path.dirname(uri_1.default.parse(require.toUrl('')).fsPath);
    var productJsonPath = path.join(rootPath, 'product.json');
    var product = require.__$__nodeRequire(productJsonPath);
    if (process.env['VSCODE_DEV']) {
        product.nameShort += ' Dev';
        product.nameLong += ' Dev';
        product.dataFolderName += '-dev';
    }
    exports.default = product;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[56/*vs/code/electron-main/window*/], __M([1/*require*/,0/*exports*/,7/*path*/,5/*vs/base/common/platform*/,8/*vs/base/common/objects*/,81/*vs/base/node/profiler*/,65/*vs/nls!vs/code/electron-main/window*/,27/*vs/code/electron-main/storage*/,10/*electron*/,2/*vs/base/common/winjs.base*/,13/*vs/platform/environment/common/environment*/,25/*vs/code/electron-main/log*/,12/*vs/platform/configuration/common/configuration*/,52/*vs/platform/environment/node/argv*/,16/*vs/platform/node/product*/,91/*vs/platform/environment/node/http*/,9/*vs/base/common/lifecycle*/]), function (require, exports, path, platform, objects, profiler_1, nls, storage_1, electron_1, winjs_base_1, environment_1, log_1, configuration_1, argv_1, product_1, http_1, lifecycle_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowMode;
    (function (WindowMode) {
        WindowMode[WindowMode["Maximized"] = 0] = "Maximized";
        WindowMode[WindowMode["Normal"] = 1] = "Normal";
        WindowMode[WindowMode["Minimized"] = 2] = "Minimized";
        WindowMode[WindowMode["Fullscreen"] = 3] = "Fullscreen";
    })(WindowMode = exports.WindowMode || (exports.WindowMode = {}));
    exports.defaultWindowState = function (mode) {
        if (mode === void 0) { mode = WindowMode.Normal; }
        return {
            width: 1024,
            height: 768,
            mode: mode
        };
    };
    var ReadyState;
    (function (ReadyState) {
        /**
         * This window has not loaded any HTML yet
         */
        ReadyState[ReadyState["NONE"] = 0] = "NONE";
        /**
         * This window is loading HTML
         */
        ReadyState[ReadyState["LOADING"] = 1] = "LOADING";
        /**
         * This window is navigating to another HTML
         */
        ReadyState[ReadyState["NAVIGATING"] = 2] = "NAVIGATING";
        /**
         * This window is done loading HTML
         */
        ReadyState[ReadyState["READY"] = 3] = "READY";
    })(ReadyState = exports.ReadyState || (exports.ReadyState = {}));
    var VSCodeWindow = (function () {
        function VSCodeWindow(config, logService, environmentService, configurationService, storageService) {
            this.logService = logService;
            this.environmentService = environmentService;
            this.configurationService = configurationService;
            this.storageService = storageService;
            this.options = config;
            this._lastFocusTime = -1;
            this._readyState = ReadyState.NONE;
            this._extensionDevelopmentPath = config.extensionDevelopmentPath;
            this._isExtensionTestHost = config.isExtensionTestHost;
            this.whenReadyCallbacks = [];
            this.toDispose = [];
            // Load window state
            this.restoreWindowState(config.state);
            // in case we are maximized or fullscreen, only show later after the call to maximize/fullscreen (see below)
            var isFullscreenOrMaximized = (this.currentWindowMode === WindowMode.Maximized || this.currentWindowMode === WindowMode.Fullscreen);
            var options = {
                width: this.windowState.width,
                height: this.windowState.height,
                x: this.windowState.x,
                y: this.windowState.y,
                backgroundColor: this.getBackgroundColor(),
                minWidth: VSCodeWindow.MIN_WIDTH,
                minHeight: VSCodeWindow.MIN_HEIGHT,
                show: !isFullscreenOrMaximized,
                title: product_1.default.nameLong,
                webPreferences: {
                    'backgroundThrottling': false,
                    disableBlinkFeatures: 'Auxclick' // disable auxclick events (see https://developers.google.com/web/updates/2016/10/auxclick)
                }
            };
            if (platform.isLinux) {
                options.icon = path.join(this.environmentService.appRoot, 'resources/linux/code.png'); // Windows and Mac are better off using the embedded icon(s)
            }
            var windowConfig = this.configurationService.getConfiguration('window');
            var useNativeTabs = false;
            if (windowConfig && windowConfig.nativeTabs) {
                options.tabbingIdentifier = product_1.default.nameShort; // this opts in to sierra tabs
                useNativeTabs = true;
            }
            var useCustomTitleStyle = false;
            if (platform.isMacintosh && (!windowConfig || !windowConfig.titleBarStyle || windowConfig.titleBarStyle === 'custom')) {
                var isDev = !this.environmentService.isBuilt || !!config.extensionDevelopmentPath;
                if (!isDev) {
                    useCustomTitleStyle = true; // not enabled when developing due to https://github.com/electron/electron/issues/3647
                }
            }
            if (useNativeTabs) {
                useCustomTitleStyle = false; // native tabs on sierra do not work with custom title style
            }
            if (useCustomTitleStyle) {
                options.titleBarStyle = 'hidden';
                this.hiddenTitleBarStyle = true;
            }
            // Create the browser window.
            this._win = new electron_1.BrowserWindow(options);
            this._id = this._win.id;
            if (useCustomTitleStyle) {
                this._win.setSheetOffset(22); // offset dialogs by the height of the custom title bar if we have any
            }
            // Set relaunch command
            if (platform.isWindows && product_1.default.win32AppUserModelId && typeof this._win.setAppDetails === 'function') {
                this._win.setAppDetails({
                    appId: product_1.default.win32AppUserModelId,
                    relaunchCommand: "\"" + process.execPath + "\" -n",
                    relaunchDisplayName: product_1.default.nameLong
                });
            }
            if (isFullscreenOrMaximized) {
                this.win.maximize();
                if (this.currentWindowMode === WindowMode.Fullscreen) {
                    this.win.setFullScreen(true);
                }
                if (!this.win.isVisible()) {
                    this.win.show(); // to reduce flicker from the default window size to maximize, we only show after maximize
                }
            }
            this._lastFocusTime = Date.now(); // since we show directly, we need to set the last focus time too
            // respect configured menu bar visibility
            this.onConfigurationUpdated();
            // TODO@joao: hook this up to some initialization routine this causes a race between setting the headers and doing
            // a request that needs them. chances are low
            this.setCommonHTTPHeaders();
            // Eventing
            this.registerListeners();
        }
        VSCodeWindow.prototype.setCommonHTTPHeaders = function () {
            var _this = this;
            http_1.getCommonHTTPHeaders().done(function (headers) {
                if (!_this._win) {
                    return;
                }
                var urls = ['https://marketplace.visualstudio.com/*', 'https://*.vsassets.io/*'];
                _this._win.webContents.session.webRequest.onBeforeSendHeaders({ urls: urls }, function (details, cb) {
                    cb({ cancel: false, requestHeaders: objects.assign(details.requestHeaders, headers) });
                });
            });
        };
        VSCodeWindow.prototype.hasHiddenTitleBarStyle = function () {
            return this.hiddenTitleBarStyle;
        };
        Object.defineProperty(VSCodeWindow.prototype, "isExtensionDevelopmentHost", {
            get: function () {
                return !!this._extensionDevelopmentPath;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "isExtensionTestHost", {
            get: function () {
                return this._isExtensionTestHost;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "extensionDevelopmentPath", {
            get: function () {
                return this._extensionDevelopmentPath;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "config", {
            get: function () {
                return this.currentConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "win", {
            get: function () {
                return this._win;
            },
            enumerable: true,
            configurable: true
        });
        VSCodeWindow.prototype.focus = function () {
            if (!this._win) {
                return;
            }
            if (this._win.isMinimized()) {
                this._win.restore();
            }
            this._win.focus();
        };
        Object.defineProperty(VSCodeWindow.prototype, "lastFocusTime", {
            get: function () {
                return this._lastFocusTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "openedWorkspacePath", {
            get: function () {
                return this.currentConfig.workspacePath;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(VSCodeWindow.prototype, "openedFilePath", {
            get: function () {
                return this.currentConfig.filesToOpen && this.currentConfig.filesToOpen[0] && this.currentConfig.filesToOpen[0].filePath;
            },
            enumerable: true,
            configurable: true
        });
        VSCodeWindow.prototype.setReady = function () {
            this._readyState = ReadyState.READY;
            // inform all waiting promises that we are ready now
            while (this.whenReadyCallbacks.length) {
                this.whenReadyCallbacks.pop()(this);
            }
        };
        VSCodeWindow.prototype.ready = function () {
            var _this = this;
            return new winjs_base_1.TPromise(function (c) {
                if (_this._readyState === ReadyState.READY) {
                    return c(_this);
                }
                // otherwise keep and call later when we are ready
                _this.whenReadyCallbacks.push(c);
            });
        };
        Object.defineProperty(VSCodeWindow.prototype, "readyState", {
            get: function () {
                return this._readyState;
            },
            enumerable: true,
            configurable: true
        });
        VSCodeWindow.prototype.registerNavigationListenerOn = function (command, back, forward, acrossEditors) {
            var _this = this;
            this._win.on(command, function (e, cmd) {
                if (_this.readyState !== ReadyState.READY) {
                    return; // window must be ready
                }
                if (cmd === back) {
                    _this.send('vscode:runAction', acrossEditors ? 'workbench.action.openPreviousRecentlyUsedEditor' : 'workbench.action.navigateBack');
                }
                else if (cmd === forward) {
                    _this.send('vscode:runAction', acrossEditors ? 'workbench.action.openNextRecentlyUsedEditor' : 'workbench.action.navigateForward');
                }
            });
        };
        VSCodeWindow.prototype.registerListeners = function () {
            var _this = this;
            // Remember that we loaded
            this._win.webContents.on('did-finish-load', function () {
                _this._readyState = ReadyState.LOADING;
                // Associate properties from the load request if provided
                if (_this.pendingLoadConfig) {
                    _this.currentConfig = _this.pendingLoadConfig;
                    _this.pendingLoadConfig = null;
                }
                // To prevent flashing, we set the window visible after the page has finished to load but before VSCode is loaded
                if (!_this.win.isVisible()) {
                    if (_this.currentWindowMode === WindowMode.Maximized) {
                        _this.win.maximize();
                    }
                    if (!_this.win.isVisible()) {
                        _this.win.show();
                    }
                }
            });
            // App commands support
            this.registerNavigationListenerOn('app-command', 'browser-backward', 'browser-forward', false);
            // Handle code that wants to open links
            this._win.webContents.on('new-window', function (event, url) {
                event.preventDefault();
                electron_1.shell.openExternal(url);
            });
            // Window Focus
            this._win.on('focus', function () {
                _this._lastFocusTime = Date.now();
            });
            // Window Fullscreen
            this._win.on('enter-full-screen', function () {
                _this.sendWhenReady('vscode:enterFullScreen');
            });
            this._win.on('leave-full-screen', function () {
                _this.sendWhenReady('vscode:leaveFullScreen');
            });
            // React to HC color scheme changes (Windows)
            if (platform.isWindows) {
                electron_1.systemPreferences.on('inverted-color-scheme-changed', function () {
                    if (electron_1.systemPreferences.isInvertedColorScheme()) {
                        _this.sendWhenReady('vscode:enterHighContrast');
                    }
                    else {
                        _this.sendWhenReady('vscode:leaveHighContrast');
                    }
                });
            }
            // Window Failed to load
            this._win.webContents.on('did-fail-load', function (event, errorCode, errorDescription) {
                console.warn('[electron event]: fail to load, ', errorDescription);
            });
            // Prevent any kind of navigation triggered by the user!
            // But do not touch this in dev version because it will prevent "Reload" from dev tools
            if (this.environmentService.isBuilt) {
                this._win.webContents.on('will-navigate', function (event) {
                    if (event) {
                        event.preventDefault();
                    }
                });
            }
            // Handle configuration changes
            this.toDispose.push(this.configurationService.onDidUpdateConfiguration(function (e) { return _this.onConfigurationUpdated(); }));
        };
        VSCodeWindow.prototype.onConfigurationUpdated = function () {
            var newMenuBarVisibility = this.getMenuBarVisibility();
            if (newMenuBarVisibility !== this.currentMenuBarVisibility) {
                this.currentMenuBarVisibility = newMenuBarVisibility;
                this.setMenuBarVisibility(newMenuBarVisibility);
            }
            // Swipe command support (macOS)
            if (platform.isMacintosh) {
                var config = this.configurationService.getConfiguration();
                if (config && config.workbench && config.workbench.editor && config.workbench.editor.swipeToNavigate) {
                    this.registerNavigationListenerOn('swipe', 'left', 'right', true);
                }
                else {
                    this._win.removeAllListeners('swipe');
                }
            }
        };
        ;
        VSCodeWindow.prototype.load = function (config) {
            var _this = this;
            // If this is the first time the window is loaded, we associate the paths
            // directly with the window because we assume the loading will just work
            if (this.readyState === ReadyState.NONE) {
                this.currentConfig = config;
            }
            else {
                this.pendingLoadConfig = config;
                this._readyState = ReadyState.NAVIGATING;
            }
            // Make sure to clear any previous edited state
            if (platform.isMacintosh && this._win.isDocumentEdited()) {
                this._win.setDocumentEdited(false);
            }
            // Load URL
            this._win.loadURL(this.getUrl(config));
            // Make window visible if it did not open in N seconds because this indicates an error
            // Only do this when running out of sources and not when running tests
            if (!this.environmentService.isBuilt && !this.environmentService.extensionTestsPath) {
                this.showTimeoutHandle = setTimeout(function () {
                    if (_this._win && !_this._win.isVisible() && !_this._win.isMinimized()) {
                        _this._win.show();
                        _this._win.focus();
                        _this._win.webContents.openDevTools();
                    }
                }, 10000);
            }
            // (--prof-startup) save profile to disk
            var profileStartup = this.environmentService.profileStartup;
            if (profileStartup) {
                profiler_1.stopProfiling(profileStartup.dir, profileStartup.prefix)
                    .done(undefined, function (err) { return console.error(err); });
            }
        };
        VSCodeWindow.prototype.reload = function (cli) {
            // Inherit current properties but overwrite some
            var configuration = objects.mixin({}, this.currentConfig);
            delete configuration.filesToOpen;
            delete configuration.filesToCreate;
            delete configuration.filesToDiff;
            // Some configuration things get inherited if the window is being reloaded and we are
            // in extension development mode. These options are all development related.
            if (this.isExtensionDevelopmentHost && cli) {
                configuration.verbose = cli.verbose;
                configuration.debugPluginHost = cli.debugPluginHost;
                configuration.debugBrkPluginHost = cli.debugBrkPluginHost;
                configuration['extensions-dir'] = cli['extensions-dir'];
            }
            configuration.isInitialStartup = false; // since this is a reload
            // Load config
            this.load(configuration);
        };
        VSCodeWindow.prototype.getUrl = function (windowConfiguration) {
            var url = require.toUrl('vs/workbench/electron-browser/bootstrap/index.html');
            // Set zoomlevel
            var windowConfig = this.configurationService.getConfiguration('window');
            var zoomLevel = windowConfig && windowConfig.zoomLevel;
            if (typeof zoomLevel === 'number') {
                windowConfiguration.zoomLevel = zoomLevel;
            }
            // Set fullscreen state
            windowConfiguration.fullscreen = this._win.isFullScreen();
            // Set Accessibility Config
            windowConfiguration.highContrast = platform.isWindows && electron_1.systemPreferences.isInvertedColorScheme() && (!windowConfig || windowConfig.autoDetectHighContrast);
            windowConfiguration.accessibilitySupport = electron_1.app.isAccessibilitySupportEnabled();
            // Theme
            windowConfiguration.baseTheme = this.getBaseTheme();
            windowConfiguration.backgroundColor = this.getBackgroundColor();
            // Perf Counters
            windowConfiguration.perfStartTime = global.perfStartTime;
            windowConfiguration.perfAppReady = global.perfAppReady;
            windowConfiguration.perfWindowLoadTime = Date.now();
            // Config (combination of process.argv and window configuration)
            var environment = argv_1.parseArgs(process.argv);
            var config = objects.assign(environment, windowConfiguration);
            for (var key in config) {
                if (!config[key]) {
                    delete config[key]; // only send over properties that have a true value
                }
            }
            url += '?config=' + encodeURIComponent(JSON.stringify(config));
            return url;
        };
        VSCodeWindow.prototype.getBaseTheme = function () {
            if (platform.isWindows && electron_1.systemPreferences.isInvertedColorScheme()) {
                return 'hc-black';
            }
            var theme = this.storageService.getItem(VSCodeWindow.themeStorageKey, 'vs-dark');
            return theme.split(' ')[0];
        };
        VSCodeWindow.prototype.getBackgroundColor = function () {
            if (platform.isWindows && electron_1.systemPreferences.isInvertedColorScheme()) {
                return '#000000';
            }
            var background = this.storageService.getItem(VSCodeWindow.themeBackgroundStorageKey, null);
            if (!background) {
                var baseTheme = this.getBaseTheme();
                return baseTheme === 'hc-black' ? '#000000' : (baseTheme === 'vs' ? '#FFFFFF' : (platform.isMacintosh ? '#171717' : '#1E1E1E')); // https://github.com/electron/electron/issues/5150
            }
            return background;
        };
        VSCodeWindow.prototype.serializeWindowState = function () {
            if (this.win.isFullScreen()) {
                return {
                    mode: WindowMode.Fullscreen,
                    // still carry over window dimensions from previous sessions!
                    width: this.windowState.width,
                    height: this.windowState.height,
                    x: this.windowState.x,
                    y: this.windowState.y
                };
            }
            var state = Object.create(null);
            var mode;
            // get window mode
            if (!platform.isMacintosh && this.win.isMaximized()) {
                mode = WindowMode.Maximized;
            }
            else if (this.win.isMinimized()) {
                mode = WindowMode.Minimized;
            }
            else {
                mode = WindowMode.Normal;
            }
            // we don't want to save minimized state, only maximized or normal
            if (mode === WindowMode.Maximized) {
                state.mode = WindowMode.Maximized;
            }
            else if (mode !== WindowMode.Minimized) {
                state.mode = WindowMode.Normal;
            }
            // only consider non-minimized window states
            if (mode === WindowMode.Normal || mode === WindowMode.Maximized) {
                var pos = this.win.getPosition();
                var size = this.win.getSize();
                state.x = pos[0];
                state.y = pos[1];
                state.width = size[0];
                state.height = size[1];
            }
            return state;
        };
        VSCodeWindow.prototype.restoreWindowState = function (state) {
            if (state) {
                try {
                    state = this.validateWindowState(state);
                }
                catch (err) {
                    this.logService.log("Unexpected error validating window state: " + err + "\n" + err.stack); // somehow display API can be picky about the state to validate
                }
            }
            if (!state) {
                state = exports.defaultWindowState();
            }
            this.windowState = state;
            this.currentWindowMode = this.windowState.mode;
        };
        VSCodeWindow.prototype.validateWindowState = function (state) {
            if (!state) {
                return null;
            }
            if ([state.x, state.y, state.width, state.height].some(function (n) { return typeof n !== 'number'; })) {
                return null;
            }
            if (state.width <= 0 || state.height <= 0) {
                return null;
            }
            var displays = electron_1.screen.getAllDisplays();
            // Single Monitor: be strict about x/y positioning
            if (displays.length === 1) {
                var displayBounds = displays[0].bounds;
                // Careful with maximized: in that mode x/y can well be negative!
                if (state.mode !== WindowMode.Maximized && displayBounds.width > 0 && displayBounds.height > 0 /* Linux X11 sessions sometimes report wrong display bounds */) {
                    if (state.x < displayBounds.x) {
                        state.x = displayBounds.x; // prevent window from falling out of the screen to the left
                    }
                    if (state.y < displayBounds.y) {
                        state.y = displayBounds.y; // prevent window from falling out of the screen to the top
                    }
                    if (state.x > (displayBounds.x + displayBounds.width)) {
                        state.x = displayBounds.x; // prevent window from falling out of the screen to the right
                    }
                    if (state.y > (displayBounds.y + displayBounds.height)) {
                        state.y = displayBounds.y; // prevent window from falling out of the screen to the bottom
                    }
                    if (state.width > displayBounds.width) {
                        state.width = displayBounds.width; // prevent window from exceeding display bounds width
                    }
                    if (state.height > displayBounds.height) {
                        state.height = displayBounds.height; // prevent window from exceeding display bounds height
                    }
                }
                if (state.mode === WindowMode.Maximized) {
                    return exports.defaultWindowState(WindowMode.Maximized); // when maximized, make sure we have good values when the user restores the window
                }
                return state;
            }
            // Multi Monitor: be less strict because metrics can be crazy
            var bounds = { x: state.x, y: state.y, width: state.width, height: state.height };
            var display = electron_1.screen.getDisplayMatching(bounds);
            if (display && display.bounds.x + display.bounds.width > bounds.x && display.bounds.y + display.bounds.height > bounds.y) {
                if (state.mode === WindowMode.Maximized) {
                    var defaults = exports.defaultWindowState(WindowMode.Maximized); // when maximized, make sure we have good values when the user restores the window
                    defaults.x = state.x; // carefull to keep x/y position so that the window ends up on the correct monitor
                    defaults.y = state.y;
                    return defaults;
                }
                return state;
            }
            return null;
        };
        VSCodeWindow.prototype.getBounds = function () {
            var pos = this.win.getPosition();
            var dimension = this.win.getSize();
            return { x: pos[0], y: pos[1], width: dimension[0], height: dimension[1] };
        };
        VSCodeWindow.prototype.toggleFullScreen = function () {
            var willBeFullScreen = !this.win.isFullScreen();
            // set fullscreen flag on window
            this.win.setFullScreen(willBeFullScreen);
            // respect configured menu bar visibility or default to toggle if not set
            this.setMenuBarVisibility(this.currentMenuBarVisibility, false);
        };
        VSCodeWindow.prototype.getMenuBarVisibility = function () {
            var windowConfig = this.configurationService.getConfiguration('window');
            if (!windowConfig || !windowConfig.menuBarVisibility) {
                return 'default';
            }
            var menuBarVisibility = windowConfig.menuBarVisibility;
            if (['visible', 'toggle', 'hidden'].indexOf(menuBarVisibility) < 0) {
                menuBarVisibility = 'default';
            }
            return menuBarVisibility;
        };
        VSCodeWindow.prototype.setMenuBarVisibility = function (visibility, notify) {
            var _this = this;
            if (notify === void 0) { notify = true; }
            if (platform.isMacintosh) {
                return; // ignore for macOS platform
            }
            var isFullscreen = this.win.isFullScreen();
            switch (visibility) {
                case ('default'):
                    this.win.setMenuBarVisibility(!isFullscreen);
                    this.win.setAutoHideMenuBar(isFullscreen);
                    break;
                case ('visible'):
                    this.win.setMenuBarVisibility(true);
                    this.win.setAutoHideMenuBar(false);
                    break;
                case ('toggle'):
                    this.win.setMenuBarVisibility(false);
                    this.win.setAutoHideMenuBar(true);
                    if (notify) {
                        this.send('vscode:showInfoMessage', nls.localize(0, null));
                    }
                    ;
                    break;
                case ('hidden'):
                    // for some weird reason that I have no explanation for, the menu bar is not hiding when calling
                    // this without timeout (see https://github.com/Microsoft/vscode/issues/19777). there seems to be
                    // a timing issue with us opening the first window and the menu bar getting created. somehow the
                    // fact that we want to hide the menu without being able to bring it back via Alt key makes Electron
                    // still show the menu. Unable to reproduce from a simple Hello World application though...
                    setTimeout(function () {
                        _this.win.setMenuBarVisibility(false);
                        _this.win.setAutoHideMenuBar(false);
                    });
                    break;
            }
            ;
        };
        VSCodeWindow.prototype.sendWhenReady = function (channel) {
            var _this = this;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            this.ready().then(function () {
                _this.send.apply(_this, [channel].concat(args));
            });
        };
        VSCodeWindow.prototype.send = function (channel) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            (_a = this._win.webContents).send.apply(_a, [channel].concat(args));
            var _a;
        };
        VSCodeWindow.prototype.dispose = function () {
            if (this.showTimeoutHandle) {
                clearTimeout(this.showTimeoutHandle);
            }
            this.toDispose = lifecycle_1.dispose(this.toDispose);
            this._win = null; // Important to dereference the window object to allow for GC
        };
        return VSCodeWindow;
    }());
    VSCodeWindow.themeStorageKey = 'theme';
    VSCodeWindow.themeBackgroundStorageKey = 'themeBackground';
    VSCodeWindow.MIN_WIDTH = 200;
    VSCodeWindow.MIN_HEIGHT = 120;
    VSCodeWindow = __decorate([
        __param(1, log_1.ILogService),
        __param(2, environment_1.IEnvironmentService),
        __param(3, configuration_1.IConfigurationService),
        __param(4, storage_1.IStorageService)
    ], VSCodeWindow);
    exports.VSCodeWindow = VSCodeWindow;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[31/*vs/code/electron-main/lifecycle*/], __M([1/*require*/,0/*exports*/,10/*electron*/,2/*vs/base/common/winjs.base*/,56/*vs/code/electron-main/window*/,13/*vs/platform/environment/common/environment*/,25/*vs/code/electron-main/log*/,27/*vs/code/electron-main/storage*/,4/*vs/base/common/event*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, electron_1, winjs_base_1, window_1, environment_1, log_1, storage_1, event_1, instantiation_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ILifecycleService = instantiation_1.createDecorator('lifecycleService');
    var UnloadReason;
    (function (UnloadReason) {
        UnloadReason[UnloadReason["CLOSE"] = 0] = "CLOSE";
        UnloadReason[UnloadReason["QUIT"] = 1] = "QUIT";
        UnloadReason[UnloadReason["RELOAD"] = 2] = "RELOAD";
        UnloadReason[UnloadReason["LOAD"] = 3] = "LOAD";
    })(UnloadReason = exports.UnloadReason || (exports.UnloadReason = {}));
    var LifecycleService = (function () {
        function LifecycleService(environmentService, logService, storageService) {
            this.environmentService = environmentService;
            this.logService = logService;
            this.storageService = storageService;
            this._onBeforeQuit = new event_1.Emitter();
            this.onBeforeQuit = this._onBeforeQuit.event;
            this._onBeforeWindowClose = new event_1.Emitter();
            this.onBeforeWindowClose = this._onBeforeWindowClose.event;
            this.windowToCloseRequest = Object.create(null);
            this.quitRequested = false;
            this.oneTimeListenerTokenGenerator = 0;
            this._wasRestarted = false;
            this.handleRestarted();
        }
        LifecycleService.prototype.handleRestarted = function () {
            this._wasRestarted = !!this.storageService.getItem(LifecycleService.QUIT_FROM_RESTART_MARKER);
            if (this._wasRestarted) {
                this.storageService.removeItem(LifecycleService.QUIT_FROM_RESTART_MARKER); // remove the marker right after if found
            }
        };
        Object.defineProperty(LifecycleService.prototype, "wasRestarted", {
            get: function () {
                return this._wasRestarted;
            },
            enumerable: true,
            configurable: true
        });
        LifecycleService.prototype.ready = function () {
            this.registerListeners();
        };
        LifecycleService.prototype.registerListeners = function () {
            var _this = this;
            // before-quit
            electron_1.app.on('before-quit', function (e) {
                _this.logService.log('Lifecycle#before-quit');
                if (!_this.quitRequested) {
                    _this._onBeforeQuit.fire(); // only send this if this is the first quit request we have
                }
                _this.quitRequested = true;
            });
            // window-all-closed
            electron_1.app.on('window-all-closed', function () {
                _this.logService.log('Lifecycle#window-all-closed');
                // Windows/Linux: we quit when all windows have closed
                // Mac: we only quit when quit was requested
                // --wait: we quit when all windows are closed
                if (_this.quitRequested || process.platform !== 'darwin' || _this.environmentService.wait) {
                    electron_1.app.quit();
                }
            });
        };
        LifecycleService.prototype.registerWindow = function (vscodeWindow) {
            var _this = this;
            // Window Before Closing: Main -> Renderer
            vscodeWindow.win.on('close', function (e) {
                var windowId = vscodeWindow.id;
                _this.logService.log('Lifecycle#window-before-close', windowId);
                // The window already acknowledged to be closed
                if (_this.windowToCloseRequest[windowId]) {
                    _this.logService.log('Lifecycle#window-close', windowId);
                    delete _this.windowToCloseRequest[windowId];
                    return;
                }
                // Otherwise prevent unload and handle it from window
                e.preventDefault();
                _this.unload(vscodeWindow, UnloadReason.CLOSE).done(function (veto) {
                    if (!veto) {
                        _this.windowToCloseRequest[windowId] = true;
                        _this._onBeforeWindowClose.fire(vscodeWindow);
                        vscodeWindow.win.close();
                    }
                    else {
                        _this.quitRequested = false;
                        delete _this.windowToCloseRequest[windowId];
                    }
                });
            });
        };
        LifecycleService.prototype.unload = function (vscodeWindow, reason) {
            var _this = this;
            // Always allow to unload a window that is not yet ready
            if (vscodeWindow.readyState !== window_1.ReadyState.READY) {
                return winjs_base_1.TPromise.as(false);
            }
            this.logService.log('Lifecycle#unload()', vscodeWindow.id);
            return new winjs_base_1.TPromise(function (c) {
                var oneTimeEventToken = _this.oneTimeListenerTokenGenerator++;
                var okChannel = "vscode:ok" + oneTimeEventToken;
                var cancelChannel = "vscode:cancel" + oneTimeEventToken;
                electron_1.ipcMain.once(okChannel, function () {
                    c(false); // no veto
                });
                electron_1.ipcMain.once(cancelChannel, function () {
                    // Any cancellation also cancels a pending quit if present
                    if (_this.pendingQuitPromiseComplete) {
                        _this.pendingQuitPromiseComplete(true /* veto */);
                        _this.pendingQuitPromiseComplete = null;
                        _this.pendingQuitPromise = null;
                    }
                    c(true); // veto
                });
                vscodeWindow.send('vscode:beforeUnload', { okChannel: okChannel, cancelChannel: cancelChannel, reason: _this.quitRequested ? UnloadReason.QUIT : reason });
            });
        };
        /**
         * A promise that completes to indicate if the quit request has been veto'd
         * by the user or not.
         */
        LifecycleService.prototype.quit = function (fromUpdate) {
            var _this = this;
            this.logService.log('Lifecycle#quit()');
            if (!this.pendingQuitPromise) {
                this.pendingQuitPromise = new winjs_base_1.TPromise(function (c) {
                    // Store as field to access it from a window cancellation
                    _this.pendingQuitPromiseComplete = c;
                    electron_1.app.once('will-quit', function () {
                        if (_this.pendingQuitPromiseComplete) {
                            if (fromUpdate) {
                                _this.storageService.setItem(LifecycleService.QUIT_FROM_RESTART_MARKER, true);
                            }
                            _this.pendingQuitPromiseComplete(false /* no veto */);
                            _this.pendingQuitPromiseComplete = null;
                            _this.pendingQuitPromise = null;
                        }
                    });
                    electron_1.app.quit();
                });
            }
            return this.pendingQuitPromise;
        };
        LifecycleService.prototype.kill = function (code) {
            electron_1.app.exit(code);
        };
        LifecycleService.prototype.relaunch = function (options) {
            var _this = this;
            var args = process.argv.slice(1);
            if (options && options.addArgs) {
                args.push.apply(args, options.addArgs);
            }
            if (options && options.removeArgs) {
                for (var _i = 0, _a = options.removeArgs; _i < _a.length; _i++) {
                    var a = _a[_i];
                    var idx = args.indexOf(a);
                    if (idx >= 0) {
                        args.splice(idx, 1);
                    }
                }
            }
            var vetod = false;
            electron_1.app.once('quit', function () {
                if (!vetod) {
                    _this.storageService.setItem(LifecycleService.QUIT_FROM_RESTART_MARKER, true);
                    electron_1.app.relaunch({ args: args });
                }
            });
            this.quit().then(function (veto) {
                vetod = veto;
            });
        };
        LifecycleService.prototype.isQuitRequested = function () {
            return !!this.quitRequested;
        };
        return LifecycleService;
    }());
    LifecycleService.QUIT_FROM_RESTART_MARKER = 'quit.from.restart'; // use a marker to find out if the session was restarted
    LifecycleService = __decorate([
        __param(0, environment_1.IEnvironmentService),
        __param(1, log_1.ILogService),
        __param(2, storage_1.IStorageService)
    ], LifecycleService);
    exports.LifecycleService = LifecycleService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/






define(__m[95/*vs/platform/environment/node/environmentService*/], __M([1/*require*/,0/*exports*/,49/*crypto*/,79/*vs/base/node/paths*/,26/*os*/,7/*path*/,19/*vs/base/common/uri*/,43/*vs/base/common/decorators*/,45/*vs/platform/node/package*/,16/*vs/platform/node/product*/]), function (require, exports, crypto, paths, os, path, uri_1, decorators_1, package_1, product_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getUniqueUserId() {
        var username;
        if (process.platform === 'win32') {
            username = process.env.USERNAME;
        }
        else {
            username = process.env.USER;
        }
        if (!username) {
            return ''; // fail gracefully if there is no user name
        }
        // use sha256 to ensure the userid value can be used in filenames and are unique
        return crypto.createHash('sha256').update(username).digest('hex').substr(0, 6);
    }
    function getNixIPCHandle(userDataPath, type) {
        return path.join(userDataPath, package_1.default.version + "-" + type + ".sock");
    }
    function getWin32IPCHandle(type) {
        // Support to run VS Code multiple times as different user
        // by making the socket unique over the logged in user
        var userId = getUniqueUserId();
        var name = product_1.default.applicationName + (userId ? "-" + userId : '');
        return "\\\\.\\pipe\\" + name + "-" + package_1.default.version + "-" + type + "-sock";
    }
    function getIPCHandle(userDataPath, type) {
        if (process.platform === 'win32') {
            return getWin32IPCHandle(type);
        }
        else {
            return getNixIPCHandle(userDataPath, type);
        }
    }
    var EnvironmentService = (function () {
        function EnvironmentService(_args, _execPath) {
            this._args = _args;
            this._execPath = _execPath;
        }
        Object.defineProperty(EnvironmentService.prototype, "args", {
            get: function () { return this._args; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appRoot", {
            get: function () { return path.dirname(uri_1.default.parse(require.toUrl('')).fsPath); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "execPath", {
            get: function () { return this._execPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "userHome", {
            get: function () { return os.homedir(); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "userDataPath", {
            get: function () { return parseUserDataDir(this._args, process); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appNameLong", {
            get: function () { return product_1.default.nameLong; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appQuality", {
            get: function () { return product_1.default.quality; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appSettingsHome", {
            get: function () { return path.join(this.userDataPath, 'User'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appSettingsPath", {
            get: function () { return path.join(this.appSettingsHome, 'settings.json'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "appKeybindingsPath", {
            get: function () { return path.join(this.appSettingsHome, 'keybindings.json'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "isExtensionDevelopment", {
            get: function () { return !!this._args.extensionDevelopmentPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "backupHome", {
            get: function () { return path.join(this.userDataPath, 'Backups'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "backupWorkspacesPath", {
            get: function () { return path.join(this.backupHome, 'workspaces.json'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "extensionsPath", {
            get: function () { return parsePathArg(this._args['extensions-dir'], process) || path.join(this.userHome, product_1.default.dataFolderName, 'extensions'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "extensionDevelopmentPath", {
            get: function () { return this._args.extensionDevelopmentPath ? path.normalize(this._args.extensionDevelopmentPath) : this._args.extensionDevelopmentPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "extensionTestsPath", {
            get: function () { return this._args.extensionTestsPath ? path.normalize(this._args.extensionTestsPath) : this._args.extensionTestsPath; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "disableExtensions", {
            get: function () { return this._args['disable-extensions']; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "debugExtensionHost", {
            get: function () { return parseExtensionHostPort(this._args, this.isBuilt); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "isBuilt", {
            get: function () { return !process.env['VSCODE_DEV']; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "verbose", {
            get: function () { return this._args.verbose; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "wait", {
            get: function () { return this._args.wait; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "logExtensionHostCommunication", {
            get: function () { return this._args.logExtensionHostCommunication; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "performance", {
            get: function () { return this._args.performance; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "profileStartup", {
            get: function () {
                if (this._args['prof-startup']) {
                    return {
                        prefix: process.env.VSCODE_PROFILES_PREFIX,
                        dir: os.homedir()
                    };
                }
                else {
                    return undefined;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "mainIPCHandle", {
            get: function () { return getIPCHandle(this.userDataPath, 'main'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "sharedIPCHandle", {
            get: function () { return getIPCHandle(this.userDataPath, 'shared'); },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EnvironmentService.prototype, "nodeCachedDataDir", {
            get: function () { return this.isBuilt ? path.join(this.userDataPath, 'CachedData', product_1.default.commit) : undefined; },
            enumerable: true,
            configurable: true
        });
        return EnvironmentService;
    }());
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "appRoot", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "userHome", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "userDataPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "appSettingsHome", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "appSettingsPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "appKeybindingsPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "isExtensionDevelopment", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "backupHome", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "backupWorkspacesPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "extensionsPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "extensionDevelopmentPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "extensionTestsPath", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "debugExtensionHost", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "profileStartup", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "mainIPCHandle", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "sharedIPCHandle", null);
    __decorate([
        decorators_1.memoize
    ], EnvironmentService.prototype, "nodeCachedDataDir", null);
    exports.EnvironmentService = EnvironmentService;
    function parseExtensionHostPort(args, isBuild) {
        var portStr = args.debugBrkPluginHost || args.debugPluginHost;
        var port = Number(portStr) || (!isBuild ? 5870 : null);
        var brk = port ? Boolean(!!args.debugBrkPluginHost) : false;
        return { port: port, break: brk };
    }
    exports.parseExtensionHostPort = parseExtensionHostPort;
    function parsePathArg(arg, process) {
        if (!arg) {
            return undefined;
        }
        // Determine if the arg is relative or absolute, if relative use the original CWD
        // (VSCODE_CWD), not the potentially overridden one (process.cwd()).
        var resolved = path.resolve(arg);
        if (path.normalize(arg) === resolved) {
            return resolved;
        }
        else {
            return path.resolve(process.env['VSCODE_CWD'] || process.cwd(), arg);
        }
    }
    function parseUserDataDir(args, process) {
        return parsePathArg(args['user-data-dir'], process) || path.resolve(paths.getDefaultUserDataPath(process.platform));
    }
    exports.parseUserDataDir = parseUserDataDir;
});

define(__m[22/*vs/platform/platform*/], __M([1/*require*/,0/*exports*/,6/*vs/base/common/types*/,59/*vs/base/common/assert*/]), function (require, exports, Types, Assert) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegistryImpl = (function () {
        function RegistryImpl() {
            this.data = {};
        }
        RegistryImpl.prototype.add = function (id, data) {
            Assert.ok(Types.isString(id));
            Assert.ok(Types.isObject(data));
            Assert.ok(!this.data.hasOwnProperty(id), 'There is already an extension with this id');
            this.data[id] = data;
        };
        RegistryImpl.prototype.knows = function (id) {
            return this.data.hasOwnProperty(id);
        };
        RegistryImpl.prototype.as = function (id) {
            return this.data[id] || null;
        };
        return RegistryImpl;
    }());
    exports.Registry = new RegistryImpl();
    /**
     * A base class for registries that leverage the instantiation service to create instances.
     */
    var BaseRegistry = (function () {
        function BaseRegistry() {
            this.toBeInstantiated = [];
            this.instances = [];
        }
        BaseRegistry.prototype.setInstantiationService = function (service) {
            this.instantiationService = service;
            while (this.toBeInstantiated.length > 0) {
                var entry = this.toBeInstantiated.shift();
                this.instantiate(entry);
            }
        };
        BaseRegistry.prototype.instantiate = function (ctor) {
            var instance = this.instantiationService.createInstance(ctor);
            this.instances.push(instance);
        };
        BaseRegistry.prototype._register = function (ctor) {
            if (this.instantiationService) {
                this.instantiate(ctor);
            }
            else {
                this.toBeInstantiated.push(ctor);
            }
        };
        BaseRegistry.prototype._getInstances = function () {
            return this.instances.slice(0);
        };
        BaseRegistry.prototype._setInstances = function (instances) {
            this.instances = instances;
        };
        return BaseRegistry;
    }());
    exports.BaseRegistry = BaseRegistry;
});

define(__m[53/*vs/platform/jsonschemas/common/jsonContributionRegistry*/], __M([1/*require*/,0/*exports*/,22/*vs/platform/platform*/,103/*vs/base/common/eventEmitter*/]), function (require, exports, platform, eventEmitter_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extensions = {
        JSONContribution: 'base.contributions.json'
    };
    function normalizeId(id) {
        if (id.length > 0 && id.charAt(id.length - 1) === '#') {
            return id.substring(0, id.length - 1);
        }
        return id;
    }
    var JSONContributionRegistry = (function () {
        function JSONContributionRegistry() {
            this.schemasById = {};
            this.eventEmitter = new eventEmitter_1.EventEmitter();
        }
        JSONContributionRegistry.prototype.addRegistryChangedListener = function (callback) {
            return this.eventEmitter.addListener('registryChanged', callback);
        };
        JSONContributionRegistry.prototype.registerSchema = function (uri, unresolvedSchemaContent) {
            this.schemasById[normalizeId(uri)] = unresolvedSchemaContent;
            this.eventEmitter.emit('registryChanged', {});
        };
        JSONContributionRegistry.prototype.getSchemaContributions = function () {
            return {
                schemas: this.schemasById,
            };
        };
        return JSONContributionRegistry;
    }());
    var jsonContributionRegistry = new JSONContributionRegistry();
    platform.Registry.add(exports.Extensions.JSONContribution, jsonContributionRegistry);
});

define(__m[98/*vs/platform/extensions/common/extensionsRegistry*/], __M([1/*require*/,0/*exports*/,69/*vs/nls!vs/platform/extensions/common/extensionsRegistry*/,17/*vs/base/common/errors*/,128/*vs/base/common/severity*/,53/*vs/platform/jsonschemas/common/jsonContributionRegistry*/,22/*vs/platform/platform*/]), function (require, exports, nls, errors_1, severity_1, jsonContributionRegistry_1, platform_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var hasOwnProperty = Object.hasOwnProperty;
    var schemaRegistry = platform_1.Registry.as(jsonContributionRegistry_1.Extensions.JSONContribution);
    var ExtensionMessageCollector = (function () {
        function ExtensionMessageCollector(messageHandler, source) {
            this._messageHandler = messageHandler;
            this._source = source;
        }
        ExtensionMessageCollector.prototype._msg = function (type, message) {
            this._messageHandler({
                type: type,
                message: message,
                source: this._source
            });
        };
        ExtensionMessageCollector.prototype.error = function (message) {
            this._msg(severity_1.default.Error, message);
        };
        ExtensionMessageCollector.prototype.warn = function (message) {
            this._msg(severity_1.default.Warning, message);
        };
        ExtensionMessageCollector.prototype.info = function (message) {
            this._msg(severity_1.default.Info, message);
        };
        return ExtensionMessageCollector;
    }());
    exports.ExtensionMessageCollector = ExtensionMessageCollector;
    var ExtensionPoint = (function () {
        function ExtensionPoint(name) {
            this.name = name;
            this._handler = null;
            this._users = null;
            this._done = false;
        }
        ExtensionPoint.prototype.setHandler = function (handler) {
            if (this._handler !== null || this._done) {
                throw new Error('Handler already set!');
            }
            this._handler = handler;
            this._handle();
        };
        ExtensionPoint.prototype.acceptUsers = function (users) {
            if (this._users !== null || this._done) {
                throw new Error('Users already set!');
            }
            this._users = users;
            this._handle();
        };
        ExtensionPoint.prototype._handle = function () {
            if (this._handler === null || this._users === null) {
                return;
            }
            this._done = true;
            var handler = this._handler;
            this._handler = null;
            var users = this._users;
            this._users = null;
            try {
                handler(users);
            }
            catch (err) {
                errors_1.onUnexpectedError(err);
            }
        };
        return ExtensionPoint;
    }());
    exports.ExtensionPoint = ExtensionPoint;
    var schemaId = 'vscode://schemas/vscode-extensions';
    var schema = {
        properties: {
            engines: {
                type: 'object',
                properties: {
                    'vscode': {
                        type: 'string',
                        description: nls.localize(0, null),
                        default: '^0.10.0',
                    }
                }
            },
            publisher: {
                description: nls.localize(1, null),
                type: 'string'
            },
            displayName: {
                description: nls.localize(2, null),
                type: 'string'
            },
            categories: {
                description: nls.localize(3, null),
                type: 'array',
                uniqueItems: true,
                items: {
                    type: 'string',
                    enum: ['Languages', 'Snippets', 'Linters', 'Themes', 'Debuggers', 'Other', 'Keymaps', 'Formatters', 'Extension Packs']
                }
            },
            galleryBanner: {
                type: 'object',
                description: nls.localize(4, null),
                properties: {
                    color: {
                        description: nls.localize(5, null),
                        type: 'string'
                    },
                    theme: {
                        description: nls.localize(6, null),
                        type: 'string',
                        enum: ['dark', 'light']
                    }
                }
            },
            contributes: {
                description: nls.localize(7, null),
                type: 'object',
                properties: {},
                default: {}
            },
            preview: {
                type: 'boolean',
                description: nls.localize(8, null),
            },
            activationEvents: {
                description: nls.localize(9, null),
                type: 'array',
                items: {
                    type: 'string',
                    defaultSnippets: [{ label: 'onLanguage', body: 'onLanguage:${1:languageId}' }, { label: 'onCommand', body: 'onCommand:${2:commandId}' }, { label: 'onDebug', body: 'onDebug:${3:type}' }, { label: 'workspaceContains', body: 'workspaceContains:${4:fileName}' }],
                }
            },
            badges: {
                type: 'array',
                description: nls.localize(10, null),
                items: {
                    type: 'object',
                    required: ['url', 'href', 'description'],
                    properties: {
                        url: {
                            type: 'string',
                            description: nls.localize(11, null)
                        },
                        href: {
                            type: 'string',
                            description: nls.localize(12, null)
                        },
                        description: {
                            type: 'string',
                            description: nls.localize(13, null)
                        }
                    }
                }
            },
            extensionDependencies: {
                description: nls.localize(14, null),
                type: 'array',
                uniqueItems: true,
                items: {
                    type: 'string'
                }
            },
            scripts: {
                type: 'object',
                properties: {
                    'vscode:prepublish': {
                        description: nls.localize(15, null),
                        type: 'string'
                    }
                }
            },
            icon: {
                type: 'string',
                description: nls.localize(16, null)
            }
        }
    };
    var ExtensionsRegistryImpl = (function () {
        function ExtensionsRegistryImpl() {
            this._extensionPoints = {};
        }
        ExtensionsRegistryImpl.prototype.registerExtensionPoint = function (extensionPoint, deps, jsonSchema) {
            if (hasOwnProperty.call(this._extensionPoints, extensionPoint)) {
                throw new Error('Duplicate extension point: ' + extensionPoint);
            }
            var result = new ExtensionPoint(extensionPoint);
            this._extensionPoints[extensionPoint] = result;
            schema.properties['contributes'].properties[extensionPoint] = jsonSchema;
            schemaRegistry.registerSchema(schemaId, schema);
            return result;
        };
        ExtensionsRegistryImpl.prototype.getExtensionPoints = function () {
            var _this = this;
            return Object.keys(this._extensionPoints).map(function (point) { return _this._extensionPoints[point]; });
        };
        return ExtensionsRegistryImpl;
    }());
    exports.ExtensionsRegistryImpl = ExtensionsRegistryImpl;
    var PRExtensions = {
        ExtensionsRegistry: 'ExtensionsRegistry'
    };
    platform_1.Registry.add(PRExtensions.ExtensionsRegistry, new ExtensionsRegistryImpl());
    exports.ExtensionsRegistry = platform_1.Registry.as(PRExtensions.ExtensionsRegistry);
    schemaRegistry.registerSchema(schemaId, schema);
});

define(__m[33/*vs/platform/configuration/common/configurationRegistry*/], __M([1/*require*/,0/*exports*/,67/*vs/nls!vs/platform/configuration/common/configurationRegistry*/,4/*vs/base/common/event*/,22/*vs/platform/platform*/,8/*vs/base/common/objects*/,6/*vs/base/common/types*/,11/*vs/base/common/strings*/,98/*vs/platform/extensions/common/extensionsRegistry*/,53/*vs/platform/jsonschemas/common/jsonContributionRegistry*/]), function (require, exports, nls, event_1, platform_1, objects, types, strings, extensionsRegistry_1, jsonContributionRegistry_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Extensions = {
        Configuration: 'base.contributions.configuration'
    };
    var schemaId = 'vscode://schemas/settings';
    var editorConfigurationSchemaId = 'vscode://schemas/settings/editor';
    var contributionRegistry = platform_1.Registry.as(jsonContributionRegistry_1.Extensions.JSONContribution);
    var ConfigurationRegistry = (function () {
        function ConfigurationRegistry() {
            this.overrideIdentifiers = [];
            this.configurationContributors = [];
            this.configurationSchema = { properties: {}, patternProperties: {}, additionalProperties: false, errorMessage: 'Unknown configuration setting' };
            this.editorConfigurationSchema = { properties: {}, patternProperties: {}, additionalProperties: false, errorMessage: 'Unknown editor configuration setting' };
            this._onDidRegisterConfiguration = new event_1.Emitter();
            this.configurationProperties = {};
            this.computeOverridePropertyPattern();
            contributionRegistry.registerSchema(schemaId, this.configurationSchema);
            contributionRegistry.registerSchema(editorConfigurationSchemaId, this.editorConfigurationSchema);
        }
        Object.defineProperty(ConfigurationRegistry.prototype, "onDidRegisterConfiguration", {
            get: function () {
                return this._onDidRegisterConfiguration.event;
            },
            enumerable: true,
            configurable: true
        });
        ConfigurationRegistry.prototype.registerConfiguration = function (configuration, validate) {
            if (validate === void 0) { validate = true; }
            this.registerConfigurations([configuration], validate);
        };
        ConfigurationRegistry.prototype.registerConfigurations = function (configurations, validate) {
            var _this = this;
            if (validate === void 0) { validate = true; }
            configurations.forEach(function (configuration) {
                _this.validateAndRegisterProperties(configuration, validate); // fills in defaults
                _this.configurationContributors.push(configuration);
                _this.registerJSONConfiguration(configuration);
                _this.updateSchemaForOverrideSettingsConfiguration(configuration);
            });
            this._onDidRegisterConfiguration.fire(this);
        };
        ConfigurationRegistry.prototype.registerOverrideIdentifiers = function (overrideIdentifiers) {
            (_a = this.overrideIdentifiers).push.apply(_a, overrideIdentifiers);
            this.updateOverridePropertyPatternKey();
            var _a;
        };
        ConfigurationRegistry.prototype.registerDefaultConfigurations = function (defaultConfigurations) {
            var configurationNode = {
                id: 'defaultOverrides',
                title: nls.localize(0, null),
                properties: {}
            };
            for (var _i = 0, defaultConfigurations_1 = defaultConfigurations; _i < defaultConfigurations_1.length; _i++) {
                var defaultConfiguration = defaultConfigurations_1[_i];
                for (var key in defaultConfiguration.defaults) {
                    var defaultValue = defaultConfiguration.defaults[key];
                    if (exports.OVERRIDE_PROPERTY_PATTERN.test(key) && typeof defaultValue === 'object') {
                        configurationNode.properties[key] = {
                            type: 'object',
                            default: defaultValue,
                            description: nls.localize(1, null, key),
                            $ref: editorConfigurationSchemaId
                        };
                    }
                }
            }
            if (Object.keys(configurationNode.properties).length) {
                this.registerConfiguration(configurationNode, false);
            }
        };
        ConfigurationRegistry.prototype.validateAndRegisterProperties = function (configuration, validate, overridable) {
            if (validate === void 0) { validate = true; }
            if (overridable === void 0) { overridable = false; }
            overridable = configuration.overridable || overridable;
            var properties = configuration.properties;
            if (properties) {
                for (var key in properties) {
                    var message = void 0;
                    if (validate && (message = validateProperty(key))) {
                        console.warn(message);
                        delete properties[key];
                        continue;
                    }
                    // fill in default values
                    var property = properties[key];
                    var defaultValue = property.default;
                    if (types.isUndefined(defaultValue)) {
                        property.default = getDefaultValue(property.type);
                    }
                    // Inherit overridable property from parent
                    if (overridable) {
                        property.overridable = true;
                    }
                    // add to properties map
                    this.configurationProperties[key] = properties[key];
                }
            }
            var subNodes = configuration.allOf;
            if (subNodes) {
                for (var _i = 0, subNodes_1 = subNodes; _i < subNodes_1.length; _i++) {
                    var node = subNodes_1[_i];
                    this.validateAndRegisterProperties(node, validate, overridable);
                }
            }
        };
        ConfigurationRegistry.prototype.validateProperty = function (property) {
            return !exports.OVERRIDE_PROPERTY_PATTERN.test(property) && this.getConfigurationProperties()[property] !== void 0;
        };
        ConfigurationRegistry.prototype.getConfigurations = function () {
            return this.configurationContributors;
        };
        ConfigurationRegistry.prototype.getConfigurationProperties = function () {
            return this.configurationProperties;
        };
        ConfigurationRegistry.prototype.registerJSONConfiguration = function (configuration) {
            var configurationSchema = this.configurationSchema;
            function register(configuration) {
                var properties = configuration.properties;
                if (properties) {
                    for (var key in properties) {
                        configurationSchema.properties[key] = properties[key];
                    }
                }
                var subNodes = configuration.allOf;
                if (subNodes) {
                    subNodes.forEach(register);
                }
            }
            ;
            register(configuration);
            contributionRegistry.registerSchema(schemaId, configurationSchema);
        };
        ConfigurationRegistry.prototype.updateSchemaForOverrideSettingsConfiguration = function (configuration) {
            if (configuration.id !== SETTINGS_OVERRRIDE_NODE_ID) {
                this.update(configuration, this.editorConfigurationSchema);
                contributionRegistry.registerSchema(editorConfigurationSchemaId, this.editorConfigurationSchema);
            }
        };
        ConfigurationRegistry.prototype.updateOverridePropertyPatternKey = function () {
            var patternProperties = this.configurationSchema.patternProperties[this.overridePropertyPattern];
            if (!patternProperties) {
                patternProperties = {
                    type: 'object',
                    description: nls.localize(2, null),
                    errorMessage: 'Unknown Identifier. Use language identifiers',
                    $ref: editorConfigurationSchemaId
                };
            }
            delete this.configurationSchema.patternProperties[this.overridePropertyPattern];
            this.computeOverridePropertyPattern();
            this.configurationSchema.patternProperties[this.overridePropertyPattern] = patternProperties;
            contributionRegistry.registerSchema(schemaId, this.configurationSchema);
        };
        ConfigurationRegistry.prototype.update = function (configuration, overridePropertiesSchema) {
            var _this = this;
            var properties = configuration.properties;
            if (properties) {
                for (var key in properties) {
                    if (properties[key].overridable) {
                        overridePropertiesSchema.properties[key] = this.getConfigurationProperties()[key];
                    }
                }
            }
            var subNodes = configuration.allOf;
            if (subNodes) {
                subNodes.forEach(function (subNode) { return _this.update(subNode, overridePropertiesSchema); });
            }
        };
        ConfigurationRegistry.prototype.computeOverridePropertyPattern = function () {
            this.overridePropertyPattern = this.overrideIdentifiers.length ? OVERRIDE_PATTERN_WITH_SUBSTITUTION.replace('${0}', this.overrideIdentifiers.map(function (identifier) { return strings.createRegExp(identifier, false).source; }).join('|')) : OVERRIDE_PROPERTY;
        };
        return ConfigurationRegistry;
    }());
    var SETTINGS_OVERRRIDE_NODE_ID = 'override';
    var OVERRIDE_PROPERTY = '\\[.*\\]$';
    var OVERRIDE_PATTERN_WITH_SUBSTITUTION = '\\[(${0})\\]$';
    exports.OVERRIDE_PROPERTY_PATTERN = new RegExp(OVERRIDE_PROPERTY);
    function getDefaultValue(type) {
        var t = Array.isArray(type) ? type[0] : type;
        switch (t) {
            case 'boolean':
                return false;
            case 'integer':
            case 'number':
                return 0;
            case 'string':
                return '';
            case 'array':
                return [];
            case 'object':
                return {};
            default:
                return null;
        }
    }
    var configurationRegistry = new ConfigurationRegistry();
    platform_1.Registry.add(exports.Extensions.Configuration, configurationRegistry);
    var configurationExtPoint = extensionsRegistry_1.ExtensionsRegistry.registerExtensionPoint('configuration', [], {
        description: nls.localize(3, null),
        type: 'object',
        defaultSnippets: [{ body: { title: '', properties: {} } }],
        properties: {
            title: {
                description: nls.localize(4, null),
                type: 'string'
            },
            properties: {
                description: nls.localize(5, null),
                type: 'object',
                additionalProperties: {
                    anyOf: [
                        { $ref: 'http://json-schema.org/draft-04/schema#' },
                        {
                            type: 'object',
                            properties: {
                                isExecutable: {
                                    type: 'boolean'
                                }
                            }
                        }
                    ]
                }
            }
        }
    });
    function validateProperty(property) {
        if (exports.OVERRIDE_PROPERTY_PATTERN.test(property)) {
            return nls.localize(6, null, property);
        }
        if (configurationRegistry.getConfigurationProperties()[property] !== void 0) {
            return nls.localize(7, null, property);
        }
        return null;
    }
    function validateProperties(configuration, collector) {
        var properties = configuration.properties;
        if (properties) {
            if (typeof properties !== 'object') {
                collector.error(nls.localize(8, null));
                configuration.properties = {};
            }
            for (var key in properties) {
                var message = validateProperty(key);
                if (message) {
                    collector.warn(message);
                    delete properties[key];
                }
            }
        }
        var subNodes = configuration.allOf;
        if (subNodes) {
            for (var _i = 0, subNodes_2 = subNodes; _i < subNodes_2.length; _i++) {
                var node = subNodes_2[_i];
                validateProperties(node, collector);
            }
        }
    }
    configurationExtPoint.setHandler(function (extensions) {
        var configurations = [];
        for (var i = 0; i < extensions.length; i++) {
            var configuration = objects.clone(extensions[i].value);
            var collector = extensions[i].collector;
            if (configuration.type && configuration.type !== 'object') {
                collector.warn(nls.localize(9, null));
            }
            else {
                configuration.type = 'object';
            }
            if (configuration.title && (typeof configuration.title !== 'string')) {
                collector.error(nls.localize(10, null));
            }
            validateProperties(configuration, collector);
            configuration.id = extensions[i].description.id;
            configurations.push(configuration);
        }
        configurationRegistry.registerConfigurations(configurations, false);
    });
    var defaultConfigurationExtPoint = extensionsRegistry_1.ExtensionsRegistry.registerExtensionPoint('configurationDefaults', [], {
        description: nls.localize(11, null),
        type: 'object',
        defaultSnippets: [{ body: {} }],
        patternProperties: {
            '\\[.*\\]$': {
                type: 'object',
                default: {},
                $ref: editorConfigurationSchemaId,
            }
        }
    });
    defaultConfigurationExtPoint.setHandler(function (extensions) {
        var defaultConfigurations = extensions.map(function (extension) {
            var id = extension.description.id;
            var name = extension.description.name;
            var defaults = objects.clone(extension.value);
            return {
                id: id, name: name, defaults: defaults
            };
        });
        configurationRegistry.registerDefaultConfigurations(defaultConfigurations);
    });
});











define(__m[100/*vs/platform/configuration/common/model*/], __M([1/*require*/,0/*exports*/,22/*vs/platform/platform*/,6/*vs/base/common/types*/,63/*vs/base/common/json*/,8/*vs/base/common/objects*/,20/*vs/base/common/arrays*/,33/*vs/platform/configuration/common/configurationRegistry*/]), function (require, exports, platform_1, types, json, objects, arrays, configurationRegistry_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function getDefaultValues() {
        var valueTreeRoot = Object.create(null);
        var properties = platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration).getConfigurationProperties();
        for (var key in properties) {
            var value = properties[key].default;
            addToValueTree(valueTreeRoot, key, value, function (message) { return console.error("Conflict in default settings: " + message); });
        }
        return valueTreeRoot;
    }
    exports.getDefaultValues = getDefaultValues;
    function toValuesTree(properties, conflictReporter) {
        var root = Object.create(null);
        for (var key in properties) {
            addToValueTree(root, key, properties[key], conflictReporter);
        }
        return root;
    }
    exports.toValuesTree = toValuesTree;
    function addToValueTree(settingsTreeRoot, key, value, conflictReporter) {
        var segments = key.split('.');
        var last = segments.pop();
        var curr = settingsTreeRoot;
        for (var i = 0; i < segments.length; i++) {
            var s = segments[i];
            var obj = curr[s];
            switch (typeof obj) {
                case 'undefined':
                    obj = curr[s] = Object.create(null);
                    break;
                case 'object':
                    break;
                default:
                    conflictReporter("Ignoring " + key + " as " + segments.slice(0, i + 1).join('.') + " is " + JSON.stringify(obj));
                    return;
            }
            curr = obj;
        }
        ;
        if (typeof curr === 'object') {
            curr[last] = value; // workaround https://github.com/Microsoft/vscode/issues/13606
        }
        else {
            conflictReporter("Ignoring " + key + " as " + segments.join('.') + " is " + JSON.stringify(curr));
        }
    }
    function getConfigurationKeys() {
        var properties = platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration).getConfigurationProperties();
        return Object.keys(properties);
    }
    exports.getConfigurationKeys = getConfigurationKeys;
    function merge(base, add, overwrite) {
        Object.keys(add).forEach(function (key) {
            if (key in base) {
                if (types.isObject(base[key]) && types.isObject(add[key])) {
                    merge(base[key], add[key], overwrite);
                }
                else if (overwrite) {
                    base[key] = add[key];
                }
            }
            else {
                base[key] = add[key];
            }
        });
    }
    exports.merge = merge;
    var ConfigModel = (function () {
        function ConfigModel(content, name) {
            if (content === void 0) { content = ''; }
            if (name === void 0) { name = ''; }
            this.name = name;
            this._contents = {};
            this._overrides = [];
            this._keys = [];
            this._parseErrors = [];
            if (content) {
                this.update(content);
            }
        }
        Object.defineProperty(ConfigModel.prototype, "contents", {
            get: function () {
                return this._contents;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigModel.prototype, "overrides", {
            get: function () {
                return this._overrides;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigModel.prototype, "keys", {
            get: function () {
                return this._keys;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ConfigModel.prototype, "errors", {
            get: function () {
                return this._parseErrors;
            },
            enumerable: true,
            configurable: true
        });
        ConfigModel.prototype.merge = function (other, overwrite) {
            if (overwrite === void 0) { overwrite = true; }
            var mergedModel = new ConfigModel(null);
            this.doMerge(mergedModel, this, overwrite);
            this.doMerge(mergedModel, other, overwrite);
            return mergedModel;
        };
        ConfigModel.prototype.doMerge = function (source, target, overwrite) {
            if (overwrite === void 0) { overwrite = true; }
            merge(source.contents, objects.clone(target.contents), overwrite);
            var overrides = objects.clone(source.overrides);
            var _loop_1 = function (override) {
                var sourceOverride = overrides.filter(function (o) { return arrays.equals(o.identifiers, override.identifiers); })[0];
                if (sourceOverride) {
                    merge(sourceOverride.contents, override.contents, overwrite);
                }
                else {
                    overrides.push(override);
                }
            };
            for (var _i = 0, _a = target.overrides; _i < _a.length; _i++) {
                var override = _a[_i];
                _loop_1(override);
            }
            source._overrides = overrides;
        };
        ConfigModel.prototype.getContentsFor = function (section) {
            return objects.clone(this.contents[section]);
        };
        ConfigModel.prototype.configWithOverrides = function (identifier) {
            var result = new ConfigModel(null);
            var contents = objects.clone(this.contents);
            if (this.overrides) {
                for (var _i = 0, _a = this.overrides; _i < _a.length; _i++) {
                    var override = _a[_i];
                    if (override.identifiers.indexOf(identifier) !== -1) {
                        merge(contents, override.contents, true);
                    }
                }
            }
            result._contents = contents;
            return result;
        };
        ConfigModel.prototype.update = function (content) {
            var _this = this;
            var parsed = {};
            var overrides = [];
            var currentProperty = null;
            var currentParent = [];
            var previousParents = [];
            var parseErrors = [];
            function onValue(value) {
                if (Array.isArray(currentParent)) {
                    currentParent.push(value);
                }
                else if (currentProperty) {
                    currentParent[currentProperty] = value;
                }
                if (configurationRegistry_1.OVERRIDE_PROPERTY_PATTERN.test(currentProperty)) {
                    onOverrideSettingsValue(currentProperty, value);
                }
            }
            function onOverrideSettingsValue(property, value) {
                overrides.push({
                    identifiers: [overrideIdentifierFromKey(property).trim()],
                    raw: value,
                    contents: null
                });
            }
            var visitor = {
                onObjectBegin: function () {
                    var object = {};
                    onValue(object);
                    previousParents.push(currentParent);
                    currentParent = object;
                    currentProperty = null;
                },
                onObjectProperty: function (name) {
                    currentProperty = name;
                },
                onObjectEnd: function () {
                    currentParent = previousParents.pop();
                },
                onArrayBegin: function () {
                    var array = [];
                    onValue(array);
                    previousParents.push(currentParent);
                    currentParent = array;
                    currentProperty = null;
                },
                onArrayEnd: function () {
                    currentParent = previousParents.pop();
                },
                onLiteralValue: onValue,
                onError: function (error) {
                    parseErrors.push({ error: error });
                }
            };
            if (content) {
                try {
                    json.visit(content, visitor);
                    parsed = currentParent[0] || {};
                }
                catch (e) {
                    console.error("Error while parsing settings file " + this.name + ": " + e);
                    this._parseErrors = [e];
                }
            }
            this.processRaw(parsed);
            var configurationProperties = platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration).getConfigurationProperties();
            this._overrides = overrides.map(function (override) {
                // Filter unknown and non-overridable properties
                var raw = {};
                for (var key in override.raw) {
                    if (configurationProperties[key] && configurationProperties[key].overridable) {
                        raw[key] = override.raw[key];
                    }
                }
                return {
                    identifiers: override.identifiers,
                    contents: toValuesTree(raw, function (message) { return console.error("Conflict in settings file " + _this.name + ": " + message); })
                };
            });
        };
        ConfigModel.prototype.processRaw = function (raw) {
            var _this = this;
            this._contents = toValuesTree(raw, function (message) { return console.error("Conflict in settings file " + _this.name + ": " + message); });
            this._keys = Object.keys(raw);
        };
        return ConfigModel;
    }());
    exports.ConfigModel = ConfigModel;
    var DefaultConfigModel = (function (_super) {
        __extends(DefaultConfigModel, _super);
        function DefaultConfigModel() {
            var _this = _super.call(this, null) || this;
            _this.update();
            return _this;
        }
        Object.defineProperty(DefaultConfigModel.prototype, "keys", {
            get: function () {
                return this._keys;
            },
            enumerable: true,
            configurable: true
        });
        DefaultConfigModel.prototype.update = function () {
            var _this = this;
            this._contents = getDefaultValues(); // defaults coming from contributions to registries
            this._keys = getConfigurationKeys();
            this._overrides = Object.keys(this._contents)
                .filter(function (key) { return configurationRegistry_1.OVERRIDE_PROPERTY_PATTERN.test(key); })
                .map(function (key) {
                return {
                    identifiers: [overrideIdentifierFromKey(key).trim()],
                    contents: toValuesTree(_this._contents[key], function (message) { return console.error("Conflict in default settings file: " + message); })
                };
            });
        };
        return DefaultConfigModel;
    }(ConfigModel));
    exports.DefaultConfigModel = DefaultConfigModel;
    function overrideIdentifierFromKey(key) {
        return key.substring(1, key.length - 1);
    }
    exports.overrideIdentifierFromKey = overrideIdentifierFromKey;
    function keyFromOverrideIdentifier(overrideIdentifier) {
        return "[" + overrideIdentifier + "]";
    }
    exports.keyFromOverrideIdentifier = keyFromOverrideIdentifier;
});




















define(__m[101/*vs/platform/configuration/node/configurationService*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,8/*vs/base/common/objects*/,57/*vs/base/node/config*/,22/*vs/platform/platform*/,33/*vs/platform/configuration/common/configurationRegistry*/,9/*vs/base/common/lifecycle*/,12/*vs/platform/configuration/common/configuration*/,100/*vs/platform/configuration/common/model*/,4/*vs/base/common/event*/,13/*vs/platform/environment/common/environment*/]), function (require, exports, winjs_base_1, objects, config_1, platform_1, configurationRegistry_1, lifecycle_1, configuration_1, model_1, event_1, environment_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfigurationService = (function (_super) {
        __extends(ConfigurationService, _super);
        function ConfigurationService(environmentService) {
            var _this = _super.call(this) || this;
            _this._onDidUpdateConfiguration = _this._register(new event_1.Emitter());
            _this.onDidUpdateConfiguration = _this._onDidUpdateConfiguration.event;
            _this.userConfigModelWatcher = new config_1.ConfigWatcher(environmentService.appSettingsPath, {
                changeBufferDelay: 300, defaultConfig: new model_1.ConfigModel(null, environmentService.appSettingsPath), parse: function (content, parseErrors) {
                    var userConfigModel = new model_1.ConfigModel(content, environmentService.appSettingsPath);
                    parseErrors = userConfigModel.errors.slice();
                    return userConfigModel;
                }
            });
            _this._register(lifecycle_1.toDisposable(function () { return _this.userConfigModelWatcher.dispose(); }));
            // Listeners
            _this._register(_this.userConfigModelWatcher.onDidUpdateConfiguration(function () { return _this.onConfigurationChange(configuration_1.ConfigurationSource.User); }));
            _this._register(platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration).onDidRegisterConfiguration(function () { return _this.onConfigurationChange(configuration_1.ConfigurationSource.Default); }));
            return _this;
        }
        ConfigurationService.prototype.onConfigurationChange = function (source) {
            this.cache = void 0; // reset our caches
            var cache = this.getCache();
            this._onDidUpdateConfiguration.fire({
                config: this.getConfiguration(),
                source: source,
                sourceConfig: source === configuration_1.ConfigurationSource.Default ? cache.defaults.contents : cache.user.contents
            });
        };
        ConfigurationService.prototype.reloadConfiguration = function (section) {
            var _this = this;
            return new winjs_base_1.TPromise(function (c) {
                _this.userConfigModelWatcher.reload(function () {
                    _this.cache = void 0; // reset our caches
                    c(_this.getConfiguration(section));
                });
            });
        };
        ConfigurationService.prototype.getConfiguration = function (arg) {
            var options = this.toOptions(arg);
            var cache = this.getCache();
            var configModel = options.overrideIdentifier ? cache.consolidated.configWithOverrides(options.overrideIdentifier) : cache.consolidated;
            return options.section ? configModel.getContentsFor(options.section) : configModel.contents;
        };
        ConfigurationService.prototype.lookup = function (key, overrideIdentifier) {
            var cache = this.getCache();
            // make sure to clone the configuration so that the receiver does not tamper with the values
            return {
                default: objects.clone(configuration_1.getConfigurationValue(overrideIdentifier ? cache.defaults.configWithOverrides(overrideIdentifier).contents : cache.defaults.contents, key)),
                user: objects.clone(configuration_1.getConfigurationValue(overrideIdentifier ? cache.user.configWithOverrides(overrideIdentifier).contents : cache.user.contents, key)),
                value: objects.clone(configuration_1.getConfigurationValue(overrideIdentifier ? cache.consolidated.configWithOverrides(overrideIdentifier).contents : cache.consolidated.contents, key))
            };
        };
        ConfigurationService.prototype.keys = function () {
            var cache = this.getCache();
            return {
                default: cache.defaults.keys,
                user: cache.user.keys
            };
        };
        ConfigurationService.prototype.getCache = function () {
            return this.cache || (this.cache = this.consolidateConfigurations());
        };
        ConfigurationService.prototype.toOptions = function (arg) {
            if (typeof arg === 'string') {
                return { section: arg };
            }
            if (typeof arg === 'object') {
                return arg;
            }
            return {};
        };
        ConfigurationService.prototype.consolidateConfigurations = function () {
            var defaults = new model_1.DefaultConfigModel();
            var user = this.userConfigModelWatcher.getConfig();
            var consolidated = defaults.merge(user);
            return { defaults: defaults, user: user, consolidated: consolidated };
        };
        return ConfigurationService;
    }(lifecycle_1.Disposable));
    ConfigurationService = __decorate([
        __param(0, environment_1.IEnvironmentService)
    ], ConfigurationService);
    exports.ConfigurationService = ConfigurationService;
});

define(__m[39/*vs/platform/request/node/request*/], __M([1/*require*/,0/*exports*/,70/*vs/nls!vs/platform/request/node/request*/,3/*vs/platform/instantiation/common/instantiation*/,33/*vs/platform/configuration/common/configurationRegistry*/,22/*vs/platform/platform*/]), function (require, exports, nls_1, instantiation_1, configurationRegistry_1, platform_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IRequestService = instantiation_1.createDecorator('requestService2');
    platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration)
        .registerConfiguration({
        id: 'http',
        order: 15,
        title: nls_1.localize(0, null),
        type: 'object',
        properties: {
            'http.proxy': {
                type: 'string',
                pattern: '^https?://([^:]*(:[^@]*)?@)?([^:]+)(:\\d+)?/?$|^$',
                description: nls_1.localize(1, null)
            },
            'http.proxyStrictSSL': {
                type: 'boolean',
                default: true,
                description: nls_1.localize(2, null)
            },
            'http.proxyAuthorization': {
                type: ['null', 'string'],
                default: null,
                description: nls_1.localize(3, null)
            }
        }
    });
});

define(__m[58/*vs/platform/storage/common/storage*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ID = 'storageService';
    exports.IStorageService = instantiation_1.createDecorator(exports.ID);
    var StorageScope;
    (function (StorageScope) {
        /**
         * The stored data will be scoped to all workspaces of this domain.
         */
        StorageScope[StorageScope["GLOBAL"] = 0] = "GLOBAL";
        /**
         * The stored data will be scoped to the current workspace.
         */
        StorageScope[StorageScope["WORKSPACE"] = 1] = "WORKSPACE";
    })(StorageScope = exports.StorageScope || (exports.StorageScope = {}));
    exports.NullStorageService = {
        _serviceBrand: undefined,
        store: function () { return undefined; },
        swap: function () { return undefined; },
        remove: function () { return undefined; },
        get: function (a, b, defaultValue) { return defaultValue; },
        getInteger: function (a, b, defaultValue) { return defaultValue; },
        getBoolean: function (a, b, defaultValue) { return defaultValue; }
    };
});

define(__m[36/*vs/platform/telemetry/common/telemetry*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ITelemetryService = instantiation_1.createDecorator('telemetryService');
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[105/*vs/platform/telemetry/common/telemetryIpc*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/]), function (require, exports, winjs_base_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var TelemetryAppenderChannel = (function () {
        function TelemetryAppenderChannel(appender) {
            this.appender = appender;
        }
        TelemetryAppenderChannel.prototype.call = function (command, _a) {
            var eventName = _a.eventName, data = _a.data;
            this.appender.log(eventName, data);
            return winjs_base_1.TPromise.as(null);
        };
        return TelemetryAppenderChannel;
    }());
    exports.TelemetryAppenderChannel = TelemetryAppenderChannel;
    var TelemetryAppenderClient = (function () {
        function TelemetryAppenderClient(channel) {
            this.channel = channel;
        }
        TelemetryAppenderClient.prototype.log = function (eventName, data) {
            return this.channel.call('log', { eventName: eventName, data: data });
        };
        TelemetryAppenderClient.prototype.dispose = function () {
            // TODO
        };
        return TelemetryAppenderClient;
    }());
    exports.TelemetryAppenderClient = TelemetryAppenderClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[106/*vs/platform/telemetry/node/commonProperties*/], __M([1/*require*/,0/*exports*/,5/*vs/base/common/platform*/,26/*os*/,2/*vs/base/common/winjs.base*/,30/*vs/base/common/uuid*/]), function (require, exports, Platform, os, winjs_base_1, uuid) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.machineIdStorageKey = 'telemetry.machineId';
    exports.machineIdIpcChannel = 'vscode:machineId';
    function resolveCommonProperties(commit, version) {
        var result = Object.create(null);
        result['sessionID'] = uuid.generateUuid() + Date.now();
        result['commitHash'] = commit;
        result['version'] = version;
        result['common.osVersion'] = os.release();
        result['common.platform'] = Platform.Platform[Platform.platform];
        // dynamic properties which value differs on each call
        var seq = 0;
        var startTime = Date.now();
        Object.defineProperties(result, {
            'timestamp': {
                get: function () { return new Date(); },
                enumerable: true
            },
            'common.timesincesessionstart': {
                get: function () { return Date.now() - startTime; },
                enumerable: true
            },
            'common.sequence': {
                get: function () { return seq++; },
                enumerable: true
            }
        });
        return winjs_base_1.TPromise.as(result);
    }
    exports.resolveCommonProperties = resolveCommonProperties;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[37/*vs/platform/update/common/update*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var State;
    (function (State) {
        State[State["Uninitialized"] = 0] = "Uninitialized";
        State[State["Idle"] = 1] = "Idle";
        State[State["CheckingForUpdate"] = 2] = "CheckingForUpdate";
        State[State["UpdateAvailable"] = 3] = "UpdateAvailable";
        State[State["UpdateDownloaded"] = 4] = "UpdateDownloaded";
    })(State = exports.State || (exports.State = {}));
    var ExplicitState;
    (function (ExplicitState) {
        ExplicitState[ExplicitState["Implicit"] = 0] = "Implicit";
        ExplicitState[ExplicitState["Explicit"] = 1] = "Explicit";
    })(ExplicitState = exports.ExplicitState || (exports.ExplicitState = {}));
    exports.IUpdateService = instantiation_1.createDecorator('updateService');
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[108/*vs/platform/update/common/updateIpc*/], __M([1/*require*/,0/*exports*/,21/*vs/base/parts/ipc/common/ipc*/,37/*vs/platform/update/common/update*/]), function (require, exports, ipc_1, update_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateChannel = (function () {
        function UpdateChannel(service) {
            this.service = service;
        }
        UpdateChannel.prototype.call = function (command, arg) {
            switch (command) {
                case 'event:onError': return ipc_1.eventToCall(this.service.onError);
                case 'event:onUpdateAvailable': return ipc_1.eventToCall(this.service.onUpdateAvailable);
                case 'event:onUpdateNotAvailable': return ipc_1.eventToCall(this.service.onUpdateNotAvailable);
                case 'event:onUpdateReady': return ipc_1.eventToCall(this.service.onUpdateReady);
                case 'event:onStateChange': return ipc_1.eventToCall(this.service.onStateChange);
                case 'checkForUpdates': return this.service.checkForUpdates(arg);
                case 'quitAndInstall': return this.service.quitAndInstall();
            }
            return undefined;
        };
        return UpdateChannel;
    }());
    exports.UpdateChannel = UpdateChannel;
    var UpdateChannelClient = (function () {
        function UpdateChannelClient(channel) {
            var _this = this;
            this.channel = channel;
            this._onError = ipc_1.eventFromCall(this.channel, 'event:onError');
            this._onUpdateAvailable = ipc_1.eventFromCall(this.channel, 'event:onUpdateAvailable');
            this._onUpdateNotAvailable = ipc_1.eventFromCall(this.channel, 'event:onUpdateNotAvailable');
            this._onUpdateReady = ipc_1.eventFromCall(this.channel, 'event:onUpdateReady');
            this._onStateChange = ipc_1.eventFromCall(this.channel, 'event:onStateChange');
            this._state = update_1.State.Uninitialized;
            this.onStateChange(function (state) { return _this._state = state; });
        }
        Object.defineProperty(UpdateChannelClient.prototype, "onError", {
            get: function () { return this._onError; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateChannelClient.prototype, "onUpdateAvailable", {
            get: function () { return this._onUpdateAvailable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateChannelClient.prototype, "onUpdateNotAvailable", {
            get: function () { return this._onUpdateNotAvailable; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateChannelClient.prototype, "onUpdateReady", {
            get: function () { return this._onUpdateReady; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateChannelClient.prototype, "onStateChange", {
            get: function () { return this._onStateChange; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateChannelClient.prototype, "state", {
            get: function () { return this._state; },
            enumerable: true,
            configurable: true
        });
        ;
        UpdateChannelClient.prototype.checkForUpdates = function (explicit) {
            return this.channel.call('checkForUpdates', explicit);
        };
        UpdateChannelClient.prototype.quitAndInstall = function () {
            return this.channel.call('quitAndInstall');
        };
        return UpdateChannelClient;
    }());
    exports.UpdateChannelClient = UpdateChannelClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[32/*vs/platform/url/common/url*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ID = 'urlService';
    exports.IURLService = instantiation_1.createDecorator(exports.ID);
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[110/*vs/platform/url/electron-main/urlService*/], __M([1/*require*/,0/*exports*/,4/*vs/base/common/event*/,29/*vs/base/node/event*/,16/*vs/platform/node/product*/,10/*electron*/,19/*vs/base/common/uri*/]), function (require, exports, event_1, event_2, product_1, electron_1, uri_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var URLService = (function () {
        function URLService(initial) {
            if (initial === void 0) { initial = []; }
            this.openUrlEmitter = new event_1.Emitter();
            var globalBuffer = (global.getOpenUrls() || []);
            var initialBuffer = (typeof initial === 'string' ? [initial] : initial).concat(globalBuffer);
            electron_1.app.setAsDefaultProtocolClient(product_1.default.urlProtocol, process.execPath, ['--open-url']);
            var rawOnOpenUrl = event_2.fromEventEmitter(electron_1.app, 'open-url', function (event, url) { return ({ event: event, url: url }); });
            // always prevent default and return the url as string
            var preventedOnOpenUrl = event_1.mapEvent(rawOnOpenUrl, function (_a) {
                var event = _a.event, url = _a.url;
                event.preventDefault();
                return url;
            });
            // echo all `onOpenUrl` events to each listener
            var bufferedOnOpenUrl = event_1.echo(preventedOnOpenUrl, true, initialBuffer);
            this.onOpenURL = event_1.chain(event_1.any(bufferedOnOpenUrl, this.openUrlEmitter.event))
                .map(function (url) {
                try {
                    return uri_1.default.parse(url);
                }
                catch (e) {
                    return null;
                }
            })
                .filter(function (uri) { return !!uri; })
                .event;
        }
        URLService.prototype.open = function (url) {
            this.openUrlEmitter.fire(url);
        };
        return URLService;
    }());
    exports.URLService = URLService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[46/*vs/platform/windows/common/windows*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWindowsService = instantiation_1.createDecorator('windowsService');
    exports.IWindowService = instantiation_1.createDecorator('windowService');
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[24/*vs/code/common/windows*/], __M([1/*require*/,0/*exports*/,9/*vs/base/common/lifecycle*/,46/*vs/platform/windows/common/windows*/]), function (require, exports, lifecycle_1, windows_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OpenContext;
    (function (OpenContext) {
        // opening when running from the command line
        OpenContext[OpenContext["CLI"] = 0] = "CLI";
        // macOS only: opening from the dock (also when opening files to a running instance from desktop)
        OpenContext[OpenContext["DOCK"] = 1] = "DOCK";
        // opening from the main application window
        OpenContext[OpenContext["MENU"] = 2] = "MENU";
        // opening from a file or folder dialog
        OpenContext[OpenContext["DIALOG"] = 3] = "DIALOG";
        // opening from the OS's UI
        OpenContext[OpenContext["DESKTOP"] = 4] = "DESKTOP";
        // opening through the API
        OpenContext[OpenContext["API"] = 5] = "API";
    })(OpenContext = exports.OpenContext || (exports.OpenContext = {}));
    var ActiveWindowManager = (function () {
        function ActiveWindowManager(windowsService) {
            this.disposables = [];
            windowsService.onWindowOpen(this.setActiveWindow, this, this.disposables);
            windowsService.onWindowFocus(this.setActiveWindow, this, this.disposables);
        }
        ActiveWindowManager.prototype.setActiveWindow = function (windowId) {
            this._activeWindowId = windowId;
        };
        Object.defineProperty(ActiveWindowManager.prototype, "activeClientId", {
            get: function () {
                return "window:" + this._activeWindowId;
            },
            enumerable: true,
            configurable: true
        });
        ActiveWindowManager.prototype.dispose = function () {
            this.disposables = lifecycle_1.dispose(this.disposables);
        };
        return ActiveWindowManager;
    }());
    ActiveWindowManager = __decorate([
        __param(0, windows_1.IWindowsService)
    ], ActiveWindowManager);
    exports.ActiveWindowManager = ActiveWindowManager;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[113/*vs/code/node/windowsUtils*/], __M([1/*require*/,0/*exports*/,7/*path*/,28/*fs*/,5/*vs/base/common/platform*/,18/*vs/base/common/paths*/,24/*vs/code/common/windows*/,23/*vs/platform/files/common/files*/]), function (require, exports, path, fs, platform, paths, windows_1, files_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function findBestWindowOrFolder(_a) {
        var windows = _a.windows, newWindow = _a.newWindow, reuseWindow = _a.reuseWindow, context = _a.context, filePath = _a.filePath, userHome = _a.userHome, vscodeFolder = _a.vscodeFolder;
        // OpenContext.DOCK implies newWindow unless overwritten by settings.
        var findBest = filePath && (context === windows_1.OpenContext.DESKTOP || context === windows_1.OpenContext.CLI || context === windows_1.OpenContext.DOCK);
        var bestWindow = !newWindow && findBest && findBestWindow(windows, filePath);
        var bestFolder = !newWindow && !reuseWindow && findBest && findBestFolder(filePath, userHome, vscodeFolder);
        if (bestWindow && !(bestFolder && bestFolder.length > bestWindow.openedWorkspacePath.length)) {
            return bestWindow;
        }
        else if (bestFolder) {
            return bestFolder;
        }
        return !newWindow ? getLastActiveWindow(windows) : null;
    }
    exports.findBestWindowOrFolder = findBestWindowOrFolder;
    function findBestWindow(windows, filePath) {
        var containers = windows.filter(function (window) { return typeof window.openedWorkspacePath === 'string' && files_1.isEqualOrParent(filePath, window.openedWorkspacePath, !platform.isLinux /* ignorecase */); });
        if (containers.length) {
            return containers.sort(function (a, b) { return -(a.openedWorkspacePath.length - b.openedWorkspacePath.length); })[0];
        }
        return null;
    }
    function findBestFolder(filePath, userHome, vscodeFolder) {
        var folder = path.dirname(paths.normalize(filePath, true));
        var homeFolder = userHome && paths.normalize(userHome, true);
        if (!platform.isLinux) {
            homeFolder = homeFolder && homeFolder.toLowerCase();
        }
        var previous = null;
        try {
            while (folder !== previous) {
                if (isProjectFolder(folder, homeFolder, vscodeFolder)) {
                    return folder;
                }
                previous = folder;
                folder = path.dirname(folder);
            }
        }
        catch (err) {
            // assume impossible to access
        }
        return null;
    }
    function isProjectFolder(folder, normalizedUserHome, vscodeFolder) {
        if (vscodeFolder === void 0) { vscodeFolder = '.vscode'; }
        try {
            if ((platform.isLinux ? folder : folder.toLowerCase()) === normalizedUserHome) {
                // ~/.vscode/extensions is used for extensions
                return fs.statSync(path.join(folder, vscodeFolder, 'settings.json')).isFile();
            }
            else {
                return fs.statSync(path.join(folder, vscodeFolder)).isDirectory();
            }
        }
        catch (err) {
            if (!(err && err.code === 'ENOENT')) {
                throw err;
            }
        }
        return false;
    }
    function getLastActiveWindow(windows) {
        if (windows.length) {
            var lastFocussedDate_1 = Math.max.apply(Math, windows.map(function (w) { return w.lastFocusTime; }));
            var res = windows.filter(function (w) { return w.lastFocusTime === lastFocussedDate_1; });
            if (res && res.length) {
                return res[0];
            }
        }
        return null;
    }
    exports.getLastActiveWindow = getLastActiveWindow;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};









define(__m[35/*vs/code/electron-main/windows*/], __M([1/*require*/,0/*exports*/,7/*path*/,38/*original-fs*/,5/*vs/base/common/platform*/,66/*vs/nls!vs/code/electron-main/windows*/,6/*vs/base/common/types*/,20/*vs/base/common/arrays*/,8/*vs/base/common/objects*/,42/*vs/platform/backup/common/backup*/,11/*vs/base/common/strings*/,13/*vs/platform/environment/common/environment*/,27/*vs/code/electron-main/storage*/,56/*vs/code/electron-main/window*/,10/*electron*/,55/*vs/code/electron-main/paths*/,31/*vs/code/electron-main/lifecycle*/,12/*vs/platform/configuration/common/configuration*/,25/*vs/code/electron-main/log*/,84/*vs/base/common/labels*/,3/*vs/platform/instantiation/common/instantiation*/,113/*vs/code/node/windowsUtils*/,4/*vs/base/common/event*/,16/*vs/platform/node/product*/,24/*vs/code/common/windows*/,36/*vs/platform/telemetry/common/telemetry*/,23/*vs/platform/files/common/files*/,132/*native-keymap*/]), function (require, exports, path, fs, platform, nls, types, arrays, objects_1, backup_1, strings_1, environment_1, storage_1, window_1, electron_1, paths_1, lifecycle_1, configuration_1, log_1, labels_1, instantiation_1, windowsUtils_1, event_1, product_1, windows_1, telemetry_1, files_1, nativeKeymap) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowError;
    (function (WindowError) {
        WindowError[WindowError["UNRESPONSIVE"] = 0] = "UNRESPONSIVE";
        WindowError[WindowError["CRASHED"] = 1] = "CRASHED";
    })(WindowError || (WindowError = {}));
    var ReopenFoldersSetting = {
        ALL: 'all',
        ONE: 'one',
        NONE: 'none'
    };
    exports.IWindowsMainService = instantiation_1.createDecorator('windowsMainService');
    var WindowsManager = (function () {
        function WindowsManager(logService, storageService, environmentService, lifecycleService, backupService, telemetryService, configurationService) {
            this.logService = logService;
            this.storageService = storageService;
            this.environmentService = environmentService;
            this.lifecycleService = lifecycleService;
            this.backupService = backupService;
            this.telemetryService = telemetryService;
            this.configurationService = configurationService;
            this._onRecentPathsChange = new event_1.Emitter();
            this.onRecentPathsChange = this._onRecentPathsChange.event;
            this._onWindowReady = new event_1.Emitter();
            this.onWindowReady = this._onWindowReady.event;
            this._onWindowClose = new event_1.Emitter();
            this.onWindowClose = this._onWindowClose.event;
            this._onWindowReload = new event_1.Emitter();
            this.onWindowReload = this._onWindowReload.event;
            this._onPathsOpen = new event_1.Emitter();
            this.onPathsOpen = this._onPathsOpen.event;
        }
        WindowsManager.prototype.ready = function (initialUserEnv) {
            this.registerListeners();
            this.initialUserEnv = initialUserEnv;
            this.windowsState = this.storageService.getItem(WindowsManager.windowsStateStorageKey) || { openedFolders: [] };
        };
        WindowsManager.prototype.registerListeners = function () {
            var _this = this;
            electron_1.app.on('activate', function (event, hasVisibleWindows) {
                _this.logService.log('App#activate');
                // Mac only event: open new window when we get activated
                if (!hasVisibleWindows) {
                    _this.openNewWindow(windows_1.OpenContext.DOCK);
                }
            });
            var macOpenFiles = [];
            var runningTimeout = null;
            electron_1.app.on('open-file', function (event, path) {
                _this.logService.log('App#open-file: ', path);
                event.preventDefault();
                // Keep in array because more might come!
                macOpenFiles.push(path);
                // Clear previous handler if any
                if (runningTimeout !== null) {
                    clearTimeout(runningTimeout);
                    runningTimeout = null;
                }
                // Handle paths delayed in case more are coming!
                runningTimeout = setTimeout(function () {
                    _this.open({
                        context: windows_1.OpenContext.DOCK /* can also be opening from finder while app is running */,
                        cli: _this.environmentService.args,
                        pathsToOpen: macOpenFiles,
                        preferNewWindow: true /* dropping on the dock or opening from finder prefers to open in a new window */
                    });
                    macOpenFiles = [];
                    runningTimeout = null;
                }, 100);
            });
            electron_1.ipcMain.on('vscode:workbenchLoaded', function (event, windowId) {
                _this.logService.log('IPC#vscode-workbenchLoaded');
                var win = _this.getWindowById(windowId);
                if (win) {
                    win.setReady();
                    // Event
                    _this._onWindowReady.fire(win);
                }
            });
            electron_1.ipcMain.on('vscode:broadcast', function (event, windowId, target, broadcast) {
                if (broadcast.channel && !types.isUndefinedOrNull(broadcast.payload)) {
                    _this.logService.log('IPC#vscode:broadcast', target, broadcast.channel, broadcast.payload);
                    // Handle specific events on main side
                    _this.onBroadcast(broadcast.channel, broadcast.payload);
                    // Send to windows
                    if (target) {
                        var otherWindowsWithTarget = WindowsManager.WINDOWS.filter(function (w) { return w.id !== windowId && typeof w.openedWorkspacePath === 'string'; });
                        var directTargetMatch = otherWindowsWithTarget.filter(function (w) { return files_1.isEqual(target, w.openedWorkspacePath, !platform.isLinux /* ignorecase */); });
                        var parentTargetMatch = otherWindowsWithTarget.filter(function (w) { return files_1.isParent(target, w.openedWorkspacePath, !platform.isLinux /* ignorecase */); });
                        var targetWindow = directTargetMatch.length ? directTargetMatch[0] : parentTargetMatch[0]; // prefer direct match over parent match
                        if (targetWindow) {
                            targetWindow.send('vscode:broadcast', broadcast);
                        }
                    }
                    else {
                        _this.sendToAll('vscode:broadcast', broadcast, [windowId]);
                    }
                }
            });
            // Update our windows state before quitting and before closing windows
            this.lifecycleService.onBeforeWindowClose(function (win) { return _this.onBeforeWindowClose(win); });
            this.lifecycleService.onBeforeQuit(function () { return _this.onBeforeQuit(); });
            KeyboardLayoutMonitor.INSTANCE.onDidChangeKeyboardLayout(function (isISOKeyboard) {
                WindowsManager.WINDOWS.forEach(function (window) {
                    window.sendWhenReady('vscode:keyboardLayoutChanged', isISOKeyboard);
                });
            });
        };
        // Note that onBeforeQuit() and onBeforeWindowClose() are fired in different order depending on the OS:
        // - macOS: since the app will not quit when closing the last window, you will always first get
        //          the onBeforeQuit() event followed by N onbeforeWindowClose() events for each window
        // - other: on other OS, closing the last window will quit the app so the order depends on the
        //          user interaction: closing the last window will first trigger onBeforeWindowClose()
        //          and then onBeforeQuit(). Using the quit action however will first issue onBeforeQuit()
        //          and then onBeforeWindowClose().
        WindowsManager.prototype.onBeforeQuit = function () {
            var currentWindowsState = {
                openedFolders: [],
                lastPluginDevelopmentHostWindow: this.windowsState.lastPluginDevelopmentHostWindow,
                lastActiveWindow: this.lastClosedWindowState //will be set on Win/Linux if last window was closed, resulting in an exit
            };
            // 1.) Find a last active window (pick any other first window otherwise)
            if (!currentWindowsState.lastActiveWindow) {
                var activeWindow = this.getLastActiveWindow();
                if (!activeWindow || activeWindow.isExtensionDevelopmentHost) {
                    activeWindow = WindowsManager.WINDOWS.filter(function (w) { return !w.isExtensionDevelopmentHost; })[0];
                }
                if (activeWindow) {
                    currentWindowsState.lastActiveWindow = { workspacePath: activeWindow.openedWorkspacePath, uiState: activeWindow.serializeWindowState() };
                }
            }
            // 2.) Find extension host window
            var extensionHostWindow = WindowsManager.WINDOWS.filter(function (w) { return w.isExtensionDevelopmentHost && !w.isExtensionTestHost; })[0];
            if (extensionHostWindow) {
                currentWindowsState.lastPluginDevelopmentHostWindow = { workspacePath: extensionHostWindow.openedWorkspacePath, uiState: extensionHostWindow.serializeWindowState() };
            }
            // 3.) All windows with opened folders for N >= 2 to support reopenFolders: all or for auto update
            //
            // Carefull here: asking a window for its window state after it has been closed returns bogus values (width: 0, height: 0)
            // so if we ever want to persist the UI state of the last closed window (window count === 1), it has
            // to come from the stored lastClosedWindowState on Win/Linux at least
            if (this.getWindowCount() > 1) {
                currentWindowsState.openedFolders = WindowsManager.WINDOWS.filter(function (w) { return !!w.openedWorkspacePath && !w.isExtensionDevelopmentHost; }).map(function (w) {
                    return {
                        workspacePath: w.openedWorkspacePath,
                        uiState: w.serializeWindowState()
                    };
                });
            }
            // Persist
            this.storageService.setItem(WindowsManager.windowsStateStorageKey, currentWindowsState);
        };
        // See note on #onBeforeQuit() for details how these events are flowing
        WindowsManager.prototype.onBeforeWindowClose = function (win) {
            if (this.lifecycleService.isQuitRequested()) {
                return; // during quit, many windows close in parallel so let it be handled in the before-quit handler
            }
            // On Window close, update our stored UI state of this window
            var state = { workspacePath: win.openedWorkspacePath, uiState: win.serializeWindowState() };
            if (win.isExtensionDevelopmentHost && !win.isExtensionTestHost) {
                this.windowsState.lastPluginDevelopmentHostWindow = state; // do not let test run window state overwrite our extension development state
            }
            else if (!win.isExtensionDevelopmentHost && !!win.openedWorkspacePath) {
                this.windowsState.openedFolders.forEach(function (o) {
                    if (files_1.isEqual(o.workspacePath, win.openedWorkspacePath, !platform.isLinux /* ignorecase */)) {
                        o.uiState = state.uiState;
                    }
                });
            }
            // On Windows and Linux closing the last window will trigger quit. Since we are storing all UI state
            // before quitting, we need to remember the UI state of this window to be able to persist it.
            if (!platform.isMacintosh && this.getWindowCount() === 1) {
                this.lastClosedWindowState = state;
            }
        };
        WindowsManager.prototype.onBroadcast = function (event, payload) {
            // Theme changes
            if (event === 'vscode:changeColorTheme' && typeof payload === 'string') {
                var data = JSON.parse(payload);
                this.storageService.setItem(window_1.VSCodeWindow.themeStorageKey, data.id);
                this.storageService.setItem(window_1.VSCodeWindow.themeBackgroundStorageKey, data.background);
            }
        };
        WindowsManager.prototype.reload = function (win, cli) {
            var _this = this;
            // Only reload when the window has not vetoed this
            this.lifecycleService.unload(win, lifecycle_1.UnloadReason.RELOAD).done(function (veto) {
                if (!veto) {
                    win.reload(cli);
                    // Emit
                    _this._onWindowReload.fire(win.id);
                }
            });
        };
        WindowsManager.prototype.open = function (openConfig) {
            var _this = this;
            var windowConfig = this.configurationService.getConfiguration('window');
            var iPathsToOpen;
            var usedWindows = [];
            // Find paths from provided paths if any
            if (openConfig.pathsToOpen && openConfig.pathsToOpen.length > 0) {
                iPathsToOpen = openConfig.pathsToOpen.map(function (pathToOpen) {
                    var iPath = _this.toIPath(pathToOpen, false, openConfig.cli && openConfig.cli.goto);
                    // Warn if the requested path to open does not exist
                    if (!iPath) {
                        var options = {
                            title: product_1.default.nameLong,
                            type: 'info',
                            buttons: [nls.localize(0, null)],
                            message: nls.localize(1, null),
                            detail: nls.localize(2, null, pathToOpen),
                            noLink: true
                        };
                        var activeWindow = electron_1.BrowserWindow.getFocusedWindow();
                        if (activeWindow) {
                            electron_1.dialog.showMessageBox(activeWindow, options);
                        }
                        else {
                            electron_1.dialog.showMessageBox(options);
                        }
                    }
                    return iPath;
                });
                // get rid of nulls
                iPathsToOpen = arrays.coalesce(iPathsToOpen);
                if (iPathsToOpen.length === 0) {
                    return null; // indicate to outside that open failed
                }
            }
            else if (openConfig.forceEmpty) {
                iPathsToOpen = [Object.create(null)];
            }
            else {
                var ignoreFileNotFound = openConfig.cli._.length > 0; // we assume the user wants to create this file from command line
                iPathsToOpen = this.cliToPaths(openConfig.cli, ignoreFileNotFound);
            }
            var foldersToOpen = arrays.distinct(iPathsToOpen.filter(function (iPath) { return iPath.workspacePath && !iPath.filePath; }).map(function (iPath) { return iPath.workspacePath; }), function (folder) { return platform.isLinux ? folder : folder.toLowerCase(); }); // prevent duplicates
            var foldersToRestore = (openConfig.initialStartup && !openConfig.cli.extensionDevelopmentPath) ? this.backupService.getWorkspaceBackupPaths() : [];
            var filesToOpen = [];
            var filesToDiff = [];
            var emptyToOpen = iPathsToOpen.filter(function (iPath) { return !iPath.workspacePath && !iPath.filePath; });
            var emptyToRestore = (openConfig.initialStartup && !openConfig.cli.extensionDevelopmentPath) ? this.backupService.getEmptyWorkspaceBackupPaths() : [];
            var filesToCreate = iPathsToOpen.filter(function (iPath) { return !!iPath.filePath && iPath.createFilePath; });
            // Diff mode needs special care
            var candidates = iPathsToOpen.filter(function (iPath) { return !!iPath.filePath && !iPath.createFilePath; });
            if (openConfig.diffMode) {
                if (candidates.length === 2) {
                    filesToDiff = candidates;
                }
                else {
                    emptyToOpen = [Object.create(null)]; // improper use of diffMode, open empty
                }
                foldersToOpen = []; // diff is always in empty workspace
                foldersToRestore = []; // diff is always in empty workspace
                filesToCreate = []; // diff ignores other files that do not exist
            }
            else {
                filesToOpen = candidates;
            }
            // let the user settings override how folders are open in a new window or same window unless we are forced
            var openFolderInNewWindow = (openConfig.preferNewWindow || openConfig.forceNewWindow) && !openConfig.forceReuseWindow;
            if (!openConfig.forceNewWindow && !openConfig.forceReuseWindow && windowConfig && (windowConfig.openFoldersInNewWindow === 'on' || windowConfig.openFoldersInNewWindow === 'off')) {
                openFolderInNewWindow = (windowConfig.openFoldersInNewWindow === 'on');
            }
            // Handle files to open/diff or to create when we dont open a folder and we do not restore any folder/untitled from hot-exit
            if (!foldersToOpen.length && !foldersToRestore.length && !emptyToRestore.length && (filesToOpen.length > 0 || filesToCreate.length > 0 || filesToDiff.length > 0)) {
                // let the user settings override how files are open in a new window or same window unless we are forced (not for extension development though)
                var openFilesInNewWindow = void 0;
                if (openConfig.forceNewWindow || openConfig.forceReuseWindow) {
                    openFilesInNewWindow = openConfig.forceNewWindow && !openConfig.forceReuseWindow;
                }
                else {
                    if (openConfig.context === windows_1.OpenContext.DOCK) {
                        openFilesInNewWindow = true; // only on macOS do we allow to open files in a new window if this is triggered via DOCK context
                    }
                    if (!openConfig.cli.extensionDevelopmentPath && windowConfig && (windowConfig.openFilesInNewWindow === 'on' || windowConfig.openFilesInNewWindow === 'off')) {
                        openFilesInNewWindow = (windowConfig.openFilesInNewWindow === 'on');
                    }
                }
                // Open Files in last instance if any and flag tells us so
                var fileToCheck = filesToOpen[0] || filesToCreate[0] || filesToDiff[0];
                var windowOrFolder = windowsUtils_1.findBestWindowOrFolder({
                    windows: WindowsManager.WINDOWS,
                    newWindow: openFilesInNewWindow,
                    reuseWindow: openConfig.forceReuseWindow,
                    context: openConfig.context,
                    filePath: fileToCheck && fileToCheck.filePath,
                    userHome: this.environmentService.userHome
                });
                if (windowOrFolder instanceof window_1.VSCodeWindow) {
                    windowOrFolder.focus();
                    var files_2 = { filesToOpen: filesToOpen, filesToCreate: filesToCreate, filesToDiff: filesToDiff }; // copy to object because they get reset shortly after
                    windowOrFolder.ready().then(function (readyWindow) {
                        readyWindow.send('vscode:openFiles', files_2);
                    });
                    usedWindows.push(windowOrFolder);
                }
                else {
                    var configuration = this.toConfiguration(openConfig, windowOrFolder, filesToOpen, filesToCreate, filesToDiff);
                    var browserWindow = this.openInBrowserWindow(configuration, true /* new window */);
                    usedWindows.push(browserWindow);
                    openFolderInNewWindow = true; // any other folders to open must open in new window then
                }
                // Reset these because we handled them
                filesToOpen = [];
                filesToCreate = [];
                filesToDiff = [];
            }
            // Handle folders to open (instructed and to restore)
            var allFoldersToOpen = arrays.distinct(foldersToOpen.concat(foldersToRestore), function (folder) { return platform.isLinux ? folder : folder.toLowerCase(); }); // prevent duplicates
            if (allFoldersToOpen.length > 0) {
                // Check for existing instances
                var windowsOnWorkspacePath_1 = arrays.coalesce(allFoldersToOpen.map(function (folderToOpen) { return _this.findWindow(folderToOpen); }));
                if (windowsOnWorkspacePath_1.length > 0) {
                    var browserWindow = windowsOnWorkspacePath_1[0];
                    browserWindow.focus(); // just focus one of them
                    var files_3 = { filesToOpen: filesToOpen, filesToCreate: filesToCreate, filesToDiff: filesToDiff }; // copy to object because they get reset shortly after
                    browserWindow.ready().then(function (readyWindow) {
                        readyWindow.send('vscode:openFiles', files_3);
                    });
                    usedWindows.push(browserWindow);
                    // Reset these because we handled them
                    filesToOpen = [];
                    filesToCreate = [];
                    filesToDiff = [];
                    openFolderInNewWindow = true; // any other folders to open must open in new window then
                }
                // Open remaining ones
                allFoldersToOpen.forEach(function (folderToOpen) {
                    if (windowsOnWorkspacePath_1.some(function (win) { return files_1.isEqual(win.openedWorkspacePath, folderToOpen, !platform.isLinux /* ignorecase */); })) {
                        return; // ignore folders that are already open
                    }
                    var configuration = _this.toConfiguration(openConfig, folderToOpen, filesToOpen, filesToCreate, filesToDiff);
                    var browserWindow = _this.openInBrowserWindow(configuration, openFolderInNewWindow, openFolderInNewWindow ? void 0 : openConfig.windowToUse);
                    usedWindows.push(browserWindow);
                    // Reset these because we handled them
                    filesToOpen = [];
                    filesToCreate = [];
                    filesToDiff = [];
                    openFolderInNewWindow = true; // any other folders to open must open in new window then
                });
            }
            // Handle empty
            if (emptyToRestore.length > 0) {
                emptyToRestore.forEach(function (emptyWorkspaceBackupFolder) {
                    var configuration = _this.toConfiguration(openConfig, void 0, filesToOpen, filesToCreate, filesToDiff);
                    var browserWindow = _this.openInBrowserWindow(configuration, true /* new window */, null, emptyWorkspaceBackupFolder);
                    usedWindows.push(browserWindow);
                    // Reset these because we handled them
                    filesToOpen = [];
                    filesToCreate = [];
                    filesToDiff = [];
                    openFolderInNewWindow = true; // any other folders to open must open in new window then
                });
            }
            else if (emptyToOpen.length > 0) {
                emptyToOpen.forEach(function () {
                    var configuration = _this.toConfiguration(openConfig);
                    var browserWindow = _this.openInBrowserWindow(configuration, openFolderInNewWindow, openFolderInNewWindow ? void 0 : openConfig.windowToUse);
                    usedWindows.push(browserWindow);
                    openFolderInNewWindow = true; // any other folders to open must open in new window then
                });
            }
            // Remember in recent document list (unless this opens for extension development)
            // Also do not add paths when files are opened for diffing, only if opened individually
            if (!usedWindows.some(function (w) { return w.isExtensionDevelopmentHost; }) && !openConfig.cli.diff) {
                var recentPaths_1 = [];
                iPathsToOpen.forEach(function (iPath) {
                    if (iPath.filePath || iPath.workspacePath) {
                        electron_1.app.addRecentDocument(iPath.filePath || iPath.workspacePath);
                        recentPaths_1.push({ path: iPath.filePath || iPath.workspacePath, isFile: !!iPath.filePath });
                    }
                });
                if (recentPaths_1.length) {
                    this.addToRecentPathsList(recentPaths_1);
                }
            }
            // Emit events
            this._onPathsOpen.fire(iPathsToOpen);
            return arrays.distinct(usedWindows);
        };
        WindowsManager.prototype.addToRecentPathsList = function (paths) {
            if (!paths || !paths.length) {
                return;
            }
            var mru = this.getRecentPathsList();
            paths.forEach(function (p) {
                var path = p.path, isFile = p.isFile;
                if (isFile) {
                    mru.files.unshift(path);
                    mru.files = arrays.distinct(mru.files, function (f) { return platform.isLinux ? f : f.toLowerCase(); });
                }
                else {
                    mru.folders.unshift(path);
                    mru.folders = arrays.distinct(mru.folders, function (f) { return platform.isLinux ? f : f.toLowerCase(); });
                }
                // Make sure its bounded
                mru.folders = mru.folders.slice(0, WindowsManager.MAX_TOTAL_RECENT_ENTRIES);
                mru.files = mru.files.slice(0, WindowsManager.MAX_TOTAL_RECENT_ENTRIES);
            });
            this.storageService.setItem(WindowsManager.recentPathsListStorageKey, mru);
            this._onRecentPathsChange.fire();
        };
        WindowsManager.prototype.removeFromRecentPathsList = function (arg1) {
            var paths;
            if (Array.isArray(arg1)) {
                paths = arg1;
            }
            else {
                paths = [arg1];
            }
            var mru = this.getRecentPathsList();
            var update = false;
            paths.forEach(function (path) {
                var index = mru.files.indexOf(path);
                if (index >= 0) {
                    mru.files.splice(index, 1);
                    update = true;
                }
                index = mru.folders.indexOf(path);
                if (index >= 0) {
                    mru.folders.splice(index, 1);
                    update = true;
                }
            });
            if (update) {
                this.storageService.setItem(WindowsManager.recentPathsListStorageKey, mru);
                this._onRecentPathsChange.fire();
            }
        };
        WindowsManager.prototype.clearRecentPathsList = function () {
            this.storageService.setItem(WindowsManager.recentPathsListStorageKey, { folders: [], files: [] });
            electron_1.app.clearRecentDocuments();
            // Event
            this._onRecentPathsChange.fire();
        };
        WindowsManager.prototype.getRecentPathsList = function (workspacePath, filesToOpen) {
            var files;
            var folders;
            // Get from storage
            var storedRecents = this.storageService.getItem(WindowsManager.recentPathsListStorageKey);
            if (storedRecents) {
                files = storedRecents.files || [];
                folders = storedRecents.folders || [];
            }
            else {
                files = [];
                folders = [];
            }
            // Add currently files to open to the beginning if any
            if (filesToOpen) {
                files.unshift.apply(files, filesToOpen.map(function (f) { return f.filePath; }));
            }
            // Add current workspace path to beginning if set
            if (workspacePath) {
                folders.unshift(workspacePath);
            }
            // Clear those dupes
            files = arrays.distinct(files);
            folders = arrays.distinct(folders);
            return { files: files, folders: folders };
        };
        WindowsManager.prototype.getWindowUserEnv = function (openConfig) {
            return objects_1.assign({}, this.initialUserEnv, openConfig.userEnv || {});
        };
        WindowsManager.prototype.openExtensionDevelopmentHostWindow = function (openConfig) {
            // Reload an existing extension development host window on the same path
            // We currently do not allow more than one extension development window
            // on the same extension path.
            var res = WindowsManager.WINDOWS.filter(function (w) { return w.config && files_1.isEqual(w.config.extensionDevelopmentPath, openConfig.cli.extensionDevelopmentPath, !platform.isLinux /* ignorecase */); });
            if (res && res.length === 1) {
                this.reload(res[0], openConfig.cli);
                res[0].focus(); // make sure it gets focus and is restored
                return;
            }
            // Fill in previously opened workspace unless an explicit path is provided and we are not unit testing
            if (openConfig.cli._.length === 0 && !openConfig.cli.extensionTestsPath) {
                var workspaceToOpen = this.windowsState.lastPluginDevelopmentHostWindow && this.windowsState.lastPluginDevelopmentHostWindow.workspacePath;
                if (workspaceToOpen) {
                    openConfig.cli._ = [workspaceToOpen];
                }
            }
            // Make sure we are not asked to open a path that is already opened
            if (openConfig.cli._.length > 0) {
                res = WindowsManager.WINDOWS.filter(function (w) { return w.openedWorkspacePath && openConfig.cli._.indexOf(w.openedWorkspacePath) >= 0; });
                if (res.length) {
                    openConfig.cli._ = [];
                }
            }
            // Open it
            this.open({ context: openConfig.context, cli: openConfig.cli, forceNewWindow: true, forceEmpty: openConfig.cli._.length === 0, userEnv: openConfig.userEnv });
        };
        WindowsManager.prototype.toConfiguration = function (config, workspacePath, filesToOpen, filesToCreate, filesToDiff) {
            var configuration = objects_1.mixin({}, config.cli); // inherit all properties from CLI
            configuration.appRoot = this.environmentService.appRoot;
            configuration.execPath = process.execPath;
            configuration.userEnv = this.getWindowUserEnv(config);
            configuration.isInitialStartup = config.initialStartup;
            configuration.workspacePath = workspacePath;
            configuration.filesToOpen = filesToOpen;
            configuration.filesToCreate = filesToCreate;
            configuration.filesToDiff = filesToDiff;
            configuration.nodeCachedDataDir = this.environmentService.nodeCachedDataDir;
            configuration.isISOKeyboard = KeyboardLayoutMonitor.INSTANCE.isISOKeyboard();
            return configuration;
        };
        WindowsManager.prototype.toIPath = function (anyPath, ignoreFileNotFound, gotoLineMode) {
            if (!anyPath) {
                return null;
            }
            var parsedPath;
            if (gotoLineMode) {
                parsedPath = paths_1.parseLineAndColumnAware(anyPath);
                anyPath = parsedPath.path;
            }
            var candidate = path.normalize(anyPath);
            try {
                var candidateStat = fs.statSync(candidate);
                if (candidateStat) {
                    return candidateStat.isFile() ?
                        {
                            filePath: candidate,
                            lineNumber: gotoLineMode ? parsedPath.line : void 0,
                            columnNumber: gotoLineMode ? parsedPath.column : void 0
                        } :
                        { workspacePath: candidate };
                }
            }
            catch (error) {
                this.removeFromRecentPathsList(candidate); // since file does not seem to exist anymore, remove from recent
                if (ignoreFileNotFound) {
                    return { filePath: candidate, createFilePath: true }; // assume this is a file that does not yet exist
                }
            }
            return null;
        };
        WindowsManager.prototype.cliToPaths = function (cli, ignoreFileNotFound) {
            var _this = this;
            // Check for pass in candidate or last opened path
            var candidates = [];
            if (cli._.length > 0) {
                candidates = cli._;
            }
            else {
                var reopenFolders = void 0;
                if (this.lifecycleService.wasRestarted) {
                    reopenFolders = ReopenFoldersSetting.ALL; // always reopen all folders when an update was applied
                }
                else {
                    var windowConfig = this.configurationService.getConfiguration('window');
                    reopenFolders = (windowConfig && windowConfig.reopenFolders) || ReopenFoldersSetting.ONE;
                }
                var lastActiveFolder = this.windowsState.lastActiveWindow && this.windowsState.lastActiveWindow.workspacePath;
                // Restore all
                if (reopenFolders === ReopenFoldersSetting.ALL) {
                    var lastOpenedFolders = this.windowsState.openedFolders.map(function (o) { return o.workspacePath; });
                    // If we have a last active folder, move it to the end
                    if (lastActiveFolder) {
                        lastOpenedFolders.splice(lastOpenedFolders.indexOf(lastActiveFolder), 1);
                        lastOpenedFolders.push(lastActiveFolder);
                    }
                    candidates.push.apply(candidates, lastOpenedFolders);
                }
                else if (lastActiveFolder && (reopenFolders === ReopenFoldersSetting.ONE || reopenFolders !== ReopenFoldersSetting.NONE)) {
                    candidates.push(lastActiveFolder);
                }
            }
            var iPaths = candidates.map(function (candidate) { return _this.toIPath(candidate, ignoreFileNotFound, cli.goto); }).filter(function (path) { return !!path; });
            if (iPaths.length > 0) {
                return iPaths;
            }
            // No path provided, return empty to open empty
            return [Object.create(null)];
        };
        WindowsManager.prototype.openInBrowserWindow = function (configuration, forceNewWindow, windowToUse, emptyWorkspaceBackupFolder) {
            var _this = this;
            var vscodeWindow;
            if (!forceNewWindow) {
                vscodeWindow = windowToUse || this.getLastActiveWindow();
                if (vscodeWindow) {
                    vscodeWindow.focus();
                }
            }
            // New window
            if (!vscodeWindow) {
                var windowConfig = this.configurationService.getConfiguration('window');
                var state = this.getNewWindowState(configuration);
                // Window state is not from a previous session: only allow fullscreen if we inherit it or user wants fullscreen
                var allowFullscreen = void 0;
                if (state.hasDefaultState) {
                    allowFullscreen = (windowConfig && windowConfig.newWindowDimensions && ['fullscreen', 'inherit'].indexOf(windowConfig.newWindowDimensions) >= 0);
                }
                else {
                    allowFullscreen = this.lifecycleService.wasRestarted || (windowConfig && windowConfig.restoreFullscreen);
                }
                if (state.mode === window_1.WindowMode.Fullscreen && !allowFullscreen) {
                    state.mode = window_1.WindowMode.Normal;
                }
                vscodeWindow = new window_1.VSCodeWindow({
                    state: state,
                    extensionDevelopmentPath: configuration.extensionDevelopmentPath,
                    isExtensionTestHost: !!configuration.extensionTestsPath
                }, this.logService, this.environmentService, this.configurationService, this.storageService);
                WindowsManager.WINDOWS.push(vscodeWindow);
                // Window Events
                vscodeWindow.win.webContents.removeAllListeners('devtools-reload-page'); // remove built in listener so we can handle this on our own
                vscodeWindow.win.webContents.on('devtools-reload-page', function () { return _this.reload(vscodeWindow); });
                vscodeWindow.win.webContents.on('crashed', function () { return _this.onWindowError(vscodeWindow, WindowError.CRASHED); });
                vscodeWindow.win.on('unresponsive', function () { return _this.onWindowError(vscodeWindow, WindowError.UNRESPONSIVE); });
                vscodeWindow.win.on('closed', function () { return _this.onWindowClosed(vscodeWindow); });
                // Lifecycle
                this.lifecycleService.registerWindow(vscodeWindow);
            }
            else {
                // Some configuration things get inherited if the window is being reused and we are
                // in extension development host mode. These options are all development related.
                var currentWindowConfig = vscodeWindow.config;
                if (!configuration.extensionDevelopmentPath && currentWindowConfig && !!currentWindowConfig.extensionDevelopmentPath) {
                    configuration.extensionDevelopmentPath = currentWindowConfig.extensionDevelopmentPath;
                    configuration.verbose = currentWindowConfig.verbose;
                    configuration.debugBrkPluginHost = currentWindowConfig.debugBrkPluginHost;
                    configuration.debugPluginHost = currentWindowConfig.debugPluginHost;
                    configuration['extensions-dir'] = currentWindowConfig['extensions-dir'];
                }
            }
            // Only load when the window has not vetoed this
            this.lifecycleService.unload(vscodeWindow, lifecycle_1.UnloadReason.LOAD).done(function (veto) {
                if (!veto) {
                    // Register window for backups
                    if (!configuration.extensionDevelopmentPath) {
                        _this.backupService.registerWindowForBackupsSync(vscodeWindow.id, !configuration.workspacePath, emptyWorkspaceBackupFolder, configuration.workspacePath);
                    }
                    // Load it
                    vscodeWindow.load(configuration);
                }
            });
            return vscodeWindow;
        };
        WindowsManager.prototype.getNewWindowState = function (configuration) {
            // extension development host Window - load from stored settings if any
            if (!!configuration.extensionDevelopmentPath && this.windowsState.lastPluginDevelopmentHostWindow) {
                return this.windowsState.lastPluginDevelopmentHostWindow.uiState;
            }
            // Known Folder - load from stored settings if any
            if (configuration.workspacePath) {
                var stateForWorkspace = this.windowsState.openedFolders.filter(function (o) { return files_1.isEqual(o.workspacePath, configuration.workspacePath, !platform.isLinux /* ignorecase */); }).map(function (o) { return o.uiState; });
                if (stateForWorkspace.length) {
                    return stateForWorkspace[0];
                }
            }
            // First Window
            var lastActive = this.getLastActiveWindow();
            if (!lastActive && this.windowsState.lastActiveWindow) {
                return this.windowsState.lastActiveWindow.uiState;
            }
            //
            // In any other case, we do not have any stored settings for the window state, so we come up with something smart
            //
            // We want the new window to open on the same display that the last active one is in
            var displayToUse;
            var displays = electron_1.screen.getAllDisplays();
            // Single Display
            if (displays.length === 1) {
                displayToUse = displays[0];
            }
            else {
                // on mac there is 1 menu per window so we need to use the monitor where the cursor currently is
                if (platform.isMacintosh) {
                    var cursorPoint = electron_1.screen.getCursorScreenPoint();
                    displayToUse = electron_1.screen.getDisplayNearestPoint(cursorPoint);
                }
                // if we have a last active window, use that display for the new window
                if (!displayToUse && lastActive) {
                    displayToUse = electron_1.screen.getDisplayMatching(lastActive.getBounds());
                }
                // fallback to primary display or first display
                if (!displayToUse) {
                    displayToUse = electron_1.screen.getPrimaryDisplay() || displays[0];
                }
            }
            var state = window_1.defaultWindowState();
            state.x = displayToUse.bounds.x + (displayToUse.bounds.width / 2) - (state.width / 2);
            state.y = displayToUse.bounds.y + (displayToUse.bounds.height / 2) - (state.height / 2);
            // Check for newWindowDimensions setting and adjust accordingly
            var windowConfig = this.configurationService.getConfiguration('window');
            var ensureNoOverlap = true;
            if (windowConfig && windowConfig.newWindowDimensions) {
                if (windowConfig.newWindowDimensions === 'maximized') {
                    state.mode = window_1.WindowMode.Maximized;
                    ensureNoOverlap = false;
                }
                else if (windowConfig.newWindowDimensions === 'fullscreen') {
                    state.mode = window_1.WindowMode.Fullscreen;
                    ensureNoOverlap = false;
                }
                else if (windowConfig.newWindowDimensions === 'inherit' && lastActive) {
                    var lastActiveState = lastActive.serializeWindowState();
                    if (lastActiveState.mode === window_1.WindowMode.Fullscreen) {
                        state.mode = window_1.WindowMode.Fullscreen; // only take mode (fixes https://github.com/Microsoft/vscode/issues/19331)
                    }
                    else {
                        state = lastActiveState;
                    }
                    ensureNoOverlap = false;
                }
            }
            if (ensureNoOverlap) {
                state = this.ensureNoOverlap(state);
            }
            state.hasDefaultState = true; // flag as default state
            return state;
        };
        WindowsManager.prototype.ensureNoOverlap = function (state) {
            if (WindowsManager.WINDOWS.length === 0) {
                return state;
            }
            var existingWindowBounds = WindowsManager.WINDOWS.map(function (win) { return win.getBounds(); });
            while (existingWindowBounds.some(function (b) { return b.x === state.x || b.y === state.y; })) {
                state.x += 30;
                state.y += 30;
            }
            return state;
        };
        WindowsManager.prototype.openFileFolderPicker = function (forceNewWindow, data) {
            this.doPickAndOpen({ pickFolders: true, pickFiles: true, forceNewWindow: forceNewWindow }, 'openFileFolder', data);
        };
        WindowsManager.prototype.openFilePicker = function (forceNewWindow, path, window, data) {
            this.doPickAndOpen({ pickFiles: true, forceNewWindow: forceNewWindow, path: path, window: window }, 'openFile', data);
        };
        WindowsManager.prototype.openFolderPicker = function (forceNewWindow, window, data) {
            this.doPickAndOpen({ pickFolders: true, forceNewWindow: forceNewWindow, window: window }, 'openFolder', data);
        };
        WindowsManager.prototype.openAccessibilityOptions = function () {
            var win = new electron_1.BrowserWindow({
                alwaysOnTop: true,
                skipTaskbar: true,
                resizable: false,
                width: 450,
                height: 300,
                show: true,
                title: nls.localize(3, null)
            });
            win.setMenuBarVisibility(false);
            win.loadURL('chrome://accessibility');
        };
        WindowsManager.prototype.doPickAndOpen = function (options, eventName, data) {
            var _this = this;
            this.getFileOrFolderPaths(options, function (paths) {
                var nOfPaths = paths ? paths.length : 0;
                if (nOfPaths) {
                    _this.open({ context: windows_1.OpenContext.DIALOG, cli: _this.environmentService.args, pathsToOpen: paths, forceNewWindow: options.forceNewWindow });
                }
                _this.telemetryService.publicLog(eventName, __assign({}, data, { outcome: nOfPaths ? 'success' : 'canceled', nOfPaths: nOfPaths }));
            });
        };
        WindowsManager.prototype.getFileOrFolderPaths = function (options, clb) {
            var _this = this;
            var workingDir = options.path || this.storageService.getItem(WindowsManager.workingDirPickerStorageKey);
            var focussedWindow = options.window || this.getFocusedWindow();
            var pickerProperties;
            if (options.pickFiles && options.pickFolders) {
                pickerProperties = ['multiSelections', 'openDirectory', 'openFile', 'createDirectory'];
            }
            else {
                pickerProperties = ['multiSelections', options.pickFolders ? 'openDirectory' : 'openFile', 'createDirectory'];
            }
            electron_1.dialog.showOpenDialog(focussedWindow && focussedWindow.win, {
                defaultPath: workingDir,
                properties: pickerProperties
            }, function (paths) {
                if (paths && paths.length > 0) {
                    // Remember path in storage for next time
                    _this.storageService.setItem(WindowsManager.workingDirPickerStorageKey, path.dirname(paths[0]));
                    // Return
                    clb(paths);
                }
                else {
                    clb(void (0));
                }
            });
        };
        WindowsManager.prototype.focusLastActive = function (cli, context) {
            var lastActive = this.getLastActiveWindow();
            if (lastActive) {
                lastActive.focus();
                return lastActive;
            }
            // No window - open new empty one
            var res = this.open({ context: context, cli: cli, forceEmpty: true });
            return res && res[0];
        };
        WindowsManager.prototype.getLastActiveWindow = function () {
            return windowsUtils_1.getLastActiveWindow(WindowsManager.WINDOWS);
        };
        WindowsManager.prototype.findWindow = function (workspacePath, filePath, extensionDevelopmentPath) {
            if (WindowsManager.WINDOWS.length) {
                // Sort the last active window to the front of the array of windows to test
                var windowsToTest = WindowsManager.WINDOWS.slice(0);
                var lastActiveWindow = this.getLastActiveWindow();
                if (lastActiveWindow) {
                    windowsToTest.splice(windowsToTest.indexOf(lastActiveWindow), 1);
                    windowsToTest.unshift(lastActiveWindow);
                }
                // Find it
                var res = windowsToTest.filter(function (w) {
                    // match on workspace
                    if (typeof w.openedWorkspacePath === 'string' && (files_1.isEqual(w.openedWorkspacePath, workspacePath, !platform.isLinux /* ignorecase */))) {
                        return true;
                    }
                    // match on file
                    if (typeof w.openedFilePath === 'string' && files_1.isEqual(w.openedFilePath, filePath, !platform.isLinux /* ignorecase */)) {
                        return true;
                    }
                    // match on file path
                    if (typeof w.openedWorkspacePath === 'string' && filePath && files_1.isEqualOrParent(filePath, w.openedWorkspacePath, !platform.isLinux /* ignorecase */)) {
                        return true;
                    }
                    // match on extension development path
                    if (typeof extensionDevelopmentPath === 'string' && files_1.isEqual(w.extensionDevelopmentPath, extensionDevelopmentPath, !platform.isLinux /* ignorecase */)) {
                        return true;
                    }
                    return false;
                });
                if (res && res.length) {
                    return res[0];
                }
            }
            return null;
        };
        WindowsManager.prototype.openNewWindow = function (context) {
            this.open({ context: context, cli: this.environmentService.args, forceNewWindow: true, forceEmpty: true });
        };
        WindowsManager.prototype.sendToFocused = function (channel) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var focusedWindow = this.getFocusedWindow() || this.getLastActiveWindow();
            if (focusedWindow) {
                focusedWindow.sendWhenReady.apply(focusedWindow, [channel].concat(args));
            }
        };
        WindowsManager.prototype.sendToAll = function (channel, payload, windowIdsToIgnore) {
            WindowsManager.WINDOWS.forEach(function (w) {
                if (windowIdsToIgnore && windowIdsToIgnore.indexOf(w.id) >= 0) {
                    return; // do not send if we are instructed to ignore it
                }
                w.sendWhenReady(channel, payload);
            });
        };
        WindowsManager.prototype.getFocusedWindow = function () {
            var win = electron_1.BrowserWindow.getFocusedWindow();
            if (win) {
                return this.getWindowById(win.id);
            }
            return null;
        };
        WindowsManager.prototype.getWindowById = function (windowId) {
            var res = WindowsManager.WINDOWS.filter(function (w) { return w.id === windowId; });
            if (res && res.length === 1) {
                return res[0];
            }
            return null;
        };
        WindowsManager.prototype.getWindows = function () {
            return WindowsManager.WINDOWS;
        };
        WindowsManager.prototype.getWindowCount = function () {
            return WindowsManager.WINDOWS.length;
        };
        WindowsManager.prototype.onWindowError = function (vscodeWindow, error) {
            var _this = this;
            console.error(error === WindowError.CRASHED ? '[VS Code]: render process crashed!' : '[VS Code]: detected unresponsive');
            // Unresponsive
            if (error === WindowError.UNRESPONSIVE) {
                electron_1.dialog.showMessageBox(vscodeWindow.win, {
                    title: product_1.default.nameLong,
                    type: 'warning',
                    buttons: [nls.localize(4, null), nls.localize(5, null), nls.localize(6, null)],
                    message: nls.localize(7, null),
                    detail: nls.localize(8, null),
                    noLink: true
                }, function (result) {
                    if (result === 0) {
                        vscodeWindow.reload();
                    }
                    else if (result === 2) {
                        _this.onBeforeWindowClose(vscodeWindow); // 'close' event will not be fired on destroy(), so run it manually
                        vscodeWindow.win.destroy(); // make sure to destroy the window as it is unresponsive
                    }
                });
            }
            else {
                electron_1.dialog.showMessageBox(vscodeWindow.win, {
                    title: product_1.default.nameLong,
                    type: 'warning',
                    buttons: [nls.localize(9, null), nls.localize(10, null)],
                    message: nls.localize(11, null),
                    detail: nls.localize(12, null),
                    noLink: true
                }, function (result) {
                    if (result === 0) {
                        vscodeWindow.reload();
                    }
                    else if (result === 1) {
                        _this.onBeforeWindowClose(vscodeWindow); // 'close' event will not be fired on destroy(), so run it manually
                        vscodeWindow.win.destroy(); // make sure to destroy the window as it has crashed
                    }
                });
            }
        };
        WindowsManager.prototype.onWindowClosed = function (win) {
            // Tell window
            win.dispose();
            // Remove from our list so that Electron can clean it up
            var index = WindowsManager.WINDOWS.indexOf(win);
            WindowsManager.WINDOWS.splice(index, 1);
            // Emit
            this._onWindowClose.fire(win.id);
        };
        WindowsManager.prototype.updateWindowsJumpList = function () {
            if (!platform.isWindows) {
                return; // only on windows
            }
            var jumpList = [];
            // Tasks
            jumpList.push({
                type: 'tasks',
                items: [
                    {
                        type: 'task',
                        title: nls.localize(13, null),
                        description: nls.localize(14, null),
                        program: process.execPath,
                        args: '-n',
                        iconPath: process.execPath,
                        iconIndex: 0
                    }
                ]
            });
            // Recent Folders
            if (this.getRecentPathsList().folders.length > 0) {
                // The user might have meanwhile removed items from the jump list and we have to respect that
                // so we need to update our list of recent paths with the choice of the user to not add them again
                // Also: Windows will not show our custom category at all if there is any entry which was removed
                // by the user! See https://github.com/Microsoft/vscode/issues/15052
                this.removeFromRecentPathsList(electron_1.app.getJumpListSettings().removedItems.map(function (r) { return strings_1.trim(r.args, '"'); }));
                // Add entries
                jumpList.push({
                    type: 'custom',
                    name: nls.localize(15, null),
                    items: this.getRecentPathsList().folders.slice(0, 7 /* limit number of entries here */).map(function (folder) {
                        return {
                            type: 'task',
                            title: path.basename(folder) || folder,
                            description: nls.localize(16, null, path.basename(folder), labels_1.getPathLabel(path.dirname(folder))),
                            program: process.execPath,
                            args: "\"" + folder + "\"",
                            iconPath: 'explorer.exe',
                            iconIndex: 0
                        };
                    }).filter(function (i) { return !!i; })
                });
            }
            // Recent
            jumpList.push({
                type: 'recent' // this enables to show files in the "recent" category
            });
            try {
                electron_1.app.setJumpList(jumpList);
            }
            catch (error) {
                this.logService.log('#setJumpList', error); // since setJumpList is relatively new API, make sure to guard for errors
            }
        };
        WindowsManager.prototype.quit = function () {
            var _this = this;
            // If the user selected to exit from an extension development host window, do not quit, but just
            // close the window unless this is the last window that is opened.
            var vscodeWindow = this.getFocusedWindow();
            if (vscodeWindow && vscodeWindow.isExtensionDevelopmentHost && this.getWindowCount() > 1) {
                vscodeWindow.win.close();
            }
            else {
                setTimeout(function () {
                    _this.lifecycleService.quit();
                }, 10 /* delay to unwind callback stack (IPC) */);
            }
        };
        return WindowsManager;
    }());
    WindowsManager.MAX_TOTAL_RECENT_ENTRIES = 100;
    WindowsManager.recentPathsListStorageKey = 'openedPathsList';
    WindowsManager.workingDirPickerStorageKey = 'pickerWorkingDir';
    WindowsManager.windowsStateStorageKey = 'windowsState';
    WindowsManager.WINDOWS = [];
    WindowsManager = __decorate([
        __param(0, log_1.ILogService),
        __param(1, storage_1.IStorageService),
        __param(2, environment_1.IEnvironmentService),
        __param(3, lifecycle_1.ILifecycleService),
        __param(4, backup_1.IBackupMainService),
        __param(5, telemetry_1.ITelemetryService),
        __param(6, configuration_1.IConfigurationService)
    ], WindowsManager);
    exports.WindowsManager = WindowsManager;
    var KeyboardLayoutMonitor = (function () {
        function KeyboardLayoutMonitor() {
            this._emitter = new event_1.Emitter();
            this._registered = false;
            this._isISOKeyboard = this._readIsISOKeyboard();
        }
        KeyboardLayoutMonitor.prototype.onDidChangeKeyboardLayout = function (callback) {
            var _this = this;
            if (!this._registered) {
                this._registered = true;
                nativeKeymap.onDidChangeKeyboardLayout(function () {
                    _this._emitter.fire(_this._isISOKeyboard);
                });
                if (platform.isMacintosh) {
                    // See https://github.com/Microsoft/vscode/issues/24153
                    // On OSX, on ISO keyboards, Chromium swaps the scan codes
                    // of IntlBackslash and Backquote.
                    //
                    // The C++ methods can give the current keyboard type (ISO or not)
                    // only after a NSEvent was handled.
                    //
                    // We therefore poll.
                    setInterval(function () {
                        var newValue = _this._readIsISOKeyboard();
                        if (_this._isISOKeyboard === newValue) {
                            // no change
                            return;
                        }
                        _this._isISOKeyboard = newValue;
                        _this._emitter.fire(_this._isISOKeyboard);
                    }, 3000);
                }
            }
            return this._emitter.event(callback);
        };
        KeyboardLayoutMonitor.prototype._readIsISOKeyboard = function () {
            if (platform.isMacintosh) {
                return nativeKeymap.isISOKeyboard();
            }
            return false;
        };
        KeyboardLayoutMonitor.prototype.isISOKeyboard = function () {
            return this._isISOKeyboard;
        };
        return KeyboardLayoutMonitor;
    }());
    KeyboardLayoutMonitor.INSTANCE = new KeyboardLayoutMonitor();
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[60/*vs/code/electron-main/launch*/], __M([1/*require*/,0/*exports*/,24/*vs/code/common/windows*/,35/*vs/code/electron-main/windows*/,2/*vs/base/common/winjs.base*/,25/*vs/code/electron-main/log*/,32/*vs/platform/url/common/url*/,3/*vs/platform/instantiation/common/instantiation*/,4/*vs/base/common/event*/]), function (require, exports, windows_1, windows_2, winjs_base_1, log_1, url_1, instantiation_1, event_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ID = 'launchService';
    exports.ILaunchService = instantiation_1.createDecorator(exports.ID);
    var LaunchChannel = (function () {
        function LaunchChannel(service) {
            this.service = service;
        }
        LaunchChannel.prototype.call = function (command, arg) {
            switch (command) {
                case 'start':
                    var _a = arg, args = _a.args, userEnv = _a.userEnv;
                    return this.service.start(args, userEnv);
                case 'get-main-process-id':
                    return this.service.getMainProcessId();
            }
            return undefined;
        };
        return LaunchChannel;
    }());
    exports.LaunchChannel = LaunchChannel;
    var LaunchChannelClient = (function () {
        function LaunchChannelClient(channel) {
            this.channel = channel;
        }
        LaunchChannelClient.prototype.start = function (args, userEnv) {
            return this.channel.call('start', { args: args, userEnv: userEnv });
        };
        LaunchChannelClient.prototype.getMainProcessId = function () {
            return this.channel.call('get-main-process-id', null);
        };
        return LaunchChannelClient;
    }());
    exports.LaunchChannelClient = LaunchChannelClient;
    var LaunchService = (function () {
        function LaunchService(logService, windowsService, urlService) {
            this.logService = logService;
            this.windowsService = windowsService;
            this.urlService = urlService;
        }
        LaunchService.prototype.start = function (args, userEnv) {
            var _this = this;
            this.logService.log('Received data from other instance: ', args, userEnv);
            var openUrlArg = args['open-url'] || [];
            var openUrl = typeof openUrlArg === 'string' ? [openUrlArg] : openUrlArg;
            var context = !!userEnv['VSCODE_CLI'] ? windows_1.OpenContext.CLI : windows_1.OpenContext.DESKTOP;
            if (openUrl.length > 0) {
                openUrl.forEach(function (url) { return _this.urlService.open(url); });
                return winjs_base_1.TPromise.as(null);
            }
            // Otherwise handle in windows service
            var usedWindows;
            if (!!args.extensionDevelopmentPath) {
                this.windowsService.openExtensionDevelopmentHostWindow({ context: context, cli: args, userEnv: userEnv });
            }
            else if (args._.length === 0 && (args['new-window'] || args['unity-launch'])) {
                usedWindows = this.windowsService.open({ context: context, cli: args, userEnv: userEnv, forceNewWindow: true, forceEmpty: true });
            }
            else if (args._.length === 0) {
                usedWindows = [this.windowsService.focusLastActive(args, context)];
            }
            else {
                usedWindows = this.windowsService.open({
                    context: context,
                    cli: args,
                    userEnv: userEnv,
                    forceNewWindow: args.wait || args['new-window'],
                    preferNewWindow: !args['reuse-window'],
                    forceReuseWindow: args['reuse-window'],
                    diffMode: args.diff
                });
            }
            // If the other instance is waiting to be killed, we hook up a window listener if one window
            // is being used and only then resolve the startup promise which will kill this second instance
            if (args.wait && usedWindows && usedWindows.length === 1 && usedWindows[0]) {
                var windowId_1 = usedWindows[0].id;
                return new winjs_base_1.TPromise(function (c, e) {
                    var onceWindowClose = event_1.once(_this.windowsService.onWindowClose);
                    onceWindowClose(function (id) {
                        if (id === windowId_1) {
                            c(null);
                        }
                    });
                });
            }
            return winjs_base_1.TPromise.as(null);
        };
        LaunchService.prototype.getMainProcessId = function () {
            this.logService.log('Received request for process ID from other instance.');
            return winjs_base_1.TPromise.as(process.pid);
        };
        return LaunchService;
    }());
    LaunchService = __decorate([
        __param(0, log_1.ILogService),
        __param(1, windows_2.IWindowsMainService),
        __param(2, url_1.IURLService)
    ], LaunchService);
    exports.LaunchService = LaunchService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[117/*vs/code/electron-main/menus*/], __M([1/*require*/,0/*exports*/,64/*vs/nls!vs/code/electron-main/menus*/,5/*vs/base/common/platform*/,20/*vs/base/common/arrays*/,13/*vs/platform/environment/common/environment*/,10/*electron*/,24/*vs/code/common/windows*/,35/*vs/code/electron-main/windows*/,12/*vs/platform/configuration/common/configuration*/,27/*vs/code/electron-main/storage*/,23/*vs/platform/files/common/files*/,36/*vs/platform/telemetry/common/telemetry*/,37/*vs/platform/update/common/update*/,16/*vs/platform/node/product*/,34/*vs/base/common/async*/,3/*vs/platform/instantiation/common/instantiation*/,4/*vs/base/common/event*/,57/*vs/base/node/config*/]), function (require, exports, nls, platform_1, arrays, environment_1, electron_1, windows_1, windows_2, configuration_1, storage_1, files_1, telemetry_1, update_1, product_1, async_1, instantiation_1, event_1, config_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeybindingsResolver = (function () {
        function KeybindingsResolver(storageService, environmentService, windowsService) {
            this.storageService = storageService;
            this.windowsService = windowsService;
            this._onKeybindingsChanged = new event_1.Emitter();
            this.onKeybindingsChanged = this._onKeybindingsChanged.event;
            this.commandIds = new Set();
            this.keybindings = this.storageService.getItem(KeybindingsResolver.lastKnownKeybindingsMapStorageKey) || Object.create(null);
            this.keybindingsWatcher = new config_1.ConfigWatcher(environmentService.appKeybindingsPath, { changeBufferDelay: 100 });
            this.registerListeners();
        }
        KeybindingsResolver.prototype.registerListeners = function () {
            var _this = this;
            // Resolve keybindings when any first window is loaded
            var onceOnWindowReady = event_1.once(this.windowsService.onWindowReady);
            onceOnWindowReady(function (win) { return _this.resolveKeybindings(win); });
            // Listen to resolved keybindings from window
            electron_1.ipcMain.on('vscode:keybindingsResolved', function (event, rawKeybindings) {
                var keybindings = [];
                try {
                    keybindings = JSON.parse(rawKeybindings);
                }
                catch (error) {
                    // Should not happen
                }
                // Fill hash map of resolved keybindings and check for changes
                var keybindingsChanged = false;
                var keybindingsCount = 0;
                var resolvedKeybindings = Object.create(null);
                keybindings.forEach(function (keybinding) {
                    keybindingsCount++;
                    resolvedKeybindings[keybinding.id] = keybinding;
                    if (!_this.keybindings[keybinding.id] || keybinding.label !== _this.keybindings[keybinding.id].label) {
                        keybindingsChanged = true;
                    }
                });
                // A keybinding might have been unassigned, so we have to account for that too
                if (Object.keys(_this.keybindings).length !== keybindingsCount) {
                    keybindingsChanged = true;
                }
                if (keybindingsChanged) {
                    _this.keybindings = resolvedKeybindings;
                    _this.storageService.setItem(KeybindingsResolver.lastKnownKeybindingsMapStorageKey, _this.keybindings); // keep to restore instantly after restart
                    _this._onKeybindingsChanged.fire();
                }
            });
            // Resolve keybindings again when keybindings.json changes
            this.keybindingsWatcher.onDidUpdateConfiguration(function () { return _this.resolveKeybindings(); });
            // Resolve keybindings when window reloads because an installed extension could have an impact
            this.windowsService.onWindowReload(function () { return _this.resolveKeybindings(); });
        };
        KeybindingsResolver.prototype.resolveKeybindings = function (win) {
            if (win === void 0) { win = this.windowsService.getLastActiveWindow(); }
            if (this.commandIds.size && win) {
                var commandIds_1 = [];
                this.commandIds.forEach(function (id) { return commandIds_1.push(id); });
                win.sendWhenReady('vscode:resolveKeybindings', JSON.stringify(commandIds_1));
            }
        };
        KeybindingsResolver.prototype.getKeybinding = function (commandId) {
            if (!commandId) {
                return void 0;
            }
            if (!this.commandIds.has(commandId)) {
                this.commandIds.add(commandId);
            }
            return this.keybindings[commandId];
        };
        return KeybindingsResolver;
    }());
    KeybindingsResolver.lastKnownKeybindingsMapStorageKey = 'lastKnownKeybindings';
    KeybindingsResolver = __decorate([
        __param(0, storage_1.IStorageService),
        __param(1, environment_1.IEnvironmentService),
        __param(2, windows_2.IWindowsMainService)
    ], KeybindingsResolver);
    var telemetryFrom = 'menu';
    var VSCodeMenu = (function () {
        function VSCodeMenu(updateService, instantiationService, configurationService, windowsService, environmentService, telemetryService) {
            var _this = this;
            this.updateService = updateService;
            this.configurationService = configurationService;
            this.windowsService = windowsService;
            this.environmentService = environmentService;
            this.telemetryService = telemetryService;
            this.extensionViewlets = [];
            this.menuUpdater = new async_1.RunOnceScheduler(function () { return _this.doUpdateMenu(); }, 0);
            this.keybindingsResolver = instantiationService.createInstance(KeybindingsResolver);
            this.onConfigurationUpdated(this.configurationService.getConfiguration());
            this.install();
            this.registerListeners();
        }
        VSCodeMenu.prototype.registerListeners = function () {
            var _this = this;
            // Keep flag when app quits
            electron_1.app.on('will-quit', function () {
                _this.isQuitting = true;
            });
            // Listen to some events from window service
            this.windowsService.onPathsOpen(function (paths) { return _this.updateMenu(); });
            this.windowsService.onRecentPathsChange(function (paths) { return _this.updateMenu(); });
            this.windowsService.onWindowClose(function (_) { return _this.onClose(_this.windowsService.getWindowCount()); });
            // Listen to extension viewlets
            electron_1.ipcMain.on('vscode:extensionViewlets', function (event, rawExtensionViewlets) {
                var extensionViewlets = [];
                try {
                    extensionViewlets = JSON.parse(rawExtensionViewlets);
                }
                catch (error) {
                    // Should not happen
                }
                if (extensionViewlets.length) {
                    _this.extensionViewlets = extensionViewlets;
                    _this.updateMenu();
                }
            });
            // Update when auto save config changes
            this.configurationService.onDidUpdateConfiguration(function (e) { return _this.onConfigurationUpdated(e.config, true /* update menu if changed */); });
            // Listen to update service
            this.updateService.onStateChange(function () { return _this.updateMenu(); });
            // Listen to keybindings change
            this.keybindingsResolver.onKeybindingsChanged(function () { return _this.updateMenu(); });
        };
        VSCodeMenu.prototype.onConfigurationUpdated = function (config, handleMenu) {
            var updateMenu = false;
            var newAutoSaveSetting = config && config.files && config.files.autoSave;
            if (newAutoSaveSetting !== this.currentAutoSaveSetting) {
                this.currentAutoSaveSetting = newAutoSaveSetting;
                updateMenu = true;
            }
            var newSidebarLocation = config && config.workbench && config.workbench.sideBar && config.workbench.sideBar.location || 'left';
            if (newSidebarLocation !== this.currentSidebarLocation) {
                this.currentSidebarLocation = newSidebarLocation;
                updateMenu = true;
            }
            var newStatusbarVisible = config && config.workbench && config.workbench.statusBar && config.workbench.statusBar.visible;
            if (typeof newStatusbarVisible !== 'boolean') {
                newStatusbarVisible = true;
            }
            if (newStatusbarVisible !== this.currentStatusbarVisible) {
                this.currentStatusbarVisible = newStatusbarVisible;
                updateMenu = true;
            }
            var newActivityBarVisible = config && config.workbench && config.workbench.activityBar && config.workbench.activityBar.visible;
            if (typeof newActivityBarVisible !== 'boolean') {
                newActivityBarVisible = true;
            }
            if (newActivityBarVisible !== this.currentActivityBarVisible) {
                this.currentActivityBarVisible = newActivityBarVisible;
                updateMenu = true;
            }
            if (handleMenu && updateMenu) {
                this.updateMenu();
            }
        };
        VSCodeMenu.prototype.updateMenu = function () {
            this.menuUpdater.schedule(); // buffer multiple attempts to update the menu
        };
        VSCodeMenu.prototype.doUpdateMenu = function () {
            var _this = this;
            // Due to limitations in Electron, it is not possible to update menu items dynamically. The suggested
            // workaround from Electron is to set the application menu again.
            // See also https://github.com/electron/electron/issues/846
            //
            // Run delayed to prevent updating menu while it is open
            if (!this.isQuitting) {
                setTimeout(function () {
                    if (!_this.isQuitting) {
                        _this.install();
                    }
                }, 10 /* delay this because there is an issue with updating a menu when it is open */);
            }
        };
        VSCodeMenu.prototype.onClose = function (remainingWindowCount) {
            if (remainingWindowCount === 0 && platform_1.isMacintosh) {
                this.updateMenu();
            }
        };
        VSCodeMenu.prototype.install = function () {
            var _this = this;
            // Menus
            var menubar = new electron_1.Menu();
            // Mac: Application
            var macApplicationMenuItem;
            if (platform_1.isMacintosh) {
                var applicationMenu = new electron_1.Menu();
                macApplicationMenuItem = new electron_1.MenuItem({ label: product_1.default.nameShort, submenu: applicationMenu });
                this.setMacApplicationMenu(applicationMenu);
            }
            // File
            var fileMenu = new electron_1.Menu();
            var fileMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(0, null)), submenu: fileMenu });
            this.setFileMenu(fileMenu);
            // Edit
            var editMenu = new electron_1.Menu();
            var editMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(1, null)), submenu: editMenu });
            this.setEditMenu(editMenu);
            // Selection
            var selectionMenu = new electron_1.Menu();
            var selectionMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(2, null)), submenu: selectionMenu });
            this.setSelectionMenu(selectionMenu);
            // View
            var viewMenu = new electron_1.Menu();
            var viewMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(3, null)), submenu: viewMenu });
            this.setViewMenu(viewMenu);
            // Goto
            var gotoMenu = new electron_1.Menu();
            var gotoMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(4, null)), submenu: gotoMenu });
            this.setGotoMenu(gotoMenu);
            // Debug
            var debugMenu = new electron_1.Menu();
            var debugMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(5, null)), submenu: debugMenu });
            this.setDebugMenu(debugMenu);
            // Mac: Window
            var macWindowMenuItem;
            if (platform_1.isMacintosh) {
                var windowMenu = new electron_1.Menu();
                macWindowMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(6, null)), submenu: windowMenu, role: 'window' });
                this.setMacWindowMenu(windowMenu);
            }
            // Help
            var helpMenu = new electron_1.Menu();
            var helpMenuItem = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(7, null)), submenu: helpMenu, role: 'help' });
            this.setHelpMenu(helpMenu);
            // Menu Structure
            if (macApplicationMenuItem) {
                menubar.append(macApplicationMenuItem);
            }
            menubar.append(fileMenuItem);
            menubar.append(editMenuItem);
            menubar.append(selectionMenuItem);
            menubar.append(viewMenuItem);
            menubar.append(gotoMenuItem);
            menubar.append(debugMenuItem);
            if (macWindowMenuItem) {
                menubar.append(macWindowMenuItem);
            }
            menubar.append(helpMenuItem);
            electron_1.Menu.setApplicationMenu(menubar);
            // Dock Menu
            if (platform_1.isMacintosh && !this.appMenuInstalled) {
                this.appMenuInstalled = true;
                var dockMenu = new electron_1.Menu();
                dockMenu.append(new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(8, null)), click: function () { return _this.windowsService.openNewWindow(windows_1.OpenContext.DOCK); } }));
                electron_1.app.dock.setMenu(dockMenu);
            }
        };
        VSCodeMenu.prototype.setMacApplicationMenu = function (macApplicationMenu) {
            var _this = this;
            var about = new electron_1.MenuItem({ label: nls.localize(9, null, product_1.default.nameLong), role: 'about' });
            var checkForUpdates = this.getUpdateMenuItems();
            var preferences = this.getPreferencesMenu();
            var hide = new electron_1.MenuItem({ label: nls.localize(10, null, product_1.default.nameLong), role: 'hide', accelerator: 'Command+H' });
            var hideOthers = new electron_1.MenuItem({ label: nls.localize(11, null), role: 'hideothers', accelerator: 'Command+Alt+H' });
            var showAll = new electron_1.MenuItem({ label: nls.localize(12, null), role: 'unhide' });
            var quit = new electron_1.MenuItem(this.likeAction('workbench.action.quit', { label: nls.localize(13, null, product_1.default.nameLong), click: function () { return _this.windowsService.quit(); } }));
            var actions = [about];
            actions.push.apply(actions, checkForUpdates);
            actions.push.apply(actions, [
                __separator__(),
                preferences,
                __separator__(),
                hide,
                hideOthers,
                showAll,
                __separator__(),
                quit
            ]);
            actions.forEach(function (i) { return macApplicationMenu.append(i); });
        };
        VSCodeMenu.prototype.setFileMenu = function (fileMenu) {
            var _this = this;
            var hasNoWindows = (this.windowsService.getWindowCount() === 0);
            var newFile;
            if (hasNoWindows) {
                newFile = new electron_1.MenuItem(this.likeAction('workbench.action.files.newUntitledFile', { label: mnemonicLabel(nls.localize(14, null)), click: function () { return _this.windowsService.openNewWindow(windows_1.OpenContext.MENU); } }));
            }
            else {
                newFile = this.createMenuItem(nls.localize(15, null), 'workbench.action.files.newUntitledFile');
            }
            var open = new electron_1.MenuItem(this.likeAction('workbench.action.files.openFileFolder', { label: mnemonicLabel(nls.localize(16, null)), click: function (menuItem, win, event) { return _this.windowsService.openFileFolderPicker(_this.isOptionClick(event), { from: telemetryFrom }); } }));
            var openFolder = new electron_1.MenuItem(this.likeAction('workbench.action.files.openFolder', { label: mnemonicLabel(nls.localize(17, null)), click: function (menuItem, win, event) { return _this.windowsService.openFolderPicker(_this.isOptionClick(event), undefined, { from: telemetryFrom }); } }));
            var openFile;
            if (hasNoWindows) {
                openFile = new electron_1.MenuItem(this.likeAction('workbench.action.files.openFile', { label: mnemonicLabel(nls.localize(18, null)), click: function (menuItem, win, event) { return _this.windowsService.openFilePicker(_this.isOptionClick(event), undefined, undefined, { from: telemetryFrom }); } }));
            }
            else {
                openFile = this.createMenuItem(nls.localize(19, null), ['workbench.action.files.openFile', 'workbench.action.files.openFileInNewWindow']);
            }
            var openRecentMenu = new electron_1.Menu();
            this.setOpenRecentMenu(openRecentMenu);
            var openRecent = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(20, null)), submenu: openRecentMenu, enabled: openRecentMenu.items.length > 0 });
            var saveFile = this.createMenuItem(nls.localize(21, null), 'workbench.action.files.save', this.windowsService.getWindowCount() > 0);
            var saveFileAs = this.createMenuItem(nls.localize(22, null), 'workbench.action.files.saveAs', this.windowsService.getWindowCount() > 0);
            var saveAllFiles = this.createMenuItem(nls.localize(23, null), 'workbench.action.files.saveAll', this.windowsService.getWindowCount() > 0);
            var autoSaveEnabled = [files_1.AutoSaveConfiguration.AFTER_DELAY, files_1.AutoSaveConfiguration.ON_FOCUS_CHANGE, files_1.AutoSaveConfiguration.ON_WINDOW_CHANGE].some(function (s) { return _this.currentAutoSaveSetting === s; });
            var autoSave = new electron_1.MenuItem(this.likeAction('vscode.toggleAutoSave', { label: mnemonicLabel(nls.localize(24, null)), type: 'checkbox', checked: autoSaveEnabled, enabled: this.windowsService.getWindowCount() > 0, click: function () { return _this.windowsService.sendToFocused('vscode.toggleAutoSave'); } }, false));
            var preferences = this.getPreferencesMenu();
            var newWindow = new electron_1.MenuItem(this.likeAction('workbench.action.newWindow', { label: mnemonicLabel(nls.localize(25, null)), click: function () { return _this.windowsService.openNewWindow(windows_1.OpenContext.MENU); } }));
            var revertFile = this.createMenuItem(nls.localize(26, null), 'workbench.action.files.revert', this.windowsService.getWindowCount() > 0);
            var closeWindow = new electron_1.MenuItem(this.likeAction('workbench.action.closeWindow', { label: mnemonicLabel(nls.localize(27, null)), click: function () { return _this.windowsService.getLastActiveWindow().win.close(); }, enabled: this.windowsService.getWindowCount() > 0 }));
            var closeFolder = this.createMenuItem(nls.localize(28, null), 'workbench.action.closeFolder');
            var closeEditor = this.createMenuItem(nls.localize(29, null), 'workbench.action.closeActiveEditor');
            var exit = new electron_1.MenuItem(this.likeAction('workbench.action.quit', { label: mnemonicLabel(nls.localize(30, null)), click: function () { return _this.windowsService.quit(); } }));
            arrays.coalesce([
                newFile,
                newWindow,
                __separator__(),
                platform_1.isMacintosh ? open : null,
                !platform_1.isMacintosh ? openFile : null,
                !platform_1.isMacintosh ? openFolder : null,
                openRecent,
                __separator__(),
                saveFile,
                saveFileAs,
                saveAllFiles,
                __separator__(),
                autoSave,
                __separator__(),
                !platform_1.isMacintosh ? preferences : null,
                !platform_1.isMacintosh ? __separator__() : null,
                revertFile,
                closeEditor,
                closeFolder,
                !platform_1.isMacintosh ? closeWindow : null,
                !platform_1.isMacintosh ? __separator__() : null,
                !platform_1.isMacintosh ? exit : null
            ]).forEach(function (item) { return fileMenu.append(item); });
        };
        VSCodeMenu.prototype.getPreferencesMenu = function () {
            var settings = this.createMenuItem(nls.localize(31, null), 'workbench.action.openGlobalSettings');
            var kebindingSettings = this.createMenuItem(nls.localize(32, null), 'workbench.action.openGlobalKeybindings');
            var keymapExtensions = this.createMenuItem(nls.localize(33, null), 'workbench.extensions.action.showRecommendedKeymapExtensions');
            var snippetsSettings = this.createMenuItem(nls.localize(34, null), 'workbench.action.openSnippets');
            var colorThemeSelection = this.createMenuItem(nls.localize(35, null), 'workbench.action.selectTheme');
            var iconThemeSelection = this.createMenuItem(nls.localize(36, null), 'workbench.action.selectIconTheme');
            var preferencesMenu = new electron_1.Menu();
            preferencesMenu.append(settings);
            preferencesMenu.append(__separator__());
            preferencesMenu.append(kebindingSettings);
            preferencesMenu.append(keymapExtensions);
            preferencesMenu.append(__separator__());
            preferencesMenu.append(snippetsSettings);
            preferencesMenu.append(__separator__());
            preferencesMenu.append(colorThemeSelection);
            preferencesMenu.append(iconThemeSelection);
            return new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(37, null)), submenu: preferencesMenu });
        };
        VSCodeMenu.prototype.setOpenRecentMenu = function (openRecentMenu) {
            openRecentMenu.append(this.createMenuItem(nls.localize(38, null), 'workbench.action.reopenClosedEditor'));
            var _a = this.windowsService.getRecentPathsList(), folders = _a.folders, files = _a.files;
            // Folders
            if (folders.length > 0) {
                openRecentMenu.append(__separator__());
                for (var i = 0; i < VSCodeMenu.MAX_MENU_RECENT_ENTRIES && i < folders.length; i++) {
                    openRecentMenu.append(this.createOpenRecentMenuItem(folders[i], 'openRecentFolder'));
                }
            }
            // Files
            if (files.length > 0) {
                openRecentMenu.append(__separator__());
                for (var i = 0; i < VSCodeMenu.MAX_MENU_RECENT_ENTRIES && i < files.length; i++) {
                    openRecentMenu.append(this.createOpenRecentMenuItem(files[i], 'openRecentFile'));
                }
            }
            if (folders.length || files.length) {
                openRecentMenu.append(__separator__());
                openRecentMenu.append(this.createMenuItem(nls.localize(39, null), 'workbench.action.clearRecentFiles'));
            }
        };
        VSCodeMenu.prototype.createOpenRecentMenuItem = function (path, commandId) {
            var _this = this;
            var label = path;
            if ((platform_1.isMacintosh || platform_1.isLinux) && path.indexOf(this.environmentService.userHome) === 0) {
                label = "~" + path.substr(this.environmentService.userHome.length);
            }
            return new electron_1.MenuItem(this.likeAction(commandId, {
                label: unMnemonicLabel(label), click: function (menuItem, win, event) {
                    var openInNewWindow = _this.isOptionClick(event);
                    var success = !!_this.windowsService.open({ context: windows_1.OpenContext.MENU, cli: _this.environmentService.args, pathsToOpen: [path], forceNewWindow: openInNewWindow });
                    if (!success) {
                        _this.windowsService.removeFromRecentPathsList(path);
                    }
                }
            }, false));
        };
        VSCodeMenu.prototype.isOptionClick = function (event) {
            return event && ((!platform_1.isMacintosh && (event.ctrlKey || event.shiftKey)) || (platform_1.isMacintosh && (event.metaKey || event.altKey)));
        };
        VSCodeMenu.prototype.createRoleMenuItem = function (label, commandId, role) {
            var options = {
                label: mnemonicLabel(label),
                role: role,
                enabled: true
            };
            return new electron_1.MenuItem(this.withKeybinding(commandId, options));
        };
        VSCodeMenu.prototype.setEditMenu = function (winLinuxEditMenu) {
            var undo;
            var redo;
            var cut;
            var copy;
            var paste;
            if (platform_1.isMacintosh) {
                undo = this.createDevToolsAwareMenuItem(nls.localize(40, null), 'undo', function (devTools) { return devTools.undo(); });
                redo = this.createDevToolsAwareMenuItem(nls.localize(41, null), 'redo', function (devTools) { return devTools.redo(); });
                cut = this.createRoleMenuItem(nls.localize(42, null), 'editor.action.clipboardCutAction', 'cut');
                copy = this.createRoleMenuItem(nls.localize(43, null), 'editor.action.clipboardCopyAction', 'copy');
                paste = this.createRoleMenuItem(nls.localize(44, null), 'editor.action.clipboardPasteAction', 'paste');
            }
            else {
                undo = this.createMenuItem(nls.localize(45, null), 'undo');
                redo = this.createMenuItem(nls.localize(46, null), 'redo');
                cut = this.createMenuItem(nls.localize(47, null), 'editor.action.clipboardCutAction');
                copy = this.createMenuItem(nls.localize(48, null), 'editor.action.clipboardCopyAction');
                paste = this.createMenuItem(nls.localize(49, null), 'editor.action.clipboardPasteAction');
            }
            var find = this.createMenuItem(nls.localize(50, null), 'actions.find');
            var replace = this.createMenuItem(nls.localize(51, null), 'editor.action.startFindReplaceAction');
            var findInFiles = this.createMenuItem(nls.localize(52, null), 'workbench.action.findInFiles');
            var replaceInFiles = this.createMenuItem(nls.localize(53, null), 'workbench.action.replaceInFiles');
            var emmetExpandAbbreviation = this.createMenuItem(nls.localize(54, null), 'editor.emmet.action.expandAbbreviation');
            var showEmmetCommands = this.createMenuItem(nls.localize(55, null), 'workbench.action.showEmmetCommands');
            var toggleLineComment = this.createMenuItem(nls.localize(56, null), 'editor.action.commentLine');
            var toggleBlockComment = this.createMenuItem(nls.localize(57, null), 'editor.action.blockComment');
            [
                undo,
                redo,
                __separator__(),
                cut,
                copy,
                paste,
                __separator__(),
                find,
                replace,
                __separator__(),
                findInFiles,
                replaceInFiles,
                __separator__(),
                toggleLineComment,
                toggleBlockComment,
                emmetExpandAbbreviation,
                showEmmetCommands
            ].forEach(function (item) { return winLinuxEditMenu.append(item); });
        };
        VSCodeMenu.prototype.setSelectionMenu = function (winLinuxEditMenu) {
            var insertCursorAbove = this.createMenuItem(nls.localize(58, null), 'editor.action.insertCursorAbove');
            var insertCursorBelow = this.createMenuItem(nls.localize(59, null), 'editor.action.insertCursorBelow');
            var insertCursorAtEndOfEachLineSelected = this.createMenuItem(nls.localize(60, null), 'editor.action.insertCursorAtEndOfEachLineSelected');
            var addSelectionToNextFindMatch = this.createMenuItem(nls.localize(61, null), 'editor.action.addSelectionToNextFindMatch');
            var addSelectionToPreviousFindMatch = this.createMenuItem(nls.localize(62, null), 'editor.action.addSelectionToPreviousFindMatch');
            var selectHighlights = this.createMenuItem(nls.localize(63, null), 'editor.action.selectHighlights');
            var copyLinesUp = this.createMenuItem(nls.localize(64, null), 'editor.action.copyLinesUpAction');
            var copyLinesDown = this.createMenuItem(nls.localize(65, null), 'editor.action.copyLinesDownAction');
            var moveLinesUp = this.createMenuItem(nls.localize(66, null), 'editor.action.moveLinesUpAction');
            var moveLinesDown = this.createMenuItem(nls.localize(67, null), 'editor.action.moveLinesDownAction');
            var selectAll;
            if (platform_1.isMacintosh) {
                selectAll = this.createDevToolsAwareMenuItem(nls.localize(68, null), 'editor.action.selectAll', function (devTools) { return devTools.selectAll(); });
            }
            else {
                selectAll = this.createMenuItem(nls.localize(69, null), 'editor.action.selectAll');
            }
            var smartSelectGrow = this.createMenuItem(nls.localize(70, null), 'editor.action.smartSelect.grow');
            var smartSelectshrink = this.createMenuItem(nls.localize(71, null), 'editor.action.smartSelect.shrink');
            [
                selectAll,
                smartSelectGrow,
                smartSelectshrink,
                __separator__(),
                copyLinesUp,
                copyLinesDown,
                moveLinesUp,
                moveLinesDown,
                __separator__(),
                insertCursorAbove,
                insertCursorBelow,
                insertCursorAtEndOfEachLineSelected,
                addSelectionToNextFindMatch,
                addSelectionToPreviousFindMatch,
                selectHighlights,
            ].forEach(function (item) { return winLinuxEditMenu.append(item); });
        };
        VSCodeMenu.prototype.setViewMenu = function (viewMenu) {
            var _this = this;
            var explorer = this.createMenuItem(nls.localize(72, null), 'workbench.view.explorer');
            var search = this.createMenuItem(nls.localize(73, null), 'workbench.view.search');
            var git = this.createMenuItem(nls.localize(74, null), 'workbench.view.git');
            // const scm = this.createMenuItem(nls.localize({ key: 'miViewSCM', comment: ['&& denotes a mnemonic'] }, "S&&CM"), 'workbench.view.scm');
            var debug = this.createMenuItem(nls.localize(75, null), 'workbench.view.debug');
            var extensions = this.createMenuItem(nls.localize(76, null), 'workbench.view.extensions');
            var output = this.createMenuItem(nls.localize(77, null), 'workbench.action.output.toggleOutput');
            var debugConsole = this.createMenuItem(nls.localize(78, null), 'workbench.debug.action.toggleRepl');
            var integratedTerminal = this.createMenuItem(nls.localize(79, null), 'workbench.action.terminal.toggleTerminal');
            var problems = this.createMenuItem(nls.localize(80, null), 'workbench.actions.view.problems');
            var additionalViewlets;
            if (this.extensionViewlets.length) {
                var additionalViewletsMenu_1 = new electron_1.Menu();
                this.extensionViewlets.forEach(function (viewlet) {
                    additionalViewletsMenu_1.append(_this.createMenuItem(viewlet.label, viewlet.id));
                });
                additionalViewlets = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(81, null)), submenu: additionalViewletsMenu_1, enabled: true });
            }
            var commands = this.createMenuItem(nls.localize(82, null), 'workbench.action.showCommands');
            var fullscreen = new electron_1.MenuItem(this.withKeybinding('workbench.action.toggleFullScreen', { label: mnemonicLabel(nls.localize(83, null)), click: function () { return _this.windowsService.getLastActiveWindow().toggleFullScreen(); }, enabled: this.windowsService.getWindowCount() > 0 }));
            var toggleZenMode = this.createMenuItem(nls.localize(84, null), 'workbench.action.toggleZenMode', this.windowsService.getWindowCount() > 0);
            var toggleMenuBar = this.createMenuItem(nls.localize(85, null), 'workbench.action.toggleMenuBar');
            var splitEditor = this.createMenuItem(nls.localize(86, null), 'workbench.action.splitEditor');
            var toggleEditorLayout = this.createMenuItem(nls.localize(87, null), 'workbench.action.toggleEditorGroupLayout');
            var toggleSidebar = this.createMenuItem(nls.localize(88, null), 'workbench.action.toggleSidebarVisibility');
            var moveSideBarLabel;
            if (this.currentSidebarLocation !== 'right') {
                moveSideBarLabel = nls.localize(89, null);
            }
            else {
                moveSideBarLabel = nls.localize(90, null);
            }
            var moveSidebar = this.createMenuItem(moveSideBarLabel, 'workbench.action.toggleSidebarPosition');
            var togglePanel = this.createMenuItem(nls.localize(91, null), 'workbench.action.togglePanel');
            var statusBarLabel;
            if (this.currentStatusbarVisible) {
                statusBarLabel = nls.localize(92, null);
            }
            else {
                statusBarLabel = nls.localize(93, null);
            }
            var toggleStatusbar = this.createMenuItem(statusBarLabel, 'workbench.action.toggleStatusbarVisibility');
            var activityBarLabel;
            if (this.currentActivityBarVisible) {
                activityBarLabel = nls.localize(94, null);
            }
            else {
                activityBarLabel = nls.localize(95, null);
            }
            var toggleActivtyBar = this.createMenuItem(activityBarLabel, 'workbench.action.toggleActivityBarVisibility');
            var toggleWordWrap = this.createMenuItem(nls.localize(96, null), 'editor.action.toggleWordWrap');
            var toggleRenderWhitespace = this.createMenuItem(nls.localize(97, null), 'editor.action.toggleRenderWhitespace');
            var toggleRenderControlCharacters = this.createMenuItem(nls.localize(98, null), 'editor.action.toggleRenderControlCharacter');
            var zoomIn = this.createMenuItem(nls.localize(99, null), 'workbench.action.zoomIn');
            var zoomOut = this.createMenuItem(nls.localize(100, null), 'workbench.action.zoomOut');
            var resetZoom = this.createMenuItem(nls.localize(101, null), 'workbench.action.zoomReset');
            arrays.coalesce([
                commands,
                __separator__(),
                explorer,
                search,
                git,
                // scm,
                debug,
                extensions,
                additionalViewlets,
                __separator__(),
                output,
                problems,
                debugConsole,
                integratedTerminal,
                __separator__(),
                fullscreen,
                toggleZenMode,
                platform_1.isWindows || platform_1.isLinux ? toggleMenuBar : void 0,
                __separator__(),
                splitEditor,
                toggleEditorLayout,
                moveSidebar,
                toggleSidebar,
                togglePanel,
                toggleStatusbar,
                toggleActivtyBar,
                __separator__(),
                toggleWordWrap,
                toggleRenderWhitespace,
                toggleRenderControlCharacters,
                __separator__(),
                zoomIn,
                zoomOut,
                resetZoom
            ]).forEach(function (item) { return viewMenu.append(item); });
        };
        VSCodeMenu.prototype.setGotoMenu = function (gotoMenu) {
            var back = this.createMenuItem(nls.localize(102, null), 'workbench.action.navigateBack');
            var forward = this.createMenuItem(nls.localize(103, null), 'workbench.action.navigateForward');
            var switchEditorMenu = new electron_1.Menu();
            var nextEditor = this.createMenuItem(nls.localize(104, null), 'workbench.action.nextEditor');
            var previousEditor = this.createMenuItem(nls.localize(105, null), 'workbench.action.previousEditor');
            var nextEditorInGroup = this.createMenuItem(nls.localize(106, null), 'workbench.action.openNextRecentlyUsedEditorInGroup');
            var previousEditorInGroup = this.createMenuItem(nls.localize(107, null), 'workbench.action.openPreviousRecentlyUsedEditorInGroup');
            [
                nextEditor,
                previousEditor,
                __separator__(),
                nextEditorInGroup,
                previousEditorInGroup
            ].forEach(function (item) { return switchEditorMenu.append(item); });
            var switchEditor = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(108, null)), submenu: switchEditorMenu, enabled: true });
            var switchGroupMenu = new electron_1.Menu();
            var focusFirstGroup = this.createMenuItem(nls.localize(109, null), 'workbench.action.focusFirstEditorGroup');
            var focusSecondGroup = this.createMenuItem(nls.localize(110, null), 'workbench.action.focusSecondEditorGroup');
            var focusThirdGroup = this.createMenuItem(nls.localize(111, null), 'workbench.action.focusThirdEditorGroup');
            var nextGroup = this.createMenuItem(nls.localize(112, null), 'workbench.action.focusNextGroup');
            var previousGroup = this.createMenuItem(nls.localize(113, null), 'workbench.action.focusPreviousGroup');
            [
                focusFirstGroup,
                focusSecondGroup,
                focusThirdGroup,
                __separator__(),
                nextGroup,
                previousGroup
            ].forEach(function (item) { return switchGroupMenu.append(item); });
            var switchGroup = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(114, null)), submenu: switchGroupMenu, enabled: true });
            var gotoFile = this.createMenuItem(nls.localize(115, null), 'workbench.action.quickOpen');
            var gotoSymbolInFile = this.createMenuItem(nls.localize(116, null), 'workbench.action.gotoSymbol');
            var gotoSymbolInWorkspace = this.createMenuItem(nls.localize(117, null), 'workbench.action.showAllSymbols');
            var gotoDefinition = this.createMenuItem(nls.localize(118, null), 'editor.action.goToDeclaration');
            var gotoLine = this.createMenuItem(nls.localize(119, null), 'workbench.action.gotoLine');
            [
                back,
                forward,
                __separator__(),
                switchEditor,
                switchGroup,
                __separator__(),
                gotoFile,
                gotoSymbolInFile,
                gotoSymbolInWorkspace,
                gotoDefinition,
                gotoLine
            ].forEach(function (item) { return gotoMenu.append(item); });
        };
        VSCodeMenu.prototype.setDebugMenu = function (debugMenu) {
            var start = this.createMenuItem(nls.localize(120, null), 'workbench.action.debug.start');
            var startWithoutDebugging = this.createMenuItem(nls.localize(121, null), 'workbench.action.debug.run');
            var stop = this.createMenuItem(nls.localize(122, null), 'workbench.action.debug.stop');
            var restart = this.createMenuItem(nls.localize(123, null), 'workbench.action.debug.restart');
            var openConfigurations = this.createMenuItem(nls.localize(124, null), 'workbench.action.debug.configure');
            var addConfiguration = this.createMenuItem(nls.localize(125, null), 'debug.addConfiguration');
            var stepOver = this.createMenuItem(nls.localize(126, null), 'workbench.action.debug.stepOver');
            var stepInto = this.createMenuItem(nls.localize(127, null), 'workbench.action.debug.stepInto');
            var stepOut = this.createMenuItem(nls.localize(128, null), 'workbench.action.debug.stepOut');
            var continueAction = this.createMenuItem(nls.localize(129, null), 'workbench.action.debug.continue');
            var toggleBreakpoint = this.createMenuItem(nls.localize(130, null), 'editor.debug.action.toggleBreakpoint');
            var breakpointsMenu = new electron_1.Menu();
            breakpointsMenu.append(this.createMenuItem(nls.localize(131, null), 'editor.debug.action.conditionalBreakpoint'));
            breakpointsMenu.append(this.createMenuItem(nls.localize(132, null), 'editor.debug.action.toggleColumnBreakpoint'));
            breakpointsMenu.append(this.createMenuItem(nls.localize(133, null), 'workbench.debug.viewlet.action.addFunctionBreakpointAction'));
            var newBreakpoints = new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(134, null)), submenu: breakpointsMenu });
            var disableAllBreakpoints = this.createMenuItem(nls.localize(135, null), 'workbench.debug.viewlet.action.disableAllBreakpoints');
            var removeAllBreakpoints = this.createMenuItem(nls.localize(136, null), 'workbench.debug.viewlet.action.removeAllBreakpoints');
            var installAdditionalDebuggers = this.createMenuItem(nls.localize(137, null), 'debug.installAdditionalDebuggers');
            [
                start,
                startWithoutDebugging,
                stop,
                restart,
                __separator__(),
                openConfigurations,
                addConfiguration,
                __separator__(),
                stepOver,
                stepInto,
                stepOut,
                continueAction,
                __separator__(),
                toggleBreakpoint,
                newBreakpoints,
                disableAllBreakpoints,
                removeAllBreakpoints,
                __separator__(),
                installAdditionalDebuggers
            ].forEach(function (item) { return debugMenu.append(item); });
        };
        VSCodeMenu.prototype.setMacWindowMenu = function (macWindowMenu) {
            var minimize = new electron_1.MenuItem({ label: nls.localize(138, null), role: 'minimize', accelerator: 'Command+M', enabled: this.windowsService.getWindowCount() > 0 });
            var close = new electron_1.MenuItem({ label: nls.localize(139, null), role: 'close', accelerator: 'Command+W', enabled: this.windowsService.getWindowCount() > 0 });
            var bringAllToFront = new electron_1.MenuItem({ label: nls.localize(140, null), role: 'front', enabled: this.windowsService.getWindowCount() > 0 });
            [
                minimize,
                close,
                __separator__(),
                bringAllToFront
            ].forEach(function (item) { return macWindowMenu.append(item); });
        };
        VSCodeMenu.prototype.toggleDevTools = function () {
            var w = this.windowsService.getFocusedWindow();
            if (w && w.win) {
                var contents = w.win.webContents;
                if (w.hasHiddenTitleBarStyle() && !w.win.isFullScreen() && !contents.isDevToolsOpened()) {
                    contents.openDevTools({ mode: 'undocked' }); // due to https://github.com/electron/electron/issues/3647
                }
                else {
                    contents.toggleDevTools();
                }
            }
        };
        VSCodeMenu.prototype.setHelpMenu = function (helpMenu) {
            var _this = this;
            var toggleDevToolsItem = new electron_1.MenuItem(this.likeAction('workbench.action.toggleDevTools', {
                label: mnemonicLabel(nls.localize(141, null)),
                click: function () { return _this.toggleDevTools(); },
                enabled: (this.windowsService.getWindowCount() > 0)
            }));
            var showAccessibilityOptions = new electron_1.MenuItem(this.likeAction('accessibilityOptions', {
                label: mnemonicLabel(nls.localize(142, null)),
                accelerator: null,
                click: function () {
                    _this.windowsService.openAccessibilityOptions();
                }
            }, false));
            var reportIssuesItem = null;
            if (product_1.default.reportIssueUrl) {
                var label = nls.localize(143, null);
                if (this.windowsService.getWindowCount() > 0) {
                    reportIssuesItem = this.createMenuItem(label, 'workbench.action.reportIssues');
                }
                else {
                    reportIssuesItem = new electron_1.MenuItem({ label: mnemonicLabel(label), click: function () { return _this.openUrl(product_1.default.reportIssueUrl, 'openReportIssues'); } });
                }
            }
            var keyboardShortcutsUrl = platform_1.isLinux ? product_1.default.keyboardShortcutsUrlLinux : platform_1.isMacintosh ? product_1.default.keyboardShortcutsUrlMac : product_1.default.keyboardShortcutsUrlWin;
            arrays.coalesce([
                new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(144, null)), click: function () { return _this.windowsService.sendToFocused('vscode:runAction', 'workbench.action.showWelcomePage'); } }),
                product_1.default.documentationUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(145, null)), click: function () { return _this.windowsService.sendToFocused('vscode:runAction', 'workbench.action.openDocumentationUrl'); } }) : null,
                product_1.default.releaseNotesUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(146, null)), click: function () { return _this.windowsService.sendToFocused('vscode:runAction', 'update.showCurrentReleaseNotes'); } }) : null,
                __separator__(),
                keyboardShortcutsUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(147, null)), click: function () { return _this.windowsService.sendToFocused('vscode:runAction', 'workbench.action.keybindingsReference'); } }) : null,
                product_1.default.introductoryVideosUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(148, null)), click: function () { return _this.windowsService.sendToFocused('vscode:runAction', 'workbench.action.openIntroductoryVideosUrl'); } }) : null,
                (product_1.default.introductoryVideosUrl || keyboardShortcutsUrl) ? __separator__() : null,
                product_1.default.twitterUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(149, null)), click: function () { return _this.openUrl(product_1.default.twitterUrl, 'openTwitterUrl'); } }) : null,
                product_1.default.requestFeatureUrl ? new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(150, null)), click: function () { return _this.openUrl(product_1.default.requestFeatureUrl, 'openUserVoiceUrl'); } }) : null,
                reportIssuesItem,
                (product_1.default.twitterUrl || product_1.default.requestFeatureUrl || product_1.default.reportIssueUrl) ? __separator__() : null,
                product_1.default.licenseUrl ? new electron_1.MenuItem({
                    label: mnemonicLabel(nls.localize(151, null)), click: function () {
                        if (platform_1.language) {
                            var queryArgChar = product_1.default.licenseUrl.indexOf('?') > 0 ? '&' : '?';
                            _this.openUrl("" + product_1.default.licenseUrl + queryArgChar + "lang=" + platform_1.language, 'openLicenseUrl');
                        }
                        else {
                            _this.openUrl(product_1.default.licenseUrl, 'openLicenseUrl');
                        }
                    }
                }) : null,
                product_1.default.privacyStatementUrl ? new electron_1.MenuItem({
                    label: mnemonicLabel(nls.localize(152, null)), click: function () {
                        if (platform_1.language) {
                            var queryArgChar = product_1.default.licenseUrl.indexOf('?') > 0 ? '&' : '?';
                            _this.openUrl("" + product_1.default.privacyStatementUrl + queryArgChar + "lang=" + platform_1.language, 'openPrivacyStatement');
                        }
                        else {
                            _this.openUrl(product_1.default.privacyStatementUrl, 'openPrivacyStatement');
                        }
                    }
                }) : null,
                (product_1.default.licenseUrl || product_1.default.privacyStatementUrl) ? __separator__() : null,
                toggleDevToolsItem,
                platform_1.isWindows && product_1.default.quality !== 'stable' ? showAccessibilityOptions : null
            ]).forEach(function (item) { return helpMenu.append(item); });
            if (!platform_1.isMacintosh) {
                var updateMenuItems = this.getUpdateMenuItems();
                if (updateMenuItems.length) {
                    helpMenu.append(__separator__());
                    updateMenuItems.forEach(function (i) { return helpMenu.append(i); });
                }
                helpMenu.append(__separator__());
                helpMenu.append(new electron_1.MenuItem({ label: mnemonicLabel(nls.localize(153, null)), click: function () { return _this.openAboutDialog(); } }));
            }
        };
        VSCodeMenu.prototype.getUpdateMenuItems = function () {
            var _this = this;
            switch (this.updateService.state) {
                case update_1.State.Uninitialized:
                    return [];
                case update_1.State.UpdateDownloaded:
                    return [new electron_1.MenuItem({
                            label: nls.localize(154, null), click: function () {
                                _this.reportMenuActionTelemetry('RestartToUpdate');
                                _this.updateService.quitAndInstall();
                            }
                        })];
                case update_1.State.CheckingForUpdate:
                    return [new electron_1.MenuItem({ label: nls.localize(155, null), enabled: false })];
                case update_1.State.UpdateAvailable:
                    if (platform_1.isLinux) {
                        return [new electron_1.MenuItem({
                                label: nls.localize(156, null), click: function () {
                                    _this.updateService.quitAndInstall();
                                }
                            })];
                    }
                    var updateAvailableLabel = platform_1.isWindows
                        ? nls.localize(157, null)
                        : nls.localize(158, null);
                    return [new electron_1.MenuItem({ label: updateAvailableLabel, enabled: false })];
                default:
                    var result = [new electron_1.MenuItem({
                            label: nls.localize(159, null), click: function () { return setTimeout(function () {
                                _this.reportMenuActionTelemetry('CheckForUpdate');
                                _this.updateService.checkForUpdates(true);
                            }, 0); }
                        })];
                    return result;
            }
        };
        VSCodeMenu.prototype.createMenuItem = function (arg1, arg2, arg3, arg4) {
            var _this = this;
            var label = mnemonicLabel(arg1);
            var click = (typeof arg2 === 'function') ? arg2 : function (menuItem, win, event) {
                var commandId = arg2;
                if (Array.isArray(arg2)) {
                    commandId = _this.isOptionClick(event) ? arg2[1] : arg2[0]; // support alternative action if we got multiple action Ids and the option key was pressed while invoking
                }
                _this.windowsService.sendToFocused('vscode:runAction', commandId);
            };
            var enabled = typeof arg3 === 'boolean' ? arg3 : this.windowsService.getWindowCount() > 0;
            var checked = typeof arg4 === 'boolean' ? arg4 : false;
            var commandId;
            if (typeof arg2 === 'string') {
                commandId = arg2;
            }
            var options = {
                label: label,
                click: click,
                enabled: enabled
            };
            if (checked) {
                options['type'] = 'checkbox';
                options['checked'] = checked;
            }
            return new electron_1.MenuItem(this.withKeybinding(commandId, options));
        };
        VSCodeMenu.prototype.createDevToolsAwareMenuItem = function (label, commandId, devToolsFocusedFn) {
            var _this = this;
            return new electron_1.MenuItem(this.withKeybinding(commandId, {
                label: mnemonicLabel(label),
                enabled: this.windowsService.getWindowCount() > 0,
                click: function () {
                    var windowInFocus = _this.windowsService.getFocusedWindow();
                    if (!windowInFocus) {
                        return;
                    }
                    if (windowInFocus.win.webContents.isDevToolsFocused()) {
                        devToolsFocusedFn(windowInFocus.win.webContents.devToolsWebContents);
                    }
                    else {
                        _this.windowsService.sendToFocused('vscode:runAction', commandId);
                    }
                }
            }));
        };
        VSCodeMenu.prototype.withKeybinding = function (commandId, options) {
            var binding = this.keybindingsResolver.getKeybinding(commandId);
            // Apply binding if there is one
            if (binding && binding.label) {
                // if the binding is native, we can just apply it
                if (binding.isNative) {
                    options.accelerator = binding.label;
                }
                else {
                    var bindingIndex = options.label.indexOf('[');
                    if (bindingIndex >= 0) {
                        options.label = options.label.substr(0, bindingIndex) + " [" + binding.label + "]";
                    }
                    else {
                        options.label = options.label + " [" + binding.label + "]";
                    }
                }
            }
            else {
                options.accelerator = void 0;
            }
            return options;
        };
        VSCodeMenu.prototype.likeAction = function (commandId, options, setAccelerator) {
            var _this = this;
            if (setAccelerator === void 0) { setAccelerator = !options.accelerator; }
            if (setAccelerator) {
                options = this.withKeybinding(commandId, options);
            }
            var originalClick = options.click;
            options.click = function (item, window, event) {
                _this.reportMenuActionTelemetry(commandId);
                if (originalClick) {
                    originalClick(item, window, event);
                }
            };
            return options;
        };
        VSCodeMenu.prototype.openAboutDialog = function () {
            var lastActiveWindow = this.windowsService.getFocusedWindow() || this.windowsService.getLastActiveWindow();
            electron_1.dialog.showMessageBox(lastActiveWindow && lastActiveWindow.win, {
                title: product_1.default.nameLong,
                type: 'info',
                message: product_1.default.nameLong,
                detail: nls.localize(160, null, electron_1.app.getVersion(), product_1.default.commit || 'Unknown', product_1.default.date || 'Unknown', process.versions['electron'], process.versions['chrome'], process.versions['node']),
                buttons: [nls.localize(161, null)],
                noLink: true
            }, function (result) { return null; });
            this.reportMenuActionTelemetry('showAboutDialog');
        };
        VSCodeMenu.prototype.openUrl = function (url, id) {
            electron_1.shell.openExternal(url);
            this.reportMenuActionTelemetry(id);
        };
        VSCodeMenu.prototype.reportMenuActionTelemetry = function (id) {
            this.telemetryService.publicLog('workbenchActionExecuted', { id: id, from: telemetryFrom });
        };
        return VSCodeMenu;
    }());
    VSCodeMenu.MAX_MENU_RECENT_ENTRIES = 10;
    VSCodeMenu = __decorate([
        __param(0, update_1.IUpdateService),
        __param(1, instantiation_1.IInstantiationService),
        __param(2, configuration_1.IConfigurationService),
        __param(3, windows_2.IWindowsMainService),
        __param(4, environment_1.IEnvironmentService),
        __param(5, telemetry_1.ITelemetryService)
    ], VSCodeMenu);
    exports.VSCodeMenu = VSCodeMenu;
    function __separator__() {
        return new electron_1.MenuItem({ type: 'separator' });
    }
    function mnemonicLabel(label) {
        if (platform_1.isMacintosh) {
            return label.replace(/\(&&\w\)|&&/g, ''); // no mnemonic support on mac
        }
        return label.replace(/&&/g, '&');
    }
    function unMnemonicLabel(label) {
        if (platform_1.isMacintosh) {
            return label; // no mnemonic support on mac
        }
        return label.replace(/&/g, '&&');
    }
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[118/*vs/platform/url/common/urlIpc*/], __M([1/*require*/,0/*exports*/,21/*vs/base/parts/ipc/common/ipc*/,4/*vs/base/common/event*/,46/*vs/platform/windows/common/windows*/,19/*vs/base/common/uri*/]), function (require, exports, ipc_1, event_1, windows_1, uri_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var URISerializer = function (uri) { return uri.toJSON(); };
    var URIDeserializer = function (raw) { return uri_1.default.revive(raw); };
    var URLChannel = (function () {
        function URLChannel(service, windowsService) {
            var _this = this;
            this.service = service;
            windowsService.onWindowFocus(function (id) { return _this.focusedWindowId = id; });
        }
        URLChannel.prototype.call = function (command, arg) {
            var _this = this;
            switch (command) {
                case 'event:onOpenURL': return ipc_1.eventToCall(event_1.filterEvent(this.service.onOpenURL, function () { return _this.isWindowFocused(arg); }), URISerializer);
            }
            return undefined;
        };
        /**
         * We only want the focused window to get pinged with the onOpenUrl event.
         * The idea here is to filter the onOpenUrl event with the knowledge of which
         * was the last window to be focused. When first listening to the event,
         * each client sends its window ID via the arguments to `call(...)`.
         * When the event fires, the server has enough knowledge to filter the event
         * and fire it only to the focused window.
         */
        URLChannel.prototype.isWindowFocused = function (windowID) {
            return this.focusedWindowId === windowID;
        };
        return URLChannel;
    }());
    URLChannel = __decorate([
        __param(1, windows_1.IWindowsService)
    ], URLChannel);
    exports.URLChannel = URLChannel;
    var URLChannelClient = (function () {
        function URLChannelClient(channel, windowID) {
            this.channel = channel;
            this.windowID = windowID;
            this._onOpenURL = ipc_1.eventFromCall(this.channel, 'event:onOpenURL', this.windowID, URIDeserializer);
        }
        Object.defineProperty(URLChannelClient.prototype, "onOpenURL", {
            get: function () { return this._onOpenURL; },
            enumerable: true,
            configurable: true
        });
        URLChannelClient.prototype.open = function (url) {
            return; // not implemented
        };
        return URLChannelClient;
    }());
    exports.URLChannelClient = URLChannelClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[119/*vs/platform/windows/common/windowsIpc*/], __M([1/*require*/,0/*exports*/,4/*vs/base/common/event*/,21/*vs/base/parts/ipc/common/ipc*/]), function (require, exports, event_1, ipc_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowsChannel = (function () {
        function WindowsChannel(service) {
            this.service = service;
            this.onWindowOpen = event_1.buffer(service.onWindowOpen, true);
            this.onWindowFocus = event_1.buffer(service.onWindowFocus, true);
        }
        WindowsChannel.prototype.call = function (command, arg) {
            switch (command) {
                case 'event:onWindowOpen': return ipc_1.eventToCall(this.onWindowOpen);
                case 'event:onWindowFocus': return ipc_1.eventToCall(this.onWindowFocus);
                case 'openFileFolderPicker': return this.service.openFileFolderPicker(arg[0], arg[1], arg[2]);
                case 'openFilePicker': return this.service.openFilePicker(arg[0], arg[1], arg[2], arg[3]);
                case 'openFolderPicker': return this.service.openFolderPicker(arg[0], arg[1], arg[2]);
                case 'reloadWindow': return this.service.reloadWindow(arg);
                case 'openDevTools': return this.service.openDevTools(arg);
                case 'toggleDevTools': return this.service.toggleDevTools(arg);
                case 'closeFolder': return this.service.closeFolder(arg);
                case 'toggleFullScreen': return this.service.toggleFullScreen(arg);
                case 'setRepresentedFilename': return this.service.setRepresentedFilename(arg[0], arg[1]);
                case 'addToRecentlyOpen': return this.service.addToRecentlyOpen(arg);
                case 'removeFromRecentlyOpen': return this.service.removeFromRecentlyOpen(arg);
                case 'clearRecentPathsList': return this.service.clearRecentPathsList();
                case 'getRecentlyOpen': return this.service.getRecentlyOpen(arg);
                case 'focusWindow': return this.service.focusWindow(arg);
                case 'isFocused': return this.service.isFocused(arg);
                case 'isMaximized': return this.service.isMaximized(arg);
                case 'maximizeWindow': return this.service.maximizeWindow(arg);
                case 'unmaximizeWindow': return this.service.unmaximizeWindow(arg);
                case 'setDocumentEdited': return this.service.setDocumentEdited(arg[0], arg[1]);
                case 'openWindow': return this.service.openWindow(arg[0], arg[1]);
                case 'openNewWindow': return this.service.openNewWindow();
                case 'showWindow': return this.service.showWindow(arg);
                case 'getWindows': return this.service.getWindows();
                case 'getWindowCount': return this.service.getWindowCount();
                case 'relaunch': return this.service.relaunch(arg[0]);
                case 'whenSharedProcessReady': return this.service.whenSharedProcessReady();
                case 'toggleSharedProcess': return this.service.toggleSharedProcess();
                case 'quit': return this.service.quit();
                case 'log': return this.service.log(arg[0], arg[1]);
                case 'closeExtensionHostWindow': return this.service.closeExtensionHostWindow(arg);
                case 'showItemInFolder': return this.service.showItemInFolder(arg);
                case 'openExternal': return this.service.openExternal(arg);
                case 'startCrashReporter': return this.service.startCrashReporter(arg);
            }
            return undefined;
        };
        return WindowsChannel;
    }());
    exports.WindowsChannel = WindowsChannel;
    var WindowsChannelClient = (function () {
        function WindowsChannelClient(channel) {
            this.channel = channel;
            this._onWindowOpen = ipc_1.eventFromCall(this.channel, 'event:onWindowOpen');
            this._onWindowFocus = ipc_1.eventFromCall(this.channel, 'event:onWindowFocus');
        }
        Object.defineProperty(WindowsChannelClient.prototype, "onWindowOpen", {
            get: function () { return this._onWindowOpen; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowsChannelClient.prototype, "onWindowFocus", {
            get: function () { return this._onWindowFocus; },
            enumerable: true,
            configurable: true
        });
        WindowsChannelClient.prototype.openFileFolderPicker = function (windowId, forceNewWindow, data) {
            return this.channel.call('openFileFolderPicker', [windowId, forceNewWindow, data]);
        };
        WindowsChannelClient.prototype.openFilePicker = function (windowId, forceNewWindow, path, data) {
            return this.channel.call('openFilePicker', [windowId, forceNewWindow, path, data]);
        };
        WindowsChannelClient.prototype.openFolderPicker = function (windowId, forceNewWindow, data) {
            return this.channel.call('openFolderPicker', [windowId, forceNewWindow, data]);
        };
        WindowsChannelClient.prototype.reloadWindow = function (windowId) {
            return this.channel.call('reloadWindow', windowId);
        };
        WindowsChannelClient.prototype.openDevTools = function (windowId) {
            return this.channel.call('openDevTools', windowId);
        };
        WindowsChannelClient.prototype.toggleDevTools = function (windowId) {
            return this.channel.call('toggleDevTools', windowId);
        };
        WindowsChannelClient.prototype.closeFolder = function (windowId) {
            return this.channel.call('closeFolder', windowId);
        };
        WindowsChannelClient.prototype.toggleFullScreen = function (windowId) {
            return this.channel.call('toggleFullScreen', windowId);
        };
        WindowsChannelClient.prototype.setRepresentedFilename = function (windowId, fileName) {
            return this.channel.call('setRepresentedFilename', [windowId, fileName]);
        };
        WindowsChannelClient.prototype.addToRecentlyOpen = function (paths) {
            return this.channel.call('addToRecentlyOpen', paths);
        };
        WindowsChannelClient.prototype.removeFromRecentlyOpen = function (paths) {
            return this.channel.call('removeFromRecentlyOpen', paths);
        };
        WindowsChannelClient.prototype.clearRecentPathsList = function () {
            return this.channel.call('clearRecentPathsList');
        };
        WindowsChannelClient.prototype.getRecentlyOpen = function (windowId) {
            return this.channel.call('getRecentlyOpen', windowId);
        };
        WindowsChannelClient.prototype.focusWindow = function (windowId) {
            return this.channel.call('focusWindow', windowId);
        };
        WindowsChannelClient.prototype.isFocused = function (windowId) {
            return this.channel.call('isFocused', windowId);
        };
        WindowsChannelClient.prototype.isMaximized = function (windowId) {
            return this.channel.call('isMaximized', windowId);
        };
        WindowsChannelClient.prototype.maximizeWindow = function (windowId) {
            return this.channel.call('maximizeWindow', windowId);
        };
        WindowsChannelClient.prototype.unmaximizeWindow = function (windowId) {
            return this.channel.call('unmaximizeWindow', windowId);
        };
        WindowsChannelClient.prototype.setDocumentEdited = function (windowId, flag) {
            return this.channel.call('setDocumentEdited', [windowId, flag]);
        };
        WindowsChannelClient.prototype.quit = function () {
            return this.channel.call('quit');
        };
        WindowsChannelClient.prototype.relaunch = function (options) {
            return this.channel.call('relaunch', [options]);
        };
        WindowsChannelClient.prototype.whenSharedProcessReady = function () {
            return this.channel.call('whenSharedProcessReady');
        };
        WindowsChannelClient.prototype.toggleSharedProcess = function () {
            return this.channel.call('toggleSharedProcess');
        };
        WindowsChannelClient.prototype.openWindow = function (paths, options) {
            return this.channel.call('openWindow', [paths, options]);
        };
        WindowsChannelClient.prototype.openNewWindow = function () {
            return this.channel.call('openNewWindow');
        };
        WindowsChannelClient.prototype.showWindow = function (windowId) {
            return this.channel.call('showWindow', windowId);
        };
        WindowsChannelClient.prototype.getWindows = function () {
            return this.channel.call('getWindows');
        };
        WindowsChannelClient.prototype.getWindowCount = function () {
            return this.channel.call('getWindowCount');
        };
        WindowsChannelClient.prototype.log = function (severity) {
            var messages = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                messages[_i - 1] = arguments[_i];
            }
            return this.channel.call('log', [severity, messages]);
        };
        WindowsChannelClient.prototype.closeExtensionHostWindow = function (extensionDevelopmentPath) {
            return this.channel.call('closeExtensionHostWindow', extensionDevelopmentPath);
        };
        WindowsChannelClient.prototype.showItemInFolder = function (path) {
            return this.channel.call('showItemInFolder', path);
        };
        WindowsChannelClient.prototype.openExternal = function (url) {
            return this.channel.call('openExternal', url);
        };
        WindowsChannelClient.prototype.startCrashReporter = function (config) {
            return this.channel.call('startCrashReporter', config);
        };
        return WindowsChannelClient;
    }());
    exports.WindowsChannelClient = WindowsChannelClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[120/*vs/platform/windows/electron-main/windowsService*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,9/*vs/base/common/lifecycle*/,8/*vs/base/common/objects*/,19/*vs/base/common/uri*/,13/*vs/platform/environment/common/environment*/,10/*electron*/,4/*vs/base/common/event*/,29/*vs/base/node/event*/,32/*vs/platform/url/common/url*/,24/*vs/code/common/windows*/,35/*vs/code/electron-main/windows*/,31/*vs/code/electron-main/lifecycle*/]), function (require, exports, winjs_base_1, lifecycle_1, objects_1, uri_1, environment_1, electron_1, event_1, event_2, url_1, windows_1, windows_2, lifecycle_2) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var WindowsService = (function () {
        function WindowsService(sharedProcess, windowsMainService, environmentService, urlService, lifecycleService) {
            this.sharedProcess = sharedProcess;
            this.windowsMainService = windowsMainService;
            this.environmentService = environmentService;
            this.lifecycleService = lifecycleService;
            this.disposables = [];
            this.onWindowOpen = event_2.fromEventEmitter(electron_1.app, 'browser-window-created', function (_, w) { return w.id; });
            this.onWindowFocus = event_2.fromEventEmitter(electron_1.app, 'browser-window-focus', function (_, w) { return w.id; });
            event_1.chain(urlService.onOpenURL)
                .filter(function (uri) { return uri.authority === 'file' && !!uri.path; })
                .map(function (uri) { return uri_1.default.file(uri.fsPath); })
                .on(this.openFileForURI, this, this.disposables);
        }
        WindowsService.prototype.openFileFolderPicker = function (windowId, forceNewWindow, data) {
            this.windowsMainService.openFileFolderPicker(forceNewWindow, data);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openFilePicker = function (windowId, forceNewWindow, path, data) {
            this.windowsMainService.openFilePicker(forceNewWindow, path, undefined, data);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openFolderPicker = function (windowId, forceNewWindow, data) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            this.windowsMainService.openFolderPicker(forceNewWindow, vscodeWindow, data);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.reloadWindow = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                this.windowsMainService.reload(vscodeWindow);
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openDevTools = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.webContents.openDevTools();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.toggleDevTools = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                var contents = vscodeWindow.win.webContents;
                if (vscodeWindow.hasHiddenTitleBarStyle() && !vscodeWindow.win.isFullScreen() && !contents.isDevToolsOpened()) {
                    contents.openDevTools({ mode: 'undocked' }); // due to https://github.com/electron/electron/issues/3647
                }
                else {
                    contents.toggleDevTools();
                }
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.closeFolder = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                this.windowsMainService.open({ context: windows_1.OpenContext.API, cli: this.environmentService.args, forceEmpty: true, windowToUse: vscodeWindow, forceReuseWindow: true });
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.toggleFullScreen = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.toggleFullScreen();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.setRepresentedFilename = function (windowId, fileName) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.setRepresentedFilename(fileName);
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.addToRecentlyOpen = function (paths) {
            this.windowsMainService.addToRecentPathsList(paths);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.removeFromRecentlyOpen = function (paths) {
            this.windowsMainService.removeFromRecentPathsList(paths);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.clearRecentPathsList = function () {
            this.windowsMainService.clearRecentPathsList();
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.getRecentlyOpen = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                var _a = this.windowsMainService.getRecentPathsList(vscodeWindow.config.workspacePath, vscodeWindow.config.filesToOpen), files = _a.files, folders = _a.folders;
                return winjs_base_1.TPromise.as({ files: files, folders: folders });
            }
            return winjs_base_1.TPromise.as({ files: [], folders: [] });
        };
        WindowsService.prototype.focusWindow = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.focus();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.isFocused = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                return winjs_base_1.TPromise.as(vscodeWindow.win.isFocused());
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.isMaximized = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                return winjs_base_1.TPromise.as(vscodeWindow.win.isMaximized());
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.maximizeWindow = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.maximize();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.unmaximizeWindow = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.unmaximize();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.setDocumentEdited = function (windowId, flag) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow && vscodeWindow.win.isDocumentEdited() !== flag) {
                vscodeWindow.win.setDocumentEdited(flag);
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openWindow = function (paths, options) {
            if (!paths || !paths.length) {
                return winjs_base_1.TPromise.as(null);
            }
            this.windowsMainService.open({ context: windows_1.OpenContext.API, cli: this.environmentService.args, pathsToOpen: paths, forceNewWindow: options && options.forceNewWindow, forceReuseWindow: options && options.forceReuseWindow });
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openNewWindow = function () {
            this.windowsMainService.openNewWindow(windows_1.OpenContext.API);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.showWindow = function (windowId) {
            var vscodeWindow = this.windowsMainService.getWindowById(windowId);
            if (vscodeWindow) {
                vscodeWindow.win.show();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.getWindows = function () {
            var windows = this.windowsMainService.getWindows();
            var result = windows.map(function (w) { return ({ path: w.openedWorkspacePath, title: w.win.getTitle(), id: w.id }); });
            return winjs_base_1.TPromise.as(result);
        };
        WindowsService.prototype.getWindowCount = function () {
            return winjs_base_1.TPromise.as(this.windowsMainService.getWindows().length);
        };
        WindowsService.prototype.log = function (severity) {
            var messages = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                messages[_i - 1] = arguments[_i];
            }
            (_a = console[severity]).apply.apply(_a, [console].concat(messages));
            return winjs_base_1.TPromise.as(null);
            var _a;
        };
        WindowsService.prototype.closeExtensionHostWindow = function (extensionDevelopmentPath) {
            var windowOnExtension = this.windowsMainService.findWindow(null, null, extensionDevelopmentPath);
            if (windowOnExtension) {
                windowOnExtension.win.close();
            }
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.showItemInFolder = function (path) {
            electron_1.shell.showItemInFolder(path);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openExternal = function (url) {
            return winjs_base_1.TPromise.as(electron_1.shell.openExternal(url));
        };
        WindowsService.prototype.startCrashReporter = function (config) {
            electron_1.crashReporter.start(config);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.quit = function () {
            this.windowsMainService.quit();
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.relaunch = function (options) {
            this.lifecycleService.relaunch(options);
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.whenSharedProcessReady = function () {
            return this.sharedProcess.whenReady();
        };
        WindowsService.prototype.toggleSharedProcess = function () {
            this.sharedProcess.toggle();
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.openFileForURI = function (uri) {
            var cli = objects_1.assign(Object.create(null), this.environmentService.args, { goto: true });
            var pathsToOpen = [uri.fsPath];
            this.windowsMainService.open({ context: windows_1.OpenContext.API, cli: cli, pathsToOpen: pathsToOpen });
            return winjs_base_1.TPromise.as(null);
        };
        WindowsService.prototype.dispose = function () {
            this.disposables = lifecycle_1.dispose(this.disposables);
        };
        return WindowsService;
    }());
    WindowsService = __decorate([
        __param(1, windows_2.IWindowsMainService),
        __param(2, environment_1.IEnvironmentService),
        __param(3, url_1.IURLService),
        __param(4, lifecycle_2.ILifecycleService)
    ], WindowsService);
    exports.WindowsService = WindowsService;
});

define(__m[61/*vs/platform/workspace/common/workspace*/], __M([1/*require*/,0/*exports*/,19/*vs/base/common/uri*/,3/*vs/platform/instantiation/common/instantiation*/,18/*vs/base/common/paths*/,23/*vs/platform/files/common/files*/,5/*vs/base/common/platform*/]), function (require, exports, uri_1, instantiation_1, paths, files_1, platform_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWorkspaceContextService = instantiation_1.createDecorator('contextService');
    var WorkspaceContextService = (function () {
        function WorkspaceContextService(workspace) {
            this.workspace = workspace;
        }
        WorkspaceContextService.prototype.getWorkspace = function () {
            return this.workspace;
        };
        WorkspaceContextService.prototype.hasWorkspace = function () {
            return !!this.workspace;
        };
        WorkspaceContextService.prototype.isInsideWorkspace = function (resource) {
            if (resource && this.workspace) {
                return files_1.isEqualOrParent(resource.fsPath, this.workspace.resource.fsPath, !platform_1.isLinux /* ignorecase */);
            }
            return false;
        };
        WorkspaceContextService.prototype.toWorkspaceRelativePath = function (resource, toOSPath) {
            if (this.isInsideWorkspace(resource)) {
                return paths.normalize(paths.relative(this.workspace.resource.fsPath, resource.fsPath), toOSPath);
            }
            return null;
        };
        WorkspaceContextService.prototype.toResource = function (workspaceRelativePath) {
            if (typeof workspaceRelativePath === 'string' && this.workspace) {
                return uri_1.default.file(paths.join(this.workspace.resource.fsPath, workspaceRelativePath));
            }
            return null;
        };
        return WorkspaceContextService;
    }());
    exports.WorkspaceContextService = WorkspaceContextService;
});










define(__m[122/*vs/platform/storage/common/storageService*/], __M([1/*require*/,0/*exports*/,6/*vs/base/common/types*/,17/*vs/base/common/errors*/,11/*vs/base/common/strings*/,58/*vs/platform/storage/common/storage*/,61/*vs/platform/workspace/common/workspace*/]), function (require, exports, types, errors, strings, storage_1, workspace_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var StorageService = (function () {
        function StorageService(globalStorage, workspaceStorage, contextService) {
            var workspace = contextService.getWorkspace();
            this.globalStorage = globalStorage;
            this.workspaceStorage = workspaceStorage || globalStorage;
            // Calculate workspace storage key
            this.workspaceKey = this.getWorkspaceKey(workspace);
            // Make sure to delete all workspace storage if the workspace has been recreated meanwhile
            var workspaceUniqueId = workspace ? workspace.uid : void 0;
            if (types.isNumber(workspaceUniqueId)) {
                this.cleanupWorkspaceScope(workspaceUniqueId, workspace.name);
            }
        }
        StorageService.prototype.getWorkspaceKey = function (workspace) {
            var workspaceUri = null;
            if (workspace && workspace.resource) {
                workspaceUri = workspace.resource.toString();
            }
            return workspaceUri ? this.calculateWorkspaceKey(workspaceUri) : StorageService.NO_WORKSPACE_IDENTIFIER;
        };
        StorageService.prototype.calculateWorkspaceKey = function (workspaceUrl) {
            var root = 'file:///';
            var index = workspaceUrl.indexOf(root);
            if (index === 0) {
                return strings.rtrim(workspaceUrl.substr(root.length), '/') + '/';
            }
            return workspaceUrl;
        };
        StorageService.prototype.cleanupWorkspaceScope = function (workspaceId, workspaceName) {
            var _this = this;
            // Get stored identifier from storage
            var id = this.getInteger(StorageService.WORKSPACE_IDENTIFIER, storage_1.StorageScope.WORKSPACE);
            // If identifier differs, assume the workspace got recreated and thus clean all storage for this workspace
            if (types.isNumber(id) && workspaceId !== id) {
                var keyPrefix = this.toStorageKey('', storage_1.StorageScope.WORKSPACE);
                var toDelete = [];
                var length_1 = this.workspaceStorage.length;
                for (var i = 0; i < length_1; i++) {
                    var key = this.workspaceStorage.key(i);
                    if (key.indexOf(StorageService.WORKSPACE_PREFIX) < 0) {
                        continue; // ignore stored things that don't belong to storage service or are defined globally
                    }
                    // Check for match on prefix
                    if (key.indexOf(keyPrefix) === 0) {
                        toDelete.push(key);
                    }
                }
                if (toDelete.length > 0) {
                    console.warn('Clearing previous version of local storage for workspace ', workspaceName);
                }
                // Run the delete
                toDelete.forEach(function (keyToDelete) {
                    _this.workspaceStorage.removeItem(keyToDelete);
                });
            }
            // Store workspace identifier now
            if (workspaceId !== id) {
                this.store(StorageService.WORKSPACE_IDENTIFIER, workspaceId, storage_1.StorageScope.WORKSPACE);
            }
        };
        StorageService.prototype.clear = function () {
            this.globalStorage.clear();
            this.workspaceStorage.clear();
        };
        StorageService.prototype.store = function (key, value, scope) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var storage = (scope === storage_1.StorageScope.GLOBAL) ? this.globalStorage : this.workspaceStorage;
            if (types.isUndefinedOrNull(value)) {
                this.remove(key, scope); // we cannot store null or undefined, in that case we remove the key
                return;
            }
            var storageKey = this.toStorageKey(key, scope);
            // Store
            try {
                storage.setItem(storageKey, value);
            }
            catch (error) {
                errors.onUnexpectedError(error);
            }
        };
        StorageService.prototype.get = function (key, scope, defaultValue) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var storage = (scope === storage_1.StorageScope.GLOBAL) ? this.globalStorage : this.workspaceStorage;
            var value = storage.getItem(this.toStorageKey(key, scope));
            if (types.isUndefinedOrNull(value)) {
                return defaultValue;
            }
            return value;
        };
        StorageService.prototype.remove = function (key, scope) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var storage = (scope === storage_1.StorageScope.GLOBAL) ? this.globalStorage : this.workspaceStorage;
            var storageKey = this.toStorageKey(key, scope);
            // Remove
            storage.removeItem(storageKey);
        };
        StorageService.prototype.swap = function (key, valueA, valueB, scope, defaultValue) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var value = this.get(key, scope);
            if (types.isUndefinedOrNull(value) && defaultValue) {
                this.store(key, defaultValue, scope);
            }
            else if (value === valueA.toString()) {
                this.store(key, valueB, scope);
            }
            else {
                this.store(key, valueA, scope);
            }
        };
        StorageService.prototype.getInteger = function (key, scope, defaultValue) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var value = this.get(key, scope, defaultValue);
            if (types.isUndefinedOrNull(value)) {
                return defaultValue;
            }
            return parseInt(value, 10);
        };
        StorageService.prototype.getBoolean = function (key, scope, defaultValue) {
            if (scope === void 0) { scope = storage_1.StorageScope.GLOBAL; }
            var value = this.get(key, scope, defaultValue);
            if (types.isUndefinedOrNull(value)) {
                return defaultValue;
            }
            if (types.isString(value)) {
                return value.toLowerCase() === 'true' ? true : false;
            }
            return value ? true : false;
        };
        StorageService.prototype.toStorageKey = function (key, scope) {
            if (scope === storage_1.StorageScope.GLOBAL) {
                return StorageService.GLOBAL_PREFIX + key.toLowerCase();
            }
            return StorageService.WORKSPACE_PREFIX + this.workspaceKey + key.toLowerCase();
        };
        return StorageService;
    }());
    StorageService.COMMON_PREFIX = 'storage://';
    /*private*/ StorageService.GLOBAL_PREFIX = StorageService.COMMON_PREFIX + 'global/';
    StorageService.WORKSPACE_PREFIX = StorageService.COMMON_PREFIX + 'workspace/';
    StorageService.WORKSPACE_IDENTIFIER = 'workspaceIdentifier';
    StorageService.NO_WORKSPACE_IDENTIFIER = '__$noWorkspace__';
    StorageService = __decorate([
        __param(2, workspace_1.IWorkspaceContextService)
    ], StorageService);
    exports.StorageService = StorageService;
    // In-Memory Local Storage Implementation
    var InMemoryLocalStorage = (function () {
        function InMemoryLocalStorage() {
            this.store = {};
        }
        Object.defineProperty(InMemoryLocalStorage.prototype, "length", {
            get: function () {
                return Object.keys(this.store).length;
            },
            enumerable: true,
            configurable: true
        });
        InMemoryLocalStorage.prototype.key = function (index) {
            var keys = Object.keys(this.store);
            if (keys.length > index) {
                return keys[index];
            }
            return null;
        };
        InMemoryLocalStorage.prototype.clear = function () {
            this.store = {};
        };
        InMemoryLocalStorage.prototype.setItem = function (key, value) {
            this.store[key] = value.toString();
        };
        InMemoryLocalStorage.prototype.getItem = function (key) {
            var item = this.store[key];
            if (!types.isUndefinedOrNull(item)) {
                return item;
            }
            return null;
        };
        InMemoryLocalStorage.prototype.removeItem = function (key) {
            delete this.store[key];
        };
        return InMemoryLocalStorage;
    }());
    exports.InMemoryLocalStorage = InMemoryLocalStorage;
    exports.inMemoryLocalStorageInstance = new InMemoryLocalStorage();
});

define(__m[62/*vs/platform/telemetry/common/telemetryUtils*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,97/*vs/base/common/mime*/,18/*vs/base/common/paths*/,12/*vs/platform/configuration/common/configuration*/,88/*vs/platform/keybinding/common/keybinding*/,89/*vs/platform/lifecycle/common/lifecycle*/,58/*vs/platform/storage/common/storage*/,61/*vs/platform/workspace/common/workspace*/,122/*vs/platform/storage/common/storageService*/,8/*vs/base/common/objects*/]), function (require, exports, winjs_base_1, mime_1, paths, configuration_1, keybinding_1, lifecycle_1, storage_1, workspace_1, storageService_1, objects) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultExperiments = {
        showNewUserWatermark: false,
        openUntitledFile: true,
        enableWelcomePage: true,
        reorderQuickLinks: false,
    };
    exports.NullTelemetryService = {
        _serviceBrand: undefined,
        _experiments: exports.defaultExperiments,
        publicLog: function (eventName, data) {
            return winjs_base_1.TPromise.as(null);
        },
        isOptedIn: true,
        getTelemetryInfo: function () {
            return winjs_base_1.TPromise.as({
                instanceId: 'someValue.instanceId',
                sessionId: 'someValue.sessionId',
                machineId: 'someValue.machineId'
            });
        },
        getExperiments: function () {
            return this._experiments;
        }
    };
    function loadExperiments(accessor) {
        var contextService = accessor.get(workspace_1.IWorkspaceContextService);
        var storageService = accessor.get(storage_1.IStorageService);
        var configurationService = accessor.get(configuration_1.IConfigurationService);
        updateExperimentsOverrides(configurationService);
        configurationService.onDidUpdateConfiguration(function (e) { return updateExperimentsOverrides(configurationService); });
        var _a = splitExperimentsRandomness(), showNewUserWatermark = _a.showNewUserWatermark, openUntitledFile = _a.openUntitledFile, enableWelcomePage = _a.enableWelcomePage, reorderQuickLinks = _a.reorderQuickLinks;
        var newUserDuration = 24 * 60 * 60 * 1000;
        var firstSessionDate = storageService.get('telemetry.firstSessionDate');
        var isNewUser = !firstSessionDate || Date.now() - Date.parse(firstSessionDate) < newUserDuration;
        if (!isNewUser || contextService.hasWorkspace()) {
            showNewUserWatermark = exports.defaultExperiments.showNewUserWatermark;
            openUntitledFile = exports.defaultExperiments.openUntitledFile;
        }
        return applyOverrides({
            showNewUserWatermark: showNewUserWatermark,
            openUntitledFile: openUntitledFile,
            enableWelcomePage: enableWelcomePage,
            reorderQuickLinks: reorderQuickLinks,
        });
    }
    exports.loadExperiments = loadExperiments;
    function isWelcomePageEnabled() {
        var overrides = getExperimentsOverrides();
        return 'enableWelcomePage' in overrides ? overrides.enableWelcomePage : splitExperimentsRandomness().enableWelcomePage;
    }
    exports.isWelcomePageEnabled = isWelcomePageEnabled;
    function applyOverrides(experiments) {
        var experimentsConfig = getExperimentsOverrides();
        Object.keys(experiments).forEach(function (key) {
            if (key in experimentsConfig) {
                experiments[key] = experimentsConfig[key];
            }
        });
        return experiments;
    }
    function splitExperimentsRandomness() {
        var random1 = getExperimentsRandomness();
        var _a = splitRandom(random1), random2 = _a[0], showNewUserWatermark = _a[1];
        var _b = splitRandom(random2), random3 = _b[0], openUntitledFile = _b[1];
        var _c = splitRandom(random3), random4 = _c[0], reorderQuickLinks = _c[1];
        var _d = splitRandom(random4), enableWelcomePage = _d[1];
        return {
            showNewUserWatermark: showNewUserWatermark,
            openUntitledFile: openUntitledFile,
            enableWelcomePage: enableWelcomePage,
            reorderQuickLinks: reorderQuickLinks,
        };
    }
    function getExperimentsRandomness() {
        var key = storageService_1.StorageService.GLOBAL_PREFIX + 'experiments.randomness';
        var valueString = window.localStorage.getItem(key);
        if (!valueString) {
            valueString = Math.random().toString();
            window.localStorage.setItem(key, valueString);
        }
        return parseFloat(valueString);
    }
    function splitRandom(random) {
        var scaled = random * 2;
        var i = Math.floor(scaled);
        return [scaled - i, i === 1];
    }
    var experimentsOverridesKey = storageService_1.StorageService.GLOBAL_PREFIX + 'experiments.overrides';
    function getExperimentsOverrides() {
        var valueString = window.localStorage.getItem(experimentsOverridesKey);
        return valueString ? JSON.parse(valueString) : {};
    }
    function updateExperimentsOverrides(configurationService) {
        var storageOverrides = getExperimentsOverrides();
        var config = configurationService.getConfiguration('telemetry');
        var configOverrides = config && config.experiments || {};
        if (!objects.equals(storageOverrides, configOverrides)) {
            window.localStorage.setItem(experimentsOverridesKey, JSON.stringify(configOverrides));
        }
    }
    function combinedAppender() {
        var appenders = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            appenders[_i] = arguments[_i];
        }
        return { log: function (e, d) { return appenders.forEach(function (a) { return a.log(e, d); }); } };
    }
    exports.combinedAppender = combinedAppender;
    exports.NullAppender = { log: function () { return null; } };
    // --- util
    function anonymize(input) {
        if (!input) {
            return input;
        }
        var r = '';
        for (var i = 0; i < input.length; i++) {
            var ch = input[i];
            if (ch >= '0' && ch <= '9') {
                r += '0';
                continue;
            }
            if (ch >= 'a' && ch <= 'z') {
                r += 'a';
                continue;
            }
            if (ch >= 'A' && ch <= 'Z') {
                r += 'A';
                continue;
            }
            r += ch;
        }
        return r;
    }
    exports.anonymize = anonymize;
    function telemetryURIDescriptor(uri) {
        var fsPath = uri && uri.fsPath;
        return fsPath ? { mimeType: mime_1.guessMimeTypes(fsPath).join(', '), ext: paths.extname(fsPath), path: anonymize(fsPath) } : {};
    }
    exports.telemetryURIDescriptor = telemetryURIDescriptor;
    /**
     * Only add settings that cannot contain any personal/private information of users (PII).
     */
    var configurationValueWhitelist = [
        'window.zoomLevel',
        'editor.fontSize',
        'editor.fontFamily',
        'editor.tabSize',
        'files.autoSave',
        'files.hotExit',
        'typescript.check.tscVersion',
        'editor.renderWhitespace',
        'editor.cursorBlinking',
        'editor.cursorStyle',
        'files.associations',
        'workbench.statusBar.visible',
        'editor.wordWrap',
        'editor.wordWrapColumn',
        'editor.insertSpaces',
        'editor.renderIndentGuides',
        'files.trimTrailingWhitespace',
        'git.confirmSync',
        'editor.rulers',
        'workbench.sideBar.location',
        'editor.fontLigatures',
        'editor.wordWrap',
        'editor.lineHeight',
        'editor.detectIndentation',
        'editor.formatOnType',
        'editor.formatOnSave',
        'editor.formatOnPaste',
        'editor.dragAndDrop',
        'window.openFilesInNewWindow',
        'javascript.validate.enable',
        'editor.mouseWheelZoom',
        'editor.fontWeight',
        'editor.scrollBeyondLastLine',
        'editor.lineNumbers',
        'editor.wrappingIndent',
        'editor.renderControlCharacters',
        'editor.autoClosingBrackets',
        'window.reopenFolders',
        'extensions.autoUpdate',
        'editor.tabCompletion',
        'files.eol',
        'explorer.openEditors.visible',
        'workbench.editor.enablePreview',
        'files.autoSaveDelay',
        'editor.roundedSelection',
        'editor.quickSuggestions',
        'editor.acceptSuggestionOnEnter',
        'editor.acceptSuggestionOnCommitCharacter',
        'workbench.editor.showTabs',
        'files.encoding',
        'files.autoGuessEncoding',
        'editor.quickSuggestionsDelay',
        'editor.snippetSuggestions',
        'editor.selectionHighlight',
        'editor.occurrencesHighlight',
        'editor.glyphMargin',
        'editor.wordSeparators',
        'editor.mouseWheelScrollSensitivity',
        'editor.suggestOnTriggerCharacters',
        'git.enabled',
        'http.proxyStrictSSL',
        'terminal.integrated.fontFamily',
        'editor.overviewRulerLanes',
        'editor.overviewRulerBorder',
        'editor.wordBasedSuggestions',
        'editor.hideCursorInOverviewRuler',
        'editor.trimAutoWhitespace',
        'editor.folding',
        'editor.matchBrackets',
        'workbench.editor.enablePreviewFromQuickOpen',
        'workbench.editor.swipeToNavigate',
        'php.builtInCompletions.enable',
        'php.validate.enable',
        'php.validate.run',
        'editor.parameterHints',
        'workbench.welcome.enabled',
    ];
    function configurationTelemetry(telemetryService, configurationService) {
        return configurationService.onDidUpdateConfiguration(function (event) {
            if (event.source !== configuration_1.ConfigurationSource.Default) {
                telemetryService.publicLog('updateConfiguration', {
                    configurationSource: configuration_1.ConfigurationSource[event.source],
                    configurationKeys: flattenKeys(event.sourceConfig)
                });
                telemetryService.publicLog('updateConfigurationValues', {
                    configurationSource: configuration_1.ConfigurationSource[event.source],
                    configurationValues: flattenValues(event.sourceConfig, configurationValueWhitelist)
                });
            }
        });
    }
    exports.configurationTelemetry = configurationTelemetry;
    function lifecycleTelemetry(telemetryService, lifecycleService) {
        return lifecycleService.onShutdown(function (event) {
            telemetryService.publicLog('shutdown', { reason: lifecycle_1.ShutdownReason[event] });
        });
    }
    exports.lifecycleTelemetry = lifecycleTelemetry;
    function keybindingsTelemetry(telemetryService, keybindingService) {
        return keybindingService.onDidUpdateKeybindings(function (event) {
            if (event.source === keybinding_1.KeybindingSource.User && event.keybindings) {
                telemetryService.publicLog('updateKeybindings', {
                    bindings: event.keybindings.map(function (binding) { return ({
                        key: binding.key,
                        command: binding.command,
                        when: binding.when,
                        args: binding.args ? true : undefined
                    }); })
                });
            }
        });
    }
    exports.keybindingsTelemetry = keybindingsTelemetry;
    function flattenKeys(value) {
        if (!value) {
            return [];
        }
        var result = [];
        flatKeys(result, '', value);
        return result;
    }
    function flatKeys(result, prefix, value) {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            Object.keys(value)
                .forEach(function (key) { return flatKeys(result, prefix ? prefix + "." + key : key, value[key]); });
        }
        else {
            result.push(prefix);
        }
    }
    function flattenValues(value, keys) {
        if (!value) {
            return [];
        }
        return keys.reduce(function (array, key) {
            var v = key.split('.')
                .reduce(function (tmp, k) { return tmp && typeof tmp === 'object' ? tmp[k] : undefined; }, value);
            if (typeof v !== 'undefined') {
                array.push((_a = {}, _a[key] = v, _a));
            }
            return array;
            var _a;
        }, []);
    }
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[124/*vs/platform/telemetry/common/telemetryService*/], __M([1/*require*/,0/*exports*/,71/*vs/nls!vs/platform/telemetry/common/telemetryService*/,11/*vs/base/common/strings*/,62/*vs/platform/telemetry/common/telemetryUtils*/,3/*vs/platform/instantiation/common/instantiation*/,12/*vs/platform/configuration/common/configuration*/,33/*vs/platform/configuration/common/configurationRegistry*/,2/*vs/base/common/winjs.base*/,9/*vs/base/common/lifecycle*/,8/*vs/base/common/objects*/,22/*vs/platform/platform*/]), function (require, exports, nls_1, strings_1, telemetryUtils_1, instantiation_1, configuration_1, configurationRegistry_1, winjs_base_1, lifecycle_1, objects_1, platform_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var TelemetryService = (function () {
        function TelemetryService(config, _configurationService) {
            this._configurationService = _configurationService;
            this._disposables = [];
            this._cleanupPatterns = [];
            this._appender = config.appender;
            this._commonProperties = config.commonProperties || winjs_base_1.TPromise.as({});
            this._piiPaths = config.piiPaths || [];
            this._userOptIn = typeof config.userOptIn === 'undefined' ? true : config.userOptIn;
            this._experiments = config.experiments || telemetryUtils_1.defaultExperiments;
            // static cleanup patterns for:
            // #1 `file:///DANGEROUS/PATH/resources/app/Useful/Information`
            // #2 // Any other file path that doesn't match the approved form above should be cleaned.
            // #3 "Error: ENOENT; no such file or directory" is often followed with PII, clean it
            this._cleanupPatterns.push([/file:\/\/\/.*?\/resources\/app\//gi, ''], [/file:\/\/\/.*/gi, ''], [/ENOENT: no such file or directory.*?\'([^\']+)\'/gi, 'ENOENT: no such file or directory']);
            for (var _i = 0, _a = this._piiPaths; _i < _a.length; _i++) {
                var piiPath = _a[_i];
                this._cleanupPatterns.push([new RegExp(strings_1.escapeRegExpCharacters(piiPath), 'gi'), '']);
            }
            if (this._configurationService) {
                this._updateUserOptIn();
                this._configurationService.onDidUpdateConfiguration(this._updateUserOptIn, this, this._disposables);
                this.publicLog('optInStatus', { optIn: this._userOptIn });
            }
        }
        TelemetryService.prototype._updateUserOptIn = function () {
            var config = this._configurationService.getConfiguration(TELEMETRY_SECTION_ID);
            this._userOptIn = config ? config.enableTelemetry : this._userOptIn;
        };
        Object.defineProperty(TelemetryService.prototype, "isOptedIn", {
            get: function () {
                return this._userOptIn;
            },
            enumerable: true,
            configurable: true
        });
        TelemetryService.prototype.getExperiments = function () {
            return this._experiments;
        };
        TelemetryService.prototype.getTelemetryInfo = function () {
            return this._commonProperties.then(function (values) {
                // well known properties
                var sessionId = values['sessionID'];
                var instanceId = values['common.instanceId'];
                var machineId = values['common.machineId'];
                return { sessionId: sessionId, instanceId: instanceId, machineId: machineId };
            });
        };
        TelemetryService.prototype.dispose = function () {
            this._disposables = lifecycle_1.dispose(this._disposables);
        };
        TelemetryService.prototype.publicLog = function (eventName, data) {
            var _this = this;
            // don't send events when the user is optout
            if (!this._userOptIn) {
                return winjs_base_1.TPromise.as(undefined);
            }
            return this._commonProperties.then(function (values) {
                // (first) add common properties
                data = objects_1.mixin(data, values);
                // (last) remove all PII from data
                data = objects_1.cloneAndChange(data, function (value) {
                    if (typeof value === 'string') {
                        return _this._cleanupInfo(value);
                    }
                    return undefined;
                });
                _this._appender.log(eventName, data);
            }, function (err) {
                // unsure what to do now...
                console.error(err);
            });
        };
        TelemetryService.prototype._cleanupInfo = function (stack) {
            // sanitize with configured cleanup patterns
            for (var _i = 0, _a = this._cleanupPatterns; _i < _a.length; _i++) {
                var tuple = _a[_i];
                var regexp = tuple[0], replaceValue = tuple[1];
                stack = stack.replace(regexp, replaceValue);
            }
            return stack;
        };
        return TelemetryService;
    }());
    TelemetryService.IDLE_START_EVENT_NAME = 'UserIdleStart';
    TelemetryService.IDLE_STOP_EVENT_NAME = 'UserIdleStop';
    TelemetryService = __decorate([
        __param(1, instantiation_1.optional(configuration_1.IConfigurationService))
    ], TelemetryService);
    exports.TelemetryService = TelemetryService;
    var TELEMETRY_SECTION_ID = 'telemetry';
    platform_1.Registry.as(configurationRegistry_1.Extensions.Configuration).registerConfiguration({
        'id': TELEMETRY_SECTION_ID,
        'order': 110,
        'type': 'object',
        'title': nls_1.localize(0, null),
        'properties': {
            'telemetry.enableTelemetry': {
                'type': 'boolean',
                'description': nls_1.localize(1, null),
                'default': true
            }
        }
    });
});

define(__m[125/*vs/workbench/parts/git/common/git*/], __M([1/*require*/,0/*exports*/,3/*vs/platform/instantiation/common/instantiation*/]), function (require, exports, instantiation_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var RefType;
    (function (RefType) {
        RefType[RefType["Head"] = 0] = "Head";
        RefType[RefType["RemoteHead"] = 1] = "RemoteHead";
        RefType[RefType["Tag"] = 2] = "Tag";
    })(RefType = exports.RefType || (exports.RefType = {}));
    // Model enums
    var StatusType;
    (function (StatusType) {
        StatusType[StatusType["INDEX"] = 0] = "INDEX";
        StatusType[StatusType["WORKING_TREE"] = 1] = "WORKING_TREE";
        StatusType[StatusType["MERGE"] = 2] = "MERGE";
    })(StatusType = exports.StatusType || (exports.StatusType = {}));
    var Status;
    (function (Status) {
        Status[Status["INDEX_MODIFIED"] = 0] = "INDEX_MODIFIED";
        Status[Status["INDEX_ADDED"] = 1] = "INDEX_ADDED";
        Status[Status["INDEX_DELETED"] = 2] = "INDEX_DELETED";
        Status[Status["INDEX_RENAMED"] = 3] = "INDEX_RENAMED";
        Status[Status["INDEX_COPIED"] = 4] = "INDEX_COPIED";
        Status[Status["MODIFIED"] = 5] = "MODIFIED";
        Status[Status["DELETED"] = 6] = "DELETED";
        Status[Status["UNTRACKED"] = 7] = "UNTRACKED";
        Status[Status["IGNORED"] = 8] = "IGNORED";
        Status[Status["ADDED_BY_US"] = 9] = "ADDED_BY_US";
        Status[Status["ADDED_BY_THEM"] = 10] = "ADDED_BY_THEM";
        Status[Status["DELETED_BY_US"] = 11] = "DELETED_BY_US";
        Status[Status["DELETED_BY_THEM"] = 12] = "DELETED_BY_THEM";
        Status[Status["BOTH_ADDED"] = 13] = "BOTH_ADDED";
        Status[Status["BOTH_DELETED"] = 14] = "BOTH_DELETED";
        Status[Status["BOTH_MODIFIED"] = 15] = "BOTH_MODIFIED";
    })(Status = exports.Status || (exports.Status = {}));
    // Model events
    exports.ModelEvents = {
        MODEL_UPDATED: 'ModelUpdated',
        STATUS_MODEL_UPDATED: 'StatusModelUpdated',
        HEAD_UPDATED: 'HEADUpdated',
        REFS_UPDATED: 'RefsUpdated',
        REMOTES_UPDATED: 'RemotesUpdated'
    };
    // Service enums
    var ServiceState;
    (function (ServiceState) {
        ServiceState[ServiceState["NotInitialized"] = 0] = "NotInitialized";
        ServiceState[ServiceState["NotARepo"] = 1] = "NotARepo";
        ServiceState[ServiceState["NotAtRepoRoot"] = 2] = "NotAtRepoRoot";
        ServiceState[ServiceState["OK"] = 3] = "OK";
        ServiceState[ServiceState["Huge"] = 4] = "Huge";
        ServiceState[ServiceState["NoGit"] = 5] = "NoGit";
        ServiceState[ServiceState["Disabled"] = 6] = "Disabled";
        ServiceState[ServiceState["NotAWorkspace"] = 7] = "NotAWorkspace";
    })(ServiceState = exports.ServiceState || (exports.ServiceState = {}));
    var RawServiceState;
    (function (RawServiceState) {
        RawServiceState[RawServiceState["OK"] = 0] = "OK";
        RawServiceState[RawServiceState["GitNotFound"] = 1] = "GitNotFound";
        RawServiceState[RawServiceState["Disabled"] = 2] = "Disabled";
    })(RawServiceState = exports.RawServiceState || (exports.RawServiceState = {}));
    exports.GitErrorCodes = {
        BadConfigFile: 'BadConfigFile',
        AuthenticationFailed: 'AuthenticationFailed',
        NoUserNameConfigured: 'NoUserNameConfigured',
        NoUserEmailConfigured: 'NoUserEmailConfigured',
        NoRemoteRepositorySpecified: 'NoRemoteRepositorySpecified',
        NotAGitRepository: 'NotAGitRepository',
        NotAtRepositoryRoot: 'NotAtRepositoryRoot',
        Conflict: 'Conflict',
        UnmergedChanges: 'UnmergedChanges',
        PushRejected: 'PushRejected',
        RemoteConnectionError: 'RemoteConnectionError',
        DirtyWorkTree: 'DirtyWorkTree',
        CantOpenResource: 'CantOpenResource',
        GitNotFound: 'GitNotFound',
        CantCreatePipe: 'CantCreatePipe',
        CantAccessRemote: 'CantAccessRemote',
        RepositoryNotFound: 'RepositoryNotFound'
    };
    var AutoFetcherState;
    (function (AutoFetcherState) {
        AutoFetcherState[AutoFetcherState["Disabled"] = 0] = "Disabled";
        AutoFetcherState[AutoFetcherState["Inactive"] = 1] = "Inactive";
        AutoFetcherState[AutoFetcherState["Active"] = 2] = "Active";
        AutoFetcherState[AutoFetcherState["Fetching"] = 3] = "Fetching";
    })(AutoFetcherState = exports.AutoFetcherState || (exports.AutoFetcherState = {}));
    // Service events
    exports.ServiceEvents = {
        STATE_CHANGED: 'stateChanged',
        REPO_CHANGED: 'repoChanged',
        OPERATION_START: 'operationStart',
        OPERATION_END: 'operationEnd',
        OPERATION: 'operation',
        ERROR: 'error',
        DISPOSE: 'dispose'
    };
    // Service operations
    exports.ServiceOperations = {
        STATUS: 'status',
        INIT: 'init',
        ADD: 'add',
        STAGE: 'stage',
        BRANCH: 'branch',
        CHECKOUT: 'checkout',
        CLEAN: 'clean',
        UNDO: 'undo',
        RESET: 'reset',
        REVERT: 'revert',
        COMMIT: 'commit',
        COMMAND: 'command',
        BACKGROUND_FETCH: 'backgroundfetch',
        PULL: 'pull',
        PUSH: 'push',
        SYNC: 'sync'
    };
    exports.GIT_SERVICE_ID = 'gitService';
    exports.IGitService = instantiation_1.createDecorator(exports.GIT_SERVICE_ID);
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[126/*vs/workbench/parts/git/common/gitIpc*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,21/*vs/base/parts/ipc/common/ipc*/,125/*vs/workbench/parts/git/common/git*/]), function (require, exports, winjs_base_1, ipc_1, git_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var RawFileStatusSerializer = {
        to: function (a) { return [a.x, a.y, a.path, a.mimetype, a.rename]; },
        from: function (b) { return ({ x: b[0], y: b[1], path: b[2], mimetype: b[3], rename: b[4] }); }
    };
    var BranchSerializer = {
        to: function (a) { return [a.name, a.commit, a.type, a.remote, a.upstream, a.ahead, a.behind]; },
        from: function (b) { return ({ name: b[0], commit: b[1], type: b[2], remote: b[3], upstream: b[4], ahead: b[5], behind: b[6] }); }
    };
    var RefSerializer = {
        to: function (a) { return [a.name, a.commit, a.type, a.remote]; },
        from: function (b) { return ({ name: b[0], commit: b[1], type: b[2], remote: b[3] }); }
    };
    var RemoteSerializer = {
        to: function (a) { return [a.name, a.url]; },
        from: function (b) { return ({ name: b[0], url: b[1] }); }
    };
    var RawStatusSerializer = {
        to: function (a) { return !a ? null : [
            a.repositoryRoot,
            a.state,
            a.status.map(RawFileStatusSerializer.to),
            BranchSerializer.to(a.HEAD),
            a.refs.map(RefSerializer.to),
            a.remotes.map(RemoteSerializer.to)
        ]; },
        from: function (b) { return !b ? null : {
            repositoryRoot: b[0],
            state: b[1],
            status: b[2].map(RawFileStatusSerializer.from),
            HEAD: BranchSerializer.from(b[3]),
            refs: b[4].map(RefSerializer.from),
            remotes: b[5].map(RemoteSerializer.from)
        }; }
    };
    var GitChannel = (function () {
        function GitChannel(service) {
            this.service = service;
        }
        GitChannel.prototype.call = function (command, args) {
            switch (command) {
                case 'getVersion': return this.service.then(function (s) { return s.getVersion(); });
                case 'serviceState': return this.service.then(function (s) { return s.serviceState(); });
                case 'statusCount': return this.service.then(function (s) { return s.statusCount(); });
                case 'status': return this.service.then(function (s) { return s.status(); }).then(RawStatusSerializer.to);
                case 'init': return this.service.then(function (s) { return s.init(); }).then(RawStatusSerializer.to);
                case 'add': return this.service.then(function (s) { return s.add(args); }).then(RawStatusSerializer.to);
                case 'stage': return this.service.then(function (s) { return s.stage(args[0], args[1]); }).then(RawStatusSerializer.to);
                case 'branch': return this.service.then(function (s) { return s.branch(args[0], args[1]); }).then(RawStatusSerializer.to);
                case 'checkout': return this.service.then(function (s) { return s.checkout(args[0], args[1]); }).then(RawStatusSerializer.to);
                case 'clean': return this.service.then(function (s) { return s.clean(args); }).then(RawStatusSerializer.to);
                case 'undo': return this.service.then(function (s) { return s.undo(); }).then(RawStatusSerializer.to);
                case 'reset': return this.service.then(function (s) { return s.reset(args[0], args[1]); }).then(RawStatusSerializer.to);
                case 'revertFiles': return this.service.then(function (s) { return s.revertFiles(args[0], args[1]); }).then(RawStatusSerializer.to);
                case 'fetch': return this.service.then(function (s) { return s.fetch(); }).then(RawStatusSerializer.to);
                case 'pull': return this.service.then(function (s) { return s.pull(args); }).then(RawStatusSerializer.to);
                case 'push': return this.service.then(function (s) { return s.push(args[0], args[1], args[2]); }).then(RawStatusSerializer.to);
                case 'sync': return this.service.then(function (s) { return s.sync(); }).then(RawStatusSerializer.to);
                case 'commit': return this.service.then(function (s) { return s.commit(args[0], args[1], args[2], args[3]); }).then(RawStatusSerializer.to);
                case 'detectMimetypes': return this.service.then(function (s) { return s.detectMimetypes(args[0], args[1]); });
                case 'show': return this.service.then(function (s) { return s.show(args[0], args[1]); });
                case 'clone': return this.service.then(function (s) { return s.clone(args[0], args[1]); });
                case 'onOutput': return this.service.then(function (s) { return ipc_1.eventToCall(s.onOutput); });
                case 'getCommitTemplate': return this.service.then(function (s) { return s.getCommitTemplate(); });
                case 'getCommit': return this.service.then(function (s) { return s.getCommit(args); });
            }
            return undefined;
        };
        return GitChannel;
    }());
    exports.GitChannel = GitChannel;
    var UnavailableGitChannel = (function () {
        function UnavailableGitChannel() {
        }
        UnavailableGitChannel.prototype.call = function (command) {
            switch (command) {
                case 'serviceState': return winjs_base_1.TPromise.as(git_1.RawServiceState.GitNotFound);
                default: return winjs_base_1.TPromise.as(null);
            }
        };
        return UnavailableGitChannel;
    }());
    exports.UnavailableGitChannel = UnavailableGitChannel;
    var GitChannelClient = (function () {
        function GitChannelClient(channel) {
            this.channel = channel;
            this._onOutput = ipc_1.eventFromCall(this.channel, 'onOutput');
        }
        Object.defineProperty(GitChannelClient.prototype, "onOutput", {
            get: function () { return this._onOutput; },
            enumerable: true,
            configurable: true
        });
        GitChannelClient.prototype.getVersion = function () {
            return this.channel.call('getVersion');
        };
        GitChannelClient.prototype.serviceState = function () {
            return this.channel.call('serviceState');
        };
        GitChannelClient.prototype.statusCount = function () {
            return this.channel.call('statusCount');
        };
        GitChannelClient.prototype.status = function () {
            return this.channel.call('status').then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.init = function () {
            return this.channel.call('init').then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.add = function (filesPaths) {
            return this.channel.call('add', filesPaths).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.stage = function (filePath, content) {
            return this.channel.call('stage', [filePath, content]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.branch = function (name, checkout) {
            return this.channel.call('branch', [name, checkout]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.checkout = function (treeish, filePaths) {
            return this.channel.call('checkout', [treeish, filePaths]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.clean = function (filePaths) {
            return this.channel.call('clean', filePaths).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.undo = function () {
            return this.channel.call('undo').then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.reset = function (treeish, hard) {
            return this.channel.call('reset', [treeish, hard]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.revertFiles = function (treeish, filePaths) {
            return this.channel.call('revertFiles', [treeish, filePaths]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.fetch = function () {
            return this.channel.call('fetch').then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.pull = function (rebase) {
            return this.channel.call('pull', rebase).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.push = function (remote, name, options) {
            return this.channel.call('push', [remote, name, options]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.sync = function () {
            return this.channel.call('sync').then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.commit = function (message, amend, stage, signoff) {
            return this.channel.call('commit', [message, amend, stage, signoff]).then(RawStatusSerializer.from);
        };
        GitChannelClient.prototype.detectMimetypes = function (path, treeish) {
            return this.channel.call('detectMimetypes', [path, treeish]);
        };
        GitChannelClient.prototype.show = function (path, treeish) {
            return this.channel.call('show', [path, treeish]);
        };
        GitChannelClient.prototype.clone = function (url, parentPath) {
            return this.channel.call('clone', [url, parentPath]);
        };
        GitChannelClient.prototype.getCommitTemplate = function () {
            return this.channel.call('getCommitTemplate');
        };
        GitChannelClient.prototype.getCommit = function (ref) {
            return this.channel.call('getCommit', ref);
        };
        return GitChannelClient;
    }());
    exports.GitChannelClient = GitChannelClient;
    var AskpassChannel = (function () {
        function AskpassChannel(service) {
            this.service = service;
        }
        AskpassChannel.prototype.call = function (command, args) {
            switch (command) {
                case 'askpass': return this.service.askpass(args[0], args[1], args[2]);
            }
            return undefined;
        };
        return AskpassChannel;
    }());
    exports.AskpassChannel = AskpassChannel;
    var AskpassChannelClient = (function () {
        function AskpassChannelClient(channel) {
            this.channel = channel;
        }
        AskpassChannelClient.prototype.askpass = function (id, host, command) {
            return this.channel.call('askpass', [id, host, command]);
        };
        return AskpassChannelClient;
    }());
    exports.AskpassChannelClient = AskpassChannelClient;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[127/*vs/workbench/parts/git/electron-main/askpassService*/], __M([1/*require*/,0/*exports*/,72/*vs/nls!vs/workbench/parts/git/electron-main/askpassService*/,10/*electron*/,5/*vs/base/common/platform*/,2/*vs/base/common/winjs.base*/]), function (require, exports, nls, electron_1, platform, winjs_base_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GitAskpassService = (function () {
        function GitAskpassService() {
            var _this = this;
            this.askpassCache = Object.create(null);
            electron_1.ipcMain.on('git:askpass', function (event, result) {
                _this.askpassCache[result.id].credentials = result.credentials;
            });
        }
        GitAskpassService.prototype.askpass = function (id, host, command) {
            var _this = this;
            return new winjs_base_1.TPromise(function (c, e) {
                var cachedResult = _this.askpassCache[id];
                if (typeof cachedResult !== 'undefined') {
                    return c(cachedResult.credentials);
                }
                if (command === 'fetch') {
                    return c({ username: '', password: '' });
                }
                var win = new electron_1.BrowserWindow({
                    alwaysOnTop: true,
                    skipTaskbar: true,
                    resizable: false,
                    width: 450,
                    height: platform.isWindows ? 280 : 260,
                    show: true,
                    title: nls.localize(0, null)
                });
                win.setMenuBarVisibility(false);
                _this.askpassCache[id] = {
                    window: win,
                    credentials: null
                };
                win.loadURL(require.toUrl('vs/workbench/parts/git/electron-main/index.html'));
                win.webContents.executeJavaScript('init(' + JSON.stringify({ id: id, host: host, command: command }) + ')');
                win.once('closed', function () {
                    c(_this.askpassCache[id].credentials);
                    setTimeout(function () { return delete _this.askpassCache[id]; }, 1000 * 10);
                });
            });
        };
        return GitAskpassService;
    }());
    exports.GitAskpassService = GitAskpassService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[40/*vs/base/node/request*/], __M([1/*require*/,0/*exports*/,2/*vs/base/common/winjs.base*/,6/*vs/base/common/types*/,130/*https*/,134/*http*/,83/*url*/,28/*fs*/,8/*vs/base/common/objects*/,131/*zlib*/]), function (require, exports, winjs_base_1, types_1, https, http, url_1, fs_1, objects_1, zlib_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function getNodeRequest(options) {
        var endpoint = url_1.parse(options.url);
        return endpoint.protocol === 'https:' ? https.request : http.request;
    }
    function request(options) {
        var req;
        return new winjs_base_1.TPromise(function (c, e) {
            var endpoint = url_1.parse(options.url);
            var getRawRequest = options.getRawRequest || getNodeRequest;
            var rawRequest = getRawRequest(options);
            var opts = {
                hostname: endpoint.hostname,
                port: endpoint.port ? parseInt(endpoint.port) : (endpoint.protocol === 'https:' ? 443 : 80),
                protocol: endpoint.protocol,
                path: endpoint.path,
                method: options.type || 'GET',
                headers: options.headers,
                agent: options.agent,
                rejectUnauthorized: types_1.isBoolean(options.strictSSL) ? options.strictSSL : true
            };
            if (options.user && options.password) {
                opts.auth = options.user + ':' + options.password;
            }
            req = rawRequest(opts, function (res) {
                var followRedirects = types_1.isNumber(options.followRedirects) ? options.followRedirects : 3;
                if (res.statusCode >= 300 && res.statusCode < 400 && followRedirects > 0 && res.headers['location']) {
                    request(objects_1.assign({}, options, {
                        url: res.headers['location'],
                        followRedirects: followRedirects - 1
                    })).done(c, e);
                }
                else {
                    var stream = res;
                    if (res.headers['content-encoding'] === 'gzip') {
                        stream = stream.pipe(zlib_1.createGunzip());
                    }
                    c({ res: res, stream: stream });
                }
            });
            req.on('error', e);
            if (options.timeout) {
                req.setTimeout(options.timeout);
            }
            if (options.data) {
                req.write(options.data);
            }
            req.end();
        }, function () { return req && req.abort(); });
    }
    exports.request = request;
    function isSuccess(context) {
        return (context.res.statusCode >= 200 && context.res.statusCode < 300) || context.res.statusCode === 1223;
    }
    function hasNoContent(context) {
        return context.res.statusCode === 204;
    }
    function download(filePath, context) {
        return new winjs_base_1.TPromise(function (c, e) {
            var out = fs_1.createWriteStream(filePath);
            out.once('finish', function () { return c(null); });
            context.stream.once('error', e);
            context.stream.pipe(out);
        });
    }
    exports.download = download;
    function asText(context) {
        return new winjs_base_1.Promise(function (c, e) {
            if (!isSuccess(context)) {
                return e('Server returned ' + context.res.statusCode);
            }
            if (hasNoContent(context)) {
                return c(null);
            }
            var buffer = [];
            context.stream.on('data', function (d) { return buffer.push(d); });
            context.stream.on('end', function () { return c(buffer.join('')); });
            context.stream.on('error', e);
        });
    }
    exports.asText = asText;
    function asJson(context) {
        return new winjs_base_1.Promise(function (c, e) {
            if (!isSuccess(context)) {
                return e('Server returned ' + context.res.statusCode);
            }
            if (hasNoContent(context)) {
                return c(null);
            }
            if (!/application\/json/.test(context.res.headers['content-type'])) {
                return e('Response doesn\'t appear to be JSON');
            }
            var buffer = [];
            context.stream.on('data', function (d) { return buffer.push(d); });
            context.stream.on('end', function () { return c(JSON.parse(buffer.join(''))); });
            context.stream.on('error', e);
        });
    }
    exports.asJson = asJson;
});










define(__m[115/*vs/platform/request/node/requestService*/], __M([1/*require*/,0/*exports*/,8/*vs/base/common/objects*/,40/*vs/base/node/request*/,82/*vs/base/node/proxy*/,12/*vs/platform/configuration/common/configuration*/]), function (require, exports, objects_1, request_1, proxy_1, configuration_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * This service exposes the `request` API, while using the global
     * or configured proxy settings.
     */
    var RequestService = (function () {
        function RequestService(configurationService) {
            this.disposables = [];
            this.configure(configurationService.getConfiguration());
            configurationService.onDidUpdateConfiguration(this.onDidUpdateConfiguration, this, this.disposables);
        }
        RequestService.prototype.onDidUpdateConfiguration = function (e) {
            this.configure(e.config);
        };
        RequestService.prototype.configure = function (config) {
            this.proxyUrl = config.http && config.http.proxy;
            this.strictSSL = config.http && config.http.proxyStrictSSL;
            this.authorization = config.http && config.http.proxyAuthorization;
        };
        RequestService.prototype.request = function (options, requestFn) {
            if (requestFn === void 0) { requestFn = request_1.request; }
            var _a = this, proxyUrl = _a.proxyUrl, strictSSL = _a.strictSSL;
            options.agent = options.agent || proxy_1.getProxyAgent(options.url, { proxyUrl: proxyUrl, strictSSL: strictSSL });
            options.strictSSL = strictSSL;
            if (this.authorization) {
                options.headers = objects_1.assign(options.headers || {}, { 'Proxy-Authorization': this.authorization });
            }
            return requestFn(options);
        };
        return RequestService;
    }());
    RequestService = __decorate([
        __param(0, configuration_1.IConfigurationService)
    ], RequestService);
    exports.RequestService = RequestService;
});











define(__m[75/*vs/platform/request/electron-main/requestService*/], __M([1/*require*/,0/*exports*/,40/*vs/base/node/request*/,115/*vs/platform/request/node/requestService*/,8/*vs/base/common/objects*/,10/*electron*/]), function (require, exports, request_1, requestService_1, objects_1, electron_1) {
    /*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function getRawRequest(options) {
        return electron_1.net.request;
    }
    var RequestService = (function (_super) {
        __extends(RequestService, _super);
        function RequestService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        RequestService.prototype.request = function (options) {
            return _super.prototype.request.call(this, options, function (options) { return request_1.request(objects_1.assign({}, options || {}, { getRawRequest: getRawRequest })); });
        };
        return RequestService;
    }(requestService_1.RequestService));
    exports.RequestService = RequestService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



















define(__m[99/*vs/platform/update/electron-main/auto-updater.linux*/], __M([1/*require*/,0/*exports*/,90/*events*/,6/*vs/base/common/types*/,40/*vs/base/node/request*/,39/*vs/platform/request/node/request*/,16/*vs/platform/node/product*/]), function (require, exports, events_1, types_1, request_1, request_2, product_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var LinuxAutoUpdaterImpl = (function (_super) {
        __extends(LinuxAutoUpdaterImpl, _super);
        function LinuxAutoUpdaterImpl(requestService) {
            var _this = _super.call(this) || this;
            _this.requestService = requestService;
            _this.url = null;
            _this.currentRequest = null;
            return _this;
        }
        LinuxAutoUpdaterImpl.prototype.setFeedURL = function (url) {
            this.url = url;
        };
        LinuxAutoUpdaterImpl.prototype.checkForUpdates = function () {
            var _this = this;
            if (!this.url) {
                throw new Error('No feed url set.');
            }
            if (this.currentRequest) {
                return;
            }
            this.emit('checking-for-update');
            this.currentRequest = this.requestService.request({ url: this.url })
                .then(request_1.asJson)
                .then(function (update) {
                if (!update || !update.url || !update.version || !update.productVersion) {
                    _this.emit('update-not-available');
                }
                else {
                    _this.emit('update-available', null, product_1.default.downloadUrl, update.productVersion);
                }
            })
                .then(null, function (e) {
                if (types_1.isString(e) && /^Server returned/.test(e)) {
                    return;
                }
                _this.emit('update-not-available');
                _this.emit('error', e);
            })
                .then(function () { return _this.currentRequest = null; });
        };
        LinuxAutoUpdaterImpl.prototype.quitAndInstall = function () {
            // noop
        };
        return LinuxAutoUpdaterImpl;
    }(events_1.EventEmitter));
    LinuxAutoUpdaterImpl = __decorate([
        __param(0, request_2.IRequestService)
    ], LinuxAutoUpdaterImpl);
    exports.LinuxAutoUpdaterImpl = LinuxAutoUpdaterImpl;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/



















define(__m[86/*vs/platform/update/electron-main/auto-updater.win32*/], __M([1/*require*/,0/*exports*/,7/*path*/,51/*vs/base/node/pfs*/,102/*vs/base/node/crypto*/,90/*events*/,26/*os*/,109/*child_process*/,41/*vs/base/node/extfs*/,6/*vs/base/common/types*/,2/*vs/base/common/winjs.base*/,40/*vs/base/node/request*/,39/*vs/platform/request/node/request*/,16/*vs/platform/node/product*/]), function (require, exports, path, pfs, crypto_1, events_1, os_1, child_process_1, extfs_1, types_1, winjs_base_1, request_1, request_2, product_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var Win32AutoUpdaterImpl = (function (_super) {
        __extends(Win32AutoUpdaterImpl, _super);
        function Win32AutoUpdaterImpl(requestService) {
            var _this = _super.call(this) || this;
            _this.requestService = requestService;
            _this.url = null;
            _this.currentRequest = null;
            _this.updatePackagePath = null;
            return _this;
        }
        Object.defineProperty(Win32AutoUpdaterImpl.prototype, "cachePath", {
            get: function () {
                var result = path.join(os_1.tmpdir(), 'vscode-update');
                return new winjs_base_1.TPromise(function (c, e) { return extfs_1.mkdirp(result, null, function (err) { return err ? e(err) : c(result); }); });
            },
            enumerable: true,
            configurable: true
        });
        Win32AutoUpdaterImpl.prototype.setFeedURL = function (url) {
            this.url = url;
        };
        Win32AutoUpdaterImpl.prototype.checkForUpdates = function () {
            var _this = this;
            if (!this.url) {
                throw new Error('No feed url set.');
            }
            if (this.currentRequest) {
                return;
            }
            this.emit('checking-for-update');
            this.currentRequest = this.requestService.request({ url: this.url })
                .then(request_1.asJson)
                .then(function (update) {
                if (!update || !update.url || !update.version) {
                    _this.emit('update-not-available');
                    return _this.cleanup();
                }
                _this.emit('update-available');
                return _this.cleanup(update.version).then(function () {
                    return _this.getUpdatePackagePath(update.version).then(function (updatePackagePath) {
                        return pfs.exists(updatePackagePath).then(function (exists) {
                            if (exists) {
                                return winjs_base_1.TPromise.as(updatePackagePath);
                            }
                            var url = update.url;
                            var hash = update.hash;
                            var downloadPath = updatePackagePath + ".tmp";
                            return _this.requestService.request({ url: url })
                                .then(function (context) { return request_1.download(downloadPath, context); })
                                .then(hash ? function () { return crypto_1.checksum(downloadPath, update.hash); } : function () { return null; })
                                .then(function () { return pfs.rename(downloadPath, updatePackagePath); })
                                .then(function () { return updatePackagePath; });
                        });
                    }).then(function (updatePackagePath) {
                        _this.updatePackagePath = updatePackagePath;
                        _this.emit('update-downloaded', {}, update.releaseNotes, update.productVersion, new Date(), _this.url);
                    });
                });
            })
                .then(null, function (e) {
                if (types_1.isString(e) && /^Server returned/.test(e)) {
                    return;
                }
                _this.emit('update-not-available');
                _this.emit('error', e);
            })
                .then(function () { return _this.currentRequest = null; });
        };
        Win32AutoUpdaterImpl.prototype.getUpdatePackagePath = function (version) {
            return this.cachePath.then(function (cachePath) { return path.join(cachePath, "CodeSetup-" + product_1.default.quality + "-" + version + ".exe"); });
        };
        Win32AutoUpdaterImpl.prototype.cleanup = function (exceptVersion) {
            if (exceptVersion === void 0) { exceptVersion = null; }
            var filter = exceptVersion ? function (one) { return !(new RegExp(product_1.default.quality + "-" + exceptVersion + "\\.exe$").test(one)); } : function () { return true; };
            return this.cachePath
                .then(function (cachePath) { return pfs.readdir(cachePath)
                .then(function (all) { return winjs_base_1.Promise.join(all
                .filter(filter)
                .map(function (one) { return pfs.unlink(path.join(cachePath, one)).then(null, function () { return null; }); })); }); });
        };
        Win32AutoUpdaterImpl.prototype.quitAndInstall = function () {
            if (!this.updatePackagePath) {
                return;
            }
            child_process_1.spawn(this.updatePackagePath, ['/silent', '/mergetasks=runcode,!desktopicon,!quicklaunchicon'], {
                detached: true,
                stdio: ['ignore', 'ignore', 'ignore']
            });
        };
        return Win32AutoUpdaterImpl;
    }(events_1.EventEmitter));
    Win32AutoUpdaterImpl = __decorate([
        __param(0, request_2.IRequestService)
    ], Win32AutoUpdaterImpl);
    exports.Win32AutoUpdaterImpl = Win32AutoUpdaterImpl;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[77/*vs/platform/update/electron-main/updateService*/], __M([1/*require*/,0/*exports*/,38/*original-fs*/,7/*path*/,10/*electron*/,9/*vs/base/common/lifecycle*/,4/*vs/base/common/event*/,34/*vs/base/common/async*/,43/*vs/base/common/decorators*/,29/*vs/base/node/event*/,12/*vs/platform/configuration/common/configuration*/,86/*vs/platform/update/electron-main/auto-updater.win32*/,99/*vs/platform/update/electron-main/auto-updater.linux*/,31/*vs/code/electron-main/lifecycle*/,39/*vs/platform/request/node/request*/,16/*vs/platform/node/product*/,2/*vs/base/common/winjs.base*/,37/*vs/platform/update/common/update*/,36/*vs/platform/telemetry/common/telemetry*/]), function (require, exports, fs, path, electron, lifecycle_1, event_1, async_1, decorators_1, event_2, configuration_1, auto_updater_win32_1, auto_updater_linux_1, lifecycle_2, request_1, product_1, winjs_base_1, update_1, telemetry_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var UpdateService = (function () {
        function UpdateService(requestService, lifecycleService, configurationService, telemetryService) {
            this.lifecycleService = lifecycleService;
            this.configurationService = configurationService;
            this.telemetryService = telemetryService;
            this._state = update_1.State.Uninitialized;
            this._availableUpdate = null;
            this.throttler = new async_1.Throttler();
            this._onError = new event_1.Emitter();
            this._onCheckForUpdate = new event_1.Emitter();
            this._onUpdateAvailable = new event_1.Emitter();
            this._onUpdateNotAvailable = new event_1.Emitter();
            this._onUpdateReady = new event_1.Emitter();
            this._onStateChange = new event_1.Emitter();
            if (process.platform === 'win32') {
                this.raw = new auto_updater_win32_1.Win32AutoUpdaterImpl(requestService);
            }
            else if (process.platform === 'linux') {
                this.raw = new auto_updater_linux_1.LinuxAutoUpdaterImpl(requestService);
            }
            else if (process.platform === 'darwin') {
                this.raw = electron.autoUpdater;
            }
            else {
                return;
            }
            var channel = this.getUpdateChannel();
            var feedUrl = this.getUpdateFeedUrl(channel);
            if (!feedUrl) {
                return; // updates not available
            }
            try {
                this.raw.setFeedURL(feedUrl);
            }
            catch (e) {
                return; // application not signed
            }
            this.state = update_1.State.Idle;
            // Start checking for updates after 30 seconds
            this.scheduleCheckForUpdates(30 * 1000)
                .done(null, function (err) { return console.error(err); });
        }
        Object.defineProperty(UpdateService.prototype, "onError", {
            get: function () { return this._onError.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onCheckForUpdate", {
            get: function () { return this._onCheckForUpdate.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onUpdateAvailable", {
            get: function () { return this._onUpdateAvailable.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onUpdateNotAvailable", {
            get: function () { return this._onUpdateNotAvailable.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onUpdateReady", {
            get: function () { return this._onUpdateReady.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onStateChange", {
            get: function () { return this._onStateChange.event; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onRawError", {
            get: function () {
                return event_2.fromEventEmitter(this.raw, 'error', function (_, message) { return message; });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onRawUpdateNotAvailable", {
            get: function () {
                return event_2.fromEventEmitter(this.raw, 'update-not-available');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onRawUpdateAvailable", {
            get: function () {
                return event_1.filterEvent(event_2.fromEventEmitter(this.raw, 'update-available', function (_, url, version) { return ({ url: url, version: version }); }), function (_a) {
                    var url = _a.url;
                    return !!url;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "onRawUpdateDownloaded", {
            get: function () {
                return event_2.fromEventEmitter(this.raw, 'update-downloaded', function (_, releaseNotes, version, date, url) { return ({ releaseNotes: releaseNotes, version: version, date: date }); });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (state) {
                this._state = state;
                this._onStateChange.fire(state);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UpdateService.prototype, "availableUpdate", {
            get: function () {
                return this._availableUpdate;
            },
            enumerable: true,
            configurable: true
        });
        UpdateService.prototype.scheduleCheckForUpdates = function (delay) {
            var _this = this;
            if (delay === void 0) { delay = 60 * 60 * 1000; }
            return winjs_base_1.TPromise.timeout(delay)
                .then(function () { return _this.checkForUpdates(); })
                .then(function (update) {
                if (update) {
                    // Update found, no need to check more
                    return winjs_base_1.TPromise.as(null);
                }
                // Check again after 1 hour
                return _this.scheduleCheckForUpdates(60 * 60 * 1000);
            });
        };
        UpdateService.prototype.checkForUpdates = function (explicit) {
            var _this = this;
            if (explicit === void 0) { explicit = false; }
            return this.throttler.queue(function () { return _this._checkForUpdates(explicit); })
                .then(null, function (err) {
                if (explicit) {
                    _this._onError.fire(err);
                }
                return null;
            });
        };
        UpdateService.prototype._checkForUpdates = function (explicit) {
            var _this = this;
            if (this.state !== update_1.State.Idle) {
                return winjs_base_1.TPromise.as(null);
            }
            this._onCheckForUpdate.fire();
            this.state = update_1.State.CheckingForUpdate;
            var listeners = [];
            var result = new winjs_base_1.TPromise(function (c, e) {
                event_1.once(_this.onRawError)(e, null, listeners);
                event_1.once(_this.onRawUpdateNotAvailable)(function () { return c(null); }, null, listeners);
                event_1.once(_this.onRawUpdateAvailable)(function (_a) {
                    var url = _a.url, version = _a.version;
                    return url && c({ url: url, version: version });
                }, null, listeners);
                event_1.once(_this.onRawUpdateDownloaded)(function (_a) {
                    var version = _a.version, date = _a.date, releaseNotes = _a.releaseNotes;
                    return c({ version: version, date: date, releaseNotes: releaseNotes });
                }, null, listeners);
                _this.raw.checkForUpdates();
            }).then(function (update) {
                if (!update) {
                    _this._onUpdateNotAvailable.fire(explicit);
                    _this.state = update_1.State.Idle;
                    _this.telemetryService.publicLog('update:notAvailable', { explicit: explicit });
                }
                else if (update.url) {
                    var data = {
                        url: update.url,
                        releaseNotes: '',
                        version: update.version,
                        date: new Date()
                    };
                    _this._availableUpdate = data;
                    _this._onUpdateAvailable.fire({ url: update.url, version: update.version });
                    _this.state = update_1.State.UpdateAvailable;
                }
                else {
                    var data = {
                        releaseNotes: update.releaseNotes,
                        version: update.version,
                        date: update.date
                    };
                    _this._availableUpdate = data;
                    _this._onUpdateReady.fire(data);
                    _this.state = update_1.State.UpdateDownloaded;
                    _this.telemetryService.publicLog('update:downloaded', { version: update.version });
                }
                return update;
            }, function (err) {
                _this.state = update_1.State.Idle;
                return winjs_base_1.TPromise.wrapError(err);
            });
            return async_1.always(result, function () { return lifecycle_1.dispose(listeners); });
        };
        UpdateService.prototype.getUpdateChannel = function () {
            var config = this.configurationService.getConfiguration('update');
            var channel = config && config.channel;
            return channel === 'none' ? null : product_1.default.quality;
        };
        UpdateService.prototype.getUpdateFeedUrl = function (channel) {
            if (!channel) {
                return null;
            }
            if (process.platform === 'win32' && !fs.existsSync(path.join(path.dirname(process.execPath), 'unins000.exe'))) {
                return null;
            }
            if (!product_1.default.updateUrl || !product_1.default.commit) {
                return null;
            }
            var platform = process.platform === 'linux' ? "linux-" + process.arch : process.platform;
            return product_1.default.updateUrl + "/api/update/" + platform + "/" + channel + "/" + product_1.default.commit;
        };
        UpdateService.prototype.quitAndInstall = function () {
            var _this = this;
            if (!this._availableUpdate) {
                return winjs_base_1.TPromise.as(null);
            }
            if (this._availableUpdate.url) {
                electron.shell.openExternal(this._availableUpdate.url);
                return winjs_base_1.TPromise.as(null);
            }
            this.lifecycleService.quit(true /* from update */).done(function (vetod) {
                if (vetod) {
                    return;
                }
                // for some reason updating on Mac causes the local storage not to be flushed.
                // we workaround this issue by forcing an explicit flush of the storage data.
                // see also https://github.com/Microsoft/vscode/issues/172
                if (process.platform === 'darwin') {
                    electron.session.defaultSession.flushStorageData();
                }
                _this.raw.quitAndInstall();
            });
            return winjs_base_1.TPromise.as(null);
        };
        return UpdateService;
    }());
    __decorate([
        decorators_1.memoize
    ], UpdateService.prototype, "onRawError", null);
    __decorate([
        decorators_1.memoize
    ], UpdateService.prototype, "onRawUpdateNotAvailable", null);
    __decorate([
        decorators_1.memoize
    ], UpdateService.prototype, "onRawUpdateAvailable", null);
    __decorate([
        decorators_1.memoize
    ], UpdateService.prototype, "onRawUpdateDownloaded", null);
    UpdateService = __decorate([
        __param(0, request_1.IRequestService),
        __param(1, lifecycle_2.ILifecycleService),
        __param(2, configuration_1.IConfigurationService),
        __param(3, telemetry_1.ITelemetryService)
    ], UpdateService);
    exports.UpdateService = UpdateService;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/









define(__m[80/*vs/code/electron-main/app*/], __M([1/*require*/,0/*exports*/,10/*electron*/,5/*vs/base/common/platform*/,24/*vs/code/common/windows*/,35/*vs/code/electron-main/windows*/,46/*vs/platform/windows/common/windows*/,119/*vs/platform/windows/common/windowsIpc*/,120/*vs/platform/windows/electron-main/windowsService*/,31/*vs/code/electron-main/lifecycle*/,117/*vs/code/electron-main/menus*/,107/*vs/code/electron-main/shellEnv*/,37/*vs/platform/update/common/update*/,108/*vs/platform/update/common/updateIpc*/,77/*vs/platform/update/electron-main/updateService*/,94/*vs/base/parts/ipc/electron-main/ipc.electron-main*/,54/*vs/base/parts/ipc/node/ipc.net*/,126/*vs/workbench/parts/git/common/gitIpc*/,127/*vs/workbench/parts/git/electron-main/askpassService*/,104/*vs/code/electron-main/sharedProcess*/,60/*vs/code/electron-main/launch*/,3/*vs/platform/instantiation/common/instantiation*/,44/*vs/platform/instantiation/common/serviceCollection*/,50/*vs/platform/instantiation/common/descriptors*/,25/*vs/code/electron-main/log*/,27/*vs/code/electron-main/storage*/,42/*vs/platform/backup/common/backup*/,73/*vs/platform/backup/common/backupIpc*/,13/*vs/platform/environment/common/environment*/,12/*vs/platform/configuration/common/configuration*/,32/*vs/platform/url/common/url*/,118/*vs/platform/url/common/urlIpc*/,36/*vs/platform/telemetry/common/telemetry*/,62/*vs/platform/telemetry/common/telemetryUtils*/,105/*vs/platform/telemetry/common/telemetryIpc*/,124/*vs/platform/telemetry/common/telemetryService*/,106/*vs/platform/telemetry/node/commonProperties*/,21/*vs/base/parts/ipc/common/ipc*/,16/*vs/platform/node/product*/,45/*vs/platform/node/package*/,9/*vs/base/common/lifecycle*/]), function (require, exports, electron_1, platform, windows_1, windows_2, windows_3, windowsIpc_1, windowsService_1, lifecycle_1, menus_1, shellEnv_1, update_1, updateIpc_1, updateService_1, ipc_electron_main_1, ipc_net_1, gitIpc_1, askpassService_1, sharedProcess_1, launch_1, instantiation_1, serviceCollection_1, descriptors_1, log_1, storage_1, backup_1, backupIpc_1, environment_1, configuration_1, url_1, urlIpc_1, telemetry_1, telemetryUtils_1, telemetryIpc_1, telemetryService_1, commonProperties_1, ipc_1, product_1, package_1, lifecycle_2) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    var VSCodeApplication = (function () {
        function VSCodeApplication(mainIpcServer, userEnv, instantiationService, logService, environmentService, lifecycleService, configurationService, storageService) {
            this.mainIpcServer = mainIpcServer;
            this.userEnv = userEnv;
            this.instantiationService = instantiationService;
            this.logService = logService;
            this.environmentService = environmentService;
            this.lifecycleService = lifecycleService;
            this.configurationService = configurationService;
            this.storageService = storageService;
            this.toDispose = [mainIpcServer, configurationService];
            this.registerListeners();
        }
        VSCodeApplication.prototype.registerListeners = function () {
            var _this = this;
            // We handle uncaught exceptions here to prevent electron from opening a dialog to the user
            process.on('uncaughtException', function (err) {
                if (err) {
                    // take only the message and stack property
                    var friendlyError = {
                        message: err.message,
                        stack: err.stack
                    };
                    // handle on client side
                    if (_this.windowsMainService) {
                        _this.windowsMainService.sendToFocused('vscode:reportError', JSON.stringify(friendlyError));
                    }
                }
                console.error('[uncaught exception in main]: ' + err);
                if (err.stack) {
                    console.error(err.stack);
                }
            });
            electron_1.app.on('will-quit', function () {
                _this.logService.log('App#will-quit: disposing resources');
                _this.dispose();
            });
            electron_1.ipcMain.on('vscode:exit', function (event, code) {
                _this.logService.log('IPC#vscode:exit', code);
                _this.dispose();
                _this.lifecycleService.kill(code);
            });
            electron_1.ipcMain.on(commonProperties_1.machineIdIpcChannel, function (event, machineId) {
                _this.logService.log('IPC#vscode-machineId');
                _this.storageService.setItem(commonProperties_1.machineIdStorageKey, machineId);
            });
            electron_1.ipcMain.on('vscode:fetchShellEnv', function (event, windowId) {
                var win = electron_1.BrowserWindow.fromId(windowId);
                shellEnv_1.getShellEnvironment().then(function (shellEnv) {
                    win.webContents.send('vscode:acceptShellEnv', shellEnv);
                }, function (err) {
                    win.webContents.send('vscode:acceptShellEnv', {});
                    console.error('Error fetching shell env', err);
                });
            });
        };
        VSCodeApplication.prototype.startup = function () {
            var _this = this;
            this.logService.log('Starting VS Code in verbose mode');
            this.logService.log("from: " + this.environmentService.appRoot);
            this.logService.log('args:', this.environmentService.args);
            // Make sure we associate the program with the app user model id
            // This will help Windows to associate the running program with
            // any shortcut that is pinned to the taskbar and prevent showing
            // two icons in the taskbar for the same app.
            if (platform.isWindows && product_1.default.win32AppUserModelId) {
                electron_1.app.setAppUserModelId(product_1.default.win32AppUserModelId);
            }
            // Register Main IPC connections
            var askpassService = new askpassService_1.GitAskpassService();
            var askpassChannel = new gitIpc_1.AskpassChannel(askpassService);
            this.mainIpcServer.registerChannel('askpass', askpassChannel);
            // Create Electron IPC Server
            this.electronIpcServer = new ipc_electron_main_1.Server();
            // Spawn shared process
            this.sharedProcess = new sharedProcess_1.SharedProcess(this.environmentService, this.userEnv);
            this.toDispose.push(this.sharedProcess);
            this.sharedProcessClient = this.sharedProcess.whenReady()
                .then(function () { return ipc_net_1.connect(_this.environmentService.sharedIPCHandle, 'main'); });
            // Services
            var appInstantiationService = this.initServices();
            // Open Windows
            appInstantiationService.invokeFunction(function (accessor) { return _this.openFirstWindow(accessor); });
            // Post Open Windows Tasks
            appInstantiationService.invokeFunction(function (accessor) { return _this.afterWindowOpen(accessor); });
        };
        VSCodeApplication.prototype.initServices = function () {
            var _this = this;
            var services = new serviceCollection_1.ServiceCollection();
            services.set(update_1.IUpdateService, new descriptors_1.SyncDescriptor(updateService_1.UpdateService));
            services.set(windows_2.IWindowsMainService, new descriptors_1.SyncDescriptor(windows_2.WindowsManager));
            services.set(windows_3.IWindowsService, new descriptors_1.SyncDescriptor(windowsService_1.WindowsService, this.sharedProcess));
            services.set(launch_1.ILaunchService, new descriptors_1.SyncDescriptor(launch_1.LaunchService));
            // Telemtry
            if (this.environmentService.isBuilt && !this.environmentService.isExtensionDevelopment && !!product_1.default.enableTelemetry) {
                var channel = ipc_1.getDelayedChannel(this.sharedProcessClient.then(function (c) { return c.getChannel('telemetryAppender'); }));
                var appender = new telemetryIpc_1.TelemetryAppenderClient(channel);
                var commonProperties = commonProperties_1.resolveCommonProperties(product_1.default.commit, package_1.default.version)
                    .then(function (result) { return Object.defineProperty(result, 'common.machineId', {
                    get: function () { return _this.storageService.getItem(commonProperties_1.machineIdStorageKey); },
                    enumerable: true
                }); });
                var piiPaths = [this.environmentService.appRoot, this.environmentService.extensionsPath];
                var config = { appender: appender, commonProperties: commonProperties, piiPaths: piiPaths };
                services.set(telemetry_1.ITelemetryService, new descriptors_1.SyncDescriptor(telemetryService_1.TelemetryService, config));
            }
            else {
                services.set(telemetry_1.ITelemetryService, telemetryUtils_1.NullTelemetryService);
            }
            return this.instantiationService.createChild(services);
        };
        VSCodeApplication.prototype.openFirstWindow = function (accessor) {
            var _this = this;
            var appInstantiationService = accessor.get(instantiation_1.IInstantiationService);
            // TODO@Joao: unfold this
            this.windowsMainService = accessor.get(windows_2.IWindowsMainService);
            // TODO@Joao: so ugly...
            this.windowsMainService.onWindowClose(function () {
                if (!platform.isMacintosh && _this.windowsMainService.getWindowCount() === 0) {
                    _this.sharedProcess.dispose();
                }
            });
            // Register more Main IPC services
            var launchService = accessor.get(launch_1.ILaunchService);
            var launchChannel = new launch_1.LaunchChannel(launchService);
            this.mainIpcServer.registerChannel('launch', launchChannel);
            // Register more Electron IPC services
            var updateService = accessor.get(update_1.IUpdateService);
            var updateChannel = new updateIpc_1.UpdateChannel(updateService);
            this.electronIpcServer.registerChannel('update', updateChannel);
            var urlService = accessor.get(url_1.IURLService);
            var urlChannel = appInstantiationService.createInstance(urlIpc_1.URLChannel, urlService);
            this.electronIpcServer.registerChannel('url', urlChannel);
            var backupService = accessor.get(backup_1.IBackupMainService);
            var backupChannel = appInstantiationService.createInstance(backupIpc_1.BackupChannel, backupService);
            this.electronIpcServer.registerChannel('backup', backupChannel);
            var windowsService = accessor.get(windows_3.IWindowsService);
            var windowsChannel = new windowsIpc_1.WindowsChannel(windowsService);
            this.electronIpcServer.registerChannel('windows', windowsChannel);
            this.sharedProcessClient.done(function (client) { return client.registerChannel('windows', windowsChannel); });
            // Lifecycle
            this.lifecycleService.ready();
            // Propagate to clients
            this.windowsMainService.ready(this.userEnv);
            // Open our first window
            var args = this.environmentService.args;
            var context = !!process.env['VSCODE_CLI'] ? windows_1.OpenContext.CLI : windows_1.OpenContext.DESKTOP;
            if (args['new-window'] && args._.length === 0) {
                this.windowsMainService.open({ context: context, cli: args, forceNewWindow: true, forceEmpty: true, initialStartup: true }); // new window if "-n" was used without paths
            }
            else if (global.macOpenFiles && global.macOpenFiles.length && (!args._ || !args._.length)) {
                this.windowsMainService.open({ context: windows_1.OpenContext.DOCK, cli: args, pathsToOpen: global.macOpenFiles, initialStartup: true }); // mac: open-file event received on startup
            }
            else {
                this.windowsMainService.open({ context: context, cli: args, forceNewWindow: args['new-window'] || (!args._.length && args['unity-launch']), diffMode: args.diff, initialStartup: true }); // default: read paths from cli
            }
        };
        VSCodeApplication.prototype.afterWindowOpen = function (accessor) {
            var _this = this;
            var appInstantiationService = accessor.get(instantiation_1.IInstantiationService);
            // Setup Windows mutex
            var windowsMutex = null;
            if (platform.isWindows) {
                try {
                    var Mutex_1 = require.__$__nodeRequire('windows-mutex').Mutex;
                    windowsMutex = new Mutex_1(product_1.default.win32MutexName);
                    this.toDispose.push({ dispose: function () { return windowsMutex.release(); } });
                }
                catch (e) {
                    // noop
                }
            }
            // Install Menu
            appInstantiationService.createInstance(menus_1.VSCodeMenu);
            // Jump List
            this.windowsMainService.updateWindowsJumpList();
            this.windowsMainService.onRecentPathsChange(function () { return _this.windowsMainService.updateWindowsJumpList(); });
            // Start shared process here
            this.sharedProcess.spawn();
        };
        VSCodeApplication.prototype.dispose = function () {
            this.toDispose = lifecycle_2.dispose(this.toDispose);
        };
        return VSCodeApplication;
    }());
    VSCodeApplication = __decorate([
        __param(2, instantiation_1.IInstantiationService),
        __param(3, log_1.ILogService),
        __param(4, environment_1.IEnvironmentService),
        __param(5, lifecycle_1.ILifecycleService),
        __param(6, configuration_1.IConfigurationService),
        __param(7, storage_1.IStorageService)
    ], VSCodeApplication);
    exports.VSCodeApplication = VSCodeApplication;
});

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(__m[139/*vs/code/electron-main/main*/], __M([1/*require*/,0/*exports*/,10/*electron*/,8/*vs/base/common/objects*/,5/*vs/base/common/platform*/,52/*vs/platform/environment/node/argv*/,51/*vs/base/node/pfs*/,55/*vs/code/electron-main/paths*/,31/*vs/code/electron-main/lifecycle*/,54/*vs/base/parts/ipc/node/ipc.net*/,2/*vs/base/common/winjs.base*/,60/*vs/code/electron-main/launch*/,87/*vs/platform/instantiation/common/instantiationService*/,44/*vs/platform/instantiation/common/serviceCollection*/,50/*vs/platform/instantiation/common/descriptors*/,25/*vs/code/electron-main/log*/,27/*vs/code/electron-main/storage*/,42/*vs/platform/backup/common/backup*/,85/*vs/platform/backup/electron-main/backupMainService*/,13/*vs/platform/environment/common/environment*/,95/*vs/platform/environment/node/environmentService*/,12/*vs/platform/configuration/common/configuration*/,101/*vs/platform/configuration/node/configurationService*/,39/*vs/platform/request/node/request*/,75/*vs/platform/request/electron-main/requestService*/,32/*vs/platform/url/common/url*/,110/*vs/platform/url/electron-main/urlService*/,38/*original-fs*/,80/*vs/code/electron-main/app*/]), function (require, exports, electron_1, objects_1, platform, argv_1, pfs_1, paths_1, lifecycle_1, ipc_net_1, winjs_base_1, launch_1, instantiationService_1, serviceCollection_1, descriptors_1, log_1, storage_1, backup_1, backupMainService_1, environment_1, environmentService_1, configuration_1, configurationService_1, request_1, requestService_1, url_1, urlService_1, fs, app_1) {
    'use strict';
    Object.defineProperty(exports, "__esModule", { value: true });
    function createServices(args) {
        var services = new serviceCollection_1.ServiceCollection();
        services.set(environment_1.IEnvironmentService, new descriptors_1.SyncDescriptor(environmentService_1.EnvironmentService, args, process.execPath));
        services.set(log_1.ILogService, new descriptors_1.SyncDescriptor(log_1.MainLogService));
        services.set(lifecycle_1.ILifecycleService, new descriptors_1.SyncDescriptor(lifecycle_1.LifecycleService));
        services.set(storage_1.IStorageService, new descriptors_1.SyncDescriptor(storage_1.StorageService));
        services.set(configuration_1.IConfigurationService, new descriptors_1.SyncDescriptor(configurationService_1.ConfigurationService));
        services.set(request_1.IRequestService, new descriptors_1.SyncDescriptor(requestService_1.RequestService));
        services.set(url_1.IURLService, new descriptors_1.SyncDescriptor(urlService_1.URLService, args['open-url']));
        services.set(backup_1.IBackupMainService, new descriptors_1.SyncDescriptor(backupMainService_1.BackupMainService));
        return new instantiationService_1.InstantiationService(services, true);
    }
    function createPaths(environmentService) {
        var paths = [
            environmentService.appSettingsHome,
            environmentService.extensionsPath,
            environmentService.nodeCachedDataDir
        ];
        return winjs_base_1.TPromise.join(paths.map(function (p) { return p && pfs_1.mkdirp(p); }));
    }
    function setupIPC(accessor) {
        var logService = accessor.get(log_1.ILogService);
        var environmentService = accessor.get(environment_1.IEnvironmentService);
        function allowSetForegroundWindow(service) {
            var promise = winjs_base_1.TPromise.as(void 0);
            if (platform.isWindows) {
                promise = service.getMainProcessId()
                    .then(function (processId) {
                    logService.log('Sending some foreground love to the running instance:', processId);
                    try {
                        var allowSetForegroundWindow_1 = require.__$__nodeRequire('windows-foreground-love').allowSetForegroundWindow;
                        allowSetForegroundWindow_1(processId);
                    }
                    catch (e) {
                        // noop
                    }
                });
            }
            return promise;
        }
        function setup(retry) {
            return ipc_net_1.serve(environmentService.mainIPCHandle).then(function (server) {
                if (platform.isMacintosh) {
                    electron_1.app.dock.show(); // dock might be hidden at this case due to a retry
                }
                return server;
            }, function (err) {
                if (err.code !== 'EADDRINUSE') {
                    return winjs_base_1.TPromise.wrapError(err);
                }
                // Since we are the second instance, we do not want to show the dock
                if (platform.isMacintosh) {
                    electron_1.app.dock.hide();
                }
                // there's a running instance, let's connect to it
                return ipc_net_1.connect(environmentService.mainIPCHandle, 'main').then(function (client) {
                    // Tests from CLI require to be the only instance currently
                    if (environmentService.extensionTestsPath && !environmentService.debugExtensionHost.break) {
                        var msg = 'Running extension tests from the command line is currently only supported if no other instance of Code is running.';
                        console.error(msg);
                        client.dispose();
                        return winjs_base_1.TPromise.wrapError(msg);
                    }
                    logService.log('Sending env to running instance...');
                    var channel = client.getChannel('launch');
                    var service = new launch_1.LaunchChannelClient(channel);
                    return allowSetForegroundWindow(service)
                        .then(function () { return service.start(environmentService.args, process.env); })
                        .then(function () { return client.dispose(); })
                        .then(function () { return winjs_base_1.TPromise.wrapError('Sent env to running instance. Terminating...'); });
                }, function (err) {
                    if (!retry || platform.isWindows || err.code !== 'ECONNREFUSED') {
                        return winjs_base_1.TPromise.wrapError(err);
                    }
                    // it happens on Linux and OS X that the pipe is left behind
                    // let's delete it, since we can't connect to it
                    // and the retry the whole thing
                    try {
                        fs.unlinkSync(environmentService.mainIPCHandle);
                    }
                    catch (e) {
                        logService.log('Fatal error deleting obsolete instance handle', e);
                        return winjs_base_1.TPromise.wrapError(e);
                    }
                    return setup(false);
                });
            });
        }
        return setup(true);
    }
    function quit(accessor, errorOrMessage) {
        var logService = accessor.get(log_1.ILogService);
        var lifecycleService = accessor.get(lifecycle_1.ILifecycleService);
        var exitCode = 0;
        if (typeof errorOrMessage === 'string') {
            logService.log(errorOrMessage);
        }
        else if (errorOrMessage) {
            exitCode = 1; // signal error to the outside
            if (errorOrMessage.stack) {
                console.error(errorOrMessage.stack);
            }
            else {
                console.error('Startup error: ' + errorOrMessage.toString());
            }
        }
        lifecycleService.kill(exitCode);
    }
    function main() {
        var args;
        try {
            args = argv_1.parseMainProcessArgv(process.argv);
            args = paths_1.validatePaths(args);
        }
        catch (err) {
            console.error(err.message);
            electron_1.app.exit(1);
            return;
        }
        var instantiationService = createServices(args);
        return instantiationService.invokeFunction(function (accessor) {
            // Patch `process.env` with the instance's environment
            var environmentService = accessor.get(environment_1.IEnvironmentService);
            var instanceEnv = {
                VSCODE_PID: String(process.pid),
                VSCODE_IPC_HOOK: environmentService.mainIPCHandle,
                VSCODE_NLS_CONFIG: process.env['VSCODE_NLS_CONFIG']
            };
            objects_1.assign(process.env, instanceEnv);
            // Startup
            return instantiationService.invokeFunction(function (a) { return createPaths(a.get(environment_1.IEnvironmentService)); })
                .then(function () { return instantiationService.invokeFunction(setupIPC); })
                .then(function (mainIpcServer) {
                var app = instantiationService.createInstance(app_1.VSCodeApplication, mainIpcServer, instanceEnv);
                app.startup();
            });
        }).done(null, function (err) { return instantiationService.invokeFunction(quit, err); });
    }
    main();
});

}).call(this);
//# sourceMappingURL=main.js.map
