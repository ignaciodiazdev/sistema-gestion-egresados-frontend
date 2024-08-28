import { BASE_API } from "../utils/constants";

export const getApiEducaciones = async () => {
  const url = `${BASE_API}/educaciones`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las educaciones");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiEducaciones = async (id, educacion) => {
  const url = `${BASE_API}/educaciones/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(educacion),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la educacion");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiEducaciones = async (educacion) => {
  const url = `${BASE_API}/educaciones/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(educacion),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la educacion");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiEducacionById = async (id) => {
  const url = `${BASE_API}/educaciones/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la educacion seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiEducacionById = async (id) => {
  const url = `${BASE_API}/educaciones/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la educacion");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApiEducacionesByFilter = async (propiedad, valor) => {
  const url = `${BASE_API}/educaciones/?${propiedad}=${valor}`;
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
