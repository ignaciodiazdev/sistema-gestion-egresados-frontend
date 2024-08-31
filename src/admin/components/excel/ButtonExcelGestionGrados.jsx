import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useAuth } from "../../../auth/hooks/useAuth";
import { ButtonItem } from "../../../shared/components";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";

export const ButtonExcelGestionGrados = ({ gestionGrados }) => {
  const {
    auth: { userInfo },
  } = useAuth();
  const [loading, setLoading] = useState(false);

  const titulo = [{ A: "Reporte de Gestion de Grados" }, {}];

  const informacionAdicional = {
    A: `Generado por: ${userInfo.nombre} ${userInfo.apellido_paterno} ${userInfo.apellido_materno}`,
  };

  const longitudes = [20, 20, 30, 20, 18];

  const handleDownload = () => {
    setLoading(true);

    let tabla = [
      {
        A: "Código Modular",
        B: "Código Universitario",
        C: "Nombre de Alumno",
        D: "Grado Académico",
        E: "Fecha de Registro",
      },
    ];

    gestionGrados.forEach((gestionGrado) => {
      tabla.push({
        A: gestionGrado.codigo_modular,
        B: gestionGrado.alumno_data.codigo,
        C: `${gestionGrado.alumno_data.nombre} ${gestionGrado.alumno_data.apellido_paterno} ${gestionGrado.alumno_data.apellido_materno}`,
        D: gestionGrado.grado_academico_data.nombre,
        E: gestionGrado.fecha_registro,
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
      XLSX.utils.decode_range("A1:E1"),
      XLSX.utils.decode_range("A2:E2"),
      XLSX.utils.decode_range("A34:E34"),
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
      { hpx: 20 }, // Segunda fila
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      { hpx: 25 },
      // ...
    ];

    XLSX.utils.book_append_sheet(libro, hoja, "Gestion de Grados");
    XLSX.writeFile(libro, "Reporte de Gestion de Grados.xlsx");
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
