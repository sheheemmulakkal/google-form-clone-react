import AddFormButton from "../components/AddFormButton";
import Logo from "../assets/Logo.png";
import { getMyForms } from "../api/formapi";
import { useEffect, useState } from "react";
import { FormType } from "../types/CreateForm";
import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const [myForms, setMyForms] = useState<FormType[]>([]);

  const getForms = async () => {
    const resposne: FormType[] = await getMyForms();
    setMyForms(resposne);
  };
  useEffect(() => {
    getForms();
  });

  const navigate = useNavigate();
  const selectHandler = (form: FormType) => {
    navigate("/admin/form", { state: { form } });
  };

  return (
    <div className="w-full my-9 container mx-auto">
      <div className="mx-12">
        <h1 className="text-2xl font-bold py-4 pb-16">My forms</h1>
        <div className="flex-row grid grid-cols-6">
          <Link to={"/admin/create-form"}>
            <div className="w-4/5 bg-white py-7 h-[120px] shadow-lg">
              <AddFormButton />
            </div>
          </Link>
          {myForms.length > 0 &&
            myForms.map((form) => (
              <div
                className="w-4/5 bg-white border flex flex-col justify-center items-center shadow-lg h-[120px] cursor-pointer"
                onClick={() => selectHandler(form)}
              >
                <img width={"50px"} src={Logo} />
                <p className="w-full px-3 font-semibold truncate">
                  {form.title}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
