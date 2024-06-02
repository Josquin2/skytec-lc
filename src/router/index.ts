import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/api/user'

let UserClass = new User()

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
      path: '/user/news/:slug',
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
          path: '/user/blogs/:blog',
          name: 'one-blog',
          component: () => import('@/views/OneBlog.vue')
        }
      ]
    },
    {
      path: '/user/aho-request',
      name: 'aho-request',
      component: () => import('@/views/AhoRequest.vue')
    },
    {
      path: '/user/help-desk-request',
      name: 'help-desk-request',
      component: () => import('@/views/HelpDeskRequest.vue')
    },
    {
      path: '/user/remote-access-instructions',
      name: 'remote-access-instructions',
      component: () => import('@/views/RemoteAccess.vue')
    },
    {
      path: '/user/meeting-room-instructions',
      name: 'meeting-room-instructions',
      component: () => import('@/views/MeetingRoom.vue')
    },
    {
      path: '/user/documents',
      name: 'documents',
      component: () => import('@/views/DocumentsPage.vue')
    },
    {
      path: '/user/user-search/:search',
      name: 'user-search',
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
