import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../auth/pages/SignIn.jsx";
import { useAuth } from "../auth/hooks/useAuth.js";
import adminRoutes from "./adminRoutes.jsx";
import ProtectedRouteAdmin from "./ProtectedRouteAdmin.jsx";
import { userRoutes } from "./userRoutes.jsx";
import ProtectedRouteUser from "./ProtectedRouteUser.jsx";

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

        {userRoutes.map((route, index) => (
          <Route key={index} element={<ProtectedRouteUser auth={auth} />}>
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
