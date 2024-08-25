import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEstados } from "../../../hooks/useEstados";
import { columnsEstado } from "../../../utils/data-structures";
import {
  ButtonItem,
  SelectItem,
  Input,
  Table,
} from "../../../../shared/components";

export const EstadoList = () => {
  const navigate = useNavigate();
  const { estados, getEstados, deleteEstado } = useEstados();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEstados, setFilteredEstados] = useState([]);
  const [searchProperty, setSearchProperty] = useState("nombre");

  const handleEdit = (row) => {
    navigate(`/estados/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    deleteEstado(row["id"]);
  };
  const handleRegister = () => {
    navigate("/estados/registrar");
  };

  useEffect(() => {
    getEstados();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEstados(estados); // Mostrar todos los estados si no hay término de búsqueda
    } else {
      setFilteredEstados(
        estados.filter((estado) => {
          const value = estado[searchProperty]; // Obtener el valor según la propiedad seleccionada
          return (
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [searchTerm, searchProperty, estados]);

  console.log(estados);
  return (
    <>
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <SelectItem
            value={searchProperty}
            onChange={(e) => setSearchProperty(e.target.value)}
            options={columnsEstado}
          />
          <Input
            type={searchProperty === "fecha" ? "date" : "text"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Buscar por ${searchProperty}...`}
          />
        </div>
        <div className="w-full md:w-2/6 lg:w-2/12">
          <ButtonItem onClick={handleRegister}>+ Registrar</ButtonItem>
        </div>
      </section>
      <Table
        columns={columnsEstado}
        data={filteredEstados}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
