(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1104:function(e,t,r){"use strict";r(58),r(37),r(32),r(51),r(286),r(104);var n=r(17),o=(r(29),r(30),r(21),r(103),r(24),r(4)),c=(r(47),r(23)),l=r(26),d=r(124);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var y=r(8),v=y.toWei,w=y.fromWei,_={components:{EthPurchaseArrow:d.b},props:{disabled:Boolean,recommendedEthValue:{type:Number,default:void 0}},data:function(){return{type:"",step:.01,min:0,timerId:null,ethToReceive:.02}},computed:m(m(m(m(m({},Object(l.c)("mixer",["totalCalculations","maxEthToReceive","selectedCurrency"])),Object(l.c)("token",["toDecimals"])),Object(l.c)("metamask",["networkConfig"])),Object(l.c)("price",["tokenRate"])),{},{max:function(){return Number(this.toDecimals(this.maxEthToReceive,18,5))}}),watch:{ethToReceive:{handler:function(e){var t=this;clearTimeout(this.timerId),this.timerId=setTimeout((function(){t.type="";var r=e;""===e?(r=parseFloat(t.min)||0,t.type="is-warning"):r<0?r=parseFloat(t.min)||0:r>=t.max?r=t.max:r===t.recommendedEthValue&&(t.type="is-primary"),"is-warning"===t.type?t.$emit("isValidEthToReceive",!1):t.$emit("isValidEthToReceive",!0),t.ethToReceive=r,t.$store.commit("mixer/SAVE_ETH_TO_RECEIVE",{ethToReceive:v(r.toString())})}),1e3)}}},mounted:function(){this.ethToReceive=Number(w(this.$store.state.mixer.ethToReceive))},beforeDestroy:function(){clearTimeout(this.timerId)},methods:{onEthPurchaseClick:function(){this.$refs.input.focus()}}},f=r(14),T=Object(f.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field has-eth-purchase",class:[e.type,e.disabled?"is-disabled":""],on:{click:e.onEthPurchaseClick}},[r("div",{staticClass:"columns is-mobile"},[r("div",{staticClass:"column currency-container is-light"},[r("div",{staticClass:"currency"},[e._v(e._s(e.networkConfig.currencyName))]),e._v(" "),r("b-input",{ref:"input",attrs:{type:"number",step:e.step,max:e.max,min:e.min,disabled:e.disabled,"use-html5-validation":!1,expanded:"","custom-class":"hide-spinner"},on:{focus:function(t){return e.$emit("focus",t)},blur:function(t){return e.$emit("blur",t)}},model:{value:e.ethToReceive,callback:function(t){e.ethToReceive=e._n(t)},expression:"ethToReceive"}}),e._v(" "),r("div",{staticClass:"withdraw-data"},[r("div",{staticClass:"withdraw-data-item"},[e._v("\n          "+e._s(e.$t("rate"))+"\n          "),r("span",[e._v("\n            "+e._s(e.toDecimals(e.tokenRate,18))+" "+e._s(e.networkConfig.currencyName)+"/"+e._s(e.selectedCurrency)+"\n          ")])])])],1),e._v(" "),r("div",{staticClass:"column arrow-container"},[r("EthPurchaseArrow")],1),e._v(" "),r("div",{staticClass:"column currency-container is-inverted"},[r("div",{staticClass:"currency"},[e._v(e._s(e.selectedCurrency))]),e._v(" "),r("div",{staticClass:"input"},[e._v(e._s(e.toDecimals(e.totalCalculations.ethToReceiveInToken)))])])])])}),[],!1,null,null,null).exports,R=r(1108),C=r(281);function E(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?E(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):E(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=r(65),S=r(8),j=S.toWei,$=S.fromWei,x={components:{EthPurchase:T,WithdrawTotal:R.a},props:{total:{type:Object,default:function(){}},currency:{type:String,default:"ETH"},title:{type:String,default:"withdrawalSettings"}},data:function(){return{activeTab:0,customRelayerUrl:"",recommendedEthValue:.02,hasErrorCustomRelayer:{type:"",msg:""},timerId:null,checking:!1,isValidEthToReceive:!0,showCustomField:!1,isStatusLoading:!1,walletError:""}},computed:O(O(O(O(O({},Object(l.c)("metamask",["networkConfig","isLoggedIn"])),Object(l.c)("token",["toDecimals"])),Object(l.e)("mixer",["hasNetIdMissmatch"])),Object(l.e)("relayer",{relayerFromStore:function(e){return e.selectedRelayer},relayers:function(e){return e.validRelayers}})),{},{selectedRelayer:{get:function(){return this.$store.state.relayer.selectedRelayer.name},set:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,d,h;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if("custom"===e){r.next=17;break}return t.showCustomField=!1,t.hasErrorCustomRelayer={type:"",msg:""},n=t.networkConfig.relayers[e],o=n.url,c=n.name,t.isStatusLoading=!0,r.next=7,t.$store.dispatch("relayer/setupRelayer",{name:c,url:o});case 7:l=r.sent,d=l.isValid,h=l.error,t.customRelayerUrl="",t.checking=!1,t.isStatusLoading=!1,d?(t.hasErrorCustomRelayer.type="is-primary",t.hasErrorCustomRelayer.msg=t.$t("relayerStatusOk")):(t.hasErrorCustomRelayer.type="is-warning",t.hasErrorCustomRelayer.msg=h),console.log("isGoodRelayer",d,h),r.next=21;break;case 17:t.showCustomField=!0,t.hasErrorCustomRelayer={type:"",msg:""},t.checking=!0,t.SET_SELECTED_RELAYER({name:"custom",url:"",address:"",tornadoServiceFee:"0.0",miningServiceFee:"0.0",ethPrices:{torn:"1"}});case 21:case"end":return r.stop()}}),r)})))()}},ethToReceive:{get:function(){return Number($(this.$store.state.mixer.ethToReceive))},set:function(e){this.$store.commit("mixer/SAVE_ETH_TO_RECEIVE",{ethToReceive:j(e.toString())})}},withdrawType:{get:function(){return this.$store.state.mixer.withdrawType},set:function(e){this.$store.commit("mixer/SET_WITHDRAW_TYPE",{withdrawType:e})}},hasDisabledWallet:function(){if(!this.isLoggedIn)return{type:!0,msg:this.$t("connectYourWalletFirst")};if(this.hasNetIdMissmatch){var e=this.$store.state.mixer.withdrawNote.split("-"),t=Object(n.a)(e,4)[3];return{type:!0,msg:this.$t("changeNetworkInYourWallet",{networkName:k["netId".concat(t)].networkName})}}return{type:!1,msg:""}},isDisabledSave:function(){return(this.checking||"is-warning"===this.hasErrorCustomRelayer.type||!this.isValidEthToReceive||this.isStatusLoading)&&"relayer"===this.withdrawType||this.hasDisabledWallet.type&&"wallet"===this.withdrawType},isTokenSelected:function(){return"eth"!==this.$store.state.mixer.selectedMixer.currency},isNotLoggedIn:function(){return!this.isLoggedIn&&"wallet"===this.withdrawType},isMining:function(){return"TORN"===this.currency}}),watch:{withdrawType:{handler:function(e){"wallet"===e&&clearTimeout(this.timerId)}},customRelayerUrl:{handler:function(e){var t=this;if(e=e.toLowerCase().trim(),this.checking=!0,this.hasErrorCustomRelayer={type:"",msg:""},clearTimeout(this.timerId),0!==e.length||"custom"===this.selectedRelayer)return"http:"!==window.location.protocol&&e.startsWith("http:")?(this.hasErrorCustomRelayer.type="is-warning",this.hasErrorCustomRelayer.msg=this.$t("relayerShouldSupportSSL"),void(this.checking=!1)):void(this.timerId=setTimeout(Object(o.a)(regeneratorRuntime.mark((function r(){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.isStatusLoading=!0,r.next=3,t.$store.dispatch("relayer/setupRelayer",{url:e,name:"custom"});case 3:n=r.sent,o=n.isValid,c=n.error,o?(t.hasErrorCustomRelayer.type="is-primary",t.hasErrorCustomRelayer.msg=t.$t("relayerStatusOk")):(t.hasErrorCustomRelayer.type="is-warning",t.hasErrorCustomRelayer.msg=c),t.checking=!1,t.isStatusLoading=!1;case 9:case"end":return r.stop()}}),r)}))),1e3));this.checking=!1}}},mounted:function(){"custom"===this.selectedRelayer&&(this.customRelayerUrl=this.$store.state.relayer.selectedRelayer.url,this.showCustomField=!0),"wallet"===this.withdrawType&&(this.activeTab=1)},methods:O(O({},Object(l.d)("relayer",["SET_SELECTED_RELAYER"])),{},{onSetDefaults:function(){this.$store.commit("mixer/SET_WITHDRAW_TYPE",{withdrawType:"relayer"}),this.setDefaultSetup()},onSave:function(){this.$emit("close")},ethToReceiveErrorHandler:function(e){this.isValidEthToReceive=e},setDefaultSetup:function(){this.hasErrorCustomRelayer={type:"",msg:""},this.checking=!1,this.isValidEthToReceive=!0,this.selectedRelayer=this.relayers[0],this.$store.commit("mixer/SAVE_ETH_TO_RECEIVE",{ethToReceive:j(this.recommendedEthValue.toString())}),this.withdrawType="relayer",this.activeTab=0},onTabChange:function(e){this.withdrawType=0!==e?"wallet":"relayer"},onLogIn:function(){this.$buefy.modal.open({parent:this,component:C.a,hasModalCard:!0,width:440})}})},D=Object(f.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"modal-card box box-modal"},[r("header",{staticClass:"box-modal-header is-spaced"},[r("div",{staticClass:"box-modal-title"},[e._v(e._s(e.$t("withdrawalSettings")))]),e._v(" "),r("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}})]),e._v(" "),r("b-tabs",{staticClass:"is-modal",attrs:{animated:!1},on:{input:e.onTabChange},model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[r("b-tab-item",[r("template",{slot:"header"},[e._v("\n        "+e._s(e.$t("relayer"))+"\n        "),r("b-tooltip",{attrs:{label:e.$t("relayerTooltip"),position:"is-right",multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),e._v(" "),r("div",{staticClass:"field"},[r("b-field",{attrs:{label:"Relayer"}},[r("b-dropdown",{attrs:{expanded:"","aria-role":"list"},model:{value:e.selectedRelayer,callback:function(t){e.selectedRelayer=t},expression:"selectedRelayer"}},[r("div",{staticClass:"control",class:{"is-loading":e.isStatusLoading},attrs:{slot:"trigger"},slot:"trigger"},[r("div",{staticClass:"input"},[r("span",[e._v(e._s("custom"===e.selectedRelayer||e.showCustomField?e.$t("custom"):e.selectedRelayer))])])]),e._v(" "),e._l(e.relayers,(function(t){return r("b-dropdown-item",{key:t,attrs:{value:t,"aria-role":"listitem"}},[e._v("\n              "+e._s(t)+"\n            ")])})),e._v(" "),r("b-dropdown-item",{attrs:{value:"custom","aria-role":"listitem"}},[e._v("\n              "+e._s(e.$t("custom"))+"\n            ")])],2)],1),e._v(" "),e.showCustomField?r("div",{staticClass:"field has-custom-field"},[r("b-input",{ref:"customInput",attrs:{type:"url",placeholder:e.$t("pasteYourRelayerUrlorEnsRecord"),"custom-class":e.hasErrorCustomRelayer.type,"use-html5-validation":!1},model:{value:e.customRelayerUrl,callback:function(t){e.customRelayerUrl=t},expression:"customRelayerUrl"}})],1):e._e(),e._v(" "),r("div",{staticClass:"withdraw-data is-spaced"},[r("div",{staticClass:"withdraw-data-item"},[e._v("\n            "+e._s(e.$t("relayerFee"))+"\n            "),r("span",[e._v("\n              "+e._s("TORN"===e.currency?e.relayerFromStore.miningServiceFee:e.relayerFromStore.tornadoServiceFee)+"%\n            ")])])]),e._v(" "),e.hasErrorCustomRelayer.msg?r("p",{staticClass:"help",class:e.hasErrorCustomRelayer.type},[e._v("\n          "+e._s(e.hasErrorCustomRelayer.msg)+"\n        ")]):e._e()],1),e._v(" "),e.isTokenSelected?r("b-field",[r("template",{slot:"label"},[e._v("\n          "+e._s(e.$t("ethPurchase"))+"\n          "),r("b-tooltip",{attrs:{label:e.$t("ethPurchaseTooltip"),size:"is-small",position:"is-right",multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),e._v(" "),r("eth-purchase",{attrs:{"recommended-eth-value":e.recommendedEthValue},on:{isValidEthToReceive:e.ethToReceiveErrorHandler}})],2):e._e(),e._v(" "),r("WithdrawTotal",{directives:[{name:"show",rawName:"v-show",value:!e.isMining,expression:"!isMining"}],attrs:{total:e.total,currency:e.currency}})],2),e._v(" "),r("b-tab-item",[r("template",{slot:"header"},[e._v("\n        "+e._s(e.$t("wallet"))+"\n        "),r("b-tooltip",{attrs:{label:e.$t("walletTooltip"),position:"is-left",multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),e._v(" "),r("fieldset",{attrs:{disabled:e.hasDisabledWallet.type}},[r("div",{staticClass:"notice is-warning"},[r("div",{staticClass:"notice__p"},[e._v(e._s(e.$t("withdrawWalletWarning")))]),e._v(" "),e.hasDisabledWallet.type?r("div",{staticClass:"tooltip",attrs:{"data-label":e.hasDisabledWallet.msg}}):e._e()]),e._v(" "),r("WithdrawTotal",{directives:[{name:"show",rawName:"v-show",value:!e.isMining,expression:"!isMining"}],attrs:{total:e.total,currency:e.currency}})],1)],2)],1),e._v(" "),r("div",{staticClass:"buttons buttons__halfwidth"},[r("b-button",{attrs:{type:"is-primary",outlined:""},on:{mousedown:function(e){return e.preventDefault()},click:e.onSetDefaults}},[e._v("\n      "+e._s(e.$t("setToDefaults"))+"\n    ")]),e._v(" "),e.isNotLoggedIn?r("b-button",{attrs:{type:"is-primary"},on:{click:e.onLogIn}},[e._v("\n      "+e._s(e.$t("connect"))+"\n    ")]):r("b-button",{attrs:{type:"is-primary",disabled:e.isDisabledSave},on:{click:e.onSave}},[e._v("\n      "+e._s(e.$t("save"))+"\n    ")])],1)],1)}),[],!1,null,null,null);t.a=D.exports},1108:function(e,t,r){"use strict";r(58),r(37),r(32),r(51),r(104),r(29),r(30),r(21),r(103);var n=r(23),o=r(26);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=r(8),h=d.fromWei,m=d.toBN,y={props:{total:{type:Object,default:function(){}},currency:{type:String,default:"ETH"}},computed:l(l(l(l(l(l({},Object(o.e)("mixer",["withdrawType","ethToReceive","selectedMixer"])),Object(o.e)("gasPrices",["fast"])),Object(o.c)("metamask",["networkConfig"])),Object(o.c)("gasPrices",["fastGasPrice"])),Object(o.c)("token",["toDecimals","fromDecimals"])),{},{ethToReceive:{get:function(){return Number(h(this.$store.state.mixer.ethToReceive))}},networkFee:function(){return h(m(this.fastGasPrice).mul(m("500000")))},relayerFee:function(){var e=this.selectedMixer.amount,t=m(this.fromDecimals(e.toString())),r=this.$store.state.relayer.selectedRelayer.tornadoServiceFee,n=Math.floor(r)===r?0:r.toString().split(".")[1].length,o=Math.pow(10,n);return t.mul(m(r*o)).div(m(100*o))},isTokenSelected:function(){return"relayer"===this.withdrawType&&"eth"!==this.selectedMixer.currency&&"torn"!==this.currency}})},v=r(14),component=Object(v.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"field"},[r("div",{staticClass:"label"},[e._v("\n    "+e._s(e.$t("total"))+"\n  ")]),e._v(" "),r("div",{staticClass:"withdraw-data"},[e.isTokenSelected?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("noteBalance"))+"\n      "),r("span",[e._v("\n        "+e._s(e.selectedMixer.amount)+"\n        "+e._s(e.currency)+"\n      ")])]):e._e(),e._v(" "),"relayer"===e.withdrawType?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("gasPrice"))+"\n      "),r("span",[e._v(e._s(e.fast)+" Gwei")])]):e._e(),e._v(" "),"relayer"===e.withdrawType?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("networkFee"))+"\n      "),r("span",[e._v(e._s(e.networkFee)+" ETH")])]):e._e(),e._v(" "),"relayer"===e.withdrawType?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("relayerFee"))+"\n      "),r("span",[e._v(e._s(e.toDecimals(e.relayerFee))+" "+e._s(e.currency))])]):e._e(),e._v(" "),"relayer"===e.withdrawType?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("totalFee"))+"\n      "),r("span",[e._v(e._s(e.toDecimals(e.total.relayerFee))+" "+e._s(e.currency))])]):e._e(),e._v(" "),e.isTokenSelected?r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("ethPurchase"))+"\n      "),r("span",[e._v(e._s(e.toDecimals(e.total.ethToReceiveInToken))+" "+e._s(e.currency))])]):e._e(),e._v(" "),"relayer"===e.withdrawType?r("hr"):e._e(),e._v(" "),r("div",{staticClass:"withdraw-data-item"},[e._v("\n      "+e._s(e.$t("tokensToReceive"))+"\n      "),r("span",[e._v(e._s(e.toDecimals(e.total.total))+" "+e._s(e.currency))])]),e._v(" "),e.isTokenSelected?r("div",{staticClass:"withdraw-data-item"},[r("span",{staticClass:"is-alone"},[e._v(e._s(e.ethToReceive)+" "+e._s(e.networkConfig.currencyName))])]):e._e()])])}),[],!1,null,null,null);t.a=component.exports}}]);