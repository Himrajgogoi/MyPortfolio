if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,c,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const a={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return n;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/Portfolio.mp4",revision:"03b3b7653e8ddfd5a9e1f27a06b2231e"},{url:"/_next/static/6p5hUVq4sod3STcMvjqHU/_buildManifest.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/6p5hUVq4sod3STcMvjqHU/_ssgManifest.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/669-e11fbda02e8e7dec5cc4.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/901-451f0f2a0e696cc0085c.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/ff239f9d-769ec916fca46f006fb2.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/framework-2191d16384373197bc0a.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/main-9b796a8e26f1b0e48c20.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/_app-95425b36b628810e2d02.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/aboutme-bbeb09b7ce4b335657b1.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/contactme-780a0dc7dd67eb8eb48c.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/index-cd90e4df9310d6e8fa45.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/pages/projects-4afba69e233ff2c20d9b.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/chunks/webpack-90a60b87fd0d5fc150f2.js",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/css/2475ad030ca477c986ff.css",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/css/90c8c0cf31c00351b5e7.css",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/css/92c3e6d1cdd937407b1b.css",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/css/ee755851dac6fc08d1df.css",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/css/fbdb770af3987415467d.css",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/media/fontawesome-webfont.1e59d2330b4c6deb84b340635ed36249.ttf",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/media/fontawesome-webfont.20fd1704ea223900efa9fd4e869efb08.woff2",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/media/fontawesome-webfont.8b43027f47b20503057dfbbaa9401fef.eot",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/media/fontawesome-webfont.c1e38fd9e0e74ba58f7a2b77ef29fdd3.svg",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/_next/static/media/fontawesome-webfont.f691f37e57f04c152e2315ab7dbad881.woff",revision:"6p5hUVq4sod3STcMvjqHU"},{url:"/background.jpeg",revision:"cfa691d083754d83eba35aaba599b878"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icons/icon-128x128.png",revision:"382ec6aa84d4811faeba2a6098f319d2"},{url:"/icons/icon-144x144.png",revision:"56e912de1ab1b1e080b9103976a600a7"},{url:"/icons/icon-152x152.png",revision:"e6c9fa6823b1708005cf50f45c1d59a4"},{url:"/icons/icon-192x192.png",revision:"b060f07efac1cbe5f01a14aafa64d532"},{url:"/icons/icon-384x384.png",revision:"e4de0644f1382ac7517a58c28181c3d7"},{url:"/icons/icon-512x512.png",revision:"8862d88816324f096e87f57d1f2a82f9"},{url:"/icons/icon-72x72.png",revision:"ebf31eda3bde82f569a74b554560f60c"},{url:"/icons/icon-96x96.png",revision:"b6ea10e6991313a3d63dc7e8bdcb4030"},{url:"/logo.ico",revision:"077b60f851dd8a05feb2b33f15494e81"},{url:"/manifest.json",revision:"74b9151a9267baf6cfd20e5c4915667c"},{url:"/my_dp.jpg",revision:"eebc91a070b2b2ae3116ecced04356e4"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
