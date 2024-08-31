import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGradosAcademicos } from "../../../hooks/useGradosAcademicos";
import { columnsGradoAcademico } from "../../../utils/data-structures";
import {
  ButtonItem,
  SelectItem,
  Input,
  Table,
} from "../../../../shared/components";
import { showAlert } from "../../../../utils/showAlert";
import { ButtonExcelGradosAcademicos } from "../../../components/excel/ButtonExcelGradosAcademicos";

export const GradoAcademicoList = () => {
  const navigate = useNavigate();
  const { gradosAcademicos, getGradosAcademicos, deleteGradoAcademico } =
    useGradosAcademicos();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGradosAcademicos, setFilteredGradosAcademicos] = useState([]);
  const [searchProperty, setSearchProperty] = useState("nombre");

  const handleEdit = (row) => {
    navigate(`/grados-academicos/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteGradoAcademico(row["id"]);
      },
    });
  };
  const handleRegister = () => {
    navigate("/grados-academicos/registrar");
  };

  useEffect(() => {
    getGradosAcademicos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredGradosAcademicos(gradosAcademicos); // Mostrar todos los gradosAcademicos si no hay término de búsqueda
    } else {
      setFilteredGradosAcademicos(
        gradosAcademicos.filter((gradoAcademico) => {
          const value = gradoAcademico[searchProperty]; // Obtener el valor según la propiedad seleccionada
          return (
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [searchTerm, searchProperty, gradosAcademicos]);

  console.log(gradosAcademicos);
  return (
    <>
      <ButtonExcelGradosAcademicos
        gradosAcademicos={filteredGradosAcademicos}
      />
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <SelectItem
            value={searchProperty}
            onChange={(e) => setSearchProperty(e.target.value)}
            options={columnsGradoAcademico}
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
        columns={columnsGradoAcademico}
        data={filteredGradosAcademicos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
