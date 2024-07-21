import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => {
  it('renders login form', () => {
    const wrapper = mount(HomeView)

    expect(wrapper.find('input[type="text"]').exists()).toBe(true)
    expect(wrapper.find('input[type="password"]').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Войти')
  })

  it('validates form input', async () => {
    const wrapper = mount(HomeView)

    await wrapper.find('button').trigger('click')

    await wrapper.vm.$nextTick()

    expect(wrapper.vm.state.formError).toBe('Форма заполнена некорректно')
    expect(wrapper.find('#first-input-field').classes()).toContain('wrong-input')
    expect(wrapper.find('#second-input-field').classes()).toContain('wrong-input')
  })

  it('submits form data', async () => {
    const wrapper = mount(HomeView)

    await wrapper.find('input[type="text"]').setValue('testuser')
    await wrapper.find('input[type="password"]').setValue('testpassword')
    await wrapper.find('button').trigger('click')

    // here should be expect if data sending correctly
  })
})
