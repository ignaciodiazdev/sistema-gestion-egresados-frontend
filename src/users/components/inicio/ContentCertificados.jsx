import { useEffect } from "react";
import { useCertificados } from "../../../hooks/useCertificados";
import { useAuth } from "../../../auth/hooks/useAuth";
import { formatDate } from "../../../utils/formatear-fecha";
import { Link } from "react-router-dom";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { HiNewspaper } from "react-icons/hi";

export const ContentCertificados = () => {
  const { certificados, getCertificadosByFilter } = useCertificados();
  const {
    auth: { userInfo },
  } = useAuth();

  useEffect(() => {
    getCertificadosByFilter("alumno", userInfo.id);
  }, []);

  return (
    <article className="xl:min-h-[550px]">
      <h2 className="mb-2 font-bold text-sm lg:text-xl">Certificados</h2>
      <hr />
      <div className="my-4 flex flex-col gap-2 xl:gap-5">
        {certificados.map((certificado, index) => (
          <div key={index} className="flex items-start justify-start  gap-3">
            <div className="my-2 p-2 xl:p-4 text-3xl bg-green-400 text-green-600 bg-opacity-40 rounded-sm">
              <HiNewspaper />
            </div>
            <div>
              <p className="my-1 font-bold text-primary text-base lg:text-lg">
                {certificado.nombre}
              </p>
              <p className="font-semibold my-1  text-sm">
                {certificado.entidad_emisora}
              </p>
              <p className="my-1 text-bodyDark2 text-sm">
                Expedición:
                {formatDate(certificado.fecha_emision)}
              </p>
              <p className="my-1 text-bodyDark2">
                <Link
                  to={certificado.url}
                  target="_blank"
                  className="text-third underline underline-offset-4 text-sm flex items-center gap-1"
                >
                  <span>Ver credencial</span>
                  <IoArrowRedoCircleOutline />
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
