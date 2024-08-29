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
import { AlumnosPage } from "../admin/pages/alumnos";
import { AlumnoRegister, AlumnoEdit } from "../admin/pages/alumnos/crud";
// <=== Imports Egresados ===>
import { EgresadosPage } from "../admin/pages/egresados";
import { EgresadoRegister, EgresadoEdit } from "../admin/pages/egresados/crud";
// <=== Imports Gestion de Grados ===>
import { GestionGradosPage } from "../admin/pages/gestion-grados";
import {
  GestionGradoRegister,
  GestionGradoEdit,
} from "../admin/pages/gestion-grados/crud";
// <=== Imports Periodos ===>
import { PeriodosPage } from "../admin/pages/periodos";
import { PeriodoRegister, PeriodoEdit } from "../admin/pages/periodos/crud";
// <=== Imports Carrera ===>
import { CarrerasPage } from "../admin/pages/carreras";
import { CarreraRegister, CarreraEdit } from "../admin/pages/carreras/crud";
// <=== Imports Estados ===>
import { EstadosPage } from "../admin/pages/estados";
import { EstadoRegister, EstadoEdit } from "../admin/pages/estados/crud";
// <=== Imports Grados Academicos ===>
import { GradosAcademicosPage } from "../admin/pages/grados-academicos";
import {
  GradoAcademicoRegister,
  GradoAcademicoEdit,
} from "../admin/pages/grados-academicos/crud";

export const adminRoutes = [
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
    path: "/egresados/registrar",
    layout: MainLayout,
    page: EgresadoRegister,
    in_sidebar: false,
  },
  {
    path: "/egresados/editar/:id",
    layout: MainLayout,
    page: EgresadoEdit,
    in_sidebar: false,
  },
  {
    path: "/gestion-grados",
    layout: MainLayout,
    page: GestionGradosPage,
    icon: <IoSchoolOutline />,
    name: "Gestión de Grados",
    in_sidebar: true,
  },
  {
    path: "/gestion-grados/registrar",
    layout: MainLayout,
    page: GestionGradoRegister,
    in_sidebar: false,
  },
  {
    path: "/gestion-grados/editar/:id",
    layout: MainLayout,
    page: GestionGradoEdit,
    in_sidebar: false,
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
    path: "/periodos/registrar",
    layout: MainLayout,
    page: PeriodoRegister,
    in_sidebar: false,
  },
  {
    path: "/periodos/editar/:id",
    layout: MainLayout,
    page: PeriodoEdit,
    in_sidebar: false,
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
    path: "/carreras/registrar",
    layout: MainLayout,
    page: CarreraRegister,
    in_sidebar: false,
  },
  {
    path: "/carreras/editar/:id",
    layout: MainLayout,
    page: CarreraEdit,
    in_sidebar: false,
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
    path: "/estados/registrar",
    layout: MainLayout,
    page: EstadoRegister,
    in_sidebar: false,
  },
  {
    path: "/estados/editar/:id",
    layout: MainLayout,
    page: EstadoEdit,
    in_sidebar: false,
  },
  {
    path: "/grados-academicos",
    layout: MainLayout,
    page: GradosAcademicosPage,
    icon: <BsBook />,
    name: "Grados Académicos",
    in_sidebar: true,
  },
  {
    path: "/grados-academicos/registrar",
    layout: MainLayout,
    page: GradoAcademicoRegister,
    in_sidebar: false,
  },
  {
    path: "/grados-academicos/editar/:id",
    layout: MainLayout,
    page: GradoAcademicoEdit,
    in_sidebar: false,
  },
];

import { Inicio } from "../users/pages/inicio/Inicio";
import { CertificadosPage } from "../users/pages/certificados/CertificadosPage";
import { ExperienciasPage } from "../users/pages/experencias/ExperienciasPage";
import { EducacionesPage } from "../users/pages/educaciones/EducacionesPage";
export const userRoutes = [
  {
    path: "/usuario-inicio",
    layout: MainLayout,
    page: Inicio,
    icon: <RxDashboard />,
    name: "Inicio",
    in_sidebar: true,
  },
  {
    path: "/certficados",
    layout: MainLayout,
    page: CertificadosPage,
    icon: <RxDashboard />,
    name: "Mis Certificados",
    in_sidebar: true,
  },
  {
    path: "/experiencias",
    layout: MainLayout,
    page: ExperienciasPage,
    icon: <RxDashboard />,
    name: "Experiencias Laborales",
    in_sidebar: true,
  },
  {
    path: "/educaciones",
    layout: MainLayout,
    page: EducacionesPage,
    icon: <RxDashboard />,
    name: "Formación Académica",
    in_sidebar: true,
  },
];
