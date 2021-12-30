<template>
  <div class="page-modal">
    <el-dialog v-model="dialogVisible"> 看看这个弹框行不行 </el-dialog>
    <!-- <hy-form v-bind="modalConfig" v-model="formData"></hy-form> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import HyForm from '@/base-ui/form'

export default defineComponent({
  components: {
    // HyForm
  },
  props: {
    modalConfig: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    return {
      dialogVisible
    }
  }
})
</script>

<style scoped></style>
