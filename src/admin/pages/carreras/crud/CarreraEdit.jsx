import { CarreraForm } from "../../../components/forms/CarreraForm";
import { Link } from "react-router-dom";

export const CarreraEdit = () => {
  return (
    <div>
      <Link
        to={"/carreras"}
        className="bg-primary rounded-sm text-white p-3 font-semibold"
      >
        Volver a la lista
      </Link>
      <h1 className="text-4xl font-semibold text-center mb-8">
        Edición de Carrera
      </h1>
      <section className="md:flex md:justify-center md:items-center">
        <div className="md:w-[500px] p-5 shadow-lg border border-primary bg-white">
          <CarreraForm />
        </div>
      </section>
    </div>
  );
};
