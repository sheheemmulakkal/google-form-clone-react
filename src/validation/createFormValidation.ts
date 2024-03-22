import { FormType } from "../types/CreateForm";

const createFormValidation = (form: FormType) => {
  if (!form.title || form.title === "")
    return { status: false, message: "Title shouldn't be empty" };
  if (form.fields.length < 1)
    return { status: false, message: "Fields shouldn't be empty" };
  for (const item of form.fields) {
    if (!item.label || item.label === "")
      return { status: false, message: "Questions shouldn't be empty" };
    if (item.type !== "text" && item.options.length < 1)
      return { status: false, message: "Options shouldn't be empty" };
  }

  return { status: true };
};

export { createFormValidation };
