import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/api/user'

const UserClass = new User()

import MainPage from '@/views/MainPage.vue'
import CabinetSettings from '@/views/CabinetSettings.vue'
import Cabinet from '@/views/Cabinet.vue'
import Vacancies from '@/views/Vacancies.vue'
import AboutCompany from '@/views/AboutCompany.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user/cabinet',
      name: 'cabinet',
      component: Cabinet
    },
    {
      path: '/user/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/user/cabinet/settings',
      name: 'settings',
      component: CabinetSettings
    },
    {
      path: '/user/vacancies',
      name: 'vacancies',
      component: Vacancies
    },
    {
      path: '/user/about',
      name: 'about',
      component: AboutCompany
    },
    {
      path: '/user/privilege',
      name: 'privilege',
      component: () => import('@/views/PrivilegePage.vue')
    },
    {
      path: '/user/new-employee',
      name: 'new-employee',
      component: () => import('@/views/NewEmployee.vue')
    },
    {
      path: '/user/create-new-employee',
      name: 'create-new-employee',
      component: () => import('@/views/CreateNewEmployee.vue')
    },
    {
      path: '/user/news/:id',
      name: 'one-news',
      component: () => import('@/views/OneNews.vue')
    },
    {
      path: '/user/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogPage.vue'),
      children: [
        {
          path: '/user/blogs/all',
          name: 'all-blogs',
          component: () => import('@/views/AllBlogs.vue')
        },
        {
          path: '/user/blogs/:id',
          name: 'category-blogs',
          component: () => import('@/views/CategoryBlogs.vue')
        },
        {
          path: '/user/blogs/one-blog/:blog',
          name: 'one-blog',
          component: () => import('@/views/OneBlog.vue')
        }
      ]
    },
    {
      path: '/user/search/:search',
      name: 'search',
      component: () => import('@/views/UserSearch.vue')
    },
    {
      path: '/user/profile/:user',
      name: 'user-search-profile',
      component: () => import('@/views/UserSearchProfile.vue')
    },
    {
      path: '/user/new-article',
      name: 'new-article',
      component: () => import('@/views/NewArticle.vue')
    },
    {
      path: '/user/edit-article/:article',
      name: 'edit-article',
      component: () => import('@/views/EditArticle.vue')
    },
    {
      path: '/user/additional-page/:url',
      name: 'additional-page',
      component: () => import('@/views/AdditionalPage.vue')
    }
  ]
})

router.beforeEach(async (to) => {
  if (to.name !== 'home') {
    try {
      const auth = await UserClass.checkAuth()
      if (auth === false) {
        return '/'
      }
    } catch (error) {
      return '/'
    }
  }
})

export default router
