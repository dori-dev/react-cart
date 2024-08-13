import React from "react";

import ProductItem from "../components/ProductItem";
import { productList } from "../data/items";

function Shop() {
  return (
    <div>
      <h2>React Shopping Cart</h2>
      <div className="row align-items-center">
        {productList.map((item) => (
          <div
            key={item.id}
            className="col-xs-1 col-md-4 g-4 align-items-center"
          >
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
