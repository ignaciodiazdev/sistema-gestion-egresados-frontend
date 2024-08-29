import { useEffect, useState } from "react";
import { useCertificados } from "../../../hooks/useCertificados";
import { useAuth } from "../../../auth/hooks/useAuth";
import { ListCertificados } from "../../components/certificados/ListCertificados";
import { useModal } from "../../../shared/hooks/useModal";
import { FormCertificado } from "../../components/certificados/FormCertificado";

export const CertificadosPage = () => {
  const { certificados, getCertificadosByFilter } = useCertificados();
  const {
    auth: { userInfo },
  } = useAuth();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    getCertificadosByFilter("alumno", userInfo.id);
    console.log("Volviendo a Renderizar");
  }, [refresh]);

  //Para registrar
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<FormCertificado certificado={null} setRefresh={setRefresh} />);
  };

  return (
    <section>
      <div className="flex items-center justify-between">
        <h2 className="mb-2 font-bold text-xl lg:text-2xl">Mis Certificados</h2>
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
        <ListCertificados certificados={certificados} setRefresh={setRefresh} />
      </div>
    </section>
  );
};
