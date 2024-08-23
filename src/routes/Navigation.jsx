import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../auth/pages/Signin.jsx";
import { useAuth } from "../auth/hooks/useAuth.js";
import adminRoutes from "./adminRoutes.jsx";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin.jsx";

export const Navigation = () => {
  const { auth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        {adminRoutes.map((route, index) => (
          <Route key={index} element={<ProtectedRouteAdmin auth={auth} />}>
            <Route
              key={index}
              path={route.path}
              element={
                <route.layout>
                  <route.page />
                </route.layout>
              }
            />
          </Route>
        ))}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
