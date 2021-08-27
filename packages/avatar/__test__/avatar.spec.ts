import { mount } from '@vue/test-utils'
import Avatar from '../index'

describe('sk-avatar', () => {
  it('create', () => {
    const wrapper = mount(Avatar)
    expect(wrapper.classes()).toContain('sk-avatar')
  })
})
