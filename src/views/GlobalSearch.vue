<script setup lang="ts">
import LeftMain from '@/components/home/LeftMain.vue'
import router from '@/router'
import { Api } from '@/api/api'
import { type Ref, ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { User } from '@/types/User'
import type { RoutesDictionary, RoutesPages } from '@/types/Routes'

const ApiClass = new Api()
const route = useRoute()

const users: Ref<User[]> = ref([])

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

const searchQuery: Ref<string> = ref(route?.params?.request as string)
console.log(searchQuery.value)

const result: Ref<Array<string>> = ref([])

const GlobalSearch = () => {
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
  GlobalSearch()
  UserSearch()
})

async function UserSearch() {
  const response = await ApiClass.getObjects(`user/search?fullname=${route?.params?.request}`)
  console.log(response)
  users.value = response
}

watch(
  () => route?.params?.request,
  () => {
    searchQuery.value = route?.params?.request as string
    result.value = []
    GlobalSearch()
    UserSearch()
  }
)

function onPageClick(camel: string) {
  const kebab = camel.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
  router.push({ name: kebab })
}

function onUserClick(id: number) {
  const login = route?.params?.login
  router.push({
    name: 'user-search-profile',
    params: { login: login, user: id }
  })
}
</script>

<template>
  <div class="main-page-block">
    <div class="left-block">
      <LeftMain />
    </div>
    <div class="search">
      <h2>По вашему запросу найдено:</h2>

      <div class="found" v-if="result?.length > 0">
        <h3>Страницы:</h3>
        <div
          class="one-result"
          v-for="(res, index) in result"
          :key="index"
          @click="onPageClick(res)"
        >
          {{ routes[res] ?? 'Страница не найдена' }}
        </div>
      </div>

      <div class="found" v-if="users?.length > 0">
        <h3>Пользователи:</h3>
        <div
          class="one-response"
          @click="onUserClick(user.id)"
          v-for="(user, index) in users"
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
    </div>
  </div>
</template>

<style lang="scss">
.main-page-block {
  .search {
    margin-left: 64px;
    margin-top: 19px;
    h2 {
      font-size: 20px;
      color: #474747;
      font-weight: 400;
    }

    .found {
      h3 {
        font-size: 20px;
        color: #474747;
      }

      margin-top: 16px;
      display: flex;
      flex-direction: column;
      gap: 8px;
      .one-result {
        color: #474747;
        cursor: pointer;
        font-size: 20px;
        font-weight: 400;
        transition: 0.2s ease-in-out;
      }
      .one-result:hover {
        color: #4766af;
      }
    }

    .one-response {
      cursor: pointer;
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
  }
}
</style>
