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
    :otherInfo="otherInfo"
    pageName="role"
  >
    <div class="menu-tree">
      <el-tree
        ref="elTreeRef"
        :data="menus"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'name' }"
        @check="handleCheckChange"
      />
    </div>
  </page-modal>
</template>

<script lang="ts">
import { computed, defineComponent, nextTick, ref } from 'vue'
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
import { ElTree } from 'element-plus'
import { menuMapLeafKeys } from '@/utils/map-menus'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    // 写个点击编辑按钮之后,菜单数据绑定的callback
    // 找到scope.row中的item.menuList找出其中的叶子节点
    // 设置到elTree里面去
    const elTreeRef = ref<InstanceType<typeof ElTree>>()
    const editCallback = (item: any) => {
      // console.log(item.menuList)
      const leafKeys = menuMapLeafKeys(item.menuList)
      // console.log(leafKeys)

      nextTick(() => {
        // console.log(elTreeRef.value)
        elTreeRef.value?.setCheckedKeys(leafKeys, false)
        // console.log(elTreeRef.value)
      })
    }

    //
    const [pageModalRef, defaultInfo, handleNewData, handleEditData] =
      usePageModal(undefined, editCallback)

    // 1.现获取所有的菜单
    const store = useStore()
    const menus = computed(() => store.state.entireMenu)

    // 2.在菜单tree中选择了菜单
    const otherInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      // console.log('role.vue的page-modal选择菜单', checkedKeys)
      // console.log('role.vue的page-modal选择菜单', halfCheckedKeys)
      // console.log('role.vue的page-modal选择菜单', menuList)
      otherInfo.value = { menuList }
    }

    return {
      searchFormConfig,
      contentTableConfig,
      modalConfig,
      pageModalRef,
      defaultInfo,
      otherInfo,
      handleNewData,
      handleEditData,
      elTreeRef,
      menus,
      handleCheckChange
    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 25px;
}
</style>
