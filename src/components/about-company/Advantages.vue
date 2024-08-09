<template>
  <div class="advantages" id="who-are-we">
    <div class="one-adv">
      <img src="/img/about-company/logo-1.png" alt="" />
      <div class="gradient-line"></div>
      <div class="text-block">
        <h2>0.1/</h2>
        <h3>Лучший клиентский сервис</h3>
      </div>
      <div class="text-block">
        <h2>0.2/</h2>
        <h3>Передовые технологии</h3>
      </div>
      <div class="text-block">
        <h2>0.3/</h2>
        <h3>Экспертиза</h3>
      </div>
    </div>
    <div class="one-adv">
      <img src="/img/about-company/logo-2.png" alt="" />
      <div class="gradient-line"></div>
      <div class="text-block">
        <h2>0.4/</h2>
        <h3>Лучшие баинговые условия</h3>
      </div>
    </div>
    <div class="one-adv">
      <img src="/img/about-company/logo-3.png" alt="" />
      <div class="gradient-line"></div>
      <div class="text-block">
        <h2>0.5/</h2>
        <h3>Лидерские позиции в спонсорстве</h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.advantages {
  margin-top: 56px;
  display: flex;

  .one-adv {
    background-color: #f6f6f6;
    width: 22.08vw;
    min-height: 229px;
    border-radius: 10px;
    margin-right: 24px;
    padding: 24px;

    .gradient-line {
      width: 88px;
      height: 4px;
      margin-top: 16px;
    }

    .text-block {
      margin-top: 16px;
      display: flex;

      h2 {
        font-size: 16px;
        font-weight: 400;
      }
      h3 {
        font-size: 16px;
        margin-left: 8px;
        font-weight: 400;
        text-transform: uppercase;
        width: 12.6vw;
      }
    }
  }
}
</style>
