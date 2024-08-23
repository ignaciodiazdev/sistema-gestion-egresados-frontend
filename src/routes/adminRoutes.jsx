import { HiOutlineUsers } from "react-icons/hi";
import { RxDashboard } from "react-icons/rx";
import { RiUserShared2Line } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { FaRegBookmark, FaRegCalendarAlt } from "react-icons/fa";
import { BsBook } from "react-icons/bs";
import { GoStack } from "react-icons/go";
import { MainLayout } from "../shared/layouts/MainLayout";

// <=== Imports Dashboard ===>
import { DashboardPage } from "../admin/pages/dashboard";
// <=== Imports Alumnos ===>
import {
  AlumnosPage,
  AlumnoRegister,
  AlumnoEdit,
} from "../admin/pages/alumnos";
// <=== Imports Egresados ===>
import { EgresadosPage } from "../admin/pages/egresados";
// <=== Imports Gestion de Grados ===>
import { GestionGradosPage } from "../admin/pages/gestion-grados";
// <=== Imports Periodos ===>
import { PeriodosPage } from "../admin/pages/periodos";
// <=== Imports Carrera ===>
import { CarrerasPage } from "../admin/pages/carreras";
// <=== Imports Estados ===>
import { EstadosPage } from "../admin/pages/estados";
// <=== Imports Grados Academicos ===>
import { GradosAcademicosPage } from "../admin/pages/grados-academicos";

const adminRoutes = [
  {
    path: "/dashboard",
    layout: MainLayout,
    page: DashboardPage,
    icon: <RxDashboard />,
    name: "Dashboard",
    in_sidebar: true,
  },
  {
    path: "/alumnos",
    layout: MainLayout,
    page: AlumnosPage,
    icon: <HiOutlineUsers />,
    name: "Alumnos",
    in_sidebar: true,
  },
  {
    path: "/alumnos/registrar",
    layout: MainLayout,
    page: AlumnoRegister,
    in_sidebar: false,
  },
  {
    path: "/alumnos/editar/:id",
    layout: MainLayout,
    page: AlumnoEdit,
    in_sidebar: false,
  },
  {
    path: "/egresados",
    layout: MainLayout,
    page: EgresadosPage,
    icon: <RiUserShared2Line />,
    name: "Egresados",
    in_sidebar: true,
  },
  {
    path: "/gestion-grados",
    layout: MainLayout,
    page: GestionGradosPage,
    icon: <IoSchoolOutline />,
    name: "Gestión de Grados",
    in_sidebar: true,
  },
  //   <========= Mantenimiento =========>
  {
    path: "/periodos",
    layout: MainLayout,
    page: PeriodosPage,
    icon: <FaRegCalendarAlt />,
    name: "Periodos",
    in_sidebar: true,
  },
  {
    path: "/carreras",
    layout: MainLayout,
    page: CarrerasPage,
    icon: <FaRegBookmark />,
    name: "Carreras",
    in_sidebar: true,
  },
  {
    path: "/estados",
    layout: MainLayout,
    page: EstadosPage,
    icon: <GoStack />,
    name: "Estados",
    in_sidebar: true,
  },
  {
    path: "/grados-academicos",
    layout: MainLayout,
    page: GradosAcademicosPage,
    icon: <BsBook />,
    name: "Grados Académicos",
    in_sidebar: true,
  },
];

export default adminRoutes;
