import { useState } from "react";
import {
  deleteApiCarreraById,
  getApiCarreraById,
  getApiCarreras,
  postApiCarreras,
  updateApiCarreras,
} from "../api/carrerasApi";

export const useCarreras = () => {
  const [carreras, setCarreras] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getCarreras = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiCarreras();
      setCarreras(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getCarreraById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiCarreraById(id);
      setCarreras(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateCarrera = async (id, carrera) => {
    const response = await updateApiCarreras(id, carrera);
    return response;
  };
  const postCarrera = async (carrera) => {
    await postApiCarreras(carrera);
  };
  const deleteCarrera = async (id) => {
    const response = await deleteApiCarreraById(id);
    setCarreras((prevCarreras) =>
      prevCarreras.filter((carrera) => carrera.id !== id)
    );
    return response;
  };

  return {
    carreras,
    loading,
    error,
    getCarreras,
    getCarreraById,
    updateCarrera,
    postCarrera,
    deleteCarrera,
  };
};
