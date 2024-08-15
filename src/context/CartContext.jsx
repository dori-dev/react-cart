import { createContext, useState } from "react";

import { getProductData } from "../data/items";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addItemToCart: () => {},
  deleteFromCart: () => {},
  removeItemFromCart: () => {},
  getTotalAmount: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addItemToCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      const item = {
        id: id,
        quantity: 1,
      };
      setCartProducts([...cartProducts, item]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    setCartProducts(cartProducts.filter((item) => item.id != id));
  }

  function removeItemFromCart(id) {
    const quantity = getProductQuantity(id);
    if (quantity > 1) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else if (quantity === 1) {
      deleteFromCart(id);
    }
  }

  function getTotalAmount() {
    let totalAmount = 0;
    cartProducts.map((item) => {
      const productData = getProductData(item.id);
      totalAmount += productData.price * item.quantity;
    });
    return totalAmount;
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    deleteFromCart,
    removeItemFromCart,
    getTotalAmount,
  };
  return (
    <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
  );
}
