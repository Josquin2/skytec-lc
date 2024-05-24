<script setup lang="ts">
import InviteFriendModal from '@/components/vacancies/InviteFriendModal.vue'

function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="vacancies-block">
    <div class="left-side">
      <div class="background">
        <div class="h-white">
          <!--  -->

          <h1>Вакансии SKY</h1>
          <a href="">Смотреть актуальные вакансии на сайте hh.ru</a>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
    <div class="right-side">
      <img src="/public/img/vacancies/photo.png" alt="" />
      <h3 @click="onInviteFriendModalClick()">Приведи друга в SkyAlliance и получи бонусы</h3>
    </div>

    <!-- modals -->

    <InviteFriendModal />
  </div>
</template>

<style lang="scss">
.vacancies-block {
  padding: 0 15.63vw;
  height: 90vh;
  display: flex;
  .left-side {
    width: 33.75vw;
    .background {
      position: absolute;

      margin-top: 161px;
      .h-white {
        position: absolute;
        display: flex;
        width: 25.31vw;
        height: 579px;
        background-color: #4766af;
        z-index: 3;
        border-radius: 20px 50px 20px 20px;
        flex-direction: column;
        padding: 243px 0 247px 74px;

        h1 {
          font-size: 32px;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
        }
        a {
          width: 20.05vw;
          text-decoration: none;
          font-size: 16px;
          border: 1px solid #fff;
          border-radius: 10px;
          color: #fff;
          margin: 0;
          padding: 8px 16px;
          margin-top: 16px;
        }
        // adfdsfds
      }
      .w-white {
        margin-top: 134px;
        position: absolute;
        display: flex;
        width: 33.75vw;
        height: 445px;
        background-color: #4766af;
        z-index: 2;
        border-radius: 20px 50px 20px 20px;
      }
      .full-bg {
        overflow: hidden;
        width: 33.75vw;
        height: 579px;
        display: flex;
        position: absolute;
        background-color: #4766af;
        z-index: 1;
        border-radius: 50px;
        align-items: flex-start;
        justify-content: flex-end;

        .close-button {
          cursor: pointer;
          width: 107px;
          height: 107px;
          background: url(/img/vacancies/arrow.svg) no-repeat;
          background-position: 50%;
          background-color: #4766af;
          margin-right: 16px;
          margin-top: 0px;
          border-radius: 50%;
          display: flex;
          z-index: 2;
        }
        .bg-button {
          width: 207px;
          height: 179px;
          background-color: #fff;
          position: absolute;
          z-index: 0;
          border-radius: 58px;
          margin-top: -45px;
          margin-right: -45px;
        }
        .bg-w {
          width: 150px;
          height: 55px;
          background-color: #fff;
          position: absolute;
          margin-right: 100px;
        }
        .bg-h {
          margin-top: 100px;
          width: 55px;
          height: 150px;
          background-color: #fff;
          position: absolute;
        }
      }
    }
  }
  .right-side {
    margin-left: 24px;
    margin-top: 161px;
    img {
      position: absolute;
    }

    h3 {
      cursor: pointer;
      position: absolute;
      margin-top: 507px;
      margin-left: 285px;
      font-size: 24px;
      width: 331px;
      transition: 0.2s;
    }
    h3:hover {
      color: #4766af;
    }
  }
}
</style>
