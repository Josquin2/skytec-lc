<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import router from '@/router'
import { stat } from 'fs'

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
    router.push({ name: 'user', params: { login: state.value.login } })
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
<style lang="scss">
.login-block {
  background: url(/img/bg.png) no-repeat;
  background-size: 100% 100%;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-common {
    margin-top: -252px;
    h1 {
      width: 424px;
      text-transform: uppercase;
      font-size: 32px;
      color: #fff;
    }
    .rectangle-menu {
      .bg-upper {
        display: block;
        position: absolute;
        width: 424px;
        height: 170px;
        background-color: #fff;
        z-index: 6;
        border-radius: 20px 20px;
        .login-password-input {
          position: absolute;
          margin-top: 24px;
          margin-left: 24px;
          z-index: 7;
          display: flex;
          flex-direction: column;
          .input {
            width: 376px;
            height: 56px;
            border: 1px solid #000;
            border-radius: 24px;
            margin-bottom: 10px;
            padding-left: 16px;
            font-size: 16px;
          }
          .wrong-input {
            border: 1px solid red;
          }
        }
      }
      .bg-footer {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        position: absolute;
        width: 340px;
        height: 252px;
        background-color: #fff;
        border-radius: 20px 0 20px 20px;
        z-index: 5;
        img {
          margin-left: 24px;
          margin-bottom: 16px;
        }
      }
      .bg-bg {
        display: flex;
        position: absolute;
        width: 424px;
        height: 252px;
        background-color: #fff;
        align-items: flex-end;
        justify-content: flex-end;
        border-radius: 20px;
        z-index: 3;
        .button-blue-bg-w {
          display: block;
          position: absolute;
          background-color: #4766af;
          width: 150px;
          height: 20px;
          z-index: 4;
        }
        .button-blue-bg-h {
          display: block;
          position: absolute;
          background-color: #4766af;
          width: 20px;
          height: 150px;
          z-index: 4;
        }
        .button-bg {
          position: absolute;
          display: block;
          background-color: #4766af;
          width: 84px;
          height: 82px;
          border-radius: 50px 0 0 0;
          z-index: 2;
        }
        .button-common-circle {
          position: absolute;
          display: block;
          width: 72px;
          height: 72px;
          text-align: center;
          border-radius: 50%;
          border: none;
          background-color: #fff;
          z-index: 4;
        }
      }
    }
  }
}
</style>
