;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    343: function(e, t, r) {
      e.exports = r.p + 'img/937a086.jpg'
    },
    344: function(e, t, r) {
      e.exports = r.p + 'img/e397526.jpg'
    },
    345: function(e, t, r) {
      e.exports = r.p + 'img/d905ee3.jpg'
    },
    346: function(e, t, r) {
      e.exports = r.p + 'img/29479d9.jpg'
    },
    352: function(e, t, r) {
      var map = {
        './pic (1).jpg': 353,
        './pic (10).jpg': 354,
        './pic (11).jpg': 343,
        './pic (12).jpg': 344,
        './pic (2).jpg': 355,
        './pic (3).jpg': 356,
        './pic (4).jpg': 345,
        './pic (5).jpg': 346,
        './pic (6).jpg': 357,
        './pic (7).jpg': 358,
        './pic (8).jpg': 359,
        './pic (9).jpg': 360
      }
      function n(e) {
        var t = o(e)
        return r(t)
      }
      function o(e) {
        if (!r.o(map, e)) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        return map[e]
      }
      ;(n.keys = function() {
        return Object.keys(map)
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = 352)
    },
    353: function(e, t, r) {
      e.exports = r.p + 'img/95ccb57.jpg'
    },
    354: function(e, t, r) {
      e.exports = r.p + 'img/6638594.jpg'
    },
    355: function(e, t, r) {
      e.exports = r.p + 'img/a11c8c5.jpg'
    },
    356: function(e, t, r) {
      e.exports = r.p + 'img/11d7dac.jpg'
    },
    357: function(e, t, r) {
      e.exports = r.p + 'img/8681176.jpg'
    },
    358: function(e, t, r) {
      e.exports = r.p + 'img/18978ec.jpg'
    },
    359: function(e, t, r) {
      e.exports = r.p + 'img/2c79883.jpg'
    },
    360: function(e, t, r) {
      e.exports = r.p + 'img/38c8bbd.jpg'
    },
    361: function(e, t, r) {
      e.exports = r.p + 'img/538b760.jpg'
    },
    362: function(e, t, r) {
      e.exports = r.p + 'img/a284f08.jpg'
    },
    376: function(e, t, r) {
      'use strict'
      r.r(t)
      var n = {
          data: function() {
            return {
              colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4'
              ],
              slides: [
                'Welcome to 24 HR Painting Services!',
                'Professional painters with over 10 years of experience',
                'Exterior and Interior painting',
                'Hardwood floor refinishing',
                'Customer satisfaction is our top priority'
              ],
              slideImg: [r(362), r(346), r(345), r(343), r(344)]
            }
          }
        },
        o = r(58),
        c = r(85),
        l = r.n(c),
        d = r(81),
        v = r(127),
        h = r(69),
        f = r(380),
        m = r(379),
        x = r(332),
        y = r(341),
        j = r(106),
        w = r(342),
        _ = r(378),
        C = r(122),
        k = r(372),
        V = r(30),
        I = r(373),
        component = Object(o.a)(
          n,
          function() {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n(
              'v-flex',
              [
                n(
                  'v-carousel',
                  {
                    attrs: {
                      cycle: '',
                      progress: '',
                      height: '350',
                      'hide-delimiter-background': '',
                      'show-arrows-on-hover': ''
                    }
                  },
                  e._l(e.slides, function(t, i) {
                    return n(
                      'v-carousel-item',
                      { key: i },
                      [
                        n(
                          'v-sheet',
                          { attrs: { color: e.colors[i], height: '100%' } },
                          [
                            n(
                              'v-row',
                              {
                                staticClass: 'fill-height',
                                attrs: { align: 'center', justify: 'center' }
                              },
                              [
                                n('div', { staticClass: 'display-3 ma-2' }, [
                                  e._v(e._s(t))
                                ]),
                                e._v(' '),
                                n(
                                  'v-card',
                                  [
                                    n('v-img', {
                                      attrs: {
                                        'max-width': '400',
                                        'max-height': '250',
                                        src: e.slideImg[i]
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  1
                ),
                e._v(' '),
                n(
                  'v-card',
                  {
                    staticClass: 'mx-auto',
                    attrs: { 'max-width': '750', flat: '' }
                  },
                  [
                    n(
                      'v-row',
                      { attrs: { justify: 'center' } },
                      [
                        n(
                          'v-btn',
                          {
                            staticClass: 'ma-5',
                            attrs: { color: 'primary', nuxt: '', to: '' }
                          },
                          [e._v('Request a quote')]
                        )
                      ],
                      1
                    ),
                    e._v(' '),
                    n('v-card-title', { staticClass: 'headline' }, [
                      e._v('24 Hr Service')
                    ]),
                    e._v(' '),
                    n('v-card-text', [
                      n('p', [
                        e._v(
                          '\n        With a wide range of services that suit your every need and\n        requirement, We at 24Hr Service have the know-how and the expertise to\n        get the job done! Let us know how we can help,and we will guarantee\n        your experience with our professionals is enjoyable and satisfactory.\n        We love to hear from our costumers, so feel free to contact us with\n        your feedback!\n      '
                        )
                      ])
                    ]),
                    e._v(' '),
                    n('v-card-title', { staticClass: 'headline' }, [
                      e._v('Based In Socal')
                    ]),
                    e._v(' '),
                    n('v-card-text', [
                      n('p', [
                        e._v(
                          '\n        Skip your search for house painters near you; contact the professional\n        and industry experts . We serve the communities in Los Angeles,\n        Thousand Oaks, Ventura, and neighboring cities in California. Contact\n        us today to have the experts handle your exterior painting in summer.\n      '
                        )
                      ])
                    ]),
                    e._v(' '),
                    n('v-card-title', { staticClass: 'headline' }, [
                      e._v('Improve your home value')
                    ]),
                    e._v(' '),
                    n('v-card-text', [
                      n('p', [
                        e._v(
                          '\n        Are you putting your home on the market this year? Tick curb appeal\n        off your list as soon as you get a new paint job! Your home will look\n        great and it’ll be in top condition!\n      '
                        )
                      ])
                    ]),
                    e._v(' '),
                    n('v-card-actions', [n('v-spacer')], 1),
                    e._v(' '),
                    n(
                      'v-container',
                      { attrs: { 'grid-list-sm': '', fluid: '' } },
                      [
                        n(
                          'v-layout',
                          { attrs: { row: '', wrap: '' } },
                          e._l(9, function(e) {
                            return n(
                              'v-flex',
                              { key: e, attrs: { xs4: '', 'd-flex': '' } },
                              [
                                n(
                                  'v-card',
                                  { staticClass: 'd-flex' },
                                  [
                                    n(
                                      'v-img',
                                      {
                                        attrs: {
                                          src: r(352)('./pic (' + e + ').jpg'),
                                          'max-height': 225
                                        }
                                      },
                                      [
                                        n(
                                          'v-layout',
                                          {
                                            attrs: {
                                              slot: 'placeholder',
                                              'fill-height': '',
                                              'align-center': '',
                                              'justify-center': '',
                                              'ma-0': ''
                                            },
                                            slot: 'placeholder'
                                          },
                                          [
                                            n('v-progress-circular', {
                                              attrs: {
                                                indeterminate: '',
                                                color: 'grey lighten-5'
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          }),
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                e._v(' '),
                n(
                  'v-parallax',
                  { attrs: { src: r(361), height: '400' } },
                  [
                    n(
                      'v-layout',
                      {
                        attrs: {
                          column: '',
                          'align-center': '',
                          'justify-center': ''
                        }
                      },
                      [
                        n(
                          'div',
                          {
                            staticClass:
                              'headline white--text mb-3 text-xs-center'
                          },
                          [
                            e._v(
                              '\n        We always stand behind our work, with customer satisfaction being our\n        #1 priority.\n      '
                            )
                          ]
                        ),
                        e._v(' '),
                        n(
                          'v-btn',
                          {
                            staticClass: 'blue lighten-2 mt-5',
                            attrs: { dark: '', large: '', href: '' }
                          },
                          [e._v('Create an appointment')]
                        )
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
        VBtn: d.a,
        VCard: v.a,
        VCardActions: h.a,
        VCardText: h.b,
        VCardTitle: h.c,
        VCarousel: f.a,
        VCarouselItem: m.a,
        VContainer: x.a,
        VFlex: y.a,
        VImg: j.a,
        VLayout: w.a,
        VParallax: _.a,
        VProgressCircular: C.a,
        VRow: k.a,
        VSheet: V.a,
        VSpacer: I.a
      })
    }
  }
])
