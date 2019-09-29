;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    341: function(t, e, n) {
      'use strict'
      n(180)
      var r = n(131)
      e.a = Object(r.a)('flex')
    },
    342: function(t, e, n) {
      'use strict'
      n(180)
      var r = n(131)
      e.a = Object(r.a)('layout')
    },
    347: function(t, e, n) {
      var r = n(25)
      t.exports = function(t, e) {
        if (!r(t) || t._t !== e)
          throw TypeError('Incompatible receiver, ' + e + ' required!')
        return t
      }
    },
    363: function(t, e, n) {
      var content = n(364)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('2d62e390', content, !0, { sourceMap: !1 })
    },
    364: function(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        '.v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}',
        ''
      ])
    },
    365: function(t, e, n) {
      var content = n(366)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, n(12).default)('0cd63bd9', content, !0, { sourceMap: !1 })
    },
    366: function(t, e, n) {
      ;(t.exports = n(11)(!1)).push([
        t.i,
        '.v-parallax{position:relative;overflow:hidden;z-index:0}.v-parallax__image-container{position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;contain:strict}.v-parallax__image{position:absolute;bottom:0;left:50%;min-width:100%;min-height:100%;display:none;transform:translate(-50%);will-change:transform;transition:opacity .3s cubic-bezier(.25,.8,.5,1);z-index:1}.v-parallax__content{color:#fff;height:100%;z-index:2;position:relative;display:flex;flex-direction:column;justify-content:center;padding:0 1rem}',
        ''
      ])
    },
    367: function(t, e, n) {
      'use strict'
      var strong = n(368),
        r = n(347)
      t.exports = n(369)(
        'Map',
        function(t) {
          return function() {
            return t(this, arguments.length > 0 ? arguments[0] : void 0)
          }
        },
        {
          get: function(t) {
            var e = strong.getEntry(r(this, 'Map'), t)
            return e && e.v
          },
          set: function(t, e) {
            return strong.def(r(this, 'Map'), 0 === t ? 0 : t, e)
          }
        },
        strong,
        !0
      )
    },
    368: function(t, e, n) {
      'use strict'
      var r = n(32).f,
        o = n(109),
        l = n(183),
        c = n(48),
        h = n(181),
        d = n(182),
        f = n(133),
        v = n(184),
        m = n(134),
        w = n(23),
        y = n(132).fastKey,
        _ = n(347),
        O = w ? '_s' : 'size',
        j = function(t, e) {
          var n,
            r = y(e)
          if ('F' !== r) return t._i[r]
          for (n = t._f; n; n = n.n) if (n.k == e) return n
        }
      t.exports = {
        getConstructor: function(t, e, n, f) {
          var v = t(function(t, r) {
            h(t, v, e, '_i'),
              (t._t = e),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[O] = 0),
              null != r && d(r, n, t[f], t)
          })
          return (
            l(v.prototype, {
              clear: function() {
                for (var t = _(this, e), data = t._i, n = t._f; n; n = n.n)
                  (n.r = !0), n.p && (n.p = n.p.n = void 0), delete data[n.i]
                ;(t._f = t._l = void 0), (t[O] = 0)
              },
              delete: function(t) {
                var n = _(this, e),
                  r = j(n, t)
                if (r) {
                  var o = r.n,
                    l = r.p
                  delete n._i[r.i],
                    (r.r = !0),
                    l && (l.n = o),
                    o && (o.p = l),
                    n._f == r && (n._f = o),
                    n._l == r && (n._l = l),
                    n[O]--
                }
                return !!r
              },
              forEach: function(t) {
                _(this, e)
                for (
                  var n,
                    r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (n = n ? n.n : this._f);

                )
                  for (r(n.v, n.k, this); n && n.r; ) n = n.p
              },
              has: function(t) {
                return !!j(_(this, e), t)
              }
            }),
            w &&
              r(v.prototype, 'size', {
                get: function() {
                  return _(this, e)[O]
                }
              }),
            v
          )
        },
        def: function(t, e, n) {
          var r,
            o,
            l = j(t, e)
          return (
            l
              ? (l.v = n)
              : ((t._l = l = {
                  i: (o = y(e, !0)),
                  k: e,
                  v: n,
                  p: (r = t._l),
                  n: void 0,
                  r: !1
                }),
                t._f || (t._f = l),
                r && (r.n = l),
                t[O]++,
                'F' !== o && (t._i[o] = l)),
            t
          )
        },
        getEntry: j,
        setStrong: function(t, e, n) {
          f(
            t,
            e,
            function(t, n) {
              ;(this._t = _(t, e)), (this._k = n), (this._l = void 0)
            },
            function() {
              for (var t = this._k, e = this._l; e && e.r; ) e = e.p
              return this._t && (this._l = e = e ? e.n : this._t._f)
                ? v(0, 'keys' == t ? e.k : 'values' == t ? e.v : [e.k, e.v])
                : ((this._t = void 0), v(1))
            },
            n ? 'entries' : 'values',
            !n,
            !0
          ),
            m(e)
        }
      }
    },
    369: function(t, e, n) {
      'use strict'
      var r = n(18),
        o = n(17),
        l = n(34),
        c = n(183),
        meta = n(132),
        h = n(182),
        d = n(181),
        f = n(25),
        v = n(26),
        m = n(135),
        w = n(84),
        y = n(136)
      t.exports = function(t, e, n, _, O, j) {
        var x = r[t],
          E = x,
          T = O ? 'set' : 'add',
          C = E && E.prototype,
          D = {},
          S = function(t) {
            var e = C[t]
            l(
              C,
              t,
              'delete' == t
                ? function(a) {
                    return !(j && !f(a)) && e.call(this, 0 === a ? 0 : a)
                  }
                : 'has' == t
                ? function(a) {
                    return !(j && !f(a)) && e.call(this, 0 === a ? 0 : a)
                  }
                : 'get' == t
                ? function(a) {
                    return j && !f(a) ? void 0 : e.call(this, 0 === a ? 0 : a)
                  }
                : 'add' == t
                ? function(a) {
                    return e.call(this, 0 === a ? 0 : a), this
                  }
                : function(a, b) {
                    return e.call(this, 0 === a ? 0 : a, b), this
                  }
            )
          }
        if (
          'function' == typeof E &&
          (j ||
            (C.forEach &&
              !v(function() {
                new E().entries().next()
              })))
        ) {
          var k = new E(),
            B = k[T](j ? {} : -0, 1) != k,
            P = v(function() {
              k.has(1)
            }),
            $ = m(function(t) {
              new E(t)
            }),
            H =
              !j &&
              v(function() {
                for (var t = new E(), e = 5; e--; ) t[T](e, e)
                return !t.has(-0)
              })
          $ ||
            (((E = e(function(e, n) {
              d(e, E, t)
              var r = y(new x(), e, E)
              return null != n && h(n, O, r[T], r), r
            })).prototype = C),
            (C.constructor = E)),
            (P || H) && (S('delete'), S('has'), O && S('get')),
            (H || B) && S(T),
            j && C.clear && delete C.clear
        } else
          (E = _.getConstructor(e, t, O, T)),
            c(E.prototype, n),
            (meta.NEED = !0)
        return (
          w(E, t),
          (D[t] = E),
          o(o.G + o.W + o.F * (E != x), D),
          j || _.setStrong(E, t, O),
          E
        )
      }
    },
    372: function(t, e, n) {
      'use strict'
      n(10), n(7)
      var r = n(1),
        o =
          (n(83), n(367), n(39), n(5), n(4), n(6), n(35), n(36), n(185), n(2)),
        l = n(161),
        c = n(0)
      function h(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      var d = ['sm', 'md', 'lg', 'xl'],
        f = ['start', 'end', 'center']
      function v(t, e) {
        return d.reduce(function(n, r) {
          return (n[t + Object(c.r)(r)] = e()), n
        }, {})
      }
      var m = function(t) {
          return [].concat(f, ['baseline', 'stretch']).includes(t)
        },
        w = v('align', function() {
          return { type: String, default: null, validator: m }
        }),
        y = function(t) {
          return [].concat(f, ['space-between', 'space-around']).includes(t)
        },
        _ = v('justify', function() {
          return { type: String, default: null, validator: y }
        }),
        O = function(t) {
          return []
            .concat(f, ['space-between', 'space-around', 'stretch'])
            .includes(t)
        },
        j = v('alignContent', function() {
          return { type: String, default: null, validator: O }
        }),
        x = {
          align: Object.keys(w),
          justify: Object.keys(_),
          alignContent: Object.keys(j)
        },
        E = {
          align: 'align',
          justify: 'justify',
          alignContent: 'align-content'
        }
      function T(t, e, n) {
        var r = E[t]
        if (null != n) {
          if (e) {
            var o = e.replace(t, '')
            r += '-'.concat(o)
          }
          return (r += '-'.concat(n)).toLowerCase()
        }
      }
      var C = new Map()
      e.a = o.default.extend({
        name: 'v-row',
        functional: !0,
        props: (function(t) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {}
            i % 2
              ? h(source, !0).forEach(function(e) {
                  Object(r.a)(t, e, source[e])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(
                  t,
                  Object.getOwnPropertyDescriptors(source)
                )
              : h(source).forEach(function(e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(source, e)
                  )
                })
          }
          return t
        })(
          {
            tag: { type: String, default: 'div' },
            dense: Boolean,
            noGutters: Boolean,
            align: { type: String, default: null, validator: m }
          },
          w,
          { justify: { type: String, default: null, validator: y } },
          _,
          { alignContent: { type: String, default: null, validator: O } },
          j
        ),
        render: function(t, e) {
          var n = e.props,
            data = e.data,
            o = e.children,
            c = ''
          for (var h in n) c += String(n[h])
          var d = C.get(c)
          return (
            d ||
              (function() {
                var t, e
                for (e in ((d = []), x))
                  x[e].forEach(function(t) {
                    var r = n[t],
                      o = T(e, t, r)
                    o && d.push(o)
                  })
                d.push(
                  ((t = { 'no-gutters': n.noGutters, 'row--dense': n.dense }),
                  Object(r.a)(t, 'align-'.concat(n.align), n.align),
                  Object(r.a)(t, 'justify-'.concat(n.justify), n.justify),
                  Object(r.a)(
                    t,
                    'align-content-'.concat(n.alignContent),
                    n.alignContent
                  ),
                  t)
                ),
                  C.set(c, d)
              })(),
            t(n.tag, Object(l.a)(data, { staticClass: 'row', class: d }), o)
          )
        }
      })
    },
    373: function(t, e, n) {
      'use strict'
      n(180)
      var r = n(0)
      e.a = Object(r.g)('spacer', 'div', 'v-spacer')
    },
    378: function(t, e, n) {
      'use strict'
      n(14), n(365)
      var r = n(2).default.extend({
          name: 'translatable',
          props: { height: Number },
          data: function() {
            return {
              elOffsetTop: 0,
              parallax: 0,
              parallaxDist: 0,
              percentScrolled: 0,
              scrollTop: 0,
              windowHeight: 0,
              windowBottom: 0
            }
          },
          computed: {
            imgHeight: function() {
              return this.objHeight()
            }
          },
          beforeDestroy: function() {
            window.removeEventListener('scroll', this.translate, !1),
              window.removeEventListener('resize', this.translate, !1)
          },
          methods: {
            calcDimensions: function() {
              var t = this.$el.getBoundingClientRect()
              ;(this.scrollTop = window.pageYOffset),
                (this.parallaxDist = this.imgHeight - this.height),
                (this.elOffsetTop = t.top + this.scrollTop),
                (this.windowHeight = window.innerHeight),
                (this.windowBottom = this.scrollTop + this.windowHeight)
            },
            listeners: function() {
              window.addEventListener('scroll', this.translate, !1),
                window.addEventListener('resize', this.translate, !1)
            },
            objHeight: function() {
              throw new Error('Not implemented !')
            },
            translate: function() {
              this.calcDimensions(),
                (this.percentScrolled =
                  (this.windowBottom - this.elOffsetTop) /
                  (parseInt(this.height) + this.windowHeight)),
                (this.parallax = Math.round(
                  this.parallaxDist * this.percentScrolled
                ))
            }
          }
        }),
        o = n(3),
        l = Object(o.a)(r)
      e.a = l.extend().extend({
        name: 'v-parallax',
        props: {
          alt: { type: String, default: '' },
          height: { type: [String, Number], default: 500 },
          src: String
        },
        data: function() {
          return { isBooted: !1 }
        },
        computed: {
          styles: function() {
            return {
              display: 'block',
              opacity: this.isBooted ? 1 : 0,
              transform: 'translate(-50%, '.concat(this.parallax, 'px)')
            }
          }
        },
        mounted: function() {
          this.init()
        },
        methods: {
          init: function() {
            var t = this,
              img = this.$refs.img
            img &&
              (img.complete
                ? (this.translate(), this.listeners())
                : img.addEventListener(
                    'load',
                    function() {
                      t.translate(), t.listeners()
                    },
                    !1
                  ),
              (this.isBooted = !0))
          },
          objHeight: function() {
            return this.$refs.img.naturalHeight
          }
        },
        render: function(t) {
          var e = t('div', { staticClass: 'v-parallax__image-container' }, [
              t('img', {
                staticClass: 'v-parallax__image',
                style: this.styles,
                attrs: { src: this.src, alt: this.alt },
                ref: 'img'
              })
            ]),
            content = t(
              'div',
              { staticClass: 'v-parallax__content' },
              this.$slots.default
            )
          return t(
            'div',
            {
              staticClass: 'v-parallax',
              style: { height: ''.concat(this.height, 'px') },
              on: this.$listeners
            },
            [e, content]
          )
        }
      })
    },
    379: function(t, e, n) {
      'use strict'
      n(10), n(7), n(5), n(4), n(6)
      var r = n(1),
        o = n(102),
        l = n(60),
        c = n(61),
        h = n(0),
        d = n(3),
        f = Object(d.a)(
          o.a,
          Object(l.a)('windowGroup', 'v-window-item', 'v-window')
        )
          .extend()
          .extend()
          .extend({
            name: 'v-window-item',
            directives: { Touch: c.a },
            props: {
              disabled: Boolean,
              reverseTransition: { type: [Boolean, String], default: void 0 },
              transition: { type: [Boolean, String], default: void 0 },
              value: { required: !1 }
            },
            data: function() {
              return { done: null, isActive: !1, wasCancelled: !1 }
            },
            computed: {
              classes: function() {
                return this.groupClasses
              },
              computedTransition: function() {
                return this.windowGroup.internalReverse
                  ? void 0 !== this.reverseTransition
                    ? this.reverseTransition || ''
                    : this.windowGroup.computedTransition
                  : void 0 !== this.transition
                  ? this.transition || ''
                  : this.windowGroup.computedTransition
              }
            },
            mounted: function() {
              this.$el.addEventListener(
                'transitionend',
                this.onTransitionEnd,
                !1
              )
            },
            beforeDestroy: function() {
              this.$el.removeEventListener(
                'transitionend',
                this.onTransitionEnd,
                !1
              )
            },
            methods: {
              genDefaultSlot: function() {
                return this.$slots.default
              },
              genWindowItem: function() {
                return this.$createElement(
                  'div',
                  {
                    staticClass: 'v-window-item',
                    class: this.classes,
                    directives: [{ name: 'show', value: this.isActive }],
                    on: this.$listeners
                  },
                  this.showLazyContent(this.genDefaultSlot())
                )
              },
              onAfterEnter: function() {
                var t = this
                this.wasCancelled
                  ? (this.wasCancelled = !1)
                  : requestAnimationFrame(function() {
                      ;(t.windowGroup.internalHeight = void 0),
                        (t.windowGroup.isActive = !1)
                    })
              },
              onBeforeEnter: function() {
                this.windowGroup.isActive = !0
              },
              onBeforeLeave: function(t) {
                this.windowGroup.internalHeight = Object(h.e)(t.clientHeight)
              },
              onEnterCancelled: function() {
                this.wasCancelled = !0
              },
              onEnter: function(t, e) {
                var n = this,
                  r = this.windowGroup.isBooted
                r && (this.done = e),
                  this.$nextTick(function() {
                    if (!n.computedTransition) return e()
                    ;(n.windowGroup.internalHeight = Object(h.e)(
                      t.clientHeight
                    )),
                      !r && setTimeout(e, 100)
                  })
              },
              onTransitionEnd: function(t) {
                'transform' === t.propertyName &&
                  t.target === this.$el &&
                  this.done &&
                  (this.done(), (this.done = null))
              }
            },
            render: function(t) {
              return t(
                'transition',
                {
                  props: { name: this.computedTransition },
                  on: {
                    afterEnter: this.onAfterEnter,
                    beforeEnter: this.onBeforeEnter,
                    beforeLeave: this.onBeforeLeave,
                    enter: this.onEnter,
                    enterCancelled: this.onEnterCancelled
                  }
                },
                [this.genWindowItem()]
              )
            }
          }),
        v = n(106),
        m = n(29)
      function w(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      function y(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? w(source, !0).forEach(function(e) {
                Object(r.a)(t, e, source[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : w(source).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                )
              })
        }
        return t
      }
      var _ = Object(d.a)(f, m.a)
      e.a = _.extend({
        name: 'v-carousel-item',
        inheritAttrs: !1,
        methods: {
          genDefaultSlot: function() {
            return [
              this.$createElement(
                v.a,
                {
                  staticClass: 'v-carousel__item',
                  props: y({}, this.$attrs, {
                    height: this.windowGroup.internalHeight
                  }),
                  on: this.$listeners
                },
                this.$slots.default
              )
            ]
          },
          genWindowItem: function() {
            var t = this.generateRouteLink(),
              e = t.tag,
              data = t.data
            return (
              (data.staticClass = 'v-window-item'),
              data.directives.push({ name: 'show', value: this.isActive }),
              this.$createElement(
                e,
                data,
                this.showLazyContent(this.genDefaultSlot())
              )
            )
          },
          onBeforeEnter: function() {},
          onEnter: function() {},
          onAfterEnter: function() {},
          onEnterCancelled: function() {}
        }
      })
    },
    380: function(t, e, n) {
      'use strict'
      n(10), n(7), n(5), n(4), n(6)
      var r = n(1),
        o = (n(14), n(363), n(126)),
        l = n(110),
        c = n(38),
        h = n(173),
        d = n(33),
        f = d.a.extend({
          name: 'button-group',
          provide: function() {
            return { btnToggle: this }
          },
          computed: {
            classes: function() {
              return d.a.options.computed.classes.call(this)
            }
          },
          methods: { genData: d.a.options.methods.genData }
        }),
        v = n(0),
        m = n(9)
      function w(object, t) {
        var e = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(object)
          t &&
            (n = n.filter(function(t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable
            })),
            e.push.apply(e, n)
        }
        return e
      }
      e.a = o.a.extend({
        name: 'v-carousel',
        props: {
          continuous: { type: Boolean, default: !0 },
          cycle: Boolean,
          delimiterIcon: { type: String, default: '$vuetify.icons.delimiter' },
          height: { type: [Number, String], default: 500 },
          hideDelimiters: Boolean,
          hideDelimiterBackground: Boolean,
          interval: {
            type: [Number, String],
            default: 6e3,
            validator: function(t) {
              return t > 0
            }
          },
          mandatory: { type: Boolean, default: !0 },
          progress: Boolean,
          progressColor: String,
          showArrows: { type: Boolean, default: !0 },
          verticalDelimiters: { type: String, default: void 0 }
        },
        data: function() {
          return { internalHeight: this.height, slideTimeout: void 0 }
        },
        computed: {
          classes: function() {
            return (function(t) {
              for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {}
                i % 2
                  ? w(source, !0).forEach(function(e) {
                      Object(r.a)(t, e, source[e])
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(source)
                    )
                  : w(source).forEach(function(e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(source, e)
                      )
                    })
              }
              return t
            })({}, o.a.options.computed.classes.call(this), {
              'v-carousel': !0,
              'v-carousel--hide-delimiter-background': this
                .hideDelimiterBackground,
              'v-carousel--vertical-delimiters': this.isVertical
            })
          },
          isDark: function() {
            return this.dark || !this.light
          },
          isVertical: function() {
            return null != this.verticalDelimiters
          }
        },
        watch: {
          internalValue: 'restartTimeout',
          interval: 'restartTimeout',
          height: function(t, e) {
            t !== e && t && (this.internalHeight = t)
          },
          cycle: function(t) {
            t
              ? this.restartTimeout()
              : (clearTimeout(this.slideTimeout), (this.slideTimeout = void 0))
          }
        },
        created: function() {
          this.$attrs.hasOwnProperty('hide-controls') &&
            Object(m.a)('hide-controls', ':show-arrows="false"', this)
        },
        mounted: function() {
          this.startTimeout()
        },
        methods: {
          genControlIcons: function() {
            return this.isVertical
              ? null
              : o.a.options.methods.genControlIcons.call(this)
          },
          genDelimiters: function() {
            return this.$createElement(
              'div',
              {
                staticClass: 'v-carousel__controls',
                style: {
                  left:
                    'left' === this.verticalDelimiters && this.isVertical
                      ? 0
                      : 'auto',
                  right: 'right' === this.verticalDelimiters ? 0 : 'auto'
                }
              },
              [this.genItems()]
            )
          },
          genItems: function() {
            for (
              var t = this, e = this.items.length, n = [], i = 0;
              i < e;
              i++
            ) {
              var r = this.$createElement(
                l.a,
                {
                  staticClass: 'v-carousel__controls__item',
                  props: {
                    icon: !0,
                    small: !0,
                    value: this.getValue(this.items[i], i)
                  }
                },
                [
                  this.$createElement(
                    c.a,
                    { props: { size: 18 } },
                    this.delimiterIcon
                  )
                ]
              )
              n.push(r)
            }
            return this.$createElement(
              f,
              {
                props: { value: this.internalValue, mandatory: this.mandatory },
                on: {
                  change: function(e) {
                    t.internalValue = e
                  }
                }
              },
              n
            )
          },
          genProgress: function() {
            return this.$createElement(h.a, {
              staticClass: 'v-carousel__progress',
              props: {
                color: this.progressColor,
                value: ((this.internalIndex + 1) / this.items.length) * 100
              }
            })
          },
          restartTimeout: function() {
            this.slideTimeout && clearTimeout(this.slideTimeout),
              (this.slideTimeout = void 0),
              window.requestAnimationFrame(this.startTimeout)
          },
          startTimeout: function() {
            this.cycle &&
              (this.slideTimeout = window.setTimeout(
                this.next,
                +this.interval > 0 ? +this.interval : 6e3
              ))
          }
        },
        render: function(t) {
          var e = o.a.options.render.call(this, t)
          return (
            (e.data.style = 'height: '.concat(Object(v.e)(this.height), ';')),
            this.hideDelimiters || e.children.push(this.genDelimiters()),
            (this.progress || this.progressColor) &&
              e.children.push(this.genProgress()),
            e
          )
        }
      })
    }
  }
])
