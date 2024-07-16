<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Api } from '@/api/api'

let ApiClass = new Api()

function onPasswordModalClick() {
  document.getElementById('confirm-password-modal')?.classList.toggle('modal-hidden')
}

const password = ref('')
const error = ref('')

const emit = defineEmits(['update:isUnlocked'])

async function onCheckButtonClick() {
  const user = JSON.parse(localStorage.getItem('user') || '')
  let resp = await ApiClass.post('user/login', {
    login: user.login,
    password: password.value
  })
  if (resp.code !== 200) {
    console.log('error', resp)
    error.value = resp.data
  } else {
    emit('update:isUnlocked', true)
    onPasswordModalClick()
    error.value = ''
  }
}
</script>

<template>
  <div class="confirm-password-modal modal-hidden" id="confirm-password-modal">
    <div class="background">
      <div class="h-white">
        <h2><img src="/img/cabinet/icons/lock-gray.svg" alt="" />Подтвердите пароль</h2>
        <input
          type="password"
          v-model="password"
          @keydown.enter="onCheckButtonClick()"
          placeholder="Пароль..."
        />
        <button class="check-password-button" @click="onCheckButtonClick()">Подтвердить</button>
        <p class="error">{{ error }}</p>
      </div>
      <div class="w-white"></div>
      <div class="full-bg">
        <span class="close-button" @click="onPasswordModalClick()"></span>
        <span class="bg-button"></span>
        <span class="bg-w"></span>
        <span class="bg-h"></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.confirm-password-modal {
  position: fixed;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .background {
    width: 454px;
    height: 350px;
    .h-white {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 399px;
      height: 300px;
      background-color: #ffffff;
      z-index: 13;
      border-radius: 27px;
      padding: 48px 0px 0px 56px;

      h2 {
        margin: 0;
        font-size: 16px;
        color: #898989;
        border: 1px solid #898989;
        border-radius: 7px;
        padding: 8px 16px;
        display: flex;
        align-items: center;

        img {
          width: 18px;
          margin-right: 4px;
        }
      }

      input {
        margin-top: 32px;
        padding-left: 16px;
        font-size: 16px;
        border: 1px solid #898989;
        border-radius: 24px;
        width: 376px;
        height: 56px;
      }

      .check-password-button {
        margin-top: 32px;
        width: 10vw;
        border: none;
        height: 56px;
        width: 376px;
        border-radius: 24px;
        color: #ffffff;
        background: linear-gradient(to right, #4766af, #46bed6);
      }

      .error {
        position: relative;
        margin-top: 24px;
        font-size: 16px;
        color: red;
      }
    }
    .w-white {
      margin-top: 55px;
      position: absolute;
      display: flex;
      width: 454px;
      height: 250px;
      background-color: #ffffff;
      z-index: 12;
      border-radius: 27px;
    }
    .full-bg {
      overflow: hidden;
      width: 454px;
      height: 300px;
      display: flex;
      position: absolute;
      background-color: #ffffff;
      z-index: 11;
      border-radius: 27px;
      align-items: flex-start;
      justify-content: flex-end;

      .close-button {
        cursor: pointer;
        width: 40px;
        height: 40px;
        background: url(/img/cabinet/icons/cross-white.svg) no-repeat;
        background-position: 50%;
        background-color: #4766af;
        border-radius: 50%;
        margin-top: 4px;
        margin-right: 4px;
        display: flex;
        z-index: 12;
      }
      .bg-button {
        width: 100px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        background-blend-mode: normal;
        position: absolute;
        z-index: 9;
        border-radius: 20px;
        margin-top: -45px;
        margin-right: -45px;
      }
      .bg-w {
        width: 100px;
        height: 25px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
        background-blend-mode: normal;
        margin-right: 55px;
      }
      .bg-h {
        margin-top: 55px;
        width: 25px;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
        position: absolute;
      }
    }
  }
}
</style>
