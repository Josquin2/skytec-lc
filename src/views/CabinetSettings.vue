<script setup lang="ts">
import LoadPhotoModal from '@/components/cabinet/LoadPhotoModal.vue'

import { Api } from '@/api/api'
import { User } from '@/api/user'
import { onMounted, ref, type Ref } from 'vue'
import type { User as UserInterface } from '@/types/User'

let ApiClass = new Api()
let UserClass = new User()

let userData: Ref<UserInterface[]> = ref([])

onMounted(() => {
  userData.value = JSON.parse(localStorage.getItem('user'));
})

function onFirstCheckClick() {
  document.getElementById('checkbox-1')?.classList.toggle('clicked')
}

function onSecondCheckClick() {
  document.getElementById('checkbox-2')?.classList.toggle('clicked')
}

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="settings-block">
    <div class="photo-and-accept-changes">
      <div class="change-photo">
        <img :src="userData?.avatar" alt="" class="photo" />
        <span
          ><img src="/img/cabinet/icons/pen-white.svg" alt="" @click="onPhotoChangeModal()"
        /></span>
      </div>

      <div class="accept-changes">
        <img src="/img/cabinet/icons/approve-blue.svg" alt="" />
        Сохранить изменения
      </div>
    </div>
    <div class="name">
      <div>
        <h2>ФИО:</h2>
        <img src="/img/cabinet/icons/lock-gray.svg" alt="" />
      </div>

      <input type="text" placeholder="Иванов" v-model="userData.lastname" />

      <input type="text" placeholder="Александр" v-model="userData.firstname" />

      <input type="text" placeholder="Сергеевич" v-model="userData.surname" />
    </div>
    <div class="contacts">
      <div class="contact-common phone">
        <h2>Телефон:</h2>
        <input type="text" value="+7 (992) 007 54 09" />

        <img src="" alt="" />
      </div>

      <div class="check">
        <div class="checkbox-button" @click="onFirstCheckClick()">
          <span id="checkbox-1"></span>
        </div>
        <p>Скрыть мобильный телефон</p>
      </div>

      <div class="contact-common email">
        <h2>E-mail:</h2>
        <input type="text" value="Ivanovivan@rtg.ru" />
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
