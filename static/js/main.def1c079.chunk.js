(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{18:function(e,t,n){e.exports=n(42)},40:function(e,t){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),o=n(16),i=n(2),u=n(3),s=n(5),p=n(4),m=n(17),h=n.n(m),d=(a.Component,n(40),n(41),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).getRecipe=function(){h()({url:"https://api.edamam.com/search",method:"GET",params:{app_id:"dd773a12",app_key:"8fdecc405895d8341b252e3287ad7566",format:"jason",q:e.state.userInput,imgonly:!0}}).then((function(t){console.log(t),e.setState({recipeArray:t.data.hits})}))},e.handleUserInput=function(t){e.setState(Object(o.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){e.getRecipe(),t.preventDefault(),e.setState({userInput:t.target.value},(function(){return e.getRecipe()}))},e.state={recipeArray:[],userInput:""},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getRecipe()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"COOKS ",r.a.createElement("span",null,"'R'")," US"),r.a.createElement("p",null,"What to Cook"),r.a.createElement("form",{action:""},r.a.createElement("input",{name:"userInput",type:"text",value:this.state.userInput,onChange:this.handleUserInput,placeholder:"enter an ingredient eg.beef"}),r.a.createElement("button",{type:"submit",onClick:this.handleSubmit},"Find Yum"))),r.a.createElement("ul",{className:"recipeList"},this.state.recipeArray.map((function(e,t){return r.a.createElement("li",{className:"recipeContainer",key:t},r.a.createElement("h2",null,e.recipe.label),r.a.createElement("img",{src:e.recipe.image,alt:e.recipe.label}),r.a.createElement("a",{href:e.recipe.url},"Full Recipe"),r.a.createElement("button",null,"Save it"))})))),r.a.createElement("footer",null,r.a.createElement("p",null,"Copyright Jane Yuan 2020")))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.def1c079.chunk.js.map