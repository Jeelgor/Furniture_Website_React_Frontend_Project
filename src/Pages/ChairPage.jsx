import React from "react";
import "../Styles/OurProduct.css";
import Card from "../component/Card";
import chair1 from "../assets/Chair/chair1.png";
import chair2 from "../assets/Chair/chair2.png";
import chair3 from "../assets/Chair/chair3.png";
import chair4 from "../assets/Chair/chair4.png";
import chair5 from "../assets/Chair/chair5.png";
import chair6 from "../assets/Chair/chair6.png";
import chair7 from "../assets/Chair/chair7.png";
import chair8 from "../assets/Chair/chair8.png";

import Footer from "../component/Footer";
import Navbarf from "../component/Navbarframe";
import { Link } from "react-router-dom";
const ChairPage = () => {
  return (
    <>
      <Navbarf />
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
        <Link to="/Chair1">
          <Card ImageSrc={chair1} title="Chair" price="₹3000" />
        </Link >
        <Link to="/Chair2">
          <Card ImageSrc={chair2} title="Chair" price="₹4000" />
        </Link>
        <Link to="/Chair3">
          <Card ImageSrc={chair1} title="Chair" price="₹3000" />
        </Link>
        <Link to="/Chair4">
          <Card ImageSrc={chair4} title="Chair" price="₹6000" />
        </Link>



      </div>
      <div className="SecondThree">
        <Link to="/Chair5">
          <Card ImageSrc={chair5} title="Chair" price="₹7000" />

        </Link>
        <Link to="/Chair6">
          <Card ImageSrc={chair6} title="Chair" price="₹8000" />

        </Link>
        <Link to="/Chair7">
          <Card ImageSrc={chair7} title="Chair" price="₹9000" />

        </Link>
        <Link to="/Chair8">
          <Card ImageSrc={chair8} title="Chair" price="₹10000" />

        </Link>
      </div>
      <Footer />
    </>
  );
};
export default ChairPage;
