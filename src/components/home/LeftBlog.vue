<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'

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
</script>

<template>
  <div class="our-blog">
    <div class="our-blog-header" @click="onAllBlogsClick()">Наш Блог</div>
    <div class="blog-common">
      <div class="one-blog" v-for="blog in blogInfo">
        <img src="" alt="" class="blog-author-image" />
        <div class="blog-info">
          <h2 class="blog-name">{{ blog.blogName }}</h2>
          <p class="blog-author">{{ blog.author }}</p>
        </div>
      </div>
    </div>
    <div class="all-blogs-link" @click="onAllBlogsClick()">Все блоги</div>
  </div>
</template>
