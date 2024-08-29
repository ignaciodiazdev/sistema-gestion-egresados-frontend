import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCertificados } from "../../../hooks/useCertificados";
import { Input } from "../../../shared/components";
import { toast } from "react-toastify";
import { useAuth } from "../../../auth/hooks/useAuth";
import { useModal } from "../../../shared/hooks/useModal";
import { showAlert } from "../../../utils/showAlert";

export const FormCertificado = ({ certificado, setRefresh }) => {
  const { updateCertificado, postCertificado } = useCertificados();
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
      nombre: "",
      entidad_emisora: "",
      fecha_emision: "",
      url: "",
      alumno: "",
    },
  });

  const formData = async (data) => {
    const certificadoNewData = {
      nombre: data.nombre,
      entidad_emisora: data.entidad_emisora,
      fecha_emision: data.fecha_emision,
      url: data.url,
      alumno: userInfo.id,
    };

    if (!certificado) {
      showAlert({
        title: "¿Estás seguro de registrar?",
        text: "",
        confirmText: "Sí, registrar!",
        onConfirm: () => {
          postCertificado(certificadoNewData);
          reset();
          closeModal();
          setRefresh((prev) => !prev);
        },
      });
    } else {
      const response = await updateCertificado(
        certificado.id,
        certificadoNewData
      );
      if (response.ok) {
        showAlert({
          title: "¿Estás seguro de editar?",
          text: "",
          confirmText: "Sí, editar!",
          onConfirm: () => {
            closeModal();
            setRefresh((prev) => !prev);
          },
        });
      }
    }
  };

  useEffect(() => {
    if (certificado) {
      setValue("nombre", certificado.nombre);
      setValue("entidad_emisora", certificado.entidad_emisora);
      setValue("fecha_emision", certificado.fecha_emision);
      setValue("url", certificado.url);
      setValue("alumno", userInfo.id);
    } else {
      reset({
        nombre: "",
        entidad_emisora: "",
        fecha_emision: "",
        url: "",
        alumno: userInfo.id,
      });
    }
  }, [certificado, setValue, userInfo]);

  return (
    <form onSubmit={handleSubmit(formData)} className="flex flex-col gap-8">
      <div>
        <h2 className="text-xl font-bold my-2 xl:text-2xl">
          {certificado ? "Edición de Certificado " : "Registro de Certificado"}
        </h2>
        <hr />
      </div>
      <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 text-left text-sm">
        <div className="flex flex-col gap-3">
          <label htmlFor="nombre">Título de Certificado:</label>
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
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.nombre.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="entidad_emisora">Entidad emisora:</label>
          <Input
            type="text"
            id="entidad_emisora"
            name="entidad_emisora"
            placeholder="Ingresa el entidad_emisora"
            {...register("entidad_emisora", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.entidad_emisora && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.entidad_emisora.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="fecha_emision">Fecha de emisión:</label>
          <Input
            type="date"
            id="fecha_emision"
            name="fecha_emision"
            placeholder="Ingresa el fecha_emision"
            {...register("fecha_emision", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.fecha_emision && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.fecha_emision.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="url">URL de credencial:</label>
          <Input
            type="text"
            id="url"
            name="url"
            placeholder="Ingresa el url"
            {...register("url", {
              required: {
                value: true,
                message: "Campo requerido*",
              },
            })}
          />
          {errors.url && (
            <span className="text-sm text-required text-opacity-75 ml-3">
              {errors.url.message}
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
          {certificado ? "Editar" : "Registrar"}
        </button>
      </div>
    </form>
  );
};
