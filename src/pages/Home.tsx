import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto  h-[80vh] flex items-center">
      <div className="w-full flex justify-center bg-slate-300 mt-10 min-h-[30vh] rounded-md shadow-lg items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-semibold text-3xl mb-">Singup to create form</h1>
          <Link to={"/admin/login"}>
            <p className="text-blue-600 cursor-pointer font-semibold text-lg py-">
              Signup
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
