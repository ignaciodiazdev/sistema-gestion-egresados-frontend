import { useEffect } from "react";
import { useEducaciones } from "../../../hooks/useEducaciones";
import { useAuth } from "../../../auth/hooks/useAuth";
import { DetailEducacion } from "../educaciones/DetailEducacion";

export const ContentEducacion = () => {
  const { educaciones, getEducacionesByFilter } = useEducaciones();
  const {
    auth: { userInfo },
  } = useAuth();

  useEffect(() => {
    getEducacionesByFilter("alumno", userInfo.id);
  }, []);

  return (
    <article className="">
      <h2 className="mb-2 font-bold text-sm lg:text-xl">Formación académica</h2>
      <hr />
      <div className="my-4 flex flex-col gap-2 xl:gap-5">
        {educaciones.map((educacion, index) => (
          <DetailEducacion key={index} educacion={educacion} />
        ))}
      </div>
    </article>
  );
};
