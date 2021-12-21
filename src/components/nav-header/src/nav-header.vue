<template>
  <div class="nav-header">
    <component
      class="fold-meun"
      :is="iconName"
      @click="handleFoldClick"
    ></component>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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
  .fold-meun {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}
</style>
