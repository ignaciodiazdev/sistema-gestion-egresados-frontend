import { BrowserRouter, Routes, Route } from "react-router-dom";
import adminRoutes from "./adminRoutes.jsx";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {adminRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.page />
              </route.layout>
            }
          />
        ))}
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};
