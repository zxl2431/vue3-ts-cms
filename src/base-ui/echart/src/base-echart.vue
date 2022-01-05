<template>
  <div class="base-echart">
    <div ref="echarDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, ref, watchEffect } from 'vue'

// 引入echart相关
import * as echarts from 'echarts'
import { EChartsOption } from 'echarts'

export default defineComponent({
  props: {
    options: {
      type: Object as PropType<EChartsOption>,
      default: () => ({})
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '360px'
    }
  },
  setup(props) {
    const echarDivRef = ref<HTMLElement>()

    onMounted(() => {
      const echartInstance = echarts.init(echarDivRef.value!)
      const setOptions = (options: echarts.EChartsOption) => {
        echartInstance.setOption(options)
      }

      watchEffect(() => {
        setOptions(props.options)
      })
    })
    return {
      echarDivRef
    }
  }
})
</script>

<style scoped></style>
