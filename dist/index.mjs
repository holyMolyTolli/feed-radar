import { jsx as c, Fragment as xt, jsxs as g } from "react/jsx-runtime";
import * as u from "react";
import vt, { forwardRef as kt, createElement as Re, useState as Ie } from "react";
import "react-dom";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nt = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ct = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), z = (e, t) => {
  const r = kt(
    ({
      color: n = "currentColor",
      size: a = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: i,
      className: s = "",
      children: l,
      ...d
    }, m) => Re(
      "svg",
      {
        ref: m,
        ...Nt,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: i ? Number(o) * 24 / Number(a) : o,
        className: ["lucide", `lucide-${Ct(e)}`, s].join(" "),
        ...d
      },
      [
        ...t.map(([p, b]) => Re(p, b)),
        ...Array.isArray(l) ? l : [l]
      ]
    )
  );
  return r.displayName = `${e}`, r;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mt = z("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const St = z("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pt = z("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rt = z("Link", [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tt = z("PlusCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Te = z("Radar", [
  ["path", { d: "M19.07 4.93A10 10 0 0 0 6.99 3.34", key: "z3du51" }],
  ["path", { d: "M4 6h.01", key: "oypzma" }],
  ["path", { d: "M2.29 9.62A10 10 0 1 0 21.31 8.35", key: "qzzz0" }],
  ["path", { d: "M16.24 7.76A6 6 0 1 0 8.23 16.67", key: "1yjesh" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M17.99 11.66A6 6 0 0 1 15.77 16.67", key: "1u2y91" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
  ["path", { d: "m13.41 10.59 5.66-5.66", key: "mhq4k0" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ot = z("Save", [
  ["path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z", key: "1owoqh" }],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }]
]);
function At(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Et(...e) {
  return (t) => e.forEach((r) => At(r, t));
}
var be = u.forwardRef((e, t) => {
  const { children: r, ...n } = e, a = u.Children.toArray(r), o = a.find(Dt);
  if (o) {
    const i = o.props.children, s = a.map((l) => l === o ? u.Children.count(i) > 1 ? u.Children.only(null) : u.isValidElement(i) ? i.props.children : null : l);
    return /* @__PURE__ */ c(me, { ...n, ref: t, children: u.isValidElement(i) ? u.cloneElement(i, void 0, s) : null });
  }
  return /* @__PURE__ */ c(me, { ...n, ref: t, children: r });
});
be.displayName = "Slot";
var me = u.forwardRef((e, t) => {
  const { children: r, ...n } = e;
  if (u.isValidElement(r)) {
    const a = jt(r);
    return u.cloneElement(r, {
      ...Lt(n, r.props),
      // @ts-ignore
      ref: t ? Et(t, a) : a
    });
  }
  return u.Children.count(r) > 1 ? u.Children.only(null) : null;
});
me.displayName = "SlotClone";
var Wt = ({ children: e }) => /* @__PURE__ */ c(xt, { children: e });
function Dt(e) {
  return u.isValidElement(e) && e.type === Wt;
}
function Lt(e, t) {
  const r = { ...t };
  for (const n in t) {
    const a = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...s) => {
      o(...s), a(...s);
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...o } : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function jt(e) {
  var n, a;
  let t = (n = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : n.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = (a = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : a.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
function _e(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (r = _e(e[t])) && (n && (n += " "), n += r);
  else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function Ft() {
  for (var e, t, r = 0, n = ""; r < arguments.length; ) (e = arguments[r++]) && (t = _e(e)) && (n && (n += " "), n += t);
  return n;
}
const Oe = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ae = Ft, ye = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null) return Ae(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: a, defaultVariants: o } = t, i = Object.keys(a).map((d) => {
    const m = r == null ? void 0 : r[d], p = o == null ? void 0 : o[d];
    if (m === null) return null;
    const b = Oe(m) || Oe(p);
    return a[d][b];
  }), s = r && Object.entries(r).reduce((d, m) => {
    let [p, b] = m;
    return b === void 0 || (d[p] = b), d;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((d, m) => {
    let { class: p, className: b, ...C } = m;
    return Object.entries(C).every((y) => {
      let [h, w] = y;
      return Array.isArray(w) ? w.includes({
        ...o,
        ...s
      }[h]) : {
        ...o,
        ...s
      }[h] === w;
    }) ? [
      ...d,
      p,
      b
    ] : d;
  }, []);
  return Ae(e, i, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function Ge(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = Ge(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Yt() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = Ge(e)) && (n && (n += " "), n += t);
  return n;
}
const we = "-", zt = (e) => {
  const t = It(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  return {
    getClassGroupId: (i) => {
      const s = i.split(we);
      return s[0] === "" && s.length !== 1 && s.shift(), Ve(s, t) || qt(i);
    },
    getConflictingClassGroupIds: (i, s) => {
      const l = r[i] || [];
      return s && n[i] ? [...l, ...n[i]] : l;
    }
  };
}, Ve = (e, t) => {
  var i;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), a = n ? Ve(e.slice(1), n) : void 0;
  if (a)
    return a;
  if (t.validators.length === 0)
    return;
  const o = e.join(we);
  return (i = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : i.classGroupId;
}, Ee = /^\[(.+)\]$/, qt = (e) => {
  if (Ee.test(e)) {
    const t = Ee.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}, It = (e) => {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Gt(Object.entries(e.classGroups), r).forEach(([o, i]) => {
    fe(i, n, o, t);
  }), n;
}, fe = (e, t, r, n) => {
  e.forEach((a) => {
    if (typeof a == "string") {
      const o = a === "" ? t : We(t, a);
      o.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (_t(a)) {
        fe(a(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(([o, i]) => {
      fe(i, We(t, o), r, n);
    });
  });
}, We = (e, t) => {
  let r = e;
  return t.split(we).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}, _t = (e) => e.isThemeGetter, Gt = (e, t) => t ? e.map(([r, n]) => {
  const a = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([i, s]) => [t + i, s])) : o);
  return [r, a];
}) : e, Vt = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  const a = (o, i) => {
    r.set(o, i), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  };
  return {
    get(o) {
      let i = r.get(o);
      if (i !== void 0)
        return i;
      if ((i = n.get(o)) !== void 0)
        return a(o, i), i;
    },
    set(o, i) {
      r.has(o) ? r.set(o, i) : a(o, i);
    }
  };
}, He = "!", Ht = (e) => {
  const {
    separator: t,
    experimentalParseClassName: r
  } = e, n = t.length === 1, a = t[0], o = t.length, i = (s) => {
    const l = [];
    let d = 0, m = 0, p;
    for (let w = 0; w < s.length; w++) {
      let M = s[w];
      if (d === 0) {
        if (M === a && (n || s.slice(w, w + o) === t)) {
          l.push(s.slice(m, w)), m = w + o;
          continue;
        }
        if (M === "/") {
          p = w;
          continue;
        }
      }
      M === "[" ? d++ : M === "]" && d--;
    }
    const b = l.length === 0 ? s : s.substring(m), C = b.startsWith(He), y = C ? b.substring(1) : b, h = p && p > m ? p - m : void 0;
    return {
      modifiers: l,
      hasImportantModifier: C,
      baseClassName: y,
      maybePostfixModifierPosition: h
    };
  };
  return r ? (s) => r({
    className: s,
    parseClassName: i
  }) : i;
}, $t = (e) => {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}, Bt = (e) => ({
  cache: Vt(e.cacheSize),
  parseClassName: Ht(e),
  ...zt(e)
}), Qt = /\s+/, Xt = (e, t) => {
  const {
    parseClassName: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: a
  } = t, o = [], i = e.trim().split(Qt);
  let s = "";
  for (let l = i.length - 1; l >= 0; l -= 1) {
    const d = i[l], {
      modifiers: m,
      hasImportantModifier: p,
      baseClassName: b,
      maybePostfixModifierPosition: C
    } = r(d);
    let y = !!C, h = n(y ? b.substring(0, C) : b);
    if (!h) {
      if (!y) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      if (h = n(b), !h) {
        s = d + (s.length > 0 ? " " + s : s);
        continue;
      }
      y = !1;
    }
    const w = $t(m).join(":"), M = p ? w + He : w, S = M + h;
    if (o.includes(S))
      continue;
    o.push(S);
    const G = a(h, y);
    for (let W = 0; W < G.length; ++W) {
      const K = G[W];
      o.push(M + K);
    }
    s = d + (s.length > 0 ? " " + s : s);
  }
  return s;
};
function Ut() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = $e(t)) && (n && (n += " "), n += r);
  return n;
}
const $e = (e) => {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = $e(e[n])) && (r && (r += " "), r += t);
  return r;
};
function Jt(e, ...t) {
  let r, n, a, o = i;
  function i(l) {
    const d = t.reduce((m, p) => p(m), e());
    return r = Bt(d), n = r.cache.get, a = r.cache.set, o = s, s(l);
  }
  function s(l) {
    const d = n(l);
    if (d)
      return d;
    const m = Xt(l, r);
    return a(l, m), m;
  }
  return function() {
    return o(Ut.apply(null, arguments));
  };
}
const v = (e) => {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}, Be = /^\[(?:([a-z-]+):)?(.+)\]$/i, Kt = /^\d+\/\d+$/, Zt = /* @__PURE__ */ new Set(["px", "full", "screen"]), er = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, tr = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, rr = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, nr = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ar = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, T = (e) => I(e) || Zt.has(e) || Kt.test(e), O = (e) => _(e, "length", mr), I = (e) => !!e && !Number.isNaN(Number(e)), de = (e) => _(e, "number", I), H = (e) => !!e && Number.isInteger(Number(e)), or = (e) => e.endsWith("%") && I(e.slice(0, -1)), f = (e) => Be.test(e), A = (e) => er.test(e), sr = /* @__PURE__ */ new Set(["length", "size", "percentage"]), ir = (e) => _(e, sr, Qe), cr = (e) => _(e, "position", Qe), lr = /* @__PURE__ */ new Set(["image", "url"]), dr = (e) => _(e, lr, hr), ur = (e) => _(e, "", fr), $ = () => !0, _ = (e, t, r) => {
  const n = Be.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}, mr = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  tr.test(e) && !rr.test(e)
), Qe = () => !1, fr = (e) => nr.test(e), hr = (e) => ar.test(e), gr = () => {
  const e = v("colors"), t = v("spacing"), r = v("blur"), n = v("brightness"), a = v("borderColor"), o = v("borderRadius"), i = v("borderSpacing"), s = v("borderWidth"), l = v("contrast"), d = v("grayscale"), m = v("hueRotate"), p = v("invert"), b = v("gap"), C = v("gradientColorStops"), y = v("gradientColorStopPositions"), h = v("inset"), w = v("margin"), M = v("opacity"), S = v("padding"), G = v("saturate"), W = v("scale"), K = v("sepia"), ve = v("skew"), ke = v("space"), Ne = v("translate"), se = () => ["auto", "contain", "none"], ie = () => ["auto", "hidden", "clip", "visible", "scroll"], ce = () => ["auto", f, t], k = () => [f, t], Ce = () => ["", T, O], Z = () => ["auto", I, f], Me = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ee = () => ["solid", "dashed", "dotted", "double", "none"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], le = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], V = () => ["", "0", f], Pe = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], R = () => [I, f];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [$],
      spacing: [T, O],
      blur: ["none", "", A, f],
      brightness: R(),
      borderColor: [e],
      borderRadius: ["none", "", "full", A, f],
      borderSpacing: k(),
      borderWidth: Ce(),
      contrast: R(),
      grayscale: V(),
      hueRotate: R(),
      invert: V(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [or, O],
      inset: ce(),
      margin: ce(),
      opacity: R(),
      padding: k(),
      saturate: R(),
      scale: R(),
      sepia: V(),
      skew: R(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", f]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [A]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Pe()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Pe()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Me(), f]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ie()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ie()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ie()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: se()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": se()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": se()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [h]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [h]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [h]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [h]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [h]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [h]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [h]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [h]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [h]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", H, f]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ce()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", f]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: V()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: V()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", H, f]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [$]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", H, f]
        }, f]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [$]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [H, f]
        }, f]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", f]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [b]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [b]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [b]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...le()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...le(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...le(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [ke]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [ke]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", f, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [f, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [f, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [A]
        }, A]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [f, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [f, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [f, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", A, O]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", de]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [$]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", f]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", I, de]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", T, f]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", f]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", f]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [M]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [M]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ee(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", T, O]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", T, f]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", f]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", f]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [M]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Me(), cr]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ir]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, dr]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [C]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [M]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ee(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [M]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ee()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [a]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...ee()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [T, f]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [T, O]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Ce()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [M]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [T, O]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", A, ur]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [$]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Se(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", A, f]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [d]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [m]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [G]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [K]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [d]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [m]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [G]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [K]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", f]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: R()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", f]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: R()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", f]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [W]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [W]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [W]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [H, f]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [Ne]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [Ne]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ve]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ve]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", f]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", f]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", f]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [T, O, de]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, pr = /* @__PURE__ */ Jt(gr);
