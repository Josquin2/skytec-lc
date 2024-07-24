import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import MeetingRoom from '@/views/MeetingRoom.vue'

describe('MeetingRoom Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(MeetingRoom)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(MeetingRoom)
    expect(wrapper.element).toMatchSnapshot()
  })
})
