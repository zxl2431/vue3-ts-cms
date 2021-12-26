<template>
  <div class="hy-table">
    <!-- 搞一个头 header -->
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
      </slot>
    </div>
    <!-- 这里是表格 -->
    <el-table :data="listData" border style="width: 100%">
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
            <!-- <slot :row="scope.row">
              <el-button>{{ scope.row[propItem.prop] }}</el-button>
            </slot> -->
          </template>
        </el-table-column>
      </template>
    </el-table>

    <!-- 搞一个脚 footer -->
    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
  }
}
</style>
