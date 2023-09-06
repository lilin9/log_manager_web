// 首页
<template>
  <!-- 记录请求类别和日志类别的数量 -->
  <div class="types-records">
    <div class="log-type"></div>
    <div class="method-type"></div>
  </div>
  <!-- 记录所有日志在不同时间段的数量 -->
  <div class="logs-records"></div>
</template>

<script setup>
import {
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeMount,
  onMounted,
  ref,
  watch,
} from "vue";
import homeData from "../hooks/home";
import { initLogType, initMethodType, initLogsRecords } from "../echarts/initEcharts";
defineOptions({
  name: "Home",
});

//homeData.js 实例
const useHomeData = homeData();

//定义三个表格数据
const logTypeData = ref();
const methodTypeData = ref();
const initLogsRecordsData = ref();


//获取全局 echarts 实例
let echarts = inject("$echarts");

//异步初始化函数
async function init() {
  //获取三个表格数据，为其赋值
  logTypeData.value = await useHomeData.initLogTypeData();
  methodTypeData.value = await useHomeData.initMethodTypeData();
  initLogsRecordsData.value = useHomeData.initLogsRecordsData();

  //调用表格渲染函数
  initLogType(echarts, document.querySelector(".log-type"), logTypeData.value);
  initMethodType(echarts, document.querySelector(".method-type"), methodTypeData.value);
  initLogsRecords(echarts, document.querySelector(".logs-records"), initLogsRecordsData.value);
}
onMounted(init);
</script>

<style scoped>
/* 类别组 */
.types-records {
  display: flex;
}
.log-type,
.method-type {
  width: 516px;
  height: 236px;
}
/* 类别组 */
/* 日志组 */
.logs-records {
  width: 1032px;
  height: 236px;
}
/* 日志组 */
</style>