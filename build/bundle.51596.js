!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="uXl7")}({EBst:function(e){!function(){"use strict";function t(e,t){var n,o,r,a,i=E;for(a=arguments.length;a-- >2;)S.push(arguments[a]);for(t&&null!=t.children&&(S.length||S.push(t.children),delete t.children);S.length;)if((o=S.pop())&&void 0!==o.pop)for(a=o.length;a--;)S.push(o[a]);else"boolean"==typeof o&&(o=null),(r="function"!=typeof e)&&(null==o?o="":"number"==typeof o?o+="":"string"!=typeof o&&(r=!1)),r&&n?i[i.length-1]+=o:i===E?i=[o]:i.push(o),n=r;var s=new L;return s.nodeName=e,s.children=i,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==k.vnode&&k.vnode(s),s}function n(e,t){for(var n in t)e[n]=t[n];return e}function o(e,o){return t(e.nodeName,n(n({},e.attributes),o),arguments.length>2?[].slice.call(arguments,2):e.children)}function r(e){!e.__d&&(e.__d=!0)&&1==U.push(e)&&(k.debounceRendering||M)(a)}function a(){var e,t=U;for(U=[];e=t.pop();)e.__d&&j(e)}function i(e,t,n){return"string"==typeof t||"number"==typeof t?void 0!==e.splitText:"string"==typeof t.nodeName?!e._componentConstructor&&s(e,t.nodeName):n||e._componentConstructor===t.nodeName}function s(e,t){return e.__n===t||e.nodeName.toLowerCase()===t.toLowerCase()}function c(e){var t=n({},e.attributes);t.children=e.children;var o=e.nodeName.defaultProps;if(void 0!==o)for(var r in o)void 0===t[r]&&(t[r]=o[r]);return t}function l(e,t){var n=t?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);return n.__n=e,n}function u(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,t,n,o,r){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),o&&o(e);else if("class"!==t||r)if("style"===t){if(o&&"string"!=typeof o&&"string"!=typeof n||(e.style.cssText=o||""),o&&"object"==typeof o){if("string"!=typeof n)for(var a in n)a in o||(e.style[a]="");for(var a in o)e.style[a]="number"==typeof o[a]&&!1===P.test(a)?o[a]+"px":o[a]}}else if("dangerouslySetInnerHTML"===t)o&&(e.innerHTML=o.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),o?n||e.addEventListener(t,f,i):e.removeEventListener(t,f,i),(e.__l||(e.__l={}))[t]=o}else if("list"!==t&&"type"!==t&&!r&&t in e){try{e[t]=null==o?"":o}catch(e){}null!=o&&!1!==o||"spellcheck"==t||e.removeAttribute(t)}else{var s=r&&t!==(t=t.replace(/^xlink:?/,""));null==o||!1===o?s?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof o&&(s?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),o):e.setAttribute(t,o))}else e.className=o||""}function f(e){return this.__l[e.type](k.event&&k.event(e)||e)}function d(){for(var e;e=W.pop();)k.afterMount&&k.afterMount(e),e.componentDidMount&&e.componentDidMount()}function _(e,t,n,o,r,a){H++||(D=null!=r&&void 0!==r.ownerSVGElement,R=null!=e&&!("__preactattr_"in e));var i=h(e,t,n,o,a);return r&&i.parentNode!==r&&r.appendChild(i),--H||(R=!1,a||d()),i}function h(e,t,n,o,r){var a=e,i=D;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||r)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),v(e,!0))),a.__preactattr_=!0,a;var c=t.nodeName;if("function"==typeof c)return N(e,t,n,o);if(D="svg"===c||"foreignObject"!==c&&D,c+="",(!e||!s(e,c))&&(a=l(c,D),e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),v(e,!0)}var u=a.firstChild,p=a.__preactattr_,f=t.children;if(null==p){p=a.__preactattr_={};for(var d=a.attributes,_=d.length;_--;)p[d[_].name]=d[_].value}return!R&&f&&1===f.length&&"string"==typeof f[0]&&null!=u&&void 0!==u.splitText&&null==u.nextSibling?u.nodeValue!=f[0]&&(u.nodeValue=f[0]):(f&&f.length||null!=u)&&m(a,f,n,o,R||null!=p.dangerouslySetInnerHTML),y(a,t.attributes,p),D=i,a}function m(e,t,n,o,r){var a,s,c,l,p,f=e.childNodes,d=[],_={},m=0,b=0,y=f.length,g=0,O=t?t.length:0;if(0!==y)for(var x=0;x<y;x++){var j=f[x],N=j.__preactattr_,w=O&&N?j._component?j._component.__k:N.key:null;null!=w?(m++,_[w]=j):(N||(void 0!==j.splitText?!r||j.nodeValue.trim():r))&&(d[g++]=j)}if(0!==O)for(var x=0;x<O;x++){l=t[x],p=null;var w=l.key;if(null!=w)m&&void 0!==_[w]&&(p=_[w],_[w]=void 0,m--);else if(b<g)for(a=b;a<g;a++)if(void 0!==d[a]&&i(s=d[a],l,r)){p=s,d[a]=void 0,a===g-1&&g--,a===b&&b++;break}p=h(p,l,n,o),c=f[x],p&&p!==e&&p!==c&&(null==c?e.appendChild(p):p===c.nextSibling?u(c):e.insertBefore(p,c))}if(m)for(var x in _)void 0!==_[x]&&v(_[x],!1);for(;b<=g;)void 0!==(p=d[g--])&&v(p,!1)}function v(e,t){var n=e._component;n?w(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||u(e),b(e))}function b(e){for(e=e.lastChild;e;){var t=e.previousSibling;v(e,!0),e=t}}function y(e,t,n){var o;for(o in n)t&&null!=t[o]||null==n[o]||p(e,o,n[o],n[o]=void 0,D);for(o in t)"children"===o||"innerHTML"===o||o in n&&t[o]===("value"===o||"checked"===o?e[o]:n[o])||p(e,o,n[o],n[o]=t[o],D)}function g(e,t,n){var o,r=B.length;for(e.prototype&&e.prototype.render?(o=new e(t,n),C.call(o,t,n)):(o=new C(t,n),o.constructor=e,o.render=O);r--;)if(B[r].constructor===e)return o.__b=B[r].__b,B.splice(r,1),o;return o}function O(e,t,n){return this.constructor(e,n)}function x(e,t,n,o,a){e.__x||(e.__x=!0,e.__r=t.ref,e.__k=t.key,delete t.ref,delete t.key,void 0===e.constructor.getDerivedStateFromProps&&(!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o)),o&&o!==e.context&&(e.__c||(e.__c=e.context),e.context=o),e.__p||(e.__p=e.props),e.props=t,e.__x=!1,0!==n&&(1!==n&&!1===k.syncComponentUpdates&&e.base?r(e):j(e,1,a)),e.__r&&e.__r(e))}function j(e,t,o,r){if(!e.__x){var a,i,s,l=e.props,u=e.state,p=e.context,f=e.__p||l,h=e.__s||u,m=e.__c||p,b=e.base,y=e.__b,O=b||y,N=e._component,C=!1,T=m;if(e.constructor.getDerivedStateFromProps&&(u=n(n({},u),e.constructor.getDerivedStateFromProps(l,u)),e.state=u),b&&(e.props=f,e.state=h,e.context=m,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(l,u,p)?C=!0:e.componentWillUpdate&&e.componentWillUpdate(l,u,p),e.props=l,e.state=u,e.context=p),e.__p=e.__s=e.__c=e.__b=null,e.__d=!1,!C){a=e.render(l,u,p),e.getChildContext&&(p=n(n({},p),e.getChildContext())),b&&e.getSnapshotBeforeUpdate&&(T=e.getSnapshotBeforeUpdate(f,h));var L,S,E=a&&a.nodeName;if("function"==typeof E){var M=c(a);i=N,i&&i.constructor===E&&M.key==i.__k?x(i,M,1,p,!1):(L=i,e._component=i=g(E,M,p),i.__b=i.__b||y,i.__u=e,x(i,M,0,p,!1),j(i,1,o,!0)),S=i.base}else s=O,L=N,L&&(s=e._component=null),(O||1===t)&&(s&&(s._component=null),S=_(s,a,p,o||!b,O&&O.parentNode,!0));if(O&&S!==O&&i!==N){var P=O.parentNode;P&&S!==P&&(P.replaceChild(S,O),L||(O._component=null,v(O,!1)))}if(L&&w(L),e.base=S,S&&!r){for(var U=e,D=e;D=D.__u;)(U=D).base=S;S._component=U,S._componentConstructor=U.constructor}}for(!b||o?W.unshift(e):C||(e.componentDidUpdate&&e.componentDidUpdate(f,h,T),k.afterUpdate&&k.afterUpdate(e));e.__h.length;)e.__h.pop().call(e);H||r||d()}}function N(e,t,n,o){for(var r=e&&e._component,a=r,i=e,s=r&&e._componentConstructor===t.nodeName,l=s,u=c(t);r&&!l&&(r=r.__u);)l=r.constructor===t.nodeName;return r&&l&&(!o||r._component)?(x(r,u,3,n,o),e=r.base):(a&&!s&&(w(a),e=i=null),r=g(t.nodeName,u,n),e&&!r.__b&&(r.__b=e,i=null),x(r,u,1,n,o),e=r.base,i&&e!==i&&(i._component=null,v(i,!1))),e}function w(e){k.beforeUnmount&&k.beforeUnmount(e);var t=e.base;e.__x=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?w(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.__b=t,u(t),B.push(e),b(t)),e.__r&&e.__r(null)}function C(e,t){this.__d=!0,this.context=t,this.props=e,this.state=this.state||{},this.__h=[]}function T(e,t,n){return _(n,e,{},!1,t,!1)}var L=function(){},k={},S=[],E=[],M="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,P=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,U=[],W=[],H=0,D=!1,R=!1,B=[];n(C.prototype,{setState:function(e,t){this.__s||(this.__s=this.state),this.state=n(n({},this.state),"function"==typeof e?e(this.state,this.props):e),t&&this.__h.push(t),r(this)},forceUpdate:function(e){e&&this.__h.push(e),j(this,2)},render:function(){}});var F={h:t,createElement:t,cloneElement:o,Component:C,render:T,rerender:a,options:k};e.exports=F}()},FWi5:function(){},JkW7:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n("EBst"),l=(n("FWi5"),Object(c.h)("div",{className:"content__loading"},Object(c.h)("div",{className:"loading--in-progress"},Object(c.h)("h2",{className:"header--secondary"},"Loading local timeline",Object(c.h)("span",{className:"loader__dot"},"."),Object(c.h)("span",{className:"loader__dot"},"."),Object(c.h)("span",{className:"loader__dot"},"."))))),u=function(){return l},p=u,f=Object(c.h)("br",null),d=function(e){var t=e.message,n=t.display_name,o=t.acct,r=t.avatar_static;return Object(c.h)("div",{className:"card--toot-header"},Object(c.h)("img",{className:"toot-header__img",src:r,alt:"Profile"}),Object(c.h)("strong",null,n||o),f,Object(c.h)("span",{className:"account-name"},"@",o))},_=d,h=function(e){function t(t){var n=o(this,e.call(this,t));return n.state.textHidden=!0,n}return r(t,e),t.prototype.render=function(e){var t=this;return e.cwText?Object(c.h)("div",null,Object(c.h)("div",{style:{display:"inline-block"}},e.cwText),Object(c.h)("button",{type:"button",className:"button--show-more",onClick:function(){return t.setState({textHidden:!t.state.textHidden})}},"show more"),Object(c.h)("div",{style:{display:this.state.textHidden?"none":"block"},dangerouslySetInnerHTML:{__html:e.text}})):Object(c.h)("div",{dangerouslySetInnerHTML:{__html:e.text}})},t}(c.Component),m=h,v=function(e){return Object(c.h)("div",{style:{color:"#606984"}},Object(c.h)("span",{className:"toot-footer__metadata"},"⮪",e.replyCount),Object(c.h)("span",{className:"toot-footer__metadata"},"⮔",e.boostCount),Object(c.h)("span",{className:"toot-footer__metadata"},"★",e.favoriteCount))},b=v,y=function(e){return Object(c.h)("div",{className:"image__container"},Object(c.h)("img",{src:e.url,alt:e.altText,className:"toot__image"}))},g=y,O=Object(c.h)("hr",null),x=function(e){return Object(c.h)("div",null,Object(c.h)(_,{message:e.message.account}),Object(c.h)(m,{text:e.message.content,cwText:e.message.spoiler_text}),e.message.media_attachments.map(function(e){return Object(c.h)(g,{url:e.preview_url,altText:e.description})}),Object(c.h)(b,{replyCount:e.message.replies_count,boostCount:e.message.reblogs_count,favoriteCount:e.message.favourites_count}),O)},j=x;n.d(t,"default",function(){return C});var N=Object(c.h)("div",null,Object(c.h)("h1",{className:"header--main",id:"add-an-instance-h1"},"Fosstodon local timeline")),w=Object(c.h)(p,null),C=function(e){function t(){a(this,t);var n=i(this,e.call(this));return n.state.loaded="false",n.state.messages=[],n.state.idOfLastLoadedToot="",n}return s(t,e),t.prototype.componentDidMount=function(){this.getLocalTimeline()},t.prototype.getLocalTimeline=function(){var e=new XMLHttpRequest,t="https://fosstodon.org/api/v1/timelines/public?local=true";this.state.idOfLastLoadedToot&&(t+="&max_id="+this.state.idOfLastLoadedToot),e.open("GET",t,!0);var n=this;e.onreadystatechange=function(){if(e.readyState===XMLHttpRequest.DONE&&200===e.status){var t=JSON.parse(e.responseText),o=["account","content","created_at","favourites_count","reblogs_count","replies_count","media_attachments","spoiler_text"],r=[];t.forEach(function(e){var t=Object.keys(e).filter(function(e){return o.includes(e)}).reduce(function(t,n){return t[n]=e[n],t},{});r.push(t)}),n.setState({messages:n.state.messages.concat(r)}),n.setState({idOfLastLoadedToot:t[t.length-1].id}),n.setState({loaded:!0})}},e.send()},t.prototype.render=function(){var e=this;return Object(c.h)("div",{className:"body__defaults"},N,Object(c.h)("div",{className:"results--target-toot"},!0===this.state.loaded?this.state.messages.map(function(e){return Object(c.h)(j,{message:e})}):w),Object(c.h)("button",{type:"button",onClick:function(){return e.getLocalTimeline.call(e)},className:"button button--good"},"Load More"))},t}(c.Component)},uXl7:function(e,t,n){"use strict";var o=n("EBst");"serviceWorker"in navigator&&"https:"===location.protocol&&navigator.serviceWorker.register(n.p+"sw.js");var r=function(e){return e&&e.default?e.default:e};if("function"==typeof r(n("JkW7"))){var a=document.body.firstElementChild,i=function(){var e=r(n("JkW7"));a=(0,o.render)((0,o.h)(e),document.body,a)};i()}}});
//# sourceMappingURL=bundle.51596.js.map