/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='docssite']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t){const e=n.n(t);e.t&&e.t.forEach(e=>{e.e||((t.o=t.o||{})[e.i]=l(n,t,e.i,r(t,e.c),e.r,e.u))})}function r(n,t){return e=>{n.f?n.f[t](e):(n.l=n.l||[]).push(t,e)}}function u(n,t){const e=n.l;if(e){for(t=0;t<e.length;t+=2)n.f[e[t]](e[t+1]);n.l=null}}function f(n,t,e,o,i){if(t){const d=t.s,m=n.n(d).t;if(m){const t=d.o=d.o||{};for(var c=0;c<m.length;c++){var u=m[c];if(u.i===e){var f=t[e];if(o&&!f){var s=e,a=d;"string"==typeof i?s=`${i}:${e}`:"object"==typeof i&&(a=i),t[e]=l(n,a,s,r(d,u.c),u.r,u.u)}else!o&&f&&(t[e](),t[e]=null);return!0}}}}return!1}function l(n,t,e,o,i,c,r,u){return r=e.split(":"),t&&r.length>1&&(t=n.d.a(t,r[0]),e=r[1]),t?(u=o,(r=e.split(".")).length>1&&(e=r[0],u=(n=>{n.keyCode===un[r[1]]&&o(n)})),n.d.m(t,e,u,i,c)):tn}function s(n){n.o&&(Object.keys(n.o).forEach(t=>n.o[t]()),n.o=null)}function a(n,t,e){const o={v:t.documentElement,p:t.head,b:t.body,h:n=>n.nodeType,y:n=>t.createElement(n),g:(n,e)=>t.createElementNS(n,e),w:n=>t.createTextNode(n),C:n=>t.createComment(n),N:(n,t,e)=>n.insertBefore(t,e),j:(n,t)=>n.removeChild(t),T:(n,t)=>n.appendChild(t),O:n=>n.childNodes,x:n=>n.parentNode,k:n=>n.nextSibling,A:n=>Y(n.tagName),M:n=>n.textContent,P:(n,t)=>n.textContent=t,S:(n,t)=>n.getAttribute(t),B:(n,t,e)=>n.setAttribute(t,e),R:(n,t,e,o)=>n.setAttributeNS(t,e,o),q:(n,t)=>n.removeAttribute(t),m:(n,t,e,i,c,r)=>(r=o.D?{capture:!!i,passive:!!c}:!!i,n.addEventListener(t,e,r),()=>n&&n.removeEventListener(t,e,r)),a:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.H(e):"body"===i?o.b:"document"===i?t:"window"===i?n:e};return o.H=((n,t)=>(t=o.x(n))&&11===o.h(t)?t.host:t),o}function d(n,t,e,o,i){const c=11===e.I.nodeType&&e.I.host?e.I.host:e.I,r=t&&t.L||cn,u=e.L||cn;for(i in r)u&&null!=u[i]||null==r[i]||m(n,c,i,r[i],void 0,o);for(i in u)i in r&&u[i]===("value"===i||"checked"===i?c[i]:r[i])||m(n,c,i,r[i],u[i],o)}function m(n,t,e,o,i,c,r,u){if("class"!==e||c)if("style"===e){o=o||cn,i=i||cn;for(r in o)i[r]||(t.style[r]="");for(r in i)i[r]!==o[r]&&(t.style[r]=i[r])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.n(t);o&&o.z&&e in o.z?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(r=e!==(e=e.replace(/^xlink\:?/,"")),1!==fn[e]||i&&"false"!==i?"function"!=typeof i&&(r?t.setAttributeNS(ln,Y(e),i):t.setAttribute(e,i)):r?t.removeAttributeNS(ln,Y(e)):t.removeAttribute(e));else{e=Y(e).substring(2);const c=t.o=t.o||{};i?o||(c[e]=l(n,t,e,i)):c[e]&&c[e]()}else if(o!==i){const n=null==o||""===o?rn:o.trim().split(/\s+/),e=null==i||""===i?rn:i.trim().split(/\s+/);let c=null==t.className||""===t.className?rn:t.className.trim().split(/\s+/);for(r=0,u=n.length;r<u;r++)-1===e.indexOf(n[r])&&(c=c.filter(t=>t!==n[r]));for(r=0,u=e.length;r<u;r++)-1===n.indexOf(e[r])&&(c=[...c,e[r]]);t.className=c.join(" ")}}function v(n,t,e){try{n[t]=e}catch(n){}}function p(n,t){function e(o,i,c){let r=0;if("function"==typeof o.F&&(o=o.F(Object.assign({},o.L,{Z:o._}))),W(o.G))o.I=t.w(o.G);else{const i=o.I=sn||"svg"===o.F?t.g("http://www.w3.org/2000/svg",o.F):t.y(o.F);sn="svg"===o.F||"foreignObject"!==o.F&&sn,d(n,null,o,sn),null!==a&&i.J!==a&&t.B(i,i.J=a,"");const c=o._;if(c){let n;for(;r<c.length;++r)(n=e(c[r],i,r))&&t.T(i,n)}}return o.I}function o(n,o,i,c,r){const u=n.$defaultHolder&&t.x(n.$defaultHolder)||n;let f;for(;c<=r;++c){var l=i[c];W(l)&&(f=W(l.G)?t.w(l.G):e(l,n,c),W(f)&&(l.I=f,t.N(u,f,o)))}}function i(n,e,o,i){for(;o<=i;++o)W(e[o])&&t.j(n,e[o].I)}function c(n,c,l){let s,a,d,m,v=0,p=0,b=c.length-1,h=c[0],y=c[b],$=l.length-1,g=l[0],w=l[$];for(;v<=b&&p<=$;)null==h?h=c[++v]:null==y?y=c[--b]:null==g?g=l[++p]:null==w?w=l[--$]:r(h,g)?(f(h,g),h=c[++v],g=l[++p]):r(y,w)?(f(y,w),y=c[--b],w=l[--$]):r(h,w)?(f(h,w),t.N(n,h.I,t.k(y.I)),h=c[++v],w=l[--$]):r(y,g)?(f(y,g),t.N(n,y.I,h.I),y=c[--b],g=l[++p]):(X(s)&&(s=u(c,v,b)),a=s[g.K],X(a)?(m=e(g,n,p),g=l[++p]):((d=c[a]).F!==g.F?m=e(g,n,a):(f(d,g),c[a]=void 0,m=d.I),g=l[++p]),m&&t.N(n,m,h.I));v>b?o(n,null==l[$+1]?null:l[$+1].I,l,p,$):p>$&&i(n,c,v,b)}function r(n,t){return n.F===t.F&&n.K===t.K}function u(n,t,e){let o,i,c,r={};for(o=t;o<=e;++o)null!=(c=n[o])&&void 0!==(i=c.K)&&(r.Q=o);return r}function f(e,r){const u=r.I=e.I,f=e._,l=r._;if(sn=r.I&&null!=r.I.parentElement&&void 0!==r.I.U,sn="svg"===r.F||"foreignObject"!==r.F&&sn,X(r.G))"slot"!==r.F&&d(n,e,r,sn),W(f)&&W(l)?c(u,f,l):W(l)?(W(e.G)&&t.P(u,""),o(u,null,l,0,l.length-1)):W(f)&&i(u,f,0,f.length-1);else if(u.V&&u.V.W){let n=u.V.W[0].parentElement;t.P(n,r.G),u.V.W=[n.childNodes[0]]}else e.G!==r.G&&t.P(u,r.G)}let l,s,a;return function n(e,o,i,c,r,u){return l=i,s=c,a=2===r||1===r&&!t.X?"data-"+t.A(e.I):null,l||a&&t.B(e.I,a+"-host",""),f(e,o),o}}function b(n,t){n&&(n.Y&&n.Y(t?null:n.I),n._&&n._.forEach(n=>{b(n,t)}))}function h(n,t,e){for(var o,i=!1,c=!1,r=arguments.length;r-- >2;)dn.push(arguments[r]);for(;dn.length;)if((e=dn.pop())&&void 0!==e.pop)for(r=e.length;r--;)dn.push(e[r]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].G+=e:void 0===o?o=[c?y(e):e]:o.push(c?y(e):e),i=c;const u=new an;if(u.F=n,u._=o,t&&(u.L=t,u.K=t.nn,u.Y=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(r in t.class)t.class[r]&&dn.push(r);t.class=dn.join(" "),dn.length=0}return u}function y(n){const t=new an;return t.G=n,t}function $(n,t){var e,o,i,c,r,u,f=t.querySelectorAll(`[${en}]`),l=f.length;if(t.tn=l>0)for(c=0;c<l;c++)for(e=f[c],o=n.S(e,en),(i=e.en=new an).F=n.A(i.I=e),r=0,u=e.childNodes.length;r<u;r++)g(n,e.childNodes[r],i,o,!0)}function g(n,t,e,o,i){var c,r,u,f,l=n.h(t);if(i&&1===l){(r=n.S(t,on))&&(u=r.split("."))[0]===o&&((f=new an).F=n.A(f.I=t),e._||(e._=[]),e._[u[1]]=f,e=f,i=""!==u[2]);for(var s=0;s<t.childNodes.length;s++)g(n,t.childNodes[s],e,o,i)}else 3===l&&(c=t.previousSibling)&&8===n.h(c)&&"s"===(u=n.M(c).split("."))[0]&&u[1]===o&&((f=y(n.M(t))).I=t,e._||(e._=[]),e._[u[2]]=f)}function w(n,t,e,o){function i(){for(;f.length>0;)f.shift()();e=!1}function c(e){for(e=t(),i();l.length>0&&t()-e<40;)l.shift()();(o=l.length>0)&&n(r)}function r(e){for(i(),e=4+t();l.length>0&&t()<e;)l.shift()();(o=l.length>0)&&n(c)}const u=Promise.resolve(),f=[],l=[];return{add:(t,r)=>{3===r?(f.push(t),e||(e=!0,u.then(i))):(l.push(t),o||(o=!0,n(c)))}}}function C(n,t,e){const o={on:n[0],z:{mode:{in:1},color:{in:1,cn:"color"}}};return o.rn=n[1],j(o,n[3],e),o.un=n[4],o.fn=n[5],n[6]&&(o.t=n[6].map(N)),o.ln=n[7],t[o.on]=o}function N(n){return{i:n[0],c:n[1],e:!!n[2],u:!!n[3],r:!!n[4]}}function j(n,t,e){if(t){n.z=n.z||{};for(var o=0;o<t.length;o++){var i=t[o];n.z[i[0]]={in:i[1],cn:i[2]?1===e?Y(i[0]):nn(i[0]):0,sn:i[3],an:i[4]}}}}function T(n,t,e,o){const i=n[e[0]];i.dn=t[e[0]],j(i,e[1],o),i.mn=e[2],e[3]&&(i.vn=e[3].map(O)),i.pn=e[4],i.bn=e[5]}function O(n){return{i:n[0],c:n[1]||n[0],hn:!n[2],yn:!n[3],$n:!n[4]}}function x(n,t){if(W(t)){if(3===n)return"false"!==t&&(""===t||!!t);if(4===n)return parseFloat(t)}return t}function E(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].in;1===i||2===i?S(e,o,function n(){return(this.gn=this.gn||{})[o]},function t(e){M(n,this,o,e)}):6===i&&P(e,o,tn)})}function k(n,t,e,o){o.s=e,e.gn=e.gn||{},t.z&&Object.keys(t.z).forEach(i=>{A(n,t,e,o,i)})}function A(n,t,e,o,i){const c=t.z[i],r=c.in;if(1===r||5===r||2===r){if(5!==r){if(c.cn&&(void 0===e.gn[i]||""===e.gn[i])){const n=e.getAttribute(c.cn);null!=n&&(e.gn[i]=x(c.sn,n))}e.hasOwnProperty(i)&&(void 0===e.gn[i]&&(e.gn[i]=e[i]),n.isClient&&delete e[i])}o.hasOwnProperty(i)&&void 0===e.gn[i]&&(e.gn[i]=o[i]),S(o,i,function u(){const n=this.s;return n&&n.gn&&n.gn[i]},function f(t){const e=this.s;e&&1!==r&&M(n,e,i,t)})}}function M(n,t,e,o){const i=t.gn=t.gn||{};o!==i[e]&&(i[e]=o,t.f&&!n.wn&&z(n,t))}function P(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}function S(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function B(n,t,e){return{create:q(n,t,e,"create"),componentOnReady:q(n,t,e,"componentOnReady")}}function R(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.b.querySelector(e)),i||(i=t[e]=n.y(e),n.T(n.b,i)),i.componentOnReady(o)})}function q(n,t,e,o){return function(){const i=arguments;return R(n,t,e).then(n=>n[o].apply(n,i))}}function D(n,t,e){try{e=n.n(t),t.f=new e.dn,k(n,e,t,t.f);try{u(t)}catch(e){n.Cn(e,2,t)}}catch(e){t.f={},n.Cn(e,7,t,!0)}}function H(n,t,e){if(t.f&&!t.Nn&&(!t.$activeLoading||!t.$activeLoading.length)){t.$activeLoading=null,t.tn=!0;try{b(t.en),t.jn&&(t.jn.forEach(n=>n(t)),t.jn=null)}catch(e){n.Cn(e,4,t)}t.classList.add(e),I(t)}}function I(n,t,e){n.Tn&&((e=n.Tn.$activeLoading)&&((t=e.indexOf(n))>-1&&e.splice(t,1),!e.length&&n.Tn.$initLoad()),n.Tn=null)}function L(n,t,e,o){const i=t.f,c=e.mn;if(i.render||i.hostData||c){n.wn=!0;const c=i.render&&i.render();n.wn=!1;const r=t.en||new an;r.I=t,t.en=n.render(r,h(null,void 0,c),o,t.V,e.un)}n.On(e,i.mode,t),t.$rendered=!0,t.$onRender&&(t.$onRender.forEach(n=>n()),t.$onRender=null)}function z(n,t){t.xn||(t.xn=!0,n.En.add(()=>{t.xn=!1,F(n,t)}))}function F(n,t){if(!t.Nn){const e=!t.f;let o;if(e){const e=t.Tn;if(e&&!e.$rendered)return void(e.$onRender=e.$onRender||[]).push(()=>{F(n,t)});D(n,t);try{t.f.componentWillLoad&&(o=t.f.componentWillLoad())}catch(e){n.Cn(e,3,t)}}o&&o.then?o.then(()=>Z(n,t,e)):Z(n,t,e)}}function Z(n,t,e){try{L(n,t,n.n(t),!e)}catch(e){n.Cn(e,8,t,!0)}try{e&&t.$initLoad()}catch(e){n.Cn(e,6,t,!0)}}function _(n,t,e){e.$connected||(e.$connected=!0,e.Nn=null,c(n,e),G(n,e),n.En.add(()=>{n.kn(t,e),n.An(t,e,()=>z(n,e))},3))}function G(n,t,e){for(e=t;e=n.d.H(e);)if(n.Mn(e)){e.tn||(t.Tn=e,(e.$activeLoading=e.$activeLoading||[]).push(t));break}}function J(n,t){!n.Pn&&K(n.d,t)&&(t.Nn=!0,I(t),b(t.en,!0),s(t),t.f&&(t.f=t.f.s=null),t.$activeLoading=t.$connected=t.$defaultHolder=t.Sn=t.gn=t.en=t.Tn=t.tn=t.xn=t.Bn=null)}function K(n,t){for(;t;){if(!n.x(t))return 9!==n.h(t);t=n.x(t)}}function Q(n,t,e,o){e.connectedCallback=function(){_(n,t,this)},e.disconnectedCallback=function(){J(n,this)},e.componentOnReady=function(n,t){return n||(t=new Promise(t=>n=t)),U(this,n),t},e.$initLoad=function(){H(n,this,o)},E(n,t.z,e)}function U(n,t){n.Nn||(n.tn?t(n):(n.jn=n.jn||[]).push(t))}function V(n,t){return 2===t.un||1===t.un&&!n}const W=n=>void 0!==n&&null!==n,X=n=>void 0===n||null===n,Y=n=>n.toLowerCase(),nn=n=>n.replace(/([A-Z])/g,n=>"-"+Y(n[0])),tn=()=>{},en="data-ssrv",on="data-ssrc",cn={},rn=[],un={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},fn={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},ln="http://www.w3.org/1999/xlink";let sn=!1;class an{}const dn=[],mn=n[o]=n[o]||{},vn=function pn(t,e,o,i,c,r){function u(n,t,e,o,i){function r(){clearTimeout(o),i.onerror=i.onload=null,N.j(N.x(i),i),y[e]=!1}e=c+t+(V(N.X,n)?".sc":"")+".js",y[e]||(y[e]=!0,(i=N.y("script")).charset="utf-8",i.async=!0,i.src=e,o=setTimeout(r,12e4),i.onerror=i.onload=r,N.T(N.p,i))}const s={html:{}},d={},m={},v={},b={},y={},g={},N=a(o,i);t.addListener=((n,t,e,o)=>l(O,n,t,e,o&&o.capture,o&&o.passive)),t.enableListener=((n,t,e,o)=>f(O,n,t,e,o)),t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i;const j=o.Rn=o.Rn||{},O={kn:function x(n,e){e.mode||(e.mode=N.S(e,"mode")||t.mode),N.X||1!==n.un||(e.shadowRoot=e)},d:N,qn:function E(n,t){const e=n.on;j[e]||(j[e]=!0,Q(O,n,t.prototype,r),o.customElements.define(e,t))},Dn:t.emit,n:n=>s[N.A(n)],Hn:n=>t[n],isClient:!0,Mn:n=>!(!j[N.A(n)]&&!O.n(n)),An:function k(n,t,e,o){o=(n.rn[t.mode]||n.rn)[0],v[o]?e():((m[o]=m[o]||[]).push(e),u(n,o))},Cn:(n,t,e)=>void 0,In:n=>B(N,g,n),En:w(t=>n.requestAnimationFrame(t),()=>o.performance.now()),Ln:n=>(n||[]).map(n=>C(n,s))};O.render=p(O,N);const A=N.v;return A.$rendered=!0,A.$activeLoading=[],A.$initLoad=(()=>A.tn=!0),$(N,A),e.loadComponents=function n(e,o){const i=arguments;o(d,h,t,c);for(var r=2;r<i.length;r++)T(s,d,i[r]);var u=m[e];if(u){for(r=0;r<u.length;r++)u[r]();m[e]=null}v[e]=!0},e.loadStyles=function n(){const t=arguments;let e;for(var o=0;o<t.length;o+=2)b[t[o]]=e=N.y("template"),e.innerHTML=`<style>${t[o+1]}</style>`,e.id=`tmp-${t[o]}`,N.T(N.p,e)},O.On=((n,t,e)=>{{const o=b[n.on+"_"+t]||b[n.on];if(o){let t=N.p;if(N.X)if(1===n.un)t=e.shadowRoot;else for(;e=N.x(e);)if(e.host&&e.host.shadowRoot){t=e.host.shadowRoot;break}const i=t.zn=t.zn||{};if(!i[o.id]){const n=o.content.cloneNode(!0),e=t.querySelector("[data-visibility]");N.N(t,n,e&&e.nextSibling||t.Fn),i[o.id]=!0}}}}),O}(e,mn,n,t,i,hydratedCssClass);vn.Ln(mn.components).forEach(n=>vn.qn(n,class extends HTMLElement{}))})(window,document,Context,appNamespace,publicPath);
})({},"DocsSite","hydrated","/build/docssite/");