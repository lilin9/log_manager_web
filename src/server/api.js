import http from './http.js'

const baseUrl = "/api"
export default {
    //用户登录
    login: params => http.post(baseUrl + '/users/login', params),
    //用户注册
    register: params => http.post(baseUrl + '/users/register', params),
}