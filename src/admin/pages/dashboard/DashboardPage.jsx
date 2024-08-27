import { useEffect, useState } from "react";
import { useAlumnos } from "../../hooks/useAlumnos";
import { useGestionGrados } from "../../hooks/useGestionGrados";
import { Card } from "../../../shared/components";
import { GoStack } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";

export const DashboardPage = () => {
  const { alumnos, getAlumnos } = useAlumnos();
  const { gestionGrados, getGestionGrados } = useGestionGrados();
  const [cantAlumnos, setCantAlumnos] = useState(0);
  const [cantEgresados, setCantEgresados] = useState(0);
  const [cantTitulados, setCantTitulados] = useState(0);

  useEffect(() => {
    getAlumnos();
    getGestionGrados();
  }, []);

  useEffect(() => {
    if (alumnos) {
      console.log(alumnos.length);
      setCantAlumnos(
        alumnos?.filter((alumno) => alumno?.estado_data.nombre === "En Curso")
          .length
      );
      setCantEgresados(
        alumnos?.filter((alumno) => alumno?.estado_data.nombre === "Egresado")
          .length
      );
    }
    if (gestionGrados) {
      setCantTitulados(gestionGrados.length);
    }
  }, [alumnos, gestionGrados]);

  return (
    <section className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5">
      <Card
        icono={<GoStack />}
        titulo={"Total de Alumnos"}
        cantidad={cantAlumnos}
      />
      <Card
        icono={<HiOutlineUsers />}
        titulo={"Total de Egresados"}
        cantidad={cantEgresados}
      />
      <Card
        icono={<IoSchoolOutline />}
        titulo={"Total de Titulados"}
        cantidad={cantTitulados}
      />
    </section>
  );
};
