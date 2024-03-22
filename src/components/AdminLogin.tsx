import { Link, useNavigate } from "react-router-dom";
import { adminLogin } from "../api/adminApi";
import { userActions } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    try {
      e.preventDefault();
      if (!email || email === "") {
        setErr("Email should not be empty");
        return;
      }
      if (!password || password === "") {
        setErr("Password should not be empty");
        return;
      }

      const response = await adminLogin(email, password);
      if (response) {
        dispatch(userActions.saveUser({ email }));
        navigate("/admin");
      }
    } catch (error) {
      setErr(error as string);
    }
  };

  return (
    <>
      <div className="text-center mt-24">
        <div className="flex items-center justify-center">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-12 h-12 text-blue-500"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        </div>
        <h2 className="text-4xl tracking-tight">Login to your account</h2>
      </div>
      <div className="flex justify-center my-2 mx-4 md:mx-0">
        <form className="w-full max-w-xl bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Email address
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="email"
                required
                onChange={(e) => {
                  setErr("");
                  setEmail(e.target.value.trim());
                }}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none"
                type="password"
                required
                onChange={(e) => {
                  setErr("");
                  setPassword(e.target.value.trim());
                }}
              />
            </div>

            <div className="w-full md:w-full px-3 mb-6">
              {!err ? (
                <button
                  onClick={(e) => submitHandler(e)}
                  className="appearance-none block w-full bg-blue-600 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none focus:bg-white focus:border-gray-500"
                >
                  Login
                </button>
              ) : (
                <button className="appearance-none block w-full bg-red-300 text-red-800 font-bold border border-red-800 rounded-lg py-3 px-3 leading-tight focus:outline-none ">
                  {err}
                </button>
              )}
            </div>
            <div className="mx-auto -mb-6 pb-1">
              <span className="text-center text-xs text-gray-700">
                <Link to={"/admin/signup"}>or Register</Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminLogin;
