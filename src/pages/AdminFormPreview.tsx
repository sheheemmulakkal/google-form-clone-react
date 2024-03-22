import { useLocation } from "react-router-dom";
import { FormType } from "../types/CreateForm";
import AdminPreviewComponent from "../components/AdminPreviewComponent";

const AdminFormPreview = () => {
  const locatoin = useLocation();
  const form = locatoin.state.form as FormType;
  return (
    <div className="sm:w-full lg:max-w-[60%]">
      <div className=" bg-white rounded-md py-6 mt-8 border-t-8 border-t-[#673AB7] shadow-md">
        <div className="flex px-5 flex-col">
          <div className="h-16 text-4xl font-medium outline-none w-full">
            <p>{form.title}</p>
          </div>

          {form.description && (
            <div className=" text-lg w-full  outline-none">
              <p>{form.description}</p>
            </div>
          )}
        </div>
      </div>

      {form.fields.length > 0 &&
        form.fields.map((item) => (
          <div className="bg-white rounded-md py-4 flex-col mt-8 border-s-[6px] border-s-[#4285F4] shadow-md">
            <div className="flex-row">
              <div className="w-full grid  grid-cols-3">
                <div className="col-span-2 px-3 w-full">
                  <div className="bg-[#F1F3F4] py-3 text-left w-full border-b-[1px] border-gray-950 outline-none px-5 ">
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            </div>

            {item.type !== "text" && (
              <div className=" w-full grid grid-cols-4 ">
                <div className="col-span-3 w-5/6 px-4 py-5 pr-16">
                  <AdminPreviewComponent
                    type={item.type}
                    options={item.options}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default AdminFormPreview;
