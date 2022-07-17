import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'

Vue.use(Vuex)

const BASE_URL = 'https://whatsapp-assistant-aef12-default-rtdb.firebaseio.com/music-player';
const DATABASE_SECRET = 'iq7HGRzb0aBmV0HSFK5ur4Om2k84LVoM2nsQMRJg';

export default new Vuex.Store({
  state: {
    currentUser: null,
    users: []
  },
  getters: {
    isAuthenticated({ currentUser }) {
      return currentUser != null;
    },
    currentUser({ currentUser }) {
      return currentUser;
    }
  },
  mutations: {
  },
  actions: {
    async getUsers(context) {
      const response = await fetch(BASE_URL + `/users.json?auth=${DATABASE_SECRET}`, {
        method: 'GET',
      });
      const users = (await response.json()) || [];
      context.state.users = users;
      return users;
    },
    async addUser(context, newUser) {
      const users = await context.dispatch('getUsers');
      const emails = users.map(u => u.email);
      if (emails.includes(newUser.email)) {
        return { 'success': false, 'message': 'An account associated with this email already exists.', }
      }
      users.push(newUser);
      const response = await fetch(BASE_URL + `/users.json?auth=${DATABASE_SECRET}`, {
        method: 'PUT',
        body: JSON.stringify(users),
        headers: { 'Content-Type': 'application/json' }
      });
      const json = await response.json();
      return { 'success': true, 'data': json }
    },
    continueSession(context) {
      const data = localStorage.getItem('user')
      if (data == null) return
      context.state.currentUser = JSON.parse(atob(data));
      router.replace('/home')
    },
    login(context, user) {
      context.state.currentUser = user;
      localStorage.setItem('user', btoa(JSON.stringify(user)));
    },
    logout(context) {
      context.state.currentUser = null;
      localStorage.removeItem('user');
      router.push('/')
    }
  },
  modules: {
  }
})
