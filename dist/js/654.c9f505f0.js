"use strict";(self["webpackChunk_sci_flare_test"]=self["webpackChunk_sci_flare_test"]||[]).push([[654],{2654:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CSidebar",{staticStyle:{"background-image":"linear-gradient(#12373d,#2d8896)"},attrs:{fixed:"",minimize:e.minimize,show:e.show},on:{"update:show":function(t){return e.$store.commit("set",["sidebarShow",t])}}},[n("CSidebarBrand",{staticClass:"d-md-down-none"},[e._v(" "+e._s(e.$store.state.payload.name)+" ")]),n("CRenderFunction",{attrs:{flat:"","content-to-render":e.getMenus}}),n("CSidebarMinimizer",{staticClass:"d-md-down-none",nativeOn:{click:function(t){return e.$store.commit("set",["sidebarMinimize",!e.minimize])}}})],1)},r=[],a={name:"TheSidebar",computed:{show:function(){return this.$store.state.sidebarShow},minimize:function(){return this.$store.state.sidebarMinimize},getMenus:function(){var e,t=null===(e=this.$store.state.payload.role)||void 0===e?void 0:e.modules.map((function(e){return e.uri?{_name:"CSidebarNavItem",name:e.name,to:e.uri,icon:e.icon}:{_name:"CSidebarNavTitle",_children:[e.name]}}));return[{_name:"CSidebarNav",_children:t}]}}},s=a,o=n(1001),d=(0,o.Z)(s,i,r,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=654.c9f505f0.js.map