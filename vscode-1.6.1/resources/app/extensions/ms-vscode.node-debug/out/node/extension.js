/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
'use strict';
var vscode = require('vscode');
var child_process_1 = require('child_process');
var path_1 = require('path');
var nls = require('vscode-nls');
var fs = require('fs');
var localize = nls.config(process.env.VSCODE_NLS_CONFIG)(__filename);
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
            child_process_1.exec('ps -ax -o pid=,command=', function (err, stdout, stderr) {
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
var initialConfigurations = [
    {
        name: localize(0, null),
        type: 'node',
        request: 'launch',
        program: '${workspaceRoot}/app.js',
        stopOnEntry: false,
        args: [],
        cwd: '${workspaceRoot}',
        preLaunchTask: null,
        runtimeExecutable: null,
        runtimeArgs: ['--nolazy'],
        env: {
            'NODE_ENV': 'development'
        },
        console: 'internalConsole',
        sourceMaps: false,
        outFiles: []
    },
    {
        name: localize(1, null),
        type: 'node',
        request: 'attach',
        port: 5858,
        address: 'localhost',
        restart: false,
        sourceMaps: false,
        outFiles: [],
        localRoot: '${workspaceRoot}',
        remoteRoot: null
    },
    {
        name: localize(2, null),
        type: 'node',
        request: 'attach',
        processId: '${command.PickProcess}',
        port: 5858,
        sourceMaps: false,
        outFiles: []
    }
];
function activate(context) {
    var pickNodeProcess = vscode.commands.registerCommand('extension.pickNodeProcess', function () {
        return listProcesses().then(function (items) {
            var options = {
                placeHolder: 'Pick the node.js or gulp process to attach to',
                matchOnDescription: true,
                matchOnDetail: true
            };
            return vscode.window.showQuickPick(items, options).then(function (item) {
                return item ? item.pid : null;
            });
        });
    });
    context.subscriptions.push(pickNodeProcess);
    context.subscriptions.push(vscode.commands.registerCommand('extension.provideInitialConfigurations', function () {
        var packageJsonPath = path_1.join(vscode.workspace.rootPath, 'package.json');
        var program = null;
        try {
            var jsonContent = fs.readFileSync(packageJsonPath, 'utf8');
            var jsonObject = JSON.parse(jsonContent);
            if (jsonObject.main) {
                program = jsonObject.main;
            }
            else if (jsonObject.scripts && typeof jsonObject.scripts.start === 'string') {
                program = jsonObject.scripts.start.split(' ').pop();
            }
        }
        catch (error) { }
        if (program) {
            program = path_1.isAbsolute(program) ? program : path_1.join('${workspaceRoot}', program);
            initialConfigurations.forEach(function (config) {
                if (config['program']) {
                    config['program'] = program;
                }
            });
        }
        return JSON.stringify(initialConfigurations);
    }));
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;

//# sourceMappingURL=../../out/node/extension.js.map
