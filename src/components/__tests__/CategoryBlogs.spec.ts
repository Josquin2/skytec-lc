import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CategoryBlogs from '@/views/CategoryBlogs.vue'

describe('Category Blogs Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(CategoryBlogs)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(CategoryBlogs)
    expect(wrapper.element).toMatchSnapshot()
  })
})
