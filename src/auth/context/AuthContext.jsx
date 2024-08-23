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
  const { getMe } = useUser();
  useEffect(() => {
    (async () => {
      //Codigo para desloguear al usuario si el auth es null
      const token = getTokenStorage();
      if (token) {
        const me = await getMe(token);
        setAuth({ token, me });
      } else {
        setAuth(null);
      }
    })();
  }, []);

  console.log(auth);
  const login = async (token) => {
    setTokenStorage(token);
    const me = await getMe(token);
    setAuth({ token, me });
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
