webpackJsonp([1],{"+VYz":function(t,e){t.exports={home:{title:"注册新产品",regist:"开始注册",language:"切换语言："},regist:{number:"序列号",info:"个人信息",tip:"如果没有自动插入序列号，请参阅二维码标签并手动输入序列号",name:"姓名 *",city:"城市 *",address:"地址 *",postcode:"邮政编码 *",mobile:"手机号码 *",code:"验证码",sms:"获取短信",next:"下一步",holdnumber:"ABC123456 *"},install:{title:"安装信息",date:"安装日期",status:"状态",size:"家庭规模",water:"水的硬度",life:"滤芯寿命",changedate:"更换日期",read:"我已经阅读并同意汉斯格雅的",guidelines:"隐私政策指南",submit:"提交注册表",back:"返回上一步"},complete:{title:"注册成功！",text:"Please insert message here about what customers can do going forward, when they'll be alerted about cartridge replacement, etc...",close:"关闭"},registed:{title:"产品已经注册过！",text:"序列号已经用你提供的手机号注册了。如果您需要订购零件，请在主页上点击'现有客户'"}}},"/qKF":function(t,e){},"96Oc":function(t,e){},NHnr:function(t,e,s){"use strict";function n(t){s("xjlb")}function i(t){s("/qKF")}function a(t){s("96Oc")}function l(t){s("VQvv")}function r(t){s("eP4Q")}Object.defineProperty(e,"__esModule",{value:!0});var o={},u=s("7+uW"),c=s("Dd8w"),p=s.n(c),v=s("K/Lq"),m=s.n(v),d=s("NYxO"),h={name:"app",data:function(){return{}},computed:Object(d.c)({lang:function(t){return t.Language.lang}}),methods:p()({},Object(d.b)(["SetLanguage"]))},g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-logo"),t._v(" "),s("router-view")],1)},f=[],_={render:g,staticRenderFns:f},j=_,b=s("VU/8"),w=n,C=b(h,j,!1,w,null,null),x=C.exports,z=s("bOdI"),y=s.n(z),E={lang:m.a.get("lang")?m.a.get("lang"):"en"},k={SetLanguage:function(t,e){(0,t.commit)("language/init",e)}},S=y()({},"language/init",function(t,e){console.log("lang",e),t.lang=e}),$={state:E,actions:k,mutations:S};u.a.use(d.a);var N=new d.a.Store({actions:o,modules:{Language:$}}),P=s("/ocq"),R={name:"comfilm",data:function(){return{}},props:{onClose:{type:Function,default:function(){return console.log("onClose")}}}},F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comfilm"},[s("div",{staticClass:"mask"},[s("div",{staticClass:"comfilm-inner"},[t._m(0),t._v(" "),s("div",{staticClass:"sms pub-xs-input",on:{click:t.onClose}},[t._v("ok")])])])])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Please ensure all "),s("br"),t._v(" mandatory fields are filled in")])}],L={render:F,staticRenderFns:O},I=L,A=s("VU/8"),D=i,T=A(R,I,!1,D,null,null),V=T.exports,U=s("95YI"),q=s.n(U),H={name:"regist",data:function(){return{show:!0,isShow:!1,count:"",timer:null,phone:"",user:{name:"",address:"",postcode:"",code:"",number:"",province:"",city:""}}},watch:{phone:function(t,e){this.phone=t.length>e.length?t.replace(/\s/g,"").replace(/(\d{3})(\d{0,4})(\d{0,4})/,"$1 $2 $3"):this.phone.trim()}},components:{"v-comfilm":V,"v-distpicker":q.a},methods:{getCode:function(){var t=this;this.timer||(this.count=60,this.show=!1,this.timer=setInterval(function(){t.count>0&&t.count<=60?t.count--:(t.show=!0,clearInterval(t.timer),t.timer=null)},1e3))},onProvince:function(t){this.user.province=t.value},onCity:function(t){this.user.city=t.value},next:function(){if(""==this.user.number||""==this.user.name||""==this.user.address||""==this.user.province||""==this.user.city||""==this.user.postcode||""==this.phone||""==this.user.code)return void(this.isShow=!this.isShow);this.$router.push({path:"/install"})},onClose:function(){this.isShow=!1}}},M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"regist"},[s("div",{staticClass:"regist-inner"},[s("p",{staticClass:"regist-title"},[t._v(t._s(t.$t("regist.number")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.number,expression:"user.number"}],staticClass:"pub-input",attrs:{type:"text",placeholder:t.$t("regist.holdnumber")},domProps:{value:t.user.number},on:{input:function(e){e.target.composing||t.$set(t.user,"number",e.target.value)}}}),t._v(" "),s("p",[t._v(t._s(t.$t("regist.tip")))]),t._v(" "),s("p",{staticClass:"regist-title"},[t._v(t._s(t.$t("regist.info")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"pub-input",attrs:{type:"text",placeholder:t.$t("regist.name")},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),[s("v-distpicker",{attrs:{"hide-area":"",province:t.user.province,city:t.user.city},on:{province:t.onProvince,city:t.onCity}})],t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.address,expression:"user.address"}],staticClass:"pub-input",attrs:{type:"text",placeholder:t.$t("regist.address")},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||t.$set(t.user,"address",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.postcode,expression:"user.postcode"}],staticClass:"pub-input",attrs:{type:"text",placeholder:t.$t("regist.postcode")},domProps:{value:t.user.postcode},on:{input:function(e){e.target.composing||t.$set(t.user,"postcode",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"pub-input pub-sm-input",attrs:{type:"phone",placeholder:t.$t("regist.mobile"),maxlength:"13"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.code,expression:"user.code"}],staticClass:"pub-input pub-xs-input input-code",attrs:{type:"text",placeholder:t.$t("regist.code")},domProps:{value:t.user.code},on:{input:function(e){e.target.composing||t.$set(t.user,"code",e.target.value)}}}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"sms pub-xs-input",on:{click:t.getCode}},[t._v(t._s(t.$t("regist.sms")))]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}],staticClass:"sms pub-xs-input sms-time"},[t._v(t._s(t.count)+" s")])],2),t._v(" "),s("div",{staticClass:"pub-btn",on:{click:t.next}},[t._v(t._s(t.$t("regist.next")))]),t._v(" "),s("v-lang"),t._v(" "),s("v-comfilm",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{onClose:t.onClose}})],1)},B=[],X={render:M,staticRenderFns:B},W=X,Y=s("VU/8"),G=a,K=Y(H,W,!1,G,null,null),Q=K.exports,J={name:"home",data:function(){return{}}},Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"pub-title"},[t._v(t._s(t.$t("home.title")))]),t._v(" "),t._m(0),t._v(" "),s("router-link",{attrs:{to:"/regist"}},[s("div",{staticClass:"pub-btn"},[t._v(t._s(t.$t("home.regist")))])]),t._v(" "),s("v-lang")],1)},tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pub-img"},[s("img",{staticClass:"img",attrs:{src:"static/imgs/img.jpg"}})])}],et={render:Z,staticRenderFns:tt},st=et,nt=s("VU/8"),it=nt(J,st,!1,null,null,null),at=it.exports,lt=s("PJh5"),rt=s.n(lt),ot={name:"install",data:function(){return{isShow:!0,isShowComfilm:!1,install:{date:"",size:"",water:""}}},components:{"v-comfilm":V},methods:{agree:function(){this.isShow=!this.isShow},setDate:function(){var t=this;this.$calendar.show({onOk:function(e){t.install.date=e}})},next:function(){if(""==this.install.date||""==this.install.size)return void(this.isShowComfilm=!this.isShowComfilm);this.$router.push({path:"/complete"})},onClose:function(){this.isShowComfilm=!1}},computed:Object(d.c)({lang:function(t){return t.Language.lang},life:function(){return""==this.install.size||""==this.install.water?"zh"==this.lang?"滤芯寿命":"CARTRIDGE LIFESPAN":"1"==this.install.size&&"90"==this.install.water||"1"==this.install.size&&"100"==this.install.water||"1"==this.install.size&&"190"==this.install.water||"2"==this.install.size&&"90"==this.install.water?"12":"1"==this.install.size&&"280"==this.install.water||"2"==this.install.size&&"100"==this.install.water||"3"==this.install.size&&"90"==this.install.water?"9":"1"==this.install.size&&"350"==this.install.water||"1"==this.install.size&&"450"==this.install.water||"2"==this.install.size&&"190"==this.install.water||"3"==this.install.size&&"100"==this.install.water||"3"==this.install.size&&"190"==this.install.water||"4"==this.install.size&&"90"==this.install.water||"4"==this.install.size&&"100"==this.install.water||"5"==this.install.size&&"90"==this.install.water?"6":"3"},changedate:function(){var t=parseInt(this.life);return console.log("this.install.date",this.install.date),t>0&&""!=this.install.date?rt()(this.install.date).add(t,"M").format("YYYY-MM-DD"):"zh"==this.lang?"更换日期":"REPLACEMENT DATE"}})},ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"install"},[s("div",{staticClass:"regist-inner"},[s("p",{staticClass:"regist-title"},[t._v(t._s(t.$t("install.title")))]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.install.date,expression:"install.date"}],staticClass:"pub-input",attrs:{readonly:"",type:"text",placeholder:t.$t("install.date")},domProps:{value:t.install.date},on:{click:t.setDate,input:function(e){e.target.composing||t.$set(t.install,"date",e.target.value)}}}),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.install.size,expression:"install.size"}],staticClass:"pub-input select-input",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.install,"size",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[t._v(t._s(t.$t("install.size")))]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("1 person")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("2 person")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("3 person")]),t._v(" "),s("option",{attrs:{value:"4"}},[t._v("4 person")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("5 person")]),t._v(" "),s("option",{attrs:{value:"6"}},[t._v("6 person or more")])]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.install.water,expression:"install.water"}],staticClass:"pub-input select-input",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(t.install,"water",e.target.multiple?s:s[0])}}},[s("option",{attrs:{disabled:"",value:""}},[t._v(t._s(t.$t("install.water"))+" (ppm)")]),t._v(" "),s("option",{attrs:{value:"90"}},[t._v("< 90")]),t._v(" "),s("option",{attrs:{value:"100"}},[t._v("100 - 180")]),t._v(" "),s("option",{attrs:{value:"190"}},[t._v("190 - 270")]),t._v(" "),s("option",{attrs:{value:"280"}},[t._v("280 - 350")]),t._v(" "),s("option",{attrs:{value:"350"}},[t._v("350 - 450")]),t._v(" "),s("option",{attrs:{value:"450"}},[t._v("450 - 530")]),t._v(" "),s("option",{attrs:{value:"530"}},[t._v("> 530")])]),t._v(" "),s("div",{staticClass:"pub-input pub-div"},[t._v(t._s(t.life))]),t._v(" "),s("div",{staticClass:"pub-input pub-div"},[t._v(t._s(t.changedate))])]),t._v(" "),s("div",{staticClass:"checkbox"},[s("input",{staticStyle:{display:"none"},attrs:{type:"checkbox",name:""}}),t._v(" "),s("span",{on:{click:t.agree}},[s("label",{attrs:{for:"checkbox"}}),s("label",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"check"})]),s("span",{staticStyle:{display:"inline-block","margin-left":"10px","font-size":"14px"}},[t._v(t._s(t.$t("install.read"))+" "),s("span",{staticClass:"under-line"},[t._v(t._s(t.$t("install.guidelines")))])])]),t._v(" "),s("button",{staticClass:"pub-btn install-btn",attrs:{disabled:!t.isShow},on:{click:t.next}},[t._v(t._s(t.$t("install.submit")))]),t._v(" "),s("router-link",{attrs:{to:"/regist"}},[s("span",{staticClass:"under-line"},[t._v(t._s(t.$t("install.back")))])]),t._v(" "),s("v-lang"),t._v(" "),s("v-comfilm",{directives:[{name:"show",rawName:"v-show",value:t.isShowComfilm,expression:"isShowComfilm"}],attrs:{onClose:t.onClose}})],1)},ct=[],pt={render:ut,staticRenderFns:ct},vt=pt,mt=s("VU/8"),dt=l,ht=mt(ot,vt,!1,dt,null,null),gt=ht.exports,ft={name:"complete",data:function(){return{}}},_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"complete"},[s("div",{staticClass:"pub-title"},[t._v(t._s(t.$t("complete.title")))]),t._v(" "),s("div",{staticClass:"complete-text"},[t._v(t._s(t.$t("complete.text")))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"pub-btn"},[t._v(t._s(t.$t("complete.close")))])])},jt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pub-img"},[s("img",{staticClass:"img",attrs:{src:"/static/imgs/img.jpg"}})])}],bt={render:_t,staticRenderFns:jt},wt=bt,Ct=s("VU/8"),xt=Ct(ft,wt,!1,null,null,null),zt=xt.exports,yt={name:"registed",data:function(){return{}}},Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"registed"},[s("div",{staticClass:"pub-title"},[t._v(t._s(t.$t("registed.title")))]),t._v(" "),s("div",{staticClass:"complete-text"},[t._v(t._s(t.$t("registed.text")))]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"pub-btn"},[t._v(t._s(t.$t("complete.close")))])])},kt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pub-img"},[s("img",{staticClass:"img",attrs:{src:"/static/imgs/img.jpg"}})])}],St={render:Et,staticRenderFns:kt},$t=St,Nt=s("VU/8"),Pt=Nt(yt,$t,!1,null,null,null),Rt=Pt.exports;u.a.use(P.a);var Ft=[{path:"/",component:at},{path:"/regist",component:Q},{path:"/install",component:gt},{path:"/complete",component:zt},{path:"/registed",component:Rt}],Ot=new P.a({routes:Ft});Ot.beforeEach(function(t,e,s){document.body.scrollTop=0,s()});var Lt=Ot,It=s("kmDT"),At={name:"logo",data:function(){return{}}},Dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"logo clearfloat"},[s("div",{staticClass:"logo-text"},[s("img",{staticStyle:{height:"40px"},attrs:{src:"static/imgs/logo.jpg"}})])])}],Vt={render:Dt,staticRenderFns:Tt},Ut=Vt,qt=s("VU/8"),Ht=r,Mt=qt(At,Ut,!1,Ht,null,null),Bt=Mt.exports,Xt={name:"language",data:function(){return{lang:"中文"}},methods:p()({},Object(d.b)(["SetLanguage"]),{langeChange:function(){"English"==this.lang?(this.lang="中文",this.$i18n.set("en"),this.SetLanguage("en")):(this.$i18n.set("zh"),this.lang="English",this.SetLanguage("zh"))}})},Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language"},[s("p",{staticClass:"pub-language"},[t._v(t._s(t.$t("home.language"))),s("span",{staticClass:"under-line",on:{click:t.langeChange}},[t._v(t._s(t.lang))])])])},Yt=[],Gt={render:Wt,staticRenderFns:Yt},Kt=Gt,Qt=s("VU/8"),Jt=Qt(Xt,Kt,!1,null,null,null),Zt=Jt.exports,te=s("+rQR"),ee=s.n(te);u.a.use(P.a),u.a.use(ee.a),u.a.config.productionTip=!1,u.a.component("v-logo",Bt),u.a.component("v-lang",Zt),u.a.use(It.a.plugin,N),u.a.i18n.add("zh",s("+VYz")),u.a.i18n.add("en",s("bczw")),u.a.i18n.set("en"),new u.a({el:"#app",router:Lt,store:N,template:"<App/>",components:{App:x}})},VQvv:function(t,e){},bczw:function(t,e){t.exports={home:{title:"New Product Registration",regist:"Begin Registration",language:"Switch Language："},regist:{number:"Serial Number",info:"Personal Info",tip:"If serial number is not automatically inserted, please refer to QR sticker label and manually enter serial number.",name:"FULL NAME *",city:"CITY *",address:"ADDRESS *",postcode:"POSTAL CODE *",mobile:"MOBILE PHONE *",code:"CODE",sms:"GET SMS",next:"Next Step",holdnumber:"ABC123456 *"},install:{title:"Installation Info",date:"INSTALLATION DATE",status:"STATUS",size:"HOUSEHOLD SIZE",water:"WATER HARDNESS",life:"CARTRIDGE LIFESPAN",changedate:"REPLACEMENT DATE",read:"I have read and agree to Hansgrohe's",guidelines:"privacy policy guidelines",submit:"Submit Registration",back:"Previous Step"},complete:{title:"Registration is Complete!",text:"Please insert message here about what customers can do going forward, when they'll be alerted about cartridge replacement, etc...",close:"Close Window"},registed:{title:"Product Previously Registered!",text:"The serial number was already registered with the mobile number you provided. If you need to order parts, click on “Existing Customers” on the main page."}}},eP4Q:function(t,e){},uslO:function(t,e,s){function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="uslO"},xjlb:function(t,e){}},["NHnr"]);