import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAlumnos } from "../../hooks/useAlumnos";
import { Input } from "../../../shared/components";
import { usePeriodos } from "../../hooks/usePeriodos";
import { useCarreras } from "../../hooks/useCarreras";
import { useEstados } from "../../hooks/useEstados";
import { showAlert } from "../../../utils/showAlert";

export const EgresadoForm = () => {
  const { id } = useParams();
  const {
    alumnos: alumnoData,
    updateAlumno,
    postAlumno,
    getAlumnoById,
  } = useAlumnos();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      codigo: "",
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      direccion: "",
      dni: "",
      telefono: "",
      linkedin: "",
      correo: "",
      periodo: null,
      carrera: null,
      estado: null,
    },
  });

  const formData = async (data) => {
    const alumno = {
      codigo: data.codigo,
      nombre: data.nombre,
      apellido_paterno: data.apellido_paterno,
      apellido_materno: data.apellido_materno,
      direccion: data.direccion,
      dni: data.dni,
      telefono: data.telefono,
      linkedin: data.linkedin,
      correo: data.correo,
      periodo: data.periodo,
      carrera: data.carrera,
      estado: data.estado,
    };

    if (!id) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postAlumno(alumno);
          reset();
        },
      });
    } else {
      showAlert({
        title: "¿Estás seguro de guardar los cambios?",
        text: "",
        confirmText: "Sí, guardar!",
        onConfirm: async () => {
          await updateAlumno(id, alumno);
          navigate("/egresados");
        },
      });
    }
  };
  useEffect(() => {
    if (id) {
      getAlumnoById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (alumnoData) {
      setValue("codigo", alumnoData.codigo);
      setValue("nombre", alumnoData.nombre);
      setValue("apellido_paterno", alumnoData.apellido_paterno);
      setValue("apellido_materno", alumnoData.apellido_materno);
      setValue("direccion", alumnoData.direccion);
      setValue("dni", alumnoData.dni);
      setValue("telefono", alumnoData.telefono);
      setValue("linkedin", alumnoData.linkedin);
      setValue("correo", alumnoData.correo);
      setValue("periodo", alumnoData.periodo);
      setValue("carrera", alumnoData.carrera);
      setValue("estado", alumnoData.estado);
    }
  }, [alumnoData, setValue]);

  // Cargar periodos desde la API al montar el componente
  const { periodos, getPeriodos } = usePeriodos();
  const { carreras, getCarreras } = useCarreras();
  const { estados, getEstados } = useEstados();
  useEffect(() => {
    getPeriodos();
    getCarreras();
    getEstados();
  }, []);

  return (
    <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex items-center py-4">
          <span className="mr-2 text-xl font-bold">Datos Personales *</span>
          <hr className="flex-grow border-t border-gray-200" />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="codigo">Código</label>
            <Input
              type="text"
              id="codigo"
              name="codigo"
              placeholder="Ingresa el codigo"
              {...register("codigo", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            />
            {errors.codigo && (
              <span className="text-sm text-required ml-3">
                {errors.codigo.message}
              </span>
            )}
          </div>
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
          <div className="flex flex-col gap-3">
            <label htmlFor="apellido_paterno">Apellido Paterno</label>
            <Input
              type="text"
              id="apellido_paterno"
              name="apellido_paterno"
              placeholder="Ingresa el apellido paterno"
              {...register("apellido_paterno", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            />
            {errors.apellido_paterno && (
              <span className="text-sm text-required ml-3">
                {errors.apellido_paterno.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="apellido_materno">Apellido Materno</label>
            <Input
              type="text"
              id="apellido_materno"
              name="apellido_materno"
              placeholder="Ingresa el apellido materno"
              {...register("apellido_materno", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            />
            {errors.apellido_materno && (
              <span className="text-sm text-required ml-3">
                {errors.apellido_materno.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="dni">DNI</label>
            <Input
              type="text"
              id="dni"
              name="dni"
              placeholder="Ingresa el dni"
              {...register("dni", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            />
            {errors.dni && (
              <span className="text-sm text-required ml-3">
                {errors.dni.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="periodo">Periodo</label>
            <select
              id="periodo"
              className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
              {...register("periodo", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            >
              <option value="" disabled>
                Seleccione un periodo
              </option>
              {periodos.map((periodo) => (
                <option key={periodo.id} value={periodo.id}>
                  {periodo.nombre}
                </option>
              ))}
            </select>
            {errors.periodo && (
              <span className="text-sm text-required ml-3">
                {errors.periodo.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="carrera">Carrera</label>
            <select
              id="carrera"
              className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
              {...register("carrera", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            >
              <option value="" disabled>
                Seleccione una carrera
              </option>
              {carreras.map((carrera) => (
                <option key={carrera.id} value={carrera.id}>
                  {carrera.nombre}
                </option>
              ))}
            </select>
            {errors.carrera && (
              <span className="text-sm text-required ml-3">
                {errors.carrera.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="estado">Estado</label>
            <select
              id="estado"
              className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
              {...register("estado", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            >
              <option value="" disabled>
                Seleccione un estado
              </option>
              {estados.map((estado) => (
                <option key={estado.id} value={estado.id}>
                  {estado.nombre}
                </option>
              ))}
            </select>
            {errors.estado && (
              <span className="text-sm text-required ml-3">
                {errors.estado.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <label htmlFor="direccion">Dirección</label>
            <Input
              type="text"
              id="direccion"
              name="direccion"
              placeholder="Ingresa la direccion"
              {...register("direccion", {
                required: {
                  value: true,
                  message: "Campo requerido*",
                },
              })}
            />
            {errors.direccion && (
              <span className="text-sm text-required ml-3">
                {errors.direccion.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center py-4">
          <span className="mr-2 text-xl font-bold">Contacto</span>
          <hr className="flex-grow border-t border-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <label htmlFor="telefono">Teléfono</label>
            <Input
              type="text"
              id="telefono"
              name="telefono"
              placeholder="Ingresa el telefono"
              {...register("telefono", {
                required: {
                  value: false,
                },
              })}
            />
            {errors.telefono && (
              <span className="text-sm text-required ml-3">
                {errors.telefono.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="correo">Correo</label>
            <Input
              type="email"
              id="correo"
              name="correo"
              placeholder="Ingresa el correo"
              {...register("correo", {
                required: {
                  value: false,
                },
              })}
            />
            {errors.correo && (
              <span className="text-sm text-required ml-3">
                {errors.correo.message}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <label htmlFor="linkedin">Linkedin</label>
            <Input
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Ingresa el linkedin"
              {...register("linkedin", {
                required: {
                  value: false,
                },
              })}
            />
            {errors.linkedin && (
              <span className="text-sm text-required ml-3">
                {errors.linkedin.message}
              </span>
            )}
          </div>
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
