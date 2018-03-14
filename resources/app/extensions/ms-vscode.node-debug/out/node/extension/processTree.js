/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path_1 = require("path");
class ProcessTreeNode {
    constructor(pid, ppid, args) {
        this.pid = pid;
        this.ppid = ppid;
        this.args = args;
    }
}
exports.ProcessTreeNode = ProcessTreeNode;
function getProcessTree(rootPid, asTree = false) {
    const map = new Map();
    map.set(0, new ProcessTreeNode(0, 0, ''));
    // returns a function that aggregates chunks of data until one or more complete lines are received and passes them to a callback.
    function lines(callback) {
        let unfinished = ''; // unfinished last line of chunk
        return (data) => {
            const lines = data.toString().split(/\r?\n/);
            const finishedLines = lines.slice(0, lines.length - 1);
            finishedLines[0] = unfinished + finishedLines[0]; // complete previous unfinished line
            unfinished = lines[lines.length - 1]; // remember unfinished last line of this chunk for next round
            for (const s of finishedLines) {
                callback(s);
            }
        };
    }
    function finish(rootPid) {
        const values = map.values();
        for (const p of values) {
            const parent = map.get(p.ppid);
            if (parent) {
                if (!parent.children) {
                    parent.children = [];
                }
                parent.children.push(p);
            }
        }
        if (!isNaN(rootPid) && rootPid > 0) {
            return map.get(rootPid);
        }
        return map.get(0);
    }
    return new Promise((resolve, reject) => {
        let proc;
        if (process.platform === 'win32') {
            const CMD_PAT = /^(.+)\s+([0-9]+)\s+([0-9]+)$/;
            const wmic = path_1.join(process.env['WINDIR'] || 'C:\\Windows', 'System32', 'wbem', 'WMIC.exe');
            proc = child_process_1.spawn(wmic, ['process', 'get', 'CommandLine,ParentProcessId,ProcessId']);
            proc.stdout.setEncoding('utf8');
            proc.stdout.on('data', lines(line => {
                let matches = CMD_PAT.exec(line.trim());
                if (matches && matches.length === 4) {
                    const pid = parseInt(matches[3]);
                    map.set(pid, new ProcessTreeNode(pid, parseInt(matches[2]), matches[1].trim()));
                }
            }));
        }
        else {
            const CMD_PAT = /^\s*([0-9]+)\s+([0-9]+)\s+(.+)$/;
            proc = child_process_1.spawn('/bin/ps', ['-ax', '-o', 'pid=,ppid=,command=']);
            proc.stdout.setEncoding('utf8');
            proc.stdout.on('data', lines(line => {
                let matches = CMD_PAT.exec(line.trim());
                if (matches && matches.length === 4) {
                    const pid = parseInt(matches[1]);
                    map.set(pid, new ProcessTreeNode(pid, parseInt(matches[2]), matches[3]));
                }
            }));
        }
        proc.on('error', err => {
            reject(err.message);
        });
        proc.stderr.setEncoding('utf8');
        proc.stderr.on('data', data => {
            reject(data.toString());
        });
        proc.on('close', (code, signal) => {
            if (code === 0) {
                resolve(finish(rootPid));
            }
            else if (code > 0) {
                reject(`process terminated with exit code: ${code}`);
            }
            if (signal) {
                reject(`process terminated with signal: ${signal}`);
            }
        });
        proc.on('exit', (code, signal) => {
            if (code === 0) {
                //resolve(finish(rootPid));
            }
            else if (code > 0) {
                reject(`process terminated with exit code: ${code}`);
            }
            if (signal) {
                reject(`process terminated with signal: ${signal}`);
            }
        });
    });
}
exports.getProcessTree = getProcessTree;

//# sourceMappingURL=../../../out/node/extension/processTree.js.map
