import { getCurrentInstance } from "vue";

//存放图表初始化函数
export function initLogType(echarts, dom, data) {
    echarts = echarts.init(dom);
    //准备绘制图表所需数据
    let options = {
        title: {
            text: "日志类别统计表",
        },
        xAxis: {
            data: data.names,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function(params) {
              return `
                <div style="display: flex;align-items: center;">
                    <div style="width: 8px; height: 8px; background-color: #F62727; border-radius: 50%; margin-right: 4px;"></div>
                    &nbsp;<span>${params[0].name}</span>&nbsp;&nbsp;&nbsp;<span><strong>${params[0].value}</strong>次</span>
                </div>
              `;
            }
        },
        yAxis: {},
        series: {
            type: "bar",
            data: data.values,
            //设置样式
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: "solid",
                color: "#F62727",
                shadowColor: "#F62727",
                borderType: "dashed",
                opacity: 0.5,
            },
        },
    };
    //渲染图表
    echarts.setOption(options);
}


export function initMethodType(echarts, dom, data) {
    echarts = echarts.init(dom);
    //准备绘制图表所需数据
    let options = {
        title: {
            text: "方法类别统计表",
        },
        xAxis: {
            data: data.names,
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            },
            formatter: function(params) {
              return `
                <div style="display: flex;align-items: center;">
                    <div style="width: 8px; height: 8px; background-color: #F62727; border-radius: 50%; margin-right: 4px;"></div>
                    &nbsp;<span>${params[0].name}</span>&nbsp;&nbsp;&nbsp;<span><strong>${params[0].value}</strong>次</span>
                </div>
              `;
            }
        },
        yAxis: {},
        series: {
            type: "bar",
            data: data.values,
            //设置样式
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: "solid",
                color: "#F62727",
                shadowColor: "#F62727",
                borderType: "dashed",
                opacity: 0.5,
            },
        },
    };
    //渲染图表
    echarts.setOption(options);
}


export function initLogsRecords(echarts, dom, data) {
    //获取 echarts 实例
    echarts = echarts = echarts.init(dom);
    //准备绘制图表所需数据
    let options = {
        title: {
            text: "所有日志统计表",
        },
        xAxis: {
            type: 'category',
            data: data.names,
        },
        tooltip: {
            trigger: "axis",
            formatter: function (params) {
                // 返回自定义的提示内容，包含一个带有圆点的HTML元素
                return `
                    <div>
                        <span>${params[0].name}</span>
                        <div style="display: flex;align-items: center;margin-top: 6px;">
                            <div style="width: 8px; height: 8px; background-color: #F62727; border-radius: 50%; margin-right: 4px;"></div>
                            &nbsp;&nbsp;<span><strong>${params[0].value}</strong>次</span>
                        </div>
                    </div>
                `;
            },
        },
        yAxis: {},
        series: {
            type: "line",
            data: data.values,
            //设置样式
            itemStyle: {
                barBorderRadius: 5,
                borderWidth: 1,
                borderType: "solid",
                color: "#F62727",
                shadowColor: "#F62727",
                borderType: "dashed",
                opacity: 0.5,
            },
        },
    };
    //渲染图表
    echarts.setOption(options);
}