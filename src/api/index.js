import axios from "axios";
import router from "vue-router";

let instance = axios.create({});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("cToken");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (err) => {
    return Promise.reject();
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.data.code) {
      switch (response.data.code) {
        case 1002:
          router.replace({
            path: "/login",
          });
      }
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);


export default instance