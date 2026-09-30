"use strict";var v=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var d=v(function(B,o){
var x=require('@stdlib/blas-base-scopy/dist').ndarray,P=require('@stdlib/blas-ext-base-sfill/dist').ndarray;function j(e,r,i,n,s,a,t,u){return e<=0||(r<0&&(r=0),P(r,i[s],a,t,u),x(e,i,n,s,a,t,u+t*r)),a}o.exports=j
});var c=v(function(C,l){
var f=require('@stdlib/strided-base-stride2offset/dist'),m=d();function R(e,r,i,n,s,a){var t,u;return r<0&&(r=0),t=f(e,n),u=f(e+r,a),m(e,r,i,n,t,s,a,u)}l.exports=R
});var E=v(function(D,y){
var _=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=c(),O=d();_(p,"ndarray",O);y.exports=p
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=E(),q,g=h(b(__dirname,"./native.js"));w(g)?q=z:q=g;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
