(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,p=[];d<o.length;d++)r=o[d],n[r]&&p.push(n[r][0]),n[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},n={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0027":function(t,e,s){"use strict";var a=s("442b"),n=s.n(a);n.a},"034f":function(t,e,s){"use strict";var a=s("1356"),n=s.n(a);n.a},"03b4":function(t,e,s){"use strict";var a=s("3c15"),n=s.n(a);n.a},"09b6":function(t,e,s){"use strict";var a=s("309f"),n=s.n(a);n.a},1:function(t,e){},1356:function(t,e,s){},"2ad1":function(t,e,s){},"2d2c":function(t,e,s){},"309f":function(t,e,s){},3625:function(t,e,s){t.exports=s.p+"img/bg.f1d58b8c.jpg"},"3c15":function(t,e,s){},"3fa3":function(t,e,s){t.exports=s.p+"media/soft_notification.9817d55f.mp3"},"442b":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{attrs:{id:"app"}},[s("router-view",{attrs:{id:"main"}})],1)},i=[],r={name:"App",mounted(){},data(){return{}},methods:{}},o=r,c=(s("034f"),s("2877")),l=s("6544"),u=s.n(l),d=s("7496"),p=Object(c["a"])(o,n,i,!1,null,null,null),h=p.exports;u()(p,{VApp:d["a"]});var v=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-view")},f=[],g={name:"Home"},b=g,k=Object(c["a"])(b,m,f,!1,null,"34d844e4",null),y=k.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-container"},[s("div",{staticClass:"about-us",staticStyle:{"margin-top":"10%"}},[s("AboutUs",{staticStyle:{width:"85%",margin:"auto"}})],1),s("div",{staticClass:"chat-box-out"},[s("div",{staticClass:"chat-box-in"},[t._m(0),s("div",{ref:"container",staticClass:"chat-box",attrs:{id:"chat-box"}},[t._m(1),t.currentUserMessage?s("UserSide",{attrs:{"current-user-message":t.currentUserMessage}}):t._e(),t.watsonSide?s("WatsonSide",{attrs:{"watson-message":t.watsonReply}}):t._e(),t.showOptions?s("WatsonOption",{attrs:{"option-value":t.options},on:{"get-option-value":t.getOptionValue}}):t._e(),t.botReply?s("BotTyping",{attrs:{"is-typing":t.loader}}):t._e(),t.botReply?s("Card",{attrs:{"news-data":t.newsFeed}}):t._e(),s("transition",{attrs:{name:"fade"}},[t.showQuickR?s("div",{staticClass:"quick-reply-mobile-section"},[s("h5",{staticStyle:{"text-align":"center","font-size":"17px"}},[t._v("Quick Actions")]),s("hr",{staticStyle:{"border-color":"white"}}),t._l(t.quickAction,function(e,a){return s("QuickActionMobile",{key:a,attrs:{loader:t.loader,action:e,text:e},on:{"get-quick-reply":function(s){return t.getQuickReply(e)}}})})],2):t._e()])],1),s("div",{staticClass:"chat-box-bottom"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage()}}},[s("v-row",{staticStyle:{"margin-top":"-10px"},attrs:{justify:"center"}},[s("v-col",{staticClass:"quick-reply-mobile",attrs:{cols:"2",md:"1"}},[t.showQuickR?s("span",[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#00CC33"},on:{click:function(e){t.showQuickR=!t.showQuickR}}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-minus")])],1)],1):s("span",[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#00CC33"},on:{click:function(e){t.showQuickR=!t.showQuickR}}},[s("v-icon",{attrs:{dark:""}},[t._v("mdi-plus")])],1)],1)]),s("v-col",{attrs:{cols:"8",sm:"12",md:"12",lg:"12",xl:"12"}},[s("v-text-field",{attrs:{color:"#00CC33",label:"",dark:t.nightMode,autocomplete:"off",autofocus:"",disabled:t.loader,loading:!t.getServiceReply,placeholder:"Type here..."},model:{value:t.getUserMessage,callback:function(e){t.getUserMessage=e},expression:"getUserMessage"}})],1),s("v-col",{staticClass:"quick-reply-mobile",attrs:{cols:"2",md:"4"}},[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"#00CC33"},on:{click:function(e){return t.sendMessage()}}},[s("v-icon",{staticStyle:{"padding-left":"3px"},attrs:{dark:""}},[t._v("mdi-send")])],1)],1)],1)],1)])])]),s("div",{staticClass:"quick-reply"},[s("h5",{staticStyle:{"text-align":"center"}},[t._v("Quick Actions")]),s("hr",{staticStyle:{"border-color":"white"}}),s("br"),t._l(t.quickAction,function(e,a){return s("QuickAction",{key:a,attrs:{loader:t.loader,action:e,text:e},on:{"get-quick-reply":function(s){return t.getQuickReply(e)}}})}),t._m(2),t._m(3)],2)])},_=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-box-top"},[s("h5",[s("i",{staticClass:"mdi mdi-checkbox-blank-circle",staticStyle:{color:"#00CC33","font-size":"15px",padding:"2px"}}),t._v("Bam Bam\n        ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-box-watson"},[s("i",{staticClass:"mdi mdi-dots-vertical"}),s("span",{staticClass:"watson"},[t._v("\n            Hello ! I'm Bam Bam. I can help you get top stories.\n          ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("audio",{attrs:{id:"userAudio"}},[a("source",{attrs:{src:s("a321"),type:"audio/mpeg"}}),t._v("\n      Your browser does not support the audio element.\n    ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("audio",{attrs:{id:"botAudio"}},[a("source",{attrs:{src:s("3fa3"),type:"audio/mpeg"}}),t._v("\n      Your browser does not support the audio element.\n    ")])}],w=s("8055"),C=s.n(w),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-box-user"},[s("span",{staticClass:"user"},[t._v(t._s(t.currentUserMessage))])])},M=[],O={data(){return{}},props:["currentUserMessage"]},j=O,R=(s("d7a52"),Object(c["a"])(j,S,M,!1,null,"6ee7ebe8",null)),A=R.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chat-box-watson"},[s("i",{staticClass:"mdi mdi-dots-vertical"}),s("span",{staticClass:"watson"},[t._v("\n      "+t._s(t.watsonMessage)+"\n    ")])])},V=[],T={data(){return{}},props:["watsonMessage"]},B=T,Q=(s("862a"),Object(c["a"])(B,E,V,!1,null,"562adf94",null)),U=Q.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400"}},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:s("3625")}},[a("v-card-title",[t._v("Let me tell you a joke")])],1),a("v-card-text",{staticClass:"text--primary"},[a("div",[t._v("The Bot is a virtual assistant.")]),a("div",[t._v("It can help with several things. Hit the quick reply button.")])]),a("v-card-actions")],1)},q=[],I=s("b0af"),D=s("99d9"),W=s("adda"),P={},F=Object(c["a"])(P,H,q,!1,null,null,null),L=F.exports;u()(F,{VCard:I["a"],VCardActions:D["a"],VCardText:D["b"],VCardTitle:D["c"],VImg:W["a"]});var N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"chat-box-watson"},[s("i",{staticClass:"mdi mdi-dots-vertical"}),s("span",{staticClass:"watson"},[s("v-card",{staticClass:"mx",attrs:{"max-width":"350"}},[s("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.newsData.imageUrl}}),s("v-card-text",{staticClass:"text--primary"},[s("div"),s("div",[t._v(t._s(t.newsData.title))])]),s("v-card-actions",{staticStyle:{"margin-top":"-10px"}},[s("v-btn",{attrs:{color:"#00CC33",text:""},on:{click:function(e){return t.goToPage(t.newsData.source)}}},[t._v("\n            Explore\n          ")])],1)],1)],1)])])},z=[],J={data(){return{}},props:["newsData"],methods:{goToPage(t){window.open(t,"_blank")}}},Y=J,G=(s("936a"),s("8336")),K=Object(c["a"])(Y,N,z,!1,null,"0023aebe",null),X=K.exports;u()(K,{VBtn:G["a"],VCard:I["a"],VCardActions:D["a"],VCardText:D["b"],VImg:W["a"]});var Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center ma-2 quick-reply-button"},[s("v-btn",{attrs:{dark:"",color:"#00CC33",disabled:t.loader},on:{click:t.getQuickReply}},[t._v(t._s(t.action))]),s("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n        "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:t.closeSnackBar}},[t._v("\n            Close\n        ")])],1)],1)},tt=[],et={data(){return{snackbar:!1}},props:["action","text","loader"],methods:{getQuickReply(){this.snackbar=!1,this.snackbar=!0,setTimeout(function(){this.snackbar=!1},2e3),this.$emit("get-quick-reply")},closeSnackBar(){this.snackbar=!1}}},st=et,at=(s("03b4"),s("2db4")),nt=Object(c["a"])(st,Z,tt,!1,null,null,null),it=nt.exports;u()(nt,{VBtn:G["a"],VSnackbar:at["a"]});var rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-center ma-2 quick-reply-button-mobile"},[s("v-btn",{attrs:{dark:"",color:"#00CC33",small:"",disabled:t.loader},on:{click:t.getQuickReply}},[t._v(t._s(t.action))]),s("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n        "),s("v-btn",{attrs:{color:"pink",text:""},on:{click:t.closeSnackBar}},[t._v("\n            Close\n        ")])],1)],1)},ot=[],ct={data(){return{snackbar:!1}},props:["action","text","loader"],methods:{getQuickReply(){this.snackbar=!1,this.snackbar=!0,setTimeout(function(){this.snackbar=!1},2e3),this.$emit("get-quick-reply")},closeSnackBar(){this.snackbar=!1}}},lt=ct,ut=(s("09b6"),Object(c["a"])(lt,rt,ot,!1,null,null,null)),dt=ut.exports;u()(ut,{VBtn:G["a"],VSnackbar:at["a"]});var pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"options-container"},[s("div",{staticClass:"chat-option-button-outer"},[s("div",{staticClass:"chat-option-button"},t._l(t.optionsArray,function(e,a){return s("v-btn",{key:a,staticStyle:{"margin-right":"5px"},attrs:{outlined:"",rounded:"",elevation:"10",dark:"",color:"#00CC33"},on:{click:function(s){return t.getOptionValue(e.text)}}},[t._v(t._s(e.text))])}),1)])])},ht=[],vt={data(){return{optionsArray:this.optionValue}},props:{optionValue:Array},methods:{getOptionValue(t){this.$emit("get-option-value",t)}}},mt=vt,ft=(s("7836"),Object(c["a"])(mt,pt,ht,!1,null,"52676c4f",null)),gt=ft.exports;u()(ft,{VBtn:G["a"]});var bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isTyping?s("div",{staticClass:"chat-box-watson",attrs:{id:"isTyping"}},[s("span",{staticClass:"watson",staticStyle:{padding:"14px 0 0 20px"}},[t.isTyping?s("div",{staticClass:"typing-indicator"},[s("span"),s("span"),s("span")]):t._e()])]):t._e()},kt=[],yt={data(){return{}},props:["isTyping"]},xt=yt,_t=(s("0027"),Object(c["a"])(xt,bt,kt,!1,null,"338b104b",null)),wt=_t.exports,Ct={name:"WatsonService",async mounted(){this.getWatsonService(),$(window).on("resize",()=>{this.showQuickR=!1})},components:{UserSide:A,WatsonSide:U,AboutUs:L,Card:X,QuickAction:it,QuickActionMobile:dt,WatsonOption:gt,BotTyping:wt},data(){return{userMessage:[],getUserMessage:"",currentUserMessage:"",getServiceReply:"#8c9eff",botReply:"",loader:!1,showQuickR:!1,watsonReply:"yeah I'm here",watsonSide:"",socketObj:{},newsFeed:{},userConversation:[],options:[],showOptions:!1,nightMode:!0,quickAction:["News","Dry Jokes","Fun Facts"]}},methods:{getQuickReply(t){this.userSide(t),this.socketObj.emit("chat",t),this.playAudio("userAudio"),this.getServiceReply=!1,this.showOptions=!1,this.showQuickR=!1,this.loader=!0,this.isLoading(this.loader);const e=document.getElementById("chat-box");e.scrollTop=e.scrollHeight},async getWatsonService(){this.socketObj=await C()("https://gistbud-api.herokuapp.com/"),this.socketObj.once("connect",()=>{console.log("user connected"),this.getResponse()}),this.socketObj.on("disconnect",()=>{console.log("user disconnected")});const t="Hello World from client";this.socketObj.emit("join",{handle:t})},sendMessage(){if(""===this.getUserMessage.trim())return;this.socketObj.emit("chat",this.getUserMessage),this.playAudio("userAudio"),this.getServiceReply=!1,this.showOptions=!1,this.loader=!0,this.userSide(this.getUserMessage),this.isLoading(this.loader),this.getUserMessage="";const t=document.getElementById("chat-box");t.scrollTop=t.scrollHeight},playAudio(t){const e=document.getElementById(t);e.play()},getResponse(){this.socketObj.on("chat",async t=>{this.watsonReply="",this.options=[];const{response:e}=await t;e.forEach(t=>{""!==t.text&&null!==t.text&&t.text&&this.serviceSide(t.text),null!==t.options&&(this.showOptions=!0,this.options=t.options),t.card&&this.newsCard(t)}),this.getServiceReply=await!0,this.loader=await!1;const s=document.getElementById("isTyping");null!==s&&s.remove();const a=document.getElementById("chat-box");a.scrollTop=a.scrollHeight})},userSide(t){const e=a["a"].extend(A),s=new e({propsData:{currentUserMessage:t}});s.$mount(),this.$refs.container.appendChild(s.$el)},newsCard(t){const e=a["a"].extend(X),s=new e({propsData:{newsData:t}});s.$mount(),this.$refs.container.appendChild(s.$el)},isLoading(t){const e=a["a"].extend(wt),s=new e({propsData:{isTyping:t}});s.$mount(),this.$refs.container.appendChild(s.$el)},serviceSide(t){this.playAudio("botAudio");const e=a["a"].extend(U),s=new e({propsData:{watsonMessage:t}});s.$mount(),this.$refs.container.appendChild(s.$el)},getOptionValue(t){this.showOptions=!1,this.socketObj.emit("chat",t),this.playAudio("userAudio"),this.userSide(t),this.getServiceReply=!1,this.loader=!0,this.isLoading(this.loader);const e=document.getElementById("chat-box");e.scrollTop=e.scrollHeight}}},St=Ct,Mt=(s("e816"),s("62ad")),Ot=s("132d"),$t=s("0fd9"),jt=s("8654"),Rt=Object(c["a"])(St,x,_,!1,null,"6ca8fd4c",null),At=Rt.exports;u()(Rt,{VBtn:G["a"],VCol:Mt["a"],VIcon:Ot["a"],VRow:$t["a"],VTextField:jt["a"]});var Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Page Not Found bruhh")]),s("div",{staticStyle:{margin:"auto",width:"70%"}},[s("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"button is-primary"},[t._v("This is a button")]),s("button",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"btn"},[t._v("Click Me")]),s("span",{staticClass:"mdi mdi-account-clock-outline"}),s("span",{staticClass:"mdi mdi-view-dashboard"})])])},Vt=[],Tt={},Bt=Tt,Qt=s("269a"),Ut=s.n(Qt),Ht=s("5607"),qt=Object(c["a"])(Bt,Et,Vt,!1,null,"473efa86",null),It=qt.exports;Ut()(qt,{Ripple:Ht["a"]}),a["a"].use(v["a"]);var Dt=new v["a"]({mode:"history",base:"/",routes:[{path:"/",component:y,children:[{path:"/",name:"Watson Service",component:At,meta:{breadcrumb:"Watson Service"}}]},{path:"*",component:It}]}),Wt=s("2f62"),Pt={getErrorMessage:t=>t.errorMessage,getSuccessMessage:t=>t.successMessage,getHideHeader:t=>t.hideHeader},Ft={setErrorMessage:(t,e)=>{t.errorMessage=e},setSuccessMessage:(t,e)=>{t.successMessage=e},setHideHeader:(t,e)=>{t.hideHeader=e}},Lt={hideHeader:"",errorMessage:"",successMessage:""};a["a"].use(Wt["a"]);var Nt=new Wt["a"].Store({state:Lt,mutations:Ft,getters:Pt}),zt={methods:{},computed:{hideHeader:function(){return this.$store.getters.getHideHeader},errorMessage:function(){return this.$store.getters.getErrorMessage},successMessage:function(){return this.$store.getters.getSuccessMessage}}},Jt=(s("079a"),s("9537"),s("4989"),s("ab8b"),s("41e6"),s("bf40"),s("f309"));a["a"].use(Jt["a"]);var Yt=new Jt["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,a["a"].mixin(zt),new a["a"]({router:Dt,store:Nt,vuetify:Yt,render:t=>t(h)}).$mount("#app")},6951:function(t,e,s){},7836:function(t,e,s){"use strict";var a=s("2ad1"),n=s.n(a);n.a},"862a":function(t,e,s){"use strict";var a=s("ab91"),n=s.n(a);n.a},"936a":function(t,e,s){"use strict";var a=s("2d2c"),n=s.n(a);n.a},a321:function(t,e,s){t.exports=s.p+"media/notification.4d935a0c.mp3"},aacf:function(t,e,s){},ab91:function(t,e,s){},d7a52:function(t,e,s){"use strict";var a=s("6951"),n=s.n(a);n.a},e816:function(t,e,s){"use strict";var a=s("aacf"),n=s.n(a);n.a}});
//# sourceMappingURL=app.77af4e4c.js.map