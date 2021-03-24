<template>
  <div>
    <template v-if="$store.state.authToken">
      <input type="submit" value="Log out" id="logout-submit" @click="logout" />
    </template>
    <template v-else>
      <div v-if="success">
        Success auth!
      </div>
      <div v-else-if="errors.length">
        <div v-for="(error, index) in errors" :key="index">
          {{ error }}
        </div>
      </div>
      <input type="email" placeholder="Email" id="email-input" v-model="email" />
      <input type="password" placeholder="Password" id="password-input" v-model="password" />
      <input type="submit" value="Log in" id="login-submit" @click="login" />
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    email: null,
    password: null,
    success: false,
    errors: []
  }),

  methods: {
    async login() {
      await this.$apiClient.login(this.email, this.password)
        .then(response => {
          if (response?.data?.errors) {
            this.errors = response.data.errors

            return
          }

          if (response?.data?.token) {
            this.success = true
            this.errors = []

            this.$store.commit('saveAuthToken', response.data.token)
          }
        })
        .catch(error => {
          this.errors = [error]
        })
    },

    async logout() {
      await this.$apiClient.logout(this.$store.state.authToken)
        .then(response => {
          if (response?.data?.success) {
            this.$store.commit('removeAuthToken')
          }
        })
    }
  }
}
</script>
