(function(t){function e(e){for(var o,r,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&f.push(i[r][0]),i[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},r={app:0},i={app:0},a=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-e7077ba4":"daa65786"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-e7077ba4":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-e7077ba4":"dbd4c2a8"}[t]+".css",i=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===i))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===o||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],d.parentNode.removeChild(d),n(a)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[t]=0})));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise((function(e,n){o=i[t]=[e,n]}));e.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"16ff":function(t,e,n){"use strict";var o=n("47f3"),r=n.n(o);r.a},"25e3":function(t,e,n){"use strict";var o=n("6ae1"),r=n.n(o);r.a},"2efa":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",[n("i",{staticClass:"fas fa-trash",on:{click:t.handleClick}})])},r=[],i=n("5530"),a=n("2f62"),s=n("8c15"),c={props:["id"],methods:Object(i["a"])(Object(i["a"])({},Object(a["c"])(["removeNote"])),{},{handleClick:function(){var t=this;s["a"].$emit("confirmation",{action:function(){t.removeNote(t.id),"/"!==t.$router.currentRoute.path&&t.$router.push("/todo")},text:"Delete note?"}),this.$emit("toggle-confirmation-popup")}})},u=c,l=(n("25e3"),n("2877")),f=Object(l["a"])(u,o,r,!1,null,"36bdef0a",null);e["a"]=f.exports},"47f3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{staticClass:"home-link",attrs:{to:"/todo"}},[t._v(" "+t._s(t.$route.params.id?"←notes":"notes")+" ")]),t.$route.params.id?t._e():n("NoteAddButton",{on:{"toggle-add-form":function(e){t.showAddNoteForm=!0}}})],1),n("ConfirmationPopup",{attrs:{show:t.showConfirmationPopup},on:{"toggle-confirmation-popup":function(e){t.showConfirmationPopup=!1}}}),n("NoteAddForm",{attrs:{show:t.showAddNoteForm},on:{"toggle-add-form":function(e){t.showAddNoteForm=!1}}}),n("transition",{attrs:{name:"slide"}},[n("router-view",{on:{"toggle-confirmation-popup":function(e){t.showConfirmationPopup=!0}}})],1)],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"fas fa-plus",on:{click:function(e){return t.$emit("toggle-add-form")}}})},s=[],c=(n("c2a6"),n("2877")),u={},l=Object(c["a"])(u,a,s,!1,null,"a06802ea",null),f=l.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide"}},[t.show?n("div",{staticClass:"pop-up add-note-form"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("h1",[t._v("Create note")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.noteTitle,expression:"noteTitle"}],attrs:{type:"text",placeholder:"Title"},domProps:{value:t.noteTitle},on:{input:function(e){e.target.composing||(t.noteTitle=e.target.value)}}})]),n("div",[n("button",{on:{click:t.submit}},[n("i",{staticClass:"fas fa-check",class:{inactiveButton:!t.noteTitle.trim()}})]),n("button",{on:{click:function(e){return e.stopPropagation(),t.discard(e)}}},[n("i",{staticClass:"fas fa-times"})])])]):t._e()]),n("Overlay",t._g({attrs:{show:t.show,emitOnClick:"toggle-add-form"}},t.$listeners))],1)},p=[],m=(n("498a"),n("5530")),h=n("2f62"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade"}},[t.show?n("div",{staticClass:"overlay",on:{click:function(e){return t.$emit(t.emitOnClick)}}}):t._e()])},b=[],g={props:["show","emitOnClick"]},w=g,_=Object(c["a"])(w,v,b,!1,null,"72f2d385",null),C=_.exports,y={computed:Object(h["b"])(["lastNoteCreated"]),data:function(){return{noteTitle:""}},props:["show"],methods:Object(m["a"])(Object(m["a"])({},Object(h["c"])(["createNote"])),{},{discard:function(){this.noteTitle="",this.$emit("toggle-add-form")},submit:function(){this.noteTitle.trim()&&(this.createNote(this.noteTitle.trim()),this.noteTitle="",this.$emit("toggle-add-form"))}}),components:{Overlay:C}},O=y,N=(n("c253"),Object(c["a"])(O,d,p,!1,null,"93d01666",null)),k=N.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:"slide"}},[t.show?n("div",{staticClass:"pop-up confirmation-popup"},[n("h1",[t._v(t._s(t.text))]),n("div",[n("button",{on:{click:t.handleAccept}},[n("i",{staticClass:"fas fa-check"})]),n("button",{on:{click:function(e){return t.$emit("toggle-confirmation-popup")}}},[n("i",{staticClass:"fas fa-times"})])])]):t._e()]),n("Overlay",t._g({attrs:{show:t.show,emitOnClick:"toggle-confirmation-popup"}},t.$listeners))],1)},$=[],x=n("8c15"),T={props:["show"],data:function(){return{text:"",action:void 0}},components:{Overlay:C},methods:{handleAccept:function(){this.action(),this.$emit("toggle-confirmation-popup")}},mounted:function(){var t=this;x["a"].$on("confirmation",(function(e){t.text=e.text,t.action=e.action}))}},P=T,E=(n("f08d"),Object(c["a"])(P,j,$,!1,null,"381698f1",null)),A=E.exports,S={data:function(){return{showAddNoteForm:!1,showConfirmationPopup:!1}},methods:{},components:{NoteAddButton:f,NoteAddForm:k,ConfirmationPopup:A}},B=S,D=(n("034f"),Object(c["a"])(B,r,i,!1,null,null,null)),F=D.exports,L=(n("d3b7"),n("8c4f")),M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute-center"},[n("div",{staticClass:"relative-center"},t._l(t.allNotes,(function(e){return n("router-link",{key:e.id,staticClass:"component-link",attrs:{to:"/todo/notes/"+e.id}},[n("NotePreview",t._g({attrs:{note:e}},t.$listeners))],1)})),1)])},H=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"note"},[n("h1",[t._v(t._s(t.note.title))]),n("hr"),n("ul",t._l(t.previewTodo,(function(e){return n("li",{key:e.id,staticClass:"todo"},[t._v(" "+t._s(e.text)+" ")])})),0),n("hr"),n("div",{staticClass:"delete-wrapper",on:{click:function(t){t.preventDefault()}}},[n("NoteDeleteButton",t._g({attrs:{id:t.note.id}},t.$listeners))],1)])},q=[],J=(n("4de4"),n("fb6a"),n("2efa")),K={props:["note"],components:{NoteDeleteButton:J["a"]},computed:{previewTodo:function(){var t=this.note.todoList.filter((function(t){return!1===t.status}));return t.length>5&&(t=t.slice(0,4),t.push({id:"dots",text:"..."})),t}}},R=K,U=(n("16ff"),Object(c["a"])(R,I,q,!1,null,"db422b1e",null)),V=U.exports,z={name:"Home",computed:Object(h["b"])(["allNotes"]),components:{NotePreview:V}},G=z,Q=(n("81a5"),Object(c["a"])(G,M,H,!1,null,"6ea4d56a",null)),W=Q.exports;o["a"].use(L["a"]);var X=[{path:"/todo",name:"Home",component:W},{path:"/todo/notes/:id",name:"NoteView",component:function(){return n.e("chunk-e7077ba4").then(n.bind(null,"a017"))}}],Y=new L["a"]({mode:"history",base:"/",routes:X}),Z=Y,tt=(n("7db0"),n("bfa9")),et=new tt["a"]({storage:window.localStorage});o["a"].use(h["a"]);var nt=new h["a"].Store({state:{lastNoteCreated:-1,notes:[]},mutations:{createNote:function(t,e){var n=t.lastNoteCreated+1,o={title:e,id:n,todoList:[]};t.notes.push(o),t.lastNoteCreated=n},removeNote:function(t,e){t.notes=t.notes.filter((function(t){return t.id!==e}))},updateNote:function(t,e){var n=t.notes.find((function(t){return t.id===e.id}));Object.assign(n,e)}},actions:{},getters:{allNotes:function(t){return t.notes},noteById:function(t){return function(e){return t.notes.find((function(t){return t.id===parseInt(e)}))}},lastNoteCreated:function(t){return t.lastNoteCreated}},plugins:[et.plugin]});o["a"].config.productionTip=!1,new o["a"]({router:Z,store:nt,render:function(t){return t(F)}}).$mount("#app")},"6ae1":function(t,e,n){},"81a5":function(t,e,n){"use strict";var o=n("9e1a"),r=n.n(o);r.a},"85ec":function(t,e,n){},"8c15":function(t,e,n){"use strict";var o=n("2b0e"),r=new o["a"];e["a"]=r},"9e1a":function(t,e,n){},b4b0:function(t,e,n){},c253:function(t,e,n){"use strict";var o=n("b4b0"),r=n.n(o);r.a},c2a6:function(t,e,n){"use strict";var o=n("ffda"),r=n.n(o);r.a},e898:function(t,e,n){},f08d:function(t,e,n){"use strict";var o=n("e898"),r=n.n(o);r.a},ffda:function(t,e,n){}});
//# sourceMappingURL=app.e9fb3f27.js.map