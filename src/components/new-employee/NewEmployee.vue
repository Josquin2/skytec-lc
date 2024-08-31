<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DownloadBlock from '@/components/blocks/DownloadBlock.vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const route = useRoute()

function onCreateNewEmployeeClick() {
  const login = route.params.login

  if (canCreate.value == 1) {
    router.push({ name: 'create-new-employee', params: { login: login } })
  } else {
    toast('Вы не можете создать пользователя!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
}

const canCreate = ref(0)

onMounted(() => {
  if (localStorage.getItem('permissions')) {
    const permissions = JSON.parse(localStorage.getItem('permissions') || '')
    if (permissions === null) {
      canCreate.value = 0
    } else {
      if (permissions['users.create']) {
        canCreate.value = permissions['users.create']
      }
    }
  }
})
</script>

<template>
  <div class="new-employee-block additional">
    <DownloadBlock
      title="Welcome-book"
      type="PDF"
      icon="/icons/file-white.svg"
      url="welcome-book"
    />
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
