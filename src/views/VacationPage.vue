<script setup lang="ts">
import { ref } from 'vue'
import Companies from '@/components/blocks/Companies.vue'
import DocumentsPage from './DocumentsPage.vue'

const company = ref('Скай Альянс')

const handleCompanyNameUpdate = (newName: string) => {
  company.value = newName // Обновляем значение переменной company
}
</script>

<template>
  <div class="regulatory-documents documents-full">
    <Companies @update-company-name="handleCompanyNameUpdate" />
    <DocumentsPage endpoint="vacations" title="Заявления на отпуск" :params="company" />
  </div>
</template>
