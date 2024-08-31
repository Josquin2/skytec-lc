<script setup lang="ts">
import { ref, onMounted, type Ref } from 'vue'
import OneWorker from '@/components/about-company/Worker.vue'
import { Api } from '@/api/api'
import type { User } from '@/types/User'

const ApiClass = new Api()
const data: Ref<User[]> = ref([])
onMounted(async () => {
  const response = await ApiClass.getObjects('key-persons')
  console.log(response)
  data.value = response
})

const chosedPerson = ref(0)
</script>
<template>
  <div class="team" id="key-persons">
    <div class="team-header">
      <div class="gradient-line"></div>
      <h1>Ключевые лица компании</h1>
    </div>
    <div class="team-common">
      <div class="boss">
        <img :src="data[chosedPerson]?.avatar" alt="" />
        <h2>{{ data[chosedPerson]?.name }}</h2>
        <h3>{{ data[chosedPerson]?.position }}</h3>
        <div class="boss-info" v-html="data[chosedPerson]?.description"></div>
      </div>
      <div class="workers">
        <!-- components here -->
        <OneWorker
          @click="chosedPerson = index"
          v-for="(user, index) in data"
          :key="index"
          :name="user?.name"
          :job="user?.position"
          :image="user?.avatar"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.team {
  margin-top: 64px;
  min-height: 88vh;

  .team-header {
    .gradient-line {
      width: 88px;
      height: 4px;
    }
    h1 {
      color: #474747;
      font-size: 20px;
      text-transform: uppercase;
    }
  }

  .team-common {
    margin-top: 48px;
    display: flex;
    padding-bottom: 72px;
    .boss {
      img {
        width: 22vw;
        height: 22vw;
        border-radius: 10px;
      }
      h2 {
        font-size: 24px;
        font-weight: 400;
        color: #4766af;
        margin: 0;
        margin-top: 16px;
      }
      h3 {
        font-size: 20px;
        font-weight: 400;
        color: #4766af;
        margin: 0;
        margin-top: 8px;
      }

      .boss-info {
        margin-top: 24px;

        p {
          font-size: 16px;
          color: #474747;
          margin: 0;
          margin-bottom: 16px;
          width: 22.1vw;
        }
      }
    }
    .workers {
      margin-left: 7.14vw;
      display: flex;
      flex-wrap: wrap;
      gap: 32px 24px;
      height: min-content;
    }
  }
}
</style>
