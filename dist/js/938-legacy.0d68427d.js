"use strict";(self["webpackChunk_sci_flare_test"]=self["webpackChunk_sci_flare_test"]||[]).push([[938],{6279:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",[n("data-table",{attrs:{labels:t.labels,data:t.organisations,is_data_waiting:t.is_data_waiting,pagination:t.filter},on:{pagination:t.getPagingRecords,search:t.getPagingRecords}})],1)],1)},i=[],r=n(4176);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e,n,a,i,r,s){try{var o=t[r](s),c=o.value}catch(u){return void n(u)}o.done?e(c):Promise.resolve(c).then(a,i)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){u(r,a,i,s,o,"next",t)}function o(t){u(r,a,i,s,o,"throw",t)}s(void 0)}))}}var f={name:"UserList",data:function(){return{organisations:[],filter:{search:"",page:1,last:null,next:2,prev:null,offset:0,limit:10},labels:{columns:["S.No.","Name","No. of users","Status","Action"],rows:["name","users","status"],path:"/organisations",actions:{edit:!1,view:!1,status:!0,s_no:!0}},is_data_waiting:!0}},created:function(){var t=this;return l(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.$store.state.pagination,e.t0=n.route===t.$route.path,e.next=!0===e.t0?4:!1===e.t0?7:9;break;case 4:return delete n.route,t.filter=n,e.abrupt("break",9);case 7:return t.filter,e.abrupt("break",9);case 9:t.getOrganisations(t.filter),r.N.$on("status",(function(e){var n="active"==e.status_name.split("-")[1]?"de-activate":"activate",a="success"==e.status_name.split("-")[1]?"danger":"success";t.$alert.Swal.fire({html:"Do you <b class='text-".concat(a,"'>").concat(n,"</b> of ").concat(e.name),title:"Organisation Management",confirmButtonColor:"#0f9ca6",showDenyButton:!0,confirmButtonText:"Yes, ".concat(n),denyButtonText:"No",reverseButtons:!0,allowOutsideClick:!1,allowEscapeKey:!1}).then((function(n){n.isConfirmed&&(t.$alert.processing("Status Changing ..."),t.$http.put("users/status",{id:e.id,type:"organisation"}).then((function(e){var n=e.data.data.status_name.split("-")[1];t.audioNotify("Organisation ".concat(n," successfully")),t.$alert.toast("Organisation ".concat(n," successfully"),"info"),t.is_data_waiting=!0,t.getOrganisations(t.filter)})))}))}));case 11:case"end":return e.stop()}}),e)})))()},methods:{getOrganisations:function(t){var e=this;this.$http.post("organisations",t).then((function(t){e.is_data_waiting=!1,e.organisations=t.data.data.organisations;var n=t.data.data.pagination,a=n.page,i=n.prev,r=n.last,s=n.next,c=n.limit,u=n.offset;e.filter=o(o({},e.filter),{},{page:a,prev:i,last:r,next:s,limit:c,offset:u})}))},getPagingRecords:function(t){var e=t.limit,n=t.page,a=t.search;this.is_data_waiting=!0,this.getOrganisations(o(o({},this.filter),{},{offset:0,limit:e,page:n,search:a}))},makeFilter:function(){this.is_data_waiting=!0,r.N.$emit("clearSearch"),this.getOrganisations(o(o({},this.filter),{},{page:1,prev:null,next:2,offset:0}))},makeClear:function(){var t=this;Object.getOwnPropertyNames(this.filter).forEach((function(e){t.filter[e]=""})),r.N.$emit("clearSearch"),r.N.$emit("clearRange"),this.filter=o(o({},this.filter),{},{page:1,next:2,prev:null,limit:10,offset:0,type:this.$route.params.member_type,did_save:1}),this.$store.commit("setPagination",[{},""]),this.is_data_waiting=!0,this.getOrganisations(this.filter)}}},p=f,g=n(1001),d=(0,g.Z)(p,a,i,!1,null,null,null),h=d.exports},1001:function(t,e,n){function a(t,e,n,a,i,r,s,o){var c,u="function"===typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),a&&(u.functional=!0),r&&(u._scopeId="data-v-"+r),s?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=c):i&&(c=o?function(){i.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:u}}n.d(e,{Z:function(){return a}})},4176:function(t,e,n){n.d(e,{N:function(){return i}});var a=n(538),i=new a.Z}}]);
//# sourceMappingURL=938-legacy.0d68427d.js.map