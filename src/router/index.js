import { createRouter, createWebHistory } from 'vue-router'
import Auth from '../page/auth/index.vue'
import OtpIndex from '../page/otp/index.vue'
import Code from '../page/otp/code.vue'
import SetPassword from '../page/otp/set-password.vue'

const routes = [
  { path: '/', name: 'Auth', component: Auth },
  { path: '/otp', name: 'otp', component:OtpIndex},
  { path: '/otp/code', name: 'otp-code', component:Code},
  { path: '/otp/set-password', name: 'otp-set-password', component:SetPassword},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
