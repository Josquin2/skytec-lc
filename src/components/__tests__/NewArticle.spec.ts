import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NewArticle from '@/views/NewArticle.vue'

describe('New Article Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(NewArticle)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(NewArticle)
    expect(wrapper.element).toMatchSnapshot()
  })
})
