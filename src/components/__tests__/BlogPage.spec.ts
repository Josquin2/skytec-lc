import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BlogPage from '@/views/BlogPage.vue'

describe('Blog Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(BlogPage)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(BlogPage)
    expect(wrapper.element).toMatchSnapshot()
  })
})
