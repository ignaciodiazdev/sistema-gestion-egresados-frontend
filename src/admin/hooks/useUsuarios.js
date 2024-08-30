import { useState } from "react";
import {
  deleteApiUsuarioById,
  getApiUsuarioById,
  getApiUsuarios,
  postApiUsuarios,
  updateApiUsuarios,
} from "../api/usuariosApi";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getUsuarios = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiUsuarios();
      setUsuarios(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const getUsuarioById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getApiUsuarioById(id);
      setUsuarios(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const updateUsuario = async (id, usuario) => {
    const response = await updateApiUsuarios(id, usuario);
    return response;
  };
  const postUsuario = async (usuario) => {
    await postApiUsuarios(usuario);
  };
  const deleteUsuario = async (id) => {
    const response = await deleteApiUsuarioById(id);
    setUsuarios((prevUsuarios) =>
      prevUsuarios.filter((usuario) => usuario.id !== id)
    );
    return response;
  };

  return {
    usuarios,
    loading,
    error,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    postUsuario,
    deleteUsuario,
  };
};
