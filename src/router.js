import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
    },
    {
      path: '/work/:slug',
      name: 'work-detail',
      component: App,
      props: true,
    },
  ],
})

export default router
