<script setup lang="ts">
import { defineEmits } from 'vue'

const allLessons = [
  {
    title: 'Современный маркетинг',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  },
  {
    title: 'Реклама в 2024 году',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  },
  {
    title: 'Ораторское искусство',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  },
  {
    title: 'Английский язык для начинающих',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  },
  {
    title: 'Рисование',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  },
  {
    title: 'Английский язык для продвинутых',
    dates: [
      '21.01.2024 16:40',
      '23.01.2024 17:30',
      '03.02.2024 12:30',
      '23.01.2024 17:20',
      '03.02.2024 12:30'
    ]
  }
]

function onDropdownTitleClick() {
  document.getElementById('dropdown')?.classList.toggle('closed')
}

const emit = defineEmits(['chosedEducation'])

function chooseLesson(title: string, dates: Array) {
  document.getElementById('dropdown')?.classList.toggle('closed')
  emit('chosedEducation', title, dates)
}
</script>
<template>
  <div class="choose-dropdown">
    <div class="dropdown-title" @click="onDropdownTitleClick()">
      <h2>Текущие обучения</h2>
      <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
    </div>
    <div class="dropdown-common closed" id="dropdown">
      <p v-for="edu in allLessons" @click="chooseLesson(edu.title, edu.dates)">{{ edu.title }}</p>
    </div>
  </div>
</template>
