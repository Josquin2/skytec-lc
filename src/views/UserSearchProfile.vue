<script setup lang="ts">
import LeftMain from '@/components/home/LeftMain.vue'
import { type Ref, ref, onMounted } from 'vue'
import { onOneBlogClick } from '@/components/routing-functions'
import { useRoute } from 'vue-router'
import { Api } from '@/api/api'
import type { User } from '@/types/User'
import type { Blog } from '@/types/Blog'

const route = useRoute()
let ApiClass = new Api()

const user: Ref<User | null> = ref(null)
const blogs: Ref<Blog[]> = ref([])

onMounted(async () => {
  const response = await ApiClass.getObjects(`user/${route.params.user}`)
  user.value = response.data
  // console.log(user.value)

  getArticles()
})

async function getArticles() {
  const response = await ApiClass.getObjects(`articles?user_id=${route.params.user}`)
  blogs.value = response
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>

    <div class="user-search-profile-block">
      <div class="about-user-profile-main-block">
        <div class="photo">
          <span class="bg-circle"></span>
          <img :src="user?.avatar" alt="" class="user-image rounded-circle" />
        </div>

        <div class="about-user">
          <div class="name">
            <h1>{{ user?.name }}</h1>
          </div>
          <div class="job-info">
            <h2>{{ user?.department.title }}</h2>
            <hr />
            <h2>
              {{ user?.position }}
            </h2>
          </div>
          <div class="boss">
            <h3 v-if="user?.manager">Непосредственный руководитель:</h3>
            <h4 v-if="user?.manager">
              {{ user?.manager.surname + ' ' + user?.manager.firstname }}
            </h4>
          </div>
          <div class="contact">
            <div class="phone-number">
              <img src="/icons/phone-blue.svg" alt="" />
              <p v-if="user?.hide_phone == false">{{ user?.phone }}</p>
              <p v-else>Номер скрыт</p>
            </div>
            <div class="email">
              <img src="/icons/email-blue.svg" alt="" />
              <p>{{ user?.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="user-search-articles" v-if="blogs.length > 0">
      <div class="my-articles">
        <div class="my-articles-header">Статьи</div>
        <div class="common-articles">
          <div
            class="one-article"
            v-for="(blog, index) in blogs.slice(0, 2)"
            :key="index"
            @click="onOneBlogClick(blog.id)"
          >
            <img :src="blog.user.avatar" alt="" class="article-author-image" />
            <div class="article-info">
              <h2 class="article-name">
                {{ blog.title.length > 37 ? blog.title.slice(0, 37) + '...' : blog.title }}
              </h2>
              <p class="article-author">{{ blog.user.surname + ' ' + blog.user.firstname }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-search-profile-block {
  margin-left: 64px;
}

.user-search-articles {
  margin-left: 24px;

  padding: 24px 20px;
  border: 1px solid #cccccc;
  border-radius: 20px;
  height: max-content;

  .my-articles {
    margin-top: 0;

    .my-articles-header {
      cursor: pointer;
    }
    .common-articles {
      .one-article {
        .article-info {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
