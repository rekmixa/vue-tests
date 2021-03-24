import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store'
import ApiClient from '@/api-client.js'

Vue.use(Vuex)
Vue.use(ApiClient)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: new Vuex.Store(store),
}).$mount('#app')
