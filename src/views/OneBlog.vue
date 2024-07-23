<script setup lang="ts">
import { useRoute } from 'vue-router'
import router from '@/router'
import { watch, onMounted, ref, type Ref } from 'vue'
import type { Blog } from '@/types/Blog'

import { Api } from '@/api/api'

import OneLittleBlog from '@/components/blogs/OneLittleBlog.vue'

const route = useRoute()

function onOtherBlogsClick() {
  const login = route.params.login
  router.push({ name: 'all-blogs', params: { login: login } })
}

// API

let ApiClass = new Api()
const blogData: Ref<Blog | null> = ref(null)
const allBlogs: Ref<Blog[]> = ref([])

const articleId = ref(route?.params?.blog)

watch(
  () => route?.params?.blog,
  (newVal) => {
    articleId.value = newVal
    getCurrentBlog()
  }
)

onMounted(async () => {
  // current blog
  getCurrentBlog()

  // all blogs
  const respAllBlogs = await ApiClass.getObjects('articles')
  allBlogs.value = respAllBlogs
  console.log(allBlogs.value)
})

async function getCurrentBlog() {
  const response = await ApiClass.getObjects(`articles/${articleId.value}`)
  blogData.value = await response
  console.log(blogData.value)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="one-blog-block">
    <div class="about-author">
      <img :src="blogData?.user?.avatar" alt="" />
      <div class="time-and-name">
        <p>{{ blogData?.created_at }}</p>
        <h4>{{ blogData?.user?.lastname + ' ' + blogData?.user?.firstname }}</h4>
      </div>
    </div>

    <div class="text">
      <h1 class="blog-title">{{ blogData?.title }}</h1>
      <div class="blog-text-common" v-html="blogData?.content"></div>
    </div>

    <div class="other-blogs">
      <h3 @click="onOtherBlogsClick()">Читать другие статьи</h3>
      <div class="two-blogs">
        <OneLittleBlog
          @click="getCurrentBlog"
          v-for="(oneLittle, index) in allBlogs?.slice(0, 2)"
          :key="index"
          :blog-id="oneLittle.id"
          :avatar="oneLittle?.user?.avatar"
          :date="oneLittle?.created_at"
          :author="oneLittle.user?.surname + ' ' + oneLittle.user?.firstname"
          :title="oneLittle?.title"
          :text="oneLittle?.content"
        />
      </div>
    </div>
  </div>
</template>
