<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header />
  <div class="main-app-common">
    <RouterView />
  </div>
  <Footer />
</template>

<style lang="scss">
.main-app-common {
  min-height: 88vh;
}
</style>
