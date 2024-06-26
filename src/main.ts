import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify'
import CKEditor from '@mayasabha/ckeditor4-vue3'

const app = createApp(App)

app.use(Vue3Toastify, {
  autoClose: 2000,
  style: {
    opacity: '1',
    userSelect: 'initial'
  }
} as ToastContainerOptions)
app.use(CKEditor)
app.use(router)
app.mount('#app')
