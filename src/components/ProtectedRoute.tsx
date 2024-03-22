import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  element: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const user = useSelector((store: RootState) => store.user.user);
  if (!user) {
    return <Navigate to={"/admin/login"} replace />;
  }
  return <>{element}</>;
};

export default ProtectedRoute;
