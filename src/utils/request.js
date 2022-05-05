import axios from 'axios'

export function request(config) {
    
    //1.创建axios实例
    const instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API,
        timeout: 10000
    })

    //2.axios的拦截器
    //axios.interceptors //这种写法是拦截全局
    //instance.interceptors 拦截创建的这个实例
    //request.use() 拦截请求，传两个函数，一个请求成功，一个请求失败
    instance.interceptors.request.use(config => {
        //为什么要做请求拦截，请求拦截的作用
        //1.比如config中的一些信息不符合服务器的要求

        //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        //3.某些网络请求，必须携带一些特殊信息（比如登录需要携带token）
        console.log(config);
        return config //必须return出去，不然后面拿不到数据
    }, err => {
        console.log(err);
    });

    //响应拦截
    instance.interceptors.response.use(res => {
        console.log(res);
        return res;//必须return出去，不然后面拿不到数据
    }, err => {
        console.log(err);
    });

    //3.发送真正的网络请求
    return instance(config)
}

