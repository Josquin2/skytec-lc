<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import { useRoute } from 'vue-router'
import router from '@/router'

const route = useRoute()

const user = JSON.parse(localStorage.getItem('user') || '')

function onCreateNewEmployeeClick() {
  const login = route.params.login

  // here should be: if user can create new user -> router.push
  // else do nothing I guess
  router.push({ name: 'create-new-employee', params: { login: login } })
}
</script>

<template>
  <div class="new-employee-block">
    <DownloadBlock title="Welcome-book" type="PDF" icon="/icons/file-white.svg" />

    <!-- here should be if or something to check if user allowed to create new user -->
    <div class="create cannot-create">
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
