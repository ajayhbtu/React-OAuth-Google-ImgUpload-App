(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(0),s=c(3),i=c.n(s),j=c(2),a=c(7),r=c.n(a);var u=function(e){var t=Object(o.useState)("Guest"),c=Object(j.a)(t,2),s=c[0],i=c[1],u=Object(o.useState)(""),l=Object(j.a)(u,2),b=l[0],O=l[1],g=Object(o.useState)(""),d=Object(j.a)(g,2),f=d[0],m=d[1],h=Object(o.useState)(!1),x=Object(j.a)(h,2),p=x[0],v=x[1];return p?Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Welcome ",s,"!"]}),Object(n.jsx)("p",{children:b}),Object(n.jsx)("img",{src:f,alt:"Guest"===s?"":s})]}),Object(n.jsx)(a.GoogleLogout,{clientId:"159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(){v(!1),console.log("Logout made successfully"),alert("Logout made successfully \u270c")}})]}):Object(n.jsxs)("div",{children:[Object(n.jsxs)("h2",{children:["Welcome ",s,"!"]}),Object(n.jsx)(r.a,{clientId:"159620068686-ijluvm55n3rb6mi7jtjf8j350shu0odk.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){i(e.profileObj.name),O(e.profileObj.email),m(e.profileObj.imageUrl),v(!0)},onFailure:function(e){console.log("Login failed: res:",e),alert("Failed to login!")},cookiePolicy:"single_host_origin",isSignedIn:!0})]})},l=c(8),b=c(10),O=c(9),g=c.n(O);var d=function(e){var t=Object(o.useState)([]),c=Object(j.a)(t,2),s=c[0],i=c[1];return Object(n.jsx)(g.a,Object(l.a)(Object(l.a)({},e),{},{withIcon:!0,onChange:function(e){i([].concat(Object(b.a)(s),[e]))},imgExtension:[".jpg",".jpeg",".png",".gif"],maxFileSize:5242880}))};c(24);var f=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsx)(d,{className:"img-container",withPreview:!0})]})};i.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.a0b80f2c.chunk.js.map