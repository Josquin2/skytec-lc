<template>
  <div class="advantages" id="who-are-we">
    <div class="one-adv">
      <h3>Руководство</h3>
      <div class="gradient-line"></div>
    </div>
    <div class="one-adv">
      <img src="@/assets/img/logo-black.png" alt="" />
      <div class="gradient-line"></div>
    </div>
    <div class="one-adv">
      <img src="/img/about-company/logo-1.png" alt="" />
      <div class="gradient-line"></div>
    </div>

    <div class="one-adv">
      <img src="/img/about-company/logo-2.png" alt="" />
      <div class="gradient-line"></div>
    </div>
    <div class="one-adv">
      <img src="/img/about-company/logo-3.png" alt="" />
      <div class="gradient-line"></div>
    </div>
  </div>
</template>

<style lang="scss">
.advantages {
  display: flex;

  .one-adv {
    cursor: pointer;
    background-color: #f6f6f6;
    width: 22.08vw;
    min-height: 129px;
    border-radius: 10px;
    margin-right: 24px;
    padding: 24px;

    h3 {
      margin-top: 16px;
      font-size: 22px;
      color: #474747;
    }

    img {
      width: 78px;
    }

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
