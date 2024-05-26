<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

function onCreateNewEmployeeClick() {
  const login = route.params.login
  router.push({ name: 'create-new-employee', params: { login: login } })
}
</script>

<template>
  <div class="new-employee-block">
    <DownloadBlock title="Welcome-book" type="PDF" icon="/icons/file-white.svg" />
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
          <span class="close-button">
            <img src="/icons/people-white.svg" alt="" />
          </span>
          <span class="bg-button"></span>
          <span class="bg-w"></span>
          <span class="bg-h"></span>
        </div>
      </div>
    </div>
  </div>
</template>
