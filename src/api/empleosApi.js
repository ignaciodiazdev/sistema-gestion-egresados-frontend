import { BASE_API } from "../utils/constants";

export const getApiEmpleos = async () => {
  const url = `${BASE_API}/empleos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las empleos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiEmpleos = async (id, empleo) => {
  const url = `${BASE_API}/empleos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleo),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la empleo");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiEmpleos = async (empleo) => {
  const url = `${BASE_API}/empleos/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(empleo),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la empleo");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiEmpleoById = async (id) => {
  const url = `${BASE_API}/empleos/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la empleo seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiEmpleoById = async (id) => {
  const url = `${BASE_API}/empleos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la empleo");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApiEmpleosByFilter = async (propiedad, valor) => {
  const url = `${BASE_API}/empleos/?${propiedad}=${valor}`;
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
