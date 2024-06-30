<script setup lang="ts">
import LoadPhotoModal from '@/components/cabinet/LoadPhotoModal.vue'
import SettingsPencil from '@/components/cabinet/icons/SettingsPencil.vue'
import { onMounted, ref, type Ref } from 'vue'

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

function onSecondCheckClick() {
  const secondCheck = document.getElementById('checkbox-2')?.classList
  if (secondCheck) {
    secondCheck.toggle('clicked')
  }
}

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}

function checkAllCheckBoxes() {
  const firstCheck = document.getElementById('checkbox-1')?.classList

  if (hidePhone.value == true) {
    firstCheck?.add('clicked')
  }
}

// All variables

const manager = ref('Менеджер')
const department = ref('Какой-то отдел')
const position = ref('')
const hidePhone = ref(false)
const userPhone = ref('')
const firstName = ref('')
const surname = ref('')
const lastName = ref('')
const email = ref('')

// API | Get info

let ApiClass = new Api()

let user: Ref<UserInterface | null> = ref(null)

onMounted(async () => {
  const response = await ApiClass.getObjects('user')
  user.value = response.data.user
  userPhone.value = user.value?.phone || ''
  firstName.value = user.value?.firstname || ''
  surname.value = user.value?.surname || ''
  lastName.value = user.value?.lastname || ''
  email.value = user.value?.email || ''
  position.value = user.value?.position || ''
  manager.value = user.value?.manager.surname + ' ' + user.value?.manager.firstname
  department.value = user.value?.department.title || ' '

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
    if (token) {
      await ApiClass.put(`user?id=${currentUserId.id}`, {
        firstname: firstName.value,
        lastname: lastName.value,
        surname: surname.value,
        name: lastName.value + ' ' + firstName.value + ' ' + surname.value,
        phone: userPhone.value,
        email: email.value,
        hide_phone: hidePhone.value,
        position: position.value
      })
      toast('Изменения сохранены!', { position: toast.POSITION.BOTTOM_RIGHT })
    }
  } catch (error) {
    toast('Ошибка при отправке запроса!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
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
    <div class="name">
      <div>
        <h2>ФИО:</h2>
        <img src="/img/cabinet/icons/lock-gray.svg" alt="" />
      </div>

      <input type="text" v-model="surname" readonly />

      <input type="text" v-model="firstName" readonly />

      <input type="text" v-model="lastName" readonly />
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
        <input type="text" v-model="department" />
      </div>
      <div class="info">
        <h2>Должность:</h2>
        <input type="text" v-model="position" />
      </div>
      <div class="info">
        <h2>Непосредственный руководитель:</h2>
        <input type="text" v-model="manager" />
      </div>
      <div class="check">
        <div class="checkbox-button noselect" @click="onSecondCheckClick()">
          <span id="checkbox-2"></span>
        </div>
        <p>Я согласен на <a href=""> обработку персональных данных </a></p>
      </div>
    </div>

    <LoadPhotoModal />
  </div>
</template>
