<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'
import { onOneBlogClick } from '@/components/routing-functions'

import { onMounted, ref, type Ref } from 'vue'

import { type Blog } from '@/types/Blog'

import { Api } from '@/api/api'

const route = useRoute()

function onAllBlogsClick() {
  const login = route.params.login
  router.push({ name: 'all-blogs', params: { login: login } })
}

// API integration

let ApiClass = new Api()

let blogs: Ref<Blog[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('articles')
  blogs.value = response
  // console.log(blogs.value)s
})
</script>

<template>
  <div class="our-blog">
    <div class="our-blog-header" @click="onAllBlogsClick()">Наш Блог</div>
    <div class="blog-common">
      <div
        class="one-blog"
        v-for="(blog, index) in blogs.slice(0, 5)"
        :key="index"
        @click="onOneBlogClick(blog.id)"
      >
        <img :src="blog.user.avatar" alt="" class="blog-author-image" />
        <div class="blog-info">
          <h2 class="blog-name">
            {{ blog.title.length > 37 ? blog.title.slice(0, 37) + '...' : blog.title }}
          </h2>
          <p class="blog-author">{{ blog.user.firstname + ' ' + blog.user.surname }}</p>
        </div>
      </div>
    </div>
    <div class="all-blogs-link" @click="onAllBlogsClick()">
      Все блоги <img src="/icons/arrow-blue.svg" alt="" />
    </div>
  </div>
</template>
