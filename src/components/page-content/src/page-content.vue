<template>
  <div class="page-content">
    <hy-table :listData="listData" :propList="propList">
      <!-- 1.header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用户</el-button>
      </template>

      <!-- 2.列中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        <!-- <span>{{ $filters.formatTime(scope.row.createAt) }}</span> -->
        <span>{{ scope.row.createAt }}</span>
      </template>
      <template #updateAt="scope">
        <!-- <span>{{ $filters.formatTime(scope.row.updateAt) }}</span> -->
        <span>{{ scope.row.updateAt }}</span>
      </template>
      <template #handler>
        <div class="handle-btns">
          <el-button icon="el-icon-edit" size="mini" type="text"
            >编辑</el-button
          >
          <el-button icon="el-icon-delete" size="mini" type="text"
            >删除</el-button
          >
        </div>
      </template>
    </hy-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HyTable from '@/base-ui/table'

export default defineComponent({
  components: {
    HyTable
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    pageName: {
      type: String,
      require: true
    }
  },
  setup(props) {
    console.log('page-content组件:', props.pageName)

    return {}
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
