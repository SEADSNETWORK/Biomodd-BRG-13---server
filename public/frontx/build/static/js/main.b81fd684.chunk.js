(this["webpackJsonpStudio.Subtiv.Builder.Front"]=this["webpackJsonpStudio.Subtiv.Builder.Front"]||[]).push([[0],{163:function(e,t,n){},206:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(34),c=n.n(l),o=n(17),i=n(13),u=n(14),s=n(3),m=(n(98),n(9)),d=n(4),h=n(27);function E(){var e=Object(o.a)(["\n    ","\n"]);return E=function(){return e},e}function f(){var e=Object(o.a)(["\n    ","\n    \n"]);return f=function(){return e},e}function b(){var e=Object(o.a)(["\n    border: ","\n"]);return b=function(){return e},e}function v(){var e=Object(o.a)(["\n            font-size: ","; \n        "]);return v=function(){return e},e}function p(){var e=Object(o.a)(["\n            ","\n            font-size: ","; \n        "]);return p=function(){return e},e}var g=function(){var e=Object(d.c)((function(e){return[e.data.theme,e.data.themes]})),t=Object(m.a)(e,2),n=t[0];t[1];return n?r.a.createElement(n.Container,null,r.a.createElement(n.Wrapped,null,r.a.createElement(n.Container,null,"allo"))):"loading"},O=function(){function e(){Object(i.a)(this,e),this.colors={primary:"black",secondary:"white",tertiary:"red"},this.colors.text={primary:this.colors.secondary,secondary:this.colors.primary},this.defaultWrapWidth=3,this.font="American Typewriter",this.sizes={normal:"1.2em",title:"2em",subtitle:"1.4em"},this.medias={em:{xs:0,sm:48,md:64,lg:75},px:{xs:0,sm:768,md:1024,lg:5625}},this.medias.query={onlySmall:"(max-width: ".concat(this.medias.px.sm,"px)"),largerthansm:"(min-width: ".concat(this.medias.px.sm+1,"px)"),mdandup:"(min-width: ".concat(this.medias.px.md,"px)"),smallerthanmd:"(max-width: ".concat(this.medias.px.md-1,"px)")},this.padding={xs:10,sm:15,md:20,lg:30}}return Object(u.a)(e,[{key:"responsive",value:function(e,t,n){return"\n            ".concat(e,": ").concat(t.xs).concat(n,";\n\n            @media only screen and (min-width: ").concat(this.medias.px.sm,"px) {\n                ").concat(e,": ").concat(t.sm).concat(n,";\n            }\n\n            @media only screen and (min-width: ").concat(this.medias.px.md,"px) {\n                ").concat(e,": ").concat(t.md).concat(n,";\n            }        \n\n            @media only screen and (min-width: ").concat(this.medias.px.lg,"px) {\n                ").concat(e,": ").concat(t.lg).concat(n,";\n            }        \n        ")}},{key:"defaultWrap",get:function(){return"solid ".concat(this.colors.primary," ").concat(this.defaultWrapWidth,"px")}},{key:"defaultFont",get:function(){return"font-family : ".concat(this.font,"; font-size: ").concat(this.sizes.normal,";")}},{key:"styled",get:function(){return s.b}},{key:"Wrapped",get:function(){var e=this;return function(t){var n=t.children;return r.a.createElement(y,{content:"border : ".concat(e.defaultWrap,"; background: white;")},n)}}},{key:"Container",get:function(){var e=this;return function(t){var n=t.children;return r.a.createElement(y,{content:e.responsive("padding",e.padding,"px")},n)}}},{key:"Text",get:function(){var e=this;return function(t){var n=t.children;return r.a.createElement(w,{content:e.defaultFont},n)}}},{key:"Title",get:function(){return s.b.div(p(),this.defaultFont,this.sizes.title)}},{key:"SubTitle",get:function(){return Object(s.b)(this.Title)(v(),this.sizes.subtitle)}}]),e}(),y=(s.b.div(b(),(function(e){return e.border})),s.b.div(f(),(function(e){return e.content}))),w=s.b.span(E(),(function(e){return e.content})),T=O,j=n(208),S=n(20),x=n(87),k=n(12),C=Object.freeze({SET_CLIENT:Symbol("data/client"),SET_NAV_OPEN:Symbol("data/navopen"),SET_THEME:Symbol("data/theme"),SET_THEMES:Symbol("data/themes"),SET_NEWS:Symbol("data/news")}),W={client:null,navopen:window.innerWidth>768,theme:null,themes:null,news:null},N=Object(S.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.SET_CLIENT:return Object(k.a)({},e,{client:t.client});case C.SET_NEWS:return Object(k.a)({},e,{news:t.news});case C.SET_NAV_OPEN:return Object(k.a)({},e,{navopen:t.navopen});case C.SET_THEME:return Object(k.a)({},e,{theme:t.theme});case C.SET_THEMES:return Object(k.a)({},e,{themes:t.themes});default:return Object(k.a)({},e)}}}),z=Object(S.a)(x.a),D=Object(S.d)(N,z),I=n(11),R=n(88),V=n.n(R),G=function(){var e="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname,t="Running ".concat(e?"local":"server");return e&&(document.title=" (local) "+document.title),{dev:e,status:t,printstatus:function(){console.log(t)}}},M=n(89),P=n(90),_=n.n(P),L={},F=function(e){var t=G(),n=M.a,a=V()({projectId:n.projectId,dataset:n.dataset,token:n.token,ignoreBrowserTokenWarning:!0,useCdn:!1}),r=function(e){return new Promise((function(n,r){L[e]?(t.dev&&console.log("reused cached query"),n(L[e])):a.fetch(e).then((function(t){L[e]=t,n(t)})).catch(r)}))},l=_()(a);return t.dev&&t.printstatus(),r("*[_type == 'biomoddnews']{title, description, images[]{title, description, 'image':image.asset->url}} | order(_createdAt desc)").then((function(t){console.log(t),e({type:C.SET_NEWS,news:t})})),{fetch:r,environment:t,squareImage:function(e,t){return l.image(e).width(t).height(t).url()}}},A=n(91),q=n.n(A),H=(n(163),n(16)),U=n(50),B=n(35),J=n(36);function K(){var e=Object(o.a)([" font-weight: bold;"]);return K=function(){return e},e}var Q=function(e){Object(J.a)(n,e);var t=Object(B.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).font="OfficeCodePro",e.sizes.normal="1.2em",e}return Object(u.a)(n,[{key:"defaultFont",get:function(){return"".concat(Object(U.a)(Object(H.a)(n.prototype),"defaultFont",this),"font-weight: 400;")}},{key:"Title",get:function(){return this.styled(Object(U.a)(Object(H.a)(n.prototype),"Title",this))(K())}}]),n}(T),X=n(45);var Y=function(e){var t=e.label,n=e.setValue,l=Object(a.useState)(""),c=Object(m.a)(l,2),o=c[0],i=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),n(o)}},r.a.createElement("label",null,r.a.createElement("code",null,t,"\xa0"),r.a.createElement("input",{type:"text",value:o,onChange:function(e){return i(e.target.value)}})),"\xa0",r.a.createElement("input",{type:"submit",value:"Submit"}))},Z=n(92),$=n.n(Z),ee=Object.freeze({UNSELECTED:"unselected",CLICKED:"clicked",HOVERING:"hovering",DRAGGED:"dragged"}),te=function(e){Object(J.a)(n,e);var t=Object(B.a)(n);function n(e){var a,r=e.location,l=e.size,c=e.color,o=e.alternativeColor;return Object(i.a)(this,n),(a=t.call(this,r,l)).color=c,a.alternativeColor=o,a}return Object(u.a)(n,[{key:"draw",value:function(e){e.noStroke(),this.state===ee.UNSELECTED||this.state===ee.HOVERING?e.fill(this.color):(this.state===ee.DRAGGED&&(this.location.x=e.mouseX,this.location.y=e.mouseY),e.fill(this.alternativeColor));var t=this.size;this.state===ee.HOVERING&&(t+=2*Math.sin(e.millis())),e.circle(this.location.x,this.location.y,t)}}]),n}(function(){function e(t,n){Object(i.a)(this,e),this.location=t,this.size=n,this.state=ee.UNSELECTED}return Object(u.a)(e,[{key:"isOver",value:function(e){return e.dist(this.location)<this.size/2}},{key:"isCurrentOver",value:function(e){return this.isOver(e.createVector(e.mouseX,e.mouseY))}},{key:"mousePressed",value:function(e){this.isCurrentOver(e)&&(this.state=ee.CLICKED)}},{key:"mouseReleased",value:function(e){this.state=ee.UNSELECTED,this.mouseMoved(e)}},{key:"mouseDragged",value:function(e){this.state!==ee.UNSELECTED&&(this.state=ee.DRAGGED)}},{key:"mouseMoved",value:function(e){this.state===ee.UNSELECTED&&this.isCurrentOver(e)?this.state=ee.HOVERING:this.state!==ee.HOVERING||this.isCurrentOver(e)||(this.state=ee.UNSELECTED)}}]),e}()),ne=function(){function e(t){var n=t.color,a=t.size,r=t.location,l=t.controlOffset,c=t.strokeWeight;Object(i.a)(this,e),this.color=n,this.size=a,this.location=r,this.controlOffset=l,this.strokeWeight=c}return Object(u.a)(e,[{key:"draw",value:function(e){e.noStroke(),e.fill(this.color),e.circle(this.location.x,this.location.y,this.size),e.noFill(),e.strokeWeight(this.strokeWeight),e.stroke(this.color),e.circle(this.location.x,this.location.y,this.size+this.controlOffset)}},{key:"mousePressed",value:function(e){console.log(e.mouseX)}}]),e}(),ae=function(e,t,n,a,r){var l=2*Math.PI/a*r,c=e.createVector(Math.cos(l),Math.sin(l));return c.mult(n),c.add(t),c},re=function(e){var t=e.socket,n=new Map,a=[],l=[],c=[],o={size:30,controlOffset:20,offset:.4,strokeWeight:2},i={amount:2,size:40,color:"darkgreen",alternativeColor:"lightgreen"},u=function(e){return e.createVector(.5*e.width,.5*e.height)},s=function(e){return e.createVector(Math.random()*e.width,Math.random()*e.height)};return r.a.createElement($.a,{setup:function(e,r){r&&e.createCanvas(500,500).parent(r),["red","green","blue"].forEach((function(t,a){n.set(t,new ne(Object(k.a)({color:t,location:ae(e,u(e),e.width*o.offset,3,a)},o))),l.push(n.get(t))}));for(var m=0;m<i.amount;m++)a[m]=new te(Object(k.a)({location:s(e)},i)),l.push(a[m]),c.push(a[m]);t.on("/gameUpdateWorld",(function(e){}))},draw:function(e){e.background("yellow"),l.forEach((function(t){return t.draw(e)}))},mousePressed:function(e){c.forEach((function(t){return t.mousePressed(e)}))},mouseReleased:function(e){c.forEach((function(t){return t.mouseReleased(e)}))},mouseDragged:function(e){c.forEach((function(t){return t.mouseDragged(e)}))},mouseMoved:function(e){c.forEach((function(t){return t.mouseMoved(e)}))}})},le=n(46),ce=n.n(le),oe=function(){var e,t=Object(d.c)((function(e){return e.data.theme})),n=Object(d.c)((function(e){return e.data.news})),l=Object(a.useState)(""),c=Object(m.a)(l,2),o=c[0],i=c[1],u=Object(a.useState)(""),s=Object(m.a)(u,2),E=s[0],f=s[1],b=Object(a.useState)(""),v=Object(m.a)(b,2),p=v[0],g=v[1],O=Object(a.useState)(void 0),y=Object(m.a)(O,2),w=y[0],T=y[1],j=Object(a.useState)(void 0),S=Object(m.a)(j,2),x=S[0],k=S[1],C=Object(a.useRef)(null),W=Object(a.useRef)(null),N=Object(a.useRef)(null),z=Object(a.useRef)(null);Object(a.useEffect)((function(){!w&&e&&e.emit("/gamesettings")})),(e="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?Object(X.io)("http://localhost:2200/",{transports:["websocket"]}):Object(X.io)()).on("/gamesettings",(function(e){w||T(e)})),e.on("/push",(function(e){console.log(e),k(e.map((function(e){return r.a.createElement(r.a.Fragment,null,JSON.stringify(e)," ",r.a.createElement("br",null))})))}));var D=function(e){return function(){e.current.scrollIntoView()}};return t?r.a.createElement(h.b,null,r.a.createElement(h.c,{align:"center"},r.a.createElement(h.a,{xs:12,sm:8,md:6},r.a.createElement(t.Container,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(t.Title,null,"GoTo"),r.a.createElement(t.Text,null,r.a.createElement("ul",null,r.a.createElement("li",{onClick:D(C)},"-> news"),r.a.createElement("li",{onClick:D(z)},"-> game"),r.a.createElement("li",{onClick:D(W)},"-> store and retrieve data (RESTful)"),r.a.createElement("li",{onClick:D(N)},"-> store and retrieve data (WEBSOCKET)")))))),r.a.createElement(t.Container,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(t.Title,{ref:C},"GAME"),r.a.createElement("br",null),r.a.createElement(t.SubTitle,null,"Simple version"),r.a.createElement(t.Text,null,"Proof of concept game version with simulated data - will be updated as the development progresses",r.a.createElement("br",null),r.a.createElement("a",{href:"https://docs.google.com/document/d/1EDprQQhg2VJHW0SUoAcNhATV1XVfRxaYFhYVQjl9Rd8/edit",target:"_blank"},"--\x3e Game concept master"),r.a.createElement("br",null),r.a.createElement("br",null),w?r.a.createElement(re,{socket:e}):"LOADING"))))),r.a.createElement(h.a,{xs:12,sm:8,md:6},r.a.createElement(t.Container,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(t.Title,{ref:C},"NEWS"),r.a.createElement("br",null),n?n.map((function(e){var n=e.title,a=e.description,l=e.images;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t.SubTitle,null,n),r.a.createElement(t.Text,null,r.a.createElement(ce.a,{blocks:a})),l&&l.length?l.map((function(e){var n=e.title,a=e.description,l=e.image;return r.a.createElement(r.a.Fragment,null,r.a.createElement(t.Text,null,r.a.createElement("b",null,n)),r.a.createElement("img",{src:l,alt:n,style:{width:"100%"}}),r.a.createElement(t.Text,null,r.a.createElement("i",null,r.a.createElement(ce.a,{blocks:a}))))})):null,r.a.createElement("br",null))})):r.a.createElement(t.Text,null,"L O A D I N G")))))),r.a.createElement(h.c,{align:"center"},r.a.createElement(h.a,{xs:12,sm:8,md:6},r.a.createElement(t.Container,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(t.Title,{ref:W},"Store and retrieve data (RESTFul API)"),r.a.createElement("br",null),r.a.createElement(t.SubTitle,null,"Store data"),r.a.createElement(t.Text,null,r.a.createElement("code",{style:{fontSize:"1.4em"}},"/push?var1=value1&var2=val2"),r.a.createElement("br",null),r.a.createElement("b",null,"required fields")," :  author, device, sensor, value",r.a.createElement("br",null),"Example:",r.a.createElement("br",null),r.a.createElement("i",null,"/push?author=Pieter&device=T&sensor=ts&value=22")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.SubTitle,null,"Retrieve data"),r.a.createElement(t.Text,null,r.a.createElement("code",{style:{fontSize:"1.4em"}},"/data?var1=value1&var2=val2"),r.a.createElement("br",null),r.a.createElement("b",null,"required fields")," :  author, device and/or sensor",r.a.createElement("br",null),r.a.createElement("br",null),"Example:",r.a.createElement("br",null),r.a.createElement("i",null,r.a.createElement("a",{href:"http://www.biomodd.xyz/data?author=Pieter",target:"_blank"},"/data?author=Pieter")),r.a.createElement("br",null),"This will select only the data entries that have been added by the author Pieter",r.a.createElement("br",null),r.a.createElement("br",null),"Example:",r.a.createElement("br",null),r.a.createElement("i",null,r.a.createElement("a",{href:"http://www.biomodd.xyz/data?device=Test&author=Pieter",target:"_blank"},"/data?device=Test&author=Pieter")),r.a.createElement("br",null),'This will select only the data entries that have been added by the author Pieter and device "Test"',r.a.createElement("br",null)))))),r.a.createElement(h.a,{xs:12,sm:8,md:6},r.a.createElement(t.Container,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(t.Title,{ref:N},"Store and retrieve data (WEBSOCKET)"),r.a.createElement("br",null),r.a.createElement(t.SubTitle,null,"Store data"),r.a.createElement(t.Text,null,'Connect to the socket on this server, and send a message "/push" with an object (js) with the fields:  author, device, sensor, value'),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.SubTitle,null,"Retrieve data"),r.a.createElement(t.Text,null,'Connect to the socket on this server, and send a message "/data" with an object (js) with the fields:  author, device and/or sensor, you will get back a list (js) which contains the selection (AND logic).'),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Wrapped,null,r.a.createElement(t.Container,null,r.a.createElement(Y,{label:"author",value:o,setValue:i}),r.a.createElement(Y,{label:"device",value:E,setValue:f}),r.a.createElement(Y,{label:"sensor",value:p,setValue:g}))),r.a.createElement("br",null),r.a.createElement(t.Text,{style:{width:"auto"}},"Search for entries ",r.a.createElement("br",null),"author: ",o||"any",", ",r.a.createElement("br",null),"device: ",E||"any",", ",r.a.createElement("br",null),"sensor: ",p||"any"),r.a.createElement("br",null),r.a.createElement("br",null),"\xa0\xa0",r.a.createElement("button",{style:{fontSize:"2em",background:"blue",color:"white",paddingLeft:"10px"},onClick:function(){var t={};o&&""!==o&&(t.author=o),E&&""!==E&&(t.device=E),p&&""!==p&&(t.sensor=p),e.emit("/data",t)}}," GO"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(t.Text,null,x||null))))))):null},ie=function(){var e=Object(d.c)((function(e){return e.data})),t=Object(d.b)();return Object(a.useEffect)((function(){if(!e.client&&t){var n=F(t);t({type:C.SET_CLIENT,client:n})}if(!e.theme&&t){new Q;t({type:C.SET_THEME,theme:new Q})}})),null},ue=function(){var e=Object(I.a)(),t=new Q;return r.a.createElement(d.a,{store:D},r.a.createElement(ie,null),r.a.createElement(j.b,{history:e},r.a.createElement("span",null,r.a.createElement("div",{style:{padding:"10px"}},r.a.createElement("img",{src:q.a,style:{float:"left",width:"100px"}}),r.a.createElement(t.Title,{style:{color:"white",fontSize:"4em"}},"\xa0BIOMODD [BRG",r.a.createElement("sup",null,"13"),"]")),r.a.createElement(j.c,null,r.a.createElement(j.a,{exact:!0,path:"/",component:oe}),r.a.createElement(j.a,{exacact:!0,path:"/overview",component:g}),r.a.createElement(j.a,{component:oe})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},89:function(e){e.exports=JSON.parse('{"a":{"forceConnection":"false","projectId":"t39t9igo","dataset":"production","token":"skuqgSCQC4s2pxEmtmqYlPUtommpeqGIyRf9gvUOTmCygpeWClzMKSGOrnKIP7AFuepInhnK1DaZr6VykFyqHaKi01OgyTaI2FiVc75TqmLJoLJ0mRhUnXqqBIc8yNkvzqTJaBDeDHeLixGUPWoIRF5ZZL6cSAz1OMogyyBVOW5rtg3awQxd"}}')},91:function(e,t,n){e.exports=n.p+"static/media/logo.4ef8c6e8.svg"},93:function(e,t,n){e.exports=n(206)},98:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.b81fd684.chunk.js.map