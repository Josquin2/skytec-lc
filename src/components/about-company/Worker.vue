<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  job: String,
  image: String
})
</script>

<template>
  <div class="one-worker">
    <img :src="props.image" alt="" />
    <h2>{{ props.name }}</h2>
    <p>{{ props.job }}</p>
  </div>
</template>

<style lang="scss">
.one-worker {
  cursor: pointer;
  width: 10.43vw;
  display: flex;
  flex-direction: column;
  height: min-content;

  h2 {
    font-size: 20px;
    font-weight: 400;
    margin: 0;
    margin-top: 16px;
    color: #474747;
  }
  p {
    font-size: 16px;
    margin: 0;
    margin-top: 8px;
    color: #6c6c6c;
  }
}
</style>
