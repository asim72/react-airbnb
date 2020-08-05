import axios from "axios";

class AxiosService {
  axoisInstance = {};

  constructor() {
    this.initInstance();
  }

  initInstance() {
    this.axoisInstance = axios.create({
      baseURL: "localhost:1200/api/airbnb",
      timeout: 1000,
    });

    this.axoisInstance.interceptors.request.use((config) => {
      const token = localStorage.getItem("auth_token");

      if (token) {
        config.headers.authorization = token;
      }

      return config;
    });
    return this.axoisInstance;
  }

  getInterceptor() {
    return this.axoisInstance || this.initInstance();
  }
}

export default new AxiosService();
