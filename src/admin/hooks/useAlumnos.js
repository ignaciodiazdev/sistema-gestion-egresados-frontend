import { useState } from "react";
import {
  deleteApiAlumnoById,
  getApiAlumnoById,
  getApiAlumnos,
  postApiAlumnos,
  updateApiAlumnos,
} from "../api/alumnosApi";

export const useAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getAlumnos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiAlumnos();
      setAlumnos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getAlumnoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiAlumnoById(id);
      setAlumnos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateAlumno = async (id, alumno) => {
    const response = await updateApiAlumnos(id, alumno);
    return response;
  };
  const postAlumno = async (alumno) => {
    await postApiAlumnos(alumno);
  };
  const deleteAlumno = async (id) => {
    const response = await deleteApiAlumnoById(id);
    setAlumnos((prevAlumnos) =>
      prevAlumnos.filter((alumno) => alumno.id !== id)
    );
    return response;
  };

  return {
    alumnos,
    loading,
    error,
    getAlumnos,
    getAlumnoById,
    updateAlumno,
    postAlumno,
    deleteAlumno,
  };
};
