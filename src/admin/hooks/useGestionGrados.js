import { useState } from "react";
import {
  deleteApiGestionGradoById,
  getApiGestionGradoById,
  getApiGestionGrados,
  postApiGestionGrados,
  updateApiGestionGrados,
} from "../api/gestionGradosApi";

export const useGestionGrados = () => {
  const [gestionGrados, setGestionGrados] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getGestionGrados = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiGestionGrados();
      setGestionGrados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getGestionGradoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiGestionGradoById(id);
      setGestionGrados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateGestionGrado = async (id, gestionGrado) => {
    const response = await updateApiGestionGrados(id, gestionGrado);
    return response;
  };
  const postGestionGrado = async (gestionGrado) => {
    await postApiGestionGrados(gestionGrado);
  };
  const deleteGestionGrado = async (id) => {
    const response = await deleteApiGestionGradoById(id);
    setGestionGrados((prevGestionGrados) =>
      prevGestionGrados.filter((gestionGrado) => gestionGrado.id !== id)
    );
    return response;
  };

  return {
    gestionGrados,
    loading,
    error,
    getGestionGrados,
    getGestionGradoById,
    updateGestionGrado,
    postGestionGrado,
    deleteGestionGrado,
  };
};
