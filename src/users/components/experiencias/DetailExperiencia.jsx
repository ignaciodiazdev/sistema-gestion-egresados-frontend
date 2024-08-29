import { formatDate } from "../../../utils/formatear-fecha";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const DetailExperiencia = ({ experiencia }) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-start justify-start  gap-3">
        <div className="my-2 p-2 xl:p-4 text-3xl bg-orange-500 text-orange-400 bg-opacity-10 rounded-sm">
          <BsFillBriefcaseFill />
        </div>
        <div className="">
          <p className="my-1 font-bold text-primary text-base  lg:text-base">
            {experiencia.empresa}
          </p>
          <p className="font-semibold my-1 text-sm">{experiencia.cargo}</p>
          <p className="my-1 text-bodyDark2 text-sm">
            {experiencia.fecha_fin
              ? `${formatDate(experiencia.fecha_inicio)} - ${formatDate(
                  experiencia.fecha_fin
                )}`
              : `${formatDate(experiencia.fecha_inicio)} - Actualidad`}
          </p>
        </div>
      </div>
    </div>
  );
};
