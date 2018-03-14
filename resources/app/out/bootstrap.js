/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
if(function(){const e=require("path"),r=require("module"),t=e.join(__dirname,"../node_modules"),o=t+".asar",n=r._resolveLookupPaths;r._resolveLookupPaths=function(e,r){const s=n(e,r),c=s[1];for(let e=0,r=c.length;e<r;e++)if(c[e]===t){c.splice(e,0,o);break}return s}}(),process.send&&"true"===process.env.PIPE_LOGGING){var MAX_LENGTH=1e5;function safeToArray(e){var r,t=[],o=[];if(e.length)for(var n=0;n<e.length;n++){if(void 0===e[n])e[n]="undefined";else if(e[n]instanceof Error){var s=e[n];s.stack?e[n]=s.stack:e[n]=s.toString()}o.push(e[n])}if("true"===process.env.VSCODE_LOG_STACK){const e=(new Error).stack;o.push({__$stack:e.split("\n").slice(3).join("\n")})}try{r=JSON.stringify(o,function(e,r){if(r&&"[object Object]"===Object.prototype.toString.call(r)){if(-1!==t.indexOf(r))return Object.create(null);t.push(r)}return r})}catch(e){return"Output omitted for an object that cannot be inspected ("+e.toString()+")"}return r&&r.length>MAX_LENGTH?"Output omitted for a large object that exceeds the limits":r}
function safeSend(e){try{process.send(e)}catch(e){}}"true"===process.env.VERBOSE_LOGGING?(console.log=function(){safeSend({type:"__$console",severity:"log",arguments:safeToArray(arguments)})},console.info=function(){safeSend({type:"__$console",severity:"log",arguments:safeToArray(arguments)})},console.warn=function(){safeSend({type:"__$console",severity:"warn",arguments:safeToArray(arguments)})}):(console.log=function(){},console.warn=function(){},console.info=function(){}),console.error=function(){safeSend({type:"__$console",severity:"error",arguments:safeToArray(arguments)})}}if(!process.env.VSCODE_ALLOW_IO){var stream=require("stream"),writable=new stream.Writable({write:function(){}});process.__defineGetter__("stdout",function(){return writable}),process.__defineGetter__("stderr",function(){return writable}),process.__defineGetter__("stdin",function(){return writable})}if(process.env.VSCODE_HANDLES_UNCAUGHT_ERRORS||process.on("uncaughtException",function(e){
console.error("Uncaught Exception: ",e.toString()),e.stack&&console.error(e.stack)}),process.env.VSCODE_PARENT_PID){const e=Number(process.env.VSCODE_PARENT_PID);"number"!=typeof e||isNaN(e)||setInterval(function(){try{process.kill(e,0)}catch(e){process.exit()}},5e3)}const crashReporterOptionsRaw=process.env.CRASH_REPORTER_START_OPTIONS;if("string"==typeof crashReporterOptionsRaw)try{const e=JSON.parse(crashReporterOptionsRaw);e&&process.crashReporter.start(e)}catch(e){console.error(e)}require("./bootstrap-amd").bootstrap(process.env.AMD_ENTRYPOINT);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/9a199d77c82fcb82f39c68bb33c614af01c111ba/core/bootstrap.js.map
