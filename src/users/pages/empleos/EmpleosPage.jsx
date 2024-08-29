import { useEffect } from "react";
import { useEmpleos } from "../../../hooks/useEmpleos";
import { ListEmpleos } from "../../components/empleos/ListEmpleos";

export const EmpleosPage = () => {
  const { empleos, getEmpleos } = useEmpleos();

  useEffect(() => {
    getEmpleos();
  }, []);

  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h2 className="mb-2 font-bold text-xl lg:text-2xl">
          Ofertas Laborales
        </h2>
      </div>
      <hr />
      <div className="my-7 flex flex-col gap-2 md:grid xl:gap-2">
        <ListEmpleos empleos={empleos} />
      </div>
    </section>
  );
};
