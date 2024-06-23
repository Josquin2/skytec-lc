<script setup lang="ts">
import { ref } from 'vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { Api } from '@/api/api'

function onCheckBoxClick() {
  const nameInput = document.getElementById('name') as HTMLInputElement
  const check = document.getElementById('idea-checkbox')

  if (check && nameInput) {
    if (check.classList.contains('clicked')) {
      anon.value = false
      check.classList.remove('clicked')
      name.value = prevName.value
      nameInput.disabled = false
    } else {
      anon.value = true
      check.classList.add('clicked')
      prevName.value = name.value
      name.value = ''
      nameInput.disabled = true
    }
  }
}

function onIdeaClick() {
  document.getElementById('idea')?.classList.toggle('hidden')
}

const prevName = ref('')

const anon = ref(false)
const name = ref('')
const idea = ref('')

// API

let ApiClass = new Api()
const token = localStorage.getItem('token')

async function onSendIdeaClick() {
  try {
    if (token) {
      await ApiClass.post('business-idea', {
        name: name.value,
        idea: idea.value,
        anonimous: anon.value
      })
      toast('Ваша идея отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
    }
  } catch (error) {
    toast('Ошибка при отправке!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="idea">
    <h2>У меня есть идея для бизнеса</h2>
    <button @click="onIdeaClick()">Предложить</button>
  </div>
  <div class="idea-message hidden" id="idea">
    <input type="text" placeholder="Имя и Фамилия" class="name" id="name" v-model="name" />
    <textarea placeholder="Ваша идея" class="your-idea" v-model="idea"></textarea>
    <div class="checkbox">
      <span class="checkbox-common" id="idea-checkbox" @click="onCheckBoxClick()"></span>
      <p>Предложить анонимно</p>
    </div>
    <button @click="onSendIdeaClick">Отправить</button>
  </div>
</template>

<style lang="scss"></style>
