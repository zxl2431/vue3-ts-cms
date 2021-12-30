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
        @newBtnClick="handleNewData"
      >
      </page-content>
      <page-modal ref="pageModalRef" :modalConfig="modalConfig"> </page-modal>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// search-form组件
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
// content-table组件
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
// 实现功能的hook函数
import { usePageSearch } from '@/hooks/use-page-search'
// dialog弹框组件
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleResetClick, handleQueryClick] = usePageSearch()

    // 新建、编辑、删除的逻辑
    const pageModalRef = ref<InstanceType<typeof PageModal>>()

    const handleNewData = () => {
      console.log('user组件点击新建用户')
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      handleNewData
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
