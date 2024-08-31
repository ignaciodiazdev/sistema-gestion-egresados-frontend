import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlumnos } from "../../../hooks/useAlumnos";
import { columnsEgresado } from "../../../utils/data-structures";
import {
  ButtonItem,
  SelectItem,
  Input,
  Table,
} from "../../../../shared/components";
import { showAlert } from "../../../../utils/showAlert";
import { ButtonExcelEgresados } from "../../../components/excel/ButtonExcelEgresados";

export const EgresadoList = () => {
  const navigate = useNavigate();
  const { alumnos, getAlumnos, deleteAlumno } = useAlumnos();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAlumnos, setFilteredAlumnos] = useState([]);
  const [searchProperty, setSearchProperty] = useState("nombre");

  const getOnlyEstadoAlumnos = alumnos?.filter((alumno) => alumno.estado === 2);

  const handleEdit = (row) => {
    navigate(`/egresados/editar/${row["id"]}`);
  };
  const handleDelete = (row) => {
    showAlert({
      title: "¿Está seguro de eliminar?",
      text: "No podrás revertir esta acción",
      confirmText: "Sí, eliminar!",
      onConfirm: () => {
        deleteAlumno(row["id"]);
      },
    });
  };
  const handleRegister = () => {
    navigate("/egresados/registrar");
  };

  useEffect(() => {
    getAlumnos();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredAlumnos(getOnlyEstadoAlumnos); // Mostrar todos los alumnos si no hay término de búsqueda
    } else {
      setFilteredAlumnos(
        getOnlyEstadoAlumnos.filter((alumno) => {
          const value = alumno[searchProperty]; // Obtener el valor según la propiedad seleccionada
          return (
            value &&
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
          );
        })
      );
    }
  }, [searchTerm, searchProperty, alumnos]);

  console.log(getOnlyEstadoAlumnos);
  return (
    <>
      <ButtonExcelEgresados egresados={filteredAlumnos} />
      <section className="p-5 bg-white rounded-primary shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 border border-primary">
        <div className="flex flex-col gap-2 w-full md:flex-row">
          <SelectItem
            value={searchProperty}
            onChange={(e) => setSearchProperty(e.target.value)}
            options={columnsEgresado}
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
        columns={columnsEgresado}
        data={filteredAlumnos}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </>
  );
};
