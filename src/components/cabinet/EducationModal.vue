<script setup lang="ts">
import { ref } from 'vue'
import EducationDropDown from './EducationDropDown.vue'
function onEducationModalClick() {
  document.getElementById('education-modal')?.classList.toggle('modal-hidden')
}

const chosenLesson = ref('')
const chosenDate = ref([])

function chosedEducation(lesson: string, dates: Array) {
  document.getElementById('education-modal-common')?.classList.add('extended')

  document.getElementById('chosen-info')?.classList.remove('empty')

  chosenLesson.value = lesson
  chosenDate.value = dates
  console.log(dates)
}

const ChosedEducationDateId = ref('')

function onOneDateClick(id: string) {
  document.getElementById(ChosedEducationDateId.value)?.classList.toggle('one-date-chosed')
  document.getElementById(id)?.classList.toggle('one-date-chosed')
  ChosedEducationDateId.value = id
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
                @click="onOneDateClick('date-' + String(index))"
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
