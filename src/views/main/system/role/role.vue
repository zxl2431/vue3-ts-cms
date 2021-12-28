<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"> </page-search>
  </div>

  <div class="content">
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="role"
    >
    </page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// search-form组件
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
// content-table组件
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      searchFormConfig,
      contentTableConfig
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
