import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

import CartItem from "./CartItem";

function Cart({ close }) {
  const cart = useContext(CartContext);
  return (
    <div className="modal fade show" tabIndex={-1} style={{ display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header cart-bg">
            <h1 className="modal-title fs-5" id="exampleModalLiveLabel">
              Cart
            </h1>
            <button
              type="button"
              className="btn-close  btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            />
          </div>
          <div className="modal-body cart-bg">
            {cart.items.length === 0 ? (
              <h5>The cart is empty...</h5>
            ) : (
              <>
                {cart.items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
                <div className="mt-5">
                  <h6 className="total-price">
                    Total price: {cart.getTotalAmount()}$
                  </h6>
                </div>
              </>
            )}
          </div>
          <div className="modal-footer cart-bg">
            <div className="row w-100">
              <div className="col-5">
                <button
                  onClick={close}
                  type="button"
                  className="btn btn-secondary w-100"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="col-7">
                <button type="button" className="btn btn-primary w-100">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
