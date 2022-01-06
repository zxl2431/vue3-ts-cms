<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量"> </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)"> </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="分类商品数量(饼图)"> </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)"> </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import HyCard from '@/base-ui/card'
import { PieEchart, RoseEchart } from '@/components/page-echarts'
import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    PieEchart,
    RoseEchart
  },

  setup() {
    const store = useStore()
    // 请求数据
    store.dispatch('dashboard/getDashboardDataAction')

    // 获取数据
    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    return {
      categoryGoodsCount
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
