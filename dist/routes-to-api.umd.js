/*!
 * routes-to-api v1.0.3
 * (c) 2018-2019 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self)["routes-to-api"]=e()}(this,(function(){"use strict";var t=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var e=function(t){return function(e,r,n){for(var o=-1,a=Object(e),u=n(e),c=u.length;c--;){var i=u[t?c:++o];if(!1===r(a[i],i,a))break}return e}}();var r=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t,e){return t(e={exports:{}},e.exports),e.exports}var u="object"==n(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,i=u||c||Function("return this")(),p=i.Symbol,f=Object.prototype,l=f.hasOwnProperty,b=f.toString,y=p?p.toStringTag:void 0;var s=function(t){var e=l.call(t,y),r=t[y];try{t[y]=void 0;var n=!0}catch(t){}var o=b.call(t);return n&&(e?t[y]=r:delete t[y]),o},d=Object.prototype.toString;var v=function(t){return d.call(t)},m="[object Null]",j="[object Undefined]",h=p?p.toStringTag:void 0;var g=function(t){return null==t?void 0===t?j:m:h&&h in Object(t)?s(t):v(t)};var O=function(t){return null!=t&&"object"==n(t)},N="[object Arguments]";var A=function(t){return O(t)&&g(t)==N},T=Object.prototype,S=T.hasOwnProperty,E=T.propertyIsEnumerable,x=A(function(){return arguments}())?A:function(t){return O(t)&&S.call(t,"callee")&&!E.call(t,"callee")},w=Array.isArray;var P=function(){return!1},q=a((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?i.Buffer:void 0,a=(o?o.isBuffer:void 0)||P;t.exports=a})),F=9007199254740991,U=/^(?:0|[1-9]\d*)$/;var V=function(t,e){var r=n(t);return!!(e=null==e?F:e)&&("number"==r||"symbol"!=r&&U.test(t))&&t>-1&&t%1==0&&t<e},G=9007199254740991;var B=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=G},D={};D["[object Float32Array]"]=D["[object Float64Array]"]=D["[object Int8Array]"]=D["[object Int16Array]"]=D["[object Int32Array]"]=D["[object Uint8Array]"]=D["[object Uint8ClampedArray]"]=D["[object Uint16Array]"]=D["[object Uint32Array]"]=!0,D["[object Arguments]"]=D["[object Array]"]=D["[object ArrayBuffer]"]=D["[object Boolean]"]=D["[object DataView]"]=D["[object Date]"]=D["[object Error]"]=D["[object Function]"]=D["[object Map]"]=D["[object Number]"]=D["[object Object]"]=D["[object RegExp]"]=D["[object Set]"]=D["[object String]"]=D["[object WeakMap]"]=!1;var I=function(t){return O(t)&&B(t.length)&&!!D[g(t)]};var k=function(t){return function(e){return t(e)}},L=a((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&u.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),M=L&&L.isTypedArray,C=M?k(M):I,R=Object.prototype.hasOwnProperty;var W=function(t,e){var n=w(t),o=!n&&x(t),a=!n&&!o&&q(t),u=!n&&!o&&!a&&C(t),c=n||o||a||u,i=c?r(t.length,String):[],p=i.length;for(var f in t)!e&&!R.call(t,f)||c&&("length"==f||a&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||V(f,p))||i.push(f);return i},$=Object.prototype;var z=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||$)};var H=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),J=Object.prototype.hasOwnProperty;var K=function(t){if(!z(t))return H(t);var e=[];for(var r in Object(t))J.call(t,r)&&"constructor"!=r&&e.push(r);return e};var Q=function(t){var e=n(t);return null!=t&&("object"==e||"function"==e)},X="[object AsyncFunction]",Y="[object Function]",Z="[object GeneratorFunction]",_="[object Proxy]";var tt=function(t){if(!Q(t))return!1;var e=g(t);return e==Y||e==Z||e==X||e==_};var et=function(t){return null!=t&&B(t.length)&&!tt(t)};var rt=function(t){return et(t)?W(t):K(t)};var nt=function(t,e){return function(r,n){if(null==r)return r;if(!et(r))return t(r,n);for(var o=r.length,a=e?o:-1,u=Object(r);(e?a--:++a<o)&&!1!==n(u[a],a,u););return r}}((function(t,r){return t&&e(t,r,rt)}));var ot=function(t){return t};var at=function(t){return"function"==typeof t?t:ot};var ut=function(e,r){return(w(e)?t:nt)(e,at(r))};function ct(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}return function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){},a="/";return t=n,"[object String]"===Object.prototype.toString.call(t)&&(a="/".concat(n,"/")),ut(r,(function(t){var r;r={path:a+t.apiName,method:"GET",handler:function(e,r){var n=ct();return o({method:"GET",apiName:t.apiName,propName:null,propValue:null,payload:null,req:e,res:r,pm:n}),n}},e.push(r),ut(t.props,(function(n,u){r={path:a+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:"GET",handler:function(e,r){var n=ct(),a=e.params;return o({method:"GET",apiName:t.apiName,propName:u,propValue:a[u],payload:null,req:e,res:r,pm:n}),n}},e.push(r)})),ut(["POST","PUT"],(function(n){r={path:a+t.apiName,method:n,handler:function(e,r){var a=ct(),u=e.payload;return o({method:n,apiName:t.apiName,propName:null,propValue:null,payload:u,req:e,res:r,pm:a}),a}},e.push(r),ut(t.props,(function(u,c){r={path:a+t.apiName+"/".concat(c,"/{").concat(c,"}"),method:n,handler:function(e,r){var a=ct(),u=e.params,i=e.payload;return o({method:n,apiName:t.apiName,propName:c,propValue:u[c],payload:i,req:e,res:r,pm:a}),a}},e.push(r)}))})),ut(t.props,(function(n,u){r={path:a+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:"DELETE",handler:function(e,r){var n=ct(),a=e.params;return o({method:"DELETE",apiName:t.apiName,propName:u,propValue:a[u],payload:null,req:e,res:r,pm:n}),n}},e.push(r)}))})),e}}));
//# sourceMappingURL=routes-to-api.umd.js.map
