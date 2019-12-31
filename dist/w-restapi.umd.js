/*!
 * w-restapi v1.0.6
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("fs"),require("@hapi/hapi"),require("@hapi/inert"),require("json5")):"function"==typeof define&&define.amd?define(["fs","@hapi/hapi","@hapi/inert","json5"],r):(t=t||self)["w-restapi"]=r(t.fs,t["@hapi/hapi"],t["@hapi/inert"],t.json5)}(this,(function(t,r,n,e){"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n,e=e&&e.hasOwnProperty("default")?e.default:e;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(t,r){return t(r={exports:{}},r.exports),r.exports}var u=i((function(t){var r=function(t){var r,n=Object.prototype,e=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,r,n,e){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new A(e||[]);return a._invoke=function(t,r,n){var e=l;return function(o,a){if(e===h)throw new Error("Generator is already running");if(e===v){if("throw"===o)throw a;return L()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var u=x(i,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(e===l)throw e=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);e=h;var c=f(t,r,n);if("normal"===c.type){if(e=n.done?v:p,c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(e=v,n.method="throw",n.arg=c.arg)}}}(t,n,i),a}function f(t,r,n){try{return{type:"normal",arg:t.call(r,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function y(){}function g(){}function m(){}var b={};b[i]=function(){return this};var _=Object.getPrototypeOf,j=_&&_(_(N([])));j&&j!==n&&e.call(j,i)&&(b=j);var w=m.prototype=y.prototype=Object.create(b);function O(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function P(t){var r;this._invoke=function(n,a){function i(){return new Promise((function(r,i){!function r(n,a,i,u){var c=f(t[n],t,a);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===o(l)&&e.call(l,"__await")?Promise.resolve(l.__await).then((function(t){r("next",t,i,u)}),(function(t){r("throw",t,i,u)})):Promise.resolve(l).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,u)}))}u(c.arg)}(n,a,r,i)}))}return r=r?r.then(i,i):i()}}function x(t,n){var e=t.iterator[n.method];if(e===r){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=r,x(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(e,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),n.delegate=null,d):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function E(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){for(;++o<t.length;)if(e.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=r,n.done=!0,n};return a.next=a}}return{next:L}}function L(){return{value:r,done:!0}}return g.prototype=w.constructor=m,m.constructor=g,m[c]=g.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(P.prototype),P.prototype[u]=function(){return this},t.AsyncIterator=P,t.async=function(r,n,e,o){var a=new P(s(r,n,e,o));return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),w[c]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var n in t)r.push(n);return r.reverse(),function n(){for(;r.length;){var e=r.pop();if(e in t)return n.value=e,n.done=!1,n}return n.done=!0,n}},t.values=N,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(e,o){return u.type="throw",u.arg=t,n.next=e,o&&(n.method="next",n.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],u=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),d},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc===t){var e=n.completion;if("throw"===e.type){var o=e.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:N(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=r),d}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function c(t,r,n,e,o,a,i){try{var u=t[a](i),c=u.value}catch(t){return void n(t)}u.done?r(c):Promise.resolve(c).then(e,o)}var s=function(t){return function(){var r=this,n=arguments;return new Promise((function(e,o){var a=t.apply(r,n);function i(t){c(a,e,o,i,u,"next",t)}function u(t){c(a,e,o,i,u,"throw",t)}i(void 0)}))}};var f=function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}};var l=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)};var p=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")};var h=function(t){return f(t)||l(t)||p()};var v=function(t,r){for(var n=-1,e=r.length,o=t.length;++n<e;)t[o+n]=r[n];return t},d="object"==o(a)&&a&&a.Object===Object&&a,y="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,g=d||y||Function("return this")(),m=g.Symbol,b=Object.prototype,_=b.hasOwnProperty,j=b.toString,w=m?m.toStringTag:void 0;var O=function(t){var r=_.call(t,w),n=t[w];try{t[w]=void 0;var e=!0}catch(t){}var o=j.call(t);return e&&(r?t[w]=n:delete t[w]),o},P=Object.prototype.toString;var x=function(t){return P.call(t)},S="[object Null]",E="[object Undefined]",A=m?m.toStringTag:void 0;var N=function(t){return null==t?void 0===t?E:S:A&&A in Object(t)?O(t):x(t)};var L=function(t){return null!=t&&"object"==o(t)},k="[object Arguments]";var T=function(t){return L(t)&&N(t)==k},z=Object.prototype,F=z.hasOwnProperty,q=z.propertyIsEnumerable,D=T(function(){return arguments}())?T:function(t){return L(t)&&F.call(t,"callee")&&!q.call(t,"callee")},G=Array.isArray,I=m?m.isConcatSpreadable:void 0;var M=function(t){return G(t)||D(t)||!!(I&&t&&t[I])};var V=function t(r,n,e,o,a){var i=-1,u=r.length;for(e||(e=M),a||(a=[]);++i<u;){var c=r[i];n>0&&e(c)?n>1?t(c,n-1,e,o,a):v(a,c):o||(a[a.length]=c)}return a};var $=function(t,r){for(var n=-1,e=null==t?0:t.length,o=Array(e);++n<e;)o[n]=r(t[n],n,t);return o};var B=function(){this.__data__=[],this.size=0};var R=function(t,r){return t===r||t!=t&&r!=r};var U=function(t,r){for(var n=t.length;n--;)if(R(t[n][0],r))return n;return-1},C=Array.prototype.splice;var J=function(t){var r=this.__data__,n=U(r,t);return!(n<0)&&(n==r.length-1?r.pop():C.call(r,n,1),--this.size,!0)};var W=function(t){var r=this.__data__,n=U(r,t);return n<0?void 0:r[n][1]};var H=function(t){return U(this.__data__,t)>-1};var Y=function(t,r){var n=this.__data__,e=U(n,t);return e<0?(++this.size,n.push([t,r])):n[e][1]=r,this};function K(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}K.prototype.clear=B,K.prototype.delete=J,K.prototype.get=W,K.prototype.has=H,K.prototype.set=Y;var Q=K;var X=function(){this.__data__=new Q,this.size=0};var Z=function(t){var r=this.__data__,n=r.delete(t);return this.size=r.size,n};var tt=function(t){return this.__data__.get(t)};var rt=function(t){return this.__data__.has(t)};var nt=function(t){var r=o(t);return null!=t&&("object"==r||"function"==r)},et="[object AsyncFunction]",ot="[object Function]",at="[object GeneratorFunction]",it="[object Proxy]";var ut,ct=function(t){if(!nt(t))return!1;var r=N(t);return r==ot||r==at||r==et||r==it},st=g["__core-js_shared__"],ft=(ut=/[^.]+$/.exec(st&&st.keys&&st.keys.IE_PROTO||""))?"Symbol(src)_1."+ut:"";var lt=function(t){return!!ft&&ft in t},pt=Function.prototype.toString;var ht=function(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""},vt=/^\[object .+?Constructor\]$/,dt=Function.prototype,yt=Object.prototype,gt=dt.toString,mt=yt.hasOwnProperty,bt=RegExp("^"+gt.call(mt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var _t=function(t){return!(!nt(t)||lt(t))&&(ct(t)?bt:vt).test(ht(t))};var jt=function(t,r){return null==t?void 0:t[r]};var wt=function(t,r){var n=jt(t,r);return _t(n)?n:void 0},Ot=wt(g,"Map"),Pt=wt(Object,"create");var xt=function(){this.__data__=Pt?Pt(null):{},this.size=0};var St=function(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r},Et="__lodash_hash_undefined__",At=Object.prototype.hasOwnProperty;var Nt=function(t){var r=this.__data__;if(Pt){var n=r[t];return n===Et?void 0:n}return At.call(r,t)?r[t]:void 0},Lt=Object.prototype.hasOwnProperty;var kt=function(t){var r=this.__data__;return Pt?void 0!==r[t]:Lt.call(r,t)},Tt="__lodash_hash_undefined__";var zt=function(t,r){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=Pt&&void 0===r?Tt:r,this};function Ft(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Ft.prototype.clear=xt,Ft.prototype.delete=St,Ft.prototype.get=Nt,Ft.prototype.has=kt,Ft.prototype.set=zt;var qt=Ft;var Dt=function(){this.size=0,this.__data__={hash:new qt,map:new(Ot||Q),string:new qt}};var Gt=function(t){var r=o(t);return"string"==r||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==t:null===t};var It=function(t,r){var n=t.__data__;return Gt(r)?n["string"==typeof r?"string":"hash"]:n.map};var Mt=function(t){var r=It(this,t).delete(t);return this.size-=r?1:0,r};var Vt=function(t){return It(this,t).get(t)};var $t=function(t){return It(this,t).has(t)};var Bt=function(t,r){var n=It(this,t),e=n.size;return n.set(t,r),this.size+=n.size==e?0:1,this};function Rt(t){var r=-1,n=null==t?0:t.length;for(this.clear();++r<n;){var e=t[r];this.set(e[0],e[1])}}Rt.prototype.clear=Dt,Rt.prototype.delete=Mt,Rt.prototype.get=Vt,Rt.prototype.has=$t,Rt.prototype.set=Bt;var Ut=Rt,Ct=200;var Jt=function(t,r){var n=this.__data__;if(n instanceof Q){var e=n.__data__;if(!Ot||e.length<Ct-1)return e.push([t,r]),this.size=++n.size,this;n=this.__data__=new Ut(e)}return n.set(t,r),this.size=n.size,this};function Wt(t){var r=this.__data__=new Q(t);this.size=r.size}Wt.prototype.clear=X,Wt.prototype.delete=Z,Wt.prototype.get=tt,Wt.prototype.has=rt,Wt.prototype.set=Jt;var Ht=Wt,Yt="__lodash_hash_undefined__";var Kt=function(t){return this.__data__.set(t,Yt),this};var Qt=function(t){return this.__data__.has(t)};function Xt(t){var r=-1,n=null==t?0:t.length;for(this.__data__=new Ut;++r<n;)this.add(t[r])}Xt.prototype.add=Xt.prototype.push=Kt,Xt.prototype.has=Qt;var Zt=Xt;var tr=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e;)if(r(t[n],n,t))return!0;return!1};var rr=function(t,r){return t.has(r)},nr=1,er=2;var or=function(t,r,n,e,o,a){var i=n&nr,u=t.length,c=r.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(r))return s==r;var f=-1,l=!0,p=n&er?new Zt:void 0;for(a.set(t,r),a.set(r,t);++f<u;){var h=t[f],v=r[f];if(e)var d=i?e(v,h,f,r,t,a):e(h,v,f,t,r,a);if(void 0!==d){if(d)continue;l=!1;break}if(p){if(!tr(r,(function(t,r){if(!rr(p,r)&&(h===t||o(h,t,n,e,a)))return p.push(r)}))){l=!1;break}}else if(h!==v&&!o(h,v,n,e,a)){l=!1;break}}return a.delete(t),a.delete(r),l},ar=g.Uint8Array;var ir=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t,e){n[++r]=[e,t]})),n};var ur=function(t){var r=-1,n=Array(t.size);return t.forEach((function(t){n[++r]=t})),n},cr=1,sr=2,fr="[object Boolean]",lr="[object Date]",pr="[object Error]",hr="[object Map]",vr="[object Number]",dr="[object RegExp]",yr="[object Set]",gr="[object String]",mr="[object Symbol]",br="[object ArrayBuffer]",_r="[object DataView]",jr=m?m.prototype:void 0,wr=jr?jr.valueOf:void 0;var Or=function(t,r,n,e,o,a,i){switch(n){case _r:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case br:return!(t.byteLength!=r.byteLength||!a(new ar(t),new ar(r)));case fr:case lr:case vr:return R(+t,+r);case pr:return t.name==r.name&&t.message==r.message;case dr:case gr:return t==r+"";case hr:var u=ir;case yr:var c=e&cr;if(u||(u=ur),t.size!=r.size&&!c)return!1;var s=i.get(t);if(s)return s==r;e|=sr,i.set(t,r);var f=or(u(t),u(r),e,o,a,i);return i.delete(t),f;case mr:if(wr)return wr.call(t)==wr.call(r)}return!1};var Pr=function(t,r,n){var e=r(t);return G(t)?e:v(e,n(t))};var xr=function(t,r){for(var n=-1,e=null==t?0:t.length,o=0,a=[];++n<e;){var i=t[n];r(i,n,t)&&(a[o++]=i)}return a};var Sr=function(){return[]},Er=Object.prototype.propertyIsEnumerable,Ar=Object.getOwnPropertySymbols,Nr=Ar?function(t){return null==t?[]:(t=Object(t),xr(Ar(t),(function(r){return Er.call(t,r)})))}:Sr;var Lr=function(t,r){for(var n=-1,e=Array(t);++n<t;)e[n]=r(n);return e};var kr=function(){return!1},Tr=i((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n?g.Buffer:void 0,a=(o?o.isBuffer:void 0)||kr;t.exports=a})),zr=9007199254740991,Fr=/^(?:0|[1-9]\d*)$/;var qr=function(t,r){var n=o(t);return!!(r=null==r?zr:r)&&("number"==n||"symbol"!=n&&Fr.test(t))&&t>-1&&t%1==0&&t<r},Dr=9007199254740991;var Gr=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=Dr},Ir={};Ir["[object Float32Array]"]=Ir["[object Float64Array]"]=Ir["[object Int8Array]"]=Ir["[object Int16Array]"]=Ir["[object Int32Array]"]=Ir["[object Uint8Array]"]=Ir["[object Uint8ClampedArray]"]=Ir["[object Uint16Array]"]=Ir["[object Uint32Array]"]=!0,Ir["[object Arguments]"]=Ir["[object Array]"]=Ir["[object ArrayBuffer]"]=Ir["[object Boolean]"]=Ir["[object DataView]"]=Ir["[object Date]"]=Ir["[object Error]"]=Ir["[object Function]"]=Ir["[object Map]"]=Ir["[object Number]"]=Ir["[object Object]"]=Ir["[object RegExp]"]=Ir["[object Set]"]=Ir["[object String]"]=Ir["[object WeakMap]"]=!1;var Mr=function(t){return L(t)&&Gr(t.length)&&!!Ir[N(t)]};var Vr=function(t){return function(r){return t(r)}},$r=i((function(t,r){var n=r&&!r.nodeType&&r,e=n&&t&&!t.nodeType&&t,o=e&&e.exports===n&&d.process,a=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),Br=$r&&$r.isTypedArray,Rr=Br?Vr(Br):Mr,Ur=Object.prototype.hasOwnProperty;var Cr=function(t,r){var n=G(t),e=!n&&D(t),o=!n&&!e&&Tr(t),a=!n&&!e&&!o&&Rr(t),i=n||e||o||a,u=i?Lr(t.length,String):[],c=u.length;for(var s in t)!r&&!Ur.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||qr(s,c))||u.push(s);return u},Jr=Object.prototype;var Wr=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||Jr)};var Hr=function(t,r){return function(n){return t(r(n))}}(Object.keys,Object),Yr=Object.prototype.hasOwnProperty;var Kr=function(t){if(!Wr(t))return Hr(t);var r=[];for(var n in Object(t))Yr.call(t,n)&&"constructor"!=n&&r.push(n);return r};var Qr=function(t){return null!=t&&Gr(t.length)&&!ct(t)};var Xr=function(t){return Qr(t)?Cr(t):Kr(t)};var Zr=function(t){return Pr(t,Xr,Nr)},tn=1,rn=Object.prototype.hasOwnProperty;var nn=function(t,r,n,e,o,a){var i=n&tn,u=Zr(t),c=u.length;if(c!=Zr(r).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in r:rn.call(r,f)))return!1}var l=a.get(t);if(l&&a.get(r))return l==r;var p=!0;a.set(t,r),a.set(r,t);for(var h=i;++s<c;){var v=t[f=u[s]],d=r[f];if(e)var y=i?e(d,v,f,r,t,a):e(v,d,f,t,r,a);if(!(void 0===y?v===d||o(v,d,n,e,a):y)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var g=t.constructor,m=r.constructor;g!=m&&"constructor"in t&&"constructor"in r&&!("function"==typeof g&&g instanceof g&&"function"==typeof m&&m instanceof m)&&(p=!1)}return a.delete(t),a.delete(r),p},en=wt(g,"DataView"),on=wt(g,"Promise"),an=wt(g,"Set"),un=wt(g,"WeakMap"),cn=ht(en),sn=ht(Ot),fn=ht(on),ln=ht(an),pn=ht(un),hn=N;(en&&"[object DataView]"!=hn(new en(new ArrayBuffer(1)))||Ot&&"[object Map]"!=hn(new Ot)||on&&"[object Promise]"!=hn(on.resolve())||an&&"[object Set]"!=hn(new an)||un&&"[object WeakMap]"!=hn(new un))&&(hn=function(t){var r=N(t),n="[object Object]"==r?t.constructor:void 0,e=n?ht(n):"";if(e)switch(e){case cn:return"[object DataView]";case sn:return"[object Map]";case fn:return"[object Promise]";case ln:return"[object Set]";case pn:return"[object WeakMap]"}return r});var vn=hn,dn=1,yn="[object Arguments]",gn="[object Array]",mn="[object Object]",bn=Object.prototype.hasOwnProperty;var _n=function(t,r,n,e,o,a){var i=G(t),u=G(r),c=i?gn:vn(t),s=u?gn:vn(r),f=(c=c==yn?mn:c)==mn,l=(s=s==yn?mn:s)==mn,p=c==s;if(p&&Tr(t)){if(!Tr(r))return!1;i=!0,f=!1}if(p&&!f)return a||(a=new Ht),i||Rr(t)?or(t,r,n,e,o,a):Or(t,r,c,n,e,o,a);if(!(n&dn)){var h=f&&bn.call(t,"__wrapped__"),v=l&&bn.call(r,"__wrapped__");if(h||v){var d=h?t.value():t,y=v?r.value():r;return a||(a=new Ht),o(d,y,n,e,a)}}return!!p&&(a||(a=new Ht),nn(t,r,n,e,o,a))};var jn=function t(r,n,e,o,a){return r===n||(null==r||null==n||!L(r)&&!L(n)?r!=r&&n!=n:_n(r,n,e,o,t,a))},wn=1,On=2;var Pn=function(t,r,n,e){var o=n.length,a=o,i=!e;if(null==t)return!a;for(t=Object(t);o--;){var u=n[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=n[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new Ht;if(e)var p=e(s,f,c,t,r,l);if(!(void 0===p?jn(f,s,wn|On,e,l):p))return!1}}return!0};var xn=function(t){return t==t&&!nt(t)};var Sn=function(t){for(var r=Xr(t),n=r.length;n--;){var e=r[n],o=t[e];r[n]=[e,o,xn(o)]}return r};var En=function(t,r){return function(n){return null!=n&&(n[t]===r&&(void 0!==r||t in Object(n)))}};var An=function(t){var r=Sn(t);return 1==r.length&&r[0][2]?En(r[0][0],r[0][1]):function(n){return n===t||Pn(n,t,r)}},Nn="[object Symbol]";var Ln=function(t){return"symbol"==o(t)||L(t)&&N(t)==Nn},kn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Tn=/^\w*$/;var zn=function(t,r){if(G(t))return!1;var n=o(t);return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Ln(t))||(Tn.test(t)||!kn.test(t)||null!=r&&t in Object(r))},Fn="Expected a function";function qn(t,r){if("function"!=typeof t||null!=r&&"function"!=typeof r)throw new TypeError(Fn);var n=function n(){var e=arguments,o=r?r.apply(this,e):e[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,e);return n.cache=a.set(o,i)||a,i};return n.cache=new(qn.Cache||Ut),n}qn.Cache=Ut;var Dn=qn,Gn=500;var In=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Mn=/\\(\\)?/g,Vn=function(t){var r=Dn(t,(function(t){return n.size===Gn&&n.clear(),t})),n=r.cache;return r}((function(t){var r=[];return 46===t.charCodeAt(0)&&r.push(""),t.replace(In,(function(t,n,e,o){r.push(e?o.replace(Mn,"$1"):n||t)})),r})),$n=1/0,Bn=m?m.prototype:void 0,Rn=Bn?Bn.toString:void 0;var Un=function t(r){if("string"==typeof r)return r;if(G(r))return $(r,t)+"";if(Ln(r))return Rn?Rn.call(r):"";var n=r+"";return"0"==n&&1/r==-$n?"-0":n};var Cn=function(t){return null==t?"":Un(t)};var Jn=function(t,r){return G(t)?t:zn(t,r)?[t]:Vn(Cn(t))},Wn=1/0;var Hn=function(t){if("string"==typeof t||Ln(t))return t;var r=t+"";return"0"==r&&1/t==-Wn?"-0":r};var Yn=function(t,r){for(var n=0,e=(r=Jn(r,t)).length;null!=t&&n<e;)t=t[Hn(r[n++])];return n&&n==e?t:void 0};var Kn=function(t,r,n){var e=null==t?void 0:Yn(t,r);return void 0===e?n:e};var Qn=function(t,r){return null!=t&&r in Object(t)};var Xn=function(t,r,n){for(var e=-1,o=(r=Jn(r,t)).length,a=!1;++e<o;){var i=Hn(r[e]);if(!(a=null!=t&&n(t,i)))break;t=t[i]}return a||++e!=o?a:!!(o=null==t?0:t.length)&&Gr(o)&&qr(i,o)&&(G(t)||D(t))};var Zn=function(t,r){return null!=t&&Xn(t,r,Qn)},te=1,re=2;var ne=function(t,r){return zn(t)&&xn(r)?En(Hn(t),r):function(n){var e=Kn(n,t);return void 0===e&&e===r?Zn(n,t):jn(r,e,te|re)}};var ee=function(t){return t};var oe=function(t){return function(r){return null==r?void 0:r[t]}};var ae=function(t){return function(r){return Yn(r,t)}};var ie=function(t){return zn(t)?oe(Hn(t)):ae(t)};var ue=function(t){return"function"==typeof t?t:null==t?ee:"object"==o(t)?G(t)?ne(t[0],t[1]):An(t):ie(t)};var ce=function(t){return function(r,n,e){for(var o=-1,a=Object(r),i=e(r),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return r}}();var se=function(t,r){return function(n,e){if(null==n)return n;if(!Qr(n))return t(n,e);for(var o=n.length,a=r?o:-1,i=Object(n);(r?a--:++a<o)&&!1!==e(i[a],a,i););return n}}((function(t,r){return t&&ce(t,r,Xr)}));var fe=function(t,r){var n=-1,e=Qr(t)?Array(t.length):[];return se(t,(function(t,o,a){e[++n]=r(t,o,a)})),e};var le=function(t,r){var n=t.length;for(t.sort(r);n--;)t[n]=t[n].value;return t};var pe=function(t,r){if(t!==r){var n=void 0!==t,e=null===t,o=t==t,a=Ln(t),i=void 0!==r,u=null===r,c=r==r,s=Ln(r);if(!u&&!s&&!a&&t>r||a&&i&&c&&!u&&!s||e&&i&&c||!n&&c||!o)return 1;if(!e&&!a&&!s&&t<r||s&&n&&o&&!e&&!a||u&&n&&o||!i&&o||!c)return-1}return 0};var he=function(t,r,n){for(var e=-1,o=t.criteria,a=r.criteria,i=o.length,u=n.length;++e<i;){var c=pe(o[e],a[e]);if(c)return e>=u?c:c*("desc"==n[e]?-1:1)}return t.index-r.index};var ve=function(t,r,n){var e=-1;r=$(r.length?r:[ee],Vr(ue));var o=fe(t,(function(t,n,o){return{criteria:$(r,(function(r){return r(t)})),index:++e,value:t}}));return le(o,(function(t,r){return he(t,r,n)}))};var de=function(t,r,n){switch(n.length){case 0:return t.call(r);case 1:return t.call(r,n[0]);case 2:return t.call(r,n[0],n[1]);case 3:return t.call(r,n[0],n[1],n[2])}return t.apply(r,n)},ye=Math.max;var ge=function(t,r,n){return r=ye(void 0===r?t.length-1:r,0),function(){for(var e=arguments,o=-1,a=ye(e.length-r,0),i=Array(a);++o<a;)i[o]=e[r+o];o=-1;for(var u=Array(r+1);++o<r;)u[o]=e[o];return u[r]=n(i),de(t,this,u)}};var me=function(t){return function(){return t}},be=function(){try{var t=wt(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),_e=be?function(t,r){return be(t,"toString",{configurable:!0,enumerable:!1,value:me(r),writable:!0})}:ee,je=800,we=16,Oe=Date.now;var Pe=function(t){var r=0,n=0;return function(){var e=Oe(),o=we-(e-n);if(n=e,o>0){if(++r>=je)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}(_e);var xe=function(t,r,n){if(!nt(n))return!1;var e=o(r);return!!("number"==e?Qr(n)&&qr(r,n.length):"string"==e&&r in n)&&R(n[r],t)},Se=function(t,r){return Pe(ge(t,r,ee),t+"")}((function(t,r){if(null==t)return[];var n=r.length;return n>1&&xe(t,r[0],r[1])?r=[]:n>2&&xe(r[0],r[1],r[2])&&(r=[r[0]]),ve(t,V(r,1),[])}));var Ee=function(t,r){return(G(t)?$:fe)(t,ue(r))},Ae=Array.prototype.join;var Ne=function(t,r){return null==t?"":Ae.call(t,r)};function Le(t){return"[object String]"===Object.prototype.toString.call(t)}function ke(t){return!(!Le(t)||""===t)}function Te(t,r,n){if(!ke(t))return"";if(!ke(r))return"";if(!Le(n))return"";var e=new RegExp(r,"g");return String(t).replace(e,n)}var ze="\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select {tag} by {col}',\n    'description': 'select {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",Fe="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify {tag} by {col}',\n    'description': 'add or modify {tag} by {col}',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",qe=Fe.replace("'post':","'put':"),De="\n'delete': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'delete {tag} by {col}',\n    'description': 'delete {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",Ge="\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select all {tag}(s)',\n    'description': 'select all {tag}(s)',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        }\n    ],\n    'security': [],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",Ie="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify one or multiple {tag}(s)',\n    'description': 'add or modify one or multiple {tag}(s)',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object or array of objects in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",Me=Ie.replace("'post':","'put':"),Ve="\n'/{tag}': {\n    {itemsGet}\n    {itemsPost}\n    {itemsPut}\n},\n",$e="\n'/{tag}/{col}/{{col}}': {\n    {itemGet}\n    {itemPost}\n    {itemPut}\n    {itemDelete}\n},\n",Be="\n{\n    'swagger': '2.0',\n    'info': {\n        'description': 'Server API(s) is generated by hapi.',\n        'version': '1.0.0',\n        'title': 'API Documents'\n    },\n    'host': '{host}',\n    'basePath': '/{basePath}',\n    'schemes': [\n        'http'\n    ],\n    'paths': {\n        {paths}\n    },\n}\n";function Re(t){var r=Ee(t,(function(t,r){return function(t,r,n){var e=$e;return e=Te(e,"{itemGet}",ze),e=Te(e,"{itemPost}",Fe),e=Te(e,"{itemPut}",qe),e=Te(e,"{itemDelete}",De),e=Te(e,"{col}",t),e=Te(e,"{colDescription}",r),e=Te(e,"{colType}",n)}(r,t.description,t.type)}));return Ne(r,"")}function Ue(t,r){var n="";return n+=function(){var t=Ve;return t=Te(t,"{itemsGet}",Ge),t=Te(t,"{itemsPost}",Ie),t=Te(t,"{itemsPut}",Me)}(),n=Te(n+=Re(r),"{tag}",t),n=Te(n,"{props}",JSON.stringify(r))}function Ce(t,r,n,o){var a=function(t){var r=Ee(t,(function(t){return Ue(t.apiName,t.props)}));return Ne(r,"")}(n),i=Be;return i=Te(i,"{host}",t),i=Te(i,"{basePath}",r),i=Te(i,"{paths}",a),i=Te(i,"{token}",o),e.parse(i)}var Je=function(t,r){for(var n=-1,e=null==t?0:t.length;++n<e&&!1!==r(t[n],n,t););return t};var We=function(t){return"function"==typeof t?t:ee};var He=function(t,r){return(G(t)?Je:se)(t,We(r))};function Ye(){var t,r,n=new Promise((function(){t=arguments[0],r=arguments[1]}));return n.resolve=t,n.reject=r,n}return function(e){var o,a;e.port||(e.port=8080),e.docFolder||(e.docFolder="swdoc"),e.apiParent||(e.apiParent="api"),e.routes||(e.routes=[]),o=e.proc,"[object Function]"!==(a=Object.prototype.toString.call(o))&&"[object AsyncFunction]"!==a&&(e.proc=function(){});var i={method:"GET",path:"/".concat(e.docFolder,"/{file*}"),handler:{directory:{path:"".concat(e.docFolder,"/")}}},c=[];c.push(i),e.routes=Se(e.routes,"apiName"),c=[].concat(h(c),h(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},e=[],o="/";return Le(r)&&(o="/".concat(r,"/")),He(t,(function(t){var r;r={path:o+t.apiName,method:"GET",handler:function(r,e){var o=Ye();return n({method:"GET",apiName:t.apiName,propName:null,propValue:null,payload:null,req:r,res:e,pm:o}),o}},e.push(r),He(t.props,(function(a,i){r={path:o+t.apiName+"/".concat(i,"/{").concat(i,"}"),method:"GET",handler:function(r,e){var o=Ye(),a=r.params;return n({method:"GET",apiName:t.apiName,propName:i,propValue:a[i],payload:null,req:r,res:e,pm:o}),o}},e.push(r)})),He(["POST","PUT"],(function(a){r={path:o+t.apiName,method:a,handler:function(r,e){var o=Ye(),i=r.payload;return n({method:a,apiName:t.apiName,propName:null,propValue:null,payload:i,req:r,res:e,pm:o}),o}},e.push(r),He(t.props,(function(i,u){r={path:o+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:a,handler:function(r,e){var o=Ye(),i=r.params,c=r.payload;return n({method:a,apiName:t.apiName,propName:u,propValue:i[u],payload:c,req:r,res:e,pm:o}),o}},e.push(r)}))})),He(t.props,(function(a,i){r={path:o+t.apiName+"/".concat(i,"/{").concat(i,"}"),method:"DELETE",handler:function(r,e){var o=Ye(),a=r.params;return n({method:"DELETE",apiName:t.apiName,propName:i,propValue:a[i],payload:null,req:r,res:e,pm:o}),o}},e.push(r)}))})),e}(e.routes,e.apiParent,e.proc)));var f=function(){return Ce(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localhost:8080",arguments.length>1&&void 0!==arguments[1]?arguments[1]:"api",arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],arguments.length>3&&void 0!==arguments[3]?arguments[3]:"")}("localhost:".concat(e.port),e.apiParent,e.routes,e.token);function l(){return(l=s(u.mark((function t(){var o;return u.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.server({port:e.port,routes:{cors:!0}}),t.next=3,o.register(n);case 3:o.route(c),o.start(),console.log("Server running at: ".concat(o.info.uri)),console.log("Server for API Documents running at: ".concat(o.info.uri,"/").concat(e.docFolder,"/index.html"));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.writeFileSync("./".concat(e.docFolder,"/swagger.json"),JSON.stringify(f,null,4),"utf8"),e.serverHapi?e.serverHapi.route(c):function(){l.apply(this,arguments)}()}}));
//# sourceMappingURL=w-restapi.umd.js.map
