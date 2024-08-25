import { EstadoForm } from "../../../components/forms/EstadoForm";
import { Link } from "react-router-dom";

export const EstadoRegister = () => {
  return (
    <div>
      <div className="mb-8 mt-5">
        <Link
          to={"/estados"}
          className="bg-primary rounded-sm text-white p-3 font-semibold"
        >
          Volver a la lista
        </Link>
      </div>
      <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-8">
        Registro de Estado
      </h1>
      <section className="md:flex md:justify-center md:items-center">
        <div className=" md:w-[500px] p-5 shadow-lg border border-primary bg-white">
          <EstadoForm />
        </div>
      </section>
    </div>
  );
};
