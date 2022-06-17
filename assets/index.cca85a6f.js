const $o=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};$o();function _r(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Uo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bo=_r(Uo);function ui(e){return!!e||e===""}function kr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?Yo(r):kr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(G(e))return e}}const Ho=/;(?![^(]*\))/g,Wo=/:(.+)/;function Yo(e){const t={};return e.split(Ho).forEach(n=>{if(n){const r=n.split(Wo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ar(e){let t="";if(Z(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Ar(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ko=e=>Z(e)?e:e==null?"":R(e)||G(e)&&(e.toString===hi||!L(e.toString))?JSON.stringify(e,di,2):String(e),di=(e,t)=>t&&t.__v_isRef?di(e,t.value):ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:mi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!gi(t)?String(t):t,Y={},pt=[],ye=()=>{},qo=()=>!1,Xo=/^on[^a-z]/,yn=e=>Xo.test(e),Or=e=>e.startsWith("onUpdate:"),ne=Object.assign,Er=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Vo=Object.prototype.hasOwnProperty,D=(e,t)=>Vo.call(e,t),R=Array.isArray,ht=e=>xn(e)==="[object Map]",mi=e=>xn(e)==="[object Set]",L=e=>typeof e=="function",Z=e=>typeof e=="string",Cr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",pi=e=>G(e)&&L(e.then)&&L(e.catch),hi=Object.prototype.toString,xn=e=>hi.call(e),Go=e=>xn(e).slice(8,-1),gi=e=>xn(e)==="[object Object]",Pr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Qt=_r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Jo=/-(\w)/g,Ie=wn(e=>e.replace(Jo,(t,n)=>n?n.toUpperCase():"")),Zo=/\B([A-Z])/g,xt=wn(e=>e.replace(Zo,"-$1").toLowerCase()),_n=wn(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=wn(e=>e?`on${_n(e)}`:""),sn=(e,t)=>!Object.is(e,t),Dn=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ln=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let da;const es=()=>da||(da=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ae;class ts{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function ns(e,t=Ae){t&&t.active&&t.effects.push(e)}const Ir=e=>{const t=new Set(e);return t.w=0,t.n=0,t},vi=e=>(e.w&qe)>0,bi=e=>(e.n&qe)>0,rs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},as=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];vi(a)&&!bi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Xn=new WeakMap;let It=0,qe=1;const Vn=30;let he;const tt=Symbol(""),Gn=Symbol("");class Tr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ns(this,r)}run(){if(!this.active)return this.fn();let t=he,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=he,he=this,Ye=!0,qe=1<<++It,It<=Vn?rs(this):ma(this),this.fn()}finally{It<=Vn&&as(this),qe=1<<--It,he=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){he===this?this.deferStop=!0:this.active&&(ma(this),this.onStop&&this.onStop(),this.active=!1)}}function ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const yi=[];function wt(){yi.push(Ye),Ye=!1}function _t(){const e=yi.pop();Ye=e===void 0?!0:e}function ue(e,t,n){if(Ye&&he){let r=Xn.get(e);r||Xn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Ir()),xi(a)}}function xi(e,t){let n=!1;It<=Vn?bi(e)||(e.n|=qe,n=!vi(e)):n=!e.has(he),n&&(e.add(he),he.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Xn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Pr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),ht(e)&&s.push(o.get(Gn)));break;case"delete":R(e)||(s.push(o.get(tt)),ht(e)&&s.push(o.get(Gn)));break;case"set":ht(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&Jn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Jn(Ir(l))}}function Jn(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&pa(r);for(const r of n)r.computed||pa(r)}function pa(e,t){(e!==he||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const is=_r("__proto__,__v_isRef,__isVue"),wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Cr)),os=Sr(),ss=Sr(!1,!0),ls=Sr(!0),ha=fs();function fs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){wt();const r=U(this)[t].apply(this,n);return _t(),r}}),e}function Sr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Os:Ei:t?Oi:Ai).get(r))return r;const o=R(r);if(!e&&o&&D(ha,a))return Reflect.get(ha,a,i);const s=Reflect.get(r,a,i);return(Cr(a)?wi.has(a):is(a))||(e||ue(r,"get",a),t)?s:te(s)?o&&Pr(a)?s:s.value:G(s)?e?Ci(s):Fr(s):s}}const cs=_i(),us=_i(!0);function _i(e=!1){return function(n,r,a,i){let o=n[r];if(jt(o)&&te(o)&&!te(a))return!1;if(!e&&!jt(a)&&(Zn(a)||(a=U(a),o=U(o)),!R(n)&&te(o)&&!te(a)))return o.value=a,!0;const s=R(n)&&Pr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?sn(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function ds(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function ms(e,t){const n=Reflect.has(e,t);return(!Cr(t)||!wi.has(t))&&ue(e,"has",t),n}function ps(e){return ue(e,"iterate",R(e)?"length":tt),Reflect.ownKeys(e)}const ki={get:os,set:cs,deleteProperty:ds,has:ms,ownKeys:ps},hs={get:ls,set(e,t){return!0},deleteProperty(e,t){return!0}},gs=ne({},ki,{get:ss,set:us}),Nr=e=>e,kn=e=>Reflect.getPrototypeOf(e);function qt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=kn(a),s=r?Nr:n?zr:Lr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Xt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Vt(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",tt),Reflect.get(e,"size",e)}function ga(e){e=U(e);const t=U(this);return kn(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function va(e,t){t=U(t);const n=U(this),{has:r,get:a}=kn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?sn(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function ba(e){const t=U(this),{has:n,get:r}=kn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function ya(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Gt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Nr:e?zr:Lr;return!e&&ue(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Jt(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=ht(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Nr:t?zr:Lr;return!t&&ue(i,"iterate",l?Gn:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function vs(){const e={get(i){return qt(this,i)},get size(){return Vt(this)},has:Xt,add:ga,set:va,delete:ba,clear:ya,forEach:Gt(!1,!1)},t={get(i){return qt(this,i,!1,!0)},get size(){return Vt(this)},has:Xt,add:ga,set:va,delete:ba,clear:ya,forEach:Gt(!1,!0)},n={get(i){return qt(this,i,!0)},get size(){return Vt(this,!0)},has(i){return Xt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Gt(!0,!1)},r={get(i){return qt(this,i,!0,!0)},get size(){return Vt(this,!0)},has(i){return Xt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Gt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Jt(i,!1,!1),n[i]=Jt(i,!0,!1),t[i]=Jt(i,!1,!0),r[i]=Jt(i,!0,!0)}),[e,n,t,r]}const[bs,ys,xs,ws]=vs();function Mr(e,t){const n=t?e?ws:xs:e?ys:bs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const _s={get:Mr(!1,!1)},ks={get:Mr(!1,!0)},As={get:Mr(!0,!1)},Ai=new WeakMap,Oi=new WeakMap,Ei=new WeakMap,Os=new WeakMap;function Es(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cs(e){return e.__v_skip||!Object.isExtensible(e)?0:Es(Go(e))}function Fr(e){return jt(e)?e:Rr(e,!1,ki,_s,Ai)}function Ps(e){return Rr(e,!1,gs,ks,Oi)}function Ci(e){return Rr(e,!0,hs,As,Ei)}function Rr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Cs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function gt(e){return jt(e)?gt(e.__v_raw):!!(e&&e.__v_isReactive)}function jt(e){return!!(e&&e.__v_isReadonly)}function Zn(e){return!!(e&&e.__v_isShallow)}function Pi(e){return gt(e)||jt(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ii(e){return ln(e,"__v_skip",!0),e}const Lr=e=>G(e)?Fr(e):e,zr=e=>G(e)?Ci(e):e;function Is(e){Ye&&he&&(e=U(e),xi(e.dep||(e.dep=Ir())))}function Ts(e,t){e=U(e),e.dep&&Jn(e.dep)}function te(e){return!!(e&&e.__v_isRef===!0)}function Ss(e){return te(e)?e.value:e}const Ns={get:(e,t,n)=>Ss(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return te(a)&&!te(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Ti(e){return gt(e)?e:new Proxy(e,Ns)}class Ms{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Tr(t,()=>{this._dirty||(this._dirty=!0,Ts(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Is(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Fs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ye):(r=e.get,a=e.set),new Ms(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){An(i,t,n)}return a}function xe(e,t,n,r){if(L(e)){const i=Ke(e,t,n,r);return i&&pi(i)&&i.catch(o=>{An(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(xe(e[i],t,n,r));return a}function An(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}Rs(e,n,a,r)}function Rs(e,t,n,r=!0){console.error(e)}let fn=!1,Qn=!1;const ce=[];let Ne=0;const Nt=[];let Tt=null,ft=0;const Mt=[];let He=null,ct=0;const Si=Promise.resolve();let jr=null,er=null;function Ls(e){const t=jr||Si;return e?t.then(this?e.bind(this):e):t}function zs(e){let t=Ne+1,n=ce.length;for(;t<n;){const r=t+n>>>1;Dt(ce[r])<e?t=r+1:n=r}return t}function Ni(e){(!ce.length||!ce.includes(e,fn&&e.allowRecurse?Ne+1:Ne))&&e!==er&&(e.id==null?ce.push(e):ce.splice(zs(e.id),0,e),Mi())}function Mi(){!fn&&!Qn&&(Qn=!0,jr=Si.then(Li))}function js(e){const t=ce.indexOf(e);t>Ne&&ce.splice(t,1)}function Fi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Mi()}function Ds(e){Fi(e,Tt,Nt,ft)}function $s(e){Fi(e,He,Mt,ct)}function On(e,t=null){if(Nt.length){for(er=t,Tt=[...new Set(Nt)],Nt.length=0,ft=0;ft<Tt.length;ft++)Tt[ft]();Tt=null,ft=0,er=null,On(e,t)}}function Ri(e){if(On(),Mt.length){const t=[...new Set(Mt)];if(Mt.length=0,He){He.push(...t);return}for(He=t,He.sort((n,r)=>Dt(n)-Dt(r)),ct=0;ct<He.length;ct++)He[ct]();He=null,ct=0}}const Dt=e=>e.id==null?1/0:e.id;function Li(e){Qn=!1,fn=!0,On(e),ce.sort((n,r)=>Dt(n)-Dt(r));const t=ye;try{for(Ne=0;Ne<ce.length;Ne++){const n=ce[Ne];n&&n.active!==!1&&Ke(n,null,14)}}finally{Ne=0,ce.length=0,Ri(),fn=!1,jr=null,(ce.length||Nt.length||Mt.length)&&Li(e)}}function Us(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(Qo))}let s,l=r[s=jn(t)]||r[s=jn(Ie(t))];!l&&i&&(l=r[s=jn(xt(t))]),l&&xe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,xe(u,e,6,a)}}function zi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=zi(u,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):ne(o,i),r.set(e,o),o)}function En(e,t){return!e||!yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,xt(t))||D(e,t))}let Ce=null,ji=null;function cn(e){const t=Ce;return Ce=e,ji=e&&e.type.__scopeId||null,t}function Bs(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ia(-1);const i=cn(t),o=e(...a);return cn(i),r._d&&Ia(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function $n(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:F,inheritAttrs:z}=e;let S,y;const E=cn(e);try{if(n.shapeFlag&4){const j=a||r;S=Ee(d.call(j,j,m,i,O,b,F)),y=l}else{const j=t;S=Ee(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Hs(l)}}catch(j){Ft.length=0,An(j,e,1),S=se($t)}let N=S;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:W}=N;j.length&&W&7&&(o&&j.some(Or)&&(y=Ws(y,o)),N=bt(N,y))}return n.dirs&&(N=bt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,cn(E),S}const Hs=e=>{let t;for(const n in e)(n==="class"||n==="style"||yn(n))&&((t||(t={}))[n]=e[n]);return t},Ws=(e,t)=>{const n={};for(const r in e)(!Or(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ys(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xa(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!En(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?xa(r,o,u):!0:!!o;return!1}function xa(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!En(n,i))return!0}return!1}function Ks({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const qs=e=>e.__isSuspense;function Xs(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):$s(e)}function Vs(e,t){if(J){let n=J.provides;const r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function Un(e,t,n=!1){const r=J||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const wa={};function en(e,t,n){return Di(e,t,n)}function Di(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=J;let l,u=!1,d=!1;if(te(e)?(l=()=>e.value,u=Zn(e)):gt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(y=>gt(y)||Zn(y)),l=()=>e.map(y=>{if(te(y))return y.value;if(gt(y))return ut(y);if(L(y))return Ke(y,s,2)})):L(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xe(e,s,3,[b])}:l=ye,t&&r){const y=l;l=()=>ut(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Bt)return b=ye,t?n&&xe(t,s,3,[l(),d?[]:void 0,b]):l(),ye;let O=d?[]:wa;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((E,N)=>sn(E,O[N])):sn(y,O)))&&(m&&m(),xe(t,s,3,[y,O===wa?void 0:O,b]),O=y)}else S.run()};F.allowRecurse=!!t;let z;a==="sync"?z=F:a==="post"?z=()=>oe(F,s&&s.suspense):z=()=>Ds(F);const S=new Tr(l,z);return t?n?F():O=S.run():a==="post"?oe(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Er(s.scope.effects,S)}}function Gs(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?$i(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=J;yt(this);const s=Di(a,i.bind(r),n);return o?yt(o):nt(),s}function $i(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ut(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),te(e))ut(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)ut(e[n],t);else if(mi(e)||ht(e))e.forEach(n=>{ut(n,t)});else if(gi(e))for(const n in e)ut(e[n],t);return e}function Dr(e){return L(e)?{setup:e,name:e.name}:e}const tn=e=>!!e.type.__asyncLoader,Ui=e=>e.type.__isKeepAlive;function Js(e,t){Bi(e,"a",t)}function Zs(e,t){Bi(e,"da",t)}function Bi(e,t,n=J){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Cn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Ui(a.parent.vnode)&&Qs(r,t,n,a),a=a.parent}}function Qs(e,t,n,r){const a=Cn(t,e,r,!0);Hi(()=>{Er(r[t],a)},n)}function Cn(e,t,n=J,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;wt(),yt(n);const s=xe(t,n,e,o);return nt(),_t(),s});return r?a.unshift(i):a.push(i),i}}const je=e=>(t,n=J)=>(!Bt||e==="sp")&&Cn(e,t,n),el=je("bm"),tl=je("m"),nl=je("bu"),rl=je("u"),al=je("bum"),Hi=je("um"),il=je("sp"),ol=je("rtg"),sl=je("rtc");function ll(e,t=J){Cn("ec",e,t)}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(wt(),xe(l,n,8,[e.el,s,e,t]),_t())}}const Wi="components";function fl(e,t){return ul(Wi,e,!0,t)||e}const cl=Symbol();function ul(e,t,n=!0,r=!1){const a=Ce||J;if(a){const i=a.type;if(e===Wi){const s=Bl(i,!1);if(s&&(s===t||s===Ie(t)||s===_n(Ie(t))))return i}const o=_a(a[e]||i[e],t)||_a(a.appContext[e],t);return!o&&r?i:o}}function _a(e,t){return e&&(e[t]||e[Ie(t)]||e[_n(Ie(t))])}const tr=e=>e?to(e)?Yr(e)||e.proxy:tr(e.parent):null,un=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>tr(e.parent),$root:e=>tr(e.root),$emit:e=>e.emit,$options:e=>Ki(e),$forceUpdate:e=>e.f||(e.f=()=>Ni(e.update)),$nextTick:e=>e.n||(e.n=Ls.bind(e.proxy)),$watch:e=>Gs.bind(e)}),dl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];nr&&(o[t]=0)}}const d=un[t];let m,b;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(un,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let nr=!0;function ml(e){const t=Ki(e),n=e.proxy,r=e.ctx;nr=!1,t.beforeCreate&&ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:F,activated:z,deactivated:S,beforeDestroy:y,beforeUnmount:E,destroyed:N,unmounted:j,render:W,renderTracked:Q,renderTriggered:le,errorCaptured:we,serverPrefetch:re,expose:At,inheritAttrs:it,components:Ot,directives:Yt,filters:oa}=t;if(u&&pl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];L(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);G(V)&&(e.data=Fr(V))}if(nr=!0,i)for(const V in i){const K=i[V],Te=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):ye,Rn=!L(K)&&L(K.set)?K.set.bind(n):ye,Et=me({get:Te,set:Rn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Et.value,set:ot=>Et.value=ot})}if(s)for(const V in s)Yi(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{Vs(K,V[K])})}d&&ka(d,e,"c");function ae(V,K){R(K)?K.forEach(Te=>V(Te.bind(n))):K&&V(K.bind(n))}if(ae(el,m),ae(tl,b),ae(nl,O),ae(rl,F),ae(Js,z),ae(Zs,S),ae(ll,we),ae(sl,Q),ae(ol,le),ae(al,E),ae(Hi,j),ae(il,re),R(At))if(At.length){const V=e.exposed||(e.exposed={});At.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});W&&e.render===ye&&(e.render=W),it!=null&&(e.inheritAttrs=it),Ot&&(e.components=Ot),Yt&&(e.directives=Yt)}function pl(e,t,n=ye,r=!1){R(e)&&(e=rr(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Un(i.from||a,i.default,!0):o=Un(i.from||a):o=Un(i),te(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function ka(e,t,n){xe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Yi(e,t,n,r){const a=r.includes(".")?$i(n,r):()=>n[r];if(Z(e)){const i=t[e];L(i)&&en(a,i)}else if(L(e))en(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>Yi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&en(a,i,e)}}function Ki(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>dn(l,u,o,!0)),dn(l,t,o)),i.set(t,l),l}function dn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&dn(e,i,n,!0),a&&a.forEach(o=>dn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=hl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const hl={data:Aa,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:Ze,directives:Ze,watch:vl,provide:Aa,inject:gl};function Aa(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function gl(e,t){return Ze(rr(e),rr(t))}function rr(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ee(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ne(ne(Object.create(null),e),t):t}function vl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=ee(e[r],t[r]);return n}function bl(e,t,n,r=!1){const a={},i={};ln(i,Pn,1),e.propsDefaults=Object.create(null),qi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ps(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function yl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(En(e.emitsOptions,b))continue;const O=t[b];if(l)if(D(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const F=Ie(b);a[F]=ar(l,s,F,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{qi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=xt(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=ar(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function qi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Qt(l))continue;const u=t[l];let d;a&&D(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:En(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=ar(a,l,m,u[m],e,!D(u,m))}}return o}function ar(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(yt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===xt(n))&&(r=!0))}return r}function Xi(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,O]=Xi(m,t,!0);ne(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,pt),pt;if(R(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Oa(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Ie(d);if(Oa(m)){const b=i[d],O=o[m]=R(b)||L(b)?{type:b}:b;if(O){const F=Pa(Boolean,O.type),z=Pa(String,O.type);O[0]=F>-1,O[1]=z<0||F<z,(F>-1||D(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Oa(e){return e[0]!=="$"}function Ea(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ca(e,t){return Ea(e)===Ea(t)}function Pa(e,t){return R(t)?t.findIndex(n=>Ca(n,e)):L(t)&&Ca(t,e)?0:-1}const Vi=e=>e[0]==="_"||e==="$stable",$r=e=>R(e)?e.map(Ee):[Ee(e)],xl=(e,t,n)=>{if(t._n)return t;const r=Bs((...a)=>$r(t(...a)),n);return r._c=!1,r},Gi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Vi(a))continue;const i=e[a];if(L(i))t[a]=xl(a,i,r);else if(i!=null){const o=$r(i);t[a]=()=>o}}},Ji=(e,t)=>{const n=$r(t);e.slots.default=()=>n},wl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),ln(t,"_",n)):Gi(t,e.slots={})}else e.slots={},t&&Ji(e,t);ln(e.slots,Pn,1)},_l=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Gi(t,a)),o=t}else t&&(Ji(e,t),o={default:1});if(i)for(const s in a)!Vi(s)&&!(s in o)&&delete a[s]};function Zi(){return{app:null,config:{isNativeTag:qo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kl=0;function Al(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=Zi(),o=new Set;let s=!1;const l=i.app={_uid:kl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Wl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=se(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Yr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function ir(e,t,n,r,a=!1){if(R(e)){e.forEach((b,O)=>ir(b,t&&(R(t)?t[O]:t),n,r,a));return}if(tn(r)&&!a)return;const i=r.shapeFlag&4?Yr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,D(m,u)&&(m[u]=null)):te(u)&&(u.value=null)),L(l))Ke(l,s,12,[o,d]);else{const b=Z(l),O=te(l);if(b||O){const F=()=>{if(e.f){const z=b?d[l]:l.value;a?R(z)&&Er(z,i):R(z)?z.includes(i)||z.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,oe(F,n)):F()}}}const oe=Xs;function Ol(e){return El(e)}function El(e,t){const n=es();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=ye,cloneNode:F,insertStaticContent:z}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Pt(f,c)&&(g=Kt(f),$e(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:C}=c;switch(v){case Ur:y(f,c,p,g);break;case $t:E(f,c,p,g);break;case Bn:f==null&&N(c,p,g,k);break;case Oe:Yt(f,c,p,g,h,w,k,x,_);break;default:C&1?Q(f,c,p,g,h,w,k,x,_):C&6?oa(f,c,p,g,h,w,k,x,_):(C&64||C&128)&&v.process(f,c,p,g,h,w,k,x,_,st)}P!=null&&h&&ir(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},Q=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,w,k,x,_):At(f,c,h,w,k,x,_)},le=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:C,shapeFlag:I,transition:M,patchFlag:$,dirs:B}=f;if(f.el&&F!==void 0&&$===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,C&&C.is,C),I&8?d(_,f.children):I&16&&re(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),B&&Ge(f,null,g,"created"),C){for(const q in C)q!=="value"&&!Qt(q)&&i(_,q,null,C[q],w,f.children,g,h,Se);"value"in C&&i(_,"value",null,C.value),(v=C.onVnodeBeforeMount)&&ke(v,g,f)}we(_,f,f.scopeId,k,g)}B&&Ge(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,p),((v=C&&C.onVnodeMounted)||H||B)&&oe(()=>{v&&ke(v,g,f),H&&M.enter(_),B&&Ge(f,null,g,"mounted")},h)},we=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;we(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},re=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?We(f[v]):Ee(f[v]);S(null,P,c,p,g,h,w,k,x)}},At=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const C=f.props||Y,I=c.props||Y;let M;p&&Je(p,!1),(M=I.onVnodeBeforeUpdate)&&ke(M,p,c,f),P&&Ge(c,f,p,"beforeUpdate"),p&&Je(p,!0);const $=h&&c.type!=="foreignObject";if(v?it(f.dynamicChildren,v,x,p,g,$,w):k||Te(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)Ot(x,c,C,I,p,g,h);else if(_&2&&C.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",C.style,I.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const q=B[H],pe=C[q],lt=I[q];(lt!==pe||q==="value")&&i(x,q,pe,lt,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Ot(x,c,C,I,p,g,h);((M=I.onVnodeUpdated)||P)&&oe(()=>{M&&ke(M,p,c,f),P&&Ge(c,f,p,"updated")},g)},it=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Oe||!Pt(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},Ot=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(Qt(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==Y)for(const x in p)!Qt(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Yt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),re(c.children,p,P,h,w,k,x,_)):C>0&&C&64&&I&&f.dynamicChildren?(it(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&Qi(f,c,!0)):Te(f,c,p,P,h,w,k,x,_)},oa=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Fn(c,p,g,h,w,k,_):ae(f,c,_)},Fn=(f,c,p,g,h,w,k)=>{const x=f.component=zl(f,g,h);if(Ui(f)&&(x.ctx.renderer=st),jl(x),x.asyncDep){if(h&&h.registerDep(x,V),!f.el){const _=x.subTree=se($t);E(null,_,c,p)}return}V(x,f,c,p,h,w,k)},ae=(f,c,p)=>{const g=c.component=f.component;if(Ys(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,js(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:C,u:I,parent:M,vnode:$}=f,B=P,H;Je(f,!1),P?(P.el=$.el,K(f,P,k)):P=$,C&&Dn(C),(H=P.props&&P.props.onVnodeBeforeUpdate)&&ke(H,M,P,$),Je(f,!0);const q=$n(f),pe=f.subTree;f.subTree=q,S(pe,q,m(pe.el),Kt(pe),f,h,w),P.el=q.el,B===null&&Ks(f,q.el),I&&oe(I,h),(H=P.props&&P.props.onVnodeUpdated)&&oe(()=>ke(H,M,P,$),h)}else{let P;const{el:C,props:I}=c,{bm:M,m:$,parent:B}=f,H=tn(c);if(Je(f,!1),M&&Dn(M),!H&&(P=I&&I.onVnodeBeforeMount)&&ke(P,B,c),Je(f,!0),C&&zn){const q=()=>{f.subTree=$n(f),zn(C,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=$n(f);S(null,q,p,g,f,h,w),c.el=q.el}if($&&oe($,h),!H&&(P=I&&I.onVnodeMounted)){const q=c;oe(()=>ke(P,B,q),h)}(c.shapeFlag&256||B&&tn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&oe(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Tr(x,()=>Ni(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Je(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,yl(f,c.props,g,p),_l(f,c.children,p),wt(),On(void 0,f.update),_t()},Te=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,C=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Et(v,C,p,g,h,w,k,x,_);return}else if(I&256){Rn(v,C,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),C!==v&&d(p,C)):P&16?M&16?Et(v,C,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&re(C,p,g,h,w,k,x,_))},Rn=(f,c,p,g,h,w,k,x,_)=>{f=f||pt,c=c||pt;const v=f.length,P=c.length,C=Math.min(v,P);let I;for(I=0;I<C;I++){const M=c[I]=_?We(c[I]):Ee(c[I]);S(f[I],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,C):re(c,p,g,h,w,k,x,_,C)},Et=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let C=f.length-1,I=P-1;for(;v<=C&&v<=I;){const M=f[v],$=c[v]=_?We(c[v]):Ee(c[v]);if(Pt(M,$))S(M,$,p,null,h,w,k,x,_);else break;v++}for(;v<=C&&v<=I;){const M=f[C],$=c[I]=_?We(c[I]):Ee(c[I]);if(Pt(M,$))S(M,$,p,null,h,w,k,x,_);else break;C--,I--}if(v>C){if(v<=I){const M=I+1,$=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?We(c[v]):Ee(c[v]),p,$,h,w,k,x,_),v++}}else if(v>I)for(;v<=C;)$e(f[v],h,w,!0),v++;else{const M=v,$=v,B=new Map;for(v=$;v<=I;v++){const fe=c[v]=_?We(c[v]):Ee(c[v]);fe.key!=null&&B.set(fe.key,v)}let H,q=0;const pe=I-$+1;let lt=!1,fa=0;const Ct=new Array(pe);for(v=0;v<pe;v++)Ct[v]=0;for(v=M;v<=C;v++){const fe=f[v];if(q>=pe){$e(fe,h,w,!0);continue}let _e;if(fe.key!=null)_e=B.get(fe.key);else for(H=$;H<=I;H++)if(Ct[H-$]===0&&Pt(fe,c[H])){_e=H;break}_e===void 0?$e(fe,h,w,!0):(Ct[_e-$]=v+1,_e>=fa?fa=_e:lt=!0,S(fe,c[_e],p,null,h,w,k,x,_),q++)}const ca=lt?Cl(Ct):pt;for(H=ca.length-1,v=pe-1;v>=0;v--){const fe=$+v,_e=c[fe],ua=fe+1<P?c[fe+1].el:g;Ct[v]===0?S(null,_e,p,ua,h,w,k,x,_):lt&&(H<0||v!==ca[H]?ot(_e,p,ua,2):H--)}}},ot=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){ot(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,st);return}if(k===Oe){r(w,c,p);for(let C=0;C<_.length;C++)ot(_[C],c,p,g);r(f.anchor,c,p);return}if(k===Bn){j(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),oe(()=>x.enter(w),h);else{const{leave:C,delayLeave:I,afterLeave:M}=x,$=()=>r(w,c,p),B=()=>{C(w,()=>{$(),M&&M()})};I?I(w,$,B):B()}else r(w,c,p)},$e=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:C,dirs:I}=f;if(x!=null&&ir(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,$=!tn(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&ke(B,c,f),P&6)Do(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Ge(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,st,g):v&&(w!==Oe||C>0&&C&64)?Se(v,c,p,!1,!0):(w===Oe&&C&384||!h&&P&16)&&Se(_,c,p),g&&sa(f)}($&&(B=k&&k.onVnodeUnmounted)||M)&&oe(()=>{B&&ke(B,c,f),M&&Ge(f,null,c,"unmounted")},p)},sa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Oe){jo(p,g);return}if(c===Bn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},jo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Do=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&Dn(g),h.stop(),w&&(w.active=!1,$e(k,f,c,p)),x&&oe(x,c),oe(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)$e(f[k],c,p,g,h)},Kt=f=>f.shapeFlag&6?Kt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),la=(f,c,p)=>{f==null?c._vnode&&$e(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),Ri(),c._vnode=f},st={p:S,um:$e,m:ot,r:sa,mt:Fn,mc:re,pc:Te,pbc:it,n:Kt,o:e};let Ln,zn;return t&&([Ln,zn]=t(st)),{render:la,hydrate:Ln,createApp:Al(la,Ln)}}function Je({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Qi(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||Qi(o,s))}}function Cl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Pl=e=>e.__isTeleport,Oe=Symbol(void 0),Ur=Symbol(void 0),$t=Symbol(void 0),Bn=Symbol(void 0),Ft=[];let ve=null;function Br(e=!1){Ft.push(ve=e?null:[])}function Il(){Ft.pop(),ve=Ft[Ft.length-1]||null}let Ut=1;function Ia(e){Ut+=e}function Tl(e){return e.dynamicChildren=Ut>0?ve||pt:null,Il(),Ut>0&&ve&&ve.push(e),e}function Hr(e,t,n,r,a,i){return Tl(Me(e,t,n,r,a,i,!0))}function or(e){return e?e.__v_isVNode===!0:!1}function Pt(e,t){return e.type===t.type&&e.key===t.key}const Pn="__vInternal",eo=({key:e})=>e!=null?e:null,nn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||te(e)||L(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function Me(e,t=null,n=null,r=0,a=null,i=e===Oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&eo(t),ref:t&&nn(t),scopeId:ji,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Wr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Ut>0&&!o&&ve&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ve.push(l),l}const se=Sl;function Sl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===cl)&&(e=$t),or(e)){const s=bt(e,t,!0);return n&&Wr(s,n),Ut>0&&!i&&ve&&(s.shapeFlag&6?ve[ve.indexOf(e)]=s:ve.push(s)),s.patchFlag|=-2,s}if(Hl(e)&&(e=e.__vccOpts),t){t=Nl(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=Ar(s)),G(l)&&(Pi(l)&&!R(l)&&(l=ne({},l)),t.style=kr(l))}const o=Z(e)?1:qs(e)?128:Pl(e)?64:G(e)?4:L(e)?2:0;return Me(e,t,n,r,a,o,i,!0)}function Nl(e){return e?Pi(e)||Pn in e?ne({},e):e:null}function bt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Fl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&eo(s),ref:t&&t.ref?n&&a?R(a)?a.concat(nn(t)):[a,nn(t)]:nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&bt(e.ssContent),ssFallback:e.ssFallback&&bt(e.ssFallback),el:e.el,anchor:e.anchor}}function Ml(e=" ",t=0){return se(Ur,null,e,t)}function Ee(e){return e==null||typeof e=="boolean"?se($t):R(e)?se(Oe,null,e.slice()):typeof e=="object"?We(e):se(Ur,null,String(e))}function We(e){return e.el===null||e.memo?e:bt(e)}function Wr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Wr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Pn in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Ml(t)]):n=8);e.children=t,e.shapeFlag|=n}function Fl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ar([t.class,r.class]));else if(a==="style")t.style=kr([t.style,r.style]);else if(yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ke(e,t,n,r=null){xe(e,t,7,[n,r])}const Rl=Zi();let Ll=0;function zl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Rl,i={uid:Ll++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ts(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xi(r,a),emitsOptions:zi(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Us.bind(null,i),e.ce&&e.ce(i),i}let J=null;const yt=e=>{J=e,e.scope.on()},nt=()=>{J&&J.scope.off(),J=null};function to(e){return e.vnode.shapeFlag&4}let Bt=!1;function jl(e,t=!1){Bt=t;const{props:n,children:r}=e.vnode,a=to(e);bl(e,n,a,t),wl(e,r);const i=a?Dl(e,t):void 0;return Bt=!1,i}function Dl(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ii(new Proxy(e.ctx,dl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Ul(e):null;yt(e),wt();const i=Ke(r,e,0,[e.props,a]);if(_t(),nt(),pi(i)){if(i.then(nt,nt),t)return i.then(o=>{Ta(e,o,t)}).catch(o=>{An(o,e,0)});e.asyncDep=i}else Ta(e,i,t)}else no(e,t)}function Ta(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Ti(t)),no(e,n)}let Sa;function no(e,t,n){const r=e.type;if(!e.render){if(!t&&Sa&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=Sa(a,u)}}e.render=r.render||ye}yt(e),wt(),ml(e),_t(),nt()}function $l(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function Ul(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=$l(e))},slots:e.slots,emit:e.emit,expose:t}}function Yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ti(Ii(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in un)return un[n](e)}}))}function Bl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Hl(e){return L(e)&&"__vccOpts"in e}const me=(e,t)=>Fs(e,t,Bt);function ro(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?or(t)?se(e,null,[t]):se(e,t):se(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&or(n)&&(n=[n]),se(e,t,n))}const Wl="3.2.37",Yl="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,Na=Qe&&Qe.createElement("template"),Kl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(Yl,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Na.innerHTML=r?`<svg>${e}</svg>`:e;const s=Na.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function ql(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Xl(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)sr(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&sr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ma=/\s*!important$/;function sr(e,t,n){if(R(n))n.forEach(r=>sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Vl(e,t);Ma.test(n)?e.setProperty(xt(r),n.replace(Ma,""),"important"):e[r]=n}}const Fa=["Webkit","Moz","ms"],Hn={};function Vl(e,t){const n=Hn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Hn[t]=r;r=_n(r);for(let a=0;a<Fa.length;a++){const i=Fa[a]+r;if(i in e)return Hn[t]=i}return t}const Ra="http://www.w3.org/1999/xlink";function Gl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ra,t.slice(6,t.length)):e.setAttributeNS(Ra,t,n);else{const i=Bo(t);n==null||i&&!ui(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Jl(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ui(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[ao,Zl]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let lr=0;const Ql=Promise.resolve(),ef=()=>{lr=0},tf=()=>lr||(Ql.then(ef),lr=ao());function nf(e,t,n,r){e.addEventListener(t,n,r)}function rf(e,t,n,r){e.removeEventListener(t,n,r)}function af(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=of(t);if(r){const u=i[t]=sf(r,a);nf(e,s,u,l)}else o&&(rf(e,s,o,l),i[t]=void 0)}}const La=/(?:Once|Passive|Capture)$/;function of(e){let t;if(La.test(e)){t={};let n;for(;n=e.match(La);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[xt(e.slice(2)),t]}function sf(e,t){const n=r=>{const a=r.timeStamp||ao();(Zl||a>=n.attached-1)&&xe(lf(r,n.value),t,5,[r])};return n.value=e,n.attached=tf(),n}function lf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const za=/^on[a-z]/,ff=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?ql(e,r,a):t==="style"?Xl(e,n,r):yn(t)?Or(t)||af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):cf(e,t,r,a))?Jl(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Gl(e,t,r,a))};function cf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&za.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||za.test(t)&&Z(n)?!1:t in e}const uf=ne({patchProp:ff},Kl);let ja;function df(){return ja||(ja=Ol(uf))}const mf=(...e)=>{const t=df().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=pf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function pf(e){return Z(e)?document.querySelector(e):e}var hf="/assets/W3C.e5319116.svg";var io=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const gf={class:"link"},vf=["href","title"],bf={class:"name"},yf={__name:"LinkComp",props:{name:{type:String,required:!0},title:{type:String,required:!0},url:{type:String,required:!0},icon:{type:String,required:!1}},setup(e){return(t,n)=>{const r=fl("font-awesome-icon");return Br(),Hr("div",gf,[Me("a",{target:"_blank",href:e.url,title:e.title},[se(r,{icon:e.icon},null,8,["icon"]),Me("span",bf,Ko(e.name),1)],8,vf)])}}};var xf=io(yf,[["__scopeId","data-v-23214de4"]]);const wf={class:"login"},_f={__name:"LoginComp",setup(e){return(t,n)=>(Br(),Hr("div",wf,[se(xf,{url:"https://api.web5.claims/github",name:"Github",icon:"fa-brands fa-github",title:"Get your Github claims"})]))}};var kf=io(_f,[["__scopeId","data-v-f28ae452"]]);const Af=Me("header",null,[Me("img",{alt:"Vue logo",class:"logo",src:hf,width:"125",height:"125"}),Me("div",{class:"wrapper"},[Me("h1",null,"Get your Web5 claims for")])],-1),Of={__name:"App",setup(e){return(t,n)=>(Br(),Hr(Oe,null,[Af,Me("main",null,[se(kf)])],64))}};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Da(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Da(Object(n),!0).forEach(function(r){Pf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Da(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function mn(e){return mn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mn(e)}function Ef(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function $a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Cf(e,t,n){return t&&$a(e.prototype,t),n&&$a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Pf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kr(e,t){return Tf(e)||Nf(e,t)||oo(e,t)||Ff()}function In(e){return If(e)||Sf(e)||oo(e)||Mf()}function If(e){if(Array.isArray(e))return fr(e)}function Tf(e){if(Array.isArray(e))return e}function Sf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Nf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function oo(e,t){if(!!e){if(typeof e=="string")return fr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return fr(e,t)}}function fr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Mf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ff(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ua=function(){},qr={},so={},lo=null,fo={mark:Ua,measure:Ua};try{typeof window!="undefined"&&(qr=window),typeof document!="undefined"&&(so=document),typeof MutationObserver!="undefined"&&(lo=MutationObserver),typeof performance!="undefined"&&(fo=performance)}catch{}var Rf=qr.navigator||{},Ba=Rf.userAgent,Ha=Ba===void 0?"":Ba,Xe=qr,X=so,Wa=lo,Zt=fo;Xe.document;var De=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",co=~Ha.indexOf("MSIE")||~Ha.indexOf("Trident/"),Re="___FONT_AWESOME___",cr=16,uo="fa",mo="svg-inline--fa",rt="data-fa-i2svg",ur="data-fa-pseudo-element",Lf="data-fa-pseudo-element-pending",Xr="data-prefix",Vr="data-icon",Ya="fontawesome-i2svg",zf="async",jf=["HTML","HEAD","STYLE","SCRIPT"],po=function(){try{return!0}catch{return!1}}(),Gr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},pn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},ho={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Df={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},$f=/fa[srltdbk\-\ ]/,go="fa-layers-text",Uf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Bf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},vo=[1,2,3,4,5,6,7,8,9,10],Hf=vo.concat([11,12,13,14,15,16,17,18,19,20]),Wf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Yf=[].concat(In(Object.keys(pn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(vo.map(function(e){return"".concat(e,"x")})).concat(Hf.map(function(e){return"w-".concat(e)})),bo=Xe.FontAwesomeConfig||{};function Kf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function qf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Xf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Xf.forEach(function(e){var t=Kr(e,2),n=t[0],r=t[1],a=qf(Kf(n));a!=null&&(bo[r]=a)})}var Vf={familyPrefix:uo,styleDefault:"solid",replacementClass:mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},Rt=A(A({},Vf),bo);Rt.autoReplaceSvg||(Rt.observeMutations=!1);var T={};Object.keys(Rt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){Rt[e]=n,rn.forEach(function(r){return r(T)})},get:function(){return Rt[e]}})});Xe.FontAwesomeConfig=T;var rn=[];function Gf(e){return rn.push(e),function(){rn.splice(rn.indexOf(e),1)}}var Be=cr,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Jf(e){if(!(!e||!De)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Zf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ht(){for(var e=12,t="";e-- >0;)t+=Zf[Math.random()*62|0];return t}function kt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Jr(e){return e.classList?kt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function yo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Qf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(yo(e[n]),'" ')},"").trim()}function Tn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Zr(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function ec(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function tc(e){var t=e.transform,n=e.width,r=n===void 0?cr:n,a=e.height,i=a===void 0?cr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&co?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var nc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function xo(){var e=uo,t=mo,n=T.familyPrefix,r=T.replacementClass,a=nc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ka=!1;function Wn(){T.autoAddCss&&!Ka&&(Jf(xo()),Ka=!0)}var rc={mixout:function(){return{dom:{css:xo,insertCss:Wn}}},hooks:function(){return{beforeDOMElementCreation:function(){Wn()},beforeI2svg:function(){Wn()}}}},Le=Xe||{};Le[Re]||(Le[Re]={});Le[Re].styles||(Le[Re].styles={});Le[Re].hooks||(Le[Re].hooks={});Le[Re].shims||(Le[Re].shims=[]);var be=Le[Re],wo=[],ac=function e(){X.removeEventListener("DOMContentLoaded",e),hn=1,wo.map(function(t){return t()})},hn=!1;De&&(hn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),hn||X.addEventListener("DOMContentLoaded",ac));function ic(e){!De||(hn?setTimeout(e,0):wo.push(e))}function Wt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?yo(e):"<".concat(t," ").concat(Qf(r),">").concat(i.map(Wt).join(""),"</").concat(t,">")}function qa(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var oc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},Yn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?oc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function sc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function dr(e){var t=sc(e);return t.length===1?t[0].toString(16):null}function lc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Xa(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Xa(t);typeof be.hooks.addPack=="function"&&!a?be.hooks.addPack(e,Xa(t)):be.styles[e]=A(A({},be.styles[e]||{}),i),e==="fas"&&mr("fa",t)}var Lt=be.styles,fc=be.shims,cc=Object.values(ho),Qr=null,_o={},ko={},Ao={},Oo={},Eo={},uc=Object.keys(Gr);function dc(e){return~Yf.indexOf(e)}function mc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!dc(a)?a:null}var Co=function(){var t=function(i){return Yn(Lt,function(o,s,l){return o[l]=Yn(s,i,{}),o},{})};_o=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ko=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Eo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Lt||T.autoFetchSvg,r=Yn(fc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ao=r.names,Oo=r.unicodes,Qr=Sn(T.styleDefault)};Gf(function(e){Qr=Sn(e.styleDefault)});Co();function ea(e,t){return(_o[e]||{})[t]}function pc(e,t){return(ko[e]||{})[t]}function dt(e,t){return(Eo[e]||{})[t]}function Po(e){return Ao[e]||{prefix:null,iconName:null}}function hc(e){var t=Oo[e],n=ea("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return Qr}var ta=function(){return{prefix:null,iconName:null,rest:[]}};function Sn(e){var t=Gr[e],n=pn[e]||pn[t],r=e in be.styles?e:null;return n||r||null}function Nn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=mc(T.familyPrefix,s);if(Lt[s]?(s=cc.includes(s)?Df[s]:s,a=s,o.prefix=s):uc.indexOf(s)>-1?(a=s,o.prefix=Sn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Po(o.iconName):{},d=dt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Lt.far&&Lt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ta());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var gc=function(){function e(){Ef(this,e),this.definitions={}}return Cf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),mr(s,o[s]);var l=ho[s];l&&mr(l,o[s]),Co()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Va=[],mt={},vt={},vc=Object.keys(vt);function bc(e,t){var n=t.mixoutsTo;return Va=e,mt={},Object.keys(vt).forEach(function(r){vc.indexOf(r)===-1&&delete vt[r]}),Va.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),mn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){mt[o]||(mt[o]=[]),mt[o].push(i[o])})}r.provides&&r.provides(vt)}),n}function pr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=mt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function at(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=mt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return vt[e]?vt[e].apply(null,t):void 0}function hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=dt(n,t)||t,qa(Io.definitions,n,t)||qa(be.styles,n,t)}var Io=new gc,yc=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,at("noAuto")},xc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(at("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,ic(function(){_c({autoReplaceSvgRoot:n}),at("watch",t)})}},wc={icon:function(t){if(t===null)return null;if(mn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:dt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Sn(t[0]);return{prefix:r,iconName:dt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match($f))){var a=Nn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:dt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:dt(i,t)||t}}}},de={noAuto:yc,config:T,dom:xc,parse:wc,library:Io,findIconDefinition:hr,toHtml:Wt},_c=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(be.styles).length>0||T.autoFetchSvg)&&De&&T.autoReplaceSvg&&de.dom.i2svg({node:r})};function Mn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function kc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Zr(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Tn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ac(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function na(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,F=r.found?r:n,z=F.width,S=F.height,y=a==="fak",E=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(re){return m.classes.indexOf(re)===-1}).filter(function(re){return re!==""||!!re}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(S)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/S*16*.0625,"em")}:{};O&&(N.attributes[rt]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Ht())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),Q=r.found&&n.found?ze("generateAbstractMask",W)||{children:[],attributes:{}}:ze("generateAbstractIcon",W)||{children:[],attributes:{}},le=Q.children,we=Q.attributes;return W.children=le,W.attributes=we,s?Ac(W):kc(W)}function Ga(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[rt]="");var d=A({},o.styles);Zr(a)&&(d.transform=tc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Tn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Oc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Tn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Kn=be.styles;function gr(e){var t=e[0],n=e[1],r=e.slice(4),a=Kr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ec={found:!1,width:512,height:512};function Cc(e,t){!po&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function vr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=Po(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Kn[t]&&Kn[t][e]){var o=Kn[t][e];return r(gr(o))}Cc(e,t),r(A(A({},Ec),{},{icon:T.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var Ja=function(){},br=T.measurePerformance&&Zt&&Zt.mark&&Zt.measure?Zt:{mark:Ja,measure:Ja},St='FA "6.1.1"',Pc=function(t){return br.mark("".concat(St," ").concat(t," begins")),function(){return To(t)}},To=function(t){br.mark("".concat(St," ").concat(t," ends")),br.measure("".concat(St," ").concat(t),"".concat(St," ").concat(t," begins"),"".concat(St," ").concat(t," ends"))},ra={begin:Pc,end:To},an=function(){};function Za(e){var t=e.getAttribute?e.getAttribute(rt):null;return typeof t=="string"}function Ic(e){var t=e.getAttribute?e.getAttribute(Xr):null,n=e.getAttribute?e.getAttribute(Vr):null;return t&&n}function Tc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Sc(){if(T.autoReplaceSvg===!0)return on.replace;var e=on[T.autoReplaceSvg];return e||on.replace}function Nc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function Mc(e){return X.createElement(e)}function So(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Nc:Mc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(So(o,{ceFn:r}))}),a}function Fc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var on={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(So(a),n)}),n.getAttribute(rt)===null&&T.keepOriginalSource){var r=X.createComment(Fc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Jr(n).indexOf(T.replacementClass))return on.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Wt(s)}).join(`
`);n.setAttribute(rt,""),n.innerHTML=o}};function Qa(e){e()}function No(e,t){var n=typeof t=="function"?t:an;if(e.length===0)n();else{var r=Qa;T.mutateApproach===zf&&(r=Xe.requestAnimationFrame||Qa),r(function(){var a=Sc(),i=ra.begin("mutate");e.map(a),i(),n()})}}var aa=!1;function Mo(){aa=!0}function yr(){aa=!1}var gn=null;function ei(e){if(!!Wa&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?an:t,r=e.nodeCallback,a=r===void 0?an:r,i=e.pseudoElementsCallback,o=i===void 0?an:i,s=e.observeMutationsRoot,l=s===void 0?X:s;gn=new Wa(function(u){if(!aa){var d=Ve();kt(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Za(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Za(m.target)&&~Wf.indexOf(m.attributeName))if(m.attributeName==="class"&&Ic(m.target)){var b=Nn(Jr(m.target)),O=b.prefix,F=b.iconName;m.target.setAttribute(Xr,O||d),F&&m.target.setAttribute(Vr,F)}else Tc(m.target)&&a(m.target)})}}),De&&gn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Rc(){!gn||gn.disconnect()}function Lc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function zc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Nn(Jr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=pc(a.prefix,e.innerText)||ea(a.prefix,dr(e.innerText))),a}function jc(e){var t=kt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Ht()):(t["aria-hidden"]="true",t.focusable="false")),t}function Dc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=zc(e),r=n.iconName,a=n.prefix,i=n.rest,o=jc(e),s=pr("parseNodeAttributes",{},e),l=t.styleParser?Lc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var $c=be.styles;function Fo(e){var t=T.autoReplaceSvg==="nest"?ti(e,{styleParser:!1}):ti(e);return~t.extra.classes.indexOf(go)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(Ya,"-").concat(m))},a=function(m){return n.remove("".concat(Ya,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Gr):Object.keys($c),o=[".".concat(go,":not([").concat(rt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(rt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=kt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ra.begin("onTree"),u=s.reduce(function(d,m){try{var b=Fo(m);b&&d.push(b)}catch(O){po||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){No(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Uc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Fo(e).then(function(n){n&&No([n],t)})}function Bc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:hr(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Hc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,F=O===void 0?null:O,z=n.classes,S=z===void 0?[]:z,y=n.attributes,E=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var W=t.prefix,Q=t.iconName,le=t.icon;return Mn(A({type:"icon"},t),function(){return at("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?E["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Ht()):(E["aria-hidden"]="true",E.focusable="false")),na({icons:{main:gr(le),mask:l?gr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:Q,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:E,styles:j,classes:S}})})}},Wc={mixout:function(){return{icon:Bc(Hc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ni,n.nodeCallback=Uc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ni(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,F){Promise.all([vr(a,s),d.iconName?vr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var S=Kr(z,2),y=S[0],E=S[1];O([n,na({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Tn(s);l.length>0&&(a.style=l);var u;return Zr(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Yc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Mn({type:"layer"},function(){at("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(In(i)).join(" ")},children:o}]})}}}},Kc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Mn({type:"counter",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Oc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(In(s))}})})}}}},qc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Mn({type:"text",content:n},function(){return at("beforeDOMElementCreation",{content:n,params:r}),Ga({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.familyPrefix,"-layers-text")].concat(In(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(co){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ga({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Xc=new RegExp('"',"ug"),ri=[1105920,1112319];function Vc(e){var t=e.replace(Xc,""),n=lc(t,0),r=n>=ri[0]&&n<=ri[1],a=t.length===2?t[0]===t[1]:!1;return{value:dr(a?t[0]:t),isSecondary:r||a}}function ai(e,t){var n="".concat(Lf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=kt(e.children),o=i.filter(function(Q){return Q.getAttribute(ur)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Uf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?pn[l[2].toLowerCase()]:Bf[u],O=Vc(m),F=O.value,z=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=ea(b,F),E=y;if(S){var N=hc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!z&&(!o||o.getAttribute(Xr)!==b||o.getAttribute(Vr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var j=Dc(),W=j.extra;W.attributes[ur]=t,vr(y,b).then(function(Q){var le=na(A(A({},j),{},{icons:{main:Q,mask:ta()},prefix:b,iconName:E,extra:W,watchable:!0})),we=X.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=le.map(function(re){return Wt(re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Gc(e){return Promise.all([ai(e,"::before"),ai(e,"::after")])}function Jc(e){return e.parentNode!==document.head&&!~jf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ur)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ii(e){if(!!De)return new Promise(function(t,n){var r=kt(e.querySelectorAll("*")).filter(Jc).map(Gc),a=ra.begin("searchPseudoElements");Mo(),Promise.all(r).then(function(){a(),yr(),t()}).catch(function(){a(),yr(),n()})})}var Zc={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&ii(a)}}},oi=!1,Qc={mixout:function(){return{dom:{unwatch:function(){Mo(),oi=!0}}}},hooks:function(){return{bootstrap:function(){ei(pr("mutationObserverCallbacks",{}))},noAuto:function(){Rc()},watch:function(n){var r=n.observeMutationsRoot;oi?yr():ei(pr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},eu={mixout:function(){return{parse:{transform:function(n){return si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},qn={x:0,y:0,width:"100%",height:"100%"};function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function tu(e){return e.tag==="g"?e.children:[e]}var nu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Nn(a.split(" ").map(function(o){return o.trim()})):ta();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=ec({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},qn),{},{fill:"white"})},z=d.children?{children:d.children.map(li)}:{},S={tag:"g",attributes:A({},O.inner),children:[li(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},z))]},y={tag:"g",attributes:A({},O.outer),children:[S]},E="mask-".concat(s||Ht()),N="clip-".concat(s||Ht()),j={tag:"mask",attributes:A(A({},qn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:tu(b)},j]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},qn)}),{children:r,attributes:a}}}},ru={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},au={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},iu=[rc,Wc,Yc,Kc,qc,Zc,Qc,eu,nu,ru,au];bc(iu,{mixoutsTo:de});de.noAuto;var Ro=de.config,ou=de.library;de.dom;var vn=de.parse;de.findIconDefinition;de.toHtml;var su=de.icon;de.layer;var lu=de.text;de.counter;function fi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fi(Object(n),!0).forEach(function(r){ie(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function bn(e){return bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bn(e)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function fu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function cu(e,t){if(e==null)return{};var n=fu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function xr(e){return uu(e)||du(e)||mu(e)||pu()}function uu(e){if(Array.isArray(e))return wr(e)}function du(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function mu(e,t){if(!!e){if(typeof e=="string")return wr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wr(e,t)}}function wr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Lo={exports:{}};(function(e){(function(t){var n=function(y,E,N){if(!u(E)||m(E)||b(E)||O(E)||l(E))return E;var j,W=0,Q=0;if(d(E))for(j=[],Q=E.length;W<Q;W++)j.push(n(y,E[W],N));else{j={};for(var le in E)Object.prototype.hasOwnProperty.call(E,le)&&(j[y(le,N)]=n(y,E[le],N))}return j},r=function(y,E){E=E||{};var N=E.separator||"_",j=E.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},z=function(y,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?y:function(j,W){return N(j,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(z(a,E),y)},decamelizeKeys:function(y,E){return n(z(o,E),y,E)},pascalizeKeys:function(y,E){return n(z(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(hu)})(Lo);var gu=Lo.exports,vu=["class","style"];function bu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=gu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function yu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ia(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ia(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=yu(d);break;case"style":l.style=bu(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=cu(n,vu);return ro(e.tag,ge(ge(ge({},t),{},{class:a.class,style:ge(ge({},a.style),o)},a.attrs),s),r)}var zo=!1;try{zo=!0}catch{}function xu(){if(!zo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function zt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ie({},e,t):{}}function wu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ie(t,"fa-".concat(e.size),e.size!==null),ie(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ie(t,"fa-pull-".concat(e.pull),e.pull!==null),ie(t,"fa-swap-opacity",e.swapOpacity),ie(t,"fa-bounce",e.bounce),ie(t,"fa-shake",e.shake),ie(t,"fa-beat",e.beat),ie(t,"fa-fade",e.fade),ie(t,"fa-beat-fade",e.beatFade),ie(t,"fa-flash",e.flash),ie(t,"fa-spin-pulse",e.spinPulse),ie(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function ci(e){if(e&&bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(vn.icon)return vn.icon(e);if(e===null)return null;if(bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var _u=Dr({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return ci(t.icon)}),i=me(function(){return zt("classes",wu(t))}),o=me(function(){return zt("transform",typeof t.transform=="string"?vn.transform(t.transform):t.transform)}),s=me(function(){return zt("mask",ci(t.mask))}),l=me(function(){return su(a.value,ge(ge(ge(ge({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});en(l,function(d){if(!d)return xu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=me(function(){return l.value?ia(l.value.abstract[0],{},r):null});return function(){return u.value}}});Dr({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ro.familyPrefix,i=me(function(){return["".concat(a,"-layers")].concat(xr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return ro("div",{class:i.value},r.default?r.default():[])}}});Dr({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ro.familyPrefix,i=me(function(){return zt("classes",[].concat(xr(t.counter?["".concat(a,"-layers-counter")]:[]),xr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=me(function(){return zt("transform",typeof t.transform=="string"?vn.transform(t.transform):t.transform)}),s=me(function(){var u=lu(t.value.toString(),ge(ge({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=me(function(){return ia(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var ku={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};ou.add(ku);mf(Of).component("font-awesome-icon",_u).mount("#app");
