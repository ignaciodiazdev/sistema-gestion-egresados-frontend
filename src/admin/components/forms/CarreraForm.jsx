import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useCarreras } from "../../hooks/useCarreras";
import { Input } from "../../../shared/components";
import { toast } from "react-toastify";

export const CarreraForm = () => {
  const { id } = useParams();
  const {
    carreras: carreraData,
    updateCarrera,
    postCarrera,
    getCarreraById,
  } = useCarreras();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
    },
  });

  const formData = async (data) => {
    console.log("Aquí deberia ir una Alerta de Confirmación Toastify");
    const carrera = {
      nombre: data.nombre,
    };

    if (!id) {
      postCarrera(carrera);
      reset();
      toast("Registro Exitoso!");
    } else {
      const response = await updateCarrera(id, carrera);
      if (response.ok) {
        navigate("/carreras");
      }
    }
  };
  useEffect(() => {
    if (id) {
      getCarreraById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (carreraData) {
      setValue("nombre", carreraData.nombre);
    }
  }, [carreraData, setValue]);

  return (
    <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3">
          <label htmlFor="nombre">Nombre</label>
          <Input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Ingresa el nombre"
            {...register("nombre", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.nombre && <span>{errors.nombre.message}</span>}
        </div>
      </div>
      <div className="md:flex md:justify-end">
        <button
          type="submit"
          className="w-full md:w-40 text-white p-3 font-semibold bg-primary rounded-primary"
        >
          {id ? "Editar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};
