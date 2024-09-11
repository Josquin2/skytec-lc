<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: String,
  job: String,
  image: String
})
</script>

<template>
  <div class="one-structure-worker" v-if="props.name == 'не назначен'">
    <h4>Руководитель пока не назначен!</h4>
  </div>
  <div class="one-structure-worker" v-else>
    <img :src="props?.image" alt="" />
    <div>
      <h1>{{ props?.name }}</h1>
      <p>{{ props?.job }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.one-structure-worker {
  cursor: pointer;
  height: 124px;
  width: 17.71vw;
  display: flex;

  h4 {
    align-self: center;
    text-align: center;
    color: #474747;
  }
  img {
    width: 124px;
    height: 124px;
    border: 1px solid #cccccc;
    border-radius: 10px;
  }

  div {
    margin-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      font-size: 20px;
      color: #474747;
      margin: 0;
    }
    p {
      margin: 0;
      margin-top: 8px;
      font-size: 16px;
      color: #474747;
      font-weight: 400;
      width: 10.42vw;
    }
  }
}

@media only screen and (max-width: 1380px) {
  .one-structure-worker {
    width: fit-content;

    h4 {
      font-size: 16px;
    }

    div {
      h1 {
        font-size: 15px;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
