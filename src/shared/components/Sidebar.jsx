import { FaRegCalendarAlt, FaRegBookmark, FaArrowLeft } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";
import { RiUserShared2Line } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { BsBook } from "react-icons/bs";
import { MenuList } from "./MenuList";
// import adminRoutes from "../../routes/adminRoutes";
// import { Link, useLocation } from "react-router-dom";

export const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const location = useLocation();
  // const filteredRoutes = adminRoutes.filter(
  //   (route) => route.in_sidebar === true
  // );

  return (
    <aside
      className={`fixed inset-y-0 left-0 w-72 z-20 bg-dark text-bodyDark transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}
    >
      <div className="p-6 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <img src="/assets/svgs/logo.svg" alt="Logo" className="w-7" />
          <span className="text-2xl lg:text-3xl font-semibold">
            Universidad
          </span>
        </div>
        <button
          className="p-2 text-bodyDark2 bg-transparent lg:hidden flex items-center"
          onClick={toggleSidebar}
        >
          <FaArrowLeft />
        </button>
      </div>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <===== MENU GROUP =====> */}
          <MenuList />
        </nav>
      </div>
    </aside>
  );
};
