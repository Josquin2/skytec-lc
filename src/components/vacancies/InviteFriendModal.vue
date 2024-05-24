<script setup lang="ts">
function onInviteFriendModalClick() {
  document.getElementById('invite-modal')?.classList.toggle('modal-hidden')
}

function onCheckboxAnonClick() {
  document.getElementById('checkbox-anon')?.classList.toggle('clicked')
}
</script>

<template>
  <div class="invite-modal modal-hidden" id="invite-modal">
    <div class="invite-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <h2>Привести друга!</h2>
            <p>Укажите контактные данные вашего друга</p>
          </div>

          <div class="text">
            <input type="text" name="" id="" placeholder="Имя:" />
            <input type="text" name="" id="" placeholder="Телефон/E-mail:" />
            <input type="text" name="" id="" placeholder="Вакансия:" />
          </div>

          <div class="resume">
            <p>Прикрепить резюме</p>
            <img src="/img/cabinet/icons/file-blue.svg" alt="" />
          </div>

          <div class="my-name">
            <p>Укажите ваши данные</p>
            <input type="text" name="" id="" placeholder="Имя:" />
            <input type="text" name="" id="" placeholder="Фамилия:" />
          </div>

          <button>Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onInviteFriendModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal-hidden {
  display: none !important;
}
.invite-modal {
  position: fixed;
  width: 100vw;
  height: 200%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .invite-common {
    .background {
      position: absolute;
      margin-left: 33.13vw;
      margin-top: 125px;
      .h-white {
        position: absolute;
        display: flex;
        width: 30.89vw;
        height: 669px;
        background-color: #ffffff;
        z-index: 13;
        border-radius: 27px;
        flex-direction: column;
        padding: 40px 0 40px 24px;

        input {
          width: 31.09vw;
          height: 56px;
          border: 1px solid #9a9a9a;
          border-radius: 10px;
          margin-bottom: 16px;
          padding-left: 16px;
        }

        .title {
          h2 {
            border: none;
            display: flex;
            align-items: center;
            color: #4766af;
            font-size: 24px;
            font-weight: 500;
            width: 10.4vw;
            margin: 0;
          }
          p {
            margin: 0;
            color: #999999;
            margin-top: 8px;
          }
        }
        .text {
          display: flex;
          flex-direction: column;
          width: 31.25vw;
          margin-top: 32px;
        }

        .resume {
          display: flex;
          width: 31.09vw;
          justify-content: flex-end;

          p {
            color: #4766af;
            cursor: pointer;
            margin: 0;
            margin-right: 4px;
          }
          img {
            cursor: pointer;
          }
        }

        .my-name {
          display: flex;
          flex-direction: column;
          width: 31.09vw;

          p {
            color: #999999;
            margin: 0;
            margin-bottom: 24px;
          }
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 31.25vw;
          height: 56px;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          background: linear-gradient(to right, #4766af, #46bed6);
        }
      }
      .w-white {
        margin-top: 55px;
        position: absolute;
        display: flex;
        width: 33.59vw;
        height: 597px;
        background-color: #ffffff;
        z-index: 12;
        border-radius: 27px;
      }
      .full-bg {
        overflow: hidden;
        width: 33.59vw;
        height: 669px;
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
          width: 97px;
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
          margin-right: 52px;
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
