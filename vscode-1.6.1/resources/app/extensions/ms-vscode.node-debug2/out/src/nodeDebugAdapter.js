/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var vscode_chrome_debug_core_1 = require('vscode-chrome-debug-core');
var vscode_debugadapter_1 = require('vscode-debugadapter');
var path = require('path');
var fs = require('fs');
var cp = require('child_process');
var pathUtils = require('./pathUtils');
var utils = require('./utils');
var utils_1 = require('./utils');
var errors = require('./errors');
var NodeDebugAdapter = (function (_super) {
    __extends(NodeDebugAdapter, _super);
    function NodeDebugAdapter() {
        _super.apply(this, arguments);
        // Flags relevant during init
        this._continueAfterConfigDone = true;
        this._waitingForEntryPauseEvent = true;
        this._finishedConfig = false;
    }
    NodeDebugAdapter.prototype.initialize = function (args) {
        this._supportsRunInTerminalRequest = args.supportsRunInTerminalRequest;
        return _super.prototype.initialize.call(this, args);
    };
    NodeDebugAdapter.prototype.launch = function (args) {
        var _this = this;
        _super.prototype.launch.call(this, args);
        var port = args.port || utils.random(3000, 50000);
        var runtimeExecutable = args.runtimeExecutable;
        if (runtimeExecutable) {
            if (!path.isAbsolute(runtimeExecutable)) {
                return this.getRelativePathErrorResponse('runtimeExecutable', runtimeExecutable);
            }
            if (!fs.existsSync(runtimeExecutable)) {
                return this.getNotExistErrorResponse('runtimeExecutable', runtimeExecutable);
            }
        }
        else {
            if (!utils.isOnPath(NodeDebugAdapter.NODE)) {
                return Promise.reject(errors.runtimeNotFound(NodeDebugAdapter.NODE));
            }
            // use node from PATH
            runtimeExecutable = NodeDebugAdapter.NODE;
        }
        var programPath = args.program;
        if (programPath) {
            if (!path.isAbsolute(programPath)) {
                return this.getRelativePathErrorResponse('program', programPath);
            }
            if (!fs.existsSync(programPath)) {
                return this.getNotExistErrorResponse('program', programPath);
            }
            programPath = path.normalize(programPath);
            if (pathUtils.normalizeDriveLetter(programPath) !== pathUtils.realPath(programPath)) {
                vscode_chrome_debug_core_1.logger.log(utils_1.localize('program.path.case.mismatch.warning', "Program path uses differently cased character as file on disk; this might result in breakpoints not being hit."), /*forceLog=*/ true);
            }
        }
        else {
            return this.getAttributeMissingErrorResponse('program');
        }
        return this.resolveProgramPath(programPath, args.sourceMaps).then(function (programPath) {
            var program;
            var cwd = args.cwd;
            if (cwd) {
                if (!path.isAbsolute(cwd)) {
                    return _this.getRelativePathErrorResponse('cwd', cwd);
                }
                if (!fs.existsSync(cwd)) {
                    return _this.getNotExistErrorResponse('cwd', cwd);
                }
                // if working dir is given and if the executable is within that folder, we make the executable path relative to the working dir
                program = path.relative(cwd, programPath);
            }
            else {
                // if no working dir given, we use the direct folder of the executable
                cwd = path.dirname(programPath);
                program = path.basename(programPath);
            }
            var runtimeArgs = args.runtimeArgs || [];
            var programArgs = args.args || [];
            var launchArgs = [runtimeExecutable];
            if (!args.noDebug) {
                launchArgs.push("--inspect=" + port);
            }
            // Always stop on entry to set breakpoints
            launchArgs.push('--debug-brk');
            _this._continueAfterConfigDone = !args.stopOnEntry;
            launchArgs = launchArgs.concat(runtimeArgs, [program], programArgs);
            var launchP;
            if (args.console === 'integratedTerminal' || args.console === 'externalTerminal') {
                var termArgs = {
                    kind: args.console === 'integratedTerminal' ? 'integrated' : 'external',
                    title: utils_1.localize('node.console.title', "Node Debug Console"),
                    cwd: cwd,
                    args: launchArgs,
                    env: args.env
                };
                launchP = _this.launchInTerminal(termArgs);
            }
            else if (!args.console || args.console === 'internalConsole') {
                // merge environment variables into a copy of the process.env
                var env = Object.assign({}, process.env, args.env);
                launchP = _this.launchInInternalConsole(runtimeExecutable, launchArgs.slice(1), { cwd: cwd, env: env });
            }
            else {
                return Promise.reject(errors.unknownConsoleType(args.console));
            }
            return launchP
                .then(function () {
                return args.noDebug ?
                    Promise.resolve() :
                    _this.doAttach(port, undefined, args.address, args.timeout);
            });
        });
    };
    NodeDebugAdapter.prototype.attach = function (args) {
        this._restartMode = args.restart;
        return _super.prototype.attach.call(this, args);
    };
    NodeDebugAdapter.prototype.doAttach = function (port, targetUrl, address, timeout) {
        var _this = this;
        return _super.prototype.doAttach.call(this, port, targetUrl, address, timeout)
            .then(function () {
            _this.beginWaitingForDebuggerPaused();
            _this.getNodeProcessDetailsIfNeeded();
        });
    };
    NodeDebugAdapter.prototype.launchInTerminal = function (termArgs) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.sendRequest('runInTerminal', termArgs, NodeDebugAdapter.RUNINTERMINAL_TIMEOUT, function (response) {
                if (response.success) {
                    // since node starts in a terminal, we cannot track it with an 'exit' handler
                    // plan for polling after we have gotten the process pid.
                    _this._pollForNodeProcess = true;
                    resolve();
                }
                else {
                    reject(errors.cannotLaunchInTerminal(response.message));
                    _this.terminateSession('terminal error: ' + response.message);
                }
            });
        });
    };
    NodeDebugAdapter.prototype.launchInInternalConsole = function (runtimeExecutable, launchArgs, spawnOpts) {
        var _this = this;
        this.logLaunchCommand(runtimeExecutable, launchArgs);
        var nodeProcess = cp.spawn(runtimeExecutable, launchArgs, spawnOpts);
        return new Promise(function (resolve, reject) {
            _this._nodeProcessId = nodeProcess.pid;
            nodeProcess.on('error', function (error) {
                reject(errors.cannotLaunchDebugTarget(error));
                _this.terminateSession("failed to launch target (" + error + ")");
            });
            nodeProcess.on('exit', function () {
                _this.terminateSession('target exited');
            });
            nodeProcess.on('close', function (code) {
                _this.terminateSession('target closed');
            });
            nodeProcess.stdout.on('data', function (data) {
                var msg = data.toString();
                msg = utils.trimLastNewline(msg);
                vscode_chrome_debug_core_1.logger.log(msg, /*forceLog=*/ true);
            });
            nodeProcess.stderr.on('data', function (data) {
                // Print stderr, but chop off the Chrome-specific message
                var msg = data.toString();
                var chromeMsgIndex = msg.indexOf('To start debugging, open the following URL in Chrome:');
                if (chromeMsgIndex >= 0) {
                    msg = msg.substr(0, chromeMsgIndex).trim();
                }
                msg = utils.trimLastNewline(msg);
                vscode_chrome_debug_core_1.logger.error(msg);
            });
            resolve();
        });
    };
    /**
     * Override so that -core's call on attach will be ignored, and we can wait until the first break when ready to set BPs.
     */
    NodeDebugAdapter.prototype.sendInitializedEvent = function () {
        if (!this._waitingForEntryPauseEvent) {
            _super.prototype.sendInitializedEvent.call(this);
        }
    };
    NodeDebugAdapter.prototype.configurationDone = function () {
        // This message means that all breakpoints have been set by the client. We should be paused at this point.
        // So tell the target to continue, or tell the client that we paused, as needed
        this._finishedConfig = true;
        if (this._continueAfterConfigDone) {
            this._expectingStopReason = undefined;
            this.continue();
        }
        else if (this._entryPauseEvent) {
            this.onDebuggerPaused(this._entryPauseEvent);
        }
        return _super.prototype.configurationDone.call(this);
    };
    NodeDebugAdapter.prototype.killNodeProcess = function () {
        if (this._nodeProcessId && !this._attachMode) {
            vscode_chrome_debug_core_1.logger.log('Killing process with id: ' + this._nodeProcessId);
            utils.killTree(this._nodeProcessId);
            this._nodeProcessId = 0;
        }
    };
    NodeDebugAdapter.prototype.terminateSession = function (reason) {
        var requestRestart = this._restartMode && !this._inShutdown;
        _super.prototype.terminateSession.call(this, reason, requestRestart);
        this.killNodeProcess();
    };
    NodeDebugAdapter.prototype.onDebuggerPaused = function (notification) {
        var _this = this;
        // If we don't have the entry location, this must be the entry pause
        if (this._waitingForEntryPauseEvent) {
            vscode_chrome_debug_core_1.logger.log('Paused on entry');
            this._expectingStopReason = 'entry';
            this._entryPauseEvent = notification;
            this._waitingForEntryPauseEvent = false;
            if (this._attachMode) {
                // In attach mode, and we did pause right away,
                // so assume --debug-brk was set and we should show paused
                this._continueAfterConfigDone = false;
            }
            this.getNodeProcessDetailsIfNeeded()
                .then(function () { return _this.sendInitializedEvent(); });
        }
        else {
            _super.prototype.onDebuggerPaused.call(this, notification);
        }
    };
    NodeDebugAdapter.prototype.resolveProgramPath = function (programPath, sourceMaps) {
        var _this = this;
        return Promise.resolve().then(function () {
            if (!programPath) {
                return programPath;
            }
            if (utils.isJavaScript(programPath)) {
                if (!sourceMaps) {
                    return programPath;
                }
                // if programPath is a JavaScript file and sourceMaps are enabled, we don't know whether
                // programPath is the generated file or whether it is the source (and we need source mapping).
                // Typically this happens if a tool like 'babel' or 'uglify' is used (because they both transpile js to js).
                // We use the source maps to find a 'source' file for the given js file.
                return _this._sourceMapTransformer.getGeneratedPathFromAuthoredPath(programPath).then(function (generatedPath) {
                    if (generatedPath && generatedPath !== programPath) {
                        // programPath must be source because there seems to be a generated file for it
                        vscode_chrome_debug_core_1.logger.log("Launch: program '" + programPath + "' seems to be the source; launch the generated file '" + generatedPath + "' instead");
                        programPath = generatedPath;
                    }
                    else {
                        vscode_chrome_debug_core_1.logger.log("Launch: program '" + programPath + "' seems to be the generated file");
                    }
                    return programPath;
                });
            }
            else {
                // node cannot execute the program directly
                if (!sourceMaps) {
                    return Promise.reject(errors.cannotLaunchBecauseSourceMaps(programPath));
                }
                return _this._sourceMapTransformer.getGeneratedPathFromAuthoredPath(programPath).then(function (generatedPath) {
                    if (!generatedPath) {
                        return Promise.reject(errors.cannotLaunchBecauseOutdir(programPath));
                    }
                    vscode_chrome_debug_core_1.logger.log("Launch: program '" + programPath + "' seems to be the source; launch the generated file '" + generatedPath + "' instead");
                    return generatedPath;
                });
            }
        });
    };
    /**
     * Wait 500ms for the entry pause event, and if it doesn't come, move on with life.
     * During attach, we don't know whether it's paused when attaching.
     */
    NodeDebugAdapter.prototype.beginWaitingForDebuggerPaused = function () {
        var _this = this;
        var count = 10;
        var id = setInterval(function () {
            if (_this._entryPauseEvent || _this._isTerminated) {
                // Got the entry pause, stop waiting
                clearInterval(id);
            }
            else if (--count <= 0) {
                // No entry event, so fake it and continue
                vscode_chrome_debug_core_1.logger.log('Did not get a pause event 500ms after starting, so continuing');
                clearInterval(id);
                _this._continueAfterConfigDone = false;
                _this._waitingForEntryPauseEvent = false;
                _this.getNodeProcessDetailsIfNeeded()
                    .then(function () { return _this.sendInitializedEvent(); });
            }
        }, 50);
    };
    /**
     * Override addBreakpoints, which is called by setBreakpoints to make the actual call to Chrome.
     */
    NodeDebugAdapter.prototype.addBreakpoints = function (url, breakpoints) {
        var _this = this;
        return _super.prototype.addBreakpoints.call(this, url, breakpoints).then(function (responses) {
            if (_this._entryPauseEvent && !_this._finishedConfig) {
                var entryLocation_1 = _this._entryPauseEvent.callFrames[0].location;
                if (_this._continueAfterConfigDone) {
                    var bpAtEntryLocation = responses.some(function (response) {
                        // Don't compare column location, because you can have a bp at col 0, then break at some other column
                        return response.result.actualLocation && response.result.actualLocation.lineNumber === entryLocation_1.lineNumber &&
                            response.result.actualLocation.scriptId === entryLocation_1.scriptId;
                    });
                    if (bpAtEntryLocation) {
                        // There is some initial breakpoint being set to the location where we stopped on entry, so need to pause even if
                        // the stopOnEntry flag is not set
                        vscode_chrome_debug_core_1.logger.log('Got a breakpoint set in the entry location, so will stop even though stopOnEntry is not set');
                        _this._continueAfterConfigDone = false;
                        _this._expectingStopReason = 'breakpoint';
                    }
                }
            }
            return responses;
        });
    };
    NodeDebugAdapter.prototype.getNodeProcessDetailsIfNeeded = function () {
        var _this = this;
        if (this._loggedTargetVersion) {
            return Promise.resolve();
        }
        return this._chromeConnection.runtime_evaluate('[process.pid, process.version]', undefined, undefined, /*returnByValue=*/ true).then(function (response) {
            if (response.error) {
                vscode_chrome_debug_core_1.logger.error('Error evaluating `process.pid`: ' + response.error);
            }
            else if (response.result.exceptionDetails) {
                var details = response.result.exceptionDetails;
                if (details.exception.description.startsWith('ReferenceError: process is not defined')) {
                    vscode_chrome_debug_core_1.logger.verbose('Got expected exception: `process is not defined`. Will try again later.');
                }
                else {
                    vscode_chrome_debug_core_1.logger.error('Exception evaluating `process.pid`: ' + details.exception.description + '. Will try again later.');
                }
            }
            else {
                var value = response.result.result.value;
                if (_this._pollForNodeProcess) {
                    _this._nodeProcessId = value[0];
                    _this.startPollingForNodeTermination();
                }
                _this._loggedTargetVersion = true;
                vscode_chrome_debug_core_1.logger.log('Target node version: ' + value[1]);
            }
        });
    };
    NodeDebugAdapter.prototype.startPollingForNodeTermination = function () {
        var _this = this;
        var intervalId = setInterval(function () {
            try {
                if (_this._nodeProcessId) {
                    // kill with signal=0 just test for whether the proc is alive. It throws if not.
                    process.kill(_this._nodeProcessId, 0);
                }
                else {
                    clearInterval(intervalId);
                }
            }
            catch (e) {
                clearInterval(intervalId);
                _this.terminateSession('Target process is dead');
            }
        }, NodeDebugAdapter.NODE_TERMINATION_POLL_INTERVAL);
    };
    NodeDebugAdapter.prototype.logLaunchCommand = function (executable, args) {
        // print the command to launch the target to the debug console
        var cli = executable + ' ';
        for (var _i = 0, args_1 = args; _i < args_1.length; _i++) {
            var a = args_1[_i];
            if (a.indexOf(' ') >= 0) {
                cli += '\'' + a + '\'';
            }
            else {
                cli += a;
            }
            cli += ' ';
        }
        this.sendEvent(new vscode_debugadapter_1.OutputEvent(cli + '\n', 'console'));
    };
    /**
     * 'Attribute missing' error
     */
    NodeDebugAdapter.prototype.getAttributeMissingErrorResponse = function (attribute) {
        return Promise.reject({
            id: 2005,
            format: utils_1.localize('attribute.missing', "Attribute '{0}' is missing or empty.", attribute)
        });
    };
    /**
     * 'Path does not exist' error
     */
    NodeDebugAdapter.prototype.getNotExistErrorResponse = function (attribute, path) {
        return Promise.reject({
            id: 2007,
            format: utils_1.localize('attribute.path.not.exist', "Attribute '{0}' does not exist ('{1}').", attribute, '{path}'),
            variables: { path: path }
        });
    };
    /**
     * 'Path not absolute' error with 'More Information' link.
     */
    NodeDebugAdapter.prototype.getRelativePathErrorResponse = function (attribute, path) {
        var format = utils_1.localize('attribute.path.not.absolute', "Attribute '{0}' is not absolute ('{1}'); consider adding '{2}' as a prefix to make it absolute.", attribute, '{path}', '${workspaceRoot}/');
        return this.getErrorResponseWithInfoLink(2008, format, { path: path }, 20003);
    };
    /**
     * Send error response with 'More Information' link.
     */
    NodeDebugAdapter.prototype.getErrorResponseWithInfoLink = function (code, format, variables, infoId) {
        return Promise.reject({
            id: code,
            format: format,
            variables: variables,
            showUser: true,
            url: 'http://go.microsoft.com/fwlink/?linkID=534832#_' + infoId.toString(),
            urlLabel: utils_1.localize('more.information', "More Information")
        });
    };
    NodeDebugAdapter.NODE = 'node';
    NodeDebugAdapter.RUNINTERMINAL_TIMEOUT = 5000;
    NodeDebugAdapter.NODE_TERMINATION_POLL_INTERVAL = 3000;
    return NodeDebugAdapter;
}(vscode_chrome_debug_core_1.ChromeDebugAdapter));
exports.NodeDebugAdapter = NodeDebugAdapter;

//# sourceMappingURL=nodeDebugAdapter.js.map
