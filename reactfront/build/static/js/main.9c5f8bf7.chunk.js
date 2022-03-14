(this.webpackJsonpreactfront=this.webpackJsonpreactfront||[]).push([[0],{217:function(e,t,a){},358:function(e,t,a){"use strict";a.r(t);var n=a(101),i=a(50),r=a(42),s=a(173),o=a(198),l=a(0),c=a.n(l),h=a(25),d=a.n(h),u=(a(217),a(72)),b=a(5),j=a(380),p=a(382),m=a(359),O=a(378),x=a(12),v=a(403),g=a(3),f=["children","title"];function k(e){var t=e.children;return Object(g.jsx)("div",{style:{width:"100%",padding:"6px",height:"40px"},children:Object(g.jsx)("h1",{children:t})})}var w=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,paddingLeft:e.spacing(2)}}}));function y(){var e=w();return Object(g.jsx)("div",{className:e.root,children:Object(g.jsx)(j.a,{position:"static",children:Object(g.jsx)(p.a,{children:Object(g.jsx)("h1",{className:e.title,children:"Test Stand Control Software"})})})})}function E(e){var t=e.children,a=e.title,n=Object(b.a)(e,f);return Object(g.jsxs)("div",Object(u.a)(Object(u.a)({className:"panel"},n),{},{children:[Object(g.jsx)(k,{children:a}),Object(g.jsx)(m.a,{style:{width:"100%",height:"calc(100% - 52px"},children:t})]}))}var S=Object(x.a)((function(e){return{root:{width:60,height:32,padding:1,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(26px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:28,height:28,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(v.a);Object(x.a)((function(e){return{root:{position:"absolute",top:"-10px",left:"-10px",width:"6vw"}}}))(v.a);function C(e){var t=e.value,a=e.setValue;return Object(g.jsxs)("div",{className:"toggle-switch",style:{width:60},children:[Object(g.jsx)("span",{className:t?"inactive":"active",children:"Off"}),Object(g.jsx)(S,{checked:t,onChange:function(){return a(!t)}}),Object(g.jsx)("span",{className:t?"active":"inactive",style:{textAlign:"right",width:"100%",display:"block"},children:"On"})]})}function N(e){var t="";t=e.children?e.children:Object(g.jsx)(C,{value:e.switchValue,setValue:e.setSwitchValue});var a=e.label?{cursor:"help",borderBottom:"1px dotted #333"}:{};return Object(g.jsxs)("div",{className:"safety-card",children:[Object(g.jsx)("h2",{title:e.label,style:a,children:e.title}),t]})}function P(e){var t=e.state,a=e.emit,n=e.that,i=null!==t.data&&t.data.arming_switch,r=null!==t.data&&t.data.manual_switch,s=null!==t.data&&t.data.data_logging;return Object(g.jsx)(E,{title:"Safety",className:"panel safety",children:Object(g.jsxs)("div",{className:"flex",style:{justifyContent:"flex-start"},children:[Object(g.jsx)(N,{title:"Arming Switch",label:"Controls if the state can change",isButton:"false",switchValue:i,setSwitchValue:function(e){return a("ARMINGSWITCH",e)}}),Object(g.jsx)(N,{title:"Manual Control",label:"Allow manual pin operation",isButton:"false",switchValue:r,setSwitchValue:function(e){return a("MANUALSWITCH",e)}}),Object(g.jsx)(N,{title:"Data Logging",label:"Logging data",isButton:"false",switchValue:s,setSwitchValue:function(e){return a("DATALOG",e)}}),Object(g.jsx)(N,{title:"R-Pi IP",label:"Local IP address of the Raspberry Pi. Must be on the same network. If it's incorrect no new data will appear",children:Object(g.jsx)("input",{value:t.wsAddress,size:"10",onChange:function(e){n.setState({wsAddress:e.target.value},(function(){localStorage.setItem("wsaddr",e.target.value),n.connect()}))},placeholder:t.defaultWSAddress})}),Object(g.jsxs)(N,{title:"Ping",label:"Time delay to reach the server",children:[t.ping?t.ping:"0","ms"]})]})})}var L=a(20),J=a(384),V=a(385),I=a(89),_=a(389),T=a(194),A=a(195),F=a(34),X=a(92),M=a(110),W=a(197);function H(e,t,a,n){return 14.504*((e/120-a/1e3)/(n/1e3)*t)}var R={eth_tank:{barMax:100,zero:3.99,span:16.02},lox_tank:{barMax:100,zero:3.99,span:16.04},eth_n2:{barMax:250,zero:4,span:16},lox_n2:{barMax:250,zero:4,span:16}};function D(e,t){return t.map((function(t){return{time:"t-"+((parseInt(e.data.time)-parseInt(t.time))/1e3).toFixed(3),LOX_Tank_Pressure:H(t.LOX.analog[3],R.lox_tank.barMax,R.lox_tank.zero,R.lox_tank.span),ETH_Tank_Pressure:H(t.ETH.analog[3],R.eth_tank.barMax,R.eth_tank.zero,R.eth_tank.span)}}))}function z(e){var t=e.state,a=(e.emit,c.a.useState(!1)),n=Object(L.a)(a,2),i=n[0],r=n[1],s=c.a.useState(D(t,t.history)),o=Object(L.a)(s,2),l=o[0],h=o[1],d=t.history.length,u=i?l:d>200?t.history.slice(d-200,-1):t.history,b=i?l:D(t,u);return Object(g.jsxs)(E,{title:"Graphs",className:"panel graphs",children:[Object(g.jsx)(J.a,{width:"100%",height:"90%",children:Object(g.jsxs)(V.a,{data:b,margin:{top:20,right:30,left:20,bottom:10},children:[Object(g.jsx)(I.a,{verticalAlign:"top",height:50}),Object(g.jsx)(_.a,{strokeDasharray:"3 3"}),Object(g.jsx)(T.a,{dataKey:"time"}),Object(g.jsx)(A.a,{children:Object(g.jsx)(F.a,{angle:270,position:"left",style:{textAnchor:"middle"},children:"Pressure (PSI)"})}),Object(g.jsx)(X.a,{position:{x:100,y:0}}),i?Object(g.jsx)(M.a,{}):null,Object(g.jsx)(W.a,{type:"monotone",dataKey:"LOX_N2_Pressure",stroke:"#ff0000"}),Object(g.jsx)(W.a,{type:"monotone",dataKey:"LOX_Tank_Pressure",stroke:"#000000"}),Object(g.jsx)(W.a,{type:"monotone",dataKey:"ETH_N2_Pressure",stroke:"#0099ff"}),Object(g.jsx)(W.a,{type:"monotone",dataKey:"ETH_Tank_Pressure",stroke:"#66ff99"})]})}),Object(g.jsx)(v.a,{checked:i,onChange:function(e){r(e.target.checked),i&&h(D(t,function(e){return e.filter((function(e,t){return t%2===0}))}(d>600?t.history.slice(d-600,-1):t.history)))}})," Analysis Mode"]})}var B=a(55),G=a.n(B),U=a(132),q=a(400),K=a(390),Q=a(391),$=a(392),Y=a(393),Z=a(394),ee=a(395),te=a(396),ae=a(397),ne=a(398),ie=a(399);function re(e){var t,a=e.state,n=e.emit,i=null!==(t=a.data&&a.data.current_sequence)&&void 0!==t?t:[],r=null===a.data?null:a.data.sequence_executing,s=c.a.useState(!1),o=Object(L.a)(s,2),l=o[0],h=o[1],d=function(){var e=Object(U.a)(G.a.mark((function e(t){var a,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.target.files.length){e.next=2;break}return e.abrupt("return");case 2:if(a=t.target.files[0],!1===(i=j(a))){e.next=12;break}return e.t0=n,e.next=8,i;case 8:e.t1=e.sent,(0,e.t0)("SETSEQUENCE",e.t1),e.next=13;break;case 12:h(!0);case 13:t.target.value="";case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=e.split("\n"),n=a.map((function(e){return e.split(t).map((function(e){return e.trim()}))}));return n}var b=function(e){var t=new FileReader;return new Promise((function(a,n){t.onerror=function(){t.abort(),n(new DOMException("Problem parsing input file."))},t.onload=function(){a(t.result)},t.readAsText(e)}))};function j(e){return p.apply(this,arguments)}function p(){return(p=Object(U.a)(G.a.mark((function e(t){var a,n,i;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:a=e.sent,n=u(a),i=[],e.prev=5,n.forEach((function(e){if("OPEN"===e[0]||"CLOSE"===e[0]){if(3!==e.length)throw new Error("invalid input");if("lox"!==e[1].toLowerCase()&&"eth"!==e[1].toLowerCase())throw new Error("invalid input");var t=Number.parseInt(e[2]);if(!t)throw new Error("invalid input");i.push({header:e[0],parameter:{name:e[1],pin:t}})}else{if("SLEEP"!==e[0]){if(""===e[0])return;throw new Error("invalid input")}if(2!==e.length)throw new Error("invalid input");var a=Number.parseInt(e[1]);if(!a)throw new Error("invalid input");i.push({header:e[0],parameter:a})}})),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(5),e.abrupt("return",!1);case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e,null,[[5,9]])})))).apply(this,arguments)}var m=a.data&&a.data.arming_switch;return Object(g.jsxs)(E,{title:"Sequences",children:[Object(g.jsx)("div",{children:Object(g.jsxs)(q.a,{open:l,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(g.jsx)(K.a,{id:"alert-dialog-title",children:"Invalid CSV"}),Object(g.jsx)(Q.a,{children:Object(g.jsx)($.a,{id:"alert-dialog-description",children:"Confirm the CSV given was valid, read documentation if unsure."})}),Object(g.jsx)(Y.a,{children:Object(g.jsx)(Z.a,{onClick:function(){h(!1)},color:"primary",autoFocus:!0,children:"Understood!"})})]})}),Object(g.jsxs)("div",{className:"flex",children:[Object(g.jsx)("div",{style:{width:"200px",borderRight:"1px solid #999",height:"100%"},children:Object(g.jsxs)("div",{className:"frame",children:[Object(g.jsx)("h2",{children:"Start Sequence"}),Object(g.jsx)("div",{children:Object(g.jsx)("input",{type:"file",accept:".csv",maxLength:"1",onChange:d})}),Object(g.jsx)("br",{}),Object(g.jsx)("button",{onClick:function(){return n("BEGINSEQUENCE",null)},style:{backgroundColor:m?"lime":"lightgrey",padding:10,cursor:"pointer"},children:"Start"}),Object(g.jsx)("br",{}),Object(g.jsx)("br",{}),Object(g.jsx)(N,{title:"Run Abort Sequence",children:Object(g.jsx)("button",{onClick:function(){return n("ABORTSEQUENCE",e);var e},style:{backgroundColor:m?"tomato":"lightgrey",padding:10,cursor:"pointer"},children:"ABORT"})})]})}),Object(g.jsx)("div",{style:{overflow:"auto",width:"100%",height:"100%"},children:Object(g.jsxs)(ee.a,{stickyHeader:!0,"aria-label":"simple table",children:[Object(g.jsx)(te.a,{children:Object(g.jsxs)(ae.a,{children:[Object(g.jsx)(ne.a,{align:"center",children:"Command"}),Object(g.jsx)(ne.a,{align:"center",children:"LabJack"}),Object(g.jsx)(ne.a,{align:"center",children:"Value"})]})}),Object(g.jsxs)(ie.a,{children:[r&&Object(g.jsxs)(ae.a,{style:{background:"#94F690"},children:[Object(g.jsx)(ne.a,{component:"th",scope:"row",children:r.header}),Object(g.jsx)(ne.a,{align:"center",children:r.data.name&&r.data.name}),Object(g.jsx)(ne.a,{align:"center",children:r.data.name?r.data.pin:((r.time-a.data.time)/1e3).toFixed(4)})]}),i.map((function(e){return Object(g.jsxs)(ae.a,{children:[Object(g.jsx)(ne.a,{component:"th",scope:"row",children:e.header}),Object(g.jsx)(ne.a,{align:"center",children:void 0===e.data.name?"":e.data.name}),Object(g.jsx)(ne.a,{align:"center",children:void 0===e.data.name?e.data:e.data.pin})]})}))]})]})})]})]})}var se=["state","emit"],oe=["state","emit"];function le(e){return"".concat(26*e,"px")}function ce(e){var t=e.x,a=e.y,n=e.width,i=e.height,r=e.enabled;return Object(u.a)({position:"absolute",borderStyle:"solid",borderColor:"transparent",width:le(n),height:le(i),top:le(a),left:le(t)},r?{}:{cursor:"help"})}function he(e){var t=e.state,a=e.emit,n=Object(b.a)(e,se),i=null!==t.data&&t.data[n.testEnd].digital[n.pin],r=ce(n),s={position:"absolute",margin:"auto",fontSize:"1rem",top:le(n.y-1),left:le(n.x-1)};return Object(g.jsxs)("div",{children:[t.data&&Object(g.jsxs)("div",{style:r,title:n.enabled?"":"Please enable the arming and manual control switches to toggle",children:[Object(g.jsx)(v.a,{checked:i,onChange:function(){return t.data[n.testEnd].digital[n.pin]?a("CLOSE",{name:n.testEnd,pin:parseInt(n.pin)}):a("OPEN",{name:n.testEnd,pin:parseInt(n.pin)})},disabled:!n.enabled}),Object(g.jsxs)("label",{className:(i?"active":"inactive")+" control-label "+(n.enabled?"":"disabled"),children:[Object(g.jsx)("br",{}),i?"Open":"Closed"]})]}),Object(g.jsx)("h4",{style:s,children:n.title})]})}function de(e){var t=e.state,a=(e.emit,Object(b.a)(e,oe)),n=ce(Object(u.a)({enabled:!0},a)),i=null,r=null;if(t.data){i=t.data[a.testEnd].analog[a.pin];var s=R[a.sensorName];r=H(i,s.barMax,s.zero,s.span)}return r&&r>29.3918&&(n.backgroundColor="tomato"),Object(g.jsxs)("div",{style:n,children:[Object(g.jsx)("div",{style:{fontSize:"1rem"},children:a.title}),Object(g.jsxs)("div",{style:{fontSize:"1rem"},children:[r&&r.toFixed(1)," PSI (",i&&i.toFixed(2),"V)"]})]})}function ue(e){var t=e.state,a=e.emit;return Object(g.jsx)(E,{title:"Control Panel",className:"panel control",children:Object(g.jsxs)("div",{className:"control-panel",children:[be.map((function(e){return Object(g.jsx)(he,{title:e.pin.testEnd.charAt(0)+" "+e.pin.abbrev+" "+e.pin.labJackChanel,state:t,emit:a,pin:e.pin.labJackChanel,testEnd:e.pin.testEnd,width:e.position.width,height:e.position.height,x:e.position.x,y:e.position.y,enabled:t.data&&t.data.arming_switch&&t.data.manual_switch},e.pin.nameShort)})),je.map((function(e){return Object(g.jsx)(de,{title:e.pin.nameShort,state:t,emit:a,pin:e.pin.labJackChanel,testEnd:e.pin.testEnd,width:e.position.width,height:e.position.height,x:e.position.x,y:e.position.y,sensorName:e.pin.sensorName},e.pin.nameShort)}))]})})}var be=[{pin:{valve:11,labJackPin:"EIO6",labJackChanel:"14",testEnd:"ETH",name:"Main Fuel (Ethanol) Valve",nameShort:"E.L.V1",abbrev:"main"},position:{width:"2",height:"1",x:"11.5",y:"15"}},{pin:{valve:10,labJackPin:"CIO1",labJackChanel:"12",testEnd:"ETH",name:"Fuel (Ethanol) Fill Valve",nameShort:"E.DF.V1",abbrev:"fill"},position:{width:"2",height:"1",x:"8",y:"13"}},{pin:{valve:9,labJackPin:"EIO2",labJackChanel:"10",testEnd:"ETH",name:"Fuel (Ethanol) Dump Valve",nameShort:"E.DF.V2",abbrev:"dump"},position:{width:"2",height:"1",x:"4",y:"13"}},{pin:{valve:8,labJackPin:"EIO0",labJackChanel:"8",testEnd:"ETH",name:"Fuel (Ethanol) Tank Nitrogen Pressurisation Valve",nameShort:"N.L.E.V2",abbrev:"pres"},position:{width:"2",height:"1",x:"8",y:"4"}},{pin:{valve:7,labJackPin:"CIO3",labJackChanel:"19",testEnd:"ETH",name:"Fuel (Ethanol) Tank Vent Valve",nameShort:"N.L.E.V3",abbrev:"vent"},position:{width:"2",height:"1",x:"11",y:"1"}},{pin:{valve:6,labJackPin:"EIO4",labJackChanel:"17",testEnd:"ETH",name:"Fuel (Ethanol) Line Nitrogen Purge Valve",nameShort:"E.L.V2",abbrev:"purge"},position:{width:"2",height:"1",x:"8",y:"17"}},{pin:{valve:5,labJackPin:"CIO0",labJackChanel:"16",testEnd:"LOX",name:"Main Oxidiser (LOX) Valve",nameShort:"O.L.V1",abbrev:"main"},position:{width:"2",height:"1",x:"17.5",y:"15"}},{pin:{valve:4,labJackPin:"CIO2",labJackChanel:"18",testEnd:"LOX",name:"Oxidiser (LOX) Fill Valve",nameShort:"O.DF.V1",abbrev:"fill"},position:{width:"2",height:"1",x:"21",y:"13"}},{pin:{valve:3,labJackPin:"EIO1",labJackChanel:"9",testEnd:"LOX",name:"Oxidiser (LOX) Dump Valve",nameShort:"O.DF.V2",abbrev:"dump"},position:{width:"2",height:"1",x:"25",y:"13"}},{pin:{valve:2,labJackPin:"EIO3",labJackChanel:"11",testEnd:"LOX",name:"Oxidiser (LOX) Tank Nitrogen Pressurisation Valve",nameShort:"N.L.O.V2",abbrev:"pres"},position:{width:"2",height:"1",x:"21",y:"4"}},{pin:{valve:1,labJackPin:"EIO5",labJackChanel:"13",testEnd:"LOX",name:"Oxidiser (LOX) Tank Vent Valve",nameShort:"N.L.O.V3",abbrev:"vent"},position:{width:"2",height:"1",x:"18",y:"1"}},{pin:{valve:0,labJackPin:"EIO7",labJackChanel:"15",testEnd:"LOX",name:"Oxidiser (LOX) Line Nitrogen Purge Valve",nameShort:"O.L.V2",abbrev:"purge"},position:{width:"2",height:"1",x:"21",y:"17"}}],je=[{pin:{sensorNumber:0,labJackPin:"FIO1",labJackChanel:"1",testEnd:"LOX",sensorName:"lox_n2",name:"LOX Nitrogen Pressurant Sensor",nameShort:"(N.L.O.P1)"},position:{width:"5",height:"3",x:"25",y:"3"}},{pin:{sensorNumber:1,labJackPin:"FIO3",labJackChanel:"3",testEnd:"LOX",sensorName:"lox_tank",name:"LOX Tank Pressure Sensor",nameShort:"(O.L.P1)"},position:{width:"3",height:"4.5",x:"17",y:"7.5"}},{pin:{sensorNumber:2,labJackPin:"FIO1",labJackChanel:"1",testEnd:"ETH",sensorName:"eth_n2",name:"Ethanol Nitrogen Pressurant Sensor",nameShort:"(N.L.E.P1)"},position:{width:"5",height:"3",x:"1",y:"3"}},{pin:{sensorNumber:3,labJackPin:"FIO3",labJackChanel:"3",testEnd:"ETH",sensorName:"eth_tank",name:"Ethanol Tank Pressure Sensor",nameShort:"(E.L.P1)"},position:{width:"3",height:"4.5",x:"11",y:"7.5"}}],pe=a(402),me=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={data:null,history:[],mostRecentWarning:{},showWarning:!1,wsAddress:localStorage.getItem("wsaddr")||"127.0.0.1",defaultWSAddress:"127.0.0.1"},i.emit=i.emit.bind(Object(r.a)(i)),i.connect(),i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.emit("PING")}),200),this.mounted=!0}},{key:"componentWillUnmount",value:function(){this.mounted=!1,clearInterval(this.interval)}},{key:"connect",value:function(){var e=this;this.socket&&this.socket.close();try{this.socket=new WebSocket("ws://".concat(this.state.wsAddress,":8888")),this.socket.onopen=function(e){return console.log("websocket connection established")},this.socket.onclose=function(t){setTimeout((function(){e.socket||e.connect()}),1e3)},this.socket.onmessage=function(t){if(e.mounted){var a=JSON.parse(t.data);switch(a.type){case"STATE":e.state.history.push(a.data),e.state.history.length>1e4&&(e.state.history=e.state.history.slice(5e3,-1)),e.setState({data:a.data,history:e.state.history});break;case"PING":e.setState({ping:(new Date).getTime()-a.data});break;default:console.error(a)}}}}catch(t){console.error(t)}}},{key:"emit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.socket.readyState===WebSocket.OPEN&&this.socket.send(JSON.stringify({command:{header:e,data:t},time:(new Date).getTime()}))}},{key:"render",value:function(){var e=this;return this.state.data&&this.state.data.latest_warning&&this.state.data.latest_warning.id!==this.state.mostRecentWarning.id&&(console.log(this.state.mostRecentWarning),this.setState({mostRecentWarning:this.state.data.latest_warning,showWarning:!0})),Object(g.jsxs)("div",{children:[Object(g.jsx)(y,{}),Object(g.jsxs)("div",{className:"panels-root",children:[Object(g.jsxs)("div",{className:"panel-row-1",children:[Object(g.jsx)(P,{state:this.state,emit:this.emit,that:this}),Object(g.jsx)(re,{state:this.state,emit:this.emit})]}),Object(g.jsxs)("div",{className:"panel-row-2",children:[Object(g.jsx)(ue,{state:this.state,emit:this.emit}),Object(g.jsx)(z,{state:this.state,emit:this.emit})]}),this.state.showWarning?Object(g.jsx)(pe.a,{onClose:function(){e.setState({showWarning:!1})},severity:"error",className:"alert",children:this.state.mostRecentWarning.message}):null]})]})}}]),a}(c.a.Component);d.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(me,{})}),document.getElementById("root"))}},[[358,1,2]]]);
//# sourceMappingURL=main.9c5f8bf7.chunk.js.map