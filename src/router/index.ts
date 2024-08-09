import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/api/user'

const UserClass = new User()

import MainPage from '@/views/MainPage.vue'
import CabinetSettings from '@/views/CabinetSettings.vue'
import Cabinet from '@/views/Cabinet.vue'
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
      path: '/cabinet',
      name: 'cabinet',
      component: Cabinet
    },
    {
      path: '/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/cabinet/settings',
      name: 'settings',
      component: CabinetSettings
    },
    {
      path: '/vacancies',
      name: 'vacancies',
      component: () => import('@/views/VacanciesPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: AboutCompany
    },
    {
      path: '/privilege',
      name: 'privilege',
      component: () => import('@/views/PrivilegePage.vue')
    },
    {
      path: '/new-employee',
      name: 'new-employee',
      component: () => import('@/views/NewEmployee.vue')
    },
    {
      path: '/create-new-employee',
      name: 'create-new-employee',
      component: () => import('@/views/CreateNewEmployee.vue')
    },
    {
      path: '/news/:id',
      name: 'one-news',
      component: () => import('@/views/OneNews.vue')
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogPage.vue'),
      children: [
        {
          path: '/blogs/all',
          name: 'all-blogs',
          component: () => import('@/views/AllBlogs.vue')
        },
        {
          path: '/blogs/:id',
          name: 'category-blogs',
          component: () => import('@/views/CategoryBlogs.vue')
        },
        {
          path: '/blogs/one-blog/:blog',
          name: 'one-blog',
          component: () => import('@/views/OneBlog.vue')
        }
      ]
    },
    {
      path: '/search/:search',
      name: 'search',
      component: () => import('@/views/UserSearch.vue')
    },
    {
      path: '/profile/:user',
      name: 'user-search-profile',
      component: () => import('@/views/UserSearchProfile.vue')
    },
    {
      path: '/new-article',
      name: 'new-article',
      component: () => import('@/views/NewArticle.vue')
    },
    {
      path: '/edit-article/:article',
      name: 'edit-article',
      component: () => import('@/views/EditArticle.vue')
    },
    {
      path: '/page/:url',
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
