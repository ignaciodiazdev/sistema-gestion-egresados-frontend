import { FaLocationArrow } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";
import { LiaBusinessTimeSolid } from "react-icons/lia";
import { MdDateRange } from "react-icons/md";
import { RiMapPinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const DetailEmpleo = ({ empleo }) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-start justify-start gap-3">
      <div className="flex flex-col md:flex-row md:justify-between items-start justify-start gap-3 xl:gap-4">
        <div className="hidden md:block my-2 p-2 xl:p-4 text-3xl bg-yellow-200 text-yellow-600 bg-opacity-40 rounded-sm">
          <LiaBusinessTimeSolid />
        </div>
        <div>
          <p className="my-1 font-bold text-primary text-base lg:text-base">
            {empleo.titulo}
          </p>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
            <p className="font-bold text-black text-[13px]">{empleo.empresa}</p>
            <span className="hidden sm:block text-bodyDark">{" - "}</span>
            <span className="text-bodyDark2 text-[13px] ">
              Publicado el {empleo.fecha_publicacion}
            </span>
          </div>
          <div className="text-[13px] md:max-w-md lg:max-w-lg xl:max-w-2xl text-justify">
            <p>{empleo.descripcion}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-[13px] gap-1 xl:gap-2 w-full md:w-[200px] ">
        <div className="flex items-center gap-2">
          <span>
            <IoBusinessOutline />
          </span>
          <p>{empleo.modalidad}</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <RiMapPinLine />
          </span>
          <p>{empleo.ubicacion}</p>
        </div>
        <div className="flex items-center gap-2">
          <span>
            <MdDateRange />
          </span>
          <p>Exp: {empleo.fecha_expiracion}</p>
        </div>
        <div></div>
        <div className="col-span-2">
          <Link
            to={empleo.url}
            target="_blank"
            className="flex items-center justify-center min-w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90 gap-2 "
          >
            <FaLocationArrow /> Ir al sitio web
          </Link>
        </div>
      </div>
    </div>
  );
};
