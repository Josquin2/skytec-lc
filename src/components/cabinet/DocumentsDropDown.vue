<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { type Ref } from 'vue'

function onDropdownTitleClick() {
  document.getElementById('documents-dropdown')?.classList.toggle('closed')
}

const emit = defineEmits(['chosedDocument'])

function chosedDocument(title: string) {
  document.getElementById('documents-dropdown')?.classList.toggle('closed')
  emit('chosedDocument', title)
}

let educationalPrograms: Ref<string[]> = ref([
  '2-НДФЛ',
  'О доходах',
  'О начисленных страховых взносах',
  'Справка для консульства/посольства',
  'Копия трудовой книжки'
])
</script>
<template>
  <div class="choose-dropdown noselect">
    <div class="dropdown-title" @click="onDropdownTitleClick()">
      <h2>Справки</h2>
      <img src="/img/cabinet/icons/arrow-white.svg" alt="" />
    </div>
    <div class="dropdown-common closed" id="documents-dropdown">
      <p v-for="(title, index) in educationalPrograms" :key="index" @click="chosedDocument(title)">
        {{ title }}
      </p>
    </div>
  </div>
</template>
