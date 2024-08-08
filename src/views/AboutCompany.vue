<script setup lang="ts">
import StandardServices from '@/components/about-company/StandardServices.vue'
import AdditionalServices from '@/components/about-company/AdditionalServices.vue'
import OneWorker from '@/components/about-company/Worker.vue'
import StructureWorker from '@/components/about-company/StructureWorker.vue'
import StructureOfCompany from '@/components/about-company/StructureOfCompany.vue'
import { Api } from '@/api/api'
import { ref, onMounted, type Ref } from 'vue'
import type { Structure } from '@/types/Structure'

const services = ref('standard')

function onServicesChangeClick(value: string) {
  if (services.value == 'standard' && value == 'additional') {
    services.value = 'additional'
    document.getElementById('additional')?.classList.add('clicked')
    document.getElementById('standard')?.classList.remove('clicked')
  } else if (services.value == 'additional' && value == 'standard') {
    services.value = 'standard'
    document.getElementById('standard')?.classList.add('clicked')
    document.getElementById('additional')?.classList.remove('clicked')
  }
}

function onNavigationClick(to: string) {
  document.getElementById(to)?.scrollIntoView()
}

const ApiClass = new Api()
const cutted: Ref<Structure[][]> = ref([])

const currentPage = ref(0)

onMounted(async () => {
  const response = await ApiClass.getObjects('departments')
  const array = response
  cutForPages(array)
  console.log(array)
})

function cutForPages(allBlogs: Array<any>) {
  let n = 3
  for (let i = 0; i < allBlogs.length; i += n) {
    cutted.value.push(allBlogs.slice(i, i + n))
  }
}

function nextPage() {
  if (cutted.value.length > currentPage.value + 1) {
    onPageClick(currentPage.value + 1)
  }
}

function prevPage() {
  if (currentPage.value > 0) {
    onPageClick(currentPage.value - 1)
  }
}

function onPageClick(index: number) {
  currentPage.value = index
  document.getElementById('departments')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="about-company-block">
    <div class="navigation">
      <div class="one-nav" @click="onNavigationClick('who-are-we')">Кто мы?</div>
      <div class="one-nav" @click="onNavigationClick('key-persons')">Ключевые лица компании</div>
      <div class="one-nav" @click="onNavigationClick('company-structure')">Структура компании</div>
    </div>
  </div>
</template>
