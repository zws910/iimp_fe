(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2028ad49"],{a21f:function(t,e,s){var a=s("584a"),o=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},c22d:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Filter"}},[s("b-input-group",[s("b-form-input",{attrs:{placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),t._v(" "),s("b-input-group-append",[s("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[t._v("Clear")])],1)],1)],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort"}},[s("b-input-group",[s("b-form-select",{attrs:{options:t.sortOptions},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}},[s("option",{attrs:{slot:"first"},domProps:{value:null},slot:"first"},[t._v("-- none --")])]),t._v(" "),s("b-form-select",{attrs:{slot:"append",disabled:!t.sortBy},slot:"append",model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}},[s("option",{domProps:{value:!1}},[t._v("Asc")]),t._v(" "),s("option",{domProps:{value:!0}},[t._v("Desc")])])],1)],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Sort direction"}},[s("b-input-group",[s("b-form-select",{attrs:{slot:"append"},slot:"append",model:{value:t.sortDirection,callback:function(e){t.sortDirection=e},expression:"sortDirection"}},[s("option",{attrs:{value:"asc"}},[t._v("Asc")]),t._v(" "),s("option",{attrs:{value:"desc"}},[t._v("Desc")]),t._v(" "),s("option",{attrs:{value:"last"}},[t._v("Last")])])],1)],1)],1),t._v(" "),s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Per page"}},[s("b-form-select",{attrs:{options:t.pageOptions},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}})],1)],1)],1),t._v(" "),s("b-table",{attrs:{"show-empty":"",stacked:"md",items:t.items,fields:t.fields,"current-page":t.currentPage,"per-page":t.perPage,filter:t.filter,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-direction":t.sortDirection},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},filtered:t.onFiltered},scopedSlots:t._u([{key:"name",fn:function(e){return[t._v("\n      "+t._s(e.value.first)+" "+t._s(e.value.last)+"\n    ")]}},{key:"isActive",fn:function(e){return[t._v("\n      "+t._s(e.value?"Yes :)":"No :(")+"\n    ")]}},{key:"actions",fn:function(e){return[s("b-button",{staticClass:"mr-1",attrs:{size:"sm"},on:{click:function(s){return t.info(e.item,e.index,s.target)}}},[t._v("\n        Info modal\n      ")]),t._v(" "),s("b-button",{attrs:{size:"sm"},on:{click:e.toggleDetails}},[t._v("\n        "+t._s(e.detailsShowing?"Hide":"Show")+" Details\n      ")])]}},{key:"row-details",fn:function(e){return[s("b-card",[s("ul",t._l(e.item,function(e,a){return s("li",{key:a},[t._v(t._s(a)+": "+t._s(e))])}),0)])]}}])}),t._v(" "),s("b-row",[s("b-col",{staticClass:"my-1",attrs:{md:"6"}},[s("b-pagination",{staticClass:"my-0",attrs:{"total-rows":t.totalRows,"per-page":t.perPage},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1),t._v(" "),s("b-modal",{attrs:{id:t.infoModal.id,title:t.infoModal.title,"ok-only":""},on:{hide:t.resetInfoModal}},[s("pre",[t._v(t._s(t.infoModal.content))])])],1)},o=[],n=s("f499"),i=s.n(n),r={data:function(){return{items:[{isActive:!0,age:40,name:{first:"Dickerson",last:"Macdonald"}},{isActive:!1,age:21,name:{first:"Larsen",last:"Shaw"}},{isActive:!1,age:9,name:{first:"Mini",last:"Navarro"},_rowVariant:"success"},{isActive:!1,age:89,name:{first:"Geneva",last:"Wilson"}},{isActive:!0,age:38,name:{first:"Jami",last:"Carney"}},{isActive:!1,age:27,name:{first:"Essie",last:"Dunlap"}},{isActive:!0,age:40,name:{first:"Thor",last:"Macdonald"}},{isActive:!0,age:87,name:{first:"Larsen",last:"Shaw"},_cellVariants:{age:"danger",isActive:"warning"}},{isActive:!1,age:26,name:{first:"Mitzi",last:"Navarro"}},{isActive:!1,age:22,name:{first:"Genevieve",last:"Wilson"}},{isActive:!0,age:38,name:{first:"John",last:"Carney"}},{isActive:!1,age:29,name:{first:"Dick",last:"Dunlap"}}],fields:[{key:"name",label:"Person Full name",sortable:!0,sortDirection:"desc"},{key:"age",label:"Person age",sortable:!0,class:"text-center"},{key:"isActive",label:"is Active"},{key:"actions",label:"Actions"}],totalRows:1,currentPage:1,perPage:5,pageOptions:[5,10,15],sortBy:null,sortDesc:!1,sortDirection:"asc",filter:null,infoModal:{id:"info-modal",title:"",content:""}}},computed:{sortOptions:function(){return this.fields.filter(function(t){return t.sortable}).map(function(t){return{text:t.label,value:t.key}})}},mounted:function(){this.totalRows=this.items.length},methods:{info:function(t,e,s){this.infoModal.title="Row index: ".concat(e),this.infoModal.content=i()(t,null,2),this.$root.$emit("bv::show::modal",this.infoModal.id,s)},resetInfoModal:function(){this.infoModal.title="",this.infoModal.content=""},onFiltered:function(t){this.totalRows=t.length,this.currentPage=1}}},l=r,c=s("2877"),u=Object(c["a"])(l,a,o,!1,null,null,null);e["default"]=u.exports},f499:function(t,e,s){t.exports=s("a21f")}}]);
//# sourceMappingURL=chunk-2028ad49.9e6753b5.js.map