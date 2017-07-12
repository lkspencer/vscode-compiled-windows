/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";function e(e){e&&(e.classList.remove("vscode-light","vscode-dark","vscode-high-contrast"),e.classList.add(c.activeTheme))}function t(){return document.getElementById("active-frame")}function n(){return document.getElementById("pending-frame")}function o(e){if(e&&e.view&&e.view.document)for(var t=e.target;t;){if(t.tagName&&"a"===t.tagName.toLowerCase()&&t.href){var n=e.view.document.getElementsByTagName("base")[0];if("#"===t.getAttribute("href"))e.view.scrollTo(0,0);else if(t.hash&&(t.getAttribute("href")===t.hash||n&&t.href.indexOf(n.href)>=0)){var o=e.view.document.getElementById(t.hash.substr(1,t.hash.length-1));o&&o.scrollIntoView()}else s.sendToHost("did-click-link",t.href);e.preventDefault();break}t=t.parentNode}}function i(e){if(r)return;const t=e.target.body.scrollTop/e.target.body.clientHeight;isNaN(t)||(r=!0,window.requestAnimationFrame(function(){try{s.sendToHost("did-scroll",t)}catch(e){}r=!1}))}const s=require("electron").ipcRenderer;var l=!0;const c={initialScrollProgress:void 0};var r=!1;document.addEventListener("DOMContentLoaded",function(){s.on("baseUrl",function(e,t){c.baseUrl=t}),s.on("styles",function(n,o,i){c.styles=o,c.activeTheme=i;var s=t();if(s){e(s.contentDocument.getElementsByTagName("body")[0]);var l=s.contentDocument.getElementById("_defaultStyles");l&&(l.innerHTML=c.styles)}}),s.on("focus",function(){const e=t();e&&e.contentWindow.focus()}),s.on("content",function(r,a){const d=a.options,u=a.contents.join("\n"),m=(new DOMParser).parseFromString(u,"text/html"),h={scriptTags:m.documentElement.querySelectorAll("script").length,inputTags:m.documentElement.querySelectorAll("input").length,styleTags:m.documentElement.querySelectorAll("style").length,linkStyleSheetTags:m.documentElement.querySelectorAll("link[rel=stylesheet]").length,stringLen:u.length};if(c.baseUrl&&0===m.head.getElementsByTagName("base").length){const e=m.createElement("base");e.href=c.baseUrl,m.head.appendChild(e)}const f=m.createElement("style");f.id="_defaultStyles",f.innerHTML=c.styles,m.head.hasChildNodes()?m.head.insertBefore(f,m.head.firstChild):m.head.appendChild(f),e(m.body);const g=t();var y;if(l)l=!1,y=function(e,t){e.scrollTop=0,isNaN(c.initialScrollProgress)||t.addEventListener("load",function(){0===e.scrollTop&&(e.scrollTop=e.clientHeight*c.initialScrollProgress)})};else{const e=g.contentDocument&&g.contentDocument.body?g.contentDocument.body.scrollTop:0;y=function(t){0===t.scrollTop&&(t.scrollTop=e)}}const p=n();p&&(p.setAttribute("id",""),document.body.removeChild(p));const b=document.createElement("iframe");b.setAttribute("id","pending-frame"),b.setAttribute("frameborder","0"),b.setAttribute("sandbox",d.allowScripts?"allow-scripts allow-forms allow-same-origin":"allow-same-origin"),b.style.cssText="margin: 0; overflow: hidden; position: absolute; width: 100%; height: 100%; display: none",document.body.appendChild(b),b.contentDocument.open("text/html","replace"),b.contentWindow.onbeforeunload=function(){return console.log("prevented webview navigation"),!1},b.contentWindow.addEventListener("DOMContentLoaded",function(e){const s=e.target;s.body&&(y(s.body,this),s.body.addEventListener("click",o));const l=n();if(l&&l.contentDocument===s){const e=t();e&&document.body.removeChild(e),l.setAttribute("id","active-frame"),l.style.display="block",this.addEventListener("scroll",i)}}),b.contentDocument.write("<!DOCTYPE html>"),b.contentDocument.write(m.documentElement.innerHTML),b.contentDocument.close(),s.sendToHost("did-set-content",h)}),s.on("message",function(e,n){const o=t();o&&o.contentWindow.postMessage(n,document.location.origin)}),s.on("initial-scroll-position",function(e,t){c.initialScrollProgress=t}),window.onmessage=function(e){s.sendToHost(e.data.command,e.data.data)},s.sendToHost("webview-ready",process.pid)})}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c887dd955170aebce0f6bb160b146f2e6e10a199/core/vs\workbench\parts\html\browser\webview-pre.js.map
