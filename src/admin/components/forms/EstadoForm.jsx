import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEstados } from "../../hooks/useEstados";
import { Input } from "../../../shared/components";
import { toast } from "react-toastify";

export const EstadoForm = () => {
  const { id } = useParams();
  const {
    estados: estadoData,
    updateEstado,
    postEstado,
    getEstadoById,
  } = useEstados();
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
    const estado = {
      nombre: data.nombre,
    };

    if (!id) {
      postEstado(estado);
      reset();
      toast("Registro Exitoso!");
    } else {
      const response = await updateEstado(id, estado);
      if (response.ok) {
        navigate("/estados");
      }
    }
  };
  useEffect(() => {
    if (id) {
      getEstadoById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (estadoData) {
      setValue("nombre", estadoData.nombre);
      setValue("descripcion", estadoData.descripcion);
      setValue("precio", estadoData.precio);
      setValue("stock", estadoData.stock);
    }
  }, [estadoData, setValue]);

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
