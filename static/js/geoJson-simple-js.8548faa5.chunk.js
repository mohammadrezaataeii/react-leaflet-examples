(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[24],{51:function(e,t,a){"use strict";a.r(t);var n=a(73),o=a(9),c=a(0),r=a(115),l=a(88),i=a(111),s=a(74),u=a.n(s),p=a(101),f=a(83),b=a(1),d=[52,19.2];function j(e,t){t.bindPopup(e.properties.nazwa)}t.default=function(){var e=Object(c.useState)(null),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){if(a){var e=u.a.control({position:"bottomleft"});e.onAdd=function(){var e=u.a.DomUtil.create("div","legend");return e.innerHTML="click on polygon",e},e.addTo(a)}}),[a]),Object(b.jsxs)(r.a,{whenCreated:s,center:d,zoom:6,scrollWheelZoom:!1,children:[Object(b.jsx)(l.a,Object(n.a)({},f.a)),Object(b.jsx)(i.a,{data:p,onEachFeature:j})]})}}}]);