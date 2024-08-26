export const columnsEgresado = [
  // { header: "ID", accessor: "id" },
  { header: "Código", accessor: "codigo" },
  // { header: "DNI", accessor: "dni" },
  { header: "Nombre", accessor: "nombre", minWidth: "min-w-[180px]" },
  {
    header: "Ap. Paterno",
    accessor: "apellido_paterno",
    minWidth: "min-w-[150px]",
  },
  {
    header: "Ap. Materno",
    accessor: "apellido_materno",
    minWidth: "min-w-[150px]",
  },
  // { header: "Dirección", accessor: "direccion" },
  { header: "Telefono", accessor: "telefono", minWidth: "min-w-[140px]" },
  // { header: "Linkedin", accessor: "linkedin" },
  {
    header: "Correo",
    accessor: "correo",
    minWidth: "min-w-[140px] max-w-[250px]",
  },
  // { header: "Periodo", accessor: "periodo" },
  // { header: "Carrera", accessor: "carrera" },
  // { header: "Estado", accessor: "estado" },
];
