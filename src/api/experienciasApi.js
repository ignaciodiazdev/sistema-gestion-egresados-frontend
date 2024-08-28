import { BASE_API } from "../utils/constants";

export const getApiExperiencias = async () => {
  const url = `${BASE_API}/experiencias`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las experiencias");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiExperiencias = async (id, experiencia) => {
  const url = `${BASE_API}/experiencias/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experiencia),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la experiencia");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiExperiencias = async (experiencia) => {
  const url = `${BASE_API}/experiencias/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(experiencia),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la experiencia");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiExperienciaById = async (id) => {
  const url = `${BASE_API}/experiencias/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la experiencia seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiExperienciaById = async (id) => {
  const url = `${BASE_API}/experiencias/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la experiencia");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApiExperienciasByFilter = async (propiedad, valor) => {
  const url = `${BASE_API}/experiencias/?${propiedad}=${valor}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los alumnos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
