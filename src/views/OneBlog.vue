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
const shuffledBlogs: Ref<Blog[]> = ref([])

const articleId = ref(route?.params?.blog)

const userLocal = JSON.parse(localStorage.getItem('user') || '{}')

watch(
  () => route?.params?.blog,
  (newVal) => {
    articleId.value = newVal
    getCurrentBlog()
    shuffledBlogs.value = []
    shuffleBlogs()
  }
)

onMounted(async () => {
  // current blog
  getCurrentBlog()

  // all blogs
  const respAllBlogs = await ApiClass.getObjects('articles')
  allBlogs.value = respAllBlogs
  console.log(allBlogs.value)

  shuffleBlogs()
})

async function getCurrentBlog() {
  const response = await ApiClass.getObjects(`articles/${articleId.value}`)
  blogData.value = await response
  console.log(blogData.value)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function onEditClick() {
  router.push({ name: 'edit-article', params: { article: articleId.value } })
}

async function onDeleteClick() {
  await ApiClass.delete(`articles/${articleId.value}`)
  router.push({ name: 'main' })
}

function shuffleBlogs() {
  for (let i = allBlogs.value.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    if (allBlogs.value[randomIndex].id != Number(articleId.value)) {
      shuffledBlogs.value.push(allBlogs.value[randomIndex])
    } else {
      console.log('current')
    }
  }
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
      <div class="blog-title">
        <h1>{{ blogData?.title }}</h1>
        <div class="edit-delete" v-if="blogData?.user_id === userLocal?.id">
          <p @click="onEditClick">Редактировать</p>
          <p @click="onDeleteClick">Удалить</p>
        </div>
      </div>
      <div class="blog-text-common" v-html="blogData?.content"></div>
    </div>

    <div class="other-blogs">
      <h3 @click="onOtherBlogsClick()">Читать другие статьи</h3>
      <div class="two-blogs">
        <OneLittleBlog
          @click="getCurrentBlog"
          v-for="(oneLittle, index) in shuffledBlogs?.slice(0, 2)"
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
