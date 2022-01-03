<template>
  <div class="role">
    <page-search :searchFormConfig="searchFormConfig"> </page-search>
  </div>

  <page-content
    ref="pageContentRef"
    :contentTableConfig="contentTableConfig"
    pageName="role"
    @newBtnClick="handleNewData"
    @editBtnClick="handleEditData"
  >
  </page-content>
  <page-modal
    ref="pageModalRef"
    :modalConfig="modalConfig"
    :defaultInfo="defaultInfo"
    pageName="role"
  ></page-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// search-form组件
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
// content-table组件
import PageContent from '@/components/page-content'
import { contentTableConfig } from './config/content.config'
// page-modal组件
import PageModal from '@/components/page-modal'
import { modalConfig } from './config/modal.config'

// page-modal的hook函数
import { usePageModal } from '@/hooks/use-page-modal'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal()

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData
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
