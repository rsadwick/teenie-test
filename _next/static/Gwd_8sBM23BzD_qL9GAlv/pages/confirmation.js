(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{cEZL:function(n,t,r){"use strict";r.d(t,"a",(function(){return f}));var e=r("0iUn"),a=r("sLSF"),u=r("MI3g"),o=r("a7VT"),l=r("Tit0"),i=r("q1tI"),c=r.n(i),s=r("SaMd"),d=c.a.createElement,f=function(n){function t(){return Object(e.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,n),Object(a.a)(t,[{key:"render",value:function(){return d(s.a,null,(function(n){var t=n.displayBagTotals;return d("div",null,d("h2",null,"Order Summary"),d("p",null,d("strong",null,"Subtotal:")," $",t().subtotal),d("p",null,d("strong",null,"Tax:")," $",t().tax),d("p",null,d("strong",null,"Order Total:")," $",t().grandTotal))}))}}]),t}(c.a.Component)},qP6s:function(n,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/confirmation",function(){return r("xUJC")}])},xUJC:function(n,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return S}));var e=r("0iUn"),a=r("sLSF"),u=r("MI3g"),o=r("a7VT"),l=r("Tit0"),i=r("rt45"),c=r("q1tI"),s=r.n(c),d=r("SaMd"),f=r("cEZL"),p=r("5Yp1"),b=(r("LvDl"),r("vOnD")),g=s.a.createElement;function v(){var n=Object(i.a)(["\n  padding: 1%;\n  background-color: #2EC4B6;\n  background: repeating-linear-gradient(\n  -55deg,\n  #E71D36,\n  #E71D36 10px,\n  #FF9F1C 10px,\n  #FF9F1C 90px\n);\n"]);return v=function(){return n},n}function m(){var n=Object(i.a)(["\n    border: 1px solid #ccc;\n    background: #ccc;\n    border-radius: 5px;\n    margin: 2% 0;\n    opacity: 0.9;\n"]);return m=function(){return n},n}function x(){var n=Object(i.a)(["\n  font-size: 1.3rem;\n  font-weight: 500;\n"]);return x=function(){return n},n}function O(){var n=Object(i.a)(["\n  flex: 1;\n  line-height: 0.7rem;\n"]);return O=function(){return n},n}function h(){var n=Object(i.a)(["\n  flex: 0 0 16%;\n"]);return h=function(){return n},n}function j(){var n=Object(i.a)(["\n  flex: 0 0 14%;\n"]);return j=function(){return n},n}function w(){var n=Object(i.a)(["\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  \n"]);return w=function(){return n},n}function y(){var n=Object(i.a)(["\n  padding: 15px;\n  -webkit-box-shadow: 0 8px 6px -6px #6f6f6f;\n  box-shadow: 0 8px 6px -6px #6f6f6f;\n  border: 1px solid #ccc;\n  margin: 3% 1%;\n"]);return y=function(){return n},n}function k(){var n=Object(i.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 5px;\n"]);return k=function(){return n},n}var T=b.b.ul(k()),N=b.b.li(y()),C=b.b.div(w()),E=b.b.div(j()),F=(b.b.div(h()),b.b.div(O())),_=b.b.p(x()),D=b.b.hr(m()),M=b.b.div(v()),S=function(n){function t(){return Object(e.a)(this,t),Object(u.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(l.a)(t,n),Object(a.a)(t,[{key:"renderMetaData",value:function(n){if(n.metadata&&n.metadata.length>0)return n.metadata.map((function(n,t){return g("div",{key:t},g("p",null,g("strong",null,n.name)," : ",n.value))}))}},{key:"renderNotes",value:function(n){if(n.noteContents)return g("p",null,g("strong",null,"Notes:")," ",n.noteContents)}},{key:"logOrderTransaction",value:function(n){console.log("logging order"),n()}},{key:"render",value:function(){var n=this;return g(d.a,null,(function(t){var r=t.bag,e=t.logOrder;return g(p.a,null,g(M,null,g("div",{className:"container"},g("h1",null,"It's Yours!"),g("h4",{className:"hero-heading"},"Your package will arrive soon!"),g("a",{className:"button button-primary",href:"/product/1231"},"shop now"))),g("hr",null),g("div",{className:"row"},g("div",{className:"column _60"},g(T,null,r.map((function(t){return g(N,{key:t.sku},g(C,null,g(E,null,g("img",{src:t.image,alt:t.name})),g(F,null,g(_,null,t.name),g(_,null,"$",t.price),g("p",null,g("strong",null,"Quantity:")," ",t.quantity),n.renderNotes(t),n.renderMetaData(t))),g(D,null))})))),g("div",{className:"column _50"},g(f.a,null))),n.logOrderTransaction(e))}))}}]),t}(s.a.Component)}},[["qP6s",1,2,5,3,0,17,18]]]);