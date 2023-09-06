import { createApp, provide } from 'vue'
import App from './App.vue'
import './index.css'

//引入 elementui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//导入 elementui 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//导入 elementui 中文库
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//引入路由
import router from "./router/index.js"
//引入自定义 echarts.js
import echarts from "./echarts/echarts"

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {locale: zhCn})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.provide("$echarts", echarts)
//全局挂载 echarts
// app.config.globalProperties.$echarts = echarts;


app.mount('#app')
