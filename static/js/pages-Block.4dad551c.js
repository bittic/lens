(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Block"],{"51b8":function(e,t,a){var i=a("b7b8");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("4f06").default;s("71e71dd6",i,!0,{sourceMap:!1,shadowMode:!1})},7505:function(e,t,a){"use strict";var i,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"sPage"},[a("v-uni-view",{staticClass:"sHeader"},[a("div",{staticClass:"sSlogan"},[e._v(e._s(e.appName))])]),a("v-uni-view",{staticClass:"sBody"},[a("v-uni-view",{staticClass:"sContent"},[a("v-uni-view",{staticClass:"sTableBox"},[a("v-uni-view",{staticClass:"sTable"},[a("v-uni-view",{staticClass:"sTableTitle"},[e._v(e._s(e.localeText.tTableTitle)),a("v-uni-input",{staticClass:"sSearchbar",attrs:{type:"text",placeholder:e.localeText.tSearchbarPrompt,"placeholder-class":"sSearchbarPlaceholder","confirm-type":"search"}})],1),a("v-uni-view",{staticClass:"sTableHead"},e._l(e.localeText.tFieldList,function(t,i){return a("v-uni-view",{key:i,staticClass:"sTableHeadCell",class:"sCell4"+i},[e._v(e._s(t))])}),1),a("v-uni-view",{staticClass:"sTableBody"},e._l(e.blockList,function(t,i){return a("v-uni-view",{key:i,staticClass:"sTableRow"},[a("v-uni-view",{staticClass:"sTableRowCell sCell4height"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.height))]),a("span",{staticClass:"sCellText"},[e._v(e._s(t.height))])],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4timestamp"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.timestamp))]),a("span",{staticClass:"sCellText"},[e._v(e._s(e.formatDate(t.timestamp)))])],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4hash",staticStyle:{cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyCell(i,"hash")}}},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.hash))]),a("cColorText",{attrs:{colorText:t.hash}})],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4type"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.type))]),a("span",{staticClass:"sCellText"},[e._v(e._s(t.type))])],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4packerPubkey",staticStyle:{cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyCell(i,"packerPubkey")}}},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.packerPubkey))]),a("cColorText",{attrs:{colorText:t.packerPubkey}})],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4winnerPubkey",staticStyle:{cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyCell(i,"winnerPubkey")}}},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.winnerPubkey))]),a("cColorText",{attrs:{colorText:t.winnerPubkey}})],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4winnerSignature",staticStyle:{cursor:"pointer"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.copyCell(i,"winnerSignature")}}},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.winnerSignature))]),a("cColorText",{attrs:{colorText:t.winnerSignature}})],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4totalFee"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.totalFee))]),a("span",{staticClass:"sCellText"},[e._v(e._s(t.totalFee))])],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4numberAction"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.numberAction))]),a("span",{staticClass:"sCellText"},[e._v(e._s(t.numberAction))])],1),a("v-uni-view",{staticClass:"sTableRowCell sCell4message"},[a("v-uni-label",{staticClass:"sCellLabel"},[e._v(e._s(e.localeText.tFieldList.message))]),a("span",{staticClass:"sCellText"},[e._v(e._s(t.message))])],1)],1)}),1),a("v-uni-view",{staticClass:"sTableFoot"},[a("cPager",{attrs:{title:"翻页","show-edge":"true",total:e.topBlock.height+1,current:"1",pageSize:e.pageSize},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.loadBlockList.apply(void 0,arguments)}}})],1)],1)],1)],1)],1),a("v-uni-view",{staticClass:"sFooter"})],1)},l=[];a.d(t,"b",function(){return s}),a.d(t,"c",function(){return l}),a.d(t,"a",function(){return i})},"7cfb":function(e,t,a){"use strict";a.r(t);var i=a("e416"),s=a.n(i);for(var l in i)"default"!==l&&function(e){a.d(t,e,function(){return i[e]})}(l);t["default"]=s.a},"7edc":function(e,t,a){"use strict";a.r(t);var i=a("7505"),s=a("7cfb");for(var l in s)"default"!==l&&function(e){a.d(t,e,function(){return s[e]})}(l);a("fbdc");var n,o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"642a7702",null,!1,i["a"],n);t["default"]=c.exports},b7b8:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sTableBox[data-v-642a7702]{max-height:100%}.sTable[data-v-642a7702]{height:100%}.sTableBody[data-v-642a7702]{overflow-y:auto}.sCell4height[data-v-642a7702]{width:3%}.sCell4timestamp[data-v-642a7702]{width:6%}.sCell4hash[data-v-642a7702]{width:17%}.sCell4type[data-v-642a7702]{width:4%}.sCell4packerPubkey[data-v-642a7702]{width:17%}.sCell4winnerPubkey[data-v-642a7702]{width:17%}.sCell4winnerSignature[data-v-642a7702]{width:17%}.sCell4totalFee[data-v-642a7702]{width:3%}.sCell4numberAction[data-v-642a7702]{width:3%}.sCell4message[data-v-642a7702]{width:13%}',""])},e416:function(e,t,a){"use strict";(function(e){var i=a("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a("768b"));a("96cf");var l=i(a("3b8d")),n=i(a("15b8")),o={data:function(){return{i18nText:(0,n.default)({zhCN:{tPageTitle:"区块",tTableTitle:"区块链",tFieldList:{height:"高度",timestamp:"打包时间",hash:"区块哈希",type:"区块类型",packerPubkey:"打包节点公钥",winnerPubkey:"获胜用户公钥",winnerSignature:"获胜用户签名",totalFee:"总费用",numberAction:"交易量",message:"打包节点消息"},tFailedLoading:"区块加载失败，请稍后再试",tDateFormat:"yyyy-mm-dd HH:MM:SS",tCellCopied:"已拷贝",tLoadingTitle:"加载中...",tSearchbarPrompt:"搜索功能即将上线"},enUS:{tPageTitle:"Block",tTableTitle:"Blockchain",tFieldList:{height:"Height",timestamp:"Timestamp",hash:"Hash",type:"Type",packerPubkey:"Packer pubkey",winnerPubkey:"Winner pubkey",winnerSignature:"Winner Sig",totalFee:"Total Fee",numberAction:"Volume",message:"Message"},tFailedLoading:"Failed to load block list. Please try again later",tDateFormat:"yyyy-mm-dd HH:MM:SS",tCellCopied:"is copied to clipboard",tLoadingTitle:"Loading...",tSearchbarPrompt:"Search will go online soon"}}),blockList:[],topBlock:{height:0,timestamp:0},pageSize:10}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]},appName:function(){return this.$store.getters["i18n/getAppName"]}},onLoad:function(){var e=(0,l.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.uni2log.relaunch4newSession()){e.next=4;break}return e.next=3,this.loadBlockList({type:"TOP"});case 3:this._SKT.addListener("ws/Chain/addTopBlock",this.refreshTopBlock);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onShow:function(){document.title=this.appName,this._SC("i18n/setTabbar")},methods:{refreshTopBlock:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.topBlock;a&&this.blockList[0]&&a.height===this.blockList[0].height+1?(e.log("Block.refreshTopBlock: received topBlock of height ",a.height," and added to blocklist"),this.blockList.unshift(a),this.topBlock=a,this.blockList.length>this.pageSize&&this.blockList.pop()):a&&0===this.blockList.length?(this.blockList.unshift(a),this.topBlock=a,e.log("Block.refreshTopBlock: received topBlock of height ",a.height," and initialized blocklist")):a&&e.log("Block.refreshTopBlock: received topBlock of height ",a.height)},formatDate:function(e){return new Date(e).formatMe(this.localeText.tDateFormat)},copyCell:function(e,t){var a=this;uni.setClipboardData({data:this.blockList[e][t],success:function(){uni.showToast({image:"../static/Common.success.png",title:"".concat(a.localeText.tFieldList[t]," ").concat(a.localeText.tCellCopied)})}})},loadBlockList:function(){var t=(0,l.default)(regeneratorRuntime.mark(function t(a){var i,l,n,o,c,r,u,h,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=a.type,a.current,e.log("Block.loadBlockList: go to ".concat(i)),l={},n=this.blockList.length?this.blockList[0].height:0,o=this.blockList.length?this.blockList[this.blockList.length-1].height:0,e.log({upHeight:n,downHeight:o}),!("LEFT"===i&&n<this.topBlock.height)){t.next=10;break}l.height="<=".concat(n+this.pageSize),t.next=22;break;case 10:if(!("RIGHT"===i&&o>0)){t.next=14;break}l.height="<".concat(o),t.next=22;break;case 14:if("TOP"!==i&&"LEFT_END"!==i){t.next=17;break}t.next=22;break;case 17:if("ground"!==i&&"RIGHT_END"!==i){t.next=21;break}l.height="<".concat(this.pageSize),t.next=22;break;case 21:return t.abrupt("return");case 22:if(!("LEFT_END"===i&&this.blockList[0]&&new Date-new Date(this.blockList[0].timestamp)<6e4)){t.next=25;break}return uni.showToast({image:"../static/Common.info.png",title:"已是最新区块"}),t.abrupt("return");case 25:return uni.showLoading({title:this.localeText.tLoadingTitle}),t.next=28,this.uni2log.request({url:"api/Block/getBlockList",data:{Block:l,config:{order:"height desc",limit:this.pageSize}}});case 28:c=t.sent,r=(0,s.default)(c,2),r[0],u=r[1],u=void 0===u?{}:u,h=u.data,d=u.statusCode,u.header,uni.hideLoading(),200===d?(("TOP"===i||"LEFT_END"===i)&&h&&h[0]&&(this.topBlock=h[0]),this.blockList=h):uni.showToast({image:"../static/Common.fail.png",title:this.localeText.tFailedLoading});case 36:case"end":return t.stop()}},t,this)}));function a(e){return t.apply(this,arguments)}return a}()}};t.default=o}).call(this,a("5a52")["default"])},fbdc:function(e,t,a){"use strict";var i=a("51b8"),s=a.n(i);s.a}}]);