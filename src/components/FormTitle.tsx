import React from "react";

interface FormTitleProps {
  title: { heading: string; description: string };
  setTitle: (value: { heading: string; description: string }) => void;
}
const FormTitle: React.FC<FormTitleProps> = ({ title, setTitle }) => {
  return (
    <div className=" bg-white rounded-md py-6 mt-8 border-t-8 border-t-[#673AB7] shadow-md">
      <div className="flex px-5 flex-col">
        <input
          type="text"
          onChange={(e) => setTitle({ ...title, heading: e.target.value })}
          className="h-16 text-4xl font-medium outline-none w-full"
          placeholder="Enter title"
          value={title.heading}
        />
        <input
          type="text"
          className=" text-lg w-full  outline-none"
          placeholder="Form description"
          onChange={(e) => setTitle({ ...title, description: e.target.value })}
        />
      </div>
    </div>
  );
};

export default FormTitle;
