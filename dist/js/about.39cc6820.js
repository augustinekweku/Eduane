(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("v-layout",{attrs:{column:""}},[s("h1",{staticClass:"title my-3"},[t._v("My Recipes")]),t._l(t.userRecipes,function(e,n){return s("div",{key:n,staticClass:"subheading mb-2"},[t._v("\n            "+t._s(e)+"\n        ")])}),s("v-flex",{attrs:{"mt-4":""}},[s("v-btn",{attrs:{color:"primary",to:"/menu"}},[t._v("Go To Menu")])],1)],2)],1)},i=[],u={name:"About",computed:{userRecipes:function(){return this.$store.state.userRecipes}},mounted:function(){this.getRecipes()},methods:{getRecipes:function(){this.$store.dispatch("getUserRecipes")}}},c=u,o=s("2877"),r=Object(o["a"])(c,n,i,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=about.39cc6820.js.map