(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-IdentUser"],{"067b":function(t,e,n){"use strict";(function(t){var a=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481");var i=a(n("db0c")),o=a(n("a4bb")),r=a(n("15b8")),s=a(n("4a21")),c={data:function(){return{isLoading:!1,i18nText:(0,r.default)({zhCN:{tPageTitle:"输入密语",tSubmitButton:"登 入",tSecwordLabel:"输入密语",tSecwordPrompt:"请输入您的密语，由12个汉字组成",tSecwordMalformed:"密语格式错误，请输入12个字，每两个字之间一个空格",tSecwordCreate:"还没有密语？随机创建一个",tSecwordCreateError:"无法生成密语，也许是您的设备不支持加密，请尝试换用其他设备吧",tSecwordFatal:"密语无法创建账户😭 请向我们报告您的设备和软件环境，让我们一起来解决",tHintPrompt:"密语是打开账户唯一方法！",tHintContent:"因此，您必须记住密语（例如手写保存在您家的某个秘密角落），并不让任何其他人知道。本系统也不会保存您的密语，除了您本人，集全世界的力量都无法攻破、也无法找回您的密语。",tHintConfirm:"我已记住",tHintCancel:"返回",tGeneratingAddress:"加密中..."},enUS:{tPageTitle:"Enter mnemonic",tSubmitButton:"Login",tSecwordLabel:"Enter Mnemonic",tSecwordPrompt:"Enter your mnemonic consisted of 12 words",tSecwordMalformed:"密语格式错误，请输入12个字，每两个字之间一个空格",tSecwordCreate:"Get a random mnemonic",tSecwordCreateError:"密语无法创建，也许是您的设备不支持加密，请尝试电脑浏览器",tHintPrompt:"Secword is the only way to access your account!",tHintContent:"Therefore, you must keep it very carefully and let no one else know it. TIC Lens will NOT save it such that the whole world cannot hack or recover your secword.",tHintConfirm:"I got it!",tHintCancel:"Return",tGeneratingAddress:"Encrypting..."}}),langIndex:(0,o.default)(this._SS.i18n.langSet).indexOf(this._SS.i18n.activeLang),langList:(0,r.default)((0,i.default)(this._SS.i18n.langSet)),ownerSecword:""}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]},appName:function(){return this.$store.getters["i18n/getAppName"]}},onLoad:function(){this._SS.nodeHost?this._SS.ownerAddress&&s.default.isAddress(this._SS.ownerAddress)&&uni.switchTab({url:"Account"}):uni.reLaunch({url:"IdentHost"})},onShow:function(){uni.setNavigationBarTitle({title:this.localeText.tPageTitle}),document.title=this.appName},methods:{createRandomSecword:function(){try{this.ownerSecword=s.default.randomSecword(this._SS.i18n.activeLang)}catch(t){uni.showToast({title:this.localeText.tSecwordCreateError,image:"../static/Common.fail.png"})}},pickLang:function(t){this.langIndex=t.target.value,this._SS.i18n.activeLang=(0,o.default)(this._SS.i18n.langSet)[this.langIndex],uni.setStorageSync("activeLang",this._SS.i18n.activeLang),uni.setNavigationBarTitle({title:this.localeText.tPageTitle})},login:function(){var e=this;this.ownerSecword=this.ownerSecword.replace(/(^\s+)|(\s+$)/g,"").replace(/\s+/g," "),s.default.isSecword(this.ownerSecword,{mode:"easy"})?uni.showModal({title:this.localeText.tHintPrompt,content:this.localeText.tHintContent,confirmText:this.localeText.tHintConfirm,cancelText:this.localeText.tHintCancel,success:function(n){var a=n.confirm;n.cancel;if(a){e.isLoading=!0;try{e._SS.ownerAddress=s.default.secword2address(e.ownerSecword)}catch(i){uni.showToast({title:e.localeText.tSecwordFatal})}e.isLoading=!1,uni.setStorageSync("ownerAddress",e._SS.ownerAddress),e.ownerSecword=void 0,t.log("登录用户账号: ",e._SS.ownerAddress),uni.switchTab({url:"Account"})}}}):uni.showToast({title:this.localeText.tSecwordMalformed,image:"../static/Common.fail.png"})}}};e.default=c}).call(this,n("5a52")["default"])},"0ed0":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sBody[data-v-0024a079]{padding:0 4%;max-width:960px}.sInputHeader[data-v-0024a079]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:medium;color:#fff;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?12?% 0}.sSecwordBox[data-v-0024a079]{background:#eee;padding:%?12?%;width:100%;box-sizing:border-box\n\n}@media screen and (min-width:751px){.sSecwordBox[data-v-0024a079]{padding:12px}}.sSecwordTextarea[data-v-0024a079]{width:100%;font-size:%?30?%;line-height:%?44?%;color:#333\n\n}@media screen and (min-width:751px){.sSecwordTextarea[data-v-0024a079]{font-size:30px;line-height:44px}}.sCreateButton[data-v-0024a079]{float:right;box-sizing:border-box;border-width:%?12?% 0;border-style:solid;border-color:transparent;padding-left:%?45?%;border-radius:%?10?%;background:no-repeat 0/contain;color:#fff;font-size:small;cursor:pointer;margin-top:%?20?%\n\n}@media screen and (min-width:751px){.sCreateButton[data-v-0024a079]{padding-left:25px;border-width:12px;border-radius:6px;margin-top:10px}}.sFooterFloating[data-v-0024a079]{margin-top:%?120?%\n\n}@media screen and (min-width:751px){.sFooterFloating[data-v-0024a079]{margin-top:80px}}.sSubmitButton[data-v-0024a079]{font-size:medium\n\n}@media screen and (min-width:751px){.sSubmitButton[data-v-0024a079]{font-size:x-large}}',""])},"55ea":function(t,e,n){"use strict";n.r(e);var a=n("067b"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"6a991":function(t,e,n){"use strict";var a=n("6ec9"),i=n.n(a);i.a},"6ec9":function(t,e,n){var a=n("0ed0");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("54a16ca4",a,!0,{sourceMap:!1,shadowMode:!1})},c11f:function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"sPage"},[n("v-uni-picker",{staticClass:"sLangPicker",attrs:{value:t.langIndex,range:t.langList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.pickLang.apply(void 0,arguments)}}},[n("v-uni-view",[t._v(t._s(t.langList[t.langIndex]))])],1),n("v-uni-view",{staticClass:"sLogo"}),n("v-uni-view",{staticClass:"sAppName"},[t._v(t._s(t.appName))]),n("v-uni-view",{staticClass:"sBody"},[n("v-uni-view",{staticClass:"sInputHeader"},[n("v-uni-text",[t._v(t._s(t.localeText.tSecwordLabel))])],1),n("v-uni-view",{staticClass:"sSecwordBox"},[n("v-uni-textarea",{staticClass:"sSecwordTextarea",attrs:{placeholder:t.localeText.tSecwordPrompt,"auto-height":"true",focus:"true",maxlength:"-1"},model:{value:t.ownerSecword,callback:function(e){t.ownerSecword=e},expression:"ownerSecword"}})],1),n("v-uni-view",{staticClass:"sCreateButton",staticStyle:{backgroundImage:"url(../static/Common.dice.png)"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.createRandomSecword.apply(void 0,arguments)}}},[t._v(t._s(t.localeText.tSecwordCreate))]),n("v-uni-view",{staticClass:"sFooterFloating"},[n("v-uni-button",{staticClass:"sSubmitButton",attrs:{loading:t.isLoading},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.login.apply(void 0,arguments)}}},[t._v(t._s(t.localeText.tSubmitButton))])],1)],1)],1)},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},c4f3:function(t,e,n){"use strict";n.r(e);var a=n("c11f"),i=n("55ea");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("6a991");var r,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"0024a079",null,!1,a["a"],r);e["default"]=c.exports}}]);