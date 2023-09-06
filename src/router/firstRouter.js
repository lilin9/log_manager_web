//导入二级路由组
import secondRouter from "./secondRouter";

//配置一级路由组
export default [
    {
        path: "/",
        component: () => import("/src/page/Index.vue"),
        children: [
            {
                path: "",
                component: () => import("/src/components/Home.vue"),
                meta: { sendData: true }
            }
        ]
    },
    {
        path: "/index",
        name: "index",
        component: () => import("/src/page/Index.vue"),
        children: secondRouter

    },
    {
        path: "/loginRegister",
        name: "loginRegister",
        component: () => import("/src/page/LoginRegister.vue")
    }
];