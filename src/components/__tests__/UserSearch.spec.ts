import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserSearch from '@/views/UserSearch.vue'

describe('User Search Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(UserSearch)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(UserSearch)
    expect(wrapper.element).toMatchSnapshot()
  })
})
