import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MusicPlayer from '../views/MusicPlayer.vue'
import UnAuthenticated from '../views/UnAuthenticated.vue'
import AuthView from '@/views/AuthView.vue'
import ProfileView from '@/views/ProfileView.vue'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: UnAuthenticated,
    meta: { allowAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView,
    meta: { allowAuth: false }
  },
  {
    path: '/signup',
    name: 'signup',
    component: AuthView,
    meta: { allowAuth: false }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: { allowAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { allowAuth: true }
  },
  {
    path: '/:emotion',
    name: 'musicplayer',
    // component: () => import('../views/MusicPlayer.vue')
    component: MusicPlayer,
    meta: { allowAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (to.meta?.allowAuth) {
    if (!isAuthenticated) {
      next('/');
      return
    }
  } else if (to.meta?.allowAuth == false) {
    if (isAuthenticated) {
      next('/home');
      return
    }
  }
  next();
})

export default router
