/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function assign(e,n){return Object.keys(n).reduce(function(e,t){return e[t]=n[t],e},e)}function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,n){return e[n[0]]=decodeURIComponent(n[1]),e},{})}function uriFromPath(e){var n=path.resolve(e).replace(/\\/g,"/");return n.length>0&&"/"!==n.charAt(0)&&(n="/"+n),encodeURI("file://"+n)}function readFile(e){return new Promise(function(n,t){fs.readFile(e,"utf8",function(e,r){e?t(e):n(r)})})}function main(){const e=parseURLQueryArgs(),n=JSON.parse(e.config||"{}")||{};assign(process.env,n.userEnv),function(){const e=require("path"),t=require("module");let r=e.join(n.appRoot,"node_modules");/[a-z]\:/.test(r)&&(r=r.charAt(0).toUpperCase()+r.substr(1));const o=r+".asar",a=t._resolveLookupPaths;t._resolveLookupPaths=function(e,n,t){const i=a(e,n,t),s=t?i:i[1];for(let e=0,n=s.length;e<n;e++)if(s[e]===r){
s.splice(e,0,o);break}return i}}();var t={availableLanguages:{}};const r=process.env.VSCODE_NLS_CONFIG;if(r){process.env.VSCODE_NLS_CONFIG=r;try{t=JSON.parse(r)}catch(e){}}if(t._resolvedLanguagePackCoreLocation){let e=Object.create(null);t.loadBundle=function(n,r,o){let a=e[n];if(a)return void o(void 0,a);readFile(path.join(t._resolvedLanguagePackCoreLocation,n.replace(/\//g,"!")+".nls.json")).then(function(t){let r=JSON.parse(t);e[n]=r,o(void 0,r)}).catch(o)}}var o=t.availableLanguages["*"]||"en";"zh-tw"===o?o="zh-Hant":"zh-cn"===o&&(o="zh-Hans"),window.document.documentElement.setAttribute("lang",o);const a="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",i="darwin"===process.platform?"meta-82":"ctrl-82";window.addEventListener("keydown",function(e){const n=function(e){return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(e);n===a?remote.getCurrentWebContents().toggleDevTools():n===i&&remote.getCurrentWindow().reload()})
;const s=n.appRoot+"/out/vs/loader.js",u=fs.readFileSync(s);require("vm").runInThisContext(u,{filename:s});var c=global.define;global.define=void 0,window.nodeRequire=require.__$__nodeRequire,c("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={};const l=uriFromPath(n.appRoot)+"/out";require.config({baseUrl:l,"vs/nls":t,nodeCachedDataDir:n.nodeCachedDataDir,nodeModules:[]}),t.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(t.pseudo)}),require(["vs/code/electron-browser/processExplorer/processExplorerMain"],function(e){e.startup(n.data)})}const path=require("path"),fs=require("fs"),remote=require("electron").remote;main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/6a6e02cef0f2122ee1469765b704faf5d0e0d859/core/vs\code\electron-browser\processExplorer\processExplorer.js.map
