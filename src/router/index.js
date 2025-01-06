import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../page/auth/index.vue'

const routes = [
  { path: '/', name: 'Auth', component: Auth },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
