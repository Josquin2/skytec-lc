<script setup lang="ts">
import blackLogo from '@/assets/img/logo-black.png'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import router from '@/router'

const route = useRoute()
const currentPath = ref(route.path)

watch(
  () => route.path,
  (newPath) => {
    currentPath.value = newPath
  }
)

function isLogged() {
  if (currentPath.value != '/') {
    return true
  } else {
    return false
  }
}

function onMainPageClick() {}
</script>

<template>
  <header class="header-container">
    <img :src="blackLogo" alt="" class="black-logo" />
    <div class="header-other-links" v-if="isLogged()">
      <!-- some other links and v-if -->
      <div class="links-with-bg">
        <p class="theme" @click="onMainPageClick()">Главная</p>
        <p class="theme">Личный кабинет</p>
        <p class="theme">О компании</p>
        <p class="theme">Привилегии для сотрудников</p>
        <p class="theme">Новому сотруднику</p>
        <p class="theme">Вакансии Sky</p>
      </div>
      <div class="search">
        <input type="text" class="search-input" placeholder="Поиск по порталу" />
        <img src="/icons/search.svg" alt="" class="search-icon" />
      </div>
      <div class="profile">
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
