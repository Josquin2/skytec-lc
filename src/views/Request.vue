<script>
import { defineProps } from 'vue'

const props = defineProps({
  title: String
})
</script>

<template>
  <div class="create-new-employee-block">
    <div class="create-header">
      <h1>d,sfmds</h1>
      <h2>Укажите кому необходима помощь</h2>
    </div>
    <div class="create-body">
      <input type="text" name="" id="" placeholder="Расположение:" />

      <textarea name="" id="" placeholder="Ваш запрос:"></textarea>
    </div>
    <div class="create-button">
      <button>Отправить</button>
    </div>
  </div>
</template>

<style lang="scss">
.create-new-employee-block {
  padding: 179px 33.18vw 433px 33.18vw;

  .create-header {
    h1 {
      font-size: 20px;
      color: #4766af;
    }
    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #999999;
      margin: 0;
    }
  }
  .create-body {
    display: flex;
    flex-direction: column;
    margin-top: 24px;

    input {
      height: 56px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding-left: 16px;
      margin-bottom: 16px;
    }

    textarea {
      resize: none;
      height: 98px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding: 16px;
    }
  }
  .create-button {
    button {
      margin-top: 16px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border: none;
      border-radius: 10px;
      height: 56px;
      width: 33.59vw;
      color: #fff;
    }
  }
}
</style>
