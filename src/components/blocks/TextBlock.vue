<script setup lang="ts">
const props = defineProps({
  content: String
})
</script>

<template>
  <div class="additional-text-block">
    <p>{{ props?.content }}</p>
  </div>
</template>

<style lang="scss">
.additional-text-block {
  width: 33.85vw;
  p {
    font-size: 16px;
    color: #474747;
  }
}
</style>
