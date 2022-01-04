<template>
  <div class="dashboard">
    <el-row :gutter="10">
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
import { defineComponent, onMounted, ref } from 'vue'

import HyCard from '@/base-ui/card'

import * as echarts from 'echarts'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard
  },

  setup() {
    return {}
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 20px;
}
</style>
