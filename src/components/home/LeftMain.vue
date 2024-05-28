<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

function onAhoRequestClick() {
  const login = route.params.login
  router.push({ name: 'aho-request', params: { login: login } })
}

function onHelpDeskRequestClick() {
  const login = route.params.login
  router.push({ name: 'help-desk-request', params: { login: login } })
}

function onRemoteAccessInstructionsClick() {
  const login = route.params.login
  router.push({ name: 'remote-access-instructions', params: { login: login } })
}

function onMeetingRoomInstructionsClick() {
  const login = route.params.login
  router.push({ name: 'meeting-room-instructions', params: { login: login } })
}

function onDocumentsClick() {
  const login = route.params.login
  router.push({ name: 'documents', params: { login: login } })
}

// Search things

const userSearch = ref('')

function onUserSearchEnter() {
  const login = route.params.login
  router.push({ name: 'user-search', params: { login: login, search: userSearch.value } })
}
</script>

<template>
  <div class="some-info">
    <input
      type="text"
      placeholder="+7/ФИО/e-mail"
      class="search-something"
      id="user-search"
      v-model="userSearch"
      @keydown.enter="onUserSearchEnter()"
    />
    <img src="/icons/search.svg" alt="" class="search-icon" @click="onUserSearchEnter()" />
    <div class="other-links">
      <p class="link" @click="onRemoteAccessInstructionsClick()">
        Инструкция по удаленному доступу
      </p>
      <p class="link" @click="onHelpDeskRequestClick()">Заявка в HelpDesk</p>
      <p class="link" @click="onAhoRequestClick()">Заявка в АХО</p>
      <p class="link" @click="onMeetingRoomInstructionsClick()">
        Инструкция по настройке бронирования переговорных
      </p>
      <p class="link" @click="onDocumentsClick()">Нормативные документы</p>
    </div>
    <div class="vacancies">
      <div class="vacancy-common">Актуальные вакансии</div>
      <div class="invite-friend">
        <b class="invite-friend-text">Приведи друга</b>
        <img src="/img/main-page/vacancies.png" alt="" class="vacancies-image" />
      </div>
    </div>
  </div>
</template>
