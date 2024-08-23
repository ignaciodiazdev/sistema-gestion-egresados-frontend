import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteAdmin = ({ auth, redirectPath = "/" }) => {
  if (auth?.me.is_staff) {
    return <Outlet />;
  }
  return <Navigate to={redirectPath} replace />;
};

export default ProtectedRouteAdmin;
