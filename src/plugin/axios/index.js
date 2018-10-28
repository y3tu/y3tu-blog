import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
    baseURL: "http://132.232.11.210:8081",
    withCredentials: true, // 跨域请求，允许保存cookie
    timeout: 30000 // 请求超时时间
});

export default service