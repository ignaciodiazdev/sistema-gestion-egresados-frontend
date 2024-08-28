import React, { useEffect, useState } from "react";
import { CardUser } from "../CardUser";
import { ContentEducacion } from "./ContentEducacion";
import { ContentExperiencia } from "./ContentExperiencia";
import { ContentCertificados } from "./ContentCertificados";

export const CardResumenUsuario = () => {
  const [contentResumen, setContentResumen] = useState("");
  const [activeOption, setActiveOption] = useState("Educacion");

  const handleOption = (identificador) => {
    switch (identificador) {
      case "Educacion":
        console.log(identificador);
        setContentResumen(<ContentEducacion />);
        setActiveOption(identificador);
        break;
      case "Experiencias":
        console.log(identificador);
        setContentResumen(<ContentExperiencia />);
        setActiveOption(identificador);
        break;
      case "Certificados":
        console.log(identificador);
        setContentResumen(<ContentCertificados />);
        setActiveOption(identificador);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    setContentResumen(<ContentEducacion />);
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 text-center mb-2 text-[11px] md:text-sm">
        <button
          className={`${
            activeOption === "Educacion"
              ? "bg-primary text-white font-bold"
              : "bg-white text-black"
          } rounded-3xl h-8 md:h-10 xl:h-12 shadow-sm hover:bg-primary hover:text-white transition duration-500 ease-in-out  border`}
          onClick={() => handleOption("Educacion")}
        >
          Educación
        </button>
        <button
          className={`${
            activeOption === "Experiencias"
              ? "bg-primary text-white font-bold"
              : "bg-white text-black"
          } rounded-3xl h-8 md:h-10 xl:h-12 shadow-sm hover:bg-primary hover:text-white transition duration-500 ease-in-out  border`}
          onClick={() => handleOption("Experiencias")}
        >
          Experiencias
        </button>
        <button
          className={`${
            activeOption === "Certificados"
              ? "bg-primary text-white font-bold"
              : "bg-white text-black"
          } rounded-3xl h-8 md:h-10 xl:h-12 shadow-sm hover:bg-primary hover:text-white transition duration-500 ease-in-out  border`}
          onClick={() => handleOption("Certificados")}
        >
          Certificados
        </button>
      </div>
      <CardUser>
        <div className="text-[12px] lg:text-base">{contentResumen}</div>
      </CardUser>
    </>
  );
};
