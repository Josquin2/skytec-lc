import { createRouter, createWebHistory } from 'vue-router'
import { User } from '@/api/user'

let UserClass = new User();

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
      component: () => import('@/views/HomeView.vue'),
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
    } catch (error)   {
      return '/'
    }
  }
})

export default router
