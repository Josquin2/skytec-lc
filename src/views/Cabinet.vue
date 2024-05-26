<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'

import { Api } from '@/api/api'
import { User } from '@/api/user'

let ApiClass = new Api()
let UserClass = new User()

import LeftArticles from '@/components/home/LeftArticles.vue'
import VacationModal from '@/components/cabinet/VacationModal.vue'
import EducationModal from '@/components/cabinet/EducationModal.vue'
import JobModal from '@/components/cabinet/JobModal.vue'
import { onMounted, type Prop, ref } from 'vue'

const route = useRoute()

let user: Prop<Object> = ref('')

onMounted(async () => {
  const response = await UserClass.getUserData(localStorage.getItem('token'))
  user.value = response.data.data

  console.log(user.value)
})

function onSettingsClick() {
  const login = route.params.login
  router.push({ name: 'settings', params: { login: login } })
}

function onVacationModalClick() {
  document.getElementById('vacation-modal')?.classList.toggle('modal-hidden')
}
function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}
function onJobModalClick() {
  document.getElementById('job-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="cabinet-block" v-if="Object.keys(user).length">
    <div class="left">
      <div class="l-upper">
        <div class="photo">
          <span class="bg-circle"></span>
          <img :src="user.avatar" alt="" class="user-image rounded-circle" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>{{ user.name }}</h1>
          </div>
          <div class="job-info">
            <h2>Отдел досуга</h2>
            <hr />
            <h2>Менеджер по креативу</h2>
          </div>
          <div class="boss">
            <h3>Непосредственный руководитель:</h3>
            <h4>Корнеева Наталья</h4>
          </div>
          <div class="contact">
            <div class="phone-number">
              <img src="/icons/phone-blue.svg" alt="" />
              <p>{{ user.phone }}</p>
              <img src="" alt="" />
            </div>
            <div class="email">
              <img src="/icons/email-blue.svg" alt="" />
              <p>{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="l-footer">
        <h2>Мои заявки:</h2>
        <div class="requests">
          <div class="one-request">
            <div class="request-title">
              <img src="" alt="" />
              <h3>Заявка на обучение</h3>
            </div>
            <div class="response">
              <p>Одобренно</p>
              <img src="" alt="" />
            </div>
          </div>

          <div class="one-request">
            <div class="request-title">
              <img src="" alt="" />
              <h3>Заявка на обучение</h3>
            </div>
            <div class="response">
              <p>Одобренно</p>
              <img src="" alt="" />
            </div>
          </div>
          <div class="one-request">
            <div class="request-title">
              <img src="" alt="" />
              <h3>Заявка на обучение</h3>
            </div>
            <div class="response">
              <p>Одобренно</p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="r-left">
        <div @click="onSettingsClick()">
          <img src="/img/cabinet/icons/edit-black.svg" alt="" />Редактировать профиль
        </div>
        <div @click="onJobModalClick()">
          <img src="/img/cabinet/icons/bag-black.svg" alt="" />Заявка на командировку
        </div>
        <div @click="onEducationModalClick()">
          <img src="/img/cabinet/icons/education-black.svg" alt="" />Заявка на обучение
        </div>
        <div @click="onVacationModalClick()">
          <img src="/img/cabinet/icons/vacation-black.svg" alt="" />Заявка на отпуск
        </div>
        <div><img src="/img/cabinet/icons/document-black.svg" alt="" />Заказать справку</div>
      </div>
      <div class="r-right">
        <LeftArticles />
      </div>
    </div>

    <!-- Modals goes here -->
    <VacationModal />
    <EducationModal />
    <JobModal />
  </div>
</template>

<style lang="scss">
.cabinet-block {
  min-height: 100vh;
  padding: 117px 15.63vw;
  display: flex;

  .modal-hidden {
    display: none;
  }

  .left {
    .l-upper {
      display: flex;
      background: linear-gradient(to bottom, #f6f6f6, #fff);
      width: 33.75vw;
      border-radius: 20px;
      .photo {
        .bg-circle {
          display: block;
          position: absolute;
          width: 152px;
          height: 152px;
          background-color: #fff;
          border-radius: 50%;
          z-index: 1;
          margin-top: -24px;
          margin-left: -10px;
        }
        .user-image {
          position: absolute;
          width: 132px;
          z-index: 2;
          margin-top: -14px;
        }
      }
      .about-user {
        display: flex;
        flex-direction: column;
        margin-left: 9.79vw;
        margin-top: 24px;

        .name {
          h1 {
            font-size: 24px;
            color: #474747;
          }
        }
        .job-info {
          display: flex;
          h2 {
            font-size: 16px;
            color: #474747;
            font-weight: 400;
          }
          hr {
            margin: 0 16px;
            height: 19px;
            width: 1px;
            opacity: 100%;
            background-color: #b5b5b5;
          }
        }
        .boss {
          display: flex;
          h3 {
            margin: 0;
            font-size: 16px;
            color: #7d7d7d;
            font-weight: 400;
          }
          h4 {
            margin: 0;
            font-size: 16px;
            color: #474747;
            margin-left: 8px;
            font-weight: 400;
          }
        }
        .contact {
          margin-top: 24px;
          display: flex;
          .phone-number {
            display: flex;
            align-items: center;
            border: 1px solid #4766af;
            border-radius: 8px;
            padding: 8px;
            p {
              margin: 0 8px;
              color: #4766af;
            }
          }
          .email {
            display: flex;
            align-items: center;
            margin-left: 16px;
            border: 1px solid #4766af;
            border-radius: 8px;
            padding: 8px;
            p {
              margin: 0 8px;
              color: #4766af;
            }
          }
        }
      }
    }
    .l-footer {
      margin-top: 24px;

      h2 {
        font-size: 20px;
      }
      .requests {
        border: 1px solid #cccccc;
        border-radius: 20px;
        .one-request {
          display: flex;

          width: 33.75vw;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid #cccccc;

          border-radius: 0 0 20px 20px;
          .request-title {
            display: flex;
            h3 {
              font-size: 16px;
              margin: 0;
            }
          }
        }
        .response {
          display: flex;
          p {
            font-size: 14px;
            margin: 0;
          }
        }
      }
    }
  }
  .right {
    display: flex;
    .r-left {
      margin-left: 24px;
      border: 2px solid #cccccc;
      padding: 16px 24px 16px 24px;
      border-radius: 20px;
      height: max-content;

      div {
        cursor: pointer;
        height: 56px;
        width: 13.75vw;
        display: flex;
        align-items: center;
        margin-bottom: 8px;
        border: 1.5px solid rgba(#4766af, 0%);

        img {
          margin-left: 24px;
          margin-right: 8px;
        }
      }
      div:hover {
        border: 1.5px solid #4766af;
        border-radius: 7px;
        color: #4766af;
      }
    }
    .r-right {
      padding: 26px 20px 29px 20px;
      border: 2px solid #cccccc;
      border-radius: 20px;
      height: max-content;
      margin-left: 24px;
      .my-articles {
        margin-top: 0;
      }
    }
  }
}
</style>
