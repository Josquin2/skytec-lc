<script setup lang="ts">
import DocumentsPage from './DocumentsPage.vue'
</script>

<template>
  <div class="instructions-page">
    <DocumentsPage title="Инструкции" endpoint="instructions" params="" />
  </div>
</template>

<style lang="scss">
.instructions-page {
  width: 100%;
}
</style>
