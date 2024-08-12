<script setup lang="ts">
import Advantages from '@/components/about-company/Advantages.vue'
import Services from '@/components/about-company/Services.vue'
import KeyPersons from '@/components/about-company/KeyPersons.vue'
import Structure from '@/components/about-company/Structure.vue'

function onNavigationClick(to: string) {
  document?.getElementById(to)?.scrollIntoView()
}
</script>

<template>
  <div class="about-company-block">
    <div class="navigation">
      <div class="one-nav" @click="onNavigationClick('who-are-we')">Кто мы?</div>
      <div class="one-nav" @click="onNavigationClick('key-persons')">Ключевые лица компании</div>
      <div class="one-nav" @click="onNavigationClick('company-structure')">Структура компании</div>
    </div>
    <Advantages />
    <Services />
    <KeyPersons />
    <Structure />
  </div>
</template>
