import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarreras } from "../../../hooks/useCarreras";
import { columnsCarrera } from "../../../utils/data-structures";
import {
  ButtonItem,
  SelectItem,
  Input,
  Table,
} from "../../../../shared/components";
import { showAlert } from "../../../../utils/showAlert";

export const CarreraList = () => {
  const navigate = useNavigate();
  const { carreras, getCarreras, deleteCarrera } = useCarreras();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCarreras, setFilteredCarreras] = useState([]);
  const [searchProperty, setSearchProperty] = useState("nombre");

  const handleEdit = (row) => {
    navigate(`/carreras/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteCarrera(row["id"]);
      },
    });
  };
  const handleRegister = () => {
    navigate("/carreras/registrar");
  };

  useEffect(() => {
    getCarreras();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCarreras(carreras); // Mostrar todos los carreras si no hay término de búsqueda
    } else {
      setFilteredCarreras(
        carreras.filter((carrera) => {
          const value = carrera[searchProperty]; // Obtener el valor según la propiedad seleccionada
          return (
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [searchTerm, searchProperty, carreras]);

  console.log(carreras);
  return (
    <>
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <SelectItem
            value={searchProperty}
            onChange={(e) => setSearchProperty(e.target.value)}
            options={columnsCarrera}
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
        columns={columnsCarrera}
        data={filteredCarreras}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
