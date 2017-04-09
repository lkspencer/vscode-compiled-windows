/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var vscode = require("vscode");
var child_process_1 = require("child_process");
var path_1 = require("path");
var nls = require("vscode-nls");
var fs = require("fs");
var localize = nls.config(process.env.VSCODE_NLS_CONFIG)(__filename);
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.node-debug.pickLoadedScript', function () { return pickLoadedScript(); }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.pickNodeProcess', function () { return pickProcess(); }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.node-debug.provideInitialConfigurations', function () { return createInitialConfigurations(); }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.node-debug.startSession', function (config) { return startSession(config); }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
function pickLoadedScript() {
    return listLoadedScripts().then(function (items) {
        var options = {
            placeHolder: localize(0, null),
            matchOnDescription: true,
            matchOnDetail: true
        };
        if (items === undefined) {
            items = [{ label: localize(1, null), description: '' }];
        }
        vscode.window.showQuickPick(items, options).then(function (item) {
            if (item && item.source) {
                var uri = vscode.Uri.parse("debug:" + item.source.path);
                vscode.workspace.openTextDocument(uri).then(function (doc) { return vscode.window.showTextDocument(doc); });
            }
        });
    });
}
function listLoadedScripts() {
    return vscode.commands.executeCommand('workbench.customDebugRequest', 'getLoadedScripts', {}).then(function (reply) {
        if (reply && reply.success) {
            return reply.body.loadedScripts;
        }
        else {
            return undefined;
        }
    });
}
function pickProcess() {
    return listProcesses().then(function (items) {
        var options = {
            placeHolder: localize(2, null),
            matchOnDescription: true,
            matchOnDetail: true
        };
        return vscode.window.showQuickPick(items, options).then(function (item) {
            return item ? item.pid : null;
        });
    });
}
function listProcesses() {
    return new Promise(function (resolve, reject) {
        var NODE = new RegExp('^(?:node|iojs|gulp)$', 'i');
        if (process.platform === 'win32') {
            var CMD_PID_1 = new RegExp('^(.+) ([0-9]+)$');
            var EXECUTABLE_ARGS_1 = new RegExp('^(?:"([^"]+)"|([^ ]+))(?: (.+))?$');
            var stdout_1 = '';
            var stderr_1 = '';
            var cmd = child_process_1.spawn('cmd');
            cmd.stdout.on('data', function (data) {
                stdout_1 += data.toString();
            });
            cmd.stderr.on('data', function (data) {
                stderr_1 += data.toString();
            });
            cmd.on('exit', function () {
                if (stderr_1.length > 0) {
                    reject(stderr_1);
                }
                else {
                    var items = [];
                    var lines = stdout_1.split('\r\n');
                    for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                        var line = lines_1[_i];
                        var matches = CMD_PID_1.exec(line.trim());
                        if (matches && matches.length === 3) {
                            var cmd_1 = matches[1].trim();
                            var pid = matches[2];
                            // remove leading device specifier
                            if (cmd_1.indexOf('\\??\\') === 0) {
                                cmd_1 = cmd_1.replace('\\??\\', '');
                            }
                            var executable_path = void 0;
                            var args = void 0;
                            var matches2 = EXECUTABLE_ARGS_1.exec(cmd_1);
                            if (matches2 && matches2.length >= 2) {
                                if (matches2.length >= 3) {
                                    executable_path = matches2[1] || matches2[2];
                                }
                                else {
                                    executable_path = matches2[1];
                                }
                                if (matches2.length === 4) {
                                    args = matches2[3];
                                }
                            }
                            if (executable_path) {
                                var executable_name = path_1.basename(executable_path);
                                if (!NODE.test(executable_name)) {
                                    continue;
                                }
                                items.push({
                                    label: executable_name,
                                    description: pid,
                                    detail: cmd_1,
                                    pid: pid
                                });
                            }
                        }
                    }
                    ;
                    resolve(items);
                }
            });
            cmd.stdin.write('wmic process get ProcessId,CommandLine \n');
            cmd.stdin.end();
        }
        else {
            var PID_CMD_1 = new RegExp('^\\s*([0-9]+)\\s+(.+)$');
            var MAC_APPS_1 = new RegExp('^.*/(.*).(?:app|bundle)/Contents/.*$');
            child_process_1.exec('ps -ax -o pid=,command=', { maxBuffer: 1000 * 1024 }, function (err, stdout, stderr) {
                if (err || stderr) {
                    reject(err || stderr.toString());
                }
                else {
                    var items = [];
                    var lines = stdout.toString().split('\n');
                    for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
                        var line = lines_2[_i];
                        var matches = PID_CMD_1.exec(line);
                        if (matches && matches.length === 3) {
                            var pid = matches[1];
                            var cmd = matches[2];
                            var parts = cmd.split(' '); // this will break paths with spaces
                            var executable_path = parts[0];
                            var executable_name = path_1.basename(executable_path);
                            if (!NODE.test(executable_name)) {
                                continue;
                            }
                            var application = cmd;
                            // try to show the correct name for OS X applications and bundles
                            var matches2 = MAC_APPS_1.exec(cmd);
                            if (matches2 && matches2.length === 2) {
                                application = matches2[1];
                            }
                            else {
                                application = executable_name;
                            }
                            items.unshift({
                                label: application,
                                description: pid,
                                detail: cmd,
                                pid: pid
                            });
                        }
                    }
                    resolve(items);
                }
            });
        }
    });
}
//---- extension.node-debug.provideInitialConfigurations
/*
 * default configuration for node.js
 */
