import './assets/main.css'

import { createApp, createVNode } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import api from '@/server/api'

const app = createApp(App)

//全局注册element-plus图标
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key]);
});
//Icon 自定义组件
const Icon = props => {
    const {icon} = props;
    return createVNode(Icons[icon]);
};
app.component('Icon', Icon);

//挂载全局 api 接口方法
app.config.globalProperties.$api = api

app.use(router)
app.use(ElementPlus)

app.mount('#app')
