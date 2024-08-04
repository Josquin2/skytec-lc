<script setup lang="ts">
import blackLogo from '@/assets/img/logo-black.png'
import { useRoute } from 'vue-router'
import router from '@/router'
import { ref, watch, onMounted, type Ref } from 'vue'
import type { Page } from '@/types/AdditionalPage'
import { Api } from '@/api/api'

import {
  onMainPageClick,
  onCabinetPageClick,
  onVacanciesPageClick,
  onAboutCompanyPageClick,
  onPrivilegePageClick,
  onNewEmployeePageClick
} from './routing-functions'

const ApiClass = new Api()

const route = useRoute()
const currentPath = ref(route.name)
const pathName = ref(route.name)

const linksApi: Ref<Page[]> = ref([])

watch(
  () => route.name,
  (newPath) => {
    currentPath.value = newPath
  }
)

document.addEventListener('DOMContentLoaded', () => {
  watch(
    () => route.name,
    (newName) => {
      pathName.value = newName
    }
  )
})

function isLogged() {
  if (currentPath.value != 'home') {
    return true
  } else {
    return false
  }
}

function onPageClick(url: string) {
  if (url.startsWith('http')) {
    window.open(url, '_self')
  } else {
    router.push({ name: 'additional-page', params: { url: url } })
  }
}

onMounted(async () => {
  const resp = await ApiClass.getObjects('links/top')
  console.log(resp)
  linksApi.value = resp.data
})

// Global search
</script>

<template>
  <header class="header-container">
    <img :src="blackLogo" alt="" class="black-logo" @click="onMainPageClick()" />
    <div class="header-other-links" v-if="isLogged()">
      <!-- some other links and v-if -->
      <div class="links-with-bg">
        <p
          :class="
            currentPath == 'additional-page' && route?.params?.url == link?.url
              ? 'theme clicked-theme'
              : 'theme'
          "
          v-for="(link, index) in linksApi"
          :key="index"
          @click="onPageClick(link?.url)"
        >
          {{ link.title }}
        </p>
      </div>
      <div class="profile" @click="onCabinetPageClick()">
        <img src="/icons/user.svg" alt="" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header-container {
  position: absolute;
  height: 67px;
  width: 100vw;
  background-color: #fff;
  padding: 0 15.6vw;
  display: flex;
  align-items: center;
  .black-logo {
    cursor: pointer;
    width: 4.8vw;
  }
  .header-other-links {
    display: flex;
    align-items: center;
    margin-left: 16px;
    width: 100%;
    .links-with-bg {
      display: flex;
      align-items: center;
      padding: 0 24px 0 0;
      height: 48px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border-radius: 10px;
      width: 100%;

      .theme {
        font-size: 16px;
        margin: 0;
        color: #fff;
        margin-left: 24px;
        cursor: pointer;
        width: max-content;
      }
      .clicked-theme {
        border-bottom: 1px solid #fff;
        margin-bottom: -1px;
      }
    }
    .search {
      display: flex;
      align-items: center;
      margin-left: 16px;
      .search-input {
        height: 48px;
        padding-left: 16px;
        width: 220px;
        border-radius: 10px;
        border: none;
        background-color: #f6f6f6;
      }
      .search-input:focus {
        outline-width: 0;
      }
      .search-icon {
        position: absolute;
        margin-left: 180px;
        cursor: pointer;
      }
    }
    .profile {
      width: 48px;
      height: 48px;
      background-color: #f6f6f6;
      border-radius: 10px;
      margin-left: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: 1800px) {
  .header-container {
    padding: 0 5vw;
  }
}
</style>
