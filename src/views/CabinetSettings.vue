<script setup lang="ts">
import LoadPhotoModal from '@/components/cabinet/LoadPhotoModal.vue'
import ConfirmPasswordModal from '@/components/cabinet/ConfirmPasswordModal.vue'
import { onMounted, watch, ref, type Ref } from 'vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { Api } from '@/api/api'

import type { User as UserInterface } from '@/types/User'

function onFirstCheckClick() {
  const firstCheck = document.getElementById('checkbox-1')?.classList
  if (firstCheck) {
    if (firstCheck.contains('clicked')) {
      firstCheck.remove('clicked')
      hidePhone.value = false
    } else {
      firstCheck.add('clicked')
      hidePhone.value = true
    }
  }
}

const personalData: Ref<boolean> = ref(false)

function onSecondCheckClick() {
  const secondCheck = document.getElementById('checkbox-2')?.classList
  if (secondCheck?.contains('clicked')) {
    secondCheck.remove('clicked')
    personalData.value = false
  } else {
    secondCheck?.add('clicked')
    personalData.value = true
    secondCheck?.remove('error')
  }
}

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}

function onPasswordModalClick() {
  document.getElementById('confirm-password-modal')?.classList.toggle('modal-hidden')
}

function checkAllCheckBoxes() {
  console.log(hidePhone.value)
  const firstCheck = document.getElementById('checkbox-1')?.classList

  if (hidePhone.value == true) {
    firstCheck?.add('clicked')
  }
}

// All variables

const manager = ref('Не указан')
const department = ref('Не указан')
const position = ref('Не указана')
const hidePhone = ref(false)
const userPhone = ref('Не указан')
const firstName = ref('')
const surname = ref('')
const lastName = ref('')
const email = ref('Не указан')

// API | Get info

let ApiClass = new Api()

let user: Ref<UserInterface | null> = ref(null)

onMounted(async () => {
  const response = await ApiClass.getObjects('user')
  user.value = response.data.user
  if (user.value !== null) {
    userPhone.value = user.value.phone
    firstName.value = user.value.firstname
    surname.value = user.value.surname
    lastName.value = user.value.lastname
    email.value = user.value.email
    position.value = user.value.position
    department.value = user.value.department.title

    if (user.value.manager) {
      manager.value = user.value?.manager.surname + ' ' + user.value?.manager.firstname
    }
  }
  console.log(user.value)

  if (user.value) {
    hidePhone.value = user.value.hide_phone
    checkAllCheckBoxes()
  }
})

// API | Send changes

const token = localStorage.getItem('token')
const currentUserId = JSON.parse(localStorage.getItem('user') || '')

async function onSaveChangesButtonClick() {
  try {
    if (token && personalData.value == true) {
      let resp = await ApiClass.put(`user?id=${currentUserId.id}`, {
        firstname: firstName.value,
        lastname: lastName.value,
        surname: surname.value,
        name: lastName.value + ' ' + firstName.value + ' ' + surname.value,
        phone: userPhone.value,
        email: email.value,
        hide_phone: hidePhone.value,
        position: position.value
      })
      console.log(resp)
      toast('Изменения сохранены!', { position: toast.POSITION.BOTTOM_RIGHT })

      localStorage.removeItem('user')
      localStorage.setItem('user', JSON.stringify(resp))
    } else {
      document.getElementById('checkbox-2')?.classList.add('error')
      toast('Необходимо согласиться с обработкой персональных данных!', {
        position: toast.POSITION.BOTTOM_RIGHT
      })
    }
  } catch (error) {
    toast('Ошибка при отправке запроса!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}

// unlock Name

const isUnlocked = ref(false)

function onNameClick() {
  if (isUnlocked.value == false) {
    onPasswordModalClick()
  }
}

async function PhotoChanged() {
  const response = await ApiClass.getObjects('user')
  if (user.value) {
    user.value.avatar = response.data.user.avatar
  }
}
</script>

<template>
  <div class="settings-block">
    <div class="photo-and-accept-changes">
      <div class="change-photo">
        <img :src="user?.avatar" alt="" class="photo" />
        <span @click="onPhotoChangeModal()"
          ><img src="/img/cabinet/icons/pen-white.svg" alt=""
        /></span>
      </div>

      <div class="accept-changes" @click="onSaveChangesButtonClick()">
        <img src="/img/cabinet/icons/approve-blue.svg" alt="" />
        Сохранить изменения
      </div>
    </div>
    <div :class="isUnlocked ? 'active name' : 'name'">
      <div>
        <h2>ФИО:</h2>
        <img
          src="/img/cabinet/icons/lock-gray.svg"
          alt=""
          @click="onPasswordModalClick"
          v-if="!isUnlocked"
        />
      </div>

      <input type="text" v-model="surname" :readonly="!isUnlocked" @click="onNameClick" />

      <input type="text" v-model="firstName" :readonly="!isUnlocked" @click="onNameClick" />

      <input type="text" v-model="lastName" :readonly="!isUnlocked" @click="onNameClick" />
    </div>
    <div class="contacts">
      <div class="contact-common">
        <h2>Телефон:</h2>
        <div class="phone">
          <input type="text" v-model="userPhone" />

          <img src="/img/cabinet/icons/pen-blue.svg" alt="" />
        </div>
      </div>

      <div class="check" @click="onFirstCheckClick()">
        <div class="checkbox-button noselect">
          <span id="checkbox-1"></span>
        </div>
        <p>Скрыть мобильный телефон</p>
      </div>

      <div class="contact-common email">
        <h2>E-mail:</h2>
        <input type="text" v-model="email" />
      </div>
    </div>
    <div class="job-info">
      <div class="info">
        <h2>Отдел:</h2>
        <input type="text" v-model="department" readonly />
      </div>
      <div class="info">
        <h2>Должность:</h2>
        <input type="text" v-model="position" readonly />
      </div>
      <div class="info">
        <h2>Непосредственный руководитель:</h2>
        <input type="text" v-model="manager" readonly />
      </div>
      <div class="check">
        <div class="checkbox-button noselect" @click="onSecondCheckClick()">
          <span id="checkbox-2"></span>
        </div>
        <p>Я согласен на <a href=""> обработку персональных данных </a></p>
      </div>
    </div>

    <LoadPhotoModal @photoChanged="PhotoChanged" />
    <ConfirmPasswordModal v-model:isUnlocked="isUnlocked" />
  </div>
</template>
