import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes';


//创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});
//定义路由守卫
router.beforeEach((to, from, next) => {
  //如果是去到登录页面，直接放行
  if (Object.is(to.path, '/login')) {
    next();
    return;
  }

  let userInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (userInfo == null || userInfo == undefined) {
    next('/login');
  } else {
    next();
  }
});

export default router
