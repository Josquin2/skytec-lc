import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HelpDeskRequest from '@/views/HelpDeskRequest.vue'

describe('Help Desk Request Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(HelpDeskRequest)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(HelpDeskRequest)
    expect(wrapper.element).toMatchSnapshot()
  })
})
