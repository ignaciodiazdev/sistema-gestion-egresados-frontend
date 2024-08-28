import { createContext, useState, useEffect } from "react";
import {
  setTokenStorage,
  getTokenStorage,
  removeTokenStorage,
} from "../storage/token";
import { useUser } from "../hooks/useUser";

export const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(undefined);
  const { getMe, getMeAlumno } = useUser();
  useEffect(() => {
    (async () => {
      //Codigo para desloguear al usuario si el auth es null
      const token = getTokenStorage();
      if (token) {
        const me = await getMe(token);
        const userRole = me.is_staff;
        let userInfo;
        if (userRole === true) {
          const { first_name: nombre, last_name: apellido_paterno } = me;
          userInfo = { nombre, apellido_paterno };
        } else if (userRole === false) {
          // userInfo = await getAlumnoInfo(token);
          userInfo = await getMeAlumno(token);
        }

        setAuth({ token, me, userInfo });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  const login = async (token) => {
    setTokenStorage(token);
    const me = await getMe(token);
    const userRole = me.is_staff; // Asumimos que 'role' viene en la respuesta de getMe

    let userInfo;
    if (userRole === true) {
      const { first_name: nombre, last_name: apellido_paterno } = me;
      userInfo = { nombre, apellido_paterno };
    } else if (userRole === false) {
      // userInfo = await getAlumnoInfo(token);
      userInfo = await getMeAlumno(token);
    }
    setAuth({ token, me, userInfo });
  };
  const logout = () => {
    if (auth) {
      removeTokenStorage();
      setAuth(null);
    }
  };
  const valueContext = {
    auth,
    login,
    logout,
  };

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};
