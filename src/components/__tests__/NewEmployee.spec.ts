import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import NewEmployee from '@/views/NewEmployee.vue'

describe('New Employee Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(NewEmployee)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(NewEmployee)
    expect(wrapper.element).toMatchSnapshot()
  })
})
