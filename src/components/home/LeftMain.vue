<script setup lang="ts">
import InviteFriendModal from '../vacancies/InviteFriendModal.vue'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'

import {
  onAhoRequestClick,
  onHelpDeskRequestClick,
  onRemoteAccessInstructionsClick,
  onMeetingRoomInstructionsClick,
  onDocumentsClick,
  onVacanciesPageClick
} from '@/components/routing-functions'

const route = useRoute()

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
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
      <div class="vacancy-common" @click="onVacanciesPageClick">Актуальные вакансии</div>
      <div class="invite-friend">
        <b class="invite-friend-text" @click="onInviteFriendModalClick()"
          >Приведи друга <img src="/icons/arrow-blue.svg" alt=""
        /></b>
        <img src="/img/main-page/vacancies.png" alt="" class="vacancies-image" />
      </div>
    </div>
  </div>

  <!-- modal -->

  <InviteFriendModal />
</template>
