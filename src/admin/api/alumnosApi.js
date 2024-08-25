import { BASE_API } from "../../utils/constants";

export const getApiAlumnos = async () => {
  const url = `${BASE_API}/alumnos`;
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

export const updateApiAlumnos = async (id, alumno) => {
  const url = `${BASE_API}/alumnos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumno),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar el alumno");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiAlumnos = async (alumno) => {
  const url = `${BASE_API}/alumnos/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(alumno),
    });
    if (!response.ok) {
      throw new Error("Error al registrar el alumno");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiAlumnoById = async (id) => {
  const url = `${BASE_API}/alumnos/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener el alumno seleccionado");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiAlumnoById = async (id) => {
  const url = `${BASE_API}/alumnos/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar el alumno");
    }
    return response;
  } catch (error) {
    throw error;
  }
};
