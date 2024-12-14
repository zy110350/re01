import axios from "axios";
const service=axios.create({
   baseURL:"/",
   timeout:15000
});

//axios实例拦截请求
service.interceptors.request.use(config=>{
    return config;
},error=>{
    return Promise.reject(error);
});

//axios实例拦截响应
service.interceptors.response.use(response=>{
    return response.data;
},error=>{});

export default service;

