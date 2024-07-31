<script setup lang="ts">
import { type Ref, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import router from '@/router'
import LeftMain from '@/components/home/LeftMain.vue'
import { Api } from '@/api/api'
import type { RoutesDictionary, RoutesPages } from '@/types/Routes'
import type { Search } from '@/types/Search'
import type { Page } from '@/types/AdditionalPage'
import type { News } from '@/types/news/News'
import type { Blog } from '@/types/Blog'

const ApiClass = new Api()
const route = useRoute()

// API

const data: Ref<Search | null> = ref(null)

onMounted(async () => {
  const response = await ApiClass.getObjects(`search?search=${route?.params?.search}`)
  data.value = response?.data
  GlobalPagesSearch()
})

watch(
  () => route?.params?.search,
  async (newSearchQuery) => {
    const response = await ApiClass.getObjects(`search?search=${newSearchQuery}`)
    data.value = response?.data
    GlobalPagesSearch()
  }
)

// pages

const searchQuery: Ref<string> = ref(route?.params?.search as string)

const result: Ref<Array<string>> = ref([])

const routeDictionary: RoutesDictionary = {
  cabinet: ['user', 'cabinet', 'кабинет', 'личный кабинет', 'профиль', 'заявка', 'заявки'],
  settings: ['settings', 'редактировать профиль', 'профиль'],
  vacancies: ['vacancies', 'вакансии'],
  about: ['about', 'о компании', 'компания', 'компании'],
  privilege: ['privilege', 'привилегии', 'привилегия'],
  newEmployee: ['new employee', 'employee', 'новому сотруднику', 'сотрудник'],
  allBlogs: ['all blogs', 'blogs', 'блог', 'блоги', 'статьи', 'статья'],
  newArticle: ['article', 'blog', 'создание статьи', 'создать статью', 'статья', 'блог']
}

const routes: RoutesPages = {
  cabinet: 'Личный кабинет',
  settings: 'Редактировать профиль',
  vacancies: 'Вакансии',
  about: 'О компании',
  privilege: 'Привилегии для сотрудников',
  newEmployee: 'Новому сотруднику',
  allBlogs: 'Наш Блог',
  newArticle: 'Создать статью'
}

const GlobalPagesSearch = () => {
  for (const route in routeDictionary) {
    for (const query of routeDictionary[route]) {
      if (query.startsWith(searchQuery.value) && !result.value.includes(route)) {
        result.value.push(route)
      }
    }
  }
  console.log('Страница не найдена')
}

function onUserClick(id: number) {
  router.push({
    name: 'user-search-profile',
    params: { user: id }
  })
}

function onAdditionalPageClick(page: Page) {
  router.push({ name: 'additional-page', params: { url: page?.url } })
}

function onPageClick(camel: string) {
  const kebab = camel.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
  router.push({ name: kebab })
}

function onNewsClick(news: News) {
  router.push({ name: 'one-news', params: { id: news.id } })
}

function onArticleClick(article: Blog) {
  router.push({ name: 'one-blog', params: { blog: article.id } })
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>

    <div class="user-search-center">
      <h2
        class="search-header-text"
        v-if="
          data &&
          (data?.articles?.length > 0 ||
            data?.users?.length > 0 ||
            data?.news?.length > 0 ||
            data?.pages?.length > 0 ||
            result.length > 0)
        "
      >
        По вашему запросу найдено:
      </h2>
      <div class="search-header-text" v-else>По вашему запросу ничего не найдено!</div>
      <div class="found-page" v-if="data && data?.users?.length > 0">
        <h3>Пользователи:</h3>
        <div
          class="one-response"
          @click="onUserClick(user.id)"
          v-for="(user, index) in data?.users"
          :key="index"
        >
          <img :src="user?.avatar" alt="" />
          <div class="user-info">
            <h2>{{ user?.firstname + ' ' + user?.surname }}</h2>
            <div class="job-info">
              <p>{{ user?.department?.title || 'Н/Д' }}</p>
              <hr class="job-divider" />
              <p>{{ user?.position }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="found-page" v-if="(data && data?.pages?.length > 0) || result.length > 0">
        <h3>Страницы:</h3>
        <div
          class="one-result"
          v-for="(res, index) in data?.pages"
          :key="index"
          @click="onAdditionalPageClick(res)"
        >
          {{ res.menu_title }}
        </div>
        <div
          class="one-result"
          v-for="(res, index) in result"
          :key="index"
          @click="onPageClick(res)"
        >
          {{ routes[res] }}
        </div>
      </div>
      <div class="found-page" v-if="data && data?.news.length > 0">
        <h3>Новости:</h3>
        <div
          class="one-news"
          @click="onNewsClick(res)"
          v-for="(res, index) in data?.news"
          :key="index"
        >
          {{ res.title }}
        </div>
      </div>

      <div class="found-page" v-if="data && data?.articles.length > 0">
        <h3>Статьи:</h3>
        <div
          class="one-blog"
          @click="onArticleClick(res)"
          v-for="(res, index) in data?.articles"
          :key="index"
        >
          {{ res.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.user-search-center {
  margin-left: 64px;

  .found-page {
    margin-top: 16px;
    h3 {
      color: #474747;
      font-size: 20px;
    }

    div {
      margin-top: 4px;
      color: #474747;
      transition: 0.2s ease-in-out;
      cursor: pointer;
    }
    div:hover {
      color: #4766af;
    }
  }

  .one-response {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    padding: 8px 0;
    img {
      width: 56px;
      height: 56px;
      border: 1px solid #cccccc;
      border-radius: 50%;
    }

    .user-info {
      cursor: pointer;
      margin-left: 8px;

      h2 {
        font-size: 16px;
        font-weight: 400;
        color: #474747;
        margin: 0;
        transition: 0.2s;
      }
      p {
        margin: 0;
        margin-top: 4px;
        font-size: 16px;
        color: #9a9a9a;
      }
      .job-info {
        display: flex;
        align-items: center;

        .job-divider {
          height: 16px;
          width: 1px;
          background-color: #474747;
          margin: 0;
          margin-left: 6px;
          margin-right: 6px;
          margin-top: 2px;
        }
      }
    }
    .user-info:hover {
      h2 {
        color: #4766af;
      }
    }
  }
  .search-header-text {
    font-weight: 400;
    margin-top: 16px;
    font-size: 20px;
    color: #474747;
  }
}
</style>
