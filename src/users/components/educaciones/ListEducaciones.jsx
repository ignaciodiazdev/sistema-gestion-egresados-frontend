import { DetailEducacion } from "./DetailEducacion";
import { CardUser } from "../../components/CardUser";
import { useModal } from "../../../shared/hooks/useModal";
import { FormEducacion } from "./FormEducacion";
import { useEducaciones } from "../../../hooks/useEducaciones";
import { showAlert } from "../../../utils/showAlert";

export const ListEducaciones = ({ educaciones, setRefresh }) => {
  const { openModal } = useModal();
  const { deleteEducacion } = useEducaciones();

  const handleDelete = (id) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteEducacion(id);
        setRefresh((prev) => !prev);
      },
    });
  };
  const handleOpenModal = (educacion) => {
    openModal(<FormEducacion educacion={educacion} setRefresh={setRefresh} />);
  };
  return (
    <>
      {educaciones.map((educacion, index) => (
        <CardUser key={index}>
          <div className="xl:flex xl:justify-between xl:items-center">
            <div className="min-h-[100px]">
              <DetailEducacion educacion={educacion} />
            </div>
            <div className="flex gap-2 my-3 xl:my-0 xl:flex-col xl:gap-5">
              <div className="w-full xl:min-w-32">
                <button
                  className="w-full bg-secondary text-white text-sm p-1 py-2 xl:py-3 hover:bg-lime-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleOpenModal(educacion)}
                >
                  Editar
                </button>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-third text-white text-sm p-1 py-2 xl:py-3 hover:bg-rose-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleDelete(educacion.id)}
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
