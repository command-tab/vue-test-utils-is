import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld'

const defaultOptions = {
  propsData: {
    msg: 'Hello world'
  }
}

describe('HelloWorld', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HelloWorld, defaultOptions)
    // expect(wrapper.isVueInstance()).toBeTruthy() // vue-test-utils beta 33 syntax
    expect(wrapper.exists()).toBeTruthy() // vue-test-utils 1.0.0 syntax
  })

  test('renders a valid h1 tag', () => {
    const wrapper = mount(HelloWorld, defaultOptions)

    // Assert tag name
    const h1 = wrapper.find('h1')
    expect(h1.element.tagName).toBe('H1')

    // Assert props being set
    expect(wrapper.text()).toBe('Hello world')
  })
})
