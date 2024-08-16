import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PrivilegePage from '@/views/PrivilegePage.vue'

describe('Privilege Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(PrivilegePage)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(PrivilegePage)
    expect(wrapper.element).toMatchSnapshot()
  })
})
