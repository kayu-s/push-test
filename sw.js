if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let t={};const f=e=>r(e,s),c={module:{uri:s},exports:t,require:f};i[s]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(o(...e),t)))}}define(["./workbox-2b403519"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"aaa375886bcfc622e8d2483b2060634b"},{url:"main.js",revision:"028a78f54fafe70dec2b7e682852226e"},{url:"package.json",revision:"27d6fff3a9563a315b40f8537a0997fe"},{url:"yarn.lock",revision:"e637bdbd4bcf56a91965fceed8feba84"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map