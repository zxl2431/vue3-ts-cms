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
  >
    <div class="menu-tree">
      <el-tree
        :data="menus"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="{ children: 'children', label: 'name' }"
      />
    </div>
  </page-modal>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'

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

    // 1.现获取所有的菜单
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleNewData,
      handleEditData,
      menus
    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
