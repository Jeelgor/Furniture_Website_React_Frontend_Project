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
import Sofa1 from "./SofaCardPages/Sofa1";
import Sofa2 from "./SofaCardPages/Sofa2";
import Sofa3 from "./SofaCardPages/Sofa3";
import Sofa4 from "./SofaCardPages/Sofa4";
import Sofa5 from "./SofaCardPages/Sofa5";
import Sofa6 from "./SofaCardPages/Sofa6";
import Sofa7 from "./SofaCardPages/Sofa7";
import Sofa8 from "./SofaCardPages/Sofa8";


function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <Home/> */}

      <Navbarf />
      {/* <UserDetailPage/> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartShop />} />
        <Route path="/ChairPage" element={<ChairPage />} />
        <Route path="/SofaPage" element={<Sofapage />} />
        <Route path="/StudyTable" element={<Studytable />} />
        <Route path="/Sofa1" element={<Sofa1 />} />
        <Route path="/Sofa2" element={<Sofa2 />} />
        <Route path="/Sofa3" element={<Sofa3 />} />
        <Route path="/Sofa4" element={<Sofa4 />} />
        <Route path="/Sofa5" element={<Sofa5 />} />
        <Route path="/Sofa6" element={<Sofa6 />} />
        <Route path="/Sofa7" element={<Sofa7 />} />
        <Route path="/Sofa8" element={<Sofa8 />} />
      </Routes>
    </>
  );
}

export default App;
