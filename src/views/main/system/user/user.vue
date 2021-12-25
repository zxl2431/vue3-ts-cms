<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
      pageUrl: '/users/list'
    })

    return { searchFormConfig }
  }
})
</script>

<style scoped></style>
