(this["webpackJsonpkcal-counter"]=this["webpackJsonpkcal-counter"]||[]).push([[0],{122:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(13),i=n.n(r),o=(n(122),n(54)),s=n(12),j=n(35),l=n(17),u=n(215),d=n(209),b=n(31),h="http://sipv.gorecan.com:11111/api/v1",m=n(66),O=n.n(m),g=n(3),x={username:"",name:"",id:"",permissions:[],token:""},f=c.a.createContext({isAuthenticated:!1,currentUser:x,loading:!1,error:"",register:function(){},login:function(){},logout:function(){}});function p(){return Object(a.useContext)(f)}var v=function(e){var t=e.children,n=Object(a.useState)(x),c=Object(j.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(!1),s=Object(j.a)(o,2),l=s[0],u=s[1],d=Object(a.useState)(""),b=Object(j.a)(d,2),m=b[0],p=b[1],v=Object(a.useState)(!1),k=Object(j.a)(v,2),w=k[0],y=k[1];Object(a.useEffect)((function(){}),[]);var C={isAuthenticated:l,currentUser:r,loading:w,error:m,register:function(e){y(!0),O()({method:"post",url:"".concat(h,"/register"),data:e}).then((function(e){})).catch((function(e){return p(e.response.data.message)})).then((function(){return y(!1)}))},login:function(e){y(!0),O()({method:"post",url:"".concat(h,"/authenticate"),data:e}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})).then((function(){i({username:"martines3000",name:"Martin Domajnko",id:"id123id123id123",token:"dflksmgklsdfmgkslodnmgkJWTJWT",permissions:[]}),u(!0),y(!1)}))},logout:function(){y(!0),O()({method:"delete",url:"".concat(h,"/session/destory"),headers:{Authorization:""}}).then((function(e){console.log(e)})).catch((function(e){return p(e)})).then((function(){u(!1),y(!1)}))}};return Object(g.jsx)(f.Provider,{value:C,children:t})},k=n(50),w=n(64),y=n(208),C=n(97),N=function(e){var t=e.loading,n=Object(w.a)(e,["loading"]);return Object(g.jsx)(y.a,Object(k.a)(Object(k.a)({},n),{},{children:t?Object(g.jsx)(C.PulseLoader,{size:"8",color:"white"}):n.children}))},S=function(e){var t=e.toggleAction,n=p(),a=n.login,c=n.loading;return n.isAuthenticated?Object(g.jsx)(s.a,{to:"/dashboard"}):Object(g.jsx)(l.c,{initialValues:{username:"",password:""},onSubmit:function(e,t){var n=t.setSubmitting;a(e),n(!1)},children:function(e){var n=e.submitForm,a=e.isSubmitting;return Object(g.jsxs)(l.b,{children:[Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"username",type:"text",label:"Username",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"password",type:"password",label:"Password",component:b.a})}),Object(g.jsxs)(u.a,{margin:1,children:[Object(g.jsx)(N,{loading:c,variant:"contained",color:"primary",disabled:a,onClick:n,children:"Login"}),Object(g.jsx)(d.a,{component:"button",type:"button",variant:"body1",onClick:t,children:"Create an account"})]})]})}})},P=function(e){var t=e.toggleAction,n=p(),a=n.register,c=n.loading;n.error;return Object(g.jsx)(l.c,{initialValues:{firstName:"",lastName:"",username:"",email:"",password:"",confirmPassword:""},onSubmit:function(e,t){var n=t.setSubmitting;a({firstName:e.firstName,lastName:e.lastName,username:e.username,email:e.email,password:e.password}),n(!1)},children:function(e){var n=e.submitForm,a=e.isSubmitting;return Object(g.jsxs)(l.b,{children:[Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"firstName",type:"text",label:"First Name",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"lastName",type:"text",label:"Last Name",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"username",type:"text",label:"Username",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"email",type:"email",label:"Email",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"password",type:"password",label:"Password",component:b.a})}),Object(g.jsx)(u.a,{margin:1,children:Object(g.jsx)(l.a,{name:"confirmPassword",type:"password",label:"Confirm Password",component:b.a})}),Object(g.jsxs)(u.a,{margin:1,children:[Object(g.jsx)(N,{loading:c,variant:"contained",color:"primary",disabled:a,onClick:n,children:"Register"}),Object(g.jsx)(d.a,{component:"button",type:"button",variant:"body1",onClick:t,children:"I already have an account"})]})]})}})},A=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];function r(){c((function(e){return!e}))}return Object(g.jsx)("div",{children:n?Object(g.jsx)(P,{toggleAction:r}):Object(g.jsx)(S,{toggleAction:r})})},F=function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Dashboard page"})})},L=function(){var e=p().currentUser;return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Profile page"}),Object(g.jsx)("div",{children:e.id}),Object(g.jsx)("div",{children:e.name}),Object(g.jsx)("div",{children:e.username}),Object(g.jsx)("div",{children:e.token})]})},T=function(e){var t=e.children,n=Object(w.a)(e,["children"]),a=p().isAuthenticated;return Object(g.jsx)(s.b,Object(k.a)(Object(k.a)({},n),{},{render:function(){return!0===a?t:Object(g.jsx)(s.a,{to:{pathname:"/"}})}}))},U=n(211),B=n(212),D=n(213),M=n(179),E=n(180),J=n(98),I=n.n(J),R=n(99),z=n.n(R),V=n(210),W=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1];return{darkMode:n,toggleDarkMode:function(){c((function(e){return!e}))}}},G=n(100),K=Object(G.a)({palette:{type:"light"}}),q=Object(G.a)({palette:{type:"dark"}}),H=c.a.createContext((function(){}));var Q=function(e){var t=e.children,n=W(),a=n.darkMode,c=n.toggleDarkMode;return Object(g.jsx)(V.a,{theme:a?q:K,children:Object(g.jsx)(H.Provider,{value:c,children:t})})},X=n(46),Y=n(207),Z=Object(U.a)((function(e){return{menuButton:{marginRight:e.spacing(2),edge:"start",color:"inherit"},title:{flexGrow:1},icon:{width:40,height:40},switchToggle:{color:"default"}}})),$=function(){var e=Z(),t=Object(s.g)(),n=p(),c=n.logout,r=n.loading,i=Object(a.useContext)(H),o=Object(X.a)().palette.type;return Object(g.jsx)(B.a,{position:"static",children:Object(g.jsxs)(D.a,{children:[Object(g.jsx)(M.a,{className:e.menuButton,onClick:function(){return t.push("/")},children:Object(g.jsx)(I.a,{})}),Object(g.jsx)(E.a,{className:e.title,variant:"h6",children:"KCAL-COUNTER"}),Object(g.jsx)(Y.a,{className:e.switchToggle,checked:"light"===o,onChange:i}),Object(g.jsx)(M.a,{className:e.menuButton,onClick:function(){return t.push("/profile")},children:Object(g.jsx)(z.a,{className:e.icon})}),Object(g.jsx)(N,{loading:r,variant:"outlined",color:"inherit",onClick:c,children:"Logout"})]})})};var _=function(){return Object(g.jsx)(o.a,{basename:"/kcal-counter",children:Object(g.jsxs)(s.d,{children:[Object(g.jsx)(s.b,{path:"/",exact:!0,component:A}),Object(g.jsxs)(T,{path:"/dashboard",children:[Object(g.jsx)($,{}),Object(g.jsx)(F,{})]}),Object(g.jsxs)(T,{path:"/profile",children:[Object(g.jsx)($,{}),Object(g.jsx)(L,{})]})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,217)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},te=n(214);i.a.render(Object(g.jsx)(Q,{children:Object(g.jsxs)(v,{children:[Object(g.jsx)(te.a,{}),Object(g.jsx)(_,{})]})}),document.getElementById("root")),ee()}},[[175,1,2]]]);
//# sourceMappingURL=main.0f63a7a7.chunk.js.map