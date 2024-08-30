import { BASE_API } from "../../utils/constants";

export const getApiUsuarios = async () => {
  const url = `${BASE_API}/usuarios`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las usuarios");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiUsuarios = async (id, usuario) => {
  const url = `${BASE_API}/usuarios/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la usuario");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiUsuarios = async (usuario) => {
  const url = `${BASE_API}/usuarios/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la usuario");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiUsuarioById = async (id) => {
  const url = `${BASE_API}/usuarios/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la usuario seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiUsuarioById = async (id) => {
  const url = `${BASE_API}/usuarios/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la usuario");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
