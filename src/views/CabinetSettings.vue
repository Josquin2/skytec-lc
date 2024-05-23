<script setup lang="ts">
function onFirstCheckClick() {
  document.getElementById('checkbox-1')?.classList.toggle('clicked')
}

function onSecondCheckClick() {
  document.getElementById('checkbox-2')?.classList.toggle('clicked')
}

function onPhotoChangeModal() {
  document.getElementById('photo-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="settings-block">
    <!--  -->

    <!-- 


        
    -->

    <div class="photo-and-accept-changes">
      <div class="change-photo">
        <img src="/img/cabinet/user.png" alt="" class="photo" />
        <span
          ><img src="/img/cabinet/icons/pen-white.svg" alt="" @click="onPhotoChangeModal()"
        /></span>
      </div>

      <div class="accept-changes">
        <img src="/img/cabinet/icons/approve-blue.svg" alt="" />
        Сохранить изменения
      </div>
    </div>
    <div class="name">
      <div>
        <h2>ФИО:</h2>
        <img src="/img/cabinet/icons/lock-gray.svg" alt="" />
      </div>

      <input type="text" value="Иванов" />

      <input type="text" value="Александр" />

      <input type="text" value="Сергеевич" />
    </div>
    <div class="contacts">
      <div class="contact-common phone">
        <h2>Телефон:</h2>
        <input type="text" value="+7 (992) 007 54 09" />

        <img src="" alt="" />
      </div>

      <div class="check">
        <div class="checkbox-button" @click="onFirstCheckClick()">
          <span id="checkbox-1"></span>
        </div>
        <p>Скрыть мобильный телефон</p>
      </div>

      <div class="contact-common email">
        <h2>E-mail:</h2>
        <input type="text" value="Ivanovivan@rtg.ru" />
      </div>
    </div>
    <div class="job-info">
      <div class="info">
        <h2>Отдел:</h2>
        <input type="text" value="Отдел досуга" />
      </div>
      <div class="info">
        <h2>Должность:</h2>
        <input type="text" value="Менеджер по креативу" />
      </div>
      <div class="info">
        <h2>Непосредственный руководитель:</h2>
        <input type="text" value="Корнеева Наталья" />
      </div>
      <div class="check">
        <div class="checkbox-button" @click="onSecondCheckClick()">
          <span id="checkbox-2"></span>
        </div>
        <p>Я согласен на <a href=""> обработку персональных данных </a></p>
      </div>
    </div>

    <div class="load-photo-modal modal-hidden" id="photo-modal">
      <div class="modal-common">
        <div class="background">
          <span class="h-white">
            <div class="title">
              <img src="/img/cabinet/icons/user-gray.svg" alt="" />
              Изменить фото профиля
            </div>
            <div class="photo-change">
              <span class="photo-squad">
                <span class="photo-circle"></span>
              </span>
              <img src="/img/cabinet/user-on-change.png" alt="" />
            </div>
            <div class="buttons-save-choose">
              <button class="choose">
                Выбрать файл <img src="/img/cabinet/icons/file-blue.svg" />
              </button>
              <button class="save">Сохранить</button>
            </div>
          </span>
          <span class="w-white"></span>
          <span class="full-bg">
            <span class="close-button" @click="onPhotoChangeModal()"> </span>
            <span class="bg-button"></span>
            <span class="bg-w"></span>
            <span class="bg-h"></span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.settings-block {
  height: 90vh;
  padding: 146px 15.63vw;
  display: flex;

  .modal-hidden {
    display: none;
  }
  .load-photo-modal {
    position: absolute;
    width: 100vw;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;

    .modal-common {
      .background {
        position: absolute;
        margin-left: 39.11vw;
        margin-top: 222px;

        .h-white {
          position: absolute;
          display: flex;
          width: 19.06vw;
          height: 395px;
          background-color: #ffffff;
          z-index: 13;
          border-radius: 27px;

          flex-direction: column;
          padding: 24px 0;
          padding-left: 4.69vw;
          .title {
            width: 12.55vw;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #d6d6d6;
            border-radius: 7px;
            font-size: 16px;
            font-weight: 400;
            color: #898989;
          }
          .photo-change {
            margin-top: 16px;

            .photo-squad {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 240px;
              height: 240px;
              border-radius: 17px;
              position: absolute;
              overflow: hidden;

              .photo-circle {
                width: 220px;
                height: 220px;
                border-radius: 50%;
                outline: 100px solid rgba(0, 0, 0, 0.2);
              }
            }
          }

          .buttons-save-choose {
            display: flex;
            margin-top: 16px;

            .save {
              background-color: #ffffff;
              margin-left: 16px;
              border: none;
              border-radius: 10px;
              background-color: #4766af;
              color: #ffffff;
              padding: 10.5px 14px;
              font-size: 16px;
            }
            .choose {
              background-color: #ffffff;
              padding: 0;
              border: none;
              color: #4766af;
              font-size: 14px;
            }
          }
        }
        .w-white {
          margin-top: 55px;
          position: absolute;
          display: flex;
          width: 21.93vw;
          height: 340px;
          background-color: #ffffff;
          z-index: 12;
          border-radius: 27px;
        }
        .full-bg {
          overflow: hidden;
          width: 21.93vw;
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

  .photo-and-accept-changes {
    .change-photo {
      .photo {
        width: 15.63vw;
        border: 1px solid #cccccc;
        border-radius: 50%;
      }
      span {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: #4766af;
        border-radius: 50%;
        position: absolute;
        margin-left: 12vw;
        margin-top: -64px;

        img {
          width: 24px;
        }
      }
    }
    .accept-changes {
      cursor: pointer;
      width: 15.63vw;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      border: 1px solid #4766af;
      border-radius: 7px;
      color: #4766af;

      img {
        margin-right: 8px;
      }
    }
  }
  .name {
    margin-left: 24px;
    width: 16.25vw;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    border: 1px solid #cccccc;
    border-radius: 17px;

    div {
      width: 13.75vw;
      display: flex;
      justify-content: space-between;
      h2 {
        font-size: 16px;
        margin: 0;
        color: #999999;
      }
    }

    input {
      padding-left: 8px;
      border: none;
      border-bottom: 1px solid #999999;
      width: 13.75vw;
      margin-top: 24px;
      color: #9a9a9a;
    }
  }
  .contacts {
    margin-left: 24px;
    border: 1px solid #cccccc;
    border-radius: 17px;
    width: 16.25vw;
    height: max-content;
    padding: 24px;
    .contact-common {
      h2 {
        font-size: 16px;
        color: #999999;
        margin: 0;
      }
      input {
        padding-left: 8px;
        width: 13.75vw;
        margin-top: 24px;
        border: none;
        border-bottom: 1px solid #999999;
      }
    }
    .phone {
    }
    .check {
      display: flex;
      align-items: center;
      margin-bottom: 24px;

      p {
        margin: 0;
        margin-left: 8px;
      }
    }
    .email {
    }
  }

  .job-info {
    margin-left: 24px;
    border: 1px solid #cccccc;
    border-radius: 17px;
    width: 16.25vw;
    height: max-content;
    padding: 24px;

    .info {
      margin-bottom: 24px;
      h2 {
        font-size: 16px;
        color: #999999;
        margin: 0;
      }

      input {
        padding-left: 8px;
        margin-top: 24px;
        border: none;
        border-bottom: 1px solid #999999;
        width: 13.75vw;
      }
    }
    .check {
      display: flex;
      align-items: center;

      p {
        margin: 0;
        margin-left: 8px;
        color: #999999;

        a {
          text-decoration: none;
          color: #474747;
        }
      }
    }
  }
  .checkbox-button {
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
</style>
