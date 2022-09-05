"use strict";(self["webpackChunk_sci_flare_test"]=self["webpackChunk_sci_flare_test"]||[]).push([[245],{2245:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{overflow:"auto"}},[a("div",{staticClass:"d-flex justify-content-between"},[a("b-form-select",{staticClass:"mb-3 w-25",on:{change:t.limitationSelect},model:{value:t.perPage,callback:function(e){t.perPage=e},expression:"perPage"}},t._l(t.ranges,(function(e){return a("b-form-select-option",{key:e.index,attrs:{value:e,selected:e==t.perPage}},[t._v(t._s(e))])})),1),t._t("default"),a("b-form-input",{staticClass:"w-25",attrs:{placeholder:"Search ..."},on:{input:t.termSearch},model:{value:t.searchterm,callback:function(e){t.searchterm=e},expression:"searchterm"}})],2),t.is_data_waiting?a("table",{staticClass:"table table-striped"},[a("thead",{staticStyle:{"background-image":"linear-gradient(#083770,#5e0d53)",color:"white","font-weight":"bold"}},[a("tr",t._l(t.labels.columns,(function(e){return a("th",{key:e.id,attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),a("tbody",[a("tr",[a("td",{attrs:{colspan:t.labels.columns.length}},[a("data-skeleton")],1)])])]):a("table",{staticClass:"table table-striped",staticStyle:{overflow:"auto"}},[a("thead",{staticStyle:{"background-image":"linear-gradient(#083770,#5e0d53)",color:"white","font-weight":"bold"}},[a("tr",t._l(t.labels.columns,(function(e){return a("th",{key:e.id,staticStyle:{"white-space":"nowrap"},attrs:{scope:"col"}},[t._v(" "+t._s(e)+" ")])})),0)]),t.data.length?a("tbody",{staticStyle:{"font-size":"13.8px"}},t._l(t.data,(function(e,i){return a("tr",{key:i},[t.labels.actions.s_no?a("td",{attrs:{scope:"row"}},[t._v(t._s(parseInt(i)+parseInt(t.offset)+1))]):t._e(),t.labels.actions.multiselect?a("td",{attrs:{scope:"row"}},[a("b-form-checkbox",{on:{input:function(a){return t.getMultiselect(e.id,i)}}})],1):t._e(),t._l(t.labels.rows,(function(i,n){return a("td",{key:n,attrs:{scope:"row"}},["status"==i?a("p",[a("b-badge",{attrs:{pill:"",variant:e.status_name.split("-")[0]}},[t._v(t._s(e.status_name.split("-")[1]))])],1):a("p",{staticStyle:{"white-space":"nowrap"}},[t._v(" "+t._s(2==i.split(".").length?e[i.split(".")[0]][i.split(".")[1]]:e[i])+" ")])])})),a("td",{staticClass:"d-flex",attrs:{scope:"row"}},[t.labels.actions.status?a("button",{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{title:"change status"},on:{click:function(a){return t.decide(e,"status")}}},[a("i",{staticClass:"fa fa-envelope text-success"})]):t._e(),t.labels.actions.edit?a("router-link",{attrs:{title:"edit",to:{path:t.labels.path+"/edit/"+e.id}}},[a("button",{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{title:"edit"},on:{click:function(e){return t.$store.commit("setPagination",[t.pagination,t.$route.path])}}},[a("i",{staticClass:"fa fa-paint-brush text-info"})])]):t._e(),t.labels.actions.view?a("router-link",{attrs:{title:"view",to:{path:t.labels.path+"/view/"+e.id}}},[a("button",{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{title:"view"},on:{click:function(e){return t.$store.commit("setPagination",[t.pagination,t.$route.path])}}},[a("i",{staticClass:"fa fa-eye text-primary"})])]):t._e(),t.labels.actions.delete?a("button",{staticClass:"btn btn-sm btn-secondary mr-2",on:{click:function(a){return t.decide(e,"delete")}}},[a("i",{staticClass:"fa fa-trash text-danger"})]):t._e(),t.labels.actions.close?a("button",{staticClass:"btn btn-sm btn-secondary mr-2",attrs:{title:"Edit"},on:{click:function(a){return t.decide(e,"edit")}}},[a("i",{staticClass:"fa fa-paint-brush text-info"})]):t._e()],1)],2)})),0):a("tbody",[a("tr",{staticClass:"text-center"},[a("td",{attrs:{colspan:t.labels.columns.length}},[t._v("No Records Available")])])])]),a("hr"),t.data.length?a("div",{staticClass:"d-flex justify-content-end"},[a("nav",{attrs:{"aria-label":"..."}},[a("ul",{staticClass:"pagination"},[a("li",{class:1==t.pagination.page?"page-item disabled":"page-item",on:{click:function(e){1!=t.pagination.page&&t.prevPageSelection}}},[a("p",{staticClass:"page-link"},[t._v("Prev")])]),t._l(t.pagination.last,(function(e){return a("li",{key:e.index,class:t.pagination.page==e?"page-item active":"page-item",attrs:{disabled:(e>t.pagination.next||e<=t.pagination.prev)&&e!=t.pagination.last},on:{click:function(a){return t.pageSelection(e)}}},[e==t.pagination.page||e==t.pagination.prev||e==t.pagination.next||1==e||e==t.pagination.last?a("p",{staticClass:"page-link"},[t._v(t._s(e))]):e==t.pagination.page+2||e==t.pagination.page-2?a("p",{staticClass:"page-link"},[t._v("...")]):t._e()])})),a("li",{class:t.pagination.page==t.pagination.last?"page-item disabled":"page-item",on:{click:function(e){t.pagination.page!=t.pagination.last&&t.nextPageSelection}}},[a("p",{staticClass:"page-link"},[t._v("Next")])])],2)])]):t._e()])},n=[],s=a(4176),o={name:"DataTable",props:{labels:{},data:[],is_data_waiting:Boolean,pagination:{},invitee_types:[]},data:function(){return{perPage:this.pagination.limit,currentPage:this.pagination.page,offset:this.pagination.offset,ranges:[10,25,50],searchterm:"",selectedData:[]}},methods:{limitationSelect:function(){this.offset=0,this.currentPage=1,this.$emit("pagination",{limit:this.perPage,page:this.currentPage,search:this.searchterm})},pageSelection:function(t){this.currentPage=parseInt(t),this.offset=t>1?parseInt(this.perPage)*parseInt(t-1):0,this.$emit("pagination",{limit:this.perPage,page:t,search:this.searchterm})},prevPageSelection:function(){this.currentPage=this.pagination.prev,this.pageSelection(this.currentPage)},nextPageSelection:function(){this.currentPage=this.pagination.next,this.pageSelection(this.currentPage)},termSearch:function(){this.offset=0,this.currentPage=1,this.$emit("search",{limit:this.perPage,page:this.currentPage,search:this.searchterm})},getMultiselect:function(t,e){switch(t==this.selectedData[e]){case!0:this.selectedData[e]="";break;default:this.selectedData[e]=t;break}s.N.$emit("multiselect",this.selectedData)},decide:function(t,e){s.N.$emit(e,t)},manipulate:function(t){return"".concat(t.split(" ").slice(0,12).join(" ")," ...")}},created:function(){var t=this;s.N.$on("clearSearch",(function(){t.searchterm=""})),s.N.$on("clearRange",(function(){t.perPage=10})),s.N.$on("clear_multiselect",(function(){t.selectedData=[]}))},updated:function(){this.offset=this.pagination.offset}},r=o,l=a(1001),c=(0,l.Z)(r,i,n,!1,null,"678b8a54",null),p=c.exports},1001:function(t,e,a){function i(t,e,a,i,n,s,o,r){var l,c="function"===typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=a,c._compiled=!0),i&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=r?function(){n.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var p=c.render;c.render=function(t,e){return l.call(e),p(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}a.d(e,{Z:function(){return i}})},4176:function(t,e,a){a.d(e,{N:function(){return n}});var i=a(538),n=new i.Z}}]);
//# sourceMappingURL=245.c6484457.js.map