import React from "react";
import { UsuarioForm } from "../../components/forms/UsuarioForm";

export const UsuariosPage = () => {
  return (
    <section>
      <h1 className="text-base md:text-lg lg:text-2xl text-center mb-2 bg-gradient-to-tl from-red-500 to-indigo-600 py-4 text-white font-bold rounded-md">
        Registro de Cuenta de Usuario
      </h1>
      <UsuarioForm />
    </section>
  );
};
