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
            <div className="flex-row text-left">
              {formField.options.map((item, i) => (
                <div key={i} className="flex-row py-1">
                  <input type="radio" disabled checked />
                  <label className=" px-3 w-11/12 font-medium">{item}</label>
                  <button onClick={() => removeHandler(i)}>remove</button>
                </div>
              ))}
            </div>
          )}
          <input type="text" ref={inputRef} name="option" />
          <button onClick={inputHandler}>Add option</button>
        </div>
      );

    case "checkbox":
      return (
        <div className="text-left">
          {formField.options.length > 0 && (
            <div className="flex-row text-left">
              {formField.options.map((item, i) => (
                <div key={i} className="flex-row py-1">
                  <input type="checkbox" />
                  <label className=" px-3 w-11/12 font-medium">{item}</label>
                  <button onClick={() => removeHandler(i)}>remove</button>
                </div>
              ))}
            </div>
          )}
          <input type="text" ref={inputRef} name="option" />
          <button onClick={inputHandler}>Add option</button>
        </div>
      );
    case "radio":
      return (
        <div className="text-left">
          {formField.options.length > 0 && (
            <div className="flex-row text-left">
              <form action="">
                {formField.options.map((item, i) => (
                  <div key={i} className="flex-row py-1">
                    <input type="radio" id={index.toString()} />
                    <label
                      htmlFor={index.toString()}
                      className=" px-3 w-11/12 font-medium"
                    >
                      {item}
                    </label>
                    <button onClick={() => removeHandler(i)}>remove</button>
                  </div>
                ))}
              </form>
            </div>
          )}
          <input type="text" ref={inputRef} name="option" />
          <button onClick={inputHandler}>Add option</button>
        </div>
      );
    default:
      return <input type="text" />;
  }
};

export default FormComponent;
