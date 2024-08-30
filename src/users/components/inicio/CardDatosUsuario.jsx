import { useModal } from "../../../shared/hooks/useModal";
import { CardUser } from "../CardUser";
import { BiUser } from "react-icons/bi";

export const CardDatoUsuarioAll = ({ userInfo }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3 mb-3">
        <div className="w-[130px] h-[130px] p-2 bg-gradient-to-tr from-slate-100 to-indigo-100 rounded-full">
          <img
            src="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
            alt="Imagen de Perfil de Usuario"
            className="w-full rounded-full"
          />
        </div>
        <div className="text-center">
          <span className="lg:text-base font-bold text-rose-500">
            {userInfo.nombre} {userInfo.apellido_paterno}{" "}
            {userInfo.apellido_materno}
          </span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold">Datos Personales</span>
          <span className="text-base">
            <BiUser />
          </span>
        </div>
        <hr />
      </div>

      <div>
        <div className="flex justify-between text-sm mt-3 mb-2">
          <span className="font-bold">Nacionalidad:</span>
          <span>Perú</span>
        </div>
      </div>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold">Carrera:</span>
          <span className="truncate">{userInfo.carrera_data.nombre}</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm mb-2">
          <span className="font-bold">Estado Civil:</span>
          <span>Soltero/a</span>
        </div>
      </div>
      <div>
        <div className="flex justify-between text-sm  mb-2">
          <span className="font-bold">Documento:</span>
          <span>{userInfo.dni}</span>
        </div>
      </div>
    </>
  );
};
export const CardDatoUsuarioShort = ({ userInfo }) => {
  return (
    <>
      <div className="w-[60px] h-[60px]  p-1 bg-gradient-to-tr from-slate-100 to-indigo-100 rounded-full">
        <img
          src="https://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
          alt="Imagen de Perfil de Usuario"
          className="w-full rounded-full "
        />
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-sm lg:text-base">
          {" "}
          {userInfo.nombre} {userInfo.apellido_paterno}{" "}
          {userInfo.apellido_materno}
        </span>
        <span className="text-[12px] text-bodyDark2">
          Ver datos personales y contacto
        </span>
      </div>
    </>
  );
};

export const CardDatosUsuario = ({ userInfo }) => {
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<CardDatoUsuarioAll userInfo={userInfo} />);
  };
  return (
    <CardUser>
      <div className="hidden xl:flex xl:flex-col">
        <CardDatoUsuarioAll userInfo={userInfo} />
      </div>
      <div
        className="flex items-center gap-4 xl:hidden"
        onClick={handleOpenModal}
      >
        <CardDatoUsuarioShort userInfo={userInfo} />
      </div>
    </CardUser>
  );
};
