import { BASE_API } from "../utils/constants";

export const getApiCertificados = async () => {
  const url = `${BASE_API}/certificados`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener las certificados");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateApiCertificados = async (id, certificado) => {
  const url = `${BASE_API}/certificados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(certificado),
    });
    if (!response.ok) {
      throw new Error("Error al actualizar la certificado");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const postApiCertificados = async (certificado) => {
  const url = `${BASE_API}/certificados/`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(certificado),
    });
    if (!response.ok) {
      throw new Error("Error al registrar la certificado");
    }
  } catch (error) {
    throw error;
  }
};

export const getApiCertificadoById = async (id) => {
  const url = `${BASE_API}/certificados/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error al obtener la certificado seleccionada");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteApiCertificadoById = async (id) => {
  const url = `${BASE_API}/certificados/${id}/`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Error al eliminar la certificado");
    }
    return response;
  } catch (error) {
    throw error;
  }
};

export const getApiCertificadosByFilter = async (propiedad, valor) => {
  const url = `${BASE_API}/certificados/?${propiedad}=${valor}`;
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
