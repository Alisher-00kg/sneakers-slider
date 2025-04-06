import { useState } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [state, setState] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  };

  const addToFavorite = (item) => {
    setState((prevState) => {
      if (prevState.some((fav) => fav.id === item.id)) {
        return prevState.filter((fav) => fav.id !== item.id);
      } else {
        return [...prevState, item];
      }
    });
  };

  return { state, cart, addToCart, addToFavorite, removeFromCart };
}
