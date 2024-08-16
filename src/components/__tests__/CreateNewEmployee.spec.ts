import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import CreateNewEmployee from '@/views/CreateNewEmployee.vue'

describe('Create New Employee Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(CreateNewEmployee)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(CreateNewEmployee)
    expect(wrapper.element).toMatchSnapshot()
  })
})
