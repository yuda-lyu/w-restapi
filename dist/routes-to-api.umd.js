/*!
 * routes-to-api v1.0.9
 * (c) 2018-2021 yuda-lyu(semisphere)
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self)["routes-to-api"]=e()}(this,(function(){"use strict";var t=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t};var e=function(t){return function(e,r,n){for(var o=-1,a=Object(e),u=n(e),c=u.length;c--;){var i=u[t?c:++o];if(!1===r(a[i],i,a))break}return e}}();var r=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n};function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function a(t){var e={exports:{}};return t(e,e.exports),e.exports}var u="object"==n(o)&&o&&o.Object===Object&&o,c="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,i=u||c||Function("return this")(),p=i.Symbol,f=Object.prototype,l=f.hasOwnProperty,b=f.toString,y=p?p.toStringTag:void 0;var s=function(t){var e=l.call(t,y),r=t[y];try{t[y]=void 0;var n=!0}catch(t){}var o=b.call(t);return n&&(e?t[y]=r:delete t[y]),o},d=Object.prototype.toString;var v=function(t){return d.call(t)},m=p?p.toStringTag:void 0;var j=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":m&&m in Object(t)?s(t):v(t)};var h=function(t){return null!=t&&"object"==n(t)};var g=function(t){return h(t)&&"[object Arguments]"==j(t)},O=Object.prototype,N=O.hasOwnProperty,T=O.propertyIsEnumerable,A=g(function(){return arguments}())?g:function(t){return h(t)&&N.call(t,"callee")&&!T.call(t,"callee")},S=Array.isArray;var E=function(){return!1},x=a((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r?i.Buffer:void 0,a=(o?o.isBuffer:void 0)||E;t.exports=a})),w=/^(?:0|[1-9]\d*)$/;var P=function(t,e){var r=n(t);return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&w.test(t))&&t>-1&&t%1==0&&t<e};var q=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},F={};F["[object Float32Array]"]=F["[object Float64Array]"]=F["[object Int8Array]"]=F["[object Int16Array]"]=F["[object Int32Array]"]=F["[object Uint8Array]"]=F["[object Uint8ClampedArray]"]=F["[object Uint16Array]"]=F["[object Uint32Array]"]=!0,F["[object Arguments]"]=F["[object Array]"]=F["[object ArrayBuffer]"]=F["[object Boolean]"]=F["[object DataView]"]=F["[object Date]"]=F["[object Error]"]=F["[object Function]"]=F["[object Map]"]=F["[object Number]"]=F["[object Object]"]=F["[object RegExp]"]=F["[object Set]"]=F["[object String]"]=F["[object WeakMap]"]=!1;var U=function(t){return h(t)&&q(t.length)&&!!F[j(t)]};var V=function(t){return function(e){return t(e)}},G=a((function(t,e){var r=e&&!e.nodeType&&e,n=r&&t&&!t.nodeType&&t,o=n&&n.exports===r&&u.process,a=function(){try{var t=n&&n.require&&n.require("util").types;return t||o&&o.binding&&o.binding("util")}catch(t){}}();t.exports=a})),B=G&&G.isTypedArray,D=B?V(B):U,I=Object.prototype.hasOwnProperty;var k=function(t,e){var n=S(t),o=!n&&A(t),a=!n&&!o&&x(t),u=!n&&!o&&!a&&D(t),c=n||o||a||u,i=c?r(t.length,String):[],p=i.length;for(var f in t)!e&&!I.call(t,f)||c&&("length"==f||a&&("offset"==f||"parent"==f)||u&&("buffer"==f||"byteLength"==f||"byteOffset"==f)||P(f,p))||i.push(f);return i},L=Object.prototype;var M=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||L)};var C=function(t,e){return function(r){return t(e(r))}}(Object.keys,Object),R=Object.prototype.hasOwnProperty;var W=function(t){if(!M(t))return C(t);var e=[];for(var r in Object(t))R.call(t,r)&&"constructor"!=r&&e.push(r);return e};var $=function(t){var e=n(t);return null!=t&&("object"==e||"function"==e)};var z=function(t){if(!$(t))return!1;var e=j(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e};var H=function(t){return null!=t&&q(t.length)&&!z(t)};var J=function(t){return H(t)?k(t):W(t)};var K=function(t,e){return function(r,n){if(null==r)return r;if(!H(r))return t(r,n);for(var o=r.length,a=e?o:-1,u=Object(r);(e?a--:++a<o)&&!1!==n(u[a],a,u););return r}}((function(t,r){return t&&e(t,r,J)}));var Q=function(t){return t};var X=function(t){return"function"==typeof t?t:Q};var Y=function(e,r){return(S(e)?t:K)(e,X(r))};function Z(){var t,e,r=new Promise((function(){t=arguments[0],e=arguments[1]}));return r.resolve=t,r.reject=e,r}function _(t){return"[object String]"===Object.prototype.toString.call(t)}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},n=[],o="/";return _(e)&&(o="/".concat(e,"/")),Y(t,(function(t){var e;e={path:o+t.apiName,method:"GET",handler:function(e,n){var o=Z();return r({method:"GET",apiName:t.apiName,propName:null,propValue:null,payload:null,req:e,res:n,pm:o}),o}},n.push(e),Y(t.props,(function(a,u){e={path:o+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:"GET",handler:function(e,n){var o=Z(),a=e.params;return r({method:"GET",apiName:t.apiName,propName:u,propValue:a[u],payload:null,req:e,res:n,pm:o}),o}},n.push(e)})),Y(["POST","PUT"],(function(a){e={path:o+t.apiName,method:a,handler:function(e,n){var o=Z(),u=e.payload;return r({method:a,apiName:t.apiName,propName:null,propValue:null,payload:u,req:e,res:n,pm:o}),o}},n.push(e),Y(t.props,(function(u,c){e={path:o+t.apiName+"/".concat(c,"/{").concat(c,"}"),method:a,handler:function(e,n){var o=Z(),u=e.params,i=e.payload;return r({method:a,apiName:t.apiName,propName:c,propValue:u[c],payload:i,req:e,res:n,pm:o}),o}},n.push(e)}))})),Y(t.props,(function(a,u){e={path:o+t.apiName+"/".concat(u,"/{").concat(u,"}"),method:"DELETE",handler:function(e,n){var o=Z(),a=e.params;return r({method:"DELETE",apiName:t.apiName,propName:u,propValue:a[u],payload:null,req:e,res:n,pm:o}),o}},n.push(e)}))})),n}}));
//# sourceMappingURL=routes-to-api.umd.js.map
