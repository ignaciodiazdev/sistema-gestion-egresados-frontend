import { useEffect } from "react";
import { useExperiencias } from "../../../hooks/useExperiencias";
import { useAuth } from "../../../auth/hooks/useAuth";
import { DetailExperiencia } from "../experiencias/DetailExperiencia";

export const ContentExperiencia = () => {
  const {
    auth: { userInfo },
  } = useAuth();
  const { experiencias, getExperienciasByFilter } = useExperiencias();

  useEffect(() => {
    getExperienciasByFilter("alumno", userInfo.id);
  }, []);

  return (
    <article>
      <h2 className="mb-2 font-bold text-sm lg:text-xl">
        Experiencias Laborales
      </h2>
      <hr />
      <div className="my-4 flex flex-col gap-2 xl:gap-5">
        {experiencias.map((experiencia, index) => (
          <DetailExperiencia key={index} experiencia={experiencia} />
        ))}
      </div>
    </article>
  );
};
