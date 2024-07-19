<script setup lang="ts">
import OneLittleBlog from '@/components/blogs/OneLittleBlog.vue'
import { computed, ref, onMounted, type Ref } from 'vue'

import { type Blog } from '@/types/Blog'
import { Api } from '@/api/api'

let ApiClass = new Api()
let allBlogs: Ref<Blog[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects('articles')
  allBlogs.value = response
  cutForPages(allBlogs.value)
})

const cuttedBlogs: Ref<Blog[][]> = ref([])
const currentPage = ref(0)

function cutForPages(allBlogs: Array<Blog>) {
  let n = 10
  for (let i = 0; i < allBlogs.length; i += n) {
    cuttedBlogs.value.push(allBlogs.slice(i, i + n))
  }
}

let pagesToShow = computed(() => {
  let start = Math.max(currentPage.value - 2, 0)
  let end = Math.min(start + 5, cuttedBlogs.value.length)

  if (currentPage.value < 3) {
    end = Math.min(start + 5, cuttedBlogs.value.length)
  } else if (currentPage.value > cuttedBlogs.value.length - 4) {
    start = cuttedBlogs.value.length - 5
  }

  return [...Array(end - start).keys()].map((i) => i + start)
})

function changePage(page: number) {
  currentPage.value = page
  window.scrollTo(0, 0)
}
</script>

<template>
  <div class="all-blogs-block">
    <div class="center">
      <div class="blogs">
        <OneLittleBlog
          v-for="(blog, index) in cuttedBlogs[currentPage]"
          :key="index"
          :avatar="blog.user.avatar"
          :date="blog.created_at"
          :author="blog.user.lastname + ' ' + blog.user.firstname"
          :title="blog.title"
          :text="blog.content"
          :blog-id="blog.id"
        />
      </div>
      <div class="page-count">
        <div v-if="currentPage > 2" class="one-page" @click="changePage(0)">1</div>
        <div v-if="currentPage > 2" class="one-page">...</div>
        <div
          v-for="page in pagesToShow"
          :key="page"
          class="one-page"
          :class="{ 'current-page': currentPage === page }"
          @click="changePage(page)"
        >
          {{ page + 1 }}
        </div>
        <div v-if="currentPage < cuttedBlogs.length - 3" class="one-page">...</div>
        <div
          v-if="currentPage < cuttedBlogs.length - 3"
          class="one-page"
          @click="changePage(cuttedBlogs.length - 1)"
        >
          {{ cuttedBlogs.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.all-blogs-block {
  .center {
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    .blogs {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
    .page-count {
      align-self: center;
      display: flex;

      .one-page {
        cursor: pointer;
        width: 24px;
        height: 24px;
        color: #999999;
        font-size: 16px;
        margin: 0;
        margin-left: 8px;
        margin-right: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .current-page {
        cursor: default;
        background-color: #4766af;
        color: #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>
