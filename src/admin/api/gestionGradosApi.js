import { BASE_API } from "../../utils/constants";

export const getApiGestionGrados = async () => {
  const url = `${BASE_API}/alumnos-grados`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los alumnos-grados");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiGestionGrados = async (id, gestion_grado) => {
  const url = `${BASE_API}/alumnos-grados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gestion_grado),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el alumnos-grados");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiGestionGrados = async (gestion_grado) => {
  const url = `${BASE_API}/alumnos-grados/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gestion_grado),
    });
    if (!response.ok) {
      throw new Error("Error al registrar alumnos-grados");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiGestionGradoById = async (id) => {
  const url = `${BASE_API}/alumnos-grados/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener alumnos-grados seleccionado");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiGestionGradoById = async (id) => {
  const url = `${BASE_API}/alumnos-grados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el alumnos-grados");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
