(this["webpackJsonpStudio.Subtiv.Builder.Front"]=this["webpackJsonpStudio.Subtiv.Builder.Front"]||[]).push([[0],{196:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a,r,l,c,i,o=n(0),s=n.n(o),u=n(42),m=n.n(u),h=n(26),d=n(9),E=n(10),f=n(13),b=(n(99),n(1)),y=n(5),p=n(36),v=function(){function e(){Object(d.a)(this,e),this.colors={primary:"black",secondary:"white",tertiary:"red"},this.colors.text={primary:this.colors.secondary,secondary:this.colors.primary},this.defaultWrapWidth=3,this.font="American Typewriter",this.sizes={normal:"1.2em",title:"2em",subtitle:"1.4em"},this.medias={em:{xs:0,sm:48,md:64,lg:75},px:{xs:0,sm:768,md:1024,lg:5625}},this.medias.query={onlySmall:"(max-width: ".concat(this.medias.px.sm,"px)"),largerthansm:"(min-width: ".concat(this.medias.px.sm+1,"px)"),mdandup:"(min-width: ".concat(this.medias.px.md,"px)"),smallerthanmd:"(max-width: ".concat(this.medias.px.md-1,"px)")},this.padding={xs:10,sm:15,md:20,lg:30}}return Object(E.a)(e,[{key:"defaultWrap",get:function(){return"solid ".concat(this.colors.primary," ").concat(this.defaultWrapWidth,"px")}},{key:"defaultFont",get:function(){return"font-family : ".concat(this.font,"; font-size: ").concat(this.sizes.normal,";")}},{key:"styled",get:function(){return f.b}},{key:"responsive",value:function(e,t,n){return"\n            ".concat(e,": ").concat(t.xs).concat(n,";\n\n            @media only screen and (min-width: ").concat(this.medias.px.sm,"px) {\n                ").concat(e,": ").concat(t.sm).concat(n,";\n            }\n\n            @media only screen and (min-width: ").concat(this.medias.px.md,"px) {\n                ").concat(e,": ").concat(t.md).concat(n,";\n            }        \n\n            @media only screen and (min-width: ").concat(this.medias.px.lg,"px) {\n                ").concat(e,": ").concat(t.lg).concat(n,";\n            }        \n        ")}},{key:"Wrapped",get:function(){var e=this;return function(t){var n=t.children;return s.a.createElement(g,{content:"border : ".concat(e.defaultWrap,"; background: white;")},n)}}},{key:"Container",get:function(){var e=this;return function(t){var n=t.children;return s.a.createElement(g,{content:e.responsive("padding",e.padding,"px")},n)}}},{key:"Empty",get:function(){return function(e){var t=e.children;return s.a.createElement(g,null,t)}}},{key:"Text",get:function(){var e=this;return function(t){var n=t.children;return s.a.createElement(O,{content:e.defaultFont},n)}}},{key:"Title",get:function(){return f.b.div(a||(a=Object(h.a)(["\n            ","\n            font-size: ","; \n            font-weight: bold;\n        "])),this.defaultFont,this.sizes.title)}},{key:"SubTitle",get:function(){return Object(f.b)(this.Title)(r||(r=Object(h.a)(["\n            font-size: ","; \n        "])),this.sizes.subtitle)}}]),e}(),g=(f.b.div(l||(l=Object(h.a)(["\n    border: ","\n"])),(function(e){return e.border})),f.b.div(c||(c=Object(h.a)(["\n    ","\n    \n"])),(function(e){return e.content}))),O=f.b.span(i||(i=Object(h.a)(["\n    ","\n"])),(function(e){return e.content})),x=v,j=n(6),S=n(34),T=n(89),k=n(4),w=Object.freeze({SET_CLIENT:Symbol("data/client"),SET_NAV_OPEN:Symbol("data/navopen"),SET_THEME:Symbol("data/theme"),SET_THEMES:Symbol("data/themes"),SET_NEWS:Symbol("data/news"),SET_EVENTS:Symbol("data/cal"),SET_FAQS:Symbol("data/faq"),SET_SENSOR_TYPES:Symbol("data/svt"),SET_PLANT_CLUSTERS:Symbol("data/pc"),SET_SOCKET:Symbol("socket"),SET_GAME_SETTINGS:Symbol("gamesettings")}),D={client:null,navopen:window.innerWidth>768,theme:null,themes:null,news:null,events:null,faqs:null,sensorTypes:null,plantClusters:null,socket:null,gameSettings:null},N=Object(S.b)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.SET_CLIENT:return Object(k.a)(Object(k.a)({},e),{},{client:t.client});case w.SET_SENSOR_TYPES:return Object(k.a)(Object(k.a)({},e),{},{sensorTypes:t.sensorTypes});case w.SET_GAME_SETTINGS:return Object(k.a)(Object(k.a)({},e),{},{gameSettings:t.gameSettings});case w.SET_SOCKET:return console.log(t.socket),Object(k.a)(Object(k.a)({},e),{},{socket:t.socket});case w.SET_PLANT_CLUSTERS:return Object(k.a)(Object(k.a)({},e),{},{plantClusters:t.plantClusters});case w.SET_NEWS:return Object(k.a)(Object(k.a)({},e),{},{news:t.news});case w.SET_EVENTS:return Object(k.a)(Object(k.a)({},e),{},{events:t.events});case w.SET_NAV_OPEN:return Object(k.a)(Object(k.a)({},e),{},{navopen:t.navopen});case w.SET_THEME:return Object(k.a)(Object(k.a)({},e),{},{theme:t.theme});case w.SET_THEMES:return Object(k.a)(Object(k.a)({},e),{},{themes:t.themes});default:return Object(k.a)({},e)}}}),C=Object(S.a)(T.a),_=Object(S.c)(N,C),M=n(12),I=(n(103),function(){var e="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname,t="Running ".concat(e?"local":"server");return e&&(document.title=" (local) "+document.title),{dev:e,status:t,printstatus:function(){console.log(t)}}}),P=n(90),R=n(29),G=function(e,t){I(),P.a;return t="localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname?Object(R.io)("http://localhost:2200/",{transports:["websocket"]}):Object(R.io)(),e({type:w.SET_SOCKET,socket:t}),t.on("/gamesettings",(function(t){e({type:w.SET_GAME_SETTINGS,gameSettings:t})})),t.on("/sensortypes",(function(t){e({type:w.SET_SENSOR_TYPES,sensorTypes:t})})),{socket:t}};var V=n(25),z=n(91),L=n.n(z),W=function(){var e=Object(y.c)((function(e){return e.data.theme}));return e?s.a.createElement(p.c,{center:"xs"},s.a.createElement(p.a,{xs:8,sm:2},s.a.createElement(V.a,{to:"/"},s.a.createElement("img",{src:L.a,style:{width:"100%"}}))),s.a.createElement(p.a,{xs:12,sm:10},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(V.a,{to:"/"},s.a.createElement(e.Text,null,s.a.createElement("span",{style:{color:"white",fontSize:"4em",fontWeight:"bold"}},"\xa0BIOMODD [BRG",s.a.createElement("sup",null,"13"),"]"))),s.a.createElement(e.Container,null,s.a.createElement(e.Text,null,s.a.createElement(V.a,{to:"/gamelegacy",style:{color:"white"}},"\xa0\xa0\xa0-> TEST GAME (legacy)"),s.a.createElement(V.a,{to:"/server",style:{color:"white"}},"\xa0\xa0\xa0-> TEST SERVER"),s.a.createElement(V.a,{to:"/",style:{color:"white"}},"\xa0\xa0\xa0-> HOME"))))):null},A=n(50),U=n.n(A),F=function(e,t,n,a,r){var l=2*Math.PI/a*r,c=e.createVector(Math.cos(l),Math.sin(l));return c.mult(n),c.add(t),c};function H(e){return e*e}function q(e,t){return H(e.x-t.x)+H(e.y-t.y)}var Y,B=function(e,t,n){return Math.sqrt(function(e,t,n){var a=q(t,n);if(0==a)return q(e,t);var r=((e.x-t.x)*(n.x-t.x)+(e.y-t.y)*(n.y-t.y))/a;return r=Math.max(0,Math.min(1,r)),q(e,{x:t.x+r*(n.x-t.x),y:t.y+r*(n.y-t.y)})}(e,t,n))},K=n(92),X=n(23),J=n(22),Q=Object.freeze({UNSELECTED:"unselected",CLICKED:"clicked",HOVERING:"hovering",DRAGGED:"dragged"}),Z=function(){function e(t,n,a){Object(d.a)(this,e),this.location=t,this.size=n,this.state=Q.UNSELECTED,this.ID=a}return Object(E.a)(e,[{key:"isOver",value:function(e){return e.dist(this.location)<this.size/2}},{key:"isCurrentOver",value:function(e){return this.isOver(e.createVector(e.mouseX,e.mouseY))}},{key:"mousePressed",value:function(e){this.isCurrentOver(e)&&(this.state=Q.CLICKED)}},{key:"mouseReleased",value:function(e){this.state=Q.UNSELECTED,this.mouseMoved(e)}},{key:"mouseDragged",value:function(e){this.state!==Q.UNSELECTED&&(this.state=Q.DRAGGED)}},{key:"mouseMoved",value:function(e){this.state===Q.UNSELECTED&&this.isCurrentOver(e)?this.state=Q.HOVERING:this.state!==Q.HOVERING||this.isCurrentOver(e)||(this.state=Q.UNSELECTED)}}]),e}(),$=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(e){var a,r=e.location,l=e.size,c=e.color,i=e.alternativeColor,o=e.ID;return Object(d.a)(this,n),(a=t.call(this,r,l,o)).color=c,a.alternativeColor=i,a.collisionColor="red",a.colorplaceholder=c,a}return Object(E.a)(n,[{key:"detectCollision",value:function(e){var t,n=!1,a=Object(K.a)(e.values());try{for(a.s();!(t=a.n()).done;)for(var r=t.value,l=0;l<r.beam.segments.length;l++){var c=r.beam.segments[l],i={x:c.p1_x,y:c.p1_y},o={x:c.p2_x,y:c.p2_y},s={x:this.location.x,y:this.location.y};B(s,i,o)<this.size/2&&(n=!0)}}catch(u){a.e(u)}finally{a.f()}this.color=n?this.collisionColor:this.colorplaceholder}},{key:"draw",value:function(e){e.noStroke(),this.state===Q.UNSELECTED||this.state===Q.HOVERING?e.fill(this.color):(this.state===Q.DRAGGED&&(this.location.x=e.mouseX,this.location.y=e.mouseY),e.fill(this.alternativeColor));var t=this.size;this.state===Q.HOVERING&&(t+=2*Math.sin(e.millis())),e.circle(this.location.x,this.location.y,t)}}]),n}(Z),ee=n(15),te=n(8),ne=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(e,a,r,l,c,i){var o;return Object(d.a)(this,n),(o=t.call(this,e,a)).color=c,o.strokeWeight=i,o.direction=l,o.circleSize=r,o}return Object(E.a)(n,[{key:"rotate",value:function(e){var t=function(e){return e.createVector(e.mouseX,e.mouseY)}(e),n=e.createVector(0,0).set(this.location).sub(t);this.direction=e.createVector(-n.normalize().x,-n.normalize().y)}},{key:"getDirection",value:function(e){return this.direction}},{key:"isOver",value:function(e){return e&&e.dist(this.handlePosition)<this.size/2}},{key:"draw",value:function(e){this.state===Q.DRAGGED&&this.rotate(e),e.strokeWeight(this.strokeWeight),e.noFill(),e.stroke(this.color),e.circle(this.location.x,this.location.y,this.circleSize);var t=e.createVector(this.direction.x,this.direction.y);t.setMag(this.circleSize/2),this.handlePosition=e.createVector(this.location.x,this.location.y).add(t),e.noStroke(),e.fill(this.color),e.circle(this.handlePosition.x,this.handlePosition.y,this.state===Q.UNSELECTED?this.size:1.2*this.size)}}]),n}(Z),ae=function e(t,n,a,r,l,c){Object(d.a)(this,e),this.p1_x=t,this.p1_y=n,this.p2_x=a,this.p2_y=r,this.color=l,this.mirror=c},re=function(){function e(t,n,a,r,l){Object(d.a)(this,e),this.origin=t,this.direction=n,this.color=a,this.segments=[],this.mirrors=r,this.intersectPoints=[]}return Object(E.a)(e,[{key:"setDirection",value:function(e,t){this.direction=e}},{key:"cast",value:function(e,t,n,a,r){var l=n.createVector(t).set(e);l.setMag(Math.sqrt(Math.pow(n.width,2)+Math.pow(n.height,2))),l.add(t);var c=this.reflect(t,l,e,n,r);if(!1!==c){this.segments.push(new ae(t.x,t.y,c.x,c.y,this.color,r));var i=n.createVector(c.x,c.y);++a<1e3&&this.cast(c.direction,i,n,a,c.mirror)}else this.segments.push(new ae(t.x,t.y,l.x,l.y,this.color,r))}},{key:"reflect",value:function(e,t,n,a,r){for(var l=[],c=0;c<this.mirrors.length;c++){var i=this.mirrors[c].getPoints(a)[0],o=this.mirrors[c].getPoints(a)[1],s=((o.x-i.x)*(e.y-i.y)-(o.y-i.y)*(e.x-i.x))/((o.y-i.y)*(t.x-e.x)-(o.x-i.x)*(t.y-e.y)),u=((t.x-e.x)*(e.y-i.y)-(t.y-e.y)*(e.x-i.x))/((o.y-i.y)*(t.x-e.x)-(o.x-i.x)*(t.y-e.y));if(s>=0&&s<=1&&u>=0&&u<=1){var m=e.x+s*(t.x-e.x),h=e.y+s*(t.y-e.y),d=a.dist(e.x,e.y,m,h);if(this.mirrors[c].id!=r){var E=this.mirrors[c].getReflection(a);l.push({x:m,y:h,distance:d,mirror:this.mirrors[c].id,direction:0,reflectionNormal:E})}}}if(0===l.length)return!1;var f={};if(1==l.length){if(0==l[0].distance)return console.log("no reflection except itself"),!1;f=l[0]}else l.sort((function(e,t){return e.distance>t.distance?1:-1})),f=0==l[0].distance?l[1]:l[0];var b=a.createVector(n.x,n.y),y=a.createVector(f.reflectionNormal.x,f.reflectionNormal.y);return b.reflect(y),f.direction=b,this.intersectPoints.push(f),f}},{key:"draw",value:function(e,t){this.segments=[],this.intersectPoints=[],this.cast(e.createVector(-t.x,-t.y),this.origin,e,0,null);e.noFill();for(var n=0;n<this.segments.length;n++)e.stroke(this.segments[n].color),e.line(this.segments[n].p1_x,this.segments[n].p1_y,this.segments[n].p2_x,this.segments[n].p2_y)}}]),e}(),le=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(e,a,r){var l,c=e.color,i=e.size,o=e.location,s=e.controlOffset,u=e.strokeWeight;Object(d.a)(this,n),(l=t.call(this,o,i)).color=c,l.controlOffset=s,l.strokeWeight=u;var m=r.createVector(r.random(-1,1),r.random(-1,1));return l.handle=new ne(l.location,10,50,m,l.color,l.strokeWeight),l.beam=new re(l.location,r.createVector(-l.handle.getDirection(r).x,-l.handle.getDirection(r).y),c,a,r),l}return Object(E.a)(n,[{key:"draw",value:function(e){e.noStroke(),e.fill(this.color),e.circle(this.location.x,this.location.y,this.size),e.noFill(),this.handle.draw(e),this.beam.draw(e,this.handle.getDirection(e))}},{key:"mousePressed",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mousePressed",this).call(this,e),this.handle.mousePressed(e)}},{key:"mouseReleased",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseReleased",this).call(this,e),this.handle.mouseReleased(e)}},{key:"mouseDragged",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseDragged",this).call(this,e),this.handle.mouseDragged(e)}},{key:"mouseMoved",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseMoved",this).call(this,e),this.handle.mouseMoved(e)}}]),n}(Z),ce=function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(e,a){var r,l=e.location,c=e.size,i=e.color,o=e.alternativeColor,s=(e.direction,e.ID),u=e.player;Object(d.a)(this,n),(r=t.call(this,l,c,s)).color=i,r.alternativeColor=o,r.rotation=0,r.strokeWeight=5,r.player=u;var m=a.createVector(a.random(-1,1),a.random(-1,1));return r.handle=new ne(r.location,10,25,m,r.color,2),r.reflectionNormals=[null,null],r}return Object(E.a)(n,[{key:"getPoints",value:function(e){var t=this.handle.getDirection(e).setMag(this.size/2),n=e.createVector(t.x,t.y).rotate(Math.PI/2),a=e.createVector(this.location.x,this.location.y);a.add(e.createVector(-n.x,-n.y));var r=e.createVector(this.location.x,this.location.y);return r.add(n),[{x:a.x,y:a.y},{x:r.x,y:r.y}]}},{key:"getReflection",value:function(e){return e.createVector(this.handle.direction.x,this.handle.direction.y)}},{key:"isOver",value:function(e){var t=e.x,n=e.y;return this.location.x<=t&&t<=this.location.x+this.strokeWeight&&this.location.y<=n&&n<=this.location.y+this.size}},{key:"draw",value:function(e){e.strokeWeight(this.strokeWeight),e.stroke(this.color),this.state!==Q.UNSELECTED&&this.state!==Q.HOVERING&&this.state===Q.DRAGGED&&(this.location.x=e.mouseX,this.location.y=e.mouseY);this.size;this.state===Q.HOVERING&&Math.sin(e.millis());var t=this.getPoints(e);e.line(t[0].x,t[0].y,t[1].x,t[1].y),this.handle.draw(e)}},{key:"mousePressed",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mousePressed",this).call(this,e),this.handle.mousePressed(e)}},{key:"mouseReleased",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseReleased",this).call(this,e),this.handle.mouseReleased(e)}},{key:"mouseDragged",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseDragged",this).call(this,e),this.handle.mouseDragged(e)}},{key:"mouseMoved",value:function(e){Object(ee.a)(Object(te.a)(n.prototype),"mouseMoved",this).call(this,e),this.handle.mouseMoved(e)}}]),n}(Z),ie=function(e){var t=e.socket,n=e.player,a=(e.mirrorsPerPlayer,e.safeDistance,e.scoreUpdate),r=new Map,l=[],c=[],i=[],o=[],u="black",m={size:30,controlOffset:20,offset:.4,strokeWeight:2},h={amount:1,size:40,color:"darkgreen",alternativeColor:"lightgreen"},d={amount:5,size:50,color:"magenta",alternativeColor:"0f0"},E=function(e){return e.createVector(.5*e.width,.5*e.height)};return s.a.createElement(U.a,{setup:function(e,n){if(console.log("game started"),!n||!n.offsetWidth)throw"canvas not found";console.log(n.offsetWidth),e.createCanvas(n.offsetWidth,window.screen.height).parent(n),t.on("/gameUpdate",(function(t){if(l.length||t.plants.forEach((function(t,n,a){l[n]=new $(Object(k.a)({location:e.createVector(t.x*e.width,t.y*e.height),ID:t.ID},h)),i.push(l[n]),o.push(l[n])})),c.length);else{t.mirrors.forEach((function(t,n,a){c[n]=new ce(Object(k.a)({location:e.createVector(t.x*e.width,t.y*e.height),player:t.player,ID:t.ID},d),e),i.push(c[n]),o.push(c[n])}));["red","green","blue"].forEach((function(t,n){r.set(t,new le(Object(k.a)({color:t,location:F(e,E(e),e.width*m.offset,3,n)},m),c,e)),i.push(r.get(t)),o.push(r.get(t))}))}}))},draw:function(e){e.background(u),i.forEach((function(t){return t.draw(e)})),l.forEach((function(e){return e.detectCollision(r)})),e.frameCount%a==0&&(t.emit("/score",{player:n,score:e.frameCount}),t.emit("/giveGameUpdate"))},mousePressed:function(e){o.forEach((function(t){return t.mousePressed(e)}))},mouseReleased:function(e){o.forEach((function(t){return t.mouseReleased(e)}))},mouseDragged:function(e){o.forEach((function(t){return t.mouseDragged(e)}))},mouseMoved:function(e){o.forEach((function(t){return t.mouseMoved(e)}))}})},oe=n(53),se=function(e){var t=e.name,n=e.description,a=Object(o.useState)(!1),r=Object(b.a)(a,2),l=r[0],c=r[1];return s.a.createElement("div",null,l?s.a.createElement("br",null):null,s.a.createElement("span",null,"---\x3e\xa0"),s.a.createElement("span",{className:"hoverer",onClick:function(){c(!l)}},"[",t,"] ",l?s.a.createElement("span",null,"[X]"):null),s.a.createElement("br",null),l?s.a.createElement("div",{className:"indenter"},n,s.a.createElement("br",null),s.a.createElement("br",null)):null)},ue=function(){var e=Object(y.c)((function(e){return e.data.sensorTypes})),t=Object(o.useState)(!1),n=Object(b.a)(t,2),a=n[0],r=n[1];return e?s.a.createElement("div",null,s.a.createElement("span",null,"--\x3e ",s.a.createElement("span",{className:"hoverer",onClick:function(){r(!a)}},"  SENSORTYPES   ",a?s.a.createElement("span",null,"[X]"):null)),a?e.map((function(e){return s.a.createElement(se,{key:e.name,name:e.name,description:e.description})})):null):null},me=function(e){var t=e.type,n=e.value,a=Object(o.useState)([]),r=Object(b.a)(a,2);r[0],r[1];return Object(o.useEffect)((function(){})),s.a.createElement("div",{className:"indenter"},t," - ",n)},he=function(e){var t=e.name,n=e.sensors,a=Object(o.useState)(!1),r=Object(b.a)(a,2),l=r[0],c=r[1];return s.a.createElement("div",null,l?s.a.createElement("br",null):null,s.a.createElement("span",null,"---\x3e\xa0"),s.a.createElement("span",{className:"hoverer",onClick:function(){c(!l)}},"[",t,"] ",l?s.a.createElement("span",null,"[X]"):null),s.a.createElement("br",null),l?s.a.createElement("div",{className:"indenter"},n.map((function(e,t){return s.a.createElement(me,{key:"sensor"+t,type:e.type,value:e.value})})),s.a.createElement("br",null),s.a.createElement("br",null)):null)},de=function(){var e=Object(y.c)((function(e){return e.data.socket})),t=Object(o.useState)(null),n=Object(b.a)(t,2),a=n[0],r=n[1],l=Object(o.useState)(!1),c=Object(b.a)(l,2),i=c[0],u=c[1];return e&&e.on("/updateSensors",(function(e){r(e)})),Object(o.useEffect)((function(){})),a?s.a.createElement("div",null,s.a.createElement("span",null,"--\x3e ",s.a.createElement("span",{className:"hoverer",onClick:function(){u(!i)}},"  PLANTS   ",i?s.a.createElement("span",null,"[X]"):null)),i?a.map((function(e){return s.a.createElement(he,{key:e.name,name:e.name,sensors:e.sensors})})):null):null},Ee=function(e){var t=e.target,n=e.displaytext,a=e.endText,r=Object(o.useState)(null),l=Object(b.a)(r,2),c=l[0],i=l[1],u=Object(o.useState)(0),m=Object(b.a)(u,2),h=m[0],d=m[1];return Object(o.useEffect)((function(){var e=null;return t!==c&&(i(t),d(null)),c&&(e=setInterval((function(){d(c?Math.floor(Math.abs(((new Date).getTime()-c.getTime())/1e3)):null)}),500)),function(){e&&clearInterval(e)}})),t&&c&&h?h&&h>0?s.a.createElement("div",null,n,": ",h):s.a.createElement("div",null," ",a," "):null},fe=function(e){var t=e.phase,n=e.phases,a=e.target,r=e.player,l=Object(y.c)((function(e){return[e.data.theme,e.data.socket,e.data.client,e.data.gameSettings,e.data.plantClusters,e.data.sensorTypes]})),c=Object(b.a)(l,6),i=c[0],u=c[1],m=c[2],h=c[3],d=(c[4],c[5]);return Object(o.useEffect)((function(){})),i&&m&&h&&u&&d?s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("p",null,"||==================================|| \xa0\xa0\xa0 BIOMODD [BRG",s.a.createElement("sup",null,"13"),"] SPECTRUM ||==================================||"),s.a.createElement("div",null,"GameStatus = ",t),s.a.createElement("div",null,r?s.a.createElement("span",null,"PlayerColor = ",r," "):null),s.a.createElement("div",null,a&&t==n.RUNNING?s.a.createElement("span",null," ",s.a.createElement(Ee,{target:a,displaytext:"Time remaining",endText:"THE END"})," "):null),s.a.createElement("br",null),s.a.createElement(ue,null),s.a.createElement(de,null)):null},be=function(e){e.socket;return"i will be score"},ye=function(){var e=Object(y.c)((function(e){return[e.data.theme,e.data.socket,e.data.client,e.data.gameSettings,e.data.plantClusters,e.data.sensorTypes]})),t=Object(b.a)(e,6),n=t[0],a=t[1],r=t[2],l=t[3],c=(t[4],t[5],Object(oe.b)()),i=Object(o.useState)(null),u=Object(b.a)(i,2),m=u[0],h=u[1],d=Object.freeze({LOAD:"load",RUNNING:"running",END:"ended"}),E=Object(o.useState)(d.END),f=Object(b.a)(E,2),v=f[0],g=f[1],O=Object(o.useState)(null),x=Object(b.a)(O,2),j=x[0],S=x[1],T=Object(o.useState)(null),k=Object(b.a)(T,2),w=k[0],D=k[1],N=Object(o.useState)(null),C=Object(b.a)(N,2),_=C[0],M=C[1],I=Object(o.useState)(null),P=Object(b.a)(I,2),R=P[0],G=P[1],V=function(e){var t=new Date;t.setSeconds(t.getSeconds()+e),M(t)};Object(o.useEffect)((function(){return a&&(G(!0),a.on("/phase",(function(e){switch(g(e),e){case d.END:D(null),M(null);break;case d.LOAD:l&&V(l.beginningTime);break;case d.RUNNING:l&&V(l.duration)}})),j||a.emit("/givePlayers"),a.on("/players",(function(e){S(e)}))),function(){a&&(a.off("/phase"),a.off("/players"),G(!1))}}),[R,G,a,l]);var z=function(e){var t=s.a.createElement("div",{className:"kill"},"[PLAY ",e.toUpperCase(),"]"),n=s.a.createElement("div",null,"[",e.toUpperCase()," SELECTED]");return w?w==e||w==e+"s"?n:t:j[e]&&j[e+"s"]?t:j[e]?s.a.createElement("div",{className:"hoverer",onClick:function(){w||(a.emit("/startgame",e+"s"),D(e+"s"))}},"[PLAY ",e.toUpperCase()," support]"):s.a.createElement("div",{className:"hoverer",onClick:function(){w||(a.emit("/startgame",e),D(e))}},"[PLAY ",e.toUpperCase(),"]")},L=function(){switch(v){case d.LOAD:case d.END:return s.a.createElement("div",{style:{color:"white",width:"100%",textAlign:"center"}},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),"|| ==== LOAD NEW GAME ==== ||",s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("div",null,z("red"),z("green"),z("blue")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(Ee,{target:_,displaytext:"Time before launch",endText:"LETS GO"}));case d.RUNNING:return s.a.createElement(ie,{socket:a,player:w,scoreUpdate:l.scoreUpdate})}};return n&&r&&l&&j?s.a.createElement("div",null,m?null:s.a.createElement("button",{onClick:function(){h(!0),c.enter()}},"LOAD"),s.a.createElement(oe.a,{handle:c},s.a.createElement(p.c,null,s.a.createElement(p.a,{xs:12,sm:12,md:9},s.a.createElement(n.Empty,{style:{padding:"0",margin:"0"}},s.a.createElement("div",{style:{width:"100%",height:"100vh"}},l?L():null),s.a.createElement("div",null,s.a.createElement(be,{socket:a})))),s.a.createElement(p.a,{xs:12,md:3,style:{background:"black",color:"white",borderLeft:"solid 2px white"}},s.a.createElement(fe,{phase:v,phases:d,target:_,player:w}))))):null},pe=(n(196),function(e){Object(X.a)(n,e);var t=Object(J.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).font="Fira Code",e.sizes.normal="1.2em",e}return Object(E.a)(n,[{key:"defaultFont",get:function(){return"".concat(Object(ee.a)(Object(te.a)(n.prototype),"defaultFont",this),"font-weight: 400;")}},{key:"Title",get:function(){return this.styled(Object(ee.a)(Object(te.a)(n.prototype),"Title",this))(Y||(Y=Object(h.a)([" font-weight: bold;"])))}}]),n}(x)),ve=n(35),ge=n.n(ve),Oe=n(93),xe=n.n(Oe),je=function(){var e=Object(y.c)((function(e){return e.data.theme})),t=Object(y.c)((function(e){return e.data.news})),n=Object(y.c)((function(e){return e.data.events})),a=Object(y.c)((function(e){return e.data.faqs})),r=Object(o.useRef)(null);if(e){var l=function(t){return t.map((function(t){var n=t.title,a=t.description,r=t.available,l=t.moment;return s.a.createElement("div",{key:n},s.a.createElement(e.SubTitle,null,s.a.createElement(xe.a,{format:"DD/MM"},l)," \xa0\xa0 ",n),s.a.createElement(e.Text,null,s.a.createElement(ge.a,{blocks:a})),s.a.createElement(e.Text,null,s.a.createElement("i",null,"Available places: ",r)),s.a.createElement("br",null),"                  ",s.a.createElement("br",null),"                  ",s.a.createElement("br",null))}))};return s.a.createElement(p.c,{align:"center"},s.a.createElement(p.a,{xs:12},s.a.createElement(W,null)),s.a.createElement(p.a,{xs:12,sm:8,md:6},s.a.createElement(e.Container,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(e.Wrapped,null,s.a.createElement(e.Container,null,s.a.createElement(e.Title,{ref:r},"NEWS"),s.a.createElement("br",null),t?t.map((function(t){var n=t.title,a=t.description,r=t.images;return s.a.createElement(s.a.Fragment,null,s.a.createElement(e.SubTitle,{key:n},n),s.a.createElement(e.Text,null,s.a.createElement(ge.a,{blocks:a})),r&&r.length?r.map((function(t){var n=t.title,a=t.description,r=t.image;return s.a.createElement(s.a.Fragment,null,s.a.createElement(e.Text,{key:n},s.a.createElement("b",null,n)),s.a.createElement("img",{src:r,alt:n,style:{width:"100%"}}),s.a.createElement(e.Text,null,s.a.createElement("i",null,s.a.createElement(ge.a,{blocks:a}))))})):null,s.a.createElement("br",null))})):s.a.createElement(e.Text,null,"L O A D I N G"))))),s.a.createElement(p.a,{xs:12,sm:8,md:6},s.a.createElement(e.Container,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(e.Wrapped,null,s.a.createElement(e.Container,null,s.a.createElement(e.Title,null,"Frequently Asked Questions"),s.a.createElement("br",null),a?a.map((function(t){var n=t.title,a=t.description;return s.a.createElement(e.Text,{key:n},s.a.createElement("b",null,n)," ",s.a.createElement("br",null),s.a.createElement(ge.a,{blocks:a}))})):s.a.createElement(e.Text,null,"L O A D I N G"),s.a.createElement("br",null)))),s.a.createElement(e.Container,null,s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(e.Wrapped,null,s.a.createElement(e.Container,null,s.a.createElement(e.Title,null,"EVENTS"),s.a.createElement("br",null),n?l(n.filter((function(e){var t=new Date,n=new Date(t);return n.setDate(n.getDate()-1),new Date(e.moment)>=n}))):s.a.createElement(e.Text,null,"L O A D I N G"),s.a.createElement("br",null),s.a.createElement(e.Title,null,"PAST EVENTS"),s.a.createElement("br",null),n?l(n.filter((function(e){var t=new Date,n=new Date(t);return n.setDate(n.getDate()-1),new Date(e.moment)<n}))):null)))))}return null},Se=function(){var e=Object(y.c)((function(e){return e.data})),t=Object(y.b)();return Object(o.useEffect)((function(){if(!e.client&&t){var n=G(t);t({type:w.SET_CLIENT,client:n})}if(!e.theme&&t){new pe;t({type:w.SET_THEME,theme:new pe})}})),null},Te=function(){var e=Object(M.a)();new pe;return s.a.createElement(y.a,{store:_},s.a.createElement(Se,null),s.a.createElement(j.b,{history:e},s.a.createElement(p.b,{style:{width:"100%",minWidth:"100%",margin:0,padding:0}},s.a.createElement("span",null,s.a.createElement(j.c,null,s.a.createElement(j.a,{exact:!0,path:"/",component:ye}),s.a.createElement(j.a,{exact:!0,path:"/gamelegacy",component:ye}),s.a.createElement(j.a,{component:je}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},90:function(e){e.exports=JSON.parse('{"a":{"forceConnection":"false","projectId":"t39t9igo","dataset":"production","token":"skuqgSCQC4s2pxEmtmqYlPUtommpeqGIyRf9gvUOTmCygpeWClzMKSGOrnKIP7AFuepInhnK1DaZr6VykFyqHaKi01OgyTaI2FiVc75TqmLJoLJ0mRhUnXqqBIc8yNkvzqTJaBDeDHeLixGUPWoIRF5ZZL6cSAz1OMogyyBVOW5rtg3awQxd"}}')},91:function(e,t,n){e.exports=n.p+"static/media/logo.4ef8c6e8.svg"},94:function(e,t,n){e.exports=n(208)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.80dc9723.chunk.js.map