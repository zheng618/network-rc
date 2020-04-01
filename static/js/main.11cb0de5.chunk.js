(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{128:function(e,t,a){e.exports=a(273)},133:function(e,t,a){},134:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n,o=a(0),r=a.n(o),s=a(26),c=a.n(s),i=(a(133),a(124)),l=a(106),d=a(107),m=a(123),p=a(125),h=a(280),u=a(277),v=a(279),f=a(79),b=a(281),E=a(276),g=a(278);a(134);window.addEventListener("deviceorientation",(function(e){var t=e.alpha,a=e.beta,o=e.gamma;n={alpha:t,beta:a,gamma:o}}));var R={labelCol:{span:4},wrapperCol:{span:16}},w={wrapperCol:{offset:4,span:16}},k=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var o;return Object(l.a)(this,a),(o=t.call(this,e)).connectWs=function(e){var t=e.wsAddress;o.socket&&(o.socket.close(),o.socket=void 0),o.socket=window.io(t)},o.handleHold=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e||(o.socket.emit("speed rate",0),o.socket.emit("direction",0)),o.setState({hold:e,base:Object(i.a)({},n)})},o.changeSpeed=function(){var e=o.state,t=e.hold,a=e.base.gamma,r=e.speedZeroRate,s=e.speedMaxRate,c=e.speedReverseMaxRate;if(t){var i=n.gamma-a>30?30:n.gamma-a,l=i>0?i/30*(s-r)+r:r+i/30*(r-c);o.socket.emit("speed rate",l),o.setState({speedRate:l,speedPercent:i/30})}else o.setState({speedRate:0})},o.changeDirection=function(){var e=o.state,t=e.hold,a=e.base.beta,r=e.directionReverse;if(t){var s=n.beta-a;s=(s=s<-30?-30:s)>30?30:s,o.socket.emit("direction",r?-s/30:s/30)}else o.setState({direction:0})},o.state={hold:!1,speed:0,direction:0,base:{alpha:void 0,beta:void 0,gamma:void 0},speedMaxRate:80,speedReverseMaxRate:70,speedZeroRate:75,speedRate:0,speedPercent:0,directionReverse:!0},o}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.changeSpeed,t=this.changeDirection;window.addEventListener("deviceorientation",(function(a){e(),t()}),!1)}},{key:"render",value:function(){var e=this,t=this.handleHold,a=this.connectWs,n=this.state,o=n.hold,s=n.directionReverse,c=n.direction,i=n.speedReverseMaxRate,l=n.speedMaxRate,d=n.speedZeroRate,m=n.speedRate,p=n.speedPercent;return r.a.createElement("div",{className:"App"},r.a.createElement("br",null),r.a.createElement(u.a,Object.assign({},R,{onFinish:a}),r.a.createElement(u.a.Item,{label:"\u8fde\u63a5\u5730\u5740",name:"wsAddress",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8fde\u63a5\u5730\u5740!"}]},r.a.createElement(v.a,null)),r.a.createElement(u.a.Item,w,r.a.createElement(f.a,{type:"primary",htmlType:"submit"}," \u8fde\u63a5 "),"\xa0",r.a.createElement(f.a,{type:"danger",onClick:function(){e.socket.close()}}," \u65ad\u5f00 "))),r.a.createElement(u.a,R,r.a.createElement(u.a.Item,{label:"\u7535\u8c03\u7a7a\u5360\u6bd4"},r.a.createElement(b.a,{value:m,min:0,max:100,onChange:function(t){e.socket.emit("speed rate",t)}})),r.a.createElement(u.a.Item,{label:"\u7535\u8c03 0 \u529f\u7387 PWM \u7a7a\u5360\u6bd4"},r.a.createElement(b.a,{value:d,min:0,max:100,onChange:function(t){e.setState({speedZeroRate:t})}})),r.a.createElement(u.a.Item,{label:"\u7535\u8c03\u8f93\u51fa\u6700\u5927\u529f\u7387 PWM \u7a7a\u5360\u6bd4"},r.a.createElement(b.a,{value:l,min:0,max:100,onChange:function(t){e.setState({speedMaxRate:t})}})),r.a.createElement(u.a.Item,{label:"\u7535\u8c03\u53cd\u5411\u8f93\u51fa\u6700\u5927\u529f\u7387 PWM \u7a7a\u5360\u6bd4"},r.a.createElement(b.a,{value:i,min:0,max:100,onChange:function(t){e.setState({speedReverseMaxRate:t})}})),r.a.createElement(u.a.Item,{label:"\u8235\u673a\u53cd\u5411"},r.a.createElement(E.a,{checked:s,onChange:function(t){e.setState({directionReverse:t})}}))),r.a.createElement(g.a,{className:"speed",percent:Math.abs(100*p),showInfo:!1,status:p>0?"normal":"exception",type:"dashboard"}),r.a.createElement("div",{className:"direction"},r.a.createElement(g.a,{percent:0,showInfo:!1,type:"dashboard",gapDegree:200}),r.a.createElement(g.a,{className:"pointer",percent:100,showInfo:!1,type:"dashboard",gapDegree:295,style:{transform:"rotate(".concat(c,"deg)")}})),r.a.createElement(h.a,{spin:o,className:"accelerator",onTouchStart:function(){return t(!0)},onTouchEnd:function(){return t(!1)}}))}}]),a}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.11cb0de5.chunk.js.map