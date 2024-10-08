import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEstados } from "../../hooks/useEstados";
import { Input } from "../../../shared/components";
import { showAlert } from "../../../utils/showAlert";

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
    const estado = {
      nombre: data.nombre,
    };

    if (!id) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postEstado(estado);
          reset();
        },
      });
    } else {
      showAlert({
        title: "¿Estás seguro de guardar los cambios?",
        text: "",
        confirmText: "Sí, guardar!",
        onConfirm: async () => {
          await updateEstado(id, estado);
          navigate("/estados");
        },
      });
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
                message: "Campo requerido*",
              },
            })}
          />
          {errors.nombre && (
            <span className="text-sm text-required ml-3">
              {errors.nombre.message}
            </span>
          )}
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
