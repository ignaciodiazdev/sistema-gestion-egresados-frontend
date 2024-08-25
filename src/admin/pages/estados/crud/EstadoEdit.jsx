import { EstadoForm } from "../../../components/forms/EstadoForm";
import { Link } from "react-router-dom";

export const EstadoEdit = () => {
  return (
    <div>
      <Link
        to={"/estados"}
        className="bg-primary rounded-sm text-white p-3 font-semibold"
      >
        Volver a la lista
      </Link>
      <h1 className="text-4xl font-semibold text-center mb-8">
        Edición de Estado
      </h1>
      <section className="md:flex md:justify-center md:items-center">
        <div className="md:w-[500px] p-5 shadow-lg border border-primary bg-white">
          <EstadoForm />
        </div>
      </section>
    </div>
  );
};
