import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  status:Boolean,
  payload:{},
  token:localStorage.getItem('token')||'',
  message:'',
  public:'http://localhost/MyApp/passport/apis/',  
  has_audio:(localStorage.getItem('has_audio')),
  pagination:{}
}

const actions ={
    AUTH_LOGIN: function({commit,dispatch},auth){
       return new Promise((resolve,reject) =>{
          axios({url:"login",
              method:'POST',
              data:auth
          }).then((response) => {
              const serverData = response.data
              localStorage.setItem('has_audio', auth.has_audio);
              if(serverData.status){
                const message = serverData.message
                axios.defaults.headers.common['Authorization'] = `Bearer ${serverData.data.token}`
                localStorage.setItem('token', serverData.data.token);
                commit('LOGIN_SUCCSS', serverData.data.admin, message)
              }
              else{
                commit('AUTH_FAILURE')
              }
              resolve(response)
          }).catch(err =>{
              commit('AUTH_FAILURE')
              reject(err)
          })
       })
    },

    AUTO_LOGIN: function({commit,dispatch}){
      return new Promise((resolve,reject) =>{
        axios.get('profile').then(response => {
            const serverData=response.data;
            axios.defaults.headers.common['Authorization'] = `Bearer ${serverData.data.token}`
            localStorage.setItem('token', serverData.data.token)           
            commit('LOGIN_SUCCSS', serverData.data.admin, serverData.message)
            resolve(response)
        }).catch(err =>{
            commit('AUTH_FAILURE')
            reject(err)
        })
      })
    },

    AUTH_LOGOUT: function({commit}){
      return new Promise((resolve,reject) =>{
         axios({url:"logout",
             method:'GET'
         }).then((response) => {
              localStorage.removeItem('token')
              localStorage.removeItem('has_audio')
              delete axios.defaults.headers.common['Authorization'];
              const message = response.data.message
              commit('LOGOUT_SUCCSS',message)
              resolve(response)
         }).catch(err =>{
              commit('AUTH_FAILURE')
              reject(err)
         })
      })
    }
}

const mutations = {
    toggleSidebarDesktop (state) {
      const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile (state) {
      const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
      state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set (state, [variable, value]) {
      state[variable] = value
    },
    setPagination (state, [previous, route]) {
      state.pagination = {...previous, route}
    },
    LOGIN_SUCCSS: function(state,payload,message){
      state.status = true
      state.payload = payload
      state.token = localStorage.getItem('token')||'',
      state.has_audio=(localStorage.getItem('has_audio'));
      state.message = message
    },
    LOGOUT_SUCCSS: function(state,message){
      delete axios.defaults.headers.common['Authorization']
      state.status = false
      state.payload = ''
      state.token = '',
      state.message = message
    },
    AUTH_FAILURE : function(state){
      state.status = false
      state.payload = ''
      state.token = ''
      state.has_audio=(localStorage.getItem('has_audio'));
    }
}
const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  getPayload: state => state.payload,
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})