"use strict";(self.webpackChunkiam_console=self.webpackChunkiam_console||[]).push([[185],{2185:(e,n,t)=>{t.r(n),t.d(n,{ScalprumComponent:()=>L,ScalprumContext:()=>T,ScalprumProvider:()=>z,default:()=>z,useLoadModule:()=>W,useModule:()=>q,useScalprum:()=>M});var r=t(2950),o=t.n(r),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},a=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u="__scalprum__",l=function(e,n,t){void 0===t&&(t=!1);try{var r=window[u].factories[e];if(!r||!r.expiration)return;if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window[u].scalprumOptions.cacheTimeout)return void delete window[u].factories[e];var o=r.modules[n];if(!n)return;return o}catch(t){return void console.warn("Unable to retriev cached module "+e+" "+n+". New module will be loaded.",t)}},s=function(e,n){window[u].pendingInjections[e]=n},f=function(e){return window[u].pendingInjections[e]},p=function(e){delete window[u].pendingInjections[e]},h=function(e,n,t){return window[u].pendingLoading[e+"#"+n]=t,t.then((function(t){return delete window[u].pendingLoading[e+"#"+n],t})).catch((function(){delete window[u].pendingLoading[e+"#"+n]})),t},d=function(e){var n=e.appsConfig,t=e.api,r=e.options,o=i({cacheTimeout:120},r);window[u]=i({appsConfig:n,pendingInjections:{},pendingLoading:{},factories:{},scalprumOptions:o},t)},v=function(e){return window[u].appsConfig[e]},w=function(e,n){var t,r=void 0;if(!function(e){var n;return 0===(null===(n=document.querySelectorAll('script[src="'+e+'"]'))||void 0===n?void 0:n.length)}(n))return Promise.resolve([e,null===(t=document.querySelectorAll('script[src="'+n+'"]'))||void 0===t?void 0:t[0]]);var o=new Promise((function(t,o){(r=document.createElement("script")).src=n,r.id="container_entry_"+e,r.onload=function(){t([e,r])},r.onerror=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];console.log(e),o([e,r])}}));return void 0!==r&&document.body.appendChild(r),o};function y(e,n,t,r){return c(this,void 0,void 0,(function(){var o,i,u,l,h=this;return a(this,(function(d){switch(d.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,d.sent().json()];case 2:return i=d.sent(),(u=f(t))?[2,u]:(l=Promise.all(Object.entries(i).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return c(h,void 0,void 0,(function(){var r;return a(this,(function(o){switch(o.label){case 0:return[4,w(n,e)];case 1:return r=o.sent(),p(t),[2,r]}}))}))}))),s(t,l),l.then((function(e){return p(t),e})),[2,l])}}))}))}function m(e,n){return c(this,void 0,void 0,(function(){var r,o,c,l;return a(this,(function(a){switch(a.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return a.sent(),[4,(r=window[e]).init(t.S.default)];case 2:return a.sent(),[4,window[e].get(n)];case 3:return o=a.sent(),window[u].factories[e]||(window[u].factories[e]={}),c={init:r.init,modules:i(i({},window[u].factories[e].modules),(l={},l[n]=o(),l)),expiration:new Date},window[u].factories[e]=c,[2,o()]}}))}))}var b=t(8446),g=t.n(b);const E=function(e){var n=e.error,t=e.errorInfo;return o().createElement("div",null,o().createElement("h2",null,"Error loading component"),(null==n?void 0:n.message)&&o().createElement("p",null,n.message),(null==t?void 0:t.componentStack)?o().createElement("pre",null,null==t?void 0:t.componentStack):(null==n?void 0:n.stack)&&o().createElement("pre",null,n.stack))};var k=function(){return k=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},k.apply(this,arguments)},O=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},C=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function S(e,n,t){var r=this;return void 0===t&&(t=E),function(){return O(r,void 0,void 0,(function(){var r,i;return C(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,m(e,n)];case 1:return r=c.sent(),[3,3];case 2:return i=c.sent(),r={default:function(e){return o().createElement(t,k({},e,{error:i}))}},[3,3];case 3:return[2,r]}}))}))}}var x,j=(x=function(e,n){return x=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},x(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}x(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},P.apply(this,arguments)},_=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},R=function(e){var n=e.fallback,t=void 0===n?"loading":n,i=e.appName,c=e.scope,a=e.module,s=e.ErrorComponent,f=e.processor,p=e.innerRef,d=e.skipCache,m=void 0!==d&&d,b=_(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),g=v(i),E=g.scriptLocation,k=g.manifestLocation,O=(0,r.useReducer)((function(e){return e+1}),0),C=O[0],x=O[1],j=(0,r.useState)(void 0),R=j[0],A=j[1];return(0,r.useEffect)((function(){var e=l(c,a,m),n=!0,t=function(){return n&&A((function(){return function(e){return o().createElement(s,P({},e))}}))},r=function(e,n){return window[u].pendingLoading[e+"#"+n]}(c,a);if(!e&&r)r.finally((function(){x()}));else if(e)try{n&&A((function(){return e.default}))}catch(e){t()}else if(E){var p=w(i,E).then((function(){n&&A((function(){return o().lazy(S(c,a,s))}))})).catch(t);h(c,a,p)}else if(k){var d=y(k,i,c,f).then((function(){n&&A((function(){return o().lazy(S(c,a,s))}))})).catch(t);h(c,a,d)}return function(){n=!1}}),[i,c,m,C]),o().createElement(r.Suspense,{fallback:t},R?o().createElement(R,P({ref:p},b)):t)},A=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return j(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||!g()(e,this.props)||!g()(n,this.state)},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this,n=this.props,t=n.ErrorComponent,r=void 0===t?o().createElement(E,P({},this.state)):t,i=_(n,["ErrorComponent"]),c=function(n){return o().cloneElement(r,P(P({},e.state),n))};return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(R,P({},i,{skipCache:!0,ErrorComponent:c}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(r,P({},this.state)):o().createElement(R,P({},i,{ErrorComponent:c}))},n.defaultProps={ErrorComponent:o().createElement(E,null)},n}(o().Component),L=o().forwardRef((function(e,n){return o().createElement(A,P({},e,{innerRef:n}))})),T=(0,r.createContext)({initialized:!1,config:{},api:void 0}),I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)};function z(e){var n=e.config,t=e.children,i=e.api,c=(0,r.useRef)(!1),a=(0,r.useState)({initialized:!1,config:{},api:i}),u=a[0],l=a[1];return(0,r.useEffect)((function(){"object"==typeof n&&(d({appsConfig:n,api:i}),l((function(e){return I(I({},e),{initialized:!0,config:n})})),c.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){l((function(n){return I(I({},n),{initialized:!0,config:e})})),d({appsConfig:e,api:i}),c.current=!0}))}),[n]),(0,r.useEffect)((function(){c.current&&l((function(e){return I(I({},e),{api:i})}))}),[i]),o().createElement(T.Provider,{value:u},t)}function M(e){var n=(0,r.useContext)(T);return"function"==typeof e?e(n):n}var G=function(){return G=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},G.apply(this,arguments)},D=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},N=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function q(e,n,t,o){var i=this;void 0===o&&(o={});var c=G({skipCache:!1},o),a=(0,r.useState)(t),u=a[0],s=a[1],f=(0,r.useCallback)((function(){return D(i,void 0,void 0,(function(){var t,r;return N(this,(function(o){switch(o.label){case 0:if(t=l(e,n,c.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,m(e,n)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return s((function(){return r})),[2]}}))}))}),[e,n]);return(0,r.useEffect)((function(){f()}),[e,n]),u}var U=function(){return U=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},U.apply(this,arguments)},F=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},H=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function W(e,n,t){var o=this,i=e.appName,c=e.scope,a=e.module,u=e.processor;void 0===t&&(t={});var s=U({skipCache:!1},t),f=v(i||c),p=f.scriptLocation,h=f.manifestLocation,d=(0,r.useState)(n),b=d[0],g=d[1],E=(0,r.useState)(),k=E[0],O=E[1],C=l(c,a,s.skipCache),S=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(S.current)if(C)try{m(c,a).then((function(e){g((function(){return e}))}))}catch(e){O((function(){return e}))}else p?w(i||c,p).then((function(){return F(o,void 0,void 0,(function(){var e;return H(this,(function(n){switch(n.label){case 0:return[4,m(c,a)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){O((function(){return e}))})):h&&y(h,i||c,c,u).then((function(){return F(o,void 0,void 0,(function(){var e;return H(this,(function(n){switch(n.label){case 0:return[4,m(c,a)];case 1:return e=n.sent(),g((function(){return e})),[2]}}))}))})).catch((function(e){O((function(){return e}))}));return function(){S.current=!1}}),[i,c,C,s.skipCache]),[b,k]}}}]);