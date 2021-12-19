import { Module } from 'vuex'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'

import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: {}
    }
  },

  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload) {
      // 1.实现登录逻辑 拿到token
      console.log('store-login.ts发送登录请求', payload)
      const loginResult = await accountLoginRequest(payload)
      console.log('store-login.ts接受登录请求的结果', loginResult)
      const { id, token } = loginResult.data
      localCache.setCache('token', token)
      commit('changeToken', token)

      // 2.请求用户数据
      const userInfoResult = await requestUserInfoById(id)
      console.log('store-login.ts接受用户信息', userInfoResult)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      console.log('store-login.ts接受用户的权限菜单列表', userMenusResult)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首页
      router.push('/main')
    },

    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
