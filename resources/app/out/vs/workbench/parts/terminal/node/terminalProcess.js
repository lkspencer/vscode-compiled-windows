/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["vs/workbench/parts/terminal/node/terminalProcess","require","exports","os","path","node-pty"];define(e[0],function(n){for(var s=[],o=0,t=n.length;o<t;o++)s[o]=e[n[o]];return s}([1,2,3,4,5]),function(e,n,s,o,t){"use strict";function r(){T=setTimeout(function(){Y.kill(),process.exit(l)},250)}function c(){process.send({type:"title",content:Y.process}),L=Y.process}Object.defineProperty(n,"__esModule",{value:!0});var i;i="win32"===s.platform()?o.basename(process.env.PTYSHELL):"xterm-256color";var p=process.env.PTYSHELL,a=function(){if(process.env.PTYSHELLCMDLINE)return process.env.PTYSHELLCMDLINE;for(var e=[],n=0;process.env["PTYSHELLARG"+n];)e.push(process.env["PTYSHELLARG"+n]),n++;return e}(),u=process.env.PTYCWD,v=process.env.PTYCOLS,f=process.env.PTYROWS,L="";!function(e){setInterval(function(){try{process.kill(e,0)}catch(e){process.exit()}},5e3)}(process.env.PTYPID),function(){for(["AMD_ENTRYPOINT","ELECTRON_RUN_AS_NODE","PTYCWD","PTYPID","PTYSHELL","PTYCOLS","PTYROWS","PTYSHELLCMDLINE"].forEach(function(e){process.env[e]&&delete process.env[e]});process.env.PTYSHELLARG0;)delete process.env.PTYSHELLARG0}();var P={name:i,cwd:u};v&&f&&(P.cols=parseInt(v,10),P.rows=parseInt(f,10));var T,l,Y=t.fork(p,a,P);Y.on("data",function(e){process.send({type:"data",content:e}),T&&(clearTimeout(T),r())}),Y.on("exit",function(e){l=e,r()}),process.on("message",function(e){"input"===e.event?Y.write(e.data):"resize"===e.event&&Y.resize(e.cols,e.rows)}),function(){process.send({type:"pid",content:Y.pid})}(),function(){c(),setInterval(function(){L!==Y.process&&c()},200)}()})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/379d2efb5539b09112c793d3d9a413017d736f89/core/vs\workbench\parts\terminal\node\terminalProcess.js.map