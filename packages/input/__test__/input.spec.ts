import { mount } from '@vue/test-utils'
import Input from '..'

describe('sk-input', () => {
  it('εε»Ίζε', () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).toContain('sk-input')
  })
})
