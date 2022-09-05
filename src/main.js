import Vue from 'vue'
const App = () => import('./App')
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import {FormPlugin,FormInputPlugin,
  FormSelectPlugin,ButtonPlugin,FormFilePlugin,
  CardPlugin,BadgePlugin,ModalPlugin,TabsPlugin,FormCheckboxPlugin} from 'bootstrap-vue'

import alerts from './sweetalerts';
import Vuelidate from 'vuelidate'
import axiosConfig from './config/proxy.config'
import store from './store/'
import 'babel-polyfill'
import './mixins'

Vue.config.performance = true

Vue.use(CoreuiVue)
Vue.use(FormPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormCheckboxPlugin)
Vue.use(FormSelectPlugin)
Vue.use(CardPlugin)
Vue.use(BadgePlugin)
Vue.use(ButtonPlugin)
Vue.use(FormFilePlugin)
Vue.use(ModalPlugin)
Vue.use(TabsPlugin)
Vue.use(Vuelidate)

Vue.prototype.$http = axiosConfig.axios;
Vue.prototype.$alert = alerts;

//Global components
Vue.component('alert', () => import('./components/Alert'))
Vue.component('Breadcrumb', () => import('./components/Breadcrumb'))
Vue.component('message', () => import('./components/Message'))
Vue.component('data-table', () => import('./components/DataTable'))
Vue.component('table-skeleton', () => import('./components/TableSkeleton'))
Vue.component('data-skeleton', () => import('./components/DataSkeleton'))

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
