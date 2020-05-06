//配置路由相关信息
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Usage from '../views/realTime/Usage.vue'
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
    component: () => import('../views/realTime/Usage.vue'),
    children:[
      {  path: '/',
        redirect: '/bigShow'},
      {
        path: '/bigShow',
        name: 'BigShow',
        component: () => import('../views/realTime/BigShow')
      },
      {
        path: '/smallShow',
        name: 'SmallShow',
        component: () => import('../views/realTime/SmallShow')
      },
    ]
  },
  {
    path: '/faceReco',
    name: 'FaceReco',
    component: () => import('../views/faceReco/FaceReco'),
    children:[
      {  path: '/',
        redirect: '/faceBigShow'},
      {
        path: '/faceBigShow',
        name: 'FaceBigShow',
        component: () => import('../views/faceReco/FaceBigShow')
      },
      {
        path: '/faceSmallShow',
        name: 'FaceSmallShow',
        component: () => import('../views/faceReco/FaceSmallShow')
      },
    ]
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
