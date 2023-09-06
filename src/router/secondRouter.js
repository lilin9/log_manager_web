//配置二级路由组
export default [
    {
        path: "/home",
        name: "home",
        component: () => import("/src/components/Home.vue"),
        meta: {sendData: true}
    },
    {
        path: "/allLogs",
        name: "allLogs",
        component: () => import("/src/components/AllLogs.vue"),
        meta: {sendData: true}
    }
];