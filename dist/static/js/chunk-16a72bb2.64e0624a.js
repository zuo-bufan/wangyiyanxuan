(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16a72bb2"],{"3e9b":function(t,e,n){},"92d6":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"channel"},[n("van-tabs",{on:{click:t.changeTab},model:{value:t.currentCategory.id,callback:function(e){t.$set(t.currentCategory,"id",e)},expression:"currentCategory.id"}},[t._l(t.brotherCategory,(function(e){return n("van-tab",{key:e.id,attrs:{title:e.name,name:e.id}},[n("h2",[t._v(t._s(e.name))]),n("h3",[t._v(t._s(e.front_desc))])])})),n("ProductList",{attrs:{newGoodsList:t.newGoodsList}})],2)],1)},r=[],a=n("fd03"),s=n("1c14"),c={name:"Channel",components:{ProductList:s["a"]},data:function(){return{brotherCategory:[],currentCategory:{},newGoodsList:[],name:""}},methods:{changeTab:function(t){var e=this;Object(a["j"])({categoryId:t,page:1,size:100}).then((function(t){console.log(t.data),0==t.errno&&(e.newGoodsList=t.data.goodsList)})),this.$router.push("/channel?id="+t)}},created:function(){var t=this;Object(a["j"])({categoryId:this.$route.query.id,page:1,size:100}).then((function(e){console.log(e.data),0===e.errno&&(t.newGoodsList=e.data.goodsList)})),Object(a["h"])({id:this.$route.query.id}).then((function(e){if(0===e.errno){var n=e.data,o=n.brotherCategory,r=n.currentCategory;t.brotherCategory=o,t.currentCategory=r}}))}},i=c,d=(n("f0da"),n("2877")),u=Object(d["a"])(i,o,r,!1,null,"33c72737",null);e["default"]=u.exports},f0da:function(t,e,n){"use strict";n("3e9b")}}]);
//# sourceMappingURL=chunk-16a72bb2.64e0624a.js.map