import { DetailExperiencia } from "./DetailExperiencia";
import { CardUser } from "../../components/CardUser";
import { useModal } from "../../../shared/hooks/useModal";
import { FormExperiencia } from "./FormExperiencia";
import { useExperiencias } from "../../../hooks/useExperiencias";
import { showAlert } from "../../../utils/showAlert";

export const ListExperiencias = ({ experiencias, setRefresh }) => {
  const { openModal } = useModal();
  const { deleteExperiencia } = useExperiencias();

  const handleDelete = (id) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteExperiencia(id);
        setRefresh((prev) => !prev);
      },
    });
  };
  const handleOpenModal = (experiencia) => {
    openModal(
      <FormExperiencia experiencia={experiencia} setRefresh={setRefresh} />
    );
  };
  return (
    <>
      {experiencias.map((experiencia, index) => (
        <CardUser key={index}>
          <div className="xl:flex xl:justify-between xl:items-center">
            <div className="min-h-[100px]">
              <DetailExperiencia experiencia={experiencia} />
            </div>
            <div className="flex gap-2 my-3 xl:my-0 xl:flex-col xl:gap-5">
              <div className="w-full xl:min-w-32">
                <button
                  className="w-full bg-secondary text-white text-sm p-1 py-2 xl:py-3 hover:bg-lime-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleOpenModal(experiencia)}
                >
                  Editar
                </button>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-third text-white text-sm p-1 py-2 xl:py-3 hover:bg-rose-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleDelete(experiencia.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </CardUser>
      ))}
    </>
  );
};
