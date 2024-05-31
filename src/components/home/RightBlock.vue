<script setup lang="ts">
const birthDays = [
  {
    day: '01.11.',
    name: 'Корнеева Наталья',
    job: 'Директор по персоналу'
  },
  {
    day: '02.11.',
    name: 'Смирнов Анатолий',
    job: 'Генеральный директор'
  },
  {
    day: '03.11.',
    name: 'Корнеева Наталья',
    job: 'Директор по персоналу'
  }
]

const date = new Date()
const todaysDate = date.getDate().toString().padStart(2, '0')
const todaysMonth = (date.getMonth() + 1).toString().padStart(2, '0')
const todaysYear = date.getFullYear()

function onCongratulationsModalClick() {
  document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
}
</script>

<template>
  <div class="right-block">
    <div class="today">
      <div class="congrats">
        <h3>Поздравляем! 🥳</h3>
        <div class="todays-date">
          <h4>Наши именинники сегодня</h4>
          <p>{{ todaysDate }}.{{ todaysMonth }}.{{ todaysYear }}</p>
        </div>
        <div class="who">
          <!-- here should be v-for -->
          <div class="happy-bd-to">
            <img src="" alt="" class="image-of-hbd" />
            <h2 class="name-of-hbd">Иванов Иван</h2>
            <p class="job-title-of-hbd">Менеджер по креативу</p>
          </div>
        </div>
        <button class="congratulations-button" @click="onCongratulationsModalClick()">
          <img src="/icons/gift.svg" alt="" /> Поздравить!
        </button>
      </div>
    </div>
    <hr class="border" />
    <!-- here should be v-if="someonesBirthday < today + 7days" -->
    <div class="next-week">
      <h2 class="other-hbd">Наши именинники на следующей неделе</h2>
      <div class="other-hbd-common" v-for="day in birthDays">
        <p class="date">{{ day.day }}</p>
        <h3 class="name-of-other-hbd">{{ day.name }}</h3>
        <h4 class="job-title-of-other-hbd">{{ day.job }}</h4>
      </div>
    </div>
  </div>
</template>
