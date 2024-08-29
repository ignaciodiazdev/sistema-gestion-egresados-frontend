import { DetailCertificado } from "../../components/DetailCertificado";
import { CardUser } from "../../components/CardUser";
import { useModal } from "../../../shared/hooks/useModal";
import { FormCertificado } from "./FormCertificado";
import { useCertificados } from "../../../hooks/useCertificados";
import { showAlert } from "../../../utils/showAlert";

export const ListCertificados = ({ certificados, setRefresh }) => {
  const { openModal } = useModal();
  const { deleteCertificado } = useCertificados();

  const handleDelete = (id) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteCertificado(id);
        setRefresh((prev) => !prev);
      },
    });
  };
  const handleOpenModal = (certificado) => {
    openModal(
      <FormCertificado certificado={certificado} setRefresh={setRefresh} />
    );
  };
  return (
    <>
      {certificados.map((certificado, index) => (
        <CardUser key={index}>
          <div className="xl:flex xl:justify-between xl:items-center">
            <div className="min-h-[130px]">
              <DetailCertificado certificado={certificado} />
            </div>
            <div className="flex gap-2 my-3 xl:my-0 xl:flex-col xl:gap-5">
              <div className="w-full xl:min-w-32">
                <button
                  className="w-full bg-secondary text-white text-sm p-1 py-2 xl:py-3 hover:bg-lime-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleOpenModal(certificado)}
                >
                  Editar
                </button>
              </div>
              <div className="w-full">
                <button
                  className="w-full bg-third text-white text-sm p-1 py-2 xl:py-3 hover:bg-rose-500 transition duration-300 ease-in-out rounded-md"
                  onClick={() => handleDelete(certificado.id)}
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
