import axios from 'axios'

export default {
  install(Vue) {
    Vue.prototype.$apiClient = {
      login(email, password) {
        return axios.post(`${process.env.VUE_APP_API_URL}/login`, {
          email,
          password
        })
      },

      logout(token) {
        return axios.post(`${process.env.VUE_APP_API_URL}/logout`, {
          token
        })
      }
    }
  }
}
