/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function onError(e,r){r&&remote.getCurrentWebContents().openDevTools(),console.error("[uncaught exception]: "+e),e.stack&&console.error(e.stack)}function assign(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)}function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,r){return e[r[0]]=decodeURIComponent(r[1]),e},{})}function createScript(e,r){const t=document.createElement("script");t.src=e,t.addEventListener("load",r);const n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.lastChild)}function uriFromPath(e){var r=path.resolve(e).replace(/\\/g,"/");return r.length>0&&"/"!==r.charAt(0)&&(r="/"+r),encodeURI("file://"+r)}function registerListeners(e){var r;if(e){const e=function(e){return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")},t="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",n="darwin"===process.platform?"meta-82":"ctrl-82";r=function(r){const o=e(r);o===t?remote.getCurrentWebContents().toggleDevTools():o===n&&remote.getCurrentWindow().reload()},window.addEventListener("keydown",r)}return process.on("uncaughtException",function(r){onError(r,e)}),function(){r&&(window.removeEventListener("keydown",r),r=void 0)}}function main(){function e(){define("fs",["original-fs"],function(e){return e}),u.stop(),window.MonacoEnvironment={};const e=window.MonacoEnvironment.onNodeCachedData=[];require.config({baseUrl:d,"vs/nls":o,recordStats:!!n.performance,nodeCachedDataDir:n.nodeCachedDataDir,onNodeCachedData:function(){e.push(arguments)},nodeModules:["electron","original-fs","agent-base","anymatch","applicationinsights","arr-diff","arr-flatten","array-unique","arrify","async-each","balanced-match","binary-extensions","brace-expansion","braces","buffer-shims","chokidar","concat-map","core-util-is","debug","emmet","expand-brackets","expand-range","extend","extglob","extract-opts","fast-plist","fd-slicer","filename-regex","fill-range","for-in","for-own","fsevents","gc-signals","getmac","glob-base","glob-parent","graceful-fs","http-proxy-agent","https-proxy-agent","iconv-lite","inherits","is-binary-path","is-buffer","is-dotfile","is-equal-shallow","is-extendable","is-extglob","is-glob","is-number","is-posix-bracket","is-primitive","isarray","isobject","jschardet","kind-of","micromatch","minimatch","minimist","ms","nan","native-keymap","normalize-path","object.omit","oniguruma","parse-glob","path-is-absolute","pend","preserve","process-nextick-args","node-pty","randomatic","readable-stream","readdirp","regex-cache","repeat-element","repeat-string","semver","set-immediate-shim","string_decoder","typechecker","util-deprecate","v8-profiler","vscode-debugprotocol","vscode-ripgrep","vscode-textmate","windows-foreground-love","windows-mutex","winreg","xterm","yauzl","nsfw","assert","buffer","child_process","console","constants","crypto","cluster","dgram","dns","domain","events","fs","http","https","module","net","os","path","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","v8","vm","zlib"]}),o.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(o.pseudo)});const r=window.MonacoEnvironment.timers={isInitialStartup:!!n.isInitialStartup,hasAccessibilitySupport:!!n.accessibilitySupport,start:n.perfStartTime,appReady:n.perfAppReady,windowLoad:n.perfWindowLoadTime,beforeLoadWorkbenchMain:Date.now()},t=startTimer("load:workbench.main");require(["vs/workbench/electron-browser/workbench.main","vs/nls!vs/workbench/electron-browser/workbench.main","vs/css!vs/workbench/electron-browser/workbench.main"],function(){t.stop(),r.afterLoadWorkbenchMain=Date.now(),process.lazyEnv.then(function(){require("vs/workbench/electron-browser/main").startup(n).done(function(){c()},function(e){onError(e,a)})})})}const r=require("electron").webFrame,t=parseURLQueryArgs(),n=JSON.parse(t.config||"{}")||{};assign(process.env,n.userEnv);var o={availableLanguages:{}};const i=process.env.VSCODE_NLS_CONFIG;if(i){process.env.VSCODE_NLS_CONFIG=i;try{o=JSON.parse(i)}catch(e){}}var s=o.availableLanguages["*"]||"en";"zh-tw"===s?s="zh-Hant":"zh-cn"===s&&(s="zh-Hans"),window.document.documentElement.setAttribute("lang",s);const a=(process.env.VSCODE_DEV||!!n.extensionDevelopmentPath)&&!n.extensionTestsPath,c=registerListeners(a),l=n.zoomLevel;r.setVisualZoomLevelLimits(1,1),"number"==typeof l&&0!==l&&r.setZoomLevel(l);const d=uriFromPath(n.appRoot)+"/out",u=startTimer("load:loader");"function"==typeof Monaco_Loader_Init?(define=Monaco_Loader_Init(),e()):createScript(d+"/vs/loader.js",e)}if(window.location.search.indexOf("prof-startup")>=0){var profiler=require("v8-profiler");profiler.startProfiling("renderer",!0)}const startTimer=require("../../../base/node/startupTimers").startTimer,path=require("path"),electron=require("electron"),remote=electron.remote,ipc=electron.ipcRenderer;process.lazyEnv=new Promise(function(e){const r=setTimeout(function(){e(),console.warn("renderer did not receive lazyEnv in time")},1e4);ipc.once("vscode:acceptShellEnv",function(t,n){clearTimeout(r),assign(process.env,n),e(process.env)}),ipc.send("vscode:fetchShellEnv",remote.getCurrentWindow().id)}),main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c887dd955170aebce0f6bb160b146f2e6e10a199/core/vs\workbench\electron-browser\bootstrap\index.js.map
