import { useModal } from "../hooks/useModal";

export const Modal = ({ children }) => {
  const { closeModal } = useModal();

  return (
    <div
      className="fixed left-0 top-0 z-21 flex h-full min-h-screen w-full items-center justify-center bg-primary/25 px-4 py-5 z-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className="rounded-lg bg-white p-6 text-center md:p-10 overflow-y-scroll w-full max-h-[500px] lg:max-w-[700px] xl:max-w-[770px] xl:max-h-[670px] relative">
        {children}
        <div
          className="absolute top-4 right-2 bg-third px-2 py-0 sm:px-3 sm:py-1 text-white rounded-lg cursor-pointer"
          onClick={closeModal}
        >
          x
        </div>
      </div>
    </div>
  );
};
