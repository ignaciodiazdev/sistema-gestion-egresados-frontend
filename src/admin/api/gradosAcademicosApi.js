import { BASE_API } from "../../utils/constants";

export const getApiGradosAcademicos = async () => {
  const url = `${BASE_API}/grados-academicos`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener los grados academicos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiGradosAcademicos = async (id, grado_academico) => {
  const url = `${BASE_API}/grados-academicos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(grado_academico),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el grado academico");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiGradosAcademicos = async (grado_academico) => {
  const url = `${BASE_API}/grados-academicos/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(grado_academico),
    });
    if (!response.ok) {
      throw new Error("Error al registrar el grado academico");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiGradoAcademicoById = async (id) => {
  const url = `${BASE_API}/grados-academicos/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener el grado academico seleccionado");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiGradoAcademicoById = async (id) => {
  const url = `${BASE_API}/grados-academicos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el grado academico");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
