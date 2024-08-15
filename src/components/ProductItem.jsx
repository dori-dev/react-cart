import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

function ProductItem({ product }) {
  const cart = useContext(CartContext);
  const quantity = cart.getProductQuantity(product.id);
  return (
    <div
      className="card card-bg text-white border-light"
      style={{ width: "18rem" }}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} className="card-img-top" alt={product.title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.price} Toman</p>
        {quantity > 0 ? (
          <div className="row">
            <div className="col-5">
              <button
                type="button"
                onClick={() => cart.removeItemFromCart(product.id)}
                className="btn btn-sm btn-secondary w-100"
              >
                -
              </button>
            </div>
            <div className="col-2 text-center align-self-center">
              <span className="w-100">{quantity}</span>
            </div>
            <div className="col-5">
              <button
                type="button"
                onClick={() => cart.addItemToCart(product.id)}
                className="btn btn-sm btn-secondary w-100"
              >
                +
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => cart.addItemToCart(product.id)}
            className="btn btn-primary w-100"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
