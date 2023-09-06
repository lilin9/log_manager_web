// 全部日志页面
<template>
  <!-- 搜索框部分 -->
  <div class="search">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="请求路径">
        <el-input
          v-model="searchForm.url"
          placeholder="请输入接口请求路径"
          clearable
        />
      </el-form-item>
      <el-form-item label="服务器名称">
        <el-input
          v-model="searchForm.ip"
          placeholder="请输入服务器IP地址"
          clearable
        />
      </el-form-item>
      <el-form-item label="日志类型">
        <el-select
          v-model="searchForm.type"
          placeholder="请选择日志类型"
          clearable
        >
          <el-option
            v-for="item in type"
            :key="item.typeId"
            :label="item.type"
            :value="item.type"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="请求类型">
        <el-select
          v-model="searchForm.method"
          placeholder="请选择请求类型"
          clearable
        >
          <el-option
            v-for="item in method"
            :key="item.methodId"
            :label="item.method"
            :value="item.method"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="日期和时间">
        <el-date-picker
          v-model="searchForm.startTime"
          type="date"
          placeholder="输入日期和时间"
          clearable
          format="YYYY年MM月DD日"
          value-format="YYYY年MM月DD日"
        />
      </el-form-item>
      <el-form-item label="操作描述">
        <el-input v-model="searchForm.description" type="输入搜索内容" />
      </el-form-item>
      <el-form-item class="buttons" :inline="false">
        <el-button type="primary" @click="searchVerify">确认</el-button>
        <el-button @click="searchCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- 日志表格 -->
  <div class="logs">
    <el-table
      :data="logsTableData"
      style="width: 100%"
      show-overflow-tooltip
      stripe
    >
      <!-- 设置表格展开行内容 -->
      <el-table-column type="expand">
        <template #default="props">
          <div class="detail">
            <div class="detail-item">
              <strong>操作用户:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{
                props.row.username
              }}</el-text>
            </div>
            <div class="detail-item">
              <strong>操作时间:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{
                props.row.startTime
              }}</el-text>
            </div>
            <div class="detail-item">
              <strong>消耗时间:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{
                props.row.spendTime
              }}</el-text>
            </div>
            <div class="detail-item">
              <strong>请求地址:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.url }}</el-text>
            </div>
            <div class="detail-item">
              <strong>请求类型:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.method }}</el-text>
            </div>
            <div class="detail-item">
              <strong>日志类型:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.type }}</el-text>
            </div>
            <div class="detail-item error-msg">
              <strong>异常信息:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large"
                >{{ props.row.exceptionName }}<br />{{
                  props.row.exceptionMsg
                }}</el-text
              >
            </div>
            <div class="detail-item">
              <strong>主机IP:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.ip }}</el-text>
            </div>
            <div class="detail-item">
              <strong>请求参数:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{
                props.row.parameter
              }}</el-text>
            </div>
            <div class="detail-item">
              <strong>请求返回结果:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.result }}</el-text>
            </div>
            <div class="detail-item">
              <strong>请求设备信息:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{ props.row.device }}</el-text>
            </div>
            <div class="detail-item">
              <strong>操作描述:&nbsp;&nbsp;</strong>
              <el-text type="info" size="large">{{
                props.row.description
              }}</el-text>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        prop="username"
        label="操作用户"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="startTime"
        label="操作时间"
        width="230"
      ></el-table-column>
      <el-table-column
        prop="spendTime"
        label="消耗时间"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="url"
        label="请求地址"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="method"
        label="请求类型"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="type"
        label="日志类型"
        width="90"
      ></el-table-column>
      <el-table-column
        prop="exceptionName"
        label="异常名"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="exceptionMsg"
        label="异常信息"
        width="300"
      ></el-table-column>
      <el-table-column prop="ip" label="主机IP" width="120"></el-table-column>
      <el-table-column
        prop="parameter"
        label="请求参数"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="result"
        label="请求返回结果"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="device"
        label="请求设备信息"
        width="300"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="操作描述"
        width="230"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { onBeforeMount, reactive, ref } from "vue";
import allLogsData from "../hooks/allLogs";
defineOptions({
  name: "AllLogs",
});
const logsData = allLogsData();
//表单数据
let searchForm = ref(logsData.searchFormData);
//日志类型数据
let type = ref(logsData.type);
//请求类型数据
let method = ref(logsData.method);
//日志表格数据
let logsTableData = ref(logsData.logsTableData);

//搜索框确认按钮点击事件
const searchVerify = async () => {
  const searchLogs = await logsData.searchLogsData(searchForm.value);
  logsTableData.value = searchLogs;
};

//搜索框取消按钮点击事件
const searchCancel = () => {
  this.searchForm.value = this.logsData.searchForm;
};

//挂载之前
onBeforeMount(async () => {
  //预加载日志表格数据
  const initAllLogs = await logsData.initAllLogsData();
  logsTableData.value = initAllLogs;

  //预加载日志类型数据
  const initType = await logsData.initTypeData();
  type.value = initType;

  //预加载请求类型数据
  const initMethod = await logsData.initMethodData();
  method.value = initMethod;
});
</script>

<style scoped>
/* 搜索框表单 */
.el-form {
  display: flex;
  flex-wrap: wrap;
}
.el-form .el-form-item {
  flex-grow: 0;
}
.el-form .buttons {
  margin-right: auto;
}
/* 搜索框表单 */
/* 表格展开行 */
.detail {
  width: 100%;
  height: 100%;
  margin: 0 50px;
}
.detail .detail-item {
  margin: 10px 0;
}
/* 表格展开行 */
</style>