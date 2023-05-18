var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function i(t){return document.createTextNode(t)}function f(){return i(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function $(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function p(t,n,e,o){null===e?t.style.removeProperty(n):t.style.setProperty(n,e,o?"important":"")}let g;function h(t){g=t}const y=[],v=[],b=[],x=[],_=Promise.resolve();let w=!1;function k(t){b.push(t)}const E=new Set;let C=0;function j(){const t=g;do{for(;C<y.length;){const t=y[C];C++,h(t),A(t.$$)}for(h(null),y.length=0,C=0;v.length;)v.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];E.has(n)||(E.add(n),n())}b.length=0}while(y.length);for(;x.length;)x.pop()();w=!1,E.clear(),h(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const L=new Set;let M;function N(t,n){t&&t.i&&(L.delete(t),t.i(n))}function O(t,n,e,o){if(t&&t.o){if(L.has(t))return;L.add(t),M.c.push((()=>{L.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function P(t){t&&t.c()}function q(t,e,c,u){const{fragment:s,on_mount:l,on_destroy:a,after_update:i}=t.$$;s&&s.m(e,c),u||k((()=>{const e=l.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),i.forEach(k)}function B(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,_.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function T(n,r,c,u,s,a,i,f=[-1]){const d=g;h(n);const m=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};i&&i(m.root);let $=!1;if(m.ctx=c?c(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),$&&S(n,t)),e})):[],m.update(),$=!0,o(m.before_update),m.fragment=!!u&&u(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(l)}else m.fragment&&m.fragment.c();r.intro&&N(n.$$.fragment),q(n,r.target,r.anchor,r.customElement),j()}h(d)}class D{$destroy(){B(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function z(n){let e,r,c,g,h,y,v,b,x,_;return{c(){e=a("div"),r=a("button"),r.textContent="-",c=f(),g=a("div"),h=a("span"),y=i(n[0]),v=f(),b=a("button"),b.textContent="+",m(r,"class","svelte-wyytut"),m(g,"class","img svelte-wyytut"),p(g,"background-image","url(images/"+n[1].toLowerCase()+".jpeg)"),m(b,"class","svelte-wyytut"),m(e,"class","card svelte-wyytut")},m(t,o){s(t,e,o),u(e,r),u(e,c),u(e,g),u(g,h),u(h,y),u(e,v),u(e,b),x||(_=[d(r,"click",n[2]),d(b,"click",n[3])],x=!0)},p(t,[n]){1&n&&$(y,t[0]),2&n&&p(g,"background-image","url(images/"+t[1].toLowerCase()+".jpeg)")},i:t,o:t,d(t){t&&l(e),x=!1,o(_)}}}function F(t,n,e){let{count:o}=n,{name:r}=n;return t.$$set=t=>{"count"in t&&e(0,o=t.count),"name"in t&&e(1,r=t.name)},e(0,o=0),[o,r,()=>{e(0,o=Math.max(0,o-1))},()=>{e(0,o+=1)}]}class G extends D{constructor(t){super(),T(this,t,F,z,c,{count:0,name:1})}}function H(n){let e;return{c(){e=a("div"),e.textContent="Entwicklungskarten...",m(e,"class","svelte-1tm8mmp")},m(t,n){s(t,e,n)},p:t,i:t,o:t,d(t){t&&l(e)}}}class I extends D{constructor(t){super(),T(this,t,null,H,c,{})}}function J(t,n,e){const o=t.slice();return o[4]=n[e],o[5]=n,o[6]=e,o}function K(t){let n,e,o;function r(n){t[3](n,t[4])}let c={name:t[4].name};return void 0!==t[4].count&&(c.count=t[4].count),n=new G({props:c}),v.push((()=>function(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}(n,"count",r))),{c(){P(n.$$.fragment)},m(t,e){q(n,t,e),o=!0},p(o,r){t=o;const c={};var u;1&r&&(c.name=t[4].name),!e&&1&r&&(e=!0,c.count=t[4].count,u=()=>e=!1,x.push(u)),n.$set(c)},i(t){o||(N(n.$$.fragment,t),o=!0)},o(t){O(n.$$.fragment,t),o=!1},d(t){B(n,t)}}}function Q(t){let n,e,r,c,d,p,g,h,y,v,b,x,_,w,k=t[0],E=[];for(let n=0;n<k.length;n+=1)E[n]=K(J(t,k,n));const C=t=>O(E[t],1,1,(()=>{E[t]=null}));return _=new I({}),{c(){n=a("main"),e=a("div"),r=a("span"),c=i("Card count: "),d=i(t[1]),p=f(),g=a("span"),h=i("Discard: "),y=i(t[2]),v=f(),b=a("div");for(let t=0;t<E.length;t+=1)E[t].c();x=f(),P(_.$$.fragment),m(r,"class","svelte-fvsiyy"),m(g,"class","svelte-fvsiyy"),m(e,"class","header svelte-fvsiyy"),m(b,"class","card-container svelte-fvsiyy"),m(n,"class","svelte-fvsiyy")},m(t,o){s(t,n,o),u(n,e),u(e,r),u(r,c),u(r,d),u(e,p),u(e,g),u(g,h),u(g,y),u(n,v),u(n,b);for(let t=0;t<E.length;t+=1)E[t].m(b,null);u(n,x),q(_,n,null),w=!0},p(t,[n]){if((!w||2&n)&&$(d,t[1]),(!w||4&n)&&$(y,t[2]),1&n){let e;for(k=t[0],e=0;e<k.length;e+=1){const o=J(t,k,e);E[e]?(E[e].p(o,n),N(E[e],1)):(E[e]=K(o),E[e].c(),N(E[e],1),E[e].m(b,null))}for(M={r:0,c:[],p:M},e=k.length;e<E.length;e+=1)C(e);M.r||o(M.c),M=M.p}},i(t){if(!w){for(let t=0;t<k.length;t+=1)N(E[t]);N(_.$$.fragment,t),w=!0}},o(t){E=E.filter(Boolean);for(let t=0;t<E.length;t+=1)O(E[t]);O(_.$$.fragment,t),w=!1},d(t){t&&l(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(E,t),B(_)}}}function R(t,n,e){let o,r,c=[{name:"lumber",count:0},{name:"wheat",count:0},{name:"ore",count:0},{name:"brick",count:0},{name:"sheep",count:0}];return t.$$.update=()=>{1&t.$$.dirty&&e(1,o=c.reduce(((t,n)=>t+n.count),0)),2&t.$$.dirty&&e(2,r=o>7?Math.floor(o/2):0)},[c,o,r,function(n,o){t.$$.not_equal(o.count,n)&&(o.count=n,e(0,c))}]}return new class extends D{constructor(t){super(),T(this,t,R,Q,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
