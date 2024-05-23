<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

// here should be ref check

function onVacationModalClick() {
  document.getElementById('vacation-modal')?.classList.toggle('modal-hidden')
}

function onCheckBoxClick(e: number) {
  if (e == 1 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-2')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    // check = 1
  } else if (e == 2 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-1')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    // check = 2
  }
}
</script>

<template>
  <div class="vacation-modal modal-hidden" id="vacation-modal">
    <div class="vacation-common">
      <div class="background">
        <div class="h-white">
          <div class="left-text">
            <div class="title">
              <img src="/img/cabinet/icons/vacation-blue.svg" alt="" />
              <p>Заявка на отпуск</p>
            </div>
            <div class="cause-of-vacation">
              <div class="checkbox-button" @click="onCheckBoxClick(1)">
                <span class="clicked" id="checkbox-1"></span>
              </div>
              Отпуск за свой счет
            </div>
            <div class="cause-of-vacation">
              <div class="checkbox-button" @click="onCheckBoxClick(2)">
                <span class="" id="checkbox-2"></span>
              </div>
              Ежегодный оплачиваемый отпуск
            </div>
          </div>
          <div class="right-text">
            <div class="title-cal">
              <h4>Начало отпуска:</h4>
              <Calendar />
            </div>
            <div class="title-cal">
              <h4>Окончание отпуска:</h4>
              <Calendar />
            </div>
            <div class="cause">
              <h4>Причина:</h4>
              <input type="text" name="" id="" />
            </div>
            <button>Отправить</button>
          </div>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onVacationModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.vacation-modal {
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .vacation-common {
    .background {
      position: absolute;
      margin-left: 33.18vw;
      margin-top: 222px;
      .h-white {
        position: absolute;
        display: flex;
        width: 30.78vw;
        height: 429px;
        background-color: #ffffff;
        z-index: 13;
        border-radius: 27px;
        padding: 56px 0;
        padding-left: 56px;

        .left-text {
          .title {
            border: 1px solid #d6d6d6;
            border-radius: 7px;
            width: 9.3vw;
            padding: 8px;
            font-weight: 500;
            color: #4766af;
            display: flex;
            align-items: center;

            p {
              margin: 0;
              margin-left: 4px;
            }
          }
          .cause-of-vacation {
            margin-top: 16px;
            display: flex;
            align-items: center;
            width: 11.77vw;

            .checkbox-button {
              margin-right: 8px;
              cursor: pointer;
              span {
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
        }
        .right-text {
          .title-cal {
            margin-bottom: 8px;
            h4 {
              font-size: 16px;
              color: #9a9a9a;
              font-weight: 400;
            }
          }
          .cause {
            h4 {
              font-size: 16px;
              color: #9a9a9a;
              font-weight: 400;
            }
            input {
              width: 14.79vw;
              height: 56px;
              border-radius: 10px;
              border: 1px solid #d6d6d6;
              padding-left: 16px;
              background-color: #ffffff;
            }
          }
          button {
            margin-top: 16px;
            width: 14.79vw;
            height: 40px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(to right, #4766af, #46bed6);
            color: #fff;
            font-size: 16px;
          }
        }
      }
      .w-white {
        margin-top: 55px;
        position: absolute;
        display: flex;
        width: 33.65vw;
        height: 374px;
        background-color: #ffffff;
        z-index: 12;
        border-radius: 27px;
      }
      .full-bg {
        overflow: hidden;
        width: 33.65vw;
        height: 395px;
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
