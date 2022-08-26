/*! For license information please see index.js.LICENSE.txt */
var e = {
    767: (e) => {
      var r = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        n = Object.prototype.propertyIsEnumerable;
      function o(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var r = {}, t = 0; t < 10; t++)
            r["_" + String.fromCharCode(t)] = t;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(r)
              .map(function (e) {
                return r[e];
              })
              .join("")
          )
            return !1;
          var n = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              n[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, n)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, u) {
            for (var a, i, f = o(e), c = 1; c < arguments.length; c++) {
              for (var l in (a = Object(arguments[c])))
                t.call(a, l) && (f[l] = a[l]);
              if (r) {
                i = r(a);
                for (var s = 0; s < i.length; s++)
                  n.call(a, i[s]) && (f[i[s]] = a[i[s]]);
              }
            }
            return f;
          };
    },
    945: (e, r, t) => {
      t(767);
      var n = t(496),
        o = 60103;
      if ("function" == typeof Symbol && Symbol.for) {
        var u = Symbol.for;
        (o = u("react.element")), u("react.fragment");
      }
      var a =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = Object.prototype.hasOwnProperty,
        f = { key: !0, ref: !0, __self: !0, __source: !0 };
      r.jsx = function (e, r, t) {
        var n,
          u = {},
          c = null,
          l = null;
        for (n in (void 0 !== t && (c = "" + t),
        void 0 !== r.key && (c = "" + r.key),
        void 0 !== r.ref && (l = r.ref),
        r))
          i.call(r, n) && !f.hasOwnProperty(n) && (u[n] = r[n]);
        if (e && e.defaultProps)
          for (n in (r = e.defaultProps)) void 0 === u[n] && (u[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: c,
          ref: l,
          props: u,
          _owner: a.current,
        };
      };
    },
    288: (e, r, t) => {
      var n = t(767),
        o = 60103,
        u = 60106;
      (r.Fragment = 60107), (r.StrictMode = 60108), (r.Profiler = 60114);
      var a = 60109,
        i = 60110,
        f = 60112;
      r.Suspense = 60113;
      var c = 60115,
        l = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var s = Symbol.for;
        (o = s("react.element")),
          (u = s("react.portal")),
          (r.Fragment = s("react.fragment")),
          (r.StrictMode = s("react.strict_mode")),
          (r.Profiler = s("react.profiler")),
          (a = s("react.provider")),
          (i = s("react.context")),
          (f = s("react.forward_ref")),
          (r.Suspense = s("react.suspense")),
          (c = s("react.memo")),
          (l = s("react.lazy"));
      }
      var p = "function" == typeof Symbol && Symbol.iterator;
      function y(e) {
        for (
          var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            t = 1;
          t < arguments.length;
          t++
        )
          r += "&args[]=" + encodeURIComponent(arguments[t]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          r +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var d = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        v = {};
      function h(e, r, t) {
        (this.props = e),
          (this.context = r),
          (this.refs = v),
          (this.updater = t || d);
      }
      function _() {}
      function m(e, r, t) {
        (this.props = e),
          (this.context = r),
          (this.refs = v),
          (this.updater = t || d);
      }
      (h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (e, r) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(y(85));
          this.updater.enqueueSetState(this, e, r, "setState");
        }),
        (h.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (_.prototype = h.prototype);
      var b = (m.prototype = new _());
      (b.constructor = m), n(b, h.prototype), (b.isPureReactComponent = !0);
      var O = { current: null },
        g = Object.prototype.hasOwnProperty,
        w = { key: !0, ref: !0, __self: !0, __source: !0 };
      function j(e, r, t) {
        var n,
          u = {},
          a = null,
          i = null;
        if (null != r)
          for (n in (void 0 !== r.ref && (i = r.ref),
          void 0 !== r.key && (a = "" + r.key),
          r))
            g.call(r, n) && !w.hasOwnProperty(n) && (u[n] = r[n]);
        var f = arguments.length - 2;
        if (1 === f) u.children = t;
        else if (1 < f) {
          for (var c = Array(f), l = 0; l < f; l++) c[l] = arguments[l + 2];
          u.children = c;
        }
        if (e && e.defaultProps)
          for (n in (f = e.defaultProps)) void 0 === u[n] && (u[n] = f[n]);
        return {
          $$typeof: o,
          type: e,
          key: a,
          ref: i,
          props: u,
          _owner: O.current,
        };
      }
      function S(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o;
      }
      var E = /\/+/g;
      function k(e, r) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var r = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return r[e];
                })
              );
            })("" + e.key)
          : r.toString(36);
      }
      function $(e, r, t, n, a) {
        var i = typeof e;
        ("undefined" !== i && "boolean" !== i) || (e = null);
        var f = !1;
        if (null === e) f = !0;
        else
          switch (i) {
            case "string":
            case "number":
              f = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case o:
                case u:
                  f = !0;
              }
          }
        if (f)
          return (
            (a = a((f = e))),
            (e = "" === n ? "." + k(f, 0) : n),
            Array.isArray(a)
              ? ((t = ""),
                null != e && (t = e.replace(E, "$&/") + "/"),
                $(a, r, t, "", function (e) {
                  return e;
                }))
              : null != a &&
                (S(a) &&
                  (a = (function (e, r) {
                    return {
                      $$typeof: o,
                      type: e.type,
                      key: r,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    a,
                    t +
                      (!a.key || (f && f.key === a.key)
                        ? ""
                        : ("" + a.key).replace(E, "$&/") + "/") +
                      e
                  )),
                r.push(a)),
            1
          );
        if (((f = 0), (n = "" === n ? "." : n + ":"), Array.isArray(e)))
          for (var c = 0; c < e.length; c++) {
            var l = n + k((i = e[c]), c);
            f += $(i, r, t, l, a);
          }
        else if (
          ((l = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof l)
        )
          for (e = l.call(e), c = 0; !(i = e.next()).done; )
            f += $((i = i.value), r, t, (l = n + k(i, c++)), a);
        else if ("object" === i)
          throw (
            ((r = "" + e),
            Error(
              y(
                31,
                "[object Object]" === r
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : r
              )
            ))
          );
        return f;
      }
      function C(e, r, t) {
        if (null == e) return e;
        var n = [],
          o = 0;
        return (
          $(e, n, "", "", function (e) {
            return r.call(t, e, o++);
          }),
          n
        );
      }
      function R(e) {
        if (-1 === e._status) {
          var r = e._result;
          (r = r()),
            (e._status = 0),
            (e._result = r),
            r.then(
              function (r) {
                0 === e._status &&
                  ((r = r.default), (e._status = 1), (e._result = r));
              },
              function (r) {
                0 === e._status && ((e._status = 2), (e._result = r));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var P = { current: null };
      function x() {
        var e = P.current;
        if (null === e) throw Error(y(321));
        return e;
      }
      var I = {
        ReactCurrentDispatcher: P,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: O,
        IsSomeRendererActing: { current: !1 },
        assign: n,
      };
      (r.Children = {
        map: C,
        forEach: function (e, r, t) {
          C(
            e,
            function () {
              r.apply(this, arguments);
            },
            t
          );
        },
        count: function (e) {
          var r = 0;
          return (
            C(e, function () {
              r++;
            }),
            r
          );
        },
        toArray: function (e) {
          return (
            C(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!S(e)) throw Error(y(143));
          return e;
        },
      }),
        (r.Component = h),
        (r.PureComponent = m),
        (r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
        (r.cloneElement = function (e, r, t) {
          if (null == e) throw Error(y(267, e));
          var u = n({}, e.props),
            a = e.key,
            i = e.ref,
            f = e._owner;
          if (null != r) {
            if (
              (void 0 !== r.ref && ((i = r.ref), (f = O.current)),
              void 0 !== r.key && (a = "" + r.key),
              e.type && e.type.defaultProps)
            )
              var c = e.type.defaultProps;
            for (l in r)
              g.call(r, l) &&
                !w.hasOwnProperty(l) &&
                (u[l] = void 0 === r[l] && void 0 !== c ? c[l] : r[l]);
          }
          var l = arguments.length - 2;
          if (1 === l) u.children = t;
          else if (1 < l) {
            c = Array(l);
            for (var s = 0; s < l; s++) c[s] = arguments[s + 2];
            u.children = c;
          }
          return {
            $$typeof: o,
            type: e.type,
            key: a,
            ref: i,
            props: u,
            _owner: f,
          };
        }),
        (r.createContext = function (e, r) {
          return (
            void 0 === r && (r = null),
            ((e = {
              $$typeof: i,
              _calculateChangedBits: r,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: a, _context: e }),
            (e.Consumer = e)
          );
        }),
        (r.createElement = j),
        (r.createFactory = function (e) {
          var r = j.bind(null, e);
          return (r.type = e), r;
        }),
        (r.createRef = function () {
          return { current: null };
        }),
        (r.forwardRef = function (e) {
          return { $$typeof: f, render: e };
        }),
        (r.isValidElement = S),
        (r.lazy = function (e) {
          return {
            $$typeof: l,
            _payload: { _status: -1, _result: e },
            _init: R,
          };
        }),
        (r.memo = function (e, r) {
          return { $$typeof: c, type: e, compare: void 0 === r ? null : r };
        }),
        (r.useCallback = function (e, r) {
          return x().useCallback(e, r);
        }),
        (r.useContext = function (e, r) {
          return x().useContext(e, r);
        }),
        (r.useDebugValue = function () {}),
        (r.useEffect = function (e, r) {
          return x().useEffect(e, r);
        }),
        (r.useImperativeHandle = function (e, r, t) {
          return x().useImperativeHandle(e, r, t);
        }),
        (r.useLayoutEffect = function (e, r) {
          return x().useLayoutEffect(e, r);
        }),
        (r.useMemo = function (e, r) {
          return x().useMemo(e, r);
        }),
        (r.useReducer = function (e, r, t) {
          return x().useReducer(e, r, t);
        }),
        (r.useRef = function (e) {
          return x().useRef(e);
        }),
        (r.useState = function (e) {
          return x().useState(e);
        }),
        (r.version = "17.0.2");
    },
    496: (e, r, t) => {
      e.exports = t(288);
    },
    637: (e, r, t) => {
      e.exports = t(945);
    },
  },
  r = {};
function t(n) {
  var o = r[n];
  if (void 0 !== o) return o.exports;
  var u = (r[n] = { exports: {} });
  return e[n](u, u.exports, t), u.exports;
}
(t.d = (e, r) => {
  for (var n in r)
    t.o(r, n) &&
      !t.o(e, n) &&
      Object.defineProperty(e, n, { enumerable: !0, get: r[n] });
}),
  (t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r));
var n = {};
(() => {
  t.d(n, { Q: () => r });
  var e = t(637);
  const r = function () {
    return (0, e.jsx)("div", { children: "xiaochen" });
  };
})();
var o = n.Q;
export { o as Foo };
