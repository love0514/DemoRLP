(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{301:function(e,t,n){"use strict";var r,o,i,a,c,s,u,p,l=n(1);function f(e,t,n,r){n&&Object.defineProperty(e,t,{enumerable:n.enumerable,configurable:n.configurable,writable:n.writable,value:n.initializer?n.initializer.call(r):void 0})}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var m,h,b,g,v,w,k,O,P,j,G,C=(r=l.action.bound,o=l.action.bound,a=y((i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,"Url",a,this),f(this,"api_key",c,this),f(this,"api_version",s,this),f(this,"api_id",u,this),f(this,"app_version",p,this)}return function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(e,[{key:"getHeader",value:function(e,t){return void 0!==e&&void 0!==t?{"X-MGC-API-Key":this.api_key,"X-MGC-API-Version":this.api_version,"X-MGC-APP-ID":this.api_id,"X-MGC-APP-Version":this.app_version,"Content-Type":"application/x-www-form-urlencoded",Authorization:"Basic "+btoa(e+":"+t)}:{"X-MGC-API-Key":this.api_key,"X-MGC-API-Version":this.api_version,"X-MGC-APP-ID":this.api_id,"X-MGC-APP-Version":this.app_version,"Content-Type":"application/x-www-form-urlencoded"}}},{key:"bodyEncode",value:function(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}}]),e}()).prototype,"Url",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"https://rlp.woodoos.com:8080"}}),c=y(i.prototype,"api_key",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"WYnlNzBrn4VD8z5L"}}),s=y(i.prototype,"api_version",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"0.4.11"}}),u=y(i.prototype,"api_id",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"com.ogloba.gc.affinity.mgc.web"}}),p=y(i.prototype,"app_version",[l.observable],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"1"}}),y(i.prototype,"getHeader",[r],Object.getOwnPropertyDescriptor(i.prototype,"getHeader"),i.prototype),y(i.prototype,"bodyEncode",[o],Object.getOwnPropertyDescriptor(i.prototype,"bodyEncode"),i.prototype),i),x=n(91),E=n(311);function z(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function T(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){z(i,r,o,a,c,"next",e)}function c(e){z(i,r,o,a,c,"throw",e)}a(void 0)})}}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function H(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var I=(m=l.action.bound,h=l.action.bound,b=l.action.bound,g=l.action.bound,v=l.action.bound,w=l.action.bound,k=l.action.bound,O=l.action.bound,P=l.action.bound,j=l.action.bound,H((G=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.connect=new C}return function(e,t,n){t&&_(e.prototype,t),n&&_(e,n)}(e,[{key:"GetBanner",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://192.168.1.144:8080/gc-affinity-mgc-gateway/OGLOBA_TH/resources/sponsorBanner",{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"AutoRigster",value:function(){fetch("http://13.229.71.143:8080/gc-affinity-mgc-gateway/users/autoRegistration",{method:"POST",headers:this.connect.getHeader(),body:this.connect.bodyEncode({msisdn:"+886977188802"})}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})}},{key:"Test",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"Test ticket #","This is test ticket #",e.next=4,fetch("/api/v2/tickets.json",{method:"GET",headers:{Authorization:"Basic "+btoa("stch@ogloba.com:cherry2503")}}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"GetProduct",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this,e.next=3,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/products"),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){return x.a.Product=e.products,e.products}).then(function(e){}).catch(function(e){console.log(e)});case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"GetCards",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/giftCards"),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){x.a.GiftCard=e.giftCards}).catch(function(e){console.log(e)});case 2:return e.abrupt("return",!0);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"GetBounsRate",value:function(){var e=T(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/").concat(t,"/event?activateAmt=1"),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){console.log(e)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"GetHotCard",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/0000000242/categories/products?categoryId=161"),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"GetCardOTP",value:function(){var e=T(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return E.b.Start(),e.next=3,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/transactions/0000000242/otp/").concat(t),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){x.a.currentItem.otp=e.otp,E.b.Stop()}).catch(function(e){console.log(e)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"GetCardByCardNum",value:function(){var e=T(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/customers/0000000242/giftCards/").concat(t),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){console.log(e)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"GetProductByCategory",value:function(){var e=T(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:fetch("".concat(this.connect.Url,"/gc-affinity-mgc-gateway-spring5/OGLOBA_TH/products/$0000000242/categories"),{method:"GET",headers:this.connect.getHeader("0000000242","YP8ZAC4H57VI")}).then(function(e){return e.json()}).then(function(e){console.log(e)}).catch(function(e){console.log(e)});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}()).prototype,"GetBanner",[m],Object.getOwnPropertyDescriptor(G.prototype,"GetBanner"),G.prototype),H(G.prototype,"AutoRigster",[h],Object.getOwnPropertyDescriptor(G.prototype,"AutoRigster"),G.prototype),H(G.prototype,"Test",[b],Object.getOwnPropertyDescriptor(G.prototype,"Test"),G.prototype),H(G.prototype,"GetProduct",[g],Object.getOwnPropertyDescriptor(G.prototype,"GetProduct"),G.prototype),H(G.prototype,"GetCards",[v],Object.getOwnPropertyDescriptor(G.prototype,"GetCards"),G.prototype),H(G.prototype,"GetBounsRate",[w],Object.getOwnPropertyDescriptor(G.prototype,"GetBounsRate"),G.prototype),H(G.prototype,"GetHotCard",[k],Object.getOwnPropertyDescriptor(G.prototype,"GetHotCard"),G.prototype),H(G.prototype,"GetCardOTP",[O],Object.getOwnPropertyDescriptor(G.prototype,"GetCardOTP"),G.prototype),H(G.prototype,"GetCardByCardNum",[P],Object.getOwnPropertyDescriptor(G.prototype,"GetCardByCardNum"),G.prototype),H(G.prototype,"GetProductByCategory",[j],Object.getOwnPropertyDescriptor(G.prototype,"GetProductByCategory"),G.prototype),G);t.a=I},306:function(e,t,n){"use strict";var r,o,i,a,c=n(1);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var p=new(r=c.action.bound,o=c.action.bound,i=c.action.bound,u((a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&s(e.prototype,t),n&&s(e,n)}(e,[{key:"NextPage",value:function(e,t){console.log("next"),e.history.push(t)}},{key:"Pre",value:function(e){e.history.goBack()}},{key:"backto",value:function(e,t){e.history.go(t)}}]),e}()).prototype,"NextPage",[r],Object.getOwnPropertyDescriptor(a.prototype,"NextPage"),a.prototype),u(a.prototype,"Pre",[o],Object.getOwnPropertyDescriptor(a.prototype,"Pre"),a.prototype),u(a.prototype,"backto",[i],Object.getOwnPropertyDescriptor(a.prototype,"backto"),a.prototype),a);t.a=p},311:function(e,t,n){"use strict";var r,o,i,a=n(7),c=n.n(a),s=n(88),u=(n(408),n(1));function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n,r,o){var i={};return Object.keys(r).forEach(function(e){i[e]=r[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=n.slice().reverse().reduce(function(n,r){return r(e,t,n)||n},i),o&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(o):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(e,t,i),i=null),i}var f,d=new(r=u.action.bound,o=u.action.bound,l((i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return function(e,t,n){t&&p(e.prototype,t),n&&p(e,n)}(e,[{key:"Start",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"container";document.querySelector(".".concat(e)).style.pointerEvents="none",document.querySelector(".lds-spinner").style.opacity=1}},{key:"Stop",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"container";document.querySelector(".".concat(e)).style.pointerEvents="auto",document.querySelector(".lds-spinner").style.opacity=0}}]),e}()).prototype,"Start",[r],Object.getOwnPropertyDescriptor(i.prototype,"Start"),i.prototype),l(i.prototype,"Stop",[o],Object.getOwnPropertyDescriptor(i.prototype,"Stop"),i.prototype),i);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return v}),n.d(t,"b",function(){return d});var v=Object(s.inject)("store")(f=Object(s.observer)(f=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,b(t).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,c.a.Component),function(e,t,n){t&&m(e.prototype,t),n&&m(e,n)}(t,[{key:"componentDidMount",value:function(){console.log("loading"),document.querySelector(".lds-spinner").style.opacity=0}},{key:"render",value:function(){return c.a.createElement("div",{className:"lds-css ng-scope"},c.a.createElement("div",{className:"lds-spinner"},c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"}),c.a.createElement("div",{className:"Ids-spinner-item"})))}}]),t}())||f)||f},407:function(e,t,n){(e.exports=n(90)(!1)).push([e.i,"@keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.lds-css {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 100; }\n\n.lds-spinner {\n  position: relative; }\n\n.lds-spinner div {\n  left: 96px;\n  top: 48px;\n  position: absolute;\n  -webkit-animation: lds-spinner linear 0.9s infinite;\n  animation: lds-spinner linear 0.9s infinite;\n  background: #333333;\n  width: 8px;\n  height: 24px;\n  border-radius: 20%;\n  -webkit-transform-origin: 4px 52px;\n  transform-origin: 4px 52px;\n  opacity: 0; }\n\n.lds-spinner div:nth-child(1) {\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-animation-delay: -0.825s;\n  animation-delay: -0.825s; }\n\n.lds-spinner div:nth-child(2) {\n  -webkit-transform: rotate(30deg);\n  transform: rotate(30deg);\n  -webkit-animation-delay: -0.75s;\n  animation-delay: -0.75s; }\n\n.lds-spinner div:nth-child(3) {\n  -webkit-transform: rotate(60deg);\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.675s;\n  animation-delay: -0.675s; }\n\n.lds-spinner div:nth-child(4) {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.6s;\n  animation-delay: -0.6s; }\n\n.lds-spinner div:nth-child(5) {\n  -webkit-transform: rotate(120deg);\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.525s;\n  animation-delay: -0.525s; }\n\n.lds-spinner div:nth-child(6) {\n  -webkit-transform: rotate(150deg);\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.45s;\n  animation-delay: -0.45s; }\n\n.lds-spinner div:nth-child(7) {\n  -webkit-transform: rotate(180deg);\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.375s;\n  animation-delay: -0.375s; }\n\n.lds-spinner div:nth-child(8) {\n  -webkit-transform: rotate(210deg);\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.3s;\n  animation-delay: -0.3s; }\n\n.lds-spinner div:nth-child(9) {\n  -webkit-transform: rotate(240deg);\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.225s;\n  animation-delay: -0.225s; }\n\n.lds-spinner div:nth-child(10) {\n  -webkit-transform: rotate(270deg);\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.15s;\n  animation-delay: -0.15s; }\n\n.lds-spinner div:nth-child(11) {\n  -webkit-transform: rotate(300deg);\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.075s;\n  animation-delay: -0.075s; }\n\n.lds-spinner div:nth-child(12) {\n  -webkit-transform: rotate(330deg);\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n  animation-delay: 0s; }\n\n.lds-spinner {\n  width: 60px !important;\n  height: 60px !important;\n  -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);\n  position: absolute;\n  left: 50%;\n  margin-left: -30px; }\n",""])},408:function(e,t,n){var r=n(407);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(89)(r,o);r.locals&&(e.exports=r.locals)}}]);