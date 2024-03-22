import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Navbar";

function AdminPage() {
  return (
    <div className="w-100 bg-[#F0EBF8]">
      <ResponsiveAppBar />
      <div className=" w-full text-center  min-h-screen container mx-auto">
        <div className="flex justify-center pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
