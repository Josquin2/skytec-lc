import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import OneNews from '@/views/OneNews.vue'

describe('One News Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(OneNews)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(OneNews)
    expect(wrapper.element).toMatchSnapshot()
  })
})
