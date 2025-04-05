import { createContext, useState, useContext } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const [modal, setModal] = useState([]);

  const addFavoriteModal = (item) => {
    setState((e) => {
      const itemModal = e.some((itemCart) => itemCart.id === item.id);

      if (itemModal) {
        return e.filter((itemCart) => itemCart.id !== item.id);
      } else {
        return [...e, item];
      }
    });
  };

  const addCartModal = (item) => {
    setState((e) => {
      const itemModal = e.some((itemCart) => itemCart.id === item.id);

      if (itemModal) {
        return e.filter((itemCart) => itemCart.id !== item.id);
      } else {
        return [...e, item];
      }
    });
  };

  return (
    <ModalContext.Provider
      value={{ state, modal, addCartModal, addFavoriteModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export const useModal = () => {
  const state = useContext(ModalContext);
  return state;
};
