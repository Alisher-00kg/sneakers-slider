import React, { createContext, useContext, useState } from "react";

const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [state, setState] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleItem = (item, currentList, setList) => {
    const isItemInList = currentList.some(
      (listItem) => listItem.id === item.id
    );
    if (isItemInList) {
      setList((prev) => prev.filter((listItem) => listItem.id !== item.id));
    } else {
      setList((prev) => [...prev, item]);
    }
  };

  const addToFavorite = (item) => {
    toggleItem(item, state, setState);
  };

  const addToCart = (item) => {
    toggleItem(item, cart, setCart);
  };

  const removeFromCart = (item) => {
    setCart((prev) => prev.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CardContext.Provider
      value={{ state, addToFavorite, cart, addToCart, removeFromCart }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CardContext);
  if (!context) {
  }
  return context;
};
