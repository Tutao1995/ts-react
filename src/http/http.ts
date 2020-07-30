import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios'
import { message } from 'antd';

export const http = axios.create({
  timeout: 1000 * 30,
})
//请求拦截
http.interceptors.request.use( (config: AxiosRequestConfig) => {
    return config
})

http.interceptors.response.use( (response: AxiosResponse) => {
  const { data, status, statusText} = response;
  if(status === 200 ) {
    return data
  } else {
    message.error(statusText, 1);
    return data
  }
}, (error: AxiosError) => {
  message.error(error, 1)
})