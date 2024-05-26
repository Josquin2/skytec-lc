<script setup lang="ts">
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import router from '@/router'

const state = ref({
  login: '',
  password: ''
})

const rules = {
  login: { required },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state)

function onSignInButton() {
  v$.value.$touch()
  if (v$.value.$invalid) {
    console.log('Форма заполнена некорректно')
    document.getElementById('first-input-field')?.classList.add('wrong-input')
    document.getElementById('second-input-field')?.classList.add('wrong-input')
  } else {
    router.push({ name: 'main', params: { login: state.value.login } })
  }
}
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
            />
          </div>
        </div>
        <div class="bg-footer"><img src="/icons/logo.png" alt="" /></div>
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
