// import axios, { AxiosError } from "axios";
// import { FormType } from "../types/CreateForm";
import { axiosAuthorized } from "./config";

const getMyForms = async () => {
  try {
    const response = await axiosAuthorized.get("/admin/get-my-forms");
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getMyForms };
