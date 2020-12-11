(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1105:function(t,e,r){"use strict";r(24);var n=r(4),o={components:{},props:{onAction:{type:Function,required:!0},title:{type:String,required:!0},description:{type:String,default:"Please click Confirm to initiate the of your action"},warningMessage:{type:String,default:"You already have an active transaction, wait for its execution"},isWarning:{type:Boolean,default:!1}},data:function(){return{}},computed:{},methods:{handleAction:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.onAction();case 3:return e.prev=3,t.onClose(),e.finish(3);case 6:case"end":return e.stop()}}),e,null,[[0,,3,6]])})))()},onClose:function(){this.$emit("close")},openTxsHistory:function(){this.$router.push({path:"/mining/txs"}),this.onClose()}}},c=r(14),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-card box box-modal"},[r("header",{staticClass:"box-modal-header is-spaced"},[r("div",{staticClass:"box-modal-title"},[t._v(t._s(t.title))]),t._v(" "),r("button",{staticClass:"delete",attrs:{type:"button"},on:{click:t.onClose}})]),t._v(" "),r("p",{staticClass:"p is-size-6"},[t._v("\n    "+t._s(t.description)+"\n  ")]),t._v(" "),t.isWarning?r("b-notification",{staticClass:"main-notification",attrs:{type:"is-warning",closable:!1}},[r("strong",[t._v(t._s(t.$t("warning")))]),t._v("\n    "+t._s(t.warningMessage)+"\n    "),r("b-button",{attrs:{type:"is-primary-link",size:"is-underlined"},on:{click:t.openTxsHistory}},[t._v("\n      "+t._s(t.$t("openTxsHistory"))+"\n    ")])],1):t._e(),t._v(" "),r("div",{staticClass:"buttons buttons__halfwidth"},[r("b-button",{attrs:{type:"is-primary",outlined:""},on:{click:t.onClose}},[t._v("\n      "+t._s(t.$t("cancelButton"))+"\n    ")]),t._v(" "),r("b-button",{attrs:{type:"is-primary"},on:{click:t.handleAction}},[t._v("\n      "+t._s(t.$t("confirm"))+"\n    ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports},1106:function(t,e,r){"use strict";r(58),r(37),r(32),r(51),r(29),r(30),r(21);var n=r(23),o=r(26),c=r(279);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=r(8).fromWei,h={components:{NumberFormat:c.a},computed:d(d(d({},Object(o.c)("account",["currentRewardBalance"])),Object(o.e)("torn",{balance:function(t){return v(t.balance)}})),{},{getBalance:function(){return this.currentRewardBalance.toString()}})},m=r(14),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"columns mining-columns is-multiline is-centered is-mobile"},[r("div",{staticClass:"column is-balance"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("accountBalance")))]),t._v(" "),r("div",{staticClass:"info-value has-tooltip"},[r("span",[r("number-format",{attrs:{value:t.getBalance}}),t._v(" AP")],1),t._v(" "),r("b-tooltip",{attrs:{position:"is-top",label:t.$t("apTooltip"),multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),t._v(" "),r("div",{staticClass:"info-line"})]),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"column is-balance has-text-right-desktop"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("publicBalance")))]),t._v(" "),r("div",{staticClass:"info-value"},[r("number-format",{attrs:{value:t.balance}}),t._v(" TORN")],1),t._v(" "),r("div",{staticClass:"info-line"})])],2)}),[],!1,null,null,null);e.a=component.exports},1130:function(t,e,r){"use strict";r.r(e);r(58),r(37),r(32),r(51),r(103),r(104);var n=r(17),o=(r(24),r(4)),c=(r(206),r(29),r(30),r(21),r(23)),l=r(26),d=r(1104),v=r(1105),h=r(1106);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=r(65),_=r(8),y=_.isHexStrict,C=_.toBN,$=_.toWei,x=_.fromWei,O={components:{MiningColumns:h.a},data:function(){return{error:!1,note:"",showDetails:!1,errorNotification:!1}},computed:f(f(f(f(f(f({},Object(l.c)("metamask",["netId"])),Object(l.c)("relayer",["checkActiveMiningJobs"])),Object(l.c)("farmer",["noteStats","relayerFee"])),Object(l.e)("gasPrices",["fast"])),Object(l.e)("farmer",["redirectNote"])),{},{networkFee:function(){return x(C($(this.fast.toString(),"gwei")).mul(C(53e4)))},withdrawType:{get:function(){return this.$store.state.mixer.withdrawType},set:function(t){this.$store.commit("mixer/SET_WITHDRAW_TYPE",{withdrawType:t})}},totalWithdrawal:function(){return"relayer"===this.withdrawType?C(this.noteStats.balance).sub(C(this.relayerFee)).toString(10):C(this.noteStats.balance).toString(10)},rewardIsNotEnough:function(){return"relayer"===this.withdrawType&&C(this.noteStats.balance).lt(C(this.relayerFee))},hasError:function(){return this.errorNotification||this.error},isActiveJob:function(){return this.checkActiveMiningJobs}}),watch:{note:{handler:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,v,h,m,f,_,y,C;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(e.error=!1,e.errorNotification=!1,t){r.next=4;break}return r.abrupt("return");case 4:r.prev=4,e.validateNote(t),r.next=13;break;case 8:return r.prev=8,r.t0=r.catch(4),console.error("e",r.t0),e.error=r.t0.message,r.abrupt("return");case 13:if(r.prev=13,e.$store.dispatch("loading/enable",{message:e.$t("gettingTheNoteData")}),e.hasErrorNote){r.next=43;break}if(o=t.split("-"),c=Object(n.a)(o,5),l=c[0],d=c[1],v=c[2],h=c[3],m=c[4],"tornado"===l){r.next=21;break}return e.$store.dispatch("loading/disable"),e.note="tornado-".concat(d,"-").concat(v,"-").concat(h,"-").concat(m),r.abrupt("return");case 21:return f=Number(h)!==Number(e.netId),e.$store.commit("mixer/SAVE_NET_ID_MISSMATCH",f),e.$store.commit("metamask/SET_NET_ID",h),f&&e.$store.dispatch("relayer/pickRandomRelayer",{},{root:!0}),r.next=27,e.$store.dispatch("mixer/loadDepositData",{withdrawNote:e.note});case 27:if(!(_=r.sent).isSpent){r.next=35;break}return r.next=31,e.$store.dispatch("mixer/loadWithdrawalData",{withdrawNote:e.note});case 31:C=r.sent,y=C.withdrawalBlock,r.next=36;break;case 35:y=_.depositBlock+_.depositsPast;case 36:if(_.isSpent){r.next=38;break}throw new Error("noteHasNotBeenSpentMining");case 38:return e.$store.commit("farmer/SAVE_NOTE",{note:t,instance:w["netId".concat(h)].tokens.eth.mixerAddress[v],depositBlock:_.depositBlock,withdrawalBlock:y}),r.next=41,e.$store.dispatch("farmer/isClaimedNote");case 41:return r.next=43,e.$store.dispatch("farmer/isGoodForMining");case 43:r.next=49;break;case 45:r.prev=45,r.t1=r.catch(13),console.error("e",r.t1),e.errorNotification=r.t1.message;case 49:return r.prev=49,e.$store.dispatch("loading/disable"),r.finish(49);case 52:case"end":return r.stop()}}),r,null,[[4,8],[13,45,49,52]])})))()}}},mounted:function(){this.$store.dispatch("relayer/pickRandomRelayer",{},{root:!0}),this.redirectNote&&this.redirectNote!==this.note&&(this.note=this.redirectNote,this.$store.dispatch("farmer/saveRedirectNote",{note:""},{root:!0}))},methods:{openConfirmModal:function(){this.$buefy.modal.open({parent:this,component:v.a,hasModalCard:!0,width:440,props:{title:this.$t("confirmModal.reward.title"),onAction:this.reward,isWarning:this.isActiveJob,warningMessage:this.$t("confirmModal.reward.warningMessage"),description:this.$t("confirmModal.reward.description")}})},reward:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.$store.dispatch("loading/enable",{message:t.$t("generatingProof")}),e.next=4,t.$store.dispatch("farmer/prepareReward");case 4:return r="wallet"===t.withdrawType?"farmer/reward":"relayer/relayMiningReward",e.next=7,t.$store.dispatch(r);case 7:t.note="",e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("reward",e.t0.message),t.$store.dispatch("notice/addNoticeWithInterval",{notice:{untranslatedTitle:e.t0.message,type:"danger"}});case 14:return e.prev=14,t.$store.dispatch("loading/disable"),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})))()},validateNote:function(t){var e=t.split("-")[4];if("undefined"==typeof WebAssembly)throw new TypeError(this.$t("turnOnWasm"));if(!e||e.length<126||!y(e))throw new TypeError(this.$t("noteIsInvalid"));if("eth"!==t.split("-")[1])throw new Error(this.$t("onlyEthNotes"))},onSettings:function(){var t=this,e=this.withdrawType,r=this.$store.state.relayer.selectedRelayer;this.$buefy.modal.open({parent:this,component:d.a,hasModalCard:!0,width:440,props:{total:{},currency:"TORN",title:"claimSettings"},onCancel:function(){t.cancelSettingsEditing({withdrawType:e,relayer:r})},customClass:"is-pinned"})},cancelSettingsEditing:function(t){var e=t.withdrawType,r=t.relayer;this.$store.dispatch("relayer/setupRelayer",r),this.$store.commit("mixer/SET_WITHDRAW_TYPE",{withdrawType:e})}}},k=r(14),component=Object(k.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"tab-item"},[r("mining-columns",[r("div",{staticClass:"column is-container"},[r("b-field",{attrs:{label:t.$t("note"),"custom-class":t.error?"has-text-warning":"",type:t.error?"is-warning":"",message:t.error?t.error:"",expanded:""}},[r("b-input",{attrs:{placeholder:t.$t("pleaseEnterYourNote"),"custom-class":t.error?"is-warning":"",expanded:""},model:{value:t.note,callback:function(e){t.note=e},expression:"note"}})],1),t._v(" "),r("b-notification",{staticClass:"main-notification",attrs:{active:!!t.errorNotification,type:"is-warning",closable:!1}},[r("strong",[t._v(t._s(t.$t("warning")))]),t._v(" "),t.errorNotification?r("i18n",{attrs:{path:t.errorNotification},scopedSlots:t._u([{key:"link",fn:function(){return[r("a",{attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.$t(t.errorNotification+"Link")))])]},proxy:!0}],null,!1,3495775053)}):t._e()],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.note&&!t.hasError,expression:"note && !hasError"}],staticClass:"field"},[r("div",{staticClass:"stats-columns"},[r("div",{staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v("\n              "+t._s(t.$t("reward"))+"\n              "),r("b-tooltip",{attrs:{position:"is-top",label:t.$t("rewardTooltip"),multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.noteStats.balance)+" AP")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"relayer"===t.withdrawType,expression:"withdrawType === 'relayer'"}],staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v("\n              "+t._s(t.$t("relayerFee"))+"\n              "),r("b-tooltip",{attrs:{label:t.$t("claimRelayerTooltip"),position:"is-top",multilined:""}},[r("button",{staticClass:"button is-primary has-icon"},[r("span",{staticClass:"icon icon-info"})])])],1),t._v(" "),r("div",{staticClass:"info-value"},[t._v("-"+t._s(t.relayerFee)+" AP")])]),t._v(" "),r("div",{staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("total")))]),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.totalWithdrawal)+" AP")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("blocks")))]),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.noteStats.blocks))])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("rate")))]),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.noteStats.rate)+" AP/Block")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("networkFee")))]),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.networkFee)+" ETH")])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"showDetails"}],staticClass:"stats-column"},[r("div",{staticClass:"info-name"},[t._v(t._s(t.$t("gasPrice")))]),t._v(" "),r("div",{staticClass:"info-value"},[t._v(t._s(t.fast)+" Gwei")])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!t.showDetails,expression:"!showDetails"}],staticClass:"buttons is-centered"},[r("b-button",{attrs:{type:"is-text","icon-left":"more"},on:{click:function(e){t.showDetails=!0}}},[t._v("\n            "+t._s(t.$t("moreDetails"))+"\n          ")])],1),t._v(" "),r("div",{staticClass:"field is-grouped"},[r("p",{staticClass:"control is-expanded"},[r("b-tooltip",{attrs:{label:""+t.$t("rewardIsNotEnough"),position:"is-top",active:t.rewardIsNotEnough,multilined:""}},[r("b-button",{attrs:{type:"is-primary",outlined:"","icon-left":"arrow-down",disabled:t.rewardIsNotEnough,expanded:""},on:{click:t.openConfirmModal}},[t._v(t._s(t.$t("claimReward")))])],1)],1),t._v(" "),r("p",{staticClass:"control"},[r("b-button",{attrs:{type:"is-primary",outlined:"","icon-right":"settings"},on:{click:t.onSettings}})],1)])])],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);