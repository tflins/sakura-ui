import { mount } from '@vue/test-utils'
import Input from '..'

describe('sk-input', () => {
  it('创建成功', () => {
    const wrapper = mount(Input)
    expect(wrapper.classes()).toContain('sk-input')
  })
})
