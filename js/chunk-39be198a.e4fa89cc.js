(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39be198a"],{"0876":function(t,a,e){"use strict";var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.previewData?e("div",[e("div",{staticClass:"head"},[t._v("\n        显示最新\n        "),e("span",{staticClass:"d-strong-count"},[t._v(t._s(t.previewData.data.length))]),t._v("\n        条数据,数据最后更新时间\n        "),e("span",{staticClass:"d-strong-count"},[t._v(t._s(t.previewData.lastDataModifiedTime))])]),e("el-table",{attrs:{data:t.previewData.data,height:"400",width:"100%"}},t._l(t.previewData.colList,function(a){return e("el-table-column",{key:a.colName,attrs:{prop:a.colName,label:a.colLabel,width:a.width},scopedSlots:t._u([{key:"header",fn:function(a){return[e("i",{staticClass:"d-icon fa",class:"fa-"+t.dataTypeObj[t.colObj[a.column.property].dataType].icon}),e("span",[t._v(t._s(a.column.label))])]}}],null,!0)})}),1),e("DLoading",{attrs:{loading:t.loading}})],1):t._e()},i=[],s=(e("ac6a"),e("c5f6"),e("8a52")),n=e("76bd"),r=(e("0b85"),{name:"DPreviewTable",props:{tbId:[String,Number]},data:function(){return{dataTypeObj:n["b"],previewData:null,colObj:{},maxColWidth:250,minColWidth:150}},methods:{preview:function(){var t=this;this.previewData||(this.loading=!1,Object(s["i"])({id:this.tbId}).then(function(a){t.previewData=a.data,t.previewData.colList.forEach(function(a){t.colObj[a.colName]=a}),t.loading=!1}).catch(this.$handleError))}},mounted:function(){this.preview()}}),o=r,c=e("2877"),d=Object(c["a"])(o,l,i,!1,null,null,null);a["a"]=d.exports},9068:function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("DPageContent",[e("el-row",{staticClass:"d-row"},[e("el-card",{attrs:{shadow:"never"}},[e("h1",{staticStyle:{"margin-bottom":"10px"}},[t._v("\n                "+t._s(t.tb.dbName)+"."+t._s(t.tb.tbName)+"\n            ")]),t.tb.hasAuth?t._e():e("el-button",{attrs:{type:"primary",plain:"",size:"small"}},[t._v("申请权限")])],1)],1),e("el-row",[e("el-col",{staticClass:"d-col",attrs:{span:6}},[e("el-card",{attrs:{header:"基础信息",shadow:"never"}},[e("el-row",{staticClass:"d-row"},[e("el-col",{staticClass:"d-detail-count",staticStyle:{"border-right":"0px"},attrs:{span:12}},[t._v("\n                        读取\n                        "),e("span",[t._v(t._s(t.tb.readCount))]),t._v("\n                        次\n                    ")])],1),e("DDetail",{attrs:{data:t.tb,columns:t.detailColumns,col:1}}),e("div",{staticClass:"d-desclist-index"},[e("div",{staticClass:"d-desclist-index-term"},[t._v("标签")]),e("div",{staticClass:"d-desclist-index-detail d-tag-group"},[t._l(t.tb.tagList,function(a){return e("el-tag",{key:a.id,attrs:{size:"mini",effect:"plain",closable:t.tb.hasAuth}},[t._v(t._s(a.name))])}),t.tb.hasAuth?e("i",{staticClass:"el-icon-circle-plus-outline d-icon",attrs:{title:"新增标签"}}):t._e()],2)])],1)],1),e("el-col",{staticClass:"d-col",attrs:{span:18}},[e("el-card",{attrs:{shadow:"never"}},[e("el-tabs",{staticStyle:{width:"100%"},attrs:{type:"card"},on:{"tab-click":t.clickTab},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"字段信息",name:"column"}},[e("el-table",{attrs:{data:t.tb.colList}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e("el-table-column",{attrs:{prop:"colName",label:"字段名",width:"150"}}),e("el-table-column",{attrs:{prop:"colLabel",label:"中文名",width:"180"}}),e("el-table-column",{attrs:{prop:"dataType",label:"数据类型",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("i",{staticClass:"d-icon fa",class:"fa-"+t.dataTypeObj[a.row.dataType].icon}),e("span",[t._v(t._s(t.dataTypeObj[a.row.dataType].name))])]}}])}),e("el-table-column",{attrs:{prop:"originalDataType",label:"原始类型",width:"120"}}),e("el-table-column",{attrs:{prop:"colComment",label:"描述"}})],1)],1),e("el-tab-pane",{attrs:{label:"预览数据",name:"preivewData"}},[t.tb.hasAuth?t.showPreview?e("DPreviewTable",{attrs:{tbId:t.tbId}}):t._e():e("div",{staticClass:"d-no-data-tip"},[t._v("\n                            暂无权限查看数据,可点击左上角按钮申请权限\n                        ")])],1),e("el-tab-pane",{attrs:{label:"应用追溯",name:"app"}},[e("el-table",{attrs:{data:t.appData}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e("el-table-column",{attrs:{prop:"appName",label:"应用系统",width:"200"}}),e("el-table-column",{attrs:{prop:"appCarrier",label:"应用载体"}})],1)],1)],1)],1)],1)],1)],1)},i=[],s=e("8a52"),n=e("76bd"),r=e("0876"),o={name:"DTbDetail",components:{DPreviewTable:r["a"]},data:function(){return{tbId:this.$route.params.id,tb:{},dataTypeObj:n["b"],detailColumns:[{key:"tbName",title:"名称"},{key:"dbName",title:"数据库归属"},{key:"dsName",title:"数据源归属"},{key:"lastDataModifiedTime",title:"最后数据更新时间"},{key:"remark",title:"描述"},{key:"queryEngineTypeList",title:"支持引擎类型"}],activeTab:"column",showPreview:!1,appData:[]}},methods:{setTb:function(){var t=this;Object(s["d"])({id:this.tbId}).then(function(a){t.tb=a.data}).catch(this.$handleError)},clickTab:function(t,a){"preivewData"===t.paneName&&(this.showPreview=!0)},setAppData:function(){var t=this;Object(s["g"])({id:this.tbId}).then(function(a){t.appData=a.data}).catch(this.$handleError)}},mounted:function(){this.setTb(),this.setAppData()}},c=o,d=e("2877"),b=Object(d["a"])(c,l,i,!1,null,null,null);a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-39be198a.e4fa89cc.js.map