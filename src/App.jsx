import React from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";

// Pages
import Shop from "./pages/Shop";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <main className="container">
        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
