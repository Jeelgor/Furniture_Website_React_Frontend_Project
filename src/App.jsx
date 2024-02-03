// App.jsx
import React from "react";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import CartShop from "./component/CartShop";
import Navbarf from "./component/Navbarframe";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Navbarf/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartShop />} />
      </Routes>
    </>
  );
}

export default App;
