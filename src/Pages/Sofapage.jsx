// SofaPage.jsx
import React from "react";
import Card from "../component/Card";
import sofa1 from "../assets/Sofaimg/sofa1.png";
import sofa2 from "../assets/Sofaimg/sofa2.png";
import sofa3 from "../assets/Sofaimg/sofa3.png";
import sofa4 from "../assets/Sofaimg/sofa4.png";
import sofa5 from "../assets/Sofaimg/sofa5.png";
import sofa6 from "../assets/Sofaimg/sofa6.png";
import Sofa7 from "../assets/Sofaimg/Sofa7.png";
import Sofa8 from "../assets/Sofaimg/Sofa8.png";
import { Link } from "react-router-dom";
import Navbarf from "../component/Navbarframe";
import Footer from "../component/Footer";

const SofaPage = () => {
  // const sofas = [
  //   { id: 1, title: "Sofa 1", price: "₹33000", description: "Description 1", image: sofa1 },
  //   { id: 2, title: "Sofa 2", price: "₹33000", description: "Description 2", image: sofa1 },
  //   // ... (other sofa data)
  // ];

  return (
    <>
      <Navbarf />
        <p className="mt-0 ml-[750px] font-bold text-2xl">Study Table</p>
        <p className="ml-[580px] font-semibold ">
          Upgrade your study space with our stylish and practical Morden Sofa
        </p>
      {/* Card Section */}
      <div className="flex">
        <Link to="/Sofa1" className="text-black">
          <Card ImageSrc={sofa1} title="Sofa" price="₹3000" />
        </Link >
        <Link to="/Sofa2" className="text-black">
          <Card ImageSrc={sofa2} title="Sofa" price="₹4000" />
        </Link>
        <Link to="/Sofa3" className="text-black">
          <Card ImageSrc={sofa3} title="Sofa" price="₹3000" />
        </Link>
        <Link to="/Sofa4" className="text-black">
          <Card ImageSrc={sofa4} title="Sofa" price="₹6000" />
        </Link>



      </div>
      <div className="flex">
        <Link to="/Sofa5" className="text-black">
          <Card ImageSrc={sofa5} title="Sofa" price="₹7000" />

        </Link>
        <Link to="/Sofa6" className="text-black"> 
          <Card ImageSrc={sofa6} title="Sofa" price="₹8000" />

        </Link>
        <Link to="/Sofa7" className="text-black">
          <Card ImageSrc={Sofa7} title="Sofa" price="₹9000" />

        </Link>
        <Link to="/Sofa8" className="text-black">
          <Card ImageSrc={Sofa8} title="Sofa" price="₹10000" />

        </Link>
      </div>
      <Footer />
    </>
  );
};

export default SofaPage;
