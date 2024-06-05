<script setup lang="ts">
import {
  onMainPageClick,
  onCabinetPageClick,
  onVacanciesPageClick,
  onAboutCompanyPageClick,
  onPrivilegePageClick,
  onNewEmployeePageClick
} from './routing-functions'
</script>

<template>
  <footer class="footer">
    <img src="/icons/logo-white.svg" alt="" />
    <div class="links">
      <a class="one-link" @click="onMainPageClick()">Главная</a>
      <a class="one-link" @click="onCabinetPageClick()">Личный кабинет</a>
      <a class="one-link" @click="onAboutCompanyPageClick()">О компании</a>
      <a class="one-link" @click="onPrivilegePageClick()">Привилегии для сотрудников</a>
      <a class="one-link" @click="onNewEmployeePageClick()">Новому сотруднику</a>
      <a class="one-link" @click="onVacanciesPageClick()">Вакансии Sky</a>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  padding: 0 15.63vw;
  height: 150px;
  width: 100vw;
  background-color: #212121;
  display: flex;
  align-items: center;

  .links {
    margin-left: 5.21vw;
    display: flex;
    align-items: center;
    .one-link {
      text-decoration: none;
      color: #fff;
      margin-right: 24px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .footer {
    padding: 0 9vw;
    align-self: flex-end;
  }
}
</style>
