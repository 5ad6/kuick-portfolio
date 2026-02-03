import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Design from './views/Design.vue'
import Music from './views/Music.vue'
import RakutenLinkAi from './views/works/RakutenLinkAi.vue'
import Toi from './views/works/Toi.vue'
import SymworldResearch from './views/works/SymworldResearch.vue'
import Liveticks from './views/works/Liveticks.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 }
  },
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
      path: '/design/toi-lp-design',
      name: 'toi-lp-design',
      component: Toi,
    },
    {
      path: '/design/symworld-research',
      name: 'symworld-research',
      component: SymworldResearch,
    },
    {
      path: '/design/liveticks',
      name: 'liveticks',
      component: Liveticks,
    },
    // 旧ルートのリダイレクト（後方互換性のため）
    {
      path: '/design/design-system',
      redirect: '/design/toi-lp-design',
    },
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
