System.register(["./vendor-legacy.4b7a1652.js"],(function(e,t){"use strict";var n,a,r,l,o,s,i,d,c,u,g,b,p;return{setters:[e=>{n=e.r,a=e.j,r=e.R,l=e.N,o=e._,s=e.a,i=e.F,d=e.i,c=e.B,u=e.b,g=e.c,b=e.d,p=e.e}],execute:function(){const e=r.memo((e=>a(l,{...e,replace:!0}))),m=[{path:"/",element:a(e,{to:"/dashboard"})},{path:"/dashboard",element:function(e){const t=n.exports.lazy(e);return a(n.exports.Suspense,{fallback:a("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:50},children:"Loading..."}),children:a(t,{})})}((()=>o((()=>t.import("./Dashboard-legacy.f204d176.js")),void 0)))}],f=Object.freeze(Object.defineProperty({__proto__:null,default:m},Symbol.toStringTag,{value:"Module"})),h=r.memo((()=>{const e=Object.assign({"./libs/dashboard.tsx":f}),t=[];for(const n in e)t.push(...e[n].default);return a(i,{children:s(t)})})),y=()=>a(h,{}),_={title:"Template"},j={title:"模板"},v=b.createRoot(document.getElementById("root"));d.use(c).use(u).use(g).init({resources:{en:{translation:_},zh:{translation:j}},lng:navigator.language,preload:navigator.languages,fallbackLng:"en_US",debug:!1,interpolation:{escapeValue:!1}}),v.render(a(p,{basename:"/still_label_editor",children:a(y,{})}))}}}));