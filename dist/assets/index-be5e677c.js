(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function y(){}function pe(l){return l()}function X(){return Object.create(null)}function H(l){l.forEach(pe)}function _e(l){return typeof l=="function"}function R(l,e){return l!=l?e==e:l!==e||l&&typeof l=="object"||typeof l=="function"}let I;function Y(l,e){return I||(I=document.createElement("a")),I.href=e,l===I.href}function be(l){return Object.keys(l).length===0}function b(l,e){l.appendChild(e)}function d(l,e,t){l.insertBefore(e,t||null)}function u(l){l.parentNode&&l.parentNode.removeChild(l)}function O(l,e){for(let t=0;t<l.length;t+=1)l[t]&&l[t].d(e)}function _(l){return document.createElement(l)}function E(l){return document.createTextNode(l)}function v(){return E(" ")}function C(){return E("")}function ye(l,e,t,n){return l.addEventListener(e,t,n),()=>l.removeEventListener(e,t,n)}function m(l,e,t){t==null?l.removeAttribute(e):l.getAttribute(e)!==t&&l.setAttribute(e,t)}function ve(l){return Array.from(l.childNodes)}function N(l,e,t,n){t===null?l.style.removeProperty(e):l.style.setProperty(e,t,n?"important":"")}function F(l,e,t){l.classList[t?"add":"remove"](e)}function W(l,e){return new l(e)}let x;function M(l){x=l}function $e(){if(!x)throw new Error("Function called outside component initialization");return x}function we(l){$e().$$.on_mount.push(l)}const A=[],Z=[];let T=[];const Q=[],ke=Promise.resolve();let G=!1;function qe(){G||(G=!0,ke.then(ge))}function U(l){T.push(l)}const J=new Set;let j=0;function ge(){if(j!==0)return;const l=x;do{try{for(;j<A.length;){const e=A[j];j++,M(e),ze(e.$$)}}catch(e){throw A.length=0,j=0,e}for(M(null),A.length=0,j=0;Z.length;)Z.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];J.has(t)||(J.add(t),t())}T.length=0}while(A.length);for(;Q.length;)Q.pop()();G=!1,J.clear(),M(l)}function ze(l){if(l.fragment!==null){l.update(),H(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(U)}}function Le(l){const e=[],t=[];T.forEach(n=>l.indexOf(n)===-1?e.push(n):t.push(n)),t.forEach(n=>n()),T=e}const B=new Set;let S;function q(){S={r:0,c:[],p:S}}function z(){S.r||H(S.c),S=S.p}function p(l,e){l&&l.i&&(B.delete(l),l.i(e))}function g(l,e,t,n){if(l&&l.o){if(B.has(l))return;B.add(l),S.c.push(()=>{B.delete(l),n&&(t&&l.d(1),n())}),l.o(e)}else n&&n()}const We=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...We];function k(l){l&&l.c()}function $(l,e,t,n){const{fragment:i,after_update:o}=l.$$;i&&i.m(e,t),n||U(()=>{const r=l.$$.on_mount.map(pe).filter(_e);l.$$.on_destroy?l.$$.on_destroy.push(...r):H(r),l.$$.on_mount=[]}),o.forEach(U)}function w(l,e){const t=l.$$;t.fragment!==null&&(Le(t.after_update),H(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Ce(l,e){l.$$.dirty[0]===-1&&(A.push(l),qe(),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function D(l,e,t,n,i,o,r,s=[-1]){const a=x;M(l);const c=l.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(a?a.$$.context:[])),callbacks:X(),dirty:s,skip_bound:!1,root:e.target||a.$$.root};r&&r(c.root);let h=!1;if(c.ctx=t?t(l,e.props||{},(f,L,...K)=>{const V=K.length?K[0]:L;return c.ctx&&i(c.ctx[f],c.ctx[f]=V)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](V),h&&Ce(l,f)),L}):[],c.update(),h=!0,H(c.before_update),c.fragment=n?n(c.ctx):!1,e.target){if(e.hydrate){const f=ve(e.target);c.fragment&&c.fragment.l(f),f.forEach(u)}else c.fragment&&c.fragment.c();e.intro&&p(l.$$.fragment),$(l,e.target,e.anchor,e.customElement),ge()}M(a)}class P{$destroy(){w(this,1),this.$destroy=y}$on(e,t){if(!_e(t))return y;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}$set(e){this.$$set&&!be(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ee(l){let e,t;return{c(){e=_("iframe"),Y(e.src,t="/src/old/"+l[0]+"/index.html")||m(e,"src",t),m(e,"title",l[0]),m(e,"frameborder","0"),m(e,"class","svelte-1fe97cg")},m(n,i){d(n,e,i)},p(n,i){i&1&&!Y(e.src,t="/src/old/"+n[0]+"/index.html")&&m(e,"src",t),i&1&&m(e,"title",n[0])},d(n){n&&u(e)}}}function Se(l){let e,t=l[0]&&ee(l);return{c(){t&&t.c(),e=C()},m(n,i){t&&t.m(n,i),d(n,e,i)},p(n,[i]){n[0]?t?t.p(n,i):(t=ee(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:y,o:y,d(n){t&&t.d(n),n&&u(e)}}}function Ee(l,e,t){let n;return we(()=>{t(0,n=window.location.href.slice(window.location.href.indexOf("old/")+4))}),[n]}class je extends P{constructor(e){super(),D(this,e,Ee,Se,R,{})}}function Ae(l){let e;return{c(){e=_("nav"),e.innerHTML=`<div class="group"><h3>HTML</h3> 
        <ul><li><a href="#old/html-input">HTML Inputs</a></li></ul></div> 
    <div class="group"><h3>CSS</h3> 
        <ul><li><a href="#old/css-flex">CSS flex playground</a></li> 
            <li><a href="#old/css-grid">CSS grid playground</a></li> 
            <li><a href="#old/css-transition">CSS transition playground</a></li></ul></div> 
    <div class="group"><h3>REACT</h3> 
        <ul><li><a href="#react-prereq">Prerequisite checklist</a></li></ul></div>`},m(t,n){d(t,e,n)},p:y,i:y,o:y,d(t){t&&u(e)}}}class Te extends P{constructor(e){super(),D(this,e,null,Ae,R,{})}}function te(l,e,t){const n=l.slice();n[7]=e[t],n[13]=t;const i=n[1]||n[7].mount;n[8]=i;const o=n[2]||n[7].destroy;n[9]=o;const r=[n[3][n[13]],n[4][n[13]]];return n[10]=r[0],n[11]=r[1],n}function Ne(l){let e,t,n=l[11]&&ne(l);return{c(){n&&n.c(),e=C()},m(i,o){n&&n.m(i,o),d(i,e,o),t=!0},p(i,o){i[11]?n?(n.p(i,o),o&24&&p(n,1)):(n=ne(i),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(q(),g(n,1,1,()=>{n=null}),z())},i(i){t||(p(n),t=!0)},o(i){g(n),t=!1},d(i){n&&n.d(i),i&&u(e)}}}function Me(l){let e,t,n=l[11]&&l[10]&&ie(l);return{c(){n&&n.c(),e=C()},m(i,o){n&&n.m(i,o),d(i,e,o),t=!0},p(i,o){i[11]&&i[10]?n?(n.p(i,o),o&24&&p(n,1)):(n=ie(i),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(q(),g(n,1,1,()=>{n=null}),z())},i(i){t||(p(n),t=!0)},o(i){g(n),t=!1},d(i){n&&n.d(i),i&&u(e)}}}function Oe(l){let e,t,n,i;var o=l[7].component;function r(s){return{}}return o&&(t=W(o,r())),{c(){e=_("span"),t&&k(t.$$.fragment),n=v(),m(e,"class","__dug-route-wrapper"),N(e,"display",l[10]?"inline":"none")},m(s,a){d(s,e,a),t&&$(t,e,null),b(e,n),i=!0},p(s,a){if(a&1&&o!==(o=s[7].component)){if(t){q();const c=t;g(c.$$.fragment,1,0,()=>{w(c,1)}),z()}o?(t=W(o,r()),k(t.$$.fragment),p(t.$$.fragment,1),$(t,e,n)):t=null}(!i||a&24)&&N(e,"display",s[10]?"inline":"none")},i(s){i||(t&&p(t.$$.fragment,s),i=!0)},o(s){t&&g(t.$$.fragment,s),i=!1},d(s){s&&u(e),t&&w(t)}}}function xe(l){let e,t,n=(!l[11]||l[10]&&l[11])&&le(l);return{c(){n&&n.c(),e=C()},m(i,o){n&&n.m(i,o),d(i,e,o),t=!0},p(i,o){!i[11]||i[10]&&i[11]?n?(n.p(i,o),o&24&&p(n,1)):(n=le(i),n.c(),p(n,1),n.m(e.parentNode,e)):n&&(q(),g(n,1,1,()=>{n=null}),z())},i(i){t||(p(n),t=!0)},o(i){g(n),t=!1},d(i){n&&n.d(i),i&&u(e)}}}function ne(l){let e,t,n,i;var o=l[7].component;function r(s){return{}}return o&&(t=W(o,r())),{c(){e=_("span"),t&&k(t.$$.fragment),n=v(),m(e,"class","__dug-route-wrapper"),N(e,"display",l[10]?"inline":"none")},m(s,a){d(s,e,a),t&&$(t,e,null),b(e,n),i=!0},p(s,a){if(a&1&&o!==(o=s[7].component)){if(t){q();const c=t;g(c.$$.fragment,1,0,()=>{w(c,1)}),z()}o?(t=W(o,r()),k(t.$$.fragment),p(t.$$.fragment,1),$(t,e,n)):t=null}(!i||a&24)&&N(e,"display",s[10]?"inline":"none")},i(s){i||(t&&p(t.$$.fragment,s),i=!0)},o(s){t&&g(t.$$.fragment,s),i=!1},d(s){s&&u(e),t&&w(t)}}}function ie(l){let e,t,n;var i=l[7].component;function o(r){return{}}return i&&(e=W(i,o())),{c(){e&&k(e.$$.fragment),t=C()},m(r,s){e&&$(e,r,s),d(r,t,s),n=!0},p(r,s){if(s&1&&i!==(i=r[7].component)){if(e){q();const a=e;g(a.$$.fragment,1,0,()=>{w(a,1)}),z()}i?(e=W(i,o()),k(e.$$.fragment),p(e.$$.fragment,1),$(e,t.parentNode,t)):e=null}},i(r){n||(e&&p(e.$$.fragment,r),n=!0)},o(r){e&&g(e.$$.fragment,r),n=!1},d(r){r&&u(t),e&&w(e,r)}}}function le(l){let e,t,n,i;var o=l[7].component;function r(s){return{}}return o&&(t=W(o,r())),{c(){e=_("span"),t&&k(t.$$.fragment),n=v(),m(e,"class","__dug-route-wrapper"),N(e,"display",l[10]?"inline":"none")},m(s,a){d(s,e,a),t&&$(t,e,null),b(e,n),i=!0},p(s,a){if(a&1&&o!==(o=s[7].component)){if(t){q();const c=t;g(c.$$.fragment,1,0,()=>{w(c,1)}),z()}o?(t=W(o,r()),k(t.$$.fragment),p(t.$$.fragment,1),$(t,e,n)):t=null}(!i||a&24)&&N(e,"display",s[10]?"inline":"none")},i(s){i||(t&&p(t.$$.fragment,s),i=!0)},o(s){t&&g(t.$$.fragment,s),i=!1},d(s){s&&u(e),t&&w(t)}}}function re(l){let e,t,n,i;const o=[xe,Oe,Me,Ne],r=[];function s(a,c){return a[8]&&a[9]?0:a[8]&&!a[9]?1:!a[8]&&a[9]?2:!a[8]&&!a[9]?3:-1}return~(e=s(l))&&(t=r[e]=o[e](l)),{c(){t&&t.c(),n=C()},m(a,c){~e&&r[e].m(a,c),d(a,n,c),i=!0},p(a,c){let h=e;e=s(a),e===h?~e&&r[e].p(a,c):(t&&(q(),g(r[h],1,1,()=>{r[h]=null}),z()),~e?(t=r[e],t?t.p(a,c):(t=r[e]=o[e](a),t.c()),p(t,1),t.m(n.parentNode,n)):t=null)},i(a){i||(p(t),i=!0)},o(a){g(t),i=!1},d(a){~e&&r[e].d(a),a&&u(n)}}}function He(l){let e,t,n=l[0],i=[];for(let r=0;r<n.length;r+=1)i[r]=re(te(l,n,r));const o=r=>g(i[r],1,1,()=>{i[r]=null});return{c(){for(let r=0;r<i.length;r+=1)i[r].c();e=C()},m(r,s){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(r,s);d(r,e,s),t=!0},p(r,[s]){if(s&31){n=r[0];let a;for(a=0;a<n.length;a+=1){const c=te(r,n,a);i[a]?(i[a].p(c,s),p(i[a],1)):(i[a]=re(c),i[a].c(),p(i[a],1),i[a].m(e.parentNode,e))}for(q(),a=n.length;a<i.length;a+=1)o(a);z()}},i(r){if(!t){for(let s=0;s<n.length;s+=1)p(i[s]);t=!0}},o(r){i=i.filter(Boolean);for(let s=0;s<i.length;s+=1)g(i[s]);t=!1},d(r){O(i,r),r&&u(e)}}}function Re(l,e,t){let{routes:n=[]}=e,i=n.map(h=>!1),o=n.map(h=>!1),r=window.location.hash,{mountAll:s=!1}=e,{destroyAll:a=!1}=e;c(),window.addEventListener("hashchange",()=>{r=window.location.hash,c()});function c(){n.forEach((h,f)=>{t(3,i[f]=h.hash?h.hash.startsWith("layout:")?r.startsWith(h.hash.split(":")[1]):r===h.hash:r===""||r==="#",i),i[f]&&t(4,o[f]=!0,o)}),t(0,n)}return l.$$set=h=>{"routes"in h&&t(0,n=h.routes),"mountAll"in h&&t(1,s=h.mountAll),"destroyAll"in h&&t(2,a=h.destroyAll)},[n,s,a,i,o]}class De extends P{constructor(e){super(),D(this,e,Re,He,R,{routes:0,mountAll:1,destroyAll:2})}}function oe(l,e,t){const n=l.slice();return n[4]=e[t][0],n[5]=e[t][1],n}function se(l,e,t){const n=l.slice();return n[8]=e[t],n}function ae(l,e,t){const n=l.slice();return n[12]=e[t],n}function Pe(l){const e=l.slice(),t=e[8].replace("quiz:","");return e[11]=t,e}function ce(l,e,t){const n=l.slice();return n[4]=e[t][0],n[5]=e[t][1],n}function fe(l){let e,t=l[4]+"",n,i,o,r;function s(){return l[2](l[4])}return{c(){e=_("button"),n=E(t),i=v(),m(e,"class","svelte-ek3j9t"),F(e,"selected",l[0]===l[4])},m(a,c){d(a,e,c),b(e,n),b(e,i),o||(r=ye(e,"click",s),o=!0)},p(a,c){l=a,c&3&&F(e,"selected",l[0]===l[4])},d(a){a&&u(e),o=!1,r()}}}function Ie(l){let e,t=l[8].name+"",n,i,o,r,s=l[8].subList&&Fe(l);return{c(){e=_("div"),n=E(t),i=v(),s&&s.c(),o=v(),r=_("input"),m(e,"class","svelte-ek3j9t"),m(r,"type","checkbox"),m(r,"class","svelte-ek3j9t")},m(a,c){d(a,e,c),b(e,n),b(e,i),s&&s.m(e,null),d(a,o,c),d(a,r,c)},p(a,c){a[8].subList&&s.p(a,c)},d(a){a&&u(e),s&&s.d(),a&&u(o),a&&u(r)}}}function Be(l){let e;function t(r,s){return r[8].startsWith("quiz:")?de:Je}function n(r,s){return s===de?Pe(r):r}let i=t(l),o=i(n(l,i));return{c(){o.c(),e=C()},m(r,s){o.m(r,s),d(r,e,s)},p(r,s){o.p(n(r,i),s)},d(r){o.d(r),r&&u(e)}}}function Fe(l){let e,t=l[8].subList,n=[];for(let i=0;i<t.length;i+=1)n[i]=ue(ae(l,t,i));return{c(){e=_("ul");for(let i=0;i<n.length;i+=1)n[i].c()},m(i,o){d(i,e,o);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null)},p(i,o){if(o&2){t=i[8].subList;let r;for(r=0;r<t.length;r+=1){const s=ae(i,t,r);n[r]?n[r].p(s,o):(n[r]=ue(s),n[r].c(),n[r].m(e,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=t.length}},d(i){i&&u(e),O(n,i)}}}function ue(l){let e,t=l[12]+"",n,i;return{c(){e=_("li"),n=E(t),i=v()},m(o,r){d(o,e,r),b(e,n),b(e,i)},p:y,d(o){o&&u(e)}}}function Je(l){let e,t=l[8]+"",n,i,o;return{c(){e=_("div"),n=E(t),i=v(),o=_("input"),m(e,"class","svelte-ek3j9t"),m(o,"type","checkbox"),m(o,"class","svelte-ek3j9t")},m(r,s){d(r,e,s),b(e,n),d(r,i,s),d(r,o,s)},p:y,d(r){r&&u(e),r&&u(i),r&&u(o)}}}function de(l){let e,t=l[11]+"",n,i,o;return{c(){e=_("div"),n=E(t),i=v(),o=_("textarea"),m(e,"class","svelte-ek3j9t"),m(o,"class","svelte-ek3j9t")},m(r,s){d(r,e,s),b(e,n),d(r,i,s),d(r,o,s)},p:y,d(r){r&&u(e),r&&u(i),r&&u(o)}}}function he(l){let e;function t(o,r){return typeof o[8]=="string"?Be:Ie}let i=t(l)(l);return{c(){e=_("div"),i.c(),m(e,"class","groupItem svelte-ek3j9t")},m(o,r){d(o,e,r),i.m(e,null)},p(o,r){i.p(o,r)},d(o){o&&u(e),i.d()}}}function me(l){let e,t,n=l[5],i=[];for(let o=0;o<n.length;o+=1)i[o]=he(se(l,n,o));return{c(){e=_("div");for(let o=0;o<i.length;o+=1)i[o].c();t=v(),m(e,"class","group svelte-ek3j9t"),F(e,"none",l[0]!==l[4])},m(o,r){d(o,e,r);for(let s=0;s<i.length;s+=1)i[s]&&i[s].m(e,null);b(e,t)},p(o,r){if(r&2){n=o[5];let s;for(s=0;s<n.length;s+=1){const a=se(o,n,s);i[s]?i[s].p(a,r):(i[s]=he(a),i[s].c(),i[s].m(e,t))}for(;s<i.length;s+=1)i[s].d(1);i.length=n.length}r&3&&F(e,"none",o[0]!==o[4])},d(o){o&&u(e),O(i,o)}}}function Ge(l){let e,t,n,i,o=Object.entries(l[1]),r=[];for(let c=0;c<o.length;c+=1)r[c]=fe(ce(l,o,c));let s=Object.entries(l[1]),a=[];for(let c=0;c<s.length;c+=1)a[c]=me(oe(l,s,c));return{c(){e=_("div"),t=_("div"),n=_("div");for(let c=0;c<r.length;c+=1)r[c].c();i=v();for(let c=0;c<a.length;c+=1)a[c].c();m(n,"class","group-tabs svelte-ek3j9t"),m(t,"id","inner"),m(t,"class","svelte-ek3j9t"),m(e,"id","outer"),m(e,"class","svelte-ek3j9t")},m(c,h){d(c,e,h),b(e,t),b(t,n);for(let f=0;f<r.length;f+=1)r[f]&&r[f].m(n,null);b(t,i);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(t,null)},p(c,[h]){if(h&3){o=Object.entries(c[1]);let f;for(f=0;f<o.length;f+=1){const L=ce(c,o,f);r[f]?r[f].p(L,h):(r[f]=fe(L),r[f].c(),r[f].m(n,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=o.length}if(h&3){s=Object.entries(c[1]);let f;for(f=0;f<s.length;f+=1){const L=oe(c,s,f);a[f]?a[f].p(L,h):(a[f]=me(L),a[f].c(),a[f].m(t,null))}for(;f<a.length;f+=1)a[f].d(1);a.length=s.length}},i:y,o:y,d(c){c&&u(e),O(r,c),O(a,c)}}}function Ue(l,e,t){const n={GENERAL:[{name:"Browsing your computer's files",subList:["Windows: File Explorer","Mac: Finder"]},{name:"Keyboard shortcuts",subList:["Copy: CTRL/CMD+C","Paste: CTRL/CMD+P","Cut (Copy and delete): CTRL/CMD+X","Undo: CTRL/CMD+Z","Redo: CTRL/CMD+Y","Select All: CTRL/CMD+A"]},{name:"Terminal/command prompt commands",subList:["cd","ls","touch","mv"]},"quiz:What is indentation and why is it important?","Sign up for github"],HTML:["quiz:Write a tag.","quiz:Write an element.","quiz:Write a tag with an attribute.","quiz:What goes in the head?","quiz:What goes in the body?","quiz:What's the difference between block and inline elements?","quiz:Name five block elements and five inline elements.","quiz:What is semantic HTML and why is it important?","quiz:Name five semantic HTML elements.","h1-h6, p","a, img","input","label","form","table","link & script","id and class","quiz:Why do we need IDs and classes?"],CSS:["select by tagname","select by id","select by class","background & color","font-weight, font-style, text-decoration","font-size, font-family","border","padding & margin","the box model","quiz:From innermost to outermost, what are the four parts of the box-model?","box-sizing: border-box","quiz:What's the difference between border and outline?",{name:"display",subList:["block","inline","inline-block","flex","grid","table","none"]},{name:"position",subList:["absolute","relative","static","sticky","fixed"]},"opacity vs. visibility","z-index","quiz:We have a button and we want it to be positioned absolutely so that it is in the top-right corner of its parent. We set positon: absolute, top: 0, and right: 0, but it's not behaving as we expected. Instead of being in the top-right corner of its parent, its in the top-right corner of the entire page. Why?",{name:"combinators",subList:["+","~",">","space"]},"quiz:What is the difference between a child and a descendant?","attribute selectors","pseudo-classes","pseudo-elements","flex","grid","quiz:What is the difference between the flex/grid container and the flex/grid items?","quiz:Name 3 properties that can go on a flex container, then 3 for grid (besides display: x)","quiz:Name 3 properties that can go on a flex child","quiz:What is the flex: property shorthand for?"],JAVASCRIPT:["quiz:Define a variable named x with a value of 5","quiz:Define a variable named y with a value of your name","data types","+ - * / ++ -- += -= == ===","quiz:Write an if statement","|| &&","truthy vs falsy","quiz:Write five falsy statements and five truthy statements.","quiz:Write a for loop","quiz:Write a while loop","quiz:Define a function that logs your name to the console","quiz:Call that function","quiz:What is the difference between function definition and function invocation?","quiz:What is a parameter? What is an argument?","quiz:Define a function with two parameters","quiz:Call that function","quiz:Write an array",{name:"Array methods, simple",subList:["push","pop","shift","unshift","reverse"]},"scope","quiz:What is hoisting?","quiz:What is a callback function?","quiz:How do we pass a callback as an argument?","quiz:Write an anonymous function in both traditional and arrow syntax.","quiz:What is a higher-order function?",{name:"Higher-order array methods",subList:["forEach","map","filter","reduce","sort","every","some","find","findIndex"]},"quiz:What is an object property? What is a method?","quiz:Write an object with two properties and a method.","quiz:Use dot notation to refer to one of the object properties. Use dot notation to invoke the method.","quiz:Same as last question, but use square bracket notation.",{name:"DOM methods",subList:["getElementById","querySelector","querySelectorAll"]},"quiz:Name five HTML element events.","quiz:Add a click event listener, take its event into a callback, and prevent the default behavior",{name:"HTML Element properties",subList:["innerText","innerHTML","textContent","style","innerWidth/outerWidth","classList (.add, .remove, .toggle)"]},{name:"HTML Element methods",subList:["append/appendChild","remove","addEventListener","set/getAttribute"]},"quiz:Write a JSON object","JSON.stringify, JSON.parse","localStorage, sessionStorage, document.cookie","window","window.location","setTimeout, setInterval, clearTimeout, clearInterval","asynchronous","quiz:Invoke fetch, convert the response to json, and log the result (using .then)","quiz:Same as last question, but with async/await syntax.","quiz:Define a class","quiz:Create a new instance of that class","quiz:Create a new promise","quiz:Write how you would export a module, both in ES and CJS syntax. Then import."]};let i="GENERAL";return[i,n,r=>{t(0,i=r)}]}class Ke extends P{constructor(e){super(),D(this,e,Ue,Ge,R,{})}}function Ve(l){let e,t,n,i,o;return i=new De({props:{routes:[{component:Te},{hash:"layout:#old",component:je,destroy:!0},{hash:"#react-prereq",component:Ke}]}}),{c(){e=_("header"),e.innerHTML=`<div id="logo">Doug&#39;s webdev resources</div> 
  <nav><a href="#">Home</a></nav>`,t=v(),n=_("main"),k(i.$$.fragment)},m(r,s){d(r,e,s),d(r,t,s),d(r,n,s),$(i,n,null),o=!0},p:y,i(r){o||(p(i.$$.fragment,r),o=!0)},o(r){g(i.$$.fragment,r),o=!1},d(r){r&&u(e),r&&u(t),r&&u(n),w(i)}}}class Xe extends P{constructor(e){super(),D(this,e,null,Ve,R,{})}}new Xe({target:document.getElementById("app")});
