import axios from 'axios'

const service = axios.create({
    baseURL: "http://132.232.11.210:8081",
    withCredentials: true, // 跨域请求，允许保存cookie
    timeout: 30000 // 请求超时时间
});

export const getWebsite = () => {
    return service({
        url: '/website/getAll',
        method: 'get'
    });
};

export const getMusic = () => {
    return service({
        method: 'get',
        url: '/music/getAll'
    });
};