<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import router from '@/router'

import {Api} from '@/api/api'
import {User} from '@/api/user'

let ApiClass = new Api();
let UserClass = new User();

const state = ref({
  login: '',
  password: '',
  formError: '',
})

const rules = {
  login: { required },
  password: { required, minLength: minLength(6) }
}

const v$ = useVuelidate(rules, state)

onMounted(function () {
  checkAuth()
});

// Проверим авторизацию и валидность токена
async function checkAuth()
{
  let token = localStorage.getItem('token')

  if (token) {
    try {
      await UserClass.getUserData(token)
      let user = JSON.parse(localStorage.getItem('user'))
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
      'login': state.value.login,
      'password': state.value.password,
    }); // konstantinova_marina_maksimovna_z0qvs

    if (resp.code !== 200) {
      console.log('error', resp);
      state.value.formError = resp.data;
    } else {
      console.log(resp.data.user)
      localStorage.setItem('user', JSON.stringify(resp.data.user));
      localStorage.setItem('token', resp.data.token);

      router.push({ name: 'main', params: { login: state.value.login } })

      state.value.formError = '';
    }
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
            <p class="mb-5 text-danger mt-2" v-if="state.formError.length">{{ state.formError }}</p>
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
          background-color: #506dad;
          width: 150px;
          height: 20px;
          z-index: 4;
        }
        .button-blue-bg-h {
          display: block;
          position: absolute;
          background-color: #506dad;
          width: 20px;
          height: 150px;
          z-index: 4;
        }
        .button-bg {
          position: absolute;
          display: block;
          background-color: #506dad;
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
