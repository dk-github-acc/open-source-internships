(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],p=0,u=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,a=1;a<o.length;a++){var i=o[a];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},a={app:0},n={app:0},s=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"584ca2ff"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(e){var t=[],o={about:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=new Promise((function(t,o){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f64a5a45"}[e]+".css",n=c.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===r||p===n))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],p=l.getAttribute("data-href");if(p===r||p===n)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),o(s)},d.href=n;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){a[e]=0})));var r=n[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,o){r=n[e]=[t,o]}));t.push(r[2]=s);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var u=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(d);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,o[1](u)}n[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/open-source-internships/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=p;s.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"39f6":function(e,t,o){e.exports=o.p+"img/logo2.c4221fac.gif"},"56d7":function(e,t,o){"use strict";o.r(t);var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-app",[o("v-main",[o("v-fade-transition",{attrs:{mode:"out-in"}},[o("div",{style:["dark"==e.isDark?{backgroundColor:"black"}:{backgroundColor:"white"}],attrs:{id:"studentQuiz"}},[o("div",{attrs:{id:"particles-js"}}),o("router-view")],1)])],1),o("app-bar")],1)},n=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("v-bottom-navigation",{attrs:{color:"indigo",app:"",grow:"",height:"50",dark:"dark"==e.isDark},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[o("v-btn",{staticClass:"button-size",attrs:{value:"1","x-large":"",text:""},on:{click:function(t){return e.$router.push("/open-source-internships")}}},[e._v(" 🐱‍💻 OSI ")]),o("v-btn",{staticClass:"button-size",attrs:{value:"1","x-large":"",text:""},on:{click:function(t){return e.$router.push("/open-source-internships/about")}}},[e._v(" 😁 About ")]),o("v-btn",{staticClass:"button-size",attrs:{value:"1",href:"https://github.com/rohan220217/open-source-internships","x-large":"",text:""}},[e._v(" ⭐ This project ")])],1)],1)},i=[],c=o("2f62"),l={data:()=>({drawer:null,links:["🐱‍💻 OSI","😁 About","⭐ This project"],value:1}),computed:{...Object(c["c"])(["isDark"])}},p=l,u=(o("a67d"),o("2877")),d=o("6544"),m=o.n(d),g=o("b81c"),h=o("8336"),v=Object(u["a"])(p,s,i,!1,null,"e13f3d00",null),f=v.exports;m()(v,{VBottomNavigation:g["a"],VBtn:h["a"]});o("572f");var b={name:"App",data:()=>({}),components:{AppBar:f},mounted(){this.initParticles()},methods:{initParticles(){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:700}},color:{value:"#4ebeef"},shape:{type:"star",stroke:{width:0,color:"#85e598"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#85e598",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}},computed:{...Object(c["c"])(["isDark"])}},_=b,w=(o("034f"),o("7496")),k=o("0789"),y=o("f6c4"),C=Object(u["a"])(_,a,n,!1,null,null,null),S=C.exports;m()(C,{VApp:w["a"],VFadeTransition:k["c"],VMain:y["a"]});var x=o("8c4f"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-container",[r("v-card",{attrs:{flat:"",dark:"dark"==e.isDark}},[r("v-card-title",{staticClass:"text-center justify-center py-6"},[r("v-img",{attrs:{height:"80",width:"0",contain:"",src:o("39f6")}})],1),r("v-tabs",{attrs:{"show-arrows":"","background-color":"transparent",color:"orange lighten-1",grow:""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},e._l(e.items,(function(t){return r("v-tab",{key:t},[e._v(" "+e._s(t)+" ")])})),1)],1),r("div",{staticClass:"mt-3"},[r("v-tabs-items",{staticClass:"pa-4",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",[r("Programs")],1),r("v-tab-item",[r("Competition")],1),r("v-tab-item",[r("University")],1)],1),r("v-tabs-items",{staticClass:"pa-4",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}}),r("v-tabs-items",{staticClass:"pa-4",model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}})],1)],1),r("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on;return[r("v-btn",e._g({staticStyle:{bottom:"55px"},attrs:{absolute:"",dark:"",fixed:"",fab:"",bottom:"",right:"",color:"purple"},on:{click:function(t){return e.toggleDark()}}},Object.assign({},o)),[r("v-icon",[e._v(e._s("dark"==e.isDark?"mdi-white-balance-sunny":"mdi-weather-night"))])],1)]}}])},[r("span",[e._v("Day/ Night Mode")])])],1)},V=[],G=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",e._l(e.allPrograms,(function(e){return o("v-col",{key:e._id,staticClass:"pa-3",attrs:{cols:"12",md:"4",sm:"6"}},[o("single-card",{attrs:{content:e}})],1)})),1)},T=[],O=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",{staticClass:"pt-2",attrs:{color:e.content.color}},[o("v-img",{attrs:{src:e.content.image,"lazy-src":e.content.image,height:"100px",contain:""},scopedSlots:e._u([{key:"placeholder",fn:function(){return[o("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[o("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}])}),o("v-card-title",[e._v(" "+e._s(e.content.title)+" ")]),o("v-card-subtitle",{staticClass:"pb-0"},[e._v(" Begins on - "+e._s(e.content.start_date)+" ")]),o("v-card-subtitle",{staticClass:"pt-0"},[e._v(" Ends on - "+e._s(e.content.end_date)+" ")]),o("v-card-subtitle",{staticClass:"py-0 px-2"},[e.content.perks.swags?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 🤩 Swags ")]):e._e(),e.content.perks.stipend?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 💸 Stipend ")]):e._e(),e.content.perks.cash_price?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 💰 Cash Price ")]):e._e(),e.content.perks.internships_opportunity?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 😎 Internships ")]):e._e(),e.content.perks.certificates?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 📜 Certificate ")]):e._e(),e.content.perks.surprise_gifts?o("v-chip",{staticClass:"ma-1",attrs:{small:"",color:"deep-purple accent-4",outlined:""}},[e._v(" 🎁 Surprise gift ")]):e._e()],1),o("v-card-actions",[o("v-btn",{attrs:{color:"orange",text:""},on:{click:function(t){return e.openLink(e.content.timeline)}}},[e._v(" Timeline ")]),o("v-spacer"),o("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[o("v-icon",[e._v(e._s(e.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),o("v-expand-transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[o("v-divider"),o("v-card-text",[e._v(" "+e._s(e.content.description)+" ")])],1)])],1)},D=[],E={props:{content:{type:Object}},data(){return{show:!1}},methods:{openLink(e){window.open(e,"_blank")}}},A=E,P=o("b0af"),I=o("99d9"),M=o("cc20"),B=o("ce7e"),F=o("132d"),L=o("adda"),$=o("490a"),z=o("0fd9"),N=o("2fa4"),R=Object(u["a"])(A,O,D,!1,null,null,null),U=R.exports;m()(R,{VBtn:h["a"],VCard:P["a"],VCardActions:I["a"],VCardSubtitle:I["b"],VCardText:I["c"],VCardTitle:I["d"],VChip:M["a"],VDivider:B["a"],VExpandTransition:k["a"],VIcon:F["a"],VImg:L["a"],VProgressCircular:$["a"],VRow:z["a"],VSpacer:N["a"]});var H={computed:{...Object(c["c"])(["allPrograms"])},components:{SingleCard:U}},J=H,K=o("62ad"),q=Object(u["a"])(J,G,T,!1,null,null,null),Q=q.exports;m()(q,{VCol:K["a"],VRow:z["a"]});var X=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",e._l(e.allUniversity,(function(e){return o("v-col",{key:e._id,staticClass:"pa-3",attrs:{cols:"12",md:"4",sm:"6"}},[o("single-card",{attrs:{content:e}})],1)})),1)},W=[],Y={computed:{...Object(c["c"])(["allUniversity"])},components:{SingleCard:U}},Z=Y,ee=Object(u["a"])(Z,X,W,!1,null,null,null),te=ee.exports;m()(ee,{VCol:K["a"],VRow:z["a"]});var oe=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",e._l(e.allCompetitions,(function(e){return o("v-col",{key:e._id,staticClass:"pa-3",attrs:{cols:"12",md:"4",sm:"6"}},[o("single-card",{attrs:{content:e}})],1)})),1)},re=[],ae={computed:{...Object(c["c"])(["allCompetitions"])},components:{SingleCard:U}},ne=ae,se=Object(u["a"])(ne,oe,re,!1,null,null,null),ie=se.exports;m()(se,{VCol:K["a"],VRow:z["a"]});var ce={name:"Home",components:{Competition:ie,University:te,Programs:Q},data(){return{tab:null,show:!1,items:["Programs","Competitions","University SoC/WoC"]}},methods:{...Object(c["b"])(["toggleDark"])},computed:{...Object(c["c"])(["isDark"])}},le=ce,pe=(o("5d32"),o("a523")),ue=o("71a3"),de=o("c671"),me=o("fe57"),ge=o("aac8"),he=o("3a2f"),ve=Object(u["a"])(le,j,V,!1,null,"f6e872c2",null),fe=ve.exports;m()(ve,{VBtn:h["a"],VCard:P["a"],VCardTitle:I["d"],VContainer:pe["a"],VIcon:F["a"],VImg:L["a"],VTab:ue["a"],VTabItem:de["a"],VTabs:me["a"],VTabsItems:ge["a"],VTooltip:he["a"]}),r["a"].use(x["a"]);const be=[{path:"/open-source-internships",name:"Osi",component:fe},{path:"/open-source-internships/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],_e=new x["a"]({routes:be,mode:"history"});var we=_e,ke=o("f309");r["a"].use(ke["a"]);var ye=new ke["a"]({}),Ce=o("3f9b");const Se={competition:[{image:"",title:"",start_date:"",end_date:"",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!1},description:"",timeline:"",link:""}]},xe={allCompetitions(e){return e.competition}},je={},Ve={};var Ge={state:Se,getters:xe,mutations:Ve,actions:je};const Te={programs:[{_id:0,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!0,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!0},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#CAF4F4"},{_id:0,image:"https://cdn-media-1.freecodecamp.org/images/b-dH-s55d1HXEBiv3uiVe3RocpZ6LQylbhRV",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!1,stipend:!0,cash_price:!1,internships_opportunity:!0,certificates:!1,surprise_gifts:!1},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#FDE0D9"},{_id:0,image:"https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!1,stipend:!1,cash_price:!0,internships_opportunity:!1,certificates:!1,surprise_gifts:!0},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#CAEFD1"},{_id:0,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!0,stipend:!1,cash_price:!0,internships_opportunity:!1,certificates:!0,surprise_gifts:!0},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#DCE5FD"},{_id:0,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!1},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#aad0f6"},{_id:0,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/GSoC-icon.svg/1200px-GSoC-icon.svg.png",title:"Google Summer of Code",start_date:"March",end_date:"April",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!1},description:"The Google Summer of Code, often abbreviated to GSoC, is an international annual program in which Google awards stipends to students who successfully complete a free and open-source software coding project during the summer. The program is open to university students aged 18 or over.",timeline:"https://summerofcode.withgoogle.com/how-it-works/#timeline",link:"https://developers.google.com/open-source/gsoc/",color:"#FFF2CC"}]},Oe={allPrograms(e){return e.programs}},De={},Ee={};var Ae={state:Te,getters:Oe,mutations:Ee,actions:De};const Pe={university:[{image:"",title:"",start_date:"",end_date:"",perks:{swags:!1,stipend:!1,cash_price:!1,internships_opportunity:!1,certificates:!1,surprise_gifts:!1},description:"",timeline:"",link:""}]},Ie={allUniversity(e){return e.university}},Me={},Be={};var Fe={state:Pe,getters:Ie,mutations:Be,actions:Me};const Le={isDark:localStorage.getItem("isDark")?localStorage.getItem("isDark"):"light"},$e={isDark(e){return e.isDark}},ze={toggleDark(e){e.commit("TOGGLE_DARK")}},Ne={TOGGLE_DARK(e){localStorage.removeItem("isDark"),"light"==e.isDark?e.isDark="dark":e.isDark="light",localStorage.setItem("isDark",e.isDark)}};var Re={state:Le,getters:$e,mutations:Ne,actions:ze};r["a"].use(c["a"]);var Ue=new c["a"].Store({modules:{competition:Ge,program:Ae,user:Re,university:Fe}});r["a"].use(Ce["a"]),r["a"].config.productionTip=!1,new r["a"]({router:we,vuetify:ye,store:Ue,render:function(e){return e(S)}}).$mount("#app")},"5d32":function(e,t,o){"use strict";o("ce5b")},"85ec":function(e,t,o){},a67d:function(e,t,o){"use strict";o("a97f")},a97f:function(e,t,o){},ce5b:function(e,t,o){}});
//# sourceMappingURL=app.f931b750.js.map