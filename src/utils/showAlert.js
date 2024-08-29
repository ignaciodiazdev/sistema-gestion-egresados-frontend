import Swal from "sweetalert2";

export const showAlert = ({
  title,
  text,
  icon,
  confirmText,
  cancelText,
  onConfirm,
}) => {
  Swal.fire({
    title: title || "¿Está seguro?",
    text: text || "No podrás revertir esta acción",
    icon: icon || "warning",
    showCancelButton: true,
    confirmButtonColor: "#3C50E0",
    cancelButtonColor: "#d33",
    cancelButtonText: cancelText || "No, cancelar",
    confirmButtonText: confirmText || "Sí, eliminar!",
  }).then((result) => {
    if (result.isConfirmed) {
      onConfirm();
      Swal.fire({
        title: "¡Acción realizada!",
        text: "Se ha ejecutado correctamente",
        icon: "success",
      });
    }
  });
};
