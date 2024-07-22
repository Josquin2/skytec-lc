import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import HomeView from '@/views/HomeView.vue'
import { useVuelidate } from '@vuelidate/core'

describe('LoginPage.vue', () => {
  it('has initial state values', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.vm.state.login).toBe('')
    expect(wrapper.vm.state.password).toBe('')
    expect(wrapper.vm.state.formError).toBe('')
  })
})

describe('LoginPage.vue - Validation', () => {
  it('requires login field', async () => {
    const wrapper = mount(HomeView)
    const loginInput = wrapper.find('#first-input-field')
    await loginInput.setValue('')
    wrapper.vm.v$.$touch()
    expect(wrapper.vm.v$.login.$error).toBe(true)
    expect(wrapper.vm.v$.login.$errors[0].$message).toBe('Value is required')
  })

  it('requires password field', async () => {
    const wrapper = mount(HomeView, {
      global: {
        plugins: [useVuelidate] // добавьте useVuelidate в опции монтирования
      }
    })
    const passwordInput = wrapper.find('#second-input-field')
    await passwordInput.setValue('')
    wrapper.vm.v$.$touch()
    expect(wrapper.vm.v$.password.$error).toBe(true)
    expect(wrapper.vm.v$.password.$errors[0].$message).toBe('Value is required')
  })

  it('enforces minimum password length', async () => {
    const wrapper = mount(HomeView)
    const passwordInput = wrapper.find('#second-input-field')
    await passwordInput.setValue('short')
    wrapper.vm.v$.$touch()
    expect(wrapper.vm.v$.password.$error).toBe(true)
    expect(wrapper.vm.v$.password.$errors[0].$message).toBe(
      'This field should be at least 6 characters long'
    )
  })
})

describe('LoginPage.vue - Form Submission', () => {
  it('sets form error on validation error', async () => {
    const wrapper = mount(HomeView)
    const button = wrapper.find('button')
    await button.trigger('click')
    expect(wrapper.vm.state.formError).toBe('Форма заполнена некорректно')
  })
})
