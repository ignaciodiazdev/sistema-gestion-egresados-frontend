import { useEffect, useState } from "react";
import { useEducaciones } from "../../../hooks/useEducaciones";
import { useAuth } from "../../../auth/hooks/useAuth";
import { ListEducaciones } from "../../components/educaciones/ListEducaciones";
import { useModal } from "../../../shared/hooks/useModal";
import { FormEducacion } from "../../components/educaciones/FormEducacion";

export const EducacionesPage = () => {
  const { educaciones, getEducacionesByFilter } = useEducaciones();
  const {
    auth: { userInfo },
  } = useAuth();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getEducacionesByFilter("alumno", userInfo.id);
    console.log("Volviendo a Renderizar");
  }, [refresh]);

  //Para registrar
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<FormEducacion educacion={null} setRefresh={setRefresh} />);
  };

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="mb-2 font-bold text-xl lg:text-2xl">
          Mis Educaciones Laborales
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
        <ListEducaciones educaciones={educaciones} setRefresh={setRefresh} />
      </div>
    </section>
  );
};
