import React from "react";
import DropDown from "../components/DropDown";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";
import FormComponent from "./FormComponent";

interface FormItems {
  type: string;
  options: string[];
  required: boolean;
  label: string;
}

const FormBody: React.FC<{
  index: number;
  typeHandler: (index: number, inputItem: string) => void;
  requireHandler: (index: number, checked: boolean) => void;
  optionHandler: (index: number, option: string) => void;
  questionHandler: (index: number, question: string) => void;
  optionRemoveHandler: (index: number, optionIndex: number) => void;
  deleteHandler: (index: number) => void;
  copyHandler: (index: number) => void;
  formField: FormItems;
}> = ({
  index,
  typeHandler,
  formField,
  requireHandler,
  optionHandler,
  questionHandler,
  optionRemoveHandler,
  deleteHandler,
  copyHandler,
}) => {
  const checkHandler = (
    _e: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    requireHandler(index, checked);
  };

  const questionInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    questionHandler(index, e.target.value);
  };

  const deleteFieldHandler = () => {
    deleteHandler(index);
  };

  const handleCopy = () => {
    copyHandler(index);
  };
  return (
    <>
      <div className="bg-white rounded-md py-4 flex-col mt-8 border-s-[6px] border-s-[#4285F4]">
        <div className="flex-row">
          <div className="w-full grid  grid-cols-3">
            <div className="col-span-2 px-3 w-full">
              <input
                type="text"
                value={formField.label || ""}
                className="bg-[#F1F3F4] h-14 w-full border-b-[1px] border-gray-950 outline-none px-5 "
                placeholder="Question"
                onChange={questionInputHandler}
              />
            </div>
            <div className="container col-span-1">
              <DropDown
                name="Select Type"
                index={index}
                typeHandler={typeHandler}
              />
            </div>
          </div>
        </div>

        <div className=" w-full grid grid-cols-4 ">
          <div className="col-span-3 w-5/6 px-4  pr-16">
            <FormComponent
              formField={formField}
              optionHandler={optionHandler}
              index={index}
              optionRemoveHandler={optionRemoveHandler}
            />
          </div>
        </div>

        <div className="flex-row">
          <div className="grid grid-cols-4">
            <div className="col-span-2 w-full"></div>
            <div className="col-span-2 h-6 mt-6 flex items-center flex-row">
              <div className="copy pr-4">
                <svg
                  className="w-6 h-6 text-gray-800 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  onClick={handleCopy}
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 9v6a4 4 0 0 0 4 4h4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1v2Z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M13 3.054V7H9.2a2 2 0 0 1 .281-.432l2.46-2.87A2 2 0 0 1 13 3.054ZM15 3v4a2 2 0 0 1-2 2H9v6a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-3Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="delete pr-4 ">
                <svg
                  className="w-6 h-6 text-gray-800  cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  onClick={deleteFieldHandler}
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div className="pr-2">
                <FormGroup>
                  <FormControlLabel
                    required
                    checked={formField.required}
                    control={<Switch />}
                    label="Required"
                    onChange={checkHandler}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormBody;
