(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18a464a0"],{"03b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),t._v(" "),a("b-form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("b-card",{attrs:{"no-body":""}},[a("b-card-body",{staticClass:"pb-2"},[a("b-form-group",{attrs:{label:"标题"}},[a("b-input",{attrs:{required:""},model:{value:t.articleData.title,callback:function(e){t.$set(t.articleData,"title",e)},expression:"articleData.title"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"类别"}},[a("b-select",{staticClass:"flex-grow-1 col-3",attrs:{options:t.category},model:{value:t.articleData.category,callback:function(e){t.$set(t.articleData,"category",e)},expression:"articleData.category"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"内容"}},[a("b-textarea",{attrs:{rows:3,required:""},model:{value:t.articleData.content,callback:function(e){t.$set(t.articleData,"content",e)},expression:"articleData.content"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"标的"}},[a("b-input-group",[a("b-form-input",{staticClass:"flex-grow-1 col-3",attrs:{list:"my-list-id"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),t._v(" "),a("datalist",{attrs:{id:"my-list-id"}},t._l(t.shares,function(e){return a("option",{key:e.full_code},[t._v(t._s(e.full_code)+", "+t._s(e.stock_name))])}),0),t._v(" "),a("span",{staticClass:"input-group-append"},[a("b-btn",{attrs:{variant:"primary"},on:{click:t.onConfirm}},[t._v("确认")])],1)],1),t._v(" "),a("p",{staticClass:"mt-3"},[t._v(t._s(t.targets))])],1)],1)],1),t._v(" "),a("div",{staticClass:"text-right mt-3"},[a("b-btn",{attrs:{type:"submit",variant:"primary"}},[t._v("提交")]),t._v(" \n      ")],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",{staticClass:"font-weight-bold py-3 mb-4"},[t._v("\n    资讯发布\n    "),a("span",{staticClass:"text-muted"})])}],o=(a("6b54"),a("7f7f"),a("1c46"),{name:"pages-article-edit",metaInfo:{title:"资讯发布"},components:{},data:function(){return{articleData:{title:"",category:8,content:""},cats:[],category:{8:"default"},shares:[],selected:null,targets:""}},created:function(){},destroyed:function(){},mounted:function(){this.getInfoCats(),this.getStockCode()},methods:{getInfoCats:function(){var t=this,e=this.$host+"/info-cats/";this.$ajax.get(e).then(function(e){t.cats=e.data;for(var a=0;a<e.data.length;a++)t.category[e.data[a].id]=e.data[a].name})},onSubmit:function(){var t=this.$host+"/infos/",e=Math.round((new Date).getTime()/1e3).toString(),a="admin";this.$ajax.post(t,{title:this.articleData.title,content:this.articleData.content,category:this.articleData.category,targets:this.targets,pub_timestamp:e,author:a},{responseType:"json"}).then(function(t){alert("发布成功"),window.location.reload()}).catch(function(t){400==t.response.status?console.log(t.response.data):console.log(t.response.status)})},getStockCode:function(){var t=this,e=this.$host+"/stock-code/";this.$ajax.get(e).then(function(e){t.shares=e.data})},onConfirm:function(){var t=this.selected;if(t){var e=t.slice(0,9);this.targets+=e,this.targets+=","}}}}),c=o,i=(a("60bc"),a("d152"),a("59ec"),a("1c91"),a("94b4"),a("2877")),r=Object(i["a"])(c,n,s,!1,null,null,null);e["default"]=r.exports},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),s=a("0bfb"),o=a("9e1e"),c="toString",i=/./[c],r=function(t){a("2aba")(RegExp.prototype,c,t,!0)};a("79e5")(function(){return"/a/b"!=i.call({source:"a",flags:"b"})})?r(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):i.name!=c&&r(function(){return i.call(this)})},"7f7f":function(t,e,a){var n=a("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,c="name";c in s||a("9e1e")&&n(s,c,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"94b4":function(t,e,a){"use strict";var n=a("efef"),s=a.n(n);s.a},efef:function(t,e,a){}}]);
//# sourceMappingURL=chunk-18a464a0.0e95ab6c.js.map