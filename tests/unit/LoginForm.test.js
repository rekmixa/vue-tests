import 'babel-polyfill'

import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'
import store from '@/store'
import apiClient from './mocks/api-client.js'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('LoginForm.vue', () => {
  beforeEach(() => {
    localStorage.removeItem('authToken')
  })

  it('success login', async () => {
    const vuexStore = new Vuex.Store({
      ...store,
      state: {
        ...store.state,
        authToken: null
      }
    })

    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore,
      mocks: {
        $apiClient: apiClient
      }
    })

    await wrapper.find('#email-input').setValue('test@user.loc')
    await wrapper.find('#password-input').setValue('password')
    await wrapper.find('#login-submit').trigger('click')

    expect(vuexStore.state.authToken).not.toBeNull()
    expect(wrapper.find('#logout-submit').exists()).toBeTruthy()
  })

  it('success logout', async () => {
    const vuexStore = new Vuex.Store({
      ...store,
      state: {
        ...store.state,
        authToken: 123
      }
    })

    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore,
      mocks: {
        $apiClient: apiClient
      }
    })

    await wrapper.find('#logout-submit').trigger('click')

    expect(vuexStore.state.authToken).toBeNull()
    expect(wrapper.find('#logout-submit').exists()).toBeFalsy()
  })

  it('fail logout', async () => {
    const vuexStore = new Vuex.Store({
      ...store,
      state: {
        ...store.state,
        authToken: 321
      }
    })

    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore,
      mocks: {
        $apiClient: apiClient
      }
    })

    await wrapper.find('#logout-submit').trigger('click')

    expect(vuexStore.state.authToken).not.toBeNull()
    expect(wrapper.find('#logout-submit').exists()).toBeTruthy()
  })

  it('fail login: wrong password', async () => {
    const vuexStore = new Vuex.Store({
      ...store,
      state: {
        ...store.state,
        authToken: null
      }
    })

    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore,
      mocks: {
        $apiClient: apiClient
      }
    })

    await wrapper.find('#email-input').setValue('test@user.loc')
    await wrapper.find('#password-input').setValue('wrong')
    await wrapper.find('#login-submit').trigger('click')

    expect(vuexStore.state.authToken).toBeNull()
    expect(wrapper.text()).toContain('Wrong password')
    expect(wrapper.find('#logout-submit').exists()).toBeFalsy()
  })

  it('fail login: wrong email', async () => {
    const vuexStore = new Vuex.Store({
      ...store,
      state: {
        ...store.state,
        authToken: null
      }
    })

    const wrapper = mount(LoginForm, {
      localVue,
      store: vuexStore,
      mocks: {
        $apiClient: apiClient
      }
    })

    await wrapper.find('#email-input').setValue('wrong@user.loc')
    await wrapper.find('#password-input').setValue('password')
    await wrapper.find('#login-submit').trigger('click')

    expect(vuexStore.state.authToken).toBeNull()
    expect(wrapper.text()).toContain('Wrong email')
    expect(wrapper.find('#logout-submit').exists()).toBeFalsy()
  })
})
