"use strict";(self["webpackChunk_sci_flare_test"]=self["webpackChunk_sci_flare_test"]||[]).push([[577],{8331:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("CDropdown",{staticClass:"c-header-nav-items",attrs:{inNav:"",placement:"bottom-end","add-menu-classes":"pt-0"},scopedSlots:t._u([{key:"toggler",fn:function(){return[n("CHeaderNavLink",[n("div",{staticClass:"c-avatar"},[n("img",{staticClass:"c-avatar-img",attrs:{src:t.profile}})])])]},proxy:!0}])},[n("CDropdownHeader",{staticClass:"text-center animate__animated animate__fadeInDown",attrs:{tag:"div",color:"light"}},[n("strong",[t._v("Account")])]),n("CDropdownItem",{staticClass:"animate__animated animate__fadeInDown",on:{click:t.logout}},[n("CIcon",{attrs:{name:"cil-lock-locked"}}),t._v("Logout ")],1)],1)},a=[];function o(t,e,n,r,a,o,c){try{var s=t[o](c),i=s.value}catch(u){return void n(u)}s.done?e(i):Promise.resolve(i).then(r,a)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var c=t.apply(e,n);function s(t){o(c,r,a,s,i,"next",t)}function i(t){o(c,r,a,s,i,"throw",t)}s(void 0)}))}}var s={name:"TheHeaderDropdownAccnt",data:function(){return{itemsCount:42,profile:""}},created:function(){var t=this;return c(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("AUTO_LOGIN");case 2:return t.profile="".concat(t.$store.state.public,"public").concat(t.$store.state.payload.profile),e.abrupt("return",t.$router.currentRoute.path);case 4:case"end":return e.stop()}}),e)})))()},methods:{logout:function(){var t=this;this.$store.dispatch("AUTH_LOGOUT").then((function(){t.audioNotify("You are logged out successfully"),t.$router.push("/login")}))}}},i=s,u=n(1001),l=(0,u.Z)(i,r,a,!1,null,"6d3bebb0",null),d=l.exports}}]);
//# sourceMappingURL=577.54ff0528.js.map