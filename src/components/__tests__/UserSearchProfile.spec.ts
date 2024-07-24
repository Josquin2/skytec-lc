import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserSearchProfile from '@/views/UserSearchProfile.vue'

describe('User Search Profile Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(UserSearchProfile)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(UserSearchProfile)
    expect(wrapper.element).toMatchSnapshot()
  })
})
