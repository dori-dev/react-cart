import React, { useState } from "react";
import { BsCart } from "react-icons/bs";

import Cart from "./Cart";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar light-nav navbar-expand-lg bg-body-tertiary mb-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Shopping
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleShow}
                  type="button"
                  className="nav-link align-self-center"
                >
                  <BsCart className="mx-1 mb-1"></BsCart>
                  Cart
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <Cart show={showModal} close={handleClose} />
    </>
  );
}

export default Navbar;
