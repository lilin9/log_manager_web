import { createRouter, createWebHistory } from "vue-router";
//导入路由组
import routes from "./firstRouter";

//创建路由
const router = createRouter({
    history: createWebHistory(),
    routes
});

//暴露路由
export default router;