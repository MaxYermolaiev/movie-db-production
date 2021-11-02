(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){},38:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),i=a.n(c),s=a(2),o=(a(38),a(33)),l=a(18),u={movies:[],loading:!0,errors:null},d=function(e,t){for(var a=-1,n=0;n<t.length;n++)t[n].id===e&&(a=n);return a},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MOVIE_REQUEST":return Object(s.a)(Object(s.a)({},e),{},{loading:!0,errors:null});case"FETCH_MOVIE_LOADED":return{movies:t.payload,loading:!1,errors:null};case"FETCH_MOVIE_ERROR":return{movies:e.movies,loading:!1,errors:t.payload};case"ADD_MOVIE":var a=e.movies;a.push(t.payload);var n={errors:null,movies:a,loading:!1};return n;case"REMOVE_MOVIE":var r=d(t.payload.id,e.movies),c={errors:null,loading:!1,movies:[].concat(Object(l.a)(e.movies.slice(0,r)),Object(l.a)(e.movies.slice(r+1)))};return c;default:return e}},b=Object(o.a)(j),h=a(14),m=a.n(h),p=a(19),O=a(6),f=a(7),v=function(){function e(){var t=this;Object(O.a)(this,e),this.api_key="39a8f3cf691a2a2d1a329867c1095d19",this.path="https://api.themoviedb.org/3/",this.request=function(){var e=Object(p.a)(m.a.mark((function e(a){var n,r,c,i,s,o,l=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,c=l.length>3&&void 0!==l[3]?l[3]:{},e.prev=3,null===r&&!c.credentials){e.next=22;break}return r&&(r=t.transformToJSON(r),c["Content-type"]="application/json"),e.next=8,fetch(a,{method:n,body:r,headers:c});case 8:if((i=e.sent).ok){e.next=17;break}return console.log("Trouble in server side"),e.next=13,i.json();case 13:throw e.sent.errors;case 17:return e.next=19,i.json();case 19:case 33:return e.abrupt("return",e.sent);case 20:e.next=34;break;case 22:return e.next=24,fetch("".concat(t.path).concat(a));case 24:if((s=e.sent).ok){e.next=31;break}return console.log("can't fetch response"),e.next=29,s.json();case 29:throw o=e.sent,new Error(o.errors);case 31:return e.next=33,s.json();case 34:e.next=39;break;case 36:throw e.prev=36,e.t0=e.catch(3),e.t0;case 39:case"end":return e.stop()}}),e,null,[[3,36]])})));return function(t){return e.apply(this,arguments)}}(),this.getImg=function(e){return"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(e)},this.getPopularMovies=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("movie/popular?api_key=".concat(t.api_key,"&language=en-US&page=").concat(a));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getBySearch=function(){var e=Object(p.a)(m.a.mark((function e(a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!a){e.next=4;break}return e.next=3,t.request("search/movie?api_key=".concat(t.api_key,"&language=en-US&query=").concat(n,"&page=").concat(a));case 3:case 6:return e.abrupt("return",e.sent);case 4:return e.next=6,t.request("search/movie?api_key=".concat(t.api_key,"&language=en-US&query=").concat(n));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getByGenre=function(){var e=Object(p.a)(m.a.mark((function e(a,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n||!a){e.next=4;break}return e.next=3,t.request("discover/movie?api_key=".concat(t.api_key,"&language=en-US&&include_adult=false&&page=").concat(a,"&with_genres=").concat(n));case 3:case 6:return e.abrupt("return",e.sent);case 4:return e.next=6,t.request("genre/movie/list?api_key=".concat(t.api_key,"&language=en-US"));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.getMovieDetails=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("movie/".concat(a,"?api_key=").concat(t.api_key,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getRecommendations=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request("movie/".concat(a,"/recommendations?api_key=").concat(t.api_key,"&language=en-US&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}return Object(f.a)(e,[{key:"transformToJSON",value:function(e){return JSON.stringify(e)}}]),e}(),g=r.a.createContext(),x=g.Consumer,y=g.Provider,N=a(15),E=a(3),w=a(4),k=a(9),_=a(8),S=a(0),C=new v,D=function(e){return function(t){return function(a){return Object(S.jsx)(x,{children:function(n){var r=e?Object(s.a)(Object(s.a)({},e(C)),{},{engine:C},n):Object(s.a)(Object(s.a)({},n),{},{engine:C});return Object(S.jsx)(t,Object(s.a)(Object(s.a)({},a),r))}})}}},I=(a(28),function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component)),P=D()((function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(w.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("disabled"),o=Object(w.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)({}),j=Object(w.a)(d,2),b=j[0],h=j[1],m=Object(E.g)();Object(n.useEffect)((function(){var e=(new Oe).validateLogin(r);h(Object(s.a)({},e)),0===Object.keys(e).length?(u(null),h({})):(h(Object(s.a)({},e)),u("disabled"))}),[r]);return Object(S.jsx)(I,{children:Object(S.jsx)("div",{className:"forms",children:Object(S.jsx)("form",{children:Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("legend",{children:Object(S.jsx)("h4",{className:"text-secondary fw-bold",children:"User authentication"})}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label mt-3 fst-italic",children:"Email address"}),Object(S.jsx)("input",{type:"email",className:"form-control auth-input",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{email:e.target.value}))}}),Object(S.jsx)("small",{className:"auth-error text-danger fst-italic",children:(null===b||void 0===b?void 0:b.email)&&r.email.length>1?b.email:null})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label mt-4 fst-italic",children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control auth-input",id:"exampleInputPassword1",placeholder:"Password",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{password:e.target.value}))}}),Object(S.jsx)("small",{className:"auth-error text-danger fst-italic",children:(null===b||void 0===b?void 0:b.password)&&r.password.length>1?b.password:null})]}),Object(S.jsx)("button",{type:"submit",className:"btn btn-primary btn-registration mt-3",onClick:function(t){t.preventDefault(),e.engine.request("https://yermolaiev-movie-db.herokuapp.com/api/login","POST",r,{}).then((function(t){e.login(t.jwt,t.id),m.push("/popular/1")})).catch((function(e){var t="some where occurred mistake - ".concat(e);h({email:t})}))},disabled:l,children:"Submit"})]})})})})})),F=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component);var M=D()((function(e){var t=Object(n.useState)({email:"",password:"",data:{city:"",phone:"",nick:""}}),a=Object(w.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)("disabled"),o=Object(w.a)(i,2),l=o[0],u=o[1],d=Object(n.useState)(!1),j=Object(w.a)(d,2),b=j[0],h=j[1],m=Object(n.useState)(null),p=Object(w.a)(m,2),O=p[0],f=p[1],v=Object(n.useState)(null),g=Object(w.a)(v,2),x=g[0],y=g[1],N=new Oe,k=Object(E.g)();return Object(n.useEffect)((function(){var e=N.validateRegistartion(r);0===Object.keys(e).length?u(null):u("disabled")}),[r]),(null===x||void 0===x?void 0:x.status)?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("h1",{children:"".concat(null===x||void 0===x?void 0:x.message)}),Object(S.jsx)("h3",{children:"You will be redirected to login page via ".concat(x.time," secconds...")})]}):b?Object(S.jsx)(q,{}):Object(S.jsx)(F,{children:Object(S.jsx)("form",{children:Object(S.jsxs)("fieldset",{children:[Object(S.jsx)("legend",{children:Object(S.jsx)("h4",{className:"text-secondary fw-bold",children:"Registration new user"})}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label mt-4 fst-italic fs-7",children:"Email address"}),Object(S.jsx)("input",{type:"email",className:"form-control auth-input",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{email:e.target.value}))}})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label mt-2 fst-italic fs-7",children:"Password"}),Object(S.jsx)("input",{type:"password",className:"form-control auth-input",id:"exampleInputPassword1",placeholder:"Password",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{password:e.target.value}))}}),Object(S.jsx)("small",{id:"passHelp",className:"form-text text-muted",children:"Pay attention-only digits."})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{htmlFor:"inputDefault",className:"col-form-label mt-2 fst-italic fs-7",children:"Type your native city"}),Object(S.jsx)("input",{type:"text",className:"form-control auth-input",placeholder:"Where are you from",id:"inputDefault",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{data:Object(s.a)(Object(s.a)({},r.data),{},{city:e.target.value})}))}})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{className:"col-form-label mt-2 fst-italic",htmlFor:"inputDefault",children:"Type your number"}),Object(S.jsx)("input",{type:"text",className:"form-control auth-input",placeholder:"Phone number",id:"inputDefault",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{data:Object(s.a)(Object(s.a)({},r.data),{},{phone:e.target.value})}))}}),Object(S.jsx)("small",{id:"passHelp",className:"form-text text-muted",children:"Pay attention-start from +380."})]}),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{className:"col-form-label mt-2 fst-italic",htmlFor:"inputDefault",children:"Type your nickname"}),Object(S.jsx)("input",{type:"text",className:"form-control auth-input",placeholder:"Nickname",id:"inputDefault",onChange:function(e){return c(Object(s.a)(Object(s.a)({},r),{},{data:Object(s.a)(Object(s.a)({},r.data),{},{nick:e.target.value})}))}})]}),Object(S.jsx)("button",{type:"submit",className:"btn btn-primary btn-registration mt-3",disabled:l,onClick:function(t){t.preventDefault(),h(!0),e.engine.request("https://yermolaiev-movie-db.herokuapp.com/api/registration","POST",r).then((function(e){h(!1),f(null),y({status:!0,message:e.message,time:5}),new Promise((function(e){var t,a=setTimeout((function(){t=setInterval((function(){return y(Object(s.a)(Object(s.a)({},x),{},{time:x.time-1}))}),1e3)}),5e3);clearInterval(t),clearTimeout(a),e()})).then((function(e,t){k.push("/authentication")}))})).catch((function(e){h(!1),console.log(e),f(e)}))},children:"Register me!"}),O?Object(S.jsx)("div",{className:"alert alert-danger",role:"alert",children:O}):null]})})})})),T=(a(46),D()((function(e){var t=Object(n.useState)("disabled"),a=Object(w.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)([]),s=Object(w.a)(i,2),o=s[0],l=s[1],u=Object(n.useState)(""),d=Object(w.a)(u,2),j=d[0],b=d[1],h=Object(E.g)(),m=function(e){e.target.value="",l(null)},p=function(t,a){"logout"===a&&(e.logout(),h.push("/")),"login"===a&&h.push("/authentication"),"register"===a&&h.push("/registration")};return Object(S.jsx)("nav",{className:"navbar navbar-expand-sm navbar-light bg-light",children:Object(S.jsx)("div",{className:"container-fluid",children:Object(S.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarColor03",children:[Object(S.jsx)("ul",{className:"navbar-nav me-auto",children:e.id||e.token?Object(S.jsx)("button",{className:"btn btn-primary my-2 my-sm-0 auth-btn",type:"submit",onClick:function(e){return p(0,"logout")},children:"Logout"}):Object(S.jsxs)("div",{className:"header-button",children:[Object(S.jsx)("button",{className:"btn btn-primary my-2 my-sm-0 auth-btn",type:"submit",onClick:function(e){return p(0,"login")},children:"Login"}),Object(S.jsx)("span",{className:"m-1",children:"or"}),Object(S.jsx)("button",{className:"btn btn-primary my-2 my-sm-0 auth-btn",type:"submit",onClick:function(e){return p(0,"register")},children:"Register"})]})}),Object(S.jsxs)("form",{className:"d-flex",children:[Object(S.jsx)("input",{className:"form-control me-sm-2 search-input","data-toggle":"dropdown",type:"text",placeholder:"Type here",onChange:function(t){return function(t,a){a.length>=2?(b(a),c(null),l([]),e.engine.getBySearch(null,a).then((function(e){var a=[];0===e.results.length?a.push(Object(S.jsx)("div",{class:"p-2 bd-highlight",children:"No data of search"},1)):a=e.results.map((function(e,a){return Object(S.jsx)("div",{class:"p-2 bd-highlight",onClick:function(){m(t),h.push("/movie_detail/".concat(e.id))},children:e.original_title},a)})),l(a)}))):(b(a),c("disabled"),l([]))}(t,t.target.value)}}),Object(S.jsx)("button",{className:"btn btn-success my-2 my-sm-0 btn-search",type:"button",disabled:r,onClick:function(e){e.preventDefault(),h.push("/search/1/".concat(j))},children:"Search"}),Object(S.jsx)("div",{class:"d-flex flex-column bd-highlight pos-absolute",children:o})]})]})})})}))),R=(a(47),a(17)),A=function(e){return{type:"FETCH_MOVIE_ERROR",payload:e}},U=D()(Object(R.b)(null,(function(e,t){var a=t.token,n=t.engineGetFavorite;return{getFavoriteMovie:function(){return function(e,t,a){a({type:"FETCH_MOVIE_REQUEST"}),t(e).then((function(e){a({type:"FETCH_MOVIE_LOADED",payload:e.UserStorage})})).catch((function(e){a(A(e))}))}(a,n,e)}}}))((function(e){e.token&&e.getFavoriteMovie();var t=Object(E.g)(),a=function(e,t){return Math.trunc(Math.random()*(t-e)+e)};return Object(S.jsxs)("div",{className:"list-group",children:[Object(S.jsx)("li",{className:"list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center text-decoration-none",onClick:function(){e.engine.getPopularMovies(a(1,500)).then((function(e){var n="/random_movie/".concat(e.results[a(0,19)].id);t.push(n)})).catch((function(e){return e}))},children:Object(S.jsx)("span",{className:"side-bar-text text-secondary",children:"Random movie"})}),Object(S.jsx)("li",{className:"list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center ",children:Object(S.jsx)(N.b,{to:"/popular/1",children:Object(S.jsx)("span",{className:"side-bar-text text-secondary",children:"Popular"})})}),Object(S.jsx)("li",{className:"list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center",children:Object(S.jsx)(N.b,{to:"/genres",children:Object(S.jsx)("span",{className:"side-bar-text text-secondary",children:"Genres"})})}),e.credentials?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("span",{className:"list-group-item sidebar list-group-item-action d-flex justify-content-between align-items-center",children:Object(S.jsx)(N.b,{to:"/favorite",children:Object(S.jsx)("span",{className:"side-bar-text text-secondary",children:"Favorite"})})})}):Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("span",{className:"list-group-item sidebar list-group-item-action disabled d-flex justify-content-between align-items-center",children:Object(S.jsx)(N.b,{to:"/favorite",children:Object(S.jsx)("span",{className:"side-bar-text text-secondary",children:"Favorite"})})})})]})}))),V=a.p+"static/media/Loading.d1912aee.SVG";function q(){return Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:V,alt:"error icon"})})}var H=function(e){return Object(S.jsxs)("div",{className:"row d-flex",children:[Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("h1",{children:"Some terryfy error occured"}),Object(S.jsx)("h3",{children:"Error details: ".concat(null===e||void 0===e?void 0:e.message)})]}),Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("h1",{children:"Some terryfy error occured"}),Object(S.jsx)("h3",{children:"We`re working on it fixing"})]})]})};a(49);function W(e){var t=e.current_page,a=e.total_page,r=e.itteractingWithPage,c=Object(n.useState)([]),i=Object(w.a)(c,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){if(t&&a){var e=function(){var e=[];if(1===a)return[t];for(var n=t;n>=t-2&&(e.push(n),1!==n);n--);var r=3-e.length;if(0===r)for(var c=t+1;c<=t+2&&(e.push(c),c!==a);c++);else for(var i=t+1;i<=t+2+r&&(e.push(i),i!==a);i++);return e.sort((function(e,t){return e-t}))}().map((function(e,a){return e===t?Object(S.jsx)("li",{className:"page-item active m-2",onClick:function(){return r(e)},children:Object(S.jsx)("span",{className:"page-link",children:e})},a):Object(S.jsx)("li",{className:"page-item m-2",onClick:function(){return r(e)},children:Object(S.jsx)("span",{className:"page-link",children:e})},a)}));o(Object(l.a)(e))}}),[t,a]),Object(S.jsx)("div",{children:Object(S.jsx)("ul",{className:"pagination",children:s})})}a(50);var G=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component),L=function(e){var t=Object(n.useState)({data:!1,loading:!1,error:!1}),a=Object(w.a)(t,2),r=a[0],c=a[1],i=Object(E.g)();return Object(n.useEffect)((function(){c({data:!1,loading:!0,error:!1}),e.getData().then((function(e){var t=e.genres.map((function(e,t){return Object(S.jsx)("div",{className:"col",children:Object(S.jsx)("div",{className:"card text-center m-1 genres-card",children:Object(S.jsx)("div",{className:"card-body",children:Object(S.jsx)("h5",{className:"card-title genres-card fst-italic",onClick:function(){return i.push("/genre/1/".concat(e.id))},children:e.name})})})},t)}));c({data:t,loading:!1,error:!1})})).catch((function(e){c({data:!1,loading:!1,error:e.message})}))}),[]),r.error||!r.data?Object(S.jsx)(H,{message:r.error}):r.loading?Object(S.jsx)(q,{}):Object(S.jsx)(G,{children:Object(S.jsxs)("div",{className:"container-fluid",children:[Object(S.jsx)("div",{className:"card text-center m-1",children:Object(S.jsx)("h3",{className:"genre-header fw-bold fst-italic",children:"Please select category:"})}),Object(S.jsx)("div",{className:"row ",children:r.data})]})})},B=function(e){return function(t){Object(k.a)(n,t);var a=Object(_.a)(n);function n(){var e;Object(O.a)(this,n);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={data:null,error:!1,loading:!1,current_page:1,total_page:null,search:null},e.getParamsPage=function(){return{page:e.props.match.params.page,search:e.props.match.params.id}},e.itteractingWithPage=function(t){e.setState((function(e){return{current_page:t}}))},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){var e=this.getParamsPage(),t=e.page,a=e.search;this.setState({loading:!0,search:a,current_page:t}),"undefined"!==a?this.fetchData(t,a):this.fetchData(t)}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.current_page===t.current_page&&this.props.getData===e.getData&&this.props.match.params.id===e.match.params.id||(this.setState((function(e){return{loading:!0,search:a.props.match.params.id}})),"undefined"!==this.state.search?this.fetchData(this.state.current_page,this.state.search):this.fetchData(this.state.current_page))}},{key:"fetchData",value:function(e,t){var a=this;this.props.getData(e,t).then((function(e){a.setState((function(t){return{data:e.results,error:!1,loading:!1,current_page:e.page,total_page:e.total_pages}}))})).catch((function(e){return a.setState({data:null,error:!0,loading:!1,current_page:null,total_page:null})}))}},{key:"render",value:function(){var t=this.state,a=t.error,n=t.data,r=t.current_page,c=t.total_page;return a?Object(S.jsx)(H,{}):n?Object(S.jsx)(e,{data:n,current_page:r,total_page:c,itteractingWithPage:this.itteractingWithPage}):Object(S.jsx)(q,{})}}]),n}(n.Component)},J=(a(51),function(e){var t=e.data,a=Object(E.g)();return Object(S.jsx)("div",{className:"col d-flex mt-1",children:Object(S.jsx)("div",{className:"card m-0",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title fw-bold",children:t.original_title}),Object(S.jsx)("img",{width:200,height:300,src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2/".concat(t.poster_path),alt:"some picture"}),Object(S.jsx)("p",{className:"card-text fs-6 fst-italic",children:"".concat(t.overview.substring(0,50)," ...")}),Object(S.jsxs)("p",{className:"card-text fs-5",children:["Movie Rate: ",t.vote_average]}),Object(S.jsx)("button",{type:"button",className:"btn btn-secondary more-detail",onClick:function(){return e=t.id,void a.push("/movie_detail/".concat(e));var e},children:"More detail"}),Object(S.jsx)(ee,{movie_data:t})]})})})}),z=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component),Q=function(e){var t=Object(n.useState)(),a=Object(w.a)(t,2),r=a[0],c=a[1];Object(n.useEffect)((function(){i(e.data)}),[e.data]);var i=function(t){var a=t?t.map((function(e,t){return Object(S.jsx)(J,{data:e},t)})):null;if(!e.data)return Object(S.jsx)("div",{children:"Sorry nothing to display"});c(a)};return Object(S.jsx)(z,{children:Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)(z,{children:[Object(S.jsx)(W,{current_page:e.current_page,total_page:e.total_page,itteractingWithPage:e.itteractingWithPage}),Object(S.jsx)("div",{className:"row row-col-4",children:r}),Object(S.jsx)(W,{current_page:e.current_page,total_page:e.total_page,itteractingWithPage:e.itteractingWithPage})]})})})},Z=(a(52),function(e){var t=e.data;return Object(S.jsxs)("div",{children:[Object(S.jsxs)("div",{className:"card card-head row mb-3 mt-3",children:[Object(S.jsx)("h3",{className:"card-header fw-bold",children:t.original_title}),Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title fst-italic",children:"Motto: ".concat(t.title)}),Object(S.jsx)("h6",{className:"card-subtitle text-muted fst-italic",children:"Released: ".concat(t.release_date)})]})]}),Object(S.jsxs)("div",{className:"row g-0",children:[Object(S.jsx)("div",{className:"col-md-4",children:Object(S.jsx)("img",{src:t.backdrop_path,className:"img-fluid rounded-start",alt:t.original_title})}),Object(S.jsx)("div",{className:"col-md-8",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title fw-bold",children:"Main information:"}),Object(S.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(S.jsx)("li",{className:"list-group-item",children:"Genres: ".concat(t.genres.map((function(e){return e.name})))}),Object(S.jsx)("li",{className:"list-group-item",children:"Budget: ".concat(t.budget)}),Object(S.jsx)("li",{className:"list-group-item",children:"Revenue: ".concat(t.revenue)}),Object(S.jsx)("li",{className:"list-group-item",children:"Average vote : ".concat(t.vote_average)}),Object(S.jsx)("li",{className:"list-group-item",children:"Popularity : ".concat(t.popularity)}),Object(S.jsx)("li",{className:"list-group-item",children:"Duration : ".concat(t.runtime)}),Object(S.jsx)("li",{className:"list-group-item",children:"Production companies : ".concat(t.production_companies.map((function(e){return e.name})))}),Object(S.jsx)("li",{className:"list-group-item",children:"Movie id : ".concat(t.id)}),Object(S.jsx)("li",{className:"list-group-item",children:"Age limit to view : ".concat(t.adult?"Yes":"Nope")}),Object(S.jsx)("li",{className:"list-group-item",children:"Original leandue: ".concat(t.original_language)})]})]})}),Object(S.jsx)("div",{className:"card row mt-2 mb-3",children:Object(S.jsx)("div",{className:"card-body",children:Object(S.jsx)("p",{className:"card-text fst-italic fs-6",children:t.overview})})})]})]})}),Y=function(e){var t=e.recommendations,a=e.getImage,r=Object(n.useState)([]),c=Object(w.a)(r,2),i=c[0],s=c[1],o=Object(E.g)(),u=function(e){var t=[];e&&(t=e.results.map((function(e,t){var n=e.id;return Object(S.jsx)("div",{className:"col",children:Object(S.jsxs)("div",{className:"card",style:{width:"9rem"},children:[Object(S.jsx)("img",{src:a(e.backdrop_path),className:"card-img-top",alt:e.original_title}),Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h6",{className:"card-title text-center",children:e.original_title}),Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",onClick:function(e){return t=n,void o.push("/movie_detail/".concat(t));var t},children:"More details"})]})]})},t)})),s(Object(l.a)(t)))};return Object(n.useEffect)((function(){u(t)}),[t]),Object(S.jsx)("div",{className:"row row-cols-5",children:i})},$=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component),K=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={id:null,recommendations:null,data:null,loading:!1,error:!1},e.onError=function(t){e.setState(Object(s.a)(Object(s.a)({},e.state),{},{error:t}))},e.getId=function(){return e.props.match.params.id},e.fetchData=function(t){var a=[e.props.getData(t),e.props.getRecommendations(t)];Promise.all(a).then((function(t){t.forEach((function(t,a){0===a&&(t.backdrop_path=e.props.getImage(t.poster_path),e.setState({data:t})),1===a&&t.results.forEach((function(a){e.setState({recommendations:t,loading:!1})}))}))})).catch((function(t){return e.onError(t)}))},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this.getId();this.setState({id:e,data:null,loading:!0,error:!1}),this.fetchData(e)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.match.params.id!==e.match.params.id&&this.fetchData(this.props.match.params.id)}},{key:"componentDidCatch",value:function(e,t){this.setState({error:!this.state.error})}},{key:"render",value:function(){if(!this.state.data)return Object(S.jsx)(q,{});if(this.state.error)return Object(S.jsx)(H,{});if(this.state.loading||!this.state.data)return Object(S.jsx)(q,{});var e=this.state,t=e.data,a=e.recommendations;return Object(S.jsx)("div",{className:"container-fluid",children:Object(S.jsxs)($,{children:[Object(S.jsx)(Z,{data:t}),Object(S.jsx)(ee,{movie_id:t.id,movie_data:t}),Object(S.jsxs)("div",{className:"container-fluid",children:[Object(S.jsx)("h3",{className:"fw-bold",children:"The Same movie"}),Object(S.jsx)(Y,{recommendations:a,getImage:this.props.getImage})]})]})})}}]),a}(n.Component),X=Object(E.h)(K),ee=(a(53),D()(Object(R.b)((function(e){return{movies:e.movies,loading:e.loading,errors:e.errors}}),(function(e,t){var a=t.token,n=t.engineRemoveFavorite,r=t.engineAddFavorite,c=t.movie_data;return{removeFromFavorite:function(){return function(e,t,a,n){a({type:"FETCH_MOVIE_REQUEST"}),a(function(e){return{type:"REMOVE_MOVIE",payload:e}}(n)),t(e,n).then((function(e){console.log(e)})).catch((function(e){a(A(e))}))}(a,n,e,c)},addToFavorite:function(){return function(e,t,a,n){a({type:"FETCH_MOVIE_REQUEST"}),a({type:"ADD_MOVIE",payload:n}),t(e,n).then((function(e){})).catch((function(e){a(A(e))}))}(a,r,e,c)}}}))((function(e){var t=e.movie_data,a=e.removeFromFavorite,r=e.addToFavorite,c=e.token,i=Object(n.useState)({add:"disabled",remove:"disabled"}),s=Object(w.a)(i,2),o=s[0],l=s[1],u=function(){if(void 0!==e.movies&&null!==e.movies){c||l({add:"disabled",remove:"disabled"});var a=function(t){for(var a=-1,n=0;n<e.movies.length;n++){var r;(null===(r=e.movies[n])||void 0===r?void 0:r.id)===t&&(a=n)}return a}(t.id);l(a>=0?{add:"disabled",remove:""}:{add:"",remove:"disabled"})}};Object(n.useEffect)((function(){return u()}),[e.movies]);return e.token?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",disabled:o.add,onClick:function(){return r(),void l({add:"disabled",remove:""})},children:"Add to favorite"}),Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",disabled:o.remove,onClick:function(){return a(),void l({add:"",remove:"disabled"})},children:"Remove from favorite"})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",disabled:"disabled",children:"Add to favorite"}),Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",disabled:"disabled",children:"Remove from favorite"}),Object(S.jsx)("div",{className:"alert alert-warning",role:"alert",children:"Please login or register account for save in favorite current movie"})]})})))),te=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component),ae=function(e){var t=Object(n.useState)([]),a=Object(w.a)(t,2),r=a[0],c=a[1],i=Object(E.g)();Object(n.useEffect)((function(){return s(e.data)}),[e.data]);var s=function(t){var a=null;a=t?t.map((function(t,a){return Object(S.jsx)("div",{className:"col d-flex mt-1",children:Object(S.jsx)("div",{className:"card",children:Object(S.jsxs)("div",{className:"card-body",children:[Object(S.jsx)("h5",{className:"card-title",children:t.original_title}),Object(S.jsx)("img",{width:150,height:230,alt:"some picture",src:(n=t.poster_path,"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(n))}),Object(S.jsxs)("div",{className:"card-text",children:[Object(S.jsx)("button",{type:"button",className:"btn btn-primary btn-component",onClick:function(){return e.data.id,void i.push("/movie_detail/".concat(e.data.id))},children:"More details"}),Object(S.jsx)(ee,{movie_id:t.id,movie_data:t})]})]})})},a);var n})):[Object(S.jsx)("div",{children:"No favorite in you list"},1)],c(a)};return Object(S.jsx)("div",{className:"row row-cols-3",children:Object(S.jsx)(te,{children:r})})},ne=function(e){Object(k.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ErrorExist:!1},e}return Object(f.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({ErrorExist:!this.state.ErrorExist})}},{key:"render",value:function(){return this.state.ErrorExist?Object(S.jsx)(H,{}):this.props.children}}]),a}(n.Component),re=Object(R.b)((function(e){return{movies:e.movies,loading:e.loading,errors:e.errors}}))((function(e){return e.movies.error?Object(S.jsx)(H,{}):e.movies.loading?Object(S.jsx)(q,{}):0===e.movies.length?Object(S.jsx)("div",{className:"container-fluid",children:Object(S.jsx)("div",{className:"alert alert-primary",role:"alert",children:"Favorite list is empty please add some movie"})}):Object(S.jsx)("div",{className:"container-fluid",children:Object(S.jsx)(ne,{children:Object(S.jsx)(ae,{data:e.movies})})})})),ce=function(e){return{getData:e.getByGenre,getImage:e.getImg}},ie=D((function(e){return{getData:e.getMovieDetails,getImage:e.getImg}}))(re),se=D((function(e){return{getData:e.getBySearch,getImage:e.getImg}}))(B(Q)),oe=D((function(e){return{getData:e.getPopularMovies,getImage:e.getImg}}))(B(Q)),le=D(ce)(B(Q)),ue=D(ce)(L),de=D((function(e){return{getRecommendations:e.getRecommendations,getData:e.getMovieDetails,getImage:e.getImg}}))(X),je=function(e){return e?Object(S.jsxs)(N.a,{children:[Object(S.jsx)(T,{}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row justify-content-around mt-3",children:[Object(S.jsx)("div",{className:"col-3",children:Object(S.jsx)(U,{credentials:e})}),Object(S.jsxs)("div",{className:"col-9",children:[Object(S.jsx)(E.b,{path:"/movie_detail/:id",exact:!0,render:de}),Object(S.jsx)(E.b,{path:"/random_movie/:id",exact:!0,render:de}),Object(S.jsx)(E.b,{path:"/genres",exact:!0,render:ue}),Object(S.jsx)(E.b,{path:"/genre/:page/:id",exact:!0,render:le}),Object(S.jsx)(E.b,{path:"/search/:page/:id",exact:!0,render:se}),Object(S.jsx)(E.b,{path:"/popular/:page",exact:!0,render:oe}),Object(S.jsx)(E.b,{path:"/favorite",exact:!0,render:ie}),Object(S.jsx)(E.a,{to:"/popular/1"})]})]})})]}):Object(S.jsxs)(N.a,{children:[Object(S.jsx)(T,{}),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row justify-content-around mt-3",children:[Object(S.jsx)("div",{className:"col-3 left-bar",children:Object(S.jsx)(U,{credentials:e})}),Object(S.jsx)("div",{className:"col-9 right-bar",children:Object(S.jsxs)(E.d,{children:[Object(S.jsx)(E.b,{path:"/popular/:page",exact:!0,render:oe}),Object(S.jsx)(E.b,{path:"/favorite",exact:!0,render:ie}),Object(S.jsx)(E.b,{path:"/movie_detail/:id",exact:!0,render:de}),Object(S.jsx)(E.b,{path:"/random_movie/:id",exact:!0,render:de}),Object(S.jsx)(E.b,{path:"/genres",exact:!0,render:ue}),Object(S.jsx)(E.b,{path:"/genre/:page/:id",exact:!0,render:le}),Object(S.jsx)(E.b,{path:"/search/:page/:id",exact:!0,render:se}),Object(S.jsx)(E.b,{path:"/authentication",exact:!0,render:P}),Object(S.jsx)(E.b,{path:"/registration",exact:!0,render:M}),Object(S.jsx)(E.a,{to:"/popular/1"})]})})]})})]})},be=function(){var e=Object(n.useState)(null),t=Object(w.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),i=Object(w.a)(c,2),s=i[0],o=i[1],l="user",u=(new v).request,d=Object(n.useCallback)((function(e,t){return u("https://yermolaiev-movie-db.herokuapp.com/api/remove-favorite","POST",{movie:t},{credentials:"bearer ".concat(e)})}),[u]),j=Object(n.useCallback)((function(e,t){return u("https://yermolaiev-movie-db.herokuapp.com/api/add-favorite","POST",{movie:t},{credentials:"bearer ".concat(e)})}),[u]),b=Object(n.useCallback)((function(e){return u("https://yermolaiev-movie-db.herokuapp.com/api/get-favorite","GET",null,{credentials:"bearer ".concat(e)})}),[u]),h=Object(n.useCallback)((function(e,t){r(e),o(t),localStorage.setItem(l,JSON.stringify({token:e,id:t}))}),[]),m=Object(n.useCallback)((function(){r(null),o(null),localStorage.clear()}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem(l));(null===e||void 0===e?void 0:e.token)&&(null===e||void 0===e?void 0:e.id)&&h(e.token,e.id)}),[h]),{login:h,logout:m,id:s,token:a,engineRemoveFavorite:d,engineAddFavorite:j,engineGetFavorite:b}},he=a(16),me=a(32),pe=Object(me.a)("results"),Oe=function e(){var t=this;Object(O.a)(this,e),this.schema={email:/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/,password:/(?=.*[0-9]){6,}/g,phone:/^\+380[0-9]{9}$/,string:/[A-Za-z]{3,}/},Object.defineProperty(this,pe,{writable:!0,value:{}}),this.validateLogin=function(e){if(0===e.length)return Object(he.a)(t,pe)[pe].push({dataError:!0});var a=t.schema.email.test(e.email),n=t.schema.password.test(e.password);return a||(Object(he.a)(t,pe)[pe].email="email not correct"),n||(Object(he.a)(t,pe)[pe].password="password not correct"),Object(he.a)(t,pe)[pe]},this.validateRegistartion=function(e){Object(he.a)(t,pe)[pe]={},t.validateLogin(e);var a=t.schema.phone.test(e.data.phone),n=t.schema.string.test(e.data.nick),r=t.schema.string.test(e.data.city);return a||(Object(he.a)(t,pe)[pe].phone="phone not correct"),n||(Object(he.a)(t,pe)[pe].nick="nick not correct"),r||(Object(he.a)(t,pe)[pe].city="city not correct"),Object(he.a)(t,pe)[pe]}},fe=function(){var e=Object(s.a)({},be()),t=je(null!==e.token&&null!==e.id);return Object(S.jsx)("div",{className:"container-fluid",children:Object(S.jsx)(R.a,{store:b,children:Object(S.jsx)(y,{value:e,children:t})})})};i.a.render(Object(S.jsx)(fe,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.ca969936.chunk.js.map