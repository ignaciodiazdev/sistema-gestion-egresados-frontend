import { useState } from "react";
import {
  deleteApiPeriodoById,
  getApiPeriodoById,
  getApiPeriodos,
  postApiPeriodos,
  updateApiPeriodos,
} from "../api/periodosApi";

export const usePeriodos = () => {
  const [periodos, setPeriodos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getPeriodos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiPeriodos();
      setPeriodos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getPeriodoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiPeriodoById(id);
      setPeriodos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updatePeriodo = async (id, periodo) => {
    const response = await updateApiPeriodos(id, periodo);
    return response;
  };
  const postPeriodo = async (periodo) => {
    await postApiPeriodos(periodo);
  };
  const deletePeriodo = async (id) => {
    const response = await deleteApiPeriodoById(id);
    setPeriodos((prevPeriodos) =>
      prevPeriodos.filter((periodo) => periodo.id !== id)
    );
    return response;
  };

  return {
    periodos,
    loading,
    error,
    getPeriodos,
    getPeriodoById,
    updatePeriodo,
    postPeriodo,
    deletePeriodo,
  };
};
