import 'babel-polyfill'

import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'
import store from '@/store'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('LoginForm.vue', () => {
  it('success log in', async () => {
    const vuexStore = new Vuex.Store(store)
    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore
    })

    await wrapper.find('#email-input').setValue('test@user.loc')
    await wrapper.find('#password-input').setValue('password')
    await wrapper.find('#login-submit').trigger('click')
  })
})
