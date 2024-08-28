import React, { useEffect, useState } from "react";
import { useModal } from "../../../shared/hooks/useModal";
import { Form } from "./Form";
import {
  CardDatosUsuario,
  CardContactoUsuario,
  CardResumenUsuario,
  CardAvisos,
} from "../../components/inicio";
import { useAuth } from "../../../auth/hooks/useAuth";

export const Inicio = () => {
  const { openModal } = useModal();
  const [refresh, setRefresh] = useState(false);
  const handleOpenModal = () => {
    openModal(<Form setRefresh={setRefresh} />);
  };

  useEffect(() => {
    setRefresh(refresh);
    console.log("Volviendo a Renderizar");
    console.log("Valor de Refresh:", refresh);
  }, [refresh]);

  // Userinfo
  const {
    auth: { userInfo },
  } = useAuth();

  return (
    <div className="flex flex-col gap-5  xl:grid xl:grid-cols-4">
      {/* Cards de Datos Personales y Contacto */}
      <section className="flex flex-col gap-5 xl:col-span-1">
        <div>
          <CardDatosUsuario userInfo={userInfo} />
        </div>
        <div className="hidden xl:block">
          <CardContactoUsuario userInfo={userInfo} />
        </div>
      </section>

      {/* Card de Resumen [Educación - Experiencias - Certificados] */}
      <section className="xl:col-span-2">
        <CardResumenUsuario />
      </section>
      <section className="xl:col-span-1">
        <CardAvisos />
      </section>
    </div>
  );
};
