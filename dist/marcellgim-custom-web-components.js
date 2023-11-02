var St = Object.defineProperty;
var At = (e, t, n) => t in e ? St(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var y = (e, t, n) => (At(e, typeof t != "symbol" ? t + "" : t, n), n);
function m() {
}
function Pt(e, t) {
  for (const n in t)
    e[n] = t[n];
  return (
    /** @type {T & S} */
    e
  );
}
function Ft(e) {
  return !!e && (typeof e == "object" || typeof e == "function") && typeof /** @type {any} */
  e.then == "function";
}
function yt(e) {
  return e();
}
function dt() {
  return /* @__PURE__ */ Object.create(null);
}
function T(e) {
  e.forEach(yt);
}
function wt(e) {
  return typeof e == "function";
}
function et(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
let J;
function ht(e, t) {
  return e === t ? !0 : (J || (J = document.createElement("a")), J.href = t, e === J.href);
}
function Bt(e) {
  return Object.keys(e).length === 0;
}
function Gt(e, t, n, s) {
  if (e) {
    const r = kt(e, t, n, s);
    return e[0](r);
  }
}
function kt(e, t, n, s) {
  return e[1] && s ? Pt(n.ctx.slice(), e[1](s(t))) : n.ctx;
}
function Mt(e, t, n, s) {
  if (e[2] && s) {
    const r = e[2](s(n));
    if (t.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const c = [], o = Math.max(t.dirty.length, r.length);
      for (let l = 0; l < o; l += 1)
        c[l] = t.dirty[l] | r[l];
      return c;
    }
    return t.dirty | r;
  }
  return t.dirty;
}
function zt(e, t, n, s, r, c) {
  if (r) {
    const o = kt(t, n, s, c);
    e.p(o, r);
  }
}
function Rt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let s = 0; s < n; s++)
      t[s] = -1;
    return t;
  }
  return -1;
}
function $(e, t) {
  e.appendChild(t);
}
function xt(e, t, n) {
  const s = Ut(e);
  if (!s.getElementById(t)) {
    const r = _("style");
    r.id = t, r.textContent = n, Tt(s, r);
  }
}
function Ut(e) {
  if (!e)
    return document;
  const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return t && /** @type {ShadowRoot} */
  t.host ? (
    /** @type {ShadowRoot} */
    t
  ) : e.ownerDocument;
}
function Tt(e, t) {
  return $(
    /** @type {Document} */
    e.head || e,
    t
  ), t.sheet;
}
function O(e, t, n) {
  e.insertBefore(t, n || null);
}
function x(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function jt(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function _(e) {
  return document.createElement(e);
}
function N(e) {
  return document.createTextNode(e);
}
function S() {
  return N(" ");
}
function Ct() {
  return N("");
}
function p(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function Ht(e) {
  return Array.from(e.childNodes);
}
function R(e, t) {
  t = "" + t, e.data !== t && (e.data = /** @type {string} */
  t);
}
function $t(e, t, n, s) {
  n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, s ? "important" : "");
}
function It(e) {
  const t = {};
  return e.childNodes.forEach(
    /** @param {Element} node */
    (n) => {
      t[n.slot || "default"] = !0;
    }
  ), t;
}
let U;
function E(e) {
  U = e;
}
function Et() {
  if (!U)
    throw new Error("Function called outside component initialization");
  return U;
}
function qt(e) {
  Et().$$.on_mount.push(e);
}
const B = [], pt = [];
let G = [];
const gt = [], Jt = /* @__PURE__ */ Promise.resolve();
let Z = !1;
function Vt() {
  Z || (Z = !0, Jt.then(P));
}
function tt(e) {
  G.push(e);
}
const Y = /* @__PURE__ */ new Set();
let F = 0;
function P() {
  if (F !== 0)
    return;
  const e = U;
  do {
    try {
      for (; F < B.length; ) {
        const t = B[F];
        F++, E(t), Wt(t.$$);
      }
    } catch (t) {
      throw B.length = 0, F = 0, t;
    }
    for (E(null), B.length = 0, F = 0; pt.length; )
      pt.pop()();
    for (let t = 0; t < G.length; t += 1) {
      const n = G[t];
      Y.has(n) || (Y.add(n), n());
    }
    G.length = 0;
  } while (B.length);
  for (; gt.length; )
    gt.pop()();
  Z = !1, Y.clear(), E(e);
}
function Wt(e) {
  if (e.fragment !== null) {
    e.update(), T(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(tt);
  }
}
function Kt(e) {
  const t = [], n = [];
  G.forEach((s) => e.indexOf(s) === -1 ? t.push(s) : n.push(s)), n.forEach((s) => s()), G = t;
}
const V = /* @__PURE__ */ new Set();
let A;
function nt() {
  A = {
    r: 0,
    c: [],
    p: A
    // parent group
  };
}
function st() {
  A.r || T(A.c), A = A.p;
}
function w(e, t) {
  e && e.i && (V.delete(e), e.i(t));
}
function L(e, t, n, s) {
  if (e && e.o) {
    if (V.has(e))
      return;
    V.add(e), A.c.push(() => {
      V.delete(e), s && (n && e.d(1), s());
    }), e.o(t);
  } else
    s && s();
}
function Qt(e, t) {
  const n = t.token = {};
  function s(r, c, o, l) {
    if (t.token !== n)
      return;
    t.resolved = l;
    let i = t.ctx;
    o !== void 0 && (i = i.slice(), i[o] = l);
    const a = r && (t.current = r)(i);
    let f = !1;
    t.block && (t.blocks ? t.blocks.forEach((d, u) => {
      u !== c && d && (nt(), L(d, 1, 1, () => {
        t.blocks[u] === d && (t.blocks[u] = null);
      }), st());
    }) : t.block.d(1), a.c(), w(a, 1), a.m(t.mount(), t.anchor), f = !0), t.block = a, t.blocks && (t.blocks[c] = a), f && P();
  }
  if (Ft(e)) {
    const r = Et();
    if (e.then(
      (c) => {
        E(r), s(t.then, 1, t.value, c), E(null);
      },
      (c) => {
        if (E(r), s(t.catch, 2, t.error, c), E(null), !t.hasCatch)
          throw c;
      }
    ), t.current !== t.pending)
      return s(t.pending, 0), !0;
  } else {
    if (t.current !== t.then)
      return s(t.then, 1, t.value, e), !0;
    t.resolved = /** @type {T} */
    e;
  }
}
function Xt(e, t, n) {
  const s = t.slice(), { resolved: r } = e;
  e.current === e.then && (s[e.value] = r), e.current === e.catch && (s[e.error] = r), e.block.p(s, n);
}
function K(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function Ot(e) {
  e && e.c();
}
function rt(e, t, n) {
  const { fragment: s, after_update: r } = e.$$;
  s && s.m(t, n), tt(() => {
    const c = e.$$.on_mount.map(yt).filter(wt);
    e.$$.on_destroy ? e.$$.on_destroy.push(...c) : T(c), e.$$.on_mount = [];
  }), r.forEach(tt);
}
function ot(e, t) {
  const n = e.$$;
  n.fragment !== null && (Kt(n.after_update), T(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Yt(e, t) {
  e.$$.dirty[0] === -1 && (B.push(e), Vt(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function lt(e, t, n, s, r, c, o = null, l = [-1]) {
  const i = U;
  E(e);
  const a = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: c,
    update: m,
    not_equal: r,
    bound: dt(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (i ? i.$$.context : [])),
    // everything else
    callbacks: dt(),
    dirty: l,
    skip_bound: !1,
    root: t.target || i.$$.root
  };
  o && o(a.root);
  let f = !1;
  if (a.ctx = n ? n(e, t.props || {}, (d, u, ...h) => {
    const b = h.length ? h[0] : u;
    return a.ctx && r(a.ctx[d], a.ctx[d] = b) && (!a.skip_bound && a.bound[d] && a.bound[d](b), f && Yt(e, d)), u;
  }) : [], a.update(), f = !0, T(a.before_update), a.fragment = s ? s(a.ctx) : !1, t.target) {
    if (t.hydrate) {
      const d = Ht(t.target);
      a.fragment && a.fragment.l(d), d.forEach(x);
    } else
      a.fragment && a.fragment.c();
    t.intro && w(e.$$.fragment), rt(e, t.target, t.anchor), P();
  }
  E(i);
}
let Lt;
typeof HTMLElement == "function" && (Lt = class extends HTMLElement {
  constructor(t, n, s) {
    super();
    /** The Svelte component constructor */
    y(this, "$$ctor");
    /** Slots */
    y(this, "$$s");
    /** The Svelte component instance */
    y(this, "$$c");
    /** Whether or not the custom element is connected */
    y(this, "$$cn", !1);
    /** Component props data */
    y(this, "$$d", {});
    /** `true` if currently in the process of reflecting component props back to attributes */
    y(this, "$$r", !1);
    /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
    y(this, "$$p_d", {});
    /** @type {Record<string, Function[]>} Event listeners */
    y(this, "$$l", {});
    /** @type {Map<Function, Function>} Event listener unsubscribe functions */
    y(this, "$$l_u", /* @__PURE__ */ new Map());
    this.$$ctor = t, this.$$s = n, s && this.attachShadow({ mode: "open" });
  }
  addEventListener(t, n, s) {
    if (this.$$l[t] = this.$$l[t] || [], this.$$l[t].push(n), this.$$c) {
      const r = this.$$c.$on(t, n);
      this.$$l_u.set(n, r);
    }
    super.addEventListener(t, n, s);
  }
  removeEventListener(t, n, s) {
    if (super.removeEventListener(t, n, s), this.$$c) {
      const r = this.$$l_u.get(n);
      r && (r(), this.$$l_u.delete(n));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(o) {
        return () => {
          let l;
          return {
            c: function() {
              l = _("slot"), o !== "default" && p(l, "name", o);
            },
            /**
             * @param {HTMLElement} target
             * @param {HTMLElement} [anchor]
             */
            m: function(f, d) {
              O(f, l, d);
            },
            d: function(f) {
              f && x(l);
            }
          };
        };
      };
      var t = n;
      if (await Promise.resolve(), !this.$$cn)
        return;
      const s = {}, r = It(this);
      for (const o of this.$$s)
        o in r && (s[o] = [n(o)]);
      for (const o of this.attributes) {
        const l = this.$$g_p(o.name);
        l in this.$$d || (this.$$d[l] = W(l, o.value, this.$$p_d, "toProp"));
      }
      this.$$c = new this.$$ctor({
        target: this.shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: s,
          $$scope: {
            ctx: []
          }
        }
      });
      const c = () => {
        this.$$r = !0;
        for (const o in this.$$p_d)
          if (this.$$d[o] = this.$$c.$$.ctx[this.$$c.$$.props[o]], this.$$p_d[o].reflect) {
            const l = W(
              o,
              this.$$d[o],
              this.$$p_d,
              "toAttribute"
            );
            l == null ? this.removeAttribute(this.$$p_d[o].attribute || o) : this.setAttribute(this.$$p_d[o].attribute || o, l);
          }
        this.$$r = !1;
      };
      this.$$c.$$.after_update.push(c), c();
      for (const o in this.$$l)
        for (const l of this.$$l[o]) {
          const i = this.$$c.$on(o, l);
          this.$$l_u.set(l, i);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  attributeChangedCallback(t, n, s) {
    var r;
    this.$$r || (t = this.$$g_p(t), this.$$d[t] = W(t, s, this.$$p_d, "toProp"), (r = this.$$c) == null || r.$set({ [t]: this.$$d[t] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      this.$$cn || (this.$$c.$destroy(), this.$$c = void 0);
    });
  }
  $$g_p(t) {
    return Object.keys(this.$$p_d).find(
      (n) => this.$$p_d[n].attribute === t || !this.$$p_d[n].attribute && n.toLowerCase() === t
    ) || t;
  }
});
function W(e, t, n, s) {
  var c;
  const r = (c = n[e]) == null ? void 0 : c.type;
  if (t = r === "Boolean" && typeof t != "boolean" ? t != null : t, !s || !n[e])
    return t;
  if (s === "toAttribute")
    switch (r) {
      case "Object":
      case "Array":
        return t == null ? null : JSON.stringify(t);
      case "Boolean":
        return t ? "" : null;
      case "Number":
        return t ?? null;
      default:
        return t;
    }
  else
    switch (r) {
      case "Object":
      case "Array":
        return t && JSON.parse(t);
      case "Boolean":
        return t;
      case "Number":
        return t != null ? +t : t;
      default:
        return t;
    }
}
function ct(e, t, n, s, r, c) {
  let o = class extends Lt {
    constructor() {
      super(e, n, r), this.$$p_d = t;
    }
    static get observedAttributes() {
      return Object.keys(t).map(
        (l) => (t[l].attribute || l).toLowerCase()
      );
    }
  };
  return Object.keys(t).forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(i) {
        var a;
        i = W(l, i, t), this.$$d[l] = i, (a = this.$$c) == null || a.$set({ [l]: i });
      }
    });
  }), s.forEach((l) => {
    Object.defineProperty(o.prototype, l, {
      get() {
        var i;
        return (i = this.$$c) == null ? void 0 : i[l];
      }
    });
  }), c && (o = c(o)), e.element = /** @type {any} */
  o, o;
}
class it {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    y(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    ot(this, 1), this.$destroy = m;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(t, n) {
    if (!wt(n))
      return m;
    const s = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return s.push(n), () => {
      const r = s.indexOf(n);
      r !== -1 && s.splice(r, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(t) {
    this.$$set && !Bt(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
const Zt = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Zt);
function te(e) {
  xt(e, "svelte-12ap2pr", ".event-card.svelte-12ap2pr{position:relative;display:flex;flex-direction:column;width:250px;height:280px;color:white;border-radius:20px}.date-display.svelte-12ap2pr{position:absolute;top:0;left:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(0, 0, 0, 0.5);border-radius:20px 0%;width:20%;padding:0.5rem}.month.svelte-12ap2pr{font-size:0.8em}.date.svelte-12ap2pr{font-weight:800;font-size:2.2em}.event-description.svelte-12ap2pr{display:flex;flex-direction:column;flex:50%;padding:35px 30px}.event-image.svelte-12ap2pr{flex:50%;height:50%}.origin.svelte-12ap2pr{opacity:0.7}.title.svelte-12ap2pr{font-weight:bold;font-size:1.2em}img.svelte-12ap2pr{width:100%;max-height:100%;object-fit:cover;border-radius:20px 20px 0 0}");
}
function ee(e) {
  let t, n, s, r = (
    /*eventObj*/
    e[0].date.toLocaleString("default", { month: "short" }).toUpperCase() + ""
  ), c, o, l, i = (
    /*eventObj*/
    e[0].date.getDate() + ""
  ), a, f, d, u, h, b, M, j, g, C = (
    /*eventObj*/
    e[0].origin.toUpperCase() + ""
  ), z, ut, D, H = (
    /*eventObj*/
    e[0].series + ""
  ), Q, at, I = (
    /*eventObj*/
    e[0].episode + ""
  ), X, ft, q;
  return {
    c() {
      t = _("div"), n = _("div"), s = _("span"), c = N(r), o = S(), l = _("span"), a = N(i), f = S(), d = _("div"), u = _("img"), M = S(), j = _("div"), g = _("span"), z = N(C), ut = S(), D = _("span"), Q = N(H), at = S(), X = N(I), ft = N(". rész"), p(s, "class", "month svelte-12ap2pr"), p(l, "class", "date svelte-12ap2pr"), p(n, "class", "date-display svelte-12ap2pr"), ht(u.src, h = /*eventObj*/
      e[0].image) || p(u, "src", h), p(u, "alt", b = /*eventObj*/
      e[0].series), p(u, "referrerpolicy", "no-referrer"), p(u, "class", "svelte-12ap2pr"), p(d, "class", "event-image svelte-12ap2pr"), p(g, "class", "origin svelte-12ap2pr"), p(D, "class", "title svelte-12ap2pr"), p(j, "class", "event-description svelte-12ap2pr"), p(t, "class", "event-card svelte-12ap2pr"), p(t, "style", q = `background-color: var(--${/*eventObj*/
      e[0].origin.toLocaleLowerCase("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")})`);
    },
    m(v, k) {
      O(v, t, k), $(t, n), $(n, s), $(s, c), $(n, o), $(n, l), $(l, a), $(t, f), $(t, d), $(d, u), $(t, M), $(t, j), $(j, g), $(g, z), $(j, ut), $(j, D), $(D, Q), $(D, at), $(D, X), $(D, ft);
    },
    p(v, [k]) {
      k & /*eventObj*/
      1 && r !== (r = /*eventObj*/
      v[0].date.toLocaleString("default", { month: "short" }).toUpperCase() + "") && R(c, r), k & /*eventObj*/
      1 && i !== (i = /*eventObj*/
      v[0].date.getDate() + "") && R(a, i), k & /*eventObj*/
      1 && !ht(u.src, h = /*eventObj*/
      v[0].image) && p(u, "src", h), k & /*eventObj*/
      1 && b !== (b = /*eventObj*/
      v[0].series) && p(u, "alt", b), k & /*eventObj*/
      1 && C !== (C = /*eventObj*/
      v[0].origin.toUpperCase() + "") && R(z, C), k & /*eventObj*/
      1 && H !== (H = /*eventObj*/
      v[0].series + "") && R(Q, H), k & /*eventObj*/
      1 && I !== (I = /*eventObj*/
      v[0].episode + "") && R(X, I), k & /*eventObj*/
      1 && q !== (q = `background-color: var(--${/*eventObj*/
      v[0].origin.toLocaleLowerCase("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-")})`) && p(t, "style", q);
    },
    i: m,
    o: m,
    d(v) {
      v && x(t);
    }
  };
}
function ne(e, t, n) {
  let { eventObj: s } = t;
  return e.$$set = (r) => {
    "eventObj" in r && n(0, s = r.eventObj);
  }, [s];
}
class Nt extends it {
  constructor(t) {
    super(), lt(this, t, ne, ee, et, { eventObj: 0 }, te);
  }
  get eventObj() {
    return this.$$.ctx[0];
  }
  set eventObj(t) {
    this.$$set({ eventObj: t }), P();
  }
}
ct(Nt, { eventObj: {} }, [], [], !0);
function se(e) {
  let t, n;
  const s = (
    /*#slots*/
    e[3].default
  ), r = Gt(
    s,
    e,
    /*$$scope*/
    e[2],
    null
  );
  return {
    c() {
      t = _("div"), r && r.c(), $t(
        t,
        "font-family",
        /*fontLoaded*/
        e[1] ? `${/*font*/
        e[0]}, sans-serif` : "sans-serif"
      );
    },
    m(c, o) {
      O(c, t, o), r && r.m(t, null), n = !0;
    },
    p(c, [o]) {
      r && r.p && (!n || o & /*$$scope*/
      4) && zt(
        r,
        s,
        c,
        /*$$scope*/
        c[2],
        n ? Mt(
          s,
          /*$$scope*/
          c[2],
          o,
          null
        ) : Rt(
          /*$$scope*/
          c[2]
        ),
        null
      ), (!n || o & /*fontLoaded, font*/
      3) && $t(
        t,
        "font-family",
        /*fontLoaded*/
        c[1] ? `${/*font*/
        c[0]}, sans-serif` : "sans-serif"
      );
    },
    i(c) {
      n || (w(r, c), n = !0);
    },
    o(c) {
      L(r, c), n = !1;
    },
    d(c) {
      c && x(t), r && r.d(c);
    }
  };
}
function re(e, t, n) {
  let { $$slots: s = {}, $$scope: r } = t, { font: c } = t, o = !1;
  return qt(() => {
    const l = document.createElement("script");
    l.src = "https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js", l.onload = function() {
      WebFont.load({
        google: { families: [c] },
        active() {
          n(1, o = !0);
        }
      });
    }, document.head.appendChild(l);
  }), e.$$set = (l) => {
    "font" in l && n(0, c = l.font), "$$scope" in l && n(2, r = l.$$scope);
  }, [c, o, r, s];
}
class Dt extends it {
  constructor(t) {
    super(), lt(this, t, re, se, et, { font: 0 });
  }
  get font() {
    return this.$$.ctx[0];
  }
  set font(t) {
    this.$$set({ font: t }), P();
  }
}
ct(Dt, { font: {} }, ["default"], [], !0);
function oe(e) {
  xt(e, "svelte-f3agui", ".calendar-items.svelte-f3agui{display:flex;flex-wrap:wrap;gap:20px}");
}
function _t(e, t, n) {
  const s = e.slice();
  return s[10] = t[n], s;
}
function mt(e, t, n) {
  const s = e.slice();
  return s[13] = t[n], s;
}
function le(e) {
  return {
    c: m,
    m,
    p: m,
    i: m,
    o: m,
    d: m
  };
}
function ce(e) {
  let t, n;
  return t = new Dt({
    props: {
      font: "Dosis",
      $$slots: { default: [ie] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Ot(t.$$.fragment);
    },
    m(s, r) {
      rt(t, s, r), n = !0;
    },
    p(s, r) {
      const c = {};
      r & /*$$scope*/
      65536 && (c.$$scope = { dirty: r, ctx: s }), t.$set(c);
    },
    i(s) {
      n || (w(t.$$.fragment, s), n = !0);
    },
    o(s) {
      L(t.$$.fragment, s), n = !1;
    },
    d(s) {
      ot(t, s);
    }
  };
}
function bt(e) {
  let t, n;
  return t = new Nt({
    props: { eventObj: (
      /*eventObj*/
      e[13]
    ) }
  }), {
    c() {
      Ot(t.$$.fragment);
    },
    m(s, r) {
      rt(t, s, r), n = !0;
    },
    p: m,
    i(s) {
      n || (w(t.$$.fragment, s), n = !0);
    },
    o(s) {
      L(t.$$.fragment, s), n = !1;
    },
    d(s) {
      ot(t, s);
    }
  };
}
function vt(e) {
  let t, n, s, r, c;
  function o(...f) {
    return (
      /*func*/
      e[4](
        /*month*/
        e[10],
        ...f
      )
    );
  }
  let l = K(
    /*data*/
    e[9][0].filter(o)
  ), i = [];
  for (let f = 0; f < l.length; f += 1)
    i[f] = bt(mt(e, l, f));
  const a = (f) => L(i[f], 1, 1, () => {
    i[f] = null;
  });
  return {
    c() {
      t = _("h2"), t.textContent = `${/*month*/
      e[10]}`, n = S(), s = _("div");
      for (let f = 0; f < i.length; f += 1)
        i[f].c();
      r = S(), p(s, "class", "calendar-items svelte-f3agui");
    },
    m(f, d) {
      O(f, t, d), O(f, n, d), O(f, s, d);
      for (let u = 0; u < i.length; u += 1)
        i[u] && i[u].m(s, null);
      $(s, r), c = !0;
    },
    p(f, d) {
      if (e = f, d & /*promise, months*/
      3) {
        l = K(
          /*data*/
          e[9][0].filter(o)
        );
        let u;
        for (u = 0; u < l.length; u += 1) {
          const h = mt(e, l, u);
          i[u] ? (i[u].p(h, d), w(i[u], 1)) : (i[u] = bt(h), i[u].c(), w(i[u], 1), i[u].m(s, r));
        }
        for (nt(), u = l.length; u < i.length; u += 1)
          a(u);
        st();
      }
    },
    i(f) {
      if (!c) {
        for (let d = 0; d < l.length; d += 1)
          w(i[d]);
        c = !0;
      }
    },
    o(f) {
      i = i.filter(Boolean);
      for (let d = 0; d < i.length; d += 1)
        L(i[d]);
      c = !1;
    },
    d(f) {
      f && (x(t), x(n), x(s)), jt(i, f);
    }
  };
}
function ie(e) {
  let t, n, s = K(
    /*months*/
    e[1]
  ), r = [];
  for (let o = 0; o < s.length; o += 1)
    r[o] = vt(_t(e, s, o));
  const c = (o) => L(r[o], 1, 1, () => {
    r[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      t = Ct();
    },
    m(o, l) {
      for (let i = 0; i < r.length; i += 1)
        r[i] && r[i].m(o, l);
      O(o, t, l), n = !0;
    },
    p(o, l) {
      if (l & /*promise, months*/
      3) {
        s = K(
          /*months*/
          o[1]
        );
        let i;
        for (i = 0; i < s.length; i += 1) {
          const a = _t(o, s, i);
          r[i] ? (r[i].p(a, l), w(r[i], 1)) : (r[i] = vt(a), r[i].c(), w(r[i], 1), r[i].m(t.parentNode, t));
        }
        for (nt(), i = s.length; i < r.length; i += 1)
          c(i);
        st();
      }
    },
    i(o) {
      if (!n) {
        for (let l = 0; l < s.length; l += 1)
          w(r[l]);
        n = !0;
      }
    },
    o(o) {
      r = r.filter(Boolean);
      for (let l = 0; l < r.length; l += 1)
        L(r[l]);
      n = !1;
    },
    d(o) {
      o && x(t), jt(r, o);
    }
  };
}
function ue(e) {
  let t;
  return {
    c() {
      t = _("p"), t.textContent = "Loading...";
    },
    m(n, s) {
      O(n, t, s);
    },
    p: m,
    i: m,
    o: m,
    d(n) {
      n && x(t);
    }
  };
}
function ae(e) {
  let t, n, s = {
    ctx: e,
    current: null,
    token: null,
    hasCatch: !1,
    pending: ue,
    then: ce,
    catch: le,
    value: 9,
    blocks: [, , ,]
  };
  return Qt(
    /*promise*/
    e[0],
    s
  ), {
    c() {
      t = Ct(), s.block.c();
    },
    m(r, c) {
      O(r, t, c), s.block.m(r, s.anchor = c), s.mount = () => t.parentNode, s.anchor = t, n = !0;
    },
    p(r, [c]) {
      e = r, Xt(s, e, c);
    },
    i(r) {
      n || (w(s.block), n = !0);
    },
    o(r) {
      for (let c = 0; c < 3; c += 1) {
        const o = s.blocks[c];
        L(o);
      }
      n = !1;
    },
    d(r) {
      r && x(t), s.block.d(r), s.token = null, s = null;
    }
  };
}
function fe(e) {
  const t = e.split(`
`).map((n) => n.split("	")).map((n) => ({
    name: "--" + n[0].toLocaleLowerCase("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s/g, "-"),
    value: n[1]
  }));
  for (const n of t)
    document.documentElement.style.setProperty(n.name, n.value);
}
function de(e, t, n) {
  let { source: s } = t, { colorsGid: r } = t, c = Promise.all([l(), i()]), o = /* @__PURE__ */ new Set();
  async function l() {
    const u = await fetch(s);
    if (u.ok) {
      const h = await u.text();
      return a(h);
    } else
      throw new Error("Failed to load calendar.");
  }
  async function i() {
    const u = await fetch(s + "&single=true&gid=" + r);
    if (u.ok) {
      const h = await u.text();
      fe(h);
    } else
      throw new Error("Failed to load colors.");
  }
  function a(u) {
    const h = u.split(`
`).map((g) => g.split("	")).map((g) => {
      const C = new Date(g[0]), z = C.toLocaleDateString(void 0, { year: "numeric", month: "long" });
      return {
        date: C,
        month: z,
        origin: g[1],
        series: g[2],
        episode: g[3],
        image: g[4]
      };
    });
    h.shift(), h.sort((g, C) => Number(g.date) - Number(C.date));
    const b = /* @__PURE__ */ new Date();
    b.setHours(0, 0, 0, 0);
    const M = new Date(b);
    M.setDate(b.getDate() + 7 * 8);
    const j = h.filter((g) => g.date >= b && g.date <= M);
    return f(j), j;
  }
  function f(u) {
    for (const h of u)
      o.add(h.date.toLocaleDateString(void 0, { year: "numeric", month: "long" }));
  }
  const d = (u, h) => h.month === u;
  return e.$$set = (u) => {
    "source" in u && n(2, s = u.source), "colorsGid" in u && n(3, r = u.colorsGid);
  }, [c, o, s, r, d];
}
class he extends it {
  constructor(t) {
    super(), lt(this, t, de, ae, et, { source: 2, colorsGid: 3 }, oe);
  }
  get source() {
    return this.$$.ctx[2];
  }
  set source(t) {
    this.$$set({ source: t }), P();
  }
  get colorsGid() {
    return this.$$.ctx[3];
  }
  set colorsGid(t) {
    this.$$set({ colorsGid: t }), P();
  }
}
customElements.define("event-calendar", ct(he, { source: { attribute: "source" }, colorsGid: { attribute: "colors-gid" } }, [], [], !0));
