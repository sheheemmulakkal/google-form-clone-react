import React from "react";
import AdminSingup from "../components/AdminSingup";
import AdminLogin from "../components/AdminLogin";

const AdminAuth: React.FC<{ page: string }> = ({ page }) => {
  return <div>{page === "login" ? <AdminLogin /> : <AdminSingup />}</div>;
};

export default AdminAuth;
