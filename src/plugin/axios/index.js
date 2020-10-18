import axios from 'axios'
import {
    Notification
} from 'element-ui'
import store from '../../store'

// 请求超时时间，10s
const requestTimeOut = 30 * 1000;
// 成功状态
const success = 200;
// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: requestTimeOut,
    responseType: 'json',
    validateStatus(status) {
        return status === success
    }
});

// request拦截器
service.interceptors.request.use(
    config => {
        /* if (store.getters.user.token) {
          config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }*/
        return config
    },
    error => {
        // Do something with request error
        console.log(error); // for debug
        Promise.reject(error)
    }
);

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非success是抛错
         */
        const res = response.data;
        if (res.status !== '200') {
            Notification.error({
                title: '错误提示',
                message: res.msg,
                type: 'error'
            });

            //  logout:Token 过期了;
            if (res.code === 'logout' || res.code === 50012 || res.code === 50014) {
                Notification.warning({
                    title: '温馨提示',
                    message: res.msg,
                    type: 'warning',
                    onClose: function () {
                        store.dispatch('LogOut').then(() => {
                            location.reload()
                        })
                    }
                })
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        Notification.error({
            title: '错误提示',
            message: error.message,
            type: 'error'
        });
        return Promise.reject(error)
    }
);

const request = {
    page(url, params) {
        return service({
            url: url,
            method: 'post',
            data: params
        })
    },
    post(url, params) {
        return service.post(url, params, {
            transformRequest: [(params) => {
                return tansParams(params)
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    postData(url, params) {
        return service({
            url: url,
            method: 'post',
            data: params
        })
    },
    putData(url, params) {
        return service({
            url: url,
            method: 'put',
            data: params
        })
    },
    deleteData(url, params) {
        return service({
            url: url,
            method: 'delete',
            data: params
        })
    },
    put(url, params) {
        return service.put(url, params, {
            transformRequest: [(params) => {
                return tansParams(params)
            }],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },
    get(url, params) {
        let _params;
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?';
            for (const key in params) {
                if (params.hasOwnProperty(key) && params[key] !== null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return service.get(`${url}${_params}`)
    },
    delete(url, params) {
        let _params;
        if (Object.is(params, undefined)) {
            _params = ''
        } else {
            _params = '?';
            for (const key in params) {
                if (params.hasOwnProperty(key) && params[key] !== null) {
                    _params += `${key}=${params[key]}&`
                }
            }
        }
        return service.delete(`${url}${_params}`)
    },
};

function tansParams(params) {
    let result = '';
    Object.keys(params).forEach((key) => {
        if (!Object.is(params[key], undefined) && !Object.is(params[key], null)) {
            result += encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&'
        }
    });
    return result
}

export default request
