<script setup>
import TopMenu from "@/components/TopMenu.vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

//退出按钮事件
let logoutHandler = () => {
  //清空 session
  localStorage.setItem("userInfo", "");
  ElMessage.success("退出登录成功");
  //导航到登陆页面
  router.push({ path: "/login" });
};
</script>

<template>
  <el-container>
    <el-header>
      <el-row :gutter="24">
        <el-col :span="3"
          ><el-image
            style="width: 120px; height: 60px"
            src="/src/assets/logo.png"
            fit="fit"
        /></el-col>
        <el-col :span="17"><TopMenu /></el-col>
        <el-col :span="4">
          <el-button
            type="text"
            icon="SwitchButton"
            class="logout"
            @click="logoutHandler"
            >退出</el-button
          >
          <span class="version">Version 1.0</span>
        </el-col>
      </el-row>
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<style scoped>
.el-container {
  width: calc(100vw);
  height: calc(100vh);
}
.el-header {
  width: calc(100vw);
  height: 60px;
  background-color: #2c2f30ff;
}
.el-container {
  background-color: #ffff;
}
.el-header .el-col {
  display: flex;
}
.logout {
  height: 60px;
  width: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.logout .el-icon {
  margin-right: 1px;
}
.logout span {
  margin-left: 1px;
}
.version {
  height: 60px;
  width: 90px;
}
.logout,
.version {
  text-align: center;
  line-height: 60px;
  color: #ffff;
}
</style>