/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
function log(...args) {
    console.log.apply(console, ['git:', ...args]);
}
exports.log = log;
function dispose(disposables) {
    disposables.forEach(d => d.dispose());
    return [];
}
exports.dispose = dispose;
function toDisposable(dispose) {
    return { dispose };
}
exports.toDisposable = toDisposable;
function combinedDisposable(disposables) {
    return toDisposable(() => dispose(disposables));
}
exports.combinedDisposable = combinedDisposable;
exports.EmptyDisposable = toDisposable(() => null);
function mapEvent(event, map) {
    return (listener, thisArgs = null, disposables) => event(i => listener.call(thisArgs, map(i)), null, disposables);
}
exports.mapEvent = mapEvent;
function filterEvent(event, filter) {
    return (listener, thisArgs = null, disposables) => event(e => filter(e) && listener.call(thisArgs, e), null, disposables);
}
exports.filterEvent = filterEvent;
function anyEvent(...events) {
    return (listener, thisArgs = null, disposables) => combinedDisposable(events.map(event => event(i => listener.call(thisArgs, i), disposables)));
}
exports.anyEvent = anyEvent;
function done(promise) {
    return promise.then(() => void 0, () => void 0);
}
exports.done = done;
function once(event) {
    return (listener, thisArgs = null, disposables) => {
        const result = event(e => {
            result.dispose();
            return listener.call(thisArgs, e);
        }, null, disposables);
        return result;
    };
}
exports.once = once;
function eventToPromise(event) {
    return new Promise(c => once(event)(c));
}
exports.eventToPromise = eventToPromise;
// TODO@Joao: replace with Object.assign
function assign(destination, ...sources) {
    for (const source of sources) {
        Object.keys(source).forEach(key => destination[key] = source[key]);
    }
    return destination;
}
exports.assign = assign;
function uniqBy(arr, fn) {
    const seen = Object.create(null);
    return arr.filter(el => {
        const key = fn(el);
        if (seen[key]) {
            return false;
        }
        seen[key] = true;
        return true;
    });
}
exports.uniqBy = uniqBy;
function groupBy(arr, fn) {
    return arr.reduce((result, el) => {
        const key = fn(el);
        result[key] = [...(result[key] || []), el];
        return result;
    }, Object.create(null));
}
exports.groupBy = groupBy;
function denodeify(fn) {
    return (...args) => new Promise((c, e) => fn(...args, (err, r) => err ? e(err) : c(r)));
}
exports.denodeify = denodeify;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/8076a19fdcab7e1fc1707952d652f0bb6c6db331/extensions\git\out/util.js.map
