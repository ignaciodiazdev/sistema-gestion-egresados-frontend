import { useEffect, useState } from "react";
import { useAlumnos } from "../../hooks/useAlumnos";
import { useGestionGrados } from "../../hooks/useGestionGrados";
import { Card } from "../../../shared/components";
import { GoStack } from "react-icons/go";
import { HiOutlineUsers } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
import { BarGraph, PieGraph } from "../../components/graphics";
import { CardUser } from "../../../users/components/CardUser";

export const DashboardPage = () => {
  const { alumnos, getAlumnos } = useAlumnos();
  const { gestionGrados, getGestionGrados } = useGestionGrados();
  const [cantAlumnos, setCantAlumnos] = useState(0);
  const [cantEgresados, setCantEgresados] = useState(0);
  const [cantTitulados, setCantTitulados] = useState(0);
  const [cantBachilleres, setCantBachilleres] = useState(0);
  const [cantMaestrias, setCantMaestrias] = useState(0);
  const [cantDoctorados, setCantDoctorados] = useState(0);

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
      setCantBachilleres(
        gestionGrados?.filter(
          (gestionGrado) =>
            gestionGrado?.grado_academico_data.nombre === "Bachillerato"
        ).length
      );
      setCantMaestrias(
        gestionGrados?.filter(
          (gestionGrado) =>
            gestionGrado?.grado_academico_data.nombre === "Maestría"
        ).length
      );
      setCantDoctorados(
        gestionGrados?.filter(
          (gestionGrado) =>
            gestionGrado?.grado_academico_data.nombre === "Doctorado"
        ).length
      );
    }
  }, [alumnos, gestionGrados]);

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
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
      <section className="flex flex-col sm:grid sm:grid-cols-2 gap-4">
        <CardUser>
          <h2 className="text-sm font-bold mb-4 text-center md:text-lg p-2 border border-gray-300">
            Grados Académicos Otorgados
          </h2>
          <div className="flex items-center justify-center xl:min-h-[300px]">
            <BarGraph
              cantBachiMaesDoc={[
                cantBachilleres,
                cantMaestrias,
                cantDoctorados,
              ]}
            />
          </div>
        </CardUser>
        <CardUser>
          <h2 className="text-sm font-bold mb-4 text-center md:text-lg  p-2 border border-gray-300">
            Cantidad de Alumnos y Egresados
          </h2>
          <div className="flex items-center justify-center md:max-h-[200px] xl:min-h-[300px]">
            <PieGraph cantAlumnosEgresados={[cantAlumnos, cantEgresados]} />
          </div>
        </CardUser>
      </section>
    </div>
  );
};