var initialConfigurations = [
    {
        type: 'node',
        request: 'launch',
        name: localize(3, null),
        program: '${file}'
    },
    {
        type: 'node',
        request: 'attach',
        name: localize(4, null),
        address: 'localhost',
        port: 5858
    }
];
/**
 * returns an initial configuration json as a string
 */
function createInitialConfigurations() {
    var program = vscode.workspace.textDocuments.some(function (document) { return document.languageId === 'typescript'; }) ? '${workspaceRoot}/app.ts' : undefined;
    if (vscode.workspace.rootPath) {
        program = guessProgramFromPackage(vscode.workspace.rootPath);
    }
    if (program) {
        initialConfigurations.forEach(function (config) {
            if (config['program']) {
                config['program'] = program;
            }
        });
    }
    if (vscode.workspace.textDocuments.some(function (document) { return document.languageId === 'typescript' || document.languageId === 'coffeescript'; })) {
        initialConfigurations.forEach(function (config) {
            config['outFiles'] = [];
        });
    }
    // Massage the configuration string, add an aditional tab and comment out processId.
    // Add an aditional empty line between attributes which the user should not edit.
    var configurationsMassaged = JSON.stringify(initialConfigurations, null, '\t').replace(',\n\t\t"processId', '\n\t\t//"processId')
        .split('\n').map(function (line) { return '\t' + line; }).join('\n').trim();
    return [
        '{',
        '\t// Use IntelliSense to learn about possible Node.js debug attributes.',
        '\t// Hover to view descriptions of existing attributes.',
        '\t// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387',
        '\t"version": "0.2.0",',
        '\t"configurations": ' + configurationsMassaged,
        '}'
    ].join('\n');
}
/*
 * try to find the entry point ('main') from the package.json
 */
function guessProgramFromPackage(folderPath) {
    var program;
    try {
        var packageJsonPath = path_1.join(folderPath, 'package.json');
        var jsonContent = fs.readFileSync(packageJsonPath, 'utf8');
        var jsonObject = JSON.parse(jsonContent);
        if (jsonObject.main) {
            program = jsonObject.main;
        }
        else if (jsonObject.scripts && typeof jsonObject.scripts.start === 'string') {
            // assume a start script of the form 'node server.js'
            program = jsonObject.scripts.start.split(' ').pop();
        }
        if (program) {
            program = path_1.isAbsolute(program) ? program : path_1.join('${workspaceRoot}', program);
        }
    }
    catch (error) {
        // silently ignore
    }
    return program;
}
//---- extension.node-debug.startSession
// For launch, use inspector protocol starting with v8 because it's stable after that version.
var InspectorMinNodeVersionLaunch = 80000;
/**
 * The result type of the startSession command.
 */
