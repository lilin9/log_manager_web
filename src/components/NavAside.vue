// 侧边导航栏
<template>
  <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    background-color="#2C2F31"
    text-color="#ffffff"
  >
    <router-link
      v-for="navItem in navList"
      :key="navItem.index"
      :to="navItem.router"
      class="nav-link"
    >
      <el-menu-item :index="navItem.index">
        <el-icon>
          <component :is="navItem.icon"></component>
        </el-icon>
        <span>{{ navItem.title }}</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script>
import { reactive } from "vue";
//导入 element-ui 图标
import { Location, HomeFilled } from "@element-plus/icons-vue";

export default {
  name: "NavAside",
  setup() {
    let navList = reactive([
      { index: "1", title: "首页", icon: "HomeFilled", router: "/home" },
      { index: "2", title: "全部日志", icon: "Document", router: "/allLogs" },
    ]);

    return { navList };
  },
  components: { Location, HomeFilled },
};
</script>

<style scoped>
.el-menu {
  height: calc(100vh - 60px);
  border-top: 0.5px solid #ffffff;
}
.nav-link:active {
  text-decoration: none !important;
}
</style>