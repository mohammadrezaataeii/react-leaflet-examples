(this["webpackJsonpreact-leaflet-examples"]=this["webpackJsonpreact-leaflet-examples"]||[]).push([[5],{35:function(t,n,e){"use strict";e.r(n);var r=e(73),c=e(92),u=e(9),o=e(0),a=e(90),i=e(89),f=e(115),s=e(88),l=e(74),b=e.n(l),p=e(83),O=e(1),j=[52.22977,21.01178],d=function(t){var n=t.mapContainer,e=t.legend;return t.markers.map((function(t,r){return Object(O.jsx)(a.a,{uniceid:r,position:t,draggable:!0,eventHandlers:{moveend:function(t){var n=t.target.getLatLng(),r=n.lat,c=n.lng;e.textContent="change position: ".concat(r," ").concat(c)}},children:Object(O.jsx)(i.a,{children:Object(O.jsx)("button",{onClick:function(){return function(t,n,e){n.eachLayer((function(r){r.options&&"markerPane"===r.options.pane&&r.options.uniceid===t&&(n.removeLayer(r),e.textContent="goodbye marker \ud83d\udca9")}))}(r,n,e)},children:"delete marker \ud83d\udc94"})})},r)}))},v=function(t){var n=t.map,e=Object(o.useState)([]),r=Object(u.a)(e,2),a=r[0],i=r[1],f=Object(o.useState)(),s=Object(u.a)(f,2),l=s[0],p=s[1];return Object(o.useEffect)((function(){if(n){var t=b.a.control({position:"bottomleft"}),e=b.a.DomUtil.create("div","legend");t.onAdd=function(){return e.textContent="click on the map, move the marker, click on the marker",e},t.addTo(n),n.on("click",(function(t){var n=t.latlng,r=n.lat,u=n.lng;i((function(t){return[].concat(Object(c.a)(t),[[r,u]])})),e.textContent="new marker: ".concat(t.latlng),p(e)}))}}),[n]),a.length>0&&void 0!==l?Object(O.jsx)(d,{mapContainer:n,legend:l,markers:a}):null};n.default=function(){var t=Object(o.useState)(null),n=Object(u.a)(t,2),e=n[0],c=n[1];return Object(O.jsxs)(f.a,{whenCreated:c,center:j,zoom:18,scrollWheelZoom:!1,children:[Object(O.jsx)(s.a,Object(r.a)({},p.a)),Object(O.jsx)(v,{map:e})]})}},71:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(73);function c(t,n){var e,c=null!==(e=t.pane)&&void 0!==e?e:n.pane;return c?Object(r.a)(Object(r.a)({},t),{},{pane:c}):t}},72:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){return null!=n&&t.instance.on(n),e.current=n,function(){null!=e.current&&t.instance.off(e.current),e.current=null}}),[t,n])}},73:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function c(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?c(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):c(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e.d(n,"a",(function(){return u}))},75:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(76),u=e(70),o=e(72),a=e(71);function i(t,n){Object(r.useEffect)((function(){var e;return(null!==(e=n.layerContainer)&&void 0!==e?e:n.map).addLayer(t.instance),function(){var e;null==(e=n.layersControl)||e.removeLayer(t.instance),n.map.removeLayer(t.instance)}}),[n,t])}function f(t){return function(n){var e=Object(u.d)(),r=t(Object(a.a)(n,e),e);return Object(c.a)(e.map,n.attribution),Object(o.a)(r.current,n.eventHandlers),i(r.current,e),r}}},76:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){var e=Object(r.useRef)(n);Object(r.useEffect)((function(){n!==e.current&&null!=t.attributionControl&&(null!=e.current&&t.attributionControl.removeAttribution(e.current),null!=n&&t.attributionControl.addAttribution(n)),e.current=n}),[t,n])}},78:function(t,n,e){"use strict";e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return f})),e.d(n,"c",(function(){return s}));var r=e(9),c=e(0),u=e.n(c),o=e(16),a=e(70);function i(t){function n(n,e){var r=t(n).current,o=r.instance,i=r.context;return Object(c.useImperativeHandle)(e,(function(){return o})),null==n.children?null:u.a.createElement(a.c,{value:i},n.children)}return Object(c.forwardRef)(n)}function f(t){function n(n,e){var u=Object(c.useState)(!1),a=Object(r.a)(u,2),i=a[0],f=a[1],s=t(n,f).current.instance;Object(c.useImperativeHandle)(e,(function(){return s})),Object(c.useEffect)((function(){i&&s.update()}),[s,i,n.children]);var l=s._contentNode;return l?Object(o.createPortal)(n.children,l):null}return Object(c.forwardRef)(n)}function s(t){function n(n,e){var r=t(n).current.instance;return Object(c.useImperativeHandle)(e,(function(){return r})),null}return Object(c.forwardRef)(n)}},79:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"a",(function(){return f}));var r=e(0),c=e(70),u=e(72),o=e(75),a=e(71);function i(t,n){var e=Object(r.useRef)();Object(r.useEffect)((function(){if(n.pathOptions!==e.current){var r,c=null!==(r=n.pathOptions)&&void 0!==r?r:{};t.instance.setStyle(c),e.current=c}}),[t,n])}function f(t){return function(n){var e=Object(c.d)(),r=t(Object(a.a)(n,e),e);return Object(u.a)(r.current,n.eventHandlers),Object(o.b)(r.current,e),i(r.current,n),r}}},80:function(t,n,e){"use strict";e.d(n,"a",(function(){return c}));var r=e(0);function c(t,n){return null==n?function(n,e){return Object(r.useRef)(t(n,e))}:function(e,c){var u=Object(r.useRef)(t(e,c)),o=Object(r.useRef)(e),a=u.current.instance;return Object(r.useEffect)((function(){o.current!==e&&(n(a,e,o.current),o.current=e)}),[a,e,c]),u}}},81:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(0),c=e(70);function u(t){return function(n){var e=Object(c.d)(),u=t(n,e),o=u.current.instance,a=Object(r.useRef)(n.position),i=n.position;return Object(r.useEffect)((function(){return o.addTo(e.map),function(){o.remove()}}),[e.map,o]),Object(r.useEffect)((function(){null!=i&&i!==a.current&&(o.setPosition(i),a.current=i)}),[o,i]),u}}},82:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(76),c=e(70),u=e(72),o=e(71);function a(t,n){return function(e,a){var i=Object(c.d)(),f=t(Object(o.a)(e,i),i);return Object(r.a)(i.map,e.attribution),Object(u.a)(f.current,e.eventHandlers),n(f.current,i,e,a),f}}},83:function(t,n,e){"use strict";n.a={attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}},85:function(t,n,e){"use strict";e.d(n,"a",(function(){return f})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return l})),e.d(n,"d",(function(){return b})),e.d(n,"e",(function(){return p}));var r=e(78),c=e(81),u=e(80),o=e(75),a=e(82),i=e(79);function f(t){var n=Object(u.a)((function(n,e){return{instance:t(n),context:e}})),e=Object(c.a)(n);return Object(r.c)(e)}function s(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.a)(c)}function l(t,n){var e=Object(u.a)(t),c=Object(a.a)(e,n);return Object(r.b)(c)}function b(t,n){var e=Object(u.a)(t,n),c=Object(i.a)(e);return Object(r.a)(c)}function p(t,n){var e=Object(u.a)(t,n),c=Object(o.a)(e);return Object(r.c)(c)}},87:function(t,n,e){"use strict";function r(t,n,e){var r=n.opacity,c=n.zIndex;null!=r&&r!==e.opacity&&t.setOpacity(r),null!=c&&c!==e.zIndex&&t.setZIndex(c)}e.d(n,"a",(function(){return r}))},88:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));var r=e(84),c=e(85),u=e(71),o=e(87),a=e(74),i=Object(c.e)((function(t,n){var e=t.url,c=Object(r.a)(t,["url"]);return{instance:new a.TileLayer(e,Object(u.a)(c,n)),context:n}}),o.a)},89:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var r=e(85),c=e(74),u=e(0),o=Object(r.c)((function(t,n){return{instance:new c.Popup(t,n.overlayContainer),context:n}}),(function(t,n,e,r){var c=e.onClose,o=e.onOpen,a=e.position;Object(u.useEffect)((function(){var e=t.instance;function u(t){t.popup===e&&(e.update(),r(!0),null==o||o())}function i(t){t.popup===e&&(r(!1),null==c||c())}return n.map.on({popupopen:u,popupclose:i}),null==n.overlayContainer?(null!=a&&e.setLatLng(a),e.openOn(n.map)):n.overlayContainer.bindPopup(e),function(){n.map.off({popupopen:u,popupclose:i}),n.map.removeLayer(e)}}),[t,n,r,c,o,a])}))},90:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e(73),c=e(84),u=e(85),o=e(74),a=Object(u.b)((function(t,n){var e=t.position,u=Object(c.a)(t,["position"]),a=new o.Marker(e,u);return{instance:a,context:Object(r.a)(Object(r.a)({},n),{},{overlayContainer:a})}}),(function(t,n,e){n.position!==e.position&&t.setLatLng(n.position),null!=n.icon&&n.icon!==e.icon&&t.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==e.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==e.opacity&&t.setOpacity(n.opacity),null!=t.dragging&&n.draggable!==e.draggable&&(!0===n.draggable?t.dragging.enable():t.dragging.disable())}))},92:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(11);var c=e(17);function u(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(c.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);