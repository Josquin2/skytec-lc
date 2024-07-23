import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import AllBlogs from '@/views/AllBlogs.vue'

describe('All Blogs Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(AllBlogs)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(AllBlogs)
    expect(wrapper.element).toMatchSnapshot()
  })
})
