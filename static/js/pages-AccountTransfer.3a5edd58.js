(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-AccountTransfer"],{"1b83":function(e,t,n){"use strict";e.exports=n("2bb9")},"2bb9":function(e,t,n){"use strict";(function(t,r){var a=n("288e"),i=a(n("a745"));n("96cf");var s=a(n("3b8d")),o=a(n("a4bb"));n("55dd");var u=a(n("5d73")),c=a(n("f499")),l=n("11c1"),d=t.mylog||r,f=e.exports=function(){this._class=this.constructor.name},p=f.prototype;p.setProp=function(e){for(var t in e=e||{},this._model)if(e.hasOwnProperty(t)&&"undefined"!==typeof e[t]&&e[t]===e[t]&&e[t]!==1/0)this[t]=e[t];else if("undefined"===typeof this[t]){var n=this._model[t].default;this[t]=n&&"object"===typeof n?JSON.parse((0,c.default)(n)):n}return this},p.getProp=function(e){e=e||{};var t={},n=!0,r=!1,a=void 0;try{for(var i,s=(0,u.default)((0,o.default)(this._model).sort());!(n=(i=s.next()).done);n=!0){var c=i.value;"undefined"!==typeof e[c]&&e[c]===e[c]&&e[c]!==1/0?t[c]=e[c]:"undefined"!==typeof this[c]&&this[c]===this[c]&&this[c]!==1/0&&(t[c]=this[c])}}catch(l){r=!0,a=l}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}return t},p.filterProp=function(e){for(var t in e=e||{},e)this._model.hasOwnProperty(t)&&"undefined"!==typeof e[t]&&e[t]===e[t]&&e[t]!==1/0||delete e[t];return e},p.getJson=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.getProp(),n=!0,r=!1,a=void 0;try{for(var i,s=(0,u.default)(e.exclude||[]);!(n=(i=s.next()).done);n=!0){var o=i.value;delete t[o]}}catch(d){r=!0,a=d}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}var l=(0,c.default)(t);return l},p.normalize=(0,s.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.solet||!this.hasOwnProperty("ownerSid")){e.next=5;break}return this._data=this._data||{},e.next=4,this.getOwner();case 4:this._data.owner=e.sent;case 5:return e.abrupt("return",this);case 6:case"end":return e.stop()}},e,this)})),p.getOwner=(0,s.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.solet||!this.hasOwnProperty("ownerSid")){e.next=8;break}if(!this.ownerSid){e.next=7;break}return e.next=4,wo.Person.getOne({Person:{aiid:this.ownerSid}});case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",wo.Config.PERSON_UNKNOWN);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}},e,this)})),p._eventPool=null,p.addWatcher=function(e,t){null==this._eventPool&&(this._eventPool={}),"undefined"==typeof this._eventPool[e]&&(this._eventPool[e]=[]),this._eventPool[e].push(t)},p.dropWatcher=function(e,t){if(null!=this._eventPool&&this._eventPool[e]instanceof Array){var n=this._eventPool[e];for(var r in n)if(n[r]===t){n.splice(r,1);break}}},p.dropWatcherAll=function(e){null!=this._eventPool&&(this._eventPool[e]=void 0)},p.triggerEvent=function(e,t,n){var r={type:e,target:this};if(null!=this._eventPool&&this._eventPool[r.type]instanceof Array){var a=this._eventPool[r.type];for(var i in a)a[i](r,t,n)}},p.getMe=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,n=n||{},s=n.excludeSelf?a.filterProp(n[a._class]):a.getProp(n[a._class]),t.solet&&(delete s.whenInserted,delete s.whenUpdated),!("object"===typeof s&&s&&(0,o.default)(s).length>0)){e.next=11;break}return t.solet&&this.hasOwnProperty("mark")&&(s.mark="!="+wo.Config.MARK_DELETED),n.config=n.config||{},n.config.limit=1,e.next=10,this._database.getData({_table:this._table,where:s,config:n.config}).then(function(e){return(0,i.default)(e)&&e[0]?(a.setProp(e[0]),a):null}).catch(r.log);case 10:return e.abrupt("return",e.sent);case 11:return e.abrupt("return",null);case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p.setMe=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){var a,s,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(a=this,n=n||{},s=n.excludeSelf?a.filterProp(n[a._class]):a.getProp(n[a._class]),t.solet&&(delete s.aiid,delete s.uuid,"mysql"===wo.Config.dbType?(delete s.whenInserted,delete s.whenUpdated):"sqlite"===wo.Config.dbType&&this.hasOwnProperty("whenUpdated")&&(delete s.whenInserted,s.whenUpdated=new Date)),u={},!n.cond){e.next=9;break}u=a.filterProp(n.cond),e.next=18;break;case 9:if(!n[a._class]||!n[a._class][a._tablekey]){e.next=13;break}u[a._tablekey]=n[a._class][a._tablekey],e.next=18;break;case 13:if(!a[a._tablekey]){e.next=17;break}u[a._tablekey]=a[a._tablekey],e.next=18;break;case 17:return e.abrupt("return",null);case 18:if(!("object"===typeof u&&u&&(0,o.default)(u).length>0&&"object"===typeof s&&s&&(0,o.default)(s).length>0)){e.next=23;break}return t.solet&&this.hasOwnProperty("mark")&&(u.mark="!="+wo.Config.MARK_DELETED),e.next=22,this._database.setData({_table:this._table,where:u,set:s,config:{limit:1}}).then(function(e){return(0,i.default)(e)&&e[0]?(a.setProp(e[0]),a):null}).catch(r.log);case 22:return e.abrupt("return",e.sent);case 23:return e.abrupt("return",null);case 24:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p.addMe=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return a=this,n=n||{},s=n.excludeSelf?a.filterProp(n[a._class]):a.getProp(n[a._class]),t.solet&&("mysql"===wo.Config.dbType?(delete s.whenInserted,delete s.whenUpdated):"sqlite"===wo.Config.dbType&&this.hasOwnProperty("whenInserted")&&(s.whenUpdated=s.whenInserted=new Date)),this.hasOwnProperty("uuid")&&!s.uuid&&(s.uuid="".concat(a._class,"-").concat(l.v4())),e.next=7,this._database.addData({_table:this._table,set:s,config:{limit:1}}).then(function(e){return(0,i.default)(e)&&e[0]?(a.setProp(e[0]),a):null}).catch(r.log);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p.hideMe=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,t=t||{},a={},t.excludeSelf?a=n.filterProp(t[n._class]):t[n._class]&&t[n._class][n._tablekey]?a[n._tablekey]=t[n._class][n._tablekey]:this[n._tablekey]?a[n._tablekey]=this[n._tablekey]:a=n.getProp(t[n._class]),!("object"===typeof a&&a&&(0,o.default)(a).length>0)){e.next=9;break}if(!n.hasOwnProperty("mark")){e.next=9;break}return e.next=8,this._database.setData({_table:this._table,where:a,set:{mark:wo.Config.MARK_DELETED},config:{limit:1}}).then(function(e){return(0,i.default)(e)&&e[0]?(n.setProp(e[0]),n):null}).catch(r.log);case 8:return e.abrupt("return",e.sent);case 9:return e.abrupt("return",null);case 10:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),p.dropMe=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,t=t||{},a={},t.excludeSelf?a=n.filterProp(t[n._class]):t[n._class]&&t[n._class][n._tablekey]?a[n._tablekey]=t[n._class][n._tablekey]:this[n._tablekey]?a[n._tablekey]=this[n._tablekey]:a=n.getProp(t[n._class]),!("object"===typeof a&&a&&(0,o.default)(a).length>0)){e.next=8;break}return e.next=7,this._database.dropData({_table:this._table,where:a,config:{limit:1}}).then(function(e){return e}).catch(r.log);case 7:return e.abrupt("return",e.sent);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f._init=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.prototype._database=t,e.next=3,this.createTable();case 3:return e.abrupt("return",this);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.createTable=(0,s.default)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return d.info("Creating table "+this.prototype._table),e.next=3,this.prototype._database.createTable({_table:this.prototype._table,_model:this.prototype._model});case 3:return e.sent,d.info("******* Table is ready: "+this.prototype._table),e.abrupt("return",this);case 6:case"end":return e.stop()}},e,this)})),f.getCount=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=n||{},t.solet&&(n[this.name]=n[this.name]||{},n[this.name].starId=n[this.name].starId||n.starId),a=this.prototype.filterProp(n[this.name]),t.solet&&this.prototype._model["mark"]&&(a.mark="!="+wo.Config.MARK_DELETED),e.next=6,this.prototype._database.getNumber({_table:this.prototype._table,where:a,field:"*",func:"count"}).then(function(e){return e}).catch(r.log);case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.getSum=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=t||{},!t.field){e.next=6;break}return n=this.prototype.filterProp(t[this.name]),e.next=5,this.prototype._database.getNumber({_table:this.prototype._table,where:n,field:t.field,func:"sum"}).then(function(e){return e}).catch(r.log);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.getAllCall=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,!t._proc){e.next=5;break}return e.next=4,this.prototype._database.callProc(t).then(function(e){if((0,i.default)(e)){var t=!0,r=!1,a=void 0;try{for(var s,o=(0,u.default)(e);!(t=(s=o.next()).done);t=!0){var c=s.value;c.__proto__=n.prototype,c._class=n.name}}catch(l){r=!0,a=l}finally{try{t||null==o.return||o.return()}finally{if(r)throw a}}return e}return[]}).catch(r.log);case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",[]);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.getAll=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=n||{},a=this,t.solet&&(n[this.name]=n[this.name]||{},n[this.name].starId=n[this.name].starId||n.starId),s=a.prototype.filterProp(n[a.name]),t.solet&&this.prototype._model["mark"]&&(s.mark="!="+wo.Config.MARK_DELETED),e.next=7,this.prototype._database.getData({_table:this.prototype._table,where:s,config:n.config}).then(function(e){if((0,i.default)(e)){var t=!0,n=!1,r=void 0;try{for(var s,o=(0,u.default)(e);!(t=(s=o.next()).done);t=!0){var c=s.value;c.__proto__=a.prototype,c._class=a.name}}catch(l){n=!0,r=l}finally{try{t||null==o.return||o.return()}finally{if(n)throw r}}return e}return[]}).catch(r.log);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.getOne=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n||"object"!==typeof n[this.name]){e.next=6;break}return t.solet&&(n[this.name].starId=n[this.name].starId||n.starId),n.excludeSelf=!0,e.next=5,(new this).getMe(n);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.setOne=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n||"object"!==typeof n[this.name]){e.next=6;break}return t.solet&&(n.cond&&"object"===typeof n.cond?n.cond.starId=n.cond.starId||n.starId:"Person"===this.name&&n[this.name].aiid===n._passtoken.onlineSid?n.cond={aiid:n._passtoken.onlineSid}:"Person"!==this.name&&n[this.name].aiid&&(n.cond={aiid:n[this.name].aiid,ownerSid:n._passtoken.onlineSid,starId:n.starId})),n.cond&&"object"===typeof n.cond&&(n.excludeSelf=!0),e.next=5,(new this).setMe(n);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.addOne=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!n||"object"!==typeof n[this.name]){e.next=5;break}return t.solet&&(n[this.name].ownerSid=n._passtoken.onlineSid,n[this.name].starId=n[this.name].starId||n.starId),e.next=4,(new this).addMe(n);case 4:return e.abrupt("return",e.sent);case 5:return e.abrupt("return",null);case 6:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.hideOne=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.solet||!n._passtoken.isOnline()||"object"!==typeof n[this.name]){e.next=6;break}if("Person"===this.name||!n[this.name].aiid){e.next=6;break}return n[this.name]={aiid:n[this.name].aiid,ownerSid:n._passtoken.onlineSid,starId:n.starId},e.next=5,(new this).hideMe(n);case 5:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.dropOne=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t||"object"!==typeof t[this.name]){e.next=4;break}return e.next=3,(new this).dropMe(t);case 3:return e.abrupt("return",e.sent);case 4:return e.abrupt("return",null);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.dropAll=function(){var e=(0,s.default)(regeneratorRuntime.mark(function e(t){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this,t=t||{},a=n.prototype.filterProp(t[n.name]),!("object"===typeof a&&a&&(0,o.default)(a).length>0)){e.next=7;break}return e.next=6,this.prototype._database.dropData({_table:this.prototype._table,where:a,config:t.config}).then(function(e){return e}).catch(r.log);case 6:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.json2obj=function(e,t){if(t=["database","http"].indexOf(t)>=0?t:"http","string"===typeof e)try{var n=JSON.parse(unescape(e));"http"===t?e=n:"database"===t&&("object"===typeof n&&null!==n?e=n:"boolean"===typeof n&&(e=n))}catch(a){}else if("object"===typeof e&&e&&!(e instanceof Date))for(var r in e)e[r]=arguments.callee(e[r],t);return f.iso2Date(e)},f.iso2Date=function(e){if("string"===typeof e)/^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d\.\d\d\dZ$/.test(e)&&(e=new Date(e));else if("object"===typeof e&&e&&!(e instanceof Date))for(var t in e)e[t]=arguments.callee(e[t]);return e}}).call(this,n("c8ba"),n("5a52")["default"])},"448b":function(e,t,n){"use strict";var r=n("b1ee"),a=n.n(r);a.a},"5fba":function(e,t,n){"use strict";var r=n("288e");n("96cf");var a=r(n("3b8d")),i=n("77b1"),s=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};s.__proto__=i;var o=s.prototype;o.__proto__=i.prototype,o.validateMe=function(){return this.fee>=wo.Config.MIN_FEE_ActionStore||0},o.executableMe=(0,a.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Store.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.fee&&!0);case 4:case"end":return e.stop()}},e,this)})),o.executeMe=(0,a.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getOne({Account:{address:this.actorAddress}});case 2:if(t=e.sent,!(t&&t.balance>=this.fee)){e.next=7;break}return e.next=6,t.setMe({Account:{balance:t.balance-this.fee},cond:{address:t.address}});case 6:return e.abrupt("return",this);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}},e,this)})),s.api={}},"69f3":function(e,t,n){"use strict";n.r(t);var r=n("c2cd"),a=n("f03b");for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);n("448b");var s,o=n("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"70043120",null,!1,r["a"],s);t["default"]=u.exports},"77b1":function(e,t,n){"use strict";var r=n("288e"),a=r(n("cebc")),i=r(n("a8db")),s=r(n("f499"));n("96cf");var o=r(n("3b8d")),u=n("1b83"),c=n("4a21"),l={},d=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};d.__proto__=u;var f=d.prototype;f.__proto__=u.prototype,f._table=d.name,f._tablekey="hash",f._model={hash:{default:void 0,sqlite:"TEXT UNIQUE",mysql:"VARCHAR(64) PRIMARY KEY"},version:{default:0,sqlite:"INTEGER"},type:{default:"Action",sqlite:"TEXT",mysql:"VARCHAR(100)"},blockHash:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(64)"},timestamp:{default:void 0,sqlite:"TEXT",mysql:"CHAR(24)"},actorPubkey:{default:void 0,sqlite:"TEXT",mysql:"BINARY(32)"},actorAddress:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},actorSignature:{default:void 0,sqlite:"TEXT",mysql:"BINARY(64)"},toAddress:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},amount:{default:0,sqlite:"NUMERIC",mysql:"BIGINT"},fee:{default:0,sqlite:"NUMERIC",mysql:"BIGINT"},message:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(256)"},dataIndex:{default:void 0,sqlite:"TEXT",mysql:"VARCHAR(50)"},method:{default:void 0,sqlite:"TEXT"},json:{default:void 0,sqlite:"TEXT"}},f.packMe=(0,o.default)(regeneratorRuntime.mark(function e(){var t,n,r,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},n=t.seckey,r=t.pubkey,this.actorPubkey=r,this.actorAddress=c.pubkey2address(r),this.timestamp=new Date,e.next=6,this.signMe(n);case 6:return this.hashMe(),e.abrupt("return",this);case 8:case"end":return e.stop()}},e,this)})),f.signMe=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,c.sign(n,t);case 3:return this.actorSignature=e.sent,e.abrupt("return",this);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.hashMe=function(){return this.hash=c.hash(this.getJson({exclude:["hash","blockHash"]})),this},f.verifySig=(0,o.default)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=this.getJson({exclude:["hash","blockHash","actorSignature"]}),e.next=3,c.verify(t,this.actorSignature,this.actorPubkey);case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}},e,this)})),d.verifySig=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=new(d.getActionType(t.type))(t),e.next=3,n.verifySig();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.verifyAddress=function(){return this.actorAddress===c.pubkey2address(this.actorPubkey)},d.verifyAddress=function(e){var t=new(d.getActionType(e.type))(e);return t.verifyAddress()},f.verifyHash=function(){return this.hash===c.hash(this.getJson({exclude:["hash","blockHash"]}))},d.verifyHash=function(e){var t=new(d.getActionType(e.type))(e);return t.verifyHash()},f.validateMe=function(){var e=new(d.getActionType(this.type))(this);return e.validateMe()},d.validate=function(e){mylog.info("Validating action type=".concat(e.type," of hash=").concat(e.hash));var t=new(d.getActionType(e.type))(e);return t.validateMe()},f.executableMe=(0,o.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new(d.getActionType(this.type))(this),e.next=3,t.executableMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),d.executable=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=new(d.getActionType(t.type))(t),!n.hasOwnProperty("executableMe")){e.next=7;break}return e.next=4,n.executableMe();case 4:return e.abrupt("return",e.sent);case 7:return e.abrupt("return",!0);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),f.executeMe=(0,o.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=new(d.getActionType(this.type))(this),e.next=3,t.executeMe();case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}},e,this)})),d.execute=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return mylog.info("Excecuting action type=".concat(t.type," of hash=").concat(t.hash)),n=new(d.getActionType(t.type))(t),e.next=4,n.executeMe();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),d.getActionType=function(e){return l.ActionTypeDict||(l.ActionTypeDict=n("9736")),l.ActionTypeDict[e]},d.createTypedAction=function(e){return new(d.getActionType(e.type))(e)},d.buildUserAction=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n,r,a,i,s=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=s.length>1&&void 0!==s[1]?s[1]:{},r=n.seckey,a=n.pubkey,!(t&&t.type&&r&&a&&c.seckey2pubkey(r)===a)){e.next=8;break}if(i=new(d.getActionType(t.type))(t),i.actorPubkey=a,!i.validateMe()){e.next=8;break}return e.next=7,i.packMe({seckey:r,pubkey:a});case 7:return e.abrupt("return",i);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),d.getActionBatch=function(){var e={actionPool:JSON.parse((0,s.default)(d.actionPool)),totalAmount:d.actionPoolInfo.totalAmount,totalFee:d.actionPoolInfo.totalFee};return d.actionPool={},d.actionPoolInfo={totalAmount:0,totalFee:0},e},d.api={},d.api.getAction=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.getOne(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),d.api.getActionList=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.getAll(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),d.api.getMyActionList=(0,o.default)(regeneratorRuntime.mark(function e(){var t,n,r,s,o,u,c,l=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:{},n=t.Action,r=void 0===n?{}:n,s=t.config,o={},u=r.myAddress,c=(0,i.default)(r,["myAddress"]),e.next=5,d.getAll({Action:(0,a.default)({actorAddress:u},c),config:s});case 5:return o.fromMe=e.sent,e.next=8,d.getAll({Action:(0,a.default)({toAddress:u},c),config:s});case 8:return o.toMe=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}},e,this)})),d.api.prepare=function(){var e=(0,o.default)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if("string"===typeof t)try{t=JSON.parse(t)}catch(r){}if(!(t&&t.Action&&t.Action.type&&d.getActionType(t.Action.type)&&t.Action.hash)||d.actionPool[t.Action.hash]){e.next=24;break}if(n=new(d.getActionType(t.Action.type))(t.Action),e.t3=n.verifyAddress(),!e.t3){e.next=8;break}return e.next=7,n.verifySig();case 7:e.t3=e.sent;case 8:if(e.t2=e.t3,!e.t2){e.next=11;break}e.t2=n.verifyHash();case 11:if(e.t1=e.t2,!e.t1){e.next=14;break}e.t1=n.validateMe();case 14:if(e.t0=e.t1,!e.t0){e.next=19;break}return e.next=18,n.executableMe();case 18:e.t0=e.sent;case 19:if(!e.t0){e.next=24;break}return d.actionPool[t.Action.hash]=n,d.actionPoolInfo.totalAmount+=t.Action.amount||0,d.actionPoolInfo.totalFee+=t.Action.fee||0,e.abrupt("return",t.Action);case 24:return e.abrupt("return",null);case 25:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),d.actionPool={},d.actionPoolInfo={totalAmount:0,totalFee:0}},9736:function(e,t,n){"use strict";e.exports={ActionTransfer:n("a262"),ActionStore:n("5fba")}},a262:function(e,t,n){"use strict";var r=n("288e"),a=r(n("f499"));n("c5f6"),n("96cf");var i=r(n("3b8d")),s=n("77b1"),o=n("4a21"),u=e.exports=function(e){this._class=this.constructor.name,this.setProp(e),this.type=this.constructor.name};u.__proto__=s;var c=u.prototype;c.__proto__=s.prototype,c.validateMe=function(){return this.actorPubkey&&this.toAddress&&o.pubkey2address(this.actorPubkey)!==this.toAddress&&this.amount&&this.amount>0&&this.fee>=0},c.executableMe=(0,i.default)(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getBalance(this.actorAddress);case 2:return t=e.sent,e.abrupt("return",t>=this.amount+this.fee);case 4:case"end":return e.stop()}},e,this)})),c.executeMe=(0,i.default)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,wo.Account.getOne({Account:{address:this.actorAddress}});case 2:if(t=e.sent,!(t&&"multisig"!==t.type&&this.toAddress!=this.actorAddress&&t.balance>=this.amount+this.fee)){e.next=18;break}return e.next=6,t.setMe({Account:{balance:Number(t.balance)-Number(this.amount)-Number(this.fee),countAction:t.countAction+1},cond:{address:t.address}});case 6:return e.next=8,wo.Account.getOne({Account:{address:this.toAddress}});case 8:if(e.t0=e.sent,e.t0){e.next=13;break}return e.next=12,wo.Account.addOne({Account:{address:this.toAddress}});case 12:e.t0=e.sent;case 13:return n=e.t0,e.next=16,n.setMe({Account:{balance:Number(n.balance)+Number(this.amount),countAction:n.countAction+1},cond:{address:n.address}});case 16:return mylog.info("Excecuted action="+(0,a.default)(this)),e.abrupt("return",this);case 18:return e.abrupt("return",null);case 19:case"end":return e.stop()}},e,this)})),u.api={}},a8db:function(e,t,n){"use strict";n.r(t);var r=n("e265"),a=n.n(r),i=n("a4bb"),s=n.n(i);function o(e,t){if(null==e)return{};var n,r,a={},i=s()(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function u(e,t){if(null==e)return{};var n,r,i=o(e,t);if(a.a){var s=a()(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"default",function(){return u})},b1ee:function(e,t,n){var r=n("fccb");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("74213bfc",r,!0,{sourceMap:!1,shadowMode:!1})},c2cd:function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"sPage"},[n("v-uni-view",{staticClass:"sBody"},[n("v-uni-view",{staticClass:"sContent"},[n("v-uni-view",{staticClass:"sViewField"},[e._v("我的账号 "+e._s(e._SS.ownerAddress))]),n("v-uni-view",{staticClass:"sViewField"},[e._v("当前余额 "+e._s(e._SS.ownerBalance))]),n("v-uni-view",{staticClass:"sLabel"},[e._v("对方地址")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAddress",attrs:{type:"text",placeholder:"输入对方地址"},model:{value:e.toAddress,callback:function(t){e.toAddress=t},expression:"toAddress"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("转账金额")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-input",{staticClass:"sAmount",attrs:{type:"number",placeholder:"输入转账金额"},model:{value:e.amount,callback:function(t){e.amount=t},expression:"amount"}})],1),n("v-uni-view",{staticClass:"sLabel"},[e._v("加密签名")]),n("v-uni-view",{staticClass:"sInputField"},[n("v-uni-textarea",{staticClass:"sSecwordTextarea",attrs:{"auto-height":"true",focus:"true",maxlength:"-1",placeholder:"输入您当前登录账号的密语"},model:{value:e.ownerSecword,callback:function(t){e.ownerSecword=t},expression:"ownerSecword"}})],1),n("v-uni-view",{staticClass:"sFooterFloating"},[n("v-uni-button",{staticClass:"sSubmitButton",attrs:{loading:e.isLoading},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.transfer.apply(void 0,arguments)}}},[e._v("转 账")])],1),n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.test.apply(void 0,arguments)}}},[e._v("填入测试数据")])],1)],1)],1)},i=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return r})},dbda:function(e,t,n){"use strict";(function(e){var r=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("768b"));n("c5f6"),n("96cf");var i=r(n("3b8d")),s=r(n("15b8")),o=r(n("4a21")),u=r(n("77b1")),c={data:function(){return{i18nText:(0,s.default)({zhCN:{tPageTitle:"转出"},enUS:{tPageTitle:"Transfer"}}),ownerSecword:"",toAddress:"",amount:"",isLoading:!1}},computed:{localeText:function(){return this.i18nText[this._SS.i18n.activeLang]}},onLoad:function(){},onShow:function(){uni.setNavigationBarTitle({title:this.localeText.tPageTitle}),this._SC("i18n/setTabbar")},methods:{test:function(){this.toAddress="TAexMcBitGTCaNpmpgS7zPpPKJS5ogSp",this.ownerSecword="flee misery ceiling room easy add office survey pistol diagram example dumb",this.amount=100},transfer:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var n,r,i,s,c,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!1,o.default.isAddress(this.toAddress)){t.next=5;break}uni.showToast({image:"../static/Common.fail.png",title:"对方地址格式错误"}),t.next=42;break;case 5:if(this._SS.ownerAddress!==this.toAddress){t.next=9;break}uni.showToast({image:"../static/Common.fail.png",title:"不能转账给自己"}),t.next=42;break;case 9:if(!(this.amount>this._SS.ownerBalance)){t.next=13;break}uni.showToast({image:"../static/Common.fail.png",title:"转账金额超出了您的账户余额"}),t.next=42;break;case 13:if(o.default.isSecword(this.ownerSecword,{mode:"easy"})){t.next=17;break}uni.showToast({image:"../static/Common.fail.png",title:"密语格式错误"}),t.next=42;break;case 17:if(o.default.secword2address(this.ownerSecword)===this._SS.ownerAddress){t.next=21;break}uni.showToast({image:"../static/Common.fail.png",title:"密语不符合当前登录账号"}),t.next=42;break;case 21:return this.isLoading=!0,uni.showLoading({title:"加密签名..."}),n=o.default.secword2account(this.ownerSecword),t.next=26,u.default.buildUserAction({type:"ActionTransfer",amount:Number(this.amount),toAddress:this.toAddress},n);case 26:if(r=t.sent,!r){t.next=40;break}return e.log("action by client = ",r),t.next=31,this.uni2log.request({url:"api/Action/prepare",data:{Action:r}});case 31:i=t.sent,s=(0,a.default)(i,2),s[0],c=s[1],c=void 0===c?{}:c,l=c.data,c.statusCode,c.header,l&&"ActionTransfer"===l.type?(e.log("action from server = ",l),uni.showToast({image:"../static/Common.success.png",title:"转账申请已成功提交"})):uni.showToast({image:"../static/Common.fail.png",title:"转账申请提交失败"}),t.next=40;break;case 40:uni.hideLoading(),this.isLoading=!1;case 42:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}};t.default=c}).call(this,n("5a52")["default"])},f03b:function(e,t,n){"use strict";n.r(t);var r=n("dbda"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);t["default"]=a.a},fccb:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/******* LOG 私有定义 ************/.sBody[data-v-70043120]{padding-left:4%;padding-right:4%\n\n}@media screen and (min-width:751px){.sBody[data-v-70043120]{width:720px}}.sBody .sViewField[data-v-70043120]{background:#555;color:#fff;margin-bottom:%?40?%;padding:%?10?%;font-size:large\n\n}@media screen and (min-width:751px){.sBody .sViewField[data-v-70043120]{padding:10px;margin-bottom:30px}}.sBody .sInputField[data-v-70043120]{padding:%?9?%;color:#333;background:#eee;margin-bottom:%?40?%;box-sizing:border-box\n\n}@media screen and (min-width:751px){.sBody .sInputField[data-v-70043120]{padding:9px;margin-bottom:40px}}.sBody .sLabel[data-v-70043120]{color:#fff;font-size:small;padding-bottom:6px}.sBody .sSecwordTextarea[data-v-70043120]{width:100%}.sBody .sSecwordTextarea uni-textarea[data-v-70043120], .sBody .sSecwordTextarea .uni-textarea-compute[data-v-70043120]{word-break:normal}',""])}}]);