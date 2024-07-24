import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import GlobalSearch from '@/views/GlobalSearch.vue'

describe('Global Search Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(GlobalSearch)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(GlobalSearch)
    expect(wrapper.element).toMatchSnapshot()
  })
})
