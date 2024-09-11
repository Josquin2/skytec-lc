<script setup lang="ts">
import { ref } from 'vue'
import { Api } from '@/api/api'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const location = ref('')
const request = ref('')

// API

let ApiClass = new Api()
const token = localStorage.getItem('token')

async function onSendRequestClick() {
  try {
    if (token) {
      await ApiClass.post(`requests/axo`, {
        location: location.value,
        request: request.value
      })
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="create-new-employee-block">
    <div class="create-header">
      <h1>Заявка в АХО</h1>
      <h2>Укажите кому необходима помощь</h2>
    </div>
    <div class="create-body">
      <input type="text" v-model="location" placeholder="Расположение:" />

      <textarea v-model="request" placeholder="Ваш запрос:"></textarea>
    </div>
    <div class="create-button">
      <button @click="onSendRequestClick">Отправить</button>
    </div>
  </div>
</template>

<style lang="scss">
.create-new-employee-block {
  .create-header {
    h1 {
      font-size: 20px;
      color: #4766af;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      margin: 0;
    }
  }
  .create-body {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    input {
      height: 56px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding-left: 16px;
      margin-bottom: 16px;
    }

    textarea {
      resize: none;
      height: 98px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding: 16px;
    }
  }
  .create-button {
    button {
      margin-top: 16px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border: none;
      border-radius: 10px;
      height: 56px;
      width: 33.59vw;
      color: #fff;
    }
  }
}
</style>
