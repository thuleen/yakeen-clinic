if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const d=e=>i(e,t),f={module:{uri:t},exports:o,require:d};s[t]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-b3e22772"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.9deee7af.css",revision:null},{url:"assets/index.deb1e0b6.js",revision:null},{url:"index.html",revision:"b443e116760e672afbf9a3e2fa9c87a3"},{url:"registerSW.js",revision:"bcd9abf6f4a2fbd4c148ba7045dacb6d"},{url:"manifest.webmanifest",revision:"1e123df48fd2fd331ce65476da2bbef4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
