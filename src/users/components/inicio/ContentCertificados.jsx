import { useEffect } from "react";
import { useCertificados } from "../../../hooks/useCertificados";
import { useAuth } from "../../../auth/hooks/useAuth";
import { DetailCertificado } from "../DetailCertificado";

export const ContentCertificados = () => {
  const { certificados, getCertificadosByFilter } = useCertificados();
  const {
    auth: { userInfo },
  } = useAuth();

  useEffect(() => {
    getCertificadosByFilter("alumno", userInfo.id);
  }, []);

  return (
    <article>
      <h2 className="mb-2 font-bold text-sm lg:text-xl">Certificados</h2>
      <hr />
      <div className="my-4 flex flex-col gap-2 xl:gap-5">
        {certificados.map((certificado, index) => (
          <DetailCertificado key={index} certificado={certificado} />
        ))}
      </div>
    </article>
  );
};
