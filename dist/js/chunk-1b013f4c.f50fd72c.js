(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b013f4c"],{"036b":function(t,e,r){},2261:function(t,e,r){"use strict";r("036b")},"32a7":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-row",[r("van-col",{attrs:{span:"8"}},[r("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v("30天无忧退货 ")],1),r("van-col",{attrs:{span:"8"}},[r("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v("48小时快速退货 ")],1),r("van-col",{attrs:{span:"8"}},[r("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v("满88元免邮费 ")],1)],1)],1)},o=[],i={data:function(){return{}}},a=i,s=(r("63c7"),r("2877")),c=Object(s["a"])(a,n,o,!1,null,"1467dfc8",null);e["a"]=c.exports},"63c7":function(t,e,r){"use strict";r("cfd7")},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(T){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=C(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function y(){}function m(){}var w={};w[i]=function(){return this};var _=Object.getPrototypeOf,b=_&&_(_(G([])));b&&b!==r&&n.call(b,i)&&(w=b);var x=m.prototype=g.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,s){var c=l(t[o],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,s)}))}s(c.arg)}var o;function i(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function C(t,e,r){var n=f;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}r.method=o,r.arg=i;while(1){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?p:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:N}}function N(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,y.displayName=c(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),c(x,s,"Generator"),x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},"9f52":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"box"},[r("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"darkred"}},t._l(t.gallery,(function(t){return r("van-swipe-item",{key:t.id},[r("img",{staticStyle:{display:"block"},attrs:{src:t.img_url,width:"100%",alt:""}})])})),1),r("Tips"),r("div",{staticClass:"goods_info"},[r("h3",[t._v(t._s(t.info.name))]),r("h4",[t._v(t._s(t.info.goods_brief))]),r("p",[t._v(t._s(t._f("RMBFormat")(t.info.retail_price)))])]),r("van-cell",{attrs:{title:"展示弹出框","is-link":""},on:{click:t.showPopup}}),r("div",{staticClass:"good_parmas"},[r("h2",[t._v("商品参数")]),r("ul",t._l(t.attribute,(function(e,n){return r("li",{key:n},[r("span",[t._v(t._s(e.name))]),r("p",[t._v(t._s(e.value))])])})),0)]),r("div",{staticClass:"goods_desc",domProps:{innerHTML:t._s(t.info.goods_desc)}}),t._m(0),r("div",{staticClass:"issue"},[r("ul",t._l(t.issue,(function(e){return r("li",{key:e.id},[r("h3",[t._v(t._s(e.question))]),r("p",[t._v(t._s(e.answer))])])})),0)]),t._m(1),r("div",{staticClass:"DetailsProductList"},[r("ProductList",{attrs:{newGoodsList:t.newGoodsList}})],1),r("van-popup",{style:{height:"35%"},attrs:{position:"bottom"},model:{value:t.Popupshow,callback:function(e){t.Popupshow=e},expression:"Popupshow"}},[r("div",{staticClass:"sku"},[r("div",{staticClass:"top"},[r("div",{staticClass:"top_l"},[r("img",{attrs:{src:t.info.list_pic_url,alt:""}})]),r("div",{staticClass:"top_r"},[r("h3",[t._v("价格："+t._s(t._f("RMBFormat")(t.info.retail_price)))]),r("h4",[t._v("库存："+t._s(t.info.goods_number))])])]),r("div",{staticClass:"bottom"},[r("p",[t._v("数量:")]),r("van-stepper",{attrs:{min:"1",max:t.info.goods_number,integer:""},model:{value:t.stepperNum,callback:function(e){t.stepperNum=e},expression:"stepperNum"}})],1)])]),r("van-goods-action",[r("van-goods-action-icon",{attrs:{icon:t.isCollected?"star":"star-o",text:t.isCollected?"已收藏":"未收藏",color:t.isCollected?"#f01526":"#666"},on:{click:t.hdClickCollect}}),r("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.token?t.goodsCount:0},on:{click:t.gotoCart}}),r("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addToCart}}),r("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("div",{staticClass:"line"}),r("div",{staticClass:"text"},[t._v("常见问题")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("div",{staticClass:"line"}),r("div",{staticClass:"text"},[t._v("相关产品")])])}];r("d3b7");function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(u){return void r(u)}s.done?e(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))}}r("96cf");var s=r("32a7"),c=r("1c14"),u=r("fd03"),l={components:{Tips:s["a"],ProductList:c["a"]},data:function(){return{token:localStorage.getItem("token"),cartTotal:{},goodsCount:0,stepperNum:1,Popupshow:!1,gallery:[],info:{},attribute:[],issue:[],productlist:[],newGoodsList:[],ProductList:[],isCollected:!1}},methods:{showPopup:function(){this.Popupshow=!0},hdClickCollect:function(){var t=this,e=localStorage.getItem("token");if(!e)return this.$toast.loading({message:"请先登录",forbidClick:!0}),void setTimeout((function(){t.$router.push("/user")}),500);this.isCollected=!this.isCollected},gotoCart:function(){},addToCart:function(){}},created:function(){var t=this;return a(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.$route.params.id),e.next=3,Object(u["i"])({id:t.$route.params.id}).then((function(e){if(console.log(e.data),0==e.errno){var r=e.data,n=r.gallery,o=r.info,i=r.attribute,a=r.issue,s=r.productList;t.gallery=n,t.info=o,t.attribute=i,t.issue=a,t.ProductList=s}}));case 3:Object(u["g"])({id:t.$route.params.id}).then((function(e){if(0==e.errno){var r=e.data.goodsList;t.newGoodsList=r}}));case 4:case"end":return e.stop()}}),e)})))()}},f=l,h=(r("2261"),r("2877")),d=Object(h["a"])(f,n,o,!1,null,"53ea7c8b",null);e["default"]=d.exports},cfd7:function(t,e,r){}}]);
//# sourceMappingURL=chunk-1b013f4c.f50fd72c.js.map