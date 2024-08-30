import { CardUser } from "../CardUser";
import { Link } from "react-router-dom";

import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { BsHouseDoor } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaRegBookmark } from "react-icons/fa";

export const CardContactoUsuarioContent = ({ userInfo }) => {
  return (
    <>
      <div>
        <div>
          <div className="flex justify-between items-center text-sm mb-2">
            <span className="font-bold">Datos de Contacto</span>
            <span className="text-base">
              <FaRegBookmark />
            </span>
          </div>
          <hr />
        </div>
        <div>
          <div className="flex gap-4 text-sm mt-3 mb-4">
            <span className="font-bold text-primary text-xl">
              <FiPhoneCall />
            </span>
            <span>{userInfo.telefono}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4 text-sm mb-4">
            <span className="font-bold text-primary text-xl">
              <MdOutlineMailOutline />
            </span>
            <span className="truncate">{userInfo.correo}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4 text-sm mb-4">
            <span className="font-bold text-primary text-xl">
              <BsHouseDoor />
            </span>
            <span className="truncate">{userInfo.direccion}</span>
          </div>
        </div>
        <div>
          <div className="flex gap-4 text-sm mb-4">
            <span className="font-bold text-primary text-xl">
              <CiLinkedin />
            </span>
            <Link
              to={userInfo.linkedin || ""}
              target="_blank"
              className="hover:text-blue hover:scale-105 hover:underline transition-all"
            >
              Linkedin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export const CardContactoUsuario = ({ userInfo }) => {
  console.log(userInfo);
  return (
    <CardUser>
      <CardContactoUsuarioContent userInfo={userInfo} />
    </CardUser>
  );
};
