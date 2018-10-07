module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = M;for (i = arguments.length; i-- > 2;) {
      T.push(arguments[i]);
    }t && null != t.children && (T.length || T.push(t.children), delete t.children);while (T.length) {
      if ((o = T.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        T.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === M ? l = [o] : l.push(o), n = r;
    }var a = new S();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== L.vnode && L.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function o(e) {
    !e.__d && (e.__d = !0) && 1 == D.push(e) && (L.debounceRendering || P)(r);
  }function r() {
    var e,
        t = D;D = [];while (e = t.pop()) {
      e.__d && C(e);
    }
  }function i(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && l(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function l(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function a(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function p(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function s(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function u(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === W.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, c, l) : e.removeEventListener(t, c, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) {
        try {
          e[t] = null == o ? "" : o;
        } catch (e) {}null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var a = r && t !== (t = t.replace(/^xlink:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function c(e) {
    return this.__l[e.type](L.event && L.event(e) || e);
  }function _() {
    var e;while (e = E.pop()) {
      L.afterMount && L.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    V++ || (A = null != r && void 0 !== r.ownerSVGElement, H = null != e && !("__preactattr_" in e));var l = f(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --V || (H = !1, i || _()), l;
  }function f(e, t, n, o, r) {
    var i = e,
        a = A;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0))), i.__preactattr_ = !0, i;var s = t.nodeName;if ("function" == typeof s) return x(e, t, n, o);if (A = "svg" === s || "foreignObject" !== s && A, s += "", (!e || !l(e, s)) && (i = p(s, A), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), m(e, !0);
    }var u = i.firstChild,
        c = i.__preactattr_,
        _ = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var d = i.attributes, f = d.length; f--;) {
        c[d[f].name] = d[f].value;
      }
    }return !H && _ && 1 === _.length && "string" == typeof _[0] && null != u && void 0 !== u.splitText && null == u.nextSibling ? u.nodeValue != _[0] && (u.nodeValue = _[0]) : (_ && _.length || null != u) && h(i, _, n, o, H || null != c.dangerouslySetInnerHTML), b(i, t.attributes, c), A = a, i;
  }function h(e, t, n, o, r) {
    var l,
        a,
        p,
        u,
        c,
        _ = e.childNodes,
        d = [],
        h = {},
        v = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (v++, h[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (d[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      u = t[C], c = null;var k = u.key;if (null != k) v && void 0 !== h[k] && (c = h[k], h[k] = void 0, v--);else if (b < g) for (l = b; l < g; l++) {
        if (void 0 !== d[l] && i(a = d[l], u, r)) {
          c = a, d[l] = void 0, l === g - 1 && g--, l === b && b++;break;
        }
      }c = f(c, u, n, o), p = _[C], c && c !== e && c !== p && (null == p ? e.appendChild(c) : c === p.nextSibling ? s(p) : e.insertBefore(c, p));
    }if (v) for (var C in h) {
      void 0 !== h[C] && m(h[C], !1);
    }while (b <= g) {
      void 0 !== (c = d[g--]) && m(c, !1);
    }
  }function m(e, t) {
    var n = e._component;n ? N(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || s(e), v(e));
  }function v(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;m(e, !0), e = t;
    }
  }function b(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || u(e, o, n[o], n[o] = void 0, A);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || u(e, o, n[o], n[o] = t[o], A);
    }
  }function y(e, t, n) {
    var o,
        r = B.length;e.prototype && e.prototype.render ? (o = new e(t, n), k.call(o, t, n)) : (o = new k(t, n), o.constructor = e, o.render = g);while (r--) {
      if (B[r].constructor === e) return o.__b = B[r].__b, B.splice(r, 1), o;
    }return o;
  }function g(e, t, n) {
    return this.constructor(e, n);
  }function w(e, t, n, r, i) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, r)), r && r !== e.context && (e.__c || (e.__c = e.context), e.context = r), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === L.syncComponentUpdates && e.base ? o(e) : C(e, 1, i)), e.__r && e.__r(e));
  }function C(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          p,
          s = e.props,
          u = e.state,
          c = e.context,
          f = e.__p || s,
          h = e.__s || u,
          v = e.__c || c,
          b = e.base,
          g = e.__b,
          x = b || g,
          k = e._component,
          U = !1,
          S = v;if (e.constructor.getDerivedStateFromProps && (u = t(t({}, u), e.constructor.getDerivedStateFromProps(s, u)), e.state = u), b && (e.props = f, e.state = h, e.context = v, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(s, u, c) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(s, u, c), e.props = s, e.state = u, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(s, u, c), e.getChildContext && (c = t(t({}, c), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(f, h));var T,
            M,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = a(i);l = k, l && l.constructor === P && W.key == l.__k ? w(l, W, 1, c, !1) : (T = l, e._component = l = y(P, W, c), l.__b = l.__b || g, l.__u = e, w(l, W, 0, c, !1), C(l, 1, o, !0)), M = l.base;
        } else p = x, T = k, T && (p = e._component = null), (x || 1 === n) && (p && (p._component = null), M = d(p, i, c, o || !b, x && x.parentNode, !0));if (x && M !== x && l !== k) {
          var D = x.parentNode;D && M !== D && (D.replaceChild(M, x), T || (x._component = null, m(x, !1)));
        }if (T && N(T), e.base = M, M && !r) {
          var A = e,
              H = e;while (H = H.__u) {
            (A = H).base = M;
          }M._component = A, M._componentConstructor = A.constructor;
        }
      }!b || o ? E.unshift(e) : U || (e.componentDidUpdate && e.componentDidUpdate(f, h, S), L.afterUpdate && L.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }V || r || _();
    }
  }function x(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        p = r && e._componentConstructor === t.nodeName,
        s = p,
        u = a(t);while (r && !s && (r = r.__u)) {
      s = r.constructor === t.nodeName;
    }return r && s && (!o || r._component) ? (w(r, u, 3, n, o), e = r.base) : (i && !p && (N(i), e = l = null), r = y(t.nodeName, u, n), e && !r.__b && (r.__b = e, l = null), w(r, u, 1, n, o), e = r.base, l && e !== l && (l._component = null, m(l, !1))), e;
  }function N(e) {
    L.beforeUnmount && L.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? N(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, s(t), B.push(e), v(t)), e.__r && e.__r(null);
  }function k(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function U(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }var S = function S() {},
      L = {},
      T = [],
      M = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      W = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      D = [],
      E = [],
      V = 0,
      A = !1,
      H = !1,
      B = [];t(k.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), o(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), C(this, 2);
    }, render: function render() {} });var F = { h: e, createElement: e, cloneElement: n, Component: k, render: U, rerender: r, options: L }; true ? module.exports = F : self.preact = F;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "FWi5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ./style.css
var style = __webpack_require__("FWi5");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// CONCATENATED MODULE: ./components/loading.js


var _ref = Object(preact_min["h"])(
  "div",
  { className: "content__loading" },
  Object(preact_min["h"])(
    "div",
    { className: "loading--in-progress" },
    Object(preact_min["h"])(
      "h2",
      { className: "header--secondary" },
      "Loading local timeline",
      Object(preact_min["h"])(
        "span",
        { className: "loader__dot" },
        "."
      ),
      Object(preact_min["h"])(
        "span",
        { className: "loader__dot" },
        "."
      ),
      Object(preact_min["h"])(
        "span",
        { className: "loader__dot" },
        "."
      )
    )
  )
);

var LoadingMsg = function LoadingMsg() {
  return _ref;
};

/* harmony default export */ var loading = (LoadingMsg);
// CONCATENATED MODULE: ./components/tootHeader.js


var tootHeader__ref = Object(preact_min["h"])("br", null);

var tootHeader_tootHeader = function tootHeader(props) {
  var _props$message = props.message,
      display_name = _props$message.display_name,
      acct = _props$message.acct,
      avatar_static = _props$message.avatar_static;

  return Object(preact_min["h"])(
    "div",
    { className: "card--toot-header" },
    Object(preact_min["h"])("img", { className: "toot-header__img", src: avatar_static, alt: "Profile" }),
    Object(preact_min["h"])(
      "strong",
      null,
      display_name || acct
    ),
    tootHeader__ref,
    Object(preact_min["h"])(
      "span",
      { className: "account-name" },
      "@",
      acct
    )
  );
};
/* harmony default export */ var components_tootHeader = (tootHeader_tootHeader);
// CONCATENATED MODULE: ./components/tootContent.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var tootContent_TootContent = function (_Component) {
  _inherits(TootContent, _Component);

  function TootContent(props) {
    _classCallCheck(this, TootContent);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state.textHidden = true;
    return _this;
  }

  TootContent.prototype.render = function render(props) {
    var _this2 = this;

    if (props.cwText) {
      return Object(preact_min["h"])(
        'div',
        null,
        Object(preact_min["h"])(
          'div',
          { style: { display: 'inline-block' } },
          props.cwText
        ),
        Object(preact_min["h"])(
          'button',
          {
            type: 'button',
            className: 'button--show-more',
            onClick: function onClick() {
              return _this2.setState({ textHidden: !_this2.state.textHidden });
            }
          },
          'show more'
        ),
        Object(preact_min["h"])('div', {
          style: { display: this.state.textHidden ? 'none' : 'block' },
          dangerouslySetInnerHTML: { __html: props.text }
        })
      );
    }
    return Object(preact_min["h"])('div', { dangerouslySetInnerHTML: { __html: props.text } });
  };

  return TootContent;
}(preact_min["Component"]);

/* harmony default export */ var tootContent = (tootContent_TootContent);
// CONCATENATED MODULE: ./components/tootFooter.js

var tootFooter_TootFooter = function TootFooter(props) {
  return Object(preact_min["h"])(
    "div",
    { style: { color: '#606984' } },
    Object(preact_min["h"])(
      "span",
      { className: "toot-footer__metadata" },
      "\u2BAA",
      props.replyCount
    ),
    Object(preact_min["h"])(
      "span",
      { className: "toot-footer__metadata" },
      "\u2B94",
      props.boostCount
    ),
    Object(preact_min["h"])(
      "span",
      { className: "toot-footer__metadata" },
      "\u2605",
      props.favoriteCount
    )
  );
};

/* harmony default export */ var tootFooter = (tootFooter_TootFooter);
// CONCATENATED MODULE: ./components/tootImage.js

var tootImage_TootImage = function TootImage(props) {
  return Object(preact_min["h"])(
    "div",
    { className: "image__container" },
    Object(preact_min["h"])("img", { src: props.url, alt: props.altText, className: "toot__image" })
  );
};

/* harmony default export */ var tootImage = (tootImage_TootImage);
// CONCATENATED MODULE: ./components/toot.js






var toot__ref = Object(preact_min["h"])('hr', null);

var toot_Toot = function Toot(props) {
  return Object(preact_min["h"])(
    'div',
    null,
    Object(preact_min["h"])(components_tootHeader, { message: props.message.account }),
    Object(preact_min["h"])(tootContent, {
      text: props.message.content,
      cwText: props.message.spoiler_text
    }),
    props.message.media_attachments.map(function (img) {
      return Object(preact_min["h"])(tootImage, {
        url: img.preview_url,
        altText: img.description
      });
    }),
    Object(preact_min["h"])(tootFooter, {
      replyCount: props.message.replies_count,
      boostCount: props.message.reblogs_count,
      favoriteCount: props.message.favourites_count
    }),
    toot__ref
  );
};
/* harmony default export */ var toot = (toot_Toot);
// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var index__ref = Object(preact_min["h"])(
  'div',
  null,
  Object(preact_min["h"])(
    'h1',
    { className: 'header--main', id: 'add-an-instance-h1' },
    'Fosstodon local timeline'
  )
);

