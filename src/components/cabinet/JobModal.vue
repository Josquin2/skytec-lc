<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { defineEmits, ref } from 'vue'
import { Api } from '@/api/api'
let ApiClass = new Api()

const emit = defineEmits(['checkAllRequests'])

function onJobModalClick() {
  document.getElementById('job-modal')?.classList.toggle('modal-hidden')
}

const inputStartValue = ref('')
const inputEndValue = ref('')
const destination = ref('')
const token = localStorage.getItem('token')

async function onSendButtonClick() {
  try {
    if (token) {
      await ApiClass.post('application/business-trip', {
        start_date: inputStartValue.value,
        end_date: inputEndValue.value,
        destination: destination.value
      })
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      onJobModalClick()
      emit('checkAllRequests')
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
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

          <div class="place">
            <textarea placeholder="Место командировки:" v-model="destination"></textarea>
          </div>

          <div class="dates">
            <div class="start">
              <h3>Начало командировки:</h3>
              <Calendar
                @chosedDate="(dateToSend) => (inputStartValue = dateToSend)"
                idCalendar="first-job-calendar"
                idInput="first-job-input"
              />
            </div>
            <div class="end">
              <h3>Окончание командировки:</h3>
              <Calendar
                @chosedDate="(dateToSend) => (inputEndValue = dateToSend)"
                idCalendar="second-job-calendar"
                idInput="second-job-input"
              />
            </div>
          </div>

          <button @click="onSendButtonClick()">Отправить</button>
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

<style>
:root {
  --toastify-color-progress-light: linear-gradient(to left, #4766af, #46bed6);
}
</style>
