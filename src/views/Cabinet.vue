<script setup lang="ts">
import SettingsPencil from '@/components/cabinet/icons/SettingsPencil.vue'
import JobBag from '@/components/cabinet/icons/JobBag.vue'
import EducationCap from '@/components/cabinet/icons/EducationCap.vue'
import VacationPalm from '@/components/cabinet/icons/VacationPalm.vue'
import DocumentsIcon from '@/components/cabinet/icons/DocumentsIcon.vue'

import RequestStatusCircle from '@/components/cabinet/icons/RequestStatusCircle.vue'

import type { User as UserInterface } from '@/types/User'
import type { Request } from '@/types/Request'

import { useRoute } from 'vue-router'
import router from '@/router'

import { Api } from '@/api/api'
import { User } from '@/api/user'

let ApiClass = new Api()
let UserClass = new User()

import LeftArticles from '@/components/home/LeftArticles.vue'
import VacationModal from '@/components/cabinet/VacationModal.vue'
import EducationModal from '@/components/cabinet/EducationModal.vue'
import JobModal from '@/components/cabinet/JobModal.vue'
import { onMounted, type Ref, ref } from 'vue'

import { onDocumentsClick } from '@/components/routing-functions'

const route = useRoute()

let user: Ref<UserInterface | null> = ref(null)
let allReqests: Ref<Request[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('user')
  user.value = response
  console.log(user.value)

  checkAllRequests()
})

async function checkAllRequests() {
  const responseRequests = await ApiClass.getObjects('application')
  allReqests.value = responseRequests
  console.log(allReqests.value)
}

function onSettingsClick() {
  const login = route.params.login
  router.push({ name: 'settings', params: { login: login } })
}

function onVacationModalClick() {
  document.getElementById('vacation-modal')?.classList.toggle('modal-hidden')
}
function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}
function onJobModalClick() {
  document.getElementById('job-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="cabinet-block" v-if="user && Object.keys(user).length">
    <div class="left">
      <div class="about-user-profile-main-block">
        <div class="photo">
          <span class="bg-circle"></span>
          <img :src="user?.avatar" alt="" class="user-image rounded-circle" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>{{ user?.name }}</h1>
          </div>
          <div class="job-info">
            <h2>Отдел досуга</h2>
            <hr />
            <h2>Менеджер по креативу</h2>
          </div>
          <div class="boss">
            <h3>Непосредственный руководитель:</h3>
            <h4>Корнеева Наталья</h4>
          </div>
          <div class="contact">
            <div class="phone-number">
              <img src="/icons/phone-blue.svg" alt="" />
              <p>{{ user?.phone }}</p>
              <img src="/img/cabinet/icons/eye-gray.svg" alt="" />
            </div>
            <div class="email">
              <img src="/icons/email-blue.svg" alt="" />
              <p>{{ user?.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="l-footer">
        <h2>Мои заявки:</h2>

        <div class="requests" v-if="allReqests && Object.keys(user).length">
          <div
            :class="oneRequest.status == 'На рассмотрении' ? 'one-request' : 'one-request approved'"
            v-for="oneRequest in allReqests"
          >
            <div class="request-title">
              <RequestStatusCircle />

              <h3>{{ oneRequest.name }}</h3>
            </div>
            <div class="response">
              <p>{{ oneRequest.status }}</p>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="r-left">
        <div @click="onSettingsClick()">
          <SettingsPencil />
          Редактировать профиль
        </div>

        <div @click="onJobModalClick()">
          <JobBag />
          Заявка на командировку
        </div>
        <div @click="onEducationModalClick()">
          <EducationCap />

          Заявка на обучение
        </div>
        <div @click="onVacationModalClick()">
          <VacationPalm />

          Заявка на отпуск
        </div>
        <div @click="onDocumentsClick()">
          <DocumentsIcon />

          Заказать справку
        </div>
      </div>
      <div class="r-right">
        <LeftArticles />
      </div>
    </div>

    <!-- Modals goes here -->
    <VacationModal @checkAllRequests="checkAllRequests" />
    <EducationModal @checkAllRequests="checkAllRequests" />
    <JobModal @checkAllRequests="checkAllRequests" />
  </div>
</template>
