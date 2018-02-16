/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter(function(e){return!!e}).map(function(e){return e.split("=")}).filter(function(e){return 2===e.length}).reduce(function(e,t){return e[t[0]]=decodeURIComponent(t[1]),e},{})}function createScript(e,t){const n=document.createElement("script");n.src=e,n.addEventListener("load",t);const r=document.getElementsByTagName("head")[0];r.insertBefore(n,r.lastChild)}function uriFromPath(e){var t=path.resolve(e).replace(/\\/g,"/");return t.length>0&&"/"!==t.charAt(0)&&(t="/"+t),encodeURI("file://"+t)}function readFile(e){return new Promise(function(t,n){fs.readFile(e,"utf8",function(e,r){e?n(e):t(r)})})}function main(){const e=parseURLQueryArgs(),t=JSON.parse(e.config||"{}")||{};!function(){const e=require("path"),n=require("module");let r=e.join(t.appRoot,"node_modules");/[a-z]\:/.test(r)&&(r=r.charAt(0).toUpperCase()+r.substr(1));const o=r+".asar",a=n._resolveLookupPaths;n._resolveLookupPaths=function(e,t){
const n=a(e,t),i=n[1];for(let e=0,t=i.length;e<t;e++)if(i[e]===r){i.splice(e,0,o);break}return n}}();const n="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",r="darwin"===process.platform?"meta-82":"ctrl-82";window.addEventListener("keydown",function(e){const t=function(e){return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(e);t===n?remote.getCurrentWebContents().toggleDevTools():t===r&&remote.getCurrentWindow().reload()});const o=uriFromPath(t.appRoot)+"/out";var a={availableLanguages:{}};const i=process.env.VSCODE_NLS_CONFIG;if(i){process.env.VSCODE_NLS_CONFIG=i;try{a=JSON.parse(i)}catch(e){}}if(a._resolvedLanguagePackCoreLocation){let e=Object.create(null);a.loadBundle=function(t,n,r){let o=e[t];if(o)return void r(void 0,o);readFile(path.join(a._resolvedLanguagePackCoreLocation,t.replace(/\//g,"!")+".nls.json")).then(function(n){let o=JSON.parse(n);e[t]=o,r(void 0,o)}).catch(r)}}var s=a.availableLanguages["*"]||"en"
;"zh-tw"===s?s="zh-Hant":"zh-cn"===s&&(s="zh-Hans"),window.document.documentElement.setAttribute("lang",s),createScript(o+"/vs/loader.js",function(){var e=global.define;global.define=void 0,e("fs",["original-fs"],function(e){return e}),window.MonacoEnvironment={},require.config({baseUrl:o,"vs/nls":a,nodeCachedDataDir:t.nodeCachedDataDir,nodeModules:[]}),a.pseudo&&require(["vs/nls"],function(e){e.setPseudoTranslation(a.pseudo)}),require(["vs/code/electron-browser/issue/issueReporterMain"],e=>{e.startup(t)})})}const path=require("path"),fs=require("fs"),remote=require("electron").remote;main();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/1633d0959a33c1ba0169618280a0edb30d1ddcc3/core/vs\code\electron-browser\issue\issueReporter.js.map
