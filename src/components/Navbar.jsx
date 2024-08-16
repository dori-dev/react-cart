import React, { useState, useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

import Cart from "./Cart";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const cart = useContext(CartContext);
  const cartItemsCount = cart.items.length;

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
          <Link className="navbar-brand" to="/">
            Shopping
          </Link>
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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button
                  onClick={handleShow}
                  type="button"
                  className="nav-link align-self-center"
                >
                  <BsCart className="mx-1 mb-1"></BsCart>
                  Cart ({cartItemsCount})
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 border-black"
                type="search"
                placeholder="Type Something..."
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
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
