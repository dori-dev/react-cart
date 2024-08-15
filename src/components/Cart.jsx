import React from "react";

function Cart({ show, close }) {
  return (
    <>
      {show ? (
        <div
          className="modal fade show"
          tabIndex={-1}
          style={{ display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-dark">
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
              <div className="modal-body bg-dark">
                <p>The Product one, price 44, count 8</p>
                <p>The Product two, price 44, count 3</p>
                <p>The Product three, price 44, count 1</p>
              </div>
              <div className="modal-footer bg-dark">
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
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Cart;
