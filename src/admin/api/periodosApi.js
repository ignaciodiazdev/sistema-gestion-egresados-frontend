import { BASE_API } from "../../utils/constants";

export const getApiPeriodos = async () => {
  const url = `${BASE_API}/periodos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los periodos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiPeriodos = async (id, periodo) => {
  const url = `${BASE_API}/periodos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(periodo),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el periodo");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiPeriodos = async (periodo) => {
  const url = `${BASE_API}/periodos/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(periodo),
    });
    if (!response.ok) {
      throw new Error("Error al registrar el periodo");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiPeriodoById = async (id) => {
  const url = `${BASE_API}/periodos/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener el periodo seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiPeriodoById = async (id) => {
  const url = `${BASE_API}/periodos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el periodo");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
