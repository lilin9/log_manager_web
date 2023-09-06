<template>
  <div class="common-layout">
    <el-header>
      <div class="left">
        <el-image
          src="/src/assets/logo.png"
          style="width: 40px; height: 40px"
        ></el-image>
        <span class="title">通用日志管理系统</span>
      </div>
      <div class="right">
        <div class="logout">
          <router-link to="/loginRegister">
            <el-button type="" link text color="#000000" icon="SwitchButton"
              >退出</el-button
            >
          </router-link>
        </div>
        <div class="version">Version 1.0</div>
      </div>
    </el-header>
    <el-container>
      <!-- 导航侧边栏 -->
      <el-aside width="200px">
        <NavAside />
      </el-aside>
      <!-- 主体内容 -->
      <el-scrollbar>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-scrollbar>
    </el-container>
  </div>
</template>

<script>
import NavAside from "../components/NavAside.vue";
import { SwitchButton } from "@element-plus/icons-vue";

export default {
  name: "Index",
  components: { NavAside, SwitchButton },
};
</script>

<style scoped>
/* 页头 */
.el-header {
  display: flex;
  background-color: #2c2f31;
  color: #ffffff;
  justify-content: space-between;
  height: 60px;
}
.el-header .left {
  display: flex;
  align-items: center;
}
.el-header .left .title {
  margin: 0 10px;
}
.el-header .right {
  display: flex;
  justify-items: center;
  align-items: center;
}
.el-header .right .logout {
  margin: 10px 10px 10px 0;
  height: 40px;
  line-height: 40px;
}
.el-header .right .version {
  margin: 10px 0 10px 10px;
  height: 40px;
  line-height: 40px;
}
/* 页头 */

/* 主体内容 */
.el-main {
  padding: 20px;
}
/* 滚动条设置 */
.el-container .el-scrollbar {
  height: calc(100vh - 60px);
}
/* 主体内容 */
</style>