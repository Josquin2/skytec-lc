<script setup lang="ts">
import { type Ref, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import LeftMain from '@/components/home/LeftMain.vue'
import { Api } from '@/api/api'
import type { User } from '@/types/User'

const ApiClass = new Api()
const route = useRoute()

function onUserClick(id: number) {
  const login = route.params.login
  router.push({
    name: 'user-search-profile',
    params: { login: login, user: id }
  })
}

// API

const users: Ref<User[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects(`user/search?fullname=${route.params.search}`)
  console.log(response)
  users.value = response
})

watch(
  () => route.params.search,
  async (newName) => {
    const response = await ApiClass.getObjects(`user/search?fullname=${newName}`)
    users.value = []
    users.value = response
  }
)
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>

    <div class="user-search-center">
      <div
        class="one-response"
        @click="onUserClick(user.id)"
        v-for="(user, index) in users"
        :key="index"
      >
        <img :src="user?.avatar" alt="" />
        <div class="user-info">
          <h2>{{ user?.firstname + ' ' + user?.surname }}</h2>
          <div class="job-info">
            <p>{{ user?.department?.title || 'Н/Д' }}</p>
            <hr class="job-divider" />
            <p>{{ user?.position }}</p>
          </div>
        </div>
      </div>
      <div class="no-one-found" v-if="users.length < 1">По вашему запросу ничего не найдено!</div>
    </div>
  </div>
</template>

<style lang="scss">
.user-search-center {
  margin-left: 64px;

  .one-response {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding: 8px 0;
    img {
      width: 56px;
      height: 56px;
      border: 1px solid #cccccc;
      border-radius: 50%;
    }

    .user-info {
      cursor: pointer;
      margin-left: 8px;

      h2 {
        font-size: 16px;
        font-weight: 400;
        color: #474747;
        margin: 0;
        transition: 0.2s;
      }
      p {
        margin: 0;
        margin-top: 4px;
        font-size: 16px;
        color: #9a9a9a;
      }
      .job-info {
        display: flex;
        align-items: center;

        .job-divider {
          height: 16px;
          width: 1px;
          background-color: #474747;
          margin: 0;
          margin-left: 6px;
          margin-right: 6px;
          margin-top: 2px;
        }
      }
    }
    .user-info:hover {
      h2 {
        color: #4766af;
      }
    }
  }
  .no-one-found {
    margin-top: 16px;
    font-size: 20px;
    color: #474747;
  }
}
</style>
