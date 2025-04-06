import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => setIsOpenModal(true);

  const closeModal = () => setIsOpenModal(false);

  return (
    <ModalContext.Provider value={{ isOpenModal, closeModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  const state = useContext(ModalContext);
  return state;
};
