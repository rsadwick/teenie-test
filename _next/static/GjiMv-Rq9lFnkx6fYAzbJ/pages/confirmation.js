(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{cEZL:function(n,t,r){"use strict";r.d(t,"a",(function(){return f}));var e=r("0iUn"),a=r("sLSF"),u=r("MI3g"),l=r("a7VT"),i=r("Tit0"),o=r("q1tI"),c=r.n(o),s=r("SaMd"),d=c.a.createElement,f=function(n){function t(){return Object(e.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return d(s.a,null,(function(n){var t=n.displayBagTotals;return d("div",null,d("h2",null,"Order Summary"),d("p",null,d("strong",null,"Subtotal:")," $",t().subtotal),d("p",null,d("strong",null,"Tax:")," $",t().tax),d("p",null,d("strong",null,"Order Total:")," $",t().grandTotal))}))}}]),t}(c.a.Component)},qP6s:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmation",function(){return r("xUJC")}])},xUJC:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var e=r("0iUn"),a=r("sLSF"),u=r("MI3g"),l=r("a7VT"),i=r("Tit0"),o=r("rt45"),c=r("q1tI"),s=r.n(c),d=r("SaMd"),f=r("cEZL"),p=r("5Yp1"),b=(r("LvDl"),r("vOnD")),v=s.a.createElement;function g(){var n=Object(o.a)(["\n  padding: 1%;\n  background-color: #2EC4B6;\n  background: repeating-linear-gradient(\n  -55deg,\n  #E71D36,\n  #E71D36 10px,\n  #FF9F1C 10px,\n  #FF9F1C 90px\n);\n"]);return g=function(){return n},n}function m(){var n=Object(o.a)(["\n    border: 1px solid #ccc;\n    background: #ccc;\n    border-radius: 5px;\n    margin: 2% 0;\n    opacity: 0.9;\n"]);return m=function(){return n},n}function x(){var n=Object(o.a)(["\n  font-size: 1.3rem;\n  font-weight: 500;\n"]);return x=function(){return n},n}function O(){var n=Object(o.a)(["\n  flex: 1;\n  line-height: 0.7rem;\n"]);return O=function(){return n},n}function h(){var n=Object(o.a)(["\n  flex: 0 0 16%;\n"]);return h=function(){return n},n}function j(){var n=Object(o.a)(["\n  flex: 0 0 14%;\n"]);return j=function(){return n},n}function w(){var n=Object(o.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  \n"]);return w=function(){return n},n}function y(){var n=Object(o.a)(["\n  padding: 15px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 3% 1%;\n"]);return y=function(){return n},n}function k(){var n=Object(o.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n"]);return k=function(){return n},n}var N=b.b.ul(k()),T=b.b.li(y()),C=b.b.div(w()),E=b.b.div(j()),F=(b.b.div(h()),b.b.div(O())),_=b.b.p(x()),D=b.b.hr(m()),M=b.b.div(g()),S=function(n){function t(){return Object(e.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,n),Object(a.a)(t,[{key:"renderMetaData",value:function(n){if(n.metadata&&n.metadata.length>0)return n.metadata.map((function(n,t){return v("div",{key:t},v("p",null,v("strong",null,n.name)," : ",n.value))}))}},{key:"renderNotes",value:function(n){if(n.noteContents)return v("p",null,v("strong",null,"Notes:")," ",n.noteContents)}},{key:"logOrder",value:function(n){n()}},{key:"render",value:function(){var n=this;return v(d.a,null,(function(t){var r=t.bag,e=t.logOrder;return v(p.a,null,v(M,null,v("div",{className:"container"},v("h1",null,"It's Yours!"),v("h4",{className:"hero-heading"},"Your package will arrive soon!"),v("a",{className:"button button-primary",href:"/product/1231"},"shop now"))),v("hr",null),v("div",{className:"row"},v("div",{className:"column _60"},v(N,null,r.map((function(t){return v(T,{key:t.sku},v(C,null,v(E,null,v("img",{src:t.image,alt:t.name})),v(F,null,v(_,null,t.name),v(_,null,"$",t.price),v("p",null,v("strong",null,"Quantity:")," ",t.quantity),n.renderNotes(t),n.renderMetaData(t),n.logOrder(e))),v(D,null))})))),v("div",{className:"column _50"},v(f.a,null))))}))}}]),t}(s.a.Component)}},[["qP6s",1,2,5,3,0,4,6]]]);