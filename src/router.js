import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Works from './views/Works.vue'
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
      path: '/works',
      name: 'works',
      component: Works,
    },
    {
      path: '/works/rakuten-link-ai',
      name: 'rakuten-link-ai',
      component: RakutenLinkAi,
    },
    {
      path: '/works/design-system',
      name: 'design-system',
      component: DesignSystem,
    },
    {
      path: '/works/symworld-research',
      name: 'symworld-research',
      component: SymworldResearch,
    },
  ],
})

export default router
