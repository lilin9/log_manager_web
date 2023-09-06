import axios from "axios";

//设置基础路径
axios.defaults.baseURL = "http://localhost:8090";

//axios 请求拦截器
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//axios 响应拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

async function getAllLogs() {
  return (await axios.get("/logs/getAll")).data;
}

async function getLogsTypeCount() {
  return (await axios.get("/logs/countLogsType")).data;
}

async function getMethodTypeCount() {
  return (await axios.get("/logs/countMethodType")).data;
}

async function postAllLogs(params) {
  return (await axios.post("/logs/searchLog",  params)).data;
}


async function getAllType() {
  return (await axios.get("/logsType/getAll")).data;
}

async function getAllMethodType() {
  return (await axios.get("/methodType/getAll")).data;
}

export {
  getAllLogs,
  getAllType,
  getAllMethodType,
  postAllLogs,
  getLogsTypeCount,
  getMethodTypeCount
}