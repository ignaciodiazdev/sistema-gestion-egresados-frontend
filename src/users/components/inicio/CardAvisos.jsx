import React from "react";
import { CardUser } from "../CardUser";
import { Link } from "react-router-dom";

export const CardAvisos = () => {
  return (
    <CardUser>
      <div className="xl:min-h-[600px]">
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Aviso: Bolsa de Trabajo</h2>
          <hr />
        </div>
        <div className="">
          <p className="text-sm p-2 bg-yellow-200 bg-opacity-10 rounded-md border-2 border-dashed border-yellow-400 mb-4 xl:mb-14">
            Ahora puedes visitar la sección de Bolsa de Trabajo para encontrar
            ofertas laborales!
          </p>
          <div className="hidden xl:block mb-14">
            <img src="/assets/svgs/job.svg" alt="" />
          </div>
          <div className="text-center w-full">
            <Link className="block bg-[#e90066] text-white font-bold py-2 rounded-2xl hover:bg-[#e90069df] hover:shadow-sm hover:shadow-red-600">
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </CardUser>
  );
};
