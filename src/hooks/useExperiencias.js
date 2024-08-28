import { useState } from "react";
import {
  deleteApiExperienciaById,
  getApiExperienciaById,
  getApiExperiencias,
  getApiExperienciasByFilter,
  postApiExperiencias,
  updateApiExperiencias,
} from "../api/experienciasApi";

export const useExperiencias = () => {
  const [experiencias, setExperiencias] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getExperiencias = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiExperiencias();
      setExperiencias(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getExperienciaById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiExperienciaById(id);
      setExperiencias(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateExperiencia = async (id, experiencia) => {
    const response = await updateApiExperiencias(id, experiencia);
    return response;
  };
  const postExperiencia = async (experiencia) => {
    await postApiExperiencias(experiencia);
  };
  const deleteExperiencia = async (id) => {
    const response = await deleteApiExperienciaById(id);
    setExperiencias((prevExperiencias) =>
      prevExperiencias.filter((experiencia) => experiencia.id !== id)
    );
    return response;
  };
  const getExperienciasByFilter = async (propiedad, valor) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiExperienciasByFilter(propiedad, valor);
      setExperiencias(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    experiencias,
    loading,
    error,
    getExperiencias,
    getExperienciaById,
    getExperienciasByFilter,
    updateExperiencia,
    postExperiencia,
    deleteExperiencia,
  };
};
