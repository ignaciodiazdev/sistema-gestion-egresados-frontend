import React, { useState } from "react";
import { PiMicrosoftExcelLogoFill } from "react-icons/pi";
import * as XLSX from "xlsx";
import { ButtonItem } from "../../../shared/components";

export const ButtonExcelGradosAcademicos = ({ gradosAcademicos }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);

    const libro = XLSX.utils.book_new();

    const hoja = XLSX.utils.json_to_sheet(gradosAcademicos);

    XLSX.utils.book_append_sheet(libro, hoja, "Grados Academicos");

    setTimeout(() => {
      XLSX.writeFile(libro, "Reporte de Grados Academicos.xlsx");
      setLoading(false);
    }, 1000);
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
