<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'
import LeftMain from '@/components/home/LeftMain.vue'

const route = useRoute()

function onUserClick() {
  const login = route.params.login
  router.push({
    name: 'user-search-profile',
    params: { login: login, user: 'user-should-be-here' }
  })
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>

    <div class="user-search-center">
      <div class="one-response" @click="onUserClick()">
        <img src="" alt="" />
        <div class="user-info">
          <h2>Иванов Александр</h2>
          <div class="job-info">
            <p>Отдел досуга</p>
            <hr class="job-divider" />
            <p>Менеджер по креативу</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-search-center {
  margin-left: 64px;

  .one-response {
    display: flex;
    align-items: center;
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
}
</style>
