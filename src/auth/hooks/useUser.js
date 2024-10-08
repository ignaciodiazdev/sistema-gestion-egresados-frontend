import { getMeAlumnoApi, getMeApi } from "../api/user";
import { useAuth } from "./useAuth";

export function useUser() {
  const { auth } = useAuth();

  const getMe = async (token) => {
    try {
      const response = await getMeApi(token);
      return response;
    } catch (error) {
      throw error;
    }
  };
  const getMeAlumno = async (token) => {
    try {
      const response = await getMeAlumnoApi(token);
      return response;
    } catch (error) {
      throw error;
    }
  };
  return {
    getMe,
    getMeAlumno,
  };
}
