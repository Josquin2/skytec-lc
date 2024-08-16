<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue'
import { type Ref } from 'vue'
import { type Education } from '@/types/Education'
import { Api } from '@/api/api'

function onDropdownTitleClick() {
  document.getElementById('dropdown')?.classList.toggle('closed')
}

const emit = defineEmits(['chosedEducation'])

function chosedLesson(title: string, dates: Array<string>, id: number) {
  document.getElementById('dropdown')?.classList.toggle('closed')
  emit('chosedEducation', title, dates, id)
}

// API

let ApiClass = new Api()

let educationalPrograms: Ref<Education[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('education')
  educationalPrograms.value = response
  console.log(educationalPrograms.value)
})
</script>
<template>
  <div class="choose-dropdown noselect">
    <div class="dropdown-title" @click="onDropdownTitleClick()">
      <h2>Текущие обучения</h2>
      <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
    </div>
    <div class="dropdown-common closed" id="dropdown">
      <p
        v-for="(edu, index) in educationalPrograms"
        :key="index"
        @click="chosedLesson(edu?.title, edu.dates, edu.id)"
      >
        {{ edu?.title }}
      </p>
    </div>
  </div>
</template>
