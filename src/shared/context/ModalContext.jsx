import { createContext, useState } from "react";
import { Modal } from "../components";

export const ModalContext = createContext({
  modalOpen: undefined,
  modalContent: undefined,
  openModal: () => null,
  closeModal: () => null,
});

export const ModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ modalOpen, modalContent, openModal, closeModal }}
    >
      {children}
      {modalOpen && <Modal>{modalContent}</Modal>}
    </ModalContext.Provider>
  );
};
