"use client";
import { createContext, useState } from "react";
import products from "../data/data.json";
import PropTypes from "prop-types";
import { useLocalStorage } from "react-use";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const totalCart = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((data) => data.id === Number(item));
        total += cartItems[item] * itemInfo.price;
      }
    }
    return total;
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const cartQty = () => {
    Object.values(cartItems).reduce((a, b) => a + b);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    totalCart,
    setCartItems,
    clearCart,
    cartQty,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
