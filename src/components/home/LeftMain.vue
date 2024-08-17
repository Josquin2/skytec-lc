<script setup lang="ts">
import InviteFriendModal from '../vacancies/InviteFriendModal.vue'
import { ref, onMounted, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { Api } from '@/api/api'

const ApiClass = new Api()

import { onVacanciesPageClick } from '@/components/routing-functions'

const route = useRoute()

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}

// Search things

const userSearch = ref('')

function onUserSearchEnter() {
  const login = route.params.login
  router.push({ name: 'search', params: { login: login, search: userSearch.value } })
}

const pages: Ref<any> = ref([])

onMounted(async () => {
  const resp = await ApiClass.getObjects('links/left')
  console.log(resp)
  pages.value = resp.data
})

function onPageClick(url: string) {
  if (url.startsWith('http')) {
    window.open(url, '_self')
  } else {
    router.push(url)
  }
}
</script>

<template>
  <div class="some-info">
    <input
      type="text"
      placeholder="Поиск по порталу"
      class="search-something"
      id="user-search"
      v-model="userSearch"
      @keydown.enter="onUserSearchEnter()"
    />
    <img src="/icons/search.svg" alt="" class="search-icon" @click="onUserSearchEnter()" />
    <div class="other-links">
      <p v-for="(link, index) in pages" class="link" @click="onPageClick(link?.url)" :key="index">
        {{ link?.title }}
      </p>
    </div>
    <div class="vacancies">
      <div class="vacancy-common" @click="onVacanciesPageClick">Актуальные вакансии</div>
      <div class="invite-friend">
        <b class="invite-friend-text" @click="onInviteFriendModalClick()"
          >Приведи друга <img src="/icons/arrow-blue.svg" alt=""
        /></b>
      </div>
    </div>
  </div>

  <!-- modal -->

  <InviteFriendModal />
</template>
