import { axiosInstance } from "./config";

interface Form {
  formId: string;
  answers: {
    type: string;
    label: string;
    answer: string | string[];
  };
}

const getUserForm = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/form/${id}`);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

const submitUserForm = async (data: Form) => {
  try {
    const response = await axiosInstance.post("/form-submit", data);
    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export { getUserForm, submitUserForm };