var StartSessionResult = (function () {
    function StartSessionResult() {
    }
    return StartSessionResult;
}());
;
function startSession(config) {
    if (Object.keys(config).length === 0) {
        config.type = 'node';
        config.name = 'Launch';
        config.request = 'launch';
        if (vscode.workspace.rootPath) {
            // folder case: try to find entry point in package.json
            config.program = guessProgramFromPackage(vscode.workspace.rootPath);
        }
        if (!config.program) {
            // 'no folder' case (or no program found)
            var editor = vscode.window.activeTextEditor;
            if (editor && editor.document.languageId === 'javascript') {
                config.program = editor.document.fileName;
            }
            else {
                return {
                    status: 'initialConfiguration' // let VS Code create an initial configuration
                };
            }
        }
    }
    // make sure that 'launch' configs have a 'cwd' attribute set
    if (config.request === 'launch' && !config.cwd) {
        if (vscode.workspace.rootPath) {
            config.cwd = vscode.workspace.rootPath;
        }
        else if (config.program) {
            // derive 'cwd' from 'program'
            config.cwd = path_1.dirname(config.program);
        }
    }
    // determine what protocol to use
    var fixConfig = Promise.resolve();
    switch (config.protocol) {
        case 'legacy':
            config.type = 'node';
            break;
        case 'inspector':
            config.type = 'node2';
            break;
        case 'auto':
        default:
            config.type = 'node';
            switch (config.request) {
                case 'attach':
                    fixConfig = getProtocolForAttach(config).then(function (protocol) {
                        if (protocol === 'inspector') {
                            config.type = 'node2';
                        }
                    });
                    break;
                case 'launch':
                    if (config.runtimeExecutable) {
                        log(localize(5, null));
                    }
                    else {
                        // only determine version if no runtimeExecutable is set (and 'node' on PATH is used)
                        var result = child_process_1.spawnSync('node', ['--version']);
                        var semVerString = result.stdout.toString();
                        if (semVerString) {
                            if (semVerStringToInt(semVerString) >= InspectorMinNodeVersionLaunch) {
                                config.type = 'node2';
                                log(localize(6, null, semVerString.trim()));
                            }
                            else {
                                log(localize(7, null, semVerString.trim()));
                            }
                        }
                        else {
                            log(localize(8, null));
                        }
                    }
                    break;
                default:
                    // should not happen
                    break;
            }
            break;
    }
    fixConfig.then(function () {
        vscode.commands.executeCommand('vscode.startDebug', config);
    });
    return {
        status: 'ok'
    };
}
function log(message) {
    vscode.commands.executeCommand('debug.logToDebugConsole', message + '\n');
}
/**
 * Detect which debug protocol is being used for a running node process.
 */
function getProtocolForAttach(config) {
    var address = config.address || '127.0.0.1';
    var port = config.port;
    if (config.processId) {
        // this is only supported for legacy protocol
        log(localize(9, null));
        return Promise.resolve('legacy');
    }
    var socket = new net.Socket();
    var cleanup = function () {
        try {
            socket.write("\"Content-Length: 50\r\n\r\n{\"command\":\"disconnect\",\"type\":\"request\",\"seq\":2}\"");
            socket.end();
        }
        catch (e) {
            // ignore failure
        }
    };
    return new Promise(function (resolve, reject) {
        socket.once('data', function (data) {
            var reason;
            var protocol;
            var dataStr = data.toString();
            if (dataStr.indexOf('WebSockets request was expected') >= 0) {
                reason = localize(10, null);
                protocol = 'inspector';
            }
            else {
                reason = localize(11, null);
                protocol = 'legacy';
            }
            resolve({ reason: reason, protocol: protocol });
        });
        socket.once('error', function (err) {
            reject(err);
        });
        socket.connect(port, address);
        socket.on('connect', function () {
            // Send a safe request to trigger a response from the inspector protocol
            socket.write("Content-Length: 102\r\n\r\n{\"command\":\"evaluate\",\"arguments\":{\"expression\":\"process.pid\",\"global\":true},\"type\":\"request\",\"seq\":1}");
        });
        setTimeout(function () {
            // No data or error received? Bail and let the debug adapter handle it.
            reject(new Error('timeout'));
        }, 2000);
    }).catch(function (err) {
        return {
            reason: localize(12, null, err.toString()),
            protocol: 'legacy'
        };
    }).then(function (result) {
        cleanup();
        log(result.reason);
        return result.protocol;
    });
}
/**
 * convert the 3 parts of a semVer string into a single number
 */
function semVerStringToInt(vString) {
    var match = vString.match(/v(\d+)\.(\d+)\.(\d+)/);
    if (match && match.length === 4) {
        return (parseInt(match[1]) * 100 + parseInt(match[2])) * 100 + parseInt(match[3]);
    }
    return -1;
}

//# sourceMappingURL=../../out/node/extension.js.map
