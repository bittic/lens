(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-AccountTransfer"],{"1b83":function(e,t,n){e.exports=n("2bb9")},"28de":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sBody[data-v-285db1b5]{padding-left:4%;padding-right:4%\n\n}@media screen and (min-width:751px){.sBody[data-v-285db1b5]{width:720px}}.sBody .sViewField[data-v-285db1b5]{background:#555;color:#fff;margin-bottom:%?40?%;padding:%?10?%;font-size:large\n\n}@media screen and (min-width:751px){.sBody .sViewField[data-v-285db1b5]{padding:10px;margin-bottom:30px}}.sBody .sInputField[data-v-285db1b5]{padding:%?9?%;color:#333;background:#eee;margin-bottom:%?40?%;box-sizing:border-box\n\n}@media screen and (min-width:751px){.sBody .sInputField[data-v-285db1b5]{padding:9px;margin-bottom:40px}}.sBody .sLabel[data-v-285db1b5]{color:#fff;font-size:small;padding-bottom:6px}.sBody .sSecwordTextarea[data-v-285db1b5]{width:100%}.sBody .sSecwordTextarea uni-textarea[data-v-285db1b5], .sBody .sSecwordTextarea .uni-textarea-compute[data-v-285db1b5]{word-break:normal}',""]),e.exports=t},"2bb9":function(e,t,n){(function(t,r){const a=n("11c1"),s=t.mylog||r,i=e.exports=function(){this._class=this.constructor.name},o=i.prototype;o.setProp=function(e){for(var t in e=e||{},this._model)if(e.hasOwnProperty(t)&&"undefined"!==typeof e[t]&&e[t]===e[t]&&e[t]!==1/0)this[t]=e[t];else if("undefined"===typeof this[t]){let e=this._model[t].default;this[t]=e&&"object"===typeof e?JSON.parse(JSON.stringify(e)):e}return this},o.getProp=function(e){e=e||{};let t={};for(var n of Object.keys(this._model).sort())"undefined"!==typeof e[n]&&e[n]===e[n]&&e[n]!==1/0?t[n]=e[n]:"undefined"!==typeof this[n]&&this[n]===this[n]&&this[n]!==1/0&&(t[n]=this[n]);return t},o.filterProp=function(e){for(var t in e=e||{},e)this._model.hasOwnProperty(t)&&"undefined"!==typeof e[t]&&e[t]===e[t]&&e[t]!==1/0||delete e[t];return e},o.getJson=function(e={}){let t=this.getProp();for(let r of e.exclude||[])delete t[r];let n=JSON.stringify(t);return n},o.normalize=async function(){return t.solet&&this.hasOwnProperty("ownerSid")&&(this._data=this._data||{},this._data.owner=await this.getOwner()),this},o.getOwner=async function(){return t.solet&&this.hasOwnProperty("ownerSid")?this.ownerSid?await wo.Person.getOne({Person:{aiid:this.ownerSid}}):wo.Config.PERSON_UNKNOWN:null},o._eventPool=null,o.addWatcher=function(e,t){null==this._eventPool&&(this._eventPool={}),"undefined"==typeof this._eventPool[e]&&(this._eventPool[e]=[]),this._eventPool[e].push(t)},o.dropWatcher=function(e,t){if(null!=this._eventPool&&this._eventPool[e]instanceof Array){let n=this._eventPool[e];for(let e in n)if(n[e]===t){n.splice(e,1);break}}},o.dropWatcherAll=function(e){null!=this._eventPool&&(this._eventPool[e]=void 0)},o.triggerEvent=function(e,t,n){let r={type:e,target:this};if(null!=this._eventPool&&this._eventPool[r.type]instanceof Array){let e=this._eventPool[r.type];for(let a in e)e[a](r,t,n)}},o.getMe=async function(e){let n,a=this;return e=e||{},n=e.excludeSelf?a.filterProp(e[a._class]):a.getProp(e[a._class]),t.solet&&(delete n.whenInserted,delete n.whenUpdated),"object"===typeof n&&n&&Object.keys(n).length>0?(t.solet&&this.hasOwnProperty("mark")&&(n.mark="!="+wo.Config.MARK_DELETED),e.config=e.config||{},e.config.limit=1,await this._database.getData({_table:this._table,where:n,config:e.config}).then((function(e){return Array.isArray(e)&&e[0]?(a.setProp(e[0]),a):null})).catch(r.log)):null},o.setMe=async function(e){let n,a=this;e=e||{},n=e.excludeSelf?a.filterProp(e[a._class]):a.getProp(e[a._class]),t.solet&&(delete n.aiid,delete n.uuid,"mysql"===wo.Config.dbType?(delete n.whenInserted,delete n.whenUpdated):"sqlite"===wo.Config.dbType&&this.hasOwnProperty("whenUpdated")&&(delete n.whenInserted,n.whenUpdated=new Date));let s={};if(e.cond)s=a.filterProp(e.cond);else if(e[a._class]&&e[a._class][a._tablekey])s[a._tablekey]=e[a._class][a._tablekey];else{if(!a[a._tablekey])return null;s[a._tablekey]=a[a._tablekey]}return"object"===typeof s&&s&&Object.keys(s).length>0&&"object"===typeof n&&n&&Object.keys(n).length>0?(t.solet&&this.hasOwnProperty("mark")&&(s.mark="!="+wo.Config.MARK_DELETED),await this._database.setData({_table:this._table,where:s,set:n,config:{limit:1}}).then((function(e){return Array.isArray(e)&&e[0]?(a.setProp(e[0]),a):null})).catch(r.log)):null},o.addMe=async function(e){let n,s=this;return e=e||{},n=e.excludeSelf?s.filterProp(e[s._class]):s.getProp(e[s._class]),t.solet&&("mysql"===wo.Config.dbType?(delete n.whenInserted,delete n.whenUpdated):"sqlite"===wo.Config.dbType&&this.hasOwnProperty("whenInserted")&&(n.whenUpdated=n.whenInserted=new Date)),this.hasOwnProperty("uuid")&&!n.uuid&&(n.uuid=`${s._class}-${a.v4()}`),await this._database.addData({_table:this._table,set:n,config:{limit:1}}).then((function(e){return Array.isArray(e)&&e[0]?(s.setProp(e[0]),s):null})).catch(r.log)},o.hideMe=async function(e){let t=this;e=e||{};let n={};return e.excludeSelf?n=t.filterProp(e[t._class]):e[t._class]&&e[t._class][t._tablekey]?n[t._tablekey]=e[t._class][t._tablekey]:this[t._tablekey]?n[t._tablekey]=this[t._tablekey]:n=t.getProp(e[t._class]),"object"===typeof n&&n&&Object.keys(n).length>0&&t.hasOwnProperty("mark")?await this._database.setData({_table:this._table,where:n,set:{mark:wo.Config.MARK_DELETED},config:{limit:1}}).then((function(e){return Array.isArray(e)&&e[0]?(t.setProp(e[0]),t):null})).catch(r.log):null},o.dropMe=async function(e){let t=this;e=e||{};let n={};return e.excludeSelf?n=t.filterProp(e[t._class]):e[t._class]&&e[t._class][t._tablekey]?n[t._tablekey]=e[t._class][t._tablekey]:this[t._tablekey]?n[t._tablekey]=this[t._tablekey]:n=t.getProp(e[t._class]),"object"===typeof n&&n&&Object.keys(n).length>0?await this._database.dropData({_table:this._table,where:n,config:{limit:1}}).then((function(e){return e})).catch(r.log):null},i._init=async function(e){return this.prototype._database=e,await this.createTable(),this},i.createTable=async function(){s.info("Creating table "+this.prototype._table);await this.prototype._database.createTable({_table:this.prototype._table,_model:this.prototype._model});return s.info("******* Table is ready: "+this.prototype._table),this},i.getCount=async function(e){e=e||{},t.solet&&(e[this.name]=e[this.name]||{},e[this.name].starId=e[this.name].starId||e.starId);let n=this.prototype.filterProp(e[this.name]);return t.solet&&this.prototype._model["mark"]&&(n.mark="!="+wo.Config.MARK_DELETED),await this.prototype._database.getNumber({_table:this.prototype._table,where:n,field:"*",func:"count"}).then((function(e){return e})).catch(r.log)},i.getSum=async function(e){if(e=e||{},e.field){let t=this.prototype.filterProp(e[this.name]);return await this.prototype._database.getNumber({_table:this.prototype._table,where:t,field:e.field,func:"sum"}).then((function(e){return e})).catch(r.log)}return null},i.getAllCall=async function(e){let t=this;return e._proc?await this.prototype._database.callProc(e).then((function(e){if(Array.isArray(e)){for(let n of e)n.__proto__=t.prototype,n._class=t.name;return e}return[]})).catch(r.log):[]},i.getAll=async function(e){e=e||{};let n=this;t.solet&&(e[this.name]=e[this.name]||{},e[this.name].starId=e[this.name].starId||e.starId);let a=n.prototype.filterProp(e[n.name]);return t.solet&&this.prototype._model["mark"]&&(a.mark="!="+wo.Config.MARK_DELETED),await this.prototype._database.getData({_table:this.prototype._table,where:a,config:e.config}).then((function(e){if(Array.isArray(e)){for(let t of e)t.__proto__=n.prototype,t._class=n.name;return e}return[]})).catch(r.log)},i.getOne=async function(e){return e&&"object"===typeof e[this.name]?(t.solet&&(e[this.name].starId=e[this.name].starId||e.starId),e.excludeSelf=!0,await(new this).getMe(e)):null},i.setOne=async function(e){return e&&"object"===typeof e[this.name]?(t.solet&&(e.cond&&"object"===typeof e.cond?e.cond.starId=e.cond.starId||e.starId:"Person"===this.name&&e[this.name].aiid===e._passtoken.onlineSid?e.cond={aiid:e._passtoken.onlineSid}:"Person"!==this.name&&e[this.name].aiid&&(e.cond={aiid:e[this.name].aiid,ownerSid:e._passtoken.onlineSid,starId:e.starId})),e.cond&&"object"===typeof e.cond&&(e.excludeSelf=!0),await(new this).setMe(e)):null},i.addOne=async function(e){return e&&"object"===typeof e[this.name]?(t.solet&&(e[this.name].ownerSid=e._passtoken.onlineSid,e[this.name].starId=e[this.name].starId||e.starId),await(new this).addMe(e)):null},i.hideOne=async function(e){return t.solet&&e._passtoken.isOnline()&&"object"===typeof e[this.name]&&"Person"!==this.name&&e[this.name].aiid?(e[this.name]={aiid:e[this.name].aiid,ownerSid:e._passtoken.onlineSid,starId:e.starId},await(new this).hideMe(e)):null},i.dropOne=async function(e){return e&&"object"===typeof e[this.name]?await(new this).dropMe(e):null},i.dropAll=async function(e){let t=this;e=e||{};let n=t.prototype.filterProp(e[t.name]);return"object"===typeof n&&n&&Object.keys(n).length>0?await this.prototype._database.dropData({_table:this.prototype._table,where:n,config:e.config}).then((function(e){return e})).catch(r.log):null},i.json2obj=function(e,t){if(t=["database","http"].indexOf(t)>=0?t:"http","string"===typeof e)try{var n=JSON.parse(unescape(e));"http"===t?e=n:"database"===t&&("object"===typeof n&&null!==n?e=n:"boolean"===typeof n&&(e=n))}catch(r){}else if("object"===typeof e&&e&&!(e instanceof Date))for(let a in e)e[a]=arguments.callee(e[a],t);return i.iso2Date(e)},i.iso2Date=function(e){if("string"===typeof e)/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/.test(e)&&(e=new Date(e));else if("object"===typeof e&&e&&!(e instanceof Date))for(var t in e)e[t]=arguments.callee(e[t]);return e}}).call(this,n("c8ba"),n("5a52")["default"])},"31fd":function(e,t,n){var r=n("28de");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("f4238e08",r,!0,{sourceMap:!1,shadowMode:!1})},"4eaa":function(e,t,n){"use strict";var r=n("4ea4");n("c5f6"),n("96cf");var a=r(n("3b8d")),s=n("9667"),i=n("4a21"),o=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};o.__proto__=s;var c=o.prototype;c.__proto__=s.prototype,c.validateMe=function(){return this.actorPubkey&&this.toAddress&&i.pubkey2address(this.actorPubkey)!==this.toAddress&&this.amount&&this.amount>0&&this.fee>=0},c.executableMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.amount+this.fee);case 4:case"end":return e.stop()}}),e,this)}))),c.executeMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getOne({Account:{address:this.actorAddress}});case 2:if(t=e.sent,!(t&&"multisig"!==t.type&&this.toAddress!=this.actorAddress&&t.balance>=this.amount+this.fee)){e.next=18;break}return e.next=6,t.setMe({Account:{balance:Number(t.balance)-Number(this.amount)-Number(this.fee),countAction:t.countAction+1},cond:{address:t.address}});case 6:return e.next=8,wo.Account.getOne({Account:{address:this.toAddress}});case 8:if(e.t0=e.sent,e.t0){e.next=13;break}return e.next=12,wo.Account.addOne({Account:{address:this.toAddress}});case 12:e.t0=e.sent;case 13:return n=e.t0,e.next=16,n.setMe({Account:{balance:Number(n.balance)+Number(this.amount),countAction:n.countAction+1},cond:{address:n.address}});case 16:return mylog.info("Excecuted action="+JSON.stringify(this)),e.abrupt("return",this);case 18:return e.abrupt("return",null);case 19:case"end":return e.stop()}}),e,this)}))),o.api={}},"5b82":function(e,t,n){"use strict";var r=n("4ea4");n("96cf");var a=r(n("3b8d")),s=n("9667"),i=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};i.__proto__=s;var o=i.prototype;o.__proto__=s.prototype,o.validateMe=function(){return this.fee>=wo.Config.MIN_FEE_ActionStore||0},o.executableMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Store.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.fee&&!0);case 4:case"end":return e.stop()}}),e,this)}))),o.executeMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getOne({Account:{address:this.actorAddress}});case 2:if(t=e.sent,!(t&&t.balance>=this.fee)){e.next=7;break}return e.next=6,t.setMe({Account:{balance:t.balance-this.fee},cond:{address:t.address}});case 6:return e.abrupt("return",this);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e,this)}))),i.api={}},"69f3":function(e,t,n){"use strict";n.r(t);var r=n("f28d"),a=n("f03b");for(var s in a)"default"!==s&&function(e){n.d(t,e,(function(){return a[e]}))}(s);n("d721");var i,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"285db1b5",null,!1,r["a"],i);t["default"]=c.exports},9667:function(e,t,n){"use strict";var r=n("4ea4");n("96cf");var a=r(n("3b8d")),s=n("1b83"),i=n("4a21"),o={},c=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};c.__proto__=s;var u=c.prototype;u.__proto__=s.prototype,u._table=c.name,u._tablekey="hash",u._model={hash:{default:void 0,sqlite:"TEXT UNIQUE",mysql:"VARCHAR(64) PRIMARY KEY"},version:{default:0,sqlite:"INTEGER"},type:{default:"Action",sqlite:"TEXT",mysql:"VARCHAR(100)"},blockHash:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(64)"},timestamp:{default:void 0,sqlite:"TEXT",mysql:"CHAR(24)"},actorPubkey:{default:void 0,sqlite:"TEXT",mysql:"BINARY(32)"},actorAddress:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},actorSignature:{default:void 0,sqlite:"TEXT",mysql:"BINARY(64)"},toAddress:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},amount:{default:0,sqlite:"NUMERIC",mysql:"BIGINT"},fee:{default:0,sqlite:"NUMERIC",mysql:"BIGINT"},message:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(256)"},dataIndex:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},method:{default:void 0,sqlite:"TEXT"},json:{default:void 0,sqlite:"TEXT"}},u.packMe=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.actorPubkey=t.pubkey,this.actorAddress=i.pubkey2address(t.pubkey),this.timestamp=new Date,e.next=5,this.signMe(t.seckey);case 5:return this.hashMe(),e.abrupt("return",this);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),u.signMe=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,i.sign(n,t);case 3:return this.actorSignature=e.sent,e.abrupt("return",this);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),u.hashMe=function(){return this.hash=i.hash(this.getJson({exclude:["hash","blockHash"]})),this},u.verifySig=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,i.verify(t,this.actorSignature,this.actorPubkey);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),c.verifySig=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new o[t.type](t),e.next=3,n.verifySig();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u.verifyAddress=function(){return this.actorAddress===i.pubkey2address(this.actorPubkey)},c.verifyAddress=function(e){var t=new o[e.type](e);return t.verifyAddress()},u.verifyHash=function(){return this.hash===i.hash(this.getJson({exclude:["hash","blockHash"]}))},c.verifyHash=function(e){var t=new o[e.type](e);return t.verifyHash()},u.validateMe=function(){var e=new o[this.type](this);return e.validateMe()},c.validate=function(e){mylog.info("Validating action type=".concat(e.type," of hash=").concat(e.hash));var t=new o[e.type](e);return t.validateMe()},u.executableMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new o[this.type](this),e.next=3,t.executableMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),c.executable=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=new o[t.type](t),!n.hasOwnProperty("executableMe")){e.next=7;break}return e.next=4,n.executableMe();case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u.executeMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new o[this.type](this),e.next=3,t.executeMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e,this)}))),c.execute=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return mylog.info("Excecuting action type=".concat(t.type," of hash=").concat(t.hash)),n=new o[t.type](t),e.next=4,n.executeMe();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c._initTypeDict=function(e){Object.assign(o,e)},c.getTypedAction=function(e){return o[e]},c.createTypedAction=function(e){return new o[e.type](e)},c.buildUserAction=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t&&t.type&&n&&n.seckey&&n.pubkey&&i.seckey2pubkey(n.seckey)===n.pubkey)){e.next=7;break}if(r=new o[t.type](t),r.actorPubkey=n.pubkey,!r.validateMe()){e.next=7;break}return e.next=6,r.packMe(n);case 6:return e.abrupt("return",r);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),c.getActionBatch=function(){var e={actionPool:JSON.parse(JSON.stringify(c.actionPool)),totalAmount:c.actionPoolInfo.totalAmount,totalFee:c.actionPoolInfo.totalFee};return c.actionPool={},c.actionPoolInfo={totalAmount:0,totalFee:0},e},c.api={},c.api.getAction=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.getOne(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.api.getActionList=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.getAll(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.api.getMyActionList=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,r,a,s=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:{},n=t.myAddress,r=t.config,a={},e.next=4,c.getAll({Action:{actorAddress:n},config:r});case 4:return a.fromMe=e.sent,e.next=7,c.getAll({Action:{toAddress:n},config:r});case 7:return a.toMe=e.sent,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),c.api.prepare=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("string"===typeof t)try{t=JSON.parse(t)}catch(r){}if(!(t&&t.Action&&t.Action.type&&o[t.Action.type]&&t.Action.hash)||c.actionPool[t.Action.hash]){e.next=24;break}if(n=new o[t.Action.type](t.Action),e.t3=n.verifyAddress(),!e.t3){e.next=8;break}return e.next=7,n.verifySig();case 7:e.t3=e.sent;case 8:if(e.t2=e.t3,!e.t2){e.next=11;break}e.t2=n.verifyHash();case 11:if(e.t1=e.t2,!e.t1){e.next=14;break}e.t1=n.validateMe();case 14:if(e.t0=e.t1,!e.t0){e.next=19;break}return e.next=18,n.executableMe();case 18:e.t0=e.sent;case 19:if(!e.t0){e.next=24;break}return c.actionPool[t.Action.hash]=n,c.actionPoolInfo.totalAmount+=t.Action.amount||0,c.actionPoolInfo.totalFee+=t.Action.fee||0,e.abrupt("return",t.Action);case 24:return e.abrupt("return",null);case 25:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c.actionPool={},c.actionPoolInfo={totalAmount:0,totalFee:0}},a771:function(e,t,n){"use strict";var r=n("4ea4");n("ac6a"),n("456d"),n("96cf");var a=r(n("3b8d")),s=n("9667"),i=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};i.__proto__=s;var o=i.prototype;o.__proto__=s.prototype,o.signMe=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=this.getJson({exclude:["hash","blockHash","actorSignature","json"]}),e.next=3,wo.Crypto.sign(n,t);case 3:return this.actorSignature=e.sent,e.abrupt("return",this);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),o.verifySig=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getJson({exclude:["hash","blockHash","actorSignature","json"]}),e.next=3,wo.Crypto.verify(t,this.actorSignature,this.actorPubkey);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e,this)}))),o.verifyAddress=function(){return this.actorAddress===wo.Crypto.pubkey2address(this.actorPubkey)},o.hashMe=function(){return this.hash=wo.Crypto.hash(this.getJson({exclude:["hash","blockHash","json"]})),this},o.verifyHash=function(){return this.hash===wo.Crypto.hash(this.getJson({exclude:["hash","blockHash","json"]}))},o.packMe=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.actorPubkey=t.pubkey,this.actorAddress=wo.Crypto.pubkey2address(t.pubkey),this.timestamp=new Date,e.next=5,this.signMe(t.seckey);case 5:return this.hashMe(),e.abrupt("return",this);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),o.checkMultiSig=function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(t){var n,r,a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=this.getJson({exclude:["hash","blockHash","actorSignature","json"]}),r=Object.keys(this.json),-1===t.multiSignatures.keysgroup.indexOf(this.actorPubkey)?1:0,a=0,s=r;case 4:if(!(a<s.length)){e.next=16;break}if(i=s[a],e.t0=-1!==t.multiSignatures.keysgroup.indexOf(i),!e.t0){e.next=11;break}return e.next=10,wo.Crypto.verify(n,this.json[i],i);case 10:e.t0=e.sent;case 11:if(!e.t0){e.next=13;break}M++;case 13:a++,e.next=4;break;case 16:return e.abrupt("return",M>=t.multiSignatures.min);case 17:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),o.validateMe=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",wo.Crypto.isAddress(this.toAddress)&&this.fee>=wo.Config.MIN_FEE_ActionTransfer&&this.toAddress!=this.actorAddress);case 1:case"end":return e.stop()}}),e,this)}))),o.executableMe=(0,a.default)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("createTransfer"!==this.json.act){e.next=5;break}return i.pendingPool[this.hash]=this,e.abrupt("return",!1);case 5:if("addSig"!==this.json.act){e.next=8;break}return i.pendingPool[this.hash].json[this.actorPubkey]=this.json.signature,e.abrupt("return",!1);case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e,this)}))),o.executeMe=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:e.t0=this.json.act,e.next="sign"===e.t0?3:"emitTransfer"===e.t0?10:40;break;case 3:return e.next=5,wo.Account.getOne({Account:{address:this.actorAddress}});case 5:if(t=e.sent,!t||"multisig"===t.type){e.next=9;break}return e.next=9,t.setMe({Account:{multiSignatures:{min:this.json.min,ttl:this.json.ttl,keysgroup:this.json.keysgroup}},cond:{address:t.address}});case 9:return e.abrupt("return",this);case 10:return e.next=12,wo.Account.getOne({Account:{address:this.actorAddress}});case 12:if(n=e.sent,e.t3=n,!e.t3){e.next=18;break}return e.next=17,this.checkMultiSig(n);case 17:e.t3=e.sent;case 18:if(e.t2=e.t3,!e.t2){e.next=21;break}e.t2=this.toAddress!=this.actorAddress;case 21:if(e.t1=e.t2,!e.t1){e.next=24;break}e.t1=n.balance>=this.amount+this.fee;case 24:if(!e.t1){e.next=39;break}return e.next=27,n.setMe({Account:{balance:n.balance-this.amount-this.fee},cond:{address:n.address}});case 27:return e.next=29,wo.Account.getOne({Account:{address:this.toAddress}});case 29:if(r=e.sent,!r){e.next=35;break}return e.next=33,r.setMe({Account:{balance:r.balance+this.amount},cond:{address:r.address}});case 33:e.next=37;break;case 35:return e.next=37,wo.Account.addOne({Account:{address:this.toAddress}});case 37:return delete i.pendingPool[this.hash],e.abrupt("return",this);case 39:return e.abrupt("return",null);case 40:case"end":return e.stop()}}),e,this)}))),i.pendingPool={},i.api={},i.api.pendingAction=function(e){return i.pendingPool[e.id]}},cf10:function(e,t,n){},d721:function(e,t,n){"use strict";var r=n("31fd"),a=n.n(r);a.a},dbda:function(e,t,n){"use strict";(function(e){var r=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("768b"));n("c5f6"),n("96cf");var s=r(n("3b8d"));n("0d6d");var i=r(n("4a21")),o=r(n("9667")),c=r(n("fc19"));o.default._initTypeDict(c.default);var u={data:function(){return{i18nText:Object.freeze({zhCN:{tPageTitle:"转出"},enUS:{tPageTitle:"Transfer"}}),ownerSecword:"",toAddress:"",amount:""}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]}},onLoad:function(){},onShow:function(){uni.setNavigationBarTitle({title:this.localeText.tPageTitle}),this._SC("i18n/setTabbar")},methods:{test:function(){this.toAddress="TPkXknZFGzOFilzRTOCJCf05dNXl4EQy",this.ownerSecword="brand moment media marine enroll verb blanket toilet unit exercise choose nuclear",this.amount=100},transfer:function(){var t=(0,s.default)(regeneratorRuntime.mark((function t(){var n,r,s,c,u,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!1,i.default.isAddress(this.toAddress)){t.next=5;break}uni.showToast({image:"../static/Common.fail.png",title:"对方地址格式错误"}),t.next=38;break;case 5:if(this._SS.ownerAddress!==this.toAddress){t.next=9;break}uni.showToast({image:"../static/Common.fail.png",title:"不能转账给自己"}),t.next=38;break;case 9:if(!(this.amount>this._SS.ownerBalance)){t.next=13;break}uni.showToast({image:"../static/Common.fail.png",title:"转账金额超出了您的账户余额"}),t.next=38;break;case 13:if(i.default.isSecword(this.ownerSecword,{mode:easy})){t.next=17;break}uni.showToast({image:"../static/Common.fail.png",title:"密语格式错误"}),t.next=38;break;case 17:if(i.default.secword2address(this.ownerSecword)===this._SS.ownerAddress){t.next=21;break}uni.showToast({image:"../static/Common.fail.png",title:"密语不符合当前登录账号"}),t.next=38;break;case 21:return n=i.default.secword2account(this.ownerSecword),t.next=24,o.default.buildUserAction({type:"ActionTransfer",amount:Number(this.amount),toAddress:this.toAddress},n);case 24:if(r=t.sent,!r){t.next=38;break}return e.log("action by client = ",r),uni.showLoading({title:"正在提交转账申请..."}),t.next=30,this.uni2log.request({url:"api/Action/prepare",data:{Action:r}});case 30:s=t.sent,c=(0,a.default)(s,2),c[0],u=c[1],u=void 0===u?{}:u,l=u.data,u.statusCode,u.header,uni.hideLoading(),l&&"ActionTransfer"===l.type?(e.log("action from server = ",l),uni.showToast({image:"../static/Common.success.png",title:"转账申请已成功提交"})):uni.showToast({image:"../static/Common.fail.png",title:"转账申请提交失败"});case 38:case"end":return t.stop()}}),t,this)})));function n(){return t.apply(this,arguments)}return n}()}};t.default=u}).call(this,n("5a52")["default"])},f03b:function(e,t,n){"use strict";n.r(t);var r=n("dbda"),a=n.n(r);for(var s in r)"default"!==s&&function(e){n.d(t,e,(function(){return r[e]}))}(s);t["default"]=a.a},f28d:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sPage"},[n("v-uni-view",{staticClass:"sBody"},[n("v-uni-view",{staticClass:"sContent"},[n("v-uni-view",{staticClass:"sViewField"},[e._v("我的账号 "+e._s(e._SS.ownerAddress))]),n("v-uni-view",{staticClass:"sViewField"},[e._v("当前余额 "+e._s(e._SS.ownerBalance))]),n("v-uni-view",{staticClass:"sLabel"},[e._v("对方地址")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAddress",attrs:{type:"text",placeholder:"输入对方地址"},model:{value:e.toAddress,callback:function(t){e.toAddress=t},expression:"toAddress"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("转账金额")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAmount",attrs:{type:"number",placeholder:"输入转账金额"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("加密签名")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-textarea",{staticClass:"sSecwordTextarea",attrs:{"auto-height":"true",focus:"true",maxlength:"-1",placeholder:"输入您当前登录账号的密语"},model:{value:e.ownerSecword,callback:function(t){e.ownerSecword=t},expression:"ownerSecword"}})],1),n("v-uni-view",{staticClass:"sFooterFloating"},[n("v-uni-button",{staticClass:"sSubmitButton",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.transfer.apply(void 0,arguments)}}},[e._v("转 账")])],1),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.test.apply(void 0,arguments)}}},[e._v("填入测试数据")])],1)],1)],1)},s=[];n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r}))},fc19:function(e,t,n){"use strict";var r=n("4eaa"),a=n("5b82"),s=n("a771"),i=n("cf10");e.exports={ActionTransfer:r,ActionStore:a,ActionMultisig:s,ActionLockProof:i}}}]);