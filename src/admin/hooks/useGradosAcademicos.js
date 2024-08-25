import { useState } from "react";
import {
  deleteApiGradoAcademicoById,
  getApiGradoAcademicoById,
  getApiGradosAcademicos,
  postApiGradosAcademicos,
  updateApiGradosAcademicos,
} from "../api/gradosAcademicosApi";

export const useGradosAcademicos = () => {
  const [gradosAcademicos, setGradosAcademicos] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getGradosAcademicos = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiGradosAcademicos();
      setGradosAcademicos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getGradoAcademicoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiGradoAcademicoById(id);
      setGradosAcademicos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateGradoAcademico = async (id, grado_academico) => {
    const response = await updateApiGradosAcademicos(id, grado_academico);
    return response;
  };
  const postGradoAcademico = async (grado_academico) => {
    await postApiGradosAcademicos(grado_academico);
  };
  const deleteGradoAcademico = async (id) => {
    const response = await deleteApiGradoAcademicoById(id);
    setGradosAcademicos((prevGradosAcademicos) =>
      prevGradosAcademicos.filter(
        (grado_academico) => grado_academico.id !== id
      )
    );
    return response;
  };

  return {
    gradosAcademicos,
    loading,
    error,
    getGradosAcademicos,
    getGradoAcademicoById,
    updateGradoAcademico,
    postGradoAcademico,
    deleteGradoAcademico,
  };
};
