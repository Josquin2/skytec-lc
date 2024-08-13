<script setup lang="ts">
import { ref } from 'vue'
import KeyPersons from '@/components/about-company/KeyPersons.vue'
import Structure from '@/components/about-company/Structure.vue'

const data = [
  {
    id: 0,
    image: '/src/assets/img/logo-black.png',
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
  { id: 1, image: '/img/about-company/logo-1.png', name: 'ТЕКНОУЛОДЖИ', boss: [] },
  {
    id: 2,
    image: '/img/about-company/logo-2.png',
    name: 'СкайТек Медиа',
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

const keyPersons = ref(true)
const structure = ref(false)

const clickedComp = ref()
const compName = ref('')
const compBoss = ref()

function onAdvClick(name: string, index: number) {
  compName.value = name
  clickedComp.value = index
  keyPersons.value = false
  compBoss.value = data[index].boss
}

function onKeyPersonsClick() {
  clickedComp.value = null
  keyPersons.value = true
}
</script>

<template>
  <div class="about-company-block">
    <div class="advantages" id="who-are-we">
      <div class="one-adv" @click="onKeyPersonsClick()">
        <h3>Руководство</h3>
        <div class="gradient-line" v-show="keyPersons"></div>
      </div>
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
    <KeyPersons v-if="keyPersons && !structure" />
    <Structure v-if="!keyPersons" :name="compName" :boss="compBoss" />
  </div>
</template>
