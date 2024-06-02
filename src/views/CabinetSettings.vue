<script setup lang="ts">
import LoadPhotoModal from '@/components/cabinet/LoadPhotoModal.vue'
import { onMounted, ref, type Ref } from 'vue'

import { Api } from '@/api/api'

import type { User as UserInterface } from '@/types/User'

const hidePhone = ref(false)

function onFirstCheckClick() {
  const firstCheck = document.getElementById('checkbox-1')?.classList
  if (firstCheck) {
    if (firstCheck.contains('clicked')) {
      firstCheck.remove('clicked')
      hidePhone.value = true
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

// API

let ApiClass = new Api()

let user: Ref<UserInterface | null> = ref(null)

onMounted(async () => {
  const response = await ApiClass.getObjects('user')
  user.value = response
  console.log(user.value)

  if (user.value) {
    hidePhone.value = user.value.hide_phone
    checkAllCheckBoxes()
  }
})

// Send changes

function onSaveChangesButtonClick() {
  // here is put function to current user
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

      <input type="text" :value="user?.firstname" readonly />

      <input type="text" :value="user?.lastname" readonly />

      <input type="text" :value="user?.surname" readonly />
    </div>
    <div class="contacts">
      <div class="contact-common phone">
        <h2>Телефон:</h2>
        <input type="text" :value="user?.phone" />

        <img src="" alt="" />
      </div>

      <div class="check" @click="onFirstCheckClick()">
        <div class="checkbox-button">
          <span id="checkbox-1"></span>
        </div>
        <p>Скрыть мобильный телефон</p>
      </div>

      <div class="contact-common email">
        <h2>E-mail:</h2>
        <input type="text" :value="user?.email" />
      </div>
    </div>
    <div class="job-info">
      <div class="info">
        <h2>Отдел:</h2>
        <input type="text" value="Отдел досуга" />
      </div>
      <div class="info">
        <h2>Должность:</h2>
        <input type="text" value="Менеджер по креативу" />
      </div>
      <div class="info">
        <h2>Непосредственный руководитель:</h2>
        <input type="text" value="Корнеева Наталья" />
      </div>
      <div class="check">
        <div class="checkbox-button" @click="onSecondCheckClick()">
          <span id="checkbox-2"></span>
        </div>
        <p>Я согласен на <a href=""> обработку персональных данных </a></p>
      </div>
    </div>

    <LoadPhotoModal />
  </div>
</template>
