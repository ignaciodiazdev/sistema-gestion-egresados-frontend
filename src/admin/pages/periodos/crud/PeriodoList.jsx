import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePeriodos } from "../../../hooks/usePeriodos";
import { columnsPeriodo } from "../../../utils/data-structures";
import {
  ButtonItem,
  SelectItem,
  Input,
  Table,
} from "../../../../shared/components";
import { showAlert } from "../../../../utils/showAlert";

export const PeriodoList = () => {
  const navigate = useNavigate();
  const { periodos, getPeriodos, deletePeriodo } = usePeriodos();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeriodos, setFilteredPeriodos] = useState([]);
  const [searchProperty, setSearchProperty] = useState("nombre");

  const handleEdit = (row) => {
    navigate(`/periodos/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deletePeriodo(row["id"]);
      },
    });
  };
  const handleRegister = () => {
    navigate("/periodos/registrar");
  };

  useEffect(() => {
    getPeriodos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredPeriodos(periodos); // Mostrar todos los periodos si no hay término de búsqueda
    } else {
      setFilteredPeriodos(
        periodos.filter((periodo) => {
          const value = periodo[searchProperty]; // Obtener el valor según la propiedad seleccionada
          return (
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [searchTerm, searchProperty, periodos]);

  console.log(periodos);
  return (
    <>
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <SelectItem
            value={searchProperty}
            onChange={(e) => setSearchProperty(e.target.value)}
            options={columnsPeriodo}
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
        columns={columnsPeriodo}
        data={filteredPeriodos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
