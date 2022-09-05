import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// Containers
const TheContainer = () => import('@/containers/TheContainer')

// Views
const Login = () => import('@/views/Login')
const Users = () => import('@/views/Users/List')
const Organisations = () => import('@/views/Organisations/List')
const UserEdit = () => import('@/views/Users/Edit')
const UserView = () => import('@/views/Users/View')
const Page404 = () => import('@/views/Errors/404')

Vue.use(Router)


var router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/users',
      name: 'Home',
      component: TheContainer,
      children: [
        {
          path: 'users',
          name: 'Users Management',
          component: Users,
          beforeEnter: (to, from, next) => {
            if (store.getters.isLoggedIn && store.getters.authStatus) {
              return next()
            }
            return next('/login')
          }
        },
        {
          path: 'users/edit/:user',
          name: 'Users Management / Edit',
          component: UserEdit,
          beforeEnter: (to, from, next) => {
            if (store.getters.isLoggedIn && store.getters.authStatus) {
              return next()
            }
            return next('/login')
          }
        },
        {
          path: 'users/view/:user',
          name: 'Users Management / View',
          component: UserView,
          beforeEnter: (to, from, next) => {
            if (store.getters.isLoggedIn && store.getters.authStatus) {
              return next()
            }
            return next('/login')
          }
        },
        {
          path: 'organisations',
          name: 'Organisations Management',
          component: Organisations,
          beforeEnter: (to, from, next) => {
            if (store.getters.isLoggedIn && store.getters.authStatus) {
              return next()
            }
            return next('/login')
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },      
    {
      path: '*',
      name: '404',
      component: Page404
    },
  ]
})


export default router;