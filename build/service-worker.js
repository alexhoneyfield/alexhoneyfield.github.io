!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)r.d(n,u,function(t){return e[t]}.bind(null,u));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t){self.addEventListener("fetch",(function(e){e.request.url="/build/"+e.request.url,console.log(e.request.url),e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))})),[{'revision':'8100be4830f4a56b19964c20eacd2de2','url':'/index.html'},{'revision':null,'url':'/static/css/main.78fb2f69.chunk.css'},{'revision':null,'url':'/static/js/2.6e1be7aa.chunk.js'},{'revision':null,'url':'/static/js/3.215c46a0.chunk.js'},{'revision':null,'url':'/static/js/main.ef9bf331.chunk.js'},{'revision':null,'url':'/static/js/runtime-main.af1b7b1b.js'},{'revision':null,'url':'/static/media/home-icon.a2449c03.png'}]}]);
//# sourceMappingURL=service-worker.js.map