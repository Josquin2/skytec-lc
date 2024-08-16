import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import RemoteAccess from '@/views/RemoteAccess.vue'

describe('Remote Access Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(RemoteAccess)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(RemoteAccess)
    expect(wrapper.element).toMatchSnapshot()
  })
})
