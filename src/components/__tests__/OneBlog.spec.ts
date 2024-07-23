import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import OneBlog from '@/views/OneBlog.vue'

describe('One Blog Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(OneBlog)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(OneBlog)
    expect(wrapper.element).toMatchSnapshot()
  })
})
