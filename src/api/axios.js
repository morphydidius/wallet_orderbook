import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
    baseURL: 'https://data-api.binance.vision/api/v3',
};

// const _axios = axios.create(config);

export default axios.create(config);

// _axios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config;
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error);
//   }
// );

// // Add a response interceptor
// _axios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response;
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

// export default {
//     install: function(app) {
//       app.$axios = _axios;
//       window.axios = _axios;
//       Object.defineProperties(app.config.globalProperties, {
//         axios: {
//           get() {
//             return _axios;
//           }
//         },
//         $axios: {
//           get() {
//             return _axios;
//           }
//         },
//       });
//   },
// };
