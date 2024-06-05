<script setup lang="ts">
import { defineEmits, onMounted, ref } from 'vue'
import { Api } from '@/api/api'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import EducationDropDown from './EducationDropDown.vue'

function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}

const chosenLesson = ref('')
const chosenDate = ref()
const chosenLessonId = ref()

function chosedEducation(lesson: string, dates: Array<string>, id: number) {
  document.getElementById('education-modal-common')?.classList.add('extended')

  document.getElementById('chosen-info')?.classList.remove('empty')

  chosenLesson.value = lesson
  chosenDate.value = dates
  chosenLessonId.value = id
}

const ChosedEducationDateId = ref('')
const finalDate = ref('')

function onOneDateClick(id: string, date: string) {
  document.getElementById(ChosedEducationDateId.value)?.classList.toggle('one-date-chosed')
  document.getElementById(id)?.classList.toggle('one-date-chosed')
  ChosedEducationDateId.value = id
  finalDate.value = date
  console.log(finalDate.value)
}

// API

const emit = defineEmits(['checkAllRequests'])

let ApiClass = new Api()

const token = localStorage.getItem('user')

async function onEducationSendButtonClick() {
  try {
    if (token) {
      await ApiClass.post('application/education', {
        education_id: chosenLessonId.value,
        date: finalDate.value
      })
      toast('Заявка отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      emit('checkAllRequests')
      onEducationModalClick()
    }
  } catch (error) {
    toast('Ошибка при отправке заявки!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="education-modal modal-hidden" id="education-modal">
    <div class="education-common" id="education-modal-common">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <img src="/img/cabinet/icons/education-blue.svg" alt="" />
            Заявка на обучение
          </div>

          <EducationDropDown @chosedEducation="chosedEducation" />

          <div class="chosen" id="chosen-info">
            <div class="chosen-lesson-title">
              <p>Выбрано:</p>
              <p class="lesson-title">{{ chosenLesson }}</p>
            </div>
            <div class="chosen-lesson-date">
              <p>Даты прохождения:</p>
              <p
                class="one-date"
                :id="'date-' + String(index)"
                v-for="(date, index) in chosenDate"
                :key="index"
                @click="onOneDateClick('date-' + String(index), date)"
              >
                {{ date }}
              </p>
            </div>
          </div>

          <div class="text">
            <textarea
              :placeholder="
                String(chosenDate) != ''
                  ? 'Не нашли подходящее обучение? Напишите здесь...'
                  : 'Какое обучение хотите пройти?'
              "
            ></textarea>
          </div>
          <button @click="onEducationSendButtonClick()">Отправить</button>
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
