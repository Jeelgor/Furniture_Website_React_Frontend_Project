// App.jsx
import React, { useState } from "react";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import CartShop from "./component/CartShop";
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
import Chair1 from "./ChairPage/Chair1";
import Chair2 from "./ChairPage/Chair2";
import Chair3 from "./ChairPage/Chair3";
import Chair4 from "./ChairPage/Chair4";
import Chair5 from "./ChairPage/Chair5";
import Chair8 from "./ChairPage/Chair8";
import Chair7 from "./ChairPage/Chair7";
import Chair6 from "./ChairPage/Chair6";
import Study1 from "./StudyTablePage/Study1";
import Study6 from "./StudyTablePage/Study6";
import Study5 from "./StudyTablePage/Study5";
import Study4 from "./StudyTablePage/Study4";
import Study3 from "./StudyTablePage/Study3";
import Study2 from "./StudyTablePage/Study2";
import SignUp from "./Authentication/SignUp";
import LoginPage from "./Authentication/LoginPage";
import LoginData from "./Admin/LoginData";
import Adminlogin from "./Admin/Adminlogin";
import OrdersData from "./Admin/OrdersData";
import Adminnav from "./Admin/Adminnav";
import Addproduct from "./Admin/AddProduct";


function App() {
  const [user, setUser] = useState(null);
  return (
    <>
     
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Addproduct" element={<Addproduct />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/SofaPage" element={<Sofapage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/cart" element={<CartShop />} />
        <Route path="/Adminlogin" element={<Adminlogin />} />
        <Route path="/Adminnav" element={<Adminnav />} />
        <Route path="/OrdersData" element={<OrdersData />} />
        <Route path="/LoginData" element={<LoginData />} />
        <Route path="/SignUp" element={<SignUp />} />
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
        <Route path="/Chair1" element={<Chair1 />} />
        <Route path="/Chair2" element={<Chair2 />} />
        <Route path="/Chair3" element={<Chair3 />} />
        <Route path="/Chair4" element={<Chair4 />} />
        <Route path="/Chair5" element={<Chair5 />} />
        <Route path="/Chair6" element={<Chair6 />} />
        <Route path="/Chair7" element={<Chair7 />} />
        <Route path="/Chair8" element={<Chair8 />} />

        <Route path="/Study1" element={<Study1 />} />
        <Route path="/Study2" element={<Study2 />} />
        <Route path="/Study3" element={<Study3 />} />
        <Route path="/Study4" element={<Study4 />} />
        <Route path="/Study5" element={<Study5 />} />
        <Route path="/Study6" element={<Study6 />} />
      </Routes>
    </>
  );
}

export default App;
