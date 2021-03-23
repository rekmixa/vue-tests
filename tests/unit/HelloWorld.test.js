// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(HelloWorld, {
    propsData: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
