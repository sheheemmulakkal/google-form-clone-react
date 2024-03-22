import React from "react";
import {} from "../types/CreateForm";

const AdminPreviewComponent: React.FC<{ type: string; options: string[] }> = ({
  type,
  options,
}) => {
  switch (type) {
    case "dropdown":
      return (
        <div className="text-left">
          {options.length > 0 && (
            <div className="flex-row text-left pb-4">
              {options.map((item, i) => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      );

    case "checkbox":
      return (
        <div className="text-left">
          {options.length > 0 && (
            <div className="flex-row text-left">
              {options.map((item, i) => (
                <div
                  key={i}
                  className="flex-row py-1 w-full flex justify-between"
                >
                  <div className="left">
                    <input type="checkbox" />
                    <label className=" px-3 w-11/12 font-medium">{item}</label>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    case "radio":
      return (
        <div className="text-left">
          {options.length > 0 && (
            <div className="flex-row text-left">
              <form action="">
                {options.map((item, i) => (
                  <div
                    key={i}
                    className="flex-row py-1 w-full flex justify-between"
                  >
                    <div className="left">
                      <input type="radio" id={i.toString()} />
                      <label
                        htmlFor={i.toString()}
                        className=" px-3 w-11/12 font-medium"
                      >
                        {item}
                      </label>
                    </div>
                  </div>
                ))}
              </form>
            </div>
          )}
        </div>
      );
    default:
      return <input type="text" />;
  }
};

export default AdminPreviewComponent;
