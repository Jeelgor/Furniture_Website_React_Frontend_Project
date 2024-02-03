// App.jsx
import React from "react";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import CartShop from "./component/CartShop";
import Navbarf from "./component/Navbarframe";
import ChairPage from "./Pages/ChairPage";
import Sofapage from "./Pages/Sofapage";
import Studytable from "./Pages/Studytable";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Navbarf/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartShop />} />
        <Route path="/ChairPage" element={<ChairPage/>} />
        <Route path="/SofaPage" element={<Sofapage/>} />
        <Route path="/StudyTable" element={<Studytable/>} />
      </Routes>
    </>
  );
}

export default App;
