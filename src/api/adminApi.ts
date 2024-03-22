import { FormType } from "../types/CreateForm";
import { axiosInstance, axiosAuthorized } from "./config";

// import axios from "axios";

const adminCreateForm = async (formData: FormType) => {
  try {
    await axiosAuthorized.post("/admin/submit-form", formData);
  } catch (error) {
    return Promise.reject(error);
  }
};

const adminLogin = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/admin/login", {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

const adminSignup = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post("/admin/signup", {
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
};
export { adminCreateForm, adminLogin, adminSignup };
