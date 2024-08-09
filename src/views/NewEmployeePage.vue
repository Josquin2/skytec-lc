<script setup lang="ts">
import NewEmployee from '@/components/new-employee/NewEmployee.vue'
</script>

<template>
  <div class="new-employee-block-page">
    <NewEmployee />
  </div>
</template>

<style lang="scss">
.new-employee-block-page {
  padding: 139px 0px;
  display: flex;
  justify-content: center;
  min-height: 88vh;
  .additional {
    flex-direction: row !important;
    height: 250px;
  }
}
</style>
