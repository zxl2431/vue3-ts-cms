import { createStore } from 'vuex'

import login from './login/login'

import { IRootState } from './types'

const store = createStore<IRootState>({
  state() {
    return {
      name: 'Mr.zhang',
      age: 16
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})

export default store
