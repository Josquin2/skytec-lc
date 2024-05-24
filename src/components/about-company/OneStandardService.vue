<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  text: String,
  image: String
})
</script>

<template>
  <div class="one-standard-service">
    <span><img :src="props.image" alt="" /></span>

    <h2>{{ props.title }}</h2>
    <p>{{ props.text }}</p>
  </div>
</template>

<style lang="scss">
.one-standard-service {
  display: flex;
  flex-direction: column;
  width: 16.25vw;
  margin-right: 80px;
  margin-top: 64px;
  span {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4766af;
    border-radius: 50%;
  }

  h2 {
    margin: 0;
    margin-top: 16px;
    font-size: 18px;
    color: #474747;
    font-weight: 400;
  }
  p {
    margin: 0;
    margin-top: 16px;
    font-size: 16px;
    color: #474747;
    font-weight: 300;
  }
}
</style>
