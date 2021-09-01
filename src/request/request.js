import axios from 'axios'
import Vue from "vue"
import {Toast} from "vant"; //引入Toast提示插件

Vue.use(Toast);

//创建一个axios的实例
const instance = axios.create({
    baseURL:"http://kumanxuan1.f3322.net:8001/",
    timeout:5000
})


//请求拦截器
instance.interceptors.request.use(config => {
    // 自定义加载图标
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:300,
        loadingType: 'spinner',
    });

    let token = localStorage.getItem("token")
    if (token) {
        //购物车商品数量CartGoodsNumApi 请求头携带token
        config.headers = {
            "X-Nideshop-Token": token
        }
    }
    return config;
},(err) => {
    // Toast消失
    Toast.clear()
    return Promise.reject(err);
})

//响应拦截器
instance.interceptors.response.use(res => {
    // Toast消失
    Toast.clear()
    // console.log("res",res.data);
    if(res.data.errno !== 0){
        console.log(res.data.errmsg);
    }
    return res.data;
},(err) => {
    // Toast消失
    Toast.clear()
    return Promise.reject(err);
})


export default instance
