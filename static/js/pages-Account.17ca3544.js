(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Account"],{"0d4b":function(t,e,s){var a=s("33fd");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=s("4f06").default;i("400e1eb0",a,!0,{sourceMap:!1,shadowMode:!1})},"2c04":function(t,e,s){"use strict";s.r(e);var a=s("877d"),i=s("b8af");for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);s("f364");var l=s("f0c5"),o=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,"44515916",null);e["default"]=o.exports},3147:function(t,e,s){"use strict";(function(t){var a=s("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(s("15b8")),n={data:function(){return{i18nText:(0,i.default)({zhCN:{tPageTitle:"",tFieldList:{hash:"哈希",type:"类型",oponent:"账号",direction:"方向",timestamp:"时间",amount:"金额",fee:"费用",story:"备注"},tAddress:"我的账号",tBalance:"我的财富",tTableTitle:"我的交易",tAddressCopied:"我的账号已拷贝到剪贴板",tCellCopied:"已拷贝到剪贴板",tEmptyAddress:"我的账号为空",tSwitchPrompt:"真的要退出本账号？",tSwitchConfirm:"退出",tSwitchCancel:"取消"},enUS:{tPageTitle:"",tFieldList:{hash:"Hash",type:"Type",oponent:"Oponent",direction:"Direction",timestamp:"Time",amount:"Amount",fee:"Fee",story:"Notes"},tAddress:"My Address",tBalance:"My Balance",tTableTitle:"My Actions",tAddressCopied:"My address is copied to clipboard successfully",tCellCopied:"is copied to clipboard",tEmptyAddress:"My address is empty",tSwitchPrompt:"Really logout this account?",tSwitchConfirm:"Logout",tSwitchCancel:"Cancel"}}),ownerBalance:"88",actionList:[{hash:"0x2bc4622e516687e06a4f5e009b9bdb1a5c2b949845aed378cac3d524f403046b",type:"挖矿收益",oponent:"0xF17DE75D6AC236C5A40AeE6c6ccC54113d6B3Adb",direction:"收到",timestamp:"timestamp",amount:"8430.34",fee:"8.5",story:"士官长"},{hash:"0x7566a09151e5da1186c0a5ccd1f4aa96f2edc321fc5c35e7f669fd34ed14603c",type:"个人转账",oponent:"0x722b72e3af48f64e55a6f0ad748b40f79397bfbd",direction:"转出",timestamp:"timestamp",amount:"589.3",fee:"0.00007",story:"光环之战"},{hash:"0x12c0887781ee3d25297c2675f04efb6c27808ba1b4c9ea3cabfb2cc298f3d0dd",type:"秋风之墩",oponent:"0x118d3bfe23514f837439931346765068d96bdcf0",direction:"转出",timestamp:"timest",amount:"1003045",fee:"0",story:"小猫咪"}]}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]}},onLoad:function(){this.uni2log.relaunch4newSession()},onShow:function(){this._SC("i18n/setTabbar")},methods:{copyAddress:function(){var t=this;this._SS.ownerAddress?uni.setClipboardData({data:this._SS.ownerAddress,success:function(){uni.showToast({title:t.localeText.tAddressCopied})}}):uni.showToast({title:this.localeText.tEmptyAddress,image:"../static/Common.fail.png"})},changePage:function(e){var s=e.type,a=e.current;t.log("go to ".concat(s," of ").concat(a))},copyCell:function(t,e){var s=this;uni.setClipboardData({data:this.actionList[t][e],success:function(){uni.showToast({image:"../static/Common.success.png",title:"".concat(s.localeText.tFieldList[e]," ").concat(s.localeText.tCellCopied)})}})},changeAddress:function(){var t=this;uni.showModal({title:this.localeText.tSwitchPrompt,confirmText:this.localeText.tSwitchConfirm,cancelText:this.localeText.tSwitchCancel,success:function(e){var s=e.confirm;e.cancel;s&&(uni.removeStorageSync("ownerAddress"),t._SS.ownerAddress=void 0,uni.reLaunch({url:"IdentUser"}))}})}}};e.default=n}).call(this,s("5a52")["default"])},"33fd":function(t,e,s){e=t.exports=s("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sAddress[data-v-44515916]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;flex-flow:row nowrap;color:#fff;font-family:Courier New;cursor:pointer\n\n}@media screen and (min-width:751px){.sAddress[data-v-44515916]{font-size:18px}}.sAddress .sText[data-v-44515916]{padding:4px 0}.sCell4hash[data-v-44515916]{width:25%}.sCell4oponent[data-v-44515916]{width:20%}.sCell4type[data-v-44515916]{width:5%}.sCell4direction[data-v-44515916]{width:5%}.sCell4timestamp[data-v-44515916]{width:10%}.sCell4amount[data-v-44515916]{width:10%}.sCell4fee[data-v-44515916]{width:5%}.sCell4story[data-v-44515916]{width:20%}',""])},"877d":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"sPage"},[s("v-uni-view",{staticClass:"sHeader"},[s("div",{staticClass:"sSlogan"},[t._v("TIC Navigator")])]),s("v-uni-view",{staticClass:"sBody"},[s("v-uni-view",{staticClass:"sContent"},[s("v-uni-view",{staticClass:"sCardGroup"},[s("v-uni-view",{staticClass:"sCardBox"},[s("v-uni-view",{staticClass:"sCard"},[s("v-uni-view",{staticClass:"sCardTitle"},[s("span",[t._v(t._s(t.localeText.tAddress))]),s("v-uni-view",{staticClass:"sActGroup"},[s("v-uni-view",{staticClass:"sActButton",staticStyle:{backgroundImage:"url(../static/Common.exit.png)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeAddress.apply(void 0,arguments)}}},[t._v("退出")])],1)],1),s("v-uni-view",{staticClass:"sCardContent"},[s("v-uni-view",{staticClass:"sAddress",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyAddress.apply(void 0,arguments)}}},t._l(t.uni2log.address2colorB64u(t._SS.ownerAddress),function(e,a){return s("span",{key:a,staticClass:"sText",style:{background:"#"+t._TIC.b64u2hex(e)}},[t._v(t._s(e))])}),0)],1)],1)],1),s("v-uni-view",{staticClass:"sCardBox"},[s("v-uni-view",{staticClass:"sCard"},[s("v-uni-view",{staticClass:"sCardTitle"},[s("span",[t._v(t._s(t.localeText.tBalance))]),s("v-uni-view",{staticClass:"sActButton",staticStyle:{backgroundImage:"url(../static/Common.transfer.png)"}},[s("v-uni-navigator",{attrs:{url:"AccountTransfer"}},[t._v("转账")])],1)],1),s("v-uni-view",{staticClass:"sCardContent"},[t._v(t._s(t.ownerBalance))])],1)],1)],1),s("v-uni-view",{staticClass:"sTableBox"},[s("v-uni-view",{staticClass:"sTable"},[s("v-uni-view",{staticClass:"sTableTitle"},[t._v(t._s(t.localeText.tTableTitle)),s("v-uni-input",{staticClass:"sSearchbar",attrs:{type:"text",placeholder:"输入JSON格式的查询条件","placeholder-class":"sSearchbarPlaceholder","confirm-type":"search"}})],1),s("v-uni-view",{staticClass:"sTableHead"},t._l(t.localeText.tFieldList,function(e,a){return s("v-uni-view",{key:a,staticClass:"sTableHeadCell",class:"sCell4"+a},[t._v(t._s(e))])}),1),s("v-uni-view",{staticClass:"sTableBody"},t._l(t.actionList,function(e,a){return s("v-uni-view",{key:e.hash,staticClass:"sTableRow"},[s("v-uni-view",{staticClass:"sTableRowCell sCell4hash sCell4hex",staticStyle:{cursor:"pointer"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyCell(a,"hash")}}},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.hash))]),t._l(t.uni2log.hex2color(t.uni2log.shrinkHex(e.hash)),function(e,a){return s("span",{key:a,staticClass:"sText",style:{background:"#"+e}},[t._v(t._s(e))])})],2),s("v-uni-view",{staticClass:"sTableRowCell sCell4type"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.type))]),s("span",{staticClass:"sText"},[t._v(t._s(e.type))])],1),s("v-uni-view",{staticClass:"sTableRowCell sCell4oponent sCell4hex",staticStyle:{cursor:"pointer"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyCell(a,"oponent")}}},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.oponent))]),t._l(t.uni2log.hex2color(e.oponent),function(e,a){return s("span",{key:a,staticClass:"sText",style:{background:"#"+e}},[t._v(t._s(e))])})],2),s("v-uni-view",{staticClass:"sTableRowCell sCell4direction"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.direction))]),s("span",{staticClass:"sText"},[t._v(t._s(e.direction))])],1),s("v-uni-view",{staticClass:"sTableRowCell sCell4timestamp"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.timestamp))]),s("span",{staticClass:"sText"},[t._v(t._s(e.timestamp))])],1),s("v-uni-view",{staticClass:"sTableRowCell sCell4amount"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.amount))]),s("span",{staticClass:"sText"},[t._v(t._s(e.amount))])],1),s("v-uni-view",{staticClass:"sTableRowCell sCell4fee"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.fee))]),s("span",{staticClass:"sText"},[t._v(t._s(e.fee))])],1),s("v-uni-view",{staticClass:"sTableRowCell sCell4story"},[s("v-uni-label",{staticClass:"sFieldLabel"},[t._v(t._s(t.localeText.tFieldList.story))]),s("span",{staticClass:"sText"},[t._v(t._s(e.story))])],1)],1)}),1),s("v-uni-view",{staticClass:"sTableFoot"},[s("uni-pagination",{attrs:{title:"翻页","show-icon":"true",total:"55",current:"2",pageSize:"10"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.changePage.apply(void 0,arguments)}}})],1)],1)],1)],1)],1)],1)},i=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return i})},b8af:function(t,e,s){"use strict";s.r(e);var a=s("3147"),i=s.n(a);for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);e["default"]=i.a},f364:function(t,e,s){"use strict";var a=s("0d4b"),i=s.n(a);i.a}}]);