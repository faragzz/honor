import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../page/auth/index.vue'
import Test from '../page/test.vue'
const routes = [
  { path: '/', name: 'Auth', component: Auth },
  // { path: '/otp', name: 'x', component:  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
