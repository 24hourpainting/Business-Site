(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{388:function(e,t,n){e.exports=n.p+"img/937a086.jpg"},389:function(e,t,n){e.exports=n.p+"img/e397526.jpg"},390:function(e,t,n){e.exports=n.p+"img/d905ee3.jpg"},391:function(e,t,n){e.exports=n.p+"img/29479d9.jpg"},413:function(e,t,n){var map={"./pic (1).jpg":414,"./pic (10).jpg":415,"./pic (11).jpg":388,"./pic (12).jpg":389,"./pic (2).jpg":416,"./pic (3).jpg":417,"./pic (4).jpg":390,"./pic (5).jpg":391,"./pic (6).jpg":418,"./pic (7).jpg":419,"./pic (8).jpg":420,"./pic (9).jpg":421};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=413},414:function(e,t,n){e.exports=n.p+"img/95ccb57.jpg"},415:function(e,t,n){e.exports=n.p+"img/6638594.jpg"},416:function(e,t,n){e.exports=n.p+"img/a11c8c5.jpg"},417:function(e,t,n){e.exports=n.p+"img/11d7dac.jpg"},418:function(e,t,n){e.exports=n.p+"img/8681176.jpg"},419:function(e,t,n){e.exports=n.p+"img/18978ec.jpg"},420:function(e,t,n){e.exports=n.p+"img/2c79883.jpg"},421:function(e,t,n){e.exports=n.p+"img/38c8bbd.jpg"},422:function(e,t,n){e.exports=n.p+"img/a03bf82.jpg"},423:function(e,t,n){e.exports=n.p+"img/a284f08.jpg"},438:function(e,t,n){"use strict";n.r(t);var r={name:"index",data:function(){return{colors:["indigo","warning","pink darken-2","red lighten-1","deep-purple accent-4"],slides:["Welcome to 24 HR Painting Services!","Professional painters with over 10 years of experience","Exterior and Interior painting","Hardwood floor refinishing","Customer satisfaction is our top priority"],slideImg:[n(423),n(391),n(390),n(388),n(389)],reviews:[{name:"Abbey H",rating:5,date:"Jul 25, 2019",photo:"https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q",text:"Fredy and his team were great! Fredy was super responsive and always available if I had any questions. The paint job his team did on the interior of my house was fantastic! So happy I got so lucky with them. Just moved into a new home and it is so nice to have beautifully painted walls. I would recommend them to anyone!"},{name:"Julie S.",rating:5,date:"Jul 18, 2019",photo:"https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q",text:"I was amazed at the quality of work, how timely the crew was, the value and the professionalism. I highly recommend 24hr. painting to anyone who is in need of painting the interior of their home. I have heavy furniture and cats, and moving our items and working around the cats was not an issue. I wish Fredy and his crew much success!"},{name:"Patrick R.",rating:5,date:"Aug 23, 2019",photo:"https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q",text:"We recently had recessed lighting installed, and there were several patches that needed to be covered, texturized and painted. Fredy did an amazing job patching, adding texture to and painting our walls and ceilings throughout our place. When he was finished, it looked like new! He was very hard-working and detail oriented, and he went out of his way to clean up after himself. I would highly recommend him to anyone looking for any kind of painting work. Thank you Fredy for all your great work!"},{name:"Adam C.",rating:5,date:"Jul 1, 2019",photo:"https://lh3.googleusercontent.com/a-/AAuE7mBrN33L5hafLXGacVOzNHrWc3RTV6bMng3sFmB36Q",text:"24HR Painting did an amazing job painting our new home. We had a pretty narrow window between when we got our keys and when we moved our furniture. Fredy was very prompt, gave us a VERY competitive quote (lower than other companies we checked with) and his guys did an amazing job. When my wife saw the results, she said Its like its a different place! Could not recommend more highly"}]}},computed:{posts:function(){return this.$store.getters.featuredPosts},loadedReviews:function(){return this.$store.getters.loadedReviews}},created:function(){this.$store.dispatch("loadPosts"),this.$store.dispatch("loadReviews")}},o=n(62),c=n(91),l=n.n(c),d=n(132),h=n(135),v=n(74),m=n(443),f=n(442),w=n(386),y=n(363),x=n(376),_=n(137),j=n(117),k=n(377),V=n(85),C=n(140),I=n(55),L=n(141),A=n(441),W=n(134),R=n(428),T=n(387),z=n(32),F=n(431),component=Object(o.a)(r,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-flex",[r("v-carousel",{attrs:{cycle:"",progress:"",height:"350","hide-delimiter-background":"","show-arrows-on-hover":""}},e._l(e.slides,function(t,i){return r("v-carousel-item",{key:i},[r("v-sheet",{attrs:{color:"primary",height:"100%"}},[r("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[r("div",{staticClass:"display-3 ma-2"},[e._v(e._s(t))]),e._v(" "),r("v-card")],1)],1)],1)}),1),e._v(" "),r("v-card",{staticClass:"mx-auto",attrs:{flat:""}},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{lg:4,sm:12}},[r("div",{attrs:{id:"firstCol"}},e._l(e.posts,function(t){return r("v-card",{key:t.id,staticClass:"ma-2",attrs:{"max-height":"250",color:"grey lighten-3"}},[r("v-list-item",{attrs:{"three-line":""}},[r("v-list-item-avatar",{attrs:{size:"125",tile:""}},[r("v-img",{attrs:{src:t.imageUrl}})],1),e._v(" "),r("v-list-item-content",{staticClass:"align-self-start"},[r("v-list-item-title",{staticClass:"headline mb-2"},[e._v(e._s(t.title))]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(t.description))])],1)],1)],1)}),1)]),e._v(" "),r("v-col",{attrs:{lg:4,sm:12}},[r("div",{attrs:{id:"middleCol"}},[r("div",{attrs:{id:"Text Content"}},[r("v-card-title",{staticClass:"headline"},[e._v("24 Hr Service")]),e._v(" "),r("v-card-text",[r("p",[e._v("\n                With a wide range of services that suit your every need and\n                requirement, We at 24Hr Service have the know-how and the\n                expertise to get the job done! Let us know how we can help,and\n                we will guarantee your experience with our professionals is\n                enjoyable and satisfactory. We love to hear from our\n                costumers, so feel free to contact us with your feedback!\n              ")])]),e._v(" "),r("v-card-title",{staticClass:"headline"},[e._v("Based In Socal")]),e._v(" "),r("v-card-text",[r("p",[e._v("\n                Skip your search for house painters near you; contact the\n                professional and industry experts . We serve the communities\n                in Los Angeles, Thousand Oaks, Ventura, and neighboring cities\n                in California. Contact us today to have the experts handle\n                your exterior painting in summer.\n              ")])]),e._v(" "),r("v-card-title",{staticClass:"headline"},[e._v("Improve your home value")]),e._v(" "),r("v-card-text",[r("p",[e._v("\n                Are you putting your home on the market this year? Tick curb\n                appeal off your list as soon as you get a new paint job! Your\n                home will look great and it’ll be in top condition!\n              ")])]),e._v(" "),r("v-card-actions",[r("v-spacer")],1)],1),e._v(" "),r("v-container",{attrs:{"grid-list-sm":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},e._l(9,function(e){return r("v-flex",{key:e,attrs:{xs4:"","d-flex":""}},[r("v-card",{staticClass:"d-flex"},[r("v-img",{attrs:{src:n(413)("./pic ("+e+").jpg"),"max-height":225}},[r("v-layout",{attrs:{slot:"placeholder","fill-height":"","align-center":"","justify-center":"","ma-0":""},slot:"placeholder"},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)],1)],1)],1)}),1)],1)],1)]),e._v(" "),r("v-col",{attrs:{lg:4,sm:12}},[r("div",{staticClass:"text-center",attrs:{id:"lastCol"}},[r("v-card-title",{staticClass:"headline"},[e._v("See what our customers have to say")]),e._v(" "),e._l(e.reviews,function(t){return r("div",{key:t.id},[r("v-avatar",{staticClass:"mt-1",attrs:{size:"48"}},[r("v-icon",{attrs:{large:""}},[e._v("mdi-account")])],1),e._v(" "),r("h4",[e._v(e._s(t.name))]),e._v(" "),r("h5",[e._v(e._s(t.date))]),e._v(" "),r("v-card-text",[r("p",[e._v("\n                "+e._s(t.text)+"\n              ")])]),e._v(" "),r("v-rating",{attrs:{"half-increments":"",readonly:"",value:t.rating,size:"35",color:"primary"}})],1)})],2)])],1)],1),e._v(" "),r("v-parallax",{attrs:{src:n(422),height:"400"}},[r("v-overlay",{attrs:{absolute:""}},[r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("div",{staticClass:"headline white--text mb-3 text-xs-center"},[e._v("\n          We always stand behind our work, with customer satisfaction being\n          our #1 priority.\n        ")])])],1)],1)],1)},[],!1,null,null,null);t.default=component.exports;l()(component,{VAvatar:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VCardTitle:v.c,VCarousel:m.a,VCarouselItem:f.a,VCol:w.a,VContainer:y.a,VFlex:x.a,VIcon:_.a,VImg:j.a,VLayout:k.a,VListItem:V.a,VListItemAvatar:C.a,VListItemContent:I.a,VListItemSubtitle:I.b,VListItemTitle:I.c,VOverlay:L.a,VParallax:A.a,VProgressCircular:W.a,VRating:R.a,VRow:T.a,VSheet:z.a,VSpacer:F.a})}}]);