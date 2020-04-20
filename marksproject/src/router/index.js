//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Usage from '../views/Usage.vue'
import MarksTest from '../views/MarksTest.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/usage',
    name: 'Usage',
    component: () => import('../views/Usage.vue')
  },
  {
    path: '/marksTest',
    name: 'MarksTest',
    component: () => import('../views/MarksTest.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
