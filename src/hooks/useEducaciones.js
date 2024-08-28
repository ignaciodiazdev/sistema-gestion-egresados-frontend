import { useState } from "react";
import {
  deleteApiEducacionById,
  getApiEducacionById,
  getApiEducaciones,
  getApiEducacionesByFilter,
  postApiEducaciones,
  updateApiEducaciones,
} from "../api/educacionesApi";

export const useEducaciones = () => {
  const [educaciones, setEducaciones] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getEducaciones = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEducaciones();
      setEducaciones(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getEducacionById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEducacionById(id);
      setEducaciones(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateEducacion = async (id, educacion) => {
    const response = await updateApiEducaciones(id, educacion);
    return response;
  };
  const postEducacion = async (educacion) => {
    await postApiEducaciones(educacion);
  };
  const deleteEducacion = async (id) => {
    const response = await deleteApiEducacionById(id);
    setEducaciones((prevEducaciones) =>
      prevEducaciones.filter((educacion) => educacion.id !== id)
    );
    return response;
  };
  const getEducacionesByFilter = async (propiedad, valor) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEducacionesByFilter(propiedad, valor);
      setEducaciones(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    educaciones,
    loading,
    error,
    getEducaciones,
    getEducacionById,
    getEducacionesByFilter,
    updateEducacion,
    postEducacion,
    deleteEducacion,
  };
};
