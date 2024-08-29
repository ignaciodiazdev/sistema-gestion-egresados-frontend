import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useEducaciones } from "../../../hooks/useEducaciones";
import { Input } from "../../../shared/components";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useModal } from "../../../shared/hooks/useModal";
import { showAlert } from "../../../utils/showAlert";

export const FormEducacion = ({ educacion, setRefresh }) => {
  const { updateEducacion, postEducacion } = useEducaciones();
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
      institucion: "",
      carrera: "",
      fecha_inicio: "",
      fecha_fin: null,
      tipo_estudio: "",
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

    const educacionNewData = {
      institucion: data.institucion,
      carrera: data.carrera,
      fecha_inicio: data.fecha_inicio,
      fecha_fin: valorVerificado,
      tipo_estudio: data.tipo_estudio,
      alumno: userInfo.id,
    };
    console.log(educacionNewData);

    if (!educacion) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "Se guardaran los cambios",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postEducacion(educacionNewData);
          reset();
          closeModal();
          setRefresh((prev) => !prev);
        },
      });
    } else {
      const response = await updateEducacion(educacion.id, educacionNewData);
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
    if (educacion) {
      setValue("institucion", educacion.institucion);
      setValue("carrera", educacion.carrera);
      setValue("fecha_inicio", educacion.fecha_inicio);
      setValue("fecha_fin", educacion.fecha_fin);
      setValue("tipo_estudio", educacion.tipo_estudio);
      setValue("alumno", userInfo.id);
    } else {
      reset({
        institucion: "",
        carrera: "",
        fecha_inicio: "",
        fecha_fin: null,
        tipo_estudio: "",
        alumno: userInfo.id,
      });
    }
  }, [educacion, setValue, userInfo]);

  return (
    <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold my-2 xl:text-2xl">
          {educacion
            ? "Edición de Formación Académica"
            : "Registro de Formación Académica"}
        </h2>
        <hr />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 text-left text-sm">
        <div className="flex flex-col gap-3">
          <label htmlFor="institucion">Institución:</label>
          <Input
            type="text"
            id="institucion"
            name="institucion"
            placeholder="Ingresa el institucion"
            {...register("institucion", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.institucion && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.institucion.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="carrera">Carrera:</label>
          <Input
            type="text"
            id="carrera"
            name="carrera"
            placeholder="Ingresa el carrera"
            {...register("carrera", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.carrera && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.carrera.message}
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
          <label htmlFor="tipo_estudio">Tipo de Estudio</label>
          <select
            id="tipo_estudio"
            className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
            {...register("tipo_estudio", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="Curso">Curso</option>
            <option value="Secundario">Secundario</option>
            <option value="Superior Técnico">Superior Técnico</option>
            <option value="Universitario">Universitario</option>
            <option value="Posgrado">Posgrado</option>
            <option value="Maestría">Maestría</option>
            <option value="Doctorado">Doctorado</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.tipo_estudio && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.tipo_estudio.message}
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
          {educacion ? "Editar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};
