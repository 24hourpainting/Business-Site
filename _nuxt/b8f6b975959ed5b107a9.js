;(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    341: function(e, t, r) {
      'use strict'
      r(180)
      var n = r(131)
      t.a = Object(n.a)('flex')
    },
    342: function(e, t, r) {
      'use strict'
      r(180)
      var n = r(131)
      t.a = Object(n.a)('layout')
    },
    349: function(e, t, r) {
      e.exports = r.p + 'img/1b5752a.jpg'
    },
    350: function(e, t, r) {
      var content = r(351)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, r(12).default)('7132a15d', content, !0, { sourceMap: !1 })
    },
    351: function(e, t, r) {
      ;(e.exports = r(11)(!1)).push([
        e.i,
        '.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}',
        ''
      ])
    },
    374: function(e, t, r) {
      'use strict'
      r.r(t)
      var n = {
          data: function() {
            return { banner: r(349) }
          }
        },
        o = r(58),
        c = r(85),
        l = r.n(c),
        d = r(127),
        v = r(69),
        h = (r(10), r(7), r(5), r(4), r(6), r(1))
      r(350)
      function f(object, e) {
        var t = Object.keys(object)
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object)
          e &&
            (r = r.filter(function(e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable
            })),
            t.push.apply(t, r)
        }
        return t
      }
      function x(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {}
          i % 2
            ? f(source, !0).forEach(function(t) {
                Object(h.a)(e, t, source[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : f(source).forEach(function(t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                )
              })
        }
        return e
      }
      var m = r(15).a.extend({
          name: 'v-divider',
          props: { inset: Boolean, vertical: Boolean },
          render: function(e) {
            var t
            return (
              (this.$attrs.role && 'separator' !== this.$attrs.role) ||
                (t = this.vertical ? 'vertical' : 'horizontal'),
              e('hr', {
                class: x(
                  {
                    'v-divider': !0,
                    'v-divider--inset': this.inset,
                    'v-divider--vertical': this.vertical
                  },
                  this.themeClasses
                ),
                attrs: x(
                  { role: 'separator', 'aria-orientation': t },
                  this.$attrs
                ),
                on: this.$listeners
              })
            )
          }
        }),
        w = r(341),
        y = r(106),
        O = r(342),
        component = Object(o.a)(
          n,
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t
            return r(
              'v-layout',
              [
                r(
                  'v-flex',
                  [
                    r(
                      'v-card',
                      {
                        staticClass: 'mx-auto',
                        attrs: { 'max-width': '600', flat: '' }
                      },
                      [
                        r('v-img', {
                          staticClass: 'white--text',
                          attrs: { height: '200px', src: e.banner }
                        }),
                        e._v(' '),
                        r(
                          'v-card-title',
                          { staticClass: 'align-end fill-height' },
                          [e._v('About 24 Hr Painting')]
                        ),
                        e._v(' '),
                        r('v-card-text', [
                          e._v(
                            '\n        We are professional painters with over 10 years of experience on a\n        wide variety of projects and surfaces which makes us capable of any\n        type of job. We have experience in painting outdoor and indoor\n        surfaces made of all materials, such as wood, concrete, or brick.\n      '
                          )
                        ]),
                        e._v(' '),
                        r('v-divider', { staticClass: 'ma-2' }),
                        e._v(' '),
                        r('v-card-title', [e._v('License Information')]),
                        e._v(' '),
                        r('v-card-text', [
                          e._v('\n        License Holder: fredy navarro '),
                          r('br'),
                          e._v(
                            '\n        License Type: C33 - Painting and Decorating (CA) '
                          ),
                          r('br'),
                          e._v('\n        License number: #1042217 '),
                          r('br'),
                          e._v('\n        Valid through 07/31/2020\n      ')
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = component.exports
      l()(component, {
        VCard: d.a,
        VCardText: v.b,
        VCardTitle: v.c,
        VDivider: m,
        VFlex: w.a,
        VImg: y.a,
        VLayout: O.a
      })
    }
  }
])
