/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function onError(e,n){n&&remote.getCurrentWebContents().openDevTools(),console.error("[uncaught exception]: "+e),e.stack&&console.error(e.stack)}function assign(e,n){return Object.keys(n).reduce(function(e,r){return e[r]=n[r],e},e)}function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,n){return e[n[0]]=decodeURIComponent(n[1]),e},{})}function uriFromPath(e){var n=path.resolve(e).replace(/\\/g,"/");return n.length>0&&"/"!==n.charAt(0)&&(n="/"+n),encodeURI("file://"+n)}function readFile(e){return new Promise(function(n,r){fs.readFile(e,"utf8",function(e,t){e?r(e):n(t)})})}function registerListeners(e){var n;if(e){const e="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",r="darwin"===process.platform?"meta-82":"ctrl-82";n=function(n){const t=function(e){
return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(n);t===e?remote.getCurrentWebContents().toggleDevTools():t===r&&remote.getCurrentWindow().reload()},window.addEventListener("keydown",n)}return process.on("uncaughtException",function(n){onError(n,e)}),function(){n&&(window.removeEventListener("keydown",n),n=void 0)}}function main(){const e=require("electron").webFrame,n=parseURLQueryArgs(),r=JSON.parse(n.config||"{}")||{};!function(){const e=require("path"),n=require("module");let t=e.join(r.appRoot,"node_modules");/[a-z]\:/.test(t)&&(t=t.charAt(0).toUpperCase()+t.substr(1));const o=t+".asar",s=n._resolveLookupPaths;n._resolveLookupPaths=function(e,n,r){const i=s(e,n,r),a=r?i:i[1];for(let e=0,n=a.length;e<n;e++)if(a[e]===t){a.splice(e,0,o);break}return i}}(),assign(process.env,r.userEnv),perf.importEntries(r.perfEntries);var t={availableLanguages:{}};const o=process.env.VSCODE_NLS_CONFIG;if(o){process.env.VSCODE_NLS_CONFIG=o;try{t=JSON.parse(o)
}catch(e){}}if(t._resolvedLanguagePackCoreLocation){let e=Object.create(null);t.loadBundle=function(n,r,o){let s=e[n];if(s)return void o(void 0,s);readFile(path.join(t._resolvedLanguagePackCoreLocation,n.replace(/\//g,"!")+".nls.json")).then(function(r){let t=JSON.parse(r);e[n]=t,o(void 0,t)}).catch(o)}}var s=t.availableLanguages["*"]||"en";"zh-tw"===s?s="zh-Hant":"zh-cn"===s&&(s="zh-Hans"),window.document.documentElement.setAttribute("lang",s);const i=(process.env.VSCODE_DEV||!!r.extensionDevelopmentPath)&&!r.extensionTestsPath,a=registerListeners(i),c=r.zoomLevel;e.setVisualZoomLevelLimits(1,1),"number"==typeof c&&0!==c&&e.setZoomLevel(c);const l=r.appRoot+"/out/vs/loader.js",u=require("fs").readFileSync(l);require("vm").runInThisContext(u,{filename:l});var p=global.define;global.define=void 0,window.nodeRequire=require.__$__nodeRequire,p("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={};const d=window.MonacoEnvironment.onNodeCachedData=[];require.config({
baseUrl:uriFromPath(r.appRoot)+"/out","vs/nls":t,recordStats:!!r.performance,nodeCachedDataDir:r.nodeCachedDataDir,onNodeCachedData:function(){d.push(arguments)},
nodeModules:["electron","original-fs","nan","readable-stream","strip-ansi","applicationinsights","fast-plist","gc-signals","getmac","graceful-fs","http-proxy-agent","debug","https-proxy-agent","iconv-lite","jschardet","keytar","minimist","native-is-elevated","native-keymap","native-watchdog","node-pty","semver","spdlog","sudo-prompt","v8-inspect-profiler","vscode-chokidar","vscode-fsevents","vscode-debugprotocol","vscode-nsfw","vscode-ripgrep","vscode-textmate","vscode-xterm","yauzl","windows-foreground-love","windows-mutex","windows-process-tree","agent-base","ansi-regex","anymatch","async-each","bindings","buffer-crc32","chrome-remote-interface","core-util-is","ms","editions","extract-opts","fd-slicer","fs-extra","glob-parent","inherits","is-binary-path","is-glob","isarray","lodash.isinteger","lodash.isundefined","mkdirp","oniguruma","path-is-absolute","prebuild-install","github-from-package","process-nextick-args","promisify-node","readdirp","string_decoder","safe-buffer","safer-buffer","util-deprecate","binary-extensions","commander","detect-libc","eachr","es6-promisify","expand-template","is-extglob","jsonfile","klaw","micromatch","normalize-path","minimatch","node-abi","nodegit-promise","noop-logger","npmlog","os-homedir","pend","pump","rc","rimraf","set-immediate-shim","simple-get","tar-fs","tunnel-agent","typechecker","which-pm-runs","ws","are-we-there-yet","arr-diff","array-unique","asap","async-limiter","brace-expansion","concat-map","braces","chownr","console-control-strings","decompress-response","deep-extend","end-of-stream","es6-promise","expand-brackets","extglob","filename-regex","gauge","glob","ini","kind-of","object.omit","once","parse-glob","regex-cache","remove-trailing-separator","set-blocking","simple-concat","strip-json-comments","tar-stream","ultron","aproba","arr-flatten","balanced-match","bl","buffer-alloc","delegates","expand-range","for-own","fs-constants","fs.realpath","glob-base","has-unicode","inflight","is-buffer","is-dotfile","is-equal-shallow","is-extendable","is-posix-bracket","is-primitive","mimic-response","object-assign","preserve","repeat-element","signal-exit","string-width","to-buffer","wide-align","is-fullwidth-code-point","wrappy","xtend","buffer-alloc-unsafe","buffer-fill","code-point-at","fill-range","for-in","is-number","isobject","number-is-nan","randomatic","repeat-string","async_hooks","assert","buffer","child_process","console","constants","crypto","cluster","dgram","dns","domain","events","fs","http","http2","https","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","tty","url","util","v8","vm","zlib"]
}),t.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(t.pseudo)}),window.MonacoEnvironment.timers={isInitialStartup:!!r.isInitialStartup,hasAccessibilitySupport:!!r.accessibilitySupport,start:r.perfStartTime,windowLoad:r.perfWindowLoadTime},perf.mark("willLoadWorkbenchMain"),require(["vs/workbench/workbench.main","vs/nls!vs/workbench/workbench.main","vs/css!vs/workbench/workbench.main"],function(){perf.mark("didLoadWorkbenchMain"),process.lazyEnv.then(function(){perf.mark("main/startup"),require("vs/workbench/electron-browser/main").startup(r).done(function(){a()},function(e){onError(e,i)})})})}const perf=require("../../../base/common/performance");perf.mark("renderer/started");const path=require("path"),fs=require("fs"),electron=require("electron"),remote=electron.remote,ipc=electron.ipcRenderer;process.lazyEnv=new Promise(function(e){const n=setTimeout(function(){e(),console.warn("renderer did not receive lazyEnv in time")},1e4);ipc.once("vscode:acceptShellEnv",function(r,t){clearTimeout(n),
assign(process.env,t),e(process.env)}),ipc.send("vscode:fetchShellEnv")}),Error.stackTraceLimit=100,main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1dfc5e557209371715f655691b1235b6b26a06be/core/vs\workbench\electron-browser\bootstrap\index.js.map
