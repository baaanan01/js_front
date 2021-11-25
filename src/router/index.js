import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) /*регистрируем библиотеку */



const routes = [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: 'home',
        layout: 'main-layout'
      },
      component: () => import('@/pages/Home.vue')
        },
    {
      path: '/info',
      name: 'InfoPage', 
      meta: {
        title: 'Info',
        layout: 'main-layout'
      },
      component: () => import('@/pages/InfoPage.vue')
    },
    {
      path:'/login',
      name: 'LoginPage',
      meta: {
        title: 'Login',
        layout: 'auth-layout'
      },
      component: () => import('@/pages/LoginPage.vue')
    },
    {
      path:'/registration',
      name: 'RegistrationPage',
      meta: {
        title: 'Registration',
        layout: 'auth-layout'
      },
      component: () => import('@/pages/RegistrationPage.vue')
    },
    {
      path: "*",
      name: 'Error', 
      meta: {
        title: 'error',
        layout: 'main-layout'
      },
      component: () => import('@/pages/404.vue')
    },
    
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router

