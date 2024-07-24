import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AhoRequest from '@/views/AhoRequest.vue'

describe('AXO Request Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(AhoRequest)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(AhoRequest)
    expect(wrapper.element).toMatchSnapshot()
  })
})
