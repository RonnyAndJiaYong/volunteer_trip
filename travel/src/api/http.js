import axios from 'axios';
// axios配置
axios.default.timeout = 5000;
// axios.default.baseURL = '';

// 拦截器
// axios.interceports.request.use(
//   config => {},
//   err => {
//     return Promise.reject(err);
//   }
// );

// axios.interceports.response.use(
//   res => {},
//   err => {
//     return Promise.reject(err);
//   }
// )

export function get(url, params = {}) {
  return axios.get(url, {
          params: params
        })
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
}

export function post(url, data = {}) {
  return axios.post(url, data)
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
}

export function patch(url, data = {}) {
  return axios.patch(url, data)
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
}

export function put(url, data = {}) {
  return axios.put(url, data)
        .then(response => {
          return response.data;
        })
        .catch(err => {
          console.log(err);
        });
}