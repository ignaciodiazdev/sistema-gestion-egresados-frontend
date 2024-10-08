import { IoSchool } from "react-icons/io5";
import { formatDate } from "../../../utils/formatear-fecha";

export const DetailEducacion = ({ educacion }) => {
  return (
    <div className="flex items-start justify-start  gap-3">
      <div className="my-2 p-2 xl:p-4 text-3xl bg-third text-third bg-opacity-10 rounded-sm">
        <IoSchool />
      </div>
      <div>
        <p className="my-1 font-bold text-primary text-base lg:text-base">
          {educacion.carrera}
        </p>
        <p className="font-semibold my-1 text-sm">{educacion.institucion}</p>
        <p className="font-bold my-1 text-bodyDark2 text-sm">
          {educacion.fecha_fin
            ? `${educacion.tipo_estudio} - Finalizado`
            : `${educacion.tipo_estudio} - En Curso`}
        </p>
        <p className="my-1 text-bodyDark2 text-sm">
          {educacion.fecha_fin
            ? `${formatDate(educacion.fecha_inicio)} - ${formatDate(
                educacion.fecha_fin
              )}`
            : `${formatDate(educacion.fecha_inicio)} - Actualidad`}
        </p>
      </div>
    </div>
  );
};
