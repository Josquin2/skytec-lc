import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import Cabinet from '@/views/Cabinet.vue'

describe('Cabinet Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Cabinet)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(Cabinet)
    expect(wrapper.element).toMatchSnapshot()
  })
})
