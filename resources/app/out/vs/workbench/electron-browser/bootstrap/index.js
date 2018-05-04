/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function onError(e,r){r&&remote.getCurrentWebContents().openDevTools(),console.error("[uncaught exception]: "+e),e.stack&&console.error(e.stack)}function assign(e,r){return Object.keys(r).reduce(function(e,n){return e[n]=r[n],e},e)}function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,r){return e[r[0]]=decodeURIComponent(r[1]),e},{})}function uriFromPath(e){var r=path.resolve(e).replace(/\\/g,"/");return r.length>0&&"/"!==r.charAt(0)&&(r="/"+r),encodeURI("file://"+r)}function readFile(e){return new Promise(function(r,n){fs.readFile(e,"utf8",function(e,t){e?n(e):r(t)})})}function registerListeners(e){var r;if(e){const e="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",n="darwin"===process.platform?"meta-82":"ctrl-82";r=function(r){const t=function(e){
return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(r);t===e?remote.getCurrentWebContents().toggleDevTools():t===n&&remote.getCurrentWindow().reload()},window.addEventListener("keydown",r)}return process.on("uncaughtException",function(r){onError(r,e)}),function(){r&&(window.removeEventListener("keydown",r),r=void 0)}}function main(){const e=require("electron").webFrame,r=parseURLQueryArgs(),n=JSON.parse(r.config||"{}")||{};!function(){const e=require("path"),r=require("module");let t=e.join(n.appRoot,"node_modules");/[a-z]\:/.test(t)&&(t=t.charAt(0).toUpperCase()+t.substr(1));const o=t+".asar",i=r._resolveLookupPaths;r._resolveLookupPaths=function(e,r,n){const s=i(e,r,n),a=n?s:s[1];for(let e=0,r=a.length;e<r;e++)if(a[e]===t){a.splice(e,0,o);break}return s}}(),assign(process.env,n.userEnv),perf.importEntries(n.perfEntries);var t={availableLanguages:{}};const o=process.env.VSCODE_NLS_CONFIG;if(o){process.env.VSCODE_NLS_CONFIG=o;try{t=JSON.parse(o)
}catch(e){}}if(t._resolvedLanguagePackCoreLocation){let e=Object.create(null);t.loadBundle=function(r,n,o){let i=e[r];if(i)return void o(void 0,i);readFile(path.join(t._resolvedLanguagePackCoreLocation,r.replace(/\//g,"!")+".nls.json")).then(function(n){let t=JSON.parse(n);e[r]=t,o(void 0,t)}).catch(o)}}var i=t.availableLanguages["*"]||"en";"zh-tw"===i?i="zh-Hant":"zh-cn"===i&&(i="zh-Hans"),window.document.documentElement.setAttribute("lang",i);const s=(process.env.VSCODE_DEV||!!n.extensionDevelopmentPath)&&!n.extensionTestsPath,a=registerListeners(s),c=n.zoomLevel;e.setVisualZoomLevelLimits(1,1),"number"==typeof c&&0!==c&&e.setZoomLevel(c);const l=n.appRoot+"/out/vs/loader.js",u=require("fs").readFileSync(l);require("vm").runInThisContext(u,{filename:l});var d=global.define;global.define=void 0,window.nodeRequire=require.__$__nodeRequire,d("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={};const p=window.MonacoEnvironment.onNodeCachedData=[];require.config({
baseUrl:uriFromPath(n.appRoot)+"/out","vs/nls":t,recordStats:!!n.performance,nodeCachedDataDir:n.nodeCachedDataDir,onNodeCachedData:function(){p.push(arguments)},
nodeModules:["electron","original-fs","nan","applicationinsights","fast-plist","gc-signals","getmac","graceful-fs","http-proxy-agent","https-proxy-agent","iconv-lite","jschardet","keytar","minimist","native-is-elevated","native-keymap","native-watchdog","node-pty","semver","spdlog","sudo-prompt","v8-inspect-profiler","vscode-chokidar","vscode-fsevents","vscode-debugprotocol","vscode-nsfw","vscode-ripgrep","vscode-textmate","vscode-xterm","yauzl","windows-foreground-love","windows-mutex","windows-process-tree","agent-base","anymatch","async-each","bindings","buffer-crc32","chrome-remote-interface","debug","ms","extend","extract-opts","fd-slicer","fs-extra","glob-parent","inherits","is-binary-path","is-glob","lodash.isinteger","lodash.isundefined","mkdirp","oniguruma","path-is-absolute","promisify-node","readdirp","binary-extensions","commander","is-extglob","jsonfile","klaw","micromatch","normalize-path","minimatch","nodegit-promise","pend","readable-stream","rimraf","set-immediate-shim","typechecker","ws","arr-diff","array-unique","asap","async-limiter","brace-expansion","concat-map","braces","core-util-is","expand-brackets","extglob","filename-regex","glob","isarray","kind-of","object.omit","parse-glob","process-nextick-args","regex-cache","remove-trailing-separator","safe-buffer","string_decoder","ultron","util-deprecate","arr-flatten","balanced-match","expand-range","for-own","fs.realpath","glob-base","inflight","is-buffer","is-dotfile","is-equal-shallow","is-extendable","is-posix-bracket","is-primitive","once","preserve","repeat-element","fill-range","for-in","wrappy","is-number","isobject","randomatic","repeat-string","async_hooks","assert","buffer","child_process","console","constants","crypto","cluster","dgram","dns","domain","events","fs","http","http2","https","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","v8","vm","zlib"]
}),t.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(t.pseudo)}),window.MonacoEnvironment.timers={isInitialStartup:!!n.isInitialStartup,hasAccessibilitySupport:!!n.accessibilitySupport,start:n.perfStartTime,windowLoad:n.perfWindowLoadTime},perf.mark("willLoadWorkbenchMain"),require(["vs/workbench/workbench.main","vs/nls!vs/workbench/workbench.main","vs/css!vs/workbench/workbench.main"],function(){perf.mark("didLoadWorkbenchMain"),process.lazyEnv.then(function(){perf.mark("main/startup"),require("vs/workbench/electron-browser/main").startup(n).done(function(){a()},function(e){onError(e,s)})})})}const perf=require("../../../base/common/performance");perf.mark("renderer/started");const path=require("path"),fs=require("fs"),electron=require("electron"),remote=electron.remote,ipc=electron.ipcRenderer;process.lazyEnv=new Promise(function(e){const r=setTimeout(function(){e(),console.warn("renderer did not receive lazyEnv in time")},1e4);ipc.once("vscode:acceptShellEnv",function(n,t){clearTimeout(r),
assign(process.env,t),e(process.env)}),ipc.send("vscode:fetchShellEnv")}),Error.stackTraceLimit=100,main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7c7da59c2333a1306c41e6e7b68d7f0caa7b3d45/core/vs\workbench\electron-browser\bootstrap\index.js.map
