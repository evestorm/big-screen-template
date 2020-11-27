import axios from 'axios';
// import store from '@/store';
import appConfig from '@/config/config';
// import storage from '@/storage/index';
import { Message, Loading } from 'element-ui';
import qs from 'qs';

const request = {};
let loadingObj = {};
const instance = axios.create({
  timeout: 20000,
  baseURL: appConfig.domain,
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded'
  },
  // transformRequest: [function (data) {
  //     let ret = ''
  //     ret = qs.stringify(data)
  //     return ret
  // }],
  validateStatus(status) {
    switch (status) {
        case 400:
            Message.error('请求出错');
            break;
        case 401:
            Message.warning({
                message: '授权失败，请重新登录'
            });
            // store.commit('LOGIN_OUT');
            setTimeout(() => {
                window.location.reload();
            }, 1000);
            return;
        case 403:
            Message.warning({
                message: '拒绝访问'
            });
            break;
        case 404:
            Message.warning({
                message: '请求错误,未找到该资源'
            });
            break;
        case 500:
            Message.warning({
                message: '服务端错误'
            });
            break;
        default:
            // Message.warning({
            //   message: '出错啦~ 请刷新后重试'
            // });
            break;
    }
    // eslint-disable-next-line consistent-return
    return status >= 200 && status < 300;
  }
});

// post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;';
// 添加请求拦截器
instance.interceptors.request.use(
   config => {
       loadingObj = Loading.service({
           lock: true,
           text: '加载中',
           background: '#fff'
        });
        // 请求头添加token
        // if (store.state.UserToken) {
        //     config.headers.Authorization = `Bearer ${store.state.UserToken}`
        // }
        // if (config.methods === 'post' && config.headers.serialize) {
        //     config.data = Qs.stringify(config.data)
        //     delete config.data.serialize
        // }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        // console.log(response)
        const httpStatus = Number(response.status);
        const resCode = Number(response.data.resCode || response.data.code);
        const msg = response.data.msg;
        loadingObj.close();
        if (httpStatus !== 200) {
            if (httpStatus >= 400 && httpStatus < 500) {
                Message.warning({
                    message: '网络错误'
                });
            } else {
                Message.warning({
                    message: '服务器错误'
                });
            }
            return Promise.reject(response);
        }
        if (resCode !== 10000) {
            Message.warning({
                message: msg
            });
            return Promise.reject(response);
        }
        return response.data;
    },
    err => {
        loadingObj.close();
        if (err && err.msg) {
            this.$message.error(err.msg);
        }
        return Promise.reject(err);
    }
);

request.get = (url, params) => {
    return instance.get(url, { params: params });
};

request.post = (url, params) => {
    return instance.post(url, qs.stringify(params));
};

export default request;