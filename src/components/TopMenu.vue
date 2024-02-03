// 头部导航栏
<script setup>
import { reactive, ref } from "vue";

//导航栏列表数据
let menuList = reactive([
    {
        id: 1,
        icon: 'Printer',
        title: '滚动日志',
        to: ''
    },
    {
        id: 2,
        icon: 'Document',
        title: '日志查询',
        to: ''
    },
    {
        id: 3,
        icon: 'Share',
        title: '链路追踪',
        to: ''
    },
    {
        id: 4,
        icon: 'More',
        title: '扩展字段',
        to: ''
    },
    {
        id: 5,
        icon: 'DataLine',
        title: '错误统计',
        to: ''
    },
    {
        id: 6,
        icon: 'Setting',
        title: '管理',
        to: ''
    }
]);
</script>
<template>
  <el-menu
    mode="horizontal"
    background-color="#2c2f30ff"
    text-color="#8a8a8aff"
    active-text-color="#ffff"
    :ellipsis="false">
    <el-menu-item v-for="item in menuList" :key="item.id" :index="item.id">
      <router-link :to="item.to" class="router-link">
        <Icon :icon="item.icon" class="el-icon"></Icon><span>{{item.title}}</span>
      </router-link>
    </el-menu-item>
  </el-menu>
</template>
<style scoped>
.el-menu {
  height: 60px;
}
.el-icon {
  padding: 0;
  margin: 0;
}
.el-menu-item {
  padding: 0;
  color: 14px;
  margin-right: 20px;
}
.el-menu-item:hover {
  background-color: rgba(44,47,48, 0.5);
}
.el-menu-item .is-active {
      background-color: #2c2f30ff !important;
      color: #fff;
}
.el-menu--horizontal > .el-menu-item {
  border-bottom: none;
  text-decoration: none;
}
.router-link {
  height: 60px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.router-link:hover {
  background-color: #2c2f30ff !important;
}
</style>