<script setup lang="ts">
import { ref } from 'vue'
import OneWorker from '@/components/about-company/Worker.vue'

const data = [
  {
    id: 1,
    name: 'Мария Ельчинова',
    position: 'Генеральный директор SkyAlliance',
    image: '/img/about-company/worker-1.png',
    other_words:
      '<p>В рекламном бизнесе с 1994 года.</p><p>Начинала свою карьеру в агентстве Ogilvy&Mather. Затем работала на разных должностях в агентствах РАВИ, Мега Медиа (ГКВИ, Vi).</p><p>С 2005 по 2017 год занимала руководящие позиции в агентстве Maxus (GroupM).</p>'
  },
  {
    id: 2,
    name: 'Василий Туровец',
    position: 'Управляющий партнер SkyAlliance',
    image: '/img/about-company/worker-2.png',
    other_words: '<p>Информация о человеке</p>'
  },
  {
    id: 3,
    name: 'Лилия Гаджиева',
    position: 'Генеральный директор Pinpai',
    image: '/img/about-company/worker-3.png',
    other_words: '<p>Информация о человеке</p>'
  },
  {
    id: 4,
    name: 'Вишняков Алексей',
    position: 'Генеральный директор BuyTecKnowlogy',
    image: '/img/about-company/worker-4.png',
    other_words: '<p>Информация о человеке</p>'
  },
  {
    id: 5,
    name: 'Александр Луданный',
    position: 'New Business директор SkyAlliance',
    image: '/img/about-company/worker-5.png',
    other_words: '<p>Информация о человеке</p>'
  }
]

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
        <img :src="data[chosedPerson]?.image" alt="" />
        <h2>{{ data[chosedPerson]?.name }}</h2>
        <h3>{{ data[chosedPerson]?.position }}</h3>
        <div class="boss-info" v-html="data[chosedPerson]?.other_words"></div>
      </div>
      <div class="workers">
        <!-- components here -->
        <OneWorker
          @click="chosedPerson = index"
          v-for="(user, index) in data"
          :key="index"
          :name="user?.name"
          :job="user?.position"
          :image="user?.image"
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
