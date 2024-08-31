import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useAuth } from "../../../auth/hooks/useAuth";
import { ButtonItem } from "../../../shared/components";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

export const ButtonExcelEgresados = ({ egresados }) => {
  const {
    auth: { userInfo },
  } = useAuth();
  const [loading, setLoading] = useState(false);

  const titulo = [{ A: "Reporte de Egresados" }, {}];

  const informacionAdicional = {
    A: `Generado por: ${userInfo.nombre} ${userInfo.apellido_paterno} ${userInfo.apellido_materno}`,
  };

  const longitudes = [10, 20, 20, 20, 20, 15, 32, 20, 25, 12, 16, 15, 25, 25];

  const handleDownload = () => {
    setLoading(true);

    let tabla = [
      {
        A: "Id",
        B: "Código",
        C: "Nombre",
        D: "Apellido Paterno",
        E: "Apellido Materno",
        F: "DNI",
        G: "Dirección",
        H: "Periodo",
        I: "Carrera",
        J: "Estado",
        K: "Fecha de Registro",
        L: "Telefono",
        M: "Correo",
        N: "Linkedin",
      },
    ];

    egresados.forEach((egresado) => {
      tabla.push({
        A: egresado.id,
        B: egresado.codigo,
        C: egresado.nombre,
        D: egresado.apellido_paterno,
        E: egresado.apellido_materno,
        F: egresado.dni,
        G: egresado.direccion,
        H: egresado.periodo_data.nombre,
        I: egresado.carrera_data.nombre,
        J: egresado.estado_data.nombre,
        K: egresado.fecha_registro,
        L: egresado.telefono,
        M: egresado.correo,
        N: egresado.linkedin,
      });
    });

    const dataFinal = [...titulo, ...tabla, informacionAdicional];

    setTimeout(() => {
      creandoArchivo(dataFinal);
      setLoading(false);
    }, 1000);
  };

  const creandoArchivo = (dataFinal) => {
    const libro = XLSX.utils.book_new();

    const hoja = XLSX.utils.json_to_sheet(dataFinal, { skipHeader: true });

    hoja["!merges"] = [
      XLSX.utils.decode_range("A1:N1"),
      XLSX.utils.decode_range("A2:N2"),
      XLSX.utils.decode_range("A34:N34"),
    ];

    let propiedades = [];

    longitudes.forEach((col) => {
      propiedades.push({
        width: col,
      });
    });

    hoja["!cols"] = propiedades;
    hoja["!rows"] = [
      { hpx: 30 }, // Primera fila, altura en píxeles
      { hpx: 10 }, // Segunda fila
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      { hpx: 20 },
      // ...
    ];

    XLSX.utils.book_append_sheet(libro, hoja, "Egresados");
    XLSX.writeFile(libro, "Reporte de Egresados.xlsx");
  };

  return (
    <div className="hidden xl:block absolute w-[180px]">
      <ButtonItem
        style={{
          backgroundColor: "#0f9e0f",
          position: "relative",
          top: "-70px",
          left: "987px",
        }}
        onClick={handleDownload}
      >
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl">
            <PiMicrosoftExcelLogoFill />
          </span>{" "}
          <span className="text-sm">
            {loading === true ? "Descargando..." : "Exportar a Excel"}
          </span>
        </div>
      </ButtonItem>
    </div>
  );
};
