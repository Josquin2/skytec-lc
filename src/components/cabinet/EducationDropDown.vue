<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import { Api } from '@/api/api'

function onDropdownTitleClick() {
  document.getElementById('dropdown')?.classList.toggle('closed')
}

const emit = defineEmits(['chosedEducation'])

function chosedLesson(title: string, dates: Array<string>, id) {
  document.getElementById('dropdown')?.classList.toggle('closed')
  emit('chosedEducation', title, dates, id)
}

// API

let ApiClass = new Api()

let educationalPrograms = ref('')

onMounted(async () => {
  const response = await ApiClass.getObjects('education')
  educationalPrograms.value = response
  console.log(educationalPrograms.value)
})
</script>
<template>
  <div class="choose-dropdown">
    <div class="dropdown-title" @click="onDropdownTitleClick()">
      <h2>Текущие обучения</h2>
      <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
    </div>
    <div class="dropdown-common closed" id="dropdown">
      <p v-for="edu in educationalPrograms" @click="chosedLesson(edu.title, edu.dates, edu.id)">
        {{ edu.title }}
      </p>
    </div>
  </div>
</template>
