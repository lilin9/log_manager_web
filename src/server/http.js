import axios from "axios";
import { toRaw } from "vue";
import { ElNotification } from "element-plus";

axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.withCredentials = true; 
axios.defaults.timeout = 5000; //超时时间

//请求拦截器
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        ElNotification({title: "请求异常", message: JSON.stringify(error.messgae), type: 'error'});
    }
);


export default {
    post(url, data) {
        return new Promise((resolve, reject) => {
            console.log(toRaw(data))
            axios.post(url, toRaw(data)).then(res => {
                resolve(res.data)
            }).catch(error => {
                reject(error);
            });
        });
    },
    get(url, data) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'get',
                url,
                params: data
            }).then(res => {
                resolve(res.data);
            }).catch(error => {
                reject(error);
            });
        });
    },
}