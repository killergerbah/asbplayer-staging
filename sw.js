if(!self.define){let e,s={};const l=(l,r)=>(l=new URL(l+".js",r).href,s[l]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=l,e.onload=s,document.head.appendChild(e)}else e=l,importScripts(l),s()})).then((()=>{let e=s[l];if(!e)throw new Error(`Module ${l} didn’t register its module`);return e})));self.define=(r,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const a=e=>l(e,i),u={module:{uri:i},exports:o,require:a};s[i]=Promise.all(r.map((e=>u[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-620ba6bb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/de-BOE7jfzU.js",revision:null},{url:"assets/en-DNbiXlFj.js",revision:null},{url:"assets/es-Otn_JCOR.js",revision:null},{url:"assets/index-CYr-3zky.js",revision:null},{url:"assets/index-FGpwogTZ.css",revision:null},{url:"assets/ja-CWsSJdLd.js",revision:null},{url:"assets/mp3-encoder-worker-ClYT8VJr.js",revision:null},{url:"assets/pgs-parser-worker-CiTk6rah.js",revision:null},{url:"assets/pl-B2t6Uc_E.js",revision:null},{url:"assets/pt_BR-DaAKr4uf.js",revision:null},{url:"assets/ru-KCh_JNjw.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"assets/zh_CN-BNSpxlEz.js",revision:null},{url:"index.html",revision:"e7e303bb2394fd2338029acb29e26007"},{url:"background-colored.png",revision:"a58254284c6b01a2b81e05a27e06deff"},{url:"favicon.ico",revision:"3eba55d9956482ec96b10483c237401f"},{url:"logo192.png",revision:"7d9e90d0be85168cb9d8b8f4d5c17ff3"},{url:"logo512.png",revision:"2a7f01e8ce160a7f04d29bacd6917973"},{url:"locales/de.json",revision:"d907e487605ee5e1a343e56a3d83f25b"},{url:"locales/en.json",revision:"dbcce35bcdbc2ae9060fdbbf9cf46bbf"},{url:"locales/es.json",revision:"e7c3758b7658b77869d7ba3176fe44f8"},{url:"locales/ja.json",revision:"6dff1a38fac49f85136e712d5e8ac9b3"},{url:"locales/pl.json",revision:"96831460bea57b4468f27a38e0f81bd2"},{url:"locales/pt_BR.json",revision:"d04e884f99df0ce342ac8b3cea5eeb8e"},{url:"locales/ru.json",revision:"2300112ef8eea5650c947897ba32499f"},{url:"locales/zh_CN.json",revision:"cd351d609a2b9e8e554d179ea2407a89"},{url:"manifest.webmanifest",revision:"9b3aa3fc2b95b1217e5a79e50108deaf"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
