import axios from 'axios'

export default class ApiClient {
  static login(email, password) {
    return axios.post(`${process.env.VUE_APP_API_URL}/login`, {
      email,
      password
    })
  }

  static logout(token) {
    return axios.post(`${process.env.VUE_APP_API_URL}/logout`, {
      token
    })
  }
}
