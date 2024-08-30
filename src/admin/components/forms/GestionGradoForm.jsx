import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGestionGrados } from "../../hooks/useGestionGrados";
import { ButtonItem, Input } from "../../../shared/components";
import { toast } from "react-toastify";
import { useAlumnos } from "../../hooks/useAlumnos";
import { useGradosAcademicos } from "../../hooks/useGradosAcademicos";
import { getApiAlumnosByFilter } from "../../api/alumnosApi";
import { showAlert } from "../../../utils/showAlert";

export const GestionGradoForm = () => {
  const { id } = useParams();
  const {
    gestionGrados: gestionGradoData,
    updateGestionGrado,
    postGestionGrado,
    getGestionGradoById,
  } = useGestionGrados();
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      codigo_modular: "",
      alumno: null,
      grado_academico: null,
    },
  });

  const formData = async (data) => {
    const gestionGrado = {
      codigo_modular: data.codigo_modular,
      alumno: data.alumno,
      grado_academico: data.grado_academico,
    };

    if (!id) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postGestionGrado(gestionGrado);
          reset();
        },
      });
    } else {
      showAlert({
        title: "¿Estás seguro de guardar los cambios?",
        text: "",
        confirmText: "Sí, guardar!",
        onConfirm: async () => {
          await updateGestionGrado(id, gestionGrado);
          navigate("/gestion-grados");
        },
      });
    }
  };
  useEffect(() => {
    if (id) {
      getGestionGradoById(id);
    } else {
      reset();
    }
  }, []);

  useEffect(() => {
    if (gestionGradoData) {
      setValue("codigo_modular", gestionGradoData.codigo_modular);
      setValue("alumno", gestionGradoData.alumno);
      setValue("grado_academico", gestionGradoData.grado_academico);
    }
  }, [gestionGradoData, setValue]);

  // Cargar periodos desde la API al montar el componente
  const { alumnos, getAlumnos, getAlumnoById } = useAlumnos();
  const { gradosAcademicos, getGradosAcademicos } = useGradosAcademicos();

  useEffect(() => {
    getAlumnos();
    getGradosAcademicos();
  }, []);

  //  Función para Buscar
  const [codigo, setCodigo] = useState("");
  const [alumnoFiltrado, setAlumnoFiltrado] = useState("");
  const [isEgresado, setIsEgresado] = useState(true);

  const buscarPorFiltro = async () => {
    if (!codigo) {
      toast("Ingresa un código", {
        type: "warning",
      });
    } else if (codigo.length < 10) {
      toast("El código debe tener 10 dígitos", {
        type: "warning",
      });
    } else {
      const data = await getApiAlumnosByFilter("codigo", codigo);
      console.log(data);
      if (data.length === 0) {
        toast("Código no registrado!", {
          type: "error",
        });
        setIsEgresado(false);
        return;
      } else if (data[0].estado_data.nombre === "En Curso") {
        setIsEgresado(false);
        toast("El alumno aún no ha egresado", {
          type: "warning",
        });
      } else {
        setIsEgresado(true);
        setValue("alumno", data[0].id);
      }
      setAlumnoFiltrado(data[0]);
    }
  };

  return (
    <>
      {/* <== Start - Búsqueda de Alumno por Código => */}
      <section className="mb-2">
        <div className="flex items-center py-4">
          <span className="mr-2 text-xl font-bold">Búsqueda de Alumno *</span>
          <hr className="flex-grow border-t border-gray-200" />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
          <div className="flex flex-col gap-2 w-full md:flex-row">
            <Input
              type="text"
              id="busqueda_codigo"
              placeholder="Ingrese número de código"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
            />
          </div>
          <div className="w-full md:w-2/6 lg:w-2/12 min-w-40">
            <ButtonItem
              style={{ backgroundColor: "#10b981", borderRadius: "30px" }}
              onClick={buscarPorFiltro}
            >
              Buscar
            </ButtonItem>
          </div>
        </div>
        <div className="grid gri-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label>Nombre</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.nombre ||
                  gestionGradoData?.alumno_data?.nombre
                : alumnoFiltrado?.nombre}
            </div>
          </div>
          <div>
            <label>Apellido Paterno</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.apellido_paterno ||
                  gestionGradoData?.alumno_data?.apellido_paterno
                : alumnoFiltrado?.apellido_paterno}
            </div>
          </div>
          <div>
            <label>Apellido Materno</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.apellido_materno ||
                  gestionGradoData?.alumno_data?.apellido_materno
                : alumnoFiltrado?.apellido_materno}
            </div>
          </div>
          <div>
            <label>DNI:</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.dni || gestionGradoData?.alumno_data?.dni
                : alumnoFiltrado?.dni}
            </div>
          </div>
          <div>
            <label>Carrera:</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.carrera_data?.nombre ||
                  gestionGradoData?.alumno_data?.carrera_data?.nombre
                : alumnoFiltrado?.carrera_data?.nombre}
            </div>
          </div>
          <div>
            <label>Estado:</label>
            <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-gray-100">
              {id
                ? alumnoFiltrado?.estado_data?.nombre ||
                  gestionGradoData?.alumno_data?.estado_data?.nombre
                : alumnoFiltrado?.estado_data?.nombre}
            </div>
          </div>
        </div>
      </section>
      {/* <== End - Búsqueda de Alumno por Código => */}

      <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center py-4">
            <span className="mr-2 text-xl font-bold">Datos Personales *</span>
            <hr className="flex-grow border-t border-gray-200" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-3 lg:col-span-2">
              <label htmlFor="codigo_modular">Código Modular</label>
              <Input
                type="text"
                id="codigo_modular"
                name="codigo_modular"
                placeholder="Ingresa el codigo_modular"
                {...register("codigo_modular", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.codigo_modular && (
                <span className="text-sm text-required ml-3">
                  {errors.codigo_modular.message}
                </span>
              )}
            </div>
            <div className="hidden">
              <label htmlFor="alumno">Alumno</label>
              <Input
                type="text"
                id="alumno"
                name="alumno"
                disabled={true}
                placeholder="Alumno seleccionado"
                {...register("alumno", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.alumno && (
                <span className="text-sm text-required ml-3">
                  {errors.alumno.message}
                </span>
              )}
              {/* <select
                id="alumno"
                className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
                {...register("alumno", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              >
                <option value="" disabled>
                  Seleccione un alumno
                </option>
                {alumnos.map((alumno) => (
                  <option key={alumno.id} value={alumno.id}>
                    {`${alumno.nombre} ${alumno.apellido_paterno} ${alumno.apellido_materno}`}
                  </option>
                ))}
              </select>
              {errors.alumno && (
                <span className="text-sm text-required ml-3">
                  {errors.alumno.message}
                </span>
              )} */}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="grado_academico">Grado Académico</label>
              <select
                id="grado_academico"
                className="block w-full rounded-[.25rem] border border-primary py-4 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0"
                {...register("grado_academico", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              >
                <option value="" disabled>
                  Seleccione un grado académico
                </option>
                {gradosAcademicos.map((gradoAcademico) => (
                  <option key={gradoAcademico.id} value={gradoAcademico.id}>
                    {gradoAcademico.nombre}
                  </option>
                ))}
              </select>
              {errors.grado_academico && (
                <span className="text-sm text-required ml-3">
                  {errors.grado_academico.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="md:flex md:justify-end">
          <button
            type="submit"
            className={`w-full md:w-40 text-white p-3 font-semibold  rounded-md ${
              isEgresado === true ? "bg-primary" : "bg-gray-600"
            }`}
            disabled={isEgresado === true ? false : true}
          >
            {id ? "Editar" : "Registrar"}
          </button>
        </div>
      </form>
    </>
  );
};
