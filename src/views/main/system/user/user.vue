<template>
  <div class="user">
    <el-form label-width="120px">
      <el-row>
        <el-col span="8">
          <el-form-item label="id">
            <el-input placeholder="请输入id" />
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="用户名">
            <el-input placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="密码">
            <el-input placeholder="请输入密码" />
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="喜欢的运动">
            <el-select placeholder="请选择喜欢的运动">
              <el-option>篮球</el-option>
              <el-option>足球</el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col span="8">
          <el-form-item label="创建时间">
            <el-date-picker
              startPlaceholder="开始时间"
              endPlaceholder="结束时间"
              type="daterange"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
