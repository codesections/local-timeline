!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="uXl7")}({EBst:function(e){!function(){"use strict";function t(e,t){var n,o,r,a,i=S;for(a=arguments.length;a-- >2;)E.push(arguments[a]);for(t&&null!=t.children&&(E.length||E.push(t.children),delete t.children);E.length;)if((o=E.pop())&&void 0!==o.pop)for(a=o.length;a--;)E.push(o[a]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?i[i.length-1]+=o:i===S?i=[o]:i.push(o),n=r;var c=new T;return c.nodeName=e,c.children=i,c.attributes=null==t?void 0:t,c.key=null==t?void 0:t.key,void 0!==k.vnode&&k.vnode(c),c}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==H.push(e)&&(k.debounceRendering||M)(a)}function a(){var e,t=H;for(H=[];e=t.pop();)e.__d&&O(e)}function i(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&c(e,t.nodeName):n||e._componentConstructor===t.nodeName}function c(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function s(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===P.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,i):e.removeEventListener(t,f,i),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var c=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?c?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(c?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function f(e){return this.__l[e.type](k.event&&k.event(e)||e)}function d(){for(var e;e=U.pop();)k.afterMount&&k.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,o,r,a){W++||(V=null!=r&&void 0!==r.ownerSVGElement,B=null!=e&&!("__preactattr_"in e));var i=h(e,t,n,o,a);return r&&i.parentNode!==r&&r.appendChild(i),--W||(B=!1,a||d()),i}function h(e,t,n,o,r){var a=e,i=V;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),v(e,!0))),a.__preactattr_=!0,a;var s=t.nodeName;if("function"==typeof s)return j(e,t,n,o);if(V="svg"===s||"foreignObject"!==s&&V,s+="",(!e||!c(e,s))&&(a=l(s,V),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),v(e,!0)}var u=a.firstChild,p=a.__preactattr_,f=t.children;if(null==p){p=a.__preactattr_={};for(var d=a.attributes,_=d.length;_--;)p[d[_].name]=d[_].value}return!B&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&m(a,f,n,o,B||null!=p.dangerouslySetInnerHTML),g(a,t.attributes,p),V=i,a}function m(e,t,n,o,r){var a,c,s,l,p,f=e.childNodes,d=[],_={},m=0,b=0,g=f.length,y=0,w=t?t.length:0;if(0!==g)for(var x=0;x<g;x++){var O=f[x],j=O.__preactattr_,N=w&&j?O._component?O._component.__k:j.key:null;null!=N?(m++,_[N]=O):(j||(void 0!==O.splitText?!r||O.nodeValue.trim():r))&&(d[y++]=O)}if(0!==w)for(var x=0;x<w;x++){l=t[x],p=null;var N=l.key;if(null!=N)m&&void 0!==_[N]&&(p=_[N],_[N]=void 0,m--);else if(b<y)for(a=b;a<y;a++)if(void 0!==d[a]&&i(c=d[a],l,r)){p=c,d[a]=void 0,a===y-1&&y--,a===b&&b++;break}p=h(p,l,n,o),s=f[x],p&&p!==e&&p!==s&&(null==s?e.appendChild(p):p===s.nextSibling?u(s):e.insertBefore(p,s))}if(m)for(var x in _)void 0!==_[x]&&v(_[x],!1);for(;b<=y;)void 0!==(p=d[y--])&&v(p,!1)}function v(e,t){var n=e._component;n?N(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||u(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;v(e,!0),e=t}}function g(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,V);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],V)}function y(e,t,n){var o,r=D.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),C.call(o,t,n)):(o=new C(t,n),o.constructor=e,o.render=w);r--;)if(D[r].constructor===e)return o.__b=D[r].__b,D.splice(r,1),o;return o}function w(e,t,n){return this.constructor(e,n)}function x(e,t,n,o,a){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===k.syncComponentUpdates&&e.base?r(e):O(e,1,a)),e.__r&&e.__r(e))}function O(e,t,o,r){if(!e.__x){var a,i,c,l=e.props,u=e.state,p=e.context,f=e.__p||l,h=e.__s||u,m=e.__c||p,b=e.base,g=e.__b,w=b||g,j=e._component,C=!1,L=m;if(e.constructor.getDerivedStateFromProps&&(u=n(n({},u),e.constructor.getDerivedStateFromProps(l,u)),e.state=u),b&&(e.props=f,e.state=h,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,u,p)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(l,u,p),e.props=l,e.state=u,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!C){a=e.render(l,u,p),e.getChildContext&&(p=n(n({},p),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(L=e.getSnapshotBeforeUpdate(f,h));var T,E,S=a&&a.nodeName;if("function"==typeof S){var M=s(a);i=j,i&&i.constructor===S&&M.key==i.__k?x(i,M,1,p,!1):(T=i,e._component=i=y(S,M,p),i.__b=i.__b||g,i.__u=e,x(i,M,0,p,!1),O(i,1,o,!0)),E=i.base}else c=w,T=j,T&&(c=e._component=null),(w||1===t)&&(c&&(c._component=null),E=_(c,a,p,o||!b,w&&w.parentNode,!0));if(w&&E!==w&&i!==j){var P=w.parentNode;P&&E!==P&&(P.replaceChild(E,w),T||(w._component=null,v(w,!1)))}if(T&&N(T),e.base=E,E&&!r){for(var H=e,V=e;V=V.__u;)(H=V).base=E;E._component=H,E._componentConstructor=H.constructor}}for(!b||o?U.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,h,L),k.afterUpdate&&k.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);W||r||d()}}function j(e,t,n,o){for(var r=e&&e._component,a=r,i=e,c=r&&e._componentConstructor===t.nodeName,l=c,u=s(t);r&&!l&&(r=r.__u);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(x(r,u,3,n,o),e=r.base):(a&&!c&&(N(a),e=i=null),r=y(t.nodeName,u,n),e&&!r.__b&&(r.__b=e,i=null),x(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,v(i,!1))),e}function N(e){k.beforeUnmount&&k.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?N(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,u(t),D.push(e),b(t)),e.__r&&e.__r(null)}function C(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function L(e,t,n){return _(n,e,{},!1,t,!1)}var T=function(){},k={},E=[],S=[],M="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,P=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,H=[],U=[],W=0,V=!1,B=!1,D=[];n(C.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),r(this)},forceUpdate:function(e){e&&this.__h.push(e),O(this,2)},render:function(){}});var R={h:t,createElement:t,cloneElement:o,Component:C,render:L,rerender:a,options:k};e.exports=R}()},FWi5:function(){},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n("EBst"),l=(n("FWi5"),Object(s.h)("div",{className:"content__loading"},Object(s.h)("div",{className:"loading--in-progress"},Object(s.h)("h2",{className:"header--secondary"},"Loading local timeline",Object(s.h)("span",{className:"loader__dot"},"."),Object(s.h)("span",{className:"loader__dot"},"."),Object(s.h)("span",{className:"loader__dot"},"."))))),u=function(){return l},p=u,f=Object(s.h)("br",null),d=function(e){var t=e.message,n=t.display_name,o=t.acct,r=t.avatar_static;return Object(s.h)("div",{className:"card--toot-header"},Object(s.h)("img",{className:"toot-header__img",src:r,alt:"Profile"}),Object(s.h)("strong",{dangerouslySetInnerHTML:{__html:n||o}}),f,Object(s.h)("span",{className:"account-name"},"@",o))},_=d,h=function(e){function t(t){var n=o(this,e.call(this,t));return n.state.textHidden=!0,n}return r(t,e),t.prototype.render=function(e){var t=this;return e.cwText?Object(s.h)("div",null,Object(s.h)("div",{style:{display:"inline-block"}},e.cwText),Object(s.h)("button",{type:"button",className:"button--show-more",onClick:function(){return t.setState({textHidden:!t.state.textHidden})}},"show more"),Object(s.h)("div",{style:{display:this.state.textHidden?"none":"block"},dangerouslySetInnerHTML:{__html:e.text}})):Object(s.h)("div",{dangerouslySetInnerHTML:{__html:e.text}})},t}(s.Component),m=h,v=Object(s.h)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"reply",className:"svg-inline--fa fa-reply fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"15px"},Object(s.h)("path",{fill:"currentColor",d:"M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z"})),b=Object(s.h)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"retweet",className:"svg-inline--fa fa-retweet fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 440",width:"25px"},Object(s.h)("path",{fill:"currentColor",d:"M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z"})),g=Object(s.h)("svg",{"aria-hidden":"true","data-prefix":"fas","data-icon":"star",className:"svg-inline--fa fa-star fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512",width:"20px"},Object(s.h)("path",{fill:"currentColor",d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"})),y=function(e){return Object(s.h)("div",{style:{color:"#606984"}},Object(s.h)("span",{className:"toot-footer__metadata"},v,e.replyCount),Object(s.h)("span",{className:"toot-footer__metadata"},b,e.boostCount),Object(s.h)("span",{className:"toot-footer__metadata"},g,e.favoriteCount))},w=y,x=function(e){return Object(s.h)("div",{className:"image__container"},Object(s.h)("img",{src:e.url,alt:e.altText,className:"toot__image"}))},O=x,j=Object(s.h)("hr",null),N=function(e){return Object(s.h)("div",null,Object(s.h)(_,{message:e.message.account}),Object(s.h)(m,{text:e.message.content,cwText:e.message.spoiler_text}),e.message.media_attachments.map(function(e){return Object(s.h)(O,{url:e.preview_url,altText:e.description})}),Object(s.h)(w,{replyCount:e.message.replies_count,boostCount:e.message.reblogs_count,favoriteCount:e.message.favourites_count}),j)},C=N;n.d(t,"default",function(){return k});var L=Object(s.h)("div",null,Object(s.h)("h1",{className:"header--main",id:"add-an-instance-h1"},"Fosstodon local timeline")),T=Object(s.h)(p,null),k=function(e){function t(){a(this,t);var n=i(this,e.call(this));return n.state.loaded="false",n.state.messages=[],n.state.idOfLastLoadedToot="",n}return c(t,e),t.prototype.componentDidMount=function(){this.getLocalTL()},t.prototype.getLocalTL=function(){var e=new XMLHttpRequest,t="https://fosstodon.org/api/v1/timelines/public?local=true";this.state.idOfLastLoadedToot&&(t+="&max_id="+this.state.idOfLastLoadedToot),e.open("GET",t,!0);var n=this;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE&&200===e.status){var t=JSON.parse(e.responseText),a=o(t);a.forEach(function(e,t){a[t]=r(e)}),n.setState({messages:n.state.messages.concat(a),idOfLastLoadedToot:t[t.length-1].id,loaded:!0})}},e.send();var o=function(e){var t=["account","content","created_at","favourites_count","reblogs_count","replies_count","media_attachments","spoiler_text","emojis"],n=[];return e.forEach(function(e){var o=Object.keys(e).filter(function(e){return t.includes(e)}).reduce(function(t,n){return t[n]=e[n],t},{});n.push(o)}),n},r=function(e){return e.account.emojis.forEach(function(t){var n=e.account.display_name,o=new RegExp(":"+t.shortcode+":","g");e.account.display_name=n.replace(o,'<img class="custom-emoji" src="'+t.static_url+'" alt=":'+t.shortcode+'">')}),e.emojis&&e.emojis.forEach(function(t){var n=new RegExp(":"+t.shortcode+":","g");e.content=e.content.replace(n,'<img class="custom-emoji" src="'+t.static_url+'" alt=":'+t.shortcode+'">')}),e}},t.prototype.render=function(){var e=this;return Object(s.h)("div",{className:"body__defaults"},L,Object(s.h)("div",{className:"results--target-toot"},!0===this.state.loaded?this.state.messages.map(function(e){return Object(s.h)(C,{message:e})}):T),Object(s.h)("button",{type:"button",onClick:function(){return e.getLocalTL.call(e)},className:"button"},"Load More"))},t}(s.Component)},uXl7:function(e,t,n){"use strict";var o=n("EBst");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var a=document.body.firstElementChild,i=function(){var e=r(n("JkW7"));a=(0,o.render)((0,o.h)(e),document.body,a)};i()}}});
//# sourceMappingURL=bundle.97fb7.js.map