/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";
var path = require('path');
var fs = require('fs');
var cp = require('child_process');
var NODE_SHEBANG_MATCHER = new RegExp('#! */usr/bin/env +node');
function isJavaScript(aPath) {
    var name = path.basename(aPath).toLowerCase();
    if (name.endsWith('.js')) {
        return true;
    }
    try {
        var buffer = new Buffer(30);
        var fd = fs.openSync(aPath, 'r');
        fs.readSync(fd, buffer, 0, buffer.length, 0);
        fs.closeSync(fd);
        var line = buffer.toString();
        if (NODE_SHEBANG_MATCHER.test(line)) {
            return true;
        }
    }
    catch (e) {
    }
    return false;
}
exports.isJavaScript = isJavaScript;
function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}
exports.random = random;
/**
 * Placeholder localize function
 */
function localize(id, msg) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    args.forEach(function (arg, i) {
        msg = msg.replace(new RegExp("\\{" + i + "\\}", 'g'), arg);
    });
    return msg;
}
exports.localize = localize;
function killTree(processId) {
    if (process.platform === 'win32') {
        var TASK_KILL = 'C:\\Windows\\System32\\taskkill.exe';
        // when killing a process in Windows its child processes are *not* killed but become root processes.
        // Therefore we use TASKKILL.EXE
        try {
            cp.execSync(TASK_KILL + " /F /T /PID " + processId);
        }
        catch (err) {
        }
    }
    else {
        // on linux and OS X we kill all direct and indirect child processes as well
        try {
            var cmd = path.join(__dirname, './terminateProcess.sh');
            cp.spawnSync(cmd, [processId.toString()]);
        }
        catch (err) {
        }
    }
}
exports.killTree = killTree;
function isOnPath(program) {
    if (process.platform === 'win32') {
        var WHERE = 'C:\\Windows\\System32\\where.exe';
        try {
            if (fs.existsSync(WHERE)) {
                cp.execSync(WHERE + " " + program);
            }
            else {
            }
            return true;
        }
        catch (Exception) {
        }
    }
    else {
        var WHICH = '/usr/bin/which';
        try {
            if (fs.existsSync(WHICH)) {
                cp.execSync(WHICH + " '" + program + "'");
            }
            else {
            }
            return true;
        }
        catch (Exception) {
        }
    }
    return false;
}
exports.isOnPath = isOnPath;
function trimLastNewline(msg) {
    return msg.replace(/(\n|\r\n)$/, '');
}
exports.trimLastNewline = trimLastNewline;

//# sourceMappingURL=utils.js.map
