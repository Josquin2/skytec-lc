<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import router from '@/router'

import { Api } from '@/api/api'
import { User } from '@/api/user'

let ApiClass = new Api()
let UserClass = new User()

const state = ref({
  login: '',
  password: '',
  formError: ''
})

const rules = {
  login: { required },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state)

onMounted(function () {
  checkAuth()
})

// Проверим авторизацию и валидность токена
async function checkAuth() {
  let token = localStorage.getItem('token')
  let userFromLocalStorage = localStorage.getItem('user') || ''

  if (token) {
    try {
      await UserClass.getUserData(token)
      let user = JSON.parse(userFromLocalStorage)
      router.push({ name: 'main', params: { login: user.login } })
    } catch (error) {
      console.error('error')
    }
  }
}

async function onSignInButton() {
  v$.value.$touch()
  if (v$.value.$invalid) {
    state.value.formError = 'Форма заполнена некорректно'
    const firstInputField = document.getElementById('first-input-field')
    const secondInputField = document.getElementById('second-input-field')
    firstInputField?.classList.add('wrong-input')
    secondInputField?.classList.add('wrong-input')
  } else {
    let resp = await ApiClass.post('user/login', {
      login: state.value.login,
      password: state.value.password
    })

    if (resp.code !== 200) {
      console.log('error', resp)
      state.value.formError = resp.data
    } else {
      console.log(resp.data)
      localStorage.setItem('user', JSON.stringify(resp.data.user))
      localStorage.setItem('token', resp.data.token)
      localStorage.setItem('permissions', JSON.stringify(resp.data.permissions))

      router.push({ name: 'main', params: { login: state.value.login } })

      state.value.formError = ''
    }
  }
}
defineExpose({ state, v$ })
</script>

<template>
  <div class="login-block">
    <div class="login-common">
      <h1>Вход в Sky Alliance</h1>
      <div class="rectangle-menu">
        <div class="bg-upper">
          <div class="login-password-input">
            <input
              type="text"
              placeholder="Логин*"
              class="input"
              v-model="state.login"
              id="first-input-field"
            />
            <input
              type="password"
              placeholder="Пароль*"
              class="input"
              v-model="state.password"
              id="second-input-field"
              @keydown.enter="onSignInButton()"
            />
            <p
              class="mb-5 text-danger mt-2"
              style="margin-bottom: 0 !important; width: fit-content"
              v-if="state.formError.length"
            >
              {{ state.formError }}
            </p>
          </div>
        </div>
        <div class="bg-footer"><img src="@/assets/img/logo-black.png" alt="" /></div>
        <div class="bg-bg">
          <span class="button-blue-bg-w"></span>
          <span class="button-blue-bg-h"></span>
          <span class="button-bg"></span>
          <button class="button-common-circle" @click="onSignInButton()">Войти</button>
        </div>
      </div>
    </div>
  </div>
</template>
