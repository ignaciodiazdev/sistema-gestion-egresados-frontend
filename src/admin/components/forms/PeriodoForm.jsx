import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { usePeriodos } from "../../hooks/usePeriodos";
import { Input } from "../../../shared/components";
import { showAlert } from "../../../utils/showAlert";

export const PeriodoForm = () => {
  const { id } = useParams();
  const {
    periodos: periodoData,
    updatePeriodo,
    postPeriodo,
    getPeriodoById,
  } = usePeriodos();
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
    const periodo = {
      nombre: data.nombre,
    };

    if (!id) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postPeriodo(periodo);
          reset();
        },
      });
    } else {
      showAlert({
        title: "¿Estás seguro de guardar los cambios?",
        text: "",
        confirmText: "Sí, guardar!",
        onConfirm: async () => {
          await updatePeriodo(id, periodo);
          navigate("/periodos");
        },
      });
    }
  };
  useEffect(() => {
    if (id) {
      getPeriodoById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (periodoData) {
      setValue("nombre", periodoData.nombre);
    }
  }, [periodoData, setValue]);

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
