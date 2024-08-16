import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar></Navbar>
      <main className="container">
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </main>
    </CartProvider>
  );
}

export default App;
