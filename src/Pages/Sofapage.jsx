import React from "react";
import "../Styles/OurProduct.css";
import Card from "../component/Card";
import sofa1 from "../assets/Sofaimg/sofa1.png";
import sofa2 from "../assets/Sofaimg/sofa2.png";
import sofa3 from "../assets/Sofaimg/sofa3.png";
import sofa4 from "../assets/Sofaimg/sofa4.png";
import sofa5 from "../assets/Sofaimg/sofa5.png";
import sofa6 from "../assets/Sofaimg/sofa6.png";
import Sofa7 from "../assets/Sofaimg/Sofa7.png";
import Sofa8 from "../assets/Sofaimg/Sofa8.png";

import Footer from "../component/Footer";
import { Link } from "react-router-dom";
import Navbarf from "../component/Navbarframe";
const SofaPage = () => {
  return (
    <>
    <Navbarf/>
      <div className="st">
        <p className="st">Study Table</p>
      </div>
      <div className="pt">
        <p className="pt">
          Upgrade your study space with our stylish and practical study table
        </p>
      </div>
      {/* Card Section */}
      <div className="FirstThree" style={{textDecoration:'none'}}>
        <Link to="/Sofa1" className="card-link">
          <Card ImageSrc={sofa1} title="Sofa" price="₹33000" />
        </Link>
        <Link to="/Sofa2" className="card-link">
          <Card ImageSrc={sofa2} title="Sofa" price="₹44000" />
        </Link>
        <Link to="/Sofa3" className="card-link">
          <Card ImageSrc={sofa3} title="Sofa" price="₹55000" />
        </Link >
        <Link to="/Sofa4" className="card-link">
          <Card ImageSrc={sofa4} title="Sofa" price="₹66000" />
        </Link>
      </div>
      <div className="SecondThree">
        <Link to="/Sofa5" className="card-link">
          <Card ImageSrc={sofa5} title="Sofa" price="₹62000" />
        </Link>
        <Link to="/Sofa6" className="card-link">
          <Card ImageSrc={sofa6} title="Sofa" price="₹78000" />
        </Link>
        <Link to="/Sofa7" className="card-link">
          <Card ImageSrc={Sofa7} title="Sofa" price="₹12000" />
        </Link>
        <Link to="/Sofa8" className="card-link">
          <Card ImageSrc={Sofa8} title="Sofa" price="₹22000" />
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default SofaPage;
