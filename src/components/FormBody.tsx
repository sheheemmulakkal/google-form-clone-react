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
  formField: FormItems;
}> = ({
  index,
  typeHandler,
  formField,
  requireHandler,
  optionHandler,
  questionHandler,
  optionRemoveHandler,
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
  return (
    <>
      <div className="bg-white rounded-md py-6 flex-col mt-8 border-s-[6px] border-s-[#4285F4]">
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
            <div className="col-span-3 w-full"></div>
            <div className="col-span-1 h-6 mt-6 ">
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
    </>
  );
};

export default FormBody;
