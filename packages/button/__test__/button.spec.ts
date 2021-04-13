import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

describe('sk-button', () => {
  it('create', () => {
    const wrapper = mount(Button)
    expect(wrapper.classes()).toContain('sk-button')
  })

  it('type primary', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('primary')
  })
})
