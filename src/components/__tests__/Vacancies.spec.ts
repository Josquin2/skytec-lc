import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Vacancies from '@/views/VacanciesPage.vue'

describe('Vacancies Page', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Vacancies)
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders correctly', () => {
    const wrapper = mount(Vacancies)
    expect(wrapper.element).toMatchSnapshot()
  })
})
