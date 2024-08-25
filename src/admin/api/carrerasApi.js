import { BASE_API } from "../../utils/constants";

export const getApiCarreras = async () => {
  const url = `${BASE_API}/carreras`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las carreras");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiCarreras = async (id, carrera) => {
  const url = `${BASE_API}/carreras/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carrera),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la carrera");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiCarreras = async (carrera) => {
  const url = `${BASE_API}/carreras/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(carrera),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la carrera");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiCarreraById = async (id) => {
  const url = `${BASE_API}/carreras/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la carrera seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiCarreraById = async (id) => {
  const url = `${BASE_API}/carreras/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la carrera");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
