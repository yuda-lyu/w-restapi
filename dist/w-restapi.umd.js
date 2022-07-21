/*!
 * w-restapi v1.0.11
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("fs"),require("@hapi/hapi"),require("@hapi/inert"),require("json5")):"function"==typeof define&&define.amd?define(["fs","@hapi/hapi","@hapi/inert","json5"],r):(t="undefined"!=typeof globalThis?globalThis:t||self)["w-restapi"]=r(t.fs,t["@hapi/hapi"],t["@hapi/inert"],t.json5)}(this,(function(t,r,n,e){"use strict";function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var a=o(t),i=o(r),u=o(n),c=o(e);function s(t,r,n,e,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?r(c):Promise.resolve(c).then(e,o)}function f(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(t){s(a,e,o,i,u,"next",t)}function u(t){s(a,e,o,i,u,"throw",t)}i(void 0)}))}}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}function p(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(t){if("string"==typeof t)return l(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,r):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}var v="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function d(t){var r={exports:{}};return t(r,r.exports),r.exports}var y=d((function(t){var r=function(t){var r,n=Object.prototype,e=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,n){return Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,n){return t[r]=n}}function s(t,r,n,e){var o=r&&r.prototype instanceof g?r:g,a=Object.create(o.prototype),i=new N(e||[]);return a._invoke=function(t,r,n){var e=l;return function(o,a){if(e===v)throw new Error("Generator is already running");if(e===d){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=E(i,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===l)throw e=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=v;var c=f(t,r,n);if("normal"===c.type){if(e=n.done?d:p,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=d,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",v="executing",d="completed",y={};function g(){}function b(){}function m(){}var _={};c(_,a,(function(){return this}));var j=Object.getPrototypeOf,w=j&&j(j(L([])));w&&w!==n&&e.call(w,a)&&(_=w);var O=m.prototype=g.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function S(t,r){function n(o,a,i,u){var c=f(t[o],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===h(l)&&e.call(l,"__await")?r.resolve(l.__await).then((function(t){n("next",t,i,u)}),(function(t){n("throw",t,i,u)})):r.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,u)}))}u(c.arg)}var o;this._invoke=function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}}function E(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,E(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,y;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function A(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function P(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function L(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}return b.prototype=m,c(O,"constructor",m),c(m,"constructor",b),b.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(r,n,e,o,a){void 0===a&&(a=Promise);var i=new S(s(r,n,e,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(O),c(O,u,"Generator"),c(O,a,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return u.type="throw",u.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,y):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:L(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),y}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"===("undefined"==typeof globalThis?"undefined":h(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}})),g=y;var b=function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t},m="object"==h(v)&&v&&v.Object===Object&&v,_="object"==("undefined"==typeof self?"undefined":h(self))&&self&&self.Object===Object&&self,j=m||_||Function("return this")(),w=j.Symbol,O=Object.prototype,x=O.hasOwnProperty,S=O.toString,E=w?w.toStringTag:void 0;var A=function(t){var r=x.call(t,E),n=t[E];try{t[E]=void 0;var e=!0}catch(t){}var o=S.call(t);return e&&(r?t[E]=n:delete t[E]),o},P=Object.prototype.toString;var N=function(t){return P.call(t)},L=w?w.toStringTag:void 0;var T=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":L&&L in Object(t)?A(t):N(t)};var k=function(t){return null!=t&&"object"==h(t)};var z=function(t){return k(t)&&"[object Arguments]"==T(t)},F=Object.prototype,q=F.hasOwnProperty,G=F.propertyIsEnumerable,D=z(function(){return arguments}())?z:function(t){return k(t)&&q.call(t,"callee")&&!G.call(t,"callee")},I=D,$=Array.isArray,M=w?w.isConcatSpreadable:void 0;var V=function(t){return $(t)||I(t)||!!(M&&t&&t[M])};var R=function t(r,n,e,o,a){var i=-1,u=r.length;for(e||(e=V),a||(a=[]);++i<u;){var c=r[i];n>0&&e(c)?n>1?t(c,n-1,e,o,a):b(a,c):o||(a[a.length]=c)}return a};var U=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o};var B=function(t){return"symbol"==h(t)||k(t)&&"[object Symbol]"==T(t)},C=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,J=/^\w*$/;var W=function(t,r){if($(t))return!1;var n=h(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!B(t))||(J.test(t)||!C.test(t)||null!=r&&t in Object(r))};var H=function(t){var r=h(t);return null!=t&&("object"==r||"function"==r)};var Y,K=function(t){if(!H(t))return!1;var r=T(t);return"[object Function]"==r||"[object GeneratorFunction]"==r||"[object AsyncFunction]"==r||"[object Proxy]"==r},Q=j["__core-js_shared__"],X=(Y=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+Y:"";var Z=function(t){return!!X&&X in t},tt=Function.prototype.toString;var rt=function(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},nt=/^\[object .+?Constructor\]$/,et=Function.prototype,ot=Object.prototype,at=et.toString,it=ot.hasOwnProperty,ut=RegExp("^"+at.call(it).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var ct=function(t){return!(!H(t)||Z(t))&&(K(t)?ut:nt).test(rt(t))};var st=function(t,r){return null==t?void 0:t[r]};var ft=function(t,r){var n=st(t,r);return ct(n)?n:void 0},lt=ft(Object,"create");var pt=function(){this.__data__=lt?lt(null):{},this.size=0};var ht=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},vt=Object.prototype.hasOwnProperty;var dt=function(t){var r=this.__data__;if(lt){var n=r[t];return"__lodash_hash_undefined__"===n?void 0:n}return vt.call(r,t)?r[t]:void 0},yt=Object.prototype.hasOwnProperty;var gt=function(t){var r=this.__data__;return lt?void 0!==r[t]:yt.call(r,t)};var bt=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=lt&&void 0===r?"__lodash_hash_undefined__":r,this};function mt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}mt.prototype.clear=pt,mt.prototype.delete=ht,mt.prototype.get=dt,mt.prototype.has=gt,mt.prototype.set=bt;var _t=mt;var jt=function(){this.__data__=[],this.size=0};var wt=function(t,r){return t===r||t!=t&&r!=r};var Ot=function(t,r){for(var n=t.length;n--;)if(wt(t[n][0],r))return n;return-1},xt=Array.prototype.splice;var St=function(t){var r=this.__data__,n=Ot(r,t);return!(n<0)&&(n==r.length-1?r.pop():xt.call(r,n,1),--this.size,!0)};var Et=function(t){var r=this.__data__,n=Ot(r,t);return n<0?void 0:r[n][1]};var At=function(t){return Ot(this.__data__,t)>-1};var Pt=function(t,r){var n=this.__data__,e=Ot(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function Nt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Nt.prototype.clear=jt,Nt.prototype.delete=St,Nt.prototype.get=Et,Nt.prototype.has=At,Nt.prototype.set=Pt;var Lt=Nt,Tt=ft(j,"Map");var kt=function(){this.size=0,this.__data__={hash:new _t,map:new(Tt||Lt),string:new _t}};var zt=function(t){var r=h(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var Ft=function(t,r){var n=t.__data__;return zt(r)?n["string"==typeof r?"string":"hash"]:n.map};var qt=function(t){var r=Ft(this,t).delete(t);return this.size-=r?1:0,r};var Gt=function(t){return Ft(this,t).get(t)};var Dt=function(t){return Ft(this,t).has(t)};var It=function(t,r){var n=Ft(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function $t(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}$t.prototype.clear=kt,$t.prototype.delete=qt,$t.prototype.get=Gt,$t.prototype.has=Dt,$t.prototype.set=It;var Mt=$t;function Vt(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError("Expected a function");var n=function n(){var e=arguments,o=r?r.apply(this,e):e[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,e);return n.cache=a.set(o,i)||a,i};return n.cache=new(Vt.Cache||Mt),n}Vt.Cache=Mt;var Rt=Vt;var Ut=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Bt=/\\(\\)?/g,Ct=function(t){var r=Rt(t,(function(t){return 500===n.size&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(Ut,(function(t,n,e,o){r.push(e?o.replace(Bt,"$1"):n||t)})),r})),Jt=w?w.prototype:void 0,Wt=Jt?Jt.toString:void 0;var Ht=function t(r){if("string"==typeof r)return r;if($(r))return U(r,t)+"";if(B(r))return Wt?Wt.call(r):"";var n=r+"";return"0"==n&&1/r==-Infinity?"-0":n};var Yt=function(t){return null==t?"":Ht(t)};var Kt=function(t,r){return $(t)?t:W(t,r)?[t]:Ct(Yt(t))};var Qt=function(t){if("string"==typeof t||B(t))return t;var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r};var Xt=function(t,r){for(var n=0,e=(r=Kt(r,t)).length;null!=t&&n<e;)t=t[Qt(r[n++])];return n&&n==e?t:void 0};var Zt=function(){this.__data__=new Lt,this.size=0};var tr=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n};var rr=function(t){return this.__data__.get(t)};var nr=function(t){return this.__data__.has(t)};var er=function(t,r){var n=this.__data__;if(n instanceof Lt){var e=n.__data__;if(!Tt||e.length<199)return e.push([t,r]),this.size=++n.size,this;n=this.__data__=new Mt(e)}return n.set(t,r),this.size=n.size,this};function or(t){var r=this.__data__=new Lt(t);this.size=r.size}or.prototype.clear=Zt,or.prototype.delete=tr,or.prototype.get=rr,or.prototype.has=nr,or.prototype.set=er;var ar=or;var ir=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var ur=function(t){return this.__data__.has(t)};function cr(t){var r=-1,n=null==t?0:t.length;for(this.__data__=new Mt;++r<n;)this.add(t[r])}cr.prototype.add=cr.prototype.push=ir,cr.prototype.has=ur;var sr=cr;var fr=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e;)if(r(t[n],n,t))return!0;return!1};var lr=function(t,r){return t.has(r)};var pr=function(t,r,n,e,o,a){var i=1&n,u=t.length,c=r.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t),f=a.get(r);if(s&&f)return s==r&&f==t;var l=-1,p=!0,h=2&n?new sr:void 0;for(a.set(t,r),a.set(r,t);++l<u;){var v=t[l],d=r[l];if(e)var y=i?e(d,v,l,r,t,a):e(v,d,l,t,r,a);if(void 0!==y){if(y)continue;p=!1;break}if(h){if(!fr(r,(function(t,r){if(!lr(h,r)&&(v===t||o(v,t,n,e,a)))return h.push(r)}))){p=!1;break}}else if(v!==d&&!o(v,d,n,e,a)){p=!1;break}}return a.delete(t),a.delete(r),p},hr=j.Uint8Array;var vr=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n};var dr=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n},yr=w?w.prototype:void 0,gr=yr?yr.valueOf:void 0;var br=function(t,r,n,e,o,a,i){switch(n){case"[object DataView]":if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=r.byteLength||!a(new hr(t),new hr(r)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wt(+t,+r);case"[object Error]":return t.name==r.name&&t.message==r.message;case"[object RegExp]":case"[object String]":return t==r+"";case"[object Map]":var u=vr;case"[object Set]":var c=1&e;if(u||(u=dr),t.size!=r.size&&!c)return!1;var s=i.get(t);if(s)return s==r;e|=2,i.set(t,r);var f=pr(u(t),u(r),e,o,a,i);return i.delete(t),f;case"[object Symbol]":if(gr)return gr.call(t)==gr.call(r)}return!1};var mr=function(t,r,n){var e=r(t);return $(t)?e:b(e,n(t))};var _r=function(t,r){for(var n=-1,e=null==t?0:t.length,o=0,a=[];++n<e;){var i=t[n];r(i,n,t)&&(a[o++]=i)}return a};var jr=function(){return[]},wr=Object.prototype.propertyIsEnumerable,Or=Object.getOwnPropertySymbols,xr=Or?function(t){return null==t?[]:(t=Object(t),_r(Or(t),(function(r){return wr.call(t,r)})))}:jr;var Sr=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e};var Er=function(){return!1},Ar=d((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?j.Buffer:void 0,a=(o?o.isBuffer:void 0)||Er;t.exports=a})),Pr=/^(?:0|[1-9]\d*)$/;var Nr=function(t,r){var n=h(t);return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&Pr.test(t))&&t>-1&&t%1==0&&t<r};var Lr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Tr={};Tr["[object Float32Array]"]=Tr["[object Float64Array]"]=Tr["[object Int8Array]"]=Tr["[object Int16Array]"]=Tr["[object Int32Array]"]=Tr["[object Uint8Array]"]=Tr["[object Uint8ClampedArray]"]=Tr["[object Uint16Array]"]=Tr["[object Uint32Array]"]=!0,Tr["[object Arguments]"]=Tr["[object Array]"]=Tr["[object ArrayBuffer]"]=Tr["[object Boolean]"]=Tr["[object DataView]"]=Tr["[object Date]"]=Tr["[object Error]"]=Tr["[object Function]"]=Tr["[object Map]"]=Tr["[object Number]"]=Tr["[object Object]"]=Tr["[object RegExp]"]=Tr["[object Set]"]=Tr["[object String]"]=Tr["[object WeakMap]"]=!1;var kr=function(t){return k(t)&&Lr(t.length)&&!!Tr[T(t)]};var zr=function(t){return function(r){return t(r)}},Fr=d((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&m.process,a=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),qr=Fr&&Fr.isTypedArray,Gr=qr?zr(qr):kr,Dr=Object.prototype.hasOwnProperty;var Ir=function(t,r){var n=$(t),e=!n&&I(t),o=!n&&!e&&Ar(t),a=!n&&!e&&!o&&Gr(t),i=n||e||o||a,u=i?Sr(t.length,String):[],c=u.length;for(var s in t)!r&&!Dr.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Nr(s,c))||u.push(s);return u},$r=Object.prototype;var Mr=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||$r)};var Vr=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),Rr=Object.prototype.hasOwnProperty;var Ur=function(t){if(!Mr(t))return Vr(t);var r=[];for(var n in Object(t))Rr.call(t,n)&&"constructor"!=n&&r.push(n);return r};var Br=function(t){return null!=t&&Lr(t.length)&&!K(t)};var Cr=function(t){return Br(t)?Ir(t):Ur(t)};var Jr=function(t){return mr(t,Cr,xr)},Wr=Object.prototype.hasOwnProperty;var Hr=function(t,r,n,e,o,a){var i=1&n,u=Jr(t),c=u.length;if(c!=Jr(r).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in r:Wr.call(r,f)))return!1}var l=a.get(t),p=a.get(r);if(l&&p)return l==r&&p==t;var h=!0;a.set(t,r),a.set(r,t);for(var v=i;++s<c;){var d=t[f=u[s]],y=r[f];if(e)var g=i?e(y,d,f,r,t,a):e(d,y,f,t,r,a);if(!(void 0===g?d===y||o(d,y,n,e,a):g)){h=!1;break}v||(v="constructor"==f)}if(h&&!v){var b=t.constructor,m=r.constructor;b==m||!("constructor"in t)||!("constructor"in r)||"function"==typeof b&&b instanceof b&&"function"==typeof m&&m instanceof m||(h=!1)}return a.delete(t),a.delete(r),h},Yr=ft(j,"DataView"),Kr=ft(j,"Promise"),Qr=ft(j,"Set"),Xr=ft(j,"WeakMap"),Zr="[object Map]",tn="[object Promise]",rn="[object Set]",nn="[object WeakMap]",en="[object DataView]",on=rt(Yr),an=rt(Tt),un=rt(Kr),cn=rt(Qr),sn=rt(Xr),fn=T;(Yr&&fn(new Yr(new ArrayBuffer(1)))!=en||Tt&&fn(new Tt)!=Zr||Kr&&fn(Kr.resolve())!=tn||Qr&&fn(new Qr)!=rn||Xr&&fn(new Xr)!=nn)&&(fn=function(t){var r=T(t),n="[object Object]"==r?t.constructor:void 0,e=n?rt(n):"";if(e)switch(e){case on:return en;case an:return Zr;case un:return tn;case cn:return rn;case sn:return nn}return r});var ln=fn,pn="[object Arguments]",hn="[object Array]",vn="[object Object]",dn=Object.prototype.hasOwnProperty;var yn=function(t,r,n,e,o,a){var i=$(t),u=$(r),c=i?hn:ln(t),s=u?hn:ln(r),f=(c=c==pn?vn:c)==vn,l=(s=s==pn?vn:s)==vn,p=c==s;if(p&&Ar(t)){if(!Ar(r))return!1;i=!0,f=!1}if(p&&!f)return a||(a=new ar),i||Gr(t)?pr(t,r,n,e,o,a):br(t,r,c,n,e,o,a);if(!(1&n)){var h=f&&dn.call(t,"__wrapped__"),v=l&&dn.call(r,"__wrapped__");if(h||v){var d=h?t.value():t,y=v?r.value():r;return a||(a=new ar),o(d,y,n,e,a)}}return!!p&&(a||(a=new ar),Hr(t,r,n,e,o,a))};var gn=function t(r,n,e,o,a){return r===n||(null==r||null==n||!k(r)&&!k(n)?r!=r&&n!=n:yn(r,n,e,o,t,a))};var bn=function(t,r,n,e){var o=n.length,a=o,i=!e;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new ar;if(e)var p=e(s,f,c,t,r,l);if(!(void 0===p?gn(f,s,3,e,l):p))return!1}}return!0};var mn=function(t){return t==t&&!H(t)};var _n=function(t){for(var r=Cr(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,mn(o)]}return r};var jn=function(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}};var wn=function(t){var r=_n(t);return 1==r.length&&r[0][2]?jn(r[0][0],r[0][1]):function(n){return n===t||bn(n,t,r)}};var On=function(t,r,n){var e=null==t?void 0:Xt(t,r);return void 0===e?n:e};var xn=function(t,r){return null!=t&&r in Object(t)};var Sn=function(t,r,n){for(var e=-1,o=(r=Kt(r,t)).length,a=!1;++e<o;){var i=Qt(r[e]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++e!=o?a:!!(o=null==t?0:t.length)&&Lr(o)&&Nr(i,o)&&($(t)||I(t))};var En=function(t,r){return null!=t&&Sn(t,r,xn)};var An=function(t,r){return W(t)&&mn(r)?jn(Qt(t),r):function(n){var e=On(n,t);return void 0===e&&e===r?En(n,t):gn(r,e,3)}};var Pn=function(t){return t};var Nn=function(t){return function(r){return null==r?void 0:r[t]}};var Ln=function(t){return function(r){return Xt(r,t)}};var Tn=function(t){return W(t)?Nn(Qt(t)):Ln(t)};var kn=function(t){return"function"==typeof t?t:null==t?Pn:"object"==h(t)?$(t)?An(t[0],t[1]):wn(t):Tn(t)};var zn=function(t){return function(r,n,e){for(var o=-1,a=Object(r),i=e(r),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return r}}();var Fn=function(t,r){return function(n,e){if(null==n)return n;if(!Br(n))return t(n,e);for(var o=n.length,a=r?o:-1,i=Object(n);(r?a--:++a<o)&&!1!==e(i[a],a,i););return n}}((function(t,r){return t&&zn(t,r,Cr)}));var qn=function(t,r){var n=-1,e=Br(t)?Array(t.length):[];return Fn(t,(function(t,o,a){e[++n]=r(t,o,a)})),e};var Gn=function(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t};var Dn=function(t,r){if(t!==r){var n=void 0!==t,e=null===t,o=t==t,a=B(t),i=void 0!==r,u=null===r,c=r==r,s=B(r);if(!u&&!s&&!a&&t>r||a&&i&&c&&!u&&!s||e&&i&&c||!n&&c||!o)return 1;if(!e&&!a&&!s&&t<r||s&&n&&o&&!e&&!a||u&&n&&o||!i&&o||!c)return-1}return 0};var In=function(t,r,n){for(var e=-1,o=t.criteria,a=r.criteria,i=o.length,u=n.length;++e<i;){var c=Dn(o[e],a[e]);if(c)return e>=u?c:c*("desc"==n[e]?-1:1)}return t.index-r.index};var $n=function(t,r,n){r=r.length?U(r,(function(t){return $(t)?function(r){return Xt(r,1===t.length?t[0]:t)}:t})):[Pn];var e=-1;r=U(r,zr(kn));var o=qn(t,(function(t,n,o){return{criteria:U(r,(function(r){return r(t)})),index:++e,value:t}}));return Gn(o,(function(t,r){return In(t,r,n)}))};var Mn=function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)},Vn=Math.max;var Rn=function(t,r,n){return r=Vn(void 0===r?t.length-1:r,0),function(){for(var e=arguments,o=-1,a=Vn(e.length-r,0),i=Array(a);++o<a;)i[o]=e[r+o];o=-1;for(var u=Array(r+1);++o<r;)u[o]=e[o];return u[r]=n(i),Mn(t,this,u)}};var Un=function(t){return function(){return t}},Bn=function(){try{var t=ft(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),Cn=Bn?function(t,r){return Bn(t,"toString",{configurable:!0,enumerable:!1,value:Un(r),writable:!0})}:Pn,Jn=Date.now;var Wn=function(t){var r=0,n=0;return function(){var e=Jn(),o=16-(e-n);if(n=e,o>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}},Hn=Wn(Cn);var Yn=function(t,r,n){if(!H(n))return!1;var e=h(r);return!!("number"==e?Br(n)&&Nr(r,n.length):"string"==e&&r in n)&&wt(n[r],t)},Kn=function(t,r){return Hn(Rn(t,r,Pn),t+"")}((function(t,r){if(null==t)return[];var n=r.length;return n>1&&Yn(t,r[0],r[1])?r=[]:n>2&&Yn(r[0],r[1],r[2])&&(r=[r[0]]),$n(t,R(r,1),[])}));var Qn=function(t,r){return($(t)?U:qn)(t,kn(r))},Xn=Array.prototype.join;var Zn=function(t,r){return null==t?"":Xn.call(t,r)};function te(t){return"[object String]"===Object.prototype.toString.call(t)}function re(t){return!(!te(t)||""===t)}function ne(t,r,n){if(!re(t))return"";if(!re(r))return"";if(!te(n))return"";var e=new RegExp(r,"g");return String(t).replace(e,n)}var ee="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify {tag} by {col}',\n    'description': 'add or modify {tag} by {col}',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",oe=ee.replace("'post':","'put':"),ae="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify one or multiple {tag}(s)',\n    'description': 'add or modify one or multiple {tag}(s)',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object or array of objects in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",ie=ae.replace("'post':","'put':");function ue(t){var r=Qn(t,(function(t,r){return function(t,r,n){var e="\n'/{tag}/{col}/{{col}}': {\n    {itemGet}\n    {itemPost}\n    {itemPut}\n    {itemDelete}\n},\n";return e=ne(e,"{itemGet}","\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select {tag} by {col}',\n    'description': 'select {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),e=ne(e,"{itemPost}",ee),e=ne(e,"{itemPut}",oe),e=ne(e,"{itemDelete}","\n'delete': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'delete {tag} by {col}',\n    'description': 'delete {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),e=ne(e,"{col}",t),e=ne(e,"{colDescription}",r),ne(e,"{colType}",n)}(r,t.description,t.type)}));return Zn(r,"")}function ce(t,r){var n="";return n+=function(){var t="\n'/{tag}': {\n    {itemsGet}\n    {itemsPost}\n    {itemsPut}\n},\n";return t=ne(t,"{itemsGet}","\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select all {tag}(s)',\n    'description': 'select all {tag}(s)',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        }\n    ],\n    'security': [],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),t=ne(t,"{itemsPost}",ae),ne(t,"{itemsPut}",ie)}(),n=ne(n+=ue(r),"{tag}",t),n=ne(n,"{props}",JSON.stringify(r))}function se(t,r,n,e){var o=function(t){var r=Qn(t,(function(t){return ce(t.apiName,t.props)}));return Zn(r,"")}(n),a="\n{\n    'swagger': '2.0',\n    'info': {\n        'description': 'Server API(s) is generated by hapi.',\n        'version': '1.0.0',\n        'title': 'API Documents'\n    },\n    'host': '{host}',\n    'basePath': '/{basePath}',\n    'schemes': [\n        'http'\n    ],\n    'paths': {\n        {paths}\n    },\n}\n";return a=ne(a,"{host}",t),a=ne(a,"{basePath}",r),a=ne(a,"{paths}",o),a=ne(a,"{token}",e),c.default.parse(a)}var fe=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t};var le=function(t){return"function"==typeof t?t:Pn};var pe=function(t,r){return($(t)?fe:Fn)(t,le(r))};function he(){var t,r,n=new Promise((function(){t=arguments[0],r=arguments[1]}));return n.resolve=t,n.reject=r,n}return function(t){var r,n;t.port||(t.port=8080),t.docFolder||(t.docFolder="swdoc"),t.apiParent||(t.apiParent="api"),t.routes||(t.routes=[]),r=t.proc,"[object Function]"!==(n=Object.prototype.toString.call(r))&&"[object AsyncFunction]"!==n&&(t.proc=function(){});var e={method:"GET",path:"/".concat(t.docFolder,"/{file*}"),handler:{directory:{path:"".concat(t.docFolder,"/")}}},o=[];o.push(e),t.routes=Kn(t.routes,"apiName"),o=[].concat(p(o),p(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=[],o="/";return te(r)&&(o="/".concat(r,"/")),pe(t,(function(t){var r;r={path:o+t.apiName,method:"GET",handler:function(r,e){var o=he();return n({method:"GET",apiName:t.apiName,propName:null,propValue:null,payload:null,req:r,res:e,pm:o}),o}},e.push(r),pe(t.props,(function(a,i){r={path:o+t.apiName+"/".concat(i,"/{").concat(i,"}"),method:"GET",handler:function(r,e){var o=he(),a=r.params;return n({method:"GET",apiName:t.apiName,propName:i,propValue:a[i],payload:null,req:r,res:e,pm:o}),o}},e.push(r)})),pe(["POST","PUT"],(function(a){r={path:o+t.apiName,method:a,handler:function(r,e){var o=he(),i=r.payload;return n({method:a,apiName:t.apiName,propName:null,propValue:null,payload:i,req:r,res:e,pm:o}),o}},e.push(r),pe(t.props,(function(i,u){r={path:o+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:a,handler:function(r,e){var o=he(),i=r.params,c=r.payload;return n({method:a,apiName:t.apiName,propName:u,propValue:i[u],payload:c,req:r,res:e,pm:o}),o}},e.push(r)}))})),pe(t.props,(function(a,i){r={path:o+t.apiName+"/".concat(i,"/{").concat(i,"}"),method:"DELETE",handler:function(r,e){var o=he(),a=r.params;return n({method:"DELETE",apiName:t.apiName,propName:i,propValue:a[i],payload:null,req:r,res:e,pm:o}),o}},e.push(r)}))})),e}(t.routes,t.apiParent,t.proc)));var c=function(){return se(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localhost:8080",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"api",arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")}("localhost:".concat(t.port),t.apiParent,t.routes,t.token);function s(){return(s=f(g.mark((function r(){var n;return g.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=i.default.server({port:t.port,routes:{cors:!0}}),r.next=3,n.register(u.default);case 3:n.route(o),n.start(),console.log("Server running at: ".concat(n.info.uri)),console.log("Server for API Documents running at: ".concat(n.info.uri,"/").concat(t.docFolder,"/index.html"));case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}a.default.writeFileSync("./".concat(t.docFolder,"/swagger.json"),JSON.stringify(c,null,4),"utf8"),t.serverHapi?t.serverHapi.route(o):function(){s.apply(this,arguments)}()}}));
//# sourceMappingURL=w-restapi.umd.js.map