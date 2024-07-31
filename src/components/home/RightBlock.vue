<script setup lang="ts">
import CongratulationsModal from '@/components/home/CongratulationsModal.vue'
import { onMounted, type Ref, ref } from 'vue'
import { Api } from '@/api/api'
import type { User } from '@/types/User'

const date = new Date()
const todaysDate = date.getDate().toString().padStart(2, '0')
const todaysMonth = (date.getMonth() + 1).toString().padStart(2, '0')
const todaysYear = date.getFullYear()

function onCongratulationsModalClick(name: string, id: number) {
  if (name && id) {
    selectedName.value = name
    selectedPersonsId.value = id
    document.getElementById('congratulations-modal')?.classList.toggle('modal-hidden')
  }
}

const selectedName = ref('')
const selectedPersonsId = ref()

// API

let ApiClass = new Api()

const allBirthDays: Ref<User[]> = ref([])
const todaysBirthDays: Ref<User[]> = ref([])

onMounted(async () => {
  getAllBirthdays()
  getTodaysBirthdays()
})

async function getAllBirthdays() {
  const response = await ApiClass.getObjects('birthdays')
  allBirthDays.value = response
  console.log(allBirthDays.value)
}

async function getTodaysBirthdays() {
  const response = await ApiClass.getObjects('birthdays/today')
  todaysBirthDays.value = response
}
</script>

<template>
  <div class="right-block-birthday" v-if="allBirthDays.length > 0 || todaysBirthDays.length > 0">
    <div class="today" v-if="todaysBirthDays.length > 0">
      <div class="congrats">
        <h3>Поздравляем! 🥳</h3>
        <div class="todays-date">
          <h4>Наши именинники сегодня</h4>
          <p>{{ todaysDate }}.{{ todaysMonth }}.{{ todaysYear }}</p>
        </div>
        <div class="who" v-for="(one, index) in todaysBirthDays" :key="index">
          <div class="happy-bd-to">
            <img :src="one?.avatar" alt="" class="image-of-hbd" />
            <h2 class="name-of-hbd">{{ one?.surname }} {{ one?.firstname }}</h2>
            <p class="job-title-of-hbd">{{ one?.position }}</p>
          </div>
          <button
            class="congratulations-button"
            @click="onCongratulationsModalClick(one.name, one.id)"
          >
            <img src="/icons/gift.svg" alt="" /> Поздравить!
          </button>
        </div>
      </div>
      <hr class="border" />
    </div>

    <div class="next-week" v-if="allBirthDays.length > 0">
      <h2 class="other-hbd">Наши именинники на следующей неделе</h2>
      <div class="other-hbd-common" v-for="(day, index) in allBirthDays" :key="index">
        <p class="date">
          {{ day?.birthdate.split('.')[0] + '.' + day?.birthdate.split('.')[1] }}
        </p>
        <h3 class="name-of-other-hbd">{{ day?.surname }} {{ day?.firstname }}</h3>
        <h4 class="job-title-of-other-hbd">{{ day?.position }}</h4>
      </div>
    </div>
  </div>
  <div class="right-block-birthday" v-if="allBirthDays.length < 1 && todaysBirthDays.length < 1">
    <div class="next-week">
      <h2 class="other-hbd" style="color: #474747">Нет ближайщих дней рождений.</h2>
    </div>
  </div>
  <CongratulationsModal :toWho="selectedName" :id="selectedPersonsId" />
</template>
