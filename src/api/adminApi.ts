import { FormType } from "../types/CreateForm";
import { axiosInstance } from "./config";

// import axios from "axios";

const adminCreateForm = async (formData: FormType) => {
  try {
    console.log(import.meta.env.VITE_APP_SERVER_URL);

    const response = axiosInstance.post("/admin/submit-form", formData);
    console.log(response);
  } catch (error) {
    return error;
  }
};

export { adminCreateForm };
