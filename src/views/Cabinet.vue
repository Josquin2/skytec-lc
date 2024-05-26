<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'

import LeftArticles from '@/components/home/LeftArticles.vue'
import VacationModal from '@/components/cabinet/VacationModal.vue'
import EducationModal from '@/components/cabinet/EducationModal.vue'
import JobModal from '@/components/cabinet/JobModal.vue'

const route = useRoute()

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
  <div class="cabinet-block">
    <div class="left">
      <div class="l-upper">
        <div class="photo">
          <span class="bg-circle"></span>
          <img src="/img/cabinet/user.png" alt="" class="user-image" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>Иванов Александр Сергеевич</h1>
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
              <p>+7 (992) 007 54 09</p>
              <img src="" alt="" />
            </div>
            <div class="email">
              <img src="/icons/email-blue.svg" alt="" />
              <p>Ivanovivan@rtg.ru</p>
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
