if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>n(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(a(...e),i)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Untitled_design-removebg-preview.png",revision:"e28a347b01287de0ab71427c7b27868b"},{url:"/_next/app-build-manifest.json",revision:"0a283481043564506b0c12720b01508b"},{url:"/_next/static/chunks/23-60fece4b50a68a94.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/472-88626057ffc60ccd.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/app/_not-found/page-846bc14f8cdb3714.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/app/layout-c5c558d213c6d281.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/app/page-3951cb86cae00ad0.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/fd9d1056-be48aeae6e94b8d1.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/main-1eee0f93ddeff5cc.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/main-app-3c758d6182ae4728.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-be9659fa33794984.js",revision:"teYj6M92cudWuxOfD2JYe"},{url:"/_next/static/css/6c9f9d311c454515.css",revision:"6c9f9d311c454515"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/teYj6M92cudWuxOfD2JYe/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/teYj6M92cudWuxOfD2JYe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192.png",revision:"4a3103a21ac584289b9a9bc989b5c30a"},{url:"/icon-256x256.png",revision:"3b531ca3c04558e5e3cf530f8e36956d"},{url:"/icon-384x384.png",revision:"a71465eef5e78a3f28f0b75dc6d43540"},{url:"/icon-512x512.png",revision:"6fab5f1727ae1e319a21f66d171a2e02"},{url:"/logo.png",revision:"923bd312293674ac00dac7eeae71882f"},{url:"/manifest.webmanifest",revision:"5167f6b564bc0d7e9e925976fcb8ffd9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));