"use strict";(self["webpackChunk_sci_flare_test"]=self["webpackChunk_sci_flare_test"]||[]).push([[699],{4699:function(t,e,a){a.r(e),a.d(e,{default:function(){return v}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"header-tag":"header","header-bg-variant":"primary","header-text-variant":"white","border-variant":"primary"},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("h4",{staticClass:"mb-0"},[t._v("User detail")])]),a("div",{staticClass:"col-md-6 text-right"},[a("router-link",{attrs:{to:{path:"/users"}}},[a("button",{staticClass:"btn btn-alt"},[t._v("Back")])])],1)])]},proxy:!0}])},[t.loading?t._e():a("div",[a("CCallout",{attrs:{color:t.data.color+" w-75"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Name")])]),a("div",{staticClass:"col-md-8"},[t._v(" "+t._s(t.data.name)+" ")])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Designation")])]),a("div",{staticClass:"col-md-8"},[t._v(" "+t._s(t.data.designation)+" ")])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Organisation")])]),a("div",{staticClass:"col-md-8"},[t._v(" "+t._s(t.data.organisation)+" ")])])]),a("br"),a("CCallout",{attrs:{color:t.data.color+" w-75"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Username")])]),a("div",{staticClass:"col-md-8"},[t._v(" "+t._s(t.data.username)+" ")])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Role")])]),a("div",{staticClass:"col-md-8"},[t._v(" "+t._s(t.data.role)+" ")])]),a("br"),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("b",[t._v("Modules ")])]),a("div",{staticClass:"col-md-8"},t._l(t.data.modules,(function(e,s){return a("p",{key:s},[t._v(" "+t._s(e.name)+" ")])})),0)])])],1),t.loading?a("div",{staticClass:"loading"},[a("CCallout",{attrs:{color:"info"}},[a("data-skeleton")],1),a("CCallout",{attrs:{color:"info"}},[a("data-skeleton")],1),a("CCallout",{attrs:{color:"info"}},[a("data-skeleton")],1)],1):t._e()])},r=[];function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var l={name:"UserView",data:function(){return{data:{},loading:!0}},created:function(){var t=this;this.$http.get("users/".concat(this.$route.params.user)).then((function(e){var a,s=e.data.data;return t.data=n(n({},s),{},{color:null===(a=s.status_name)||void 0===a?void 0:a.split("-")[0]}),t.loading=!1}))}},c=l,d=a(1001),u=(0,d.Z)(c,s,r,!1,null,null,null),v=u.exports},1001:function(t,e,a){function s(t,e,a,s,r,o,n,i){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),s&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),n?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(n)},c._ssrRegister=l):r&&(l=i?function(){r.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:r),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(t,e){return l.call(e),d(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}a.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=699.7762c0ab.js.map