<script setup lang="ts">
import CKEditor from '@mayasabha/ckeditor4-vue3'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import { Api } from '@/api/api'

import { ref } from 'vue'

const articleTitle = ref('')
const articleContent = ref('')

let ApiClass = new Api()
const token = localStorage.getItem('user')

async function onCreateNewArticleClick() {
  try {
    if (token) {
      await ApiClass.post('articles', {
        title: articleTitle.value,
        content: articleContent.value
      })
      console.log(articleTitle.value)
      console.log(articleContent.value)
      toast('Статья отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
    }
  } catch (error) {
    toast('Ошибка при отправке статьи!', { position: toast.POSITION.BOTTOM_RIGHT })
    console.error(error)
  }
}
</script>

<template>
  <div class="new-article-block">
    <div class="create-article-header">
      <h1>Cоздание статьи</h1>
    </div>
    <div class="create-article-body">
      <input type="text" placeholder="Название статьи:" v-model="articleTitle" />

      <ckeditor v-model="articleContent" value="new"></ckeditor>
    </div>
    <div class="create-article-button">
      <button @click="onCreateNewArticleClick()">Создать</button>
    </div>
  </div>
</template>

<style lang="scss">
.new-article-block {
  padding: 137px 27.42vw;
  display: flex;
  flex-direction: column;
  min-height: 90vh;

  .create-article-header {
    h1 {
      font-size: 20px;
      color: #4766af;
    }
  }

  .create-article-body {
    margin-top: 24px;
    display: flex;
    flex-direction: column;

    input {
      height: 56px;
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      padding-left: 16px;
      margin-bottom: 16px;
    }
    input:focus {
      outline-width: 0;
    }

    .cke_chrome {
      border: 1px solid #9a9a9a;
      border-radius: 10px;
      overflow: hidden;
    }
  }
  .create-article-button {
    button {
      margin-top: 16px;
      font-size: 18px;
      background: linear-gradient(to right, #4766af, #46bed6);
      border: none;
      border-radius: 10px;
      height: 56px;
      width: 45.16vw;
      color: #fff;
    }
  }
}

@media only screen and (max-width: 1800px) {
  .new-article-block {
    padding: 137px 20vw;

    .create-article-button {
      button {
        width: 60vw;
      }
    }
  }
}
</style>
