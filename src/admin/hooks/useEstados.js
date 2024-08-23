import { useState } from "react";
import {
  deleteApiEstadoById,
  getApiEstadoById,
  getApiEstados,
  postApiEstados,
  updateApiEstados,
} from "../api/estadosApi";

export const useEstados = () => {
  const [estados, setEstados] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getEstados = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEstados();
      setEstados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getEstadoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEstadoById(id);
      setEstados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateEstado = async (id, estado) => {
    const response = await updateApiEstados(id, estado);
    return response;
  };
  const postEstado = async (estado) => {
    await postApiEstados(estado);
  };
  const deleteEstado = async (id) => {
    const response = await deleteApiEstadoById(id);
    setEstados((prevEstados) =>
      prevEstados.filter((estado) => estado.id !== id)
    );
    return response;
  };

  return {
    estados,
    loading,
    error,
    getEstados,
    getEstadoById,
    updateEstado,
    postEstado,
    deleteEstado,
  };
};
