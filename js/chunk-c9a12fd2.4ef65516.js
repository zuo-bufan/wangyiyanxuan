(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9a12fd2"],{3213:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"topic"},[a._l(a.topicData,(function(t){return e("div",{key:t.id,staticClass:"topic_box"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.scene_pic_url,expression:"item.scene_pic_url"}],attrs:{alt:""}}),e("h3",[a._v(a._s(t.title))]),e("h4",[a._v(a._s(t.subtitle))]),e("p",[a._v(a._s(a._f("RMBFormat")(t.price_info)))])])})),e("van-pagination",{attrs:{"page-count":2,mode:"simple"},on:{change:a.ChangePage},model:{value:a.page,callback:function(t){a.page=t},expression:"page"}})],2)},n=[],c=e("fd03"),s={data:function(){return{color:"red",page:1,currentPage:1,size:10,topicData:[]}},methods:{ChangePage:function(){this.TopicListData(),window.scroll(0,0)},TopicListData:function(){var a=this;Object(c["r"])({page:this.page,size:this.size}).then((function(t){console.log(t.data),0==t.errno&&(a.topicData=t.data.data)}))}},created:function(){this.TopicListData()}},o=s,r=(e("6aa3"),e("2877")),p=Object(r["a"])(o,i,n,!1,null,"1ed3f9a8",null);t["default"]=p.exports},"6aa3":function(a,t,e){"use strict";e("a283")},a283:function(a,t,e){}}]);
//# sourceMappingURL=chunk-c9a12fd2.4ef65516.js.map