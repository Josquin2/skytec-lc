<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import router from '@/router'

function onCreateNewEmployeeClick() {
  router.push({ name: 'create-new-employee' })
}
</script>

<template>
  <div class="new-employee-block additional">
    <DownloadBlock
      title="Welcome-book"
      type="PDF"
      icon="/icons/file-white.svg"
      url="welcome-book"
    />
    <div class="create">
      <div class="background">
        <div class="h-white">
          <div class="title">
            <h1>Создать учетную запись для сотрудника</h1>
          </div>

          <div class="buttons">
            <button @click="onCreateNewEmployeeClick()">
              Создать учетную запись для нового сотрудника
            </button>
          </div>
        </div>
        <div class="w-white"></div>
        <div class="full-bg">
          <span class="close-button"> </span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>
