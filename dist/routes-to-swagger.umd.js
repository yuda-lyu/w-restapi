/*!
 * routes-to-swagger v1.0.7
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("json5")):"function"==typeof define&&define.amd?define(["json5"],n):(t=t||self)["routes-to-swagger"]=n(t.json5)}(this,(function(t){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var n=function(t,n){for(var r=-1,e=null==t?0:t.length,o=Array(e);++r<e;)o[r]=n(t[r],r,t);return o},r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,n){return t(n={exports:{}},n.exports),n.exports}var o=e((function(t){function n(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(r)}t.exports=n}));var a=function(){this.__data__=[],this.size=0};var i=function(t,n){return t===n||t!=t&&n!=n};var u=function(t,n){for(var r=t.length;r--;)if(i(t[r][0],n))return r;return-1},c=Array.prototype.splice;var s=function(t){var n=this.__data__,r=u(n,t);return!(r<0)&&(r==n.length-1?n.pop():c.call(n,r,1),--this.size,!0)};var f=function(t){var n=this.__data__,r=u(n,t);return r<0?void 0:n[r][1]};var l=function(t){return u(this.__data__,t)>-1};var p=function(t,n){var r=this.__data__,e=u(r,t);return e<0?(++this.size,r.push([t,n])):r[e][1]=n,this};function v(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}v.prototype.clear=a,v.prototype.delete=s,v.prototype.get=f,v.prototype.has=l,v.prototype.set=p;var y=v;var d=function(){this.__data__=new y,this.size=0};var h=function(t){var n=this.__data__,r=n.delete(t);return this.size=n.size,r};var b=function(t){return this.__data__.get(t)};var g=function(t){return this.__data__.has(t)},_="object"==o(r)&&r&&r.Object===Object&&r,j="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,m=_||j||Function("return this")(),O=m.Symbol,w=Object.prototype,A=w.hasOwnProperty,S=w.toString,P=O?O.toStringTag:void 0;var z=function(t){var n=A.call(t,P),r=t[P];try{t[P]=void 0;var e=!0}catch(t){}var o=S.call(t);return e&&(n?t[P]=r:delete t[P]),o},k=Object.prototype.toString;var x=function(t){return k.call(t)},T=O?O.toStringTag:void 0;var D=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?z(t):x(t)};var q=function(t){var n=o(t);return null!=t&&("object"==n||"function"==n)};var E,$=function(t){if(!q(t))return!1;var n=D(t);return"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n},F=m["__core-js_shared__"],M=(E=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"";var I=function(t){return!!M&&M in t},B=Function.prototype.toString;var N=function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""},U=/^\[object .+?Constructor\]$/,C=Function.prototype,G=Object.prototype,L=C.toString,R=G.hasOwnProperty,V=RegExp("^"+L.call(R).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var W=function(t){return!(!q(t)||I(t))&&($(t)?V:U).test(N(t))};var J=function(t,n){return null==t?void 0:t[n]};var H=function(t,n){var r=J(t,n);return W(r)?r:void 0},K=H(m,"Map"),Q=H(Object,"create");var X=function(){this.__data__=Q?Q(null):{},this.size=0};var Y=function(t){var n=this.has(t)&&delete this.__data__[t];return this.size-=n?1:0,n},Z=Object.prototype.hasOwnProperty;var tt=function(t){var n=this.__data__;if(Q){var r=n[t];return"__lodash_hash_undefined__"===r?void 0:r}return Z.call(n,t)?n[t]:void 0},nt=Object.prototype.hasOwnProperty;var rt=function(t){var n=this.__data__;return Q?void 0!==n[t]:nt.call(n,t)};var et=function(t,n){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Q&&void 0===n?"__lodash_hash_undefined__":n,this};function ot(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}ot.prototype.clear=X,ot.prototype.delete=Y,ot.prototype.get=tt,ot.prototype.has=rt,ot.prototype.set=et;var at=ot;var it=function(){this.size=0,this.__data__={hash:new at,map:new(K||y),string:new at}};var ut=function(t){var n=o(t);return"string"==n||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==t:null===t};var ct=function(t,n){var r=t.__data__;return ut(n)?r["string"==typeof n?"string":"hash"]:r.map};var st=function(t){var n=ct(this,t).delete(t);return this.size-=n?1:0,n};var ft=function(t){return ct(this,t).get(t)};var lt=function(t){return ct(this,t).has(t)};var pt=function(t,n){var r=ct(this,t),e=r.size;return r.set(t,n),this.size+=r.size==e?0:1,this};function vt(t){var n=-1,r=null==t?0:t.length;for(this.clear();++n<r;){var e=t[n];this.set(e[0],e[1])}}vt.prototype.clear=it,vt.prototype.delete=st,vt.prototype.get=ft,vt.prototype.has=lt,vt.prototype.set=pt;var yt=vt;var dt=function(t,n){var r=this.__data__;if(r instanceof y){var e=r.__data__;if(!K||e.length<199)return e.push([t,n]),this.size=++r.size,this;r=this.__data__=new yt(e)}return r.set(t,n),this.size=r.size,this};function ht(t){var n=this.__data__=new y(t);this.size=n.size}ht.prototype.clear=d,ht.prototype.delete=h,ht.prototype.get=b,ht.prototype.has=g,ht.prototype.set=dt;var bt=ht;var gt=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this};var _t=function(t){return this.__data__.has(t)};function jt(t){var n=-1,r=null==t?0:t.length;for(this.__data__=new yt;++n<r;)this.add(t[n])}jt.prototype.add=jt.prototype.push=gt,jt.prototype.has=_t;var mt=jt;var Ot=function(t,n){for(var r=-1,e=null==t?0:t.length;++r<e;)if(n(t[r],r,t))return!0;return!1};var wt=function(t,n){return t.has(n)};var At=function(t,n,r,e,o,a){var i=1&r,u=t.length,c=n.length;if(u!=c&&!(i&&c>u))return!1;var s=a.get(t);if(s&&a.get(n))return s==n;var f=-1,l=!0,p=2&r?new mt:void 0;for(a.set(t,n),a.set(n,t);++f<u;){var v=t[f],y=n[f];if(e)var d=i?e(y,v,f,n,t,a):e(v,y,f,t,n,a);if(void 0!==d){if(d)continue;l=!1;break}if(p){if(!Ot(n,(function(t,n){if(!wt(p,n)&&(v===t||o(v,t,r,e,a)))return p.push(n)}))){l=!1;break}}else if(v!==y&&!o(v,y,r,e,a)){l=!1;break}}return a.delete(t),a.delete(n),l},St=m.Uint8Array;var Pt=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t,e){r[++n]=[e,t]})),r};var zt=function(t){var n=-1,r=Array(t.size);return t.forEach((function(t){r[++n]=t})),r},kt=O?O.prototype:void 0,xt=kt?kt.valueOf:void 0;var Tt=function(t,n,r,e,o,a,u){switch(r){case"[object DataView]":if(t.byteLength!=n.byteLength||t.byteOffset!=n.byteOffset)return!1;t=t.buffer,n=n.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=n.byteLength||!a(new St(t),new St(n)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+n);case"[object Error]":return t.name==n.name&&t.message==n.message;case"[object RegExp]":case"[object String]":return t==n+"";case"[object Map]":var c=Pt;case"[object Set]":var s=1&e;if(c||(c=zt),t.size!=n.size&&!s)return!1;var f=u.get(t);if(f)return f==n;e|=2,u.set(t,n);var l=At(c(t),c(n),e,o,a,u);return u.delete(t),l;case"[object Symbol]":if(xt)return xt.call(t)==xt.call(n)}return!1};var Dt=function(t,n){for(var r=-1,e=n.length,o=t.length;++r<e;)t[o+r]=n[r];return t},qt=Array.isArray;var Et=function(t,n,r){var e=n(t);return qt(t)?e:Dt(e,r(t))};var $t=function(t,n){for(var r=-1,e=null==t?0:t.length,o=0,a=[];++r<e;){var i=t[r];n(i,r,t)&&(a[o++]=i)}return a};var Ft=function(){return[]},Mt=Object.prototype.propertyIsEnumerable,It=Object.getOwnPropertySymbols,Bt=It?function(t){return null==t?[]:(t=Object(t),$t(It(t),(function(n){return Mt.call(t,n)})))}:Ft;var Nt=function(t,n){for(var r=-1,e=Array(t);++r<t;)e[r]=n(r);return e};var Ut=function(t){return null!=t&&"object"==o(t)};var Ct=function(t){return Ut(t)&&"[object Arguments]"==D(t)},Gt=Object.prototype,Lt=Gt.hasOwnProperty,Rt=Gt.propertyIsEnumerable,Vt=Ct(function(){return arguments}())?Ct:function(t){return Ut(t)&&Lt.call(t,"callee")&&!Rt.call(t,"callee")};var Wt=function(){return!1},Jt=e((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,o=e&&e.exports===r?m.Buffer:void 0,a=(o?o.isBuffer:void 0)||Wt;t.exports=a})),Ht=/^(?:0|[1-9]\d*)$/;var Kt=function(t,n){var r=o(t);return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&Ht.test(t))&&t>-1&&t%1==0&&t<n};var Qt=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},Xt={};Xt["[object Float32Array]"]=Xt["[object Float64Array]"]=Xt["[object Int8Array]"]=Xt["[object Int16Array]"]=Xt["[object Int32Array]"]=Xt["[object Uint8Array]"]=Xt["[object Uint8ClampedArray]"]=Xt["[object Uint16Array]"]=Xt["[object Uint32Array]"]=!0,Xt["[object Arguments]"]=Xt["[object Array]"]=Xt["[object ArrayBuffer]"]=Xt["[object Boolean]"]=Xt["[object DataView]"]=Xt["[object Date]"]=Xt["[object Error]"]=Xt["[object Function]"]=Xt["[object Map]"]=Xt["[object Number]"]=Xt["[object Object]"]=Xt["[object RegExp]"]=Xt["[object Set]"]=Xt["[object String]"]=Xt["[object WeakMap]"]=!1;var Yt=function(t){return Ut(t)&&Qt(t.length)&&!!Xt[D(t)]};var Zt=function(t){return function(n){return t(n)}},tn=e((function(t,n){var r=n&&!n.nodeType&&n,e=r&&t&&!t.nodeType&&t,o=e&&e.exports===r&&_.process,a=function(){try{var t=e&&e.require&&e.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),nn=tn&&tn.isTypedArray,rn=nn?Zt(nn):Yt,en=Object.prototype.hasOwnProperty;var on=function(t,n){var r=qt(t),e=!r&&Vt(t),o=!r&&!e&&Jt(t),a=!r&&!e&&!o&&rn(t),i=r||e||o||a,u=i?Nt(t.length,String):[],c=u.length;for(var s in t)!n&&!en.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Kt(s,c))||u.push(s);return u},an=Object.prototype;var un=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||an)};var cn=function(t,n){return function(r){return t(n(r))}}(Object.keys,Object),sn=Object.prototype.hasOwnProperty;var fn=function(t){if(!un(t))return cn(t);var n=[];for(var r in Object(t))sn.call(t,r)&&"constructor"!=r&&n.push(r);return n};var ln=function(t){return null!=t&&Qt(t.length)&&!$(t)};var pn=function(t){return ln(t)?on(t):fn(t)};var vn=function(t){return Et(t,pn,Bt)},yn=Object.prototype.hasOwnProperty;var dn=function(t,n,r,e,o,a){var i=1&r,u=vn(t),c=u.length;if(c!=vn(n).length&&!i)return!1;for(var s=c;s--;){var f=u[s];if(!(i?f in n:yn.call(n,f)))return!1}var l=a.get(t);if(l&&a.get(n))return l==n;var p=!0;a.set(t,n),a.set(n,t);for(var v=i;++s<c;){var y=t[f=u[s]],d=n[f];if(e)var h=i?e(d,y,f,n,t,a):e(y,d,f,t,n,a);if(!(void 0===h?y===d||o(y,d,r,e,a):h)){p=!1;break}v||(v="constructor"==f)}if(p&&!v){var b=t.constructor,g=n.constructor;b==g||!("constructor"in t)||!("constructor"in n)||"function"==typeof b&&b instanceof b&&"function"==typeof g&&g instanceof g||(p=!1)}return a.delete(t),a.delete(n),p},hn=H(m,"DataView"),bn=H(m,"Promise"),gn=H(m,"Set"),_n=H(m,"WeakMap"),jn=N(hn),mn=N(K),On=N(bn),wn=N(gn),An=N(_n),Sn=D;(hn&&"[object DataView]"!=Sn(new hn(new ArrayBuffer(1)))||K&&"[object Map]"!=Sn(new K)||bn&&"[object Promise]"!=Sn(bn.resolve())||gn&&"[object Set]"!=Sn(new gn)||_n&&"[object WeakMap]"!=Sn(new _n))&&(Sn=function(t){var n=D(t),r="[object Object]"==n?t.constructor:void 0,e=r?N(r):"";if(e)switch(e){case jn:return"[object DataView]";case mn:return"[object Map]";case On:return"[object Promise]";case wn:return"[object Set]";case An:return"[object WeakMap]"}return n});var Pn=Sn,zn=Object.prototype.hasOwnProperty;var kn=function(t,n,r,e,o,a){var i=qt(t),u=qt(n),c=i?"[object Array]":Pn(t),s=u?"[object Array]":Pn(n),f="[object Object]"==(c="[object Arguments]"==c?"[object Object]":c),l="[object Object]"==(s="[object Arguments]"==s?"[object Object]":s),p=c==s;if(p&&Jt(t)){if(!Jt(n))return!1;i=!0,f=!1}if(p&&!f)return a||(a=new bt),i||rn(t)?At(t,n,r,e,o,a):Tt(t,n,c,r,e,o,a);if(!(1&r)){var v=f&&zn.call(t,"__wrapped__"),y=l&&zn.call(n,"__wrapped__");if(v||y){var d=v?t.value():t,h=y?n.value():n;return a||(a=new bt),o(d,h,r,e,a)}}return!!p&&(a||(a=new bt),dn(t,n,r,e,o,a))};var xn=function t(n,r,e,o,a){return n===r||(null==n||null==r||!Ut(n)&&!Ut(r)?n!=n&&r!=r:kn(n,r,e,o,t,a))};var Tn=function(t,n,r,e){var o=r.length,a=o,i=!e;if(null==t)return!a;for(t=Object(t);o--;){var u=r[o];if(i&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++o<a;){var c=(u=r[o])[0],s=t[c],f=u[1];if(i&&u[2]){if(void 0===s&&!(c in t))return!1}else{var l=new bt;if(e)var p=e(s,f,c,t,n,l);if(!(void 0===p?xn(f,s,3,e,l):p))return!1}}return!0};var Dn=function(t){return t==t&&!q(t)};var qn=function(t){for(var n=pn(t),r=n.length;r--;){var e=n[r],o=t[e];n[r]=[e,o,Dn(o)]}return n};var En=function(t,n){return function(r){return null!=r&&(r[t]===n&&(void 0!==n||t in Object(r)))}};var $n=function(t){var n=qn(t);return 1==n.length&&n[0][2]?En(n[0][0],n[0][1]):function(r){return r===t||Tn(r,t,n)}};var Fn=function(t){return"symbol"==o(t)||Ut(t)&&"[object Symbol]"==D(t)},Mn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/;var Bn=function(t,n){if(qt(t))return!1;var r=o(t);return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=t&&!Fn(t))||(In.test(t)||!Mn.test(t)||null!=n&&t in Object(n))};function Nn(t,n){if("function"!=typeof t||null!=n&&"function"!=typeof n)throw new TypeError("Expected a function");var r=function r(){var e=arguments,o=n?n.apply(this,e):e[0],a=r.cache;if(a.has(o))return a.get(o);var i=t.apply(this,e);return r.cache=a.set(o,i)||a,i};return r.cache=new(Nn.Cache||yt),r}Nn.Cache=yt;var Un=Nn;var Cn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gn=/\\(\\)?/g,Ln=function(t){var n=Un(t,(function(t){return 500===r.size&&r.clear(),t})),r=n.cache;return n}((function(t){var n=[];return 46===t.charCodeAt(0)&&n.push(""),t.replace(Cn,(function(t,r,e,o){n.push(e?o.replace(Gn,"$1"):r||t)})),n})),Rn=O?O.prototype:void 0,Vn=Rn?Rn.toString:void 0;var Wn=function t(r){if("string"==typeof r)return r;if(qt(r))return n(r,t)+"";if(Fn(r))return Vn?Vn.call(r):"";var e=r+"";return"0"==e&&1/r==-1/0?"-0":e};var Jn=function(t){return null==t?"":Wn(t)};var Hn=function(t,n){return qt(t)?t:Bn(t,n)?[t]:Ln(Jn(t))};var Kn=function(t){if("string"==typeof t||Fn(t))return t;var n=t+"";return"0"==n&&1/t==-1/0?"-0":n};var Qn=function(t,n){for(var r=0,e=(n=Hn(n,t)).length;null!=t&&r<e;)t=t[Kn(n[r++])];return r&&r==e?t:void 0};var Xn=function(t,n,r){var e=null==t?void 0:Qn(t,n);return void 0===e?r:e};var Yn=function(t,n){return null!=t&&n in Object(t)};var Zn=function(t,n,r){for(var e=-1,o=(n=Hn(n,t)).length,a=!1;++e<o;){var i=Kn(n[e]);if(!(a=null!=t&&r(t,i)))break;t=t[i]}return a||++e!=o?a:!!(o=null==t?0:t.length)&&Qt(o)&&Kt(i,o)&&(qt(t)||Vt(t))};var tr=function(t,n){return null!=t&&Zn(t,n,Yn)};var nr=function(t,n){return Bn(t)&&Dn(n)?En(Kn(t),n):function(r){var e=Xn(r,t);return void 0===e&&e===n?tr(r,t):xn(n,e,3)}};var rr=function(t){return t};var er=function(t){return function(n){return null==n?void 0:n[t]}};var or=function(t){return function(n){return Qn(n,t)}};var ar=function(t){return Bn(t)?er(Kn(t)):or(t)};var ir=function(t){return"function"==typeof t?t:null==t?rr:"object"==o(t)?qt(t)?nr(t[0],t[1]):$n(t):ar(t)};var ur=function(t){return function(n,r,e){for(var o=-1,a=Object(n),i=e(n),u=i.length;u--;){var c=i[t?u:++o];if(!1===r(a[c],c,a))break}return n}}();var cr=function(t,n){return function(r,e){if(null==r)return r;if(!ln(r))return t(r,e);for(var o=r.length,a=n?o:-1,i=Object(r);(n?a--:++a<o)&&!1!==e(i[a],a,i););return r}}((function(t,n){return t&&ur(t,n,pn)}));var sr=function(t,n){var r=-1,e=ln(t)?Array(t.length):[];return cr(t,(function(t,o,a){e[++r]=n(t,o,a)})),e};var fr=function(t,r){return(qt(t)?n:sr)(t,ir(r))},lr=Array.prototype.join;var pr=function(t,n){return null==t?"":lr.call(t,n)};function vr(t){return"[object String]"===Object.prototype.toString.call(t)}function yr(t){return!(!vr(t)||""===t)}function dr(t,n,r){if(!yr(t))return"";if(!yr(n))return"";if(!vr(r))return"";var e=new RegExp(n,"g");return String(t).replace(e,r)}var hr="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify {tag} by {col}',\n    'description': 'add or modify {tag} by {col}',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",br=hr.replace("'post':","'put':"),gr="\n'post': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'add or modify one or multiple {tag}(s)',\n    'description': 'add or modify one or multiple {tag}(s)',\n    'consumes': [\n        'application/json',\n    ],\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': 'body',\n            'in': 'body',\n            'description': '{tag} object or array of objects in JSON string format',\n            'required': true,\n            'schema': {\n                'type': 'string',\n                'properties': {props}\n            }\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n",_r=gr.replace("'post':","'put':");function jr(t){var n=fr(t,(function(t,n){return function(t,n,r){var e="\n'/{tag}/{col}/{{col}}': {\n    {itemGet}\n    {itemPost}\n    {itemPut}\n    {itemDelete}\n},\n";return e=dr(e,"{itemGet}","\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select {tag} by {col}',\n    'description': 'select {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),e=dr(e,"{itemPost}",hr),e=dr(e,"{itemPut}",br),e=dr(e,"{itemDelete}","\n'delete': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'delete {tag} by {col}',\n    'description': 'delete {tag} by {col}',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        },\n        {\n            'name': '{col}',\n            'in': 'path',\n            'description': '{colDescription}',\n            'required': true,\n            'type': '{colType}',\n        }\n    ],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),e=dr(e,"{col}",t),e=dr(e,"{colDescription}",n),e=dr(e,"{colType}",r)}(n,t.description,t.type)}));return pr(n,"")}function mr(t,n){var r="";return r+=function(){var t="\n'/{tag}': {\n    {itemsGet}\n    {itemsPost}\n    {itemsPut}\n},\n";return t=dr(t,"{itemsGet}","\n'get': {\n    'tags': [\n        '{tag}'\n    ],\n    'summary': 'select all {tag}(s)',\n    'description': 'select all {tag}(s)',\n    'parameters': [\n        {\n            'in': 'query',\n            'name': 'token',\n            'type': 'string',\n            'default': '{token}'\n        }\n    ],\n    'security': [],\n    'responses': {\n        '200': {\n            'description': 'success'\n        },\n        'default': {\n            'description': 'error'\n        }\n    }\n},\n"),t=dr(t,"{itemsPost}",gr),t=dr(t,"{itemsPut}",_r)}(),r=dr(r+=jr(n),"{tag}",t),r=dr(r,"{props}",JSON.stringify(n))}function Or(n,r,e,o){var a=function(t){var n=fr(t,(function(t){return mr(t.apiName,t.props)}));return pr(n,"")}(e),i="\n{\n    'swagger': '2.0',\n    'info': {\n        'description': 'Server API(s) is generated by hapi.',\n        'version': '1.0.0',\n        'title': 'API Documents'\n    },\n    'host': '{host}',\n    'basePath': '/{basePath}',\n    'schemes': [\n        'http'\n    ],\n    'paths': {\n        {paths}\n    },\n}\n";return i=dr(i,"{host}",n),i=dr(i,"{basePath}",r),i=dr(i,"{paths}",a),i=dr(i,"{token}",o),t.parse(i)}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localhost:8080",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"api",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return Or(t,n,r,e)}}));
//# sourceMappingURL=routes-to-swagger.umd.js.map
