export default {
  login(email, password) {
    return new Promise(resolve => {
      const response = {}
      if (email === 'test@user.loc') {
        if (password === 'password') {
          response.data = {
            token: 123
          }
        } else {
          response.data = {
            errors: ['Wrong password']
          }
        }
      } else {
        response.data = {
          errors: ['Wrong email']
        }
      }

      resolve(response)
    })
  },

  logout(token) {
    return new Promise(resolve => {
      const response = {}
      if (token === 123) {
        response.data = {
          success: true
        }
      }

      resolve(response)
    })
  }
}
