<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import BaseEchart from '@/base-ui/echart'
import { IDataType } from '../types'

export default defineComponent({
  components: {
    BaseEchart
  },
  props: {
    pieData: {
      type: Object as PropType<IDataType>,
      default: () => ({})
    }
  },
  setup(props) {
    const options = {
      title: {
        // text: 'Referer of a Website',
        // subtext: 'Fake Data',
        // left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'right'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    return { options }
  }
})
</script>

<style scoped></style>
