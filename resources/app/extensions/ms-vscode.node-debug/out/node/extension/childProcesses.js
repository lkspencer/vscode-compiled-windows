/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const nls = require("vscode-nls");
const vscode = require("vscode");
const processTree_1 = require("./processTree");
const localize = nls.loadMessageBundle(__filename);
const POLL_INTERVAL = 1000;
const DEBUG_PORT_PATTERN = /\s--(inspect|debug)-port=(\d+)/;
const DEBUG_FLAGS_PATTERN = /\s--(inspect|debug)(-brk)?(=(\d+))?/;
class Cluster {
    constructor(folder, config) {
        this.folder = folder;
        this.config = config;
        this.pids = new Set();
    }
    startWatching(session) {
        this.session = session;
        setTimeout(_ => {
            // get the process ID from the debuggee
            if (this.session) {
                this.session.customRequest('evaluate', { expression: 'process.pid' }).then(reply => {
                    const rootPid = parseInt(reply.result);
                    this.attachChildProcesses(rootPid);
                }, e => {
                    // 'evaluate' error -> use the fall back strategy
                    this.attachChildProcesses(NaN);
                });
            }
        }, this.session.type === 'node2' ? 500 : 100);
    }
    stopWatching() {
        this.session = undefined;
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = undefined;
        }
    }
    attachChildProcesses(rootPid) {
        this.pollChildProcesses(rootPid, (pid, cmd) => {
            if (!this.pids.has(pid)) {
                this.pids.add(pid);
                attachChildProcess(this.folder, pid, cmd, this.config);
            }
        });
    }
    pollChildProcesses(rootPid, cb) {
        //const start = Date.now();
        findChildProcesses(rootPid, cb).then(_ => {
            //console.log(`duration: ${Date.now() - start}`);
            if (this.session) {
                this.timeoutId = setTimeout(_ => {
                    this.pollChildProcesses(rootPid, cb);
                }, POLL_INTERVAL);
            }
        });
    }
}
const clusters = new Map();
function prepareAutoAttachChildProcesses(folder, config) {
    clusters.set(config.name, new Cluster(folder, config));
}
exports.prepareAutoAttachChildProcesses = prepareAutoAttachChildProcesses;
function startSession(session) {
    const cluster = clusters.get(session.name);
    if (cluster) {
        cluster.startWatching(session);
    }
}
exports.startSession = startSession;
function stopSession(session) {
    const cluster = clusters.get(session.name);
    if (cluster) {
        cluster.stopWatching();
        clusters.delete(session.name);
    }
}
exports.stopSession = stopSession;
function attachChildProcess(folder, pid, cmd, baseConfig) {
    const config = {
        type: 'node',
        request: 'attach',
        name: localize(0, null, pid),
        stopOnEntry: false
    };
    // selectively copy attributes
    if (baseConfig.timeout) {
        config.timeout = baseConfig.timeout;
    }
    if (baseConfig.sourceMaps) {
        config.sourceMaps = baseConfig.sourceMaps;
    }
    if (baseConfig.outFiles) {
        config.outFiles = baseConfig.outFiles;
    }
    if (baseConfig.sourceMapPathOverrides) {
        config.sourceMapPathOverrides = baseConfig.sourceMapPathOverrides;
    }
    if (baseConfig.smartStep) {
        config.smartStep = baseConfig.smartStep;
    }
    if (baseConfig.skipFiles) {
        config.skipFiles = baseConfig.skipFiles;
    }
    if (baseConfig.showAsyncStacks) {
        config.sourceMaps = baseConfig.showAsyncStacks;
    }
    if (baseConfig.trace) {
        config.trace = baseConfig.trace;
    }
    // match --debug, --debug=1234, --debug-brk, debug-brk=1234, --inspect, --inspect=1234, --inspect-brk, --inspect-brk=1234
    let matches = DEBUG_FLAGS_PATTERN.exec(cmd);
    if (matches && matches.length >= 2) {
        // attach via port
        if (matches.length === 5 && matches[4]) {
            config.port = parseInt(matches[4]);
        }
        config.protocol = matches[1] === 'debug' ? 'legacy' : 'inspector';
    }
    else {
        // no port -> try to attach via pid (send SIGUSR1)
        config.processId = String(pid);
    }
    // a debug-port=1234 or --inspect-port=1234 overrides the port
    matches = DEBUG_PORT_PATTERN.exec(cmd);
    if (matches && matches.length === 3) {
        // override port
        config.port = parseInt(matches[2]);
    }
    //log(`attach: ${config.protocol} ${config.port}`);
    vscode.debug.startDebugging(folder, config);
}
function findChildProcesses(rootPid, cb) {
    function walker(node) {
        const matches = DEBUG_PORT_PATTERN.exec(node.args);
        const matches2 = DEBUG_FLAGS_PATTERN.exec(node.args);
        if ((matches && matches.length >= 3) || (matches2 && matches2.length >= 5)) {
            cb(node.pid, node.args);
        }
        for (const child of node.children || []) {
            walker(child);
        }
    }
    return processTree_1.getProcessTree(rootPid).then(tree => {
        for (const child of tree.children || []) {
            walker(child);
        }
    }).catch(err => {
    });
}

//# sourceMappingURL=../../../out/node/extension/childProcesses.js.map
