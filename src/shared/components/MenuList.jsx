import { useAuth } from "../../auth/hooks/useAuth";
import { adminRoutes, userRoutes } from "../../routes/adminRoutes";
import { Link, useLocation } from "react-router-dom";

export const MenuList = () => {
  const location = useLocation();
  const {
    auth: { me },
  } = useAuth();

  let filteredRoutes;
  if (me?.is_staff) {
    filteredRoutes = adminRoutes.filter((route) => route.in_sidebar === true);
  } else {
    filteredRoutes = userRoutes.filter((route) => route.in_sidebar === true);
  }
  console.log(me?.is_staff);

  return (
    <div>
      <h3 className="mb-4 ml-4 text-sm font-medium text-bodyDark2">MENU</h3>
      <ul className="mb-6 flex flex-col gap-2">
        {filteredRoutes.map((route, index) => {
          const isActive = location.pathname.startsWith(route.path);
          return (
            <li key={index} className={isActive ? "bg-grayDark" : ""}>
              <Link
                to={route.path}
                className="group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark duration-300 ease-in-out hover:bg-grayDark"
              >
                {route.icon} {route.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
