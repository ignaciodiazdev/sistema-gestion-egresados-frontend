import React from "react";
import { HiNewspaper } from "react-icons/hi";
import { formatDate } from "../../utils/formatear-fecha";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const DetailCertificado = ({ certificado }) => {
  return (
    <div className="flex items-start justify-start  gap-3">
      <div className="my-2 p-2 xl:p-4 text-3xl bg-green-400 text-green-600 bg-opacity-40 rounded-sm">
        <HiNewspaper />
      </div>
      <div>
        <p className="my-1 font-bold text-primary text-base lg:text-base">
          {certificado.nombre}
        </p>
        <p className="font-semibold my-1 text-sm">
          {certificado.entidad_emisora}
        </p>
        <p className="my-1 text-bodyDark2 text-sm">
          Expedición: {formatDate(certificado.fecha_emision)}
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
  );
};
