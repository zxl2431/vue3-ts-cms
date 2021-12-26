<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />

    <div class="content">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column prop="name" label="用户名" minWidth="100">
        </el-table-column>
        <el-table-column prop="realname" label="真实姓名" minWidth="100" />
        <el-table-column prop="cellphone" label="手机号码" minWidth="100" />
        <el-table-column prop="createAt" label="创建时间" minWidth="250" />
        <el-table-column prop="updateAt" label="更新时间" minWidth="250" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)

    return {
      searchFormConfig,
      userList
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
