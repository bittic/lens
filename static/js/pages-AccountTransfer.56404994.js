(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-AccountTransfer"],{"0ef5":function(e,t,n){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}n("3410"),n("131a"),e.exports=r},1003:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}e.exports=r},"12c0":function(e,t,n){n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("5757");function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e.exports=i},2186:function(e,t,n){var r=n("4859");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("776365b9",r,!0,{sourceMap:!1,shadowMode:!1})},"25ee":function(e,t,n){n("96cf");var r=n("9705"),a=n("dc10"),i=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};i.__proto__=a;var o=i.prototype;o.__proto__=a.prototype,o.validateMe=function(){return this.fee>=wo.Config.MIN_FEE_ActionStore||0},o.executableMe=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Store.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.fee&&!0);case 4:case"end":return e.stop()}}),e,this)}))),o.executeMe=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getOne({Account:{address:this.actorAddress}});case 2:if(t=e.sent,!(t&&t.balance>=this.fee)){e.next=7;break}return e.next=6,t.setMe({Account:{balance:t.balance-this.fee},cond:{address:t.address}});case 6:return e.abrupt("return",this);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,this)}))),i.api={}},"2bb9":function(e,t,n){n("4e82"),n("a9e3"),n("9129"),n("b64b");var r=n("7a12"),a=n("df34"),i=n("1003");e.exports=function(){"use strict";function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(this,e),this._class=this.constructor.name,this.setProp(t),this}return i(e,[{key:"setProp",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in this.constructor.schema.columns)if(e.hasOwnProperty(t)&&"undefined"!==typeof e[t]&&!Number.isNaN(e[t])&&e[t]!==1/0)this[t]=e[t];else if("undefined"!==typeof this.constructor.schema.columns[t].default){var n=this.constructor.schema.columns[t].default;this[t]="object"===typeof n?JSON.parse(JSON.stringify(n)):n}else this.constructor.schema.columns[t].nullable&&(this[t]=null);return this}},{key:"getProp",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={},a=r(Object.keys(this.constructor.schema.columns).sort());try{for(a.s();!(e=a.n()).done;){var i=e.value;"undefined"===typeof t[i]||Number.isNaN(t[i])||t[i]===1/0?"undefined"===typeof this[i]||Number.isNaN(this[i])||this[i]===1/0||(n[i]=this[i]):n[i]=t[i]}}catch(o){a.e(o)}finally{a.f()}return n}},{key:"getJson",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.exclude,a=void 0===n?[]:n,i=this.getProp(),o=r(a);try{for(o.s();!(e=o.n()).done;){var s=e.value;delete i[s]}}catch(u){o.e(u)}finally{o.f()}var c=JSON.stringify(i);return c}}]),e}()},"343c":function(e,t,n){n("4ae1");var r=n("0ef5"),a=n("8d1f"),i=n("5212");function o(e){return function(){var t,n=r(e);if(a()){var o=r(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)}}e.exports=o},"3c5a":function(e,t,n){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}n("131a"),e.exports=r},4859:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sBody[data-v-8fd32a78]{padding-left:4%;padding-right:4%\n\n}@media screen and (min-width:751px){.sBody[data-v-8fd32a78]{width:720px}}.sBody .sViewField[data-v-8fd32a78]{background:#555;color:#fff;margin-bottom:%?40?%;padding:%?10?%;font-size:large\n\n}@media screen and (min-width:751px){.sBody .sViewField[data-v-8fd32a78]{padding:10px;margin-bottom:30px}}.sBody .sInputField[data-v-8fd32a78]{padding:%?9?%;color:#333;background:#eee;margin-bottom:%?40?%;box-sizing:border-box\n\n}@media screen and (min-width:751px){.sBody .sInputField[data-v-8fd32a78]{padding:9px;margin-bottom:40px}}.sBody .sLabel[data-v-8fd32a78]{color:#fff;font-size:small;padding-bottom:6px}.sBody .sSecwordTextarea[data-v-8fd32a78]{width:100%}.sBody .sSecwordTextarea uni-textarea[data-v-8fd32a78], .sBody .sSecwordTextarea .uni-textarea-compute[data-v-8fd32a78]{word-break:normal}',""]),e.exports=t},5212:function(e,t,n){var r=n("62f5"),a=n("d43c");function i(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}e.exports=i},5757:function(e,t){function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}e.exports=n},"5dad":function(e,t,n){n("a9e3"),n("96cf");var r=n("9705"),a=n("df34"),i=n("343c"),o=n("8b83"),s=n("dc10"),c=n("4a21"),u=e.exports=function(e){"use strict";o(n,e);var t=i(n);function n(){return a(this,n),t.apply(this,arguments)}return n}(s),l=u.prototype;l.validateMe=function(){return this.actorPubkey&&this.toAddress&&c.pubkey2address(this.actorPubkey)!==this.toAddress&&this.amount&&this.amount>0&&this.fee>=0},l.executableMe=r(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.amount+this.fee);case 4:case"end":return e.stop()}}),e,this)}))),l.executeMe=r(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.findOne({address:this.actorAddress});case 2:if(t=e.sent,!(t&&"multisig"!==t.type&&this.toAddress!=this.actorAddress&&t.balance>=this.amount+this.fee)){e.next=17;break}return t.balance=t.balance-Number(this.amount)-Number(this.fee),t.countAction++,e.next=8,t.save();case 8:return e.next=10,wo.Account.findOne({address:this.toAddress});case 10:return n=e.sent,e.next=13,wo.Account.save({address:this.toAddress,balance:n?n.balance+Number(this.amount):Number(this.amount),countAction:n?n.countAction+1:1});case 13:return e.next=15,to.getRepository("Action").save(this);case 15:return mylog.info("Excecuted action="+JSON.stringify(this)),e.abrupt("return",this);case 17:return e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,this)})))},"69f3b":function(e,t,n){"use strict";n.r(t);var r=n("b623"),a=n("f03b");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("6bd4");var o,s=n("f0c5"),c=Object(s["a"])(a["default"],r["b"],r["c"],!1,null,"8fd32a78",null,!1,r["a"],o);t["default"]=c.exports},"6bd4":function(e,t,n){"use strict";var r=n("2186"),a=n.n(r);a.a},"8b83":function(e,t,n){var r=n("3c5a");function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}e.exports=a},"8d1f":function(e,t,n){function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}n("d3b7"),n("4ae1"),n("25f0"),e.exports=r},9129:function(e,t,n){var r=n("23e7");r({target:"Number",stat:!0},{isNaN:function(e){return e!=e}})},b623:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sPage"},[n("v-uni-view",{staticClass:"sBody"},[n("v-uni-view",{staticClass:"sContent"},[n("v-uni-view",{staticClass:"sViewField"},[e._v("我的账号 "+e._s(e._SS.ownerAddress))]),n("v-uni-view",{staticClass:"sViewField"},[e._v("当前余额 "+e._s(e._SS.ownerBalance))]),n("v-uni-view",{staticClass:"sLabel"},[e._v("对方地址")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAddress",attrs:{type:"text",placeholder:"输入对方地址"},model:{value:e.toAddress,callback:function(t){e.toAddress=t},expression:"toAddress"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("转账金额")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAmount",attrs:{type:"number",placeholder:"输入转账金额"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("加密签名")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-textarea",{staticClass:"sSecwordTextarea",attrs:{"auto-height":"true",focus:"true",maxlength:"-1",placeholder:"输入您当前登录账号的密语"},model:{value:e.ownerSecword,callback:function(t){e.ownerSecword=t},expression:"ownerSecword"}})],1),n("v-uni-view",{staticClass:"sFooterFloating"},[n("v-uni-button",{staticClass:"sSubmitButton",attrs:{loading:e.isLoading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.transfer.apply(void 0,arguments)}}},[e._v("转 账")])],1),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.test.apply(void 0,arguments)}}},[e._v("填入测试数据")])],1)],1)],1)},i=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}))},c2a6:function(e,t,n){e.exports={ActionTransfer:n("5dad"),ActionStore:n("25ee")}},d43c:function(e,t){function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}e.exports=n},d769:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n("c975"),n("b64b"),e.exports=r},dbda:function(e,t,n){"use strict";(function(e){var r=n("ee27");n("a9e3"),n("dca8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("d0af"));n("96cf");var i=r(n("c964")),o=r(n("4a21")),s=r(n("dc10")),c={data:function(){return{i18nText:Object.freeze({zhCN:{tPageTitle:"转出"},enUS:{tPageTitle:"Transfer"}}),ownerSecword:"",toAddress:"",amount:"",isLoading:!1}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]},appName:function(){return this.$store.getters["i18n/getAppName"]}},onLoad:function(){this.uni2log.relaunch4newSession()},onShow:function(){uni.setNavigationBarTitle({title:this.localeText.tPageTitle}),document.title=this.appName,this._SC("i18n/setTabbar")},methods:{test:function(){this.toAddress="TNwG4H9aPe87BJNK-ly9n-L7HoPO-ioP",this.ownerSecword="brand moment media marine enroll verb blanket toilet unit exercise choose nuclear",this.amount=100},transfer:function(){var t=this;return(0,i.default)(regeneratorRuntime.mark((function n(){var r,i,c,u,l,f;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!1,o.default.isAddress(t.toAddress)){n.next=5;break}uni.showToast({image:"../static/Common.fail.png",title:"对方地址格式错误"}),n.next=44;break;case 5:if(t._SS.ownerAddress!==t.toAddress){n.next=9;break}uni.showToast({image:"../static/Common.fail.png",title:"不能转账给自己"}),n.next=44;break;case 9:if(!(t.amount>t._SS.ownerBalance)){n.next=13;break}uni.showToast({image:"../static/Common.fail.png",title:"转账金额超出了您的账户余额"}),n.next=44;break;case 13:if(o.default.isSecword(t.ownerSecword,{mode:"easy"})){n.next=17;break}uni.showToast({image:"../static/Common.fail.png",title:"密语格式错误"}),n.next=44;break;case 17:if(o.default.secword2address(t.ownerSecword)===t._SS.ownerAddress){n.next=21;break}uni.showToast({image:"../static/Common.fail.png",title:"密语不符合当前登录账号"}),n.next=44;break;case 21:return t.isLoading=!0,uni.showLoading({title:"加密签名..."}),n.next=25,t.uni2log.sleep(1e3);case 25:return r=o.default.secword2account(t.ownerSecword),n.next=28,s.default.buildUserAction({type:"ActionTransfer",amount:Number(t.amount),toAddress:t.toAddress},r);case 28:if(i=n.sent,!i){n.next=42;break}return e("log","action by client = ",i," at pages/AccountTransfer.vue:64"),n.next=33,t.uni2log.request({url:"api/Action/prepare",data:{Action:i}});case 33:c=n.sent,u=(0,a.default)(c,2),u[0],l=u[1],l=void 0===l?{}:l,f=l.data,l.statusCode,l.header,f&&"ActionTransfer"===f.type?(e("log","action from server = ",f," at pages/AccountTransfer.vue:70"),uni.showToast({image:"../static/Common.success.png",title:"转账申请已成功提交"})):uni.showToast({image:"../static/Common.fail.png",title:"转账申请提交失败"}),n.next=42;break;case 42:uni.hideLoading(),t.isLoading=!1;case 44:case"end":return n.stop()}}),n)})))()}}};t.default=c}).call(this,n("0de9")["log"])},dc10:function(e,t,n){n("99af"),n("7db0");var r=n("12c0"),a=n("f3e1");n("96cf");var i,o,s=n("9705"),c=n("df34"),u=n("1003"),l=n("343c"),f=n("8b83"),d=n("5757"),p=n("2bb9"),h=n("4a21"),b={},v=e.exports=(o=i=function(e){"use strict";f(n,e);var t=l(n);function n(e){var r;return c(this,n),r=t.call(this,e),r.type=r.constructor.name,r}return u(n,null,[{key:"init",value:function(e){this.to=e}}]),n}(p),d(i,"schema",{name:i.name,target:i,columns:{hash:{type:String,primary:!0},version:{type:"int",default:0},type:{type:String,default:"Action"},blockHash:{type:String,nullable:!1},timestamp:{type:Date,nullable:!1},actorPubkey:{type:String,nullable:!1},actorAddress:{type:String,nullable:!1},actorSignature:{type:String,nullable:!1},toAddress:{type:String,nullable:!0},amount:{type:"real",default:0},fee:{type:"real",default:0},message:{type:String,nullable:!0},dataIndex:{type:String,nullable:!0},method:{type:String,nullable:!0},json:{type:"simple-json",default:null}}}),o);MOM=v.prototype,MOM.packMe=s(regeneratorRuntime.mark((function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=t.seckey,r=t.pubkey,this.actorPubkey=r,this.actorAddress=h.pubkey2address(r),this.timestamp=new Date,e.next=6,this.signMe(n);case 6:return this.hashMe(),e.abrupt("return",this);case 8:case"end":return e.stop()}}),e,this)}))),MOM.signMe=function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,h.sign(n,t);case 3:return this.actorSignature=e.sent,e.abrupt("return",this);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),MOM.hashMe=function(){return this.hash=h.hash(this.getJson({exclude:["hash","blockHash"]})),this},MOM.verifySig=s(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,h.verify(t,this.actorSignature,this.actorPubkey);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),v.verifySig=function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new(v.getActionType(t.type))(t),e.next=3,n.verifySig();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),MOM.verifyAddress=function(){return this.actorAddress===h.pubkey2address(this.actorPubkey)},v.verifyAddress=function(e){var t=new(v.getActionType(e.type))(e);return t.verifyAddress()},MOM.verifyHash=function(){return this.hash===h.hash(this.getJson({exclude:["hash","blockHash"]}))},v.verifyHash=function(e){var t=new(v.getActionType(e.type))(e);return t.verifyHash()},MOM.validateMe=function(){var e=new(v.getActionType(this.type))(this);return e.validateMe()},v.validate=function(e){mylog.info("Validating action type=".concat(e.type," of hash=").concat(e.hash));var t=new(v.getActionType(e.type))(e);return t.validateMe()},MOM.executableMe=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new(v.getActionType(this.type))(this),e.next=3,t.executableMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),v.executable=function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new(v.getActionType(t.type))(t),!n.hasOwnProperty("executableMe")){e.next=7;break}return e.next=4,n.executableMe();case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),MOM.executeMe=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new(v.getActionType(this.type))(this),e.next=3,t.executeMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),v.execute=function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return mylog.info("Excecuting action type=".concat(t.type," of hash=").concat(t.hash)),n=new(v.getActionType(t.type))(t),e.next=4,n.executeMe();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v.getActionType=function(e){return b.ActionTypeDict||(b.ActionTypeDict=n("c2a6")),b.ActionTypeDict[e]},v.createTypedAction=function(e){return new(v.getActionType(e.type))(e)},v.buildUserAction=function(){var e=s(regeneratorRuntime.mark((function e(t){var n,r,a,i,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=o.length>1&&void 0!==o[1]?o[1]:{},r=n.seckey,a=n.pubkey,!(t&&t.type&&r&&a&&h.seckey2pubkey(r)===a)){e.next=8;break}if(i=new(v.getActionType(t.type))(t),i.actorPubkey=a,!i.validateMe()){e.next=8;break}return e.next=7,i.packMe({seckey:r,pubkey:a});case 7:return e.abrupt("return",i);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v.getActionBatch=function(){var e={actionPool:JSON.parse(JSON.stringify(v.actionPool)),totalAmount:v.actionPoolInfo.totalAmount,totalFee:v.actionPoolInfo.totalFee};return v.actionPool={},v.actionPoolInfo={totalAmount:0,totalFee:0},e},v.api={},v.api.getAction=s(regeneratorRuntime.mark((function e(){var t,n,r=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:{},n=t.where,e.next=3,to.getRepository(v.name).findOne(n);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),v.api.getActionList=function(){var e=s(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,to.getRepository(v.name).find(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v.api.getMyActionList=s(regeneratorRuntime.mark((function e(){var t,n,i,o,s,c,u,l,f,d,p=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:{},n=t.where,i=void 0===n?{}:n,o=t.order,s=void 0===o?{timestamp:"DESC"}:o,c=t.take,u=void 0===c?10:c,l={},f=i.myAddress,d=a(i,["myAddress"]),e.next=5,to.getRepository(v.name).find(r({actorAddress:f},d),s,u);case 5:return l.fromMe=e.sent,e.next=8,to.getRepository(v.name).find(r({toAddress:f},d),s,u);case 8:return l.toMe=e.sent,e.abrupt("return",l);case 10:case"end":return e.stop()}}),e)}))),v.api.prepare=function(){var e=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t&&t.Action&&t.Action.type&&v.getActionType(t.Action.type)&&t.Action.hash)||v.actionPool[t.Action.hash]){e.next=23;break}if(n=new(v.getActionType(t.Action.type))(t.Action),e.t3=n.verifyAddress(),!e.t3){e.next=7;break}return e.next=6,n.verifySig();case 6:e.t3=e.sent;case 7:if(e.t2=e.t3,!e.t2){e.next=10;break}e.t2=n.verifyHash();case 10:if(e.t1=e.t2,!e.t1){e.next=13;break}e.t1=n.validateMe();case 13:if(e.t0=e.t1,!e.t0){e.next=18;break}return e.next=17,n.executableMe();case 17:e.t0=e.sent;case 18:if(!e.t0){e.next=23;break}return v.actionPool[t.Action.hash]=n,v.actionPoolInfo.totalAmount+=t.Action.amount||0,v.actionPoolInfo.totalFee+=t.Action.fee||0,e.abrupt("return",t.Action);case 23:return e.abrupt("return",null);case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v.actionPool={},v.actionPoolInfo={totalAmount:0,totalFee:0}},df34:function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}e.exports=n},f03b:function(e,t,n){"use strict";n.r(t);var r=n("dbda"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},f3e1:function(e,t,n){n("a4d3"),n("c975");var r=n("d769");function a(e,t){if(null==e)return{};var n,a,i=r(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}e.exports=a}}]);