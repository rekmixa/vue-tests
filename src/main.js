import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authToken: localStorage.getItem('authToken')
  },
  mutations: {
    saveAuthToken (state, payload) {
      state.authToken = payload
      localStorage.setItem('authToken', payload)
    },

    removeAuthToken(state) {
      state.authToken = null
      localStorage.removeItem('authToken')
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
