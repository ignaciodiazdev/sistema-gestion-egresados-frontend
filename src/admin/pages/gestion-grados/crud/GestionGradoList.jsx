import React, { useEffect, useState } from "react";
import { useGestionGrados } from "../../../hooks/useGestionGrados";
import { useNavigate } from "react-router-dom";
import { GestionGradoTable } from "../../../components/tables/GestionGradoTable";
import { ButtonItem, Input } from "../../../../shared/components";

export const GestionGradoList = () => {
  // const [gestionGrados, setData] = useState([]);
  const { gestionGrados, getGestionGrados, deleteGestionGrado } =
    useGestionGrados();
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(""); // For example, "alumno", "grado_academico", "codigo_modular", "fecha_registro"

  const navigate = useNavigate();
  const handleEdit = (row) => {
    navigate(`/gestion-grados/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    deleteGestionGrado(row["id"]);
  };
  const handleRegister = () => {
    navigate("/gestion-grados/registrar");
  };

  useEffect(() => {
    const fetchData = async () => {
      getGestionGrados();
      setFilteredData(gestionGrados); // Set initial filtered gestionGrados
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [searchTerm, selectedFilter, gestionGrados]);

  const filterData = () => {
    const lowercasedSearchTerm = searchTerm.toLowerCase();
    const newFilteredData = gestionGrados.filter((item) => {
      let matches = true;

      if (selectedFilter === "alumno_data_nombre") {
        matches = item.alumno_data.nombre
          .toLowerCase()
          .includes(lowercasedSearchTerm);
      } else if (selectedFilter === "grado_academico_data_nombre") {
        matches = item.grado_academico_data.nombre
          .toLowerCase()
          .includes(lowercasedSearchTerm);
      } else if (selectedFilter === "codigo_modular") {
        matches = item.codigo_modular
          .toLowerCase()
          .includes(lowercasedSearchTerm);
      } else if (selectedFilter === "fecha_registro") {
        matches = item.fecha_registro
          .toLowerCase()
          .includes(lowercasedSearchTerm);
      } else if (selectedFilter === "alumno_data_codigo") {
        matches = item.alumno_data.codigo
          .toLowerCase()
          .includes(lowercasedSearchTerm);
      }

      return matches;
    });

    setFilteredData(newFilteredData);
  };

  return (
    <>
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <div className="w-full lg:max-w-48">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
            >
              <option value="">Seleccionar filtro</option>
              <option value="alumno_data_codigo">Código</option>
              <option value="alumno_data_nombre">Nombre de alumno</option>
              <option value="grado_academico_data_nombre">
                Grado Académico
              </option>
              <option value="codigo_modular">Código Modular</option>
              <option value="fecha_registro">Fecha de Registro</option>
              {/* Agrega más opciones si es necesario */}
            </select>
          </div>
          <Input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-2/6 lg:w-2/12 min-w-40">
          <ButtonItem onClick={handleRegister}>+ Registrar</ButtonItem>
        </div>
      </section>
      <GestionGradoTable
        filteredData={filteredData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
