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

let ApiClass = new Api()

import LeftArticles from '@/components/home/LeftArticles.vue'
import VacationModal from '@/components/cabinet/VacationModal.vue'
import EducationModal from '@/components/cabinet/EducationModal.vue'
import JobModal from '@/components/cabinet/JobModal.vue'
import DocumentsModal from '@/components/cabinet/DocumentsModal.vue'
import { onMounted, type Ref, ref } from 'vue'

import { onDocumentsClick } from '@/components/routing-functions'
import LogoutIcon from '@/components/cabinet/icons/LogoutIcon.vue'

const route = useRoute()

let user: Ref<UserInterface | null> = ref(null)
let allReqests: Ref<Request[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('user')
  user.value = response.data.user
  phoneNumber.value = user.value?.phone || ''
  onPhoneToggleClick()
  // console.log(response)
  // console.log(user.value)

  checkAllRequests()
})

async function checkAllRequests() {
  const responseRequests = await ApiClass.getObjects('application')
  allReqests.value = responseRequests
  // console.log(allReqests.value)
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

function onDocumentsModalClick() {
  document.getElementById('documents-modal')?.classList.toggle('modal-hidden')
}

const phoneNumber = ref('')
const lastNumber = ref('')
function onPhoneToggleClick() {
  if (phoneNumber.value[phoneNumber.value.length - 1] != 'X') {
    lastNumber.value = phoneNumber.value
    // const phonePart = phoneNumber.value.split('-')
    // phoneNumber.value = `${phonePart[0]}-XX-XX`
    phoneNumber.value = 'XXX XXX-XX-XX'
  } else {
    phoneNumber.value = lastNumber.value
  }
}

function onEmailClick(email: string) {
  window.location.href = `mailto:${email}`
}

function onPhoneNumberClick(phone: string) {
  window.location.href = `tel:${phone}`
}

function logout() {
  localStorage.removeItem('user')
  localStorage.removeItem('token')

  window.location.reload()
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
            <h2>{{ user?.department?.title }}</h2>
            <hr v-if="user?.department?.title" />
            <h2>{{ user?.position }}</h2>
          </div>
          <div class="boss" v-if="user.manager">
            <h3>Непосредственный руководитель:</h3>
            <h4>{{ user?.manager?.surname + ' ' + user?.manager?.firstname }}</h4>
          </div>
          <div class="contact">
            <div class="phone-number noselect" v-if="user.hide_phone != true">
              <img src="/icons/phone-blue.svg" alt="" />
              <p @click="onPhoneNumberClick(phoneNumber)">{{ phoneNumber }}</p>
              <img
                src="/img/cabinet/icons/eye-gray.svg"
                alt=""
                @click="onPhoneToggleClick()"
                class="eye"
              />
            </div>
            <div class="phone-number noselect phone-hidden" v-else>
              <img src="/icons/phone-blue.svg" alt="" />
              <p>Номер скрыт</p>
            </div>
            <div class="email" @click="onEmailClick(user?.email)">
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
            :class="
              oneRequest.status == 'На рассмотрении'
                ? 'one-request'
                : oneRequest.status == 'Отказано'
                  ? 'denied'
                  : 'one-request approved'
            "
            v-for="(oneRequest, index) in allReqests"
            :key="index"
          >
            <div class="request-title">
              <RequestStatusCircle />

              <h3>{{ oneRequest?.name }}</h3>
            </div>
            <div class="response">
              <p>{{ oneRequest?.status }}</p>
              <span></span>
            </div>
          </div>
        </div>
        <div v-if="allReqests.length == 0" class="zero-requests">У вас нет активных заявок!</div>
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
        <div @click="onDocumentsModalClick()">
          <DocumentsIcon />

          Заказать справку
        </div>
        <div @click="logout">
          <LogoutIcon style="margin-left: 26px" />

          Выйти
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
    <DocumentsModal />
  </div>
</template>
