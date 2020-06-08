import axios from "axios";

let service: any = {};
service = axios.create({
    baseURL: "/api",
    timeout: 5000
})

service.interceptors.request.use(
    (config: any) => {
        return config;
    },
    (error: any) => {
        console.log("error:", error);
        Promise.reject(error);
    }
)

service.interceptors.response.use(
    (config: any) => config,
    (error: any) => {
        console.log("error:", error);
        Promise.reject(error)
    }
)

export default service;