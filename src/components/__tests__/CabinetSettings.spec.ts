import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CabinetSettings from '@/views/CabinetSettings.vue'

describe('Cabinet Settings Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(CabinetSettings)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(CabinetSettings)
    expect(wrapper.element).toMatchSnapshot()
  })
})
