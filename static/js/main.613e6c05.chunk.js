(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),r=n(7),a=n.n(r),o=(n(12),n(5)),u=n(3),l=n(0),s={border:"3px solid black",fontSize:"40px"},f=function(t){return Object(l.jsxs)("button",{name:t.name,style:s,onClick:t.onClick,children:[" ",t.value," "]})},j={width:"250px",height:"250px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},b=function(t){return Object(l.jsx)("div",{style:j,children:Object(o.a)(Array(9)).map((function(e,n){return Object(l.jsx)(f,{name:n,onClick:function(){return t.onClick(n)},value:t.value[n]},n)}))})},d={width:"300px",margin:"0 auto",display:"grid",fontSize:"40px",fontWeight:"800",textAlign:"center"},O=function(t){return Object(l.jsx)("h1",{name:"msg",style:d,children:t.value})},x={width:"250px",margin:"0 auto",display:"grid",fontSize:"40px",fontWeight:"800"},g=function(t){return Object(l.jsx)("button",{name:"btn",style:x,onClick:t.onClick,children:t.value})},h=function(){var t=Object(i.useState)(Array(9).fill("")),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(i.useState)("X"),a=Object(u.a)(r,2),s=a[0],f=a[1],j=Object(i.useState)("Click to Start"),d=Object(u.a)(j,2),x=d[0],h=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{value:x}),Object(l.jsx)(b,{onClick:function(t){if(""!==s&&""===n[t]){var e=Object(o.a)(n);if(e[t]=s,c(e),function(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var i=Object(u.a)(e[n],3),c=i[0],r=i[1],a=i[2];if(""!==t[c]&&t[c]===t[r]&&t[c]===t[a])return!0}return!1}(e))return h("WON: ".concat(s)),void f("");if(-1===e.indexOf(""))h("DRAW"),f("");else{var i="X"===s?"O":"X";f(i),h("TURN: ".concat(i))}}},value:n}),Object(l.jsx)(g,{onClick:function(){c(Array(9).fill("")),h("Click to start"),f("X")},value:"Refresh"})]})},p=function(){return Object(i.useEffect)((function(){document.title="tic-tac-toe"}),[]),Object(l.jsx)(h,{})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),r(t),a(t)}))};a.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.613e6c05.chunk.js.map