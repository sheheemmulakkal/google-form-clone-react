import React, { useRef } from "react";

interface FormItems {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

const FormComponent: React.FC<{
  formField: FormItems;
  optionHandler: (index: number, option: string) => void;
  optionRemoveHandler: (index: number, optionIndex: number) => void;
  index: number;
}> = ({ formField, optionHandler, index, optionRemoveHandler }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputHandler = () => {
    if (inputRef.current) {
      const optionValue = inputRef.current.value;
      optionHandler(index, optionValue);
      inputRef.current.value = "";
    }
  };

  const removeHandler = (i: number) => {
    optionRemoveHandler(index, i);
  };
  switch (formField?.type) {
    case "text":
      return (
        <textarea
          disabled
          placeholder="Paragraph"
          className="w-full px-5 border-spacing-x-1 bg-[#F1F3F4]"
        />
      );
    case "dropdown":
      return (
        <div className="text-left">
          {formField.options.length > 0 && (
            <div className="flex-row text-left pb-4">
              {formField.options.map((item, i) => (
                <div
                  key={i}
                  className="flex-row py-1 w-full flex justify-between"
                >
                  <div className="left">
                    <input type="radio" disabled checked />
                    <label className=" px-3 w-11/12 font-medium text-lg">
                      {item}
                    </label>
                  </div>
                  <div className="right">
                    <button
                      onClick={() => removeHandler(i)}
                      className=" px-3 text-red-700 font-semibold border-red-700 border-[1px] rounded-md"
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="px-2 ">
            <input
              type="text"
              ref={inputRef}
              name="option"
              className="border py-1"
            />
            <button
              onClick={inputHandler}
              className="bg-[#673AB7] text-white px-3 mx-3 py-1 rounded-md"
            >
              Add option
            </button>
          </div>
        </div>
      );

    case "checkbox":
      return (
        <div className="text-left">
          {formField.options.length > 0 && (
            <div className="flex-row text-left">
              {formField.options.map((item, i) => (
                <div
                  key={i}
                  className="flex-row py-1 w-full flex justify-between"
                >
                  <div className="left">
                    <input type="checkbox" />
                    <label className=" px-3 w-11/12 font-medium">{item}</label>
                  </div>
                  <div className="right">
                    <button
                      onClick={() => removeHandler(i)}
                      className=" px-3 text-red-700 font-semibold border-red-700 border-[1px] rounded-md"
                    >
                      remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="px-2 ">
            <input
              type="text"
              ref={inputRef}
              name="option"
              className="border py-1"
            />
            <button
              onClick={inputHandler}
              className="bg-[#673AB7] text-white px-3 mx-3 py-1 rounded-md"
            >
              Add option
            </button>
          </div>
        </div>
      );
    case "radio":
      return (
        <div className="text-left">
          {formField.options.length > 0 && (
            <div className="flex-row text-left">
              <form action="">
                {formField.options.map((item, i) => (
                  <div
                    key={i}
                    className="flex-row py-1 w-full flex justify-between"
                  >
                    <div className="left">
                      <input type="radio" id={index.toString()} />
                      <label
                        htmlFor={index.toString()}
                        className=" px-3 w-11/12 font-medium"
                      >
                        {item}
                      </label>
                    </div>
                    <div className="right">
                      <button
                        onClick={() => removeHandler(i)}
                        className=" px-3 text-red-700 font-semibold border-red-700 border-[1px] rounded-md"
                      >
                        remove
                      </button>
                    </div>
                  </div>
                ))}
              </form>
            </div>
          )}
          <div className="px-2 ">
            <input
              type="text"
              ref={inputRef}
              name="option"
              className="border py-1"
            />
            <button
              onClick={inputHandler}
              className="bg-[#673AB7] text-white px-3 mx-3 py-1 rounded-md"
            >
              Add option
            </button>
          </div>
        </div>
      );
    default:
      return <input type="text" />;
  }
};

export default FormComponent;
