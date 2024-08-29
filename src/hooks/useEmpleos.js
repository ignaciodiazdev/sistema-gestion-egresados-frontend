import { useState } from "react";
import {
  deleteApiEmpleoById,
  getApiEmpleoById,
  getApiEmpleos,
  getApiEmpleosByFilter,
  postApiEmpleos,
  updateApiEmpleos,
} from "../api/empleosApi";

export const useEmpleos = () => {
  const [empleos, setEmpleos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getEmpleos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEmpleos();
      setEmpleos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getEmpleoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEmpleoById(id);
      setEmpleos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateEmpleo = async (id, empleo) => {
    const response = await updateApiEmpleos(id, empleo);
    return response;
  };
  const postEmpleo = async (empleo) => {
    await postApiEmpleos(empleo);
  };
  const deleteEmpleo = async (id) => {
    const response = await deleteApiEmpleoById(id);
    setEmpleos((prevEmpleos) =>
      prevEmpleos.filter((empleo) => empleo.id !== id)
    );
    return response;
  };
  const getEmpleosByFilter = async (propiedad, valor) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiEmpleosByFilter(propiedad, valor);
      setEmpleos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    empleos,
    loading,
    error,
    getEmpleos,
    getEmpleoById,
    getEmpleosByFilter,
    updateEmpleo,
    postEmpleo,
    deleteEmpleo,
  };
};