function N(...e) {
  return pr(Yt(e));
}
const br = ye(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), U = u.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...a }, o) => /* @__PURE__ */ c(
    n ? be : "button",
    {
      className: N(br({ variant: t, size: r, className: e })),
      ref: o,
      ...a
    }
  )
);
U.displayName = "Button";
const te = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "div",
  {
    ref: r,
    className: N(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
te.displayName = "Card";
const Xe = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "div",
  {
    ref: r,
    className: N("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Xe.displayName = "CardHeader";
const yr = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "h3",
  {
    ref: r,
    className: N(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
yr.displayName = "CardTitle";
const he = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "p",
  {
    ref: r,
    className: N("text-sm text-muted-foreground", e),
    ...t
  }
));
he.displayName = "CardDescription";
const re = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("div", { ref: r, className: N("p-6 pt-0", e), ...t }));
re.displayName = "CardContent";
const Ue = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "div",
  {
    ref: r,
    className: N("flex items-center p-6 pt-0", e),
    ...t
  }
));
Ue.displayName = "CardFooter";
const wr = ye(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function De({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ c("div", { className: N(wr({ variant: t }), e), ...r });
}
function _n({ radars: e, onSelect: t, onCreate: r }) {
  const n = (a) => {
    var o;
    return ((o = a.runs) == null ? void 0 : o.reduce((i, s) => i + s.results.length, 0)) || 0;
  };
  return /* @__PURE__ */ g("div", { className: "w-full max-w-4xl mx-auto", children: [
    /* @__PURE__ */ g("div", { className: "flex justify-between items-center mb-8", children: [
      /* @__PURE__ */ c("h1", { className: "text-3xl font-bold text-foreground", children: "Your Radars" }),
      /* @__PURE__ */ g(U, { onClick: r, children: [
        /* @__PURE__ */ c(Tt, { className: "w-5 h-5 mr-2" }),
        "New Radar"
      ] })
    ] }),
    e.length === 0 ? /* @__PURE__ */ c(te, { className: "w-full", children: /* @__PURE__ */ g(re, { className: "flex flex-col items-center justify-center py-16", children: [
      /* @__PURE__ */ c(Te, { className: "w-12 h-12 text-muted-foreground mb-4" }),
      /* @__PURE__ */ c("h3", { className: "text-lg font-medium text-foreground mb-2", children: "No radars yet" }),
      /* @__PURE__ */ c(he, { className: "mb-4", children: "Create your first radar to start monitoring LinkedIn feeds" }),
      /* @__PURE__ */ c(U, { variant: "outline", onClick: r, children: "Create a radar" })
    ] }) }) : /* @__PURE__ */ c("div", { className: "grid gap-4 md:grid-cols-2", children: e.map((a) => {
      var o;
      return /* @__PURE__ */ g(
        te,
        {
          onClick: () => t(a.id),
          className: "cursor-pointer hover:border-primary transition-colors",
          children: [
            /* @__PURE__ */ c(Xe, { className: "flex flex-row items-start justify-between space-y-0", children: /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ c(Te, { className: "w-6 h-6 text-primary" }),
              /* @__PURE__ */ g("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ g(De, { variant: "secondary", children: [
                  ((o = a.runs) == null ? void 0 : o.length) || 0,
                  " runs"
                ] }),
                /* @__PURE__ */ g(De, { variant: "outline", children: [
                  n(a),
                  " results"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ g(re, { children: [
              /* @__PURE__ */ c("h3", { className: "font-medium text-card-foreground mb-2 line-clamp-2", children: a.description }),
              /* @__PURE__ */ c(he, { className: "line-clamp-3", children: a.context || "No additional context provided" })
            ] })
          ]
        },
        a.id
      );
    }) })
  ] });
}
const ge = u.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ c(
    "input",
    {
      type: t,
      className: N(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
ge.displayName = "Input";
const X = u.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ c(
    "textarea",
    {
      className: N(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: r,
      ...t
    }
  )
);
X.displayName = "Textarea";
var xr = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], ae = xr.reduce((e, t) => {
  const r = u.forwardRef((n, a) => {
    const { asChild: o, ...i } = n, s = o ? be : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ c(s, { ...i, ref: a });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {}), vr = "Label", Je = u.forwardRef((e, t) => /* @__PURE__ */ c(
  ae.label,
  {
    ...e,
    ref: t,
    onMouseDown: (r) => {
      var a;
      r.target.closest("button, input, select, textarea") || ((a = e.onMouseDown) == null || a.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault());
    }
  }
));
Je.displayName = vr;
var Ke = Je;
const kr = ye(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), D = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  Ke,
  {
    ref: r,
    className: N(kr(), e),
    ...t
  }
));
D.displayName = Ke.displayName;
function Nr({ data: e, onSubmit: t, onBack: r }) {
  const [n, a] = Ie(e), o = (l) => {
    l.preventDefault(), s(n) && t(n);
  }, i = (l) => {
    a((d) => ({
      ...d,
      [l.target.name]: l.target.value
    }));
  }, s = (l) => !!(l.linkedinCookie && l.description && l.exclusionCriteria && l.inclusionCriteria && l.notificationEmail);
  return /* @__PURE__ */ g("div", { className: "w-full max-w-4xl mx-auto", children: [
    /* @__PURE__ */ g("div", { className: "flex items-center gap-4 mb-8", children: [
      /* @__PURE__ */ c(U, { variant: "ghost", size: "icon", onClick: r, children: /* @__PURE__ */ c(Mt, { className: "w-5 h-5" }) }),
      /* @__PURE__ */ c("h1", { className: "text-3xl font-bold text-foreground", children: e.linkedinCookie ? "Edit Radar" : "New Radar" })
    ] }),
    /* @__PURE__ */ c(te, { children: /* @__PURE__ */ g("form", { onSubmit: o, children: [
      /* @__PURE__ */ g(re, { className: "space-y-6 pt-6", children: [
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "linkedinCookie", children: "LinkedIn Cookie" }),
          /* @__PURE__ */ c(
            ge,
            {
              id: "linkedinCookie",
              name: "linkedinCookie",
              value: n.linkedinCookie || "",
              onChange: i,
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "notificationEmail", children: "Notification Email" }),
          /* @__PURE__ */ c(
            ge,
            {
              id: "notificationEmail",
              name: "notificationEmail",
              type: "email",
              placeholder: "email@example.com",
              value: n.notificationEmail || "",
              onChange: i,
              required: !0
            }
          ),
          /* @__PURE__ */ c("p", { className: "text-sm text-muted-foreground", children: "You'll receive notifications at this email when matching posts are found" })
        ] }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "description", children: "Description" }),
          /* @__PURE__ */ c(
            X,
            {
              id: "description",
              name: "description",
              value: n.description || "",
              onChange: i,
              rows: 3,
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "exclusionCriteria", children: "Exclusion Criteria" }),
          /* @__PURE__ */ c(
            X,
            {
              id: "exclusionCriteria",
              name: "exclusionCriteria",
              value: n.exclusionCriteria || "",
              onChange: i,
              rows: 2,
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "inclusionCriteria", children: "Inclusion Criteria" }),
          /* @__PURE__ */ c(
            X,
            {
              id: "inclusionCriteria",
              name: "inclusionCriteria",
              value: n.inclusionCriteria || "",
              onChange: i,
              rows: 2,
              required: !0
            }
          )
        ] }),
        /* @__PURE__ */ g("div", { className: "space-y-2", children: [
          /* @__PURE__ */ c(D, { htmlFor: "context", children: "Additional Context (Optional)" }),
          /* @__PURE__ */ c(
            X,
            {
              id: "context",
              name: "context",
              value: n.context || "",
              onChange: i,
              rows: 2
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ c(Ue, { className: "justify-end", children: /* @__PURE__ */ g(U, { type: "submit", children: [
        /* @__PURE__ */ c(Ot, { className: "w-5 h-5 mr-2" }),
        "Save Radar"
      ] }) })
    ] }) })
  ] });
}
function Cr({ runs: e }) {
  const [t, r] = vt.useState("recent"), n = [...e].sort(
    (i, s) => new Date(s.timestamp).getTime() - new Date(i.timestamp).getTime()
  ), a = n.slice(0, 5);
  return /* @__PURE__ */ g("div", { className: "mt-8 border-t pt-8", children: [
    /* @__PURE__ */ g("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ c("h2", { className: "text-xl font-semibold text-gray-900", children: "Radar Results" }),
      /* @__PURE__ */ g("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ c(
          "button",
          {
            onClick: () => r("recent"),
            className: `px-4 py-2 rounded-lg ${t === "recent" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`,
            children: "Recent"
          }
        ),
        /* @__PURE__ */ c(
          "button",
          {
            onClick: () => r("all"),
            className: `px-4 py-2 rounded-lg ${t === "all" ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"}`,
            children: "All Results"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ c("div", { className: "space-y-4", children: (t === "recent" ? a : n).map((i) => /* @__PURE__ */ g(
      "div",
      {
        className: "bg-white rounded-lg border border-gray-200 p-4",
        children: [
          /* @__PURE__ */ g("div", { className: "flex items-center gap-2 text-sm text-gray-500 mb-3", children: [
            /* @__PURE__ */ c(St, { className: "w-4 h-4" }),
            /* @__PURE__ */ c("span", { children: new Date(i.timestamp).toLocaleString() })
          ] }),
          /* @__PURE__ */ c("div", { className: "space-y-3", children: i.results.map((s) => /* @__PURE__ */ g(
            "div",
            {
              className: "p-3 bg-gray-50 rounded-md",
              children: [
                /* @__PURE__ */ g("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ c("p", { className: "text-gray-900 flex-grow", children: s.content }),
                  /* @__PURE__ */ c(
                    "a",
                    {
                      href: s.postUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-blue-600 hover:text-blue-700",
                      children: /* @__PURE__ */ c(Rt, { className: "w-5 h-5" })
                    }
                  )
                ] }),
                /* @__PURE__ */ g("div", { className: "mt-2 flex items-center gap-4", children: [
                  /* @__PURE__ */ g("span", { className: "text-sm text-gray-500", children: [
                    "Match score: ",
                    s.matchScore
                  ] }),
                  /* @__PURE__ */ c("span", { className: "text-sm text-gray-500", children: s.matchReason })
                ] })
              ]
            },
            s.id
          )) })
        ]
      },
      i.id
    )) })
  ] });
}
function Gn({ onBackClick: e }) {
  return /* @__PURE__ */ g("div", { className: "text-center py-16", children: [
    /* @__PURE__ */ c("h1", { className: "text-3xl font-bold mb-4", children: "Radar not found" }),
    /* @__PURE__ */ c("p", { className: "text-muted-foreground mb-8", children: "The radar you're looking for doesn't exist." }),
    /* @__PURE__ */ c(
      "button",
      {
        onClick: e,
        className: "text-primary hover:underline",
        children: "Return to dashboard"
      }
    )
  ] });
}
function Vn({ radar: e, onSubmit: t, onBack: r }) {
  return /* @__PURE__ */ g("div", { className: "space-y-8", children: [
    /* @__PURE__ */ c(
      Nr,
      {
        data: e,
        onSubmit: t,
        onBack: r
      }
    ),
    e.runs && e.runs.length > 0 && /* @__PURE__ */ c(Cr, { runs: e.runs })
  ] });
}
function P(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
function Y(e, t) {
  return e instanceof Date ? new e.constructor(t) : new Date(t);
}
const Ze = 6048e5, Mr = 864e5;
let Sr = {};
function oe() {
  return Sr;
}
function J(e, t) {
  var s, l, d, m;
  const r = oe(), n = (t == null ? void 0 : t.weekStartsOn) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.weekStartsOn) ?? r.weekStartsOn ?? ((m = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : m.weekStartsOn) ?? 0, a = P(e), o = a.getDay(), i = (o < n ? 7 : 0) + o - n;
  return a.setDate(a.getDate() - i), a.setHours(0, 0, 0, 0), a;
}
function ne(e) {
  return J(e, { weekStartsOn: 1 });
}
function et(e) {
  const t = P(e), r = t.getFullYear(), n = Y(e, 0);
  n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
  const a = ne(n), o = Y(e, 0);
  o.setFullYear(r, 0, 4), o.setHours(0, 0, 0, 0);
  const i = ne(o);
  return t.getTime() >= a.getTime() ? r + 1 : t.getTime() >= i.getTime() ? r : r - 1;
}
function Le(e) {
  const t = P(e);
  return t.setHours(0, 0, 0, 0), t;
}
function je(e) {
  const t = P(e), r = new Date(
    Date.UTC(
      t.getFullYear(),
      t.getMonth(),
      t.getDate(),
      t.getHours(),
      t.getMinutes(),
      t.getSeconds(),
      t.getMilliseconds()
    )
  );
  return r.setUTCFullYear(t.getFullYear()), +e - +r;
}
function Pr(e, t) {
  const r = Le(e), n = Le(t), a = +r - je(r), o = +n - je(n);
  return Math.round((a - o) / Mr);
}
function Rr(e) {
  const t = et(e), r = Y(e, 0);
  return r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), ne(r);
}
function Tr(e) {
  return e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]";
}
function Or(e) {
  if (!Tr(e) && typeof e != "number")
    return !1;
  const t = P(e);
  return !isNaN(Number(t));
}
function Ar(e) {
  const t = P(e), r = Y(e, 0);
  return r.setFullYear(t.getFullYear(), 0, 1), r.setHours(0, 0, 0, 0), r;
}
const Er = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Wr = (e, t, r) => {
  let n;
  const a = Er[e];
  return typeof a == "string" ? n = a : t === 1 ? n = a.one : n = a.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + n : n + " ago" : n;
};
function ue(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
const Dr = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Lr = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, jr = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fr = {
  date: ue({
    formats: Dr,
    defaultWidth: "full"
  }),
  time: ue({
    formats: Lr,
    defaultWidth: "full"
  }),
  dateTime: ue({
    formats: jr,
    defaultWidth: "full"
  })
}, Yr = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, zr = (e, t, r, n) => Yr[e];
function B(e) {
  return (t, r) => {
    const n = r != null && r.context ? String(r.context) : "standalone";
    let a;
    if (n === "formatting" && e.formattingValues) {
      const i = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : i;
      a = e.formattingValues[s] || e.formattingValues[i];
    } else {
      const i = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      a = e.values[s] || e.values[i];
    }
    const o = e.argumentCallback ? e.argumentCallback(t) : t;
    return a[o];
  };
}
const qr = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Ir = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _r = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Gr = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Vr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Hr = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, $r = (e, t) => {
  const r = Number(e), n = r % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, Br = {
  ordinalNumber: $r,
  era: B({
    values: qr,
    defaultWidth: "wide"
  }),
  quarter: B({
    values: Ir,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: B({
    values: _r,
    defaultWidth: "wide"
  }),
  day: B({
    values: Gr,
    defaultWidth: "wide"
  }),
  dayPeriod: B({
    values: Vr,
    defaultWidth: "wide",
    formattingValues: Hr,
    defaultFormattingWidth: "wide"
  })
};
function Q(e) {
  return (t, r = {}) => {
    const n = r.width, a = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], o = t.match(a);
    if (!o)
      return null;
    const i = o[0], s = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], l = Array.isArray(s) ? Xr(s, (p) => p.test(i)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Qr(s, (p) => p.test(i))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(l) : l, d = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(d)
    ) : d;
    const m = t.slice(i.length);
    return { value: d, rest: m };
  };
}
function Qr(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function Xr(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Ur(e) {
  return (t, r = {}) => {
    const n = t.match(e.matchPattern);
    if (!n) return null;
    const a = n[0], o = t.match(e.parsePattern);
    if (!o) return null;
    let i = e.valueCallback ? e.valueCallback(o[0]) : o[0];
    i = r.valueCallback ? r.valueCallback(i) : i;
    const s = t.slice(a.length);
    return { value: i, rest: s };
  };
}
const Jr = /^(\d+)(th|st|nd|rd)?/i, Kr = /\d+/i, Zr = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, en = {
  any: [/^b/i, /^(a|c)/i]
}, tn = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, rn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nn = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, an = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, on = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, sn = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, cn = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ln = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, dn = {
  ordinalNumber: Ur({
    matchPattern: Jr,
    parsePattern: Kr,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Q({
    matchPatterns: Zr,
    defaultMatchWidth: "wide",
    parsePatterns: en,
    defaultParseWidth: "any"
  }),
  quarter: Q({
    matchPatterns: tn,
    defaultMatchWidth: "wide",
    parsePatterns: rn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Q({
    matchPatterns: nn,
    defaultMatchWidth: "wide",
    parsePatterns: an,
    defaultParseWidth: "any"
  }),
  day: Q({
    matchPatterns: on,
    defaultMatchWidth: "wide",
    parsePatterns: sn,
    defaultParseWidth: "any"
  }),
  dayPeriod: Q({
    matchPatterns: cn,
    defaultMatchWidth: "any",
    parsePatterns: ln,
    defaultParseWidth: "any"
  })
}, un = {
  code: "en-US",
  formatDistance: Wr,
  formatLong: Fr,
  formatRelative: zr,
  localize: Br,
  match: dn,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function mn(e) {
  const t = P(e);
  return Pr(t, Ar(t)) + 1;
}
function fn(e) {
  const t = P(e), r = +ne(t) - +Rr(t);
  return Math.round(r / Ze) + 1;
}
function tt(e, t) {
  var m, p, b, C;
  const r = P(e), n = r.getFullYear(), a = oe(), o = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((p = (m = t == null ? void 0 : t.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? a.firstWeekContainsDate ?? ((C = (b = a.locale) == null ? void 0 : b.options) == null ? void 0 : C.firstWeekContainsDate) ?? 1, i = Y(e, 0);
  i.setFullYear(n + 1, 0, o), i.setHours(0, 0, 0, 0);
  const s = J(i, t), l = Y(e, 0);
  l.setFullYear(n, 0, o), l.setHours(0, 0, 0, 0);
  const d = J(l, t);
  return r.getTime() >= s.getTime() ? n + 1 : r.getTime() >= d.getTime() ? n : n - 1;
}
function hn(e, t) {
  var s, l, d, m;
  const r = oe(), n = (t == null ? void 0 : t.firstWeekContainsDate) ?? ((l = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : l.firstWeekContainsDate) ?? r.firstWeekContainsDate ?? ((m = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : m.firstWeekContainsDate) ?? 1, a = tt(e, t), o = Y(e, 0);
  return o.setFullYear(a, 0, n), o.setHours(0, 0, 0, 0), J(o, t);
}
function gn(e, t) {
  const r = P(e), n = +J(r, t) - +hn(r, t);
  return Math.round(n / Ze) + 1;
}
function x(e, t) {
  const r = e < 0 ? "-" : "", n = Math.abs(e).toString().padStart(t, "0");
  return r + n;
}
const E = {
  // Year
  y(e, t) {
    const r = e.getFullYear(), n = r > 0 ? r : 1 - r;
    return x(t === "yy" ? n % 100 : n, t.length);
  },
  // Month
  M(e, t) {
    const r = e.getMonth();
    return t === "M" ? String(r + 1) : x(r + 1, 2);
  },
  // Day of the month
  d(e, t) {
    return x(e.getDate(), t.length);
  },
  // AM or PM
  a(e, t) {
    const r = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.toUpperCase();
      case "aaa":
        return r;
      case "aaaaa":
        return r[0];
      case "aaaa":
      default:
        return r === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(e, t) {
    return x(e.getHours() % 12 || 12, t.length);
  },
  // Hour [0-23]
  H(e, t) {
    return x(e.getHours(), t.length);
  },
  // Minute
  m(e, t) {
    return x(e.getMinutes(), t.length);
  },
  // Second
  s(e, t) {
    return x(e.getSeconds(), t.length);
  },
  // Fraction of second
  S(e, t) {
    const r = t.length, n = e.getMilliseconds(), a = Math.trunc(
      n * Math.pow(10, r - 3)
    );
    return x(a, t.length);
  }
}, q = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
}, Fe = {
  // Era
  G: function(e, t, r) {
    const n = e.getFullYear() > 0 ? 1 : 0;
    switch (t) {
      case "G":
      case "GG":
      case "GGG":
        return r.era(n, { width: "abbreviated" });
      case "GGGGG":
        return r.era(n, { width: "narrow" });
      case "GGGG":
      default:
        return r.era(n, { width: "wide" });
    }
  },
  // Year
  y: function(e, t, r) {
    if (t === "yo") {
      const n = e.getFullYear(), a = n > 0 ? n : 1 - n;
      return r.ordinalNumber(a, { unit: "year" });
    }
    return E.y(e, t);
  },
  // Local week-numbering year
  Y: function(e, t, r, n) {
    const a = tt(e, n), o = a > 0 ? a : 1 - a;
    if (t === "YY") {
      const i = o % 100;
      return x(i, 2);
    }
    return t === "Yo" ? r.ordinalNumber(o, { unit: "year" }) : x(o, t.length);
  },
  // ISO week-numbering year
  R: function(e, t) {
    const r = et(e);
    return x(r, t.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(e, t) {
    const r = e.getFullYear();
    return x(r, t.length);
  },
  // Quarter
  Q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "Q":
        return String(n);
      case "QQ":
        return x(n, 2);
      case "Qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "QQQ":
        return r.quarter(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return r.quarter(n, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(e, t, r) {
    const n = Math.ceil((e.getMonth() + 1) / 3);
    switch (t) {
      case "q":
        return String(n);
      case "qq":
        return x(n, 2);
      case "qo":
        return r.ordinalNumber(n, { unit: "quarter" });
      case "qqq":
        return r.quarter(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return r.quarter(n, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return r.quarter(n, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "M":
      case "MM":
        return E.M(e, t);
      case "Mo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "MMM":
        return r.month(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return r.month(n, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return r.month(n, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(e, t, r) {
    const n = e.getMonth();
    switch (t) {
      case "L":
        return String(n + 1);
      case "LL":
        return x(n + 1, 2);
      case "Lo":
        return r.ordinalNumber(n + 1, { unit: "month" });
      case "LLL":
        return r.month(n, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return r.month(n, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return r.month(n, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(e, t, r, n) {
    const a = gn(e, n);
    return t === "wo" ? r.ordinalNumber(a, { unit: "week" }) : x(a, t.length);
  },
  // ISO week of year
  I: function(e, t, r) {
    const n = fn(e);
    return t === "Io" ? r.ordinalNumber(n, { unit: "week" }) : x(n, t.length);
  },
  // Day of the month
  d: function(e, t, r) {
    return t === "do" ? r.ordinalNumber(e.getDate(), { unit: "date" }) : E.d(e, t);
  },
  // Day of year
  D: function(e, t, r) {
    const n = mn(e);
    return t === "Do" ? r.ordinalNumber(n, { unit: "dayOfYear" }) : x(n, t.length);
  },
  // Day of week
  E: function(e, t, r) {
    const n = e.getDay();
    switch (t) {
      case "E":
      case "EE":
      case "EEE":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(e, t, r, n) {
    const a = e.getDay(), o = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "e":
        return String(o);
      case "ee":
        return x(o, 2);
      case "eo":
        return r.ordinalNumber(o, { unit: "day" });
      case "eee":
        return r.day(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return r.day(a, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return r.day(a, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return r.day(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(e, t, r, n) {
    const a = e.getDay(), o = (a - n.weekStartsOn + 8) % 7 || 7;
    switch (t) {
      case "c":
        return String(o);
      case "cc":
        return x(o, t.length);
      case "co":
        return r.ordinalNumber(o, { unit: "day" });
      case "ccc":
        return r.day(a, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return r.day(a, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return r.day(a, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return r.day(a, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(e, t, r) {
    const n = e.getDay(), a = n === 0 ? 7 : n;
    switch (t) {
      case "i":
        return String(a);
      case "ii":
        return x(a, t.length);
      case "io":
        return r.ordinalNumber(a, { unit: "day" });
      case "iii":
        return r.day(n, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return r.day(n, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return r.day(n, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return r.day(n, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(e, t, r) {
    const a = e.getHours() / 12 >= 1 ? "pm" : "am";
    switch (t) {
      case "a":
      case "aa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n === 12 ? a = q.noon : n === 0 ? a = q.midnight : a = n / 12 >= 1 ? "pm" : "am", t) {
      case "b":
      case "bb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(e, t, r) {
    const n = e.getHours();
    let a;
    switch (n >= 17 ? a = q.evening : n >= 12 ? a = q.afternoon : n >= 4 ? a = q.morning : a = q.night, t) {
      case "B":
      case "BB":
      case "BBB":
        return r.dayPeriod(a, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return r.dayPeriod(a, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return r.dayPeriod(a, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(e, t, r) {
    if (t === "ho") {
      let n = e.getHours() % 12;
      return n === 0 && (n = 12), r.ordinalNumber(n, { unit: "hour" });
    }
    return E.h(e, t);
  },
  // Hour [0-23]
  H: function(e, t, r) {
    return t === "Ho" ? r.ordinalNumber(e.getHours(), { unit: "hour" }) : E.H(e, t);
  },
  // Hour [0-11]
  K: function(e, t, r) {
    const n = e.getHours() % 12;
    return t === "Ko" ? r.ordinalNumber(n, { unit: "hour" }) : x(n, t.length);
  },
  // Hour [1-24]
  k: function(e, t, r) {
    let n = e.getHours();
    return n === 0 && (n = 24), t === "ko" ? r.ordinalNumber(n, { unit: "hour" }) : x(n, t.length);
  },
  // Minute
  m: function(e, t, r) {
    return t === "mo" ? r.ordinalNumber(e.getMinutes(), { unit: "minute" }) : E.m(e, t);
  },
  // Second
  s: function(e, t, r) {
    return t === "so" ? r.ordinalNumber(e.getSeconds(), { unit: "second" }) : E.s(e, t);
  },
  // Fraction of second
  S: function(e, t) {
    return E.S(e, t);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(e, t, r) {
    const n = e.getTimezoneOffset();
    if (n === 0)
      return "Z";
    switch (t) {
      case "X":
        return ze(n);
      case "XXXX":
      case "XX":
        return L(n);
      case "XXXXX":
      case "XXX":
      default:
        return L(n, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "x":
        return ze(n);
      case "xxxx":
      case "xx":
        return L(n);
      case "xxxxx":
      case "xxx":
      default:
        return L(n, ":");
    }
  },
  // Timezone (GMT)
  O: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + Ye(n, ":");
      case "OOOO":
      default:
        return "GMT" + L(n, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(e, t, r) {
    const n = e.getTimezoneOffset();
    switch (t) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + Ye(n, ":");
      case "zzzz":
      default:
        return "GMT" + L(n, ":");
    }
  },
  // Seconds timestamp
  t: function(e, t, r) {
    const n = Math.trunc(e.getTime() / 1e3);
    return x(n, t.length);
  },
  // Milliseconds timestamp
  T: function(e, t, r) {
    const n = e.getTime();
    return x(n, t.length);
  }
};
function Ye(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = Math.trunc(n / 60), o = n % 60;
  return o === 0 ? r + String(a) : r + String(a) + t + x(o, 2);
}
function ze(e, t) {
  return e % 60 === 0 ? (e > 0 ? "-" : "+") + x(Math.abs(e) / 60, 2) : L(e, t);
}
function L(e, t = "") {
  const r = e > 0 ? "-" : "+", n = Math.abs(e), a = x(Math.trunc(n / 60), 2), o = x(n % 60, 2);
  return r + a + t + o;
}
const qe = (e, t) => {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    case "PPPP":
    default:
      return t.date({ width: "full" });
  }
}, rt = (e, t) => {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    case "pppp":
    default:
      return t.time({ width: "full" });
  }
}, pn = (e, t) => {
  const r = e.match(/(P+)(p+)?/) || [], n = r[1], a = r[2];
  if (!a)
    return qe(e, t);
  let o;
  switch (n) {
    case "P":
      o = t.dateTime({ width: "short" });
      break;
    case "PP":
      o = t.dateTime({ width: "medium" });
      break;
    case "PPP":
      o = t.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      o = t.dateTime({ width: "full" });
      break;
  }
  return o.replace("{{date}}", qe(n, t)).replace("{{time}}", rt(a, t));
}, bn = {
  p: rt,
  P: pn
}, yn = /^D+$/, wn = /^Y+$/, xn = ["D", "DD", "YY", "YYYY"];
function vn(e) {
  return yn.test(e);
}
function kn(e) {
  return wn.test(e);
}
function Nn(e, t, r) {
  const n = Cn(e, t, r);
  if (console.warn(n), xn.includes(e)) throw new RangeError(n);
}
function Cn(e, t, r) {
  const n = e[0] === "Y" ? "years" : "days of the month";
  return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
const Mn = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, Sn = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, Pn = /^'([^]*?)'?$/, Rn = /''/g, Tn = /[a-zA-Z]/;
function On(e, t, r) {
  var m, p, b, C;
  const n = oe(), a = n.locale ?? un, o = n.firstWeekContainsDate ?? ((p = (m = n.locale) == null ? void 0 : m.options) == null ? void 0 : p.firstWeekContainsDate) ?? 1, i = n.weekStartsOn ?? ((C = (b = n.locale) == null ? void 0 : b.options) == null ? void 0 : C.weekStartsOn) ?? 0, s = P(e);
  if (!Or(s))
    throw new RangeError("Invalid time value");
  let l = t.match(Sn).map((y) => {
    const h = y[0];
    if (h === "p" || h === "P") {
      const w = bn[h];
      return w(y, a.formatLong);
    }
    return y;
  }).join("").match(Mn).map((y) => {
    if (y === "''")
      return { isToken: !1, value: "'" };
    const h = y[0];
    if (h === "'")
      return { isToken: !1, value: An(y) };
    if (Fe[h])
      return { isToken: !0, value: y };
    if (h.match(Tn))
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + h + "`"
      );
    return { isToken: !1, value: y };
  });
  a.localize.preprocessor && (l = a.localize.preprocessor(s, l));
  const d = {
    firstWeekContainsDate: o,
    weekStartsOn: i,
    locale: a
  };
  return l.map((y) => {
    if (!y.isToken) return y.value;
    const h = y.value;
    (kn(h) || vn(h)) && Nn(h, t, String(e));
    const w = Fe[h[0]];
    return w(s, h, a.localize, d);
  }).join("");
}
function An(e) {
  const t = e.match(Pn);
  return t ? t[1].replace(Rn, "'") : e;
}
const nt = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ c(
  "table",
  {
    ref: r,
    className: N("w-full caption-bottom text-sm", e),
    ...t
  }
) }));
nt.displayName = "Table";
const at = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c("thead", { ref: r, className: N("[&_tr]:border-b", e), ...t }));
at.displayName = "TableHeader";
const ot = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "tbody",
  {
    ref: r,
    className: N("[&_tr:last-child]:border-0", e),
    ...t
  }
));
ot.displayName = "TableBody";
const En = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "tfoot",
  {
    ref: r,
    className: N(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      e
    ),
    ...t
  }
));
En.displayName = "TableFooter";
const pe = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "tr",
  {
    ref: r,
    className: N(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      e
    ),
    ...t
  }
));
pe.displayName = "TableRow";
const j = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "th",
  {
    ref: r,
    className: N(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      e
    ),
    ...t
  }
));
j.displayName = "TableHead";
const F = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "td",
  {
    ref: r,
    className: N("p-4 align-middle [&:has([role=checkbox])]:pr-0", e),
    ...t
  }
));
F.displayName = "TableCell";
const st = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  "caption",
  {
    ref: r,
    className: N("mt-4 text-sm text-muted-foreground", e),
    ...t
  }
));
st.displayName = "TableCaption";
function Wn(e, t = []) {
  let r = [];
  function n(o, i) {
    const s = u.createContext(i), l = r.length;
    r = [...r, i];
    const d = (p) => {
      var M;
      const { scope: b, children: C, ...y } = p, h = ((M = b == null ? void 0 : b[e]) == null ? void 0 : M[l]) || s, w = u.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ c(h.Provider, { value: w, children: C });
    };
    d.displayName = o + "Provider";
    function m(p, b) {
      var h;
      const C = ((h = b == null ? void 0 : b[e]) == null ? void 0 : h[l]) || s, y = u.useContext(C);
      if (y) return y;
      if (i !== void 0) return i;
      throw new Error(`\`${p}\` must be used within \`${o}\``);
    }
    return [d, m];
  }
  const a = () => {
    const o = r.map((i) => u.createContext(i));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || o;
      return u.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return a.scopeName = e, [n, Dn(a, ...t)];
}
function Dn(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const r = () => {
    const n = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return function(o) {
      const i = n.reduce((s, { useScope: l, scopeName: d }) => {
        const p = l(o)[`__scope${d}`];
        return { ...s, ...p };
      }, {});
      return u.useMemo(() => ({ [`__scope${t.scopeName}`]: i }), [i]);
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Ln(e) {
  const t = u.useRef(e);
  return u.useEffect(() => {
    t.current = e;
  }), u.useMemo(() => (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  }, []);
}
var it = globalThis != null && globalThis.document ? u.useLayoutEffect : () => {
}, xe = "Avatar", [jn, Hn] = Wn(xe), [Fn, ct] = jn(xe), lt = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, ...n } = e, [a, o] = u.useState("idle");
    return /* @__PURE__ */ c(
      Fn,
      {
        scope: r,
        imageLoadingStatus: a,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ c(ae.span, { ...n, ref: t })
      }
    );
  }
);
lt.displayName = xe;
var dt = "AvatarImage", ut = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, src: n, onLoadingStatusChange: a = () => {
    }, ...o } = e, i = ct(dt, r), s = Yn(n, o.referrerPolicy), l = Ln((d) => {
      a(d), i.onImageLoadingStatusChange(d);
    });
    return it(() => {
      s !== "idle" && l(s);
    }, [s, l]), s === "loaded" ? /* @__PURE__ */ c(ae.img, { ...o, ref: t, src: n }) : null;
  }
);
ut.displayName = dt;
var mt = "AvatarFallback", ft = u.forwardRef(
  (e, t) => {
    const { __scopeAvatar: r, delayMs: n, ...a } = e, o = ct(mt, r), [i, s] = u.useState(n === void 0);
    return u.useEffect(() => {
      if (n !== void 0) {
        const l = window.setTimeout(() => s(!0), n);
        return () => window.clearTimeout(l);
      }
    }, [n]), i && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ c(ae.span, { ...a, ref: t }) : null;
  }
);
ft.displayName = mt;
function Yn(e, t) {
  const [r, n] = u.useState("idle");
  return it(() => {
    if (!e) {
      n("error");
      return;
    }
    let a = !0;
    const o = new window.Image(), i = (s) => () => {
      a && n(s);
    };
    return n("loading"), o.onload = i("loaded"), o.onerror = i("error"), o.src = e, t && (o.referrerPolicy = t), () => {
      a = !1;
    };
  }, [e, t]), r;
}
var ht = lt, gt = ut, pt = ft;
const bt = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  ht,
  {
    ref: r,
    className: N(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
bt.displayName = ht.displayName;
const yt = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  gt,
  {
    ref: r,
    className: N("aspect-square h-full w-full", e),
    ...t
  }
));
yt.displayName = gt.displayName;
const wt = u.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ c(
  pt,
  {
    ref: r,
    className: N(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
wt.displayName = pt.displayName;
function $n({ radars: e }) {
  const t = u.useMemo(() => e.flatMap(
    (r) => {
      var n;
      return ((n = r.runs) == null ? void 0 : n.flatMap(
        (a) => a.results.map((o) => ({
          ...o,
          radarName: r.description,
          timestamp: a.timestamp
        }))
      )) ?? [];
    }
  ).sort((r, n) => new Date(n.timestamp).getTime() - new Date(r.timestamp).getTime()).slice(0, 10), [e]);
  return t.length === 0 ? /* @__PURE__ */ c("div", { className: "rounded-md border p-8 text-center", children: /* @__PURE__ */ c("p", { className: "text-sm text-muted-foreground", children: "No results found yet. Create a radar to start monitoring." }) }) : /* @__PURE__ */ c("div", { className: "rounded-md border", children: /* @__PURE__ */ g(nt, { children: [
    /* @__PURE__ */ c(st, { children: "A list of your most recent results from all radars" }),
    /* @__PURE__ */ c(at, { children: /* @__PURE__ */ g(pe, { children: [
      /* @__PURE__ */ c(j, { children: "Date" }),
      /* @__PURE__ */ c(j, { children: "Profile" }),
      /* @__PURE__ */ c(j, { children: "Radar" }),
      /* @__PURE__ */ c(j, { className: "max-w-[500px]", children: "Content" }),
      /* @__PURE__ */ c(j, { children: "Score" }),
      /* @__PURE__ */ c(j, { className: "w-[80px]", children: "Link" })
    ] }) }),
    /* @__PURE__ */ c(ot, { children: t.map((r) => /* @__PURE__ */ g(pe, { children: [
      /* @__PURE__ */ c(F, { className: "font-medium", children: On(new Date(r.timestamp), "MMM d, yyyy") }),
      /* @__PURE__ */ c(F, { children: /* @__PURE__ */ g("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ g(bt, { className: "h-8 w-8", children: [
          /* @__PURE__ */ c(yt, { src: r.profile.avatarUrl, alt: r.profile.name }),
          /* @__PURE__ */ c(wt, { children: r.profile.name.split(" ").map((n) => n[0]).join("") })
        ] }),
        /* @__PURE__ */ c("span", { className: "text-sm font-medium", children: r.profile.name })
      ] }) }),
      /* @__PURE__ */ c(F, { children: r.radarName }),
      /* @__PURE__ */ c(F, { className: "max-w-[500px] truncate", children: r.content }),
      /* @__PURE__ */ c(F, { children: r.matchScore }),
      /* @__PURE__ */ c(F, { children: /* @__PURE__ */ c(
        "a",
        {
          href: r.postUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-muted",
          children: /* @__PURE__ */ c(Pt, { className: "h-4 w-4" })
        }
      ) })
    ] }, r.id)) })
  ] }) });
}
function Bn() {
  const [e, t] = Ie([
    {
      id: "1",
      linkedinCookie: "sample-cookie",
      description: "Tech Jobs Radar",
      exclusionCriteria: "recruitment agencies",
      inclusionCriteria: "senior developer, tech lead",
      notificationEmail: "demo@example.com",
      runs: [
        {
          id: "1",
          timestamp: (/* @__PURE__ */ new Date()).toISOString(),
          results: [
            {
              id: "1",
              postUrl: "https://linkedin.com/post/1",
              content: "Looking for a Senior React Developer to join our team...",
              matchScore: 0.95,
              matchReason: "High relevance to inclusion criteria",
              profile: {
                id: "john-doe",
                name: "John Doe",
                avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&dpr=2&q=80"
              }
            },
            {
              id: "2",
              postUrl: "https://linkedin.com/post/2",
              content: "Tech Lead position available for a growing startup...",
              matchScore: 0.88,
              matchReason: "Matches job title criteria",
              profile: {
                id: "jane-smith",
                name: "Jane Smith",
                avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&dpr=2&q=80"
              }
            }
          ]
        }
      ]
    }
  ]);
  return {
    radars: e,
    createRadar: (o) => {
      const i = {
        id: crypto.randomUUID(),
        ...o,
        runs: []
      };
      t((s) => [...s, i]);
    },
    updateRadar: (o, i) => {
      t(
        (s) => s.map(
          (l) => l.id === o ? { ...l, ...i } : l
        )
      );
    },
    deleteRadar: (o) => {
      t((i) => i.filter((s) => s.id !== o));
    }
  };
}
export {
  bt as Avatar,
  wt as AvatarFallback,
  yt as AvatarImage,
  De as Badge,
  U as Button,
  te as Card,
  re as CardContent,
  he as CardDescription,
  Ue as CardFooter,
  Xe as CardHeader,
  yr as CardTitle,
  ge as Input,
  D as Label,
  Vn as RadarEdit,
  Nr as RadarForm,
  _n as RadarList,
  Gn as RadarNotFound,
  Cr as RadarResults,
  $n as RecentPostsTable,
  nt as Table,
  ot as TableBody,
  st as TableCaption,
  F as TableCell,
  En as TableFooter,
  j as TableHead,
  at as TableHeader,
  pe as TableRow,
  X as Textarea,
  wr as badgeVariants,
  br as buttonVariants,
  Bn as useRadars
};
