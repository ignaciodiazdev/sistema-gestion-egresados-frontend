import { useEffect } from "react";
import { useExperiencias } from "../../../hooks/useExperiencias";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useModal } from "../../../shared/hooks/useModal";
import { MdRemoveRedEye } from "react-icons/md";
import { formatDate } from "../../../utils/formatear-fecha";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const ContentExperiencia = () => {
  const { openModal } = useModal();
  const {
    auth: { userInfo },
  } = useAuth();
  const { experiencias, getExperienciasByFilter } = useExperiencias();
  const handleOpenModal = (experiencia) => {
    openModal(
      <div className="text-[12px] xl:text-base text-left flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="mb-4 font-bold">Empresa:</p>
          <div className="p-3 border border-opacity-30 rounded-md border-gray-600 bg-body mb-5">
            <p>{experiencia.empresa}</p>
          </div>
        </div>
        <div className="lg:col-span-1">
          <p className="mb-4 font-bold">Fecha Inicio:</p>
          <div className="p-3 border border-opacity-30 rounded-md border-gray-600 bg-body mb-5">
            <p>{experiencia.fecha_inicio}</p>
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="mb-4 font-bold">Cargo:</p>
          <div className="p-3 border border-opacity-30 rounded-md border-gray-600 bg-body mb-5">
            <p>{experiencia.cargo}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <p className="mb-4 font-bold">Fecha Fin:</p>
          <div className="p-3 border border-opacity-30 rounded-md border-gray-600 bg-body mb-5">
            {experiencia.fecha_fin
              ? `${formatDate(experiencia.fecha_inicio)} - ${formatDate(
                  experiencia.fecha_fin
                )}`
              : `Actualidad`}
          </div>
        </div>
        <div className="col-span-2 lg:col-span-3">
          <p className="mb-4 font-bold">Descripción:</p>
          <div className="p-3 border border-opacity-30 rounded-md border-gray-600 bg-body mb-5 min-h-32">
            <p>{experiencia.descripcion}</p>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getExperienciasByFilter("alumno", userInfo.id);
  }, []);

  return (
    <article className="xl:min-h-[550px]">
      <h2 className="mb-2 font-bold text-sm lg:text-xl">
        Experiencias Laborales
      </h2>
      <hr />
      <div className="my-4 flex flex-col gap-2 xl:gap-5">
        {experiencias.map((experiencia, index) => (
          <div className="flex justify-between" key={index}>
            <div key={index} className="flex items-start justify-start  gap-3">
              <div className="my-2 p-2 xl:p-4 text-3xl bg-orange-500 text-orange-400 bg-opacity-10 rounded-sm">
                <BsFillBriefcaseFill />
              </div>
              <div className="">
                <p className="my-1 font-bold text-primary text-base lg:text-lg">
                  {experiencia.empresa}
                </p>
                <p className="font-semibold my-1 text-sm">
                  {experiencia.cargo}
                </p>
                <p className="my-1 text-bodyDark2 text-sm">
                  {experiencia.fecha_fin
                    ? `${formatDate(experiencia.fecha_inicio)} - ${formatDate(
                        experiencia.fecha_fin
                      )}`
                    : `${formatDate(experiencia.fecha_inicio)} - Actualidad`}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
              <button
                onClick={() => handleOpenModal(experiencia)}
                className="text-white text-center bg-secondary rounded-full p-2 flex items-center  md:px-3 md:rounded-md hover:shadow-md hover:shadow-emerald-400 transition duration-200"
              >
                <span className="hidden md:block">Ver detalle</span>
                <div className="md:hidden">
                  <MdRemoveRedEye />
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
