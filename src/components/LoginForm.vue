<template>
  <div>
    <template v-if="$store.state.authToken">
      <input type="submit" value="Log out" @click="logout" />
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
      <input type="text" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <input type="submit" value="Log in" @click="login" />
    </template>
  </div>
</template>

<script>
import ApiClient from '@/api-client.js'

export default {
  data: () => ({
    email: null,
    password: null,
    success: false,
    errors: []
  }),

  methods: {
    async login() {
      await ApiClient.login(this.email, this.password)
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
      await ApiClient.logout(this.$store.state.authToken)
        .then(response => {
          if (response?.data?.success) {
            this.$store.commit('removeAuthToken')
          }
        })
    }
  }
}
</script>
