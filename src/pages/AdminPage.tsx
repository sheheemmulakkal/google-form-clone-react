import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/Navbar";

function AdminPage() {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}

export default AdminPage;
