import React from "react";
import { Link } from "react-router-dom";

function ProductItem({ product }) {
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
        <Link to={`/product/${product.id}`} className="btn btn-primary">
          Add To Cart
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
