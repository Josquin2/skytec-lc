<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'

import { onMounted, ref, type Ref } from 'vue'

import { type Blog } from '@/types/Blog'

import { Api } from '@/api/api'

const blogInfo = [
  {
    blogName: 'Цифровые технологии',
    author: 'Иванов Иван',
    authorImage: 'image'
  },
  {
    blogName: 'Маркетинг в 2023 году',
    author: 'Смирнов Анатолий',
    authorImage: 'image'
  },
  {
    blogName: 'Социальные сети в маркетинге: инструм...',
    author: 'Садова Анастасия',
    authorImage: 'image'
  },
  {
    blogName: 'Влияние видео-контента: как создать...',
    author: 'Федов Владимир',
    authorImage: 'image'
  },
  {
    blogName: 'Социальные сети в маркетинге: инструм...',
    author: 'Садова Анастасия',
    authorImage: 'image'
  }
]

const route = useRoute()

function onAllBlogsClick() {
  const login = route.params.login
  router.push({ name: 'all-blogs', params: { login: login } })
}

function onOneBlogClick(blog: string) {
  const login = route.params.login
  router.push({ name: 'one-blog', params: { login: login, blog: blog } })
}

// API integration

let ApiClass = new Api()

let blogs: Ref<Blog[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('articles')
  blogs.value = response
  console.log(blogs.value)
})
</script>

<!-- todo -->
<template>
  <div class="our-blog">
    <div class="our-blog-header" @click="onAllBlogsClick()">Наш Блог</div>
    <div class="blog-common">
      <div class="one-blog" v-for="blog in blogs">
        <img src="" alt="" class="blog-author-image" />
        <div class="blog-info" @click="onOneBlogClick(blog.title)">
          <h2 class="blog-name">{{ blog.title }}</h2>
          <p class="blog-author">{{ blog.author }}</p>
        </div>
      </div>
    </div>
    <div class="all-blogs-link" @click="onAllBlogsClick()">
      Все блоги <img src="/icons/arrow-blue.svg" alt="" />
    </div>
  </div>
</template>
