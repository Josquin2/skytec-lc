<script setup lang="ts">
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import { ref, onMounted } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const route = useRoute()

const canCreate = ref(false)

onMounted(() => {
  if (localStorage.getItem('permissions')) {
    const permissions = JSON.parse(localStorage.getItem('permissions') || '')

    if (permissions['users.create']) {
      canCreate.value = permissions['users.create']
    }
  }
})

function onCreateNewEmployeeClick() {
  const login = route.params.login

  if (canCreate.value == true) {
    router.push({ name: 'create-new-employee', params: { login: login } })
  } else {
    toast('Вы не можете создать пользователя!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
}
</script>

<template>
  <div class="new-employee-block">
    <DownloadBlock title="Welcome-book" type="PDF" icon="/icons/file-white.svg" />

    <!-- here should be if or something to check if user allowed to create new user -->
    <div class="create" :class="{ 'cannot-create': !canCreate }">
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
