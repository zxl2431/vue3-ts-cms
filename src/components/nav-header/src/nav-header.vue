<template>
  <div class="nav-header">
    <component
      class="fold-meun"
      :is="iconName"
      @click="handleFoldClick"
    ></component>
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserInfo from './user-info.vue'
import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },

  emits: ['foldChange'],

  setup(props, { emit }) {
    const iconName = ref('Fold')

    const isFold = ref(false)

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      iconName.value = isFold.value ? 'Expand' : 'Fold'
      emit('foldChange', isFold.value)
    }

    // 面包屑的数据 [{name: , path: }]
    const store = useStore()
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      iconName,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-meun {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
