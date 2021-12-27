<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @resetBtnClick="handleResetClick"
      @queryBtnClick="handleQueryClick"
    />

    <div class="content">
      <page-content
        ref="pageContentRef"
        :contentTableConfig="contentTableConfig"
        pageName="users"
      >
      </page-content>
    </div>
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
// 实现功能的hook函数
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
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
