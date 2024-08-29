import { useEffect, useState } from "react";
import { useExperiencias } from "../../../hooks/useExperiencias";
import { useAuth } from "../../../auth/hooks/useAuth";
import { ListExperiencias } from "../../components/experiencias/ListExperiencias";
import { useModal } from "../../../shared/hooks/useModal";
import { FormExperiencia } from "../../components/experiencias/FormExperiencia";

export const ExperienciasPage = () => {
  const { experiencias, getExperienciasByFilter } = useExperiencias();
  const {
    auth: { userInfo },
  } = useAuth();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getExperienciasByFilter("alumno", userInfo.id);
    console.log("Volviendo a Renderizar");
  }, [refresh]);

  //Para registrar
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<FormExperiencia experiencia={null} setRefresh={setRefresh} />);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="mb-2 font-bold text-xl lg:text-2xl">
          Mis Experiencias Laborales
        </h2>
        <div className="flex justify-end my-2">
          <button
            className="w-full bg-primary text-white text-sm p-1 py-2 xl:py-3 transition duration-300 ease-in-out rounded-md sm:w-44"
            onClick={() => handleOpenModal()}
          >
            + Registrar
          </button>
        </div>
      </div>
      <hr />

      <div className="my-7 flex flex-col gap-2 md:grid sm:grid-cols-2 xl:gap-6">
        <ListExperiencias experiencias={experiencias} setRefresh={setRefresh} />
      </div>
    </section>
  );
};
