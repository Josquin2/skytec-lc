import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DocumentsPage from '@/views/DocumentsPage.vue'

describe('Documents Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(DocumentsPage)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(DocumentsPage)
    expect(wrapper.element).toMatchSnapshot()
  })
})
