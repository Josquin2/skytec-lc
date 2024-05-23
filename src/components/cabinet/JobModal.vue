<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

function onJobModalClick() {
  document.getElementById('job-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="job-modal modal-hidden" id="job-modal">
    <div class="job-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/bag-blue.svg" alt="" />
            Заявка на командировку
          </div>

          <div class="dates">
            <div class="start">
              <h3>Начало командировки:</h3>
              <Calendar />
            </div>
            <div class="end">
              <h3>Окончание командировки:</h3>
              <Calendar />
            </div>
          </div>

          <button>Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onJobModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.job-modal {
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .job-common {
    .background {
      position: absolute;
      margin-left: 32.92vw;
      margin-top: 222px;
      .h-white {
        position: absolute;
        display: flex;
        width: 31.3vw;
        height: 283px;
        background-color: #ffffff;
        z-index: 13;
        border-radius: 27px;
        flex-direction: column;
        padding: 32px 0 32px 40px;

        .title {
          width: 12.5vw;
          color: #4766af;
          border: 1px solid #d6d6d6;
          border-radius: 7px;
          padding: 8px;
          font-weight: 500;
          display: flex;
          align-items: center;

          img {
            margin-right: 4px;
          }
        }
        .dates {
          display: flex;
          margin-top: 24px;
          .start {
            width: 14.79vw;
            h3 {
              font-size: 16px;
              font-weight: 400;
              color: #9a9a9a;
            }
          }
          .end {
            margin-left: 8px;
            width: 14.79vw;
            h3 {
              font-size: 16px;
              font-weight: 400;
              color: #9a9a9a;
            }
          }
        }

        button {
          margin-top: 32px;
          width: 30vw;
          height: 40px;
          background: linear-gradient(to right, #4766af, #46bed6);
          border: none;
          border-radius: 10px;
          color: #ffffff;
          font-size: 16px;
        }
      }
      .w-white {
        margin-top: 55px;
        position: absolute;
        display: flex;
        width: 34.17vw;
        height: 229px;
        background-color: #ffffff;
        z-index: 12;
        border-radius: 27px;
      }
      .full-bg {
        overflow: hidden;
        width: 34.17vw;
        height: 283px;
        display: flex;
        position: absolute;
        background-color: #ffffff;
        z-index: 11;
        border-radius: 27px;
        align-items: flex-start;
        justify-content: flex-end;

        .close-button {
          cursor: pointer;
          width: 40px;
          height: 40px;
          background: url(/img/cabinet/icons/cross-white.svg) no-repeat;
          background-position: 50%;
          background-color: #4766af;
          margin-right: 2px;
          margin-top: 2px;
          border-radius: 50%;
          display: flex;
          z-index: 12;
        }
        .bg-button {
          width: 100px;
          height: 100px;
          background-color: rgba(0, 0, 0, 0.5);
          background-blend-mode: normal;
          position: absolute;
          z-index: 9;
          border-radius: 20px;
          margin-top: -45px;
          margin-right: -45px;
        }
        .bg-w {
          width: 100px;
          height: 25px;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
          background-blend-mode: normal;
          margin-right: 55px;
        }
        .bg-h {
          margin-top: 55px;
          width: 25px;
          height: 100px;
          background-color: rgba(0, 0, 0, 0.5);
          position: absolute;
        }
      }
    }
  }
}
</style>
