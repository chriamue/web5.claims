const Wo=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};Wo();function Or(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const Yo="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ko=Or(Yo);function mi(e){return!!e||e===""}function Er(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Z(r)?Vo(r):Er(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Z(e))return e;if(G(e))return e}}const qo=/;(?![^(]*\))/g,Xo=/:(.+)/;function Vo(e){const t={};return e.split(qo).forEach(n=>{if(n){const r=n.split(Xo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cr(e){let t="";if(Z(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=Cr(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const pi=e=>Z(e)?e:e==null?"":R(e)||G(e)&&(e.toString===bi||!L(e.toString))?JSON.stringify(e,hi,2):String(e),hi=(e,t)=>t&&t.__v_isRef?hi(e,t.value):gt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:gi(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!R(t)&&!yi(t)?String(t):t,Y={},ht=[],ye=()=>{},Go=()=>!1,Jo=/^on[^a-z]/,xn=e=>Jo.test(e),Pr=e=>e.startsWith("onUpdate:"),re=Object.assign,Ir=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zo=Object.prototype.hasOwnProperty,D=(e,t)=>Zo.call(e,t),R=Array.isArray,gt=e=>wn(e)==="[object Map]",gi=e=>wn(e)==="[object Set]",L=e=>typeof e=="function",Z=e=>typeof e=="string",Tr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",vi=e=>G(e)&&L(e.then)&&L(e.catch),bi=Object.prototype.toString,wn=e=>bi.call(e),Qo=e=>wn(e).slice(8,-1),yi=e=>wn(e)==="[object Object]",Sr=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,en=Or(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_n=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},es=/-(\w)/g,Ie=_n(e=>e.replace(es,(t,n)=>n?n.toUpperCase():"")),ts=/\B([A-Z])/g,_t=_n(e=>e.replace(ts,"-$1").toLowerCase()),kn=_n(e=>e.charAt(0).toUpperCase()+e.slice(1)),$n=_n(e=>e?`on${kn(e)}`:""),ln=(e,t)=>!Object.is(e,t),Un=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},fn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let pa;const rs=()=>pa||(pa=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Ae;class as{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&Ae&&(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(t){if(this.active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function is(e,t=Ae){t&&t.active&&t.effects.push(e)}const Nr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},xi=e=>(e.w&qe)>0,wi=e=>(e.n&qe)>0,os=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},ss=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];xi(a)&&!wi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},Gn=new WeakMap;let St=0,qe=1;const Jn=30;let he;const tt=Symbol(""),Zn=Symbol("");class Mr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,is(this,r)}run(){if(!this.active)return this.fn();let t=he,n=Ye;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=he,he=this,Ye=!0,qe=1<<++St,St<=Jn?os(this):ha(this),this.fn()}finally{St<=Jn&&ss(this),qe=1<<--St,he=this.parent,Ye=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){he===this?this.deferStop=!0:this.active&&(ha(this),this.onStop&&this.onStop(),this.active=!1)}}function ha(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ye=!0;const _i=[];function kt(){_i.push(Ye),Ye=!1}function At(){const e=_i.pop();Ye=e===void 0?!0:e}function ue(e,t,n){if(Ye&&he){let r=Gn.get(e);r||Gn.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Nr()),ki(a)}}function ki(e,t){let n=!1;St<=Jn?wi(e)||(e.n|=qe,n=!xi(e)):n=!e.has(he),n&&(e.add(he),he.deps.push(e))}function Fe(e,t,n,r,a,i){const o=Gn.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&R(e))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),t){case"add":R(e)?Sr(n)&&s.push(o.get("length")):(s.push(o.get(tt)),gt(e)&&s.push(o.get(Zn)));break;case"delete":R(e)||(s.push(o.get(tt)),gt(e)&&s.push(o.get(Zn)));break;case"set":gt(e)&&s.push(o.get(tt));break}if(s.length===1)s[0]&&Qn(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);Qn(Nr(l))}}function Qn(e,t){const n=R(e)?e:[...e];for(const r of n)r.computed&&ga(r);for(const r of n)r.computed||ga(r)}function ga(e,t){(e!==he||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ls=Or("__proto__,__v_isRef,__isVue"),Ai=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Tr)),fs=Fr(),cs=Fr(!1,!0),us=Fr(!0),va=ds();function ds(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ue(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){kt();const r=U(this)[t].apply(this,n);return At(),r}}),e}function Fr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ps:Ii:t?Pi:Ci).get(r))return r;const o=R(r);if(!e&&o&&D(va,a))return Reflect.get(va,a,i);const s=Reflect.get(r,a,i);return(Tr(a)?Ai.has(a):ls(a))||(e||ue(r,"get",a),t)?s:ne(s)?o&&Sr(a)?s:s.value:G(s)?e?Ti(s):zr(s):s}}const ms=Oi(),ps=Oi(!0);function Oi(e=!1){return function(n,r,a,i){let o=n[r];if($t(o)&&ne(o)&&!ne(a))return!1;if(!e&&!$t(a)&&(er(a)||(a=U(a),o=U(o)),!R(n)&&ne(o)&&!ne(a)))return o.value=a,!0;const s=R(n)&&Sr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?ln(a,o)&&Fe(n,"set",r,a):Fe(n,"add",r,a)),l}}function hs(e,t){const n=D(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&Fe(e,"delete",t,void 0),r}function gs(e,t){const n=Reflect.has(e,t);return(!Tr(t)||!Ai.has(t))&&ue(e,"has",t),n}function vs(e){return ue(e,"iterate",R(e)?"length":tt),Reflect.ownKeys(e)}const Ei={get:fs,set:ms,deleteProperty:hs,has:gs,ownKeys:vs},bs={get:us,set(e,t){return!0},deleteProperty(e,t){return!0}},ys=re({},Ei,{get:cs,set:ps}),Rr=e=>e,An=e=>Reflect.getPrototypeOf(e);function Xt(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&ue(a,"get",t),ue(a,"get",i));const{has:o}=An(a),s=r?Rr:n?$r:Dr;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Vt(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&ue(r,"has",e),ue(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Gt(e,t=!1){return e=e.__v_raw,!t&&ue(U(e),"iterate",tt),Reflect.get(e,"size",e)}function ba(e){e=U(e);const t=U(this);return An(t).has.call(t,e)||(t.add(e),Fe(t,"add",e,e)),this}function ya(e,t){t=U(t);const n=U(this),{has:r,get:a}=An(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?ln(t,o)&&Fe(n,"set",e,t):Fe(n,"add",e,t),this}function xa(e){const t=U(this),{has:n,get:r}=An(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Fe(t,"delete",e,void 0),i}function wa(){const e=U(this),t=e.size!==0,n=e.clear();return t&&Fe(e,"clear",void 0,void 0),n}function Jt(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Rr:e?$r:Dr;return!e&&ue(s,"iterate",tt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function Zt(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=gt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Rr:t?$r:Dr;return!t&&ue(i,"iterate",l?Zn:tt),{next(){const{value:m,done:b}=u.next();return b?{value:m,done:b}:{value:s?[d(m[0]),d(m[1])]:d(m),done:b}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return e==="delete"?!1:this}}function xs(){const e={get(i){return Xt(this,i)},get size(){return Gt(this)},has:Vt,add:ba,set:ya,delete:xa,clear:wa,forEach:Jt(!1,!1)},t={get(i){return Xt(this,i,!1,!0)},get size(){return Gt(this)},has:Vt,add:ba,set:ya,delete:xa,clear:wa,forEach:Jt(!1,!0)},n={get(i){return Xt(this,i,!0)},get size(){return Gt(this,!0)},has(i){return Vt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Jt(!0,!1)},r={get(i){return Xt(this,i,!0,!0)},get size(){return Gt(this,!0)},has(i){return Vt.call(this,i,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:Jt(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Zt(i,!1,!1),n[i]=Zt(i,!0,!1),t[i]=Zt(i,!1,!0),r[i]=Zt(i,!0,!0)}),[e,n,t,r]}const[ws,_s,ks,As]=xs();function Lr(e,t){const n=t?e?As:ks:e?_s:ws;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const Os={get:Lr(!1,!1)},Es={get:Lr(!1,!0)},Cs={get:Lr(!0,!1)},Ci=new WeakMap,Pi=new WeakMap,Ii=new WeakMap,Ps=new WeakMap;function Is(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ts(e){return e.__v_skip||!Object.isExtensible(e)?0:Is(Qo(e))}function zr(e){return $t(e)?e:jr(e,!1,Ei,Os,Ci)}function Ss(e){return jr(e,!1,ys,Es,Pi)}function Ti(e){return jr(e,!0,bs,Cs,Ii)}function jr(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ts(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function vt(e){return $t(e)?vt(e.__v_raw):!!(e&&e.__v_isReactive)}function $t(e){return!!(e&&e.__v_isReadonly)}function er(e){return!!(e&&e.__v_isShallow)}function Si(e){return vt(e)||$t(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ni(e){return fn(e,"__v_skip",!0),e}const Dr=e=>G(e)?zr(e):e,$r=e=>G(e)?Ti(e):e;function Ns(e){Ye&&he&&(e=U(e),ki(e.dep||(e.dep=Nr())))}function Ms(e,t){e=U(e),e.dep&&Qn(e.dep)}function ne(e){return!!(e&&e.__v_isRef===!0)}function tr(e){return ne(e)?e.value:e}const Fs={get:(e,t,n)=>tr(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return ne(a)&&!ne(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Mi(e){return vt(e)?e:new Proxy(e,Fs)}class Rs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Mr(t,()=>{this._dirty||(this._dirty=!0,Ms(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Ns(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ls(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=ye):(r=e.get,a=e.set),new Rs(r,a,i||!a,n)}function Ke(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){On(i,t,n)}return a}function xe(e,t,n,r){if(L(e)){const i=Ke(e,t,n,r);return i&&vi(i)&&i.catch(o=>{On(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(xe(e[i],t,n,r));return a}function On(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ke(l,null,10,[e,o,s]);return}}zs(e,n,a,r)}function zs(e,t,n,r=!0){console.error(e)}let cn=!1,nr=!1;const ce=[];let Ne=0;const Ft=[];let Nt=null,ct=0;const Rt=[];let He=null,ut=0;const Fi=Promise.resolve();let Ur=null,rr=null;function js(e){const t=Ur||Fi;return e?t.then(this?e.bind(this):e):t}function Ds(e){let t=Ne+1,n=ce.length;for(;t<n;){const r=t+n>>>1;Ut(ce[r])<e?t=r+1:n=r}return t}function Ri(e){(!ce.length||!ce.includes(e,cn&&e.allowRecurse?Ne+1:Ne))&&e!==rr&&(e.id==null?ce.push(e):ce.splice(Ds(e.id),0,e),Li())}function Li(){!cn&&!nr&&(nr=!0,Ur=Fi.then(Di))}function $s(e){const t=ce.indexOf(e);t>Ne&&ce.splice(t,1)}function zi(e,t,n,r){R(e)?n.push(...e):(!t||!t.includes(e,e.allowRecurse?r+1:r))&&n.push(e),Li()}function Us(e){zi(e,Nt,Ft,ct)}function Bs(e){zi(e,He,Rt,ut)}function En(e,t=null){if(Ft.length){for(rr=t,Nt=[...new Set(Ft)],Ft.length=0,ct=0;ct<Nt.length;ct++)Nt[ct]();Nt=null,ct=0,rr=null,En(e,t)}}function ji(e){if(En(),Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,He){He.push(...t);return}for(He=t,He.sort((n,r)=>Ut(n)-Ut(r)),ut=0;ut<He.length;ut++)He[ut]();He=null,ut=0}}const Ut=e=>e.id==null?1/0:e.id;function Di(e){nr=!1,cn=!0,En(e),ce.sort((n,r)=>Ut(n)-Ut(r));const t=ye;try{for(Ne=0;Ne<ce.length;Ne++){const n=ce[Ne];n&&n.active!==!1&&Ke(n,null,14)}}finally{Ne=0,ce.length=0,ji(),cn=!1,Ur=null,(ce.length||Ft.length||Rt.length)&&Di(e)}}function Hs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Y;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:b}=r[d]||Y;b&&(a=n.map(O=>O.trim())),m&&(a=n.map(ns))}let s,l=r[s=$n(t)]||r[s=$n(Ie(t))];!l&&i&&(l=r[s=$n(_t(t))]),l&&xe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,xe(u,e,6,a)}}function $i(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=$i(u,t,!0);d&&(s=!0,re(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(r.set(e,null),null):(R(i)?i.forEach(l=>o[l]=null):re(o,i),r.set(e,o),o)}function Cn(e,t){return!e||!xn(t)?!1:(t=t.slice(2).replace(/Once$/,""),D(e,t[0].toLowerCase()+t.slice(1))||D(e,_t(t))||D(e,t))}let Ce=null,Ui=null;function un(e){const t=Ce;return Ce=e,Ui=e&&e.type.__scopeId||null,t}function Ws(e,t=Ce,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Sa(-1);const i=un(t),o=e(...a);return un(i),r._d&&Sa(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Bn(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:b,setupState:O,ctx:F,inheritAttrs:z}=e;let S,y;const E=un(e);try{if(n.shapeFlag&4){const j=a||r;S=Ee(d.call(j,j,m,i,O,b,F)),y=l}else{const j=t;S=Ee(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=t.props?l:Ys(l)}}catch(j){Lt.length=0,On(j,e,1),S=Q(rt)}let N=S;if(y&&z!==!1){const j=Object.keys(y),{shapeFlag:W}=N;j.length&&W&7&&(o&&j.some(Pr)&&(y=Ks(y,o)),N=xt(N,y))}return n.dirs&&(N=xt(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),S=N,un(E),S}const Ys=e=>{let t;for(const n in e)(n==="class"||n==="style"||xn(n))&&((t||(t={}))[n]=e[n]);return t},Ks=(e,t)=>{const n={};for(const r in e)(!Pr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function qs(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?_a(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const b=d[m];if(o[b]!==r[b]&&!Cn(u,b))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?_a(r,o,u):!0:!!o;return!1}function _a(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Cn(n,i))return!0}return!1}function Xs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Vs=e=>e.__isSuspense;function Gs(e,t){t&&t.pendingBranch?R(e)?t.effects.push(...e):t.effects.push(e):Bs(e)}function Js(e,t){if(J){let n=J.provides;const r=J.parent&&J.parent.provides;r===n&&(n=J.provides=Object.create(r)),n[e]=t}}function Hn(e,t,n=!1){const r=J||Ce;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const ka={};function tn(e,t,n){return Bi(e,t,n)}function Bi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Y){const s=J;let l,u=!1,d=!1;if(ne(e)?(l=()=>e.value,u=er(e)):vt(e)?(l=()=>e,r=!0):R(e)?(d=!0,u=e.some(y=>vt(y)||er(y)),l=()=>e.map(y=>{if(ne(y))return y.value;if(vt(y))return dt(y);if(L(y))return Ke(y,s,2)})):L(e)?t?l=()=>Ke(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xe(e,s,3,[b])}:l=ye,t&&r){const y=l;l=()=>dt(y())}let m,b=y=>{m=S.onStop=()=>{Ke(y,s,4)}};if(Ht)return b=ye,t?n&&xe(t,s,3,[l(),d?[]:void 0,b]):l(),ye;let O=d?[]:ka;const F=()=>{if(!!S.active)if(t){const y=S.run();(r||u||(d?y.some((E,N)=>ln(E,O[N])):ln(y,O)))&&(m&&m(),xe(t,s,3,[y,O===ka?void 0:O,b]),O=y)}else S.run()};F.allowRecurse=!!t;let z;a==="sync"?z=F:a==="post"?z=()=>se(F,s&&s.suspense):z=()=>Us(F);const S=new Mr(l,z);return t?n?F():O=S.run():a==="post"?se(S.run.bind(S),s&&s.suspense):S.run(),()=>{S.stop(),s&&s.scope&&Ir(s.scope.effects,S)}}function Zs(e,t,n){const r=this.proxy,a=Z(e)?e.includes(".")?Hi(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=J;wt(this);const s=Bi(a,i.bind(r),n);return o?wt(o):nt(),s}function Hi(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function dt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ne(e))dt(e.value,t);else if(R(e))for(let n=0;n<e.length;n++)dt(e[n],t);else if(gi(e)||gt(e))e.forEach(n=>{dt(n,t)});else if(yi(e))for(const n in e)dt(e[n],t);return e}function Br(e){return L(e)?{setup:e,name:e.name}:e}const nn=e=>!!e.type.__asyncLoader,Wi=e=>e.type.__isKeepAlive;function Qs(e,t){Yi(e,"a",t)}function el(e,t){Yi(e,"da",t)}function Yi(e,t,n=J){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Pn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)Wi(a.parent.vnode)&&tl(r,t,n,a),a=a.parent}}function tl(e,t,n,r){const a=Pn(t,e,r,!0);Ki(()=>{Ir(r[t],a)},n)}function Pn(e,t,n=J,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;kt(),wt(n);const s=xe(t,n,e,o);return nt(),At(),s});return r?a.unshift(i):a.push(i),i}}const je=e=>(t,n=J)=>(!Ht||e==="sp")&&Pn(e,t,n),nl=je("bm"),rl=je("m"),al=je("bu"),il=je("u"),ol=je("bum"),Ki=je("um"),sl=je("sp"),ll=je("rtg"),fl=je("rtc");function cl(e,t=J){Pn("ec",e,t)}function Ge(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(kt(),xe(l,n,8,[e.el,s,e,t]),At())}}const qi="components";function ul(e,t){return ml(qi,e,!0,t)||e}const dl=Symbol();function ml(e,t,n=!0,r=!1){const a=Ce||J;if(a){const i=a.type;if(e===qi){const s=Wl(i,!1);if(s&&(s===t||s===Ie(t)||s===kn(Ie(t))))return i}const o=Aa(a[e]||i[e],t)||Aa(a.appContext[e],t);return!o&&r?i:o}}function Aa(e,t){return e&&(e[t]||e[Ie(t)]||e[kn(Ie(t))])}const ar=e=>e?oo(e)?Kr(e)||e.proxy:ar(e.parent):null,dn=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ar(e.parent),$root:e=>ar(e.root),$emit:e=>e.emit,$options:e=>Vi(e),$forceUpdate:e=>e.f||(e.f=()=>Ri(e.update)),$nextTick:e=>e.n||(e.n=js.bind(e.proxy)),$watch:e=>Zs.bind(e)}),pl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const O=o[t];if(O!==void 0)switch(O){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(r!==Y&&D(r,t))return o[t]=1,r[t];if(a!==Y&&D(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&D(u,t))return o[t]=3,i[t];if(n!==Y&&D(n,t))return o[t]=4,n[t];ir&&(o[t]=0)}}const d=dn[t];let m,b;if(d)return t==="$attrs"&&ue(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Y&&D(n,t))return o[t]=4,n[t];if(b=l.config.globalProperties,D(b,t))return b[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return a!==Y&&D(a,t)?(a[t]=n,!0):r!==Y&&D(r,t)?(r[t]=n,!0):D(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Y&&D(e,o)||t!==Y&&D(t,o)||(s=i[0])&&D(s,o)||D(r,o)||D(dn,o)||D(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:D(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ir=!0;function hl(e){const t=Vi(e),n=e.proxy,r=e.ctx;ir=!1,t.beforeCreate&&Oa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:b,beforeUpdate:O,updated:F,activated:z,deactivated:S,beforeDestroy:y,beforeUnmount:E,destroyed:N,unmounted:j,render:W,renderTracked:ee,renderTriggered:le,errorCaptured:we,serverPrefetch:ae,expose:Et,inheritAttrs:ot,components:Ct,directives:Kt,filters:la}=t;if(u&&gl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];L(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);G(V)&&(e.data=zr(V))}if(ir=!0,i)for(const V in i){const K=i[V],Te=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):ye,zn=!L(K)&&L(K.set)?K.set.bind(n):ye,Pt=me({get:Te,set:zn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:st=>Pt.value=st})}if(s)for(const V in s)Xi(s[V],r,n,V);if(l){const V=L(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{Js(K,V[K])})}d&&Oa(d,e,"c");function ie(V,K){R(K)?K.forEach(Te=>V(Te.bind(n))):K&&V(K.bind(n))}if(ie(nl,m),ie(rl,b),ie(al,O),ie(il,F),ie(Qs,z),ie(el,S),ie(cl,we),ie(fl,ee),ie(ll,le),ie(ol,E),ie(Ki,j),ie(sl,ae),R(Et))if(Et.length){const V=e.exposed||(e.exposed={});Et.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Te=>n[K]=Te})})}else e.exposed||(e.exposed={});W&&e.render===ye&&(e.render=W),ot!=null&&(e.inheritAttrs=ot),Ct&&(e.components=Ct),Kt&&(e.directives=Kt)}function gl(e,t,n=ye,r=!1){R(e)&&(e=or(e));for(const a in e){const i=e[a];let o;G(i)?"default"in i?o=Hn(i.from||a,i.default,!0):o=Hn(i.from||a):o=Hn(i),ne(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Oa(e,t,n){xe(R(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Xi(e,t,n,r){const a=r.includes(".")?Hi(n,r):()=>n[r];if(Z(e)){const i=t[e];L(i)&&tn(a,i)}else if(L(e))tn(a,e.bind(n));else if(G(e))if(R(e))e.forEach(i=>Xi(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&tn(a,i,e)}}function Vi(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>mn(l,u,o,!0)),mn(l,t,o)),i.set(t,l),l}function mn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&mn(e,i,n,!0),a&&a.forEach(o=>mn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=vl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const vl={data:Ea,props:Ze,emits:Ze,methods:Ze,computed:Ze,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:Ze,directives:Ze,watch:yl,provide:Ea,inject:bl};function Ea(e,t){return t?e?function(){return re(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function bl(e,t){return Ze(or(e),or(t))}function or(e){if(R(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function te(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?re(re(Object.create(null),e),t):t}function yl(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const r in t)n[r]=te(e[r],t[r]);return n}function xl(e,t,n,r=!1){const a={},i={};fn(i,Tn,1),e.propsDefaults=Object.create(null),Gi(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Ss(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function wl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let b=d[m];if(Cn(e.emitsOptions,b))continue;const O=t[b];if(l)if(D(i,b))O!==i[b]&&(i[b]=O,u=!0);else{const F=Ie(b);a[F]=sr(l,s,F,O,e,!1)}else O!==i[b]&&(i[b]=O,u=!0)}}}else{Gi(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!D(t,m)&&((d=_t(m))===m||!D(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=sr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!D(t,m)&&!0)&&(delete i[m],u=!0)}u&&Fe(e,"set","$attrs")}function Gi(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(en(l))continue;const u=t[l];let d;a&&D(a,d=Ie(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Cn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||Y;for(let d=0;d<i.length;d++){const m=i[d];n[m]=sr(a,l,m,u[m],e,!D(u,m))}}return o}function sr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(wt(a),r=u[n]=l.call(null,t),nt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===_t(n))&&(r=!0))}return r}function Ji(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[b,O]=Ji(m,t,!0);re(o,b),O&&s.push(...O)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return r.set(e,ht),ht;if(R(i))for(let d=0;d<i.length;d++){const m=Ie(i[d]);Ca(m)&&(o[m]=Y)}else if(i)for(const d in i){const m=Ie(d);if(Ca(m)){const b=i[d],O=o[m]=R(b)||L(b)?{type:b}:b;if(O){const F=Ta(Boolean,O.type),z=Ta(String,O.type);O[0]=F>-1,O[1]=z<0||F<z,(F>-1||D(O,"default"))&&s.push(m)}}}const u=[o,s];return r.set(e,u),u}function Ca(e){return e[0]!=="$"}function Pa(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:e===null?"null":""}function Ia(e,t){return Pa(e)===Pa(t)}function Ta(e,t){return R(t)?t.findIndex(n=>Ia(n,e)):L(t)&&Ia(t,e)?0:-1}const Zi=e=>e[0]==="_"||e==="$stable",Hr=e=>R(e)?e.map(Ee):[Ee(e)],_l=(e,t,n)=>{if(t._n)return t;const r=Ws((...a)=>Hr(t(...a)),n);return r._c=!1,r},Qi=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Zi(a))continue;const i=e[a];if(L(i))t[a]=_l(a,i,r);else if(i!=null){const o=Hr(i);t[a]=()=>o}}},eo=(e,t)=>{const n=Hr(t);e.slots.default=()=>n},kl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),fn(t,"_",n)):Qi(t,e.slots={})}else e.slots={},t&&eo(e,t);fn(e.slots,Tn,1)},Al=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Y;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(re(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Qi(t,a)),o=t}else t&&(eo(e,t),o={default:1});if(i)for(const s in a)!Zi(s)&&!(s in o)&&delete a[s]};function to(){return{app:null,config:{isNativeTag:Go,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ol=0;function El(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!G(a)&&(a=null);const i=to(),o=new Set;let s=!1;const l=i.app={_uid:Ol++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Kl,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const b=Q(r,a);return b.appContext=i,d&&t?t(b,u):e(b,u,m),s=!0,l._container=u,u.__vue_app__=l,Kr(b.component)||b.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function lr(e,t,n,r,a=!1){if(R(e)){e.forEach((b,O)=>lr(b,t&&(R(t)?t[O]:t),n,r,a));return}if(nn(r)&&!a)return;const i=r.shapeFlag&4?Kr(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Y?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(Z(u)?(d[u]=null,D(m,u)&&(m[u]=null)):ne(u)&&(u.value=null)),L(l))Ke(l,s,12,[o,d]);else{const b=Z(l),O=ne(l);if(b||O){const F=()=>{if(e.f){const z=b?d[l]:l.value;a?R(z)&&Ir(z,i):R(z)?z.includes(i)||z.push(i):b?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else b?(d[l]=o,D(m,l)&&(m[l]=o)):O&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,se(F,n)):F()}}}const se=Gs;function Cl(e){return Pl(e)}function Pl(e,t){const n=rs();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:b,setScopeId:O=ye,cloneNode:F,insertStaticContent:z}=e,S=(f,c,p,g=null,h=null,w=null,k=!1,x=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Tt(f,c)&&(g=qt(f),$e(f,h,w,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:v,ref:P,shapeFlag:C}=c;switch(v){case Wr:y(f,c,p,g);break;case rt:E(f,c,p,g);break;case Wn:f==null&&N(c,p,g,k);break;case Oe:Kt(f,c,p,g,h,w,k,x,_);break;default:C&1?ee(f,c,p,g,h,w,k,x,_):C&6?la(f,c,p,g,h,w,k,x,_):(C&64||C&128)&&v.process(f,c,p,g,h,w,k,x,_,lt)}P!=null&&h&&lr(P,f&&f.ref,w,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},E=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=z(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=b(f),r(f,p,g),f=h;r(c,p,g)},W=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=b(f),a(f),f=p;a(c)},ee=(f,c,p,g,h,w,k,x,_)=>{k=k||c.type==="svg",f==null?le(c,p,g,h,w,k,x,_):Et(f,c,h,w,k,x,_)},le=(f,c,p,g,h,w,k,x)=>{let _,v;const{type:P,props:C,shapeFlag:I,transition:M,patchFlag:$,dirs:B}=f;if(f.el&&F!==void 0&&$===-1)_=f.el=F(f.el);else{if(_=f.el=o(f.type,w,C&&C.is,C),I&8?d(_,f.children):I&16&&ae(f.children,_,null,g,h,w&&P!=="foreignObject",k,x),B&&Ge(f,null,g,"created"),C){for(const q in C)q!=="value"&&!en(q)&&i(_,q,null,C[q],w,f.children,g,h,Se);"value"in C&&i(_,"value",null,C.value),(v=C.onVnodeBeforeMount)&&ke(v,g,f)}we(_,f,f.scopeId,k,g)}B&&Ge(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,p),((v=C&&C.onVnodeMounted)||H||B)&&se(()=>{v&&ke(v,g,f),H&&M.enter(_),B&&Ge(f,null,g,"mounted")},h)},we=(f,c,p,g,h)=>{if(p&&O(f,p),g)for(let w=0;w<g.length;w++)O(f,g[w]);if(h){let w=h.subTree;if(c===w){const k=h.vnode;we(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},ae=(f,c,p,g,h,w,k,x,_=0)=>{for(let v=_;v<f.length;v++){const P=f[v]=x?We(f[v]):Ee(f[v]);S(null,P,c,p,g,h,w,k,x)}},Et=(f,c,p,g,h,w,k)=>{const x=c.el=f.el;let{patchFlag:_,dynamicChildren:v,dirs:P}=c;_|=f.patchFlag&16;const C=f.props||Y,I=c.props||Y;let M;p&&Je(p,!1),(M=I.onVnodeBeforeUpdate)&&ke(M,p,c,f),P&&Ge(c,f,p,"beforeUpdate"),p&&Je(p,!0);const $=h&&c.type!=="foreignObject";if(v?ot(f.dynamicChildren,v,x,p,g,$,w):k||Te(f,c,x,null,p,g,$,w,!1),_>0){if(_&16)Ct(x,c,C,I,p,g,h);else if(_&2&&C.class!==I.class&&i(x,"class",null,I.class,h),_&4&&i(x,"style",C.style,I.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const q=B[H],pe=C[q],ft=I[q];(ft!==pe||q==="value")&&i(x,q,pe,ft,h,f.children,p,g,Se)}}_&1&&f.children!==c.children&&d(x,c.children)}else!k&&v==null&&Ct(x,c,C,I,p,g,h);((M=I.onVnodeUpdated)||P)&&se(()=>{M&&ke(M,p,c,f),P&&Ge(c,f,p,"updated")},g)},ot=(f,c,p,g,h,w,k)=>{for(let x=0;x<c.length;x++){const _=f[x],v=c[x],P=_.el&&(_.type===Oe||!Tt(_,v)||_.shapeFlag&70)?m(_.el):p;S(_,v,P,null,g,h,w,k,!0)}},Ct=(f,c,p,g,h,w,k)=>{if(p!==g){for(const x in g){if(en(x))continue;const _=g[x],v=p[x];_!==v&&x!=="value"&&i(f,x,v,_,k,c.children,h,w,Se)}if(p!==Y)for(const x in p)!en(x)&&!(x in g)&&i(f,x,p[x],null,k,c.children,h,w,Se);"value"in g&&i(f,"value",p.value,g.value)}},Kt=(f,c,p,g,h,w,k,x,_)=>{const v=c.el=f?f.el:s(""),P=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:I,slotScopeIds:M}=c;M&&(x=x?x.concat(M):M),f==null?(r(v,p,g),r(P,p,g),ae(c.children,p,P,h,w,k,x,_)):C>0&&C&64&&I&&f.dynamicChildren?(ot(f.dynamicChildren,I,p,h,w,k,x),(c.key!=null||h&&c===h.subTree)&&no(f,c,!0)):Te(f,c,p,P,h,w,k,x,_)},la=(f,c,p,g,h,w,k,x,_)=>{c.slotScopeIds=x,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Ln(c,p,g,h,w,k,_):ie(f,c,_)},Ln=(f,c,p,g,h,w,k)=>{const x=f.component=Dl(f,g,h);if(Wi(f)&&(x.ctx.renderer=lt),$l(x),x.asyncDep){if(h&&h.registerDep(x,V),!f.el){const _=x.subTree=Q(rt);E(null,_,c,p)}return}V(x,f,c,p,h,w,k)},ie=(f,c,p)=>{const g=c.component=f.component;if(qs(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,$s(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,w,k)=>{const x=()=>{if(f.isMounted){let{next:P,bu:C,u:I,parent:M,vnode:$}=f,B=P,H;Je(f,!1),P?(P.el=$.el,K(f,P,k)):P=$,C&&Un(C),(H=P.props&&P.props.onVnodeBeforeUpdate)&&ke(H,M,P,$),Je(f,!0);const q=Bn(f),pe=f.subTree;f.subTree=q,S(pe,q,m(pe.el),qt(pe),f,h,w),P.el=q.el,B===null&&Xs(f,q.el),I&&se(I,h),(H=P.props&&P.props.onVnodeUpdated)&&se(()=>ke(H,M,P,$),h)}else{let P;const{el:C,props:I}=c,{bm:M,m:$,parent:B}=f,H=nn(c);if(Je(f,!1),M&&Un(M),!H&&(P=I&&I.onVnodeBeforeMount)&&ke(P,B,c),Je(f,!0),C&&Dn){const q=()=>{f.subTree=Bn(f),Dn(C,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Bn(f);S(null,q,p,g,f,h,w),c.el=q.el}if($&&se($,h),!H&&(P=I&&I.onVnodeMounted)){const q=c;se(()=>ke(P,B,q),h)}(c.shapeFlag&256||B&&nn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&se(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Mr(x,()=>Ri(v),f.scope),v=f.update=()=>_.run();v.id=f.uid,Je(f,!0),v()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,wl(f,c.props,g,p),Al(f,c.children,p),kt(),En(void 0,f.update),At()},Te=(f,c,p,g,h,w,k,x,_=!1)=>{const v=f&&f.children,P=f?f.shapeFlag:0,C=c.children,{patchFlag:I,shapeFlag:M}=c;if(I>0){if(I&128){Pt(v,C,p,g,h,w,k,x,_);return}else if(I&256){zn(v,C,p,g,h,w,k,x,_);return}}M&8?(P&16&&Se(v,h,w),C!==v&&d(p,C)):P&16?M&16?Pt(v,C,p,g,h,w,k,x,_):Se(v,h,w,!0):(P&8&&d(p,""),M&16&&ae(C,p,g,h,w,k,x,_))},zn=(f,c,p,g,h,w,k,x,_)=>{f=f||ht,c=c||ht;const v=f.length,P=c.length,C=Math.min(v,P);let I;for(I=0;I<C;I++){const M=c[I]=_?We(c[I]):Ee(c[I]);S(f[I],M,p,null,h,w,k,x,_)}v>P?Se(f,h,w,!0,!1,C):ae(c,p,g,h,w,k,x,_,C)},Pt=(f,c,p,g,h,w,k,x,_)=>{let v=0;const P=c.length;let C=f.length-1,I=P-1;for(;v<=C&&v<=I;){const M=f[v],$=c[v]=_?We(c[v]):Ee(c[v]);if(Tt(M,$))S(M,$,p,null,h,w,k,x,_);else break;v++}for(;v<=C&&v<=I;){const M=f[C],$=c[I]=_?We(c[I]):Ee(c[I]);if(Tt(M,$))S(M,$,p,null,h,w,k,x,_);else break;C--,I--}if(v>C){if(v<=I){const M=I+1,$=M<P?c[M].el:g;for(;v<=I;)S(null,c[v]=_?We(c[v]):Ee(c[v]),p,$,h,w,k,x,_),v++}}else if(v>I)for(;v<=C;)$e(f[v],h,w,!0),v++;else{const M=v,$=v,B=new Map;for(v=$;v<=I;v++){const fe=c[v]=_?We(c[v]):Ee(c[v]);fe.key!=null&&B.set(fe.key,v)}let H,q=0;const pe=I-$+1;let ft=!1,ua=0;const It=new Array(pe);for(v=0;v<pe;v++)It[v]=0;for(v=M;v<=C;v++){const fe=f[v];if(q>=pe){$e(fe,h,w,!0);continue}let _e;if(fe.key!=null)_e=B.get(fe.key);else for(H=$;H<=I;H++)if(It[H-$]===0&&Tt(fe,c[H])){_e=H;break}_e===void 0?$e(fe,h,w,!0):(It[_e-$]=v+1,_e>=ua?ua=_e:ft=!0,S(fe,c[_e],p,null,h,w,k,x,_),q++)}const da=ft?Il(It):ht;for(H=da.length-1,v=pe-1;v>=0;v--){const fe=$+v,_e=c[fe],ma=fe+1<P?c[fe+1].el:g;It[v]===0?S(null,_e,p,ma,h,w,k,x,_):ft&&(H<0||v!==da[H]?st(_e,p,ma,2):H--)}}},st=(f,c,p,g,h=null)=>{const{el:w,type:k,transition:x,children:_,shapeFlag:v}=f;if(v&6){st(f.component.subTree,c,p,g);return}if(v&128){f.suspense.move(c,p,g);return}if(v&64){k.move(f,c,p,lt);return}if(k===Oe){r(w,c,p);for(let C=0;C<_.length;C++)st(_[C],c,p,g);r(f.anchor,c,p);return}if(k===Wn){j(f,c,p);return}if(g!==2&&v&1&&x)if(g===0)x.beforeEnter(w),r(w,c,p),se(()=>x.enter(w),h);else{const{leave:C,delayLeave:I,afterLeave:M}=x,$=()=>r(w,c,p),B=()=>{C(w,()=>{$(),M&&M()})};I?I(w,$,B):B()}else r(w,c,p)},$e=(f,c,p,g=!1,h=!1)=>{const{type:w,props:k,ref:x,children:_,dynamicChildren:v,shapeFlag:P,patchFlag:C,dirs:I}=f;if(x!=null&&lr(x,null,p,f,!0),P&256){c.ctx.deactivate(f);return}const M=P&1&&I,$=!nn(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&ke(B,c,f),P&6)Ho(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}M&&Ge(f,null,c,"beforeUnmount"),P&64?f.type.remove(f,c,p,h,lt,g):v&&(w!==Oe||C>0&&C&64)?Se(v,c,p,!1,!0):(w===Oe&&C&384||!h&&P&16)&&Se(_,c,p),g&&fa(f)}($&&(B=k&&k.onVnodeUnmounted)||M)&&se(()=>{B&&ke(B,c,f),M&&Ge(f,null,c,"unmounted")},p)},fa=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===Oe){Bo(p,g);return}if(c===Wn){W(f);return}const w=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:x}=h,_=()=>k(p,w);x?x(f.el,w,_):_()}else w()},Bo=(f,c)=>{let p;for(;f!==c;)p=b(f),a(f),f=p;a(c)},Ho=(f,c,p)=>{const{bum:g,scope:h,update:w,subTree:k,um:x}=f;g&&Un(g),h.stop(),w&&(w.active=!1,$e(k,f,c,p)),x&&se(x,c),se(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Se=(f,c,p,g=!1,h=!1,w=0)=>{for(let k=w;k<f.length;k++)$e(f[k],c,p,g,h)},qt=f=>f.shapeFlag&6?qt(f.component.subTree):f.shapeFlag&128?f.suspense.next():b(f.anchor||f.el),ca=(f,c,p)=>{f==null?c._vnode&&$e(c._vnode,null,null,!0):S(c._vnode||null,f,c,null,null,null,p),ji(),c._vnode=f},lt={p:S,um:$e,m:st,r:fa,mt:Ln,mc:ae,pc:Te,pbc:ot,n:qt,o:e};let jn,Dn;return t&&([jn,Dn]=t(lt)),{render:ca,hydrate:jn,createApp:El(ca,jn)}}function Je({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function no(e,t,n=!1){const r=e.children,a=t.children;if(R(r)&&R(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=We(a[i]),s.el=o.el),n||no(o,s))}}function Il(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Tl=e=>e.__isTeleport,Oe=Symbol(void 0),Wr=Symbol(void 0),rt=Symbol(void 0),Wn=Symbol(void 0),Lt=[];let ve=null;function yt(e=!1){Lt.push(ve=e?null:[])}function Sl(){Lt.pop(),ve=Lt[Lt.length-1]||null}let Bt=1;function Sa(e){Bt+=e}function ro(e){return e.dynamicChildren=Bt>0?ve||ht:null,Sl(),Bt>0&&ve&&ve.push(e),e}function In(e,t,n,r,a,i){return ro(Me(e,t,n,r,a,i,!0))}function ao(e,t,n,r,a){return ro(Q(e,t,n,r,a,!0))}function fr(e){return e?e.__v_isVNode===!0:!1}function Tt(e,t){return e.type===t.type&&e.key===t.key}const Tn="__vInternal",io=({key:e})=>e!=null?e:null,rn=({ref:e,ref_key:t,ref_for:n})=>e!=null?Z(e)||ne(e)||L(e)?{i:Ce,r:e,k:t,f:!!n}:e:null;function Me(e,t=null,n=null,r=0,a=null,i=e===Oe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&io(t),ref:t&&rn(t),scopeId:Ui,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Yr(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Z(n)?8:16),Bt>0&&!o&&ve&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ve.push(l),l}const Q=Nl;function Nl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===dl)&&(e=rt),fr(e)){const s=xt(e,t,!0);return n&&Yr(s,n),Bt>0&&!i&&ve&&(s.shapeFlag&6?ve[ve.indexOf(e)]=s:ve.push(s)),s.patchFlag|=-2,s}if(Yl(e)&&(e=e.__vccOpts),t){t=Ml(t);let{class:s,style:l}=t;s&&!Z(s)&&(t.class=Cr(s)),G(l)&&(Si(l)&&!R(l)&&(l=re({},l)),t.style=Er(l))}const o=Z(e)?1:Vs(e)?128:Tl(e)?64:G(e)?4:L(e)?2:0;return Me(e,t,n,r,a,o,i,!0)}function Ml(e){return e?Si(e)||Tn in e?re({},e):e:null}function xt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ll(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&io(s),ref:t&&t.ref?n&&a?R(a)?a.concat(rn(t)):[a,rn(t)]:rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Oe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&xt(e.ssContent),ssFallback:e.ssFallback&&xt(e.ssFallback),el:e.el,anchor:e.anchor}}function Fl(e=" ",t=0){return Q(Wr,null,e,t)}function Rl(e="",t=!1){return t?(yt(),ao(rt,null,e)):Q(rt,null,e)}function Ee(e){return e==null||typeof e=="boolean"?Q(rt):R(e)?Q(Oe,null,e.slice()):typeof e=="object"?We(e):Q(Wr,null,String(e))}function We(e){return e.el===null||e.memo?e:xt(e)}function Yr(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(R(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Yr(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Tn in t)?t._ctx=Ce:a===3&&Ce&&(Ce.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ce},n=32):(t=String(t),r&64?(n=16,t=[Fl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ll(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Cr([t.class,r.class]));else if(a==="style")t.style=Er([t.style,r.style]);else if(xn(a)){const i=t[a],o=r[a];o&&i!==o&&!(R(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function ke(e,t,n,r=null){xe(e,t,7,[n,r])}const zl=to();let jl=0;function Dl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||zl,i={uid:jl++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new as(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ji(r,a),emitsOptions:$i(r,a),emit:null,emitted:null,propsDefaults:Y,inheritAttrs:r.inheritAttrs,ctx:Y,data:Y,props:Y,attrs:Y,slots:Y,refs:Y,setupState:Y,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Hs.bind(null,i),e.ce&&e.ce(i),i}let J=null;const wt=e=>{J=e,e.scope.on()},nt=()=>{J&&J.scope.off(),J=null};function oo(e){return e.vnode.shapeFlag&4}let Ht=!1;function $l(e,t=!1){Ht=t;const{props:n,children:r}=e.vnode,a=oo(e);xl(e,n,a,t),kl(e,r);const i=a?Ul(e,t):void 0;return Ht=!1,i}function Ul(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ni(new Proxy(e.ctx,pl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Hl(e):null;wt(e),kt();const i=Ke(r,e,0,[e.props,a]);if(At(),nt(),vi(i)){if(i.then(nt,nt),t)return i.then(o=>{Na(e,o,t)}).catch(o=>{On(o,e,0)});e.asyncDep=i}else Na(e,i,t)}else so(e,t)}function Na(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Mi(t)),so(e,n)}let Ma;function so(e,t,n){const r=e.type;if(!e.render){if(!t&&Ma&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=re(re({isCustomElement:i,delimiters:s},o),l);r.render=Ma(a,u)}}e.render=r.render||ye}wt(e),kt(),hl(e),At(),nt()}function Bl(e){return new Proxy(e.attrs,{get(t,n){return ue(e,"get","$attrs"),t[n]}})}function Hl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Bl(e))},slots:e.slots,emit:e.emit,expose:t}}function Kr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mi(Ni(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in dn)return dn[n](e)}}))}function Wl(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function Yl(e){return L(e)&&"__vccOpts"in e}const me=(e,t)=>Ls(e,t,Ht);function lo(e,t,n){const r=arguments.length;return r===2?G(t)&&!R(t)?fr(t)?Q(e,null,[t]):Q(e,t):Q(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&fr(n)&&(n=[n]),Q(e,t,n))}const Kl="3.2.37",ql="http://www.w3.org/2000/svg",Qe=typeof document!="undefined"?document:null,Fa=Qe&&Qe.createElement("template"),Xl={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?Qe.createElementNS(ql,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Fa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Fa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Vl(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Gl(e,t,n){const r=e.style,a=Z(n);if(n&&!a){for(const i in n)cr(r,i,n[i]);if(t&&!Z(t))for(const i in t)n[i]==null&&cr(r,i,"")}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Ra=/\s*!important$/;function cr(e,t,n){if(R(n))n.forEach(r=>cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Jl(e,t);Ra.test(n)?e.setProperty(_t(r),n.replace(Ra,""),"important"):e[r]=n}}const La=["Webkit","Moz","ms"],Yn={};function Jl(e,t){const n=Yn[t];if(n)return n;let r=Ie(t);if(r!=="filter"&&r in e)return Yn[t]=r;r=kn(r);for(let a=0;a<La.length;a++){const i=La[a]+r;if(i in e)return Yn[t]=i}return t}const za="http://www.w3.org/1999/xlink";function Zl(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(za,t.slice(6,t.length)):e.setAttributeNS(za,t,n);else{const i=Ko(t);n==null||i&&!mi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Ql(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n==null?"":n;(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=mi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}const[fo,ef]=(()=>{let e=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ur=0;const tf=Promise.resolve(),nf=()=>{ur=0},rf=()=>ur||(tf.then(nf),ur=fo());function af(e,t,n,r){e.addEventListener(t,n,r)}function of(e,t,n,r){e.removeEventListener(t,n,r)}function sf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=lf(t);if(r){const u=i[t]=ff(r,a);af(e,s,u,l)}else o&&(of(e,s,o,l),i[t]=void 0)}}const ja=/(?:Once|Passive|Capture)$/;function lf(e){let t;if(ja.test(e)){t={};let n;for(;n=e.match(ja);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[_t(e.slice(2)),t]}function ff(e,t){const n=r=>{const a=r.timeStamp||fo();(ef||a>=n.attached-1)&&xe(cf(r,n.value),t,5,[r])};return n.value=e,n.attached=rf(),n}function cf(e,t){if(R(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const Da=/^on[a-z]/,uf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Vl(e,r,a):t==="style"?Gl(e,n,r):xn(t)?Pr(t)||sf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):df(e,t,r,a))?Ql(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Zl(e,t,r,a))};function df(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Da.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Da.test(t)&&Z(n)?!1:t in e}const mf=re({patchProp:uf},Xl);let $a;function pf(){return $a||($a=Cl(mf))}const hf=(...e)=>{const t=pf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=gf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function gf(e){return Z(e)?document.querySelector(e):e}var vf="/assets/W3C.e5319116.svg";var qr=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const bf={class:"link"},yf=["href","title"],xf={class:"name"},wf={__name:"LinkComp",props:{name:{type:String,required:!0},title:{type:String,required:!0},url:{type:String,required:!0},icon:{type:String,required:!1}},setup(e){return(t,n)=>{const r=ul("font-awesome-icon");return yt(),In("div",bf,[Me("a",{target:"_blank",href:e.url,title:e.title},[Q(r,{icon:e.icon},null,8,["icon"]),Me("span",xf,pi(e.name),1)],8,yf)])}}};var _f=qr(wf,[["__scopeId","data-v-23214de4"]]);const kf={class:"login"},Af={__name:"LoginComp",setup(e){return(t,n)=>(yt(),In("div",kf,[Q(_f,{url:"https://api.web5.claims/github",name:"Github",icon:"fa-brands fa-github",title:"Get your Github claims"})]))}};var Of=qr(Af,[["__scopeId","data-v-f28ae452"]]);const Ef={class:"verifiable-credential"},Cf={__name:"VerifiableCredential",props:{base64:{type:String,required:!0}},setup(e){return(t,n)=>(yt(),In("div",Ef,pi(t.btoa(e.base64)),1))}};var Pf=qr(Cf,[["__scopeId","data-v-4f80e578"]]);const If=Me("header",null,[Me("img",{alt:"Vue logo",class:"logo",src:vf,width:"125",height:"125"}),Me("div",{class:"wrapper"},[Me("h1",null,"Get your Web5 claims for")])],-1),Tf={__name:"App",setup(e){const n=new URLSearchParams(document.location.search).get("vc");return(r,a)=>(yt(),In(Oe,null,[If,Me("main",null,[Q(Of),tr(n)?(yt(),ao(Pf,{key:0,base64:tr(n)},null,8,["base64"])):Rl("",!0)])],64))}};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ua(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ua(Object(n),!0).forEach(function(r){Mf(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ua(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function pn(e){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pn(e)}function Sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ba(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Nf(e,t,n){return t&&Ba(e.prototype,t),n&&Ba(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Mf(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Xr(e,t){return Rf(e)||zf(e,t)||co(e,t)||Df()}function Sn(e){return Ff(e)||Lf(e)||co(e)||jf()}function Ff(e){if(Array.isArray(e))return dr(e)}function Rf(e){if(Array.isArray(e))return e}function Lf(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function zf(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function co(e,t){if(!!e){if(typeof e=="string")return dr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return dr(e,t)}}function dr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function jf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Df(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ha=function(){},Vr={},uo={},mo=null,po={mark:Ha,measure:Ha};try{typeof window!="undefined"&&(Vr=window),typeof document!="undefined"&&(uo=document),typeof MutationObserver!="undefined"&&(mo=MutationObserver),typeof performance!="undefined"&&(po=performance)}catch{}var $f=Vr.navigator||{},Wa=$f.userAgent,Ya=Wa===void 0?"":Wa,Xe=Vr,X=uo,Ka=mo,Qt=po;Xe.document;var De=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",ho=~Ya.indexOf("MSIE")||~Ya.indexOf("Trident/"),Re="___FONT_AWESOME___",mr=16,go="fa",vo="svg-inline--fa",at="data-fa-i2svg",pr="data-fa-pseudo-element",Uf="data-fa-pseudo-element-pending",Gr="data-prefix",Jr="data-icon",qa="fontawesome-i2svg",Bf="async",Hf=["HTML","HEAD","STYLE","SCRIPT"],bo=function(){try{return!0}catch{return!1}}(),Zr={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},hn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},yo={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Wf={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Yf=/fa[srltdbk\-\ ]/,xo="fa-layers-text",Kf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,qf={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},wo=[1,2,3,4,5,6,7,8,9,10],Xf=wo.concat([11,12,13,14,15,16,17,18,19,20]),Vf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],et={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Gf=[].concat(Sn(Object.keys(hn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",et.GROUP,et.SWAP_OPACITY,et.PRIMARY,et.SECONDARY]).concat(wo.map(function(e){return"".concat(e,"x")})).concat(Xf.map(function(e){return"w-".concat(e)})),_o=Xe.FontAwesomeConfig||{};function Jf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Zf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Qf=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qf.forEach(function(e){var t=Xr(e,2),n=t[0],r=t[1],a=Zf(Jf(n));a!=null&&(_o[r]=a)})}var ec={familyPrefix:go,styleDefault:"solid",replacementClass:vo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},zt=A(A({},ec),_o);zt.autoReplaceSvg||(zt.observeMutations=!1);var T={};Object.keys(zt).forEach(function(e){Object.defineProperty(T,e,{enumerable:!0,set:function(n){zt[e]=n,an.forEach(function(r){return r(T)})},get:function(){return zt[e]}})});Xe.FontAwesomeConfig=T;var an=[];function tc(e){return an.push(e),function(){an.splice(an.indexOf(e),1)}}var Be=mr,Pe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function nc(e){if(!(!e||!De)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var rc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Wt(){for(var e=12,t="";e-- >0;)t+=rc[Math.random()*62|0];return t}function Ot(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Qr(e){return e.classList?Ot(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ko(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ac(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ko(e[n]),'" ')},"").trim()}function Nn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ea(e){return e.size!==Pe.size||e.x!==Pe.x||e.y!==Pe.y||e.rotate!==Pe.rotate||e.flipX||e.flipY}function ic(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function oc(e){var t=e.transform,n=e.width,r=n===void 0?mr:n,a=e.height,i=a===void 0?mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&ho?l+="translate(".concat(t.x/Be-r/2,"em, ").concat(t.y/Be-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Be,"em), calc(-50% + ").concat(t.y/Be,"em)) "):l+="translate(".concat(t.x/Be,"em, ").concat(t.y/Be,"em) "),l+="scale(".concat(t.size/Be*(t.flipX?-1:1),", ").concat(t.size/Be*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var sc=`:root, :host {
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
}`;function Ao(){var e=go,t=vo,n=T.familyPrefix,r=T.replacementClass,a=sc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Xa=!1;function Kn(){T.autoAddCss&&!Xa&&(nc(Ao()),Xa=!0)}var lc={mixout:function(){return{dom:{css:Ao,insertCss:Kn}}},hooks:function(){return{beforeDOMElementCreation:function(){Kn()},beforeI2svg:function(){Kn()}}}},Le=Xe||{};Le[Re]||(Le[Re]={});Le[Re].styles||(Le[Re].styles={});Le[Re].hooks||(Le[Re].hooks={});Le[Re].shims||(Le[Re].shims=[]);var be=Le[Re],Oo=[],fc=function e(){X.removeEventListener("DOMContentLoaded",e),gn=1,Oo.map(function(t){return t()})},gn=!1;De&&(gn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),gn||X.addEventListener("DOMContentLoaded",fc));function cc(e){!De||(gn?setTimeout(e,0):Oo.push(e))}function Yt(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ko(e):"<".concat(t," ").concat(ac(r),">").concat(i.map(Yt).join(""),"</").concat(t,">")}function Va(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var uc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},qn=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?uc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function hr(e){var t=dc(e);return t.length===1?t[0].toString(16):null}function mc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ga(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function gr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ga(t);typeof be.hooks.addPack=="function"&&!a?be.hooks.addPack(e,Ga(t)):be.styles[e]=A(A({},be.styles[e]||{}),i),e==="fas"&&gr("fa",t)}var jt=be.styles,pc=be.shims,hc=Object.values(yo),ta=null,Eo={},Co={},Po={},Io={},To={},gc=Object.keys(Zr);function vc(e){return~Gf.indexOf(e)}function bc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!vc(a)?a:null}var So=function(){var t=function(i){return qn(jt,function(o,s,l){return o[l]=qn(s,i,{}),o},{})};Eo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Co=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),To=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in jt||T.autoFetchSvg,r=qn(pc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Po=r.names,Io=r.unicodes,ta=Mn(T.styleDefault)};tc(function(e){ta=Mn(e.styleDefault)});So();function na(e,t){return(Eo[e]||{})[t]}function yc(e,t){return(Co[e]||{})[t]}function mt(e,t){return(To[e]||{})[t]}function No(e){return Po[e]||{prefix:null,iconName:null}}function xc(e){var t=Io[e],n=na("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return ta}var ra=function(){return{prefix:null,iconName:null,rest:[]}};function Mn(e){var t=Zr[e],n=hn[e]||hn[t],r=e in be.styles?e:null;return n||r||null}function Fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.skipLookups,r=n===void 0?!1:n,a=null,i=e.reduce(function(o,s){var l=bc(T.familyPrefix,s);if(jt[s]?(s=hc.includes(s)?Wf[s]:s,a=s,o.prefix=s):gc.indexOf(s)>-1?(a=s,o.prefix=Mn(s)):l?o.iconName=l:s!==T.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?No(o.iconName):{},d=mt(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!jt.far&&jt.fas&&!T.autoFetchSvg&&(o.prefix="fas")}return o},ra());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Ve()||"fas"),i}var wc=function(){function e(){Sf(this,e),this.definitions={}}return Nf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),gr(s,o[s]);var l=yo[s];l&&gr(l,o[s]),So()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),Ja=[],pt={},bt={},_c=Object.keys(bt);function kc(e,t){var n=t.mixoutsTo;return Ja=e,pt={},Object.keys(bt).forEach(function(r){_c.indexOf(r)===-1&&delete bt[r]}),Ja.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),pn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){pt[o]||(pt[o]=[]),pt[o].push(i[o])})}r.provides&&r.provides(bt)}),n}function vr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=pt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function it(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=pt[e]||[];a.forEach(function(i){i.apply(null,n)})}function ze(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return bt[e]?bt[e].apply(null,t):void 0}function br(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(!!t)return t=mt(n,t)||t,Va(Mo.definitions,n,t)||Va(be.styles,n,t)}var Mo=new wc,Ac=function(){T.autoReplaceSvg=!1,T.observeMutations=!1,it("noAuto")},Oc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return De?(it("beforeI2svg",t),ze("pseudoElements2svg",t),ze("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;T.autoReplaceSvg===!1&&(T.autoReplaceSvg=!0),T.observeMutations=!0,cc(function(){Cc({autoReplaceSvgRoot:n}),it("watch",t)})}},Ec={icon:function(t){if(t===null)return null;if(pn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Mn(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(T.familyPrefix,"-"))>-1||t.match(Yf))){var a=Fn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:mt(i,t)||t}}}},de={noAuto:Ac,config:T,dom:Oc,parse:Ec,library:Mo,findIconDefinition:br,toHtml:Yt},Cc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(be.styles).length>0||T.autoFetchSvg)&&De&&T.autoReplaceSvg&&de.dom.i2svg({node:r})};function Rn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Yt(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!De){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Pc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ea(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Nn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ic(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(T.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function aa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,b=e.watchable,O=b===void 0?!1:b,F=r.found?r:n,z=F.width,S=F.height,y=a==="fak",E=[T.replacementClass,i?"".concat(T.familyPrefix,"-").concat(i):""].filter(function(ae){return m.classes.indexOf(ae)===-1}).filter(function(ae){return ae!==""||!!ae}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(z," ").concat(S)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(z/S*16*.0625,"em")}:{};O&&(N.attributes[at]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Wt())},children:[l]}),delete N.attributes.title);var W=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),ee=r.found&&n.found?ze("generateAbstractMask",W)||{children:[],attributes:{}}:ze("generateAbstractIcon",W)||{children:[],attributes:{}},le=ee.children,we=ee.attributes;return W.children=le,W.attributes=we,s?Ic(W):Pc(W)}function Za(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[at]="");var d=A({},o.styles);ea(a)&&(d.transform=oc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Nn(d);m.length>0&&(u.style=m);var b=[];return b.push({tag:"span",attributes:u,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function Tc(e){var t=e.content,n=e.title,r=e.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Nn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xn=be.styles;function yr(e){var t=e[0],n=e[1],r=e.slice(4),a=Xr(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.GROUP)},children:[{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(T.familyPrefix,"-").concat(et.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Sc={found:!1,width:512,height:512};function Nc(e,t){!bo&&!T.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function xr(e,t){var n=t;return t==="fa"&&T.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(ze("missingIconAbstract"),n==="fa"){var i=No(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Xn[t]&&Xn[t][e]){var o=Xn[t][e];return r(yr(o))}Nc(e,t),r(A(A({},Sc),{},{icon:T.showMissingIcons&&e?ze("missingIconAbstract")||{}:{}}))})}var Qa=function(){},wr=T.measurePerformance&&Qt&&Qt.mark&&Qt.measure?Qt:{mark:Qa,measure:Qa},Mt='FA "6.1.1"',Mc=function(t){return wr.mark("".concat(Mt," ").concat(t," begins")),function(){return Fo(t)}},Fo=function(t){wr.mark("".concat(Mt," ").concat(t," ends")),wr.measure("".concat(Mt," ").concat(t),"".concat(Mt," ").concat(t," begins"),"".concat(Mt," ").concat(t," ends"))},ia={begin:Mc,end:Fo},on=function(){};function ei(e){var t=e.getAttribute?e.getAttribute(at):null;return typeof t=="string"}function Fc(e){var t=e.getAttribute?e.getAttribute(Gr):null,n=e.getAttribute?e.getAttribute(Jr):null;return t&&n}function Rc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(T.replacementClass)}function Lc(){if(T.autoReplaceSvg===!0)return sn.replace;var e=sn[T.autoReplaceSvg];return e||sn.replace}function zc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function jc(e){return X.createElement(e)}function Ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?zc:jc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Ro(o,{ceFn:r}))}),a}function Dc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var sn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Ro(a),n)}),n.getAttribute(at)===null&&T.keepOriginalSource){var r=X.createComment(Dc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Qr(n).indexOf(T.replacementClass))return sn.replace(t);var a=new RegExp("".concat(T.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===T.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Yt(s)}).join(`
`);n.setAttribute(at,""),n.innerHTML=o}};function ti(e){e()}function Lo(e,t){var n=typeof t=="function"?t:on;if(e.length===0)n();else{var r=ti;T.mutateApproach===Bf&&(r=Xe.requestAnimationFrame||ti),r(function(){var a=Lc(),i=ia.begin("mutate");e.map(a),i(),n()})}}var oa=!1;function zo(){oa=!0}function _r(){oa=!1}var vn=null;function ni(e){if(!!Ka&&!!T.observeMutations){var t=e.treeCallback,n=t===void 0?on:t,r=e.nodeCallback,a=r===void 0?on:r,i=e.pseudoElementsCallback,o=i===void 0?on:i,s=e.observeMutationsRoot,l=s===void 0?X:s;vn=new Ka(function(u){if(!oa){var d=Ve();Ot(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ei(m.addedNodes[0])&&(T.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&T.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ei(m.target)&&~Vf.indexOf(m.attributeName))if(m.attributeName==="class"&&Fc(m.target)){var b=Fn(Qr(m.target)),O=b.prefix,F=b.iconName;m.target.setAttribute(Gr,O||d),F&&m.target.setAttribute(Jr,F)}else Rc(m.target)&&a(m.target)})}}),De&&vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $c(){!vn||vn.disconnect()}function Uc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Bc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Fn(Qr(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=yc(a.prefix,e.innerText)||na(a.prefix,hr(e.innerText))),a}function Hc(e){var t=Ot(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return T.autoA11y&&(n?t["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(r||Wt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Wc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Pe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ri(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Hc(e),s=vr("parseNodeAttributes",{},e),l=t.styleParser?Uc(e):[];return A({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Pe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Yc=be.styles;function jo(e){var t=T.autoReplaceSvg==="nest"?ri(e,{styleParser:!1}):ri(e);return~t.extra.classes.indexOf(xo)?ze("generateLayersText",e,t):ze("generateSvgReplacementMutation",e,t)}function ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!De)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(qa,"-").concat(m))},a=function(m){return n.remove("".concat(qa,"-").concat(m))},i=T.autoFetchSvg?Object.keys(Zr):Object.keys(Yc),o=[".".concat(xo,":not([").concat(at,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(at,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ot(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=ia.begin("onTree"),u=s.reduce(function(d,m){try{var b=jo(m);b&&d.push(b)}catch(O){bo||O.name==="MissingIcon"&&console.error(O)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(b){Lo(b,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(b){l(),m(b)})})}function Kc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;jo(e).then(function(n){n&&Lo([n],t)})}function qc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:br(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:br(a||{})),e(r,A(A({},n),{},{mask:a}))}}var Xc=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Pe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,b=m===void 0?null:m,O=n.titleId,F=O===void 0?null:O,z=n.classes,S=z===void 0?[]:z,y=n.attributes,E=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!t){var W=t.prefix,ee=t.iconName,le=t.icon;return Rn(A({type:"icon"},t),function(){return it("beforeDOMElementCreation",{iconDefinition:t,params:n}),T.autoA11y&&(b?E["aria-labelledby"]="".concat(T.replacementClass,"-title-").concat(F||Wt()):(E["aria-hidden"]="true",E.focusable="false")),aa({icons:{main:yr(le),mask:l?yr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:ee,transform:A(A({},Pe),a),symbol:o,title:b,maskId:d,titleId:F,extra:{attributes:E,styles:j,classes:S}})})}},Vc={mixout:function(){return{icon:qc(Xc)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ai,n.nodeCallback=Kc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return ai(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,b=r.extra;return new Promise(function(O,F){Promise.all([xr(a,s),d.iconName?xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(z){var S=Xr(z,2),y=S[0],E=S[1];O([n,aa({icons:{main:y,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:b,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Nn(s);l.length>0&&(a.style=l);var u;return ea(o)&&(u=ze("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Gc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Rn({type:"layer"},function(){it("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(T.familyPrefix,"-layers")].concat(Sn(i)).join(" ")},children:o}]})}}}},Jc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Rn({type:"counter",content:n},function(){return it("beforeDOMElementCreation",{content:n,params:r}),Tc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(T.familyPrefix,"-layers-counter")].concat(Sn(s))}})})}}}},Zc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Pe:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,b=r.styles,O=b===void 0?{}:b;return Rn({type:"text",content:n},function(){return it("beforeDOMElementCreation",{content:n,params:r}),Za({content:n,transform:A(A({},Pe),i),title:s,extra:{attributes:m,styles:O,classes:["".concat(T.familyPrefix,"-layers-text")].concat(Sn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(ho){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return T.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Za({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Qc=new RegExp('"',"ug"),ii=[1105920,1112319];function eu(e){var t=e.replace(Qc,""),n=mc(t,0),r=n>=ii[0]&&n<=ii[1],a=t.length===2?t[0]===t[1]:!1;return{value:hr(a?t[0]:t),isSecondary:r||a}}function oi(e,t){var n="".concat(Uf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Ot(e.children),o=i.filter(function(ee){return ee.getAttribute(pr)===t})[0],s=Xe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Kf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?hn[l[2].toLowerCase()]:qf[u],O=eu(m),F=O.value,z=O.isSecondary,S=l[0].startsWith("FontAwesome"),y=na(b,F),E=y;if(S){var N=xc(F);N.iconName&&N.prefix&&(y=N.iconName,b=N.prefix)}if(y&&!z&&(!o||o.getAttribute(Gr)!==b||o.getAttribute(Jr)!==E)){e.setAttribute(n,E),o&&e.removeChild(o);var j=Wc(),W=j.extra;W.attributes[pr]=t,xr(y,b).then(function(ee){var le=aa(A(A({},j),{},{icons:{main:ee,mask:ra()},prefix:b,iconName:E,extra:W,watchable:!0})),we=X.createElement("svg");t==="::before"?e.insertBefore(we,e.firstChild):e.appendChild(we),we.outerHTML=le.map(function(ae){return Yt(ae)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function tu(e){return Promise.all([oi(e,"::before"),oi(e,"::after")])}function nu(e){return e.parentNode!==document.head&&!~Hf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(pr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function si(e){if(!!De)return new Promise(function(t,n){var r=Ot(e.querySelectorAll("*")).filter(nu).map(tu),a=ia.begin("searchPseudoElements");zo(),Promise.all(r).then(function(){a(),_r(),t()}).catch(function(){a(),_r(),n()})})}var ru={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;T.searchPseudoElements&&si(a)}}},li=!1,au={mixout:function(){return{dom:{unwatch:function(){zo(),li=!0}}}},hooks:function(){return{bootstrap:function(){ni(vr("mutationObserverCallbacks",{}))},noAuto:function(){$c()},watch:function(n){var r=n.observeMutationsRoot;li?_r():ni(vr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},fi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},iu={mixout:function(){return{parse:{transform:function(n){return fi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=fi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},b={transform:"translate(".concat(o/2*-1," -256)")},O={outer:s,inner:m,path:b};return{tag:"g",attributes:A({},O.outer),children:[{tag:"g",attributes:A({},O.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),O.path)}]}]}}}},Vn={x:0,y:0,width:"100%",height:"100%"};function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ou(e){return e.tag==="g"?e.children:[e]}var su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Fn(a.split(" ").map(function(o){return o.trim()})):ra();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,b=o.icon,O=ic({transform:l,containerWidth:m,iconWidth:u}),F={tag:"rect",attributes:A(A({},Vn),{},{fill:"white"})},z=d.children?{children:d.children.map(ci)}:{},S={tag:"g",attributes:A({},O.inner),children:[ci(A({tag:d.tag,attributes:A(A({},d.attributes),O.path)},z))]},y={tag:"g",attributes:A({},O.outer),children:[S]},E="mask-".concat(s||Wt()),N="clip-".concat(s||Wt()),j={tag:"mask",attributes:A(A({},Vn),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,y]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:ou(b)},j]};return r.push(W,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(E,")")},Vn)}),{children:r,attributes:a}}}},lu={provides:function(t){var n=!1;Xe.matchMedia&&(n=Xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},cu=[lc,Vc,Gc,Jc,Zc,ru,au,iu,su,lu,fu];kc(cu,{mixoutsTo:de});de.noAuto;var Do=de.config,uu=de.library;de.dom;var bn=de.parse;de.findIconDefinition;de.toHtml;var du=de.icon;de.layer;var mu=de.text;de.counter;function ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ui(Object(n),!0).forEach(function(r){oe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function yn(e){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yn(e)}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hu(e,t){if(e==null)return{};var n=pu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function kr(e){return gu(e)||vu(e)||bu(e)||yu()}function gu(e){if(Array.isArray(e))return Ar(e)}function vu(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bu(e,t){if(!!e){if(typeof e=="string")return Ar(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ar(e,t)}}function Ar(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$o={exports:{}};(function(e){(function(t){var n=function(y,E,N){if(!u(E)||m(E)||b(E)||O(E)||l(E))return E;var j,W=0,ee=0;if(d(E))for(j=[],ee=E.length;W<ee;W++)j.push(n(y,E[W],N));else{j={};for(var le in E)Object.prototype.hasOwnProperty.call(E,le)&&(j[y(le,N)]=n(y,E[le],N))}return j},r=function(y,E){E=E||{};var N=E.separator||"_",j=E.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return F(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(E,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var E=a(y);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(y,E){return r(y,E).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},b=function(y){return s.call(y)=="[object RegExp]"},O=function(y){return s.call(y)=="[object Boolean]"},F=function(y){return y=y-0,y===y},z=function(y,E){var N=E&&"process"in E?E.process:E;return typeof N!="function"?y:function(j,W){return N(j,y,W)}},S={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,E){return n(z(a,E),y)},decamelizeKeys:function(y,E){return n(z(o,E),y,E)},pascalizeKeys:function(y,E){return n(z(i,E),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=S:t.humps=S})(xu)})($o);var wu=$o.exports,_u=["class","style"];function ku(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=wu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Au(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function sa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return sa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=Au(d);break;case"style":l.style=ku(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=hu(n,_u);return lo(e.tag,ge(ge(ge({},t),{},{class:a.class,style:ge(ge({},a.style),o)},a.attrs),s),r)}var Uo=!1;try{Uo=!0}catch{}function Ou(){if(!Uo&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Dt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?oe({},e,t):{}}function Eu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},oe(t,"fa-".concat(e.size),e.size!==null),oe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),oe(t,"fa-pull-".concat(e.pull),e.pull!==null),oe(t,"fa-swap-opacity",e.swapOpacity),oe(t,"fa-bounce",e.bounce),oe(t,"fa-shake",e.shake),oe(t,"fa-beat",e.beat),oe(t,"fa-fade",e.fade),oe(t,"fa-beat-fade",e.beatFade),oe(t,"fa-flash",e.flash),oe(t,"fa-spin-pulse",e.spinPulse),oe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function di(e){if(e&&yn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(bn.icon)return bn.icon(e);if(e===null)return null;if(yn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Cu=Br({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=me(function(){return di(t.icon)}),i=me(function(){return Dt("classes",Eu(t))}),o=me(function(){return Dt("transform",typeof t.transform=="string"?bn.transform(t.transform):t.transform)}),s=me(function(){return Dt("mask",di(t.mask))}),l=me(function(){return du(a.value,ge(ge(ge(ge({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});tn(l,function(d){if(!d)return Ou("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=me(function(){return l.value?sa(l.value.abstract[0],{},r):null});return function(){return u.value}}});Br({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Do.familyPrefix,i=me(function(){return["".concat(a,"-layers")].concat(kr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return lo("div",{class:i.value},r.default?r.default():[])}}});Br({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Do.familyPrefix,i=me(function(){return Dt("classes",[].concat(kr(t.counter?["".concat(a,"-layers-counter")]:[]),kr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=me(function(){return Dt("transform",typeof t.transform=="string"?bn.transform(t.transform):t.transform)}),s=me(function(){var u=mu(t.value.toString(),ge(ge({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=me(function(){return sa(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var Pu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};uu.add(Pu);hf(Tf).component("font-awesome-icon",Cu).mount("#app");
