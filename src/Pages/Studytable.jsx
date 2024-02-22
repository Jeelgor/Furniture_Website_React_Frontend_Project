import React from "react";
import Card from "../component/Card";
import Study1 from "../assets/StudyTable/Study1.png";
import Study2 from "../assets/StudyTable/Study2.png";
import Study3 from "../assets/StudyTable/Study3.png";
import Study4 from "../assets/StudyTable/Study4.png";
import Study5 from "../assets/StudyTable/Study5.png";
import Study6 from "../assets/StudyTable/Study6.png";
import Footer from "../component/Footer";
import Navbarf from "../component/Navbarframe";
import { Link } from "react-router-dom";
const Studytable = () => {
  return (
    <>
      <Navbarf />
      <p className="mt-0 ml-[730px] font-bold text-2xl">Chose Your Sofa</p>
      <div className="pt">
        <p className="ml-[580px] font-semibold">
          Upgrade your study space with our stylish and practical study table
        </p>
      </div>

      <div className="flex">
        <Link to="/studytbl1">
          <Card ImageSrc={Study1} title="StudyTable" price="₹3000" />
        </Link>
        <Link>
          <Card ImageSrc={Study2} title="StudyTable" price="₹4000" />
        </Link>
        <Link>
          <Card ImageSrc={Study3} title="StudyTable" price="₹5000" />
        </Link>
        <Link>
          <Card ImageSrc={Study4} title="StudyTable" price="₹6000" />
        </Link>
      </div>
      <div className="flex">
        <Link>
          <Card ImageSrc={Study4} title="StudyTable" price="₹6000" />
        </Link>
        <Link>
          <Card ImageSrc={Study5} title="StudyTable" price="₹6000" />
        </Link>
        <Link>
          <Card ImageSrc={Study6} title="StudyTable" price="₹6000" />
        </Link>
        <Link>
          <Card ImageSrc={Study6} title="StudyTable" price="₹6000" />
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default Studytable;
