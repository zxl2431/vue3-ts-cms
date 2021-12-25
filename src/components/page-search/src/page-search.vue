<template>
  <div class="page-search">
    <hy-form v-bind="searchFormConfig"></hy-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyForm from '@/base-ui/form'

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    HyForm
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
