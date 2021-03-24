export default {
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
}
