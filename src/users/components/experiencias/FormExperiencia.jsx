import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useExperiencias } from "../../../hooks/useExperiencias";
import { Input, TextArea } from "../../../shared/components";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useModal } from "../../../shared/hooks/useModal";
import { showAlert } from "../../../utils/showAlert";

export const FormExperiencia = ({ experiencia, setRefresh }) => {
  const { updateExperiencia, postExperiencia } = useExperiencias();
  const { closeModal } = useModal();

  const {
    auth: { userInfo },
  } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cargo: "",
      empresa: "",
      fecha_inicio: "",
      fecha_fin: null,
      descripcion: "",
      alumno: "",
    },
  });

  const formData = async (data) => {
    // DATO IMPORTANTE: El valor de un Input de tipo DATE al
    // hacer click su valor pasa a una cadena vacia
    // Si no se le da click su valor por defecto inicia con NULL
    // En este caso el backend espera un string con formato de fecha
    // O un NULL porque esta permitiendo aquello para este caso
    console.log("Valor de la fecha: ", data.fecha_fin);
    let valorVerificado = data.fecha_fin === "" ? null : data.fecha_fin;
    console.log(valorVerificado);

    const experienciaNewData = {
      cargo: data.cargo,
      empresa: data.empresa,
      fecha_inicio: data.fecha_inicio,
      fecha_fin: valorVerificado,
      descripcion: data.descripcion,
      alumno: userInfo.id,
    };
    console.log(experienciaNewData);

    if (!experiencia) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "Se guardaran los cambios",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postExperiencia(experienciaNewData);
          reset();
          closeModal();
          setRefresh((prev) => !prev);
        },
      });
    } else {
      const response = await updateExperiencia(
        experiencia.id,
        experienciaNewData
      );
      if (response.ok) {
        showAlert({
          title: "¿Estás seguro de editar?",
          text: "",
          confirmText: "Sí, editar!",
          onConfirm: () => {
            setRefresh((prev) => !prev);
            closeModal();
          },
        });
      }
    }
  };

  useEffect(() => {
    if (experiencia) {
      setValue("cargo", experiencia.cargo);
      setValue("empresa", experiencia.empresa);
      setValue("fecha_inicio", experiencia.fecha_inicio);
      setValue("fecha_fin", experiencia.fecha_fin);
      setValue("descripcion", experiencia.descripcion);
      setValue("alumno", userInfo.id);
    } else {
      reset({
        cargo: "",
        empresa: "",
        fecha_inicio: "",
        fecha_fin: null,
        descripcion: "",
        alumno: userInfo.id,
      });
    }
  }, [experiencia, setValue, userInfo]);

  return (
    <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold my-2 xl:text-2xl">
          {experiencia
            ? "Edición de Experiencia Laboral"
            : "Registro de Experiencia Laboral"}
        </h2>
        <hr />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 text-left text-sm">
        <div className="flex flex-col gap-3">
          <label htmlFor="cargo">Cargo:</label>
          <Input
            type="text"
            id="cargo"
            name="cargo"
            placeholder="Ingresa el cargo"
            {...register("cargo", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.cargo && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.cargo.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="empresa">Empresa:</label>
          <Input
            type="text"
            id="empresa"
            name="empresa"
            placeholder="Ingresa el empresa"
            {...register("empresa", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.empresa && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.empresa.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="fecha_inicio">Fecha de inicio:</label>
          <Input
            type="date"
            id="fecha_inicio"
            name="fecha_inicio"
            placeholder="Ingresa el fecha_inicio"
            {...register("fecha_inicio", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.fecha_inicio && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.fecha_inicio.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="fecha_fin">Fecha de Fin:</label>
          <Input
            type="date"
            id="fecha_fin"
            name="fecha_fin"
            placeholder="Ingresa el fecha_fin"
            {...register("fecha_fin", {
              required: {
                value: false,
              },
            })}
          />
          {errors.fecha_fin && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.fecha_fin.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3 col-span-2">
          <label htmlFor="descripcion">Descripción:</label>
          <TextArea
            type="text"
            id="descripcion"
            name="descripcion"
            placeholder="Ingresa el descripcion"
            {...register("descripcion", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.descripcion && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.descripcion.message}
            </span>
          )}
        </div>
        <div className="hidden gap-3 ">
          <label htmlFor="alumno">Nombre</label>
          <Input
            type="text"
            id="alumno"
            name="alumno"
            placeholder="Ingresa el alumno"
            {...register("alumno", {
              required: {
                value: true,
                message: "Campo requerido",
              },
            })}
          />
          {errors.alumno && <span>{errors.alumno.message}</span>}
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4 text-sm ">
        <div
          onClick={closeModal}
          className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-red-600 hover:bg-red-600 hover:text-white cursor-pointer"
        >
          Cancelar
        </div>
        <button
          type="submit"
          className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
        >
          {experiencia ? "Editar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};
