<template>
  <footer class="footer">
    <img src="/icons/logo-white.svg" alt="" />
    <div class="links">
      <a href="" class="one-link">Главная</a>
      <a href="" class="one-link">Личный кабинет</a>
      <a href="" class="one-link">О компании</a>
      <a href="" class="one-link">Привилегии для сотрудников</a>
      <a href="" class="one-link">Новому сотруднику</a>
      <a href="" class="one-link">Вакансии Sky</a>
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
  }
}
</style>
