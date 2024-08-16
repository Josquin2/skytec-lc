<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="main-app-common">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style lang="scss">
.main-app-common {
  display: flex;
  flex-direction: column;
}
</style>
