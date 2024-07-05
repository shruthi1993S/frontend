import {
  require_react
} from "./chunk-W4EHDCLL.js";
import {
  __commonJS
} from "./chunk-EWTE5DHJ.js";

// node_modules/animated-number-react/build/index.js
var require_build = __commonJS({
  "node_modules/animated-number-react/build/index.js"(exports, module) {
    !function(n, e) {
      if ("object" === typeof exports && "object" === typeof module) module.exports = e(require_react());
      else if ("function" === typeof define && define.amd) define(["react"], e);
      else {
        var t = e("object" === typeof exports ? require_react() : n.react);
        for (var r in t) ("object" === typeof exports ? exports : n)[r] = t[r];
      }
    }(exports, function(n) {
      return function(n2) {
        function e(r) {
          if (t[r]) return t[r].exports;
          var a = t[r] = { i: r, l: false, exports: {} };
          return n2[r].call(a.exports, a, a.exports, e), a.l = true, a.exports;
        }
        var t = {};
        return e.m = n2, e.c = t, e.d = function(n3, t2, r) {
          e.o(n3, t2) || Object.defineProperty(n3, t2, { configurable: false, enumerable: true, get: r });
        }, e.n = function(n3) {
          var t2 = n3 && n3.__esModule ? function() {
            return n3.default;
          } : function() {
            return n3;
          };
          return e.d(t2, "a", t2), t2;
        }, e.o = function(n3, e2) {
          return Object.prototype.hasOwnProperty.call(n3, e2);
        }, e.p = "", e(e.s = 0);
      }([function(n2, e, t) {
        n2.exports = t(1);
      }, function(n2, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: true });
        var r = t(2);
        e.default = r.a;
      }, function(n2, e, t) {
        "use strict";
        function r(n3, e2) {
          if (!(n3 instanceof e2)) throw new TypeError("Cannot call a class as a function");
        }
        function a(n3, e2) {
          if (!n3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e2 || "object" !== typeof e2 && "function" !== typeof e2 ? n3 : e2;
        }
        function o(n3, e2) {
          if ("function" !== typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function, not " + typeof e2);
          n3.prototype = Object.create(e2 && e2.prototype, { constructor: { value: n3, enumerable: false, writable: true, configurable: true } }), e2 && (Object.setPrototypeOf ? Object.setPrototypeOf(n3, e2) : n3.__proto__ = e2);
        }
        var u = t(3), i = t.n(u), c = t(4), f = t.n(c), s = t(9), l = t.n(s), p = /* @__PURE__ */ function() {
          function n3(n4, e2) {
            for (var t2 = 0; t2 < e2.length; t2++) {
              var r2 = e2[t2];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(n4, r2.key, r2);
            }
          }
          return function(e2, t2, r2) {
            return t2 && n3(e2.prototype, t2), r2 && n3(e2, r2), e2;
          };
        }(), d = function() {
        }, m = function(n3) {
          function e2() {
            var n4, t2, o2, u2;
            r(this, e2);
            for (var i2 = arguments.length, c2 = Array(i2), f2 = 0; f2 < i2; f2++) c2[f2] = arguments[f2];
            return t2 = o2 = a(this, (n4 = e2.__proto__ || Object.getPrototypeOf(e2)).call.apply(n4, [this].concat(c2))), o2.state = { animatedValue: 0 }, o2.componentDidMount = function() {
              o2.animateValue();
            }, o2.componentDidUpdate = function(n5) {
              n5.value !== o2.props.value && o2.animateValue();
            }, o2.componentWillUnmount = function() {
              o2.stopAnimation();
            }, o2.target = { animatedValue: 0 }, o2.updateValue = function(n5) {
              o2.props.update(n5);
              var e3 = o2.target.animatedValue;
              o2.setState({ animatedValue: e3 });
            }, o2.stopAnimation = function() {
              o2.instance && (o2.instance.pause(), o2.instance.reset(), delete o2.instance);
            }, o2.animateValue = function() {
              o2.stopAnimation();
              var n5 = o2.props, e3 = n5.duration, t3 = n5.begin, r2 = n5.easing, a2 = n5.complete, u3 = n5.run, i3 = n5.delay, c3 = n5.value;
              o2.instance = l()({ targets: o2.target, animatedValue: c3, duration: e3, update: o2.updateValue, easing: r2, begin: t3, complete: a2, run: u3, delay: i3 });
            }, u2 = t2, a(o2, u2);
          }
          return o(e2, n3), p(e2, [{ key: "render", value: function() {
            return i.a.createElement("span", { className: this.props.className }, this.props.formatValue(Number(this.state.animatedValue)));
          } }]), e2;
        }(u.Component);
        m.propTypes = { value: f.a.oneOfType([f.a.number, f.a.string]).isRequired, duration: f.a.number, delay: f.a.number, formatValue: f.a.func, begin: f.a.func, complete: f.a.func, run: f.a.func, update: f.a.func, easing: f.a.string, className: f.a.string }, m.defaultProps = { duration: 1e3, formatValue: function(n3) {
          return n3;
        }, easing: "linear", run: d, complete: d, update: d, begin: d, delay: 0, className: null }, e.a = m;
      }, function(e, t) {
        e.exports = n;
      }, function(n2, e, t) {
        n2.exports = t(5)();
      }, function(n2, e, t) {
        "use strict";
        var r = t(6), a = t(7), o = t(8);
        n2.exports = function() {
          function n3(n4, e3, t3, r2, u, i) {
            i !== o && a(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          }
          function e2() {
            return n3;
          }
          n3.isRequired = n3;
          var t2 = { array: n3, bool: n3, func: n3, number: n3, object: n3, string: n3, symbol: n3, any: n3, arrayOf: e2, element: n3, instanceOf: e2, node: n3, objectOf: e2, oneOf: e2, oneOfType: e2, shape: e2, exact: e2 };
          return t2.checkPropTypes = r, t2.PropTypes = t2, t2;
        };
      }, function(n2, e, t) {
        "use strict";
        function r(n3) {
          return function() {
            return n3;
          };
        }
        var a = function() {
        };
        a.thatReturns = r, a.thatReturnsFalse = r(false), a.thatReturnsTrue = r(true), a.thatReturnsNull = r(null), a.thatReturnsThis = function() {
          return this;
        }, a.thatReturnsArgument = function(n3) {
          return n3;
        }, n2.exports = a;
      }, function(n2, e, t) {
        "use strict";
        function r(n3, e2, t2, r2, o, u, i, c) {
          if (a(e2), !n3) {
            var f;
            if (void 0 === e2) f = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
              var s = [t2, r2, o, u, i, c], l = 0;
              f = new Error(e2.replace(/%s/g, function() {
                return s[l++];
              })), f.name = "Invariant Violation";
            }
            throw f.framesToPop = 1, f;
          }
        }
        var a = function(n3) {
        };
        n2.exports = r;
      }, function(n2, e, t) {
        "use strict";
        n2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, function(n2, e) {
        var t = this;
        !function(e2, r) {
          n2.exports = function() {
            function n3(n4, e4) {
              for (var t2 = n4.length, r3 = arguments.length >= 2 ? arguments[1] : void 0, a2 = [], o2 = 0; o2 < t2; o2 += 1) if (o2 in n4) {
                var u2 = n4[o2];
                e4.call(r3, u2, o2, n4) && a2.push(u2);
              }
              return a2;
            }
            function e3(n4) {
              return n4.reduce(function(n5, t2) {
                return n5.concat(T.arr(t2) ? e3(t2) : t2);
              }, []);
            }
            function r2(n4) {
              return [n4];
            }
            function a(n4) {
              var e4 = {};
              for (var t2 in n4) e4[t2] = n4[t2];
              return e4;
            }
            function o(n4, e4) {
              var t2 = a(n4);
              for (var r3 in n4) t2[r3] = e4.hasOwnProperty(r3) ? e4[r3] : n4[r3];
              return t2;
            }
            function u(n4, e4) {
              var t2 = a(n4);
              for (var r3 in e4) t2[r3] = T.und(n4[r3]) ? e4[r3] : n4[r3];
              return t2;
            }
            function i(n4, e4, t2) {
              return Math.min(Math.max(n4, e4), t2);
            }
            function c(n4, e4) {
              return T.fnc(n4) ? n4(e4.target, e4.id, e4.total) : n4;
            }
            function f(n4, e4) {
              if (null != n4[e4]) return "object";
            }
            function s(n4, e4) {
              return n4[e4] || 0;
            }
            function l(n4) {
              var e4 = /-?\d*\.?\d+/g, t2 = "" + n4;
              return { original: t2, numbers: t2.match(e4) ? t2.match(e4).map(Number) : [0], strings: [] };
            }
            function p(n4) {
              var e4 = r2(n4);
              return e4.map(function(n5, t2) {
                return { target: n5, id: t2, total: e4.length };
              });
            }
            function d(n4, e4) {
              var t2 = a(e4);
              return r2(n4).map(function(n5, t3) {
                var r3 = t3 ? 0 : e4.delay, a2 = { value: n5 };
                return T.und(a2.delay) && (a2.delay = r3), a2;
              }).map(function(n5) {
                return u(n5, t2);
              });
            }
            function m(n4, e4, t2) {
              var r3 = [], a2 = u(n4, e4);
              return Object.keys(t2).forEach(function(n5) {
                a2.hasOwnProperty(n5) || "targets" === n5 || r3.push({ name: n5, offset: a2.offset, tweens: d(t2[n5], e4) });
              }), r3;
            }
            function v(n4, e4) {
              var t2 = {};
              return Object.keys(n4).forEach(function(r3) {
                var a2 = c(n4[r3], e4);
                T.arr(a2) && (a2 = a2.map(function(n5) {
                  return c(n5, e4);
                }), 1 === a2.length && (a2 = a2[0])), t2[r3] = a2;
              }), t2.duration = parseFloat(t2.duration), t2.delay = parseFloat(t2.delay), t2;
            }
            function y(n4, e4) {
              var t2 = void 0;
              return n4.tweens.map(function(r3) {
                var a2 = v(r3, e4), o2 = a2.value, u2 = e4.target[n4.name], c2 = t2 ? t2.to.original : u2, f2 = T.arr(o2) ? o2[0] : c2, s2 = o2;
                return a2.from = l(f2), a2.to = l(s2), a2.start = t2 ? t2.end : n4.offset, a2.end = a2.start + a2.delay + a2.duration, a2.easing = j[a2.easing], a2.elasticity = (1e3 - i(a2.elasticity, 1, 999)) / 1e3, a2.isColor && (a2.round = 1), t2 = a2, a2;
              });
            }
            function h(n4, e4) {
              var t2 = f(n4.target, e4.name);
              if (t2) {
                var r3 = y(e4, n4);
                return { type: t2, property: e4.name, animatable: n4, tweens: r3, duration: r3[r3.length - 1].end, delay: r3[0].delay };
              }
            }
            function g(t2, r3) {
              return n3(e3(t2.map(function(n4) {
                return r3.map(function(e4) {
                  return h(n4, e4);
                });
              })), function(n4) {
                return !T.und(n4);
              });
            }
            function b(n4, e4, t2, r3) {
              var a2 = "delay" === n4;
              return e4.length ? (a2 ? Math.min : Math.max).apply(Math, e4.map(function(e5) {
                return e5[n4];
              })) : a2 ? r3.delay : t2.offset + r3.delay + r3.duration;
            }
            function O(n4) {
              var e4 = o(x, n4), t2 = o(P, n4), r3 = p(n4.targets), a2 = m(e4, t2, n4), i2 = g(r3, a2);
              return u(e4, { children: [], animatables: r3, animations: i2, duration: b("duration", i2, e4, t2), delay: b("delay", i2, e4, t2) });
            }
            function w() {
              function e4() {
                return window.Promise && new Promise(function(n4) {
                  return m2 = n4;
                });
              }
              function t2() {
                y2.reversed = !y2.reversed;
              }
              function r3(n4) {
                return y2.reversed ? y2.duration - n4 : n4;
              }
              function a2(n4) {
                var e5 = y2.children, t3 = e5.length;
                if (n4 >= y2.currentTime) for (var r4 = 0; r4 < t3; r4 += 1) e5[r4].seek(n4);
                else for (var a3 = t3; a3--; ) e5[a3].seek(n4);
              }
              function o2(e5) {
                for (var t3 = 0, r4 = {}, a3 = y2.animations, o3 = a3.length; t3 < o3; ) {
                  var u3 = a3[t3], c3 = u3.animatable, f3 = u3.tweens, s3 = f3.length - 1, l3 = f3[s3];
                  s3 && (l3 = n3(f3, function(n4) {
                    return e5 < n4.end;
                  })[0] || l3);
                  for (var p3 = i(e5 - l3.start - l3.delay, 0, l3.duration) / l3.duration, d3 = isNaN(p3) ? 1 : l3.easing(p3, l3.elasticity), m3 = [], v3 = void 0, h2 = l3.to.numbers.length, g2 = 0; g2 < h2; g2 += 1) {
                    var b2 = void 0, O2 = l3.to.numbers[g2], w2 = l3.from.numbers[g2];
                    b2 = w2 + d3 * (O2 - w2), m3.push(b2);
                  }
                  v3 = m3[0], E[u3.type](c3.target, u3.property, v3, r4, c3.id), u3.currentValue = v3, t3 += 1;
                }
                y2.currentTime = e5, y2.progress = e5 / y2.duration * 100;
              }
              function u2(n4) {
                y2[n4] && y2[n4](y2);
              }
              function c2() {
                y2.remaining && true !== y2.remaining && (y2.remaining -= 1);
              }
              function f2(n4) {
                var i2 = y2.duration, f3 = y2.offset, s3 = f3 + y2.delay, h2 = y2.currentTime, g2 = y2.reversed, b2 = r3(n4);
                y2.children.length && a2(b2), (b2 >= s3 || !i2) && (y2.began || (y2.began = true, u2("begin")), u2("run")), b2 > f3 && b2 < i2 ? o2(b2) : (b2 <= f3 && 0 !== h2 && (o2(0), g2 && c2()), (b2 >= i2 && h2 !== i2 || !i2) && (o2(i2), g2 || c2())), u2("update"), n4 >= i2 && (y2.remaining ? (p2 = l2, "alternate" === y2.direction && t2()) : (y2.pause(), y2.completed || (y2.completed = true, u2("complete"), "Promise" in window && (m2(), v2 = e4()))), d2 = 0);
              }
              var s2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, l2 = void 0, p2 = void 0, d2 = 0, m2 = null, v2 = e4(), y2 = O(s2);
              return y2.reset = function() {
                var n4 = y2.direction, e5 = y2.loop;
                y2.currentTime = 0, y2.progress = 0, y2.paused = true, y2.began = false, y2.completed = false, y2.reversed = "reverse" === n4, y2.remaining = "alternate" === n4 && 1 === e5 ? 2 : e5, o2(0);
                for (var t3 = y2.children.length; t3--; ) y2.children[t3].reset();
              }, y2.tick = function(n4) {
                l2 = n4, p2 || (p2 = l2), f2((d2 + l2 - p2) * w.speed);
              }, y2.seek = function(n4) {
                f2(r3(n4));
              }, y2.pause = function() {
                var n4 = V.indexOf(y2);
                n4 > -1 && V.splice(n4, 1), y2.paused = true;
              }, y2.play = function() {
                y2.paused && (y2.paused = false, p2 = 0, d2 = r3(y2.currentTime), V.push(y2), k || M());
              }, y2.reverse = function() {
                t2(), p2 = 0, d2 = r3(y2.currentTime);
              }, y2.restart = function() {
                y2.pause(), y2.reset(), y2.play();
              }, y2.finished = v2, y2.reset(), y2.autoplay && y2.play(), y2;
            }
            var x = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: true, offset: 0 }, P = { duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 }, T = { arr: function(n4) {
              return Array.isArray(n4);
            }, fnc: function(n4) {
              return "function" === typeof n4;
            }, und: function(n4) {
              return "undefined" === typeof n4;
            } }, _ = function() {
              function n4(n5, e5) {
                return 1 - 3 * e5 + 3 * n5;
              }
              function e4(n5, e5) {
                return 3 * e5 - 6 * n5;
              }
              function t2(n5) {
                return 3 * n5;
              }
              function r3(r4, a3, o3) {
                return ((n4(a3, o3) * r4 + e4(a3, o3)) * r4 + t2(a3)) * r4;
              }
              function a2(n5, e5, t3, a3) {
                if (n5 >= 0 && n5 <= 1 && t3 >= 0 && t3 <= 1) {
                  var i2 = new Float32Array(o2);
                  if (n5 !== e5 || t3 !== a3) for (var c2 = 0; c2 < o2; c2 += 1) i2[c2] = r3(c2 * u2, n5, t3);
                  return function(r4) {
                    return n5 === e5 && t3 === a3 ? r4 : 0 === r4 ? 0 : 1 === r4 ? 1 : void 0;
                  };
                }
              }
              var o2 = 11, u2 = 1 / (o2 - 1);
              return a2;
            }(), j = function() {
              function n4(n5, e5) {
                return 0 === n5 || 1 === n5 ? n5 : -Math.pow(2, 10 * (n5 - 1)) * Math.sin((n5 - 1 - e5 / (2 * Math.PI) * Math.asin(1)) * (2 * Math.PI) / e5);
              }
              var e4 = ["Quad", "Cubic", "Quart", "Quint", "Sine", "Expo", "Circ", "Back", "Elastic"], r3 = { In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], n4], Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function(e5, t2) {
                return 1 - n4(1 - e5, t2);
              }], InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function(e5, t2) {
                return e5 < 0.5 ? n4(2 * e5, t2) / 2 : 1 - n4(-2 * e5 + 2, t2) / 2;
              }] }, a2 = { linear: _(0.25, 0.25, 0.75, 0.75) };
              return Object.keys(r3).forEach(function(n5) {
                r3[n5].forEach(function(r4, o2) {
                  a2["ease" + n5 + e4[o2]] = T.fnc(r4) ? r4 : _.apply(t, r4);
                });
              }), a2;
            }(), E = { css: function(n4, e4, t2) {
              return n4.style[e4] = t2;
            }, attribute: function(n4, e4, t2) {
              return n4.setAttribute(e4, t2);
            }, object: function(n4, e4, t2) {
              return n4[e4] = t2;
            }, transform: function(n4, e4, t2, r3, a2) {
              r3[a2] || (r3[a2] = []), r3[a2].push(e4 + "(" + t2 + ")");
            } }, V = [], k = 0, M = /* @__PURE__ */ function() {
              function n4() {
                k = requestAnimationFrame(e4);
              }
              function e4(e5) {
                var t2 = V.length;
                if (t2) {
                  for (var r3 = 0; r3 < t2; ) V[r3] && V[r3].tick(e5), r3 += 1;
                  n4();
                } else cancelAnimationFrame(k), k = 0;
              }
              return n4;
            }();
            return w.speed = 1, w.running = V, w.getValue = s, w.bezier = _, w.easings = j, w;
          }();
        }();
      }]);
    });
  }
});
export default require_build();
//# sourceMappingURL=animated-number-react.js.map
