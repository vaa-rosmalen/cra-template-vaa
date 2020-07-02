import axios, { AxiosRequestConfig } from 'axios';

// @ts-ignore
const API_URL = window.API_URL;

const axiosConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 3000,
  transformResponse: [
    function (data) {
      // Do whatever you want to transform the data
      // console.log(data);
      return data;
    }
  ]
};

let tmp = axios.create(axiosConfig);

tmp.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log(response);
    return JSON.parse(response.data);
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export const updateToken = (token) => {
  tmp.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const api: {
  get<T>(url: string, config?: AxiosRequestConfig | undefined): Promise<T>;
  post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig | undefined
  ): Promise<T>;
} = {
  get: tmp.get,
  post: tmp.post
};
