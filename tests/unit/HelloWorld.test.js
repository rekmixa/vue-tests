import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('render message', () => {
    const wrapper = mount(HelloWorld, {
      propsData: {
        msg: 'Hello world'
      }
    })
  
    expect(wrapper.text()).toContain('Hello world')
  })
})
