import { useState } from "react";
import {
  deleteApiCertificadoById,
  getApiCertificadoById,
  getApiCertificados,
  getApiCertificadosByFilter,
  postApiCertificados,
  updateApiCertificados,
} from "../api/certificadosApi";

export const useCertificados = () => {
  const [certificados, setCertificados] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getCertificados = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiCertificados();
      setCertificados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getCertificadoById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiCertificadoById(id);
      setCertificados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateCertificado = async (id, certificado) => {
    const response = await updateApiCertificados(id, certificado);
    return response;
  };
  const postCertificado = async (certificado) => {
    await postApiCertificados(certificado);
  };
  const deleteCertificado = async (id) => {
    const response = await deleteApiCertificadoById(id);
    setCertificados((prevCertificados) =>
      prevCertificados.filter((certificado) => certificado.id !== id)
    );
    return response;
  };
  const getCertificadosByFilter = async (propiedad, valor) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiCertificadosByFilter(propiedad, valor);
      setCertificados(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    certificados,
    loading,
    error,
    getCertificados,
    getCertificadoById,
    getCertificadosByFilter,
    updateCertificado,
    postCertificado,
    deleteCertificado,
  };
};
