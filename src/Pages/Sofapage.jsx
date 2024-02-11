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
const SofaPage = () => {
  return (
    <>
      <div className="st">
        <p className="st">Study Table</p>
      </div>
      <div className="pt">
        <p className="pt">
          Upgrade your study space with our stylish and practical study table
        </p>
      </div>
      {/* Card Section */}
      <div className="FirstThree">
        <Link to="/AddToCart" className="card-link">
          <Card ImageSrc={sofa1} title="Sofa" price="₹33000" />
        </Link>
        <Card ImageSrc={sofa2} title="Sofa" price="₹44000" />
        <Card ImageSrc={sofa3} title="Sofa" price="₹55000" />
        <Card ImageSrc={sofa4} title="Sofa" price="₹66000" />

      </div>
      <div className="SecondThree">
        <Card ImageSrc={sofa5} title="Sofa" price="₹62000" />
        <Card ImageSrc={sofa6} title="Sofa" price="₹78000" />
        <Card ImageSrc={Sofa7} title="Sofa" price="₹12000" />
        <Card ImageSrc={Sofa8} title="Sofa" price="₹22000" />
      </div>
      <Footer />
    </>
  );
};
export default SofaPage;



