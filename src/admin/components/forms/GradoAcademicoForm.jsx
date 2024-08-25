import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGradosAcademicos } from "../../hooks/useGradosAcademicos";
import { Input } from "../../../shared/components";
import { toast } from "react-toastify";

export const GradoAcademicoForm = () => {
  const { id } = useParams();
  const {
    gradosAcademicos: gradoAcademicoData,
    updateGradoAcademico,
    postGradoAcademico,
    getGradoAcademicoById,
  } = useGradosAcademicos();
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
    const gradoAcademico = {
      nombre: data.nombre,
    };

    if (!id) {
      postGradoAcademico(gradoAcademico);
      reset();
      toast("Registro Exitoso!");
    } else {
      const response = await updateGradoAcademico(id, gradoAcademico);
      if (response.ok) {
        navigate("/grados-academicos");
      }
    }
  };
  useEffect(() => {
    if (id) {
      getGradoAcademicoById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (gradoAcademicoData) {
      setValue("nombre", gradoAcademicoData.nombre);
    }
  }, [gradoAcademicoData, setValue]);

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
