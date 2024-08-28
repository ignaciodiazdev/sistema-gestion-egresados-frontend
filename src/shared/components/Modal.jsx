import { useModal } from "../hooks/useModal";

export const Modal = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <div className="fixed left-0 top-0 z-21 flex h-full min-h-screen w-full items-center justify-center bg-primary/25 px-4 py-5">
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) closeModal();
        }}
        className="max-w-[700px]  rounded-lg bg-white p-6 text-center md:p-10 overflow-y-scroll max-h-[500px] xl:max-h-[700px]"
      >
        {children}
        <div className="-mx-3 flex flex-col gap-y-4 md:flex-row text-sm xl:text-base mt-5">
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              onClick={closeModal}
              className="block w-full rounded border border-stroke bg-gray p-3 text-center font-medium text-black transition hover:border-red-600 hover:bg-red-600 hover:text-white"
            >
              Cancelar
            </button>
          </div>
          <div className="w-full px-3 2xsm:w-1/2">
            <button
              // onClick={onConfirm}
              className="block w-full rounded border border-primary bg-primary p-3 text-center font-medium text-white transition hover:bg-opacity-90"
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
