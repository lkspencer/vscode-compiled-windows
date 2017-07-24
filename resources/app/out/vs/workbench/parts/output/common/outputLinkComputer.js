/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var r=["vs/base/common/arrays","require","exports","vs/base/common/paths","vs/base/common/strings","vs/base/common/platform","vs/workbench/parts/output/common/outputLinkComputer","vs/base/common/winjs.base","vs/base/common/uri","vs/editor/common/core/range"],e=function(e){for(var n=[],t=0,i=e.length;t<i;t++)n[t]=r[e[t]];return n};define(r[0],e([1,2]),function(r,e){"use strict";function n(r,e){var n=0,t=r.length;if(0===t)return 0;for(;n<t;){var i=Math.floor((n+t)/2);e(r[i])?t=i:n=i+1}return n}function t(r,e){if(!(r.length<=1)){var n=r.length/2|0,i=r.slice(0,n),u=r.slice(n);t(i,e),t(u,e);for(var o=0,a=0,s=0;o<i.length&&a<u.length;){var c=e(i[o],u[a]);r[s++]=c<=0?i[o++]:u[a++]}for(;o<i.length;)r[s++]=i[o++];for(;a<u.length;)r[s++]=u[a++]}}function i(r,e){for(var n=0;n<r.length;n++)if(e(r[n]))return n;return-1}Object.defineProperty(e,"__esModule",{value:!0}),e.tail=function(r,e){return void 0===e&&(e=0),r[r.length-(1+e)]},e.equals=function(r,e,n){if(void 0===n&&(n=function(r,e){return r===e}),r.length!==e.length)return!1;for(var t=0,i=r.length;t<i;t++)if(!n(r[t],e[t]))return!1;return!0},e.binarySearch=function(r,e,n){for(var t=0,i=r.length-1;t<=i;){var u=(t+i)/2|0,o=n(r[u],e);if(o<0)t=u+1;else{if(!(o>0))return u;i=u-1}}return-(t+1)},e.findFirst=n,e.mergeSort=function(r,e){return t(r,e),r},e.groupBy=function(r,e){for(var n,t=[],i=0,u=r.slice(0).sort(e);i<u.length;i++){var o=u[i];n&&0===e(n[0],o)?n.push(o):(n=[o],t.push(n))}return t},e.delta=function(r,e,n){for(var t=[],i=[],u=0,o=0;;){if(u===r.length){i.push.apply(i,e.slice(o));break}if(o===e.length){t.push.apply(t,r.slice(u));break}var a=r[u],s=e[o],c=n(a,s);0===c?(u+=1,o+=1):c<0?(t.push(a),u+=1):c>0&&(i.push(s),o+=1)}return{removed:t,added:i}},e.top=function(r,e,t){if(0===t)return[];for(var i=r.slice(0,t).sort(e),u=t,o=r.length;u<o;u++)!function(u,o){var a=r[u];if(e(a,i[t-1])<0){i.pop();var s=n(i,function(r){return e(a,r)<0});i.splice(s,0,a)}}(u);return i},e.coalesce=function(r){return r?r.filter(function(r){return!!r}):r},e.move=function(r,e,n){r.splice(n,0,r.splice(e,1)[0])},e.isFalsyOrEmpty=function(r){return!Array.isArray(r)||0===r.length},e.distinct=function(r,e){if(!e)return r.filter(function(e,n){return r.indexOf(e)===n});var n=Object.create(null);return r.filter(function(r){var t=e(r);return!n[t]&&(n[t]=!0,!0)})},e.uniqueFilter=function(r){var e=Object.create(null);return function(n){var t=r(n);return!e[t]&&(e[t]=!0,!0)}},e.firstIndex=i,e.first=function(r,e,n){void 0===n&&(n=null);var t=i(r,e);return t<0?n:r[t]},e.commonPrefixLength=function(r,e,n){void 0===n&&(n=function(r,e){return r===e});for(var t=0,i=0,u=Math.min(r.length,e.length);i<u&&n(r[i],e[i]);i++)t++;return t},e.flatten=function(r){return r.reduce(function(r,e){return r.concat(e)},[])},e.range=function(r,e){void 0===e&&(e=0);for(var n=[],t=e;t<r;t++)n.push(t);return n},e.fill=function(r,e,n){void 0===n&&(n=[]);for(var t=0;t<r;t++)n[t]=e();return n},e.index=function(r,e,n){return void 0===n&&(n=function(r){return r}),r.reduce(function(r,t){var i=e(t);return r[i]=n(t,r[i]),r},Object.create(null))},e.insert=function(r,e){return r.push(e),function(){var n=r.indexOf(e);n>-1&&r.splice(n,1)}},e.arrayInsert=function(r,e,n){var t=r.slice(0,e),i=r.slice(e);return t.concat(n,i)}}),define(r[3],e([1,2,5,0,4]),function(r,e,n,t,i){"use strict";function u(r){var e=~r.lastIndexOf("/")||~r.lastIndexOf("\\");return 0===e?r:~e==r.length-1?u(r.substring(0,r.length-1)):r.substr(1+~e)}function o(r,e){return e?!v.test(r):!h.test(r)}function a(r,e){if(null===r||void 0===r)return r;var t=r.length;if(0===t)return".";var i=n.isWindows&&e;if(o(r,i))return r;for(var u=i?"\\":"/",a=c(r,u),f=a.length,l=!1,h="",v=a.length;v<=t;v++)if(v===t||47===r.charCodeAt(v)||92===r.charCodeAt(v)){if(s(r,f,v,"..")){var d=h.lastIndexOf(u),g=h.slice(d+1);(a||g.length>0)&&".."!==g&&(h=-1===d?"":h.slice(0,d),l=!0)}else s(r,f,v,".")&&(a||h||v<t-1)&&(l=!0);if(!l){var p=r.slice(f,v);""!==h&&h[h.length-1]!==u&&(h+=u),h+=p}f=v+1,l=!1}return a+h}function s(r,e,n,t){return e+t.length===n&&r.indexOf(t,e)===e}function c(r,e){if(void 0===e&&(e="/"),!r)return"";var n=r.length,t=r.charCodeAt(0);if(47===t||92===t){if((47===(t=r.charCodeAt(1))||92===t)&&47!==(t=r.charCodeAt(2))&&92!==t){for(var i=3,u=i;i<n&&(47!==(t=r.charCodeAt(i))&&92!==t);i++);if(t=r.charCodeAt(i+1),u!==i&&47!==t&&92!==t)for(i+=1;i<n;i++)if(47===(t=r.charCodeAt(i))||92===t)return r.slice(0,i+1).replace(/[\\/]/g,e)}return e}if((t>=65&&t<=90||t>=97&&t<=122)&&58===r.charCodeAt(1))return 47===(t=r.charCodeAt(2))||92===t?r.slice(0,2)+e:r.slice(0,2);var o=r.indexOf("://");if(-1!==o)for(o+=3;o<n;o++)if(47===(t=r.charCodeAt(o))||92===t)return r.slice(0,o+1);return""}function f(r){if(!r)return!1;var e=r.charCodeAt(0);if(47===e||92===e)return!0;if((e>=65&&e<=90||e>=97&&e<=122)&&r.length>2&&58===r.charCodeAt(1)){var n=r.charCodeAt(2);if(47===n||92===n)return!0}return!1}function l(r){return r&&47===r.charCodeAt(0)}Object.defineProperty(e,"__esModule",{value:!0}),e.sep="/",e.nativeSep=n.isWindows?"\\":"/",e.relative=function(r,u){for(var o=i.rtrim(a(r),e.sep),s=i.rtrim(a(u),e.sep),c=n.isLinux?o:o.toLowerCase(),f=n.isLinux?s:s.toLowerCase(),l=c.split(e.sep),h=f.split(e.sep),v=0,d=Math.min(l.length,h.length);v<d&&l[v]===h[v];v++);return t.fill(l.length-v,function(){return".."}).concat(s.split(e.sep).slice(v)).join(e.sep)},e.dirname=function(r){var t=~r.lastIndexOf("/")||~r.lastIndexOf("\\");if(0===t)return".";if(0==~t)return r[0];var i=r.substring(0,~t);return n.isWindows&&":"===i[i.length-1]&&(i+=e.nativeSep),i},e.basename=u,e.extname=function(r){var e=~(r=u(r)).lastIndexOf(".");return e?r.substring(~e):""};var h=/(\/\.\.?\/)|(\/\.\.?)$|^(\.\.?\/)|(\/\/+)|(\\)/,v=/(\\\.\.?\\)|(\\\.\.?)$|^(\.\.?\\)|(\\\\+)|(\/)/;e.normalize=a,e.getRoot=c,e.join=function(){for(var r="",n=0;n<arguments.length;n++){var t=arguments[n];if(n>0){var i=r.charCodeAt(r.length-1);if(47!==i&&92!==i){var u=t.charCodeAt(0);47!==u&&92!==u&&(r+=e.sep)}}r+=t}return a(r)},e.isUNC=function(r){if(!n.isWindows)return!1;if(!r||r.length<5)return!1;var e=r.charCodeAt(0);if(92!==e)return!1;if(92!==(e=r.charCodeAt(1)))return!1;for(var t=2,i=t;t<r.length&&92!==(e=r.charCodeAt(t));t++);return i!==t&&(e=r.charCodeAt(t+1),!isNaN(e)&&92!==e)};var d=n.isWindows?/[\\/:\*\?"<>\|]/g:/[\\/]/g,g=/^(con|prn|aux|clock\$|nul|lpt[0-9]|com[0-9])$/i;e.isValidBasename=function(r){return!(!r||0===r.length||/^\s+$/.test(r)||(d.lastIndex=0,d.test(r)||n.isWindows&&g.test(r)||"."===r||".."===r||n.isWindows&&"."===r[r.length-1]||n.isWindows&&r.length!==r.trim().length))},e.isEqual=function(r,e,n){var t=r===e;return!n||t?t:!(!r||!e)&&i.equalsIgnoreCase(r,e)},e.isEqualOrParent=function(r,n,t){if(r===n)return!0;if(!r||!n)return!1;if(n.length>r.length)return!1;if(t){if(!i.beginsWithIgnoreCase(r,n))return!1;if(n.length===r.length)return!0;var u=n.length;return n.charAt(n.length-1)===e.nativeSep&&u--,r.charAt(u)===e.nativeSep}return n.charAt(n.length-1)!==e.nativeSep&&(n+=e.nativeSep),0===r.indexOf(n)},e.isAbsolute=function(r){return n.isWindows?f(r):l(r)},e.isAbsolute_win32=f,e.isAbsolute_posix=l}),define(r[6],e([1,2,7,8,3,4,0,9]),function(r,e,n,t,i,u,o,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function r(r,e){this.ctx=r,this.patterns=new Map,this.computePatterns(e)}return r.prototype.computePatterns=function(e){var n=this;e.workspaceFolders.map(function(r){return t.default.parse(r)}).forEach(function(e){var t=r.createPatterns(e);n.patterns.set(e.fsPath,t)})},r.prototype.getModel=function(r){for(var e=this.ctx.getMirrorModels(),n=0;n<e.length;n++){var t=e[n];if(t.uri.toString()===r)return t}return null},r.prototype.computeLinks=function(e){var u=this.getModel(e);if(u){var o=[],a=u.getValue().split(/\r\n|\r|\n/);return this.patterns.forEach(function(e,n){for(var u={toResource:function(r){return"string"==typeof r?t.default.file(i.join(n,r)):null}},s=0,c=a.length;s<c;s++)o.push.apply(o,r.detectLinks(a[s],s+1,e,u))}),n.TPromise.as(o)}},r.createPatterns=function(r){var e=[];return o.distinct([i.normalize(r.fsPath,!0),i.normalize(r.fsPath,!1)]).forEach(function(r){e.push(new RegExp(u.escapeRegExpCharacters(r)+"(\\S*) on line ((\\d+)(, column (\\d+))?)","gi")),e.push(new RegExp(u.escapeRegExpCharacters(r)+"(\\S*):line ((\\d+)(, column (\\d+))?)","gi")),e.push(new RegExp(u.escapeRegExpCharacters(r)+"([^\\s\\(\\)]*)(\\s?\\((\\d+)(,(\\d+))?)\\)","gi")),e.push(new RegExp(u.escapeRegExpCharacters(r)+"([^:\\s\\(\\)<>'\"\\[\\]]*)(:(\\d+))?(:(\\d+))?","gi"))}),e},r.detectLinks=function(r,e,n,t){var i=[];return n.forEach(function(n){n.lastIndex=0;for(var o,s=0;null!==(o=n.exec(r));){var c=function(){var n=u.rtrim(o[1],".").replace(/\\/g,"/"),c=void 0;try{c=t.toResource(n).toString()}catch(r){return"continue"}if(o[3]){var f=o[3];if(o[5]){var l=o[5];c=u.format("{0}#{1},{2}",c,f,l)}else c=u.format("{0}#{1}",c,f)}var h=u.rtrim(o[0],"."),v=r.indexOf(h,s);s+=v+h.length;var d={startColumn:v+1,startLineNumber:e,endColumn:v+1+h.length,endLineNumber:e};if(i.some(function(r){return a.Range.areIntersectingOrTouching(r.range,d)}))return{value:void 0};i.push({range:d,url:c})}();if("object"==typeof c)return c.value}}),i},r}();e.OutputLinkComputer=s,e.create=function(r,e){return new s(r,e)}})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/cb82febafda0c8c199b9201ad274e25d9a76874e/core/vs\workbench\parts\output\common\outputLinkComputer.js.map
