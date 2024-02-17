import React from "react";
import "../Styles/OurProduct.css";
import Card from "../component/Card";
import Study1 from "../assets/StudyTable/Study1.png";
import Study2 from "../assets/StudyTable/Study2.png";
import Study3 from "../assets/StudyTable/Study3.png";
import Study4 from "../assets/StudyTable/Study4.png";
import Study5 from "../assets/StudyTable/Study5.png";
import Study6 from "../assets/StudyTable/Study6.png";
import Footer from "../component/Footer";
import Navbarf from "../component/Navbarframe";
const Studytable = () => {
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
      <div className="FirstThree">
        <Card ImageSrc={Study1} title="StudyTable" price="₹3000" />
        <Card ImageSrc={Study2} title="StudyTable" price="₹4000" />
        <Card ImageSrc={Study3} title="StudyTable" price="₹5000" />
        <Card ImageSrc={Study4} title="StudyTable" price="₹6000" />

      </div>
      <div className="SecondThree">
        <Card ImageSrc={Study4} title="StudyTable" price="₹6000" />
        <Card ImageSrc={Study5} title="StudyTable" price="₹6000" />
        <Card ImageSrc={Study6} title="StudyTable" price="₹6000" />
        <Card ImageSrc={Study6} title="StudyTable" price="₹6000" />
      </div>
      <Footer/>
    </>
  );
};
export default Studytable;
