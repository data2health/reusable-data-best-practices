(function(t){function e(e){for(var r,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={index:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07e0":function(t,e,n){},"10db":function(t,e,n){t.exports=n.p+"img/icon-font-size.d34757c4.svg"},1711:function(t,e,n){},"1c85":function(t,e,n){},"1f11":function(t,e,n){"use strict";n("70e5")},"469c":function(t,e,n){},"4a17":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggle custom-navbar-toggle",attrs:{id:"custom-collapse",type:"button","data-target":".navbar-collapse"},on:{click:t.click}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar icon-bar-line"}),n("span",{staticClass:"icon-bar icon-bar-line"}),n("span",{staticClass:"icon-bar icon-bar-line"})])},s=[],i={name:"CustomCollapse",el:"#custom-collapse-container",methods:{click:function(){var t=document.getElementById("mobile-side-bar");t.classList.toggle("mobile-side-bar-hidden");var e=document.getElementById("content-container");e.classList.toggle("blur-background")}}},o=i,c=n("2877"),l=Object(c["a"])(o,a,s,!1,null,"08687249",null),u=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search"}},[n("div",{staticClass:"search-header-wrapper",attrs:{id:"search-header-wrapper"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"search-input",style:{background:"url("+this.searchSvgPath+") no-repeat"},attrs:{placeholder:"Search"},domProps:{value:t.query},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},t.doSomething],input:function(e){e.target.composing||(t.query=e.target.value)}}}),n("div",{staticClass:"search-result-bubble search-result-bubble-hidden",attrs:{id:"search-result-bubble"}},[n("ul",{staticStyle:{"list-style":"none",padding:"10px !important",height:"100%",overflow:"auto"},attrs:{id:"example-2"}},t._l(this.queryMatches,(function(e,r){return n("li",{key:r,staticClass:"search-list-item"},[n("a",{attrs:{href:e.searchUrl}},[n("span",{staticClass:"search-matches-found"},[t._v(t._s(e.count)+" matches found")]),n("span",{staticClass:"search-title"},[t._v(t._s(e.documentTitle))])])])})),0)])])])},m=[],h=(n("a623"),n("4160"),n("caad"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("5319"),n("1276"),n("159b"),{el:"#search-container",computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window}))},data:function(){var t=sessionStorage.getItem("document_previews"),e=sessionStorage.getItem("search_path"),n=sessionStorage.getItem("search_svg_path");return{query:"",queryMatches:[],documentPreviews:JSON.parse(t),searchPath:e,searchSvgPath:n}},privateState:{matchCount:0,searchBubbleShown:!1},methods:{doSomething:function(){var t=this;this.queryMatches.length=0,this.documentPreviews.forEach((function(e){var n=e.preview.split(t.query).length-1,r=window.location.pathname.includes("/chapters/")?e.document_url.replace("chapters/","")+"?highlight="+t.query:e.document_url+"?highlight="+t.query;0!==n&&t.queryMatches.push({documentName:e.document_name,count:n,documentTitle:e.document_title,documentUrl:e.document_url,searchUrl:r})}));var e=!1;this.queryMatches&&(e=!this.queryMatches.every((function(t){return 0===t.count}))&&this.query),e?document.getElementById("search-result-bubble").classList.remove("search-result-bubble-hidden"):document.getElementById("search-result-bubble").classList.add("search-result-bubble-hidden")},submit:function(){this.query&&(window.location.href=this.searchPath+"?q="+this.query)}}}),p=h,f=Object(c["a"])(p,d,m,!1,null,null,null),g=f.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"go-to-top flex center-items",attrs:{id:"go-to-top",role:"button"},on:{click:t.goToTop}},[n("div",{staticClass:"arrow-svg flex"},[n("svg",{staticStyle:{"enable-background":"new 0 0 477.175 477.175",transform:"rotate(90deg)",width:"100%"},attrs:{fill:"white",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 477.175 477.175","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225   c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"}})])])])])},w=[],y={name:"GoToTop",el:"#go-to-top-container",methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},b=y,x=(n("1f11"),Object(c["a"])(b,v,w,!1,null,"27ac4703",null)),S=x.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress-bar-fixed-wrapper"},[n("div",{staticClass:"progress-bar",style:{width:t.scrollPercentage}})])},_=[],k={name:"ScrollProgression",el:"#scroll-progression-container",created:function(){window.addEventListener("scroll",this.handleScroll)},unmounted:function(){window.removeEventListener("scroll",this.handleScroll)},data:function(){return{scrollPercentage:"0%"}},methods:{handleScroll:function(){var t=window.scrollY,e=document.body.scrollHeight,n=t/(e-window.innerHeight)*100;this.scrollPercentage="".concat(n,"%")}}},E=k,O=(n("8941"),Object(c["a"])(E,C,_,!1,null,"2fea23c2",null)),z=O.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"estimated-read-time"},[t._v(" "+t._s(this.estimatedReadTime)+" minutes read ")])},I=[],q={name:"EstimatedReadTime",el:"#estimated-read-time-container",created:function(){this.estimatedReadTime=this.getEstimatedReadTime()},data:function(){return{estimatedReadTime:0}},methods:{getEstimatedReadTime:function(){try{var t,e=document.getElementsByClassName("body")[0],n=e.firstElementChild,r=200,a=n.innerText.split(" ").length;if(a>0){var s=Math.ceil(a/r);t=s}return t}catch(i){return 0}}}},P=q,F=(n("bf30"),Object(c["a"])(P,B,I,!1,null,"0bb4219c",null)),$=F.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"search"}},[n("div",{attrs:{id:"search-header-wrapper"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"dynamic-search-input",attrs:{placeholder:"Search chapters"},domProps:{value:t.query},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submit(e)},t.doSomething],input:function(e){e.target.composing||(t.query=e.target.value)}}}),""!==this.query?n("div",[n("p",[n("b",[t._v(t._s(this.matchCount))]),t._v(" matches found")])]):t._e()])])},M=[],T={name:"DynamicChapterSearch",el:"#dynamic-chapter-search-container",computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window}))},data:function(){var t=sessionStorage.getItem("document_previews"),e=sessionStorage.getItem("search_svg_path"),n=sessionStorage.getItem("search_path");return{query:"",queryMatches:[],matchCount:0,documentPreviews:JSON.parse(t),searchSvgPath:e,searchPath:n}},privateState:{matchCount:0,searchBubbleShown:!1},methods:{doSomething:function(){var t=this;this.queryMatches.length=0;var e=[];this.matchCount=0,this.documentPreviews.forEach((function(n){var r=n.preview.toLowerCase().split(t.query).length-1;r=r+n.document_title.toLowerCase().split(t.query).length-1;var a=window.location.pathname.includes("/chapters/")?n.document_url.replace("chapters/","")+"?highlight="+t.query:n.document_url+"?highlight="+t.query;e.push({documentName:n.document_name,count:r,documentTitle:n.document_title,documentUrl:n.document_url,searchUrl:a})})),e.forEach((function(e){try{var n=document.getElementById(e.documentUrl);""!==t.query&&(t.matchCount+=e.count),0===e.count?n.style.opacity=.3:n.style.opacity=1}catch(r){console.error(r)}}))},submit:function(){this.query&&(window.location.href=this.searchPath+"?q="+this.query)}}},j=T,N=(n("81ef"),Object(c["a"])(j,L,M,!1,null,"67768528",null)),D=N.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex center-items menu-wrapper"},[n("div",{staticClass:"flex center-items",on:{click:t.handleMenuClick}},[n("svg",{staticStyle:{height:"20px",width:"20px",cursor:"pointer"},attrs:{xmlns:"http://www.w3.org/2000/svg",height:"517pt",viewBox:"0 -45 517.33333 517",width:"517pt"}},[n("path",{attrs:{d:"m240 384.167969h-21.332031v-341.335938h128v21.335938c0 11.796875 9.535156 21.332031 21.332031 21.332031s21.332031-9.535156 21.332031-21.332031v-42.667969c0-11.796875-9.535156-21.332031-21.332031-21.332031h-346.667969c-11.796875 0-21.332031 9.535156-21.332031 21.332031v42.667969c0 11.796875 9.535156 21.332031 21.332031 21.332031s21.335938-9.535156 21.335938-21.332031v-21.335938h133.332031v341.335938h-21.332031c-11.796875 0-21.335938 9.535156-21.335938 21.332031s9.539063 21.332031 21.335938 21.332031h85.332031c11.796875 0 21.332031-9.535156 21.332031-21.332031s-9.535156-21.332031-21.332031-21.332031zm0 0"}}),n("path",{attrs:{d:"m496 192.167969h-170.667969c-11.796875 0-21.332031 9.535156-21.332031 21.332031v37.332031c0 11.796875 9.535156 21.335938 21.332031 21.335938s21.335938-9.539063 21.335938-21.335938v-16h42.664062v149.335938h-10.664062c-11.796875 0-21.335938 9.535156-21.335938 21.332031s9.539063 21.332031 21.335938 21.332031h64c11.796875 0 21.332031-9.535156 21.332031-21.332031s-9.535156-21.332031-21.332031-21.332031h-10.667969v-149.335938h42.667969v10.667969c0 11.796875 9.535156 21.332031 21.332031 21.332031s21.332031-9.535156 21.332031-21.332031v-32c0-11.796875-9.535156-21.332031-21.332031-21.332031zm0 0"}})])]),t.menuOpen?n("div",{staticClass:"menu-bubble"},[n("span",{staticClass:"menu-title"},[t._v(" Font ")]),n("div",{staticClass:"menu-item-wrapper"},t._l(t.fonts,(function(e,r){return n("div",{key:e.message,staticClass:"menu-item",style:{borderBottom:r===t.fonts.length-1?"none":"1px solid #d6d6d6"},on:{click:function(){return t.handleFontChange(e)}}},[n("span",{staticClass:"menu-text",staticStyle:{"font-family":"system-ui, serif"}},[t._v(" "+t._s(e)+" ")]),e==t.selectedFont?n("div",{staticClass:"tick-container"},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512",height:"40%"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("path",{attrs:{d:"M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z"}})])]):t._e()])})),0),n("span",{staticClass:"menu-title"},[n("div",{staticClass:"menu-item-wrapper-row",staticStyle:{border:"none","justify-content":"flex-start"}},[n("div",{staticClass:"menu-item-backgroundcolor",staticStyle:{"background-color":"white",border:"1px solid #d6d6d6"},attrs:{role:"button"},on:{click:function(){return t.changeBackgroundColor("white")}}}),n("div",{staticClass:"menu-item-backgroundcolor",staticStyle:{"background-color":"black",border:"1px solid #d6d6d6"},attrs:{role:"button"},on:{click:function(){return t.changeBackgroundColor("black")}}})])]),n("span",{staticClass:"menu-title"},[t._v(" Font size ")]),n("div",{staticClass:"menu-item-wrapper-row"},[n("div",{staticClass:"flex center-items",staticStyle:{width:"50%","border-right":"1px solid #d6d6d6",cursor:"pointer"},on:{click:t.decreaseFontSize}},[t._v(" a ")]),n("div",{staticClass:"flex center-items",staticStyle:{width:"50%",cursor:"pointer"},on:{click:t.increaseFontSize}},[t._v(" A ")])]),n("span",{staticClass:"menu-title"},[t._v(" Size ")]),n("div",{staticClass:"menu-item-wrapper-row"},[n("div",{staticClass:"flex center-items",staticStyle:{width:"50%","border-right":"1px solid #d6d6d6",cursor:"pointer"},on:{click:t.decreaseDocumentSize}},[n("svg",{staticStyle:{height:"22px",width:"22px"},attrs:{xmlns:"http://www.w3.org/2000/svg",id:"Layer","enable-background":"new 0 0 64 64",height:"512",viewBox:"0 0 64 64",width:"512"}},[n("path",{attrs:{d:"m52.586 8.586-14.586 14.586v-5.172c0-1.104-.896-2-2-2s-2 .896-2 2v10c0 1.104.896 2 2 2h10c1.104 0 2-.896 2-2s-.896-2-2-2h-5.172l14.586-14.586c.781-.781.781-2.047 0-2.828s-2.047-.781-2.828 0z"}}),n("path",{attrs:{d:"m10 56c.512 0 1.023-.195 1.414-.586l14.586-14.586v5.172c0 1.104.896 2 2 2s2-.896 2-2v-10c0-1.104-.896-2-2-2h-10c-1.104 0-2 .896-2 2s.896 2 2 2h5.172l-14.586 14.586c-.781.781-.781 2.047 0 2.828.391.391.902.586 1.414.586z"}})])]),n("div",{staticClass:"flex center-items",staticStyle:{width:"50%",cursor:"pointer"},on:{click:t.increaseDocumentSize}},[n("svg",{staticStyle:{"enable-background":"new 0 0 512 512",height:"15px",width:"25px"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M492,0H344.212c-11.046,0-20,8.954-20,20s8.954,20,20,20h99.503L283.394,200.322c-7.811,7.811-7.811,20.474,0,28.284    c7.81,7.81,20.473,7.811,28.284,0L472,68.284v99.503c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V20    C512,9.115,503.154,0,492,0z"}})])]),n("g",[n("g",[n("path",{attrs:{d:"M228.606,283.394c-7.811-7.81-20.474-7.811-28.284,0L40,443.716v-99.503c0-11.046-8.954-20-20-20s-20,8.954-20,20V492    c0,10.866,8.853,20,20,20h147.788c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H68.284l160.322-160.322    C236.417,303.867,236.417,291.204,228.606,283.394z"}})])])])])]),n("button",{staticClass:"menu-title menu-item-wrapper-row",staticStyle:{"background-color":"white"},on:{click:t.resetToDefault}},[t._v("Reset to default")])]):t._e()])},A=[],Y={name:"Preferences",el:"#preferences-container",computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window}))},created:function(){this.setInitialPreferences()},data:function(){return{fonts:["Helvetica","'Roboto'","Quicksand"],selectedFont:"'Roboto'",iconFontSize:n("10db"),menuOpen:!1}},methods:{handleMenuClick:function(){this.menuOpen=!this.menuOpen},handleFontChange:function(t){var e=document.getElementsByClassName("bodywrapper")[0];e.style.fontFamily=t,localStorage.setItem("fontFamilyPreference",t),this.selectedFont=t},setInitialPreferences:function(){if(localStorage.getItem("fontFamilyPreference")){var t=document.getElementsByClassName("bodywrapper")[0];t.style.fontFamily=localStorage.getItem("fontFamilyPreference"),this.selectedFont=localStorage.getItem("fontFamilyPreference")}if(localStorage.getItem("fontSize")){var e=document.getElementsByClassName("bodywrapper")[0];e.setAttribute("style","font-size:".concat(localStorage.getItem("fontSize"),"px !important"))}if(localStorage.getItem("maxWidth")){var n=document.getElementsByClassName("documentwrapper")[0];n.setAttribute("style","max-width: ".concat(localStorage.getItem("maxWidth"),"px"))}},getGlobalFontSize:function(){var t=document.documentElement,e=window.getComputedStyle(t).fontSize;return e=e.replace("!important","").replace(/\s+/,"").replace("px",""),parseInt(e)},getBodyFontSize:function(){var t=document.getElementsByClassName("bodywrapper")[0],e=window.getComputedStyle(t).fontSize;return e=e.replace("!important","").replace(/\s+/,"").replace("px",""),parseInt(e)},getDocumentSize:function(){var t=document.getElementsByClassName("documentwrapper")[0],e=window.getComputedStyle(t).maxWidth.replace("!important","").replace(/\s+/,"").replace("px","");return parseInt(e)},increaseDocumentSize:function(){var t=document.getElementsByClassName("documentwrapper")[0],e=this.getDocumentSize();e=window.innerWidth>2e3?Math.min(e+100,1200):Math.min(e+100,840),t.setAttribute("style","max-width: ".concat(e,"px")),localStorage.setItem("maxWidth",e)},decreaseDocumentSize:function(){var t=document.getElementsByClassName("documentwrapper")[0],e=this.getDocumentSize();e=Math.max(e-100,400),t.setAttribute("style","max-width: ".concat(e,"px")),localStorage.setItem("maxWidth",e)},increaseFontSize:function(){var t=this.getBodyFontSize(),e=document.getElementsByClassName("bodywrapper")[0];t=Math.min(t+1,20),e.setAttribute("style","font-size:".concat(t,"px !important")),localStorage.setItem("fontSize",t)},decreaseFontSize:function(){var t=this.getBodyFontSize(),e=document.getElementsByClassName("bodywrapper")[0];t=Math.max(t-1,12),e.setAttribute("style","font-size:".concat(t,"px !important")),localStorage.setItem("fontSize",t)},changeBackgroundColor:function(t){var e=document.body;e.className="","black"==t?e.classList.add("black-container"):"white"==t&&e.classList.add("white-container")},resetToDefault:function(){var t=document.getElementsByClassName("bodywrapper")[0],e=document.getElementsByClassName("documentwrapper")[0];t.style.fontFamily=null,t.style.fontSize=null,e.style.maxWidth=null,localStorage.clear()}}},W=Y,H=(n("ace7"),n("5704"),Object(c["a"])(W,R,A,!1,null,"7980cc85",null)),U=H.exports,J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"sidebar-group",attrs:{id:"toctree"}},[n("p",{staticClass:"caption"},[n("span",{staticClass:"caption-text"},[n("a",{attrs:{href:t.pathto("index")}},[t._v("Reusable data best practices")])])]),t._m(0),t._m(1),n("p",{staticClass:"sidebar-header"},[t._v("Chapters")]),n("ul",{class:{current:t.toc.current}},t._l(t.toc.entries,(function(e){return n("li",{key:e.name,staticClass:"toctree-l1",class:{current:e.current}},[n("a",{staticClass:"reference internal",class:{current:e.current},attrs:{href:t.pathto(e.name)}},[t._v(t._s(e.title))]),e.children?n("ul",t._l(e.children,(function(e){return n("li",{key:e.name,staticClass:"toctree-l2"},[n("a",{staticClass:"reference internal",attrs:{href:t.pathto(e.href)}},[t._v(t._s(e.title))])])})),0):t._e()])})),0)])])},G=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"16px"}},[n("div",{attrs:{id:"search-container"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex",staticStyle:{"flex-direction":"column"}},[n("p",{staticClass:"sidebar-header"},[t._v("Contribute")]),n("a",{staticClass:"sidebar-button",attrs:{href:"https://github.com/newgene/reusable-data-best-practices/"}},[t._v(" Contribute to our github page ")])])}],V=(n("c975"),{el:"#toctree-container",data:function(){var t=JSON.parse(sessionStorage.getItem("toctree_data_json"));return{toc:t[0]}},methods:{pathto:function(t){var e=window.location.pathname;if(t.includes("#"))return t;if(e.includes("chapters")){var n=e.substring(0,e.indexOf("chapters"));return n+"".concat(t,".html")}if(e.includes("index.html")){var r=e.substring(0,e.indexOf("index.html"));return r+"".concat(t,".html")}if(e.includes("search.html")){var a=e.substring(0,e.indexOf("search.html"));return a+"".concat(t,".html")}return e+"".concat(t,".html")}}}),Q=V,K=Object(c["a"])(Q,J,G,!1,null,"7b6f5161",null),X=K.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"collapse-sidebar",attrs:{type:"button"},on:{click:t.onClick}},[n("svg",{staticClass:"svgCollapseButton",class:{svgOpenSidebar:this.isOpen},staticStyle:{"enable-background":"new 0 0 477.175 477.175"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 477.175 477.175","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5   c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z   "}})])])])},tt=[],et={el:"#toctree-collapse-container",data:function(){return{isOpen:!0}},computed:{console:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return console})),window:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){return window}))},created:function(){this.setInitialState(!0)},methods:{setOpen:function(t){var e=document.getElementById("sidebar-wrapper"),n=document.getElementById("content-wrapper");this.isOpen?(e.classList.remove("sidebar-group-hidden"),n.classList.remove("content-wrapper-full")):t?(e.style.transition="none",e.classList.add("sidebar-group-hidden"),setTimeout((function(){e.style.transition=null}),500),n.classList.add("content-wrapper-full")):(e.classList.add("sidebar-group-hidden"),n.classList.add("content-wrapper-full"))},setInitialState:function(){var t=localStorage.getItem("toctreeCollapseState");this.isOpen="true"==t,this.setOpen(!0)},onClick:function(){this.isOpen=!this.isOpen,localStorage.setItem("toctreeCollapseState",this.isOpen),this.setOpen()}}},nt=et,rt=(n("ff7d"),Object(c["a"])(nt,Z,tt,!1,null,"29681058",null)),at=rt.exports,st=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticStyle:{flex:"1"}}),n("a",{staticClass:"header-item",attrs:{target:"#"}},[t._v("About")])])}],ot={name:"Header",el:"#header-container"},ct=ot,lt=(n("d177"),Object(c["a"])(ct,st,it,!1,null,"b6573d6c",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._m(0),n("div",{staticStyle:{"margin-top":"30px"}},[n("small",[t._v("© Copyright "+t._s(t.currentYear)+", Reusable data best practices")])])])},mt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-items-wrapper"},[n("div",{staticClass:"footer-item"},[n("h3",{staticClass:"footer-title"},[t._v(" Sponsor ")]),n("span",[t._v("Stuff")]),n("span",[t._v("about")]),n("span",[t._v("sponsor")])]),n("div",{staticClass:"footer-item"},[n("h3",{staticClass:"footer-title"},[t._v(" Col 2 ")])])])}],ht={name:"Footer",el:"#footer-container",created:function(){this.getCurrentYear=this.getCurrentYear()},data:function(){return{currentYear:null}},methods:{getCurrentYear:function(){var t=new Date;this.currentYear=t.getFullYear()}}},pt=ht,ft=(n("e80f"),Object(c["a"])(pt,dt,mt,!1,null,"7e04eeee",null)),gt=ft.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(g)}}).$mount("#search-container"),new r["a"]({render:function(t){return t(S)}}).$mount("#go-to-top-container"),new r["a"]({render:function(t){return t(u)}}).$mount("#custom-collapse-container"),new r["a"]({render:function(t){return t(z)}}).$mount("#scroll-progression-container"),new r["a"]({render:function(t){return t($)}}).$mount("#estimated-read-time-container"),new r["a"]({render:function(t){return t(D)}}).$mount("#dynamic-chapter-search-container"),new r["a"]({render:function(t){return t(U)}}).$mount("#preferences-container"),new r["a"]({render:function(t){return t(X)}}).$mount("#toctree-container"),new r["a"]({render:function(t){return t(at)}}).$mount("#toctree-collapse-container"),new r["a"]({render:function(t){return t(ut)}}).$mount("#header-container"),new r["a"]({render:function(t){return t(gt)}}).$mount("#footer-container")},5704:function(t,e,n){"use strict";n("9d0c")},"70e5":function(t,e,n){},"71aa":function(t,e,n){},"81ef":function(t,e,n){"use strict";n("4a17")},8941:function(t,e,n){"use strict";n("1c85")},"9d0c":function(t,e,n){},ace7:function(t,e,n){"use strict";n("07e0")},bf30:function(t,e,n){"use strict";n("71aa")},d177:function(t,e,n){"use strict";n("1711")},e80f:function(t,e,n){"use strict";n("fb5d")},fb5d:function(t,e,n){},ff7d:function(t,e,n){"use strict";n("469c")}});
//# sourceMappingURL=index.c3168193.js.map