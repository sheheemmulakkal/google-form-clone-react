import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Navbar";

function AdminPage() {
  return (
    <div className="w-100 bg-[#F0EBF8]">
      <ResponsiveAppBar />
      <div className="container w-full text-center  min-h-screen">
        <div className="flex justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
