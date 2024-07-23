import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AboutCompany from '@/views/AboutCompany.vue'

describe('About Company Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(AboutCompany)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(AboutCompany)
    expect(wrapper.element).toMatchSnapshot()
  })
})
