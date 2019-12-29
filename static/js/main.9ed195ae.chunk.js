(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(10),c=n.n(a),i=n(11),s=n(8),l=n(17),u=(n(28),n(3)),h=n(4),d=n(6),b=n(5),f=n(7),p=function(e){var t=e.name,n=e.email,r=e.id;return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?size=200x200"),alt:"Robot"}),o.a.createElement("div",null,o.a.createElement("h2",null,t),o.a.createElement("p",null,n)))},g=function(e){var t=e.robots;return console.log("CardList"),o.a.createElement("div",null,t.map((function(e){return o.a.createElement(p,{key:e.id,id:e.id,name:e.name,email:e.email})})))},m=function(e){e.searchfield;var t=e.searchChange;return console.log("SearchBox"),o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{"aria-label":"Search Robots",type:"search",placeholder:"Search robots",className:"pa3 ba b--green bg-lightest-blue",onChange:t}))},E=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log("Header"),o.a.createElement("div",null,o.a.createElement("h1",{className:"f1"},"RoboFriends"),";")}}]),t}(r.Component),v=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"}},e.children)},O=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Ooops. That is not good"):this.props.children}}]),t}(r.Component),w=(n(29),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,a=e.isPending,c=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement(E,null),o.a.createElement(m,{searchChange:n}),o.a.createElement(v,null,a?o.a.createElement("h1",null,"Loading..."):o.a.createElement(O,null,o.a.createElement(g,{robots:c}),";")))}}]),t}(r.Component)),R=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAIL",error:t})}))}))}}}))(w),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var j=n(9),C={searchField:""},k={isPending:!1,robots:[],error:""},_=(n(30),Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object(j.a)({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object(j.a)({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object(j.a)({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAIL":return Object(j.a)({},e,{error:t.payload,isPending:!1});default:return e}}})),T=Object(s.d)(_,Object(s.a)(l.a));c.a.render(o.a.createElement(i.a,{store:T},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):y(t,e)}))}}()}},[[18,1,2]]]);
//# sourceMappingURL=main.9ed195ae.chunk.js.map