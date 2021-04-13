import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('sk-button')
  })
})
