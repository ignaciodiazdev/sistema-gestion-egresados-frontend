import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser, FaSearch } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { useAuth } from "../../auth/hooks/useAuth";
import { Input } from "./Input";

export const Header = ({ toggleSidebar }) => {
  const { logout, auth } = useAuth();
  const {
    me,
    userInfo: { nombre, apellido_paterno, apellido_materno },
  } = auth;
  let fullName;
  if (me.is_staff) {
    fullName = `${nombre} ${apellido_paterno}`;
  } else {
    fullName = `${nombre} ${apellido_paterno} ${apellido_materno}`;
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sticky top-0 right-0 bg-white shadow-sm h-20 flex items-center justify-between px-4 py-4 md:px-6 2xl:px-11">
      <div className="flex gap-3">
        <button
          className="px-2 py-1 shadow-sm text-gray-800 bg-white rounded-sm lg:hidden border text-2xl"
          onClick={toggleSidebar}
        >
          <GiHamburgerMenu />
        </button>
        <div className="hidden sm:block">
          <div className="block rounded-[1rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 hover:border-gray-300 bg-gray-100 w-[300px]">
            <div className="flex items-center gap-3">
              <span className="text-bodyDark2">
                <FaSearch />
              </span>
              <span className="text-bodyDark2">Búsqueda...</span>
            </div>
          </div>
        </div>
      </div>
      <div className="relative cursor-pointer" onClick={toggleDropdown}>
        <div className="flex items-center gap-4">
          <span className="text-right lg:block">
            <span className="block text-[0.8rem] font-semibold text-black truncate max-w-28 sm:max-w-full">
              {fullName}
            </span>
            <span className="block text-xs font-medium text-black2">
              {me.is_staff === true ? "Administrador" : "Egresado"}
            </span>
          </span>

          <span className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://demo.tailadmin.com/src/images/user/user-01.png"
              alt="User"
              className="h-full w-full object-cover"
            />
          </span>
          <button className="flex items-center focus:outline-none">
            <IoIosArrowDown
              className={`w-4 h-4 transform transition-transform text-black2 ${
                isDropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-[3.51rem] mt-2 w-64 bg-white border border-gray-200 rounded-sm shadow-lg z-10">
              <ul className="flex flex-col gap-5 px-6 py-7 border-b">
                <li className="block text-black2 font-semibold">
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-primary text-sm lg:text-base duration-300 ease-in-out"
                  >
                    <FaRegUser /> Mi Perfil
                  </a>
                </li>
                <li className="block text-black2 font-semibold">
                  <a
                    href="#"
                    className="flex items-center gap-3 hover:text-primary text-sm lg:text-base duration-300 ease-in-out"
                  >
                    <SlSettings /> Configuración
                  </a>
                </li>
              </ul>
              <button
                className="flex items-center gap-3 px-6 py-4 text-sm font-medium text-black2 duration-300 ease-in-out hover:text-primary lg:text-base"
                onClick={logout}
              >
                <TbLogout2 />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
