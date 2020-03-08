import Vue from 'vue'

// import Artist from './components/Artist'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)

Vue.use(VueResource)

const routes = [
  // {
  //   path: '/',
  //   component: Artist
  // }
]

const router = new VueRouter({routes, mode: 'history'})

new Vue({el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router}).$mount('#app')
