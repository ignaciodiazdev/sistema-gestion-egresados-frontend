import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUsuarios } from "../../hooks/useUsuarios";
import { ButtonItem, Card, Input } from "../../../shared/components";
import { showAlert } from "../../../utils/showAlert";
import { getApiAlumnosByFilter } from "../../api/alumnosApi";
import { toast } from "react-toastify";
import { CardUser } from "../../../users/components/CardUser";
import { useAlumnos } from "../../hooks/useAlumnos";

export const UsuarioForm = () => {
  const {
    usuarios: usuarioData,
    updateUsuario,
    postUsuario,
    getUsuarioById,
  } = useUsuarios();
  const { updateAlumno } = useAlumnos();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      is_active: "",
      is_staff: "",
      is_superuser: "",
    },
  });
  const registerUserAndAlumno = async (userData, id) => {
    try {
      // Paso 1: Registrar la cuenta de usuario
      const response = await fetch("http://127.0.0.1:8000/api/usuarios/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Error al registrar la cuenta de usuario");
      }

      // Obtener el ID del usuario creado
      const user = await response.json();
      const userId = user.id; // Asegúrate de que este sea el campo que contiene el ID
      console.log(user);

      // Paso 2: Registrar el usuario en la tabla de Alumnos
      const alumnoData = {
        user: userId,
      };

      const alumnoResponse = await fetch(
        `http://127.0.0.1:8000/api/alumnos/${id}/`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(alumnoData),
        }
      );

      if (!alumnoResponse.ok) {
        throw new Error("Error al registrar el alumno");
      }

      const alumno = await alumnoResponse.json();
      console.log("Alumno acutalizado:", alumno);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const formData = async (data) => {
    console.log(data);
    const usuario = {
      username: data.username,
      password: data.password,
      email: "",
      first_name: "",
      last_name: "",
      is_active: true,
      is_staff: false,
      is_superuser: false,
    };
    console.log(usuario);
    console.log(alumnoFiltrado.id);
    showAlert({
      title: "¿Estás seguro de registrar esta cuenta?",
      text: "",
      confirmText: "Sí, registrar!",
      onConfirm: async () => {
        await registerUserAndAlumno(usuario, alumnoFiltrado.id);
        setAlumnoFiltrado("");
        setCodigo("");
        reset();
      },
    });
  };
  // Función para Buscar si es Egresado el alumno
  const [codigo, setCodigo] = useState("");
  const [alumnoFiltrado, setAlumnoFiltrado] = useState("");
  const [isEgresado, setIsEgresado] = useState(false);

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
        toast("El alumno(a) aún no ha egresado", {
          type: "warning",
        });
      } else {
        setIsEgresado(true);
        setValue("alumno", data[0].id);
        console.log(data[0].id);
      }
      setAlumnoFiltrado(data[0]);
    }
  };
  console.log(errors);
  return (
    <div className="flex flex-col gap-3">
      <CardUser>
        <section className="mb-2 text-sm">
          <div className="flex items-center py-4">
            <span className="mr-2 text-lg xl:text-xl font-bold">
              Búsqueda de Alumno *
            </span>
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
            <div className="flex flex-col gap-3">
              <label>Nombre:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.nombre}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>Apellido Paterno:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.apellido_paterno}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>Apellido Materno:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.apellido_materno}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>DNI:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.dni}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>Carrera:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.carrera_data?.nombre}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label>Estado:</label>
              <div className="block w-full rounded-[.25rem] border border-primary py-3 px-5 text-gray-900 ring-inset ring-gray-300 placeholder:text-gray-400 focus:shadow-sm sm:text-sm sm:leading-6 outline-0 h-12 bg-primary bg-opacity-5">
                {alumnoFiltrado?.estado_data?.nombre}
              </div>
            </div>
          </div>
        </section>
      </CardUser>
      <CardUser>
        <div className="flex items-center py-4">
          <span className="mr-2 text-xl font-bold">Búsqueda de Alumno *</span>
          <hr className="flex-grow border-t border-gray-200" />
        </div>
        <form
          onSubmit={handleSubmit(formData)}
          className="flex flex-col gap-8 text-sm"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3 lg:col-span-2">
              <label htmlFor="username">Nombre de Usuario:</label>
              <Input
                type="text"
                id="username"
                name="username"
                placeholder="Ingresa el username"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.username && (
                <span className="text-sm text-required ml-3">
                  {errors.username.message}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3 lg:col-span-2">
              <label htmlFor="password">Contraseña:</label>
              <Input
                type="text"
                id="password"
                name="password"
                placeholder="Ingresa el password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.password && (
                <span className="text-sm text-required ml-3">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                id="email"
                name="email"
                placeholder="Ingresa el email"
                {...register("email", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.email && (
                <span className="text-sm text-required ml-3">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="first_name">First Name</label>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Ingresa el first_name"
                {...register("first_name", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.first_name && (
                <span className="text-sm text-required ml-3">
                  {errors.first_name.message}
                </span>
              )}
            </div>
            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="last_name">Last Name</label>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Ingresa el last_name"
                {...register("last_name", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.last_name && (
                <span className="text-sm text-required ml-3">
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="is_active">¿Está Activo?</label>
              <Input
                type="text"
                id="is_active"
                name="is_active"
                placeholder="Ingresa el is_active"
                {...register("is_active", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.is_active && (
                <span className="text-sm text-required ml-3">
                  {errors.is_active.message}
                </span>
              )}
            </div>
            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="is_staff">¿Es Administrador?</label>
              <Input
                type="text"
                id="is_staff"
                name="is_staff"
                placeholder="Ingresa el is_staff"
                {...register("is_staff", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.is_staff && (
                <span className="text-sm text-required ml-3">
                  {errors.is_staff.message}
                </span>
              )}
            </div>
            <div className="gap-3 lg:col-span-1 hidden">
              <label htmlFor="is_superuser">¿Es Super Usuario?</label>
              <Input
                type="text"
                id="is_superuser"
                name="is_superuser"
                placeholder="Ingresa el is_superuser"
                {...register("is_superuser", {
                  required: {
                    value: false,
                    message: "Campo requerido*",
                  },
                })}
              />
              {errors.is_superuser && (
                <span className="text-sm text-required ml-3">
                  {errors.is_superuser.message}
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
            </div>
          </div>
          <div className="md:flex md:justify-end">
            <button
              type="submit"
              className={`w-full md:w-40 text-white p-3 font-semibold  rounded-md ${
                isEgresado === true ? "bg-primary" : "bg-gray-600"
              }`}
              disabled={isEgresado === true ? false : true}
              // className="w-full md:w-40 text-white p-3 font-semibold bg-primary rounded-primary"
            >
              Registrar
            </button>
          </div>
        </form>
      </CardUser>
    </div>
  );
};
