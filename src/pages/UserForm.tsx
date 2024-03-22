import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserForm, submitUserForm } from "../api/userApi";
import { FormType } from "../types/CreateForm";
import SelectAutoWidth from "../components/UserDropDownForm";

const UserForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParameters = new URLSearchParams(location.search);
  const id = queryParameters.get("id");

  const [form, setForm] = useState<FormType>();
  const [answers, setAnswers] = useState<
    {
      type: string;
      label: string;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      answer: any;
    }[]
  >([]);

  const getForm = async () => {
    try {
      const response = await getUserForm(id!);
      setForm(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForm();
  }, []);

  const handleAnswerChange = (label: string, value: string, type: string) => {
    console.log(label, value);

    const answerIndex = answers.findIndex((answer) => answer.label === label);

    if (type === "checkbox") {
      if (answerIndex !== -1) {
        const updatedAnswers = [...answers];
        if (
          value[0] === "+" &&
          updatedAnswers[answerIndex].answer.includes(value.slice(1))
        ) {
          updatedAnswers[answerIndex].answer = updatedAnswers[
            answerIndex
          ].answer.filter((val: string) => val !== value.slice(1));
        } else if (
          value[0] !== "+" &&
          updatedAnswers[answerIndex].answer.includes("+" + value)
        ) {
          updatedAnswers[answerIndex].answer = updatedAnswers[
            answerIndex
          ].answer.filter((val: string) => val !== "+" + value);
        } else {
          updatedAnswers[answerIndex].answer.includes(value)
            ? (updatedAnswers[answerIndex].answer = updatedAnswers[
                answerIndex
              ].answer.filter((val: string) => val !== value))
            : updatedAnswers[answerIndex].answer.push(value);
        }
        setAnswers(updatedAnswers);
      } else {
        setAnswers((prevAnswers) => [
          ...prevAnswers,
          { type, label, answer: [value] },
        ]);
      }
    } else {
      if (answerIndex !== -1) {
        const updatedAnswers = [...answers];
        updatedAnswers[answerIndex] = { type, label, answer: value };
        setAnswers(updatedAnswers);
      } else {
        setAnswers((prevAnswers) => [
          ...prevAnswers,
          { type, label, answer: value },
        ]);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: any = {};
      result.formId! = id;
      result.answers = answers;
      const response = await submitUserForm(result);
      if (response) {
        navigate("/form-success");
      }
    } catch (error) {
      console.log(error);
    }
    console.log("Answers:", answers);
  };

  return (
    <div className="w-full text-center min-h-screen container mx-auto">
      <div className="flex justify-center pb-10">
        <div className="sm:w-full lg:max-w-[60%]">
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-md py-6 mt-8 border-t-8 border-t-[#673AB7] shadow-md">
              <div className="flex px-5 flex-col">
                <div className="h-16 text-4xl font-medium outline-none w-full">
                  <p>{form?.title}</p>
                </div>
                {form?.description && (
                  <div className="text-lg w-full outline-none">
                    <p>{form.description}</p>
                  </div>
                )}
              </div>
            </div>

            {form &&
              form.fields.length > 0 &&
              form.fields.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-md py-4 flex-col mt-8 border-s-[6px] border-s-[#4285F4] shadow-md"
                >
                  <div className="flex-row">
                    <div className="w-full grid grid-cols-3">
                      <div className="col-span-2 px-3 w-full">
                        <div className="bg-[#F1F3F4] py-3 text-left w-full border-b-[1px] border-gray-950 outline-none px-5">
                          <p>
                            {item.label}
                            {item.required && (
                              <span className="text-red-700 text-xl"> *</span>
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {item.type !== "text" ? (
                    <div className="w-full grid grid-cols-4">
                      <div className="col-span-3 w-5/6 px-4 py-5 pr-16">
                        {item.type === "checkbox" && (
                          <div className="text-left">
                            {item.options.length > 0 && (
                              <div className="flex-row text-left">
                                {item.options.map((it, i) => (
                                  <div
                                    key={i}
                                    className="flex-row py-1 w-full flex justify-between"
                                  >
                                    <div className="left">
                                      <input
                                        type="checkbox"
                                        name={it}
                                        onChange={(e) =>
                                          handleAnswerChange(
                                            item.label,
                                            e.target.checked ? it : "+" + it,
                                            item.type
                                          )
                                        }
                                      />
                                      <label
                                        htmlFor={it}
                                        className="px-3 w-11/12 font-medium"
                                      >
                                        {it}
                                      </label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        {item.type === "radio" && (
                          <div className="text-left">
                            {item.options.length > 0 && (
                              <div className="flex-row text-left">
                                {item.options.map((it, i) => (
                                  <div
                                    key={i}
                                    className="flex-row py-1 w-full flex justify-between"
                                  >
                                    <div className="left">
                                      <input
                                        type="radio"
                                        name={item.label}
                                        id={it}
                                        onChange={() =>
                                          handleAnswerChange(
                                            item.label,
                                            it,
                                            item.type
                                          )
                                        }
                                      />
                                      <label
                                        htmlFor={it}
                                        className="px-3 w-11/12 font-medium"
                                      >
                                        {it}
                                      </label>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        {item.type === "dropdown" && (
                          <div className="text-left">
                            {item.options.length > 0 && (
                              <SelectAutoWidth
                                options={item.options}
                                handleChange={(value: string) =>
                                  handleAnswerChange(
                                    item.label,
                                    value,
                                    item.type
                                  )
                                }
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full grid grid-cols-4">
                      <div className="col-span-3 w-5/6 px-4 py-5 pr-16">
                        <div className="text-left">
                          <div className="flex-row text-left">
                            <textarea
                              name={item.label}
                              id={item.label}
                              className="w-full border px-5"
                              placeholder="Enter text here"
                              onChange={(e) =>
                                handleAnswerChange(
                                  item.label,
                                  e.target.value,
                                  item.type
                                )
                              }
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            <div className="rounded-md py-1 flex-col mt-1 border font-semibold bg-[#673AB7] text-white">
              <button type="submit">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
