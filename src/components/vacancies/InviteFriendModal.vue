<script setup lang="ts">
import { onMounted, ref } from 'vue'

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

function handleFile(event: Event) {
  resumeStatus.value = 'Резюме прикреплено!'
  const inputElement = event.target as HTMLInputElement
  if (inputElement && inputElement.files && inputElement.files.length > 0) {
    const file = inputElement.files[0]
    const url = URL.createObjectURL(file)

    // here goes api methods

    // delete this
    const link = document.createElement('a')
    link.href = url
    link.download = file.name
    link.click()
    //
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

          <button>Отправить</button>
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
