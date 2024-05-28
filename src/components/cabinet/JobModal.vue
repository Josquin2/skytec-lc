<script setup lang="ts">
import Calendar from '@/components/cabinet/Calendar.vue'

function onJobModalClick() {
  document.getElementById('job-modal')?.classList.toggle('modal-hidden')
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

          <div class="dates">
            <div class="start">
              <h3>Начало командировки:</h3>
              <Calendar idCalendar="first-job-calendar" idInput="first-job-input" />
            </div>
            <div class="end">
              <h3>Окончание командировки:</h3>
              <Calendar idCalendar="second-job-calendar" idInput="second-job-input" />
            </div>
          </div>

          <button>Отправить</button>
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
