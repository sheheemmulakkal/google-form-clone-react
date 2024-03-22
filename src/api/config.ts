import axios, { AxiosInstance, AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_APP_SERVER_URL;

interface ErrorResponse {
  message: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

const axiosAuthorized: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosAuthorized.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosAuthorized.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      if (
        axiosError.response &&
        axiosError.response.data
        // &&
        // axiosError.response.data.errors
      ) {
        return error.message;
      } else {
        return Promise.reject("An unexpected error occurred.");
      }
    } else {
      return Promise.reject("An unexpected error occurred.");
    }
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    if (axios.isAxiosError(error)) {
      const axiosError = error;
      if (axiosError.response && axiosError.response.data) {
        return Promise.reject(error?.response?.data.message);
      } else {
        return Promise.reject("An unexpected error occurred.");
      }
    } else {
      return Promise.reject("An unexpected error occurred.");
    }
  }
);

export { axiosAuthorized, axiosInstance };
