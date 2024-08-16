import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";

import { getProductData } from "../data/items";
import { CartContext } from "../context/CartContext";

function CartItem({ item }) {
  const product = getProductData(item.id);
  const cart = useContext(CartContext);
  return (
    <div className="row mb-4 mt-2 cart-item justify-content-center">
      <div className="col-2">
        <img src={product.image} className="card-img-top" alt={product.title} />
      </div>
      <div className="col-5">{product.title}</div>
      <div className="col-1">x{item.quantity}</div>
      <div className="col-2">{product.price * item.quantity}$</div>
      <div className="col-1">
        <button
          type="button"
          onClick={() => cart.deleteFromCart(product.id)}
          className="btn btn-sm btn-danger"
        >
          <FaTrash></FaTrash>
        </button>
      </div>
    </div>
  );
}

export default CartItem;
