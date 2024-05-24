<script setup lang="ts">
function onCongratulationsModalClick() {
  document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
}

function onCheckboxAnonClick() {
  document.getElementById('checkbox-anon')?.classList.toggle('clicked')
}
</script>

<template>
  <div class="congratulations-modal modal-hidden" id="congratulations-modal">
    <div class="congratulations-common">
      <div class="background">
        <div class="h-white">
          <div class="title">Поздравить! 🥳</div>

          <div class="text">
            <input type="text" name="" id="" />
            <input type="text" name="" id="" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>

          <div class="check">
            <div class="checkbox-button" @click="onCheckboxAnonClick()">
              <span id="checkbox-anon"></span>
            </div>
            Поздравить анонимно
          </div>
          <div class="present">
            <h4>Выбрать подарок:</h4>
            <div class="presents-common">
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-3.png" alt="" />
              </div>
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-2.png" alt="" />
              </div>
              <div class="gift">
                <input type="checkbox" />
                <img src="/img/main-page/gift-1.png" alt="" />
              </div>
              <div class="gift last">
                <input type="checkbox" />
                <p>Без подарка</p>
              </div>
            </div>
          </div>

          <button><img src="/icons/gift.svg" alt="" />Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onCongratulationsModalClick()"></span>
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
.congratulations-modal {
  position: fixed;
  width: 100vw;
  height: 200%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .congratulations-common {
    .background {
      position: absolute;
      margin-left: 33.13vw;
      margin-top: 210px;
      .h-white {
        position: absolute;
        display: flex;
        width: 30.89vw;
        height: 711px;
        background-color: #ffffff;
        z-index: 13;
        border-radius: 27px;
        flex-direction: column;
        padding: 40px 0 40px 24px;

        .title {
          border: none;
          display: flex;
          align-items: center;
          color: #4766af;
          font-size: 24px;
          font-weight: 500;
          width: 10.4vw;
        }
        .text {
          display: flex;
          flex-direction: column;
          width: 31.25vw;
          margin-top: 32px;

          input {
            height: 56px;
            border: 1px solid #9a9a9a;
            border-radius: 200px;
            margin-bottom: 16px;
          }
          textarea {
            height: 96px;
            resize: none;
            border: 1px solid #9a9a9a;
            border-radius: 27px;
            padding: 16px;
          }
        }
        .check {
          margin-top: 24px;
          display: flex;
          align-items: center;
          font-size: 16px;
          color: #999999;
          .checkbox-button {
            cursor: pointer;
            span {
              margin-right: 8px;
              width: 24px;
              height: 24px;
              display: flex;
              align-items: center;
              justify-content: center;
              border: 1px solid #999999;
              border-radius: 7px;
            }
            .clicked {
              background: url(/public/img/cabinet/icons/approve-white.svg) no-repeat;
              background-position: 50%;
              background-color: #4766af;
            }
          }
        }
        .present {
          margin-top: 32px;

          h4 {
            font-size: 24px;
            font-weight: 400;
            color: #4766af;
          }

          .presents-common {
            margin-top: 16px;
            height: 126px;
            width: 31.25vw;
            display: flex;

            .gift {
              cursor: pointer;
              width: 126px;
              height: 126px;
              border: 1px solid #9a9a9a;
              border-radius: 10px;
              margin-right: 32px;
              display: flex;
              align-items: center;
              justify-content: center;

              input {
                width: 16px;
                position: absolute;
                margin-top: -100px;
                margin-right: -100px;
              }
            }
            .last {
              margin-right: 0;

              p {
                margin: 0;
                color: #4766af;
              }
            }
          }
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 24px;
          width: 31.25vw;
          height: 56px;
          border: none;
          border-radius: 200px;
          color: #fff;
          font-size: 16px;
          font-weight: 400;
          background: linear-gradient(to right, #4766af, #46bed6);

          img {
            margin-right: 8px;
            width: 24px;
            height: 28px;
          }
        }
      }
      .w-white {
        margin-top: 55px;
        position: absolute;
        display: flex;
        width: 33.75vw;
        height: 662px;
        background-color: #ffffff;
        z-index: 12;
        border-radius: 27px;
      }
      .full-bg {
        overflow: hidden;
        width: 33.75vw;
        height: 711px;
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
