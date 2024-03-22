import { useState } from "react";
import FormTitle from "../components/FormTitle";
import FormBody from "../components/FormBody";
import { adminCreateForm } from "../api/adminApi";
import { createFormValidation } from "../validation/createFormValidation";
import { useNavigate } from "react-router-dom";

interface InputTypes {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

// interface FormType {
//   title: string;
//   description: string;
//   fields: InputTypes[];
// }

function FormPage() {
  const [title, setTitle] = useState<{ heading: string; description: string }>({
    heading: "Untitled Form",
    description: "",
  });
  const [fields, setFields] = useState<InputTypes[]>([]);
  const [err, setErr] = useState<string>("");

  const navigate = useNavigate();
  const errorClear = () => {
    setErr("");
  };
  const copyHandler = (i: number) => {
    errorClear();
    setFields((prev) => {
      const copy = { ...prev[i] };
      const nextIndex = i + 1;
      const updatedFields = [
        ...prev.slice(0, nextIndex),
        copy,
        ...prev.slice(nextIndex),
      ];

      return updatedFields;
    });
  };

  const typeChangeHandler = (i: number, inputItem: string) => {
    errorClear();
    setFields((prevFields) => {
      return prevFields.map((item, index) => {
        if (index === i) {
          return { ...item, type: inputItem };
        }
        return item;
      });
    });
  };

  const optionRemoveHandler = (i: number, optionIndex: number) => {
    errorClear();
    setFields((prevFields) => {
      return prevFields.map((item, index) => {
        if (i === index) {
          return {
            ...item,
            options: item.options.filter((_opt, ind) => ind !== optionIndex),
          };
        }
        return item;
      });
    });
  };

  const deleteHandler = (index: number) => {
    errorClear();
    setFields((prev) => {
      return prev.filter((_item, i) => {
        return i !== index;
      });
    });
  };

  const optionHandler = (i: number, option: string) => {
    errorClear();
    setFields((prevFields) => {
      return prevFields.map((item, index) => {
        if (index === i) {
          return { ...item, options: [...item.options!, option] };
        }
        return item;
      });
    });
  };

  const questionHandler = (i: number, question: string) => {
    errorClear();
    setFields((prevFields) => {
      return prevFields.map((item, index) => {
        if (index === i) {
          return { ...item, label: question };
        }
        return item;
      });
    });
  };
  const requriedHandler = (i: number, checked: boolean) => {
    errorClear();
    setFields((prevFields) => {
      return prevFields.map((item, index) => {
        if (index === i) {
          return { ...item, required: checked };
        }
        return item;
      });
    });
  };
  const addFieldHandler = () => {
    errorClear();
    setFields((prev) => [
      ...prev,
      { label: "", type: "text", options: [], required: false },
    ]);
  };

  const submitHandler = async () => {
    const data = {
      title: title.heading,
      description: title.description,
      fields: fields,
    };
    const result = createFormValidation(data);
    if (result?.status) {
      await adminCreateForm(data);
      navigate("/admin");
    } else {
      setErr(result?.message || "Some error occured");
    }
  };

  return (
    <div className="sm:w-full lg:max-w-[60%]">
      <FormTitle title={title} setTitle={setTitle} />
      {fields &&
        fields.map((item, index) => (
          <h1>
            <FormBody
              index={index}
              typeHandler={typeChangeHandler}
              formField={item}
              requireHandler={requriedHandler}
              optionHandler={optionHandler}
              questionHandler={questionHandler}
              optionRemoveHandler={optionRemoveHandler}
              deleteHandler={deleteHandler}
              copyHandler={copyHandler}
            />
          </h1>
        ))}
      <div className="mt-8 ">
        <div
          className="bg-white rounded-md py-1 mt-1 flex-col border font-semibold text-[#5F6368]"
          onClick={addFieldHandler}
        >
          <button>Add feild</button>
        </div>

        {err && (
          <div className="bg-red-400 py-1 rounded-md mt-1 flex-col  border font-semibold text-red-900">
            <button>{err}</button>
          </div>
        )}

        {!err && (
          <div className="rounded-md py-1  flex-col mt-1 border font-semibold bg-[#673AB7] text-white">
            <button onClick={submitHandler}>Submit Form</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormPage;
