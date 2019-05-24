import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/quiz/:qID',
      name: 'quiz',
      props: true,
      component: () => import(/* webpackChunkName: "about" */ './views/Quiz.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "about" */ './views/Editor.vue')
    }
  ]
})
