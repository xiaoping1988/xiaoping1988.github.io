(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e42bfb6"],{"03fb":function(t,e,a){},"0876":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.previewData?a("div",[a("div",{staticClass:"head"},[t._v("\n        显示最新\n        "),a("span",{staticClass:"d-strong-count"},[t._v(t._s(t.previewData.data.length))]),t._v("\n        条数据,数据最后更新时间\n        "),a("span",{staticClass:"d-strong-count"},[t._v(t._s(t.previewData.lastDataModifiedTime))])]),a("el-table",{attrs:{data:t.previewData.data,height:"400",width:"100%"}},t._l(t.previewData.colList,function(e){return a("el-table-column",{key:e.colName,attrs:{prop:e.colName,label:e.colLabel,width:e.width},scopedSlots:t._u([{key:"header",fn:function(e){return[a("i",{staticClass:"d-icon fa",class:"fa-"+t.dataTypeObj[t.colObj[e.column.property].dataType].icon}),a("span",[t._v(t._s(e.column.label))])]}}],null,!0)})}),1),a("DLoading",{attrs:{loading:t.loading}})],1):t._e()},s=[],l=(a("ac6a"),a("c5f6"),a("8a52")),n=a("76bd"),c=(a("0b85"),{name:"DPreviewTable",props:{tbId:[String,Number]},data:function(){return{dataTypeObj:n["b"],previewData:null,colObj:{},maxColWidth:250,minColWidth:150}},methods:{preview:function(){var t=this;this.previewData||(this.loading=!1,Object(l["i"])({id:this.tbId}).then(function(e){t.previewData=e.data,t.previewData.colList.forEach(function(e){t.colObj[e.colName]=e}),t.loading=!1}).catch(this.$handleError))}},mounted:function(){this.preview()}}),o=c,r=a("2877"),d=Object(r["a"])(o,i,s,!1,null,null,null);e["a"]=d.exports},1729:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-design"},[a("div",{staticClass:"head"},[t._m(0),a("div",{staticClass:"form-btn"},[a("DSubmitCancel",{attrs:{nohr:"",size:"mini"},on:{submit:t.submit,cancel:t.cancel}})],1)]),a("div",{staticClass:"panel"},[a("div",{staticClass:"d-chart-design-left"},[a("DWorkTable",{attrs:{tbId:t.tbId}})],1),t._m(1),t._m(2)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("h2",[t._v("设计图表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-design-main"},[a("div",{staticClass:"d-chart-dim"}),a("div",{staticClass:"d-chart-index"}),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-chart-design-right"},[a("div",{staticClass:"module-title"},[t._v("\n                图表名称\n            ")]),a("div",{staticClass:"module-title"},[t._v("\n                图表类型\n            ")]),a("div",{staticClass:"module-title"},[t._v("\n                图内筛选\n            ")]),a("div",{staticClass:"module-title"},[t._v("\n                图表备注\n            ")])])}],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-work-table"},[a("div",{staticClass:"table"},[a("div",{staticClass:"module-title"},[t._v("\n            工作表\n        ")]),a("div",{staticClass:"table-name-panel"},[a("div",{staticClass:"table-name d-ellipsis",attrs:{title:t.tbInfo.tbNameCn},on:{click:t.openPreviewTable}},[t._v(t._s(t.tbInfo.tbNameCn))]),a("div",{staticClass:"exchange-table",attrs:{title:"切换工作表"},on:{click:t.openExchangeTable}},[a("i",{staticClass:"fa fa-exchange"})])])]),a("div",{staticClass:"column"},[t._m(0),a("div",{staticClass:"search"},[a("el-input",{staticClass:"d-visual-input",attrs:{size:"mini",clearable:"",placeholder:"搜索字段","suffix-icon":"el-icon-search"},model:{value:t.colKeyword,callback:function(e){t.colKeyword="string"===typeof e?e.trim():e},expression:"colKeyword"}})],1),a("ul",{staticClass:"col-list"},t._l(t.searchedColList,function(e){return a("li",{key:e.colName},[a("div",{staticClass:"col-item",attrs:{title:e.colName,draggable:"true"},on:{click:function(a){return t.toggleShowTimeFreq(e)}}},[a("div",{staticClass:"pre-angle"},[e.dataType===t.dataTypeObj.date.code?a("i",{staticClass:"fa",class:[e.showTimeFreq?"fa-angle-down":"fa-angle-right"]}):t._e()]),a("div",{staticClass:"pre-icon"},[a("i",{staticClass:"fa",class:"fa-"+t.dataTypeObj[e.dataType].icon})]),a("div",{staticClass:"col-label d-ellipsis"},[t._v("\n                        "+t._s(e.colLabel)+"\n                    ")])]),e.dataType===t.dataTypeObj.date.code?a("ul",{directives:[{name:"show",rawName:"v-show",value:e.showTimeFreq,expression:"col.showTimeFreq"}],staticClass:"time-freq-list"},t._l(t.timeFreqList,function(e,i){return a("li",{key:i,staticClass:"time-freq-item",attrs:{draggable:"true"}},[a("span",[t._v(t._s(e.name))])])}),0):t._e()])}),0)]),a("DLoading",{attrs:{loading:t.loading}}),a("el-dialog",{attrs:{visible:t.showPreviewModal,title:"预览数据",top:"30px",width:"70%"},on:{"update:visible":function(e){t.showPreviewModal=e}}},[t.showPreviewed?a("DPreviewTable",{attrs:{tbId:t.tbId}}):t._e()],1),a("el-dialog",{attrs:{visible:t.showExchangeModal,title:"切换工作表",top:"30px",width:"360px"},on:{"update:visible":function(e){t.showExchangeModal=e}}},[t.showExchanged?a("DWorkTableSelect",{on:{select:t.exchangeTable}}):t._e()],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[a("div",{staticClass:"module-title"},[t._v("\n                字段\n            ")]),a("div",{staticClass:"col-btn"},[a("i",{staticClass:"fa fa-plus"}),a("ul",{staticClass:"d-btn-list"},[a("li",[t._v("添加计算字段")])])])])}],c=(a("6762"),a("2fdb"),a("ac6a"),a("8615"),a("c5f6"),a("8a52")),o=a("76bd"),r=a("0876"),d=a("d45b"),h=a("6f7f"),u={name:"DWorkTable",components:{DPreviewTable:r["a"],DWorkTableSelect:d["a"]},props:{tbId:[String,Number]},data:function(){return{loading:!1,timeFreqList:Object.values(h["i"]),dataTypeObj:o["b"],showPreviewModal:!1,showPreviewed:!1,showExchangeModal:!1,showExchanged:!1,tbInfo:{},logicColList:[],searchedColList:[],searchedLogicColList:[],colKeyword:""}},methods:{initData:function(){this.setTbInfo(),this.setTbLogicCol()},setTbInfo:function(){var t=this;this.loading=!0,Object(c["d"])({id:this.tbId}).then(function(e){t.tbInfo=e.data,t.loading=!1,t.searchColList()}).catch(this.$handleError)},setTbLogicCol:function(){},searchColList:function(){var t=this;""===this.colKeyword?this.searchedColList=this.tbInfo.colList:this.searchedColList=this.tbInfo.colList.filter(function(e){return e.colName.includes(t.colKeyword.toLowerCase())||e.colLabel.includes(t.colKeyword)})},searchLogicColList:function(){},openPreviewTable:function(){this.showPreviewModal=!0,this.showPreviewed=!0},openExchangeTable:function(){this.showExchangeModal=!0,this.showExchanged=!0},exchangeTable:function(t){this.showExchangeModal=!1,this.tbId=t.id},toggleShowTimeFreq:function(t){t.dataType===o["b"].date.code&&(t.showTimeFreq=!t.showTimeFreq,this.$forceUpdate())}},watch:{tbId:function(){this.tbId&&this.initData()},colKeyword:function(){this.searchColList(),this.searchLogicColList()}}},b=u,f=(a("c82b"),a("2877")),v=Object(f["a"])(b,l,n,!1,null,null,null),m=v.exports,p={name:"DChartDesign",components:{DWorkTable:m},data:function(){return{tbId:""}},methods:{submit:function(){},cancel:function(){this.$goBack()}},mounted:function(){this.tbId=this.$route.query.tbId}},w=p,C=(a("e225"),Object(f["a"])(w,i,s,!1,null,null,null));e["default"]=C.exports},"42bb":function(t,e,a){"use strict";var i=a("49fe"),s=a.n(i);s.a},"49fe":function(t,e,a){},c82b:function(t,e,a){"use strict";var i=a("f338"),s=a.n(i);s.a},d45b:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"d-row"},[t._v("\n        选择工作表\n    ")]),a("el-row",{staticClass:"d-row"},[a("el-input",{attrs:{size:"mini",clearable:"",placeholder:"搜索工作表","suffix-icon":"el-icon-search"},on:{change:t.searchTable},model:{value:t.tableKeyWord,callback:function(e){t.tableKeyWord="string"===typeof e?e.trim():e},expression:"tableKeyWord"}})],1),a("el-row",{staticClass:"d-row"},[a("div",{staticClass:"d-tb-panel"},[a("ul",{staticClass:"d-tb-list"},t._l(t.searchedTableList,function(e,i){return a("li",{key:i,staticClass:"d-tb-item",on:{click:function(a){return t.selectTable(e)}}},[a("h4",{staticClass:"d-tb-title d-ellipsis",attrs:{title:e.dbName+"."+e.tbName}},[t._v(t._s(e.dbName)+"."+t._s(e.tbName))]),a("div",{staticClass:"d-tb-desc d-ellipsis",attrs:{title:e.tbNameCn}},[t._v(t._s(e.tbNameCn))])])}),0)])])],1)},s=[],l=a("8a52"),n={name:"DWorkTableSelect",data:function(){return{tableKeyWord:"",searchedTableList:[]}},methods:{searchTable:function(){var t=this;Object(l["f"])({tbName:this.tableKeyWord,pageNo:1,pageSize:15}).then(function(e){t.searchedTableList=e.data.data}).catch(this.$handleError)},selectTable:function(t){this.$emit("select",t)}},mounted:function(){this.searchTable()}},c=n,o=(a("42bb"),a("2877")),r=Object(o["a"])(c,i,s,!1,null,null,null);e["a"]=r.exports},e225:function(t,e,a){"use strict";var i=a("03fb"),s=a.n(i);s.a},f338:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1e42bfb6.a9a3292d.js.map