// App.jsx
import React from "react";
import HomePage from './HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
// import Home from "./component/Home";
import CartShop from "./component/CartShop";
import ChairPage from "./Pages/ChairPage";
import Sofapage from "./Pages/Sofapage";
import Studytable from "./Pages/Studytable";
// import Sofa1 from "./SofaCardPages/Sofa1";
// import Sofa2 from "./SofaCardPages/Sofa2";
// import Sofa3 from "./SofaCardPages/Sofa3";
// import Sofa4 from "./SofaCardPages/Sofa4";
// import Sofa5 from "./SofaCardPages/Sofa5";
// import Sofa6 from "./SofaCardPages/Sofa6";
// import Sofa7 from "./SofaCardPages/Sofa7";
// import Sofa8 from "./SofaCardPages/Sofa8";
import CheckOutPage from "./Pages/CheckOutPage";
import Chair1 from "./ChairPage/Chair1";
import Chair2 from "./ChairPage/Chair2";
import Chair3 from "./ChairPage/Chair3";
import Chair4 from "./ChairPage/Chair4";
import Chair5 from "./ChairPage/Chair5";
import Chair8 from "./ChairPage/Chair8";
import Chair7 from "./ChairPage/Chair7";
import Chair6 from "./ChairPage/Chair6";
import SofaDetail from "./component/SofaDetail";


function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <Home/> */}

      {/* <Navbarf /> */}
      {/* <UserDetailPage/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartShop />} />
        <Route path="/ChairPage" element={<ChairPage />} />
        <Route path="/SofaPage" element={<Sofapage />} />
        <Route path="/StudyTable" element={<Studytable />} />
        <Route path="/sofa/:id"  component={SofaDetail} />

        {/* <Route path="/Sofa1" element={<Sofa1 />} />
        <Route path="/Sofa2" element={<Sofa2 />} />  
        <Route path="/Sofa3" element={<Sofa3 />} />
        <Route path="/Sofa4" element={<Sofa4 />} />
        <Route path="/Sofa5" element={<Sofa5 />} />
        <Route path="/Sofa6" element={<Sofa6 />} />
        <Route path="/Sofa7" element={<Sofa7 />} />
        <Route path="/Sofa8" element={<Sofa8 />} /> */}
        <Route path="/Chair1" element={<Chair1 />} />
        <Route path="/Chair2" element={<Chair2 />} />
        <Route path="/Chair3" element={<Chair3 />} />
        <Route path="/Chair4" element={<Chair4 />} />
        <Route path="/Chair5" element={<Chair5 />} />
        <Route path="/Chair6" element={<Chair6 />} />
        <Route path="/Chair7" element={<Chair7 />} />
        <Route path="/Chair8" element={<Chair8 />} />
        <Route path="/CheckOutPage" element={<CheckOutPage/>} />
      </Routes>
    </>
  );
}

export default App;
