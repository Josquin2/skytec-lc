import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/api/user'

let UserClass = new User()

import MainPage from '@/views/MainPage.vue'
import CabinetSettings from '@/views/CabinetSettings.vue'
import Cabinet from '@/views/Cabinet.vue'
import Vacancies from '@/views/Vacancies.vue'
import AboutCompany from '@/views/AboutCompany.vue'
import path from 'path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user/:login/cabinet',
      name: 'cabinet',
      component: Cabinet
    },
    {
      path: '/user/:login/main',
      name: 'main',
      component: MainPage
    },
    {
      path: '/user/:login/cabinet/settings',
      name: 'settings',
      component: CabinetSettings
    },
    {
      path: '/user/:login/vacancies',
      name: 'vacancies',
      component: Vacancies
    },
    {
      path: '/user/:login/about',
      name: 'about',
      component: AboutCompany
    },
    {
      path: '/user/:login/privilege',
      name: 'privilege',
      component: () => import('@/views/PrivilegePage.vue')
    },
    {
      path: '/user/:login/new-employee',
      name: 'new-employee',
      component: () => import('@/views/NewEmployee.vue')
    },
    {
      path: '/user/:login/create-new-employee',
      name: 'create-new-employee',
      component: () => import('@/views/CreateNewEmployee.vue')
    },
    {
      path: '/user/:login/news/:title',
      name: 'one-news',
      component: () => import('@/views/OneNews.vue')
    },
    {
      path: '/user/:login/blogs',
      name: 'blogs',
      component: () => import('@/views/BlogPage.vue'),
      children: [
        {
          path: '/user/:login/blogs/all',
          name: 'all-blogs',
          component: () => import('@/views/AllBlogs.vue')
        },
        {
          path: '/user/:login/blogs/:blog',
          name: 'one-blog',
          component: () => import('@/views/OneBlog.vue')
        }
      ]
    },
    {
      path: '/user/:login/aho-request',
      name: 'aho-request',
      component: () => import('@/views/AhoRequest.vue')
    },
    {
      path: '/user/:login/help-desk-request',
      name: 'help-desk-request',
      component: () => import('@/views/HelpDeskRequest.vue')
    },
    {
      path: '/user/:login/remote-access-instructions',
      name: 'remote-access-instructions',
      component: () => import('@/views/RemoteAccess.vue')
    },
    {
      path: '/user/:login/meeting-room-instructions',
      name: 'meeting-room-instructions',
      component: () => import('@/views/MeetingRoom.vue')
    },
    {
      path: '/user/:login/documents',
      name: 'documents',
      component: () => import('@/views/DocumentsPage.vue')
    },
    {
      path: '/user/:login/user-search/:search',
      name: 'user-search',
      component: () => import('@/views/UserSearch.vue')
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
