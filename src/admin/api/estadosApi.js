import { BASE_API } from "../../utils/constants";

export const getApiEstados = async () => {
  const url = `${BASE_API}/estados`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los estados");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiEstados = async (id, estado) => {
  const url = `${BASE_API}/estados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estado),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el estado");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiEstados = async (estado) => {
  const url = `${BASE_API}/estados/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(estado),
    });
    if (!response.ok) {
      throw new Error("Error al registrar el estado");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiEstadoById = async (id) => {
  const url = `${BASE_API}/estados/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener el estado seleccionado");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiEstadoById = async (id) => {
  const url = `${BASE_API}/estados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el estado");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
