<script setup lang="ts">
import CategoriesDropdown from '@/components/blogs/CategoriesDropdown.vue'

import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import router from '@/router'
import { useRoute } from 'vue-router'

import { Api } from '@/api/api'

import { ref, onMounted } from 'vue'

const route = useRoute()

const articleTitle = ref('')
const articleContent = ref('')
const articleCategoryId = ref()

let ApiClass = new Api()
const token = localStorage.getItem('user')

const articleBody = ref('')

const allCategories = ref([])
onMounted(async () => {
  getArticleBody()

  const response = await ApiClass.getObjects(`articles/categories`)
  console.log(response)
  allCategories.value = response
  //   console.log(allBlogs.value)
})
async function onCreateNewArticleClick() {
  if (articleTitle.value != '' && articleContent.value != '') {
    try {
      if (token) {
        const response = await ApiClass.put(`articles/${route?.params?.article}`, {
          article_category_id: articleCategoryId.value,
          title: articleTitle.value,
          content: articleContent.value
        })
        console.log(response.data)
        router.push({ name: 'one-blog', params: { blog: route?.params?.article } })
        toast('Статья отправлена!', { position: toast.POSITION.BOTTOM_RIGHT })
      }
    } catch (error) {
      toast('Ошибка при отправке статьи!', { position: toast.POSITION.BOTTOM_RIGHT })
      console.error(error)
    }
  } else {
    console.log(articleCategoryId.value)
    toast('Поля должны быть заполнены!', { position: toast.POSITION.BOTTOM_RIGHT })
  }
}

async function getArticleBody() {
  const articleId = route?.params?.article

  const resp = await ApiClass.getObjects(`articles/${articleId}`)
  articleBody.value = resp
  console.log(articleBody.value)
  articleContent.value = resp.content
  articleTitle.value = resp.title
  articleCategoryId.value = resp.article_category_id
  console.log(articleCategoryId.value)
}
</script>

<template>
  <div class="new-article-block">
    <div class="create-article-header">
      <h1>Редактирование статьи</h1>
    </div>
    <div class="create-article-body">
      <CategoriesDropdown
        @chosedCategory="(value) => (articleCategoryId = value)"
        :category="articleCategoryId"
      />

      <input type="text" placeholder="Название статьи:" v-model="articleTitle" />

      <ckeditor v-model="articleContent" value="new"></ckeditor>
    </div>
    <div class="create-article-button">
      <button @click="onCreateNewArticleClick()">Отправить</button>
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
      margin-top: 16px;
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
