<script setup lang="ts">
import { ref } from 'vue'
const data = [
  {
    id: 0,
    image: '/img/about-company/logo-black.png',
    name: 'Скай Альянс',
    boss: [
      {
        name: 'Мария Ельчинова',
        position: 'Генеральный директор SkyAlliance',
        image: '/img/about-company/worker-1.png'
      },
      {
        name: 'Василий Туровец',
        position: 'Управляющий партнер SkyAlliance',
        image: '/img/about-company/worker-2.png'
      }
    ]
  },
  { id: 1, image: '/img/about-company/logo-1.png', name: 'СкайТек Медиа', boss: [] },
  {
    id: 2,
    image: '/img/about-company/logo-2.png',
    name: 'ТЕКНОУЛОДЖИ',
    boss: [
      {
        name: 'Вишняков Алексей',
        position: 'Генеральный директор BuyTecKnowlogy',
        image: '/img/about-company/worker-4.png'
      }
    ]
  },
  {
    id: 3,
    image: '/img/about-company/logo-3.png',
    name: 'ПИНЬПАЙ',
    boss: [
      {
        name: 'Лилия Гаджиева',
        position: 'Генеральный директор Pinpai',
        image: '/img/about-company/worker-3.png'
      }
    ]
  }
]

const emit = defineEmits(['update-company-name'])

function onAdvClick(name: string, index: number) {
  compName.value = name
  clickedComp.value = index
  emit('update-company-name', name)
}

const compName = ref('')
const clickedComp = ref(0)
</script>

<template>
  <div class="companies-change-block">
    <div
      class="one-adv"
      v-for="(adv, index) in data"
      :key="index"
      @click="onAdvClick(adv.name, index)"
    >
      <img :src="adv.image" alt="" />
      <div class="gradient-line" v-show="clickedComp == index"></div>
    </div>
  </div>
</template>

<style lang="scss">
.companies-change-block {
  padding-bottom: 48px;
  display: flex;

  .one-adv {
    cursor: pointer;
    background-color: #f6f6f6;
    width: fit-content;
    min-width: 156px;
    min-height: 129px;
    border-radius: 10px;
    margin-right: 24px;
    padding: 24px;

    h3 {
      margin-top: 16px;
      font-size: 22px;
      color: #474747;
    }

    img {
      width: 78px;
    }

    .gradient-line {
      width: 88px;
      height: 4px;
      margin-top: 16px;
    }

    .text-block {
      margin-top: 16px;
      display: flex;

      h2 {
        font-size: 16px;
        font-weight: 400;
      }
      h3 {
        font-size: 16px;
        margin-left: 8px;
        font-weight: 400;
        text-transform: uppercase;
        width: 12.6vw;
      }
    }
  }
}
</style>
