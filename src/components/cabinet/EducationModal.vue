<script setup lang="ts">
function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}

function onDropdownTitleClick() {
  document.getElementById('dropdown')?.classList.toggle('closed')
}
</script>

<template>
  <div class="education-modal modal-hidden" id="education-modal">
    <div class="education-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/education-blue.svg" alt="" />
            Заявка на обучение
          </div>

          <div class="choose-dropdown">
            <div class="dropdown-title" @click="onDropdownTitleClick()">
              <h2>Текущие обучения</h2>
              <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
            </div>
            <div class="dropdown-common closed" id="dropdown">
              <p>Современный маркетинг</p>
              <p>Реклама в 2024 году</p>
              <p>Ораторское искусство</p>
              <p>Английский язык для начинающих</p>
              <p>Рисование</p>
              <p>Английский язык для продвинутых</p>
              <p>Старый маркетинг</p>
              <p>Реклама в 2032 году</p>
            </div>
          </div>

          <div class="chosen"></div>

          <div class="text">
            <textarea placeholder="Какое обучение хотите пройти?"></textarea>
          </div>
          <button>Отправить</button>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button" @click="onEducationModalClick()"></span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.education-modal {
  position: absolute;
  width: 100vw;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  .education-common {
    .background {
      position: absolute;
      margin-left: 35.94vw;
      margin-top: 222px;
      .h-white {
        position: absolute;
        display: flex;
        width: 25.21vw;
        height: 373px;
        background-color: #ffffff;
        z-index: 13;
        border-radius: 27px;
        flex-direction: column;
        padding: 24px 0 24px 56px;

        .title {
          border: 1px solid #d6d6d6;
          border-radius: 7px;
          display: flex;
          align-items: center;
          color: #4766af;
          font-size: 16px;
          font-weight: 500;
          padding: 8px;
          width: 10.4vw;

          img {
            margin-right: 4px;
          }
        }

        .choose-dropdown {
          .dropdown-title {
            cursor: pointer;
            margin-top: 24px;
            width: 22.24vw;
            height: 35px;
            background-color: #4766af;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 10px;
            position: absolute;
            z-index: 20;

            h2 {
              font-size: 16px;
              font-weight: 400;
              margin: 0;
              color: #fff;
            }

            img {
              margin-left: 8px;
            }
          }
          .closed {
            display: none !important;
          }
          .dropdown-common {
            margin-top: 32px;
            position: absolute;
            display: flex;
            flex-direction: column;
            width: 22.24vw;
            height: 197px;
            background-color: #fff;
            overflow: scroll;
            border: 1px solid #e1e1e1;
            border-radius: 19px;
            padding: 43px 16px 10px 16px;
            z-index: 19;
            box-shadow:
              0 4px 8px 0 rgba(0, 0, 0, 0.1),
              0 6px 20px 0 rgba(0, 0, 0, 0.1);

            p {
              cursor: pointer;
              font-size: 14px;
              margin-bottom: 16px;
            }
            p:hover {
              color: #4766af;
            }
          }
        }

        .chosen {
          // chosen is here things!
        }

        .text {
          textarea {
            margin-top: 83px;
            width: 22.24vw;
            height: 138px;
            resize: none;
            border: 1px solid #d6d6d6;
            border-radius: 17px;
            padding: 16px;
          }
        }

        button {
          margin-top: 24px;
          width: 22.24vw;
          height: 40px;
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
        width: 28.07vw;
        height: 318px;
        background-color: #ffffff;
        z-index: 12;
        border-radius: 27px;
      }
      .full-bg {
        overflow: hidden;
        width: 28.07vw;
        height: 373px;
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