var _ref2 = Object(preact_min["h"])(loading, null);

var index_App = function (_Component) {
  index__inherits(App, _Component);

  function App() {
    index__classCallCheck(this, App);

    var _this = index__possibleConstructorReturn(this, _Component.call(this));

    _this.state.loaded = 'false';
    _this.state.messages = [];
    _this.state.idOfLastLoadedToot = '';
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.getLocalTimeline();
  };

  App.prototype.getLocalTimeline = function getLocalTimeline() {
    var xhr = new XMLHttpRequest();
    var url = 'https://fosstodon.org/api/v1/timelines/public?local=true';
    if (this.state.idOfLastLoadedToot) {
      url += '&max_id=' + this.state.idOfLastLoadedToot;
    }

    xhr.open('GET', url, true);
    var context = this;

    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var fullResponse = JSON.parse(xhr.responseText);
        var propertiesToKeep = ['account', 'content', 'created_at', 'favourites_count', 'reblogs_count', 'replies_count', 'media_attachments', 'spoiler_text'];
        var response = [];
        fullResponse.forEach(function (responseObj) {
          var filtered = Object.keys(responseObj).filter(function (key) {
            return propertiesToKeep.includes(key);
          }).reduce(function (obj, key) {
            obj[key] = responseObj[key];
            return obj;
          }, {});
          response.push(filtered);
        });
        context.setState({ messages: context.state.messages.concat(response) });
        context.setState({ idOfLastLoadedToot: fullResponse[fullResponse.length - 1].id });
        context.setState({ loaded: true });
      }
    };
    xhr.send();
  };

  App.prototype.render = function render() {
    var _this2 = this;

    return Object(preact_min["h"])(
      'div',
      { className: 'body__defaults' },
      index__ref,
      Object(preact_min["h"])(
        'div',
        { className: 'results--target-toot' },
        this.state.loaded === true ? this.state.messages.map(function (message) {
          return Object(preact_min["h"])(toot, { message: message });
        }) : _ref2
      ),
      Object(preact_min["h"])(
        'button',
        {
          type: 'button',
          onClick: function onClick() {
            return _this2.getLocalTimeline.call(_this2);
          },
          className: 'button button--good'
        },
        'Load More'
      )
    );
  };

  return App;
}(preact_min["Component"]);
/*


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta property="og:title" content="Mastodon De-Mob"> 
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Mastodon De-Mob">
    <meta name="twitter:image:src" content="https://www.codesections.com/codesections_logo.png"> 
    <meta property="og:type" content="article">
    <meta property="og:url" content="www.codesections.com">
    <meta property="og:site_name" content="CodeSections">
    <meta property="article:section" content="Article Section">
    <meta property="og:image" itemprop="image primaryImageOfPage" content="https://www.codesections.com/codesections_logo_large.png"><meta name="og:description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <meta name="description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <meta name="twitter:description" content="A tool to allow Mastodon users to better protect themselves from harassment">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/manifest.json">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="theme-color" content="#d9d9d9">
    <link rel="canonical" href="https://mastodon-de-mob.codesections.com">
    <title>
Fosstodon local timeline
    </title>
  <body lang="en" class="body__defaults">
    <h1 class="header--main" id="add-an-instance-h1">
      Fosstodon local timeline
    </h1>
    <noscript>
      <div class="alert alert__warning">
        <strong class="header--alert">JavaScript Required</strong>
        <p class="paragraph--alert">Ok, yes, I know you probably have 
        JavaScript disabled for good reasons—I also value my privacy and
        don't like the bloat of the modern web.  But look, this app is
        neither bloated nor spying on you.  If you don't believe me, check
        out the <a class="link" href="https://github.com/codesections/mastodon-de-mob">source</a>. 
        In fact, just read the source for this page—I didn't even minify 
        anything or take out the comments.  You can see for yourself that
        there aren't any trackers; just simple http requests to your mastodon
        instance.  This is one to add to your whitelist.
        </p>
      </div>
    </noscript>

    <div class="content__login">
    </div>
    
    
      <div class="alert alert__error error--toot-not-found">
        <strong>Error</strong>: Could not find toot.  Please check the URL and try again.
      </div>

    <div class="alert alert__error error--unknown">
        <strong class="header--alert">Sever error</strong>
        <p>
          Something went wrong.  Sorry about that!
        </p>
    </div> 
    
    <div class="content__results">
      <h2 class="header--secondary">
      </h2>
      <div class="results--target-toot">
      </div>
      <button class="button button--good button--block-all">Next</button>
    </div>
    <script src="main.js"></script>
  </body>
</html>
*/




/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map