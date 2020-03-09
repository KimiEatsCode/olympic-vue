import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import navLogo from '@/components/navLogo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (home, navLogo)
    },
    {
      path: '/home',
      name: 'home2',
      component: (home, navLogo)
    }
  ]
})
