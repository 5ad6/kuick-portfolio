import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Design from './views/Design.vue'
import Music from './views/Music.vue'
import RakutenLinkAi from './views/works/RakutenLinkAi.vue'
import DesignSystem from './views/works/DesignSystem.vue'
import SymworldResearch from './views/works/SymworldResearch.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/design',
      name: 'design',
      component: Design,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/design/rakuten-link-ai',
      name: 'rakuten-link-ai',
      component: RakutenLinkAi,
    },
    {
      path: '/design/design-system',
      name: 'design-system',
      component: DesignSystem,
    },
    {
      path: '/design/symworld-research',
      name: 'symworld-research',
      component: SymworldResearch,
    },
    // 旧ルートのリダイレクト（後方互換性のため）
    {
      path: '/works',
      redirect: '/design',
    },
    {
      path: '/works/:slug',
      redirect: to => `/design/${to.params.slug}`,
    },
  ],
})

export default router
