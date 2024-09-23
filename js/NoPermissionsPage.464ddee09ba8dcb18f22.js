"use strict";(self.webpackChunkiam=self.webpackChunkiam||[]).push([[459],{7334:(e,t,n)=>{n.d(t,{Ay:()=>o,XA:()=>r});const r=(0,n(8419).w)({name:"LockIcon",height:512,width:448,svgPath:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",yOffset:0,xOffset:0}),o=r},8243:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(1680),o=n.n(r),a=n(4848),i=n(8203),c=n(2882),s=n(3073),l=n(223),m=n(4612),u=n(8674),p=n(3774),d=n(8463);const y=e=>{var{children:t,className:n}=e,o=(0,u.Tt)(e,["children","className"]);return r.createElement("div",Object.assign({className:(0,p.A)(d.A.emptyStateActions,n)},o),t)};y.displayName="EmptyStateActions";var f=n(2201),v=n(7334);const h=e=>{var{prevPageButtonText:t="Return to previous page",toLandingPageText:n="Go to landing page",toLandingPageUrl:r=".",primaryAction:a=null,secondaryActions:u=null,serviceName:p,title:d=`You do not have access to ${p}`,icon:h=v.XA,description:g="Contact your system administrator(s) for more information.",showReturnButton:b=!0,className:O,ouiaId:E="NotAuthorized"}=e,A=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["prevPageButtonText","toLandingPageText","toLandingPageUrl","primaryAction","secondaryActions","serviceName","title","icon","description","showReturnButton","className","ouiaId"]);return o().createElement(i.p,Object.assign({variant:i.s.full,className:O,"data-ouia-component-id":E},A),o().createElement(c.o,{titleText:o().createElement(o().Fragment,null,d),icon:o().createElement(s.q,{icon:h,"data-ouia-component-id":`${E}-icon`}),headingLevel:"h5","data-ouia-component-id":`${E}-header`}),o().createElement(l.h,{"data-ouia-component-id":`${E}-body`},g),o().createElement(m.s,{"data-ouia-component-id":`${E}-footer`},a?o().createElement(y,null,a):null,b&&!a&&(document.referrer?o().createElement(f.$n,{variant:f.Ak.primary,onClick:()=>history.back(),ouiaId:`${E}-back-button`},t):o().createElement(f.$n,{variant:f.Ak.primary,component:"a",href:r,ouiaId:`${E}-home-button`},n)),o().createElement(y,null,u?o().createElement(y,null,u):null)))};var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},g.apply(this,arguments)};const b=function(e){var t=e.description,n=void 0===t?(0,a.jsxs)(a.Fragment,{children:["Contact your organization administrator(s) for more information or visit ",(0,a.jsx)("a",{href:"./iam/my-user-access",children:"My User Access"})," to learn more about your permissions."]}):t,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["description"]);return(0,a.jsx)(h,g({},r,{description:n}))};var O=n(881);const E=()=>{const e=(0,O.A)();return(0,r.useEffect)((()=>{e?.appAction?.("no-permissions")}),[]),o().createElement("div",null,o().createElement(b,{serviceName:"Sample app"}))}}}]);