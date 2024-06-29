<script setup lang="ts">
import blackLogo from '@/assets/img/logo-black.png'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import router from '@/router'

import {
  onMainPageClick,
  onCabinetPageClick,
  onVacanciesPageClick,
  onAboutCompanyPageClick,
  onPrivilegePageClick,
  onNewEmployeePageClick
} from './routing-functions'

const route = useRoute()
const currentPath = ref(route.name)
const pathName = ref(route.name)

watch(
  () => route.name,
  (newPath) => {
    currentPath.value = newPath
  }
)

document.addEventListener('DOMContentLoaded', (event) => {
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
</script>

<template>
  <header class="header-container">
    <img :src="blackLogo" alt="" class="black-logo" />
    <div class="header-other-links" v-if="isLogged()">
      <!-- some other links and v-if -->
      <div class="links-with-bg">
        <p
          :class="currentPath == 'main' ? 'theme clicked-theme' : 'theme'"
          @click="onMainPageClick()"
          id="main"
        >
          Главная
        </p>
        <p
          :class="
            currentPath == 'cabinet' || currentPath == 'settings' ? 'theme clicked-theme' : 'theme'
          "
          @click="onCabinetPageClick()"
          id="cabinet"
        >
          Личный кабинет
        </p>
        <p
          :class="currentPath == 'about' ? 'theme clicked-theme' : 'theme'"
          @click="onAboutCompanyPageClick()"
        >
          О компании
        </p>
        <p
          :class="currentPath == 'privilege' ? 'theme clicked-theme' : 'theme'"
          @click="onPrivilegePageClick()"
        >
          Привилегии для сотрудников
        </p>
        <p
          :class="
            (currentPath as string)?.endsWith('new-employee') ? 'theme clicked-theme' : 'theme'
          "
          @click="onNewEmployeePageClick()"
        >
          Новому сотруднику
        </p>
        <p
          :class="currentPath == 'vacancies' ? 'theme clicked-theme' : 'theme'"
          @click="onVacanciesPageClick()"
        >
          Вакансии Sky
        </p>
      </div>
      <div class="search">
        <input type="text" class="search-input" placeholder="Поиск по порталу" />
        <img src="/icons/search.svg" alt="" class="search-icon" />
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
    width: 4.8vw;
  }
  .header-other-links {
    display: flex;
    align-items: center;
    margin-left: 16px;
    .links-with-bg {
      display: flex;
      align-items: center;
      padding: 0 24px 0 0;
      height: 48px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border-radius: 10px;
      .theme {
        font-size: 16px;
        margin: 0;
        color: #fff;
        margin-left: 24px;
        cursor: pointer;
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
