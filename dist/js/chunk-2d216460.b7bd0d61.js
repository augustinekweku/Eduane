(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216460"],{c283:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("v-container",{attrs:{"fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"primary"}},[r("v-toolbar-title",[e._v("Form")])],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(a){e.valid=a},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:e.emailRules,required:""},model:{value:e.email,callback:function(a){e.email=a},expression:"email"}}),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",id:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(a){e.password=a},expression:"password"}})],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"primary",disabled:!e.valid},on:{click:e.submit}},[e._v("\n                         Join")])],1)],1)],1)],1)],1)],1)},s=[],i={name:"Join",data:function(){return{valid:!1,email:"",password:"",emailRules:[function(e){return!!e||"Email is required"},function(e){return/.+@.+/.test(e)||"Email must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.$store.dispatch("userJoin",{email:this.email,password:this.password})}}},l=i,n=r("2877"),o=Object(n["a"])(l,t,s,!1,null,"23e5d29c",null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d216460.b7bd0d61.js.map