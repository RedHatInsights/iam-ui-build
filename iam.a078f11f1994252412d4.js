__load_plugin_entry__("iam",(()=>{"use strict";var e,r,t,n,a,o,i,d,l,s,f,u,c,p,h,m,b,v,g,y={28574:(e,r,t)=>{var n={"./RootApp":()=>Promise.all([t.e(169),t.e(766),t.e(527),t.e(840),t.e(216)]).then((()=>()=>t(44748)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},w={};function S(e){var r=w[e];if(void 0!==r)return r.exports;var t=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(t.exports,t,t.exports,S),t.loaded=!0,t.exports}return S.m=y,S.c=w,S.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return S.d(r,{a:r}),r},S.d=(e,r)=>{for(var t in r)S.o(r,t)&&!S.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},S.f={},S.e=e=>Promise.all(Object.keys(S.f).reduce(((r,t)=>(S.f[t](e,r),r)),[])),S.u=e=>"js/"+({216:"exposed-./RootApp",244:"Authentication-Factors",247:"OopsPage",459:"NoPermissionsPage",562:"User-Management",600:"Identity-Provider-Integration"}[e]||e)+"."+{27:"8ad0564af563056b256c",95:"fc4b46b82e7e549ced6d",131:"c24c23231b0222d73489",169:"76f75ebdfd94c8b5a9f9",201:"8e91329c3f9e1005fe20",216:"7a56ee835352ab0ffa1b",244:"cf0af8614d1b56d5ace5",247:"ee104ed4ae9d8e03ce50",459:"5571e65baf2ead287462",527:"c40ae7780df8b893561e",540:"6289d3f9bb9fa72784ba",562:"53b0458909e27e307b52",600:"009105762155e3068d02",659:"ea742fa228acb6ae5b51",696:"4b736197c8ad7c20f276",766:"fa10b072e00995cd863a",840:"85f4061f913f39d67681",924:"01d6f7208a77d38fa5e5",961:"a2fb7fd5214122bf2d59"}[e]+".js",S.miniCssF=e=>"css/"+{216:"exposed-./RootApp",244:"Authentication-Factors",562:"User-Management",600:"Identity-Provider-Integration"}[e]+"."+{216:"d4c50665f97261e38664",244:"0e2196cec81642eefc88",562:"e90f1c0d1e5a2980ab77",600:"8cf6d20905a3d0245857"}[e]+".css",S.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),S.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),S.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="iam:",S.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),s=0;s<l.length;s++){var f=l[s];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+a){i=f;break}}i||(d=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,S.nc&&i.setAttribute("nonce",S.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var u=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),d&&document.head.appendChild(i)}},S.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},S.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{S.S={};var e={},r={};S.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];S.o(S.S,t)||(S.S[t]={});var o=S.S[t],i=(e,r,t,n)=>{var a=o[e]=o[e]||{},i=a[r];(!i||!i.loaded&&(!n!=!i.eager?n:"iam">i.from))&&(a[r]={get:t,from:"iam",eager:!!n})},d=[];return"default"===t&&(i("@scalprum/react-core","0.8.0",(()=>Promise.all([S.e(169),S.e(924),S.e(201),S.e(527)]).then((()=>()=>S(43201))))),i("@unleash/proxy-client-react","4.3.0",(()=>Promise.all([S.e(696),S.e(527)]).then((()=>()=>S(35696))))),i("react-dom","18.2.0",(()=>Promise.all([S.e(961),S.e(527)]).then((()=>()=>S(40961))))),i("react","18.2.0",(()=>S.e(540).then((()=>()=>S(96540)))))),e[t]=d.length?Promise.all(d).then((()=>e[t]=1)):1}}})(),S.p="/apps/iam/",t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],d=(typeof i)[0];if(o!=d)return"o"==o&&"n"==d||"s"==d||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(d=e[o]))[0]?"-":(n>0?".":"")+(n=2,d);return t}var i=[];for(o=1;o<e.length;o++){var d=e[o];i.push(0===d?"not("+l()+")":1===d?"("+l()+" || "+l()+")":2===d?i.pop()+" "+i.pop():a(d))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,d=1,l=!0;;d++,i++){var s,f,u=d<e.length?(typeof e[d])[0]:"";if(i>=r.length||"o"==(f=(typeof(s=r[i]))[0]))return!l||("u"==u?d>n&&!a:""==u!=a);if("u"==f){if(!l||"u"!=u)return!1}else if(l)if(u==f)if(d<=n){if(s!=e[d])return!1}else{if(a?s>e[d]:s<e[d])return!1;s!=e[d]&&(l=!1)}else if("s"!=u&&"n"!=u){if(a||d<=n)return!1;l=!1,d--}else{if(d<=n||f<u!=a)return!1;l=!1}else"s"!=u&&"n"!=u&&(l=!1,d--)}}var c=[],p=c.pop.bind(c);for(i=1;i<e.length;i++){var h=e[i];c.push(1==h?p()|p():2==h?p()&p():h?o(h,r):!p())}return!!p()},i=(e,r)=>{var t=S.S[e];if(!t||!S.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},d=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",s=(e,r,t,n)=>{var a=d(e,t);return o(n,a)||f(l(e,t,a,n)),u(e[t][a])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},u=e=>(e.loaded=1,e.get()),p=(c=e=>function(r,t,n,a){var o=S.I(r);return o&&o.then?o.then(e.bind(e,r,S.S[r],t,n,a)):e(r,S.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),s(r,0,t,n)))),h=c(((e,r,t,n,a)=>r&&S.o(r,t)?s(r,0,t,n):a())),m={},b={21527:()=>h("default","react",[4,18,2,0],(()=>S.e(540).then((()=>()=>S(96540))))),6153:()=>h("default","@scalprum/react-core",[0],(()=>Promise.all([S.e(924),S.e(201)]).then((()=>()=>S(43201))))),85929:()=>h("default","react-dom",[4,18,2,0],(()=>S.e(961).then((()=>()=>S(40961))))),5507:()=>p("default","react-router-dom",[1,6,21,3]),88095:()=>h("default","@unleash/proxy-client-react",[1,4,1,2],(()=>S.e(696).then((()=>()=>S(35696)))))},v={95:[88095],527:[21527],840:[6153,85929,5507]},g={},S.f.consumes=(e,r)=>{S.o(v,e)&&v[e].forEach((e=>{if(S.o(m,e))return r.push(m[e]);if(!g[e]){var t=r=>{m[e]=0,S.m[e]=t=>{delete S.c[e],t.exports=r()}};g[e]=!0;var n=r=>{delete m[e],S.m[e]=t=>{throw delete S.c[e],r}};try{var a=b[e]();a.then?r.push(m[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}}))},(()=>{if("undefined"!=typeof document){var e={706:0};S.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{216:1,244:1,562:1,600:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=S.miniCssF(e),a=S.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var a=(i=t[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){var i;if((a=(i=o[n]).getAttribute("data-href"))===e||a===r)return i}})(n,a))return r();((e,r,t,n,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",S.nc&&(o.nonce=S.nc),o.onerror=o.onload=t=>{if(o.onerror=o.onload=null,"load"===t.type)n();else{var i=t&&t.type,d=t&&t.target&&t.target.href||r,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+d+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,o.parentNode&&o.parentNode.removeChild(o),a(l)}},o.href=r,document.head.appendChild(o)})(e,a,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={706:0};S.f.j=(r,t)=>{var n=S.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else if(/^(527|840|95)$/.test(r))e[r]=0;else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=S.p+S.u(r),i=new Error;S.l(o,(t=>{if(S.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,d]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)S.o(i,n)&&(S.m[n]=i[n]);d&&d(S)}for(r&&r(t);l<o.length;l++)a=o[l],S.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunkiam=self.webpackChunkiam||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),S(28574)})());