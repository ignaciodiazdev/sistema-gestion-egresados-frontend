import { PeriodoForm } from "../../../components/forms/PeriodoForm";
import { Link } from "react-router-dom";

export const PeriodoEdit = () => {
  return (
    <div>
      <Link
        to={"/periodos"}
        className="bg-primary rounded-sm text-white p-3 font-semibold"
      >
        Volver a la lista
      </Link>
      <h1 className="text-4xl font-semibold text-center mb-8">
        Edición de Periodo
      </h1>
      <section className="md:flex md:justify-center md:items-center">
        <div className="md:w-[500px] p-5 shadow-lg border border-primary bg-white">
          <PeriodoForm />
        </div>
      </section>
    </div>
  );
};
