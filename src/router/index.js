import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicPlayer from '../views/MusicPlayer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:emotion',
    name: 'musicplayer',
    // component: () => import('../views/MusicPlayer.vue')
    component: MusicPlayer
  }
]

const router = new VueRouter({
  routes
})

export default router
