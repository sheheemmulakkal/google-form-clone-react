import { useState } from "react";
import FormTitle from "../components/FormTitle";
import FormBody from "../components/FormBody";

interface InputTypes {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

function FormPage() {
  const [title, setTitle] = useState<string>("Untitled Form");
  const [fields, setFields] = useState<InputTypes[]>([]);

  const typeChangeHandler = (i: number, inputItem: string) => {
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

  const optionHandler = (i: number, option: string) => {
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
    setFields((prev) => [
      ...prev,
      { label: "", type: "text", options: [], required: false },
    ]);
  };
  return (
    <div className="sm:w-full lg:max-w-[60%]">
      <FormTitle title={title} setTitle={setTitle} />
      impor
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
            />
          </h1>
        ))}
      <div
        className="bg-white rounded-md py-1  flex-col mt-8 border font-semibold text-[#5F6368]"
        onClick={addFieldHandler}
      >
        <button>Add feild</button>
      </div>
    </div>
  );
}

export default FormPage;
