<template>
  <div class="nav-header">
    <component
      class="fold-meun"
      :is="iconName"
      @click="handleFoldClick"
    ></component>
    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserInfo from './user-info.vue'

export default defineComponent({
  components: {
    UserInfo
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

    return {
      iconName,
      handleFoldClick
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
