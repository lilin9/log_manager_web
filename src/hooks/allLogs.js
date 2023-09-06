import { getAllLogs, getAllType, getAllMethodType, postAllLogs } from "../api/api";

export default function () {

    //表单数据
    let searchFormData = {
        url: null,    //请求路径
        ip: null, //服务器IP地址
        type: null,   //日志类型
        method: null, //请求类型
        startTime: null,  //日期和时间
        description: null //操作描述
    };
    //搜索表单数据
    async function searchLogsData(params) {
        try {
            const response = await postAllLogs(params);
            if (response.code == "200") {
                return response.data;
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
    
    }

    //日志类型数据
    let type = [{ typeId: 1, type: "info" }, { typeId: 2, type: "warning" }, { typeId: 3, type: "debug" }, { typeId: 4, type: "warning" }];
    //初始化日志类型数据
    async function initTypeData() {
        try {
            const response = await getAllType();
            if (response.code == "200") {
                return response.data;
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
    }


    //方法请求类型数据
    let method = [{ methodId: 1, method: "get" }, { methodId: 2, method: "post" }, { methodId: 3, method: "put" }, { methodId: 4, method: "delete" }];
    //初始化方法请求类型数据
    async function initMethodData() {
        try {
            const response = await getAllMethodType();
            if (response.code == "200") {
                return response.data;
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
    }

    //日志表格数据
    let logsTableData = [
        {
            username: "admin",   //操作用户
            startTime: "2023年08月11日 13时59分01秒",  //操作时间
            spendTime: "4 ms", //消耗时间
            url: "/login",    //URL
            method: "post", //请求类型
            type: "info",   //日志类型
            exceptionName: "java.lang.RuntimeException",  //异常名
            exceptionMsg: "at com.logmanager.controller.LogsController.getAllLogs(LogsController.java:54) ~[classes/:na]\n" +
                "\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:na]\n" +
                "\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77) ~[na:na]\n" +
                "\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:na]\n" +
                "\tat java.base/java.lang.reflect.Method.invoke(Method.java:568) ~[na:na]",  //异常信息
            ip: "0:0:0:0:0:0:0:1", //IP地址
            parameter: "{humanId=0, humanName=admin, humanPassword=123abc}",  //请求参数
            result: "{code=200, data={humanEmail=xiaohong@email.com, humanId=1, humanName=admin, humanNiceName=小怪, humanPassword=123abc}, message=登录成功}", //请求返回的结果
            device: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200", //请求设备信息
            description: "用户登录服务"    //操作描述
        },
        {
            username: "admin",   //操作用户
            startTime: "2023年08月11日 13时59分01秒",  //操作时间
            spendTime: "4 ms", //消耗时间
            url: "/login",    //URL
            method: "post", //请求类型
            type: "info",   //日志类型
            exceptionName: "",  //异常名
            exceptionMsg: "",  //异常信息
            ip: "0:0:0:0:0:0:0:1", //IP地址
            parameter: "{humanId=0, humanName=admin, humanPassword=123abc}",  //请求参数
            result: "{code=200, data={humanEmail=xiaohong@email.com, humanId=1, humanName=admin, humanNiceName=小怪, humanPassword=123abc}, message=登录成功}", //请求返回的结果
            device: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200", //请求设备信息
            description: "用户登录服务"    //操作描述
        },
        {
            username: "admin",   //操作用户
            startTime: "2023年08月11日 13时59分01秒",  //操作时间
            spendTime: "4 ms", //消耗时间
            url: "/login",    //URL
            method: "post", //请求类型
            type: "info",   //日志类型
            exceptionName: "",  //异常名
            exceptionMsg: "",  //异常信息
            ip: "0:0:0:0:0:0:0:1", //IP地址
            parameter: "{humanId=0, humanName=admin, humanPassword=123abc}",  //请求参数
            result: "{code=200, data={humanEmail=xiaohong@email.com, humanId=1, humanName=admin, humanNiceName=小怪, humanPassword=123abc}, message=登录成功}", //请求返回的结果
            device: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.200", //请求设备信息
            description: "用户登录服务"    //操作描述
        }
    ];
    //初始化日志表格数据
    async function initAllLogsData() {
        try {
            const response = await getAllLogs()
            if (response.code == "200") {
                return response.data;
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
    }

    return {
        searchFormData,
        type,
        method,
        logsTableData,
        initAllLogsData,
        initTypeData,
        initMethodData,
        searchLogsData
    };
}