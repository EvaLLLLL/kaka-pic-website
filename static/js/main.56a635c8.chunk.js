(this["webpackJsonpkaka-pic"]=this["webpackJsonpkaka-pic"]||[]).push([[5],{101:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(11),i=n.n(a),c=(n(101),n(47)),l=n(6),u=n(20),s=n(38),p=n(21),f=n(131),b=n(73);function m(){var e=Object(u.a)(["\n  margin-left: 20px;\n"]);return m=function(){return e},e}function y(){var e=Object(u.a)(["\n  margin-left: auto;\n"]);return y=function(){return e},e}function g(){var e=Object(u.a)(["\n\tpadding: 20px;\n  color: #fff;\n  font-weight: bold;\n  margin-left: 30px;\n  &.active {\n  \tposition: relative;\n  \tcolor: #1790ff;\n  }\n  &.active::after {\n  \tcontent: '';\n  \tdisplay: block;\n  \theight: 3px;\n  \tbackground-color: #1790ff;\n  \tposition: absolute;\n  \tbottom: 0;\n  \tleft: 0;\n  \twidth: 100%;\n  }\n"]);return g=function(){return e},e}function h(){var e=Object(u.a)(["\n  color: #fff;\n"]);return h=function(){return e},e}function O(){var e=Object(u.a)(["\n  height: 30px;\n"]);return O=function(){return e},e}function j(){var e=Object(u.a)(["\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tz-index: 2;\n  padding: 15px 80px;\n  display: flex;\n  align-items: center;\n  background-color: #001528;\n"]);return j=function(){return e},e}var d=p.a.header(j()),w=p.a.img(O()),v=p.a.div(h()),U=Object(p.a)(s.b)(g()),P=p.a.div(y()),k=Object(p.a)(f.a)(m()),E=Object(b.a)((function(){var e=Object(c.a)(),t=e.UserStore,n=e.AuthStore,r=Object(l.f)();return o.a.createElement(d,null,o.a.createElement(w,{src:"./icon.png"}),o.a.createElement("nav",null,o.a.createElement(U,{to:"/",activeClassName:"active",exact:!0},"\u4e0a\u4f20\u56fe\u7247"),o.a.createElement(U,{to:"/history",activeClassName:"active"},"\u4e0a\u4f20\u5386\u53f2"),o.a.createElement(U,{to:"/about",activeClassName:"active"},"\u5173\u4e8e\u6211")),o.a.createElement(P,null,t.currentUser?o.a.createElement(v,null,t.currentUser.attributes.username,o.a.createElement(k,{type:"primary",onClick:function(){n.logout(),r.push("/login")}},"\u6ce8\u9500")):o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{type:"primary",onClick:function(){r.push("/login")}},"\u767b\u5f55"),o.a.createElement(k,{type:"primary",onClick:function(){r.push("/register")}},"\u6ce8\u518c"))))}));function z(){var e=Object(u.a)(["\n\tpadding: 10px;\n\ttext-align: center;\n\tfont-size: 14px;\n\tcolor: #aaa;\n"]);return z=function(){return e},e}var S=p.a.footer(z());var L=function(){return o.a.createElement(S,null,"MIT Licensed | Copyright \xa9 2020-present EvaL")};var x=function(){return o.a.createElement("div",null,"loading...")},D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(4),n.e(8),n.e(11)]).then(n.bind(null,336))})),F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(10)]).then(n.bind(null,337))})),I=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(9)]).then(n.bind(null,334))})),C=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(12)]).then(n.bind(null,327))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(13)]).then(n.bind(null,328))}));var A=function(){var e=Object(c.a)().AuthStore,t=Object(l.f)();return window.localStorage.getItem("username")&&(e.setUsername(window.localStorage.getItem("username")),e.setPassword(window.localStorage.getItem("password")),e.login().then((function(){t.push("/")})).catch((function(e){return alert(e)}))),o.a.createElement(o.a.Fragment,null,o.a.createElement(E,null),o.a.createElement("main",null,o.a.createElement(r.Suspense,{fallback:o.a.createElement(x,null)},o.a.createElement(l.c,null,o.a.createElement(l.a,{path:"/",exact:!0,component:D}),o.a.createElement(l.a,{path:"/history",component:F}),o.a.createElement(l.a,{path:"/about",component:I}),o.a.createElement(l.a,{path:"/login",component:C}),o.a.createElement(l.a,{path:"/register",component:M})))),o.a.createElement(L,null))};n(129);i.a.render(o.a.createElement(s.a,null,o.a.createElement(A,null)),document.getElementById("root"))},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r=n(0),o=n(13),a=n(28),i=n(29),c=n(3),l=(n(53),n(1)),u=n(18),s=n.n(u);s.a.init({appId:"glDaOWsfV5cszOGMREk8a6lF-gzGzoHsz",appKey:"im9LlChHUnpxrfzfpG7SP9W6",serverURL:"https://gldaowsf.lc-cn-n1-shared.com"});var p,f,b,m,y,g,h,O,j,d,w,v,U,P,k=function(e,t){var n=new u.User;return n.setUsername(e),n.setPassword(t),new Promise((function(e,t){n.signUp().then((function(t){return e(t)}),(function(e){return t(e)}))}))},E=function(e,t){return new Promise((function(n,r){u.User.logIn(e,t).then((function(e){return n(e)}),(function(e){return r(e)}))}))},z=function(){u.User.logOut()},S=function(){return u.User.current()},L=function(e,t){var n=new s.a.Object("Image"),r=new s.a.File(t,e);return n.set("filename",t),n.set("owner",s.a.User.current()),n.set("url",r),new Promise((function(e,t){n.save().then((function(t){return e(t)}),(function(e){return t(e)}))}))},x=function(e){var t=e.page,n=void 0===t?0:t,r=e.limit,o=void 0===r?10:r,a=new s.a.Query("Image");return a.include("owner"),a.limit(o),a.skip(n*o),a.descending("createdAt"),a.equalTo("owner",s.a.User.current()),new Promise((function(e,t){a.find().then((function(t){return e(t)})).catch((function(e){return t(e)}))}))},D=new(p=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"currentUser",f,this)}return Object(i.a)(e,[{key:"pullUser",value:function(){this.currentUser=S()}},{key:"resetUser",value:function(){this.currentUser=null}}]),e}(),f=Object(c.a)(p.prototype,"currentUser",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(p.prototype,"pullUser",[l.f],Object.getOwnPropertyDescriptor(p.prototype,"pullUser"),p.prototype),Object(c.a)(p.prototype,"resetUser",[l.f],Object.getOwnPropertyDescriptor(p.prototype,"resetUser"),p.prototype),p),F=n(132),I=new(b=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"list",m,this),Object(o.a)(this,"isLoading",y,this),Object(o.a)(this,"hasMore",g,this),Object(o.a)(this,"page",h,this),this.limit=10}return Object(i.a)(e,[{key:"append",value:function(e){this.list=this.list.concat(e)}},{key:"find",value:function(){var e=this;this.isLoading=!0,x({page:this.page,limit:this.limit}).then((function(t){e.append(t),e.page++,t.length<e.limit&&(e.hasMore=!1)})).catch((function(){F.b.error("\u52a0\u8f7d\u6570\u636e\u5931\u8d25")})).finally((function(){e.isLoading=!1}))}},{key:"reset",value:function(){this.list=[],this.isLoading=!1,this.hasMore=!0,this.page=0}}]),e}(),m=Object(c.a)(b.prototype,"list",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),y=Object(c.a)(b.prototype,"isLoading",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),g=Object(c.a)(b.prototype,"hasMore",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!0}}),h=Object(c.a)(b.prototype,"page",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Object(c.a)(b.prototype,"append",[l.f],Object.getOwnPropertyDescriptor(b.prototype,"append"),b.prototype),Object(c.a)(b.prototype,"find",[l.f],Object.getOwnPropertyDescriptor(b.prototype,"find"),b.prototype),Object(c.a)(b.prototype,"reset",[l.f],Object.getOwnPropertyDescriptor(b.prototype,"reset"),b.prototype),b),C=new(O=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"filename",j,this),Object(o.a)(this,"file",d,this),Object(o.a)(this,"isUploading",w,this),Object(o.a)(this,"serverFile",v,this)}return Object(i.a)(e,[{key:"setFilename",value:function(e){this.filename=e}},{key:"setFile",value:function(e){this.file=e}},{key:"upLoad",value:function(){var e=this;return this.isUploading=!0,this.serverFile=null,new Promise((function(t,n){L(e.file,e.filename).then((function(n){e.serverFile=n,t(n)})).catch((function(e){F.b.error("\u4e0a\u4f20\u5931\u8d25"),n(e)})).finally((function(){e.isUploading=!1}))}))}},{key:"reset",value:function(){this.isUploading=!1,this.serverFile=null}}]),e}(),j=Object(c.a)(O.prototype,"filename",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),d=Object(c.a)(O.prototype,"file",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),w=Object(c.a)(O.prototype,"isUploading",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),v=Object(c.a)(O.prototype,"serverFile",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Object(c.a)(O.prototype,"setFilename",[l.f],Object.getOwnPropertyDescriptor(O.prototype,"setFilename"),O.prototype),Object(c.a)(O.prototype,"setFile",[l.f],Object.getOwnPropertyDescriptor(O.prototype,"setFile"),O.prototype),Object(c.a)(O.prototype,"upLoad",[l.f],Object.getOwnPropertyDescriptor(O.prototype,"upLoad"),O.prototype),Object(c.a)(O.prototype,"reset",[l.f],Object.getOwnPropertyDescriptor(O.prototype,"reset"),O.prototype),O),M=new(U=function(){function e(){Object(a.a)(this,e),Object(o.a)(this,"values",P,this)}return Object(i.a)(e,[{key:"setUsername",value:function(e){this.values.username=e}},{key:"setPassword",value:function(e){this.values.password=e}},{key:"login",value:function(){var e=this;return new Promise((function(t,n){E(e.values.username,e.values.password).then((function(n){e.setLocalUser(e.values.username,e.values.password),D.pullUser(),t(n)})).catch((function(e){F.b.error("\u767b\u5f55\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"),n(e)}))}))}},{key:"register",value:function(){var e=this;return new Promise((function(t,n){k(e.values.username,e.values.password).then((function(e){D.pullUser(),t(e)})).catch((function(e){D.resetUser(),F.b.error("\u6ce8\u518c\u5931\u8d25"),n(e)}))}))}},{key:"logout",value:function(){z(),D.resetUser(),I.reset(),C.reset()}},{key:"setLocalUser",value:function(e,t){window.localStorage.setItem("username",e),window.localStorage.setItem("password",t)}},{key:"getLocalUser",value:function(){this.values.username=window.localStorage.getItem("username"),this.values.password=window.localStorage.getItem("password")}}]),e}(),P=Object(c.a)(U.prototype,"values",[l.m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{username:"",password:""}}}),Object(c.a)(U.prototype,"setUsername",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"setUsername"),U.prototype),Object(c.a)(U.prototype,"setPassword",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"setPassword"),U.prototype),Object(c.a)(U.prototype,"login",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"login"),U.prototype),Object(c.a)(U.prototype,"register",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"register"),U.prototype),Object(c.a)(U.prototype,"logout",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"logout"),U.prototype),Object(c.a)(U.prototype,"setLocalUser",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"setLocalUser"),U.prototype),Object(c.a)(U.prototype,"getLocalUser",[l.f],Object.getOwnPropertyDescriptor(U.prototype,"getLocalUser"),U.prototype),U),A=Object(r.createContext)({AuthStore:M,UserStore:D,ImageStore:C,HistoryStore:I});window.stores={AuthStore:M,UserStore:D,ImageStore:C,HistoryStore:I};var H=function(){return Object(r.useContext)(A)}}},[[130,6,7]]]);
//# sourceMappingURL=main.56a635c8.chunk.js.map