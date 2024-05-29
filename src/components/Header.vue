<script setup lang="ts">
import blackLogo from '@/assets/img/logo-black.png'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import router from '@/router'

const route = useRoute()
const currentPath = ref(route.path)
const pathName = ref(route.name)

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
  }
)

// this is a bad thing, I know -_-
// document.addEventListener('DOMContentLoaded', (event) => {
//   watch(
//     () => route.name,
//     (newName) => {
//       if (newName && pathName.value && document.getElementById(pathName.value)) {
//         document.getElementById(pathName.value)?.classList.remove('clicked-theme')
//         pathName.value = newName
//         if (document.getElementById(pathName.value)) {
//           document.getElementById(pathName.value)?.classList.add('clicked-theme')
//           console.log(pathName.value)
//         }
//       }
//     }
//   )
// })

function isLogged() {
  if (currentPath.value != '/') {
    return true
  } else {
    return false
  }
}

function onMainPageClick() {
  const login = route.params.login
  router.push({ name: 'main', params: { login: login } })
}

function onCabinetPageClick() {
  const login = route.params.login
  router.push({ name: 'cabinet', params: { login: login } })
}

function onVacanciesPageClick() {
  const login = route.params.login
  router.push({ name: 'vacancies', params: { login: login } })
}

function onAboutCompanyClick() {
  const login = route.params.login
  router.push({ name: 'about', params: { login: login } })
}

function onPrivilegeClick() {
  const login = route.params.login
  router.push({ name: 'privilege', params: { login: login } })
}

function onNewEmployeeClick() {
  const login = route.params.login
  router.push({ name: 'new-employee', params: { login: login } })
}
</script>

<template>
  <header class="header-container">
    <img :src="blackLogo" alt="" class="black-logo" />
    <div class="header-other-links" v-if="isLogged()">
      <!-- some other links and v-if -->
      <div class="links-with-bg">
        <p class="theme" @click="onMainPageClick()" id="main">Главная</p>
        <p class="theme" @click="onCabinetPageClick()" id="cabinet">Личный кабинет</p>
        <p class="theme" @click="onAboutCompanyClick()">О компании</p>
        <p class="theme" @click="onPrivilegeClick()">Привилегии для сотрудников</p>
        <p class="theme" @click="onNewEmployeeClick()">Новому сотруднику</p>
        <p class="theme" @click="onVacanciesPageClick()">Вакансии Sky</p>
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
        transition: 0.1s;
      }
      .clicked-theme {
        border-bottom: 1px solid #fff;
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
