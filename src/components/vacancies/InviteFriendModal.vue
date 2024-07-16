<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { FileApi } from '@/api/files'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const ApiClass = new FileApi()

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}
const token = localStorage.getItem('user') || ''

const myData = JSON.parse(token) // for value in myName and mySurname

const resumeStatus = ref('Прикрепить резюме')

const friendsName = ref('')
const friendsContacts = ref('')
const friendsVacancy = ref('')
const myName = ref(myData.firstname)
const mySurname = ref(myData.surname)
const formData = new FormData()

function handleFile(event: Event) {
  resumeStatus.value = 'Резюме прикреплено!'
  const inputElement = event.target as HTMLInputElement
  if (inputElement && inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0]

    formData.append('file', file)
  }
}

async function onSendClick() {
  formData.append('data[Имя Друга]', friendsName.value)
  formData.append('data[Контакты Друга]', friendsContacts.value)
  formData.append('data[Вакансия]', friendsVacancy.value)
  formData.append('data[Имя Отправителя]', myName.value)
  formData.append('data[Фамилия Отправителя]', mySurname.value)

  try {
    const returnedFile = await ApiClass.post('invite-friend', formData)
    console.log(returnedFile)

    toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
    onInviteFriendModalClick()
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="invite-modal modal-hidden" id="invite-modal">
    <div class="invite-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <h2>Привести друга!</h2>
            <p>Укажите контактные данные вашего друга</p>
          </div>

          <div class="text">
            <input type="text" v-model="friendsName" placeholder="Имя:" />
            <input type="text" v-model="friendsContacts" placeholder="Телефон/E-mail:" />
            <input type="text" v-model="friendsVacancy" placeholder="Вакансия:" />
          </div>

          <label class="resume">
            <p>{{ resumeStatus }}</p>
            <img src="/img/cabinet/icons/file-blue.svg" alt="" />
            <input type="file" @change="handleFile" style="display: none" />
          </label>

          <div class="my-name">
            <p>Укажите ваши данные</p>
            <input type="text" v-model="myName" placeholder="Имя:" />
            <input type="text" v-model="mySurname" placeholder="Фамилия:" />
          </div>

          <button @click="onSendClick">Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onInviteFriendModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>
