<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

import { defineEmits, ref } from 'vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { Api } from '@/api/api'

let ApiClass = new Api()

const vacationType = ref('Отпуск за свой счет') // as a default
const inputStartValue = ref('')
const inputEndValue = ref('')
const reason = ref('')

const token = localStorage.getItem('token')

function onVacationModalClick() {
  document.getElementById('vacation-modal')?.classList.toggle('modal-hidden')
}

function onCheckBoxClick(e: number) {
  if (e == 1 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-2')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    vacationType.value = 'Отпуск за свой счет'
  } else if (e == 2 && !document.getElementById(`checkbox-${e}`)?.classList.contains('checked')) {
    document.getElementById('checkbox-1')?.classList.remove('clicked')
    document.getElementById(`checkbox-${e}`)?.classList.add('clicked')

    vacationType.value = 'Ежегодный оплачиваемый отпуск'
  }
}

const emit = defineEmits(['checkAllRequests'])

async function onSendButtonClick() {
  try {
    if (token) {
      await ApiClass.post('application/vacation', {
        start_date: inputStartValue.value,
        end_date: inputEndValue.value,
        vacation_type: vacationType.value,
        reason: reason.value
      })
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      onVacationModalClick()
      emit('checkAllRequests')
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
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
            <div class="cause-of-vacation" @click="onCheckBoxClick(1)">
              <div class="checkbox-button">
                <span class="clicked" id="checkbox-1"></span>
              </div>
              Отпуск за свой счет
            </div>
            <div class="cause-of-vacation" @click="onCheckBoxClick(2)">
              <div class="checkbox-button">
                <span class="" id="checkbox-2"></span>
              </div>
              Ежегодный оплачиваемый отпуск
            </div>
          </div>
          <div class="right-text">
            <div class="title-cal">
              <h4>Начало отпуска:</h4>
              <Calendar
                @chosedDate="(dateToSend) => (inputStartValue = dateToSend)"
                idInput="first-vacation-input"
                idCalendar="first-vacation-calendar"
              />
            </div>
            <div class="title-cal">
              <h4>Окончание отпуска:</h4>
              <Calendar
                @chosedDate="(dateToSend) => (inputEndValue = dateToSend)"
                idInput="second-vacation-input"
                idCalendar="second-vacation-calendar"
              />
            </div>
            <div class="cause">
              <h4>Причина:</h4>
              <input type="text" name="" id="" v-model="reason" />
            </div>
            <button @click="onSendButtonClick()">Отправить</button>
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

<style lang="scss"></style>
