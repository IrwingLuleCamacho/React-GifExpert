(this["webpackJsonpgif-expert"]=this["webpackJsonpgif-expert"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(7),a=n.n(r),i=n(2),s=n(9),o=n(0),u=function(e){var t=e.setCategories,n=Object(c.useState)(""),r=Object(i.a)(n,2),a=r[0],u=r[1];return Object(o.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.trim().length>2&&(t((function(e){return[a].concat(Object(s.a)(e))})),u(""))},className:"form-group",children:Object(o.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){u(e.target.value)},placeholder:"Ingrese la categor\xeda a buscar"})})},l=n(6),d=n.n(l),j=n(8),f=function(){var e=Object(j.a)(d.a.mark((function e(t,n){var c,r,a,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=").concat(n,"&&api_key=4JZwqp4PPkhuBhYO5ivz61jxNukAaPpw"),e.next=3,fetch(c);case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,i=a.data,s=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(e){var t=e.gif;return Object(o.jsx)("div",{className:"d-flex flex-column",children:Object(o.jsx)("img",{src:t.url,className:"img-fluid shadow-1-strong rounded m-1",alt:t.title},t.id)})},b=function(e){var t=e.category,n=function(e,t){var n=Object(c.useState)({data:[],loading:!0}),r=Object(i.a)(n,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){f(e,t).then((function(e){return s({data:e,loading:!1})}))}),[e,t]),a}(t,8),r=n.data,a=n.loading;return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-md-12",children:[Object(o.jsx)("h4",{children:t}),a&&Object(o.jsx)("p",{children:"Loading..."}),Object(o.jsx)("div",{className:"d-md-flex flex-md-row align-items-end mb-3",children:r.map((function(e){return Object(o.jsx)(m,{gif:e},e.id)}))})]})})},g=function(){var e=Object(c.useState)(["Programacion"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(o.jsxs)("div",{className:"container mt-4",children:[Object(o.jsx)("h2",{children:"GifExpertApp"}),Object(o.jsx)(u,{setCategories:r}),Object(o.jsx)("hr",{}),n.map((function(e){return Object(o.jsx)(b,{category:e},e)}))]})},p=(n(16),n(17),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))});a.a.render(Object(o.jsx)(g,{}),document.getElementById("root")),p()}},[[18,1,2]]]);
//# sourceMappingURL=main.bf7f73e3.chunk.js.map