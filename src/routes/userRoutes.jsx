// Imports usuarios
import { Inicio } from "../users/pages/Inicio";
import { MainLayout } from "../shared/layouts/MainLayout";

export const userRoutes = [
  {
    path: "/usuario-inicio",
    layout: MainLayout,
    page: Inicio,
    in_sidebar: false,
  },
];
