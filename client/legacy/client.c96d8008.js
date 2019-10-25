import{s as e,n as t,_ as r,a as n,b as a,c as s,i as o,d as i,S as u,e as c,g as l,f,t as p,h,j as v,k as m,l as d,m as g,o as b,p as $,q as y,r as x,u as S,v as _,w,x as E,y as k,z as R,A as P,B as j,C as A,D as C,E as L,F as O,G as q,H as U}from"./index.2ec7a377.js";import{_ as N,a as D}from"./asyncToGenerator.c50f998e.js";function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var r=[],n=!0,a=!1,s=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw s}}return r}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var I=[];function T(r){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t,s=[];function o(t){if(e(r,t)&&(r=t,n)){for(var a=!I.length,o=0;o<s.length;o+=1){var i=s[o];i[1](),I.push(i,r)}if(a){for(var u=0;u<I.length;u+=2)I[u][0](I[u+1]);I.length=0}}}return{set:o,update:function(e){o(e(r))},subscribe:function(e){var i=[e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:t];return s.push(i),1===s.length&&(n=a(o)||t),e(r),function(){var e=s.indexOf(i);-1!==e&&s.splice(e,1),0===s.length&&(n(),n=null)}}}}var B={},J=function(){return{}};function G(e){var t,r=e.$$slots.default,n=c(r,e,null);return{c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,r){n&&n.m(e,r),t=!0},p:function(e,t){n&&n.p&&e.$$scope&&n.p(l(r,t,e,null),f(r,t,null))},i:function(e){t||(p(n,e),t=!0)},o:function(e){h(n,e),t=!1},d:function(e){n&&n.d(e)}}}function K(e,t,r){var n=t.segment,a=t.$$slots,s=void 0===a?{}:a,o=t.$$scope;return e.$set=function(e){"segment"in e&&r("segment",n=e.segment),"$$scope"in e&&r("$$scope",o=e.$$scope)},{segment:n,$$slots:s,$$scope:o}}var V=function(t){function c(t){var r;return n(this,c),r=a(this,s(c).call(this)),o(i(r),t,K,G,e,["segment"]),r}return r(c,u),c}();function z(e){var t,r,n=e.error.stack+"";return{c:function(){t=v("pre"),r=m(n)},l:function(e){t=d(e,"PRE",{},!1);var a=g(t);r=b(a,n),a.forEach($)},m:function(e,n){y(e,t,n),x(t,r)},p:function(e,t){e.error&&n!==(n=t.error.stack+"")&&S(r,n)},d:function(e){e&&$(t)}}}function F(e){var r,n,a,s,o,i,u,c,l,f=e.error.message+"";document.title=r=e.status;var p=e.dev&&e.error.stack&&z(e);return{c:function(){n=_(),a=v("h1"),s=m(e.status),o=_(),i=v("p"),u=m(f),c=_(),p&&p.c(),l=w(),this.h()},l:function(t){n=E(t),a=d(t,"H1",{class:!0},!1);var r=g(a);s=b(r,e.status),r.forEach($),o=E(t),i=d(t,"P",{class:!0},!1);var h=g(i);u=b(h,f),h.forEach($),c=E(t),p&&p.l(t),l=w(),this.h()},h:function(){k(a,"class","svelte-8od9u6"),k(i,"class","svelte-8od9u6")},m:function(e,t){y(e,n,t),y(e,a,t),x(a,s),y(e,o,t),y(e,i,t),x(i,u),y(e,c,t),p&&p.m(e,t),y(e,l,t)},p:function(e,t){e.status&&r!==(r=t.status)&&(document.title=r),e.status&&S(s,t.status),e.error&&f!==(f=t.error.message+"")&&S(u,f),t.dev&&t.error.stack?p?p.p(e,t):((p=z(t)).c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null)},i:t,o:t,d:function(e){e&&($(n),$(a),$(o),$(i),$(c)),p&&p.d(e),e&&$(l)}}}function W(e,t,r){var n=t.status,a=t.error;return e.$set=function(e){"status"in e&&r("status",n=e.status),"error"in e&&r("error",a=e.error)},{status:n,error:a,dev:!1}}var X=function(t){function c(t){var r;return n(this,c),r=a(this,s(c).call(this)),o(i(r),t,W,F,e,["status","error"]),r}return r(c,u),c}();function Y(e){var t,r,n=[e.level1.props],a=e.level1.component;function s(e){for(var t={},r=0;r<n.length;r+=1)t=R(t,n[r]);return{props:t}}if(a)var o=new a(s());return{c:function(){o&&o.$$.fragment.c(),t=w()},l:function(e){o&&o.$$.fragment.l(e),t=w()},m:function(e,n){o&&P(o,e,n),y(e,t,n),r=!0},p:function(e,r){var i=e.level1?j(n,[A(r.level1.props)]):{};if(a!==(a=r.level1.component)){if(o){O();var u=o;h(u.$$.fragment,1,0,function(){C(u,1)}),q()}a?((o=new a(s())).$$.fragment.c(),p(o.$$.fragment,1),P(o,t.parentNode,t)):o=null}else a&&o.$set(i)},i:function(e){r||(o&&p(o.$$.fragment,e),r=!0)},o:function(e){o&&h(o.$$.fragment,e),r=!1},d:function(e){e&&$(t),o&&C(o,e)}}}function M(e){var t,r=new X({props:{error:e.error,status:e.status}});return{c:function(){r.$$.fragment.c()},l:function(e){r.$$.fragment.l(e)},m:function(e,n){P(r,e,n),t=!0},p:function(e,t){var n={};e.error&&(n.error=t.error),e.status&&(n.status=t.status),r.$set(n)},i:function(e){t||(p(r.$$.fragment,e),t=!0)},o:function(e){h(r.$$.fragment,e),t=!1},d:function(e){C(r,e)}}}function Q(e){var t,r,n,a,s=[M,Y],o=[];function i(e,t){return t.error?0:1}return t=i(0,e),r=o[t]=s[t](e),{c:function(){r.c(),n=w()},l:function(e){r.l(e),n=w()},m:function(e,r){o[t].m(e,r),y(e,n,r),a=!0},p:function(e,a){var u=t;(t=i(0,a))===u?o[t].p(e,a):(O(),h(o[u],1,1,function(){o[u]=null}),q(),(r=o[t])||(r=o[t]=s[t](a)).c(),p(r,1),r.m(n.parentNode,n))},i:function(e){a||(p(r),a=!0)},o:function(e){h(r),a=!1},d:function(e){o[t].d(e),e&&$(n)}}}function Z(e){for(var t,r=[{segment:e.segments[0]},e.level0.props],n={$$slots:{default:[Q]},$$scope:{ctx:e}},a=0;a<r.length;a+=1)n=R(n,r[a]);var s=new V({props:n});return{c:function(){s.$$.fragment.c()},l:function(e){s.$$.fragment.l(e)},m:function(e,r){P(s,e,r),t=!0},p:function(e,t){var n=e.segments||e.level0?j(r,[e.segments&&{segment:t.segments[0]},e.level0&&A(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1)&&(n.$$scope={changed:e,ctx:t}),s.$set(n)},i:function(e){t||(p(s.$$.fragment,e),t=!0)},o:function(e){h(s.$$.fragment,e),t=!1},d:function(e){C(s,e)}}}function ee(e,t,r){var n=t.stores,a=t.error,s=t.status,o=t.segments,i=t.level0,u=t.level1,c=void 0===u?null:u;return L(B,n),e.$set=function(e){"stores"in e&&r("stores",n=e.stores),"error"in e&&r("error",a=e.error),"status"in e&&r("status",s=e.status),"segments"in e&&r("segments",o=e.segments),"level0"in e&&r("level0",i=e.level0),"level1"in e&&r("level1",c=e.level1)},{stores:n,error:a,status:s,segments:o,level0:i,level1:c}}var te,re=function(t){function c(t){var r;return n(this,c),r=a(this,s(c).call(this)),o(i(r),t,ee,Z,e,["stores","error","status","segments","level0","level1"]),r}return r(c,u),c}(),ne=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],ae=[{js:function(){return import("./index.2c365c67.js")},css:["legacy/index.2c365c67.css"]},{js:function(){return import("./about.826fc27b.js")},css:[]},{js:function(){return import("./index.9e5cffa7.js")},css:["legacy/index.9e5cffa7.css"]},{js:function(){return import("./[slug].40bee284.js")},css:["legacy/[slug].40bee284.css"]}],se=(te=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:function(e){return{slug:te(e[1])}}}]}]);function oe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=Ee(new URL(e,document.baseURI));return r?(Se[t.replaceState?"replaceState":"pushState"]({id:$e},"",e),Re(r,null).then(function(){})):(location.href=e,new Promise(function(e){}))}var ie,ue,ce,le,fe,pe="undefined"!=typeof __SAPPER__&&__SAPPER__,he=!1,ve=[],me="{}",de={page:T({}),preloading:T(null),session:T(pe&&pe.session)};de.session.subscribe(function(){var e=N(D.mark(function e(t){var r,n,a,s,o,i;return D.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,he){e.next=3;break}return e.abrupt("return");case 3:return fe=!0,r=Ee(new URL(location.href)),n=ue={},e.next=8,Le(r);case 8:if(a=e.sent,s=a.redirect,o=a.props,i=a.branch,n===ue){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,je(s,i,o,r.page);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());var ge,be=null;var $e,ye=1;var xe,Se="undefined"!=typeof history?history:{pushState:function(e,t,r){},replaceState:function(e,t,r){},scrollRestoration:""},_e={};function we(e){var t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var r=H(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),n=r[1],a=r[2],s=void 0===a?"":a;"string"==typeof t[n]&&(t[n]=[t[n]]),"object"===U(t[n])?t[n].push(s):t[n]=s}),t}function Ee(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pe.baseUrl))return null;var t=e.pathname.slice(pe.baseUrl.length);if(""===t&&(t="/"),!ne.some(function(e){return e.test(t)}))for(var r=0;r<se.length;r+=1){var n=se[r],a=n.pattern.exec(t);if(a){var s=we(e.search),o=n.parts[n.parts.length-1],i=o.params?o.params(a):{},u={host:location.host,path:t,query:s,params:i};return{href:e.href,route:n,match:a,page:u}}}}function ke(){return{x:pageXOffset,y:pageYOffset}}function Re(e,t,r,n){return Pe.apply(this,arguments)}function Pe(){return(Pe=N(D.mark(function e(t,r,n,a){var s,o,i,u,c,l,f,p,h;return D.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r?$e=r:(s=ke(),_e[$e]=s,r=$e=++ye,_e[$e]=n?s:{x:0,y:0}),$e=r,ie&&de.preloading.set(!0),o=be&&be.href===t.href?be.promise:Le(t),be=null,i=ue={},e.next=8,o;case 8:if(u=e.sent,c=u.redirect,l=u.props,f=u.branch,i===ue){e.next=14;break}return e.abrupt("return");case 14:return e.next=16,je(c,f,l,t.page);case 16:document.activeElement&&document.activeElement.blur(),n||(p=_e[r],a&&(h=document.getElementById(a.slice(1)))&&(p={x:0,y:h.getBoundingClientRect().top}),_e[$e]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function je(e,t,r,n){return Ae.apply(this,arguments)}function Ae(){return(Ae=N(D.mark(function e(t,r,n,a){var s,o;return D.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",oe(t.location,{replaceState:!0}));case 2:if(de.page.set(a),de.preloading.set(!1),!ie){e.next=8;break}ie.$set(n),e.next=17;break;case 8:return n.stores={page:{subscribe:de.page.subscribe},preloading:{subscribe:de.preloading.subscribe},session:de.session},e.next=11,ce;case 11:if(e.t0=e.sent,n.level0={props:e.t0},s=document.querySelector("#sapper-head-start"),o=document.querySelector("#sapper-head-end"),s&&o){for(;s.nextSibling!==o;)Ne(s.nextSibling);Ne(s),Ne(o)}ie=new re({target:ge,props:n,hydrate:!0});case 17:ve=r,me=JSON.stringify(a.query),he=!0,fe=!1;case 21:case"end":return e.stop()}},e)}))).apply(this,arguments)}function Ce(e,t,r,n){if(n!==me)return!0;var a=ve[e];return!!a&&(t!==a.segment||(!(!a.match||JSON.stringify(a.match.slice(1,e+2))===JSON.stringify(r.slice(1,e+2)))||void 0))}function Le(e){return Oe.apply(this,arguments)}function Oe(){return(Oe=N(D.mark(function e(t){var r,n,a,s,o,i,u,c,l,f,p;return D.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,n=t.page,a=n.path.split("/").filter(Boolean),s=null,o={error:null,status:200,segments:[a[0]]},i={fetch:function(e){function t(t,r){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(e,t){return fetch(e,t)}),redirect:function(e,t){if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:function(e,t){o.error="string"==typeof t?new Error(t):t,o.status=e}},ce||(ce=pe.preloaded[0]||J.call(i,{host:n.host,path:n.path,query:n.query,params:{}},le)),c=1,e.prev=7,l=JSON.stringify(n.query),f=r.pattern.exec(n.path),p=!1,e.next=13,Promise.all(r.parts.map(function(){var e=N(D.mark(function e(r,s){var u,h,v,m,d,g;return D.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(u=a[s],Ce(s,u,f,l)&&(p=!0),o.segments[c]=a[s+1],r){e.next=5;break}return e.abrupt("return",{segment:u});case 5:if(h=c++,fe||p||!ve[s]||ve[s].part!==r.i){e.next=8;break}return e.abrupt("return",ve[s]);case 8:return p=!1,e.next=11,Ue(ae[r.i]);case 11:if(v=e.sent,m=v.default,d=v.preload,!he&&pe.preloaded[s+1]){e.next=25;break}if(!d){e.next=21;break}return e.next=18,d.call(i,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(t.match):{}},le);case 18:e.t0=e.sent,e.next=22;break;case 21:e.t0={};case 22:g=e.t0,e.next=26;break;case 25:g=pe.preloaded[s+1];case 26:return e.abrupt("return",o["level".concat(h)]={component:m,props:g,segment:u,match:f,part:r.i});case 27:case"end":return e.stop()}},e)}));return function(t,r){return e.apply(this,arguments)}}()));case 13:u=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),o.error=e.t0,o.status=500,u=[];case 21:return e.abrupt("return",{redirect:s,props:o,branch:u});case 22:case"end":return e.stop()}},e,null,[[7,16]])}))).apply(this,arguments)}function qe(e){var t="client/".concat(e);if(!document.querySelector('link[href="'.concat(t,'"]')))return new Promise(function(e,r){var n=document.createElement("link");n.rel="stylesheet",n.href=t,n.onload=function(){return e()},n.onerror=r,document.head.appendChild(n)})}function Ue(e){var t="string"==typeof e.css?[]:e.css.map(qe);return t.unshift(e.js()),Promise.all(t).then(function(e){return e[0]})}function Ne(e){e.parentNode.removeChild(e)}function De(e){var t=Ee(new URL(e,document.baseURI));if(t)return be&&e===be.href||function(e,t){be={href:e,promise:t}}(e,Le(t)),be.promise}function He(e){clearTimeout(xe),xe=setTimeout(function(){Ie(e)},20)}function Ie(e){var t=Be(e.target);t&&"prefetch"===t.rel&&De(t.href)}function Te(e){if(1===function(e){return null===e.which?e.button:e.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var t=Be(e.target);if(t&&t.href){var r="object"===U(t.href)&&"SVGAnimatedString"===t.href.constructor.name,n=String(r?t.href.baseVal:t.href);if(n!==location.href){if(!t.hasAttribute("download")&&"external"!==t.getAttribute("rel")&&(r?!t.target.baseVal:!t.target)){var a=new URL(n);if(a.pathname!==location.pathname||a.search!==location.search){var s=Ee(a);if(s)Re(s,null,t.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),Se.pushState({id:$e},"",a.href)}}}else location.hash||e.preventDefault()}}}function Be(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Je(e){if(_e[$e]=ke(),e.state){var t=Ee(new URL(location.href));t?Re(t,e.state.id):location.href=location.href}else(function(e){$e=e})(ye=ye+1),Se.replaceState({id:$e},"",location.href)}!function(e){var t;"scrollRestoration"in Se&&(Se.scrollRestoration="manual"),t=e.target,ge=t,addEventListener("click",Te),addEventListener("popstate",Je),addEventListener("touchstart",Ie),addEventListener("mousemove",He),Promise.resolve().then(function(){var e=location,t=e.hash,r=e.href;Se.replaceState({id:ye},"",r);var n,a,s,o,i,u,c,l,f=new URL(location.href);if(pe.error)return n=location,a=n.host,s=n.pathname,o=n.search,i=pe.session,u=pe.preloaded,c=pe.status,l=pe.error,ce||(ce=u&&u[0]),void je(null,[],{error:l,status:c,session:i,level0:{props:ce},level1:{props:{status:c,error:l},component:X},segments:u},{host:a,path:s,query:we(o),params:{}});var p=Ee(f);return p?Re(p,ye,!0,t):void 0})}({target:document.querySelector("#sapper")});
