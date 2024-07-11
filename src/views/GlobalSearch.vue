<script setup lang="ts">
import LeftMain from '@/components/home/LeftMain.vue'
import router from '@/router'
import { type Ref, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { RoutesDictionary, RoutesPages } from '@/types/Routes'

const route = useRoute()

const routeDictionary: RoutesDictionary = {
  cabinet: ['user', 'cabinet', 'кабинет', 'личный кабинет', 'профиль', 'заявка', 'заявки'],
  settings: ['settings', 'редактировать профиль', 'профиль'],
  vacancies: ['vacancies', 'вакансии'],
  about: ['about', 'о компании', 'компания', 'компании'],
  privilege: ['privilege', 'привилегии', 'привилегия'],
  newEmployee: ['new employee', 'employee', 'новому сотруднику', 'сотрудник'],
  allBlogs: ['all blogs', 'blogs', 'блог', 'блоги', 'статьи', 'статья'],
  meetingRoomInstructions: [
    'instructions',
    'инструкция по настройке бронирования переговорных',
    'бронирование переговорных',
    'бронирование'
  ],
  remoteAccessInstructions: [
    'instructions',
    'инструкция по удаленному доступу',
    'удаленный доступ'
  ],
  ahoRequest: ['request', 'заявка в ахо', 'ахо'],
  helpDeskRequest: ['request', 'заявка в helpdesk', 'helpdesk'],
  documents: ['documents', 'нормативные документы', 'документы'],
  newArticle: ['article', 'blog', 'создание статьи', 'создать статью', 'статья', 'блог']
}

const searchQuery: Ref<string> = ref(route.params.request as string)
console.log(searchQuery.value)

const result: Ref<Array<string>> = ref([])

const search = () => {
  for (const route in routeDictionary) {
    for (const query of routeDictionary[route]) {
      if (query.startsWith(searchQuery.value)) {
        if (!result.value.includes(route)) {
          result.value.push(route)
        }
      }
    }
  }
  console.log('Страница не найдена')
}

const routes: RoutesPages = {
  cabinet: 'Личный кабинет',
  settings: 'Редактировать профиль',
  vacancies: 'Вакансии',
  about: 'О компании',
  privilege: 'Привилегии для сотрудников',
  newEmployee: 'Новому сотруднику',
  allBlogs: 'Наш Блог',
  meetingRoomInstructions: 'Инструкция по настройке бронирования переговорных',
  remoteAccessInstructions: 'Инструкция по удаленному доступу',
  ahoRequest: 'Заявка в АХО',
  helpDeskRequest: 'Заявка в HelpDesk',
  documents: 'Нормативные документы',
  newArticle: 'Создать статью'
}

onMounted(() => {
  search()
})

watch(
  () => route.params.request,
  (newPath) => {
    searchQuery.value = route.params.request as string
    result.value = []
    search()
  }
)

function onPageClick(camel: string) {
  const kebab = camel.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
  router.push({ name: kebab })
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>
    <div class="global-search">
      <div class="found" v-if="result.length > 0">
        <h2>По вашему запросу найдено:</h2>
        <div class="result">
          <div class="one-result" v-for="res in result" @click="onPageClick(res)">
            {{ routes[res] ?? 'Страница не найдена' }}
          </div>
        </div>
      </div>
      <div class="found" v-else>
        <h2>По вашему запросу ничего не найдено!</h2>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  .global-search {
    margin-left: 64px;
    margin-top: 19px;

    .found {
      h2 {
        font-size: 20px;
        color: #474747;
        font-weight: 400;
      }
      .result {
        margin-top: 16px;

        display: flex;
        flex-direction: column;
        gap: 8px;
        .one-result {
          color: #474747;
          cursor: pointer;
          font-size: 20px;
          font-weight: 500;
          transition: 0.2s ease-in-out;
        }
        .one-result:hover {
          color: #4766af;
        }
      }
    }
  }
}
</style>
