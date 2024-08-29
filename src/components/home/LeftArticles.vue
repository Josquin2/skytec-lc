<script setup lang="ts">
import router from '@/router'
import { onMounted, ref, type Ref } from 'vue'
import { onOneBlogClick } from '@/components/routing-functions'

import { type Blog } from '@/types/Blog'

import { Api } from '@/api/api'

function onNewArticleClick() {
  router.push({ name: 'new-article' })
}

// API

const user = JSON.parse(localStorage.getItem('user') || '{}')

let ApiClass = new Api()

let myBlogs: Ref<Blog[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects(`articles?user_id=${user.id}`)
  myBlogs.value = response
  // console.log(`articles?user_id=${user.id}`)
  // console.log(myBlogs.value)
})
</script>

<template>
  <div class="my-articles">
    <div class="my-articles-header">Мои статьи</div>
    <div class="common-articles">
      <div class="one-article" v-for="(article, index) in myBlogs?.slice(0, 2)" :key="index">
        <img :src="article?.user?.avatar" alt="" class="article-author-image" />
        <div class="article-info" @click="onOneBlogClick(article.id)">
          <h2 class="article-name">
            {{ article?.title?.length > 36 ? article?.title.slice(0, 36) + '...' : article?.title }}
          </h2>
          <p class="article-author">
            {{ article?.user?.firstname + ' ' + article?.user?.surname }}
          </p>
        </div>
      </div>
    </div>
    <div class="add-article" @click="onNewArticleClick()">
      <img src="/icons/plus.svg" alt="" />
    </div>
  </div>
</template>

<style lang="scss"></style>
