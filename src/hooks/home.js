import { getLogsTypeCount, getMethodTypeCount } from "../api/api";

export default function () {
    //日志类别图表数据
    let logType = {
        names: ["info", "debug", "warning", "error"],
        values: [23, 24, 18, 25]
    };
    //请求日志类别图表数据
    async function initLogTypeData() {
        let result = null;
        try {
            const response = await getLogsTypeCount();
            if (response.code == "200") {
                result = formatResponseData(response.data);
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
        return result == null ? logType : result;

    }


    //方法统计图表数据
    let methodType = {
        names: ["get", "post", "delete", "put"],
        values: [10, 100, 0, 0]
    };
    //请求方法统计图表数据
    async function initMethodTypeData() {
        let result = null;
        try {
            const response = await getMethodTypeCount();
            if (response.code == "200") {
                result = formatResponseData(response.data);
            } else {
                console.log("响应报错: ");
                console.log(response.message);
            }
        } catch (error) {
            console.log("响应报错: ");
            console.log(error);
        }
        return result == null ? methodType : result;
    }


    //所有日志统计图表数据
    let logsRecords = {
        names: ["2023年08月6日", "2023年08月7日", "2023年08月8日", "2023年08月9日", "2023年08月10日", "2023年08月11日",],
        values: [1000, 999, 99, 4335, 65564, 2322]
    };
    //请求所有日志统计图表数据
    function initLogsRecordsData() {
        return logsRecords;
    }


    return {
        initLogTypeData,
        initMethodTypeData,
        initLogsRecordsData
    }
};

//此方法将 从后端请求到的数据格式化成前端需要的固定格式数据
function formatResponseData(data) {
    if (data == null) return;
    const dataMap = Object.keys(data[0]).map(key => data.map(obj => obj[key]));
    return {
        names: dataMap[0],
        values: dataMap[1].map(value => parseFloat(value))
    };
}