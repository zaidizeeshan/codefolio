(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{37:function(n,t,e){"use strict";e.r(t);var r=e(0),o=e.n(r),i=e(5),a=e(33);function c(){var n=x(["\n    color: ","\n"]);return c=function(){return n},n}function l(){var n=x(["\n    color: ",";\n    display: inline-block;\n    margin-right: 10px;\n"]);return l=function(){return n},n}function u(){var n=x(["\n    position: absolute;\n    text-align: center;\n    left: 10px;\n    width: 30px;\n    display: block;\n    color: ",";\n    @media (max-width: 480px) {\n      left: 0;\n      width: 20px;\n    }\n"]);return u=function(){return n},n}function p(){var n=x(["\n    position: absolute;\n    text-align: center;\n    left: -40px;\n    width: 30px;\n    display: block;\n    color: ",";\n"]);return p=function(){return n},n}function d(){var n=x(["\n    position: relative;\n    a {\n        color: inherit;\n    }\n"]);return d=function(){return n},n}function s(){var n=x(["\n    font-size: 1rem;\n    line-height: 1.5rem;\n    padding: 10px 10px 10px 50px;\n    height: calc(100vh - 78px);\n    overflow: auto;\n    cursor: text;\n    position: relative;\n    @media (max-width: 480px) {\n      height: calc(100vh - 73px);\n      padding: 10px 10px 10px 35px;\n    }\n    &::-webkit-scrollbar {\n        width: 4px;\n        height: 4px;\n    }\n    &::-webkit-scrollbar-thumb {\n        border-radius: 10px;\n        background-color: ",";\n    }\n"]);return s=function(){return n},n}function x(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}var f=i.d.div(s(),(function(n){return n.theme.tabsBorderBottom})),h=i.d.div(d()),m=i.d.span(p(),(function(n){return n.theme.textLightColor})),b=i.d.span(u(),(function(n){return n.theme.textLightColor})),v=Object(i.d)(a.a.span)(l(),(function(n){return n.color})),w=Object(i.d)(a.a.pre)(c(),(function(n){return n.color}));t.default=function(n){var t=Object(r.useContext)(i.a),e=n.path,a=e.charAt(0).toUpperCase(),c=e.slice(1),l=n.data&&n.data[e],u="import ".concat(a).concat(c," from '").concat(a).concat(c,"'"),p=0,d="",s=u.split(" ").map((function(n,e){return o.a.createElement(v,{initial:{y:-50},animate:{y:0},transition:{duration:.3},key:n,color:t.headerColor["color".concat(e)]},n)})),x=l.split("\n").map((function(n,e){p>=6&&(p=0),e>=6?(d=t.contentColor["color".concat(p)],p++):d=t.contentColor["color".concat(e)];var r=o.a.createElement(w,{initial:{x:10},animate:{x:0},whileHover:{x:5},transition:{duration:.2},key:"".concat(n+e,"-detail"),color:d},n);return n.includes("href=")&&(r=o.a.createElement(w,{initial:{x:10},animate:{x:0},whileHover:{x:5},transition:{duration:.2},key:"".concat(n+e,"-detail"),color:d,dangerouslySetInnerHTML:{__html:n}})),o.a.createElement(h,{key:e},o.a.createElement(m,null,e+2),r)}));return o.a.createElement(f,null,o.a.createElement(b,null,"1"),s,x)}}}]);